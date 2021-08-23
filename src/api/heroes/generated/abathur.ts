import { Hero } from '../heroes';
      
const abathur: Hero = {
  name: "Abathur",
  nameNormalized: "abathur",
  franchise: "Starcraft",
  gender: "Neutral",
  size: 0.75,
  movementSpeed: 4.8398,
  health: {
    amount: 685,
    scale: 0.04,
    regenRate: 1.4257,
    regenScale: 0.04
  },
  autoAttacks: [
    {
      nameId: "HeroAbathur",
      range: 1,
      period: 0.7,
      damage: 26,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/abathur.png",
  abilities: [
    {
      id: "AbathurSpawnLocusts",
      name: "Locust Strain",
      descriptionShort: "Spawn locusts that attack down the nearest lane",
      descriptionLong: "Spawns a Locust to attack down the nearest lane every 15 seconds. Locusts last for 16 seconds, have 350 (+4% / level) health and deal 46 (+4% / level) damage with each Basic Attack, dealing 25% bonus damage to enemy Structures.",
      cooldown: 15,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_spawnlocust.png",
      isPassive: true,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 13.933333333333332
      }
    },
    {
      id: "AbathurDeepTunnel",
      name: "Deep Tunnel",
      descriptionShort: "Tunnel to a location.",
      descriptionLong: "Quickly tunnel to a visible location",
      cooldown: 30,
      category: "mount",
      type: "Z",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_mount.png",
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
      id: "AbathurSymbiote",
      name: "Symbiote",
      descriptionShort: "Assist an ally and gain new abilities",
      descriptionLong: "Spawn and attach a Symbiote to a target ally or Structure. While active, Abathur controls the Symbiote, gaining access to new Abilities. The Symbiote is able to gain XP from nearby enemy deaths.",
      cooldown: 4,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_symbiote.png",
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
      id: "AbathurToxicNest",
      name: "Toxic Nest",
      descriptionShort: "Spawn a mine",
      descriptionLong: "Spawn a mine that becomes active after a short time. Deals 153 (+4% / level) damage and reveals the enemy for 4 seconds. Lasts 90 seconds. Stores up to 3 charges.",
      cooldown: 10,
      charges: {
        chargesMax: 3,
        chargesInitial: 3,
        chargeCost: 1,
        recastCooldown: 0.0625
      },
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_toxicnest.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 61.2
      }
    },
    {
      id: "AbathurEvolveMonstrosity",
      name: "Evolve Monstrosity",
      descriptionShort: "Minion or Locust becomes a powerful Monstrosity",
      descriptionLong: "Turn an allied Minion or Locust into a Monstrosity. When enemy Minions near the Monstrosity die, it gains 2% Health and 2% Basic Attack damage, stacking up to 40 times.  The Monstrosity can be healed by Carapace and has the ability to Burrow to a visible location every 80 seconds. Using Symbiote on the Monstrosity allows Abathur to control it, in addition to Symbiote's normal benefits.  This Ability can be reactivated to automatically cast Symbiote on his Monstrosity.",
      cooldown: 90,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_evolvemonstrosity.png",
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
      id: "AbathurUltimateEvolution",
      name: "Ultimate Evolution",
      descriptionShort: "Clone target allied Hero and control it",
      descriptionLong: "Clone target allied Hero and control it for 20 seconds. Abathur has perfected the clone, granting it 20% Spell Power, 20% bonus Attack Damage, and 10% bonus Movement Speed. Cannot use their Heroic Ability.",
      cooldown: 70,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_ultimateevolution.png",
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
        id: "AbathurMasteryPressurizedGlands",
        name: "Pressurized Glands",
        descriptionShort: "Increases Spike Burst range and decreases cooldown",
        descriptionLong: "Increases the range of Symbiote's Spike Burst by 25% and decreases the cooldown by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_spikeburst.png",
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
          "AbathurSymbiote",
          "AbathurSymbioteSpikeBurst"
        ]
      },
      {
        id: "AbathurMasteryEnvenomedNestsToxicNest",
        name: "Envenomed Nest",
        descriptionShort: "Toxic Nests deal more damage, reduce Armor",
        descriptionLong: "Toxic Nests deal 75% more damage over 3 seconds and reduce the Armor of enemy Heroes hit by 10 for 4 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 3,
          chargesInitial: 3,
          chargeCost: 1,
          recastCooldown: 0.0625
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_toxicnest.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 5
        },
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "AbathurToxicNest"
        ]
      },
      {
        id: "AbathurReinforcedCarapace",
        name: "Reinforced Carapace",
        descriptionShort: "Increase Carapace Shield",
        descriptionLong: "Increase the Shield amount of Carapace by 40%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_carapace.png",
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
          "AbathurSymbioteCarapace"
        ]
      },
      {
        id: "AbathurCombatStyleSurvivalInstincts",
        name: "Survival Instincts",
        descriptionShort: "Increases Locust Health and damage",
        descriptionLong: "Increases Locust's Health by 100% and damage by 60%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_spawnlocust.png",
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
          "AbathurSpawnLocusts"
        ]
      }
    ],
    [
      {
        id: "AbathurSymbioteAdrenalOverload",
        name: "Adrenal Overload",
        descriptionShort: "Symbiote host gains Attack Speed",
        descriptionLong: "Heroic Symbiote hosts gain 25% increased Attack Speed.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_symbiote.png",
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
          "AbathurSymbiote"
        ]
      },
      {
        id: "AbathurMasteryNeedlespine",
        name: "Needlespine",
        descriptionShort: "Increases Stab damage and range",
        descriptionLong: "Increases the damage and range of Symbiote's Stab by 20%.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_stab.png",
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
          "AbathurSymbiote",
          "AbathurSymbioteStab"
        ]
      },
      {
        id: "AbathurMasteryProlificDispersal",
        name: "Prolific Dispersal",
        descriptionShort: "Increases Toxic Nest charges, duration",
        descriptionLong: "Increase the duration of Toxic Nests by 45 seconds, reduce its cooldown by 2 seconds, and add 2 additional charges.",
        cooldown: null,
        charges: {
          chargesMax: 3,
          chargesInitial: 3,
          chargeCost: 1,
          recastCooldown: 0.0625
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_toxicnest.png",
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
          "AbathurToxicNest"
        ]
      }
    ],
    [
      {
        id: "AbathurMasteryVileNestsToxicNest",
        name: "Vile Nest",
        descriptionShort: "Toxic Nests slow Move Speed",
        descriptionLong: "Toxic Nests Slow enemy Movement Speed by 40% for 2.5 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 3,
          chargesInitial: 3,
          chargeCost: 1,
          recastCooldown: 0.0625
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_toxicnest.png",
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
          "AbathurToxicNest"
        ]
      },
      {
        id: "AbathurSymbioteCarapaceNetworkedCarapace",
        name: "Networked Carapace",
        descriptionShort: "Carapace Shields all nearby allies",
        descriptionLong: "Using Symbiote's Carapace also applies an untalented Carapace Shield to all nearby allied Heroes, Minions, and Mercenaries.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_carapace.png",
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
          "AbathurSymbiote",
          "AbathurSymbioteCarapace"
        ]
      },
      {
        id: "GenericTalentCalldownMULE",
        name: "Calldown: MULE",
        descriptionShort: "Activate to heal Structures",
        descriptionLong: "Activate to calldown a Mule that repairs Structures, one at a time, near target point for 40 seconds, healing for 90 Health every 1 second.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_mule.png",
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
        id: "AbathurHeroicAbilityUltimateEvolution",
        name: "Ultimate Evolution",
        descriptionShort: "Clone target allied Hero and control it",
        descriptionLong: "Clone target allied Hero and control it for 20 seconds. Abathur has perfected the clone, granting it 20% Spell Power, 20% bonus Attack Damage, and 10% bonus Movement Speed. Cannot use their Heroic Ability.",
        cooldown: 70,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_ultimateevolution.png",
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
          "AbathurUltimateEvolution"
        ]
      },
      {
        id: "AbathurHeroicAbilityEvolveMonstrosity",
        name: "Evolve Monstrosity",
        descriptionShort: "Minion or Locust becomes a powerful Monstrosity",
        descriptionLong: "Turn an allied Minion or Locust into a Monstrosity. When enemy Minions near the Monstrosity die, it gains 2% Health and 2% Basic Attack damage, stacking up to 40 times.  The Monstrosity can be healed by Carapace and has the ability to Burrow to a visible location every 80 seconds. Using Symbiote on the Monstrosity allows Abathur to control it, in addition to Symbiote's normal benefits.  This Ability can be reactivated to automatically cast Symbiote on his Monstrosity.",
        cooldown: 90,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_evolvemonstrosity.png",
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
          "AbathurEvolveMonstrosity"
        ]
      }
    ],
    [
      {
        id: "AbathurMasterySpatialEfficiency",
        name: "Spatial Efficiency",
        descriptionShort: "Stab gains an additional charge",
        descriptionLong: "Symbiote's Stab gains 1 additional charge and its cooldown is reduced by .5 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_stab.png",
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
          "AbathurSymbiote",
          "AbathurSymbioteStab"
        ]
      },
      {
        id: "AbathurSymbioteSpikeBurstSomaTransference",
        name: "Soma Transference",
        descriptionShort: "Spike Burst heals for each Hero hit",
        descriptionLong: "Symbiote's Spike Burst heals the host for 64 (+4% / level) Health per enemy Hero hit.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_spikeburst.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 17.066666666666666,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "AbathurSymbiote",
          "AbathurSymbioteSpikeBurst"
        ]
      },
      {
        id: "AbathurCombatStyleBombardStrain",
        name: "Bombard Strain",
        descriptionShort: "Locusts gain a ranged attack, increased duration",
        descriptionLong: "Locust's Basic Attacks become a long-range siege attack and their duration is increased by 75%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_spawnlocust_var1.png",
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
          "AbathurSpawnLocusts"
        ]
      }
    ],
    [
      {
        id: "AbathurMasteryEnvenomedSpikes",
        name: "Envenomed Spikes",
        descriptionShort: "Spike Burst Slows Move Speed",
        descriptionLong: "Abathur's Symbiote's Spike Burst also Slows enemy Movement Speed by 40% for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_spikeburst.png",
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
          "AbathurSymbiote",
          "AbathurSymbioteSpikeBurst"
        ]
      },
      {
        id: "AbathurMasteryAdrenalineBoost",
        name: "Adrenaline Boost",
        descriptionShort: "Carapace increases Move Speed",
        descriptionLong: "Symbiote's Carapace increases the Movement Speed of the target by 40% for 3.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_carapace.png",
        isPassive: false,
        analysis: {
          mobility: 40,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "AbathurSymbiote",
          "AbathurSymbioteCarapace"
        ]
      },
      {
        id: "AbathurVolatileMutation",
        name: "Volatile Mutation",
        descriptionShort: "Heroic summons radiate damage",
        descriptionLong: "Ultimate Evolution clones and Monstrosities deal 137 (+4% / level) damage to nearby enemies every 3 seconds and when they die. Enemy Heroes hit heal the clone or Monstrosity for 100% of the damage dealt.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_volatilemutation.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 6.666666666666667,
          magicalDamage: 36.53333333333333
        },
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "AbathurEvolveMonstrosity",
          "AbathurUltimateEvolution"
        ]
      },
      {
        id: "AbathurCombatStyleLocustBrood",
        name: "Locust Brood",
        descriptionShort: "Spawn a group of Locusts",
        descriptionLong: "Activate to spawn 3 Locusts at a nearby location.",
        cooldown: 45,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_spawnlocust.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 4,
        tier: "level16"
      }
    ],
    [
      {
        id: "AbathurUltimateEvolutionEvolutionaryLink",
        name: "Evolutionary Link",
        descriptionShort: "Ultimate Evolution target gets a Shield",
        descriptionLong: "Increase the duration of Ultimate Evolution by 50%.  As long as the Ultimate Evolution is alive, the original target of the clone gains a Shield equal to 35% of their maximum Health.  Refreshes every 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_ultimateevolution.png",
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
          "AbathurUltimateEvolution"
        ],
        prerequisiteTalentIds: [
          "AbathurHeroicAbilityUltimateEvolution"
        ]
      },
      {
        id: "AbathurMasteryEvolutionComplete",
        name: "Evolution Complete",
        descriptionShort: "Monstrosity gains Attack Damage",
        descriptionLong: "Increase Monstrosity's Basic Attack damage by 100%.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_evolvemonstrosity.png",
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
          "AbathurEvolveMonstrosity"
        ],
        prerequisiteTalentIds: [
          "AbathurHeroicAbilityEvolveMonstrosity"
        ]
      },
      {
        id: "AbathurSymbioteHivemind",
        name: "Hivemind",
        descriptionShort: "Symbiote two targets",
        descriptionLong: "Symbiote creates an additional Symbiote on a nearby allied Hero.  This Symbiote mimics the commands of the first, but does half damage and Shielding.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_symbiote.png",
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
          "AbathurSymbiote"
        ]
      },
      {
        id: "AbathurMasteryLocustMaster",
        name: "Locust Nest",
        descriptionShort: "Create Locust Nests",
        descriptionLong: "Activate to create a nest that periodically spawns Locusts. Only one Locust Nest can be active at a time.",
        cooldown: 45,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_locustnest.png",
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
  heroUnits: [
    {
      name: "Symbiote",
      nameNormalized: "abathursymbiote",
      size: 1.5,
      movementSpeed: 0.0117,
      health: {
        amount: 1,
        scale: 0,
        regenRate: 0,
        regenScale: 0
      },
      autoAttacks: [],
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/abathursymbiote.png",
      abilities: [
        {
          id: "AbathurMonstrosityDeepTunnel",
          name: "Deep Tunnel",
          descriptionShort: "Tunnel to a location.",
          descriptionLong: "Order your Evolved Monstrosity to quickly tunnel to a visible location",
          cooldown: 80,
          category: "mount",
          type: "Z",
          icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_mount.png",
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
          id: "AbathurSymbioteStab",
          name: "Stab",
          descriptionShort: "Shoots a spike that deals damage to the first enemy it contacts.",
          descriptionLong: "Shoots a spike towards target area that deals 119 (+4% / level) damage to the first enemy it contacts.",
          cooldown: 3,
          charges: {
            chargesMax: 2,
            chargesInitial: 2,
            chargeCost: 1,
            recastCooldown: 1
          },
          category: "basic",
          type: "Q",
          icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_stab.png",
          isPassive: false,
          analysis: {
            mobility: 0,
            physicalDamage: 0,
            tankiness: 0,
            healing: 0,
            magicalDamage: 158.66666666666666
          }
        },
        {
          id: "AbathurSymbioteSpikeBurst",
          name: "Spike Burst",
          descriptionShort: "Damage nearby enemies",
          descriptionLong: "Deals 120 (+4% / level) damage to nearby enemies.",
          cooldown: 6,
          category: "basic",
          type: "W",
          icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_abathur_spikeburst.png",
          isPassive: false,
          analysis: {
            mobility: 0,
            physicalDamage: 0,
            tankiness: 0,
            healing: 0,
            magicalDamage: 80
          }
        }
      ],
      talents: [],
      analysis: {
        tankiness: 0,
        physicalDamage: 0,
        mobility: 0.0585,
        healing: 0,
        magicalDamage: 238.66666666666666
      }
    }
  ],
  analysis: {
    tankiness: 20.640301318267422,
    physicalDamage: 18.571428571428573,
    mobility: 17.38446396885035,
    healing: 0,
    magicalDamage: 8.314605466267139
  }
};
      
export default abathur;