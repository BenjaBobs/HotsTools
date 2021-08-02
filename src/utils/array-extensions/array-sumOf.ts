declare global {
  interface Array<T> {
    sumOf(selector: (item: T) => number): number;
  }
}

Array.prototype.sumOf = function (selector: (item: any) => number) {
  return this.map(selector).sum();
};

export {};
