import {
  atom,
  selector,
  selectorFamily,
  useRecoilValue,
  useRecoilState,
} from 'recoil';

import {
  EmptyHeroStrengths,
  HeroStrengths,
} from '../../api/state/extend-hero-data';
import { Hero } from '../../api/state/hero-types';
import { s_Heroes } from '../../api/state/heroes';
import { Maps } from '../../api/state/maps';
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

    return phases[draftHistory.filter((x) => x.completed).length];
  },
});

export const s_draftTeamPicks = selectorFamily({
  key: 's_draft_teamPicks',
  get: (team: Team) => ({ get }) => {
    const history = get(s_draftHistory);

    return history
      .filter((x) => x.team === team && x.type === Action.Pick)
      .flatMap((x) => x.heroes);
  },
});

export const s_draftTeamBans = selectorFamily({
  key: 's_draft_teamPicks',
  get: (team: Team) => ({ get }) => {
    const history = get(s_draftHistory);

    return history
      .filter((x) => x.team === team && x.type === Action.Ban)
      .flatMap((x) => x.heroes);
  },
});

export const s_draftTeamStrengths = selectorFamily({
  key: 's_draftTeamStrengths',
  get: (team: Team) => ({ get }) => {
    const heroes = get(s_draftTeamPicks(team));

    const strengths: HeroStrengths = { ...EmptyHeroStrengths };

    for (const hero of heroes) {
      for (const [key, value] of Object.entries(hero.extensions.strengths)) {
        (strengths as any)[key] += value;
      }
    }

    return strengths;
  },
});

export const s_draftTeamWeaknesses = selectorFamily({
  key: 's_draftTeamWeaknesses',
  get: (team: Team) => ({ get }) => {
    const strengths = get(s_draftTeamStrengths(team));

    const weaknesses = Object.entries(strengths).reduce(
      (accumulator: any, [key, value]) => {
        accumulator[key] = 50 - value;

        return accumulator;
      },
      {}
    ) as HeroStrengths;

    return weaknesses;
  },
});

export const s_suggestedHeroes = selector({
  key: 's_suggestedHeroes',
  get: ({ get }) => {
    const unavailableHeroes = get(s_draftHistory).flatMap((s) => s.heroes);
    const weaknesses = get(s_draftTeamWeaknesses(Team.Blue));
    const allHeroes = get(s_Heroes);

    const [biggestWeakness, weaknessValue] = Object.entries(weaknesses).sort(
      (a, b) => b[1] - a[1]
    )[0];

    const suggestions = allHeroes
      .filter((h) => !unavailableHeroes.includes(h))
      .sort(
        (h1, h2) =>
          h2.extensions.strengths[biggestWeakness as keyof HeroStrengths] -
          h1.extensions.strengths[biggestWeakness as keyof HeroStrengths]
      );

    return [
      {
        type: Action.Pick,
        reason: `Your team only has ${50 - weaknessValue} [${biggestWeakness}]`,
        heroes: suggestions.slice(0, 3),
      },
    ];
  },
});

export function usePickHero() {
  const [draftHistory, setDraftHistory] = useRecoilState(s_draftHistory);
  const unavailableHeroes = draftHistory.flatMap((x) => x.heroes);
  const currentPhase = useRecoilValue(s_draftCurrentPhase);

  const pickHero = (hero: Hero) => {
    if (!currentPhase || unavailableHeroes.includes(hero)) return;

    const uncompletedAction = draftHistory.find((x) => !x.completed);

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
