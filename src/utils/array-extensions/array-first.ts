declare global {
  interface Array<T> {
    first(): T | undefined;
  }
}

Array.prototype.first = function () {
  return this[0];
};

export {};
