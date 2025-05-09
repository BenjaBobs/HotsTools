import { Hero } from '../heroes';
      
export const greymane: Hero = {
  name: "Greymane",
  nameNormalized: "greymane",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.6875,
  movementSpeed: 4.8398,
  health: {
    amount: 1876,
    scale: 0.045,
    regenRate: 3.9062,
    regenScale: 0.045
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroGreymaneMeleeWeapon",
      range: 1.5,
      period: 1,
      damage: 148,
      damageScale: 0.04
    },
    {
      nameId: "HeroGreymaneRangedWeapon",
      range: 5.5,
      period: 1,
      damage: 148,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/greymane.png",
  abilities: [
    {
      id: "GreymaneWorgenForm",
      name: "Curse of the Worgen",
      descriptionShort: "Able to shapeshift between a Human and a Worgen",
      descriptionLong: "Greymane can use certain Abilities to shapeshift between a Human and a Worgen. While Human, Greymane's Basic Attacks are ranged. While Worgen, Greymane gains 10 Armor, and his Basic Attacks become melee but deal 40% more damage.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_curseoftheworgen.png",
      isPassive: true,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 2,
        healing: 0,
        magicalDamage: 8
      }
    },
    {
      id: "GreymaneGilneanCocktail",
      name: "Gilnean Cocktail",
      descriptionShort: "Damage the first enemy hit and deal heavy damage behind them",
      descriptionLong: "Hurl a flask that deals 55 (+4% / level) damage to the first enemy hit and explodes for 220 (+4% / level) damage to enemies in a cone behind them. Worgen: Razor SwipeSwipe forward, damaging enemies hit.",
      cost: {
        type: "Mana",
        amount: 55
      },
      cooldown: 9,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_qattack.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 18.333333333333332
      }
    },
    {
      id: "GreymaneInnerBeast",
      name: "Inner Beast",
      descriptionShort: "Gain a massive Attack Speed boost",
      descriptionLong: "Gain 50% Attack Speed for 3 seconds. Basic Attacks refresh this duration, and reduce the cooldown of Inner Beast by 0.5 seconds.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 20,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_beastfocus.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0.6000000000000001,
        tankiness: 0,
        healing: 0,
        magicalDamage: 0
      }
    },
    {
      id: "GreymaneDarkflight",
      name: "Darkflight",
      descriptionShort: "Leap at an enemy and shapeshift into a Worgen",
      descriptionLong: "Shapeshift into a Worgen and leap at an enemy dealing 88 (+4% / level) damage. Worgen: DisengageRoll away and shapeshift into a Human.",
      cost: {
        type: "Mana",
        amount: 10
      },
      cooldown: 5,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_darkflight.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 52.8
      }
    },
    {
      id: "GreymaneGoForTheThroat",
      name: "Go for the Throat",
      descriptionShort: "Eviscerate a Hero, refresh cooldown if they die",
      descriptionLong: "Leap at an enemy Hero and shapeshift into a Worgen, slashing for 355 (+4% / level) damage. If this kills them, the Ability can be used a second time within 10 seconds for free.",
      cost: {
        type: "Mana",
        amount: 90
      },
      cooldown: 80,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_goforthethroat.png",
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
      id: "GreymaneCursedBullet",
      name: "Cursed Bullet",
      descriptionShort: "Remove a portion of enemy's current Health",
      descriptionLong: "Greymane shapeshifts into a Human and fires a bullet that hits the first enemy Hero in its path, dealing 35% of their current Health in damage. Does not affect Vehicles.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 30,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_snapshot.png",
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
        id: "GreymaneInnerBeastWolfheart",
        name: "Wolfheart",
        descriptionShort: "Increase Worgen Armor, Inner Beast cooldown reduction",
        descriptionLong: "Increase the cooldown reduction from Basic Attacks during Inner Beast from 0.5 to 1.2 seconds, and Worgen Form's Armor bonus from 10 to 15.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_beastfocus.png",
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
          "GreymaneInnerBeastActive",
          "GreymaneInnerBeast"
        ]
      },
      {
        id: "GreymaneGilneanCocktailPerfectAim",
        name: "Perfect Aim",
        descriptionShort: "Increases Gilnean Cocktail's range and refunds Mana against Heroes",
        descriptionLong: "Increases Gilnean Cocktail's range by 30% and refunds 45 Mana if it hits an enemy Hero.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_qattack.png",
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
          "GreymaneGilneanCocktail"
        ]
      },
      {
        id: "GreymaneInnerBeastViciousness",
        name: "Viciousness",
        descriptionShort: "Increases Inner Beast duration, Abilities refresh",
        descriptionLong: "Increases Inner Beast's duration to 4 seconds, and causes Ability damage to also refresh its duration.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_beastfocus_var1.png",
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
          "GreymaneInnerBeastActive",
          "GreymaneInnerBeast"
        ]
      }
    ],
    [
      {
        id: "GreymaneDarkflightThickSkin",
        name: "Thick Skin",
        descriptionShort: "Darkflight grants Physical Armor",
        descriptionLong: "Using Darkflight grants 50 Physical Armor against the next 2 Hero Basic Attacks while in Worgen Form, reducing the damage taken by 50%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_darkflight.png",
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
          "GreymaneDarkflight"
        ]
      },
      {
        id: "GreymaneDisengageEyesInTheDark",
        name: "Eyes in the Dark",
        descriptionShort: "Disengage grants Stealth",
        descriptionLong: "Disengage grants Stealth for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_disengage.png",
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
          "GreymaneDisengage"
        ]
      },
      {
        id: "GreymaneInnerBeastInsatiable",
        name: "Insatiable",
        descriptionShort: "Gain Mana, reduce Healing Fountain cooldown",
        descriptionLong: "Inner Beast causes Basic Attacks to restore 10 Mana, and reduce the cooldown of Healing Fountain by 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_beastfocus.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 2,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "GreymaneInnerBeastActive",
          "GreymaneInnerBeast"
        ]
      }
    ],
    [
      {
        id: "GreymaneWorgenFormQuicksilverBullets",
        name: "Quicksilver Bullets",
        descriptionShort: "Increases Human Basic Attack range",
        descriptionLong: "Increases Greymane's Human Basic Attack range by 1.1.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_curseoftheworgen.png",
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
          "GreymaneWorgenForm"
        ]
      },
      {
        id: "GreymaneGilneanCocktailIncendiaryElixir",
        name: "Incendiary Elixir",
        descriptionShort: "Quest: Increases Gilnean Cocktail damage",
        descriptionLong: "Quest: Reduce the cooldown of Gilnean Cocktail by 2 seconds. Every time Greymane hits an enemy Hero with the explosion damage from Gilnean Cocktail, increase its explosion damage by 25, up to 375. Reward: After hitting 15 Heroes, the cooldown is reduced by an additional 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_qattack.png",
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
          "GreymaneGilneanCocktail"
        ],
        isQuest: true
      },
      {
        id: "GreymaneWizenedDuelist",
        name: "Wizened Duelist",
        descriptionShort: "Quest: Basic Attack Heroes to gain damage",
        descriptionLong: "Quest: Every 6 Human Basic Attacks against Heroes increase Basic Attack damage by 1%, up to 30%. Worgen Basic Attacks grant credit for 3 Basic Attacks. Half of this bonus is lost upon death.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_curseoftheworgen_var1.png",
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
          "GreymaneWorgenForm"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "GreymaneHeroicAbilityGoForTheThroat",
        name: "Go for the Throat",
        descriptionShort: "Eviscerate a Hero, refresh cooldown if they die",
        descriptionLong: "Leap at an enemy Hero and shapeshift into a Worgen, slashing for 355 (+4% / level) damage. If this kills them, the Ability can be used a second time within 10 seconds for free.",
        cost: {
          type: "Mana",
          amount: 90
        },
        cooldown: 80,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_goforthethroat.png",
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
          "GreymaneGoForTheThroat"
        ]
      },
      {
        id: "GreymaneHeroicAbilityCursedBullet",
        name: "Cursed Bullet",
        descriptionShort: "Remove a portion of enemy's current Health",
        descriptionLong: "Greymane shapeshifts into a Human and fires a bullet that hits the first enemy Hero in its path, dealing 35% of their current Health in damage. Does not affect Vehicles.",
        cost: {
          type: "Mana",
          amount: 50
        },
        cooldown: 30,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_snapshot.png",
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
          "GreymaneCursedBullet"
        ]
      }
    ],
    [
      {
        id: "GreymaneDarkflightDisengageRunningWild",
        name: "Running Wild",
        descriptionShort: "Improve Darkflight and Disengage range, cooldown",
        descriptionLong: "Increases Darkflight and Disengage's range by 35%, and reduce their cooldowns by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_darkflight.png",
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
          "GreymaneDisengage",
          "GreymaneDarkflight"
        ]
      },
      {
        id: "GreymaneRazorSwipeUnfetteredAssault",
        name: "Unfettered Assault",
        descriptionShort: "Increases Razor Swipe range, reduces cooldown",
        descriptionLong: "Increases Razor Swipe's lunge distance by 60%, and Worgen Basic Attacks reduce Razor Swipe's cooldown by 1.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_swipe.png",
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
          "GreymaneRazorSwipe"
        ]
      },
      {
        id: "GreymaneInnerBeastOnTheProwl",
        name: "On the Prowl",
        descriptionShort: "Inner Beast increases Movement Speed",
        descriptionLong: "Inner Beast increases Movement Speed by 30% once it has been active for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_beastfocus.png",
        isPassive: false,
        analysis: {
          mobility: 6,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "GreymaneInnerBeastActive",
          "GreymaneInnerBeast"
        ]
      }
    ],
    [
      {
        id: "GreymaneEagerWolf",
        name: "Eager Wolf",
        descriptionShort: "Increases Inner Beast Attack Speed",
        descriptionLong: "Increases the Attack Speed bonus of Inner Beast by an additional 40% after it has been active for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_beastfocus.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 8,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "GreymaneInnerBeastActive",
          "GreymaneInnerBeast"
        ]
      },
      {
        id: "GreymaneLordofHisPack",
        name: "Lord of His Pack",
        descriptionShort: "Attacking disabled Heroes increases damage",
        descriptionLong: "Attacking a Hero that is Slowed, Rooted, or Stunned increases Greymane's Basic Attack damage by 25% for 3 seconds, increased to 50% while in Worgen Form.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_damage.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level16"
      },
      {
        id: "GreymaneWorgenFormAlphaKiller",
        name: "Alpha Killer",
        descriptionShort: "Increases Worgen Basic Attacks against Heroes",
        descriptionLong: "Worgen Basic Attacks against Heroes deal bonus damage equal to 3% of the Hero's maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_curseoftheworgen_var1.png",
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
          "GreymaneWorgenForm"
        ]
      }
    ],
    [
      {
        id: "GreymaneGoForTheThroatUnleashed",
        name: "Unleashed",
        descriptionShort: "Increase Go for the Throat damage, reset Ability cooldowns",
        descriptionLong: "Passive: Go For The Throat's damage is increased by 25%. If Go for the Throat kills its target, refund its Mana cost and reset the cooldowns of Greymane's Abilities.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_goforthethroat.png",
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
          "GreymaneGoForTheThroat"
        ],
        prerequisiteTalentIds: [
          "GreymaneHeroicAbilityGoForTheThroat"
        ]
      },
      {
        id: "GreymaneCursedBulletGilneanRoulette",
        name: "Gilnean Roulette",
        descriptionShort: "Cursed Bullet deals less damage, lower cooldown",
        descriptionLong: "Cursed Bullet's damage is reduced to 30% of current health but its cooldown is reduced by 24 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_snapshot.png",
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
          "GreymaneCursedBullet"
        ],
        prerequisiteTalentIds: [
          "GreymaneHeroicAbilityCursedBullet"
        ]
      },
      {
        id: "GreymaneHuntersBlunderbuss",
        name: "Hunter's Blunderbuss",
        descriptionShort: "Human Basic Attacks splash",
        descriptionLong: "Human Basic Attacks splash for 100% damage behind the target.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_curseoftheworgen.png",
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
          "GreymaneWorgenForm"
        ]
      },
      {
        id: "GreymaneToothAndClaw",
        name: "Tooth and Claw",
        descriptionShort: "Empower Worgen form",
        descriptionLong: "Worgen Basic Attacks cleave for 100% damage. Increase Razor Swipe's damage by 100%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_greymane_curseoftheworgen_var1.png",
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
          "GreymaneWorgenForm"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 63.593220338983045,
    physicalDamage: 74,
    mobility: 24.006944444444446,
    healing: 0,
    magicalDamage: 2.9235013053544154
  }
};
