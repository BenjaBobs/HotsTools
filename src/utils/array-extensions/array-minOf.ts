declare global {
  interface Array<T> {
    minOf(selector: (item: T) => number): number | undefined;
  }
}

Array.prototype.minOf = function (selector: (item: any) => number) {
  return this.map(selector).min();
};

export {};
