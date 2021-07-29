import { atom, selector } from 'recoil';

import { GetInterpolationRatioLinear } from '../utils/MathUtils';

export const s_deviceSize = atom({
  key: 's_deviceSize',
  default: [window.screen.width, window.screen.height],
  effects_UNSTABLE: [
    ({ setSelf }) => {
      const onResize = () => {
        setSelf([window.screen.width, window.screen.height]);
      };

      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    },
  ],
});

export const s_screenInterpolationRatio = selector({
  key: 's_screenInterpolationRatio',
  get: ({ get }) => {
    const [width] = get(s_deviceSize);
    const ratio = GetInterpolationRatioLinear(375, 1920, width);

    return ratio;
  },
});
