import { Hero } from '../heroes';
      
export const dva: Hero = {
  name: "D.Va",
  nameNormalized: "dva",
  franchise: "Overwatch",
  gender: "Female",
  size: 1.1875,
  movementSpeed: 4.8398,
  health: {
    amount: 2150,
    scale: 0.04,
    regenRate: 4.4804,
    regenScale: 0.04
  },
  energy: {
    amount: 100,
    regenRate: 0,
    name: "Charge"
  },
  autoAttacks: [
    {
      nameId: "DVaMechWeapon",
      range: 3.75,
      period: 0.25,
      damage: 22,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/dva.png",
  abilities: [
    {
      id: "DVaMechMechMode",
      name: "Mech Mode",
      descriptionShort: "D. Va can eject from her Mech and continue to fight",
      descriptionLong: "When D. Va's Mech dies, she is ejected out after 0.75 seconds and can continue to fight. D. Va's Mech only awards 50% of a normal Hero's experience upon dying. Fusion CannonsD. Va's Mech Basic Attacks deal 22 (+4% / level) damage in a large area every 0.25 seconds. Deals 40% bonus damage against enemies very close to the Mech.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_mechmode.png",
      isPassive: true,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 12.4
      }
    },
    {
      id: "DVaMechanizedWalker",
      name: "Mechanized Walker",
      descriptionShort: "While in her Mech, D. Va can shoot while moving, but her Movement Speed is reduced.",
      descriptionLong: "D. Va's Mech can shoot while moving. While shooting or channeling an ability, the Mech's Movement Speed is quickly reduced by 25%.",
      cooldown: null,
      category: "mount",
      type: "Z",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_mount.png",
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
      id: "DVaBoostersOn",
      name: "Boosters",
      descriptionShort: "Move fast and knockback enemies",
      descriptionLong: "Increase D. Va's Movement Speed by 115% for 1.75 seconds. Enemies that are hit take 135 (+4% / level) damage and are knocked away. D. Va cannot be Slowed while Boosters are active, and each enemy can only be hit once per use.",
      cooldown: 10,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_boosters.png",
      isPassive: false,
      analysis: {
        mobility: 34.5,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 0
      }
    },
    {
      id: "DVaMechDefenseMatrixOn",
      name: "Defense Matrix",
      descriptionShort: "Reduce damage of enemy Heroes in an area",
      descriptionLong: "Project a defensive field in the target direction for 3 seconds, reducing the damage dealt by enemy Heroes inside it by 60%. Activate again to change the angle of projection. Damage dealt to the Mech from enemies within Defense Matrix still grants the same amount of Self-Destruct Charge.",
      cooldown: 12,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_defensematrix.png",
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
      id: "DVaMechSelfDestruct",
      name: "Self-Destruct",
      descriptionShort: "Eject from the Mech, setting it to self-destruct for massive damage",
      descriptionLong: "Eject from the Mech, setting it to self-destruct after 4 seconds. Deals 400 (+4% / level) to 1100 (+4% / level) damage in a large area, depending on distance from center. Deals 50% damage against Structures. Gain 1% Charge for every 2 seconds spent Basic Attacking, and 25% Charge per 100% of Mech Health lost.",
      cooldown: null,
      charges: {
        chargesMax: 100,
        chargesInitial: 0,
        chargeCost: 100
      },
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_selfdestruct.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 10
      }
    },
    {
      id: "DVaMechBunnyHopHeroic",
      name: "Bunny Hop",
      descriptionShort: "Become Unstoppable and Stun nearby Heroes",
      descriptionLong: "D. Va's Mech becomes Unstoppable and stomps every 0.5 seconds, dealing 78 (+4% / level) damage in a large area. Every 4th consecutive hit on a Hero deals 80% more damage and Stuns them for 0.5 seconds. Lasts for 4 seconds. Requires Mech Mode.",
      cooldown: 70,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_bunnyhop.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 31.6
      }
    },
    {
      id: "DVaMicroMissiles",
      name: "Micro Missiles",
      descriptionShort: "Fire a stream of missiles that damage and Slow",
      descriptionLong: "After .375 seconds, Channel to launch a volley of 12 missiles in a target direction. Each missile impacts the first enemy in its path, dealing 40 (+4% / level) damage in a small area and Slowing by 30% for 2 seconds. Stores 2 charges with a 3 second cooldown between each use. Requires Mech Mode.",
      cooldown: 19,
      charges: {
        chargesMax: 2,
        chargesInitial: 2,
        chargeCost: 1,
        recastCooldown: 3
      },
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_micromissiles.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 8
      }
    }
  ],
  talents: [
    [
      {
        id: "DVaFullMetal",
        name: "Full Metal",
        descriptionShort: "Increase Mech Health, Fusion Cannons heal",
        descriptionLong: "D. Va's Mech gains 10% increased Health and its Fusion Cannons heal for 16% of the damage dealt to enemies in its bonus area.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_mechmode.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 3.2,
          magicalDamage: 0
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "DVaMechMechMode"
        ]
      },
      {
        id: "DVaMechProMoves",
        name: "Pro Moves",
        descriptionShort: "Taking damage increases Move Speed, Armor",
        descriptionLong: "D. Va's Mech gains 2% Movement Speed and 2 Armor every time it takes damage, stacking up to 15 times. Stacks of this effect decay every 0.5 seconds. Basic Attacks against enemy Heroes in Pilot Mode reduce the cooldown of Call Mech by 1 additional second.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_mechmode_a.png",
        isPassive: false,
        analysis: {
          mobility: 0.4,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "DVaMechMechMode",
          "DVaPilotCallMech"
        ]
      },
      {
        id: "DVaLiquidCooling",
        name: "Liquid Cooling",
        descriptionShort: "Empower Healing Fountain in Mech Mode",
        descriptionLong: "Activate to gain the effects of Healing Fountain. Requires Mech Mode. Passive: While in Mech Mode, Healing Fountain's cooldown is reduced to 50 seconds and its effects last 50% longer.",
        cooldown: 50,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_mechmode_b.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 10,
          magicalDamage: 0
        },
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "DVaMechMechMode"
        ]
      }
    ],
    [
      {
        id: "DVaBoostersRushdown",
        name: "Rush-down",
        descriptionShort: "Boosters steals Health, increase non-hero damage",
        descriptionLong: "Boosters deals an additional 2% of maximum Health as damage to Heroes and heals D. Va's Mech for the damage dealt. Boosters deals 50% increased damage to non-Heroic enemies.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_boosters.png",
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
          "DVaBoostersOn"
        ]
      },
      {
        id: "DVaDefenseMatrixAggressionMatrix",
        name: "Aggression Matrix",
        descriptionShort: "Defense Matrix reduces healing, lower cooldown",
        descriptionLong: "Enemy Heroes within your Defense Matrix receive 35% less healing. Passive: Basic Attacks against Heroes lower the cooldown of Defense Matrix by 0.1875 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_defensematrix.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 7,
          magicalDamage: 0
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "DVaMechDefenseMatrixOn",
          "DVaMechDefenseMatrixRetarget"
        ]
      },
      {
        id: "DVaSelfDestructNuclearOption",
        name: "Nuclear Option",
        descriptionShort: "Empower Fusion Cannons and Self-Destruct",
        descriptionLong: "Hitting your self-destructing Mech with Big Shot causes it to self-destruct 40% faster. Passive: When Fusion Cannons deal bonus damage to an enemy Hero, gain 0.25 Self-Destruct Charge.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_selfdestruct.png",
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
          "DVaMechSelfDestruct",
          "DVaPilotBigShot",
          "DVaMechPilotSelfDestruct"
        ]
      }
    ],
    [
      {
        id: "DvaGetOnThePoint",
        name: "Get On The Point!",
        descriptionShort: "Reduce Boosters cooldown, grants allies move speed",
        descriptionLong: "Casting Boosters grants nearby allies 20% Movement Speed for 3 seconds. Passive: If D. Va has not taken damage in the last 2 seconds, Boosters' cooldown refreshes 100% faster.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_boosters.png",
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
          "DVaBoostersOn"
        ]
      },
      {
        id: "DVaBoostersHitTheNitrous",
        name: "Hit the Nitrous",
        descriptionShort: "Boosters give extra immediate speed, stuns",
        descriptionLong: "The initial speed bonus of Boosters is increased to 300%, then decays to normal boost speed over 0.5 seconds. During this time, Boosters Stuns for 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_boosters_a.png",
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
          "DVaBoostersOn"
        ]
      },
      {
        id: "DVaDefenseMatrixFusionGenerator",
        name: "Fusion Generator",
        descriptionShort: "Defense Matrix adds Self-Destruct Charge",
        descriptionLong: "Every time an enemy Hero deals damage while inside Defense Matrix, D. Va's Self-Destruct Charge increases by 1%. Max of 20% Charge gained per use. Passive: While at full Self-Destruct charge, Fusion Cannons' bonus damage is increased to 100%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_defensematrix.png",
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
          "DVaMechDefenseMatrixOn",
          "DVaMechDefenseMatrixRetarget"
        ]
      }
    ],
    [
      {
        id: "DVaBunnyHop",
        name: "Bunny Hop",
        descriptionShort: "Become Unstoppable and Stun nearby Heroes",
        descriptionLong: "D. Va's Mech becomes Unstoppable and stomps every 0.5 seconds, dealing 78 (+4% / level) damage in a large area. Every 4th consecutive hit on a Hero deals 80% more damage and Stuns them for 0.5 seconds. Lasts for 4 seconds. Requires Mech Mode.",
        cooldown: 70,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_bunnyhop.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 31.6
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "DVaMechBunnyHopHeroic"
        ]
      },
      {
        id: "DVaMicroMissiles",
        name: "Micro Missiles",
        descriptionShort: "Fire a stream of missiles that damage and Slow",
        descriptionLong: "After .375 seconds, Channel to launch a volley of 12 missiles in a target direction. Each missile impacts the first enemy in its path, dealing 40 (+4% / level) damage in a small area and Slowing by 30% for 2 seconds. Stores 2 charges with a 3 second cooldown between each use. Requires Mech Mode.",
        cooldown: 19,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 3
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_micromissiles.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 8
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "DVaMicroMissiles"
        ]
      }
    ],
    [
      {
        id: "DVaTargetLocked",
        name: "Target Locked",
        descriptionShort: "Defense Matrix lowers Armor, Slows",
        descriptionLong: "Enemy Heroes that remain in your Defense Matrix for 0.75 seconds have their Armor reduced by 15 and their Movement Speed reduced by 25% for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_defensematrix.png",
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
          "DVaMechDefenseMatrixOn",
          "DVaMechDefenseMatrixRetarget"
        ]
      },
      {
        id: "DVaGoodToGo",
        name: "Good To Go",
        descriptionShort: "Unlock extra Pilot Mode abilities",
        descriptionLong: "Pilot Mode: Unlocks the Torpedo Dash and Concussive Pulse abilities. Torpedo Dash: Dash a short distance. 10 second cooldown. Concussive Pulse: Deal 120 (+4% / level) damage to enemies in a cone and knock them back. 10 second cooldown.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_pilotmode.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 24
        },
        order: 2,
        tier: "level13"
      },
      {
        id: "DVaBigShotPewPewPew",
        name: "Pew! Pew! Pew!",
        descriptionShort: "Big Shot fires multiple pulses",
        descriptionLong: "Pilot Mode: Instead of a single shot, Big Shot fires 3 shots over 0.5 seconds. Each shot deals 75% damage.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_bigshot.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 15
        },
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "DVaPilotBigShot"
        ]
      }
    ],
    [
      {
        id: "DVaInForTheKill",
        name: "In For The Kill",
        descriptionShort: "Boosters grants a Shield, increases attack damage",
        descriptionLong: "Casting Boosters grants a Shield equal to 10% of maximum life for 2.5 seconds. Each Enemy Hero hit by Boosters increases D. Va's Mech's Basic Attack damage by 10% for 5 seconds, stacking up to 5 times.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_boosters.png",
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
          "DVaBoostersOn"
        ]
      },
      {
        id: "DVaDefenseMatrixDivertingPower",
        name: "Diverting Power",
        descriptionShort: "Increase Defense Matrix area, adds healing",
        descriptionLong: "Defense Matrix's area grows drastically in size and each time it reduces damage dealt to Heroes D. Va's Mech is healed for 31 (+4% / level) Health.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_defensematrix.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 6.2,
          magicalDamage: 0
        },
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "DVaMechDefenseMatrixOn",
          "DVaMechDefenseMatrixRetarget"
        ]
      },
      {
        id: "DVaMechEmergencyShielding",
        name: "Emergency Shielding",
        descriptionShort: "Mech gains a Shield instead of dying",
        descriptionLong: "When D. Va's Mech would be destroyed, it instead gains a Shield that absorbs 290 (+4% / level) damage over 8 seconds. This effect has a 30 second cooldown.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_mechmode.png",
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
          "DVaMechMechMode"
        ]
      }
    ],
    [
      {
        id: "DVaBunnyHopStopAndPop",
        name: "Stop and Pop",
        descriptionShort: "Bunny Hop lasts longer, paused if stationary",
        descriptionLong: "Increase Bunny Hop's duration by 4 seconds, and it does not decay while D. Va's Mech is stationary.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_bunnyhop.png",
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
          "DVaMechBunnyHopHeroic"
        ],
        prerequisiteTalentIds: [
          "DVaBunnyHop"
        ]
      },
      {
        id: "DVaTimingAttack",
        name: "Timing Attack",
        descriptionShort: "Gain a charge, Hero hits reduce cooldown",
        descriptionLong: "Micro Missiles gains an additional charge. Each time Micro Missiles hits an enemy Hero, reduce its cooldown by 0.5 seconds and charge cooldown by 0.25 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_micromissiles.png",
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
          "DVaMicroMissiles"
        ],
        prerequisiteTalentIds: [
          "DVaMicroMissiles"
        ]
      },
      {
        id: "DVaHeadshot",
        name: "Headshot!",
        descriptionShort: "Increase Big Shot damage, reduce cooldown",
        descriptionLong: "Pilot Mode: Increase Big Shot's damage by 75% and reduce its cooldown by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_bigshot.png",
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
          "DVaPilotBigShot"
        ]
      },
      {
        id: "DVaMechAblativeArmor",
        name: "Ablative Armor",
        descriptionShort: "Heal for portion of Spell damage taken",
        descriptionLong: "45% of Spell damage dealt to D. Va's Mech is returned as healing over 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_mechmode.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.8,
          magicalDamage: 0
        },
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "DVaMechMechMode"
        ]
      }
    ]
  ],
  heroUnits: [
    {
      name: "D.Va",
      nameNormalized: "herodvapilot",
      size: 0.625,
      movementSpeed: 4.8398,
      health: {
        amount: 1109,
        scale: 0.04,
        regenRate: 2.5664,
        regenScale: 0.04
      },
      energy: {
        amount: 100,
        regenRate: 2.1992,
        name: "Charge"
      },
      autoAttacks: [
        {
          nameId: "DVaPilotWeapon",
          range: 5.5,
          period: 0.25,
          damage: 55,
          damageScale: 0.04
        }
      ],
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/herodvapilot.png",
      abilities: [
        {
          id: "DVaPilotTorpedoDash",
          name: "Torpedo Dash",
          descriptionShort: "Dash towards target location",
          descriptionLong: "Dash towards the target location, passing through enemies along the way.",
          cooldown: 10,
          category: "basic",
          type: "Q",
          icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_jetpackattack.png",
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
          id: "DVaPilotConcussivePulse",
          name: "Concussive Pulse",
          descriptionShort: "Damage and knockback nearby enemies",
          descriptionLong: "Deal 120 (+4% / level) damage to enemies in a cone and knock them back.",
          cooldown: 10,
          category: "basic",
          type: "W",
          icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_concussivecharge.png",
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
          id: "DVaPilotBigShot",
          name: "Big Shot",
          descriptionShort: "Damage and Slow enemies in a line as a Pilot",
          descriptionLong: "Deal 150 (+4% / level) damage to all enemies in a line. Heroes hit have their Movement Speed Slowed by 25% for 1.5 seconds. The cooldown of Call Mech is reduced by 5 seconds for each enemy Hero hit. Requires Pilot Mode.",
          cooldown: 6,
          category: "heroic",
          type: "Heroic",
          icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dva_bigshot.png",
          isPassive: false,
          analysis: {
            mobility: 0,
            physicalDamage: 0,
            tankiness: 0,
            healing: 0,
            magicalDamage: 75
          }
        }
      ],
      talents: [],
      analysis: {
        tankiness: 4.436,
        physicalDamage: 8.8,
        mobility: 24.199,
        healing: 0,
        magicalDamage: 111
      }
    }
  ],
  analysis: {
    tankiness: 64.7834274952919,
    physicalDamage: 44,
    mobility: 58.233134920634924,
    healing: 0,
    magicalDamage: 2.2905275602187083
  }
};
