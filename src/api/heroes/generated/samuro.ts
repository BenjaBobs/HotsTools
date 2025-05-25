import { Hero } from '../heroes';
      
export const samuro: Hero = {
  name: "Samuro",
  nameNormalized: "samuro",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.6875,
  movementSpeed: 4.8398,
  health: {
    amount: 1725,
    scale: 0.04,
    regenRate: 3.5898,
    regenScale: 0.04
  },
  autoAttacks: [
    {
      nameId: "SamuroWeapon",
      range: 2,
      period: 0.6,
      damage: 102,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/samuro.png",
  abilities: [
    {
      id: "SamuroIllusionMaster",
      name: "Image Transmission",
      descriptionShort: "Increase Movement Speed when attacking Heroes",
      descriptionLong: "Activate to switch places with a target Mirror Image, removing most negative effects from Samuro and all Mirror Images. Advancing StrikesBasic Attacks against enemy Heroes increase Samuro's Movement Speed by 25% for 2 seconds.",
      cooldown: 14,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_flowingstrikes.png",
      isPassive: false,
      analysis: {
        mobility: 5.357142857142857,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 0
      }
    },
    {
      id: "SamuroMirrorImageTargeted",
      name: "Mirror Image",
      descriptionShort: "Create Mirror Images to confuse and attack enemies",
      descriptionLong: "Teleport a short distance in the direction of the mouse cursor, creating 2 Mirror Image in the opposite direction with as much Health as Samuro, each dealing 11 (+4% / level) damage with their Basic Attacks. Whenever an Image takes damage, it deals that amount of damage to itself, effectively doubling the damage it takes. Mirror Images last for 8 seconds, and up to 2 Mirror Images can be active at a time. Each time they or Samuro hit an enemy Hero with their Basic Attack, their duration is extended by 1 second. Using Mirror Image removes most negative effects from Samuro.",
      cooldown: 14,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_mirrorimage.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 2.357142857142857
      }
    },
    {
      id: "SamuroCriticalStrike",
      name: "Critical Strike",
      descriptionShort: "Critically Strike for increased damage.",
      descriptionLong: "Activate to cause Samuro and his Mirror Images next Basic Attack within 8 seconds to be a Critical Strike, dealing 50% additional damage. Stealth is not broken when activated. Passive: Samuro and his Images also deal a Critical Strike every 4th Basic Attack.",
      cooldown: 10,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 0.5
      },
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_criticalstrike.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 15
      }
    },
    {
      id: "SamuroWindwalk",
      name: "Wind Walk",
      descriptionShort: "Become Stealthed and gain Movement Speed",
      descriptionLong: "Grant Samuro Stealth for up to 10 seconds or until he attacks, uses an Ability, or takes damage. While Stealthed, Samuro heals for 2% of his maximum Health every second, his Movement Speed is increased by 20% and he can pass through other units. Remaining stationary for at least 1.5 seconds while Stealthed grants Invisible. Samuro is Unrevealable for the first 1 second of Wind Walk.",
      cooldown: 15,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_windwalk.png",
      isPassive: false,
      analysis: {
        mobility: 4,
        physicalDamage: 0,
        tankiness: 0,
        healing: 2,
        magicalDamage: 0
      }
    },
    {
      id: "SamuroBladeStormDummy",
      name: "Bladestorm",
      descriptionShort: "Cause a Bladestorm of destructive force",
      descriptionLong: "Cause a Bladestorm of destructive force around Samuro for 3 seconds, granting him 25 Armor and dealing 180 (+4% / level) damage per second to nearby enemies.",
      cooldown: 30,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_bladestorm.png",
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
      id: "SamuroIllusionMaster",
      name: "Illusion Master",
      descriptionShort: "Mirror Images can be controlled",
      descriptionLong: "Mirror Images can be controlled individually or as a group and their damage is increased by 100%. Passive: Image Transmission's cooldown is reduced to 8 seconds.",
      cooldown: 8,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_illusiondancer.png",
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
        id: "SamuroWayOfIllusion",
        name: "Way of Illusion",
        descriptionShort: "Quest: Image Critical Strikes empower Basic Attacks",
        descriptionLong: "Quest: Every time a Mirror Image Critically Strikes a Hero, Samuro gains 0.25 Attack Damage, up to 10. Reward: After hitting 40 Heroes, Samuro gains an additional 30 Attack Damage.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_mirrorimage.png",
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
          "SamuroMirrorImageTargeted"
        ],
        isQuest: true
      },
      {
        id: "SamuroMirrorImageWayOfTheBlade",
        name: "Way of the Blade",
        descriptionShort: "Critical Strike happens more often",
        descriptionLong: "Critical Strike now happens for Samuro and his Mirror Images every 3rd Basic Attack. Critical Strikes against enemy Heroes from Samuro or his Mirror Images reduces their Physical Armor by 5 for 2.25 seconds, up to a maximum reduction of 15 Physical Armor.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_criticalstrike.png",
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
          "SamuroCriticalStrike"
        ]
      },
      {
        id: "SamuroWayOfTheWind",
        name: "Way of the Wind",
        descriptionShort: "Wind Walk grants Move Speed, restores Health",
        descriptionLong: "After activating or exiting Wind Walk, Samuro gains 40% Movement Speed for 3 seconds. Activating Wind Walk instantly heals Samuro for 3% of his maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_windwalk.png",
        isPassive: false,
        analysis: {
          mobility: 0.6000000000000001,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.6000000000000001,
          magicalDamage: 0
        },
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "SamuroWindwalk"
        ]
      }
    ],
    [
      {
        id: "SamuroMirage",
        name: "Mirage",
        descriptionShort: "Mirror Image grants Spell Armor",
        descriptionLong: "Mirror Image grants Samuro and his Images 40 Spell Armor against the next 2 sources of Spell Damage, reducing their damage by 40%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_mirrorimage.png",
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
          "SamuroMirrorImageTargeted"
        ]
      },
      {
        id: "SamuroWindwalkOneWithTheWind",
        name: "One With The Wind",
        descriptionShort: "Gain Armor during Wind Walk",
        descriptionLong: "While Samuro has Wind Walk active and for 3 seconds after breaking it, both he and his Mirror Images gain 25 Armor, taking 25% reduced damage from all sources.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_windwalk.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 5,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "SamuroWindwalk"
        ]
      },
      {
        id: "SamuroAdvancingStrikesDeflection",
        name: "Deflection",
        descriptionShort: "Advancing Strikes grants Physical Armor",
        descriptionLong: "Advancing Strikes grants Samuro and his Mirror Images 35 Physical Armor.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_flowingstrikes.png",
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
          "SamuroIllusionMaster"
        ]
      }
    ],
    [
      {
        id: "SamuroBurningBlade",
        name: "Burning Blade",
        descriptionShort: "Critical Strike deals area damage",
        descriptionLong: "Critical Strikes from Samuro or his Mirror Images deal bonus Spell Damage equal to 50% of their Basic Attack damage to the target and other nearby enemies.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_criticalstrike.png",
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
          "SamuroCriticalStrike"
        ]
      },
      {
        id: "SamuroPhantomPain",
        name: "Phantom Pain",
        descriptionShort: "Critical Strikes reduce Image Transmission cooldown",
        descriptionLong: "Samuro's Critical Strikes against enemy Heroes reduce Image Transmission's cooldown by 1 second, and deal 35% more damage for each active Mirror Image.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_criticalstrike_a.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 7
        },
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "SamuroCriticalStrike"
        ]
      },
      {
        id: "SamuroCrushingBlow",
        name: "Crushing Blows",
        descriptionShort: "Critical Strikes increase Basic Attack damage",
        descriptionLong: "Samuro's Basic Attacks against enemy Heroes reduce Critical Strike's cooldown by 2 seconds. Critical Strikes against enemy Heroes increase Samuro's Basic Attack damage by 10% for 4 seconds, up to 30%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_criticalstrike_b.png",
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
          "SamuroCriticalStrike"
        ]
      }
    ],
    [
      {
        id: "SamuroHeroicAbilityBladestorm",
        name: "Bladestorm",
        descriptionShort: "Cause a Bladestorm of destructive force",
        descriptionLong: "Cause a Bladestorm of destructive force around Samuro for 3 seconds, granting him 25 Armor and dealing 180 (+4% / level) damage per second to nearby enemies.",
        cooldown: 30,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_bladestorm.png",
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
          "SamuroBladeStormDummy"
        ]
      },
      {
        id: "SamuroHeroicAbilityIllusionMaster",
        name: "Illusion Master",
        descriptionShort: "Mirror Images can be controlled",
        descriptionLong: "Mirror Images can be controlled individually or as a group and their damage is increased by 100%. Passive: Image Transmission's cooldown is reduced to 8 seconds.",
        cooldown: 8,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_illusiondancer.png",
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
          "SamuroIllusionMaster"
        ]
      }
    ],
    [
      {
        id: "SamuroMirroredSteel",
        name: "Mirrored Steel",
        descriptionShort: "Basic Attacks reduce Mirror Image cooldown",
        descriptionLong: "Samuro's Basic Attacks against Heroes reduce the cooldown of Mirror Image by 0.75 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_mirrorimage.png",
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
          "SamuroMirrorImageTargeted"
        ]
      },
      {
        id: "SamuroWindwalkKawarimi",
        name: "Kawarimi",
        descriptionShort: "Wind Walk creates an Image",
        descriptionLong: "Wind Walk creates a Mirror Image at Samuro's location that will continue whatever he was doing.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_windwalk.png",
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
          "SamuroWindwalk"
        ]
      },
      {
        id: "SamuroShukuchi",
        name: "Shukuchi",
        descriptionShort: "Wind Walk teleports a short distance",
        descriptionLong: "Wind Walk teleports Samuro a short distance in the direction he's currently facing.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_windwalk_a.png",
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
          "SamuroWindwalk"
        ]
      }
    ],
    [
      {
        id: "SamuroMercilessStrikes",
        name: "Merciless Strikes",
        descriptionShort: "Critically Strike always happens on disabled targets",
        descriptionLong: "Samuro's Basic Attacks against Stunned, Rooted, or Slowed enemies are always Critical Strikes.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_criticalstrike.png",
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
          "SamuroCriticalStrike"
        ]
      },
      {
        id: "SamuroHarshWinds",
        name: "Harsh Winds",
        descriptionShort: "Attacks from Wind Walk increase damage",
        descriptionLong: "If Wind Walk is broken by Samuro attacking an enemy Hero, he deals 30% additional damage to that target for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_windwalk.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 6
        },
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "SamuroWindwalk"
        ]
      },
      {
        id: "SamuroPressTheAttack",
        name: "Press the Attack",
        descriptionShort: "Advancing Strikes increases Attack Speed",
        descriptionLong: "Basic Attacks from Samuro or his Mirror Images against enemy Heroes or while Advancing Strikes is active increases their Attack Speed by 10%, up to 40%. These bonuses are lost when losing Advancing Strikes.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_flowingstrikes.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 2,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "SamuroIllusionMaster"
        ]
      }
    ],
    [
      {
        id: "SamuroDanceOfDeath",
        name: "Dance Of Death",
        descriptionShort: "Images use Bladestorm, can reset cooldown",
        descriptionLong: "Mirror Images use Bladestorm when Samuro does, but for 45% damage. If Samuro hits at least 20 enemy Heroes with Bladestorm, then reset its cooldown.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_bladestorm.png",
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
          "SamuroBladeStormDummy"
        ],
        prerequisiteTalentIds: [
          "SamuroHeroicAbilityBladestorm"
        ]
      },
      {
        id: "SamuroThreeBladeStyle",
        name: "Three Blade Style",
        descriptionShort: "Images have increased Health and Duration",
        descriptionLong: "Samuro's Mirror Images only deal half of the damage they take to themselves, effectively increasing their Health by 25%, and their duration is increased to 16 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_illusiondancer.png",
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
          "SamuroIllusionMaster"
        ],
        prerequisiteTalentIds: [
          "SamuroHeroicAbilityIllusionMaster"
        ]
      },
      {
        id: "SamuroWindStrider",
        name: "Wind Strider",
        descriptionShort: "Greatly reduce Wind Walk cooldown",
        descriptionLong: "Wind Walk's cooldown is reduced by 6 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_windwalk.png",
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
          "SamuroWindwalk"
        ]
      },
      {
        id: "SamuroBlademastersPursuit",
        name: "Blademaster’s Pursuit",
        descriptionShort: "Increase Advancing Strikes Move Speed, duration",
        descriptionLong: "Advancing Strikes grants an additional 15% Movement Speed for Samuro and his Mirror Images, and its duration is increased by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_samuro_flowingstrikes.png",
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
          "SamuroIllusionMaster"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 51.9774011299435,
    physicalDamage: 85.00000000000001,
    mobility: 33.289824263038554,
    healing: 0.4858496295396575,
    magicalDamage: 1.9712259072389116
  }
};
