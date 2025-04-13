import { NotifyingClass } from '@src/utils/NotifyingClass';
import { Hero } from '../../api/heroes/heroes';
import { HotsMap, HotsMaps } from '@src/api/maps';

export enum Team {
  Blue = 'Blue',
  Red = 'Red',
}

export enum Action {
  Pick = 'Pick',
  Ban = 'Ban',
}

export type Phase = {
  team: Team;
  type: Action;
  amount: number;
};

export type PhaseActions = {
  type: Action;
  team: Team;
  heroes: Hero[];
  completed: boolean;
};

export enum DraftType {
  FirstPick = 'FirstPick',
  LastPick = 'LastPick',
}

export type Suggestion = {
  type: Action;
  reason: string;
  heroes: Hero[];
};

class DraftSimulatorCls extends NotifyingClass<DraftSimulatorCls> {
  private _map: HotsMap = HotsMaps[0];

  constructor() {
    super();
  }

  public reset() {
    this.notifyListeners();
  }

  public get map() {
    return this._map;
  }
}

export const DraftSimulation = new DraftSimulatorCls();
