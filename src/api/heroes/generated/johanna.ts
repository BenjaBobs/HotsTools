import { Hero } from '../heroes';
      
const johanna: Hero = {
  name: "Johanna",
  nameNormalized: "johanna",
  franchise: "Diablo",
  gender: "Female",
  size: 0.75,
  movementSpeed: 4.8398,
  health: {
    amount: 2625,
    scale: 0.04,
    regenRate: 5.4687,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "CrusaderHeroWeapon",
      range: 1.5,
      period: 1.1,
      damage: 99,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/johanna.png",
  abilities: [
    {
      id: "CrusaderIronSkin",
      name: "Iron Skin",
      descriptionShort: "Becomes Unstoppable and gains a Shield",
      descriptionLong: "Activate to grant Johanna a Shield that absorbs 674 (+4% / level) damage for 4 seconds. While this Shield is active, Johanna is Unstoppable.",
      cooldown: 25,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_iron_skin.png",
      isPassive: false
    },
    {
      id: "CrusaderPunish",
      name: "Punish",
      descriptionShort: "Damage and slow enemies",
      descriptionLong: "Step forward dealing 113 (+4% / level) damage and Slowing enemies by 60% decaying over 2 seconds.",
      cost: {
        type: "Mana",
        amount: 40
      },
      cooldown: 8,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_punish.png",
      isPassive: false
    },
    {
      id: "CrusaderCondemn",
      name: "Condemn",
      descriptionShort: "Pulls and damages nearby enemies",
      descriptionLong: "After 1 second, Johanna pulls nearby enemies toward her, stunning them for 0.25 seconds and dealing 55 (+4% / level) damage. Deals 200% increased damage to Minions and Mercenaries.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 10,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_condemn.png",
      isPassive: false
    },
    {
      id: "CrusaderShieldGlare",
      name: "Shield Glare",
      descriptionShort: "Damages and blinds enemies in a cone",
      descriptionLong: "Deal 59 (+4% / level) damage to enemies and Blind them for 1.5 seconds.",
      cost: {
        type: "Mana",
        amount: 45
      },
      cooldown: 12,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_shield_glare.png",
      isPassive: false
    },
    {
      id: "CrusaderFallingSword",
      name: "Falling Sword",
      descriptionShort: "Jump to area, damaging and Slowing enemies",
      descriptionLong: "Johanna leaps towards an area.  While in the air, she can steer the landing location by moving. After 2 seconds Johanna lands, dealing 210 (+4% / level) damage to nearby enemies, Stunning them for 0.2 seconds, and Slowing them by 50% for 3 seconds.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 50,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_falling_sword.png",
      isPassive: false
    },
    {
      id: "CrusaderBlessedShield",
      name: "Blessed Shield",
      descriptionShort: "Throw a bouncing shield that Stuns",
      descriptionLong: "Deal 114 (+4% / level) damage and Stun the first enemy hit for 1.5 seconds. Blessed Shield then bounces to 2 nearby enemies, dealing 57 (+4% / level) damage and Stunning them for 0.75 seconds.",
      cost: {
        type: "Mana",
        amount: 90
      },
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_blessed_shield.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "CrusaderMasteryIronSkinReinforce",
        name: "Reinforce",
        descriptionShort: "Basic Abilities grant Physical Armor",
        descriptionLong: "Using a Basic Ability grants 60 Physical Armor for 2.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_block.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "CrusaderIronSkin"
        ]
      },
      {
        id: "CrusaderMasteryIronSkinHoldYourGround",
        name: "Hold Your Ground",
        descriptionShort: "Increases Iron Skin Shield, reduced cooldown",
        descriptionLong: "Increases Iron Skin's Shield by 60% and its cooldown is reduced by 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_iron_skin.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "CrusaderIronSkin"
        ]
      },
      {
        id: "CrusaderMasteryLawsOfHope",
        name: "Laws of Hope",
        descriptionShort: "Increases Health Regen, activate to burst heal",
        descriptionLong: "Activate to heal 30% of Johanna's max Health over 4 seconds.Passive: Regenerate 1.5 (+4% / level) Health per second.",
        cooldown: 40,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_lawsofhope.png",
        isPassive: false,
        order: 3,
        tier: "level1"
      }
    ],
    [
      {
        id: "CrusaderMasteryCondemnEternalRetaliation",
        name: "Eternal Retaliation",
        descriptionShort: "Empower Condemn",
        descriptionLong: "Lower the cooldown of Condemn by 0.75 seconds and refund 3 Mana for every enemy hit. Maximum of 8 targets.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_condemn.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "CrusaderCondemn"
        ]
      },
      {
        id: "CrusaderMasteryCondemnConviction",
        name: "Conviction",
        descriptionShort: "Condemn increases Movement Speed",
        descriptionLong: "Movement Speed is increased by 25% while Condemn is charging up.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_condemn_var1.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "CrusaderCondemn"
        ]
      },
      {
        id: "CrusaderMasteryShieldGlareSinsExposed",
        name: "Sins Exposed",
        descriptionShort: "Shield Glare makes enemies take bonus damage",
        descriptionLong: "Shield Glare marks enemies for 4 seconds. The next time any ally damages them, they take 90 (+4% / level) extra damage and the mark is removed.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_shield_glare.png",
        isPassive: false,
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "CrusaderShieldGlare"
        ]
      }
    ],
    [
      {
        id: "CrusaderMasteryPunishSubdue",
        name: "Subdue",
        descriptionShort: "Quest: Increase Punish Slow",
        descriptionLong: "Hitting 2 or more Heroes at the same time with Punish increases the Slow to 80% and the Slow amount does not decay.Quest: Hit 4 or more Heroes at the same time with Punish.Reward: Punish always Slows by 80% and the Slow amount no longer decays.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_punish.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "CrusaderPunish"
        ],
        isQuest: true
      },
      {
        id: "CrusaderZealousGlare",
        name: "Zealous Glare",
        descriptionShort: "Increase Shield Glare duration",
        descriptionLong: "Increase the Blind duration of Shield Glare by 1 second. Johanna's Basic Attacks against Heroes with Shield Glare extend its duration by 1 second, up to a maximum of 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_shield_glare.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "CrusaderShieldGlare"
        ]
      },
      {
        id: "BattleMomentumCrusader",
        name: "Blessed Momentum",
        descriptionShort: "Basic Attacks reduce Ability cooldowns",
        descriptionLong: "Basic Attacks reduce Johanna's Basic Ability cooldowns by 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_cooldown.png",
        isPassive: false,
        order: 3,
        tier: "level7"
      }
    ],
    [
      {
        id: "CrusaderHeroicAbilityFallingSword",
        name: "Falling Sword",
        descriptionShort: "Jump to area, damaging and Slowing enemies",
        descriptionLong: "Johanna leaps towards an area.  While in the air, she can steer the landing location by moving. After 2 seconds Johanna lands, dealing 210 (+4% / level) damage to nearby enemies, Stunning them for 0.2 seconds, and Slowing them by 50% for 3 seconds.",
        cost: {
          type: "Mana",
          amount: 60
        },
        cooldown: 50,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_falling_sword.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "CrusaderFallingSword"
        ]
      },
      {
        id: "CrusaderHeroicAbilityBlessedShield",
        name: "Blessed Shield",
        descriptionShort: "Throw a bouncing shield that Stuns",
        descriptionLong: "Deal 114 (+4% / level) damage and Stun the first enemy hit for 1.5 seconds. Blessed Shield then bounces to 2 nearby enemies, dealing 57 (+4% / level) damage and Stunning them for 0.75 seconds.",
        cost: {
          type: "Mana",
          amount: 90
        },
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_blessed_shield.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "CrusaderBlessedShield"
        ]
      }
    ],
    [
      {
        id: "CrusaderMasteryPunishRoar",
        name: "Roar",
        descriptionShort: "Increase Punish damage",
        descriptionLong: "Increase Punish's damage by 25%. This bonus is increased to 150% whenever Punish hits 2 or more Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_punish.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "CrusaderPunish"
        ]
      },
      {
        id: "CrusaderHolyFury",
        name: "Holy Fury",
        descriptionShort: "Deals damage to nearby enemies",
        descriptionLong: "Deal 12 (+4% / level) damage per second to nearby enemies. Each Hero hit by Condemn increases this damage by 40% for 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_burningrage.png",
        isPassive: false,
        order: 2,
        tier: "level13"
      },
      {
        id: "CrusaderBlessedHammer",
        name: "Blessed Hammer",
        descriptionShort: "Activate to create spinning hammers",
        descriptionLong: "Activate to create 2 hammers that spiral outward from Johanna, dealing 84 (+4% / level) damage to enemies hit.Hitting Heroes with Shield Glare reduces the cooldown of this Ability by 8 seconds.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_btn_d3ros_crusader_blessedhammer.png",
        isPassive: false,
        order: 3,
        tier: "level13"
      }
    ],
    [
      {
        id: "CrusaderMasteryShieldGlareHolyRenewal",
        name: "Holy Renewal",
        descriptionShort: "Shield Glare heals for each Hero hit",
        descriptionLong: "Every enemy Hero affected by Shield Glare restores 114 (+4% / level) health.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_shield_glare.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "CrusaderShieldGlare"
        ]
      },
      {
        id: "CrusaderMasteryIronSkinFanaticism",
        name: "Fanaticism",
        descriptionShort: "Damage taken during Iron Skin grants Move Speed",
        descriptionLong: "Increase the duration of Iron Skin by 2 seconds. While Iron Skin is active, Johanna gains 8% Movement Speed each time she takes damage, up to 40%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_iron_skin.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "CrusaderIronSkin"
        ]
      },
      {
        id: "GenericTalentImposingPresence",
        name: "Imposing Presence",
        descriptionShort: "Activate to Slow enemy Basic Attacks and Move Speed",
        descriptionLong: "Activate to reduce the Attack Speed by 50% and Movement Speed by 20% of nearby Heroes and Summons for 2.5 seconds.Passive: Heroes and Summons that attack your Hero have their Attack Speed Slowed by 20% for 2.5 seconds.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_imposingpresence.png",
        isPassive: false,
        order: 3,
        tier: "level16"
      }
    ],
    [
      {
        id: "CrusaderMasteryFallingSwordHeavensFury",
        name: "Heaven's Fury",
        descriptionShort: "Falling Sword bombards enemies with holy bolts",
        descriptionLong: "While in the air, holy bolts rain down on enemies dealing 75 (+4% / level) damage and reducing the cooldown of Falling Sword by 3 seconds for each enemy hit.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_falling_sword.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "CrusaderFallingSword"
        ],
        prerequisiteTalentIds: [
          "CrusaderHeroicAbilityFallingSword"
        ]
      },
      {
        id: "CrusaderMasteryBlessedShieldRadiatingFaith",
        name: "Radiating Faith",
        descriptionShort: "Increase Blessed Shield Stun duration, max targets",
        descriptionLong: "Increase the number of enemies hit by Blessed Shield by 2. Its Stun duration is increased to 1.75 seconds and all targets hit are Stunned for the maximum duration.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_blessed_shield.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "CrusaderBlessedShield"
        ],
        prerequisiteTalentIds: [
          "CrusaderHeroicAbilityBlessedShield"
        ]
      },
      {
        id: "CrusaderHeroicMasteryIndestructable",
        name: "Indestructible",
        descriptionShort: "Gain a Shield instead of dying",
        descriptionLong: "Upon taking fatal damage, Johanna gains a Shield equal to her maximum Health for 4 seconds. This effect has a 120 second cooldown.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_indestructible.png",
        isPassive: false,
        order: 3,
        tier: "level20"
      },
      {
        id: "CrusaderBlindedByTheLight",
        name: "Blinded By The Light",
        descriptionShort: "Activate to Shield nearby allies",
        descriptionLong: "Activate to grant nearby allied Heroes a Shield equal to 25% of their maximum Health for 3 seconds.Hitting Heroes with Shield Glare reduces the cooldown of this Ability by 8 seconds.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_stormshield.png",
        isPassive: false,
        order: 4,
        tier: "level20"
      }
    ]
  ]
};
      
export default johanna;