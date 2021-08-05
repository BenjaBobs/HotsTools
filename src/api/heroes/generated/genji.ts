import { Hero } from '../heroes';
      
const genji: Hero = {
  name: "Genji",
  nameNormalized: "genji",
  franchise: "Overwatch",
  gender: "Male",
  size: 0.6875,
  movementSpeed: 4.8398,
  health: {
    amount: 1675,
    scale: 0.04,
    regenRate: 3.4882,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "GenjiHeroWeapon",
      range: 4.5,
      period: 1,
      damage: 44,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/genji.png",
  abilities: [
    {
      id: "GenjiCyberAgility",
      name: "Cyber Agility",
      descriptionShort: "Jump over terrain",
      descriptionLong: "Activate to jump to the target area.",
      cooldown: 20,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_cyberagility.png",
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
      id: "GenjiShuriken",
      name: "Shuriken",
      descriptionShort: "Throw Shuriken in a spread pattern",
      descriptionLong: "Throw 3 Shuriken in a spread pattern, each dealing 65 (+4% / level) damage to the first enemy hit. Stores up to 3 charges.  Shuriken's cooldown replenishes all charges at the same time.",
      cost: {
        type: "Mana",
        amount: 20
      },
      cooldown: 12,
      charges: {
        chargesMax: 3,
        chargesInitial: 3,
        chargeCost: 1,
        recastCooldown: 0.5
      },
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_shurikens.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 5.416666666666666
      }
    },
    {
      id: "GenjiDeflectInstant",
      name: "Deflect",
      descriptionShort: "Become Protected and return fire from attacks",
      descriptionLong: "Channel for 1.25 seconds, becoming Protected and blocking damage. Any damage blocked while channeling causes Genji to throw a Kunai toward the nearest enemy, prioritizing Heroes and dealing 55 (+4% / level) damage. Total Damage Deflected: 0",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 16,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_deflect.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 3.6666666666666665
      }
    },
    {
      id: "GenjiSwiftStrike",
      name: "Swift Strike",
      descriptionShort: "Dash forward damaging enemies passed through",
      descriptionLong: "Dash forward, dealing 190 (+4% / level) damage to all enemies in a line. Enemy Heroes that die within 1.5 seconds of being hit with Swift Strike cause the cooldown and mana cost to be refunded.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 12,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_swiftstrike.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 15.833333333333332
      }
    },
    {
      id: "GenjiDragonblade",
      name: "Dragonblade",
      descriptionShort: "Unleash the Dragonblade",
      descriptionLong: "Unleash the Dragonblade for 8 seconds. While active, Dragonblade can be reactivated to lunge forward and slash in a huge arc, dealing 240 (+4% / level) damage.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 100,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_dragonblade.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 16
      }
    },
    {
      id: "GenjiXStrike",
      name: "X-Strike",
      descriptionShort: "Deal heavy damage in a cross shape",
      descriptionLong: "Perform two slashes dealing 145 (+4% / level) damage. The slashes detonate after 1.25 seconds causing an additional 290 (+4% / level) damage to enemies in their area.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_shurikens_xblade.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 9.666666666666666
      }
    }
  ],
  talents: [
    [
      {
        id: "GenjiSwiftStrikeSwiftAsTheWind",
        name: "Swift as the Wind",
        descriptionShort: "Swift Strike grants Move Speed",
        descriptionLong: "Hitting an enemy Hero with Swift Strike increases Genji's Movement Speed by 30% for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_swiftstrike.png",
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
          "GenjiSwiftStrike"
        ]
      },
      {
        id: "GenjiCyberAgilityAgileDismount",
        name: "Agile Dismount",
        descriptionShort: "Increase Cyber Agility range while Mounted",
        descriptionLong: "While mounted, the range of Cyber Agility is increased by 70% and its cooldown is reduced by 14 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_cyberagility.png",
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
          "GenjiCyberAgility"
        ]
      },
      {
        id: "GenjiCyberAgilityPathfinder",
        name: "Pathfinder",
        descriptionShort: "Jumping over terrain increases Move Speed",
        descriptionLong: "Jumping over terrain with Cyber Agility increases Genji's Movement Speed by 25% for 6 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_cyberagility_a.png",
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
          "GenjiCyberAgility"
        ]
      }
    ],
    [
      {
        id: "GenjiShurikenShurikenMastery",
        name: "Shuriken Mastery",
        descriptionShort: "Quest: Increase Shuriken damage and restore charges",
        descriptionLong: "Quest: Hit enemy Heroes with Shuriken. Reward: After hitting 35 Heroes, Shuriken damage is increased by 25. Reward: After hitting 75 Heroes, Cyber Agility now refunds 2 charges of Shuriken.",
        cooldown: null,
        charges: {
          chargesMax: 3,
          chargesInitial: 3,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_shurikens.png",
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
          "GenjiShuriken"
        ],
        isQuest: true
      },
      {
        id: "GenjiSwiftStrikeStrikeAtTheHeart",
        name: "Strike At The Heart",
        descriptionShort: "Extra Swift Strike damage at its end",
        descriptionLong: "Enemies hit by the end of Swift Strike take an additional 134 (+4% / level) damage after 1 second.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_swiftstrike.png",
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
          "GenjiSwiftStrike"
        ]
      },
      {
        id: "GenjiDeflectDragonClaw",
        name: "Dragon Claw",
        descriptionShort: "Activate to damage nearby enemies",
        descriptionLong: "After Genji blocks 330 (+4% / level) damage with Deflect, activate to release a Dragon Claw, dealing 190 (+4% / level) damage to all nearby enemies.",
        cooldown: null,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_shurikens_dragonsoul.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 12.666666666666666
        },
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "GenjiDeflectInstant"
        ]
      }
    ],
    [
      {
        id: "GenjiDeflectAugmentedGuard",
        name: "Augmented Guard",
        descriptionShort: "Gain a Shield after Deflect ends",
        descriptionLong: "When Deflect ends, Genji gains a Shield equal to 100% of the damage blocked for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_deflect.png",
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
          "GenjiDeflectInstant"
        ]
      },
      {
        id: "GenjiDeflectPerfectDefense",
        name: "Perfect Defense",
        descriptionShort: "Reduce Deflect cooldown",
        descriptionLong: "Deflected damage reduces the cooldown of Deflect by 2 seconds, up to a maximum of 10 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_deflect_a.png",
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
          "GenjiDeflectInstant"
        ]
      },
      {
        id: "GenjiCyberAgilityCyberShield",
        name: "Cyber Shield",
        descriptionShort: "Cyber Agility grants Spell Armor",
        descriptionLong: "Using Cyber Agility grants 50 Spell Armor for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_cyberagility.png",
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
          "GenjiCyberAgility"
        ]
      },
      {
        id: "GenjiDodge",
        name: "Dodge",
        descriptionShort: "Periodically dodge Basic Attacks",
        descriptionLong: "Genji dodges 1 Heroic Basic Attack every 7 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_dodge.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 4,
        tier: "level7"
      }
    ],
    [
      {
        id: "GenjiHeroicDragonblade",
        name: "Dragonblade",
        descriptionShort: "Unleash the Dragonblade",
        descriptionLong: "Unleash the Dragonblade for 8 seconds. While active, Dragonblade can be reactivated to lunge forward and slash in a huge arc, dealing 240 (+4% / level) damage.",
        cost: {
          type: "Mana",
          amount: 75
        },
        cooldown: 100,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_dragonblade.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 16
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "GenjiDragonblade"
        ]
      },
      {
        id: "GenjiHeroicXStrike",
        name: "X-Strike",
        descriptionShort: "Deal heavy damage in a cross shape",
        descriptionLong: "Perform two slashes dealing 145 (+4% / level) damage. The slashes detonate after 1.25 seconds causing an additional 290 (+4% / level) damage to enemies in their area.",
        cost: {
          type: "Mana",
          amount: 70
        },
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_shurikens_xblade.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 9.666666666666666
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "GenjiXStrike"
        ]
      }
    ],
    [
      {
        id: "GenjiShurikenShingan",
        name: "Shingan",
        descriptionShort: "Increase Shuriken single-target damage",
        descriptionLong: "Hitting an enemy with all 3 Shuriken deals 115 (+4% / level) bonus damage.",
        cooldown: null,
        charges: {
          chargesMax: 3,
          chargesInitial: 3,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_shurikens.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 7.666666666666667
        },
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "GenjiShuriken"
        ]
      },
      {
        id: "GenjiSwiftStrikeFlowLikeWater",
        name: "Flow Like Water",
        descriptionShort: "Hitting Heroes reduces Swift Strike cooldown",
        descriptionLong: "Each enemy Hero hit with Swift Strike reduces its cooldown by 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_swiftstrike.png",
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
          "GenjiSwiftStrike"
        ]
      },
      {
        id: "GenjiWayOfTheShimadaTalent",
        name: "Way Of The Shimada",
        descriptionShort: "Increase Basic Attack range, damage",
        descriptionLong: "Increase Genji's Basic Attack range by 1.  Each time Genji hits an enemy Hero with a Basic Attack, increase his Basic Attack damage by 1% for 3 seconds, stacking up to 15%.",
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
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "GenjiCyberAgility"
        ]
      }
    ],
    [
      {
        id: "GenjiDeflectReflect",
        name: "Reflect",
        descriptionShort: "Increase Deflect damage",
        descriptionLong: "Deflect also deals an additional 33% of the damage blocked.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_deflect.png",
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
          "GenjiDeflectInstant"
        ]
      },
      {
        id: "GenjiSwiftStrikeFinalCut",
        name: "Final Cut",
        descriptionShort: "Swift Strike deals extra damage after a delay",
        descriptionLong: "After 1 second, Swift Strike deals an additional 125 (+4% / level) damage to all enemies in the area.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_swiftstrike.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 8.333333333333334
        },
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "GenjiSwiftStrike"
        ]
      },
      {
        id: "GenjiSwiftStrikeSteadyBlade",
        name: "Steady Blade",
        descriptionShort: "Swift Strike deals increased damage for each Hero hit",
        descriptionLong: "Each enemy Hero hit by Swift Strike increases the damage of the next Swift Strike by 20%. This bonus stacks up to 3 times.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_swiftstrike_a.png",
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
          "GenjiSwiftStrike"
        ]
      }
    ],
    [
      {
        id: "GenjiDragonbladeTheDragonBecomesMe",
        name: "The Dragon Becomes Me",
        descriptionShort: "Hitting Heroes increases Dragonblade duration",
        descriptionLong: "Each time Dragonblade hits an enemy Hero, the duration of Dragonblade is increased by 0.5 seconds. If a Hero is killed within 1.5 seconds of being hit by Dragonblade, Swift Strike's cooldown is reset.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_dragonblade.png",
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
          "GenjiDragonbladeAttack",
          "GenjiDragonblade"
        ],
        prerequisiteTalentIds: [
          "GenjiHeroicDragonblade"
        ]
      },
      {
        id: "GenjiXStrikeLivingWeapon",
        name: "Living Weapon",
        descriptionShort: "Hero hits reduce X-Strike's cooldown",
        descriptionLong: "Each enemy Hero hit by X-Strike reduces its cooldown by 10 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_shurikens_xblade.png",
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
          "GenjiXStrike"
        ],
        prerequisiteTalentIds: [
          "GenjiHeroicXStrike"
        ]
      },
      {
        id: "GenjiShurikenSharpenedStars",
        name: "Sharpened Stars",
        descriptionShort: "Shuriken pierce",
        descriptionLong: "Shuriken now pierce all enemies hit.",
        cooldown: null,
        charges: {
          chargesMax: 3,
          chargesInitial: 3,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_shurikens.png",
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
          "GenjiShuriken"
        ]
      },
      {
        id: "GenjiDeflectZanshin",
        name: "Zanshin",
        descriptionShort: "Quest: Deflect hits all nearby Heroes",
        descriptionLong: "Quest: Block 6500 damage with Deflect, including damage blocked so far. Reward: Deflect hits all nearby enemy Heroes.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_genji_deflect_b.png",
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
          "GenjiDeflectInstant"
        ],
        isQuest: true
      }
    ]
  ],
  analysis: {
    tankiness: 50.470809792843696,
    physicalDamage: 22,
    mobility: 24.199,
    healing: 0,
    magicalDamage: 22.39115136656678
  }
};
      
export default genji;