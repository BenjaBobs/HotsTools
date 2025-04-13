import { CSSProperties, MouseEventHandler, PropsWithChildren } from 'react';
import '@src/common/flex/flex.scss';
import {
  DeviceSpecificProps,
  useDeviceProps,
} from '@src/utils/hooks/useDeviceProps';

export function Flex(
  props: PropsWithChildren<
    DeviceSpecificProps<{
      style?: React.CSSProperties & { [key: `--${string}`]: string };
      className?: string;
      slim?: boolean;
      full?: boolean;
      up?: boolean;
      down?: boolean;
      left?: boolean;
      right?: boolean;
      center?: boolean;
      justify?: React.CSSProperties['justifyContent'];
      align?: React.CSSProperties['alignItems'];
      itemsSize?: 'even';
      itemsPlace?: 'center';
      pad?: CSSProperties['padding'];
      gap?: number | `${number}%`;
      width?: number | `${number}%`;
      color?: string;
      bg?: CSSProperties['background'];
      border?: CSSProperties['border'];
      onClick?: MouseEventHandler<HTMLDivElement>;
      onContextMenu?: MouseEventHandler<HTMLDivElement>;
    }>
  >,
) {
  const computedProps = useDeviceProps(props);

  const classes = [
    'flex',
    computedProps.className,
    getDirection(computedProps),
    computedProps.justify && 'justify-' + computedProps.justify,
    computedProps.itemsSize && 'items-size-' + computedProps.itemsSize,
    computedProps.itemsPlace && 'items-place-' + computedProps.itemsPlace,
    computedProps.slim && 'slim',
    computedProps.full && 'full',
    computedProps.center && 'center',
  ];

  return (
    <div
      style={{
        gap: computedProps.gap,
        width: computedProps.width,
        color: computedProps.color,
        padding: computedProps.pad,
        background: computedProps.bg,
        border: computedProps.border,
        ...computedProps.style,
      }}
      onClick={computedProps.onClick}
      onContextMenu={computedProps.onContextMenu}
      className={classes.filter(x => x).join(' ')}
    >
      {props.children}
    </div>
  );
}

function getDirection(object: Parameters<typeof Flex>[0]) {
  if (object.up) return 'direction-up';
  if (object.down) return 'direction-down';
  if (object.left) return 'direction-left';
  if (object.right) return 'direction-right';
  return 'direction-right';
}
