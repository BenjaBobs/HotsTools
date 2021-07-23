import { selector } from 'recoil';

import { s_urlPath } from '../api/state/routing';
import AboutApp from './about/about-app';
import { AppDefinition, ExtendedAppDefinition } from './AppDefinition';
import ChangeLogApp from './changelog/changelog-app';
import DraftSimulatorApp from './draft-simulator/draft-simulator-app';
import GitHubApp from './GitHub-app';
import OverviewApp from './overview/overview-app';

const s_rawApps = [
  OverviewApp,
  DraftSimulatorApp,
  ChangeLogApp,
  AboutApp,
  GitHubApp,
];

export const s_apps = selector({
  key: 'apps',
  get: () => {
    const apps = s_rawApps;

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

export const s_currentApp = selector({
  key: 's_currentApp',
  get: ({ get }) => {
    const path = get(s_urlPath);
    const flatApps = get(s_flatApps);

    for (const app of flatApps) {
      const match = matchPath(path, app.absolutePath);

      if (match.isMatch) {
        return {
          app,
          params: match.params,
        };
      }
    }

    return null;
  },
});

function matchPath(path: string, pattern: string) {
  const pathParts = path.split('/').filter(part => !!part);
  const patternParts = pattern.split('/').filter(part => !!part);

  if (pathParts.length !== patternParts.length) return { isMatch: false };

  const params: { [key: string]: string } = {};
  for (let i = 0; i < pathParts.length; i++) {
    const pathPart = pathParts[i];
    const patternPart = patternParts[i];

    if (patternPart.startsWith(':')) {
      params[patternPart.substring(1)] = pathPart;
    } else if (patternPart.toLowerCase() !== pathPart.toLowerCase()) {
      return { isMatch: false };
    }
  }

  return {
    isMatch: true,
    params: params,
  };
}
