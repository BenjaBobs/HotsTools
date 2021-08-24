import { Hero } from '../heroes';
      
const stitches: Hero = {
  name: "Stitches",
  nameNormalized: "stitches",
  franchise: "Warcraft",
  gender: "Male",
  size: 1.0625,
  movementSpeed: 4.8398,
  health: {
    amount: 3020,
    scale: 0.04,
    regenRate: 6.293,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroStitches",
      range: 1.5,
      period: 1.1,
      damage: 71,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/stitches.png",
  abilities: [
    {
      id: "StitchesShamblingHorror",
      name: "Shambling Horror",
      descriptionShort: "Attacks poison, activate to prevent Slows",
      descriptionLong: "Activate to spread Vile Gas in a large area every second and prevent your Movement Speed from being reduced below 110% for 4 seconds. Vile GasHitting enemies with Basic Attacks or the inner area of Slam afflicts them with Vile Gas, dealing an additional 36 (+4% / level) damage over 4 seconds. Deals 150% more damage to Minions, Mercenaries, and Monsters.",
      cooldown: 60,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_acidcloud.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 37.2
      }
    },
    {
      id: "StitchesHook",
      name: "Hook",
      descriptionShort: "Pull the first target hit towards Stitches",
      descriptionLong: "Pull the first enemy hit towards Stitches and deal 91 (+4% / level) damage. After reaching level 13, Hook's range is increased by 40%.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 16,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_hook.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 18.2
      }
    },
    {
      id: "StitchesSlam",
      name: "Slam",
      descriptionShort: "Damage and Slow enemies in an area",
      descriptionLong: "Deal 104 (+4% / level) damage to enemies within the target area. Enemies in the inner impact take 50% more damage and are Slowed by 45% for 2 seconds.",
      cost: {
        type: "Mana",
        amount: 35
      },
      cooldown: 8,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_slam.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 39
      }
    },
    {
      id: "StitchesDevour",
      name: "Devour",
      descriptionShort: "Damage an enemy and restore Health",
      descriptionLong: "Deal 319 (+4% / level) damage to non-Heroic units, or 114 (+4% / level) damage to Heroes. Restores 20% of Stitches's maximum Health.",
      cost: {
        type: "Mana",
        amount: 55
      },
      cooldown: 20,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 6
      },
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_devour.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 63.800000000000004
      }
    },
    {
      id: "StitchesPutridBile",
      name: "Putrid Bile",
      descriptionShort: "Emit a Slowing bile trail",
      descriptionLong: "Emit bile that deals 37 (+4% / level) damage per second to enemies within, Slowing them by 35% for 1.5 seconds. Gain 20% Movement Speed while emitting bile. Lasts 8 seconds.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 75,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_putridbile.png",
      isPassive: false,
      analysis: {
        mobility: 1.6,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 7.4
      }
    },
    {
      id: "StitchesGorge",
      name: "Gorge",
      descriptionShort: "Completely consume an enemy Hero",
      descriptionLong: "Consume an enemy Hero, trapping them for 4 seconds. When Gorge ends, the enemy Hero takes 274 (+4% / level) damage. The trapped Hero cannot move or act and doesn't take damage from other sources.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 65,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_cannibalize.png",
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
        id: "StitchesPatchworkCreation",
        name: "Patchwork Creation",
        descriptionShort: "Vile Gas grants Armor, all healing effects increased",
        descriptionLong: "Gain 3 Armor for every unit afflicted with Vile Gas, stacking up to 8 times. While Shambling Horror is active, this Armor amount is doubled. Passive: Increase regeneration effects and all healing received by 15%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_patchwork.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0.6000000000000001,
          healing: 3,
          magicalDamage: 0
        },
        order: 1,
        tier: "level1"
      },
      {
        id: "StitchesSavortheFlavorDevour",
        name: "Savor The Flavor",
        descriptionShort: "Quest: Devouring Heroes grants Health per second, increases Vile Gas damage",
        descriptionLong: "Quest: Hitting an enemy Hero with Devour increases Stitches' Health Regeneration by 1.5 and the damage of Vile Gas by 2%, stacking up to 100 times.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 6
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_devour.png",
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
          "StitchesDevour"
        ],
        isQuest: true
      },
      {
        id: "StitchesHungryforMore",
        name: "Hungry for More",
        descriptionShort: "Quest: Regen Globes increase Health, Move Speed",
        descriptionLong: "Gain 5% Movement Speed. Quest: Gathering a Regeneration Globe increases Stitches's maximum Health by 25. Reward: Every 20 Globes gathered permanently increases Stitches' Movement Speed by an additional 5%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_hungry.png",
        isPassive: false,
        analysis: {
          mobility: 1,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level1",
        isQuest: true
      }
    ],
    [
      {
        id: "StitchesPlaytime",
        name: "Playtime!",
        descriptionShort: "Basic Attacks reduce Slam cooldown",
        descriptionLong: "Basic Attacks reduce the cooldown of Slam by 0.75 seconds and restores 5 Mana. Hitting Heroes with the inner area of Slam reduces its cooldown by 1.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_slam.png",
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
          "StitchesSlam"
        ]
      },
      {
        id: "StitchesVileCleaver",
        name: "Vile Cleaver",
        descriptionShort: "Basic Attacks, Slam, spread Vile Gas",
        descriptionLong: "Basic Attacks against enemies with Vile Gas deal 35% more damage and spreads Vile Gas to nearby enemies. Passive: Slam applies Vile Gas to all targets hit.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_acidcloud.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 7
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "StitchesShamblingHorror"
        ]
      },
      {
        id: "StitchesTenderizer",
        name: "Tenderizer",
        descriptionShort: "Basic Attacks Slow Heroes, restore Health",
        descriptionLong: "Basic Attacks against enemy Heroes Slow by 20% for 1.5 seconds and restore 1.75% of Stitches' maximum Health.",
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
          magicalDamage: 0
        },
        order: 3,
        tier: "level4"
      }
    ],
    [
      {
        id: "StitchesSerratedEdge",
        name: "Serrated Edge",
        descriptionShort: "Hook deals bonus damage, reduces cooldown",
        descriptionLong: "Hitting an enemy Hero with Hook deals bonus damage equal to 5% of their maximum Health, reduces Hook's cooldown by 4 seconds, and restores 35 Mana.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_hook.png",
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
          "StitchesHook"
        ]
      },
      {
        id: "StitchesSecondHelping",
        name: "Second Helping",
        descriptionShort: "Gambit: Gain additional Devour charge, grants Shields",
        descriptionLong: "Devour gains 1 additional charge with a 6 second cooldown between uses. Gambit: If Stitches is at max Health after using Devour, he gains a Shield equal to 15% of his maximum Health for 10 seconds. Every death, reduce this Shield by 3%.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 6
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_devour.png",
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
          "StitchesDevour"
        ],
        isQuest: true
      },
      {
        id: "StitchesPutrefaction",
        name: "Putrefaction",
        descriptionShort: "Vile Gas heals, empowered during Shambling Horror",
        descriptionLong: "While Shambling Horror is active, Vile Gas reduces healing received by 40%. Passive: Vile Gas heals Stitches for 75% of the damage dealt.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_acidcloud.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 23,
          magicalDamage: 0
        },
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "StitchesShamblingHorror"
        ]
      }
    ],
    [
      {
        id: "StitchesHeroicAbilityPutridBile",
        name: "Putrid Bile",
        descriptionShort: "Emit a Slowing bile trail",
        descriptionLong: "Emit bile that deals 37 (+4% / level) damage per second to enemies within, Slowing them by 35% for 1.5 seconds. Gain 20% Movement Speed while emitting bile. Lasts 8 seconds.",
        cost: {
          type: "Mana",
          amount: 75
        },
        cooldown: 75,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_putridbile.png",
        isPassive: false,
        analysis: {
          mobility: 1.6,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 7.4
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "StitchesPutridBile"
        ]
      },
      {
        id: "StitchesHeroicAbilityGorge",
        name: "Gorge",
        descriptionShort: "Completely consume an enemy Hero",
        descriptionLong: "Consume an enemy Hero, trapping them for 4 seconds. When Gorge ends, the enemy Hero takes 274 (+4% / level) damage. The trapped Hero cannot move or act and doesn't take damage from other sources.",
        cost: {
          type: "Mana",
          amount: 70
        },
        cooldown: 65,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_cannibalize.png",
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
          "StitchesGorge"
        ]
      }
    ],
    [
      {
        id: "StitchesMeatHook",
        name: "Meat Hook",
        descriptionShort: "Hook heals Stitches over time",
        descriptionLong: "Hitting an enemy Hero with Hook heals Stitches for 20% of his maximum Health over 5 seconds. While active, Basic Attacks against the Hero hit refresh the duration of this effect.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_hook.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 4,
          magicalDamage: 0
        },
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "StitchesHook"
        ]
      },
      {
        id: "StitchesUnderPressure",
        name: "Under Pressure",
        descriptionShort: "Quest: Vile Gas increases Slam damage",
        descriptionLong: "Increase Slam's damage by 25. Quest: After damaging Heroes with Vile Gas 6 times, permanently increase the damage of Slam by 1, to a maximum of 75 additional damage.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_underpressure.png",
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
          "StitchesSlam"
        ],
        isQuest: true
      },
      {
        id: "StitchesChopChop",
        name: "Chop Chop",
        descriptionShort: "Hook, Shambling Horror, increases Attack Speed",
        descriptionLong: "Hitting an enemy Hero with Hook or activating Shambling Horror grants 40% increased Attack Speed for 4 seconds. Basic Attacks refresh the duration of this effect.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_chopchop.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0.8,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "StitchesShamblingHorror"
        ]
      }
    ],
    [
      {
        id: "StitchesPulverizeSlam",
        name: "Pulverize",
        descriptionShort: "Slam Slows all targets, decreases Armor",
        descriptionLong: "All enemies hit by Slam are Slowed by 70% for 0.75 seconds and Heroes have their Armor reduced by 10 for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_slam.png",
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
          "StitchesSlam"
        ]
      },
      {
        id: "StitchesDigestiveJuices",
        name: "Digestive Juices",
        descriptionShort: "Increase Devour damage, reduces enemy damage dealt",
        descriptionLong: "Devour deals an additional 140 (+4% / level) damage over 5 seconds. When used on a Hero, its cooldown is reduced by 4 seconds and causes the Hero hit to deal 50% reduced damage for 4 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 6
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_devour.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 38
        },
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "StitchesDevour"
        ]
      },
      {
        id: "StitchesFlareUp",
        name: "Flare Up",
        descriptionShort: "Deals damage to nearby enemies",
        descriptionLong: "Deals 15 (+4% / level) damage per second to nearby enemies. Hitting an enemy Hero with Hook or activating Shambling Horror increases this damage by 150% for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_burningrage.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 3
        },
        order: 3,
        tier: "level16"
      }
    ],
    [
      {
        id: "StitchesGiftFromTheEmbalmer",
        name: "Gift From The Embalmer",
        descriptionShort: "Quest: Increase Putrid Bile damage, reduce death timer",
        descriptionLong: "Putrid Bile deals 100% more damage to Heroes. Quest: Each time Putrid Bile damages an enemy Hero, the duration of Stitches' next death timer is reduced by 2%, to a maximum of 80% total reduction. All stacks of this effect are lost upon death.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_putridbile.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 20
        },
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "StitchesPutridBile"
        ],
        prerequisiteTalentIds: [
          "StitchesHeroicAbilityPutridBile"
        ],
        isQuest: true
      },
      {
        id: "StitchesHungryHungryStitchesGorge",
        name: "Hungry Hungry Stitches",
        descriptionShort: "Gorge multiple Heroes, can teleport",
        descriptionLong: "For 4 seconds after using Gorge, Stitches can teleport a short distance to additional targets and Gorge them. Enemies are Slowed by 75% for 1 second after Gorge ends.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_cannibalize.png",
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
          "StitchesGorge"
        ],
        prerequisiteTalentIds: [
          "StitchesHeroicAbilityGorge"
        ]
      },
      {
        id: "StitchesHookMasterHooker",
        name: "Master Hooker",
        descriptionShort: "Empower Hook",
        descriptionLong: "Reduce the cooldown of Hook by 4 seconds. Enemy Heroes hit by Hook have 75% reduced healing for 2 seconds. Allies hit by Helping Hand are Unkillable for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_hook.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 15,
          magicalDamage: 0
        },
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "StitchesHook",
          "StitchesHookHelpingHand"
        ]
      },
      {
        id: "StitchesGasBag",
        name: "Gas Bag",
        descriptionShort: "Shambling Horror grants Unstoppable, reduced cooldown",
        descriptionLong: "Activating Shambling Horror grants Unstoppable for 3 seconds. Passive: Shambling Horror's cooldown is reduced by 20 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_acidcloud.png",
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
          "StitchesShamblingHorror"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 90.99811676082862,
    physicalDamage: 32.272727272727266,
    mobility: 25.59424603174604,
    healing: 0,
    magicalDamage: 24.434758921274863
  }
};
      
export default stitches;