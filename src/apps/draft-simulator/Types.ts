import { Hero } from '../../api/state/hero-types';

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
