import { NotifyingClass } from '@src/utils/NotifyingClass';

class AddressBarCls extends NotifyingClass<AddressBarCls> {
  constructor() {
    super();
  }

  public get path() {
    return location.pathname;
  }

  public getOriginAndPath() {
    return location.origin + location.pathname;
  }

  public setUrl(value: string) {
    history.pushState(undefined, '', value);
    this.notifyListeners();
  }

  public setPath(path: string) {
    history.pushState(undefined, '', location.origin + path);
    this.notifyListeners();
  }

  public getSearch() {
    return location.search;
  }

  public setSearch(search?: string) {
    const append = !search ? '' : search[0] === '?' ? search : `?${search}`;

    history.pushState(null, '', this.getOriginAndPath() + append);
    this.notifyListeners();
  }

  public getQueryParam(name: string) {
    const params = new URLSearchParams(this.getSearch());
    return params.get(name);
  }

  public setQueryParam(name: string, value?: string) {
    const params = new URLSearchParams(this.getSearch());

    if (value == null) params.delete(name);
    else params.set(name, value);

    this.setSearch(params.toString());
  }
}

export const AddressBar = new AddressBarCls();
