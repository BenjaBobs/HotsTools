import { Hero } from '../heroes';
      
const gazlowe: Hero = {
  name: "Gazlowe",
  nameNormalized: "gazlowe",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.75,
  movementSpeed: 4.8398,
  health: {
    amount: 2375,
    scale: 0.04,
    regenRate: 4.95,
    regenScale: 0.04
  },
  energy: {
    amount: 10,
    regenRate: 0,
    name: "Scrap"
  },
  autoAttacks: [
    {
      nameId: "HeroTinker",
      range: 1.25,
      period: 0.8,
      damage: 100,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/gazlowe.png",
  abilities: [
    {
      id: "GazloweSalvagerSalvageTurretAbility",
      name: "Reduce, Reuse, Recycle",
      descriptionShort: "Regenerate Scrap, salvage Rock-It! Turrets",
      descriptionLong: "Regenerate 1 Scrap every 4 seconds. Destroyed Rock-It! Turrets drop 1 Scrap, which can be picked up. Activate to destroy a target Rock-It! Turret.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_salvager.png",
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
      id: "TinkerRockItTurret",
      name: "Rock-It! Turret",
      descriptionShort: "Create a turret that shoots at nearby enemies",
      descriptionLong: "Create a turret that deals 38 (+4% / level) damage. Lasts for 15 seconds. Turrets prioritize the nearest enemy Hero when first created.",
      cost: {
        type: "Scrap",
        amount: 4
      },
      cooldown: null,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_rockitturret.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 2.533333333333333
      }
    },
    {
      id: "GazloweDethLazor",
      name: "Deth Lazor",
      descriptionShort: "Damage targets in a line",
      descriptionLong: "After 0.65 seconds, deal 180 (+4% / level) damage to enemies in a line. Heal for 25% of the damage dealt, increased to 75% against enemy Heroes.",
      cooldown: 8,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 1
      },
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_dethlazor.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 6.25,
        magicalDamage: 22.5
      }
    },
    {
      id: "TinkerXplodiumBomb",
      name: "Xplodium Charge",
      descriptionShort: "Throw a timed bomb which stuns and damages enemies in an area",
      descriptionLong: "Place a bomb that deals 142 (+4% / level) damage to enemies within the target area after 1.25 seconds.  Enemies hit are also Stunned for 1 second.",
      cooldown: 12,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 3
      },
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_explodiumcharge.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 11.833333333333332
      }
    },
    {
      id: "TinkerRoboGoblin",
      name: "Robo-Goblin",
      descriptionShort: "Gain Unstoppable, increase Basic Attack damage",
      descriptionLong: "Activate to become Unstoppable for 1.5 seconds. Passive: Basic Attacks deal 90 (+4% / level) bonus damage over 5 seconds, stacking up to 3 times.",
      cooldown: 40,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_robogoblin.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 6
      }
    },
    {
      id: "TinkerGravOBomb3000",
      name: "Grav-O-Bomb 3000",
      descriptionShort: "Pulls and damages enemies",
      descriptionLong: "After a 1.5 second delay, pull enemies toward the center of an area and deal 220 (+4% / level) damage. Basic Abilities deal 30% more damage for 5 seconds after casting Grav-O-Bomb 3000.",
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_gravobomb.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 14.666666666666666
      }
    }
  ],
  talents: [
    [
      {
        id: "GazloweXplodiumChargeRocketBoots",
        name: "Rocket Boots",
        descriptionShort: "Increase Xplodium Charge cast range, damage",
        descriptionLong: "Increase the cast range of Xplodium Charge by 30% and its damage by 35%. Hitting an enemy Hero increases Movement Speed by 20% for 3 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 3
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_explodiumcharge.png",
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
          "TinkerXplodiumBomb"
        ]
      },
      {
        id: "GazloweBigGameHunter",
        name: "Big Game Hunter",
        descriptionShort: "Hitting Heroes, Mercs, Monsters increase Scrap",
        descriptionLong: "Increase maximum Scrap by 2. Basic Attacks against enemy Heroes, Mercenaries, or Monsters accelerates Reduce, Reuse, Recycle Scrap regeneration by 1.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_salvager.png",
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
          "GazloweSalvagerSalvageTurretAbility"
        ]
      },
      {
        id: "GazloweOneManWreckingCrew",
        name: "One Man Wrecking Crew",
        descriptionShort: "Basic Abilities empower Basic Attacks",
        descriptionLong: "Casting Basic Abilities cause Gazlowe's next Basic Attack within 6 seconds to deal 60% more damage.  Stores up to 2 charges.",
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
        tier: "level1",
        linkedAbilityIds: [
          "GazloweSalvagerSalvageTurretAbility"
        ]
      }
    ],
    [
      {
        id: "GazloweRockItSockIt",
        name: "Rock It Sock It",
        descriptionShort: "Casting Rock-It! Turret grants a Shield",
        descriptionLong: "Casting Rock-It! Turret grants Gazlowe a Shield that absorbs up to 200 (+4% / level) damage for 2.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_rockitturret.png",
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
          "TinkerRockItTurret"
        ]
      },
      {
        id: "GazloweHyperfocusCoils",
        name: "Hyperfocus Coils",
        descriptionShort: "Deth Lazor and Xplodium Charge deal bonus damage, heal",
        descriptionLong: "Heroes hit by Deth Lazor or Xplodium Charge take an additional 2% of their maximum Health in damage. Gazlowe is healed for 150% of the damage dealt.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_combo_w_e.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 20,
          magicalDamage: 0
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "GazloweDethLazor",
          "TinkerXplodiumBomb"
        ]
      },
      {
        id: "TinkerMasteryEZPZDimensionalRipper",
        name: "EZ-PZ Dimensional Ripper",
        descriptionShort: "Activate to gain Armor, reduce enemy damage",
        descriptionLong: "Activate to gain 40 Armor for 3 seconds, reducing damage taken by 40%, and reduce damage dealt by all nearby enemy Heroes and Summons by 50% for 3 seconds",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_imposingpresence.png",
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
        id: "TinkerMasteryGoblinFusion",
        name: "Goblin Fusion",
        descriptionShort: "Deth Lazor can generate Scrap",
        descriptionLong: "Generate 3 Scrap for each Hero hit by Deth Lazor.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_combo_q_w.png",
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
          "TinkerRockItTurret",
          "GazloweDethLazor"
        ]
      },
      {
        id: "GazloweOverload",
        name: "Overload",
        descriptionShort: "Gain an additional Deth Lazor charge",
        descriptionLong: "Deth Lazor can now store up to 2 charges. Each enemy Hero hit by Deth Lazor reduces its cooldown by 0.75 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_dethlazor_a.png",
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
          "GazloweDethLazor"
        ]
      },
      {
        id: "GazloweMasterBlaster",
        name: "Master Blaster",
        descriptionShort: "Deth Lazor and Xplodium Charge Slow",
        descriptionLong: "Deth Lazor and Xplodium Charge Slow enemies hit by 35% for 3 seconds. Rock-It! Turret Basic Attacks against enemies Slowed in this way extend the Slow duration by 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_combo_w_e.png",
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
          "GazloweDethLazor",
          "TinkerXplodiumBomb"
        ]
      }
    ],
    [
      {
        id: "TinkerHeroicAbilityRoboGoblin",
        name: "Robo-Goblin",
        descriptionShort: "Gain Unstoppable, increase Basic Attack damage",
        descriptionLong: "Activate to become Unstoppable for 1.5 seconds. Passive: Basic Attacks deal 90 (+4% / level) bonus damage over 5 seconds, stacking up to 3 times.",
        cooldown: 40,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_robogoblin.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 6
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "TinkerRoboGoblin"
        ]
      },
      {
        id: "TinkerHeroicAbilityGravOBomb3000",
        name: "Grav-O-Bomb 3000",
        descriptionShort: "Pulls and damages enemies",
        descriptionLong: "After a 1.5 second delay, pull enemies toward the center of an area and deal 220 (+4% / level) damage. Basic Abilities deal 30% more damage for 5 seconds after casting Grav-O-Bomb 3000.",
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_gravobomb.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 14.666666666666666
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "TinkerGravOBomb3000"
        ]
      }
    ],
    [
      {
        id: "GazloweRockItTurretPositiveReinforcement",
        name: "Positive Reinforcement",
        descriptionShort: "Rock-It! Turret attacks increase Attack Speed",
        descriptionLong: "Primary Rock-It! Turret attacks against Heroes increase Gazlowe's Attack Speed by 40% for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_rockitturret.png",
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
          "TinkerRockItTurret"
        ]
      },
      {
        id: "GazloweRockItTurretSuperiorSchematics",
        name: "Superior Schematics",
        descriptionShort: "Rock-It! Turrets attack multiple enemies",
        descriptionLong: "Rock-It! Turrets attack up to 2 additional enemies for 60% damage and have 30% increased Basic Attack range.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_rockitturret_var1.png",
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
          "TinkerRockItTurret"
        ]
      },
      {
        id: "GazloweRockItTurretOverchargedCapacitors",
        name: "Overcharged Capacitors",
        descriptionShort: "Rock-It! Turrets increase Spell Power, duration",
        descriptionLong: "Gazlowe gains 5% Spell Power for each active Rock-It! Turret, up to a maximum of 15%. Dealing Basic Attack damage extends the duration of Rock-It! Turrets by 1.25 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_rockitturret_var2.png",
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
          "TinkerRockItTurret"
        ]
      }
    ],
    [
      {
        id: "GazloweDethLazorFirinMahLazorz",
        name: "Firin' Mah Lazorz",
        descriptionShort: "Rock It! Turrets fire Deth Lazorz",
        descriptionLong: "Firing Deth Lazor causes all of Gazlowe's Rock-It! Turrets to fire a Deth Lazor of their own that deals 125 (+4% / level) damage.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_dethlazor.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 8.333333333333334
        },
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "GazloweDethLazor"
        ]
      },
      {
        id: "GazloweXplodiumChargeArkReaktor",
        name: "Ark Reaktor",
        descriptionShort: "Xplodium Charge creates Turrets, reduce cooldown",
        descriptionLong: "Reduce the cooldown of Xplodium Charge by 2 seconds. Casting Xplodium Charge creates 3 miniature Rock-It! Turrets that last for 3 seconds. These Turrets do not drop Scrap or benefit from other Talents.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 3
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_explodiumcharge.png",
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
          "TinkerXplodiumBomb"
        ]
      },
      {
        id: "GazloweOverklock",
        name: "Overklock",
        descriptionShort: "Attacks grant Move Speed, deal bonus damage",
        descriptionLong: "Basic Attacks grant Gazlowe 15% Movement Speed for 2 seconds. Dealing Basic Attack damage to Heroes causes them to take an additional 2.5% of their maximum Health as damage.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_searing.png",
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
          "GazloweSalvagerSalvageTurretAbility"
        ]
      }
    ],
    [
      {
        id: "TinkerMasteryMechaLord",
        name: "Mecha-Lord",
        descriptionShort: "Basic Attacks grant Armor, can deal bonus damage",
        descriptionLong: "Basic Attacks increase Gazlowe's Armor by 10 for 10 seconds, up to a maximum of 30, and deal 50% bonus damage to Stunned or Slowed enemies.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_robogoblin.png",
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
          "TinkerRoboGoblin"
        ],
        prerequisiteTalentIds: [
          "TinkerHeroicAbilityRoboGoblin"
        ]
      },
      {
        id: "TinkerMasteryMiniatureBlackHole",
        name: "Miniature Black Hole",
        descriptionShort: "Increase radius and damage, reduce cooldown",
        descriptionLong: "Increase Grav-O-Bomb 3000's radius by 25% and its damage by 50%. Each enemy Hero pulled reduces its cooldown by 12 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_gravobomb.png",
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
          "TinkerGravOBomb3000"
        ],
        prerequisiteTalentIds: [
          "TinkerHeroicAbilityGravOBomb3000"
        ]
      },
      {
        id: "TinkerItsRainingScrap",
        name: "It's Raining Scrap",
        descriptionShort: "Rock-It! Turrets cost less Scrap, grant more Scrap",
        descriptionLong: "Reduce the Scrap cost of Rock-It! Turrets by 1. Regain 2 Scrap for each Scrap pickup.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_rockitturret.png",
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
          "TinkerRockItTurret"
        ]
      },
      {
        id: "GazloweXplodiumChargeBombToss",
        name: "Bomb Toss",
        descriptionShort: "Xplodium Charge releases more bombs",
        descriptionLong: "Xplodium Charge gains a 2nd charge with a 3 second cooldown between uses and launches 2 more bombs when it detonates.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 3
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gazlowe_explodiumcharge.png",
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
          "TinkerXplodiumBomb"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 71.56308851224105,
    physicalDamage: 62.5,
    mobility: 24.199,
    healing: 8.203535176758837,
    magicalDamage: 25.46762916553164
  }
};
      
export default gazlowe;