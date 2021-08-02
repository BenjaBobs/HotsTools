import '../../src/utils/ArrayExtensions';

import { Ability, Charges, Hero, Talent } from '../../src/api/heroes/heroes';
import { HTC_GameStrings } from '../fetching/HeroesToolChest_GameStrings';
import { HTC_Ability, HTC_Hero } from '../fetching/HeroesToolChest_HeroData';

export function CreateHeroesFromFetchedData(
  heroData: { [key: string]: HTC_Hero },
  gameStrings: HTC_GameStrings
): Hero[] {
  const heroes = Object.entries(heroData).map(([key, data]) =>
    CreateHeroFromData(key, data, gameStrings)
  );

  NormalizeHeroStats(heroes);

  return heroes;
}

function CreateHeroFromData(
  key: string,
  data: HTC_Hero,
  gameStrings: HTC_GameStrings
): Hero {
  console.log(`Generating data for ${key}`);

  const hero = {
    name: gameStrings.unit.name[key],
    nameNormalized: data.hyperlinkId.toLowerCase(),
    franchise: data.franchise,
    gender: data.gender,
    size: data.radius ?? data.innerRadius ?? 0,
    movementSpeed: data.speed,
    health: data.life,
    energy: data.energy
      ? { ...data.energy, name: gameStrings.unit.energytype[key] }
      : undefined,
    autoAttacks: data.weapons ?? [],
    icon: `https://heroespatchnotes.github.io/heroes-talents/images/heroes/${data.hyperlinkId.toLowerCase()}.png`,
    abilities: [
      ...(data.abilities.trait?.map(t =>
        CreateAbilityFromData(gameStrings, 'trait', t)
      ) ?? []),
      ...(data.abilities.mount?.map(t =>
        CreateAbilityFromData(gameStrings, 'mount', t)
      ) ?? []),
      ...(data.abilities.basic?.map(b =>
        CreateAbilityFromData(gameStrings, 'basic', b)
      ) ?? []),
      ...(data.abilities.heroic?.map(h =>
        CreateAbilityFromData(gameStrings, 'heroic', h)
      ) ?? []),
      ...Object.values(data?.subAbilities ?? {})
        .flatMap(x =>
          Object.values(x).flatMap(y =>
            Object.entries(y).map(z => {
              return {
                category: z[0],
                abilities: z[1],
              };
            })
          )
        )
        .filter(x => x.abilities?.length)
        .flatMap(x =>
          x.abilities.map(y =>
            CreateAbilityFromData(gameStrings, x.category, y)
          )
        ),
    ].filter(ability => ability.descriptionShort),
    talents: data.talents
      ? Object.entries(data.talents).map(([tier, talents]) => {
          return talents.map(talent => {
            return {
              ...CreateAbilityFromData(gameStrings, 'Talent', talent),
              order: talent.sort,
              tier: tier,
              linkedAbilityIds: talent.abilityTalentLinkIds,
              prerequisiteTalentIds: talent.prerequisiteTalentIds,
              isQuest: talent.isQuest,
            } as Talent;
          });
        })
      : [],
    heroUnits: data.heroUnits
      ? data.heroUnits.map(unit => {
          const unitKey = Object.keys(unit)[0];
          return CreateHeroFromData(unitKey, unit[unitKey], gameStrings);
        })
      : undefined,
    // fullData: data,
  } as any as Hero;

  hero.analysis = {
    tankiness: (hero.health.amount / 1000) * hero.health.scale * 100,
    damageSustainedPhysical:
      hero.autoAttacks.avgOf(
        attack =>
          (attack.damage * attack.damageScale * attack.range) / attack.period
      ) ?? 0,
  };

  return hero;
}

function CreateAbilityFromData(
  gameStrings: HTC_GameStrings,
  category: string,
  abilityData: HTC_Ability
): Ability {
  const gameStringKey = `${abilityData.nameId}|${abilityData.buttonId}|${abilityData.abilityType}`;

  const cooldown =
    parseFloat(
      gameStrings.abiltalent.cooldown[gameStringKey]?.match(
        /([0-9.]+)/g
      )?.[0] || '0'
    ) || null;

  const costString =
    gameStrings.abiltalent.energy[gameStringKey] ??
    gameStrings.abiltalent.life[gameStringKey];
  const costParts = costString?.match(/(\w+): (\d+)( per second)?/);

  const cost = costParts?.length
    ? {
        type: costParts[1],
        amount: parseFloat(costParts[2]),
        perSecond: !!costParts[3] || undefined,
      }
    : undefined;

  return {
    id: abilityData.nameId,
    name: gameStrings.abiltalent.name[gameStringKey]?.trim(),
    descriptionShort: gameStrings.abiltalent.short[gameStringKey]?.trim(),
    descriptionLong: gameStrings.abiltalent.full[gameStringKey]?.trim(),
    cost: cost,
    cooldown: cooldown,
    charges: abilityData.charges
      ? ({
          chargesMax: abilityData.charges?.countMax ?? 1,
          chargesInitial: abilityData.charges?.countStart ?? 0,
          chargeCost: abilityData.charges?.countUse,
          recastCooldown: abilityData.charges?.recastCooldown || undefined,
        } as Charges)
      : undefined,
    category: category,
    type: abilityData.abilityType,
    icon: `https://heroespatchnotes.github.io/heroes-talents/images/talents/${abilityData.icon}`,
    isPassive: abilityData.isActive === false || abilityData.isPassive === true,
  };
}

function NormalizeHeroStats(heroes: Hero[]) {
  const statKeys = Object.keys(heroes[0].analysis);

  const maxStats = statKeys.reduce(
    (obj: { [key: string]: number }, statKey) => {
      obj[statKey] = heroes.maxOf(h => (h.analysis as any)[statKey])!;
      return obj;
    },
    {}
  );

  for (const hero of heroes) {
    const analysis: any = hero.analysis;
    for (const category of Object.keys(maxStats)) {
      analysis[category] = (analysis[category] / maxStats[category]) * 100 || 0;
    }
  }
}
