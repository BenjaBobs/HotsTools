import { Hero } from '../heroes';
      
export const arthas: Hero = {
  name: "Arthas",
  nameNormalized: "arthas",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.8125,
  movementSpeed: 4.8398,
  health: {
    amount: 2980,
    scale: 0.04,
    regenRate: 6.207,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroArthas",
      range: 2,
      period: 1,
      damage: 95,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/arthas.png",
  abilities: [
    {
      id: "ArthasFrostmourneHungers",
      name: "Frostmourne Hungers",
      descriptionShort: "Activate to empower the next attack and restore Mana on hit",
      descriptionLong: "Activate to make Arthas's next Basic Attack strike immediately and deal 99 (+4% / level) increased damage. Dealing damage restores 30 Mana.",
      cooldown: 10,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_frostmournehungers_off.png",
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
      id: "ArthasDeathCoil",
      name: "Death Coil",
      descriptionShort: "Deals damage to a target or heal Arthas",
      descriptionLong: "Deals 164 (+4% / level) damage to target enemy. Can be self-cast to heal for 290 (+4% / level) Health.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 9,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_deathcoil.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 96.66666666666666,
        magicalDamage: 54.666666666666664
      }
    },
    {
      id: "ArthasHowlingBlast",
      name: "Howling Blast",
      descriptionShort: "Root and damage enemies in an area",
      descriptionLong: "Root enemies within the target area for 1.25 seconds and deals 68 (+4% / level) damage.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 10,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_howlingblast.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 20.4
      }
    },
    {
      id: "ArthasFrozenTempest",
      name: "Frozen Tempest",
      descriptionShort: "Damage and slow nearby enemies. Drains Mana while active",
      descriptionLong: "Deal 40 (+4% / level) damage per second to nearby enemies and Slow their Movement Speed by 10% per second, stacking up to 40%. Heroes hit also have their Attack Speed Slowed by 10% per second, stacking up to 40%. Frozen Tempest's effects last for 1.5 seconds.",
      cost: {
        type: "Mana",
        amount: 11,
        perSecond: true
      },
      cooldown: 1,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_frosentempest.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 120
      }
    },
    {
      id: "ArthasArmyOfTheDead",
      name: "Army of the Dead",
      descriptionShort: "Raise ghouls that fight enemies, heal Arthas",
      descriptionLong: "Summons Ghouls that last 15 seconds and attack for 20 (+4% / level) damage. Sacrifice Ghouls to heal for 267 (+4% / level) Health.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 80,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_armyofthedead.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 4,
        magicalDamage: 0
      }
    },
    {
      id: "ArthasSummonSindragosa",
      name: "Summon Sindragosa",
      descriptionShort: "Disables enemies and Structures",
      descriptionLong: "Deals 230 (+4% / level) damage and Slows enemies by 60% for 4 seconds. Also disables Minions, Mercenaries, Monsters and Structures for 20 seconds.",
      cost: {
        type: "Mana",
        amount: 100
      },
      cooldown: 100,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_summonsindragosa.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 46
      }
    }
  ],
  talents: [
    [
      {
        id: "ArthasMasteryFrostPresenceHowlingBlast",
        name: "Frost Presence",
        descriptionShort: "Quest: Root Heroes to empower Howling Blast",
        descriptionLong: "Quest: Root enemy Heroes with Howling Blast. Reward: After Rooting 5 Heroes, Howling Blast's cooldown is reduced by 2 seconds. Reward: After Rooting 10 Heroes, Howling Blast's range is increased by 20%. Reward: After Rooting 20 Heroes, Howling Blast also Roots enemies in its path.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_howlingblast.png",
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
          "ArthasHowlingBlast"
        ],
        isQuest: true
      },
      {
        id: "ArthasMasteryEternalHungerFrostmourneHungers",
        name: "Eternal Hunger",
        descriptionShort: "Quest: Empower Frostmourne Hungers",
        descriptionLong: "Quest: Use Frostmourne Hungers on an enemy Hero. Reward: Increases the Mana it restores by 4, to a maximum of 40, and its damage by 4.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_frostmournehungers_off.png",
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
          "ArthasFrostmourneHungersPrimed",
          "ArthasFrostmourneHungers"
        ],
        isQuest: true
      },
      {
        id: "ArthasRime",
        name: "Rime",
        descriptionShort: "Periodically gain Physical Armor",
        descriptionLong: "Every 5 seconds, gain 75 Physical Armor against the next enemy Hero Basic Attack, reducing the damage taken by 75%. Stores up to 3 charges.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_block.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 15,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level1"
      }
    ],
    [
      {
        id: "ArthasDeathlord",
        name: "Deathlord",
        descriptionShort: "Reduce Death Coil cooldown, refund Mana cost",
        descriptionLong: "Increase the range of Death Coil by 30%, reduce its cooldown by 3 seconds, and if Death Coil is used on an enemy Hero, its Mana cost is refunded.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_deathcoil.png",
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
          "ArthasDeathCoil"
        ]
      },
      {
        id: "ArthasMasteryFrozenWastesFrozenTempest",
        name: "Frozen Wastes",
        descriptionShort: "Quest: Frozen Tempest Slow lingers",
        descriptionLong: "Frozen Tempest Mana cost reduced by 2 per second. Quest: Damage enemy Heroes with Frozen Tempest. Reward: After damaging enemy Heroes 150 times with Frozen Tempest, the Movement and Attack Speed Slows of Frozen Tempest last an extra 1.5 seconds against enemy Heroes.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_frosentempest.png",
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
          "ArthasFrozenTempestCancel",
          "ArthasFrozenTempest"
        ],
        isQuest: true
      },
      {
        id: "ArthasIcyTalons",
        name: "Icy Talons",
        descriptionShort: "Frozen Tempest increases Attack Speed",
        descriptionLong: "Gain 3% Attack Speed for 1.5 seconds every time a Hero is damaged by Frozen Tempest, to a maximum of 60%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_frosentempest_a.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0.2,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "ArthasFrozenTempestCancel",
          "ArthasFrozenTempest"
        ]
      }
    ],
    [
      {
        id: "ArthasMasteryImmortalCoilDeathCoil",
        name: "Immortal Coil",
        descriptionShort: "Death Coil always heals",
        descriptionLong: "Gain the healing effect of Death Coil even when used on enemies. If Death Coil is used on Arthas, it heals for an additional 50% bonus healing.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_deathcoil.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 10,
          magicalDamage: 0
        },
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "ArthasDeathCoil"
        ]
      },
      {
        id: "ArthasRuneTap",
        name: "Rune Tap",
        descriptionShort: "Consecutive Basic Attacks heal",
        descriptionLong: "Every 3rd Basic Attack heals Arthas for 5% of his max Health.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_runetap.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.6000000000000001,
          magicalDamage: 0
        },
        order: 2,
        tier: "level7"
      },
      {
        id: "ArthasIceboundFortitude",
        name: "Icebound Fortitude",
        descriptionShort: "Activate to gain Armor, reduce disabling effects",
        descriptionLong: "Activate to gain 25 Armor, reducing damage taken by 25%, and reduce the duration of Stuns, Slows, and Roots against Arthas by 75% for 3 seconds.",
        cooldown: 35,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_icebound_fortitude.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 5,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level7"
      }
    ],
    [
      {
        id: "ArthasHeroicAbilityArmyoftheDead",
        name: "Army of the Dead",
        descriptionShort: "Raise ghouls that fight enemies, heal Arthas",
        descriptionLong: "Summons Ghouls that last 15 seconds and attack for 20 (+4% / level) damage. Sacrifice Ghouls to heal for 267 (+4% / level) Health.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 80,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_armyofthedead.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 4,
          magicalDamage: 0
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "ArthasArmyOfTheDead"
        ]
      },
      {
        id: "ArthasHeroicAbilitySummonSindragosa",
        name: "Summon Sindragosa",
        descriptionShort: "Disables enemies and Structures",
        descriptionLong: "Deals 230 (+4% / level) damage and Slows enemies by 60% for 4 seconds. Also disables Minions, Mercenaries, Monsters and Structures for 20 seconds.",
        cost: {
          type: "Mana",
          amount: 100
        },
        cooldown: 100,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_summonsindragosa.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 46
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "ArthasSummonSindragosa"
        ]
      }
    ],
    [
      {
        id: "ArthasShatteredArmor",
        name: "Shattered Armor",
        descriptionShort: "Howling Blast reduces Armor",
        descriptionLong: "Enemy Heroes hit by Howling Blast have their Armor reduced by 15 for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_howlingblast.png",
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
          "ArthasHowlingBlast"
        ]
      },
      {
        id: "ArthasMasteryBitingColdFrozenTempest",
        name: "Biting Cold",
        descriptionShort: "Frozen Tempest damage increased",
        descriptionLong: "Each second an enemy is damaged by Frozen Tempest, it deals 12.5% bonus damage, up to a 50% bonus.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_frosentempest.png",
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
          "ArthasFrozenTempestCancel",
          "ArthasFrozenTempest"
        ]
      },
      {
        id: "ArthasMasteryFrostStrikeFrostmourneHungers",
        name: "Frost Strike",
        descriptionShort: "Frostmourne Hungers Slows, Death Coil can Silence",
        descriptionLong: "Frostmourne Hungers also Slows the target by 50% for 1.5 seconds. Hitting that target with Death Coil while they are Slowed also Silences them for 1 second.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_frostmournehungers_off.png",
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
          "ArthasFrostmourneHungersPrimed",
          "ArthasFrostmourneHungers"
        ]
      }
    ],
    [
      {
        id: "ArthasMasteryEmbraceDeathDeathCoil",
        name: "Embrace Death",
        descriptionShort: "Death Coil deals more damage when missing Health",
        descriptionLong: "Death Coil deals more damage and heals more the lower Arthas's current Health is, to a maximum of 100% bonus damage and healing.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_deathcoil.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 20,
          magicalDamage: 0
        },
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "ArthasDeathCoil"
        ]
      },
      {
        id: "ArthasMasteryRemorselessWinterFrozenTempest",
        name: "Remorseless Winter",
        descriptionShort: "Frozen Tempest can Root enemy Heroes",
        descriptionLong: "Enemy Heroes that remain within Frozen Tempest for 3 seconds are Rooted for 1.25 seconds. This effect can only happen once every 10 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_frosentempest.png",
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
          "ArthasFrozenTempestCancel",
          "ArthasFrozenTempest"
        ]
      },
      {
        id: "ArthasMasteryFrostmourneFeedsFrostmourneHungers",
        name: "Frostmourne Feeds",
        descriptionShort: "Frostmourne Hungers hits twice against Heroes",
        descriptionLong: "Hitting an enemy Hero with Frostmourne Hungers activates it a second time for free, expiring after 4 seconds. This cannot benefit from Frostmourne Feeds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_frostmournehungers_off.png",
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
          "ArthasFrostmourneHungersPrimed",
          "ArthasFrostmourneHungers"
        ]
      }
    ],
    [
      {
        id: "ArthasMasteryLegionOfNorthrendArmyoftheDead",
        name: "Legion of Northrend",
        descriptionShort: "Ghouls last longer and more are created",
        descriptionLong: "3 additional Ghouls are created. Ghouls deal 50% more damage, heal for an additional 50%, and last 5 seconds longer.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_armyofthedead.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 10,
          magicalDamage: 10
        },
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "ArthasArmyOfTheDeadSacrifice",
          "ArthasArmyOfTheDead"
        ],
        prerequisiteTalentIds: [
          "ArthasHeroicAbilityArmyoftheDead"
        ]
      },
      {
        id: "ArthasMasteryAbsoluteZeroSummonSindragosa",
        name: "Absolute Zero",
        descriptionShort: "Increases Sindragosa range and disable duration",
        descriptionLong: "Sindragosa flies twice as far. Enemy Heroes are Rooted for 2.5 seconds, and then Slowed by 60% for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_summonsindragosa.png",
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
          "ArthasSummonSindragosa"
        ],
        prerequisiteTalentIds: [
          "ArthasHeroicAbilitySummonSindragosa"
        ]
      },
      {
        id: "ArthasDeathsAdvance",
        name: "Death's Advance",
        descriptionShort: "Increase Movement Speed, empower Frozen Tempest Slows",
        descriptionLong: "Increases Movement Speed by 10%. Frozen Tempest's maximum Movement Speed Slow and Attack Speed Slow increased from 40% to 60%",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_frosentempest.png",
        isPassive: false,
        analysis: {
          mobility: 2,
          physicalDamage: 8,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "ArthasFrozenTempestCancel",
          "ArthasFrozenTempest"
        ]
      },
      {
        id: "ArthasAntiMagicShell",
        name: "Anti-Magic Shell",
        descriptionShort: "Activate to become immune to Spell Damage",
        descriptionLong: "Activate to make Arthas immune to Spell Damage for 4 seconds and heal Arthas for 25% of the damage prevented.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_temp_war3_btnantimagicshell.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.8,
          magicalDamage: 0
        },
        order: 4,
        tier: "level20"
      }
    ]
  ],
  analysis: {
    tankiness: 89.79284369114878,
    physicalDamage: 47.5,
    mobility: 24.006944444444446,
    healing: 24.45443135349609,
    magicalDamage: 8.90596522338801
  }
};
