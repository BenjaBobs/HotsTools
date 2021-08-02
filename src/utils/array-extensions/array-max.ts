declare global {
  interface Array<T extends number> {
    max(): number | undefined;
  }
}

Array.prototype.max = function () {
  if (!this.length) return undefined;

  let currentMax = this[0];
  for (const next of this) {
    if (next > currentMax) {
      currentMax = next;
    }
  }

  return currentMax;
};

export {};
