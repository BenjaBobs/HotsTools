declare global {
  interface Array<T> {
    maxOf(selector: (item: T) => number): number | undefined;
  }
}

Array.prototype.maxOf = function (selector: (item: any) => number) {
  return this.map(selector).max();
};

export {};
