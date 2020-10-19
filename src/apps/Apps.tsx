import { matchPath } from 'react-router-dom';
import { atom, selector } from 'recoil';

import { AppDefinition, ExtendedAppDefinition } from './AppDefinition';
import OverviewApp from './overview/overview-app';
import { s_urlPath } from '../api/state/routing';
import GitHubApp from './GitHub-app';
import DraftSimulatorApp from './draft-simulator/draft-simulator-app';
import AboutApp from './about/about-app';
import ChangeLogApp from './changelog/changelog-app';

const s_rawApps = atom({
  key: 'raw_apps',
  default: [OverviewApp, DraftSimulatorApp, ChangeLogApp, AboutApp, GitHubApp],
});

export const s_apps = selector({
  key: 'apps',
  get: ({ get }) => {
    const apps = get(s_rawApps);

    return __patchApps(apps);

    function __patchApps(
      apps: AppDefinition[],
      parentApp?: ExtendedAppDefinition
    ): ExtendedAppDefinition[] {
      for (const app of apps) {
        const extended = app as ExtendedAppDefinition;

        extended.absolutePath = parentApp
          ? parentApp.absolutePath + '/' + extended.path
          : '/HotsTools' + extended.path;

        if (extended.nestedApps) {
          __patchApps(extended.nestedApps, extended);
        }
      }

      return apps as ExtendedAppDefinition[];
    }
  },
});

export const s_flatApps = selector({
  key: 'appsFlat',
  get: ({ get }) => {
    const apps = get(s_apps);

    return apps.flatMap(__flattenRoutes);

    function __flattenRoutes(
      appDef: ExtendedAppDefinition
    ): ExtendedAppDefinition[] {
      return [appDef, ...(appDef?.nestedApps?.flatMap(__flattenRoutes) || [])];
    }
  },
});

export const s_appMatch = selector({
  key: 'appMatch',
  get: ({ get }) => {
    const path = get(s_urlPath);
    const flatApps = get(s_flatApps);

    for (const app of flatApps) {
      const match = matchPath(path, {
        path: app.absolutePath,
        exact: true,
        strict: false,
      });

      if (match) {
        return {
          match,
          app,
        };
      }
    }

    return {
      match: null,
      app: null,
    };
  },
});

export const s_currentApp = selector({
  key: 'currentApp',
  get: ({ get }) => {
    const appMatch = get(s_appMatch);

    return appMatch?.app;
  },
});

export const s_currentAppParams = selector({
  key: 'currentAppParams',
  get: ({ get }) => {
    const appMatch = get(s_appMatch);
    return appMatch?.match?.params;
  },
});
