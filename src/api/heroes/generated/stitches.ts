import { Hero } from '../heroes';
      
const stitches: Hero = {
  name: "Stitches",
  nameNormalized: "stitches",
  franchise: "Warcraft",
  gender: "Male",
  size: 1.0625,
  movementSpeed: 4.8398,
  health: {
    amount: 3060,
    scale: 0.04,
    regenRate: 6.379,
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
      damage: 70,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/stitches.png",
  abilities: [
    {
      id: "StitchesVileGasVileCleaver",
      name: "Vile Cleaver",
      descriptionShort: "Basic Attacks splash additional damage over time",
      descriptionLong: "Basic Attacks splash Vile Gas, poisoning nearby enemies for 45 (+4% / level) damage over 3 seconds. Re-applying Vile Gas increases its current duration to a maximum of 10 seconds.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_acidcloud.png",
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
      id: "StitchesHook",
      name: "Hook",
      descriptionShort: "Pull the first target hit towards Stitches",
      descriptionLong: "Pull the first enemy hit towards Stitches and deal 91 (+4% / level) damage.",
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
        magicalDamage: 6.066666666666666
      }
    },
    {
      id: "StitchesSlam",
      name: "Slam",
      descriptionShort: "Damage and Slow enemies in an area",
      descriptionLong: "Deal 104 (+4% / level) damage to enemies within the target area. Enemies in the inner impact area take 40% more damage and are Slowed by 45% for 1.5 seconds.  Deals 60% bonus damage to Minions and Mercenaries.",
      cost: {
        type: "Mana",
        amount: 35
      },
      cooldown: 7,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_slam.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 14.857142857142856
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
        recastCooldown: 1
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
        magicalDamage: 21.266666666666666
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
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 2.466666666666667
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
        id: "StitchesSavortheFlavorDevour",
        name: "Savor the Flavor",
        descriptionShort: "Quest: Devour heals more, grants Health Regen",
        descriptionLong: "When Devour hits a Hero, Stitches heals for an additional 8% of his maximum Health and Mana over 4 seconds. Quest: Hitting enemy Heroes with Devour increases Stitches's Health Regeneration by 1.5.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_devour.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 1.0666666666666667,
          magicalDamage: 0
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "StitchesDevour"
        ],
        isQuest: true
      },
      {
        id: "StitchesPatchworkCreation",
        name: "Patchwork Creation",
        descriptionShort: "All healing effects increased, kills restore Health",
        descriptionLong: "Increase regeneration effects and all healing received by 15%. Whenever a nearby enemy Minion dies, restore 33 (+4% / level) Health. Takedowns restore 255 (+4% / level) Health.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_patchwork.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 2.44,
          magicalDamage: 0
        },
        order: 2,
        tier: "level1"
      },
      {
        id: "StitchesHungryforMore",
        name: "Hungry for More",
        descriptionShort: "Quest: Regen Globes increase Health, Move Speed",
        descriptionLong: "Quest: Gathering a Regeneration Globe increases Stitches's maximum Health by 30. Reward: Every 15 Globes gathered permanently increases Stitches's Movement Speed by 5%, up to 20%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_hungry.png",
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
        isQuest: true
      }
    ],
    [
      {
        id: "StitchesSerratedEdge",
        name: "Serrated Edge",
        descriptionShort: "Hook deals bonus damage, reduces cooldown",
        descriptionLong: "Hitting an enemy Hero with Hook deals bonus damage equal to 5% of their maximum Health, and reduces Hook's cooldown by 3 seconds.",
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
        tier: "level4",
        linkedAbilityIds: [
          "StitchesHook"
        ]
      },
      {
        id: "StitchesPlaytime",
        name: "Playtime!",
        descriptionShort: "Slam reduces other Basic Ability cooldowns",
        descriptionLong: "Heroes hit by Slam reduce the cooldowns of Stitches's other Basic Abilities by 0.5 seconds, increased to 2 seconds for Heroes that are hit by its inner impact area.",
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
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "StitchesSlam"
        ]
      },
      {
        id: "StitchesChopChop",
        name: "Chop Chop",
        descriptionShort: "Slam increases Basic Attack speed",
        descriptionLong: "Hitting an enemy Hero with Slam grants 25% increased Attack Speed for 3 seconds.  Double the Attack Speed bonus and duration if they are hit by Slam's inner impact area.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_slam_b.png",
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
          "StitchesSlam"
        ]
      }
    ],
    [
      {
        id: "StitchesBlight",
        name: "Blight",
        descriptionShort: "Vile Gas heals, activate to reduce enemy healing",
        descriptionLong: "Activate to apply Vile Gas to all nearby enemies. Enemy Heroes hit receive 20% less healing for 5 seconds. Passive: Vile Gas heals Stitches for 33% of the damage dealt.",
        cooldown: 40,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_acidcloud.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 4.4,
          magicalDamage: 0
        },
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "StitchesVileGasVileCleaver"
        ]
      },
      {
        id: "StitchesCannibalize",
        name: "Cannibalize",
        descriptionShort: "Basic Attacks and Slam heals Stitches",
        descriptionLong: "Hitting Heroes with Basic Attacks or the inner impact area of Slam heals Stitches for 2% of his maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_heal.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.5333333333333333,
          magicalDamage: 0
        },
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "StitchesBlight",
          "StitchesVileGasVileCleaver",
          "StitchesSlam"
        ]
      },
      {
        id: "StitchesTenderizer",
        name: "Tenderizer",
        descriptionShort: "Basic Attacks Slow enemies, refresh Slam's Slow",
        descriptionLong: "Basic Attacks Slow enemies by 25% for 2.5 seconds and refresh the duration of Slam's inner impact area Slow.",
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
        tier: "level7",
        linkedAbilityIds: [
          "StitchesBlight",
          "StitchesVileGasVileCleaver",
          "StitchesSlam"
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
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 2.466666666666667
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
        id: "StitchesFishingHook",
        name: "Fishing Hook",
        descriptionShort: "Increase Hook range",
        descriptionLong: "Hook has an additional 40% range.",
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
        tier: "level13",
        linkedAbilityIds: [
          "StitchesHook",
          "StitchesHookHelpingHand"
        ]
      },
      {
        id: "StitchesMeatHook",
        name: "Meat Hook",
        descriptionShort: "Hook heals Stitches over time",
        descriptionLong: "Hitting an enemy Hero with Hook heals Stitches for 20% of his maximum Health over 4 seconds.  While active, Basic Attacks against the Hero hit refresh the healing duration.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_hook_b.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 2.6666666666666665,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "StitchesHook"
        ]
      },
      {
        id: "StitchesPulverizeSlam",
        name: "Pulverize",
        descriptionShort: "Slam Slows all targets, increased Slow",
        descriptionLong: "All enemies hit by Slam are Slowed by 80% for 0.75 seconds.",
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
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "StitchesSlam"
        ]
      }
    ],
    [
      {
        id: "StitchesLacerate",
        name: "Lacerate",
        descriptionShort: "Slam spreads Vile Gas, reduces Armor",
        descriptionLong: "Slam afflicts enemies with Vile Gas, and Heroes hit by Slam have their Armor reduced by 10 for 4 seconds.",
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
        descriptionShort: "Devour reduces enemy damage dealt",
        descriptionLong: "Hitting an enemy Hero with Devour reduces its cooldown by 5 seconds and causes the Hero hit to deal 50% reduced damage for 5 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
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
        tier: "level16",
        linkedAbilityIds: [
          "StitchesDevour"
        ]
      },
      {
        id: "StitchesGasFlare",
        name: "Gas Flare",
        descriptionShort: "Deals damage to nearby enemies",
        descriptionLong: "Deals 15 (+4% / level) damage per second to nearby enemies. Hitting an enemy Hero with Hook increases this damage by 150% for 8 seconds.",
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
          magicalDamage: 1
        },
        order: 3,
        tier: "level16"
      }
    ],
    [
      {
        id: "StitchesPotentBile",
        name: "Potent Bile",
        descriptionShort: "Putrid Bile lasts longer and Slows more",
        descriptionLong: "Putrid Bile lasts 6 seconds longer and its Slow is increased from 35% to 45%.",
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
          magicalDamage: 0
        },
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "StitchesPutridBile"
        ],
        prerequisiteTalentIds: [
          "StitchesHeroicAbilityPutridBile"
        ]
      },
      {
        id: "StitchesHungryHungryStitchesGorge",
        name: "Hungry Hungry Stitches",
        descriptionShort: "Gorge multiple Heroes, can teleport",
        descriptionLong: "For 4 seconds after using Gorge, Stitches can teleport a short distance to additional targets and Gorge them.",
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
        id: "StitchesSecondHelping",
        name: "Second Helping",
        descriptionShort: "Devour gains a charge, reduces Heroic cooldown",
        descriptionLong: "Devour gains 1 additional charge. Enemy Heroes hit by Devour reduce the cooldown of Stitches's Heroic Ability by 5 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
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
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "StitchesDevour"
        ]
      },
      {
        id: "StitchesShamblingHorror",
        name: "Shambling Horror",
        descriptionShort: "Resilient to Slows, activate to gain Armor",
        descriptionLong: "Activate to gain 50 Armor for 4 seconds. Passive: Stitches cannot have his Movement Speed reduced below 100%.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stitches_horror.png",
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
    tankiness: 92.20338983050847,
    physicalDamage: 31.818181818181817,
    mobility: 24.199,
    healing: 0,
    magicalDamage: 19.767871736000313
  }
};
      
export default stitches;