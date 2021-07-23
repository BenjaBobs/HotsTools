import './block.scss';

import React, { CSSProperties, PropsWithChildren, useMemo } from 'react';

import useIntuitiveScreenSize, {
    ScreenSizeName, ScreenSizes
} from '../../../utils/hooks/useIntuitiveScreenSize';

type BlockProps = {
  // the form of the block
  span?: number | [number, number];
  columns?: number;
  rows?: number;
  width?: number | string;
  height?: number | string;

  // style of the content
  fill?: string | boolean;
  textColor?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  gap?: number;
  justify?:
    | 'stretch'
    | 'left'
    | 'center'
    | 'right'
    | 'space-between'
    | 'space-around';
  align?: 'start' | 'baseline' | 'center' | 'end';
  style?: CSSProperties;
  hide?: boolean;
  className?: string | string[];
  padding?:
    | number
    | {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
      };
};

export type BlockSizeProps =
  | number // just span
  | BlockProps;

export type EachBlockSizeProps = Partial<
  { [key in ScreenSizeName]: BlockSizeProps }
>;

export default function Block(
  props: PropsWithChildren<EachBlockSizeProps & BlockProps>
) {
  const screenSize = useIntuitiveScreenSize();

  const [style, className] = useMemo(
    () => {
      const styleObj: { [key: string]: any } = {};

      const classNames = Array.isArray(props.className)
        ? props.className
        : props.className
        ? ['block', props.className]
        : ['block'];

      applyStyleFromProps(styleObj, props);

      const enabledScreenSizesAscending = ScreenSizes.slice(
        ScreenSizes.findIndex(x => x[0] === screenSize)
      ).reverse();

      for (const [screenSizeName] of enabledScreenSizesAscending) {
        const sizeProps = props[screenSizeName] as BlockSizeProps | undefined;
        if (sizeProps) {
          applyStyleFromProps(styleObj, sizeProps!);

          if (typeof sizeProps !== 'number' && sizeProps.className) {
            const sizeClassNames = Array.isArray(sizeProps.className)
              ? sizeProps.className
              : [sizeProps.className];

            classNames.push(...sizeClassNames);
          }
        }
      }

      return [styleObj, classNames.length ? classNames.join(' ') : undefined];
    },
    // eslint-disable-next-line
    [
      // recalculate if breakpoints change
      screenSize,
      props.mobile,
      props.tablet,
      props.laptop,
      props.laptop4k,

      // recalculate if defaults change
      props.height,
      props.width,
      props.fill,
      props.textColor,
      props.textAlign,
      props.columns,
      props.span,
      props.rows,
      props.gap,
      props.justify,
      props.align,
      props.style,
      props.hide,
      props.className,
      props.padding,
    ]
  );

  if (style.hide) {
    return null;
  }

  return (
    <div style={style} className={className}>
      {props.children}
    </div>
  );
}

function applyStyleFromProps(
  styleObj: { [key: string]: string | number },
  props: BlockSizeProps
) {
  if (typeof props === 'number') {
    styleObj['--block-width'] = props;
    return;
  }

  if (props.width !== undefined)
    styleObj['width'] =
      typeof props.width === 'number' ? props.width + 'rem' : props.width;
  if (props.height !== undefined)
    styleObj['height'] =
      typeof props.height === 'number' ? props.height + 'rem' : props.height;
  if (props.hide !== undefined) styleObj['hide'] = +props.hide;
  if (props.columns) styleObj['--block-columns'] = props.columns;
  if (props.columns) styleObj['--block-base-columns'] = props.columns;
  if (props.rows) styleObj['--block-rows'] = props.rows;
  if (props.rows) styleObj['--block-base-rows'] = props.rows;
  if (props.gap) styleObj['--block-gap'] = props.gap + 'rem';
  if (props.padding) {
    if (typeof props.padding === 'number') {
      styleObj['--block-padding'] = props.padding + 'rem';
    } else {
      styleObj['--block-padding'] = [
        props.padding.top || 0,
        props.padding.right || 0,
        props.padding.bottom || 0,
        props.padding.left || 0,
      ]
        .map(x => x + 'rem')
        .join(' ');
    }
  }
  if (props.justify) styleObj['--block-justify'] = props.justify;
  if (props.align) styleObj['--block-align'] = props.align;
  if (props.textAlign) styleObj['--block-text-align'] = props.textAlign;
  if (props.textColor) styleObj['--block-text-color'] = props.textColor;

  if (props.fill)
    styleObj['--block-background'] =
      !!props.fill === props.fill ? 'white' : (props.fill as string);

  if (props.style) {
    for (const [key, value] of Object.entries(props.style)) {
      styleObj[key] = value;
    }
  }
}
