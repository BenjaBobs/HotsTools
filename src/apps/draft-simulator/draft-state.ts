import { atom, selector, selectorFamily } from 'recoil';
import { DraftType, PhaseActions, Team, Phase, Action } from './Types';
import { Maps } from '../../api/state/maps';

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
