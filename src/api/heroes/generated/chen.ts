import { Hero } from '../heroes';
      
const chen: Hero = {
  name: "Chen",
  nameNormalized: "chen",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.9375,
  movementSpeed: 4.8398,
  health: {
    amount: 2473,
    scale: 0.04,
    regenRate: 5.1523,
    regenScale: 0.04
  },
  energy: {
    amount: 100,
    regenRate: 0,
    name: "Brew"
  },
  autoAttacks: [
    {
      nameId: "ChenHeroWeapon",
      range: 2,
      period: 0.9,
      damage: 90,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/chen.png",
  abilities: [
    {
      id: "ChenFortifyingBrew",
      name: "Fortifying Brew",
      descriptionShort: "Gain Brew and a Shield while drinking",
      descriptionLong: "Chen drinks from his keg, gaining 50 Brew and 180 (+4% / level) temporary Shields per second, up to a maximum of 540 (+4% / level) while drinking. Shields persist for 4 seconds after he stops drinking.",
      cooldown: 7,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_fortifyingbrew.png",
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
      id: "ChenFlyingKick",
      name: "Flying Kick",
      descriptionShort: "Kick through target enemy",
      descriptionLong: "Kick through target enemy, dealing 120 (+4% / level) damage.",
      cost: {
        type: "Brew",
        amount: 10
      },
      cooldown: 5,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_flyingkick.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 96
      }
    },
    {
      id: "ChenKegSmash",
      name: "Keg Smash",
      descriptionShort: "Drench enemies in a nearby area with Brew, Slowing them",
      descriptionLong: "Deal 50 (+4% / level) damage and soak enemies in Brew for 3 seconds, Slowing them by 10%. After 1.25 seconds, the Slow is increased to 40%. After being used, this ability becomes Breath of Fire. Breath of FireDeal damage and Ignite Brew-soaked enemies.",
      cost: {
        type: "Brew",
        amount: 30
      },
      cooldown: 5,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_kegsmash.png",
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
      id: "ChenStagger",
      name: "Stagger",
      descriptionShort: "Become immune to damage, then convert it to damage over time",
      descriptionLong: "Damage taken over the next 3 seconds is prevented.  Once this effect ends, Chen receives 75% of the damage taken over 5 seconds.  This damage cannot be modified.",
      cooldown: 18,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_stagger.png",
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
      id: "ChenStormEarthFire",
      name: "Storm, Earth, Fire",
      descriptionShort: "Split into three elemental spirits",
      descriptionLong: "After 1 second, Chen splits into three elemental spirits for 12 seconds, each with 70% of Chen's maximum Health and a unique Ability.  The last spirit Ability that is cast is empowered. If all three spirits are killed, Chen will die as well. Storm can grant the spirits a Shield. Earth can leap to an area and Slow enemies. Fire can grant the spirits Attack Speed, damage.",
      cooldown: 120,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_stormearthfire.png",
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
      id: "ChenWanderingKeg",
      name: "Wandering Keg",
      descriptionShort: "Roll around in the barrel and knock away enemies",
      descriptionLong: "Roll around inside an Unstoppable barrel with 70% increased Movement Speed and 25 Armor, dealing 59 (+4% / level) damage to enemies in the way and knocking them back. Lasts for 5 seconds.",
      cooldown: 50,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_wanderingkeg.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 15.733333333333333
      }
    }
  ],
  talents: [
    [
      {
        id: "ChenEyeOfTheTiger",
        name: "Eye of the Tiger",
        descriptionShort: "Basic Attacks deal bonus damage, heal",
        descriptionLong: "Basic Attacks against Brew-soaked enemy Heroes deal 40% more damage and heal Chen for 40% of the damage done.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_kegsmash.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 2.6666666666666665
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "ChenBreathOfFire",
          "ChenKegSmash"
        ]
      },
      {
        id: "ChenFreshestIngredients",
        name: "Freshest Ingredients",
        descriptionShort: "Quest: Regen Globes heal more",
        descriptionLong: "Increase the healing duration of Regeneration Globes by 150%. Quest: Gather 15 Regeneration Globes. Reward: Reduce Fortifying Brew's cooldown by 2 seconds, and 50% of its Shield persists indefinitely after drinking.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_fortifyingbrew.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 10,
          magicalDamage: 0
        },
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "ChenFortifyingBrew"
        ],
        isQuest: true
      },
      {
        id: "ChenStormstoutSecretRecipe",
        name: "Stormstout Secret Recipe",
        descriptionShort: "Basic Abilities heal Chen",
        descriptionLong: "Chen heals for 3.5% of his maximum Health when his Basic Abilities hit an enemy Hero.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_stormstoutsecretrecipe.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.23333333333333334,
          magicalDamage: 0
        },
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "ChenFortifyingBrew"
        ]
      }
    ],
    [
      {
        id: "ChenDeadlyStrike",
        name: "Deadly Strike",
        descriptionShort: "Increase Flying Kick damage and remove Brew cost",
        descriptionLong: "Flying Kick no longer costs Brew. Additionally, its damage is increased by 125% while Chen has Shields from Fortifying Brew.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_flyingkick.png",
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
          "ChenFlyingKick"
        ]
      },
      {
        id: "ChenAccumulatingFlame",
        name: "Accumulating Flame",
        descriptionShort: "Increase Ignite damage and duration",
        descriptionLong: "Increase Ignited damage by 20%.  Basic Attacks against enemy Heroes who are Ignited increase its duration by 0.75 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_breathoffire.png",
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
          "ChenBreathOfFire",
          "ChenKegSmash"
        ]
      },
      {
        id: "ChenWitheringFlames",
        name: "Withering Flames",
        descriptionShort: "Igniting Heroes reduces their Spell Power",
        descriptionLong: "Igniting an enemy Hero reduces their Spell Power by 60% for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_breathoffire_a.png",
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
          "ChenBreathOfFire",
          "ChenKegSmash"
        ]
      }
    ],
    [
      {
        id: "ChenGiftOfTheOxStagger",
        name: "Gift of the Ox",
        descriptionShort: "Increase Stagger's duration, reduce damage taken",
        descriptionLong: "Increase the duration of Stagger's damage prevention by 1.5 seconds, and reduce the amount of damage taken over time to 50% of damage taken.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_stagger.png",
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
          "ChenStagger"
        ]
      },
      {
        id: "ChenBrewmastersBalance",
        name: "Brewmaster's Balance",
        descriptionShort: "Gain bonuses based on current level of Brew",
        descriptionLong: "While at or below 50 Brew, gain 20% Movement Speed. While at or above 50 Brew, regenerate an additional 18 (+4% / level) Health per second.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_fortifyingbrew.png",
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
          "ChenFortifyingBrew"
        ]
      },
      {
        id: "ChenElusiveBrawler",
        name: "Elusive Brawler",
        descriptionShort: "Activate to Evade Basic Attacks",
        descriptionLong: "Activate to gain 30% Movement Speed and Evade enemy Basic Attacks for 2 seconds. Chen's Basic Attacks reduce this cooldown by 2 seconds.",
        cooldown: 25,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_elusivebrew.png",
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
        id: "ChenHeroicAbilityWanderingKeg",
        name: "Wandering Keg",
        descriptionShort: "Roll around in the barrel and knock away enemies",
        descriptionLong: "Roll around inside an Unstoppable barrel with 70% increased Movement Speed and 25 Armor, dealing 59 (+4% / level) damage to enemies in the way and knocking them back. Lasts for 5 seconds.",
        cooldown: 50,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_wanderingkeg.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 15.733333333333333
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "ChenWanderingKeg"
        ]
      },
      {
        id: "ChenHeroicAbilityStormEarthFire",
        name: "Storm, Earth, Fire",
        descriptionShort: "Split into three elemental spirits",
        descriptionLong: "After 1 second, Chen splits into three elemental spirits for 12 seconds, each with 70% of Chen's maximum Health and a unique Ability.  The last spirit Ability that is cast is empowered. If all three spirits are killed, Chen will die as well. Storm can grant the spirits a Shield. Earth can leap to an area and Slow enemies. Fire can grant the spirits Attack Speed, damage.",
        cooldown: 120,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_stormearthfire.png",
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
          "ChenStormEarthFire"
        ]
      }
    ],
    [
      {
        id: "ChenPressurePoint",
        name: "Pressure Point",
        descriptionShort: "Flying Kick Slows enemies",
        descriptionLong: "Flying Kick Slows the target enemy by 40% for 1 second, or by 80% if Chen has Shields from Fortifying Brew.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_flyingkick.png",
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
          "ChenFlyingKick"
        ]
      },
      {
        id: "ChenMasteryKegSmashATouchOfHoney",
        name: "A Touch of Honey",
        descriptionShort: "Increase Keg Smash Slow amount, duration",
        descriptionLong: "Increase the Slows from Keg Smash by 20% and its duration by 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_kegsmash.png",
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
          "ChenBreathOfFire",
          "ChenKegSmash"
        ]
      },
      {
        id: "ChenRingofFire",
        name: "Ring of Fire",
        descriptionShort: "Damage nearby enemies after Igniting them",
        descriptionLong: "After Igniting an enemy, become bathed in a fiery aura, dealing 55 (+4% / level) damage every second to nearby enemies for 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_breathoffire.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 14.666666666666666
        },
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "ChenBreathOfFire",
          "ChenKegSmash"
        ]
      },
      {
        id: "ChenMasteryFortifyingBrewEnoughToShare",
        name: "Enough to Share",
        descriptionShort: "Fortifying Brew Shields allied Heroes",
        descriptionLong: "Fortifying Brew instantly grants Chen a Shield that absorbs 180 (+4% / level) damage, and each second grants nearby allied Heroes a Shield that absorbs 140 (+4% / level) damage, up to 420 (+4% / level).",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_fortifyingbrew.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 4,
        tier: "level13",
        linkedAbilityIds: [
          "ChenFortifyingBrew"
        ]
      }
    ],
    [
      {
        id: "ChenFlyingLeap",
        name: "Flying Leap",
        descriptionShort: "Increased Range, reduce cooldown",
        descriptionLong: "Increase Flying Kick's range by 15% and reduce its cooldown by 0.5 seconds each time an enemy Hero takes damage from being Ignited.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_flyingkick.png",
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
          "ChenFlyingKick"
        ]
      },
      {
        id: "ChenCelerity",
        name: "Celerity",
        descriptionShort: "Basic Attacks reduce Stagger cooldown, grant Armor",
        descriptionLong: "Basic Attacks against Stunned, Rooted, or Slowed enemy Heroes reduce the cooldown of Stagger by 2 seconds and grant Chen 30 Armor for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_stagger.png",
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
          "ChenStagger"
        ]
      },
      {
        id: "ChenComboStrikes",
        name: "Combo Strikes",
        descriptionShort: "Gain Attack Speed, damage",
        descriptionLong: "Every 3rd Basic Attack against the same target deals 75% bonus damage.  While Chen has Shields from Fortifying Brew and for 2 seconds after, he gains 35% Attack Speed.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_fortifyingbrew.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 5
        },
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "ChenFortifyingBrew"
        ]
      }
    ],
    [
      {
        id: "ChenMasteryWanderingKegUntappedPotential",
        name: "Untapped Potential",
        descriptionShort: "Increases Wandering Keg Speed, Armor",
        descriptionLong: "Increase Wandering Keg's Movement Speed bonus from 70% to 125%, and its Armor bonus to 75 for its duration and 3 seconds afterwards.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_wanderingkeg.png",
        isPassive: false,
        analysis: {
          mobility: 70,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "ChenWanderingKeg"
        ],
        prerequisiteTalentIds: [
          "ChenHeroicAbilityWanderingKeg"
        ]
      },
      {
        id: "ChenElementalConduit",
        name: "Elemental Conduit",
        descriptionShort: "All Storm, Earth, Fire Abilities are empowered",
        descriptionLong: "Increase the spirits' Health to 100% of Chen's maximum Health and all of their Abilities are empowered.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_stormearthfire.png",
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
          "ChenStormEarthFire",
          "ChenStorm",
          "ChenEarth",
          "ChenFire"
        ],
        prerequisiteTalentIds: [
          "ChenHeroicAbilityStormEarthFire"
        ]
      },
      {
        id: "ChenPurifyingBrew",
        name: "Purifying Brew",
        descriptionShort: "Fortifying Brew grants Unstoppable",
        descriptionLong: "Casting Fortifying Brew grants Chen Unstoppable for 1.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_fortifyingbrew.png",
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
          "ChenFortifyingBrew"
        ]
      },
      {
        id: "ChenEnergizingBrew",
        name: "Energizing Brew",
        descriptionShort: "Fortifying Brew gives maximum Health, damage",
        descriptionLong: "If Chen Channels Fortifying Brew for its full duration, then he gains 20% bonus Health and 20% bonus damage for 25 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chen_fortifyingbrew_b.png",
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
          "ChenFortifyingBrew"
        ]
      }
    ]
  ],
  heroUnits: [
    {
      name: "Chen Storm",
      nameNormalized: "herochenstorm",
      size: 0.625,
      movementSpeed: 4.8398,
      health: {
        amount: 1731,
        scale: 0.04,
        regenRate: 0,
        regenScale: 0
      },
      energy: {
        amount: 500,
        regenRate: 3,
        name: "Mana"
      },
      autoAttacks: [
        {
          nameId: "ChenStormHeroWeapon",
          range: 9.75,
          period: 0.8,
          damage: 59,
          damageScale: 0.04
        }
      ],
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/herochenstorm.png",
      abilities: [],
      talents: [],
      analysis: {
        tankiness: 6.924000000000001,
        physicalDamage: 2.9499999999999997,
        mobility: 24.199,
        healing: 0,
        magicalDamage: 0
      }
    },
    {
      name: "Chen Earth",
      nameNormalized: "herochenearth",
      size: 0.8125,
      movementSpeed: 4.8398,
      health: {
        amount: 1731,
        scale: 0.04,
        regenRate: 0,
        regenScale: 0
      },
      energy: {
        amount: 500,
        regenRate: 3,
        name: "Mana"
      },
      autoAttacks: [
        {
          nameId: "ChenEarthHeroWeapon",
          range: 1,
          period: 1.5,
          damage: 37,
          damageScale: 0.04
        }
      ],
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/herochenearth.png",
      abilities: [],
      talents: [],
      analysis: {
        tankiness: 6.924000000000001,
        physicalDamage: 0.9866666666666667,
        mobility: 24.199,
        healing: 0,
        magicalDamage: 0
      }
    },
    {
      name: "Chen Fire",
      nameNormalized: "herochenfire",
      size: 0.625,
      movementSpeed: 4.8398,
      health: {
        amount: 1731,
        scale: 0.04,
        regenRate: 0,
        regenScale: 0
      },
      energy: {
        amount: 500,
        regenRate: 3,
        name: "Mana"
      },
      autoAttacks: [
        {
          nameId: "ChenFireHeroWeapon",
          range: 1,
          period: 0.6,
          damage: 17,
          damageScale: 0.04
        }
      ],
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/herochenfire.png",
      abilities: [],
      talents: [],
      analysis: {
        tankiness: 6.924000000000001,
        physicalDamage: 1.1333333333333335,
        mobility: 24.199,
        healing: 0,
        magicalDamage: 0
      }
    }
  ],
  analysis: {
    tankiness: 74.51600753295668,
    physicalDamage: 50,
    mobility: 17.38446396885035,
    healing: 0,
    magicalDamage: 16.791519113774626
  }
};
      
export default chen;