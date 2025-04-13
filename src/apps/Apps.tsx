import AboutApp from './about/about-app';
import { AppDefinition, ExtendedAppDefinition } from './AppDefinition';
import ChangeLogApp from './changelog/changelog-app';
import DraftSimulatorApp from './draft-simulator/draft-simulator-app';
import GitHubApp from './GitHub-app';
import OverviewApp from './overview/overview-app';
import { AddressBar } from '@src/utils/AddressBar';
import { NotifyingClass } from '@src/utils/NotifyingClass';

const apps = __patchApps([
  AboutApp,
  OverviewApp,
  DraftSimulatorApp,
  ChangeLogApp,
  GitHubApp,
]);

const flatApps = apps.flatMap(__flattenRoutes);

function __patchApps(
  apps: AppDefinition[],
  parentApp?: ExtendedAppDefinition,
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

function __flattenRoutes(
  appDef: ExtendedAppDefinition,
): ExtendedAppDefinition[] {
  return [appDef, ...(appDef?.nestedApps?.flatMap(__flattenRoutes) || [])];
}

class AppsCls extends NotifyingClass<AppsCls> {
  private _currentApp: ExtendedAppDefinition;
  private _currentPathParams: { [key: string]: string };

  constructor() {
    super();

    const initialMatch = findMatchingApp(AddressBar.path);

    this._currentApp = initialMatch?.app ?? apps[0];
    this._currentPathParams = initialMatch?.params ?? {};

    AddressBar.subscribe(
      () => {
        const match = findMatchingApp(AddressBar.path);

        if (this._currentApp !== match?.app) {
          this._currentApp = match?.app ?? apps[0];
          this._currentPathParams = match?.params ?? {};
          this.notifyListeners();
        }
      },
      state => [state.path],
    );
  }

  public get currentApp() {
    return this._currentApp;
  }

  public get currentPathParams() {
    return this._currentPathParams;
  }

  public get topLevelApps() {
    return apps;
  }
}

export const Apps = new AppsCls();

function findMatchingApp(path: string) {
  for (const app of flatApps) {
    const match = matchPath(path, app.absolutePath);
    if (match.isMatch) return { ...match, app: app };
  }
}

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
