import { Hero } from '../heroes';
      
export const hogger: Hero = {
  name: "Hogger",
  nameNormalized: "hogger",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.875,
  movementSpeed: 4.8398,
  health: {
    amount: 2260,
    scale: 0.04,
    regenRate: 4.711,
    regenScale: 0.04
  },
  energy: {
    amount: 100,
    regenRate: 0,
    name: "Rage"
  },
  autoAttacks: [
    {
      nameId: "HoggerHeroWeapon",
      range: 2,
      period: 1.375,
      damage: 150,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/hogger.png",
  abilities: [
    {
      id: "HoggerLootHoard",
      name: "Loot Hoard",
      descriptionShort: "Create terrain and restore Health",
      descriptionLong: "Toss a pile of junk onto the battlefield, dealing 102 (+4% / level) damage in an area, knocking enemies away, and acting as terrain for up to 5 seconds. When the Loot Hoard expires or is destroyed, a chunk of Meat falls out that can be picked up to restore 3% of maximum Health every second for 4 seconds. Reactivate to destroy Loot Hoard.",
      cooldown: 20,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_trait.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 20.400000000000002
      }
    },
    {
      id: "HoggerStaggeringBlow",
      name: "Staggering Blow",
      descriptionShort: "Knock enemies in an arc",
      descriptionLong: "Swing your chain in a wide arc, dealing 140 (+4% / level) damage to enemies hit and knocking them away. If an enemy hits terrain, deal an additional 150 (+4% / level) damage, Stun for 0.75 seconds, and gain 15 Rage.",
      cooldown: 12,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_q.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 72.5
      }
    },
    {
      id: "HoggerEzThroDynamite",
      name: "Ez-Thro Dynamite",
      descriptionShort: "Throw a bundle of Dynamite",
      descriptionLong: "Toss a bundle of Dynamite with a 1.5 second fuse. Upon detonation, enemies take 180 (+4% / level) damage and are Slowed by 30% for 2 seconds. The Dynamite instantly detonates when landing on an enemy Hero granting Hogger 10 Rage.",
      cooldown: 8,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_w.png",
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
      id: "HoggerHoggWild",
      name: "Hogg Wild",
      descriptionShort: "Rapidly spin, dealing damage",
      descriptionLong: "After 0.25 seconds, become Unstoppable and uncontrollably spin towards the target direction, ricocheting off terrain. Ricocheting off terrain refreshes the duration. Every 0.125 seconds, deal 44 (+4% / level) damage to nearby non-Structure enemies. Damage against Heroes is increased by .5% for each point of Rage.",
      cooldown: 14,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_e.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 9.428571428571429
      }
    },
    {
      id: "HoggerHoardapult",
      name: "Hoardapult",
      descriptionShort: "Launch Loot Hoard, Hogger",
      descriptionLong: "Launch an empowered Loot Hoard with Hogger attached, dealing 100 (+4% / level) damage and Slowing enemies by 50% for 2 seconds. Hoardapult's Loot Hoard lasts for up to 20 seconds, decaying rapidly while not nearby. Every 10 seconds Hogger can take a chunk of Meat from the Loot Hoard.",
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_r1.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 20
      }
    },
    {
      id: "HoggerShockwave",
      name: "Shockwave",
      descriptionShort: "Damage and Stun in long line",
      descriptionLong: "After 0.5 seconds, slam the ground, sending out a shockwave that travels in a long line. Enemies hit by the initial slam take 335 (+4% / level) damage and are Stunned for 1.5 seconds. Enemies only hit by the shockwave take 230 (+4% / level) damage and are Stunned for 0.75 seconds.",
      cooldown: 70,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_r2.png",
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
        id: "HoggerJourneymanCooking",
        name: "Journeyman Cooking",
        descriptionShort: "Quest: Ez-Thro Dynamite heals, increases Health",
        descriptionLong: "Each Hero hit by Ez-Thro Dynamite heals you for 8% of maximum Health. Quest: Hitting Heroes with Ez-Thro Dynamite permanently increases your maximum Health by 10, to a maximum of 750 bonus Health.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_w.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 1.6,
          magicalDamage: 0
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "HoggerEzThroDynamite"
        ],
        isQuest: true
      },
      {
        id: "HoggerBonestoGnaw",
        name: "Bones to Gnaw",
        descriptionShort: "Loot Hoard creates more Meat, gain Armor",
        descriptionLong: "Loot Hoard creates a chunk of Meat when it lands. While under the effects of Meat, gain 10 Armor.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_trait.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 2,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "HoggerLootHoard"
        ]
      },
      {
        id: "HoggerOnTheProwl",
        name: "On The Prowl",
        descriptionShort: "Periodically heal, activate to gain Rage",
        descriptionLong: "Activate to gain 30 Rage over 8 seconds. Passive: You heal for 7 (+4% / level) Health every second, increased by 2% per point of Rage.",
        cooldown: 45,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_rage.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 6,
          magicalDamage: 0
        },
        order: 3,
        tier: "level1"
      }
    ],
    [
      {
        id: "HoggerBruteForce",
        name: "Brute Force",
        descriptionShort: "Increases Attack Damage and Loot Hoard range",
        descriptionLong: "Increase the range of Loot Hoard by 20% and its damage by 50%. Quest: Hitting Heroes with Staggering Blow permanently increases Basic Attack damage by 2, to a maximum of 150 bonus damage. Enemy Heroes that hit terrain grant an additional 6 damage.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_combo_q_d.png",
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
          "HoggerStaggeringBlow"
        ],
        isQuest: true
      },
      {
        id: "HoggerAggroRange",
        name: "Aggro Range",
        descriptionShort: "Increase Hogg Wild radius, generates Rage",
        descriptionLong: "Increase Hogg Wild's radius by 20% and each enemy hit generates 0.5 Rage, increased to 2 against Heroes.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_e.png",
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
          "HoggerHoggWild"
        ]
      },
      {
        id: "HoggerHoggersJoggers",
        name: "Hogger's Joggers",
        descriptionShort: "Rage increases Move Speed, healing received",
        descriptionLong: "While above 30 Rage, gain 10% increased Movement Speed and healing received. When at or above 50 Rage, increase these bonuses to 15%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_rage.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 10,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4"
      }
    ],
    [
      {
        id: "HoggerDenseBlastingPowder",
        name: "Dense Blasting Powder",
        descriptionShort: "Create more Ez-Thro Dynamite",
        descriptionLong: "Instant detonations of Ez-Thro Dynamite creates an additional dynamite behind the Hero hit. Hitting the bundle of Ez-Thro Dynamite with Staggering Blow breaks it into three sticks and launches them forward in an arc.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_w.png",
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
          "HoggerStaggeringBlow",
          "HoggerEzThroDynamite"
        ]
      },
      {
        id: "HoggerGarbageFire",
        name: "Garbage Fire",
        descriptionShort: "Loot Hoard deals area damage, Slows",
        descriptionLong: "Reduce the cooldown of Loot Hoard by 2 seconds. Every 0.5 seconds, enemies in a large area around Loot Hoard take 23 (+4% / level) damage and are Slowed by 20%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_trait.png",
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
          "HoggerLootHoard"
        ]
      },
      {
        id: "HoggerSeeingRed",
        name: "Seeing Red",
        descriptionShort: "Rage empowers Basic Abilities, Basic Attacks",
        descriptionLong: "While above 50 Rage, gain 35% Attack Speed and the cooldowns of Staggering Blow and Hogg Wild refresh 30% faster.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_rage.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 6,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "HoggerStaggeringBlow",
          "HoggerHoggWild"
        ]
      }
    ],
    [
      {
        id: "HoggerHoardapult",
        name: "Hoardapult",
        descriptionShort: "Launch Loot Hoard, Hogger",
        descriptionLong: "Launch an empowered Loot Hoard with Hogger attached, dealing 100 (+4% / level) damage and Slowing enemies by 50% for 2 seconds. Hoardapult's Loot Hoard lasts for up to 20 seconds, decaying rapidly while not nearby. Every 10 seconds Hogger can take a chunk of Meat from the Loot Hoard.",
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_r1.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 20
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "HoggerHoardapult"
        ]
      },
      {
        id: "HoggerShockwave",
        name: "Shockwave",
        descriptionShort: "Damage and Stun in long line",
        descriptionLong: "After 0.5 seconds, slam the ground, sending out a shockwave that travels in a long line. Enemies hit by the initial slam take 335 (+4% / level) damage and are Stunned for 1.5 seconds. Enemies only hit by the shockwave take 230 (+4% / level) damage and are Stunned for 0.75 seconds.",
        cooldown: 70,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_r2.png",
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
          "HoggerShockwave"
        ]
      }
    ],
    [
      {
        id: "HoggerDustDevil",
        name: "Dust Devil",
        descriptionShort: "Hogg Wild grants Armor",
        descriptionLong: "Gain 25 Armor while Hogg Wild is active and for 4 seconds after. When at or above 50 Rage, increase this Armor to 40.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_e.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 5,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "HoggerHoggWild"
        ]
      },
      {
        id: "HoggerPummel",
        name: "Pummel",
        descriptionShort: "Hogg Wild Slows, reduces Spell Power",
        descriptionLong: "Enemies hit by Hogg Wild are Slowed by 10% for 2 seconds, stacking up to 5 times. Heroes hit have their Spell Power reduced by 30% for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_e_variant.png",
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
          "HoggerHoggWild"
        ]
      },
      {
        id: "HoggerBloodthirst",
        name: "Bloodthirst",
        descriptionShort: "Basic Attacks and some Abilities heal",
        descriptionLong: "Damaging Heroes with Basic Attacks, Staggering Blow, or Hogg Wild heals you for 33% of the damage dealt.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_heal.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 6.6000000000000005,
          magicalDamage: 0
        },
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "HoggerStaggeringBlow",
          "HoggerHoggWild"
        ]
      }
    ],
    [
      {
        id: "HoggerHeadbanger",
        name: "Headbanger",
        descriptionShort: "Increase Staggering Blow damage, Stun",
        descriptionLong: "Enemy Heroes Stunned by Staggering Blow take an additional 8% of their maximum Health as damage and are Stunned for an additional 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_q.png",
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
          "HoggerStaggeringBlow"
        ]
      },
      {
        id: "HoggerKablooie",
        name: "Kablooie!",
        descriptionShort: "Empower Ez-Thro Dynamite instant detonations",
        descriptionLong: "Instant Ez-Thro Dynamite detonations deal 50% more damage, reduce its cooldown by 1.5 seconds, and increase its Slow amount to 50%. Passive: Increase Ez-Thro Dynamite's range by 25%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_w.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 10
        },
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "HoggerEzThroDynamite"
        ]
      },
      {
        id: "HoggerFurzerker",
        name: "Furzerker",
        descriptionShort: "Empower Basic Attacks, increase Move Speed",
        descriptionLong: "Hitting Heroes with Staggering Blow or Ez-Thro Dynamite increases the damage of the next Basic Attack within 8 seconds by 50%, stacking up to 2 times. When Hogg Wild ends, gain 30% Movement Speed for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_damage.png",
        isPassive: false,
        analysis: {
          mobility: 0.4,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "HoggerStaggeringBlow",
          "HoggerEzThroDynamite",
          "HoggerHoggWild"
        ]
      }
    ],
    [
      {
        id: "HoggerSecretStash",
        name: "Secret Stash",
        descriptionShort: "Loot Hoard launches Dynamite and Meat",
        descriptionLong: "Every 2 seconds, Hoardapults' Loot Hoard randomly launches Ez-Thro Dynamite, prioritizing nearby enemy Heroes. Every 5 seconds, it also launches a chunk of Meat towards Hogger.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_r1.png",
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
          "HoggerHoardapult"
        ],
        prerequisiteTalentIds: [
          "HoggerHoardapult"
        ]
      },
      {
        id: "HoggerPowerSpike",
        name: "Power Spike",
        descriptionShort: "Shockwave reduces Armor, reduced cooldown",
        descriptionLong: "Hitting Heroes with Shockwave reduces their Armor by 15 for 4 seconds and grants 20 Rage. Passive: Rage's cooldown reduction affects Shockwave's cooldown.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_r2.png",
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
          "HoggerShockwave"
        ],
        prerequisiteTalentIds: [
          "HoggerShockwave"
        ]
      },
      {
        id: "HoggerNoControl",
        name: "No Control",
        descriptionShort: "Chase enemies with Hogg Wild",
        descriptionLong: "Activate to cast an untalented Hogg Wild and begin chasing an enemy Hero. After reaching the Hero, bounce to a random nearby enemy Hero. Lasts up to 5 seconds, rapidly decaying if there are no other enemy Heroes nearby. Cannot be cancelled.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_e_variant.png",
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
        id: "HoggerAngerManagement",
        name: "Anger Management",
        descriptionShort: "Increase max Rage, increase Rage gains",
        descriptionLong: "Increase maximum Rage by 50, raising the maximum bonuses for its cooldown refresh rate to 75% and Hogg Wild's Hero damage to 75%. Passive: Basic Attacks grant 5 additional Rage.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hogger_rage.png",
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
    tankiness: 68.09792843691149,
    physicalDamage: 54.54545454545454,
    mobility: 24.006944444444446,
    healing: 0,
    magicalDamage: 4.5193058751504145
  }
};
