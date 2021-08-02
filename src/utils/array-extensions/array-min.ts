declare global {
  interface Array<T extends number> {
    min(): number | undefined;
  }
}

Array.prototype.min = function () {
  if (!this.length) return undefined;

  let currentMin = this[0];
  for (const next of this) {
    if (next < currentMin) {
      currentMin = next;
    }
  }

  return currentMin;
};

export {};
