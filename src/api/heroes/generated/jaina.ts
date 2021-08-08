import { Hero } from '../heroes';
      
const jaina: Hero = {
  name: "Jaina",
  nameNormalized: "jaina",
  franchise: "Warcraft",
  gender: "Female",
  size: 0.625,
  movementSpeed: 4.8398,
  health: {
    amount: 1365,
    scale: 0.04,
    regenRate: 2.8437,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroJaina",
      range: 5.5,
      period: 1,
      damage: 60,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/jaina.png",
  abilities: [
    {
      id: "JainaTraitFrostbite",
      name: "Frostbite",
      descriptionShort: "Jaina's Abilities Chill targets, slowing them and causing them to take more damage",
      descriptionLong: "Jaina's Abilities Chill targets, Slowing them by 25% and amplifying damage taken from her Abilities by 50%. Lasts 4 seconds. Quest: Deal 15,000 Ability damage to Chilled Heroes. Reward: Unlock the Improved Ice Block Ability, allowing Jaina to become temporarily Invulnerable.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_frostbite.png",
      isPassive: true,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 0
      }
    },
    {
      id: "JainaFrostbolt",
      name: "Frostbolt",
      descriptionShort: "Shoot a bolt that deals damage and Chills the target",
      descriptionLong: "Deal 184 (+4% / level) damage and Chill the target.",
      cost: {
        type: "Mana",
        amount: 30
      },
      cooldown: 4,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_frostbolt.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 46
      }
    },
    {
      id: "JainaBlizzard",
      name: "Blizzard",
      descriptionShort: "Creates a storm of ice at target location, damaging and slowing enemies",
      descriptionLong: "Bombard an area with 3 waves of ice, dealing 142 (+4% / level) damage each. Damaged enemies are Chilled.",
      cost: {
        type: "Mana",
        amount: 90
      },
      cooldown: 15,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_blizzard.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 9.466666666666667
      }
    },
    {
      id: "JainaConeOfCold",
      name: "Cone of Cold",
      descriptionShort: "Deal damage in a cone and Chill targets",
      descriptionLong: "Deal 220 (+4% / level) damage and Chill targets.",
      cost: {
        type: "Mana",
        amount: 40
      },
      cooldown: 10,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_coneofcold.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 22
      }
    },
    {
      id: "JainaSummonWaterElemental",
      name: "Summon Water Elemental",
      descriptionShort: "Summon a Water Elemental that Chills enemies",
      descriptionLong: "Summon a Water Elemental at target location. The Water Elemental's Basic Attacks deal 62 (+4% / level) damage, splash for 25% damage and Chill. The Ability can be reactivated to retarget the Water Elemental.  Lasts 20 seconds.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_summonwaterelemental.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 4.133333333333333
      }
    },
    {
      id: "JainaRingOfFrost",
      name: "Ring of Frost",
      descriptionShort: "Create a ring that damages and Roots enemies",
      descriptionLong: "After a 1.5 second delay, create a Ring of Frost in an area that deals 310 (+4% / level) damage and Roots enemies for 3 seconds. The ring persists for 3 seconds afterward, Chilling any enemies who touch it.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 70,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_ringoffrost.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 20.666666666666668
      }
    }
  ],
  talents: [
    [
      {
        id: "JainaFrostboltWintersReach",
        name: "Winter's Reach",
        descriptionShort: "Increase Frostbolt range",
        descriptionLong: "Increase the range of Frostbolt by 30%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_frostbolt.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "JainaFrostbolt"
        ]
      },
      {
        id: "JainaFrostbiteLingeringChill",
        name: "Lingering Chill",
        descriptionShort: "Increase Chill duration",
        descriptionLong: "Increase the duration of Chill from 4 seconds to 6 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_frostbite.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "JainaTraitFrostbite"
        ]
      },
      {
        id: "JainaFingersOfFrost",
        name: "Fingers of Frost",
        descriptionShort: "Quest: Regen Globes increase Mana Regeneration",
        descriptionLong: "Quest: Gather Regeneration Globes to increase Jaina's Mana regeneration by 0.1 per second, up to 2 per second. Reward: After gathering 20 Globes, the damage bonus from Frostbite is increased by 10%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_conjurerspursuit.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "JainaTraitFrostbite"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "JainaFrostboltFrostShards",
        name: "Frost Shards",
        descriptionShort: "Frostbolt pierces first two targets",
        descriptionLong: "Frostbolt will now pierce the first two targets.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_frostbolt.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "JainaFrostbolt"
        ]
      },
      {
        id: "JainaFrostbiteArcaneIntellect",
        name: "Arcane Intellect",
        descriptionShort: "Damage to Chilled targets returns Mana",
        descriptionLong: "Dealing damage to a Chilled target returns Mana to Jaina. Basic Attacks return 5 Mana and Abilities return 20. Passive: While above 75% Mana, Jaina gains 10% Spell Power.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_arcaneintellect.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "JainaTraitFrostbite"
        ]
      },
      {
        id: "JainaFrostbiteFrostArmor",
        name: "Frost Armor",
        descriptionShort: "Chill attackers and gain Physical Armor",
        descriptionLong: "Enemies that attack Jaina are Chilled. Additionally, every 10 seconds, Jaina gains 75 Physical Armor against the next enemy Hero Basic Attack, reducing the damage taken by 75%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_frostarmor.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4"
      }
    ],
    [
      {
        id: "JainaFrostboltIceLance",
        name: "Ice Lance",
        descriptionShort: "Reduce Frostbolt cooldown on Chilled targets",
        descriptionLong: "Hitting a Chilled target with Frostbolt reduces its cooldown by 1.5 seconds and restores 10 Mana.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_frostbolt.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "JainaFrostbolt"
        ]
      },
      {
        id: "JainaConeOfColdIceFloes",
        name: "Ice Floes",
        descriptionShort: "Increase Cone of Cold area, reduce cooldown",
        descriptionLong: "Increase the width of Cone of Cold by 100% and cause each Hero hit to reduce its cooldown by 2 seconds, doubled against chilled Heroes, up to a maximum of 8 seconds per use.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_coneofcold.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "JainaConeOfCold"
        ]
      },
      {
        id: "JainaIcefuryWand",
        name: "Icefury Wand",
        descriptionShort: "Increase Basic Attack damage",
        descriptionLong: "Basic Attacks against Chilled enemies deal 50% more damage and lower the cooldown of Blizzard by 1.25 seconds.  Doubled against enemy Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_damage.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "JainaBlizzard"
        ]
      }
    ],
    [
      {
        id: "JainaHeroicRingOfFrost",
        name: "Ring of Frost",
        descriptionShort: "Create a ring that damages and Roots enemies",
        descriptionLong: "After a 1.5 second delay, create a Ring of Frost in an area that deals 310 (+4% / level) damage and Roots enemies for 3 seconds. The ring persists for 3 seconds afterward, Chilling any enemies who touch it.",
        cost: {
          type: "Mana",
          amount: 70
        },
        cooldown: 70,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_ringoffrost.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 20.666666666666668
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "JainaRingOfFrost"
        ]
      },
      {
        id: "JainaHeroicSummonWaterElemental",
        name: "Summon Water Elemental",
        descriptionShort: "Summon a Water Elemental that Chills enemies",
        descriptionLong: "Summon a Water Elemental at target location. The Water Elemental's Basic Attacks deal 62 (+4% / level) damage, splash for 25% damage and Chill. The Ability can be reactivated to retarget the Water Elemental.  Lasts 20 seconds.",
        cost: {
          type: "Mana",
          amount: 60
        },
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_summonwaterelemental.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 4.133333333333333
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "JainaSummonWaterElemental"
        ]
      }
    ],
    [
      {
        id: "JainaBlizzardStormFront",
        name: "Storm Front",
        descriptionShort: "Increase Blizzard cast range and radius",
        descriptionLong: "Increase the cast range of Blizzard by 75% and its radius by 30%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_blizzard.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "JainaBlizzard"
        ]
      },
      {
        id: "JainaFrostbiteIceBarrier",
        name: "Ice Barrier",
        descriptionShort: "Damaging Chilled targets grants Shield",
        descriptionLong: "Gain a Shield for 25% of Ability damage dealt to Chilled targets. The shield lasts 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_frostbite.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "JainaTraitFrostbite"
        ]
      },
      {
        id: "JainaIcyVeins",
        name: "Icy Veins",
        descriptionShort: "Reduce cooldowns and Mana costs",
        descriptionLong: "Activate to make Jaina's Basic Abilities' cooldowns recharge 200% faster and reduce their Mana cost by 50% for 5 seconds.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_icyveins.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level13"
      }
    ],
    [
      {
        id: "JainaBlizzardSnowstorm",
        name: "Snowstorm",
        descriptionShort: "Increase Blizzard damage",
        descriptionLong: "The damage of the second wave of Blizzard is increased by 50%. The damage of the third wave is increased by 100%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_blizzard.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "JainaBlizzard"
        ]
      },
      {
        id: "JainaConeOfColdNorthernExposure",
        name: "Northern Exposure",
        descriptionShort: "Cone of Cold lowers Armor",
        descriptionLong: "Enemies damaged by Cone of Cold have their Armor lowered by 25 for 2 seconds, increasing their damage taken by 25%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_coneofcold.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "JainaConeOfCold"
        ]
      },
      {
        id: "JainaConeOfColdNumbingBlast",
        name: "Numbing Blast",
        descriptionShort: "Cone of Cold Roots Chilled targets",
        descriptionLong: "Cone of Cold Roots Chilled targets for 1 second.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_coneofcold_var1.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "JainaConeOfCold"
        ]
      }
    ],
    [
      {
        id: "JainaRingOfFrostColdSnap",
        name: "Cold Snap",
        descriptionShort: "Ring of Frost center deals damage, Roots",
        descriptionLong: "The center area of Ring of Frost deals 310 (+4% / level) damage and Roots enemies after the outer ring expires. Each enemy Hero hit reduces its cooldown by 15 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_ringoffrost.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 20.666666666666668
        },
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "JainaRingOfFrost"
        ],
        prerequisiteTalentIds: [
          "JainaHeroicRingOfFrost"
        ]
      },
      {
        id: "JainaSummonWaterElementalWintermute",
        name: "Wintermute",
        descriptionShort: "Increase cast range and mimics Basic Abilities",
        descriptionLong: "Increases the cast range of Water Elemental by 50%, and the Water Elemental will now mimic Jaina's Basic Abilities for 50% damage.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_summonwaterelemental.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "JainaSummonWaterElemental"
        ],
        prerequisiteTalentIds: [
          "JainaHeroicSummonWaterElemental"
        ]
      },
      {
        id: "JainaFrigidTransmission",
        name: "Ice Blink",
        descriptionShort: "Activate to teleport and Chill nearby enemies",
        descriptionLong: "Activate to teleport a short distance and Chill all nearby enemies.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_boltofthestorm.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level20"
      },
      {
        id: "JainaFrostbiteDeepChill",
        name: "Deep Chill",
        descriptionShort: "Chill Slow stacks",
        descriptionLong: "Frostbite's Chill can now stack a second time, slowing targets up to 40%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_frostbite.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "JainaTraitFrostbite"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 41.12994350282486,
    physicalDamage: 30,
    mobility: 24.199,
    healing: 0,
    magicalDamage: 45.26922727685462
  }
};
      
export default jaina;