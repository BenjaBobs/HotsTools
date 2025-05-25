import { Hero } from '../heroes';
      
export const junkrat: Hero = {
  name: "Junkrat",
  nameNormalized: "junkrat",
  franchise: "Overwatch",
  gender: "Male",
  size: 0.6875,
  movementSpeed: 4.8398,
  health: {
    amount: 1425,
    scale: 0.04,
    regenRate: 2.9687,
    regenScale: 0.04
  },
  energy: {
    amount: 4,
    regenRate: 0,
    name: "Ammo"
  },
  autoAttacks: [
    {
      nameId: "JunkratHeroWeaponRanged",
      range: 5.5,
      period: 1,
      damage: 120,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/junkrat.png",
  abilities: [
    {
      id: "JunkratTotalMayhem",
      name: "Total Mayhem",
      descriptionShort: "Drop grenades upon death",
      descriptionLong: "Upon dying, drop 5 grenades that explode after 0.75 seconds, each dealing 250 (+4% / level) damage to nearby enemies. Deals 75% less damage to Structures. Detonate MineDetonate an active Concussion Mine.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_bomb_pack.png",
      isPassive: true,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 65
      }
    },
    {
      id: "JunkratFragLauncher",
      name: "Frag Launcher",
      descriptionShort: "Launch a bouncing grenade",
      descriptionLong: "Launch a grenade that explodes at the end of its path or upon hitting an enemy, dealing 124 (+4% / level) damage to nearby enemies. Grenades can ricochet off of terrain. Deals 50% less damage to Structures. Stores up to 4 charges. Frag Launcher's cooldown replenishes all charges at the same time.",
      cooldown: 12,
      charges: {
        chargesMax: 4,
        chargesInitial: 4,
        chargeCost: 1,
        recastCooldown: 0.5
      },
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_frag_launcher.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 43.5
      }
    },
    {
      id: "JunkratConcussionMine",
      name: "Concussion Mine",
      descriptionShort: "Place a mine that can be detonated",
      descriptionLong: "Place a mine on the ground. Junkrat's Trait can be activated to detonate the mine, dealing 180 (+4% / level) damage to nearby enemies and knocking them back. Junkrat can also be affected by Concussion Mine, but takes no damage. Limit 1 active mine.",
      cooldown: 16,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_concussion_mine.png",
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
      id: "JunkratSteelTrap",
      name: "Steel Trap",
      descriptionShort: "Place a trap that Roots enemies",
      descriptionLong: "Place a trap on the ground that arms after 2 seconds. Deals 130 (+4% / level) damage to the first enemy that walks over it and Roots them for 2 seconds. Limit 1 active trap.",
      cooldown: 15,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_steel_trap.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 26
      }
    },
    {
      id: "JunkratRIPTire",
      name: "RIP-Tire",
      descriptionShort: "Create a motorized bomb that explodes",
      descriptionLong: "Create a motorized bomb with 530 (+4% / level) Health that lasts 15 seconds. While active, Junkrat is immobile but gains control of RIP-Tire's movement. RIP-Tire can be reactivated to detonate immediately, knocking nearby enemies back and dealing 720 (+4% / level) damage to enemies near the center gradually reduced to 445 (+4% / level) to enemies on the edge.",
      cooldown: 75,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_rip_tire.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 144
      }
    },
    {
      id: "JunkratRocketRide",
      name: "Rocket Ride",
      descriptionShort: "Launch into the air, damaging enemies upon landing",
      descriptionLong: "After 1.25 seconds, Junkrat launches into the air. While in the air, he can steer the landing location by moving. After 3.75 seconds, Junkrat lands, dealing 935 (+4% / level) damage to nearby enemies and activating Total Mayhem. 5 seconds after landing, Junkrat reappears at the Hall of Storms and gains 150% additional Movement Speed until dismounted.",
      cooldown: 75,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_rocket_ride.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 187
      }
    }
  ],
  talents: [
    [
      {
        id: "JunkratFragLauncherTrickyShuffles",
        name: "Tricky Shuffles",
        descriptionShort: "Gain Move Speed while Frag Launcher replenishes",
        descriptionLong: "While Frag Launcher has no charges left, Junkrat gains 10% Movement Speed and his Basic Attacks deal 15% bonus damage.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_frag_launcher.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 3
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "JunkratFragLauncher"
        ]
      },
      {
        id: "JunkratFragLauncherExtraWoundTimers",
        name: "Extra-Wound Timers",
        descriptionShort: "Frag Launcher grenades deal bonus damage",
        descriptionLong: "The final grenade launched from Frag Launcher deals 100% bonus damage, and Frag Launcher grenades last an additional 2 seconds before automatically detonating.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_frag_launcher_b.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 20
        },
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "JunkratFragLauncher"
        ]
      },
      {
        id: "JunkratConcussionMineBlowEmUp",
        name: "Blow 'Em Up!",
        descriptionShort: "Concussion Mine and Steel Trap increase damage",
        descriptionLong: "Hitting an enemy Hero with Concussion Mine or Steel Trap causes Junkrat to deal 25% more damage with Basic Attacks and Basic Abilities for 6 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_trap_mine.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 5
        },
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "JunkratConcussionMine",
          "JunkratSteelTrap"
        ]
      }
    ],
    [
      {
        id: "JunkratFragLauncherTasteForExplosions",
        name: "Taste For Explosions",
        descriptionShort: "Quest: Increase Frag Launcher damage",
        descriptionLong: "Quest: Hitting a Hero with Frag Launcher increases its damage by 0.2%, up to 40%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_frag_launcher.png",
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
          "JunkratFragLauncher"
        ],
        isQuest: true
      },
      {
        id: "JunkratConcussionMineBOOMPOW",
        name: "BOOM POW",
        descriptionShort: "Hitting Heroes reduces Concussion Mine cooldown",
        descriptionLong: "Hitting an enemy Hero with Concussion Mine reduces its cooldown by 10 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_concussion_mine.png",
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
          "JunkratConcussionMine",
          "JunkratDetonateMine"
        ]
      },
      {
        id: "JunkratSteelTrapChatteringTeeth",
        name: "Chattering Teeth",
        descriptionShort: "Steel Traps chase Heroes",
        descriptionLong: "Steel Traps will slowly chase nearby enemy Heroes.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_steel_trap.png",
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
          "JunkratSteelTrap"
        ]
      }
    ],
    [
      {
        id: "JunkratConcussionMineBoggedDown",
        name: "Bogged Down",
        descriptionShort: "Concussion Mine Slows",
        descriptionLong: "Enemies launched by Concussion Mine are Slowed by 40% for 2.5 seconds upon landing.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_concussion_mine.png",
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
          "JunkratConcussionMine",
          "JunkratDetonateMine"
        ]
      },
      {
        id: "JunkratSteelTrapStickyWicket",
        name: "Sticky Wicket",
        descriptionShort: "Steel Trap Silences Heroes",
        descriptionLong: "Enemy Heroes who are hit by Steel Trap are Silenced for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_steel_trap.png",
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
          "JunkratSteelTrap"
        ]
      },
      {
        id: "JunkratTotalMayhemDirtyTricksterTalent",
        name: "Dirty Trickster",
        descriptionShort: "Trigger Total Mayhem more often",
        descriptionLong: "Increase the explosion radius of Total Mayhem by 20%. When Junkrat is Stunned, Rooted, or damaged by an enemy Hero while below 50% Health, he uses Total Mayhem, dropping 5 grenades at his feet that explode. This effect has a 20 second cooldown.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_bomb_pack.png",
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
          "JunkratTotalMayhem"
        ]
      }
    ],
    [
      {
        id: "JunkratRIPTire",
        name: "RIP-Tire",
        descriptionShort: "Create a motorized bomb that explodes",
        descriptionLong: "Create a motorized bomb with 530 (+4% / level) Health that lasts 15 seconds. While active, Junkrat is immobile but gains control of RIP-Tire's movement. RIP-Tire can be reactivated to detonate immediately, knocking nearby enemies back and dealing 720 (+4% / level) damage to enemies near the center gradually reduced to 445 (+4% / level) to enemies on the edge.",
        cooldown: 75,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_rip_tire.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 144
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "JunkratRIPTire"
        ]
      },
      {
        id: "JunkratRocketRide",
        name: "Rocket Ride",
        descriptionShort: "Launch into the air, damaging enemies upon landing",
        descriptionLong: "After 1.25 seconds, Junkrat launches into the air. While in the air, he can steer the landing location by moving. After 3.75 seconds, Junkrat lands, dealing 935 (+4% / level) damage to nearby enemies and activating Total Mayhem. 5 seconds after landing, Junkrat reappears at the Hall of Storms and gains 150% additional Movement Speed until dismounted.",
        cooldown: 75,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_rocket_ride.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 187
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "JunkratRocketRide"
        ]
      }
    ],
    [
      {
        id: "JunkratFragLauncherBombsAwayTalent",
        name: "Bombs Away",
        descriptionShort: "Gain Basic Attack range, damage",
        descriptionLong: "Increase Junkrat's Basic Attack range by 1. Frag Launcher grenades fired within 0.5 seconds of using a Basic Attack deal 30% bonus damage.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_frag_launcher.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 6
        },
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "JunkratFragLauncher"
        ]
      },
      {
        id: "JunkratConcussionMineRipperAir",
        name: "Ripper Air",
        descriptionShort: "Concussion Mine knocks Junkrat farther",
        descriptionLong: "Junkrat is knocked back 50% farther by Concussion Mine. Additionally, Concussion Mine's cooldown is reduced by 12 seconds if only Junkrat is hit.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_concussion_mine.png",
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
          "JunkratConcussionMine",
          "JunkratDetonateMine"
        ]
      },
      {
        id: "JunkratSteelTrapGottaTrapEmAll",
        name: "Gotta Trap 'Em All!",
        descriptionShort: "Increase Steel Trap count",
        descriptionLong: "Reduce Steel Trap's cooldown by 5 seconds and increase the maximum number of active traps to 2.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_steel_trap.png",
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
          "JunkratSteelTrap"
        ]
      },
      {
        id: "JunkratSteelTrapBigAs",
        name: "Big As",
        descriptionShort: "Steel Traps focus Heroes",
        descriptionLong: "Steel Trap now only hits Heroes, and Heroes hit have their Armor reduced by 15 for 3 seconds. Increases Steel Trap's radius and damage by 50%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_steel_trap_a.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 4,
        tier: "level13",
        linkedAbilityIds: [
          "JunkratSteelTrap"
        ]
      }
    ],
    [
      {
        id: "JunkratFragLauncherBurstFire",
        name: "Burst Fire",
        descriptionShort: "Frag Launcher burst fires",
        descriptionLong: "Frag Launcher fires all of its charges in a continuous burst, its cooldown is reduced by 6 seconds, but it loses 1 maximum charge.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_frag_launcher_f.png",
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
          "JunkratFragLauncher"
        ]
      },
      {
        id: "JunkratFragLauncherEndlessNades",
        name: "Endless Nades",
        descriptionShort: "Hitting Heroes reduces Frag Launcher cooldown",
        descriptionLong: "Hitting an enemy Hero with Frag Launcher reduces its cooldown by 1.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_frag_launcher_e.png",
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
          "JunkratFragLauncher"
        ]
      },
      {
        id: "JunkratFragLauncherSpreadVolley",
        name: "Spread Volley",
        descriptionShort: "Activate to make Frag Launcher spread",
        descriptionLong: "Activate to make Frag Launcher fire 2 additional grenades in a spread. Works for up to 4 total charges, or until Frag Launcher runs out of charges.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_frag_launcher_d.png",
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
        id: "JunkratRIPTireExtraOomph",
        name: "Extra Oomph",
        descriptionShort: "Increase RIP-Tire knockback, reduce cooldown",
        descriptionLong: "Increase RIP-Tire's knockback distance by 50%, and its cooldown is reduced by 25 seconds for each enemy Hero hit.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_rip_tire.png",
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
          "JunkratRIPTire"
        ],
        prerequisiteTalentIds: [
          "JunkratRIPTire"
        ]
      },
      {
        id: "JunkratRocketRidePuckishScamp",
        name: "Puckish Scamp",
        descriptionShort: "Also gain RIP-Tire",
        descriptionLong: "Junkrat also gains the Ability RIP-Tire. Each time he uses his Heroic, it swaps to the alternate ability. Passive: Reduce both Heroic cooldowns by 20 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_rocket_ride.png",
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
          "JunkratRIPTire",
          "JunkratRocketRide"
        ],
        prerequisiteTalentIds: [
          "JunkratRocketRide"
        ]
      },
      {
        id: "JunkratFragLauncherCannonball",
        name: "Cannonball!",
        descriptionShort: "Bigger Basic Attack, Frag Launcher explosions",
        descriptionLong: "Increase the radius and explosion radius of grenades from Basic Attacks and Frag Launcher by 50%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_frag_launcher_g.png",
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
          "JunkratFragLauncher"
        ]
      },
      {
        id: "JunkratIHateWaitingTalent",
        name: "I Hate Waiting!",
        descriptionShort: "Ride Junkrat's Rocket!",
        descriptionLong: "Junkrat always rides his Rocket Ride Mount, which grants 150% increased Movement Speed, but his Mount cooldown is increased to 8 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_junkrat_mount_rocket.png",
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
          "JunkratTotalMayhem"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 42.93785310734463,
    physicalDamage: 60,
    mobility: 24.006944444444446,
    healing: 0,
    magicalDamage: 18.52741244273681
  }
};
