import { Hero } from '../heroes';
      
const malfurion: Hero = {
  name: "Malfurion",
  nameNormalized: "malfurion",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.75,
  movementSpeed: 4.8398,
  health: {
    amount: 1525,
    scale: 0.04,
    regenRate: 3.1796,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroMalfurion",
      range: 5.5,
      period: 0.9,
      damage: 60,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/malfurion.png",
  abilities: [
    {
      id: "MalfurionInnervate",
      name: "Innervate",
      descriptionShort: "Grant Mana to an ally and reduce their cooldowns",
      descriptionLong: "Grant an allied Hero 20% of their maximum Mana over 5 seconds. While affected by Innervate, their Basic Ability cooldowns recharge 50% faster. Cannot be used on Heroes that do not use Mana.",
      cooldown: 25,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 1
      },
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_innerrvate.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 0
      }
    },
    {
      id: "MalfurionRegrowth",
      name: "Regrowth",
      descriptionShort: "Heal an allied Hero over time",
      descriptionLong: "Heal an allied Hero for 380 (+4% / level) Health over 20 seconds.",
      cost: {
        type: "Mana",
        amount: 35
      },
      cooldown: 5,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_regrowth.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 304,
        magicalDamage: 0
      }
    },
    {
      id: "MalfurionMoonfire",
      name: "Moonfire",
      descriptionShort: "Damage enemies in an area, and heal allies with Regrowth",
      descriptionLong: "Deal 90 (+4% / level) damage to enemies in an area and reveal them for 2 seconds. Allies with an active Regrowth are healed for 130 (+4% / level) Health for each enemy Hero hit by Moonfire.",
      cost: {
        type: "Mana",
        amount: 10
      },
      cooldown: 3,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_moonfire.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 173.33333333333331,
        magicalDamage: 120
      }
    },
    {
      id: "MalfurionEntanglingRoots",
      name: "Entangling Roots",
      descriptionShort: "Root and damage Heroes in an area",
      descriptionLong: "Root enemy Heroes in an area for 1.25 seconds, and deal 117 (+4% / level) damage over the duration. Affected area grows over 3 seconds.",
      cost: {
        type: "Mana",
        amount: 65
      },
      cooldown: 12,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_entanglingroots.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 39
      }
    },
    {
      id: "MalfurionTranquility",
      name: "Tranquility",
      descriptionShort: "Continually heal nearby allies",
      descriptionLong: "Heal nearby allied Heroes for 80 (+4% / level) Health per second for 8 seconds. Allies affected by Regrowth within Tranquility's area gain 10 Armor.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 80,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_tranquility.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 21.333333333333332,
        magicalDamage: 0
      }
    },
    {
      id: "MalfurionTwilightDream",
      name: "Twilight Dream",
      descriptionShort: "Silence and damage nearby enemies",
      descriptionLong: "After 0.5 seconds, deal 310 (+4% / level) damage in a large area around Malfurion, Silencing enemies making them unable to use Abilities for 3 seconds.",
      cost: {
        type: "Mana",
        amount: 100
      },
      cooldown: 90,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_twilightdream.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 82.66666666666667
      }
    }
  ],
  talents: [
    [
      {
        id: "MalfurionEntanglingRootsDeepRootsTalent",
        name: "Deep Roots",
        descriptionShort: "Quest: Entangling Roots grants permanent Mana",
        descriptionLong: "Entangling Roots grows 25% larger, and persist on the ground 40% longer. Repeatable Quest: Every time an enemy Hero becomes Rooted, gain 10 Mana permanently.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_entanglingroots.png",
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
          "MalfurionEntanglingRoots"
        ],
        isQuest: true
      },
      {
        id: "MalfurionMasteryVengefulRoots",
        name: "Vengeful Roots",
        descriptionShort: "Quest: Entangling Roots spawns a Treant",
        descriptionLong: "Entangling Roots spawns a Treant that deals 58 damage per second and lasts 10 seconds. Repeatable Quest: Hitting enemy Heroes with Entangling Roots permanently increases the Treant's Basic Attack damage by 7.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_entanglingroots_b.png",
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
          "MalfurionEntanglingRoots"
        ],
        isQuest: true
      },
      {
        id: "MalfurionEntanglingRootsEmeraldDreams",
        name: "Emerald Dreams",
        descriptionShort: "Entangling Roots Sleeps",
        descriptionLong: "Entangling Roots Sleeps enemy Heroes for 2 seconds after its Root expires.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_entanglingroots_a.png",
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
        id: "MalfurionRejuvenation",
        name: "Rejuvenation",
        descriptionShort: "Regrowth also applies to Malfurion",
        descriptionLong: "Casting Regrowth on an ally also grants Malfurion its effect for 50% normal duration.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_regrowth.png",
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
          "MalfurionRegrowth"
        ]
      },
      {
        id: "MalfurionCelestialAlignment",
        name: "Celestial Alignment",
        descriptionShort: "Moonfire reveals longer, empowers Attacks",
        descriptionLong: "Increase Moonfire's reveal duration by 3 seconds. Malfurion's Basic Attacks against Heroes revealed by Moonfire deal 75% more damage.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_moonfire.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 5
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "MalfurionMoonfire"
        ]
      },
      {
        id: "MalfurionCombatStyleShandosClarity",
        name: "Shan'do's Clarity",
        descriptionShort: "Gain a second charge of Innervate",
        descriptionLong: "Gain a second charge of Innervate. Its cooldown recharges 25% faster per ally affected by Regrowth.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_innerrvate.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "MalfurionInnervate"
        ]
      }
    ],
    [
      {
        id: "MalfurionWildGrowthTalent",
        name: "Wild Growth",
        descriptionShort: "Moonfire extends Regrowth duration",
        descriptionLong: "Each Hero hit by Moonfire extends the duration of currently active Regrowths by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_wildgrowth.png",
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
          "MalfurionRegrowth",
          "MalfurionMoonfire"
        ]
      },
      {
        id: "MalfurionMasteryTenaciousRootsEntanglingRoots",
        name: "Tenacious Roots",
        descriptionShort: "Extend Entangling Roots, Stuns reset cooldown",
        descriptionLong: "Increase the Root duration of Entangling Roots by 25%. When Malfurion is Stunned, the cooldown of Entangling Roots is instantly reset. This can only occur every 10 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_entanglingroots.png",
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
          "MalfurionEntanglingRoots"
        ]
      },
      {
        id: "MalfurionNaturesCureRegrowth",
        name: "Nature's Cure",
        descriptionShort: "Activate to remove disablers from allies",
        descriptionLong: "Activate to remove all Stuns, Roots, and Slows from allies affected by Regrowth.",
        cooldown: 45,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_regrowth.png",
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
          "MalfurionRegrowth"
        ]
      }
    ],
    [
      {
        id: "MalfurionHeroicAbilityTranquility",
        name: "Tranquility",
        descriptionShort: "Continually heal nearby allies",
        descriptionLong: "Heal nearby allied Heroes for 80 (+4% / level) Health per second for 8 seconds. Allies affected by Regrowth within Tranquility's area gain 10 Armor.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 80,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_tranquility.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 21.333333333333332,
          magicalDamage: 0
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "MalfurionTranquility"
        ]
      },
      {
        id: "MalfurionHeroicAbilityTwilightDream",
        name: "Twilight Dream",
        descriptionShort: "Silence and damage nearby enemies",
        descriptionLong: "After 0.5 seconds, deal 310 (+4% / level) damage in a large area around Malfurion, Silencing enemies making them unable to use Abilities for 3 seconds.",
        cost: {
          type: "Mana",
          amount: 100
        },
        cooldown: 90,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_twilightdream.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 82.66666666666667
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "MalfurionTwilightDream"
        ]
      }
    ],
    [
      {
        id: "MalfurionRegrowthNaturesSwiftness",
        name: "Nature's Swiftness",
        descriptionShort: "Regrowths grant Malfurion Move Speed",
        descriptionLong: "Malfurion gains 6% Movement Speed for every active Regrowth.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_regrowth.png",
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
          "MalfurionRegrowth"
        ]
      },
      {
        id: "MalfurionMasteryHinderingMoonfire",
        name: "Hindering Moonfire",
        descriptionShort: "Moonfire Slows",
        descriptionLong: "Moonfire Slows Heroes hit by 25% for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_moonfire.png",
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
          "MalfurionMoonfire"
        ]
      },
      {
        id: "MalfurionRevitalizeInnervateTalent",
        name: "Revitalize",
        descriptionShort: "Innervate also benefits Malfurion",
        descriptionLong: "Using Innervate also grants Malfurion 80 Mana and causes his Basic Ability cooldowns to refresh 50% faster for 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_innerrvate.png",
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
          "MalfurionInnervate"
        ]
      }
    ],
    [
      {
        id: "MalfurionYserasGift",
        name: "Ysera's Gift",
        descriptionShort: "Increase Regrowth heal at high Health",
        descriptionLong: "While Malfurion is above 75% Health, Regrowth's healing-over-time is increased by 60%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_regrowth.png",
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
          "MalfurionRegrowth"
        ]
      },
      {
        id: "MalfurionRegrowthNaturesBalance",
        name: "Nature's Balance",
        descriptionShort: "Increase Moonfire area, Regrowth duration",
        descriptionLong: "Increase Moonfire's area by 25% and Regrowth's duration by 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_wildgrowth.png",
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
          "MalfurionRegrowth",
          "MalfurionMoonfire"
        ]
      },
      {
        id: "MalfurionMoonfireMoonlitHarmonyTalent",
        name: "Moonlit Harmony",
        descriptionShort: "Moonfire heals more per ally affected by Regrowth",
        descriptionLong: "Increase Moonfire's heal by 15% per ally affected by Regrowth.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_wildgrowth_a.png",
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
          "MalfurionRegrowth",
          "MalfurionMoonfire"
        ]
      }
    ],
    [
      {
        id: "MalfurionMasterySerenity",
        name: "Serenity",
        descriptionShort: "Empower Tranquility",
        descriptionLong: "Each enemy Hero hit by Moonfire reduces the cooldown of Tranquility by 3 seconds. Increase Tranquility's healing by 25% and 10% per ally affected by Regrowth.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_tranquility.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 1.6666666666666667,
          magicalDamage: 0
        },
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "MalfurionTranquility"
        ],
        prerequisiteTalentIds: [
          "MalfurionHeroicAbilityTranquility"
        ]
      },
      {
        id: "MalfurionMasteryAstralCommunion",
        name: "Astral Communion",
        descriptionShort: "Activate to teleport and cast Twilight Dream",
        descriptionLong: "Activate to Channel for 1 second, and then instantly teleport and cast Twilight Dream at the targeted location.  Cooldown is shared with Twilight Dream. Passive: Increase Twilight Dream's Silence duration to 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_twilightdream.png",
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
          "MalfurionTwilightDream"
        ],
        prerequisiteTalentIds: [
          "MalfurionHeroicAbilityTwilightDream"
        ]
      },
      {
        id: "MalfurionLifebloomRegrowth",
        name: "Lifebloom",
        descriptionShort: "Regrowth instantly heals for missing Health",
        descriptionLong: "Casting Regrowth instantly heals its target for 10% of their missing Health.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_regrowth.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.6666666666666666,
          magicalDamage: 0
        },
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "MalfurionRegrowth"
        ]
      },
      {
        id: "MalfurionMasteryLunarShower",
        name: "Lunar Shower",
        descriptionShort: "Successive Moonfires are more powerful",
        descriptionLong: "If Moonfire hits a Hero, its cooldown is reduced by 1 second and the next Moonfire within 6 seconds deals 20% more damage. This damage bonus stacks up to 60%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malfurion_moonfire_a.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 1.3333333333333333
        },
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "MalfurionMoonfire"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 45.951035781544256,
    physicalDamage: 33.33333333333333,
    mobility: 17.38446396885035,
    healing: 98.6416985361994,
    magicalDamage: 26.74396168164896
  }
};
      
export default malfurion;