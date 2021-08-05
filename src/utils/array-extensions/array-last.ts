declare global {
  interface Array<T> {
    last(): T | undefined;
    last(index: number): T | undefined;
  }
}

Array.prototype.last = function (index: number = 1) {
  return this[this.length - index];
};

export {};
