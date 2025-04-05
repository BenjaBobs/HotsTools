import { Hero } from '../heroes';
      
export const gall: Hero = {
  name: "Gall",
  nameNormalized: "gall",
  franchise: "Warcraft",
  gender: "Male",
  size: 0,
  movementSpeed: 4.8398,
  health: {
    amount: 1,
    scale: 0,
    regenRate: 0,
    regenScale: 0
  },
  autoAttacks: [],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/gall.png",
  abilities: [
    {
      id: "GallOgreRage",
      name: "Ogre Rage",
      descriptionShort: "Activate to increase Gall's Damage",
      descriptionLong: "Activate to increase Gall's damage by 25%, but reduce Cho's Armor by 25. Passive: Gall is permanently immune to Stun and Silence effects.",
      cooldown: 5,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_ogrerage.png",
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
      id: "GallShove",
      name: "Shove",
      descriptionShort: "Nudge Cho a short distance",
      descriptionLong: "Nudge Cho a small distance and grant him 25% Movement Speed for 2 seconds.",
      cooldown: 30,
      category: "mount",
      type: "Z",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_shove.png",
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
      id: "GallShadowflame",
      name: "Shadowflame",
      descriptionShort: "Blast enemies in a narrow line",
      descriptionLong: "Deal 135 (+5% / level) damage to enemies in the area.",
      cooldown: 3,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_shadowflame.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 135
      }
    },
    {
      id: "GallDreadOrb",
      name: "Dread Orb",
      descriptionShort: "Lob a ball of energy that bounces three times, damaging enemies it hits",
      descriptionLong: "Throw a bomb that will bounce three times, dealing 126 (+5% / level) damage to enemies.",
      cooldown: 6,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_chaoscollision.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 63
      }
    },
    {
      id: "GallRunicBlast",
      name: "Runic Blast",
      descriptionShort: "Detonate Cho's Rune Bomb, dealing area damage",
      descriptionLong: "Detonate Cho's Rune Bomb, dealing 210 (+4% / level) damage around it.",
      cooldown: null,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_detonaterunes.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 42
      }
    },
    {
      id: "GallTwistingNether",
      name: "Twisting Nether",
      descriptionShort: "Slow and damage nearby enemies",
      descriptionLong: "After 1 second, nearby enemies are Slowed by 50% while Gall channels, up to 5 seconds. Activate to deal 353 (+5% / level) damage.",
      cooldown: 80,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_twistingnether_a.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 70.60000000000001
      }
    },
    {
      id: "GallShadowboltVolley",
      name: "Shadow Bolt Volley",
      descriptionShort: "Launch a barrage of Shadow Bolts",
      descriptionLong: "After 1 second, unleash 20 Shadow Bolts over 4 seconds, each dealing 87 (+4% / level) damage to the first target hit. The bolts fire towards your mouse.",
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_shadowboltvolley.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 17.400000000000002
      }
    }
  ],
  talents: [
    [
      {
        id: "GallKeepMoving",
        name: "Keep Moving!",
        descriptionShort: "Increased Shove Move Speed amount and duration",
        descriptionLong: "Increases the Movement Speed bonus of Shove by 10% and its duration by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_shove.png",
        isPassive: false,
        analysis: {
          mobility: 2,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "GallShove"
        ]
      },
      {
        id: "GallTaskmaster",
        name: "Taskmaster",
        descriptionShort: "Reduce Shove's cooldown",
        descriptionLong: "Every time Cho is hit by a Hero Basic Attack, reduce the cooldown of Shove by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_shove_a.png",
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
          "GallShove"
        ]
      },
      {
        id: "GallWeSeeYou",
        name: "We See You!",
        descriptionShort: "Lower Eye of Kilrogg cooldown",
        descriptionLong: "Eye of Kilrogg's cooldown is decreased by 25 seconds, its range is increased by 33%, and the number of Basic Attacks required to kill it is increased by 1.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_eyeofkilrogg.png",
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
          "GallTalentEyeOfKilrogg"
        ]
      }
    ],
    [
      {
        id: "GallRisingDread",
        name: "Rising Dread",
        descriptionShort: "Increase Dread Orb area and damage",
        descriptionLong: "Each bounce of Dread Orb increases its radius by 25% and damage by 15%. Activate Dread Orb before the second bounce ends to reverse the direction of the third bounce.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_chaoscollision.png",
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
          "GallDreadOrb"
        ]
      },
      {
        id: "GallRunicPersistence",
        name: "Runic Persistence",
        descriptionShort: "Runic Blast deals additional damage over time",
        descriptionLong: "Runic Blast deals an additional 180 (+4% / level) damage over 3 seconds in an area around the detonation point.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_detonaterunes.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 36
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "GallRunicBlast"
        ]
      },
      {
        id: "GallBombsAway",
        name: "Bomb's Away",
        descriptionShort: "Quest: Empower Runic Blast",
        descriptionLong: "Quest: Damaging a Hero with Runic Blast increases its damage by 5, up to 200. Reward: After damaging 20 Heroes, the range and speed of Cho's Rune Bomb is increased by 20%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_runebomb_var1.png",
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
          "GallRunicBlast"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "GallEdgeOfMadness",
        name: "Edge of Madness",
        descriptionShort: "Increase Shadowflame damage",
        descriptionLong: "Every subsequent hit of Shadowflame against the same enemy Hero deals an additional 12% damage, to a maximum of 60%. These bonuses are lost if the Hero has not been hit for 7 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_shadowflame.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 2.4000000000000004
        },
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "GallShadowflame"
        ]
      },
      {
        id: "GallDoubleTrouble",
        name: "Double Trouble",
        descriptionShort: "Quest: Lower Shadowflame's cooldown",
        descriptionLong: "Quest: If Shadowflame hits an enemy Hero that is afflicted by Cho's Consuming Blaze, its cooldown is reduced by 0.5 seconds. Reward: After hitting 20 Heroes, Shadowflame's cooldown is instead permanently reduced by 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_shadowflame_var1.png",
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
          "GallShadowflame"
        ],
        isQuest: true
      },
      {
        id: "GallOgreRampage",
        name: "Ogre Rampage",
        descriptionShort: "Empower Ogre Rage",
        descriptionLong: "Increase the damage bonus of Ogre Rage by 5%. Each time Gall damages an enemy Hero this bonus increases by 1% for 4 seconds, up to an additional 10% bonus damage.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_ogrerage.png",
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
          "GallOgreRage",
          "GallOgreRagePassive"
        ]
      }
    ],
    [
      {
        id: "GallHeroicAbilityShadowboltVolley",
        name: "Shadow Bolt Volley",
        descriptionShort: "Launch a barrage of Shadow Bolts",
        descriptionLong: "After 1 second, unleash 20 Shadow Bolts over 4 seconds, each dealing 87 (+4% / level) damage to the first target hit. The bolts fire towards your mouse.",
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_shadowboltvolley.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 17.400000000000002
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "GallShadowboltVolley"
        ]
      },
      {
        id: "GallHeroicAbilityTwistingNether",
        name: "Twisting Nether",
        descriptionShort: "Slow and damage nearby enemies",
        descriptionLong: "After 1 second, nearby enemies are Slowed by 50% while Gall channels, up to 5 seconds. Activate to deal 353 (+5% / level) damage.",
        cooldown: 80,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_twistingnether_a.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 70.60000000000001
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "GallTwistingNether"
        ]
      }
    ],
    [
      {
        id: "GallSearingShadows",
        name: "Searing Shadows",
        descriptionShort: "Increased Shadowflame Hero damage",
        descriptionLong: "Enemy Heroes hit by Shadowflame take an additional 2% of their maximum Health as damage.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_shadowflame.png",
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
          "GallShadowflame"
        ]
      },
      {
        id: "GallPsychoticBreak",
        name: "Psychotic Break",
        descriptionShort: "Gain damage to Heroes, cast Abilities after death",
        descriptionLong: "Increase Gall's damage to enemy Heroes by 10%. Upon dying, Gall gains Ogre Rage and can use Abilities for 10 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_psychoticbreak.png",
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
          "GallOgreRage",
          "GallOgreRagePassive"
        ]
      },
      {
        id: "GallTwilightNova",
        name: "Twilight Nova",
        descriptionShort: "Dread Orb launches 2 extra bombs",
        descriptionLong: "After the first bounce of Dread Orb, 2 extra bombs bounce to the sides once.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_chaoscollision_var1.png",
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
          "GallDreadOrb"
        ]
      }
    ],
    [
      {
        id: "GallLeadenOrb",
        name: "Leaden Orb",
        descriptionShort: "Dread Orb Stuns",
        descriptionLong: "Dread Orb Stuns enemy Heroes for 0.75 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_chaoscollision.png",
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
          "GallDreadOrb"
        ]
      },
      {
        id: "GallDeafeningBlast",
        name: "Deafening Blast",
        descriptionShort: "Runic Blast Silences",
        descriptionLong: "Runic Blast Silences enemy Heroes for 1.25 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_detonaterunes.png",
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
          "GallRunicBlast"
        ]
      },
      {
        id: "GallShadowsnare",
        name: "Shadowsnare",
        descriptionShort: "Basic Abilities Slow Heroes",
        descriptionLong: "Enemy Heroes hit by your Basic Abilities are Slowed by 15% for 4 seconds. This effect can stack up to 2 times.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_twoheaded.png",
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
          "GallOgreRage",
          "GallOgreRagePassive"
        ]
      }
    ],
    [
      {
        id: "GallShadowboltVolleyShadowfury",
        name: "Shadowfury",
        descriptionShort: "Shadow Bolt Volley pierces",
        descriptionLong: "Shadow Bolt Volley hits all enemies in its path.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_shadowboltvolley.png",
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
          "GallShadowboltVolley"
        ],
        prerequisiteTalentIds: [
          "GallHeroicAbilityShadowboltVolley"
        ]
      },
      {
        id: "GallShiftingNether",
        name: "Shifting Nether",
        descriptionShort: "Teleport and cast Twisting Nether",
        descriptionLong: "Twisting Nether now teleports Cho to a targeted location before it begins Channeling.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_twistingnether_a.png",
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
          "GallTwistingNetherActivated",
          "GallTwistingNether"
        ],
        prerequisiteTalentIds: [
          "GallHeroicAbilityTwistingNether"
        ]
      },
      {
        id: "GallTheWillofGall",
        name: "The Will of Gall",
        descriptionShort: "Takedowns increase Ogre Rage's Damage Bonus",
        descriptionLong: "Takedowns permanently increase the bonus of Ogre Rage by 2%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_ogrerage.png",
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
          "GallOgreRage",
          "GallOgreRagePassive"
        ],
        isQuest: true
      },
      {
        id: "GallTwilightFrenzy",
        name: "Twilight Frenzy",
        descriptionShort: "Activate to reduce cooldowns",
        descriptionLong: "Activate to reduce the cooldowns of Shadowflame and Dread Orb to 2 seconds for the next 6 seconds.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_psychoticbreak.png",
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
    tankiness: 0,
    physicalDamage: 0,
    mobility: 24.006944444444446,
    healing: 0,
    magicalDamage: 12.117629673415102
  }
};
