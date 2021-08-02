declare global {
  interface Array<T> {
    avgOf(selector: (item: T) => number): number | undefined;
  }
}

Array.prototype.avgOf = function (selector: (item: any) => number) {
  return this.map(selector).avg();
};

export {};
