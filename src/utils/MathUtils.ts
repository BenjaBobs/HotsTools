export function GetInterpolationRatioLinear(
  min: number,
  max: number,
  value: number
) {
  return (value - min) / (max - min);
}

export function Clamp(min: number, max: number, value: number) {
  return value < min ? min : value > max ? max : value;
}
