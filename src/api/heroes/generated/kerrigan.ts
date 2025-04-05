import { Hero } from '../heroes';
      
export const kerrigan: Hero = {
  name: "Kerrigan",
  nameNormalized: "kerrigan",
  franchise: "Starcraft",
  gender: "Female",
  size: 0.6875,
  movementSpeed: 4.8398,
  health: {
    amount: 1764,
    scale: 0.04,
    regenRate: 3.6757,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroKerrigan",
      range: 2,
      period: 0.8,
      damage: 115,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/kerrigan.png",
  abilities: [
    {
      id: "KerriganAssimilation",
      name: "Assimilation",
      descriptionShort: "Gain a temporary Shield by attacking enemies",
      descriptionLong: "Gain 10% of damage dealt from Basic Attacks and Abilities as Shields for 6 seconds. Shield amount gained doubled against Heroes. Current maximum: 1004 (+4% / level)",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kerrigan_assimilation.png",
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
      id: "KerriganRavage",
      name: "Ravage",
      descriptionShort: "Leap to an enemy and deal damage",
      descriptionLong: "Leap to a target, dealing 130 (+4% / level) damage. If the enemy dies within 1.5 seconds, restore 1 charge and refund 20 Mana.",
      cost: {
        type: "Mana",
        amount: 20
      },
      cooldown: 8,
      charges: {
        chargesMax: 2,
        chargesInitial: 2,
        chargeCost: 1,
        recastCooldown: 0.25
      },
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kerrigan_ravage.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 48.75
      }
    },
    {
      id: "KerriganImpalingBlades",
      name: "Impaling Blades",
      descriptionShort: "Stun and damage enemies in an area",
      descriptionLong: "After 1.25 seconds, deal 165 (+4% / level) damage to enemies within the target area, Stunning them for 1 second.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 12,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kerrigan_impalingblades.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 41.25
      }
    },
    {
      id: "KerriganPrimalGrasp",
      name: "Primal Grasp",
      descriptionShort: "Pull and damage enemies in an area",
      descriptionLong: "Pulls enemies within the target area towards Kerrigan, dealing 25 (+4% / level) damage. After 2.5 seconds, an explosion occurs around Kerrigan, dealing 195 (+4% / level) damage to nearby enemies.",
      cost: {
        type: "Mana",
        amount: 65
      },
      cooldown: 10,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kerrigan_primalgrasp.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 66
      }
    },
    {
      id: "KerriganSummonUltralisk",
      name: "Summon Ultralisk",
      descriptionShort: "Summon a commandable Ultralisk",
      descriptionLong: "After 0.5 seconds, summon an Ultralisk that rushes forward upon spawning, dealing 250 (+4% / level) damage to the first enemy Hero hit and Stunning them for 0.5 seconds. The Ultralisk's Basic Attacks deal 50% of their damage in an area around their target. Reactivate to retarget the Ultralisk.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 80,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kerrigan_ultralisk.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 60
      }
    },
    {
      id: "KerriganMaelstrom",
      name: "Maelstrom",
      descriptionShort: "Persistently damage nearby enemies",
      descriptionLong: "Deals 74 (+4% / level) damage per second to nearby enemies. Lasts for 7 seconds.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 90,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kerrigan_maelstrom.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 14.8
      }
    }
  ],
  talents: [
    [
      {
        id: "KerriganRavageSiphoningImpact",
        name: "Siphoning Impact",
        descriptionShort: "Ravage grants Assimilation Shields",
        descriptionLong: "Hitting an enemy Hero with Ravage grants 100 (+4% / level) points of Assimilation Shields.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 0.25
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kerrigan_ravage.png",
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
          "KerriganRavage"
        ]
      },
      {
        id: "KerriganAssimilationMastery",
        name: "Assimilation Mastery",
        descriptionShort: "Globes grant Shields, Assimilation increases regen",
        descriptionLong: "Regeneration Globe healing grants 50 (+4% / level) points of Assimilation Shields per second while active. While Assimilation is active, Kerrigan's Health and Mana regeneration is increased by 150%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kerrigan_assimilation.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 10,
          magicalDamage: 0
        },
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "KerriganAssimilation"
        ]
      },
      {
        id: "KerriganFuryOfTheSwarm",
        name: "Fury of the Swarm",
        descriptionShort: "Basic Attacks grant more Shields, can splash",
        descriptionLong: "Gain 10% more Assimilation Shields from Basic Attacks. After casting Ravage, Kerrigan's next Basic Attack within 3 seconds splashes for 100% damage around the target.",
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
        order: 3,
        tier: "level1"
      }
    ],
    [
      {
        id: "KerriganRavageSharpenedBlades",
        name: "Sharpened Blades",
        descriptionShort: "Quest: Ravage kills increase damage",
        descriptionLong: "Quest: Minions and Heroes that die within 1.5 seconds of being hit by Ravage increase its damage up to a maximum of 75. Minions grant 1 increased damage and Heroes grant 5 increased damage. Reward: After reaching a 75 damage increase, Ravage gains 50 additional damage.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 0.25
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kerrigan_ravage.png",
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
          "KerriganRavage"
        ],
        isQuest: true
      },
      {
        id: "KerriganImpalingBladesKineticFulmination",
        name: "Kinetic Fulmination",
        descriptionShort: "Damage dealt increases Impaling Blades damage",
        descriptionLong: "Damaging an enemy increases the damage of Kerrigan's next Impaling Blades within 10 seconds by 10%, up to 100%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kerrigan_impalingblades.png",
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
          "KerriganImpalingBlades"
        ]
      },
      {
        id: "KerriganPrimalGraspPsionicPulse",
        name: "Psionic Pulse",
        descriptionShort: "Primal Grasp explodes twice",
        descriptionLong: "Primal Grasp explodes a second time 2 seconds after its first explosion.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kerrigan_primalgrasp.png",
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
          "KerriganPrimalGrasp"
        ]
      }
    ],
    [
      {
        id: "KerriganRavageQueenOfBlades",
        name: "Queen of Blades",
        descriptionShort: "Ravage deals bonus damage to Minions, Mercs",
        descriptionLong: "Reduce the cooldown of Ravage by 3 seconds and increase its damage to Minions and Mercenaries by 100%.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 0.25
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kerrigan_ravage.png",
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
          "KerriganRavage"
        ]
      },
      {
        id: "KerriganRavageBoundlessFury",
        name: "Boundless Fury",
        descriptionShort: "Ravage can grant a charge of Ravage",
        descriptionLong: "Hitting an enemy Hero with Ravage grants a charge of Ravage. Can only occur once every 10 seconds per Hero.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 0.25
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kerrigan_ravage_b.png",
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
          "KerriganRavage"
        ]
      },
      {
        id: "KerriganBladedMomentum",
        name: "Bladed Momentum",
        descriptionShort: "Attacking Heroes reduces Ability cooldowns",
        descriptionLong: "Basic Attacks against enemy Heroes reduce the cooldown of Kerrigan's Basic Abilities by 0.6 seconds.",
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
        tier: "level7"
      }
    ],
    [
      {
        id: "KerriganHeroicAbilityMaelstrom",
        name: "Maelstrom",
        descriptionShort: "Persistently damage nearby enemies",
        descriptionLong: "Deals 74 (+4% / level) damage per second to nearby enemies. Lasts for 7 seconds.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 90,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kerrigan_maelstrom.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 14.8
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "KerriganMaelstrom"
        ]
      },
      {
        id: "KerriganHeroicAbilitySummonUltralisk",
        name: "Summon Ultralisk",
        descriptionShort: "Summon a commandable Ultralisk",
        descriptionLong: "After 0.5 seconds, summon an Ultralisk that rushes forward upon spawning, dealing 250 (+4% / level) damage to the first enemy Hero hit and Stunning them for 0.5 seconds. The Ultralisk's Basic Attacks deal 50% of their damage in an area around their target. Reactivate to retarget the Ultralisk.",
        cost: {
          type: "Mana",
          amount: 75
        },
        cooldown: 80,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kerrigan_ultralisk.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 60
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "KerriganSummonUltralisk"
        ]
      }
    ],
    [
      {
        id: "KerriganPrimalGraspPsionicBarrier",
        name: "Psionic Barrier",
        descriptionShort: "Primal Grasp grants Spell Armor, Move Speed",
        descriptionLong: "Each enemy Hero hit by Primal Grasp grants 20 Spell Armor and 4% Movement Speed for 4 seconds, stacking up to 20% Movement Speed.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kerrigan_primalgrasp.png",
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
          "KerriganPrimalGrasp"
        ]
      },
      {
        id: "KerriganAssimilationVolatilePower",
        name: "Volatile Power",
        descriptionShort: "Increase Assimilation gain, reduce duration",
        descriptionLong: "Increase the amount of Assimilation Shields granted from damage dealt by 10%, but reduce duration of Assimilation by 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kerrigan_assimilation.png",
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
          "KerriganAssimilation"
        ]
      },
      {
        id: "KerriganChrysalis",
        name: "Chrysalis",
        descriptionShort: "Activate to enter Stasis and heal",
        descriptionLong: "Activate to place Kerrigan in a Chrysalis with 750 (+4% / level) Health for 5 seconds. While inside, Kerrigan regenerates 5% of her maximum Health per second. Enemies can destroy the Chrysalis to end its effects early.",
        cooldown: 90,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kerrigan_chrysalis.png",
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
        id: "KerriganRavageMountingPotency",
        name: "Mounting Potency",
        descriptionShort: "Ravage grants Spell Power",
        descriptionLong: "Ravage grants 5% Spell Power for 5 seconds, up to 40%.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 0.25
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kerrigan_ravage.png",
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
          "KerriganRavage"
        ]
      },
      {
        id: "KerriganImpalingBladesPainfulSpikes",
        name: "Painful Spikes",
        descriptionShort: "Impaling Blades grants bonus damage",
        descriptionLong: "Enemies hit by Impaling Blades take an additional 70 (+4% / level) damage the next 6 times Kerrigan damages them within 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kerrigan_impalingblades.png",
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
          "KerriganImpalingBlades"
        ]
      },
      {
        id: "KerriganUnbridledEnergy",
        name: "Unbridled Energy",
        descriptionShort: "Heroic Ability damage grants Spell Power",
        descriptionLong: "Damaging a Hero with a Heroic Ability grants 35% Spell Power for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_abilitytalent_damage.png",
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
          "KerriganSummonUltralisk",
          "KerriganMaelstrom"
        ]
      }
    ],
    [
      {
        id: "KerriganOmegastormMaelstrom",
        name: "Omegastorm",
        descriptionShort: "Damaging enemies increases Maelstrom duration",
        descriptionLong: "Maelstrom's duration is increased by 0.25 seconds every time it damages a Hero.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kerrigan_maelstrom.png",
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
          "KerriganMaelstrom"
        ],
        prerequisiteTalentIds: [
          "KerriganHeroicAbilityMaelstrom"
        ]
      },
      {
        id: "KerriganTorrasqueSummonUltralisk",
        name: "Torrasque",
        descriptionShort: "Ultralisk spawns a new Ultralisk on death",
        descriptionLong: "Increase the Health and Basic Attack damage of the Ultralisk by 20%. The Ultralisk morphs into an egg when it dies. If the egg isn't killed within 4 seconds, a new Ultralisk is born.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kerrigan_ultralisk.png",
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
          "KerriganSummonUltralisk"
        ],
        prerequisiteTalentIds: [
          "KerriganHeroicAbilitySummonUltralisk"
        ]
      },
      {
        id: "KerriganAssimilationAssimilationBlades",
        name: "Assimilation Blades",
        descriptionShort: "Damaging enemies increases Attack Damage",
        descriptionLong: "Damaging an enemy increases Basic Attack damage by 2% for 5 seconds, up to 40%.",
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
        order: 3,
        tier: "level20"
      },
      {
        id: "KerriganPsionicShift",
        name: "Psionic Shift",
        descriptionShort: "Activate to teleport a short distance, deal damage",
        descriptionLong: "Activate to teleport to a nearby location, dealing 50 (+4% / level) damage to nearby enemies. Generates 300% increased Assimilation Shields from the damage dealt.",
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
          magicalDamage: 10
        },
        order: 4,
        tier: "level20"
      }
    ]
  ],
  analysis: {
    tankiness: 53.15254237288135,
    physicalDamage: 71.875,
    mobility: 24.006944444444446,
    healing: 0,
    magicalDamage: 8.526673562878676
  }
};
