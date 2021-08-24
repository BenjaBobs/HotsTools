import { Hero } from '../heroes';
      
const stukov: Hero = {
  name: "Stukov",
  nameNormalized: "stukov",
  franchise: "Starcraft",
  gender: "Male",
  size: 0.6875,
  movementSpeed: 4.8398,
  health: {
    amount: 1850,
    scale: 0.04,
    regenRate: 3.8554,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "StukovHeroWeapon",
      range: 1.5,
      period: 1.5,
      damage: 261,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/stukov.png",
  abilities: [
    {
      id: "StukovBioKillSwitch",
      name: "Bio-Kill Switch",
      descriptionShort: "Detonate Viruses for immediate effects",
      descriptionLong: "Activate to detonate all of Stukov's Viruses. Each Healing Pathogen heals its target for 450 (+4% / level) Health, and each Weighted Pustule does 100 (+4% / level) damage and Slows its target by 70% for 2 seconds. Can be cast while Channeling Lurking Arm.",
      cooldown: 16,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_bio-killswitch.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 90,
        magicalDamage: 0
      }
    },
    {
      id: "StukovHealingPathogen",
      name: "Healing Pathogen",
      descriptionShort: "Infest allies with a spreading healing Virus",
      descriptionLong: "Infest an allied Hero with a Healing Pathogen that heals the target for 222 (+4% / level) Health over 4.5 seconds. Healing Pathogens can spread to a nearby allied Hero every 0.75 seconds. Each cast of Healing Pathogen can only spread to each allied Hero 1 time.",
      cost: {
        type: "Mana",
        amount: 40
      },
      cooldown: 10,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_healingpathogen.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 67.8,
        magicalDamage: 0
      }
    },
    {
      id: "StukovWeightedPustule",
      name: "Weighted Pustule",
      descriptionShort: "Damage enemies and infest them with a Slowing Virus",
      descriptionLong: "Hurl a pustule that impacts all enemy Heroes in its path, dealing 20 (+4% / level) damage and Slowing by 5%, increasing to 50% over 3 seconds. Deals an additional 88 (+4% / level) damage upon expiring or being removed.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 10,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_weightedpustule.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 32.4
      }
    },
    {
      id: "StukovLurkingArm",
      name: "Lurking Arm",
      descriptionShort: "Continually damage and Silence enemies in an area",
      descriptionLong: "Channel at a target location, creating an area that deals 136 (+4% / level) damage per second to non-Structure enemies and Silences them. Deals 50% reduced damage to non-Heroes. Does not cost Mana while Channeling, and lasts until canceled or interrupted.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 10,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_lurkingarm.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 55.8
      }
    },
    {
      id: "StukovMassiveShove",
      name: "Massive Shove",
      descriptionShort: "Shove an enemy until they collide with terrain",
      descriptionLong: "Extend Stukov's arm. If it hits an enemy Hero, they are rapidly shoved until they collide with terrain, dealing 190 (+4% / level) damage and Stunning them for 0.5 seconds. Stukov gains 50 Armor while shoving an enemy.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 20,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_massiveshove.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 10,
        healing: 0,
        magicalDamage: 38
      }
    },
    {
      id: "StukovFlailingSwipe",
      name: "Flailing Swipe",
      descriptionShort: "Knock back enemies in front of Stukov",
      descriptionLong: "Swipe 3 times in front of Stukov over 1.75 seconds, dealing 48 (+4% / level) damage to enemies hit and knocking them away. Each swipe is larger than the previous.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 60,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 0.0625
      },
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_flailingswipe.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 9.600000000000001
      }
    }
  ],
  talents: [
    [
      {
        id: "StukovFetidTouch",
        name: "Fetid Touch",
        descriptionShort: "Quest: Reduce Weighted Pustule cooldown, cost",
        descriptionLong: "Basic Attacks become ranged and Slow enemies by 15% for 1.5 seconds, but deal 50% less damage. This effect can be toggled. Quest: Hit Heroes with Weighted Pustule. Reward: After hitting 20 Heroes, reduce the cooldown of Weighted Pustule by 5 seconds and remove its Mana cost.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_weightedpustule.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 10
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "StukovWeightedPustule"
        ],
        isQuest: true
      },
      {
        id: "StukovWeightedPustuleReactiveBallistospores",
        name: "Reactive Ballistospores",
        descriptionShort: "Radiate Weighted Pustule at low Health",
        descriptionLong: "While below 50% Health, the cooldown of Bio-Kill Switch refreshes 150% faster. Activate to instantly spread a Weighted Pustule to all nearby enemy Heroes and reset the cooldown of Bio-Kill Switch. This effect has a 60 second cooldown.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_weightedpustule_a.png",
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
          "StukovWeightedPustule"
        ]
      },
      {
        id: "StukovLowBlow",
        name: "Low Blow",
        descriptionShort: "Increase Lurking Arm damage to low Health targets",
        descriptionLong: "Lurking Arm deals 100% more damage to enemy Heroes below 50% Health and persists for 1 second after it is canceled.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_lurkingarm.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 20
        },
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "StukovLurkingArm"
        ]
      }
    ],
    [
      {
        id: "StukovOneGoodSpread",
        name: "One Good Spread...",
        descriptionShort: "Reduce Healing Pathogen cooldown after spreading",
        descriptionLong: "After a Healing Pathogen infests 3 targets, restore 10 Mana and reduce the cooldown of Healing Pathogen by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_healingpathogen.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 2.6,
          magicalDamage: 0
        },
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "StukovHealingPathogen"
        ]
      },
      {
        id: "StukovBioticArmor",
        name: "Biotic Armor",
        descriptionShort: "Healing Pathogen grants Physical Armor",
        descriptionLong: "Healing Pathogen grants 10 Physical Armor to targets while active on them. Detonating Bio-Kill Switch increases this bonus to 50 for 2.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_healingpathogen_b.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 2,
          magicalDamage: 0
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "StukovHealingPathogen"
        ]
      },
      {
        id: "StukovVigorousReuptake",
        name: "Vigorous Reuptake",
        descriptionShort: "Increase Bio-Kill Switch healing",
        descriptionLong: "Bio-Kill Switch heals for 30% more when detonating 3 or more Healing Pathogens.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_bio-killswitch.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 6,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "StukovBioKillSwitch"
        ]
      }
    ],
    [
      {
        id: "StukovLongPitch",
        name: "The Long Pitch",
        descriptionShort: "Increase Weighted Pustule range, reduce cooldowns",
        descriptionLong: "Increase the range of Weighted Pustule by 50%. Detonating 2 or more Weighted Pustules causes Stukov's Bio-Kill Switch and Basic Ability cooldowns to recharge 100% faster for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_weightedpustule.png",
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
          "StukovWeightedPustule"
        ]
      },
      {
        id: "StukovGrowingInfestation",
        name: "Growing Infestation",
        descriptionShort: "Lurking Arm expands, has set duration",
        descriptionLong: "Lurking Arm's area expands by 50% over 2.5 seconds, but it cannot be Channeled for longer than 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_lurkingarm.png",
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
          "StukovLurkingArm"
        ]
      },
      {
        id: "StukovTargetedExcision",
        name: "Targeted Excision",
        descriptionShort: "Detonate single Weighted Pustule to reduce cooldowns",
        descriptionLong: "Detonating exactly 1 Weighted Pustule (but any number of Healing Pathogens) with Bio-Kill Switch reduces the cooldown of Bio-Kill Switch to 8 seconds and other Basic Abilities by 1.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_bio-killswitch.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.2,
          magicalDamage: 0
        },
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "StukovBioKillSwitch"
        ]
      }
    ],
    [
      {
        id: "StukovHeroicAbilityFlailingSwipe",
        name: "Flailing Swipe",
        descriptionShort: "Knock back enemies in front of Stukov",
        descriptionLong: "Swipe 3 times in front of Stukov over 1.75 seconds, dealing 48 (+4% / level) damage to enemies hit and knocking them away. Each swipe is larger than the previous.",
        cost: {
          type: "Mana",
          amount: 60
        },
        cooldown: 60,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 0.0625
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_flailingswipe.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 9.600000000000001
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "StukovFlailingSwipe"
        ]
      },
      {
        id: "StukovHeroicAbilityMassiveShove",
        name: "Massive Shove",
        descriptionShort: "Shove an enemy until they collide with terrain",
        descriptionLong: "Extend Stukov's arm. If it hits an enemy Hero, they are rapidly shoved until they collide with terrain, dealing 190 (+4% / level) damage and Stunning them for 0.5 seconds. Stukov gains 50 Armor while shoving an enemy.",
        cost: {
          type: "Mana",
          amount: 50
        },
        cooldown: 20,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_massiveshove.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 10,
          healing: 0,
          magicalDamage: 38
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "StukovMassiveShove"
        ]
      }
    ],
    [
      {
        id: "StukovItHungers",
        name: "It Hungers",
        descriptionShort: "Lurking Arm cost can be refunded",
        descriptionLong: "Increase the range of Lurking Arm by 20%. If Lurking Arm damages enemy Heroes 8 times, its cooldown is reset and its Mana cost is refunded.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_lurkingarm.png",
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
          "StukovLurkingArm"
        ]
      },
      {
        id: "StukovVirulentReaction",
        name: "Virulent Reaction",
        descriptionShort: "Detonating Weighted Pustule in Lurking Arm Roots",
        descriptionLong: "Detonating a Weighted Pustule on an enemy who is inside of Lurking Arm Roots them for 1.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_lurkingarm_a.png",
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
          "StukovLurkingArm"
        ]
      },
      {
        id: "StukovPoppinPustules",
        name: "Poppin' Pustules",
        descriptionShort: "Weighted Pustule can detonate in an area",
        descriptionLong: "Detonating Weighted Pustule with Bio-Kill Switch within 1.5 seconds of its expiration increases its damage by 150% and applies its damage and Slow in an area. Enemy Heroes hit have a Weighted Pustule applied to them.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_bio-killswitch.png",
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
          "StukovBioKillSwitch"
        ]
      }
    ],
    [
      {
        id: "StukovSuperstrain",
        name: "Superstrain",
        descriptionShort: "Healing Pathogen heals when Stunned, Rooted",
        descriptionLong: "Whenever an ally with Healing Pathogen is Stunned or Rooted, they are instantly healed for 250 (+4% / level) Health.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_healingpathogen.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 50,
          magicalDamage: 0
        },
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "StukovHealingPathogen"
        ]
      },
      {
        id: "StukovUniversalCarrier",
        name: "Universal Carrier",
        descriptionShort: "Healing Pathogen can spread continually",
        descriptionLong: "Healing Pathogen can continually spread through Stukov, but its healing is reduced by 40%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_healingpathogen_a.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 8,
          magicalDamage: 0
        },
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "StukovHealingPathogen"
        ]
      },
      {
        id: "StukovPoxPopuli",
        name: "Pox Populi",
        descriptionShort: "Bio-Kill Switch no longer removes Healing Pathogen",
        descriptionLong: "Bio-Kill Switch no longer removes Healing Pathogen but instead sets its duration to 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_bio-killswitch.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.6000000000000001,
          magicalDamage: 0
        },
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "StukovBioKillSwitch"
        ]
      }
    ],
    [
      {
        id: "StukovControlledChaos",
        name: "Controlled Chaos",
        descriptionShort: "Flailing Swipe only hits once, gains multiple charges",
        descriptionLong: "Flailing Swipe gains 2 additional charges, but each use only swings 1 time, at maximum range.  Additionally, its cooldown is decreased to 25 seconds, and its Mana cost is reduced from 60 to 25.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 0.0625
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_flailingswipe.png",
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
          "StukovFlailingSwipe"
        ],
        prerequisiteTalentIds: [
          "StukovHeroicAbilityFlailingSwipe"
        ]
      },
      {
        id: "StukovPushComesToShove",
        name: "Push Comes To Shove",
        descriptionShort: "Massive Shove Slows, can reduce cooldown",
        descriptionLong: "Massive Shove Slows its target by 50% for 4 seconds upon colliding with terrain. If Massive Shove pushes a target for more than 1.25 seconds, its cooldown is reduced by 15 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_massiveshove.png",
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
          "StukovMassiveShove"
        ],
        prerequisiteTalentIds: [
          "StukovHeroicAbilityMassiveShove"
        ]
      },
      {
        id: "StukovTopOff",
        name: "Top Off",
        descriptionShort: "Healing Pathogen stronger at high Health",
        descriptionLong: "Healing Pathogen's heal over time is increased by 30% while its target is above 60% Health.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_healingpathogen.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 6,
          magicalDamage: 0
        },
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "StukovHealingPathogen"
        ]
      },
      {
        id: "StukovBioExplosionSwitch",
        name: "Bio-Explosion Switch",
        descriptionShort: "Bio Kill-Switch detonates Lurking Arm",
        descriptionLong: "Bio-Kill Switch now also detonates Lurking Arm, dealing 230 (+4% / level) damage, applying a Weighted Pustule, and Silencing enemy Heroes inside for 2.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_stukov_bio-killswitch.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 46
        },
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "StukovBioKillSwitch"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 55.74387947269304,
    physicalDamage: 87,
    mobility: 24.006944444444446,
    healing: 38.33353577067898,
    magicalDamage: 20.037682738581676
  }
};
      
export default stukov;