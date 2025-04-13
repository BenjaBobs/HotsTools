import {
  ScreenSizeName,
  useEnabledScreenSizes,
} from '@src/utils/hooks/useIntuitiveScreenSize';

export type DeviceSpecificProps<TProps> = TProps &
  Partial<{
    [key in Exclude<ScreenSizeName, 'mobile'>]: Omit<TProps, ScreenSizeName>;
  }>;

export function useDeviceProps<TProps>(props: DeviceSpecificProps<TProps>) {
  const enabledSizes = useEnabledScreenSizes();
  const { tablet, laptop, laptop4k, ...rest } = props;

  if (enabledSizes.tablet) mergeInto(rest, tablet);
  if (enabledSizes.laptop) mergeInto(rest, laptop);
  if (enabledSizes.laptop4k) mergeInto(rest, laptop4k);

  return rest;
}

function mergeInto(a: any, b: any) {
  for (const entry of Object.getOwnPropertyNames(b)) {
    a[entry] = b[entry];
  }
}
