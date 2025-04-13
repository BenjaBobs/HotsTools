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
  (a, b) => b[1] - a[1],
) as [ScreenSizeName, number][];

export type ScreenSizeName = keyof typeof ScreenSize;

export function useEnabledScreenSizes() {
  const size = useScreenSize();

  const [sizes, setSizes] = useState(getEnabledSizesFromWidth(size[0]));

  useEffect(() => {
    setSizes(getEnabledSizesFromWidth(size[0]));
  }, [size, setSizes]);

  return sizes;
}

function getEnabledSizesFromWidth(width: number): {
  [key in ScreenSizeName]: boolean;
} {
  return Object.fromEntries(
    ScreenSizes.map(([name, breakpoint]) => [name, width > breakpoint]),
  ) as { [key in ScreenSizeName]: boolean };
}

export function useIntuitiveScreenSize() {
  const size = useScreenSize();

  const [screenSize, setScreenSize] = useState<ScreenSizeName>(
    getScreenSizeFromWidth(size[0]),
  );

  useEffect(
    () => setScreenSize(getScreenSizeFromWidth(size[0])),
    [screen, setScreenSize],
  );

  return screenSize;
}

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ] as const);

  useEffect(() => {
    function onResize() {
      setScreenSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [setScreenSize]);

  return screenSize;
}

function getScreenSizeFromWidth(width: number) {
  for (const [screenSizeName, screenSizeWidth] of ScreenSizes) {
    if (width > screenSizeWidth) return screenSizeName;
  }

  return 'mobile' as ScreenSizeName;
}
