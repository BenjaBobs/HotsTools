import { useEffect, useState } from 'react';

export const ScreenSize = {
  /**
   * 1440 < ScreenSize
   */
  laptop4k: 1440,
  /**
   * 768 < ScreenSize < 1440
   */
  laptop: 768,
  /**
   * 425 < ScreenSize < 768
   * Note: the actual value slightly higher than 425 because the browser presets sometimes goes a couple of pixels above
   * This appears to only happen for the 425 breakpoint
   */
  tablet: 428,
  /**
   * ScreenSize < 425
   */
  mobile: 0,
};

export const ScreenSizes = Object.entries(ScreenSize).sort(
  (a, b) => b[1] - a[1]
) as [ScreenSizeName, number][];

export type ScreenSizeName = keyof typeof ScreenSize;

export default function useIntuitiveScreenSize() {
  const [screenSize, setScreenSize] = useState<ScreenSizeName>(
    getScreenSizeFromWidth(window.innerWidth)
  );

  useEffect(() => {
    function onResize(evt: UIEvent) {
      const width = (evt.target as Window).innerWidth;

      const newScreenSize = getScreenSizeFromWidth(width);

      if (newScreenSize !== screenSize) {
        setScreenSize(newScreenSize);
      }
    }

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [screenSize, setScreenSize]);

  return screenSize;
}

function getScreenSizeFromWidth(width: number) {
  for (const [screenSizeName, screenSizeWidth] of ScreenSizes) {
    if (width > screenSizeWidth) return screenSizeName;
  }

  return 'mobile' as ScreenSizeName;
}
