import { Hero } from '../heroes';
      
const azmodan: Hero = {
  name: "Azmodan",
  nameNormalized: "azmodan",
  franchise: "Diablo",
  gender: "Male",
  size: 1.1875,
  movementSpeed: 4.8398,
  health: {
    amount: 2464.2,
    scale: 0.04,
    regenRate: 5.1328,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "AzmodanHeroWeapon",
      range: 5.5,
      period: 1,
      damage: 85,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/azmodan.png",
  abilities: [
    {
      id: "AzmodanDemonLieutenant",
      name: "Demon Lieutenant",
      descriptionShort: "Azmodan summons a Demon Lieutenant to assist Minions, Mercenaries, and Summons",
      descriptionLong: "Summon a Demon Lieutenant at any allied Mercenary, Minion, or Azmodan Demon. The Lieutenant will cast Demonic Smite every 7 seconds, instantly killing an enemy Minion. Lasts 20 seconds. Usable while Channeling All Shall Burn.",
      cooldown: 60,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_generalofhell.png",
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
      id: "AzmodanGlobeOfAnnihilation",
      name: "Globe of Annihilation",
      descriptionShort: "Launch a long range orb of destruction dealing area damage",
      descriptionLong: "Shoot a globe of destruction, dealing 184 (+4% / level) damage on impact. Quest: Hitting a Hero or killing a Minion within 1.5 seconds of being hit by Globe of Annihilation grants 2 Annihilation. Reward: Each stack of Annihilation increases the damage of Globe of Annihilation by 1, up to 400.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 10,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_globeofannihilation.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 55.199999999999996
      }
    },
    {
      id: "AzmodanSummonDemonWarrior",
      name: "Summon Demon Warrior",
      descriptionShort: "Summon a Demon Warrior",
      descriptionLong: "Spawn a Demon Warrior that marches forward. Warriors deal 35 (+4% / level) damage per Attack and 18 (+4% / level) damage to nearby enemies every second. Lasts for 10 seconds. Usable while Channeling All Shall Burn.",
      cost: {
        type: "Mana",
        amount: 25
      },
      cooldown: 10,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_summondemonwarrior.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 10.5
      }
    },
    {
      id: "AzmodanAllShallBurn",
      name: "All Shall Burn",
      descriptionShort: "Channel a beam of death on an enemy",
      descriptionLong: "Channel a beam of death on an enemy, dealing 128 (+4% / level) damage per second for 2.5 seconds. If the Channel lasts its full duration, deal an extra 340 (+4% / level) damage to the target. Azmodan's Movement Speed is reduced by 30% while Channeling.",
      cost: {
        type: "Mana",
        amount: 25
      },
      cooldown: 6,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_allshallburn.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 234
      }
    },
    {
      id: "AzmodanDemonicInvasion",
      name: "Demonic Invasion",
      descriptionShort: "Damage area and create an army of Grunts",
      descriptionLong: "Rain a small army of Demonic Grunts down on enemies, dealing 65 (+4% / level) damage per impact. Grunts deal 39 (+4% / level) damage, have 750 (+4% / level) Health and last up to 10 seconds. When Grunts die they explode, dealing 88 (+4% / level) damage to nearby enemies. Usable while Channeling All Shall Burn.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 100,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_demonicinvasion.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 38.400000000000006
      }
    },
    {
      id: "AzmodanTideOfSin",
      name: "Tide of Sin",
      descriptionShort: "Empower Globe of Annihilation",
      descriptionLong: "Activate to make the next Globe of Annihilation cost no Mana and deal 50% more damage. Usable while Channeling All Shall Burn.",
      cost: {
        type: "Mana",
        amount: 100
      },
      cooldown: 20,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_blackpool.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 10
      }
    }
  ],
  talents: [
    [
      {
        id: "AzmodanGreed",
        name: "Greed",
        descriptionShort: "Increase Globe damage to non-HeroesQuest: Increase All Shall Burn range",
        descriptionLong: "Globe of Annihilation deals 15% more damage to non-Heroic targets. Quest: After gaining 200 Annihilation, increase the range of All Shall Burn by 25% and Demon Warriors gain 20% Attack Speed and Movement Speed.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_globeofannihilation.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 3
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "AzmodanGlobeOfAnnihilation"
        ],
        isQuest: true
      },
      {
        id: "AzmodanGluttony",
        name: "Gluttony",
        descriptionShort: "Quest: Increase Annihilation from hitting Heroes",
        descriptionLong: "Increase the number of stacks of Annihilation gained by hitting Heroes with Globe of Annihilation from 2 to 4. Quest: After gaining 200 Annihilation, each enemy hit by Globe of Annihilation reduces its cooldown by 0.25 seconds, doubled against Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_globeofannihilation_a.png",
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
          "AzmodanGlobeOfAnnihilation"
        ],
        isQuest: true
      },
      {
        id: "AzmodanWrath",
        name: "Wrath",
        descriptionShort: "Quest: Basic Attacks grant Annihilation",
        descriptionLong: "Basic Attacks against Heroes under 75% Health grant 1 Annihilation. Quest: After gaining 200 Annihilation, hitting a Hero with Globe of Annihilation increases the damage of Azmodan's next Basic Attack against them within 3 seconds by 75% the amount of Annihilation he has.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_globeofannihilation_b.png",
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
          "AzmodanGlobeOfAnnihilation"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "AzmodanArmyOfHell",
        name: "Army of Hell",
        descriptionShort: "Summon additional Demon Warrior",
        descriptionLong: "Summon Demon Warrior spawns an additional Demon, but its cooldown is increased by 10 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_summondemonwarrior.png",
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
          "AzmodanSummonDemonWarrior"
        ]
      },
      {
        id: "AzmodanHellforgedArmor",
        name: "Hellforged Armor",
        descriptionShort: "Increase Demon Armor and duration",
        descriptionLong: "Demon Warriors and Lieutenants gain 20 Armor and last 4 seconds longer.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_summondemonwarrior_a.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 4,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "AzmodanSummonDemonWarrior",
          "AzmodanDemonLieutenant"
        ]
      },
      {
        id: "AzmodanBattleborn",
        name: "Battleborn",
        descriptionShort: "Basic Attacks reduce Demon cooldowns",
        descriptionLong: "Reduce the Mana cost of Summon Demon Warrior from 25 to 20.  Azmodan's Basic Attacks reduce the cooldown of Summon Demon Warrior by 0.75 seconds and Demon Lieutenant by 1.5 seconds.",
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
        tier: "level4",
        linkedAbilityIds: [
          "AzmodanSummonDemonWarrior",
          "AzmodanDemonLieutenant"
        ]
      }
    ],
    [
      {
        id: "AzmodanArtOfChaos",
        name: "Art of Chaos",
        descriptionShort: "Globe grants additional Annihilation",
        descriptionLong: "If Globe of Annihilation hits 2 or more Heroes, restore 40 Mana and gain an extra 4 Annihilation.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_globeofannihilation.png",
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
          "AzmodanGlobeOfAnnihilation"
        ]
      },
      {
        id: "AzmodanBombardment",
        name: "Bombardment",
        descriptionShort: "Globe empowers Basic Attacks",
        descriptionLong: "After casting Globe of Annihilation, Azmodan's Basic Attacks within the next 4 seconds have an additional 1.5 range and can hit 2 additional targets. Hitting Heroes with Basic Attacks empowered by Bombardment grant 1 Annihilation.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_globeofannihilation_a.png",
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
          "AzmodanGlobeOfAnnihilation"
        ]
      },
      {
        id: "AzmodanMasterofDestruction",
        name: "Master of Destruction",
        descriptionShort: "All Shall Burn explodes",
        descriptionLong: "If All Shall Burn's Channel kills or lasts its full duration, All Shall Burn's final damage applies to all enemies in an area around the target and grants 2 Annihilation per Hero hit.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_allshallburn.png",
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
          "AzmodanAllShallBurn"
        ]
      }
    ],
    [
      {
        id: "AzmodanHeroicAbilityDemonicInvasion",
        name: "Demonic Invasion",
        descriptionShort: "Damage area and create an army of Grunts",
        descriptionLong: "Rain a small army of Demonic Grunts down on enemies, dealing 65 (+4% / level) damage per impact. Grunts deal 39 (+4% / level) damage, have 750 (+4% / level) Health and last up to 10 seconds. When Grunts die they explode, dealing 88 (+4% / level) damage to nearby enemies. Usable while Channeling All Shall Burn.",
        cost: {
          type: "Mana",
          amount: 60
        },
        cooldown: 100,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_demonicinvasion.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 38.400000000000006
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "AzmodanDemonicInvasion"
        ]
      },
      {
        id: "AzmodanTideOfSin",
        name: "Tide of Sin",
        descriptionShort: "Empower Globe of Annihilation",
        descriptionLong: "Activate to make the next Globe of Annihilation cost no Mana and deal 50% more damage. Usable while Channeling All Shall Burn.",
        cost: {
          type: "Mana",
          amount: 100
        },
        cooldown: 20,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_blackpool.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 10
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "AzmodanTideOfSin"
        ]
      }
    ],
    [
      {
        id: "AzmodanBrutishVanguard",
        name: "Brutish Vanguard",
        descriptionShort: "Demons have more Health, Warriors Slow",
        descriptionLong: "Demon Warriors and Lieutenants gain 25% increased Health. Demon Warriors Slow nearby enemies by 20%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_summondemonwarrior.png",
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
          "AzmodanSummonDemonWarrior"
        ]
      },
      {
        id: "AzmodanCydaeasKiss",
        name: "Cydaea's Kiss",
        descriptionShort: "Reduce All Shall Burn Channel, final damage heals",
        descriptionLong: "Reduces the Channel time of All Shall Burn by 0.5 seconds. If All Shall Burn's Channel kills or lasts its full duration against a Hero, Azmodan is healed for 8% of his maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_allshallburn.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 1.6,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "AzmodanAllShallBurn"
        ]
      },
      {
        id: "AzmodanChainOfCommand",
        name: "Chain of Command",
        descriptionShort: "Demon Lieutenants empower nearby allies",
        descriptionLong: "The cooldown of Demon Lieutenants' Demonic Smite is reduced by 2 seconds and they grant 25% increased damage to nearby friendly Minions, Mercenaries, and Azmodan's summoned Demons.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_generalofhell.png",
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
          "AzmodanDemonLieutenant"
        ]
      }
    ],
    [
      {
        id: "AzmodanTotalAnnihilation",
        name: "Total Annihilation",
        descriptionShort: "Increase Globe damage to Heroes",
        descriptionLong: "Globe of Annihilation damages Heroes for an additional 4% of their maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_globeofannihilation.png",
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
          "AzmodanGlobeOfAnnihilation"
        ]
      },
      {
        id: "AzmodanHellRift",
        name: "Hell Rift",
        descriptionShort: "All Shall Burn summons and buffs Demon Warriors",
        descriptionLong: "If All Shall Burn Channels for its full duration or kills the target, a Demon Warrior is summoned at the target's location and all Demon Warriors deal 75% increased damage for 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_allshallburn.png",
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
          "AzmodanAllShallBurn"
        ]
      },
      {
        id: "AzmodanTrample",
        name: "Trample",
        descriptionShort: "Charge a short distance",
        descriptionLong: "Activate to charge a short distance, dealing 275 (+4% / level) damage and Slowing enemies caught in the path by 60% for 1.25 second.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_trample.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 55
        },
        order: 3,
        tier: "level16"
      }
    ],
    [
      {
        id: "AzmodanSiegebreaker",
        name: "Siegebreaker",
        descriptionShort: "Demons deal more Structure damage",
        descriptionLong: "Azmodan's Demons deal 40% increased damage to Structures.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_demonicinvasion.png",
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
          "AzmodanDemonicInvasion"
        ],
        prerequisiteTalentIds: [
          "AzmodanHeroicAbilityDemonicInvasion"
        ]
      },
      {
        id: "AzmodanBlackPool",
        name: "Black Pool",
        descriptionShort: "Tide of Sin damages and reduces Armor over time",
        descriptionLong: "Globes of Annihilation empowered by Tide of Sin also leave a Black Pool at their impact location for 5 seconds. Enemies within the pool lose 8 Armor per second, up to 15, and take 56 (+4% / level) damage per second.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_blackpool.png",
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
          "AzmodanTideOfSinPassive",
          "AzmodanTideOfSin"
        ],
        prerequisiteTalentIds: [
          "AzmodanTideOfSin"
        ]
      },
      {
        id: "AzmodanPride",
        name: "Pride",
        descriptionShort: "Max Annihilation empowers Globe",
        descriptionLong: "After gaining 400 Annihilation, the area of Globe of Annihilation is increased by 15% and it deals 125 additional damage.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_globeofannihilation.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 25
        },
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "AzmodanGlobeOfAnnihilation"
        ]
      },
      {
        id: "AzmodanSinsGrasp",
        name: "Sin's Grasp",
        descriptionShort: "All Shall Burn Slows, reduce cooldown",
        descriptionLong: "All Shall Burn Slows enemy Heroes by 15% during its Channel. If All Shall Burn Channels for its full duration or kills an enemy Hero, its cooldown is reduced by 50%, and the target is Slowed by 50% for 2.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_azmodan_allshallburn.png",
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
          "AzmodanAllShallBurn"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 74.25084745762712,
    physicalDamage: 42.5,
    mobility: 24.006944444444446,
    healing: 0,
    magicalDamage: 51.36316171796969
  }
};
      
export default azmodan;