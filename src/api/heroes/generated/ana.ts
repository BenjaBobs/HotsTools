import { Hero } from '../heroes';
      
const ana: Hero = {
  name: "Ana",
  nameNormalized: "ana",
  franchise: "Overwatch",
  gender: "Female",
  size: 0.5625,
  movementSpeed: 4.8398,
  health: {
    amount: 1598,
    scale: 0.04,
    regenRate: 3.3281,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "AnaHeroWeapon",
      range: 6.5,
      period: 0.75,
      damage: 30,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/ana.png",
  abilities: [
    {
      id: "AnaAimDownSightsActivate",
      name: "Shrike",
      descriptionShort: "Basic Attacks deal damage over time",
      descriptionLong: "Basic Attacks apply a Dose to enemies, dealing 40 (+4% / level) damage over 5 seconds, plus additional damage equal to the current number of stacks on the target, stacking up to 5 times. Every 0.5 seconds, Ana is healed for 60% of the damage dealt by Shrike. Aim Down SightsActivating Shrike reduces your Movement Speed by 25%, but increases the Range of Healing Dart and Sleep Dart by 25% while also allowing them to pierce one Hero. Lasts until canceled.",
      cooldown: 4,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_aim_down_sights.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 15,
        magicalDamage: 40
      }
    },
    {
      id: "AnaHealingDart",
      name: "Healing Dart",
      descriptionShort: "Shoot a dart that heals an Ally",
      descriptionLong: "Fire a dart which heals the first allied Hero hit for 195 (+4% / level) Health. Does not affect full Health Heroes.",
      cost: {
        type: "Mana",
        amount: 10
      },
      cooldown: 2,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_healing_dart.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 390,
        magicalDamage: 0
      }
    },
    {
      id: "AnaBioticGrenade",
      name: "Biotic Grenade",
      descriptionShort: "Toss a grenade that heals allies, prevents enemy healing",
      descriptionLong: "Toss a grenade at the target area. Allied Heroes hit are healed for 152 (+4% / level) Health and receive 25% increased healing from Ana for 4 seconds. Enemies hit take 60 (+4% / level) damage and receive 100% less healing for 1.75 seconds.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 16,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_biotic_grenade.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 40.53333333333333,
        magicalDamage: 0
      }
    },
    {
      id: "AnaSleepDart",
      name: "Sleep Dart",
      descriptionShort: "Fire a dart that puts enemies to Sleep",
      descriptionLong: "Fire a dart that puts the first enemy Hero hit to Sleep, Stunning them for 3 seconds. Sleep's effects end instantly if the target takes damage after the first 0.5 seconds. Cannot be used on Vehicles.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 14,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_sleep_dart.png",
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
      id: "AnaNanoBoost",
      name: "Nano Boost",
      descriptionShort: "Grant ally Spell Power, reduced cooldowns",
      descriptionLong: "Instantly boost an allied Hero, restoring 200 Mana. For the next 8 seconds, they gain 30% Spell Power and their Basic Ability cooldowns recharge 150% faster. Cannot be used on Ana.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 70,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_nano_bost.png",
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
      id: "AnaEyeOfHorusActivate",
      name: "Eye of Horus",
      descriptionShort: "Fire unlimited range healing and damaging rounds",
      descriptionLong: "Assume a sniping position, gaining the ability to fire up to 6 specialized rounds with unlimited range. Rounds pierce allied and enemy Heroes but collide with enemy Structures in their path. Allies are healed for 225 (+4% / level) and enemies are damaged for 135 (+4% / level). Deals 50% less damage to Structures. Ana is unable to move while Eye of Horus is active.",
      cost: {
        type: "Mana",
        amount: 45
      },
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_overwatch.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 60,
        magicalDamage: 3.3333333333333335
      }
    }
  ],
  talents: [
    [
      {
        id: "AnaBioticGrenadeContactHealing",
        name: "Contact Healing",
        descriptionShort: "Increase Biotic Grenade healing on multiple Heroes",
        descriptionLong: "Biotic Grenade heals for 30% more per allied and enemy Hero hit.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_biotic_grenade.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 2,
          magicalDamage: 0
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "AnaBioticGrenade"
        ]
      },
      {
        id: "AnaSleepingDartSlumberShells",
        name: "Slumber Shells",
        descriptionShort: "Lower Sleep Dart cooldown, Slows",
        descriptionLong: "Reduce the cooldown of Sleep Dart by 2 seconds. Upon waking, enemy Heroes are Slowed by 25% for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_sleep_dart.png",
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
          "AnaSleepDart"
        ]
      },
      {
        id: "AnaShrikeVampiricRounds",
        name: "Vampiric Rounds",
        descriptionShort: "Quest: Increase Shrike Healing",
        descriptionLong: "Quest: Stack 5 Doses on an enemy Hero or Basic Attack a Hero with 5 Doses. Reward: Stack 5 Doses to increase Shrike's healing by 0.25%. Reward: Basic Attack a Hero with 5 Doses to increase Shrike's healing by 0.25%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_shrike.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.03333333333333333,
          magicalDamage: 0
        },
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "AnaAimDownSightsDeactivate",
          "AnaAimDownSightsActivate"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "AnaBioticGrenadeBioticEnhancements",
        name: "Biotic Enhancements",
        descriptionShort: "Empower Biotic Grenade",
        descriptionLong: "Increase the bonus healing duration of Biotic Grenade by 50% and reduce its cooldown by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_biotic_grenade.png",
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
          "AnaBioticGrenade"
        ]
      },
      {
        id: "AnaOverdose",
        name: "Overdose",
        descriptionShort: "Sleep Dart applies Doses, pierces",
        descriptionLong: "Sleep Dart applies 4 Doses.  While Aim Down Sights is active, Sleep Dart pierces all enemy Heroes.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_sleep_dart.png",
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
          "AnaSleepDart"
        ]
      },
      {
        id: "AnaDebilitatingDart",
        name: "Debilitating Dart",
        descriptionShort: "Fire a dart that reduces damage and Slows",
        descriptionLong: "Activate to fire a dart which Slows the Movement Speed and reduces the damage dealt by the first enemy Hero it hits by 50% for 4 seconds.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_debilitatingdart.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4"
      }
    ],
    [
      {
        id: "AnaBioticGrenadeAntiHealer",
        name: "Anti-Healer",
        descriptionShort: "Empower Biotic Grenade",
        descriptionLong: "Increase the area of Biotic Grenade by 25% and the duration of the healing reduction by 0.75 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_biotic_grenade.png",
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
          "AnaBioticGrenade"
        ]
      },
      {
        id: "AnaSleepDartNightTerrors",
        name: "Night Terrors",
        descriptionShort: "Empowers Sleep Dart",
        descriptionLong: "Gain 25% Movement Speed for 2 seconds for every Hero hit by Sleep Dart. Upon waking, enemy Heroes take 8% of their Maximum Health in damage.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_sleep_dart.png",
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
          "AnaSleepDart"
        ]
      },
      {
        id: "AnaMindNumbingAgent",
        name: "Mind-Numbing Agent",
        descriptionShort: "Doses decrease Spell Power",
        descriptionLong: "Every Dose a Hero has reduces their Spell Power by 10%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_shrike.png",
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
          "AnaAimDownSightsDeactivate",
          "AnaAimDownSightsActivate"
        ]
      }
    ],
    [
      {
        id: "AnaHeroicAbilityNanaBoost",
        name: "Nano Boost",
        descriptionShort: "Grant ally Spell Power, reduced cooldowns",
        descriptionLong: "Instantly boost an allied Hero, restoring 200 Mana. For the next 8 seconds, they gain 30% Spell Power and their Basic Ability cooldowns recharge 150% faster. Cannot be used on Ana.",
        cost: {
          type: "Mana",
          amount: 60
        },
        cooldown: 70,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_nano_bost.png",
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
          "AnaNanoBoost"
        ]
      },
      {
        id: "AnaHeroicAbilityEyeOfHorus",
        name: "Eye of Horus",
        descriptionShort: "Fire unlimited range healing and damaging rounds",
        descriptionLong: "Assume a sniping position, gaining the ability to fire up to 6 specialized rounds with unlimited range. Rounds pierce allied and enemy Heroes but collide with enemy Structures in their path. Allies are healed for 225 (+4% / level) and enemies are damaged for 135 (+4% / level). Deals 50% less damage to Structures. Ana is unable to move while Eye of Horus is active.",
        cost: {
          type: "Mana",
          amount: 45
        },
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_overwatch.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 60,
          magicalDamage: 3.3333333333333335
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "AnaEyeOfHorusActivate"
        ]
      }
    ],
    [
      {
        id: "AnaHealingDartSpeedSerum",
        name: "Speed Serum",
        descriptionShort: "Healing Dart grants Move Speed",
        descriptionLong: "Healing Dart grants 25% Movement Speed to affected Heroes for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_healing_dart.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 1.6666666666666667,
          magicalDamage: 0
        },
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "AnaHealingDart"
        ]
      },
      {
        id: "AnaHealingDartPurifyingDarts",
        name: "Purifying Darts",
        descriptionShort: "Healing Dart removes Roots, Slows",
        descriptionLong: "Healing Dart removes Roots and Slows from the target, and heals for 20% more when doing so.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_healing_dart_a.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 1.3333333333333333,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "AnaHealingDart"
        ]
      },
      {
        id: "AnaHealingDartSmellingSalts",
        name: "Smelling Salts",
        descriptionShort: "Healing Dart removes Stuns",
        descriptionLong: "Healing Dart removes Stuns from the target, and grants them 50 Armor for 2 seconds when doing so.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_healing_dart_b.png",
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
          "AnaHealingDart"
        ]
      }
    ],
    [
      {
        id: "AnaHealingDartSharpshooter",
        name: "Sharpshooter",
        descriptionShort: "Empower consecutive Healing Darts",
        descriptionLong: "Healing Dart's healing is increased by 5% if it heals a Hero, up to 50%. This bonus is reset if Healing Dart fails to hit a Hero.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_healing_dart.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 3.666666666666667,
          magicalDamage: 0
        },
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "AnaHealingDart"
        ]
      },
      {
        id: "AnaHealingDartConcentratedDoses",
        name: "Concentrated Doses",
        descriptionShort: "Doses empower Healing Dart",
        descriptionLong: "Increase Healing Dart's healing by 10% for each Dose active on enemy Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_healing_dart_a.png",
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
          "AnaHealingDart"
        ]
      },
      {
        id: "AnaDetachableBoxMagazine",
        name: "Active Reload",
        descriptionShort: "Gain extra Healing Dart charges",
        descriptionLong: "Activate to instantly gain 3 charges of Healing Dart.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_healing_dart_b.png",
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
          "AnaHealingDart"
        ]
      }
    ],
    [
      {
        id: "AnaNanoInfusion",
        name: "Nano Infusion",
        descriptionShort: "Nano Boost heals for damage dealt",
        descriptionLong: "Allies affected by Nano Boost heal for 50% of Spell Damage dealt.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_nano_bost.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 3.3333333333333335,
          magicalDamage: 0
        },
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "AnaNanoBoost"
        ],
        prerequisiteTalentIds: [
          "AnaHeroicAbilityNanaBoost"
        ]
      },
      {
        id: "AnaEyeOfHorusDeadeye",
        name: "Deadeye",
        descriptionShort: "Hitting Heroes increases healing and damage",
        descriptionLong: "Increase Eye Of Horus' healing and damage by 4% for every Hero hit. This bonus resets after all shots have been fired.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_overwatch.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.26666666666666666,
          magicalDamage: 0
        },
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "AnaEyeOfHorusActivate"
        ],
        prerequisiteTalentIds: [
          "AnaHeroicAbilityEyeOfHorus"
        ]
      },
      {
        id: "AnaShrikeArmoredStance",
        name: "Armored Stance",
        descriptionShort: "Empower Shrike",
        descriptionLong: "Increase Shrike's damage by 50%. While Aim Down Sights is active, gain 25 Armor.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_aim_down_sights.png",
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
          "AnaAimDownSightsDeactivate",
          "AnaAimDownSightsActivate"
        ]
      },
      {
        id: "AnaDynamicOptics",
        name: "Dynamic Optics",
        descriptionShort: "Empower Basic Attacks",
        descriptionLong: "Basic Attacks increase Attack Speed by 10% for 3 seconds, up to 100%. While Aim Down Sights is active, increase your Basic Attack Range by 4.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_ana_aim_down_sights_a.png",
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
          "AnaAimDownSightsDeactivate",
          "AnaAimDownSightsActivate"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 48.150659133709986,
    physicalDamage: 20,
    mobility: 17.38446396885035,
    healing: 100,
    magicalDamage: 4.7954689911922275
  }
};
      
export default ana;