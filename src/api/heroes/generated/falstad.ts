import { Hero } from '../heroes';
      
const falstad: Hero = {
  name: "Falstad",
  nameNormalized: "falstad",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.8125,
  movementSpeed: 4.8398,
  health: {
    amount: 1365,
    scale: 0.04,
    regenRate: 2.8437,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroFalstad",
      range: 5.5,
      period: 0.7,
      damage: 104,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/falstad.png",
  abilities: [
    {
      id: "FalstadTailwindCooldownDisplay",
      name: "Tailwind",
      descriptionShort: "After not taking damage for a brief period, gain increased Movement Speed",
      descriptionLong: "Gain 15% increased Movement Speed after not taking damage for 6 seconds.",
      cooldown: 6,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_tailwind.png",
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
      id: "FalstadFlight",
      name: "Flight",
      descriptionShort: "Instead of mounting, Falstad can fly a great distance over terrain",
      descriptionLong: "Instead of mounting, Falstad can fly a great distance over terrain.",
      cooldown: 75,
      category: "mount",
      type: "Z",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_mount.png",
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
      id: "FalstadHammerang",
      name: "Hammerang",
      descriptionShort: "Throw out a Hammer that returns and explodes",
      descriptionLong: "Throw out a Hammer that returns to Falstad, dealing 80 (+4% / level) damage and Slowing enemies hit by 25% for 2 seconds. Reactive to explode the Hammer, dealing 95 (+4% / level) damage to nearby enemies.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 10,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_hammerang.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 17.5
      }
    },
    {
      id: "FalstadLightningRod",
      name: "Lightning Rod",
      descriptionShort: "Deal damage to target enemy while staying close to them",
      descriptionLong: "Deal 107 (+4% / level) damage to an enemy, and an additional 75 (+4% / level) damage per second for 4 seconds while close to the target. Deals 100% increased damage to Minions and Mercenaries.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 13,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_lightningrod.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 8.230769230769232
      }
    },
    {
      id: "FalstadBarrelRoll",
      name: "Barrel Roll",
      descriptionShort: "Dash to a location and gain a temporary shield",
      descriptionLong: "Dashes forward and grants a 171 (+4% / level) point Shield for 3 seconds.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 13,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_barrelroll.png",
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
      id: "FalstadMightyGust",
      name: "Mighty Gust",
      descriptionShort: "Push away enemies and slow them",
      descriptionLong: "Push enemies away, and slow their Movement Speed by 40% decaying over 4 seconds.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_mightygust.png",
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
      id: "FalstadHinterlandBlast",
      name: "Hinterland Blast",
      descriptionShort: "Long range damage beam",
      descriptionLong: "After 1 second, deal 475~~0.0475~~ damage to enemies within a long line. The cooldown is reduced by 30 seconds for every enemy Hero hit.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 120,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_hinterlandblast.png",
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
        id: "FalstadHammerangGatheringStorm",
        name: "Gathering Storm",
        descriptionShort: "Quest: Increase Hammerang damage",
        descriptionLong: "Quest: Every time Hammerang hits a Hero increase its damage by 0.5% and refund 6 Mana. Reward: After hitting 30 Heroes with Hammerang, increase its damage by 15%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_hammerang.png",
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
          "FalstadHammerang"
        ],
        isQuest: true
      },
      {
        id: "FalstadLightningRodDishonorableDischarge",
        name: "Dishonorable Discharge",
        descriptionShort: "Quest: Increase Lightning Rod damage",
        descriptionLong: "Reduce Lightning Rod's cooldown by 2 seconds. Quest: After 3 Lightning Rod strikes, subsequent strikes on enemy Heroes increases its damage by 0.75%, up to 75%. Reward: After 30 subsequent strikes, further reduce Lightning Rod's cooldown by 2 seconds. Reward:After 100 subsequent strikes, Takedowns reset Lightning Rod's cooldown.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_lightningrod.png",
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
          "FalstadLightningRod"
        ],
        isQuest: true
      },
      {
        id: "FalstadTailwindFrequentFlyer",
        name: "Frequent Flyer",
        descriptionShort: "Activate to gain Attack Speed, TailwindQuest: Killing enemies grants Basic Attack damage",
        descriptionLong: "Activate Frequent Flyer to gain 40% Attack Speed and Tailwind for 4 seconds. Quest: Minion kills grant 0.2 Basic Attack Damage. Hero Takedowns grant 0.5 Basic Attack Damage.",
        cooldown: 45,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_tailwind_a.png",
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
        id: "FalstadMasteryLightningRodStaticShield",
        name: "Static Shield",
        descriptionShort: "Lightning Rod strikes grants Shields",
        descriptionLong: "Lightning Rod strikes grant a Shield equal to 4% of Falstad's maximum Health, up to 28%, for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_lightningrod.png",
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
          "FalstadLightningRod"
        ]
      },
      {
        id: "FalstadMasteryUpdraftBarrelRoll",
        name: "Updraft",
        descriptionShort: "Increases Barrel Roll range, Shield",
        descriptionLong: "Increases Barrel Roll's range by 40% and Shield amount by 70%, and its Shield now lasts indefinitely.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_barrelroll.png",
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
          "FalstadBarrelRoll"
        ]
      },
      {
        id: "FalstadTalentHammerGains",
        name: "Hammer Gains",
        descriptionShort: "Basic Attacks heal",
        descriptionLong: "Basic Attacks heal for 20% of the damage dealt to the primary target.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_heal.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 2.6666666666666665,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4"
      }
    ],
    [
      {
        id: "FalstadMasteryHammerangSecretWeapon",
        name: "Secret Weapon",
        descriptionShort: "Increases Hammerang range, Basic Attack damage",
        descriptionLong: "Increases Hammerang's range by 30% and Basic Attacks deal 75% bonus damage while Hammerang is in flight.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_hammerang.png",
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
          "FalstadHammerang"
        ]
      },
      {
        id: "FalstadHammerangBOOMerang",
        name: "BOOMerang",
        descriptionShort: "Increase Hammerang's explosion damage",
        descriptionLong: "Hammerang's explosion deals 100% additional damage, and hitting enemy Heroes reduces their Spell Armor by 15 for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_hammerang_a.png",
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
          "FalstadHammerang"
        ]
      },
      {
        id: "FalstadMasteryLightningRodChargedUp",
        name: "Charged Up",
        descriptionShort: "Increases Lightning Rod strikes and range",
        descriptionLong: "Increases the number of Lightning Rod strikes by 2 and its range by 25%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_lightningrod.png",
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
          "FalstadLightningRod"
        ]
      }
    ],
    [
      {
        id: "FalstadHeroicAbilityHinterlandBlast",
        name: "Hinterland Blast",
        descriptionShort: "Long range damage beam",
        descriptionLong: "After 1 second, deal 475~~0.0475~~ damage to enemies within a long line. The cooldown is reduced by 30 seconds for every enemy Hero hit.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 120,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_hinterlandblast.png",
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
          "FalstadHinterlandBlast"
        ]
      },
      {
        id: "FalstadHeroicAbilityMightyGust",
        name: "Mighty Gust",
        descriptionShort: "Push away enemies and slow them",
        descriptionLong: "Push enemies away, and slow their Movement Speed by 40% decaying over 4 seconds.",
        cost: {
          type: "Mana",
          amount: 70
        },
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_mightygust.png",
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
          "FalstadMightyGust"
        ]
      }
    ],
    [
      {
        id: "FalstadMasteryLightningRodThunderstrikes",
        name: "Thunderstrikes",
        descriptionShort: "Lightning Rod deals increasing damage",
        descriptionLong: "Lightning Rod deals 25% more damage each subsequent strike.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_lightningrod.png",
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
          "FalstadLightningRod"
        ]
      },
      {
        id: "FalstadMasteryBarrelRollFlowRider",
        name: "Flow Rider",
        descriptionShort: "Tailwind recharges Basic Abilities faster",
        descriptionLong: "While Tailwind is active, Falstad's Basic Abilities recharge 100% faster.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_tailwind.png",
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
          "FalstadTailwindCooldownDisplay"
        ]
      },
      {
        id: "FalstadTailwindSustainedWinds",
        name: "Sustained Winds",
        descriptionShort: "Increase Basic Attacks against Heroes",
        descriptionLong: "Basic Attacks against enemy Heroes deal bonus damage equal to 1.5% of the Hero's maximum Health, increased to 2% while Tailwind is active.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_tailwind_a.png",
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
          "FalstadTailwindCooldownDisplay"
        ]
      }
    ],
    [
      {
        id: "FalstadMasteryCripplingHammerHammerang",
        name: "Crippling Hammer",
        descriptionShort: "Increases Hammerang Slow, explosion Slows",
        descriptionLong: "Increase Hammerang's Slow from 25% to 50%, and Hammerang's explosion also Slows.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_hammerang.png",
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
          "FalstadHammerang"
        ]
      },
      {
        id: "FalstadMasteryAerieGustsTailwind",
        name: "Aerie Gusts",
        descriptionShort: "Reduce Tailwind delay, increase Move Speed",
        descriptionLong: "Reduces the activation time for Tailwind from 6 to 3 seconds, and increases the Movement Speed bonus from 15% to 25%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_tailwind.png",
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
          "FalstadTailwindCooldownDisplay"
        ]
      },
      {
        id: "FalstadMasteryAfterburner",
        name: "Afterburner",
        descriptionShort: "Barrel Roll increases Move Speed",
        descriptionLong: "Barrel Roll increases Movement Speed by 60%, decaying over 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_barrelroll.png",
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
          "FalstadBarrelRoll"
        ]
      }
    ],
    [
      {
        id: "FalstadMasteryCalloftheWildhammerHinterlandBlast",
        name: "Call of the Wildhammer",
        descriptionShort: "Increases Hinterland Blast range and damage",
        descriptionLong: "Hinterland Blast has double the range and deals 25% more damage.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_hinterlandblast.png",
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
          "FalstadHinterlandBlast"
        ],
        prerequisiteTalentIds: [
          "FalstadHeroicAbilityHinterlandBlast"
        ]
      },
      {
        id: "FalstadMasteryMightyGustWindTunnel",
        name: "Wind Tunnel",
        descriptionShort: "Mighty Gust constantly knocks back",
        descriptionLong: "Mighty Gust creates a wind tunnel for 4 seconds. Enemies caught in the tunnel will periodically be pushed back.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_mightygust.png",
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
          "FalstadMightyGust"
        ],
        prerequisiteTalentIds: [
          "FalstadHeroicAbilityMightyGust"
        ]
      },
      {
        id: "GenericTalentNexusFrenzy",
        name: "Nexus Frenzy",
        descriptionShort: "Increases Attack Speed and Range",
        descriptionLong: "Increases Attack Speed by 20% and Attack Range by 1.1.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_range.png",
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
        id: "FalstadMasteryFlightEpicMount",
        name: "Epic Mount",
        descriptionShort: "Reduces Flight cooldown and delay",
        descriptionLong: "Reduce the cooldown of Flight by 50 seconds, reduce the cast time before flying to 0.5 seconds, and increase the speed by 50%.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_falstad_epicmount.png",
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
          "FalstadFlight"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 41.12994350282486,
    physicalDamage: 74.28571428571429,
    mobility: 24.199,
    healing: 0,
    magicalDamage: 11.389948242985563
  }
};
      
export default falstad;