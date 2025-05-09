import { Hero } from '../heroes';
      
export const alarak: Hero = {
  name: "Alarak",
  nameNormalized: "alarak",
  franchise: "Starcraft",
  gender: "Male",
  size: 0.8125,
  movementSpeed: 4.8398,
  health: {
    amount: 1950,
    scale: 0.04,
    regenRate: 4.0585,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroWeaponAlarak",
      range: 1.5,
      period: 0.8332,
      damage: 150,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/alarak.png",
  abilities: [
    {
      id: "AlarakSadism",
      name: "Sadism",
      descriptionShort: "Each point of Sadism increases Alarak's Ability damage and self-healing against enemy Heroes by 1%Repeatable Quest: Takedowns increase Sadism by 3%, up to 30%. Sadism gained from Takedowns is lost on death.",
      descriptionLong: "Alarak's Ability damage and self-healing are increased by 100% against enemy Heroes. Repeatable Quest: Takedowns increase Sadism by 3%, up to 30%. Sadism gained from Takedowns is lost on death.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_sadism.png",
      isPassive: true,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 20,
        magicalDamage: 0
      }
    },
    {
      id: "AlarakDiscordStrike",
      name: "Discord Strike",
      descriptionShort: "Damage and silence enemies in an area",
      descriptionLong: "After a 0.5 second delay, enemies in front of Alarak take 165 (+4% / level) damage and are silenced for 1.5 seconds.",
      cost: {
        type: "Mana",
        amount: 55
      },
      cooldown: 8,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_discordstrike.png",
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
      id: "AlarakTelekinesis",
      name: "Telekinesis",
      descriptionShort: "Push enemies towards a location",
      descriptionLong: "Vector TargetingCreate a force, pushing Alarak and all enemies hit from the targeted point towards the targeted direction. Deals 48 (+4% / level) damage to enemies.",
      cost: {
        type: "Mana",
        amount: 30
      },
      cooldown: 12,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_telekinesis.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 12
      }
    },
    {
      id: "AlarakLightningSurge",
      name: "Lightning Surge",
      descriptionShort: "Damage enemies in a line",
      descriptionLong: "Deal 62 (+4% / level) damage to an enemy and an additional 100% damage to enemies between Alarak and the target. Restore 70 (+4% / level) health for each Hero hit.",
      cost: {
        type: "Mana",
        amount: 25
      },
      cooldown: 6,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_lightningsurge.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 31
      }
    },
    {
      id: "AlarakDeadlyChargeActivate",
      name: "Deadly Charge",
      descriptionShort: "Channel to charge a long distance",
      descriptionLong: "After channeling, Alarak charges forward dealing 200 (+4% / level) damage to all enemies in his path. Distance is increased based on the amount of time channeled, up to 1.5 seconds. Issuing a Move order while this is channeling will cancel it at no cost. Taking damage will interrupt the channeling.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 45,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_recklesscharge.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 40
      }
    },
    {
      id: "AlarakCounterStrikeTargeted",
      name: "Counter-Strike",
      descriptionShort: "Prevents damage to deal damage in a large area",
      descriptionLong: "Alarak targets an area and channels for 1 second, becoming Protected and Unstoppable. After, if he took damage from an enemy Hero, he sends a shockwave that deals 275 (+4% / level) damage.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 30,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_counterstrike.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 55
      }
    }
  ],
  talents: [
    [
      {
        id: "AlarakOverwhelmingPowerDiscordStrike",
        name: "Overwhelming Power",
        descriptionShort: "Discord Strike grants Attack Speed, Lifesteal",
        descriptionLong: "Hitting an enemy Hero with Discord Strike grants 40% Attack Speed and causes Basic Attacks to heal for 50% of the damage dealt for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_discordstrike.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 8,
          magicalDamage: 0
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "AlarakDiscordStrike"
        ]
      },
      {
        id: "AlarakRuthlessMomentum",
        name: "Ruthless Momentum",
        descriptionShort: "Reduce cooldown at high Health",
        descriptionLong: "Reduce the Mana cost of Telekinesis from 30 to 20. Telekinesis's cooldown recharges 100% faster while above 80% Health.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_telekinesis.png",
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
          "AlarakTelekinesis",
          "AlarakDeadlyChargeActivate2ndHeroic",
          "AlarakCounterStrikeTargeted2ndHeroic",
          "AlarakSadism"
        ]
      },
      {
        id: "AlarakExtendedLightning",
        name: "Extended Lightning",
        descriptionShort: "Quest: Reduce Sadism, empower Lightning Surge",
        descriptionLong: "Reduce Sadism by 10%. Quest: Hit Heroes with the center of Lightning Surge. Reward: After hitting 5 Heroes, increase Lightning Surge's range by 20%. Reward: After hitting 15 Heroes, Lightning Surge's center also Slows enemies by 40% for 2 seconds. Reward: After hitting 3 Heroes with the center of a single cast, increase Sadism by 10% and instantly gain all other Rewards.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_lightningsurge.png",
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
          "AlarakLightningSurgeLightningBarrage",
          "AlarakLightningSurge"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "AlarakChaosReigns",
        name: "Chaos Reigns",
        descriptionShort: "Quest: Hit Heroes to increase Discord Strike damage",
        descriptionLong: "Quest: Hit Heroes with Discord Strike. Reward: After hitting 15 Heroes, increase Discord Strike's damage by 60. Reward: After hitting 2 Heroes with a single Discord Strike, increase its damage by 60. Reward: After hitting 3 Heroes with a single Discord Strike, increase its damage by 100 and instantly gain all other Rewards.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_discordstrike.png",
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
          "AlarakDiscordStrike"
        ],
        isQuest: true
      },
      {
        id: "AlarakNegativelyCharged",
        name: "Negatively Charged",
        descriptionShort: "Quest: Increase Lightning Surge center damage",
        descriptionLong: "Increase the Lightning Surge damage bonus to enemies between Alarak and his victim to 175%. Repeatable Quest: Each Hero hit by the center of Lightning Surge permanently increases the damage bonus by 5%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_lightningsurge.png",
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
          "AlarakLightningSurgeLightningBarrage",
          "AlarakLightningSurge"
        ],
        isQuest: true
      },
      {
        id: "AlarakShowofForce",
        name: "Show of Force",
        descriptionShort: "Ability combos deal bonus damage, grant Sadism",
        descriptionLong: "Heroes hit with 3 of Alarak's Abilities within 2 seconds take an additional 61 (+4% / level) damage and increase Sadism by 2%, stacking up to 20%. Sadism gained from Show of Force is lost on death.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_sadism.png",
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
          "AlarakDeadlyChargeActivate2ndHeroic",
          "AlarakCounterStrikeTargeted2ndHeroic",
          "AlarakSadism"
        ]
      }
    ],
    [
      {
        id: "AlarakDissonance",
        name: "Dissonance",
        descriptionShort: "Increase Discord Strike's Silence duration",
        descriptionLong: "Increase Discord Strike's Silence duration by 0.75 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_discordstrike.png",
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
          "AlarakDiscordStrike"
        ]
      },
      {
        id: "AlarakHinderedMotion",
        name: "Hindered Motion",
        descriptionShort: "Telekinesis Slows",
        descriptionLong: "Telekinesis Slows enemies by 30% for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_telekinesis_a.png",
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
          "AlarakTelekinesis"
        ]
      },
      {
        id: "AlarakAppliedForce",
        name: "Applied Force",
        descriptionShort: "Reduce Sadism, increase Telekinesis distance, range",
        descriptionLong: "Reduce Sadism by 10%, but Telekinesis pushes 20% further and has 20% increased range.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_telekinesis.png",
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
          "AlarakTelekinesis"
        ]
      }
    ],
    [
      {
        id: "AlarakDeadlyChargeFirstHeroic",
        name: "Deadly Charge",
        descriptionShort: "Channel to charge a long distance",
        descriptionLong: "After channeling, Alarak charges forward dealing 200 (+4% / level) damage to all enemies in his path. Distance is increased based on the amount of time channeled, up to 1.5 seconds. Issuing a Move order while this is channeling will cancel it at no cost. Taking damage will interrupt the channeling.",
        cost: {
          type: "Mana",
          amount: 60
        },
        cooldown: 45,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_recklesscharge.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 40
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "AlarakDeadlyChargeActivate"
        ]
      },
      {
        id: "AlarakHeroicAbilityCounterStrike",
        name: "Counter-Strike",
        descriptionShort: "Prevents damage to deal damage in a large area",
        descriptionLong: "Alarak targets an area and channels for 1 second, becoming Protected and Unstoppable. After, if he took damage from an enemy Hero, he sends a shockwave that deals 275 (+4% / level) damage.",
        cost: {
          type: "Mana",
          amount: 50
        },
        cooldown: 30,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_counterstrike.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 55
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "AlarakCounterStrikeTargeted"
        ]
      }
    ],
    [
      {
        id: "AlarakBladeoftheHighlord",
        name: "Blade of the Highlord",
        descriptionShort: "Basic Attacks increase Sadism",
        descriptionLong: "Basic Attacks against Heroes increase Sadism by 2% stacking up to 40%. Sadism gained from Blade of the Highlord is lost on death.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_sadism.png",
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
          "AlarakDeadlyChargeActivate2ndHeroic",
          "AlarakCounterStrikeTargeted2ndHeroic",
          "AlarakSadism"
        ]
      },
      {
        id: "AlarakPureMalice",
        name: "Pure Malice",
        descriptionShort: "Allied deaths increase Sadism",
        descriptionLong: "Increase Sadism by 10% any time an allied Hero dies, up to 40%. Sadism gained from Pure Malice is lost on death.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_sadism_a.png",
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
          "AlarakDeadlyChargeActivate2ndHeroic",
          "AlarakCounterStrikeTargeted2ndHeroic",
          "AlarakSadism"
        ]
      },
      {
        id: "AlarakRiteofRakShir",
        name: "Rite of Rak'Shir",
        descriptionShort: "Mark and damage Hero to increase Sadism",
        descriptionLong: "Activate to mark an enemy Hero for 300 seconds. Hitting the marked Hero with Discord Strike increases Sadism by 3%. Killing the marked Hero increases Sadism by 5% and lowers the cooldown of Rite of Rak'Shir to 10 seconds. Sadism gained from Rite of Rak'Shir is lost on death.",
        cooldown: 300,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_sadism_b.png",
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
        id: "AlarakLethalOnslaughtDiscordStrike",
        name: "Lethal Onslaught",
        descriptionShort: "Discord Strike grants Sadism bonus to Basic Attacks",
        descriptionLong: "Hitting an enemy Hero with Discord Strike grants 50% of Sadism's damage bonus to Alarak's Basic Attacks for 4 seconds. Basic Attacks against Heroes refresh this duration.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_discordstrike.png",
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
          "AlarakDiscordStrike"
        ]
      },
      {
        id: "AlarakLightningBarrage",
        name: "Lightning Barrage",
        descriptionShort: "Center hits grant free Lightning Surge cast",
        descriptionLong: "Hitting an enemy Hero with the center of Lightning Surge allows it to be cast again for free on a different primary target within the next 3 seconds. This free cast cannot benefit from Lightning Barrage.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_lightningsurge.png",
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
          "AlarakLightningSurgeLightningBarrage",
          "AlarakLightningSurge"
        ]
      },
      {
        id: "AlarakMockingStrikes",
        name: "Mocking Strikes",
        descriptionShort: "Reduce cooldowns against disabled Heroes",
        descriptionLong: "Basic Attacks against enemy Heroes reduce the cooldown of Alarak's Basic Abilities by 1.5 seconds. This bonus is doubled against enemy Heroes who are Stunned, Silenced, Slowed, or Rooted.",
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
        tier: "level16",
        linkedAbilityIds: [
          "AlarakDeadlyChargeActivate2ndHeroic",
          "AlarakCounterStrikeTargeted2ndHeroic",
          "AlarakSadism"
        ]
      }
    ],
    [
      {
        id: "AlarakCounterStrikeItem",
        name: "Counter-Strike",
        descriptionShort: "Prevents damage to deal damage in a large area",
        descriptionLong: "Alarak targets an area and channels for 1 second, becoming Protected and Unstoppable. After, if he took damage from an enemy Hero, he sends a shockwave that deals 275 (+4% / level) damage. This ability will take over Alarak's Trait button.",
        cost: {
          type: "Mana",
          amount: 50
        },
        cooldown: 30,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_counterstrike.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 55
        },
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "AlarakCounterStrikeTargeted"
        ],
        prerequisiteTalentIds: [
          "AlarakDeadlyChargeFirstHeroic"
        ]
      },
      {
        id: "AlarakDeadlyChargeSecondHeroic",
        name: "Deadly Charge",
        descriptionShort: "Channel to charge a long distance",
        descriptionLong: "After channeling, Alarak charges forward dealing 200 (+4% / level) damage to all enemies in his path. Distance is increased based on the amount of time channeled, up to 1.5 seconds. Issuing a Move order while this is channeling will cancel it at no cost. Taking damage will interrupt the channeling.",
        cost: {
          type: "Mana",
          amount: 60
        },
        cooldown: 45,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_recklesscharge.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 40
        },
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "AlarakDeadlyChargeActivate"
        ],
        prerequisiteTalentIds: [
          "AlarakHeroicAbilityCounterStrike"
        ]
      },
      {
        id: "AlarakLastLaugh",
        name: "Last Laugh",
        descriptionShort: "Cleanse and teleport, but reduce Health",
        descriptionLong: "Activate to teleport to the chosen location and remove all Roots, Slows, and damage over time effects. If Alarak fails to hit enemy Heroes 3 times with Basic Abilities within 4 seconds of using Last Laugh, his Health is reduced to 1.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_lasttrick.png",
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
        id: "AlarakHastyBargain",
        name: "Hasty Bargain",
        descriptionShort: "Activate to reduce Sadism bonus and reset Basic Ability cooldowns",
        descriptionLong: "Activate to permanently reduce Alarak's Sadism by 4% and reset the cooldowns of his Basic Abilities.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alarak_hastybargain.png",
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
    tankiness: 58.75706214689266,
    physicalDamage: 90.01440230436869,
    mobility: 24.006944444444446,
    healing: 4.858496295396575,
    magicalDamage: 5.098271021131963
  }
};
