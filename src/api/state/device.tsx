import { atom, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';

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
