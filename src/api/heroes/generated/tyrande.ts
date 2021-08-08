import { Hero } from '../heroes';
      
const tyrande: Hero = {
  name: "Tyrande",
  nameNormalized: "tyrande",
  franchise: "Warcraft",
  gender: "Female",
  size: 0.625,
  movementSpeed: 4.8398,
  health: {
    amount: 1511,
    scale: 0.04,
    regenRate: 3.1484,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "TyrandeHeroWeapon",
      range: 6,
      period: 0.75,
      damage: 55,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/tyrande.png",
  abilities: [
    {
      id: "TyrandeHuntersMark",
      name: "Hunter's Mark",
      descriptionShort: "Lowers Armor and Reveals Marked target",
      descriptionLong: "Reveal a non-Structure enemy and reduce their Armor by 15 for 4 seconds. Passive: Tyrande's Basic Attacks heal her for 1% of her maximum Health, doubled against targets with Hunter's Mark.",
      cooldown: 20,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_huntersmark.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0.13333333333333333,
        magicalDamage: 0
      }
    },
    {
      id: "TyrandeLightofElune",
      name: "Light of Elune",
      descriptionShort: "Heal an allied Hero",
      descriptionLong: "Heal an ally Hero for 270 (+4% / level). Light of Elune's cooldown is reduced by 1.5 seconds every time Tyrande hits an enemy with a Basic Attack or damages an enemy Hero. Stores up to 2 charges. Cooldown replenishes all charges at the same time.",
      cost: {
        type: "Mana",
        amount: 15
      },
      cooldown: 16,
      charges: {
        chargesMax: 2,
        chargesInitial: 2,
        chargeCost: 1,
        recastCooldown: 0.5
      },
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_lightofelune.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 3.6,
        magicalDamage: 0
      }
    },
    {
      id: "TyrandeSentinelShot",
      name: "Sentinel",
      descriptionShort: "Fire a scouting Owl that reveals and damages enemy Heroes",
      descriptionLong: "Send an Owl across the battleground revealing its path, dealing 120 (+4% / level) damage to the first Hero hit, and revealing them for 5 seconds. If a Hero revealed by Sentinel dies, refresh its cooldown.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 15,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_sentinel.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 8
      }
    },
    {
      id: "TyrandeLunarFlare",
      name: "Lunar Flare",
      descriptionShort: "Stun and damage enemies in an area",
      descriptionLong: "After 0.75 seconds, deal 150 (+4% / level) damage and Stun enemies in the target area for 0.75 seconds.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 13,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_lunarflare.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 11.538461538461538
      }
    },
    {
      id: "TyrandeShadowstalk",
      name: "Shadowstalk",
      descriptionShort: "Heal and Stealth all allies",
      descriptionLong: "Grant all allied Heroes Stealth for 10 seconds and heal them for 380 (+4% / level) Health over 10 seconds. Remaining stationary for at least 1.5 seconds while Stealthed grants Invisible.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 90,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_shadowstalk.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 10.133333333333333,
        magicalDamage: 0
      }
    },
    {
      id: "TyrandeStarfall",
      name: "Starfall",
      descriptionShort: "Damage and Slow enemies in an area",
      descriptionLong: "Deal 92 (+4% / level) damage per second and Slow enemies by 20% in an area. Lasts 6 seconds.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 80,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_starfall.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 6.133333333333333
      }
    }
  ],
  talents: [
    [
      {
        id: "TyrandeRanger",
        name: "Ranger",
        descriptionShort: "Sentinel pierces and deals more damage",
        descriptionLong: "Sentinel pierces the first Hero hit. Its width is increased by 25% and deals up to 250% more damage based on distance traveled.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_sentinel.png",
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
          "TyrandeSentinelShot"
        ]
      },
      {
        id: "TyrandeMasteryLunarBlaze",
        name: "Lunar Blaze",
        descriptionShort: "Quest: Increase Lunar Flare range, damage",
        descriptionLong: "Increase Lunar Flare's range by 30%. Quest: Hitting a Hero with Lunar Flare increases its damage by 5%, up to 100%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_lunarflare.png",
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
          "TyrandeLunarFlare"
        ],
        isQuest: true
      },
      {
        id: "TyrandeTrueshotAura",
        name: "Trueshot Aura",
        descriptionShort: "Gain Attack Damage, reset Hunter's Mark",
        descriptionLong: "Passive: Basic Attack damage increased by 30%. Activate to reset the cooldown of Hunter's Mark, increase the bonus of Trueshot Aura to 30%, and apply it to other nearby allied Heroes for 5 seconds.",
        cooldown: 45,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_trueshotaura.png",
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
          "TyrandeHuntersMark"
        ]
      }
    ],
    [
      {
        id: "TyrandeLightOfEluneEverlastingLight",
        name: "Everlasting Light",
        descriptionShort: "Increase Light of Elune healing on multiple targets",
        descriptionLong: "If Light of Elune's second charge is cast on a different target from the first, it heals for 80% more.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_lightofelune.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 10.666666666666666,
          magicalDamage: 0
        },
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "TyrandeLightofElune"
        ]
      },
      {
        id: "TyrandeMarkofMending",
        name: "Mark of Mending",
        descriptionShort: "Marked enemies heal nearby Allies",
        descriptionLong: "Basic Attacks against Marked targets Heal all nearby allied Heroes for 4% of their maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_huntersmark.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 1.0666666666666667,
          magicalDamage: 0
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "TyrandeHuntersMark"
        ]
      },
      {
        id: "TyrandeElunesChosen",
        name: "Elune's Chosen",
        descriptionShort: "Basic Attacks heal target Hero",
        descriptionLong: "Activate to make Tyrande's Basic Attacks heal target allied Hero for 175% of the damage dealt. Lasts for 8 seconds.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_heal.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 23.333333333333332,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4"
      }
    ],
    [
      {
        id: "TyrandeMoonlitArrows",
        name: "Moonlit Arrows",
        descriptionShort: "Increase Light of Elune cooldown reduction",
        descriptionLong: "Basic Attacks decrease the cooldown of Light of Elune by an additional 0.75 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_lightofelune.png",
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
          "TyrandeLightofElune"
        ]
      },
      {
        id: "TyrandeKaldoreiResistance",
        name: "Kaldorei Resistance",
        descriptionShort: "Light of Elune grants Spell Armor",
        descriptionLong: "Light of Elune grants the target 10 Spell Armor for 2 seconds. This effect stacks up to 2 times.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_lightofelune_a.png",
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
          "TyrandeLightofElune"
        ]
      },
      {
        id: "TyrandeHuntressFury",
        name: "Huntress' Fury",
        descriptionShort: "Hunter's Mark makes Basic Attacks splash",
        descriptionLong: "Increase the cast range and duration of Hunter's Mark by 25%. Tyrande's Basic Attacks against targets with Hunter's Mark splash to nearby enemy Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_huntersmark.png",
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
          "TyrandeHuntersMark"
        ]
      }
    ],
    [
      {
        id: "TyrandeHeroicAbilityShadowstalk",
        name: "Shadowstalk",
        descriptionShort: "Heal and Stealth all allies",
        descriptionLong: "Grant all allied Heroes Stealth for 10 seconds and heal them for 380 (+4% / level) Health over 10 seconds. Remaining stationary for at least 1.5 seconds while Stealthed grants Invisible.",
        cost: {
          type: "Mana",
          amount: 75
        },
        cooldown: 90,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_shadowstalk.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 10.133333333333333,
          magicalDamage: 0
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "TyrandeShadowstalk"
        ]
      },
      {
        id: "TyrandeHeroicAbilityStarfall",
        name: "Starfall",
        descriptionShort: "Damage and Slow enemies in an area",
        descriptionLong: "Deal 92 (+4% / level) damage per second and Slow enemies by 20% in an area. Lasts 6 seconds.",
        cost: {
          type: "Mana",
          amount: 75
        },
        cooldown: 80,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_starfall.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 6.133333333333333
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "TyrandeStarfall"
        ]
      }
    ],
    [
      {
        id: "TyrandeMasteryLightofEluneQuickeningBlessing",
        name: "Quickening Blessing",
        descriptionShort: "Light of Elune increases Movement Speed",
        descriptionLong: "Gain 5% Movement Speed. Light of Elune increases the target's Movement Speed by 20% for 3 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_lightofelune.png",
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
          "TyrandeLightofElune"
        ]
      },
      {
        id: "TyrandeHarshMoonlight",
        name: "Harsh Moonlight",
        descriptionShort: "Sentinel Slows and reduces damage dealt",
        descriptionLong: "Sentinel Slows enemies hit by 35% and reduces their damage dealt by 35% for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_sentinel.png",
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
          "TyrandeSentinelShot"
        ]
      },
      {
        id: "TyrandeRangersMark",
        name: "Ranger's Mark",
        descriptionShort: "Basic Attacks empower Hunter's Mark, Lunar Flare",
        descriptionLong: "Basic Attacks reduce the cooldown of Hunter's Mark by 2 second. Basic Attacks against marked targets reduce the cooldown of Lunar Flare by 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_huntersmark.png",
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
          "TyrandeHuntersMark"
        ]
      }
    ],
    [
      {
        id: "TyrandeCelestialAttunement",
        name: "Celestial Attunement",
        descriptionShort: "Light of Elune removes Stuns, Silences, and Slows",
        descriptionLong: "Light of Elune removes Stuns, Silences, and Slows from its target.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_lightofelune.png",
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
          "TyrandeLightofElune"
        ]
      },
      {
        id: "TyrandeEmpower",
        name: "Empower",
        descriptionShort: "Sentinel cooldown reduced, deals percent damage",
        descriptionLong: "Reduce Sentinel's cooldown by 3 seconds. Heroes hit by Sentinel takes bonus damage equal to 7% of their maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_sentinel.png",
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
          "TyrandeSentinelShot"
        ]
      },
      {
        id: "TyrandeDarnassianArchery",
        name: "Darnassian Archery",
        descriptionShort: "Consecutive Basic Attacks deal more damage",
        descriptionLong: "Basic Attacks against enemy Heroes grant a stacking 12% increased Attack Damage bonus for 4 seconds.",
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
        tier: "level16",
        linkedAbilityIds: [
          "TyrandeHuntersMark"
        ]
      }
    ],
    [
      {
        id: "TyrandeEyesOfTheHuntress",
        name: "Eyes of the Huntress",
        descriptionShort: "Shadowstalk reveals enemies, heals more",
        descriptionLong: "Shadowstalk reveals all enemy Heroes for 10 seconds and heals for 50% more.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_shadowstalk.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 13.333333333333334,
          magicalDamage: 0
        },
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "TyrandeShadowstalk"
        ],
        prerequisiteTalentIds: [
          "TyrandeHeroicAbilityShadowstalk"
        ]
      },
      {
        id: "TyrandeMasteryStarfallCelestialWrath",
        name: "Celestial Wrath",
        descriptionShort: "Starfall applies Hunter's Mark and Slows more",
        descriptionLong: "Increase the Slow of Starfall to 40% and cause it to apply Hunter's Mark to enemy Heroes while inside of its area of effect.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tyrande_starfall.png",
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
          "TyrandeStarfall"
        ],
        prerequisiteTalentIds: [
          "TyrandeHeroicAbilityStarfall"
        ]
      },
      {
        id: "TyrandeShootingStar",
        name: "Shooting Star",
        descriptionShort: "Basic Attacks periodically cast Lunar Flare",
        descriptionLong: "Increase Basic Attack range by 1. Every 8th Basic Attack casts a free Lunar Flare at a random enemy near Tyrande's position. This prefers Heroic targets.",
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
        tier: "level20",
        linkedAbilityIds: [
          "TyrandeHuntersMark"
        ]
      },
      {
        id: "TyrandeIcebladeArrows",
        name: "Iceblade Arrows",
        descriptionShort: "Gain Attack Speed, reduce enemy damage dealt",
        descriptionLong: "Increase Attack Speed by 20%. Basic Attacks against enemy Heroes reduce their damage dealt by 8% for 2 seconds. This effect stacks up to 5 times.",
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
          magicalDamage: 0
        },
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "TyrandeHuntersMark"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 45.52919020715631,
    physicalDamage: 36.66666666666667,
    mobility: 24.199,
    healing: 18.200910045502276,
    magicalDamage: 11.363842731317533
  }
};
      
export default tyrande;