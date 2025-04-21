import { NotifyingClass } from '@src/utils/NotifyingClass';

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

class DeviceCls extends NotifyingClass<DeviceCls> {
  #width: number = window.innerWidth;
  #height: number = window.innerHeight;
  #largestScreenSize: ScreenSizeName = 'mobile';
  #enabledScreenSizes: { [key in ScreenSizeName]: boolean } = {
    mobile: true,
    tablet: false,
    laptop: false,
    laptop4k: false,
  };

  constructor() {
    super();
    this.reset();
    window.addEventListener('resize', this.reset);
  }

  private reset = () => {
    this.#width = window.innerWidth;
    this.#height = window.innerHeight;

    for (const [size, breakpoint] of ScreenSizes) {
      if (this.#width >= breakpoint) {
        this.#largestScreenSize = size;
        this.#enabledScreenSizes[size] = true;
      } else {
        this.#enabledScreenSizes[size] = false;
      }
    }

    this.notifyListeners();
  };

  get width() {
    return this.#width;
  }

  get height() {
    return this.#height;
  }

  get enabledScreenSizes(): { readonly [key in ScreenSizeName]: boolean } {
    return this.#enabledScreenSizes;
  }

  get largestScreenSize() {
    return this.#largestScreenSize;
  }
}

export const Device = new DeviceCls();
