import { Hero } from '../heroes';
      
const tyrael: Hero = {
  name: "Tyrael",
  nameNormalized: "tyrael",
  franchise: "Diablo",
  gender: "Male",
  size: 0.75,
  movementSpeed: 4.8398,
  health: {
    amount: 2517,
    scale: 0.04,
    regenRate: 5.2382,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "TyraelHeroWeapon",
      range: 1.5,
      period: 0.8,
      damage: 78,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/tyrael.png",
  abilities: [
    {
      id: "TyraelArchangelsWrathDummy",
      name: "Archangel's Wrath",
      descriptionShort: "Upon dying, become invulnerable and explode",
      descriptionLong: "Upon dying, become Invulnerable and gain 20% Movement Speed for 4 seconds. Upon expiration, explode, dealing 450 (+4% / level) damage and reducing Tyrael's death timer by 10% per enemy Hero hit. Archangel's Wrath reduces nearby enemy Heroes' damage by 50% while active and for 3 seconds when it expires.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_archangelswrath.png",
      isPassive: true,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 120
      }
    },
    {
      id: "TyraelElDruinsMight",
      name: "El'druin's Might",
      descriptionShort: "Slow and damage enemies in an area. Use ability again to teleport to the area",
      descriptionLong: "Throw El'druin to the target area, dealing 110 (+4% / level) damage to nearby enemies and Slowing them by 25% for 2.5 seconds. It can be reactivated within 5 seconds to teleport Tyrael to El'druin and Slow nearby enemies again.",
      cost: {
        type: "Mana",
        amount: 45
      },
      cooldown: 12,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_eldruinsmight_a.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 36.666666666666664
      }
    },
    {
      id: "TyraelRighteousness",
      name: "Righteousness",
      descriptionShort: "Gain a temporary Shield",
      descriptionLong: "Shields Tyrael for 336 (+4% / level) damage and nearby allied Heroes and Minions for 40% as much for 4 seconds.",
      cost: {
        type: "Mana",
        amount: 45
      },
      cooldown: 9,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_righteousness.png",
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
      id: "TyraelSmite",
      name: "Smite",
      descriptionShort: "Damage an area and speed up nearby allies",
      descriptionLong: "Rake target area for 150 (+4% / level) damage. Allies moving through the targeted area gain 25% increased Movement Speed for 2 seconds.",
      cost: {
        type: "Mana",
        amount: 45
      },
      cooldown: 6,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_smite.png",
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
      id: "TyraelJudgement",
      name: "Judgment",
      descriptionShort: "Charge and Stun an enemy Hero",
      descriptionLong: "After 0.75 seconds, charge an enemy Hero, dealing 150 (+4% / level) damage and Stunning them for 1.5 seconds. Nearby enemies are knocked away and take 75 (+4% / level) damage.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 70,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_judgement.png",
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
      id: "TyraelSanctificationStationary",
      name: "Sanctification",
      descriptionShort: "Create zone of Invulnerable",
      descriptionLong: "After 0.5 seconds create a field of holy energy that makes allied Heroes Invulnerable. Lasts 3 seconds.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 90,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_sanctification.png",
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
        id: "TyraelSalvation",
        name: "Salvation",
        descriptionShort: "Empower Righteousness, heal if Shield destroyed",
        descriptionLong: "Increase the Shield amount Tyrael gains from Righteousness by 40% and heal Tyrael for 140 (+4% / level) Health if his Shield is destroyed. Does not increase the Shield amount gained by allies.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_righteousness.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 37.333333333333336,
          magicalDamage: 0
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "TyraelRighteousness"
        ]
      },
      {
        id: "TyraelJusticeForAll",
        name: "Justice for All",
        descriptionShort: "Increase Righteousness Shield on allies",
        descriptionLong: "Increase the Shield applied to allies by Righteousness to 80% of the Shield gained by Tyrael.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_righteousness_var1.png",
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
          "TyraelRighteousness"
        ]
      },
      {
        id: "TyraelArdentRestoration",
        name: "Ardent Restoration",
        descriptionShort: "Quest: Damaging Heroes heals over time",
        descriptionLong: "Dealing damage to a Hero heals Tyrael for 20 (+4% / level) Health over 5 seconds. Dealing damage resets this timer, and the heal amount stacks up to 10 times. Quest: Every Regeneration Globe gathered increases this heal amount by 1%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_regenerationmaster.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 5.3999999999999995,
          magicalDamage: 0
        },
        order: 3,
        tier: "level1",
        isQuest: true
      }
    ],
    [
      {
        id: "TyraelStalwartAngel",
        name: "Stalwart Angel",
        descriptionShort: "El'druin's Might grants Armor while active",
        descriptionLong: "Gain 25 Armor while El'druin's Might is active, and for 3 seconds after teleporting.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_eldruinsmight_a.png",
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
          "ElDruinsMightEldruinsFlash",
          "TyraelElDruinsMight"
        ]
      },
      {
        id: "TyraelElDruinsMightBoundByLaw",
        name: "Bound by Law",
        descriptionShort: "El'druin's Might Heals, increase Slow duration",
        descriptionLong: "Heroes hit by El'druin's Might heal Tyrael for 3% of his maximum Health. Tyrael's Basic Attacks against enemies Slowed by El'druin's Might increase the Slow duration by 1 second, up to 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_eldruinsmight_b.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.2,
          magicalDamage: 0
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "ElDruinsMightEldruinsFlash",
          "TyraelElDruinsMight"
        ]
      },
      {
        id: "TyraelDivineVigor",
        name: "Divine Vigor",
        descriptionShort: "Smite causes Basic Attacks to heal",
        descriptionLong: "If Smite hits an enemy, Tyrael's Basic Attacks within the next 4 seconds heal for 70% of the damage dealt.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_smite.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 4.666666666666667,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "TyraelSmite"
        ]
      }
    ],
    [
      {
        id: "TyraelMasteryRighteousnessReciprocate",
        name: "Reciprocate",
        descriptionShort: "Righteousness Shield explodes",
        descriptionLong: "When Tyrael's Shield from Righteousness expires or is destroyed, it deals 190 (+4% / level) damage to nearby enemies.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_righteousness.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 50.666666666666664
        },
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "TyraelRighteousness"
        ]
      },
      {
        id: "TyraelMasteryPurgeEvil",
        name: "Purge Evil",
        descriptionShort: "Smite increases Basic Attack damage",
        descriptionLong: "Each enemy Hero hit by Smite increases Tyrael's Basic Attack damage by 60% for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_smite.png",
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
          "TyraelSmite"
        ]
      },
      {
        id: "TyraelMasterySwiftRetribution",
        name: "Swift Retribution",
        descriptionShort: "Increase Smite Move Speed, grants Attack Speed",
        descriptionLong: "Smite grants 20% more Movement Speed and also grants 25% Attack Speed for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_smite_a.png",
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
          "TyraelSmite"
        ]
      }
    ],
    [
      {
        id: "TyraelHeroicAbilityJudgement",
        name: "Judgment",
        descriptionShort: "Charge and Stun an enemy Hero",
        descriptionLong: "After 0.75 seconds, charge an enemy Hero, dealing 150 (+4% / level) damage and Stunning them for 1.5 seconds. Nearby enemies are knocked away and take 75 (+4% / level) damage.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 70,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_judgement.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 40
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "TyraelJudgement"
        ]
      },
      {
        id: "TyraelHeroicAbilitySanctification",
        name: "Sanctification",
        descriptionShort: "Create zone of Invulnerable",
        descriptionLong: "After 0.5 seconds create a field of holy energy that makes allied Heroes Invulnerable. Lasts 3 seconds.",
        cost: {
          type: "Mana",
          amount: 75
        },
        cooldown: 90,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_sanctification.png",
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
          "TyraelSanctificationStationary"
        ]
      }
    ],
    [
      {
        id: "TyraelMasteryElDruinsMightSwordOfJustice",
        name: "Sword of Justice",
        descriptionShort: "El'druin's Might can teleport twice",
        descriptionLong: "Upon teleporting using El'druin's Might, El'druin swaps places with Tyrael, and El'druin's Might can be reactivated to teleport an additional time.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_eldruinsmight_a.png",
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
          "ElDruinsMightEldruinsFlash",
          "TyraelElDruinsMight"
        ]
      },
      {
        id: "TyraelMasteryHolyGround",
        name: "Holy Ground",
        descriptionShort: "El'druin's Might teleport makes a blocking field",
        descriptionLong: "Create a ring for 3 seconds that blocks enemies from entering the area teleported to using El'druin's Might.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_eldruinsmight_b.png",
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
          "ElDruinsMightEldruinsFlash",
          "TyraelElDruinsMight"
        ]
      },
      {
        id: "TyraelMasteryLawAndOrder",
        name: "Law and Order",
        descriptionShort: "Righteousness, Smite empower each other",
        descriptionLong: "Each enemy Hero hit by Smite reduces the cooldown of Righteousness by 1 second. Each allied Hero Shielded by Righteousness increases the damage of the next Smite by 35%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_zealous_conviction.png",
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
          "TyraelRighteousness",
          "TyraelSmite"
        ]
      }
    ],
    [
      {
        id: "TyraelHoradricReforging",
        name: "Horadric Reforging",
        descriptionShort: "Basic Attacks reduce El'druin's Might cooldown",
        descriptionLong: "Tyrael's Basic Attacks reduce the cooldown of El'druin's Might by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_eldruinsmight_a.png",
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
          "ElDruinsMightEldruinsFlash",
          "TyraelElDruinsMight"
        ]
      },
      {
        id: "TyraelBurningHalo",
        name: "Burning Halo",
        descriptionShort: "El'druin and Tyrael damage nearby enemies",
        descriptionLong: "Both Tyrael and El'druin deal 18 (+4% / level) damage per second to nearby enemies. Teleporting increases this damage from Tyrael by 150% for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_eldruinsmight_b.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 4.8
        },
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "ElDruinsMightEldruinsFlash",
          "TyraelElDruinsMight"
        ]
      },
      {
        id: "TyraelSmiteTheWicked",
        name: "Smite the Wicked",
        descriptionShort: "El'druin's Might increases Smite cooldown rate",
        descriptionLong: "While El'druin's Might is active, and for 2 seconds after teleporting, Smite's cooldown recharges 125% faster.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_smite.png",
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
          "TyraelSmite"
        ]
      }
    ],
    [
      {
        id: "TyraelMasteryJudgmentAngelofJustice",
        name: "Angel of Justice",
        descriptionShort: "Judgment has increased range, reduced cooldown",
        descriptionLong: "Increases the cast range of Judgment by 50%, and reduces the cooldown by 40 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_judgement.png",
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
          "TyraelJudgement"
        ],
        prerequisiteTalentIds: [
          "TyraelHeroicAbilityJudgement"
        ]
      },
      {
        id: "TyraelMasterySanctificationHolyArena",
        name: "Holy Arena",
        descriptionShort: "Increase Sanctification duration, empower allies",
        descriptionLong: "Increase the duration of Sanctification by 1 second and increase the damage of allies inside by 25%.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrael_sanctification.png",
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
          "TyraelSanctificationStationary"
        ],
        prerequisiteTalentIds: [
          "TyraelHeroicAbilitySanctification"
        ]
      },
      {
        id: "TyraelSealOfElDruin",
        name: "Seal of El'druin",
        descriptionShort: "Basic Abilities grant Attack Speed",
        descriptionLong: "Using a Basic Ability grants 50% Attack Speed for 3 seconds.",
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
        tier: "level20"
      },
      {
        id: "TyraelDefenseOfTheAngels",
        name: "Defense of the Angels",
        descriptionShort: "Activate to gain Armor",
        descriptionLong: "Activate to gain 50 Armor for 3 seconds. Each time Tyrael damages an enemy Hero with a Basic Attack or Basic Ability, increase the duration of this Armor bonus by 0.5 seconds.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_hardenedshield.png",
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
    tankiness: 75.84180790960453,
    physicalDamage: 48.75,
    mobility: 17.38446396885035,
    healing: 0,
    magicalDamage: 21.764051575410875
  }
};
      
export default tyrael;