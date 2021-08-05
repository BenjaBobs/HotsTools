declare global {
  interface Array<T> {
    orderBy(selector: (item: T) => any): T[];
  }
}

Array.prototype.orderBy = function (selector: (item: any) => any) {
  return [...this].sort((a, b) => {
    const aMapped = selector(a);
    const bMapped = selector(b);

    return aMapped > bMapped ? 1 : aMapped < bMapped ? -1 : 0;
  });
};

export {};
