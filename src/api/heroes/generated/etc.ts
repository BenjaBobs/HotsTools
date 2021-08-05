import { Hero } from '../heroes';
      
const etc: Hero = {
  name: "E.T.C.",
  nameNormalized: "etc",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.9375,
  movementSpeed: 4.8398,
  health: {
    amount: 2250,
    scale: 0.04,
    regenRate: 4.6875,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroL90ETC",
      range: 1.5,
      period: 0.8,
      damage: 99,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/etc.png",
  abilities: [
    {
      id: "RockstarDummy",
      name: "Rockstar",
      descriptionShort: "After using an ability, E. T. C. gains Armor",
      descriptionLong: "After E. T. C. uses a Basic or Heroic ability, he gains 20 Armor for 2 seconds.  This effect does not stack with itself.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_rockstar.png",
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
      id: "L90ETCPowerslide",
      name: "Powerslide",
      descriptionShort: "Dash to an area, stunning and damaging enemies hit",
      descriptionLong: "Slide to a location dealing 91 (+4% / level) damage and stunning enemies hit for 1.25 second.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 12,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_powerslide.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 7.583333333333333
      }
    },
    {
      id: "L90ETCFaceMelt",
      name: "Face Melt",
      descriptionShort: "Knock back and damage nearby enemies",
      descriptionLong: "Deals 68 (+4% / level) damage to nearby enemies, knocking them back.",
      cost: {
        type: "Mana",
        amount: 55
      },
      cooldown: 12,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_facemelt.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 5.666666666666666
      }
    },
    {
      id: "L90ETCGuitarSolo",
      name: "Guitar Solo",
      descriptionShort: "Regenerate Health",
      descriptionLong: "Regenerate 66 (+4% / level) Health per second for 4 seconds.",
      cost: {
        type: "Mana",
        amount: 40
      },
      cooldown: 9,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_guitarsolo.png",
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
      id: "L90ETCMoshPit",
      name: "Mosh Pit",
      descriptionShort: "Nearby enemies must dance",
      descriptionLong: "After 0.75 seconds, channel to stun nearby enemies for 4 seconds.",
      cost: {
        type: "Mana",
        amount: 100
      },
      cooldown: 120,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_moshpit.png",
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
      id: "L90ETCStageDive",
      name: "Stage Dive",
      descriptionShort: "Dive to a location and deal damage",
      descriptionLong: "Leap to target location, landing after 2.75 seconds, dealing 330 (+4% / level) damage to enemies in the area, and slowing them by 50% for 3 seconds.",
      cost: {
        type: "Mana",
        amount: 100
      },
      cooldown: 75,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_stagedive.png",
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
        id: "ETCMasteryGuitarHero",
        name: "Guitar Hero",
        descriptionShort: "Basic Attacks add duration, heal during Guitar Solo",
        descriptionLong: "While Guitar Solo is active, E. T. C. heals for 50% of his damage dealt by Basic Attacks.  Basic Attacks increase the duration of Guitar Solo by 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_guitarsolo.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 6.666666666666667,
          magicalDamage: 0
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "L90ETCGuitarSolo"
        ]
      },
      {
        id: "ETCMasteryProgRock",
        name: "Prog Rock",
        descriptionShort: "Quest: Regen Globes empower Guitar Solo",
        descriptionLong: "Quest: Gathering a Regeneration Globe permanently increases the healing per second of Guitar Solo by 5, to a maximum of 100Reward: After gathering 20 Regeneration Globes, Guitar Solo also heals nearby allied Heroes for 50 (+4% / level) Health every second while it is active.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_guitarsolo_a.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 1.3333333333333333,
          magicalDamage: 0
        },
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "L90ETCGuitarSolo"
        ],
        isQuest: true
      },
      {
        id: "ETCBlockParty",
        name: "Block Party",
        descriptionShort: "Rockstar grants allies Physical Armor",
        descriptionLong: "Using a Basic or Heroic ability also gives nearby allied Heroes a stack of Block, granting 75 Physical Armor against the next Hero Basic Attack for 8 seconds, reducing the damage taken by 75%. Maximum 2 stacks of Block.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_rockstar.png",
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
          "RockstarDummy"
        ]
      }
    ],
    [
      {
        id: "ETCCrowdSurfer",
        name: "Crowd Surfer",
        descriptionShort: "Powerslide can go over terrain",
        descriptionLong: "Allows Powerslide to travel over walls and terrain. If no enemies are hit, reduce the cooldown by 5 seconds and refund the Mana cost.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_powerslide.png",
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
          "L90ETCPowerslide"
        ]
      },
      {
        id: "L90ETCMasteryFaceMeltLoudSpeakers",
        name: "Loud Speakers",
        descriptionShort: "Increases range and knockback of Face Melt",
        descriptionLong: "Increases Face Melt range and knockback by 50%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_facemelt.png",
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
          "L90ETCFaceMelt"
        ]
      },
      {
        id: "ETCMasterySpeedMetal",
        name: "Speed Metal",
        descriptionShort: "Move Speed is added to Rockstar",
        descriptionLong: "Using a Basic or Heroic ability also gives nearby allied Heroes 20% Movement Speed for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_speedmetal.png",
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
          "RockstarDummy"
        ]
      }
    ],
    [
      {
        id: "L90ETCMasteryFaceMeltPinballWizard",
        name: "Pinball Wizard",
        descriptionShort: "Increases Face Melt damage after Powerslide",
        descriptionLong: "Face Melt does 300% more damage to enemies recently affected by Powerslide.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_facemelt.png",
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
          "L90ETCFaceMelt"
        ]
      },
      {
        id: "ETCMasteryHammeron",
        name: "Hammer-on",
        descriptionShort: "Guitar Solo increases Basic Attack damage",
        descriptionLong: "While Guitar Solo is active your Basic Attacks deal 30% more damage.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_guitarsolo.png",
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
          "L90ETCGuitarSolo"
        ]
      },
      {
        id: "ETCCombatStyleEchoPedal",
        name: "Echo Pedal",
        descriptionShort: "Abilities cause area damage",
        descriptionLong: "Using a Basic or Heroic Ability releases two pulses of 15 (+4% / level) damage.  This deals 250% bonus damage to Minions, Mercenaries, and Monsters. The first occurs instantly, the second occurs 2 seconds later.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_echopedal.png",
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
          "RockstarDummy"
        ]
      }
    ],
    [
      {
        id: "ETCHeroicAbilityMoshPit",
        name: "Mosh Pit",
        descriptionShort: "Nearby enemies must dance",
        descriptionLong: "After 0.75 seconds, channel to stun nearby enemies for 4 seconds.",
        cost: {
          type: "Mana",
          amount: 100
        },
        cooldown: 120,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_moshpit.png",
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
          "L90ETCMoshPit"
        ]
      },
      {
        id: "ETCHeroicAbilityStageDive",
        name: "Stage Dive",
        descriptionShort: "Dive to a location and deal damage",
        descriptionLong: "Leap to target location, landing after 2.75 seconds, dealing 330 (+4% / level) damage to enemies in the area, and slowing them by 50% for 3 seconds.",
        cost: {
          type: "Mana",
          amount: 100
        },
        cooldown: 75,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_stagedive.png",
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
          "L90ETCStageDive"
        ]
      }
    ],
    [
      {
        id: "ETCMasteryMicCheck",
        name: "Mic Check",
        descriptionShort: "Reduces Face Melt cooldown when hitting multiple enemies",
        descriptionLong: "Hitting at least 2 targets with Face Melt reduces its cooldown by 6 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_facemelt.png",
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
          "L90ETCFaceMelt"
        ]
      },
      {
        id: "ETCMasteryEncore",
        name: "Encore",
        descriptionShort: "Face Melt will knock enemies away a second time, reduces Heroic Ability cooldown",
        descriptionLong: "Face Melt leaves an Amp behind, which will knock enemies away again 2 seconds later. Passive: Each enemy Hero hit by Face Melt or the Amp reduces your Heroic Ability cooldown by 5%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_facemelt_a.png",
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
          "L90ETCFaceMelt"
        ]
      },
      {
        id: "ETCMasteryFaceSmelt",
        name: "Face Smelt",
        descriptionShort: "Face Melt slows enemies",
        descriptionLong: "Face Melt slows enemies by 50% fading over 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_facemelt_b.png",
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
          "L90ETCFaceMelt"
        ]
      }
    ],
    [
      {
        id: "ETCMasteryShowStopper",
        name: "Show Stopper",
        descriptionShort: "Powerslide gives Armor",
        descriptionLong: "After using Powerslide, gain 35 Armor for 4 seconds, reducing all damage taken by 35%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_powerslide.png",
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
          "L90ETCPowerslide"
        ]
      },
      {
        id: "ETCMasteryGuitarSoloAggressiveShredding",
        name: "Aggressive Shredding",
        descriptionShort: "Basic Attacks reduce Guitar Solo cooldown",
        descriptionLong: "E. T. C.'s Basic Attacks reduce the cooldown of Guitar Solo by 0.75 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_guitarsolo.png",
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
          "L90ETCGuitarSolo"
        ]
      },
      {
        id: "GenericTalentImposingPresence",
        name: "Imposing Presence",
        descriptionShort: "Activate to Slow enemy Basic Attacks and Move Speed",
        descriptionLong: "Activate to reduce the Attack Speed by 50% and Movement Speed by 20% of nearby Heroes and Summons for 2.5 seconds. Passive: Heroes and Summons that attack your Hero have their Attack Speed Slowed by 20% for 2.5 seconds.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_imposingpresence.png",
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
        id: "L90ETCMasteryMoshPitTourBus",
        name: "Tour Bus",
        descriptionShort: "Makes Powerslide usable during Mosh Pit",
        descriptionLong: "Mosh Pit refreshes the cooldown of Powerslide. E. T. C. can Powerslide during Mosh Pit, which also increases its duration by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_moshpit.png",
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
          "L90ETCMoshPit"
        ],
        prerequisiteTalentIds: [
          "ETCHeroicAbilityMoshPit"
        ]
      },
      {
        id: "L90ETCMasteryStageDiveCrowdPleaser",
        name: "Crowd Pleaser",
        descriptionShort: "Stage Dive impact area bigger, Slow increased",
        descriptionLong: "Stage Dive's impact area is 50% bigger, and its Slow is increased by 30%.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_stagedive.png",
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
          "L90ETCStageDive"
        ],
        prerequisiteTalentIds: [
          "ETCHeroicAbilityStageDive"
        ]
      },
      {
        id: "L90ETCMasteryDeathMetal",
        name: "Death Metal",
        descriptionShort: "Dying causes Mosh Pit",
        descriptionLong: "Upon dying, a ghost uses Mosh Pit at E. T. C's location.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_etc_moshpit_a.png",
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
          "RockstarDummy"
        ]
      },
      {
        id: "GenericTalentStormShield",
        name: "Storm Shield",
        descriptionShort: "Activate to grant Shields to all nearby allies",
        descriptionLong: "Activate to give all nearby allied Heroes a Shield for 20% of their max Health for 3 seconds.",
        cooldown: 45,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_stormshield.png",
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
      },
      {
        id: "GenericTalentFlashoftheStorms",
        name: "Bolt of the Storm",
        descriptionShort: "Activate to teleport a short distance",
        descriptionLong: "Activate to teleport to a nearby location.",
        cooldown: 70,
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
        order: 5,
        tier: "level20"
      }
    ]
  ],
  analysis: {
    tankiness: 67.79661016949152,
    physicalDamage: 61.87499999999999,
    mobility: 24.199,
    healing: 0,
    magicalDamage: 15.603718332879325
  }
};
      
export default etc;