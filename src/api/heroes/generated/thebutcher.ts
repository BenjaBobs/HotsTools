import { Hero } from '../heroes';
      
const thebutcher: Hero = {
  name: "The Butcher",
  nameNormalized: "thebutcher",
  franchise: "Diablo",
  gender: "Male",
  size: 0.9375,
  movementSpeed: 4.8398,
  health: {
    amount: 2154,
    scale: 0.045,
    regenRate: 4.4882,
    regenScale: 0.045
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "ButcherHeroWeapon",
      range: 1.5,
      period: 0.9,
      damage: 130,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/thebutcher.png",
  abilities: [
    {
      id: "ButcherFreshMeatDummy",
      name: "Fresh Meat",
      descriptionShort: "Gather strength by killing enemies and collecting their meat",
      descriptionLong: "Upon dying, nearby enemy Minions drop 1 Fresh Meat and enemy Heroes drop 20 Fresh Meat. Fresh Meat can be picked up to gain 0.5 Attack Damage per Meat. The Butcher loses 15 Fresh Meat upon dying. Quest: Collect 200 Fresh Meat. Reward: Gain an additional 125 Attack Damage and 25% increased Attack Speed. Heroes continue to drop 10 Fresh Meat, Minions no longer drop Fresh Meat, and Fresh Meat is no longer lost on death.",
      cooldown: null,
      charges: {
        chargesMax: 65535,
        chargesInitial: 0
      },
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_butcher_freshmeat.png",
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
      id: "ButcherHamstring",
      name: "Hamstring",
      descriptionShort: "Deals damage in an area and slows enemies",
      descriptionLong: "Deal 110 (+4% / level) damage and slow enemies by 50% fading over 2 seconds.  The Butcher's next Basic Attack will strike immediately.",
      cost: {
        type: "Mana",
        amount: 40
      },
      cooldown: 4,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_butcher_hamstring.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 110
      }
    },
    {
      id: "ButcherButchersBrand",
      name: "Butcher's Brand",
      descriptionShort: "Brand an enemy, granting Life Steal against them",
      descriptionLong: "Deal 37 (+4% / level) damage to an enemy and Brand them for 4 seconds. The Butcher's Basic Attacks against the Branded target heal him for 75% of the damage done. Basic Attacks against Branded Heroes heal for double and extend the duration of the Brand by 0.5 seconds.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 14,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_butcher_tenderize.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 5.357142857142857,
        magicalDamage: 10.571428571428571
      }
    },
    {
      id: "ButcherRuthlessOnslaught",
      name: "Ruthless Onslaught",
      descriptionShort: "Charges at an enemy, stunning and dealing damage",
      descriptionLong: "Charge at an enemy, becoming Unstoppable and gaining Movement Speed. If The Butcher reaches the target, they are stunned for 1 second and take 119 (+4% / level) damage.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 15,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_butcher_fullboar.png",
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
      id: "ButcherFurnaceBlast",
      name: "Furnace Blast",
      descriptionShort: "Deal damage around The Butcher after a delay",
      descriptionLong: "After a 3 second delay, fire explodes around The Butcher dealing 500 (+4% / level) damage to enemies. Can be cast while using Ruthless Onslaught.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_butcher_furnaceblast.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 133.33333333333334
      }
    },
    {
      id: "ButcherLambToTheSlaughter",
      name: "Lamb to the Slaughter",
      descriptionShort: "Chain an enemy Hero to a post",
      descriptionLong: "Throw a hitching post that attaches to the nearest enemy Hero after a 1 second delay. This deals 171 (+4% / level) damage and causes the enemy to be chained to the post and Silenced for 3 seconds.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 90,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_butcher_lambtotheslaughter.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 45.6
      }
    }
  ],
  talents: [
    [
      {
        id: "ButcherMasteryHamstringInvigoration",
        name: "Invigoration",
        descriptionShort: "Reduces Hamstring Mana cost, cooldown",
        descriptionLong: "If Hamstring hits a Hero, half of the Mana cost is refunded and the cooldown is reduced by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_butcher_hamstring.png",
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
          "ButcherHamstring"
        ]
      },
      {
        id: "GenericTalentBlock",
        name: "Block",
        descriptionShort: "Periodically gain Physical Armor",
        descriptionLong: "Every 5 seconds, gain 75 Physical Armor against the next enemy Hero Basic Attack, reducing the damage taken by 75%. Stores up to 2 charges.",
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
        tier: "level1"
      },
      {
        id: "ButcherMasteryHamstringChopMeat",
        name: "Chop Meat",
        descriptionShort: "Increases Hamstring damage to non-Heroes",
        descriptionLong: "Increases Hamstring damage by 100% to Minions, Mercenaries, and Monsters.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_butcher_hamstring_var1.png",
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
          "ButcherHamstring"
        ]
      }
    ],
    [
      {
        id: "ButcherMasteryHamstringFlailAxe",
        name: "Flail Axe",
        descriptionShort: "Increases Hamstring length",
        descriptionLong: "Increases the length of Hamstring by 40%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_butcher_hamstring.png",
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
          "ButcherHamstring"
        ]
      },
      {
        id: "ButcherMasteryRuthlessOnslaughtUnrelentingPursuit",
        name: "Unrelenting Pursuit",
        descriptionShort: "Reduces Ruthless Onslaught cooldown on impact",
        descriptionLong: "Reduces the cooldown of Ruthless Onslaught by 33% upon impact.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_butcher_fullboar.png",
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
          "ButcherRuthlessOnslaught"
        ]
      },
      {
        id: "ButcherMasteryHamstringCheapShot",
        name: "Cheap Shot",
        descriptionShort: "Increase Hamstring damage to disabled targets",
        descriptionLong: "Hamstring does 100% more damage to targets affected by a Slow, Root, or Stun.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_butcher_hamstring_var1.png",
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
          "ButcherHamstring"
        ]
      }
    ],
    [
      {
        id: "ButcherMasteryButchersBrandInsatiableBlade",
        name: "Insatiable Blade",
        descriptionShort: "Increases Move Speed while enemies are branded",
        descriptionLong: "While facing a branded enemy, The Butcher's Movement Speed is increased by 25%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_butcher_tenderize.png",
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
          "ButcherButchersBrand"
        ]
      },
      {
        id: "ButcherMasteryFreshMeatVictuals",
        name: "Victuals",
        descriptionShort: "Nearby Minion deaths heal",
        descriptionLong: "Every time a nearby enemy minion dies, The Butcher heals 5% of his maximum health.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_butcher_freshmeat.png",
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
          "ButcherFreshMeatDummy"
        ]
      },
      {
        id: "ButcherMeatShield",
        name: "Meat Shield",
        descriptionShort: "Ruthless Onslaught grants Spell Armor",
        descriptionLong: "When Ruthless Onslaught impacts an enemy Hero, The Butcher gains 50 Spell Armor for 2.5 seconds, reducing Ability Damage taken by 50%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_butcher_fullboar.png",
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
          "ButcherRuthlessOnslaught"
        ]
      }
    ],
    [
      {
        id: "ButcherHeroicAbilityButcherFurnaceBlast",
        name: "Furnace Blast",
        descriptionShort: "Deal damage around The Butcher after a delay",
        descriptionLong: "After a 3 second delay, fire explodes around The Butcher dealing 500 (+4% / level) damage to enemies. Can be cast while using Ruthless Onslaught.",
        cost: {
          type: "Mana",
          amount: 75
        },
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_butcher_furnaceblast.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 133.33333333333334
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "ButcherFurnaceBlast"
        ]
      },
      {
        id: "ButcherHeroicAbilityLambToTheSlaughter",
        name: "Lamb to the Slaughter",
        descriptionShort: "Chain an enemy Hero to a post",
        descriptionLong: "Throw a hitching post that attaches to the nearest enemy Hero after a 1 second delay. This deals 171 (+4% / level) damage and causes the enemy to be chained to the post and Silenced for 3 seconds.",
        cost: {
          type: "Mana",
          amount: 75
        },
        cooldown: 90,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_butcher_lambtotheslaughter.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 45.6
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "ButcherLambToTheSlaughter"
        ]
      }
    ],
    [
      {
        id: "ButcherCleaver",
        name: "Cleaver",
        descriptionShort: "Basic Attacks deal area damage",
        descriptionLong: "Basic Attacks deal 35% of The Butcher's Basic Attack Damage in an area around the target.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_aoe.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 2.3333333333333335
        },
        order: 1,
        tier: "level13"
      },
      {
        id: "ButcherMasteryRuthlessOnslaughtSavageCharge",
        name: "Savage Charge",
        descriptionShort: "Ruthless Onslaught deals extra damage",
        descriptionLong: "Ruthless Onslaught deals bonus damage to Heroes equal to 10% of their maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_butcher_fullboar.png",
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
          "ButcherRuthlessOnslaught"
        ]
      },
      {
        id: "ButcherMasteryHamstringBrutalStrike",
        name: "Brutal Strike",
        descriptionShort: "Hamstring empowers Basic Attacks",
        descriptionLong: "After using Hamstring, The Butcher's next 3 Basic Attacks within 5 seconds deal an additional 15% damage.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_butcher_hamstring.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 1
        },
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "ButcherHamstring"
        ]
      }
    ],
    [
      {
        id: "ButcherMasteryHamstringCripplingSlam",
        name: "Crippling Slam",
        descriptionShort: "Hamstring slow no longer fades and lasts longer",
        descriptionLong: "Hamstring's slow no longer fades out, and the duration is increased by 30%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_butcher_hamstring.png",
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
          "ButcherHamstring"
        ]
      },
      {
        id: "ButcherTalentEnraged",
        name: "Enraged",
        descriptionShort: "Gain Attack Speed and Armor at low Health",
        descriptionLong: "While below 50% of his maximum Health, taking damage causes The Butcher to become Enraged for 10 seconds, gaining 40% Attack Speed and 25 Armor, reducing damage taken by 25%. This effect has a 25 second cooldown.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_butcher_enraged.png",
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
        id: "ButcherMasteryFreshMeatBloodFrenzy",
        name: "Blood Frenzy",
        descriptionShort: "Basic Attacks grant Attack and Move Speed",
        descriptionLong: "Basic Attacks against enemy Heroes grant 5% increased Attack and Movement Speed for 3 seconds, up to 25%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_speed.png",
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
        id: "ButcherMasteryFiresofHell",
        name: "Fires of Hell",
        descriptionShort: "Furnace Blast explodes twice",
        descriptionLong: "Furnace Blast explodes a second time 3 seconds after the initial explosion.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_butcher_furnaceblast.png",
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
          "ButcherFurnaceBlast"
        ],
        prerequisiteTalentIds: [
          "ButcherHeroicAbilityButcherFurnaceBlast"
        ]
      },
      {
        id: "ButcherMasterySlaughterhouse",
        name: "Slaughterhouse",
        descriptionShort: "Lamb to the Slaughter chains all enemy Heroes",
        descriptionLong: "Lamb to the Slaughter now chains all enemy Heroes in range.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_butcher_lambtotheslaughter.png",
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
          "ButcherLambToTheSlaughter"
        ],
        prerequisiteTalentIds: [
          "ButcherHeroicAbilityLambToTheSlaughter"
        ]
      },
      {
        id: "GenericTalentNexusBlades",
        name: "Nexus Blades",
        descriptionShort: "Basic Attacks deal more damage and Slow",
        descriptionLong: "Basic Attacks deal 20% more damage and Slow enemy Movement Speed by 20% for 1 second.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_slow.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 1.3333333333333333
        },
        order: 3,
        tier: "level20"
      },
      {
        id: "GenericTalentFlashoftheStorms",
        name: "Bolt of the Storm",
        descriptionShort: "Activate to teleport a short distance",
        descriptionLong: "Activate to teleport to a nearby location.",
        cooldown: 70,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_boltofthestorm.png",
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
    tankiness: 73.01694915254237,
    physicalDamage: 72.22222222222221,
    mobility: 17.38446396885035,
    healing: 1.0597012113562292,
    magicalDamage: 33.14459534835454
  }
};
      
export default thebutcher;