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
      descriptionLong: "Activate to grant Johanna a Shield that absorbs 810 (+4% / level) damage for 4 seconds. While this Shield is active, Johanna is Unstoppable.",
      cooldown: 25,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_iron_skin.png",
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
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 14.125
      }
    },
    {
      id: "CrusaderCondemn",
      name: "Condemn",
      descriptionShort: "Pulls and damages nearby enemies",
      descriptionLong: "After 1 second, Johanna pulls nearby enemies toward her, Stunning them for 0.25 seconds and dealing 55 (+4% / level) damage. Deals 200% increased damage to Minions and Mercenaries.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 10,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_condemn.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 5.5
      }
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
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 0.5
      },
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_shield_glare.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 4.916666666666666
      }
    },
    {
      id: "CrusaderFallingSword",
      name: "Falling Sword",
      descriptionShort: "Jump to area protecting Allies, Stunning enemies",
      descriptionLong: "Johanna leaps into the air for 2 seconds and she can steer the landing location by moving. While in the air, allies below Johanna are Unstoppable. Upon landing enemies hit take 225 (+4% / level) damage and are Stunned for 0.25 seconds.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 50,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_falling_sword.png",
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
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 11.399999999999999
      }
    }
  ],
  talents: [
    [
      {
        id: "CrusaderZealousGlare",
        name: "Zealous Glare",
        descriptionShort: "Gain an additional Shield Glare charge",
        descriptionLong: "Shield Glare gains 1 additional charge.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_shield_glare.png",
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
          "CrusaderShieldGlare"
        ]
      },
      {
        id: "CrusaderPassiveDivineFortress",
        name: "Divine Fortress",
        descriptionShort: "Gambit: Gain max HealthBasic Attacks grant Physical Armor",
        descriptionLong: "Basic Attacks against enemy Heroes grant 8 Physical Armor for 2.5 seconds, stacking up to 40. Gambit: Gain 20% bonus maximum Health. Every death reduces this bonus by 5%",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_block.png",
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
        isQuest: true
      },
      {
        id: "CrusaderMasteryLawsOfHope",
        name: "Laws of Hope",
        descriptionShort: "Activate to heal over timeQuest: Increase heal amount",
        descriptionLong: "Activate to heal 20% of Johanna's max Health over 5 seconds. Quest: Every 10 Regeneration Globes gathered increases this heal amount by 5% of Johanna's max Health.",
        cooldown: 40,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_lawsofhope.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 3.333333333333333,
          magicalDamage: 0
        },
        order: 3,
        tier: "level1",
        isQuest: true
      }
    ],
    [
      {
        id: "CrusaderMasteryPunishSubdue",
        name: "Subdue",
        descriptionShort: "Quest: Increase Punish Slow",
        descriptionLong: "Hitting 2 or more Heroes at the same time with Punish increases the Slow to 80% and the Slow amount does not decay. Quest: Hit 4 or more Heroes at the same time with Punish. Reward: Punish always Slows by 80%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_punish.png",
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
          "CrusaderPunish"
        ],
        isQuest: true
      },
      {
        id: "CrusaderMasteryCondemnEternalRetaliation",
        name: "Eternal Retaliation",
        descriptionShort: "Condemn marks enemies, kills Minions",
        descriptionLong: "Mark enemies hit by Condemn for 10 seconds. Johanna's next Basic Attack against them removes the mark, lowering the cooldown of Condemn by 1 second, refunding 10 Mana, and killing Minions.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_condemn.png",
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
          "CrusaderCondemn"
        ]
      },
      {
        id: "CrusaderMasteryIronSkinHoldYourGround",
        name: "Hold Your Ground",
        descriptionShort: "Increases Iron Skin Shield, reduces cooldown",
        descriptionLong: "Increases Iron Skin's Shield by 40% and its cooldown is reduced by 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_iron_skin.png",
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
          "CrusaderIronSkin"
        ]
      }
    ],
    [
      {
        id: "CrusaderMasteryShieldGlareSinsExposed",
        name: "Sins Exposed",
        descriptionShort: "Punish reduces enemy Healing",
        descriptionLong: "Punish reduces healing received by 35% for 2 seconds. Basic Attacks against them refresh this duration.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_punish.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 4.666666666666667,
          magicalDamage: 0
        },
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "CrusaderPunish"
        ]
      },
      {
        id: "CrusaderMasteryCondemnConviction",
        name: "Conviction",
        descriptionShort: "Condemn increases Move Speed",
        descriptionLong: "Gain 10% Movement Speed, increased to 20% while Condemn is charging up.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_condemn.png",
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
          "CrusaderCondemn"
        ]
      },
      {
        id: "CrusaderIronSkinSteedCharge",
        name: "Steed Charge",
        descriptionShort: "Activate for an empowered Mount",
        descriptionLong: "Activate to instantly Mount for 3 seconds, unhindered by damage. Passive: Increase the duration of Iron Skin by 1 second.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_btn_d3ros_crusader_steedcharge.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level7"
      }
    ],
    [
      {
        id: "CrusaderHeroicAbilityFallingSword",
        name: "Falling Sword",
        descriptionShort: "Jump to area protecting Allies, Stunning enemies",
        descriptionLong: "Johanna leaps into the air for 2 seconds and she can steer the landing location by moving. While in the air, allies below Johanna are Unstoppable. Upon landing enemies hit take 225 (+4% / level) damage and are Stunned for 0.25 seconds.",
        cost: {
          type: "Mana",
          amount: 60
        },
        cooldown: 50,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_falling_sword.png",
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
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 11.399999999999999
        },
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
          "CrusaderPunish"
        ]
      },
      {
        id: "CrusaderHolyFury",
        name: "Holy Fury",
        descriptionShort: "Deals damage to nearby enemies",
        descriptionLong: "Deal 15 (+4% / level) damage per second to nearby enemies. Each Hero hit by Condemn increases this damage by 40% for 5 seconds.",
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
        order: 2,
        tier: "level13"
      },
      {
        id: "CrusaderBlessedHammer",
        name: "Blessed Hammer",
        descriptionShort: "Activate to create spinning hammers",
        descriptionLong: "Activate to create 2 hammers that spiral outward from Johanna, dealing 74 (+4% / level) damage to enemies hit. Damaging enemies with Basic Abilities reduce the cooldown of this Ability by 3 seconds. Passive: Every 3rd Basic Attack against enemy Heroes releases a hammer.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_btn_d3ros_crusader_blessedhammer.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 4.933333333333334
        },
        order: 3,
        tier: "level13"
      }
    ],
    [
      {
        id: "CrusaderCondemnShrinkingVacuum",
        name: "Shrinking Vacuum",
        descriptionShort: "Condemn reduces damage dealt, Slows",
        descriptionLong: "Condemn reduces enemy Heroes damage by 25% and Slows by 25% for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_condemn.png",
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
          "CrusaderCondemn"
        ]
      },
      {
        id: "CrusaderMasteryShieldGlareHolyRenewal",
        name: "Holy Renewal",
        descriptionShort: "Shield Glare heals",
        descriptionLong: "Hitting enemy Heroes with Shield Glare reduce its cooldown by 1.5 seconds and heals for 5% of Johanna's maximum Health.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_shield_glare.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.6666666666666666,
          magicalDamage: 0
        },
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "CrusaderShieldGlare"
        ]
      },
      {
        id: "CrusaderBlessedMomentum",
        name: "Blessed Momentum",
        descriptionShort: "Basic Attacks reduce Basic Ability cooldowns",
        descriptionLong: "Basic Attacks grant 10% increased Attack Speed for 4 seconds, stacking up to 40%. They also reduce Johanna's Basic Ability cooldowns by 0.5 seconds.",
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
        tier: "level16"
      }
    ],
    [
      {
        id: "CrusaderMasteryFallingSwordHeavensFury",
        name: "Heaven's Fury",
        descriptionShort: "Falling Sword rains down holy bolts",
        descriptionLong: "Falling Sword rains down holy bolts, dealing 75 (+4% / level) damage to enemies, healing allied Heroes for 75 (+4% / level), and reducing its cooldown by 2 seconds for each Hero hit.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_johanna_falling_sword.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 2,
          magicalDamage: 5
        },
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
        id: "CrusaderBlindedByTheLight",
        name: "Blinded By The Light",
        descriptionShort: "Activate to Shield nearby allies",
        descriptionLong: "Activate to grant nearby allied Heroes a Shield equal to 25% of their maximum Health for 3 seconds. Hitting Heroes with Shield Glare reduces the cooldown of this Ability by 8 seconds.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_stormshield.png",
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
    tankiness: 79.09604519774011,
    physicalDamage: 44.99999999999999,
    mobility: 24.199,
    healing: 0,
    magicalDamage: 15.909890583855441
  }
};
      
export default johanna;