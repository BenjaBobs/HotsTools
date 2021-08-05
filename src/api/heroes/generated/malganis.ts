import { Hero } from '../heroes';
      
const malganis: Hero = {
  name: "Mal'Ganis",
  nameNormalized: "malganis",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.875,
  movementSpeed: 4.8398,
  health: {
    amount: 2600,
    scale: 0.04,
    regenRate: 5.414,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroMalGanisWeapon",
      range: 1.3,
      period: 1.1,
      damage: 96,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/malganis.png",
  abilities: [
    {
      id: "MalGanisVampiricTouch",
      name: "Vampiric Touch",
      descriptionShort: "Mal'Ganis heals from damage dealt",
      descriptionLong: "Mal'Ganis heals for 45% of damage dealt to enemy Heroes and 10% of damage dealt to non-Heroes.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_trait.png",
      isPassive: true,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 6,
        magicalDamage: 0
      }
    },
    {
      id: "MalGanisFelClawsFirst",
      name: "Fel Claws",
      descriptionShort: "Swipe forward multiple times to deal damage",
      descriptionLong: "Violently slash in the chosen direction, dealing 66 (+4% / level) damage to enemies. Reactivate to slash up to 2 more times. The third slash Stuns enemies for 0.75 seconds.",
      cost: {
        type: "Mana",
        amount: 45
      },
      cooldown: 8,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_fel_1.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 8.25
      }
    },
    {
      id: "MalGanisNecroticEmbrace",
      name: "Necrotic Embrace",
      descriptionShort: "Deal damage around Mal'Ganis and gain Armor",
      descriptionLong: "Desecrate the air, dealing 110 (+4% / level) damage to nearby enemies and gaining 25 Armor for 3 seconds.",
      cost: {
        type: "Mana",
        amount: 35
      },
      cooldown: 8,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_necrotic.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 13.75
      }
    },
    {
      id: "MalGanisNightRush",
      name: "Night Rush",
      descriptionShort: "Gain Move Speed and put enemies to Sleep",
      descriptionLong: "After 0.75 seconds, gain 50% Movement Speed for 2 seconds. While active, Mal'Ganis can move through enemy Heroes and put them to Sleep for 2.5 seconds.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 14,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_nightrush.png",
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
      id: "MalGanisDarkConversion",
      name: "Dark Conversion",
      descriptionShort: "Channel to swap Health with an enemy Hero",
      descriptionLong: "Channel on an enemy Hero for 0.75 seconds, then swap Health percentages with the target over 3 seconds.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_ult_conversion.png",
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
      id: "MalGanisCarrionSwarm",
      name: "Carrion Swarm",
      descriptionShort: "Disperse and deal damage in an area",
      descriptionLong: "After 1 second, disperse into an Invulnerable swarm of bats for 3 seconds, dealing 120 (+4% / level) damage per second to enemies. Vampiric Touch heals for 75% of Carrion Swarm's damage to Heroes.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 100,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_ult_swarm.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 10,
        magicalDamage: 8
      }
    }
  ],
  talents: [
    [
      {
        id: "MalGanisNecroticEmbraceWingedGuard",
        name: "Winged Guard",
        descriptionShort: "Necrotic Embrace grants extra Physical Armor",
        descriptionLong: "Each time Necrotic Embrace hits an enemy Hero, gain 75 Physical Armor against the next enemy Hero Basic Attack. If Winged Guard has no charges, Mal'Ganis will gain 1 charge after 6 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_necrotic.png",
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
          "MalGanisNecroticEmbrace"
        ]
      },
      {
        id: "MalGanisVampiricTouchVampiricAura",
        name: "Vampiric Aura",
        descriptionShort: "Improve Vampiric Touch and share it with allies",
        descriptionLong: "Mal'Ganis heals for 30% of Physical Damage dealt, and nearby allied Heroes heal for 15% of Physical Damage dealt.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_trait.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 8,
          magicalDamage: 0
        },
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "MalGanisVampiricTouch"
        ]
      },
      {
        id: "MalGanisVampiricTouchTimeToFeed",
        name: "Time to Feed",
        descriptionShort: "Heal when initially damaging enemy Heroes",
        descriptionLong: "Mal'Ganis heals for 70 (+4% / level) when damaging a nearby enemy Hero. This can occur once every 6 seconds against each enemy Hero, but is also refreshed when they are Slept by Night Rush.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_trait_b.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.9333333333333333,
          magicalDamage: 0
        },
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "MalGanisVampiricTouch"
        ]
      }
    ],
    [
      {
        id: "MalGanisNecroticEmbraceFueledByTorment",
        name: "Fueled by Torment",
        descriptionShort: "Necrotic Embrace heals when damage is taken",
        descriptionLong: "While Necrotic Embrace is active, Mal'Ganis heals for 12 (+4% / level) when damage is taken and Vampiric Touch converts 20% more Hero damage into healing.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_necrotic.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 2.8266666666666667,
          magicalDamage: 0
        },
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "MalGanisNecroticEmbrace"
        ]
      },
      {
        id: "MalGanisNecroticEmbraceMightOfSargeras",
        name: "Might of Sargeras",
        descriptionShort: "Raise Necrotic Embrace Armor",
        descriptionLong: "Necrotic Embrace's Armor is increased to 50.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_necrotic_b.png",
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
          "MalGanisNecroticEmbrace"
        ]
      },
      {
        id: "MalGanisNecroticEmbraceEchoOfDoom",
        name: "Echo of Doom",
        descriptionShort: "Necrotic Embrace explodes when expiring",
        descriptionLong: "When Necrotic Embrace expires, it explodes again for 68 (+4% / level) damage.  For each enemy Hero hit, gain 5 Mana and reduce the cooldown of Necrotic Embrace by 0.75 seconds. Does not wake Sleeping targets.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_necrotic_c.png",
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
          "MalGanisNecroticEmbrace"
        ]
      }
    ],
    [
      {
        id: "MalGanisFelClawsBlackClaws",
        name: "Black Claws",
        descriptionShort: "Fel Claws increases Basic Attack damage, reduces Armor",
        descriptionLong: "After Mal'Ganis hits an enemy Hero with Fel Claws, his next Basic Attack deals 60% more damage and reduces the Armor of enemy Heroes by 15 for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_fel_1.png",
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
          "MalGanisFelClawsThird",
          "MalGanisFelClawsSecond",
          "MalGanisFelClawsFirst"
        ]
      },
      {
        id: "MalGanisFelClawsWillOfTichondrius",
        name: "Will of Tichondrius",
        descriptionShort: "Empower Fel Claws final slash",
        descriptionLong: "Each enemy Hero hit by the first 2 slashes of Fel Claws causes the final slash to steal 1% of maximum Health from enemy Heroes, up to 4%. If at least 4 enemy Heroes are hit with the first 2 slashes of Fel Claws, then the final slash Stuns enemies for an additional 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_fel_1_b.png",
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
          "MalGanisFelClawsThird",
          "MalGanisFelClawsSecond",
          "MalGanisFelClawsFirst"
        ]
      },
      {
        id: "MalGanisNightRushSpreadingPlague",
        name: "Spreading Plague",
        descriptionShort: "Periodically deal damage after casting Night Rush",
        descriptionLong: "After casting Night Rush, deal 33 (+4% / level) damage per second to nearby enemies.  This effect lasts for 5 seconds and Basic Attacks against Heroes refresh its duration. Does not wake Sleeping targets.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_nightrush.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 2.2
        },
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "MalGanisNightRush"
        ]
      }
    ],
    [
      {
        id: "MalGanisCarrionSwarm",
        name: "Carrion Swarm",
        descriptionShort: "Disperse and deal damage in an area",
        descriptionLong: "After 1 second, disperse into an Invulnerable swarm of bats for 3 seconds, dealing 120 (+4% / level) damage per second to enemies. Vampiric Touch heals for 75% of Carrion Swarm's damage to Heroes.",
        cost: {
          type: "Mana",
          amount: 70
        },
        cooldown: 100,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_ult_swarm.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 10,
          magicalDamage: 8
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "MalGanisCarrionSwarm"
        ]
      },
      {
        id: "MalGanisDarkConversion",
        name: "Dark Conversion",
        descriptionShort: "Channel to swap Health with an enemy Hero",
        descriptionLong: "Channel on an enemy Hero for 0.75 seconds, then swap Health percentages with the target over 3 seconds.",
        cost: {
          type: "Mana",
          amount: 60
        },
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_ult_conversion.png",
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
          "MalGanisDarkConversion"
        ]
      }
    ],
    [
      {
        id: "MalGanisNightRushDeepSleep",
        name: "Deep Sleep",
        descriptionShort: "Increase Night Rush Sleep duration",
        descriptionLong: "Increase Night Rush's Sleep duration by 0.75 seconds and its Movement Speed bonus by 10%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_nightrush.png",
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
          "MalGanisNightRush"
        ]
      },
      {
        id: "MalGanisNightRushTheNightBeckons",
        name: "The Night Beckons",
        descriptionShort: "Night Rush Slows enemies",
        descriptionLong: "Basic Attacks deal 200% bonus damage to Sleeping enemies.  After Night Rush's Sleep ends, targets are Slowed by 30% for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_nightrush_b.png",
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
          "MalGanisNightRush"
        ]
      },
      {
        id: "MalGanisVampiricTouchBloodRush",
        name: "Blood Rush",
        descriptionShort: "Healing increases Move Speed",
        descriptionLong: "When Mal'Ganis is healed by a Hero, he gains 1% Movement Speed for 6 seconds, up to 15%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_trait.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.13333333333333333,
          magicalDamage: 0
        },
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "MalGanisVampiricTouch"
        ]
      }
    ],
    [
      {
        id: "MalGanisNecroticEmbracePlagueBats",
        name: "Plague Bats",
        descriptionShort: "Necrotic Embrace unleashes a wave of bats",
        descriptionLong: "Necrotic Embrace unleashes a wave of bats in front of Mal'Ganis, dealing 81 (+4% / level) damage.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_necrotic.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 5.4
        },
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "MalGanisNecroticEmbrace"
        ]
      },
      {
        id: "MalGanisVampiricTouchFrenziedAssault",
        name: "Frenzied Assault",
        descriptionShort: "Gain Attack bonuses based on relative Health",
        descriptionLong: "Basic Attacks against Heroes with a higher Health percentage heal for an additional 50% of damage dealt. Basic Attacks against Heroes with a lower Health percentage grant 35% Attack Speed for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_trait.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 13.333333333333334,
          magicalDamage: 0
        },
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "MalGanisVampiricTouch"
        ]
      },
      {
        id: "MalGanisFelClawsBlindAsABat",
        name: "Blind as a Bat",
        descriptionShort: "Remove Fel Claws cooldown, but lose all vision",
        descriptionLong: "Activate to erupt with blind rage, removing the cooldown and Mana cost of Fel Claws, but losing all vision. Lasts 6 seconds.  Enemy Heroes hit by the final slash of Fel Claws reduces the cooldown of this Ability by 4 seconds.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_blindbat.png",
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
        id: "MalGanisCarrionSwarmSeekerSwarm",
        name: "Seeker Swarm",
        descriptionShort: "Carrion Swarm Sleeps Heroes after expiring",
        descriptionLong: "Upon expiring, Carrion Swarm's bats seek nearby enemy Heroes, dealing 132 (+4% / level) damage and Sleeping them for 2.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_ult_swarm.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 8.8
        },
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "MalGanisCarrionSwarm"
        ],
        prerequisiteTalentIds: [
          "MalGanisCarrionSwarm"
        ]
      },
      {
        id: "MalGanisDarkConversionWrathOfNathreza",
        name: "Wrath of Nathreza",
        descriptionShort: "Dark Conversion damages Heroes near the target",
        descriptionLong: "Enemy Heroes near the target suffer 75% of the transferred Health as damage over 3 seconds. Does not benefit from Vampiric Touch.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_ult_conversion.png",
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
          "MalGanisDarkConversion"
        ],
        prerequisiteTalentIds: [
          "MalGanisDarkConversion"
        ]
      },
      {
        id: "MalGanisFelClawsVanquishTheWeak",
        name: "Vanquish the Weak",
        descriptionShort: "Fel Claws and Basic Attacks Slow",
        descriptionLong: "Damage from Fel Claws and Basic Attacks Slows enemies by 25% for 1.5 seconds, and Vampiric Touch converts 10% more damage into healing versus Slowed Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_fel_1.png",
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
          "MalGanisFelClawsThird",
          "MalGanisFelClawsSecond",
          "MalGanisFelClawsFirst"
        ]
      },
      {
        id: "MalGanisNightRushAloneInTheDark",
        name: "Alone in the Dark",
        descriptionShort: "Night Rush reduces enemy vision",
        descriptionLong: "Reduce the cooldown of Night Rush by 4 seconds.  Enemy Heroes put to Sleep by Night Rush have their vision greatly reduced during the Sleep and for 2 seconds after.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malganis_nightrush.png",
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
          "MalGanisNightRush"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 78.3427495291902,
    physicalDamage: 43.636363636363626,
    mobility: 24.199,
    healing: 21.001050052502627,
    magicalDamage: 13.279760283301552
  }
};
      
export default malganis;