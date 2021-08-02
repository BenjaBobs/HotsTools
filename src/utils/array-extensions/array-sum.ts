declare global {
  interface Array<T extends number> {
    sum(): number;
  }
}

Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b, 0);
};

export {};
