import { atom, selector, selectorFamily, useRecoilState, useRecoilValue } from 'recoil';

import { Hero } from '../../api/heroes/heroes';
import { Maps } from '../../api/maps';
import { Action, DraftType, Phase, PhaseActions, Team } from './Types';

export const s_draftType = atom({
  key: 's_draft_type',
  default: DraftType.FirstPick,
});

export const s_draftHistory = atom<PhaseActions[]>({
  key: 's_draft_history',
  default: [],
});

export const s_draftMap = atom({
  key: 's_draftMap',
  default: Maps[0],
});

function GeneratePhases(firstTeam: Team, lastTeam: Team): Phase[] {
  return [
    { team: firstTeam, type: Action.Ban, amount: 1 },
    { team: lastTeam, type: Action.Ban, amount: 1 },
    { team: firstTeam, type: Action.Ban, amount: 1 },
    { team: lastTeam, type: Action.Ban, amount: 1 },
    { team: firstTeam, type: Action.Pick, amount: 1 },
    { team: lastTeam, type: Action.Pick, amount: 2 },
    { team: firstTeam, type: Action.Pick, amount: 2 },
    { team: lastTeam, type: Action.Ban, amount: 1 },
    { team: firstTeam, type: Action.Ban, amount: 1 },
    { team: lastTeam, type: Action.Pick, amount: 2 },
    { team: firstTeam, type: Action.Pick, amount: 2 },
    { team: lastTeam, type: Action.Pick, amount: 1 },
  ];
}

export const s_draftPhases = selector({
  key: 's_draft_selector',
  get: ({ get }) => {
    const type = get(s_draftType);

    return type === DraftType.FirstPick
      ? GeneratePhases(Team.Blue, Team.Red)
      : GeneratePhases(Team.Red, Team.Blue);
  },
});

export const s_draftCurrentPhase = selector({
  key: 's_draftCurrentPhase',
  get: ({ get }) => {
    const phases = get(s_draftPhases);
    const draftHistory = get(s_draftHistory);

    return phases[draftHistory.filter(x => x.completed).length];
  },
});

export const s_draftTeamPicks = selectorFamily({
  key: 's_draft_teamPicks',
  get:
    (team: Team) =>
    ({ get }) => {
      const history = get(s_draftHistory);

      return history
        .filter(x => x.team === team && x.type === Action.Pick)
        .flatMap(x => x.heroes);
    },
});

export const s_draftTeamBans = selectorFamily({
  key: 's_draft_teamPicks',
  get:
    (team: Team) =>
    ({ get }) => {
      const history = get(s_draftHistory);

      return history
        .filter(x => x.team === team && x.type === Action.Ban)
        .flatMap(x => x.heroes);
    },
});

export function usePickHero() {
  const [draftHistory, setDraftHistory] = useRecoilState(s_draftHistory);
  const unavailableHeroes = draftHistory.flatMap(x => x.heroes);
  const currentPhase = useRecoilValue(s_draftCurrentPhase);

  const pickHero = (hero: Hero) => {
    if (!currentPhase || unavailableHeroes.includes(hero)) return;

    const uncompletedAction = draftHistory.find(x => !x.completed);

    if (uncompletedAction) {
      setDraftHistory([
        ...draftHistory.slice(0, draftHistory.length - 1),
        {
          ...uncompletedAction,
          heroes: [...uncompletedAction.heroes, hero],
          completed:
            currentPhase.amount === uncompletedAction.heroes.length + 1,
        },
      ]);
    } else {
      setDraftHistory([
        ...draftHistory,
        {
          type: currentPhase.type,
          team: currentPhase.team,
          heroes: [hero],
          completed: currentPhase.amount === 1,
        },
      ]);
    }
  };

  return pickHero;
}
