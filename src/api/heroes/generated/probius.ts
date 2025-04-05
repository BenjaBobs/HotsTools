import { Hero } from '../heroes';
      
export const probius: Hero = {
  name: "Probius",
  nameNormalized: "probius",
  franchise: "Starcraft",
  gender: "Male",
  size: 0.6875,
  movementSpeed: 4.8398,
  health: {
    amount: 1260,
    scale: 0.04,
    regenRate: 2.625,
    regenScale: 0.04
  },
  energy: {
    amount: 600,
    regenRate: 0,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "ProbiusAttackWeapon",
      range: 3,
      period: 0.9,
      damage: 33,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/probius.png",
  abilities: [
    {
      id: "ProbiusWarpInPylon",
      name: "Warp In Pylon",
      descriptionShort: "Summon a Pylon that renergizes Probius and allows the construction of other buildings",
      descriptionLong: "Warp in a Pylon that generates a Power Field and grants vision of the surrounding area. Probius only regenerates mana while inside a Power Field. Enemy Heroes and Minions drop Minerals when killed. Gather Minerals to reduce the cooldown of Warp In Pylon by 0.75 seconds. Up to 2 Pylons can be active at a time.",
      cooldown: 14,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_warpinpylon.png",
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
      id: "ProbiusWorkerRush",
      name: "Worker Rush",
      descriptionShort: "Move faster passively. Activate to move even faster.",
      descriptionLong: "Activate to gain an additional 60% Movement Speed for 5 seconds. Taking damage ends this effect early. Worker Rush is always active while at the Hall of Storms. Passive: Probius moves 10% faster by hovering over the ground.",
      cooldown: 30,
      category: "mount",
      type: "Z",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_mount.png",
      isPassive: false,
      analysis: {
        mobility: 1,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 0
      }
    },
    {
      id: "ProbiusDisruptionPulse",
      name: "Disruption Pulse",
      descriptionShort: "Fire a missile in a line that damages enemies and detonates Warp Rifts",
      descriptionLong: "Fire a burst of energy forward, dealing 142 (+5% / level) damage to all enemies it passes through. Hitting the center of a Warp Rift will cause it to explode, dealing additional damage.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 3,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_disruptionpulse.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 142
      }
    },
    {
      id: "ProbiusWarpRift",
      name: "Warp Rift",
      descriptionShort: "Create a rift that Slows enemies and can be detonated with Disruption Pulse",
      descriptionLong: "Open an unstable Warp Rift at a location that takes 1.25 seconds to arm, which then Slows nearby enemies by 25% lasting 3 seconds. Armed Warp Rifts explode when they expire or when hit by Disruption Pulse, dealing 261 (+5% / level) damage to nearby enemies.",
      cost: {
        type: "Mana",
        amount: 150
      },
      cooldown: 6,
      charges: {
        chargesMax: 2,
        chargesInitial: 2,
        chargeCost: 1
      },
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_warprift.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 130.5
      }
    },
    {
      id: "ProbiusPhotonCannon",
      name: "Photon Cannon",
      descriptionShort: "Create a cannon that attacks nearby enemies",
      descriptionLong: "Warp in a Photon Cannon that deals 105 (+4% / level) damage. Lasts for 13 seconds. While within a Pylon's Power Field, Photon Cannons gain 40% Attack Speed over 4 seconds and reveal nearby enemies.",
      cooldown: 15,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_photoncannon.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0.8,
        tankiness: 0,
        healing: 0,
        magicalDamage: 21
      }
    },
    {
      id: "ProbiusPylonOvercharge",
      name: "Pylon Overcharge",
      descriptionShort: "Weaponize Pylons",
      descriptionLong: "For 8 seconds, increase the size of Pylon power fields and allow them to attack enemy Heroes within it for 96 (+4% / level) damage per second. Pylons are Invulnerable for the duration.",
      cost: {
        type: "Mana",
        amount: 100
      },
      cooldown: 80,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_pylonovercharge.png",
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
      id: "ProbiusNullGate",
      name: "Null Gate",
      descriptionShort: "Create a Slowing barrier",
      descriptionLong: "Vector TargetingProject a barrier of negative energy in the target direction that lasts 4 seconds. Enemies who touch the barrier take 76 (+4% / level) damage per second and are Slowed by 80% for as long as they remain in contact with it.",
      cost: {
        type: "Mana",
        amount: 100
      },
      cooldown: 25,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_voidgate.png",
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
        id: "ProbiusEchoPulseDisruptionPulse",
        name: "Echo Pulse",
        descriptionShort: "Disruption Pulse returns to Probius",
        descriptionLong: "Disruption Pulse now returns to Probius 1.25 seconds after reaching its target, dealing 100% damage on the return trip.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_disruptionpulse.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 20
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "ProbiusDisruptionPulse"
        ]
      },
      {
        id: "ProbiusWarpResonanceWarpRiftQuest",
        name: "Warp Resonance",
        descriptionShort: "Quest: Detonate Warp Rift on Heroes",
        descriptionLong: "Quest: Hit Heroes with Warp Rift explosions. Reward: After hitting 8 Heroes with Warp Rift explosions, increase the explosion damage by 120. Reward: After hitting 16 Heroes with Warp Rift explosions, Warp Rift gains 1 additional charge.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_warprift.png",
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
          "ProbiusWarpRift"
        ],
        isQuest: true
      },
      {
        id: "ProbiusGatherMineralsPhotonCannonQuest",
        name: "Gather Minerals",
        descriptionShort: "Quest: Collect Minerals to empower Photon Cannons",
        descriptionLong: "Quest: Gather Minerals to increase the Health of Photon Cannons by 8, up to 560. Reward: After collecting 70 Minerals, Photon Cannons deal 35% more damage.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_photoncannon.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 7
        },
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "ProbiusPhotonCannon"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "ProbiusPhotonBarrierPhotonCannon",
        name: "Photon Barrier",
        descriptionShort: "Gain Spell Armor while Photon Cannon is Active",
        descriptionLong: "While a Photon Cannon is alive and powered, Probius gains 40 Spell Armor.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_photoncannon.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 8,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "ProbiusPhotonCannon"
        ]
      },
      {
        id: "ProbiusTurboChargedWorkerRush",
        name: "Turbo Charged",
        descriptionShort: "Move faster and decrease Worker Rush's cooldown",
        descriptionLong: "Worker Rush grants an additional 10% passive Movement Speed while in a Power Field, and its cooldown is reduced by 14 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_workerrush.png",
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
          "ProbiusWorkerRush"
        ]
      },
      {
        id: "ProbiusShieldCapacitor",
        name: "Shield Capacitor",
        descriptionShort: "Gain permanent Shields",
        descriptionLong: "Probius gains permanent Shields equal to 10% of his max Health. Shields regenerate quickly as long as he hasn't taken damage recently.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_shieldcapacitor.png",
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
          "ProbiusWarpInPylon"
        ]
      }
    ],
    [
      {
        id: "ProbiusParticleAcceleratorDisruptionPulse",
        name: "Particle Accelerator",
        descriptionShort: "Disruption Pulse can fire additional pulses",
        descriptionLong: "After hitting 3 Heroes with Disruption Pulse, the next Warp Rift detonated by a Disruption Pulse fires 4 additional pulses that deal 78 (+5% / level) damage from the impact location in different directions. Passive: Reduce the cooldown of Disruption Pulse by 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_disruptionpulse.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 15.600000000000001
        },
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "ProbiusDisruptionPulse"
        ]
      },
      {
        id: "ProbiusRiftShockWarpRift",
        name: "Rift Shock",
        descriptionShort: "Detonate Warp Rifts quickly for extra damage",
        descriptionLong: "Hitting a Warp Rift with Disruption Pulse within 1 second of it arming deals 105 (+5% / level) damage over 3 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_warprift.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 21
        },
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "ProbiusWarpRift"
        ]
      },
      {
        id: "ProbiusTowerDefensePhotonCannon",
        name: "Tower Defense",
        descriptionShort: "Reduce Photon Cannon cooldown",
        descriptionLong: "Reduce Photon Cannon's cooldown by 3.5 seconds when Disruption Pulse or Warp Rift damages an enemy Hero.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_photoncannon.png",
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
          "ProbiusPhotonCannon"
        ]
      }
    ],
    [
      {
        id: "ProbiusPylonOverchargeHeroic",
        name: "Pylon Overcharge",
        descriptionShort: "Weaponize Pylons",
        descriptionLong: "For 8 seconds, increase the size of Pylon power fields and allow them to attack enemy Heroes within it for 96 (+4% / level) damage per second. Pylons are Invulnerable for the duration.",
        cost: {
          type: "Mana",
          amount: 100
        },
        cooldown: 80,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_pylonovercharge.png",
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
          "ProbiusPylonOvercharge"
        ]
      },
      {
        id: "ProbiusNullGateHeroic",
        name: "Null Gate",
        descriptionShort: "Create a Slowing barrier",
        descriptionLong: "Vector TargetingProject a barrier of negative energy in the target direction that lasts 4 seconds. Enemies who touch the barrier take 76 (+4% / level) damage per second and are Slowed by 80% for as long as they remain in contact with it.",
        cost: {
          type: "Mana",
          amount: 100
        },
        cooldown: 25,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_voidgate.png",
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
          "ProbiusNullGate"
        ]
      }
    ],
    [
      {
        id: "ProbiusAggressiveMatrixWarpInPylon",
        name: "Aggressive Matrix",
        descriptionShort: "Power Fields give Attack Damage",
        descriptionLong: "Pylon's Power Field grants allied Heroes 35% increased Attack Damage.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_warpinpylon.png",
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
          "ProbiusWarpInPylon"
        ]
      },
      {
        id: "ProbiusPowerOverflowingWarpInPylon",
        name: "Power Overflowing",
        descriptionShort: "Power Fields give Spell Power, Mana",
        descriptionLong: "Pylon's Power Field grants allied Heroes 10% increased Spell Power and 2 Mana per second.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_warpinpylon_a.png",
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
          "ProbiusWarpInPylon"
        ]
      },
      {
        id: "ProbiusShieldBatteryWarpInPylon",
        name: "Shield Battery",
        descriptionShort: "Power Fields grant Shields",
        descriptionLong: "Pylon's Power Field grants allied Heroes 28 (+4% / level) Shields per second, up to 112 (+4% / level). Shields persist for 2 seconds after exiting a Pylon Power Field.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_warpinpylon_b.png",
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
          "ProbiusWarpInPylon"
        ]
      }
    ],
    [
      {
        id: "ProbiusQuantumEntanglementWarpRift",
        name: "Quantum Entanglement",
        descriptionShort: "Warp Rift's slow lingers",
        descriptionLong: "Enemies continue to be Slowed for 3 seconds after their last contact with a Warp Rift.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_warprift.png",
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
          "ProbiusWarpRift"
        ]
      },
      {
        id: "ProbiusGravityWellWarpRift",
        name: "Gravity Well",
        descriptionShort: "Increase Warp Rift Slow amount in center",
        descriptionLong: "Enemies are Slowed more the closer they are to the center of the Warp Rift, up to a maximum slow of 60%.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_warprift_a.png",
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
          "ProbiusWarpRift"
        ]
      },
      {
        id: "ProbiusInterferenceWarpRift",
        name: "Interference",
        descriptionShort: "Warp Rift explosions reduce enemy Spell Power and knock back",
        descriptionLong: "Enemy Heroes hit by Warp Rift explosions have their Spell Power reduced by 35% for 5 seconds. Additionally, enemies hit by Warp Rift explosions are knocked away from the center.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_warprift_c.png",
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
          "ProbiusWarpRift"
        ]
      }
    ],
    [
      {
        id: "ProbiusConstructAdditionalPylonsPylonOvercharge",
        name: "Construct Additional Pylons",
        descriptionShort: "Increase max Pylon count and Pylon Overcharge damage",
        descriptionLong: "Probius can now have up to 3 active Pylons, and increase the damage of Pylon Overcharge by 25%.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_pylonovercharge.png",
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
          "ProbiusPylonOvercharge"
        ],
        prerequisiteTalentIds: [
          "ProbiusPylonOverchargeHeroic"
        ]
      },
      {
        id: "ProbiusGateKeeperNullGate",
        name: "Gate Keeper",
        descriptionShort: "Indefinite duration while in Pylon Power",
        descriptionLong: "Null Gate lasts indefinitely if either end is within a Power Field.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_voidgate.png",
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
          "ProbiusNullGate"
        ],
        prerequisiteTalentIds: [
          "ProbiusNullGateHeroic"
        ]
      },
      {
        id: "ProbiusShootEmUptoRiftsDisruptionPulse",
        name: "Shoot 'Em Up",
        descriptionShort: "Increase Disruption Pulse damage against Heroes",
        descriptionLong: "Enemy Heroes hit by Disruption Pulse take a bonus 2.5% of their maximum Health as damage. Passive: Reduce the cooldown of Disruption Pulse by 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_disruptionpulse.png",
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
          "ProbiusDisruptionPulse"
        ]
      },
      {
        id: "ProbiusProbiusLoopWarpRift",
        name: "Probius Loop",
        descriptionShort: "Create new Warp Rifts by hitting Heroes with explosions",
        descriptionLong: "Whenever a Rift explosion hits 1 or more enemy Heroes, create a new Warp Rift in the same location.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_probius_warprift.png",
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
          "ProbiusWarpRift"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 37.96610169491525,
    physicalDamage: 18.333333333333336,
    mobility: 24.99900793650794,
    healing: 0,
    magicalDamage: 10.843061918132111
  }
};
