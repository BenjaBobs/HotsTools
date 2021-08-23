import { Hero } from '../heroes';
      
const sonya: Hero = {
  name: "Sonya",
  nameNormalized: "sonya",
  franchise: "Diablo",
  gender: "Female",
  size: 0.75,
  movementSpeed: 4.8398,
  health: {
    amount: 2450,
    scale: 0.04,
    regenRate: 5.1054,
    regenScale: 0.04
  },
  energy: {
    amount: 100,
    regenRate: 0,
    name: "Fury"
  },
  autoAttacks: [
    {
      nameId: "HeroBarbarian",
      range: 1.5,
      period: 0.8,
      damage: 84,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/sonya.png",
  abilities: [
    {
      id: "BarbarianFury",
      name: "Fury",
      descriptionShort: "Generate Fury in combat. All Abilities grant Move Speed",
      descriptionLong: "Use Fury instead of Mana, which is gained by taking damage or dealing Basic Attack damage. Using a Basic or Heroic Ability grants 10% Movement Speed for 4 seconds.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_fury.png",
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
      id: "BarbarianAncientSpear",
      name: "Ancient Spear",
      descriptionShort: "Throw a spear and pull self to the first enemy hit, stunning and dealing damage",
      descriptionLong: "Throw out a spear that pulls Sonya to the first enemy hit, dealing 173 (+4% / level) damage and briefly stunning them. If this hits an enemy, generate 40 Fury.",
      cooldown: 13,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_ancientspear.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 53.23076923076923
      }
    },
    {
      id: "BarbarianSeismicSlam",
      name: "Seismic Slam",
      descriptionShort: "Damage an enemy and splash damage behind them",
      descriptionLong: "Deals 176 (+4% / level) damage to the target enemy, and 44 (+4% / level) to enemies behind the target.",
      cost: {
        type: "Fury",
        amount: 25
      },
      cooldown: 1,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_seismicslam.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 704
      }
    },
    {
      id: "BarbarianWhirlwind",
      name: "Whirlwind",
      descriptionShort: "Damage nearby enemies and heal for a percentage of damage dealt",
      descriptionLong: "Deals 138 (+4% / level) damage a second to nearby enemies for 3 seconds, healing for 25% of damage dealt. Healing tripled versus Heroes.",
      cost: {
        type: "Fury",
        amount: 40
      },
      cooldown: 5,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_whirlwind.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 5,
        magicalDamage: 110.4
      }
    },
    {
      id: "BarbarianLeap",
      name: "Leap",
      descriptionShort: "Jump to a location, deal damage, and stun enemies",
      descriptionLong: "Leap into the air, dealing 135 (+4% / level) damage to nearby enemies, and stunning them for 1.25 seconds.",
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_leap.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 36
      }
    },
    {
      id: "BarbarianWrathoftheBerserker",
      name: "Wrath of the Berserker",
      descriptionShort: "Increase damage and reduce disable duration",
      descriptionLong: "Increase damage dealt by 40%. Reduce the duration of Stuns, Roots, and Slows against Sonya by 50%. Lasts 15 seconds, and extends by 1 second for every 10 Fury gained.",
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_wrathoftheberserker.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 0
      }
    }
  ],
  talents: [
    [
      {
        id: "BarbarianFuriousBlow",
        name: "Furious Blow",
        descriptionShort: "Empower Seismic Slam",
        descriptionLong: "Every 4th cast of Seismic Slam deals 40% more damage to the primary target and costs no Fury.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_seismicslam.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 2.6666666666666665
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "BarbarianSeismicSlam"
        ]
      },
      {
        id: "BarbarianWarPaint",
        name: "War Paint",
        descriptionShort: "Basic Attacks heal",
        descriptionLong: "Sonya's Basic Attacks heal for 30% of the damage dealt.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_heal.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 2,
          magicalDamage: 0
        },
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "BarbarianShotofFury",
          "BarbarianFury"
        ]
      },
      {
        id: "BarbarianToughAsNails",
        name: "Tough As Nails",
        descriptionShort: "Periodically gain Physical Armor",
        descriptionLong: "Every 16 seconds, gain 60 Physical Armor against the next enemy Hero Basic Attack, reducing the damage taken by 60%. Stores up to 3 charges. Charges refresh 200% faster while Fury's Movement Speed bonus is active.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_block.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level1"
      }
    ],
    [
      {
        id: "BarbarianShatteredGround",
        name: "Shattered Ground",
        descriptionShort: "Increase Seismic Slam splash damage",
        descriptionLong: "Increase Seismic Slam's splash damage by 250%. Targeting a Hero with Seismic Slam further increases its splash damage by 250%, while targeting other enemies increases the length of its splash by 66%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_seismicslam.png",
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
          "BarbarianSeismicSlam"
        ]
      },
      {
        id: "BarbarianHurricane",
        name: "Hurricane",
        descriptionShort: "Whirlwind removes Slows and Roots",
        descriptionLong: "Reduce the cooldown of Whirlwind by 2 seconds. Casting Whirlwind removes all Slows and Roots from Sonya.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_whirlwind.png",
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
          "BarbarianWhirlwind"
        ]
      },
      {
        id: "BarbarianShotOfFury",
        name: "Shot Of Fury",
        descriptionShort: "Activate to gain Fury",
        descriptionLong: "Activate to gain 50 Fury. Usable while Whirlwinding. Passive: After casting Seismic Slam, your next Basic Attack deals 40% more damage.",
        cooldown: 40,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_fury.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 2.6666666666666665
        },
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "BarbarianShotofFury",
          "BarbarianFury"
        ]
      }
    ],
    [
      {
        id: "BarbarianPoisonedSpear",
        name: "Poisoned Spear",
        descriptionShort: "Ancient Spear deals damage over time",
        descriptionLong: "Ancient Spear deals an additional 100% damage over 6 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_ancientspear.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 6.666666666666667
        },
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "BarbarianAncientSpear"
        ]
      },
      {
        id: "BarbarianLifeFunnel",
        name: "Life Funnel",
        descriptionShort: "Increases Whirlwind healing",
        descriptionLong: "Increases the healing of Whirlwind to 35% of damage dealt.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_whirlwind.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 2.3333333333333335,
          magicalDamage: 0
        },
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "BarbarianWhirlwind"
        ]
      },
      {
        id: "BarbarianBattleRage",
        name: "Battle Rage",
        descriptionShort: "Increase damage to Mercenaries, activate to heal",
        descriptionLong: "Activate to instantly restore 10% of Sonya's maximum Health. Stores up to 2 charges. Usable while Whirlwinding. Passive: Sonya deals 25% more damage to Mercenaries.",
        cooldown: 30,
        charges: {
          chargesMax: 2,
          chargesInitial: 0,
          chargeCost: 1,
          recastCooldown: 8
        },
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_mercenarylord.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 1.6666666666666667
        },
        order: 3,
        tier: "level7"
      }
    ],
    [
      {
        id: "BarbarianHeroicAbilityLeap",
        name: "Leap",
        descriptionShort: "Jump to a location, deal damage, and stun enemies",
        descriptionLong: "Leap into the air, dealing 135 (+4% / level) damage to nearby enemies, and stunning them for 1.25 seconds.",
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_leap.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 36
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "BarbarianLeap"
        ]
      },
      {
        id: "BarbarianHeroicAbilityWrathoftheBerserker",
        name: "Wrath of the Berserker",
        descriptionShort: "Increase damage and reduce disable duration",
        descriptionLong: "Increase damage dealt by 40%. Reduce the duration of Stuns, Roots, and Slows against Sonya by 50%. Lasts 15 seconds, and extends by 1 second for every 10 Fury gained.",
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_wrathoftheberserker.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "BarbarianWrathoftheBerserker"
        ]
      }
    ],
    [
      {
        id: "BarbarianMysticalSpear",
        name: "Mystical Spear",
        descriptionShort: "Ancient Spear always pulls, cooldown reduced",
        descriptionLong: "Ancient Spear always pulls Sonya to the target location even if it doesn't hit an enemy. When used this way, Ancient Spear's cooldown is reduced by 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_ancientspear.png",
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
          "BarbarianAncientSpear"
        ]
      },
      {
        id: "BarbarianRuthless",
        name: "Ruthless",
        descriptionShort: "Increase Whirlwind damage to low Health targets",
        descriptionLong: "Whirlwind deals an additional 50 (+4% / level) damage per second to Heroes below 50% Health. Does not generate additional healing.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_whirlwind.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 13.333333333333334
        },
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "BarbarianWhirlwind"
        ]
      },
      {
        id: "BarbarianNoEscape",
        name: "No Escape",
        descriptionShort: "Abilities give more Movement Speed",
        descriptionLong: "Increases the Movement Speed bonus from using Basic and Heroic Abilities to 20%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_fury.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "BarbarianShotofFury",
          "BarbarianFury"
        ]
      }
    ],
    [
      {
        id: "BarbarianGiantSlammer",
        name: "Giant Slammer",
        descriptionShort: "Basic Attacks and Seismic Slam deal bonus damage",
        descriptionLong: "Basic Attacks and Seismic Slam deal an additional 1.5% of Heroes' maximum Health as damage and heal Sonya for 60% of the damage dealt.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_seismicslam.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 4,
          magicalDamage: 0
        },
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "BarbarianSeismicSlam"
        ]
      },
      {
        id: "BarbarianRampage",
        name: "Rampage",
        descriptionShort: "Basic Attacks reduce Ancient Spear cooldown",
        descriptionLong: "Increase Basic Attack damage by 25%. Basic Attacks reduce the cooldown of Ancient Spear by 1.5 seconds.",
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
        order: 2,
        tier: "level16"
      },
      {
        id: "BarbarianNervesOfSteel",
        name: "Nerves of Steel",
        descriptionShort: "Activate to gain a Shield",
        descriptionLong: "Activate to gain 25% of your maximum Health as a Shield for 3 seconds. Usable while Whirlwinding.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_nervesofsteel.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level16"
      }
    ],
    [
      {
        id: "BarbarianArreatCrater",
        name: "Arreat Crater",
        descriptionShort: "Leap creates a crater and has reduced cooldown",
        descriptionLong: "Leap leaves behind an impassable crater for 5 seconds.  Reduces Leap's cooldown by 20 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_leap.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "BarbarianLeap"
        ],
        prerequisiteTalentIds: [
          "BarbarianHeroicAbilityLeap"
        ]
      },
      {
        id: "BarbarianStridingGiant",
        name: "Striding Giant",
        descriptionShort: "Wrath of the Berserker can grant Unstoppable",
        descriptionLong: "Wrath of the Berserker increases maximum Health by 10% and grants Striding Giant, which can be activated to become Unstoppable for 2 seconds. 30 second cooldown.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_wrathoftheberserker.png",
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
          "BarbarianWrathoftheBerserker"
        ],
        prerequisiteTalentIds: [
          "BarbarianHeroicAbilityWrathoftheBerserker"
        ]
      },
      {
        id: "BarbarianCompositeSpear",
        name: "Composite Spear",
        descriptionShort: "Increase Ancient Spear range, grants Armor",
        descriptionLong: "Increases Ancient Spear's range by 50%. Hitting an enemy Hero with Ancient Spear grants 25 Armor for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_ancientspear.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "BarbarianAncientSpear"
        ]
      },
      {
        id: "BarbarianIgnorePain",
        name: "Ignore Pain",
        descriptionShort: "Activate to gain massive Armor",
        descriptionLong: "Activate to gain 60 Armor for 4 seconds, taking 60% less damage. Usable while Whirlwinding.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sonya_ignorepain.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 4,
        tier: "level20"
      }
    ]
  ],
  analysis: {
    tankiness: 73.82297551789078,
    physicalDamage: 52.49999999999999,
    mobility: 17.38446396885035,
    healing: 0.9890544639324806,
    magicalDamage: 100
  }
};
      
export default sonya;