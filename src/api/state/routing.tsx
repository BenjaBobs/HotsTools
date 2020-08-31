import React from 'react';
import { createBrowserHistory } from 'history';
import { useSetRecoilState, atom, selector } from 'recoil';
import { useEffect } from 'react';

export const browserHistory = createBrowserHistory();

export function HistoryRecoilSync() {
  const set = useSetRecoilState(s_location);

  useEffect(() => {
    return browserHistory.listen((location, action) => {
      // action = 'PUSH' | 'POP' | 'REPLACE';
      set(location);
    });
  }, [set]);

  return <></>;
}

export const s_history = atom({
  key: 'historyState',
  default: browserHistory,
});

export const s_location = atom({
  key: 'location',
  default: browserHistory.location,
});

export const s_urlPath = selector({
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
