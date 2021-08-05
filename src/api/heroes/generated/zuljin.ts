import { Hero } from '../heroes';
      
const zuljin: Hero = {
  name: "Zul'jin",
  nameNormalized: "zuljin",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.75,
  movementSpeed: 4.8398,
  health: {
    amount: 1875,
    scale: 0.04,
    regenRate: 3.9023,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "ZuljinHeroWeapon",
      range: 5.5,
      period: 0.8,
      damage: 94,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/zuljin.png",
  abilities: [
    {
      id: "ZuljinBerserker",
      name: "Berserker",
      descriptionShort: "Increased Attack Speed as Health gets lower",
      descriptionLong: "Activate to increase Basic Attack damage by 25% but consume 2% maximum Health per attack. Passive: Zul'jin attacks 1% faster for every 1% of maximum Health missing. You Want Axe?Quest: Every 5 Basic Attacks against Heroes permanently increases Basic Attack damage by 1. Reward: After attacking Heroes 75 times, Basic Attack range is increased by 1.1. Reward: After attacking Heroes 150 times, Twin Cleave now revolves twice.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_berzerker.png",
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
      id: "ZuljinGrievousThrow",
      name: "Grievous Throw",
      descriptionShort: "Throw an Axe, damaging and marking a target, increasing Zul'jin's Basic Attack damage.",
      descriptionLong: "Zul'jin throws an axe forward, dealing 125 (+4% / level) damage to the first 2 enemies hit and marking them for 6 seconds. Marked enemies take 50% bonus damage from Zul'jin's next 3 Basic Attacks against them.",
      cost: {
        type: "Mana",
        amount: 40
      },
      cooldown: 8,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_grievousthrow.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 15.625
      }
    },
    {
      id: "ZuljinTwinCleave",
      name: "Twin Cleave",
      descriptionShort: "Throw swirling Axes that Slow enemies",
      descriptionLong: "Throw 2 axes in a large, circular arc, dealing 112 (+4% / level) damage and Slowing affected enemies by 15% per axe for 2 seconds.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 10,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_twincleave.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 11.200000000000001
      }
    },
    {
      id: "ZuljinRegeneration",
      name: "Regeneration",
      descriptionShort: "Zul'jin Channels to regenerate Health over time",
      descriptionLong: "Zul'jin channels to regenerate 30% of his maximum Health over 4 seconds. Moving while channeling or taking damage will interrupt this effect.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 15,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_regeneration.png",
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
      id: "ZuljinTazdingo",
      name: "Taz'dingo!",
      descriptionShort: "Become unkillable",
      descriptionLong: "For the next 4 seconds, Zul'jin is Unkillable, and cannot be reduced to less than 1 Health. Taz'dingo!",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 90,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_tazdingo.png",
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
      id: "ZuljinGuillotine",
      name: "Guillotine",
      descriptionShort: "Deal heavy area damage",
      descriptionLong: "Zul'jin launches a massive axe into the air that drops on the targeted area, dealing 330 (+4% / level) damage plus bonus damage the lower his Health is.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 40,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_guillotine.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 22
      }
    }
  ],
  talents: [
    [
      {
        id: "ZuljinBoneslicer",
        name: "Boneslicer",
        descriptionShort: "Empower Grievous Throw",
        descriptionLong: "Grievous Throw now pierces through all enemies hit and restores 15 Mana per Hero hit. Additionally, Grievous Throw's mark is no longer removed by Basic Attacks.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_grievousthrow.png",
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
          "ZuljinGrievousThrow"
        ]
      },
      {
        id: "ZuljinRecklessness",
        name: "Recklessness",
        descriptionShort: "Low Health increases damage",
        descriptionLong: "While Zul'jin is below 75% Health, he gains 10% Spell Power. While he is below 50% Health, his Basic Attack damage is increased by 15% and Basic Attacks against Heroes grant an additional stack of You Want Axe?.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_berzerker.png",
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
          "ZuljinCancelBerserker",
          "ZuljinBerserker"
        ]
      },
      {
        id: "ZuljinHeadhunter",
        name: "Headhunter",
        descriptionShort: "Quest: Takedowns increase damage",
        descriptionLong: "Quest: Zul'jin's first Takedown against each enemy Hero permanently increases his damage dealt by 2%. Reward: After getting Takedowns on every enemy Hero, Basic Attack range is increased by 1.1.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_headhunter.png",
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
        isQuest: true
      }
    ],
    [
      {
        id: "ZuljinTrollsBlood",
        name: "Troll's Blood",
        descriptionShort: "Regeneration heals more",
        descriptionLong: "Increase Regeneration's healing by 25%. If Regeneration fully finishes, restore 10% of Zul'jin's maximum Mana.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_regeneration.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 4.666666666666667,
          magicalDamage: 0
        },
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "ZuljinRegeneration"
        ]
      },
      {
        id: "ZuljinVoodooShuffle",
        name: "Voodoo Shuffle",
        descriptionShort: "Activate to remove Roots and Slows",
        descriptionLong: "Activate to remove Roots and Slows. Passive: Lower the cooldown and Mana cost of Regeneration by 40%.",
        cooldown: 10,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_regeneration_a.png",
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
          "ZuljinRegeneration"
        ]
      },
      {
        id: "Zul'jinAmaniRageAmaniHide",
        name: "Amani Hide",
        descriptionShort: "Grant Armor and lower cooldown",
        descriptionLong: "Lower the cooldown of Amani Rage by 10 seconds and gain 15 Armor while regenerating Health from it.",
        cooldown: null,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_davoodooshuffle.png",
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
          "ZuljinAmaniRage"
        ]
      }
    ],
    [
      {
        id: "ZuljinViciousAssault",
        name: "Vicious Assault",
        descriptionShort: "Increase Grievous Throw duration and damage",
        descriptionLong: "Increase the duration of Grievous Throw's mark by 3 seconds and its damage bonus by 45%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_grievousthrow.png",
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
          "ZuljinGrievousThrow"
        ]
      },
      {
        id: "ZuljinArcaniteAxes",
        name: "Arcanite Axes",
        descriptionShort: "Quest: Increase Twin Cleave damage",
        descriptionLong: "Quest: Twin Cleave's damage is permanently increased by 0.75 every time it hits a Hero.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_twincleave.png",
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
          "ZuljinTwinCleave"
        ],
        isQuest: true
      },
      {
        id: "ZuljinFerocity",
        name: "Ferocity",
        descriptionShort: "Increases Berserker's Attack Speed bonus",
        descriptionLong: "Increases the Attack Speed bonus of Berserker by 40%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_berzerker.png",
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
          "ZuljinCancelBerserker",
          "ZuljinBerserker"
        ]
      }
    ],
    [
      {
        id: "ZuljinTazdingo",
        name: "Taz'dingo!",
        descriptionShort: "Become unkillable",
        descriptionLong: "For the next 4 seconds, Zul'jin is Unkillable, and cannot be reduced to less than 1 Health. Taz'dingo!",
        cost: {
          type: "Mana",
          amount: 75
        },
        cooldown: 90,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_tazdingo.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "ZuljinTazdingo"
        ]
      },
      {
        id: "ZuljinGuillotine",
        name: "Guillotine",
        descriptionShort: "Deal heavy area damage",
        descriptionLong: "Zul'jin launches a massive axe into the air that drops on the targeted area, dealing 330 (+4% / level) damage plus bonus damage the lower his Health is.",
        cost: {
          type: "Mana",
          amount: 70
        },
        cooldown: 40,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_guillotine.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 22
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "ZuljinGuillotine"
        ]
      }
    ],
    [
      {
        id: "ZuljinLacerate",
        name: "Lacerate",
        descriptionShort: "Increase Twin Cleave Slow",
        descriptionLong: "Increase the Slow amount of each Twin Cleave axe by 10% and its duration by 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_twincleave.png",
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
          "ZuljinTwinCleave"
        ]
      },
      {
        id: "ZuljinEyeOfZuljin",
        name: "Eye of Zul'jin",
        descriptionShort: "Basic Attacks grant Move Speed",
        descriptionLong: "Basic Attacks against enemy Heroes grant Zul'jin 6% Movement Speed for 2 seconds, up to 30%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_base.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13"
      },
      {
        id: "ZuljinEnsnare",
        name: "Ensnare",
        descriptionShort: "Throw a net that Roots enemies",
        descriptionLong: "Throw a net forward, Rooting the first enemy Hero hit for 1.5 seconds. If no Heroes are hit, Ensnare's cooldown is reduced to 10 seconds.",
        cooldown: 40,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_trollnet.png",
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
        id: "ZuljinNoMercyTalent",
        name: "No Mercy!",
        descriptionShort: "Basic Attacks ignore Armor, deal more damage",
        descriptionLong: "Zul'jin's Basic Attacks against enemy Heroes marked with Grievous Throw ignore Armor and deal an additional 2% of maximum Health as damage.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_grievousthrow.png",
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
          "ZuljinGrievousThrow"
        ]
      },
      {
        id: "ZuljinWrongPlaceWrongTime",
        name: "Wrong Place Wrong Time",
        descriptionShort: "Bonus Twin Cleave damage at apex",
        descriptionLong: "If an enemy is hit by both Twin Cleave axes at the same time, they take an additional 100 (+4% / level) damage and count as 5 Hero hits for You Want Axe?.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_twincleave.png",
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
          "ZuljinTwinCleave"
        ]
      },
      {
        id: "ZuljinLetTheKillingBegin",
        name: "Let the Killing Begin",
        descriptionShort: "Killing enemies increases Attack Speed",
        descriptionLong: "When Zul'jin kills an enemy, his Attack Speed is increased by 5%, up to 40%, for 12 seconds. Basic Attacks refresh the duration. Hero Takedowns instantly grant 40% Attack Speed.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_speed.png",
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
        id: "ZuljinAmaniResilience",
        name: "Amani Resilience",
        descriptionShort: "Taz'dingo duration increased, restores Health",
        descriptionLong: "Increase Taz'dingo's duration by 1 second. Upon expiring, Zul'jin heals for 50% of the damage he dealt during Taz'dingo.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_tazdingo.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 6.666666666666667,
          magicalDamage: 0
        },
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "ZuljinTazdingo"
        ],
        prerequisiteTalentIds: [
          "ZuljinTazdingo"
        ]
      },
      {
        id: "ZuljinBuzzsaw",
        name: "Buzzsaw",
        descriptionShort: "Guillotine keeps traveling forward",
        descriptionLong: "After impact, Guillotine continues forward, dealing 75% damage to enemies hit. If a Hero is killed by Guillotine, Zul'jin is instantly healed to full.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_guillotine.png",
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
          "ZuljinGuillotine"
        ],
        prerequisiteTalentIds: [
          "ZuljinGuillotine"
        ]
      },
      {
        id: "ZuljinForestMedicine",
        name: "Forest Medicine",
        descriptionShort: "Regeneration cannot be interrupted",
        descriptionLong: "Regeneration is no longer Channeled, and cannot be interrupted.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zuljin_regeneration.png",
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
          "ZuljinRegeneration"
        ]
      },
      {
        id: "ZuljinPassiveASurpriseForYa",
        name: "A Surprise For Ya",
        descriptionShort: "Basic Attacks bounce to a nearby enemy",
        descriptionLong: "Basic Attacks bounce to a nearby enemy for 50% damage, prioritizing enemy Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_aoe.png",
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
    tankiness: 56.49717514124294,
    physicalDamage: 58.75,
    mobility: 24.199,
    healing: 0,
    magicalDamage: 21.61280986107328
  }
};
      
export default zuljin;