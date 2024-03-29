declare global {
  interface Array<T> {
    sum(): number;
  }
}

Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b, 0);
};

export {};
