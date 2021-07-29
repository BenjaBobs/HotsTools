import { Hero } from '../heroes';
      
const kharazim: Hero = {
  name: "Kharazim",
  nameNormalized: "kharazim",
  franchise: "Diablo",
  gender: "Male",
  size: 0.625,
  movementSpeed: 4.8398,
  health: {
    amount: 2027,
    scale: 0.04,
    regenRate: 4.2226,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "MonkHeroWeapon",
      range: 1.75,
      period: 0.5,
      damage: 64,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/kharazim.png",
  abilities: [
    {
      id: "MonkBlankTrait",
      name: "Pick Your Trait",
      descriptionShort: "Choose a Trait",
      descriptionLong: "Choose between Transcendence, Iron Fists, and Insight from the Talents panel.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_trait1.png",
      isPassive: true
    },
    {
      id: "MonkRadiantDash",
      name: "Radiant Dash",
      descriptionShort: "Jump to an ally or enemy",
      descriptionLong: "Jump to an allied or enemy unit. Enemies are immediately hit with a Basic Attack.Stores up to 2 charges.",
      cost: {
        type: "Mana",
        amount: 25
      },
      cooldown: 12,
      charges: {
        chargesMax: 2,
        chargesInitial: 2,
        chargeCost: 1,
        recastCooldown: 0.25
      },
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_dash.png",
      isPassive: false
    },
    {
      id: "MonkBreathOfHeaven",
      name: "Breath of Heaven",
      descriptionShort: "Heal nearby ally Heroes and grant Movement Speed",
      descriptionLong: "Heal nearby Heroes for 285 (+4% / level) and give them 15% Movement Speed for 3 seconds.",
      cost: {
        type: "Mana",
        amount: 65
      },
      cooldown: 10,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_breath0fheaven.png",
      isPassive: false
    },
    {
      id: "MonkDeadlyReach",
      name: "Deadly Reach",
      descriptionShort: "Increases Attack Speed and Attack Range",
      descriptionLong: "Kharazim's next Basic Attack increases his Attack Speed and Attack Range by 100% for 2 seconds.",
      cost: {
        type: "Mana",
        amount: 45
      },
      cooldown: 10,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_deadlyreach.png",
      isPassive: false
    },
    {
      id: "MonkSevenSidedStrike",
      name: "Seven-Sided Strike",
      descriptionShort: "Become Invulnerable and strike nearby Heroes",
      descriptionLong: "Become Invulnerable and strike 7 times over 2 seconds. Each strike hits the highest Health nearby Hero for 7% of their maximum Health.",
      cost: {
        type: "Mana",
        amount: 77
      },
      cooldown: 50,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_sevensidedstrike.png",
      isPassive: false
    },
    {
      id: "MonkDivinePalm",
      name: "Divine Palm",
      descriptionShort: "Prevent an ally from death",
      descriptionLong: "Protect an allied Hero from death, causing them to be healed for 1200 (+4% / level) if they take fatal damage in the next 3 seconds.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 50,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_divinepalm.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "MonkTranscendence",
        name: "Transcendence",
        descriptionShort: "Basic Attacks heal",
        descriptionLong: "Every 3rd Basic Attack heals the lowest nearby allied Hero for 104 (+4% / level) and gives 25% increased Move Speed for 2.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_trait_transcendence.png",
        isPassive: false,
        order: 1,
        tier: "level1"
      },
      {
        id: "MonkIronFists",
        name: "Iron Fists",
        descriptionShort: "Basic Attacks deal more damage",
        descriptionLong: "Every 3rd Basic Attack deals 110% bonus damage and gives 25% increased Move Speed for 2.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_trait_ironfist.png",
        isPassive: false,
        order: 2,
        tier: "level1"
      },
      {
        id: "MonkInsight",
        name: "Insight",
        descriptionShort: "Quest: Basic Attacks restore Mana, lower cooldowns",
        descriptionLong: "Quest: Every 3rd Basic Attack restores 14 (+4% / level) Mana, grants a stack of Insight, and gives 25% increased Movement Speed for 2.5 seconds.Reward: Upon getting 100 stacks of Insight, every 3rd attack also reduces Basic Ability cooldowns by 1.75 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_trait_insight.png",
        isPassive: false,
        order: 3,
        tier: "level1",
        isQuest: true
      }
    ],
    [
      {
        id: "MonkSpiritAlly",
        name: "Spirit Ally",
        descriptionShort: "Place a Spirit Ally that heals in an area",
        descriptionLong: "Place a Spirit Ally that heals allied Heroes in a large area around it for 2% of their maximum Health every second. Has 150 (+4% / level) Health and lasts 10 seconds. Kharazim can Radiant Dash to Spirit Allies.",
        cooldown: 45,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_allyspirit.png",
        isPassive: false,
        order: 1,
        tier: "level4"
      },
      {
        id: "MonkEarthAlly",
        name: "Earth Ally",
        descriptionShort: "Place an Earth Ally that grants Physical Armor",
        descriptionLong: "Place an Earth Ally that grants nearby allied Heroes 50 Physical Armor against Heroic Basic Attacks, reducing damage taken by 50%. Has 400 (+4% / level) Health and lasts 10 seconds.  Kharazim can Radiant Dash to Earth Allies.",
        cooldown: 45,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_allyearth.png",
        isPassive: false,
        order: 2,
        tier: "level4"
      },
      {
        id: "MonkAirAlly",
        name: "Air Ally",
        descriptionShort: "Place an Air Ally that gives Spell Power, reveals",
        descriptionLong: "Place an Air Ally that gives allied Heroes 15% Spell Power, grants vision, and reveals a large area around it. Has 200 (+4% / level) Health and lasts 10 seconds. Kharazim can Radiant Dash to Air Allies.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_allyair.png",
        isPassive: false,
        order: 3,
        tier: "level4"
      }
    ],
    [
      {
        id: "MonkBlindingSpeedRadiantDash",
        name: "Blinding Speed",
        descriptionShort: "Radiant Dash more often",
        descriptionLong: "Decreases Radiant Dash's cooldown by 2 seconds and increases the maximum number of charges by 1.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 0.25
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_dash.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "MonkRadiantDash"
        ]
      },
      {
        id: "MonkHeavenlyZealBreathofHeaven",
        name: "Heavenly Zeal",
        descriptionShort: "Breath of Heaven increases allies Move Speed",
        descriptionLong: "Increases Breath of Heaven's Movement Speed bonus to 30%.  Radiant Dashing to an ally increases the healing they receive from Breath of Heaven by 50% for 3.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_breath0fheaven.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "MonkBreathOfHeaven"
        ]
      },
      {
        id: "MonkBlazingFistsDeadlyReach",
        name: "Blazing Fists",
        descriptionShort: "Basic Attacks reduce Deadly Reach cooldown",
        descriptionLong: "Increase the duration of Deadly Reach by 100%.  Every 3rd Basic Attack reduces the cooldown of Deadly Reach by 0.75 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_deadlyreach.png",
        isPassive: false,
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "MonkDeadlyReachActive",
          "MonkDeadlyReach"
        ]
      }
    ],
    [
      {
        id: "MonkHeroicAbilityDivinePalm",
        name: "Divine Palm",
        descriptionShort: "Prevent an ally from death",
        descriptionLong: "Protect an allied Hero from death, causing them to be healed for 1200 (+4% / level) if they take fatal damage in the next 3 seconds.",
        cost: {
          type: "Mana",
          amount: 50
        },
        cooldown: 50,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_divinepalm.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "MonkDivinePalm"
        ]
      },
      {
        id: "MonkHeroicAbilitySevenSidedStrike",
        name: "Seven-Sided Strike",
        descriptionShort: "Become Invulnerable and strike nearby Heroes",
        descriptionLong: "Become Invulnerable and strike 7 times over 2 seconds. Each strike hits the highest Health nearby Hero for 7% of their maximum Health.",
        cost: {
          type: "Mana",
          amount: 77
        },
        cooldown: 50,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_sevensidedstrike.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "MonkSevenSidedStrike"
        ]
      }
    ],
    [
      {
        id: "MonkQuicksilverRadiantDash",
        name: "Quicksilver",
        descriptionShort: "Radiant Dash gives Move Speed",
        descriptionLong: "Radiant Dashing to an ally gives Kharazim and the target 30% bonus Movement Speed for 3 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 0.25
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_dash.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "MonkRadiantDash"
        ]
      },
      {
        id: "GenericTalentSpellShield",
        name: "Spell Shield",
        descriptionShort: "Periodically gain temporary Spell Armor",
        descriptionLong: "Every 30 seconds, gain 50 Spell Armor against the next enemy Ability and subsequent Abilities for 3 seconds, reducing the damage taken by 50%.Can be toggled to allow or prevent this talent from triggering automatically.",
        cooldown: null,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_spellshield.png",
        isPassive: false,
        order: 2,
        tier: "level13"
      },
      {
        id: "MonkSixthSense",
        name: "Sixth Sense",
        descriptionShort: "Gain Physical Armor while Stunned, Rooted",
        descriptionLong: "While Stunned or Rooted, gain 75 Physical Armor against Hero Basic Attacks for 4 seconds, reducing their damage by 75%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_relentless.png",
        isPassive: false,
        order: 3,
        tier: "level13"
      }
    ],
    [
      {
        id: "MonkCleansingTouchRadiantDash",
        name: "Cleansing Touch",
        descriptionShort: "Radiant Dash makes ally Unstoppable",
        descriptionLong: "Radiant Dashing to an ally makes them Unstoppable for 1 second.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 0.25
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_dash.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "MonkRadiantDash"
        ]
      },
      {
        id: "MonkWayoftheHundredFistsRadiantDash",
        name: "Way of the Hundred Fists",
        descriptionShort: "Radiant Dash launches a volley of blows",
        descriptionLong: "Radiant Dashing to an enemy launches a rapid volley of 6 Basic Attacks dealing 45% damage each.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 0.25
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_dash_a.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "MonkRadiantDash"
        ]
      },
      {
        id: "MonkEchoofHeavenBreathofHeaven",
        name: "Echo of Heaven",
        descriptionShort: "Breath of Heaven heals a second time",
        descriptionLong: "Breath of Heaven heals 75% of its normal amount, but heals a second time 3 seconds later.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_breath0fheaven.png",
        isPassive: false,
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "MonkBreathOfHeaven"
        ]
      }
    ],
    [
      {
        id: "MonkPeacefulReposeDivinePalm",
        name: "Peaceful Repose",
        descriptionShort: "Reduces Divine Palm cooldown if they do not die",
        descriptionLong: "Divine Palm's healing amount is increased by 75% and its cooldown is set to 5 seconds if the Hero does not die.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_divinepalm.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "MonkDivinePalm"
        ],
        prerequisiteTalentIds: [
          "MonkHeroicAbilityDivinePalm"
        ]
      },
      {
        id: "MonkElevenSidedStrikeSevenSidedStrike",
        name: "Transgression",
        descriptionShort: "Seven-Sided Strike hits more",
        descriptionLong: "Seven-Sided Strike hits 4 additional times.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_monk_sevensidedstrike.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "MonkSevenSidedStrike"
        ],
        prerequisiteTalentIds: [
          "MonkHeroicAbilitySevenSidedStrike"
        ]
      },
      {
        id: "GenericTalentStormShield",
        name: "Storm Shield",
        descriptionShort: "Activate to grant Shields to all nearby allies",
        descriptionLong: "Activate to give all nearby allied Heroes a Shield for 20% of their max Health for 3 seconds.",
        cooldown: 45,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_stormshield.png",
        isPassive: false,
        order: 3,
        tier: "level20"
      },
      {
        id: "MonkEpiphany",
        name: "Epiphany",
        descriptionShort: "Activate to restore Mana and Radiant Dash charges",
        descriptionLong: "Activate to restore 33% of Kharazim's maximum Mana and refill 2 charges of Radiant Dash.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kharazim_epiphany.png",
        isPassive: false,
        order: 4,
        tier: "level20"
      }
    ]
  ]
};
      
export default kharazim;