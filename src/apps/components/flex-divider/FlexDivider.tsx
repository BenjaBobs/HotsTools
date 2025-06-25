import { CSSProperties } from 'react';

export function FlexDivider(props: {
  thickness?: CSSProperties['blockSize'];
  length?: CSSProperties['inlineSize'];
  color?: CSSProperties['backgroundColor'];
  spaceAround?: CSSProperties['marginBlock'];
}) {
  return (
    <div
      style={{
        blockSize: props.thickness ?? 2,
        inlineSize: props.length ?? '100%',
        backgroundColor: props.color ?? 'var(--fg-color-bright)',
        marginBlock: props.spaceAround ?? 16,
      }}
    />
  );
}
