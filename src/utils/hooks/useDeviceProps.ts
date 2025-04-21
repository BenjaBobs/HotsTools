import { Device, ScreenSizeName } from '@src/api/device';
import { useNotifyRerender } from '../NotifyingClass';

export type DeviceSpecificProps<TProps> = TProps &
  Partial<{
    [key in Exclude<ScreenSizeName, 'mobile'>]: Omit<TProps, ScreenSizeName>;
  }>;

export function useDeviceProps<TProps>(props: DeviceSpecificProps<TProps>) {
  useNotifyRerender(Device, device => [device.largestScreenSize]);

  const { tablet, laptop, laptop4k, ...rest } = props;

  if (Device.enabledScreenSizes.tablet) mergeInto(rest, tablet);
  if (Device.enabledScreenSizes.laptop) mergeInto(rest, laptop);
  if (Device.enabledScreenSizes.laptop4k) mergeInto(rest, laptop4k);

  return rest;
}

function mergeInto(a: any, b: any) {
  if (!b || !a) return;

  for (const entry of Object.getOwnPropertyNames(b)) {
    a[entry] = b[entry];
  }
}
