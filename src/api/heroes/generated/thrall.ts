import { Hero } from '../heroes';
      
export const thrall: Hero = {
  name: "Thrall",
  nameNormalized: "thrall",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.75,
  movementSpeed: 4.8398,
  health: {
    amount: 1946,
    scale: 0.04,
    regenRate: 4.0546,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "ThrallHeroWeapon",
      range: 1.5,
      period: 1.1,
      damage: 173,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/thrall.png",
  abilities: [
    {
      id: "ThrallFrostwolfResilience",
      name: "Frostwolf Resilience",
      descriptionShort: "Casting Abilities on enemies grants charges that restore health",
      descriptionLong: "Dealing damage with Abilities grants 1 stack of Frostwolf Resilience. At 5 stacks, Thrall is instantly healed for 240 (+4% / level) Health.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_thrall_frostwolfresilience.png",
      isPassive: true,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0.2,
        magicalDamage: 0
      }
    },
    {
      id: "ThrallChainLightning",
      name: "Chain Lightning",
      descriptionShort: "Shock enemies with bouncing lightning",
      descriptionLong: "Shock an enemy with lightning, dealing 170 (+4% / level) damage. The lightning then bounces 3 times to nearby enemies, dealing 85 (+4% / level) damage to each enemy hit.",
      cost: {
        type: "Mana",
        amount: 40
      },
      cooldown: 7,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 0.5
      },
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_thrall_chainlightning.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 109.28571428571428
      }
    },
    {
      id: "ThrallFeralSpirit",
      name: "Feral Spirit",
      descriptionShort: "Unleash a wolf spirit to burn enemies and Root Heroes",
      descriptionLong: "Unleash a Feral Spirit that deals 153 (+4% / level) damage to enemies in its path and Roots Heroes hit for 1 second. Each Hero hit increases the distance traveled by 25%.",
      cost: {
        type: "Mana",
        amount: 40
      },
      cooldown: 10,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_thrall_feralspirit.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 45.9
      }
    },
    {
      id: "ThrallWindfury",
      name: "Windfury",
      descriptionShort: "Increases Attack and Movement Speed",
      descriptionLong: "Increase Thrall's Movement Speed by 30% for 4 seconds. His next 3 Basic Attacks occur 100% faster and generate stacks of Frostwolf Resilience.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 12,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_thrall_windfury.png",
      isPassive: false,
      analysis: {
        mobility: 7.5,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 0
      }
    },
    {
      id: "ThrallSundering",
      name: "Sundering",
      descriptionShort: "Damages, pushes, and Stuns enemies in a line",
      descriptionLong: "After 0.5 seconds, sunder the earth in a long line, dealing 290 (+4% / level) damage and shoving enemies to the side, Stunning them for 1 second.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 70,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_thrall_sundering.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 58
      }
    },
    {
      id: "ThrallEarthquake",
      name: "Earthquake",
      descriptionShort: "Slows enemies in a massive area",
      descriptionLong: "After 0.5 seconds, summon a massive Earthquake that pulses every 4 seconds. Each pulse lasts 2 seconds, Slowing all enemies in the area by 50%, and deals 50 (+4% / level) damage to enemy Heroes. Does 3 pulses.",
      cost: {
        type: "Mana",
        amount: 90
      },
      cooldown: 100,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_thrall_earthquake.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 10
      }
    }
  ],
  talents: [
    [
      {
        id: "ThrallEchooftheElements",
        name: "Echo of the Elements",
        descriptionShort: "Quest: Killing enemies grants Chain Lightning charge",
        descriptionLong: "Quest: Kill Minions or Heroes within 1.5 seconds of hitting them with Chain Lightning. Reward: After killing 10 enemies, reduce the Mana cost of Chain Lightning from 40 to 20. Reward: After killing 20 enemies, gain a second charge of Chain Lightning.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_thrall_chainlightning.png",
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
          "ThrallChainLightning"
        ],
        isQuest: true
      },
      {
        id: "ThrallCrashLightning",
        name: "Crash Lightning",
        descriptionShort: "Quest: Multiple Hero hits empower Chain Lightning",
        descriptionLong: "Repeatable Quest: Hitting at least 2 Heroes with a single use of Chain Lightning increases the damage of its bounces by 12, up to 360. Reward: After hitting multiple Heroes 30 times, Chain Lightning prioritizes bouncing to Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_thrall_chainlightning_var1.png",
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
          "ThrallChainLightning"
        ],
        isQuest: true
      },
      {
        id: "ThrallMasteryRollingThunder",
        name: "Rolling Thunder",
        descriptionShort: "Chain Lightning empowers Basic Attacks",
        descriptionLong: "For 8 seconds after hitting an enemy with Chain Lightning, Thrall's next Basic Attack against them grants a stack of Frostwolf Resilience. If the target is an enemy Hero, then he also deals damage to them equal to 3% of their maximum Health and healing for the same amount. Passive: Increase the number of Chain Lightning bounces by 1.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_thrall_chainlightning_var2.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.6000000000000001,
          magicalDamage: 0
        },
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "ThrallChainLightning"
        ]
      }
    ],
    [
      {
        id: "ThrallFeralResilience",
        name: "Feral Resilience",
        descriptionShort: "Feral Spirit grants Physical Armor, Frostwolf Resilience",
        descriptionLong: "Heroes damaged by Feral Spirit grant 4 stacks of Frostwolf Resilience and 2 stacks of Feral Resilience, granting 75 Physical Armor against the next incoming Hero Basic Attack. Stacks are consumed on the next cast of Feral Spirit.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_thrall_feralspirit.png",
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
          "ThrallFeralSpirit"
        ]
      },
      {
        id: "ThrallFrostwolfPack",
        name: "Frostwolf Pack",
        descriptionShort: "Quest: Reduce Feral Spirit cooldown, cost",
        descriptionLong: "Quest: Hit 6 Heroes with Feral Spirit. Progress is lost on death and when Thrall fails to hit a Hero. Reward: Reduce the cooldown and Mana cost of Feral Spirit by 50%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_thrall_feralspirit_var1.png",
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
          "ThrallFeralSpirit"
        ],
        isQuest: true
      },
      {
        id: "ThrallMasteryManaTide",
        name: "Mana Tide",
        descriptionShort: "Frostwolf Resilience restores Mana, lowers cooldowns",
        descriptionLong: "Frostwolf Resilience restores 15 Mana and reduces Basic Ability cooldowns by 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_thrall_frostwolfresilience.png",
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
          "ThrallFrostwolfsGrace",
          "ThrallFrostwolfResilience"
        ]
      }
    ],
    [
      {
        id: "ThrallMaelstromWeapon",
        name: "Maelstrom Weapon",
        descriptionShort: "Quest:  Windfury attacks increase Move Speed",
        descriptionLong: "Repeatable Quest: Basic Attacks against Heroes while Windfury's Movement Speed bonus is active increase Attack Damage by 1. Reward: After gaining 20 Attack Damage, increase the Movement Speed bonus of Windfury to 40%. Reward: After gaining 40 Attack Damage, Thrall permanently gains 15% increased Movement Speed.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_thrall_windfury.png",
        isPassive: false,
        analysis: {
          mobility: 8,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "ThrallWindfury"
        ],
        isQuest: true
      },
      {
        id: "ThrallAncestralWrath",
        name: "Ancestral Wrath",
        descriptionShort: "Activate to damage and steal Health from a Hero",
        descriptionLong: "Activate to consume 8 stacks of Ancestral Wrath, damaging a target enemy Hero for 15% of their maximum Health over 3 seconds, and healing Thrall for 150% of the damage dealt. Gain 1 stack of Ancestral Wrath every time Frostwolf Resilience activates.",
        cooldown: null,
        charges: {
          chargesMax: 8,
          chargesInitial: 0,
          chargeCost: 8,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_bloodforblood.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.6000000000000001,
          magicalDamage: 0
        },
        order: 2,
        tier: "level7"
      },
      {
        id: "GenericTalentFollowThrough",
        name: "Follow Through",
        descriptionShort: "Abilities increase Basic Attack damage",
        descriptionLong: "After using an Ability, your next Basic Attack within 6 seconds deals 40% additional damage.",
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
          magicalDamage: 8
        },
        order: 3,
        tier: "level7"
      }
    ],
    [
      {
        id: "ThrallHeroicAbilitySundering",
        name: "Sundering",
        descriptionShort: "Damages, pushes, and Stuns enemies in a line",
        descriptionLong: "After 0.5 seconds, sunder the earth in a long line, dealing 290 (+4% / level) damage and shoving enemies to the side, Stunning them for 1 second.",
        cost: {
          type: "Mana",
          amount: 75
        },
        cooldown: 70,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_thrall_sundering.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 58
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "ThrallSundering"
        ]
      },
      {
        id: "ThrallHeroicAbilityEarthquake",
        name: "Earthquake",
        descriptionShort: "Slows enemies in a massive area",
        descriptionLong: "After 0.5 seconds, summon a massive Earthquake that pulses every 4 seconds. Each pulse lasts 2 seconds, Slowing all enemies in the area by 50%, and deals 50 (+4% / level) damage to enemy Heroes. Does 3 pulses.",
        cost: {
          type: "Mana",
          amount: 90
        },
        cooldown: 100,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_thrall_earthquake.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 10
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "ThrallEarthquake"
        ]
      }
    ],
    [
      {
        id: "ThrallMasteryGraceOfAir",
        name: "Grace Of Air",
        descriptionShort: "Windfury grants double Frostwolf Resilience",
        descriptionLong: "Windfury attacks grant twice as many stacks of Frostwolf Resilience.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_thrall_windfury.png",
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
          "ThrallWindfury"
        ]
      },
      {
        id: "ThrallMasteryFrostwolfsGrace",
        name: "Frostwolf's Grace",
        descriptionShort: "Activate Frostwolf Resilience to instantly heal",
        descriptionLong: "Frostwolf Resilience can be activated to instantly heal. This healing is increased by up to 100% based on Thrall's missing health.",
        cooldown: 15,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_thrall_frostwolfresilience.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 20,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "ThrallFrostwolfsGrace",
          "ThrallFrostwolfResilience"
        ]
      },
      {
        id: "ThrallSpiritShield",
        name: "Spirit Shield",
        descriptionShort: "Periodically gain temporary Spell Armor",
        descriptionLong: "Every 45 seconds, gain 70 Spell Armor against the next enemy Ability and subsequent Abilities for 4 seconds. Frostwolf Resilience reduces this cooldown by 10 seconds. Can be toggled to allow or prevent this talent from triggering automatically.",
        cooldown: 45,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_spellshield.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 14,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level13"
      }
    ],
    [
      {
        id: "ThrallMasteryTempestFury",
        name: "Tempest Fury",
        descriptionShort: "Windfury's final strike hits 3 times",
        descriptionLong: "The final strike of Windfury hits 3 times for 75% normal damage.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_thrall_windfury.png",
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
          "ThrallWindfury"
        ]
      },
      {
        id: "ThrallThunderstorm",
        name: "Thunderstorm",
        descriptionShort: "Quest: Hit Heroes to make Chain Lightning Slow",
        descriptionLong: "Chain Lightning Slows targets by 8% for 2 seconds. Quest: Targeting a Hero directly with Chain Lightning increases this Slow by 8%, up to an additional 40%. Reward: While at a 40% bonus, Chain Lightning's damage is increased by 25%. Bonuses are reset if Chain Lightning is used on the same Hero it was last used on, or if Thrall dies.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_thrall_chainlightning.png",
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
          "ThrallChainLightning"
        ],
        isQuest: true
      },
      {
        id: "ThrallAlphaWolf",
        name: "Alpha Wolf",
        descriptionShort: "Feral Spirit has longer Root, empowers Attacks",
        descriptionLong: "For 3 seconds after a Hero is hit by Feral Spirit, Thrall's Basic Attacks against them deal an additional 3% of the target's maximum Health as damage. Passive: Increase the duration of Feral Spirit's Root to 1.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_thrall_feralspirit.png",
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
          "ThrallFeralSpirit"
        ]
      }
    ],
    [
      {
        id: "ThrallMasteryWorldbreaker",
        name: "Worldbreaker",
        descriptionShort: "Sundering creates impassable terrain",
        descriptionLong: "Lower the cooldown of Sundering by 40 seconds. After Sundering impacts, it leaves behind an impassable rift, blocking unit movement for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_thrall_sundering.png",
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
          "ThrallSundering"
        ],
        prerequisiteTalentIds: [
          "ThrallHeroicAbilitySundering"
        ]
      },
      {
        id: "ThrallMasteryEarthenShields",
        name: "Earthen Shields",
        descriptionShort: "Grants allies Shields in area",
        descriptionLong: "Allies within the Earthquake area gain a Shield equal to 15% of their maximum Health each pulse. This shield lasts 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_thrall_earthquake.png",
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
          "ThrallEarthquake"
        ],
        prerequisiteTalentIds: [
          "ThrallHeroicAbilityEarthquake"
        ]
      },
      {
        id: "ThrallElementalMomentum",
        name: "Elemental Momentum",
        descriptionShort: "Basic Attacks reduce Ability cooldowns",
        descriptionLong: "Basic Attacks reduce Thrall's Basic and Heroic Ability cooldowns by 0.25 seconds, tripled against Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_cooldown.png",
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
        id: "GenericTalentNexusBlades",
        name: "Nexus Blades",
        descriptionShort: "Basic Attacks deal more damage and Slow",
        descriptionLong: "Basic Attacks deal 20% more damage and Slow enemy Movement Speed by 20% for 1 second.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_slow.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 4
        },
        order: 4,
        tier: "level20"
      },
      {
        id: "ThrallWindRush",
        name: "Wind Rush",
        descriptionShort: "Activate to teleport and gain Windfury",
        descriptionLong: "Activate to immediately teleport to a target location and gain Windfury.",
        cooldown: 80,
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
    tankiness: 58.63653483992467,
    physicalDamage: 78.63636363636363,
    mobility: 31.447420634920636,
    healing: 0.048584962953965756,
    magicalDamage: 8.24537144546011
  }
};
