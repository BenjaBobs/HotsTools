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

/**
 * TODO: figure out best practice to do getters / functions / bindings with the shitty js this weirdness.
 */
class DraftSimulatorCls extends NotifyingClass<DraftSimulatorCls> {
  #draftType: DraftType = DraftType.FirstPick;
  #map: HotsMap = HotsMaps[0];
  #history: PhaseActions[] = [];
  #phases: Phase[] = [
    { team: Team.Blue, type: Action.Ban, amount: 1 },
    { team: Team.Red, type: Action.Ban, amount: 1 },
    { team: Team.Blue, type: Action.Ban, amount: 1 },
    { team: Team.Red, type: Action.Ban, amount: 1 },
    { team: Team.Blue, type: Action.Pick, amount: 1 },
    { team: Team.Red, type: Action.Pick, amount: 2 },
    { team: Team.Blue, type: Action.Pick, amount: 2 },
    { team: Team.Red, type: Action.Ban, amount: 1 },
    { team: Team.Blue, type: Action.Ban, amount: 1 },
    { team: Team.Red, type: Action.Pick, amount: 2 },
    { team: Team.Blue, type: Action.Pick, amount: 2 },
    { team: Team.Red, type: Action.Pick, amount: 1 },
  ];

  constructor() {
    super();
    this.reset();
  }

  reset = (): void => {
    this.#history = [];
    this.notifyListeners();
  };

  get draftType() {
    return this.#draftType;
  }

  setDraftType = (draftType: DraftType): void => {
    this.#draftType = draftType;
    this.#phases.forEach(
      phase => (phase.team = phase.team === Team.Blue ? Team.Red : Team.Blue),
    );

    this.notifyListeners();
  };

  get phases(): readonly Phase[] {
    return this.#phases;
  }

  get map() {
    return this.#map;
  }

  setMap = (map: HotsMap): void => {
    this.#map = map;
    this.notifyListeners();
  };

  get history(): readonly PhaseActions[] {
    return this.#history;
  }

  getCurrentPhase = (): Phase => {
    return this.#phases[this.#history.filter(it => it.completed).length];
  };

  getPicks = (team?: Team): readonly Hero[] => {
    return this.#history
      .filter(it => it.type === Action.Pick && (!team || it.team === team))
      .flatMap(it => it.heroes);
  };

  getBans = (team?: Team): readonly Hero[] => {
    return this.#history
      .filter(it => it.type === Action.Ban && (!team || it.team === team))
      .flatMap(it => it.heroes);
  };

  getUnavailableHeroes = (): readonly Hero[] => {
    return this.#history.flatMap(it => it.heroes);
  };

  pickHero = (hero: Hero): void => {
    const phase = this.getCurrentPhase();
    if (!phase) throw new Error("Expected to find current phase but didn't");

    const unavailableHeroes = this.getUnavailableHeroes();
    if (unavailableHeroes.includes(hero))
      throw new Error('Hero is not currently available.');

    const uncompletedAction = this.#history.find(it => !it.completed);

    if (uncompletedAction) {
      uncompletedAction.heroes.push(hero);
      uncompletedAction.completed =
        uncompletedAction.heroes.length === phase.amount;
    } else {
      this.#history.push({
        team: phase.team,
        type: phase.type,
        heroes: [hero],
        completed: phase.amount === 1,
      });
    }

    this.notifyListeners();
  };
}

export const DraftSimulation = new DraftSimulatorCls();
