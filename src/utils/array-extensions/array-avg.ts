declare global {
  interface Array<T> {
    avg(): number | undefined;
  }
}

Array.prototype.avg = function () {
  if (!this.length) return undefined;

  return this.sum() / this.length;
};

export {};
