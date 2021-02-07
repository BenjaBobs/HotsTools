import { createBrowserHistory } from 'history';
import { atom, DefaultValue, selector } from 'recoil';

export const browserHistory = createBrowserHistory();

export const s_location = atom({
  key: '_location',
  default: browserHistory.location,
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      // set browserHistory when location is set
      onSet(newLocation => {
        if (!(newLocation instanceof DefaultValue)) {
          browserHistory.push(newLocation);
        }
      });

      // set location when browserHistory is updated
      // also return the unsubscribe function so we are clean
      return browserHistory.listen(locationUpdate => {
        setSelf(locationUpdate.location);
      });
    },
  ],
});

export const s_urlPath = selector<string>({
  key: 'urlPath',
  get: ({ get }) => get(s_location).pathname,
});

export const s_queryParams = selector({
  key: 'queryParams',
  get: ({ get }) => {
    const searchValues = get(s_location).search.slice(1).split('&');

    let paramsObject: { [key: string]: string | string[] } = {};

    for (const kvp of searchValues) {
      const [key, value] = kvp.split('=');

      let current = paramsObject[key];
      if (!current) {
        paramsObject[key] = value;
      } else {
        if (Array.isArray(current)) {
          current.push(value);
        } else {
          current = [current, value];
          paramsObject[key] = current;
        }
      }
    }

    return paramsObject;
  },
});
