import { Hero } from '../heroes';
      
const diablo: Hero = {
  name: "Diablo",
  nameNormalized: "diablo",
  franchise: "Diablo",
  gender: "Male",
  size: 1.1875,
  movementSpeed: 4.8398,
  health: {
    amount: 2825,
    scale: 0.04,
    regenRate: 5.8867,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroDiablo",
      range: 1.25,
      period: 1.05,
      damage: 105,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/diablo.png",
  abilities: [
    {
      id: "DiabloBlackSoulstone",
      name: "Black Soulstone",
      descriptionShort: "Gather souls from enemies to gain Health and resurrect faster",
      descriptionLong: "Repeatable Quest: Gain 10 Souls per Hero killed and 1 Soul per Minion, up to 100. For each Soul, gain 0.3% maximum Health. If Diablo has 100 Souls upon dying, he will resurrect in 5 seconds but lose 100 Souls.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_blacksoulstone_var1.png",
      isPassive: true
    },
    {
      id: "DiabloShadowCharge",
      name: "Shadow Charge",
      descriptionShort: "Charge to a target enemy and push them back",
      descriptionLong: "Charge an enemy, knocking them back, dealing 40 (+4% / level) damage and gaining 15% Movement Speed for 2 seconds. If the enemy hits terrain, they are Stunned for 1 second and take an additional 130 (+4% / level) damage.",
      cost: {
        type: "Mana",
        amount: 65
      },
      cooldown: 12,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_shadowcharge_var1.png",
      isPassive: false
    },
    {
      id: "DiabloFireStomp",
      name: "Fire Stomp",
      descriptionShort: "Unleash fire waves in a direction",
      descriptionLong: "Unleashes fire waves toward the targeted area that deal 12 (+4% / level) damage each. Once they reach maximum range they return, dealing an additional 36 (+4% / level) damage. Diablo heals for 130% of the damage dealt to Heroes.",
      cost: {
        type: "Mana",
        amount: 35
      },
      cooldown: 8,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_firestomp.png",
      isPassive: false
    },
    {
      id: "DiabloOverpower",
      name: "Overpower",
      descriptionShort: "Grab an enemy and slam them behind Diablo, stunning them and dealing damage",
      descriptionLong: "Grabs the target and slams it behind Diablo, dealing 73 (+4% / level) damage and Stunning for 0.25 seconds.",
      cost: {
        type: "Mana",
        amount: 35
      },
      cooldown: 12,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 2
      },
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_overpower_var1.png",
      isPassive: false
    },
    {
      id: "DiabloApocalypse",
      name: "Apocalypse",
      descriptionShort: "Stun all enemy Heroes",
      descriptionLong: "Create a demonic rune under each enemy Hero on the battleground. After 1.75 seconds the rune explodes dealing 137 (+4% / level) damage and Stunning them for 1.75 seconds.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 90,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_apocalypse.png",
      isPassive: false
    },
    {
      id: "DiabloLightningBreath",
      name: "Lightning Breath",
      descriptionShort: "Damage and Slow enemies in front of Diablo",
      descriptionLong: "After 0.5 seconds, become Unstoppable and Channel for up to 4 seconds, dealing 50 (+4% / level) damage every 0.25 seconds to enemies in front of Diablo. Enemies affected are Slowed by 4% for 2 seconds, up to 40%. Lightning Breath's direction changes with your mouse cursor position.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 90,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_lightningbreath.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "DiabloMasteryFeastOnFearBlackSoulstone",
        name: "Feast on Fear",
        descriptionShort: "Shadow Charge, Overpower heal",
        descriptionLong: "Stunning an enemy Hero with Shadow Charge or Overpower heals Diablo for 10% of his maximum Health over 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_combo_1.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "DiabloShadowCharge",
          "DiabloOverpower"
        ]
      },
      {
        id: "DiabloMasteryDevilsDueBlackSoulstone",
        name: "Devil's Due",
        descriptionShort: "Souls empower Regen Globes, Healing Fountains",
        descriptionLong: "Black Soulstone increases the effects of Regen Globes and Healing Fountains by 2.25% per Soul.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_blacksoulstone_var1.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "DiabloBlackSoulstone"
        ]
      },
      {
        id: "DiabloSoulShield",
        name: "Soul Shield",
        descriptionShort: "Activate to gain Spell Armor per Soul",
        descriptionLong: "Activate to gain 25 plus 50% of Diablo's current Souls as Spell Armor for 4 seconds. Every time Diablo damages an enemy Hero, reduce this cooldown by 1 second.",
        cooldown: 45,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_spellshield.png",
        isPassive: false,
        order: 3,
        tier: "level1"
      }
    ],
    [
      {
        id: "DiabloShadowChargeSacrificialSoul",
        name: "Sacrificial Soul",
        descriptionShort: "Shadow Charge grants Souls and Armor",
        descriptionLong: "Stunning a Hero with Shadow Charge grants 10 Souls and 20 Armor for 3 seconds. While at 100 Souls, increase this Armor to 40.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_shadowcharge_var1.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "DiabloShadowCharge"
        ]
      },
      {
        id: "DiabloFireStompSoulsToTheFlame",
        name: "Souls to the Flame",
        descriptionShort: "Fire Stomp grants Souls and heals more",
        descriptionLong: "Fire Stomp grants 1 Soul every 3 times it damages an enemy Hero, and heals for an additional 1.3% of its damage dealt per Soul.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_firestomp.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "DiabloFireStomp"
        ]
      },
      {
        id: "DiabloLifeLeech",
        name: "Life Leech",
        descriptionShort: "Basic Attacks grant Souls and heal",
        descriptionLong: "Diablo gains 1 Soul and heals for 1.75% of his maximum Health when Basic Attacking an enemy Hero. While at 100 Souls, increase this healing to 3.5% of his maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_heal.png",
        isPassive: false,
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "DiabloBlackSoulstone"
        ]
      }
    ],
    [
      {
        id: "DiabloShadowChargeOverpowerEternalFlames",
        name: "Eternal Flames",
        descriptionShort: "Shadow Charge, Overpower reset Fire Stomp",
        descriptionLong: "Reduce the cooldown of Fire Stomp by 1 second. When Diablo Stuns an enemy Hero with Shadow Charge or Overpower, reset the cooldown of Fire Stomp and restore 45 Mana.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_firestomp.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "DiabloFireStomp"
        ]
      },
      {
        id: "DiabloMalevolence",
        name: "Malevolence",
        descriptionShort: "Abilities increase Basic Attack damage",
        descriptionLong: "Basic Abilities cause Diablo's next Basic Attack within 6 seconds to deal an additional 100 (+4% / level) Spell Damage. Stores up to 2 charges.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_damage.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "DiabloBlackSoulstone"
        ]
      },
      {
        id: "DiabloDiabolicalMomentum",
        name: "Diabolical Momentum",
        descriptionShort: "Basic Attacks reduce Ability cooldowns",
        descriptionLong: "When Diablo's Basic Attacks damage enemies, reduce the cooldown of Shadow Charge and Overpower by 1.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_combo_1.png",
        isPassive: false,
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "DiabloBlackSoulstone"
        ]
      }
    ],
    [
      {
        id: "DiabloHeroicAbilityApocalypse",
        name: "Apocalypse",
        descriptionShort: "Stun all enemy Heroes",
        descriptionLong: "Create a demonic rune under each enemy Hero on the battleground. After 1.75 seconds the rune explodes dealing 137 (+4% / level) damage and Stunning them for 1.75 seconds.",
        cost: {
          type: "Mana",
          amount: 50
        },
        cooldown: 90,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_apocalypse.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "DiabloApocalypse"
        ]
      },
      {
        id: "DiabloHeroicAbilityLightningBreath",
        name: "Lightning Breath",
        descriptionShort: "Damage and Slow enemies in front of Diablo",
        descriptionLong: "After 0.5 seconds, become Unstoppable and Channel for up to 4 seconds, dealing 50 (+4% / level) damage every 0.25 seconds to enemies in front of Diablo. Enemies affected are Slowed by 4% for 2 seconds, up to 40%. Lightning Breath's direction changes with your mouse cursor position.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 90,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_lightningbreath.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "DiabloLightningBreath"
        ]
      }
    ],
    [
      {
        id: "DiabloDevastatingCharge",
        name: "Devastating Charge",
        descriptionShort: "Quest: Shadow Charge reduces Armor",
        descriptionLong: "Increase Shadow Charge's terrain collision damage by 50%.Quest: Hit an enemy Hero against terrain 5 times.Reward: Hitting enemy Heroes against terrain reduces their Armor by 15 for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_shadowcharge_var1.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "DiabloShadowCharge"
        ],
        isQuest: true
      },
      {
        id: "DiabloHellfire",
        name: "Hellfire",
        descriptionShort: "Fire Stomp grants Spell Power",
        descriptionLong: "Each enemy Hero hit by Fire Stomp grants 3% Spell Power for 10 seconds, up to 30%.  While at maximum stacks, Diablo deals 30 (+4% / level) damage per second to nearby enemies.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_firestomp.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "DiabloFireStomp"
        ]
      },
      {
        id: "DiabloShadowChargeOverpowerCruelty",
        name: "Cruelty",
        descriptionShort: "Shadow Charge, Overpower grant Attack Speed",
        descriptionLong: "Stunning an enemy Hero with Shadow Charge or Overpower increases Diablo's Attack Speed by 50% for 7 seconds, up to 100%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_combo_1.png",
        isPassive: false,
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "DiabloShadowCharge",
          "DiabloOverpower"
        ]
      }
    ],
    [
      {
        id: "DiabloTalentDominationOverpower",
        name: "Domination",
        descriptionShort: "Overpower resets cooldown of Shadow Charge",
        descriptionLong: "Casting Overpower resets the cooldown of Shadow Charge.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_shadowcharge_var1.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "DiabloShadowCharge",
          "DiabloOverpower"
        ]
      },
      {
        id: "DiabloDebilitatingFlames",
        name: "Debilitating Flames",
        descriptionShort: "Fire Stomp weakens enemy Heroes",
        descriptionLong: "Enemy Heroes hit by Fire Stomp are Slowed by 6% for 4 seconds, up to 60%. Heroes Slowed by 24% or more by Debilitating Flames deal 50% less damage.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_firestomp.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "DiabloFireStomp"
        ]
      },
      {
        id: "DiabloOverpowerOverpoweringNightmare",
        name: "Overpowering Nightmare",
        descriptionShort: "Gain charges of Overpower",
        descriptionLong: "Gain 2 additional charges of Overpower, with a 2 second cooldown between uses.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 2
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_overpower_var1.png",
        isPassive: false,
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "DiabloOverpower"
        ]
      }
    ],
    [
      {
        id: "DiabloMasteryDyingBreathApocalypse",
        name: "Dying Breath",
        descriptionShort: "Apocalypse triggers on death",
        descriptionLong: "Apocalypse's cooldown is reduced by 25 seconds for every enemy Hero hit (to a minimum of 5 seconds) and is cast for free when Diablo dies.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_apocalypse.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "DiabloApocalypse"
        ],
        prerequisiteTalentIds: [
          "DiabloHeroicAbilityApocalypse"
        ]
      },
      {
        id: "DiabloMasteryHellstormLightningBreath",
        name: "Hellstorm",
        descriptionShort: "Lightning Breath lasts longer",
        descriptionLong: "Lightning Breath lasts 200% longer.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_lightningbreath.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "DiabloLightningBreath"
        ],
        prerequisiteTalentIds: [
          "DiabloHeroicAbilityLightningBreath"
        ]
      },
      {
        id: "DiabloTalentLordOfTerror",
        name: "Lord of Terror",
        descriptionShort: "Steal Health, Souls from nearby enemy Heroes",
        descriptionLong: "Activate to steal 10% of the maximum Health of nearby enemy Heroes and gain 5 Souls per Hero hit.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_diablo_lordofterror.png",
        isPassive: false,
        order: 3,
        tier: "level20"
      },
      {
        id: "DiabloHellgate",
        name: "Hellgate",
        descriptionShort: "Teleport and create an Apocalypse",
        descriptionLong: "Teleport and place a demonic rune at target location. After 1.75 seconds the rune explodes dealing 137 (+4% / level) damage and stunning enemies for 1.75 seconds.",
        cooldown: 100,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_boltofthestorm.png",
        isPassive: false,
        order: 4,
        tier: "level20"
      }
    ]
  ],
  analysis: {
    tankiness: 85.12241054613936,
    damageSustainedPhysical: 13.586956521739129
  }
};
      
export default diablo;