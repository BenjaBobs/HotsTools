import { Hero } from '../heroes';
      
const ragnaros: Hero = {
  name: "Ragnaros",
  nameNormalized: "ragnaros",
  franchise: "Warcraft",
  gender: "Male",
  size: 1,
  movementSpeed: 4.8398,
  health: {
    amount: 2075,
    scale: 0.04,
    regenRate: 4.3242,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "RagnarosAttackWeapon",
      range: 2,
      period: 1.2,
      damage: 180,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/ragnaros.png",
  abilities: [
    {
      id: "RagnarosMoltenCore",
      name: "Molten Core",
      descriptionShort: "Take over a destroyed or Allied fort to unleash Ragnaros's full power",
      descriptionLong: "Channel on an allied or destroyed Fort or Keep to replace it with Ragnaros's ultimate form, temporarily gaining new Abilities, having 3996 (+4% / level) Health that burns away over 18 seconds. Ragnaros returns to his normal form upon losing all Health in Molten Core.",
      cooldown: 120,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_moltencore.png",
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
      id: "RagnarosEmpowerSulfuras",
      name: "Empower Sulfuras",
      descriptionShort: "Deal damage in an area and heal Ragnaros",
      descriptionLong: "Ragnaros's next Basic Attack is instant, dealing 191 (+4% / level) Ability damage in an area, and heals for 20% of the damage dealt. Healing doubled versus Heroes. Molten Core: Molten SwingStun and damage nearby enemies.",
      cost: {
        type: "Mana",
        amount: 25
      },
      cooldown: 4,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_empowersulfuras.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 5,
        magicalDamage: 191
      }
    },
    {
      id: "RagnarosLivingMeteor",
      name: "Living Meteor",
      descriptionShort: "Summon a meteor to damage enemies in a line",
      descriptionLong: "Vector TargetingSummon a meteor at the target point that deals 68 (+4% / level) damage, then rolls in the target direction dealing 272 (+4% / level) damage per second for 1.75 seconds. Molten Core: Meteor ShowerDrop a line of meteor impacts.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 12,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_livingmeteor.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 113.33333333333331
      }
    },
    {
      id: "RagnarosBlastWave",
      name: "Blast Wave",
      descriptionShort: "Cause a delayed explosion around an ally",
      descriptionLong: "Ignite Ragnaros or an ally, granting 25% Movement Speed for 1.5 seconds before exploding dealing 104 (+4% / level) damage to nearby enemies. Molten Core: Explosive RuneCause a delayed explosion in a large area.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 9,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_blastwave.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 46.22222222222222
      }
    },
    {
      id: "RagnarosSulfurasSmash",
      name: "Sulfuras Smash",
      descriptionShort: "Damage and Stun enemies in an area",
      descriptionLong: "Hurl Sulfuras at the target area, landing after 0.75 seconds, dealing 250 (+4% / level) damage. Enemies in the center take 594 (+4% / level) damage instead and are Stunned for 0.5 seconds.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_sulfurassmash.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 66.66666666666667
      }
    },
    {
      id: "RagnarosLavaWaveTargetPoint",
      name: "Lava Wave",
      descriptionShort: "Send a wave of lava down a lane",
      descriptionLong: "Release a wave of lava from Ragnaros's Core that travels down the targeted lane, dealing 240 (+4% / level) damage per second to non-Structure enemies in its path and instantly killing enemy Minions. Damage increased by 100% versus Heroes.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 120,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 5
      },
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_lavawave.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 64
      }
    }
  ],
  talents: [
    [
      {
        id: "RagnarosEmpowerSulfurasSulfurasHungers",
        name: "Sulfuras Hungers",
        descriptionShort: "Quest: Kill Minions with Empower Sulfuras to increase its damage",
        descriptionLong: "Quest: Every time Empower Sulfuras kills a Minion, its damage is increased by 1, up to 25. Reward: After killing 25 Minions, increase its damage by an additional 100.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_empowersulfuras.png",
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
          "RagnarosEmpowerSulfurasActive",
          "RagnarosEmpowerSulfuras"
        ],
        isQuest: true
      },
      {
        id: "RagnarosLivingMeteorShiftingMeteor",
        name: "Shifting Meteor",
        descriptionShort: "Quest: Hit Heroes to empower Living Meteor",
        descriptionLong: "Each time an enemy is hit by the same Living Meteor, they take 6% increased damage from it. Quest: Hit 75 Heroes with Living Meteor. Reward: After hitting 75 Heroes with Living Meteor, its duration is increased to 2.25 seconds, and it can be reactivated to change its direction once per use.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_livingmeteor.png",
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
          "RagnarosLivingMeteor"
        ],
        isQuest: true
      },
      {
        id: "RagnarosBlastWaveEngulfingFlame",
        name: "Engulfing Flame",
        descriptionShort: "Increase Blast Wave damage, radius",
        descriptionLong: "Increase Blast Wave's damage by 75% and its radius by 15%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_blastwave.png",
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
          "RagnarosBlastWave"
        ]
      }
    ],
    [
      {
        id: "RagnarosLivingMeteorFireWard",
        name: "Fire Ward",
        descriptionShort: "Living Meteor grants Spell Armor",
        descriptionLong: "When Living Meteor hits an enemy Hero, gain a charge of Spell Armor, reducing damage from the next enemy ability by 50%. Stores up to 2 charges.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_livingmeteor.png",
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
          "RagnarosLivingMeteor"
        ]
      },
      {
        id: "RagnarosBlastWaveSlowBurn",
        name: "Slow Burn",
        descriptionShort: "Blast Wave slows enemies",
        descriptionLong: "Blast Wave slows enemies hit by 40% for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_blastwave.png",
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
          "RagnarosBlastWave"
        ]
      },
      {
        id: "RagnarosCatchingFire",
        name: "Catching Fire",
        descriptionShort: "Quest: Regen Globes increase Health Regen",
        descriptionLong: "Quest: Gathering a Regeneration Globe increases Ragnaros' Health Regeneration by 1.25 per second, up to 18.75. Reward: After gathering 15 Regeneration Globes, activate Catching Fire to gain 25 Armor for 3 seconds, reducing damage taken by 25%.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_catchingfire.png",
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
        isQuest: true
      }
    ],
    [
      {
        id: "RagnarosEmpowerSulfurasHandOfRagnaros",
        name: "Hand of Ragnaros",
        descriptionShort: "Reduce Empower Sulfuras cooldown",
        descriptionLong: "If Empower Sulfuras hits at least 2 enemy Heroes, refund 10 Mana and its cooldown recharges 100% faster for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_empowersulfuras.png",
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
          "RagnarosEmpowerSulfurasActive",
          "RagnarosEmpowerSulfuras"
        ]
      },
      {
        id: "RagnarosLivingMeteorMoltenPower",
        name: "Molten Power",
        descriptionShort: "Reduced Living Meteor cooldown",
        descriptionLong: "If Living Meteor hits enemy Heroes at least 5 times, reduce its cooldown by 7 seconds, and refund 30 Mana.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_livingmeteor.png",
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
          "RagnarosLivingMeteor"
        ]
      },
      {
        id: "RagnarosBlisteringAttacks",
        name: "Blistering Attacks",
        descriptionShort: "Periodically empower Basic Attacks against Heroes",
        descriptionLong: "Every 10 seconds, Ragnaros's next Basic Attack against a Hero deals 60% bonus damage. Hitting enemies with Basic Abilities reduces this cooldown by 1 second.",
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
          magicalDamage: 4
        },
        order: 3,
        tier: "level7"
      }
    ],
    [
      {
        id: "RagnarosSulfurasSmash",
        name: "Sulfuras Smash",
        descriptionShort: "Damage and Stun enemies in an area",
        descriptionLong: "Hurl Sulfuras at the target area, landing after 0.75 seconds, dealing 250 (+4% / level) damage. Enemies in the center take 594 (+4% / level) damage instead and are Stunned for 0.5 seconds.",
        cost: {
          type: "Mana",
          amount: 70
        },
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_sulfurassmash.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 66.66666666666667
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "RagnarosSulfurasSmash"
        ]
      },
      {
        id: "RagnarosLavaWave",
        name: "Lava Wave",
        descriptionShort: "Send a wave of lava down a lane",
        descriptionLong: "Release a wave of lava from Ragnaros's Core that travels down the targeted lane, dealing 240 (+4% / level) damage per second to non-Structure enemies in its path and instantly killing enemy Minions. Damage increased by 100% versus Heroes.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 120,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 5
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_lavawave.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 64
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "RagnarosLavaWaveTargetPoint"
        ]
      }
    ],
    [
      {
        id: "RagnarosEmpowerSulfurasCauterizeWounds",
        name: "Cauterize Wounds",
        descriptionShort: "Empower Sulfuras healing increased",
        descriptionLong: "Empower Sulfuras heals for an additional 45% of damage dealt to Heroes over 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_empowersulfuras.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 3,
          magicalDamage: 0
        },
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "RagnarosEmpowerSulfurasActive",
          "RagnarosEmpowerSulfuras"
        ]
      },
      {
        id: "RagnarosBlastWaveTemperedFlame",
        name: "Tempered Flame",
        descriptionShort: "Blast Wave damage gives Shields",
        descriptionLong: "When Blast Wave damages an enemy Hero, gain a Shield equal to 100% of the damage dealt for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_blastwave.png",
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
          "RagnarosBlastWave"
        ]
      },
      {
        id: "RagnarosResilientFlame",
        name: "Resilient Flame",
        descriptionShort: "Gain Armor when Stunned",
        descriptionLong: "When Ragnaros is Stunned, he gains 40 Armor for 3 seconds, reducing damage taken by 40%. This effect has a 15 second cooldown.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_resistance.png",
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
        id: "RagnarosEmpowerSulfurasGiantScorcher",
        name: "Giant Scorcher",
        descriptionShort: "Empower Sulfuras deals extra damage to Heroes",
        descriptionLong: "Empower Sulfuras burns enemy Heroes for 9% of their maximum Health over 3 seconds. This additional damage does not heal Ragnaros.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_empowersulfuras.png",
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
          "RagnarosEmpowerSulfurasActive",
          "RagnarosEmpowerSulfuras"
        ]
      },
      {
        id: "RagnarosLivingMeteorMeteorBomb",
        name: "Meteor Bomb",
        descriptionShort: "Living Meteor explodes at the end of its path",
        descriptionLong: "Living Meteor explodes at the end of its path, dealing 220 (+4% / level) damage. Enemies at its center take 30% increased damage.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_livingmeteor.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 58.666666666666664
        },
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "RagnarosLivingMeteor"
        ]
      },
      {
        id: "RagnarosBlastWaveBlastEcho",
        name: "Blast Echo",
        descriptionShort: "A second Blast Wave is created after the first",
        descriptionLong: "After Blast Wave explodes, another Blast Wave is created on Ragnaros.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_blastwave.png",
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
          "RagnarosBlastWave"
        ]
      }
    ],
    [
      {
        id: "RagnarosSulfurasSmashFlamesOfSulfuron",
        name: "Flames of Sulfuron",
        descriptionShort: "Sulfuras Smash Slows enemies, Stuns longer",
        descriptionLong: "Sulfuras Smash Slows enemies by 50% for 2.5 seconds, and the Stun duration of enemies hit in the center is increased by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_sulfurassmash.png",
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
          "RagnarosSulfurasSmash",
          "RagnarosBigRagSulfurasSmash"
        ],
        prerequisiteTalentIds: [
          "RagnarosSulfurasSmash"
        ]
      },
      {
        id: "RagnarosLavaWaveLavaSurge",
        name: "Lava Surge",
        descriptionShort: "Lava Wave has two charges",
        descriptionLong: "Lava Wave gains an additional charge and its cooldown is reduced by 30 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 5
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_lavawave.png",
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
          "RagnarosLavaWaveTargetPoint"
        ],
        prerequisiteTalentIds: [
          "RagnarosLavaWave"
        ]
      },
      {
        id: "RagnarosMoltenCoreHeroicDifficulty",
        name: "Heroic Difficulty",
        descriptionShort: "Enhances Molten Core Health, cooldown, damage",
        descriptionLong: "Molten Core has 25% increased Health and Damage, and its cooldown is reduced by 50 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_moltencore.png",
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
          "RagnarosMoltenCore"
        ]
      },
      {
        id: "RagnarosSubmerge",
        name: "Submerge",
        descriptionShort: "Activate to heal and enter Stasis",
        descriptionLong: "Ragnaros submerges below, entering Stasis and healing for 600 (+4% / level) Health over 3 seconds.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_submerge.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 160,
          magicalDamage: 0
        },
        order: 4,
        tier: "level20"
      }
    ]
  ],
  heroUnits: [
    {
      name: "Ragnaros",
      nameNormalized: "ragnarosbigrag",
      size: 3,
      movementSpeed: 4.8398,
      health: {
        amount: 3996,
        scale: 0.04,
        regenRate: -222,
        regenScale: 0.04
      },
      autoAttacks: [],
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/ragnarosbigrag.png",
      abilities: [
        {
          id: "RagnarosBigRagReturnMoltenCore",
          name: "Return",
          descriptionShort: "Return to original form",
          descriptionLong: "Return to original form.",
          cooldown: null,
          category: "trait",
          type: "Trait",
          icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_return.png",
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
          id: "RagnarosBigRagMoltenSwing",
          name: "Molten Swing",
          descriptionShort: "Stun and damage nearby enemies",
          descriptionLong: "Swing Sulfuras in a wide arc, dealing 161 (+4% / level) damage and Stunning enemies for 1 second. Damage increased by 25% versus Minions, Mercenaries, and Monsters.",
          cooldown: 6,
          category: "basic",
          type: "Q",
          icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_moltenswing.png",
          isPassive: false,
          analysis: {
            mobility: 0,
            physicalDamage: 0,
            tankiness: 0,
            healing: 0,
            magicalDamage: 107.33333333333333
          }
        },
        {
          id: "RagnarosBigRagMeteorShower",
          name: "Meteor Shower",
          descriptionShort: "Summon a line of meteors",
          descriptionLong: "Vector TargetingSummon 3 meteors at the target point that fall in the target direction. Each meteor deals 151 (+4% / level) damage and slows enemies by 25% for 2 seconds. Damage increased by 25% versus Minions, Mercenaries, and Monsters.",
          cooldown: 2.5,
          category: "basic",
          type: "W",
          icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_meteorshower.png",
          isPassive: false,
          analysis: {
            mobility: 0,
            physicalDamage: 0,
            tankiness: 0,
            healing: 0,
            magicalDamage: 241.60000000000002
          }
        },
        {
          id: "RagnarosBigRagExplosiveRune",
          name: "Explosive Rune",
          descriptionShort: "Cause a delayed explosion in a large area",
          descriptionLong: "Create a rune that deals 285 (+4% / level) damage to non-Structure enemies after 1.5 seconds. Damage increased by 25% versus Minions, Mercenaries, and Monsters.",
          cooldown: 4,
          category: "basic",
          type: "E",
          icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_explosiverune.png",
          isPassive: false,
          analysis: {
            mobility: 0,
            physicalDamage: 0,
            tankiness: 0,
            healing: 0,
            magicalDamage: 285
          }
        },
        {
          id: "RagnarosBigRagSulfurasSmash",
          name: "Sulfuras Smash",
          descriptionShort: "Damage and Stun enemies in an area",
          descriptionLong: "Hurl Sulfuras at the target area, landing after 0.75 seconds, dealing 250 (+4% / level) damage. Enemies in the center take 594 (+4% / level) damage instead and are Stunned for 0.5 seconds.",
          cooldown: 60,
          category: "heroic",
          type: "Heroic",
          icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_sulfurassmash.png",
          isPassive: false,
          analysis: {
            mobility: 0,
            physicalDamage: 0,
            tankiness: 0,
            healing: 0,
            magicalDamage: 66.66666666666667
          }
        },
        {
          id: "RagnarosLavaWaveTargetPoint",
          name: "Lava Wave",
          descriptionShort: "Send a wave of lava down a lane",
          descriptionLong: "Release a wave of lava from Ragnaros's Core that travels down the targeted lane, dealing 240 (+4% / level) damage per second to non-Structure enemies in its path and instantly killing enemy Minions. Damage increased by 100% versus Heroes.",
          cost: {
            type: "Mana",
            amount: 80
          },
          cooldown: 120,
          charges: {
            chargesMax: 1,
            chargesInitial: 1,
            chargeCost: 1,
            recastCooldown: 5
          },
          category: "heroic",
          type: "Heroic",
          icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ragnaros_lavawave.png",
          isPassive: false,
          analysis: {
            mobility: 0,
            physicalDamage: 0,
            tankiness: 0,
            healing: 0,
            magicalDamage: 64
          }
        }
      ],
      talents: [],
      analysis: {
        tankiness: 15.984000000000002,
        physicalDamage: 0,
        mobility: 24.199,
        healing: 0,
        magicalDamage: 764.6
      }
    }
  ],
  analysis: {
    tankiness: 62.523540489642194,
    physicalDamage: 75,
    mobility: 17.38446396885035,
    healing: 0.9890544639324806,
    magicalDamage: 53.254297950906505
  }
};
      
export default ragnaros;