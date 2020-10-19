import { atom, useSetRecoilState, selector } from 'recoil';
import { useEffect } from 'react';
import { GetInterpolationRatioLinear } from '../../utils/MathUtils';

export default function RecoilDeviceSync() {
  const setDeviceSize = useSetRecoilState(s_deviceSize);

  useEffect(() => {
    const onResize = () => {
      setDeviceSize([window.screen.width, window.screen.height]);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [setDeviceSize]);

  return null;
}

export const s_deviceSize = atom({
  key: 's_deviceSize',
  default: [window.screen.width, window.screen.height],
});

export const s_screenInterpolationRatio = selector({
  key: 's_screenInterpolationRatio',
  get: ({ get }) => {
    const [width] = get(s_deviceSize);
    const ratio = GetInterpolationRatioLinear(375, 1920, width);

    return ratio;
  },
});
