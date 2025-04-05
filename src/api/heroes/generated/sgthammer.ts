import { Hero } from '../heroes';
      
export const sgthammer: Hero = {
  name: "Sgt. Hammer",
  nameNormalized: "sgthammer",
  franchise: "Starcraft",
  gender: "Female",
  size: 1.1875,
  movementSpeed: 4.8398,
  health: {
    amount: 1720,
    scale: 0.04,
    regenRate: 3.582,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroSgtHammer",
      range: 5.5,
      period: 1,
      damage: 140,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/sgthammer.png",
  abilities: [
    {
      id: "SgtHammerSiegeMode",
      name: "Siege Mode",
      descriptionShort: "Become immobile to increase range and empower Basic Attacks",
      descriptionLong: "Activate to enter Siege Mode. While in Siege Mode, Basic Attacks deal 20% more damage, have 100% increased range, and deal 25% of their damage as splash damage around the target.",
      cooldown: 2,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_siegemode.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 67.5
      }
    },
    {
      id: "SgtHammerThrusters",
      name: "Thrusters",
      descriptionShort: "Activate to gain a burst of Movement Speed",
      descriptionLong: "Increase Movement Speed by 60% for 4 seconds. Thrusters are always active while at the Hall of Storms. Activating Thrusters cancels Siege Mode.",
      cooldown: 30,
      category: "mount",
      type: "Z",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_mount.png",
      isPassive: false,
      analysis: {
        mobility: 12,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 0
      }
    },
    {
      id: "SgtHammerSpiderMines",
      name: "Spider Mines",
      descriptionShort: "Create mines that slow and damage enemies on contact",
      descriptionLong: "Create 3 mines that arm after 1.25 seconds. Mines detonate when an enemy comes in range, dealing 96 (+4% / level) damage to nearby enemies and Slowing them by 25% for 1.5 seconds. Siege Mode: Cast range increased by 100%.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 14,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_spidermines.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 20.57142857142857
      }
    },
    {
      id: "SgtHammerConcussiveBlast",
      name: "Concussive Blast",
      descriptionShort: "Knock back and damage enemies",
      descriptionLong: "Deal 141 (+4% / level) damage to enemies in front of Sgt. Hammer and knock them back. Siege Mode: Radius increased by 50%.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 12,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_concussiveblast.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 35.25
      }
    },
    {
      id: "SgtHammerNeosteelPlating",
      name: "Neosteel Plating",
      descriptionShort: "Gain temporary Armor",
      descriptionLong: "Gain 25 Armor for 2 seconds. Siege Mode: Grants 100% more Armor.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 16,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_neosteelplating.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 5,
        healing: 0,
        magicalDamage: 0
      }
    },
    {
      id: "SgtHammerNapalmStrike",
      name: "Napalm Strike",
      descriptionShort: "Fire damaging napalm at enemies",
      descriptionLong: "Deals 164 (+4% / level) damage on impact, and leaves a napalm area that deals 50 (+4% / level) damage per second. Lasts for 4 seconds.",
      cost: {
        type: "Mana",
        amount: 35
      },
      cooldown: 6,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_napalmstrike.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 107
      }
    },
    {
      id: "SgtHammerBluntForceGun",
      name: "Blunt Force Gun",
      descriptionShort: "Fire a large bullet across the map",
      descriptionLong: "Fire a missile across the battlefield, dealing 500 (+3% / level) damage to non-Structure enemies in its path.",
      cost: {
        type: "Mana",
        amount: 100
      },
      cooldown: 70,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_bluntforcegun.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 100
      }
    }
  ],
  talents: [
    [
      {
        id: "SgtHammerAmbush",
        name: "Ambush",
        descriptionShort: "Siege Mode grants Stealth, extra damage",
        descriptionLong: "Gain Stealth when entering Siege Mode or after not taking or dealing damage for 3 seconds while in Siege Mode. Basic Attacks while Stealthed deal 125% more damage. Remaining stationary for at least 1.5 seconds while Stealthed grants Invisible.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_siegemode_var2.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 25
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "SgtHammerSiegeMode"
        ]
      },
      {
        id: "SgtHammerSiegeModeAdvancedArtillery",
        name: "Advanced Artillery",
        descriptionShort: "Increase Siege Mode splash damage, radius",
        descriptionLong: "Increase Siege Mode's splash damage to 60% of Basic Attack damage, and increase its splash radius by 25%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_siegemode.png",
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
          "SgtHammerSiegeMode"
        ]
      },
      {
        id: "SgtHammerSiegeModeMaelstromRounds",
        name: "Maelstrom Rounds",
        descriptionShort: "Activate to increase Basic Attack damage",
        descriptionLong: "Activate to increase Basic Attack damage dealt by 30% for 5 seconds. Hitting enemy Heroes or Structures with Basic Attacks while in Siege Mode reduces the cooldown of Maelstrom Rounds by 5 seconds. Stores up to 3 charges.",
        cooldown: 80,
        charges: {
          chargesMax: 3,
          chargesInitial: 3,
          chargeCost: 1,
          recastCooldown: 5
        },
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_siegemode_var1.png",
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
          "SgtHammerSiegeMode"
        ]
      }
    ],
    [
      {
        id: "SgtHammerBarricade",
        name: "Barricade",
        descriptionShort: "Concussive Blast creates a wall",
        descriptionLong: "Reduce Concussive Blast's cooldown by 4 seconds, its Mana cost by 40, and when cast create an impassable wall in front of Sgt. Hammer for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_concussiveblast.png",
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
          "SgtHammerConcussiveBlast"
        ]
      },
      {
        id: "SgtHammerNeosteelPlatingSiegeTactics",
        name: "Siege Tactics",
        descriptionShort: "Neosteel Plating can grant Unstoppable",
        descriptionLong: "Using Neosteel Plating while in Siege Mode grants Unstoppable for 2 seconds, as long as she remains in Siege Mode.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_neosteelplating.png",
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
          "SgtHammerNeosteelPlating"
        ]
      },
      {
        id: "SgtHammerSiegeModeRegenerativeBioSteel",
        name: "Regenerative Bio-Steel",
        descriptionShort: "Basic Attacks in Siege Mode heal",
        descriptionLong: "Basic Attacks while in Siege Mode heal for 10% of the damage dealt.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_siegemode.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 2,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "SgtHammerSiegeMode"
        ]
      }
    ],
    [
      {
        id: "SgtHammerSpiderMinesPulseDetonationCore",
        name: "Pulse Detonation Core",
        descriptionShort: "Spider Mines detonate multiple times",
        descriptionLong: "Spider Mines detonate 3 times over 3 seconds. Basic Attacks against enemy Heroes grant 5 Mana and reduce the cooldown of Spider Mines by 1.5 seconds. Increase this bonus to 2.5 seconds while in Siege Mode.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_spidermines.png",
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
          "SgtHammerSpiderMinesSiegeMode",
          "SgtHammerSpiderMines"
        ]
      },
      {
        id: "SgtHammerMasteryHoverSiegeMode",
        name: "Hover Siege Mode",
        descriptionShort: "Move while in Siege Mode",
        descriptionLong: "Sgt. Hammer can move at 50% Movement Speed while in Siege Mode.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_siegemode.png",
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
          "SgtHammerSiegeMode"
        ]
      },
      {
        id: "SgtHammerGraduatingRange",
        name: "Graduating Range",
        descriptionShort: "Gradually gain Basic Attack range in Siege Mode",
        descriptionLong: "While in Siege Mode, Basic Attack range is increased by 1 every 1.5 seconds, up to 3.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_siegemode_var1.png",
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
          "SgtHammerSiegeMode"
        ]
      }
    ],
    [
      {
        id: "SgtHammerHeroicAbilityBluntForceGun",
        name: "Blunt Force Gun",
        descriptionShort: "Fire a large bullet across the map",
        descriptionLong: "Fire a missile across the battlefield, dealing 500 (+3% / level) damage to non-Structure enemies in its path.",
        cost: {
          type: "Mana",
          amount: 100
        },
        cooldown: 70,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_bluntforcegun.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 100
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "SgtHammerBluntForceGun"
        ]
      },
      {
        id: "SgtHammerHeroicAbilityNapalmStrike",
        name: "Napalm Strike",
        descriptionShort: "Fire damaging napalm at enemies",
        descriptionLong: "Deals 164 (+4% / level) damage on impact, and leaves a napalm area that deals 50 (+4% / level) damage per second. Lasts for 4 seconds.",
        cost: {
          type: "Mana",
          amount: 35
        },
        cooldown: 6,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_napalmstrike.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 107
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "SgtHammerNapalmStrike"
        ]
      }
    ],
    [
      {
        id: "SgtHammerSpiderMinesTacticalMineDeployment",
        name: "Tactical Mine Deployment",
        descriptionShort: "Thrusters leave behind Spider Mines",
        descriptionLong: "Moving while Thrusters is active leaves a trail of up to 5 Spider Mines. Additionally, increase the Slow of Spider Mines by 15%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_spidermines.png",
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
          "SgtHammerSpiderMinesSiegeMode",
          "SgtHammerSpiderMines"
        ]
      },
      {
        id: "SgtHammerConcussiveBlastEntrenched",
        name: "Entrenched",
        descriptionShort: "Siege Mode empowers Concussive Blast",
        descriptionLong: "While in Siege Mode, Concussive Blasts's damage and knockback distance are increased by 75%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_concussiveblast.png",
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
          "SgtHammerConcussiveBlast"
        ]
      },
      {
        id: "SgtHammerHyperCoolingEngines",
        name: "Hyper-Cooling Engines",
        descriptionShort: "Siege Mode Attacks reduce Thrusters cooldown",
        descriptionLong: "While in Siege Mode, hitting Heroes with Basic Attacks reduces the cooldown of Thrusters by 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_hypercoolingengines.png",
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
          "SgtHammerThrusters"
        ]
      }
    ],
    [
      {
        id: "SgtHammerNeosteelPlatingMechanicalKnowhow",
        name: "Mechanical Know-how",
        descriptionShort: "Neosteel Plating grants a Shield, increases damage",
        descriptionLong: "Neosteel Plating grants 20% maximum Health as a Shield for 2 seconds and increases Basic Attack damage by 30% for 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_neosteelplating.png",
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
          "SgtHammerNeosteelPlating"
        ]
      },
      {
        id: "HeroGenericExecutionerPassive",
        name: "Executioner",
        descriptionShort: "Attacking disabled Heroes increases damage",
        descriptionLong: "Attacking a Hero that is Slowed, Rooted, or Stunned increases your Basic Attack damage by 30% for 3 seconds.",
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
        id: "GenericTalentGiantKillerSgtHammer",
        name: "Giant Killer",
        descriptionShort: "Empowers your Basic Attacks against Heroes",
        descriptionLong: "Basic Attacks against enemy Heroes deal bonus damage equal to 1.5% of the Hero's maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_searing.png",
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
        id: "SgtHammerMasteryOrbitalBFGBluntForceGun",
        name: "Orbital BFG",
        descriptionShort: "BFG repeatedly travels through the map",
        descriptionLong: "Blunt Force Gun's missile orbits the planet every 5 seconds. Only the last missile fired orbits.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_bluntforcegun.png",
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
          "SgtHammerBluntForceGun"
        ],
        prerequisiteTalentIds: [
          "SgtHammerHeroicAbilityBluntForceGun"
        ]
      },
      {
        id: "SgtHammerMasteryAdvancedLavaStrikeNapalmStrike",
        name: "Advanced Lava Strike",
        descriptionShort: "Increased range and impact damage",
        descriptionLong: "Napalm Strike's range is increased by 75% and its impact does 50% more damage.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_napalmstrike.png",
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
          "SgtHammerNapalmStrikeSiege",
          "SgtHammerNapalmStrike"
        ],
        prerequisiteTalentIds: [
          "SgtHammerHeroicAbilityNapalmStrike"
        ]
      },
      {
        id: "SgtHammerSpiderMinesShrapnelMines",
        name: "Shrapnel Mines",
        descriptionShort: "Spider Mines reduce Armor",
        descriptionLong: "Upon detonating, Spider Mines reduce the Armor of enemy Heroes hit by 10, up to 50, for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_spidermines.png",
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
          "SgtHammerSpiderMinesSiegeMode",
          "SgtHammerSpiderMines"
        ]
      },
      {
        id: "SgtHammerSiegeModeUltraCapacitors",
        name: "Ultra Capacitors",
        descriptionShort: "Siege Mode Attacks grant Attack Speed",
        descriptionLong: "Hitting enemy Heroes with Basic Attacks while in Siege Mode grants 10% Attack Speed for 5 seconds, up to 60%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sgthammer_siegemode.png",
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
          "SgtHammerSiegeMode"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 51.826741996233515,
    physicalDamage: 70,
    mobility: 35.91170634920635,
    healing: 0,
    magicalDamage: 12.203392514091494
  }
};
