import { CSSProperties, MouseEventHandler, PropsWithChildren } from 'react';
import './flex.scss';
import {
  DeviceSpecificProps,
  useDeviceProps,
} from '@src/utils/hooks/useDeviceProps';

export function Flex(
  props: PropsWithChildren<
    DeviceSpecificProps<{
      style?: CSSProperties & { [key: `--${string}`]: string };
      className?: string;
      slim?: boolean;
      full?: boolean;
      up?: boolean;
      down?: boolean;
      left?: boolean;
      right?: boolean;
      center?: boolean;
      wrap?: CSSProperties['flexWrap'] | true;
      justifySelf?: CSSProperties['justifySelf'];
      justifyContent?: CSSProperties['justifyContent'];
      align?: CSSProperties['alignItems'];
      pad?: CSSProperties['padding'];
      gap?: CSSProperties['gap'];
      width?: CSSProperties['width'];
      maxWidth?: CSSProperties['maxWidth'];
      height?: CSSProperties['height'];
      maxHeight?: CSSProperties['maxHeight'];
      color?: CSSProperties['color'];
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
    computedProps.justifySelf && 'justify-self-' + computedProps.justifySelf,
    computedProps.justifyContent &&
      'justify-content-' + computedProps.justifyContent,
    computedProps.align && 'align-' + computedProps.align,
    computedProps.slim && 'slim',
    computedProps.full && 'full',
    computedProps.center && 'center',
  ];

  return (
    <div
      style={{
        gap: computedProps.gap,
        width: computedProps.width,
        maxWidth: computedProps.maxWidth,
        height: computedProps.height,
        maxHeight: computedProps.maxHeight,
        color: computedProps.color,
        padding: computedProps.pad,
        background: computedProps.bg,
        border: computedProps.border,
        flexWrap: computedProps.wrap === true ? 'wrap' : computedProps.wrap,
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
  if (object.up) return 'up';
  if (object.down) return 'down';
  if (object.left) return 'left';
  if (object.right) return 'right';
  return 'right';
}
