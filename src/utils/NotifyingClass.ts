import { useEffect, useReducer } from 'react';

type ChangeListener<TNotifier extends NotifyingClass<TNotifier>> = {
  callback: () => void;
  when?: (notifier: TNotifier) => any[];
  last?: any[];
};

export abstract class NotifyingClass<TSelf extends NotifyingClass<TSelf>> {
  private subcribers: ChangeListener<any>[] = [];

  public subscribe(
    callback: ChangeListener<TSelf>['callback'],
    when?: ChangeListener<TSelf>['when'],
  ): () => void {
    const listener: (typeof this.subcribers)[0] = {
      callback: callback,
      when: when,
      last: when?.(this as any as TSelf),
    };

    this.subcribers.push(listener);

    return () => {
      const idx = this.subcribers.indexOf(listener);
      if (idx !== -1) this.subcribers.splice(idx, 1);
    };
  }

  protected notifyListeners() {
    const listeners = [...this.subcribers];

    for (const listener of listeners) {
      let shouldNotify = true;

      if (listener.when) {
        const newValues = listener.when(this as any as TSelf);

        if (
          newValues.some((newValue, idx) => newValue !== listener.last?.[idx])
        ) {
          listener.last = newValues;
        } else shouldNotify = false;
      }

      if (shouldNotify) listener.callback();
    }
  }
}

export function useNotifyRerender<TNotifier extends NotifyingClass<TNotifier>>(
  notifyingClass: TNotifier,
  when?: ChangeListener<TNotifier>['when'],
): void {
  const rerender = useReducer(old => old + 1, 0)[1];

  useEffect(() => {
    const unsub = notifyingClass.subscribe(rerender, when);
    return () => {
      unsub();
    };
  }, []);
}
