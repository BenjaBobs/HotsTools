import { Hero } from '../heroes';
      
const zarya: Hero = {
  name: "Zarya",
  nameNormalized: "zarya",
  franchise: "Overwatch",
  gender: "Female",
  size: 0.8125,
  movementSpeed: 4.8398,
  health: {
    amount: 2292,
    scale: 0.04,
    regenRate: 4.7734,
    regenScale: 0.04
  },
  energy: {
    amount: 100,
    regenRate: 0,
    name: "Energy"
  },
  autoAttacks: [
    {
      nameId: "ZaryaHeroWeapon",
      range: 4.5,
      period: 0.25,
      damage: 20,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/zarya.png",
  abilities: [
    {
      id: "ZaryaEnergy",
      name: "Energy",
      descriptionShort: "Damage absorbed by Zarya's Shields increase her damage.",
      descriptionLong: "Each time Zarya's Personal Barrier or Shield Ally absorbs 9 (+4% / level) damage, her Energy is increased by 1. Each point of Energy increases Zarya's damage by 2%. After 0.5 seconds, Energy decays by 3 per second.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_energy.png",
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
      id: "ZaryaParticleGrenade",
      name: "Particle Grenade",
      descriptionShort: "Deals damage to enemies in a small area",
      descriptionLong: "Launch a particle grenade that deals 75 (+4% / level) damage to enemies within the area. Deals 50% damage to Structures. Stores up to 4 charges.",
      cooldown: 8,
      charges: {
        chargesMax: 4,
        chargesInitial: 4,
        chargeCost: 1,
        recastCooldown: 0.75
      },
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_particlegrenade.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 43.75
      }
    },
    {
      id: "ZaryaPersonalBarrier",
      name: "Personal Barrier",
      descriptionShort: "Gain a Shield that absorbs damage",
      descriptionLong: "Gain a Shield that absorbs 560 (+4% / level) damage for 3 seconds.",
      cooldown: 10,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_personalbarrier.png",
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
      id: "ZaryaShieldAlly",
      name: "Shield Ally",
      descriptionShort: "Grant an ally a Shield that absorbs damage",
      descriptionLong: "Grants an allied Hero a Shield that absorbs 420 (+4% / level) damage for 3 seconds.",
      cooldown: 12,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_shieldally.png",
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
      id: "ZaryaGravitonSurge",
      name: "Graviton Surge",
      descriptionShort: "Launch a gravity bomb that draws in enemies",
      descriptionLong: "Launch a gravity bomb that detonates after 1 second and draws enemy Heroes toward the center for 2.5 seconds.",
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_gravitonsurge.png",
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
      id: "ZaryaExpulsionZone",
      name: "Expulsion Zone",
      descriptionShort: "Launch a bomb that continually pushes enemies",
      descriptionLong: "Launch a gravity bomb that deals 124 (+4% / level) damage and creates an expulsion zone for 3.5 seconds. Enemies who enter the affected area are knocked back and have their Movement Speed reduced by 50% for 1 second.",
      cooldown: 45,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_expulsionzone.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 33.06666666666666
      }
    }
  ],
  talents: [
    [
      {
        id: "ZaryaParticleGrenadeDemolitionsExpertQuest",
        name: "Demolitions Expert",
        descriptionShort: "Quest: Increases Particle Grenade radius and reduces cooldown",
        descriptionLong: "Quest: For every 5 enemy Heroes hit by Particle Grenade, its recharge rate lowers by 0.4375 seconds, up to 3.5 seconds. Reward: Once Particle Grenade has hit 40 enemy Heroes, its radius is increased by 15%.",
        cooldown: null,
        charges: {
          chargesMax: 4,
          chargesInitial: 4,
          chargeCost: 1,
          recastCooldown: 0.75
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_particlegrenade.png",
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
          "ZaryaParticleGrenade"
        ],
        isQuest: true
      },
      {
        id: "ZaryaShieldAllyTogetherWeAreStrong",
        name: "Together We Are Strong",
        descriptionShort: "Allied damage dealt with Shield Ally contributes to Energy",
        descriptionLong: "Every 5.35 (+4% / level) damage done by allies while under Shield Ally contributes 1 Energy, up to 40 Energy per Shield.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_shieldally.png",
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
          "ZaryaShieldAlly"
        ]
      },
      {
        id: "ZaryaWeaponFeelTheHeat",
        name: "Feel the Heat",
        descriptionShort: "Basic Attack deals more damage to close enemies",
        descriptionLong: "Zarya's Basic Attack deals 50% additional damage to enemies in melee range.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_base.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 3.3333333333333335
        },
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "ZaryaEnergy"
        ]
      },
      {
        id: "ZaryaEnergyMaximumChargeQuest",
        name: "Maximum Charge",
        descriptionShort: "Regen Globes grant EnergyQuest: Increases maximum Energy",
        descriptionLong: "Regen Globes now instantly grant 20 Energy. Quest: Spend 150 seconds at or above 50 Energy. Reward: Gain an additional 20 maximum Energy.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_energy.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 4,
        tier: "level1",
        linkedAbilityIds: [
          "ZaryaEnergy"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "ZaryaPersonalBarrierIAmTheStrongest",
        name: "I Am the Strongest",
        descriptionShort: "Increases Personal Barrier Shield amount",
        descriptionLong: "Personal Barrier absorbs an additional 140 (+4% / level) damage.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_personalbarrier.png",
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
          "ZaryaPersonalBarrier"
        ]
      },
      {
        id: "ZaryaShieldAllyGiveMeTwentyQuest",
        name: "Give Me Twenty",
        descriptionShort: "Quest: Increases Shield Ally absorb amount and reduces cooldown",
        descriptionLong: "Quest: Regeneration Globes increase Shield Ally absorb amount by 15, up to 300 permanently. Reward: After collecting 20 Regen Globes, permanently reduce the cooldown of Shield Ally by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_shieldally.png",
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
          "ZaryaShieldAlly"
        ],
        isQuest: true
      },
      {
        id: "ZaryaShieldAllySpeedBarrier",
        name: "Speed Barrier",
        descriptionShort: "Shield Ally increases allied Hero Movement Speed",
        descriptionLong: "Shield Ally increases the allied Hero's Movement Speed by 50% for the duration.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_shieldally_a.png",
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
          "ZaryaShieldAlly"
        ]
      },
      {
        id: "ZaryaDefensiveShielding",
        name: "Defensive Shielding",
        descriptionShort: "Personal Barrier, Shield Ally grant Physical Armor",
        descriptionLong: "Upon expiration or breaking, Personal Barrier and Shield Ally grant 75 Physical Armor against the next 2 Hero Basic Attacks for 6 seconds, reducing the damage taken by 75%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_pumped.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 4,
        tier: "level4",
        linkedAbilityIds: [
          "ZaryaPersonalBarrier",
          "ZaryaShieldAlly"
        ]
      }
    ],
    [
      {
        id: "ZaryaParticleGrenadePinpointAccuracy",
        name: "Pinpoint Accuracy",
        descriptionShort: "Particle Grenade center deals more damage, Slows",
        descriptionLong: "Particle Grenade deals 30 (+4% / level) more damage and Slows Movement Speed by 25% for 2 seconds to enemies hit by the center of the blast.",
        cooldown: null,
        charges: {
          chargesMax: 4,
          chargesInitial: 4,
          chargeCost: 1,
          recastCooldown: 0.75
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_particlegrenade.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 8
        },
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "ZaryaParticleGrenade"
        ]
      },
      {
        id: "ZaryaPersonalBarrierExplosiveBarrier",
        name: "Explosive Barrier",
        descriptionShort: "Personal Barrier deals area damage",
        descriptionLong: "Upon expiration or breaking, Personal Barrier explodes, dealing 110 (+4% / level) damage to nearby enemies.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_personalbarrier.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 29.333333333333332
        },
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "ZaryaPersonalBarrier"
        ]
      },
      {
        id: "ZaryaWeaponToTheLimit",
        name: "To the Limit",
        descriptionShort: "Increases Basic Attack size at high Energy",
        descriptionLong: "While above 40 Energy, Zarya's Basic Attack size is increased by 35%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_base.png",
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
          "ZaryaEnergy"
        ]
      },
      {
        id: "ZaryaEnergyHitMe",
        name: "Hit Me",
        descriptionShort: "Shield damage absorbed contributes more Energy",
        descriptionLong: "Damage absorbed by Zarya's Shields contributes 20% more Energy.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_energy.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 4,
        tier: "level7",
        linkedAbilityIds: [
          "ZaryaEnergy"
        ]
      }
    ],
    [
      {
        id: "ZaryaHeroicAbilityGravitonSurge",
        name: "Graviton Surge",
        descriptionShort: "Launch a gravity bomb that draws in enemies",
        descriptionLong: "Launch a gravity bomb that detonates after 1 second and draws enemy Heroes toward the center for 2.5 seconds.",
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_gravitonsurge.png",
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
          "ZaryaGravitonSurge"
        ]
      },
      {
        id: "ZaryaHeroicAbilityExpulsionZone",
        name: "Expulsion Zone",
        descriptionShort: "Launch a bomb that continually pushes enemies",
        descriptionLong: "Launch a gravity bomb that deals 124 (+4% / level) damage and creates an expulsion zone for 3.5 seconds. Enemies who enter the affected area are knocked back and have their Movement Speed reduced by 50% for 1 second.",
        cooldown: 45,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_expulsionzone.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 33.06666666666666
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "ZaryaExpulsionZone"
        ]
      }
    ],
    [
      {
        id: "ZaryaPersonalBarrierUnstoppableCompetitor",
        name: "Unstoppable Competitor",
        descriptionShort: "Personal Barrier grants Unstoppable",
        descriptionLong: "Personal Barrier makes Zarya Unstoppable for up to 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_personalbarrier.png",
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
          "ZaryaPersonalBarrier"
        ]
      },
      {
        id: "ZaryaPersonalBarrierSpellBarrier",
        name: "Spell Barrier",
        descriptionShort: "Personal Barrier grants Spell Armor",
        descriptionLong: "Upon expiration or breaking, Personal Barrier grants Zarya 75 Spell Armor for 3 Seconds, reducing the damage taken from Abilities by 75%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_personalbarrier_a.png",
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
          "ZaryaPersonalBarrier"
        ]
      },
      {
        id: "ZaryaEnergyEnduranceTraining",
        name: "Endurance Training",
        descriptionShort: "Gain Armor at high Energy",
        descriptionLong: "While at or above 75 Energy, Zarya gains 20 Armor, reducing all damage taken by 20%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_energy.png",
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
          "ZaryaEnergy"
        ]
      },
      {
        id: "ZaryaPainIsTemporary",
        name: "Pain is Temporary",
        descriptionShort: "Consume Energy to gain a Shield",
        descriptionLong: "Activate to consume all Energy and gain a Shield that absorbs 0.5% of Zarya's maximum Health per Energy consumed and lasts for 3 seconds. Zarya may only have one personal Shield active on herself at a time.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_painistemporary.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 4,
        tier: "level13"
      }
    ],
    [
      {
        id: "ZaryaShieldAllyCleansingShield",
        name: "Cleansing Shield",
        descriptionShort: "Shield Ally removes all disabling effects",
        descriptionLong: "Causes Shield Ally to remove all disabling effects and reduces its cooldown by 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_shieldally.png",
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
          "ZaryaShieldAlly"
        ]
      },
      {
        id: "ZaryaShieldAllyGainTrain",
        name: "Gain Train",
        descriptionShort: "Shield Ally now affects a second ally",
        descriptionLong: "Shield Ally now grants an untalented Shield to a nearby ally upon impact.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_shieldally_a.png",
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
          "ZaryaShieldAlly"
        ]
      },
      {
        id: "ZaryaEnergyBornInBattle",
        name: "Born in Battle",
        descriptionShort: "Reduces cooldowns at high Energy",
        descriptionLong: "While at or above 75 Energy, Zarya's cooldowns regenerate 25% faster.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_energy.png",
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
          "ZaryaEnergy"
        ]
      }
    ],
    [
      {
        id: "ZaryaGravitonSurgeGravityKills",
        name: "Gravity Kills",
        descriptionShort: "Graviton Surge has increased duration and Silences",
        descriptionLong: "Increases Graviton Surge's duration by 1 second and it Silences Heroes caught in its area.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_gravitonsurge.png",
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
          "ZaryaGravitonSurge"
        ],
        prerequisiteTalentIds: [
          "ZaryaHeroicAbilityGravitonSurge"
        ]
      },
      {
        id: "ZaryaExpulsionZoneClearOut",
        name: "Clear Out",
        descriptionShort: "Reduce Expulsion Zone cooldown, increase duration",
        descriptionLong: "Reduce Expulsion Zone's cooldown by 25 seconds and increase its duration by 1.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_expulsionzone.png",
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
          "ZaryaExpulsionZone"
        ],
        prerequisiteTalentIds: [
          "ZaryaHeroicAbilityExpulsionZone"
        ]
      },
      {
        id: "ZaryaParticleGrenadeGrenadier",
        name: "Grenadier",
        descriptionShort: "Particle Grenade charges are returned at once",
        descriptionLong: "All Particle Grenade charges are returned at once.",
        cooldown: null,
        charges: {
          chargesMax: 4,
          chargesInitial: 4,
          chargeCost: 1,
          recastCooldown: 0.75
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_particlegrenade.png",
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
          "ZaryaParticleGrenade"
        ]
      },
      {
        id: "ZaryaUnyieldingDefender",
        name: "Unyielding Defender",
        descriptionShort: "Activate to reset Shield cooldowns",
        descriptionLong: "Activate to reset the cooldown of Personal Barrier and Shield Ally.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zarya_unyieldingdefender.png",
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
    tankiness: 69.06214689265536,
    physicalDamage: 40,
    mobility: 17.38446396885035,
    healing: 0,
    magicalDamage: 8.500890992463452
  }
};
      
export default zarya;