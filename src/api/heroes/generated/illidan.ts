import { Hero } from '../heroes';
      
const illidan: Hero = {
  name: "Illidan",
  nameNormalized: "illidan",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.625,
  movementSpeed: 4.8398,
  health: {
    amount: 1725,
    scale: 0.04,
    regenRate: 3.5898,
    regenScale: 0.04
  },
  autoAttacks: [
    {
      nameId: "HeroIllidan",
      range: 1.25,
      period: 0.55,
      damage: 78,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/illidan.png",
  abilities: [
    {
      id: "IllidanBetrayersThirst",
      name: "Betrayer's Thirst",
      descriptionShort: "Basic Attacks heal for part of the damage dealt and reduce Ability cooldowns",
      descriptionLong: "Basic Attacks heal for 30% of damage dealt and reduce Ability cooldowns by 1 second.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_betrayersthirst.png",
      isPassive: true,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 2,
        magicalDamage: 0
      }
    },
    {
      id: "IllidanDive",
      name: "Dive",
      descriptionShort: "Dive and flip over an enemy",
      descriptionLong: "Dive at the target, dealing 66 (+4% / level) damage and flipping to the other side of the target.",
      cooldown: 6,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_dive.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 44
      }
    },
    {
      id: "IllidanSweepingStrike",
      name: "Sweeping Strike",
      descriptionShort: "Dash and damage enemies while gaining Basic Attack damage",
      descriptionLong: "Dash towards target point, dealing 119 (+4% / level) damage to enemies along the way. Hitting an enemy increases Illidan's Basic Attack damage by 35% for 3 seconds.",
      cooldown: 8,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 1
      },
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_sweepingstrike.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 59.5
      }
    },
    {
      id: "IllidanEvasion",
      name: "Evasion",
      descriptionShort: "Evade enemy Basic Attacks",
      descriptionLong: "Evade enemy Basic Attacks for 2.5 seconds.",
      cooldown: 15,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_evasion.png",
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
      id: "IllidanTheHunt",
      name: "The Hunt",
      descriptionShort: "Charge a target from a very long range",
      descriptionLong: "Charge to target unit, dealing 251 (+4% / level) damage on impact and stunning for 1 second.",
      cooldown: 100,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_thehunt.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 66.93333333333334
      }
    },
    {
      id: "IllidanMetamorphosisTargeted",
      name: "Metamorphosis",
      descriptionShort: "Damage area and increase max Health",
      descriptionLong: "Transform into Demon Form at the target location, dealing 46 (+4% / level) damage in the area. Temporarily increases maximum Health by 220 (+4% / level) for each Hero hit by the initial impact. Lasts for 18 seconds.",
      cooldown: 120,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_metamorphosis.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 12.266666666666666
      }
    }
  ],
  talents: [
    [
      {
        id: "IllidanMasteryImmolationSweepingStrike",
        name: "Immolation",
        descriptionShort: "Sweeping Strike deals area damage",
        descriptionLong: "After using Sweeping Strike, burn nearby enemies for 22 (+4% / level) damage a second for 4 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_sweepingstrike.png",
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
          "IllidanSweepingStrike"
        ]
      },
      {
        id: "IllidanMasteryBatteredAssaultSweepingStrike",
        name: "Battered Assault",
        descriptionShort: "Increases Sweeping Strike damage bonus",
        descriptionLong: "Increase Sweeping Strike's Basic Attack damage bonus duration from 3 to 5 seconds. If Sweeping Strike hits 2 Heroes its damage bonus is increased from 35% to 125%.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_sweepingstrike_a.png",
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
          "IllidanSweepingStrike"
        ]
      },
      {
        id: "IllidanUnendingHatredPassive",
        name: "Unending Hatred",
        descriptionShort: "Quest: Killing enemies grants Basic Attack damage",
        descriptionLong: "Quest: Minion kills grant 0.2 Basic Attack Damage. Hero Takedowns grant 1 Basic Attack Damage. Reward: After gaining 20 increased Basic Attack Damage, receive an additional 20 Basic Attack Damage.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_seasonedmarksman.png",
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
        isQuest: true
      }
    ],
    [
      {
        id: "IllidanReflexiveBlock",
        name: "Reflexive Block",
        descriptionShort: "Dive grants Physical Armor",
        descriptionLong: "Using Dive grants 75 Physical Armor against the next 3 Hero Basic Attacks for 4 seconds, reducing the damage taken by 75%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_dive.png",
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
          "IllidanDive"
        ]
      },
      {
        id: "IllidanSweepingStrikesThirstingBlade",
        name: "Thirsting Blade",
        descriptionShort: "Sweeping Strike grants more Lifesteal",
        descriptionLong: "Betrayer's Thirst's healing from Basic Attacks is increased from 30% to 50% while Sweeping Strike's damage bonus is active.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_betrayersthirst.png",
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
          "IllidanBetrayersThirst"
        ]
      },
      {
        id: "IllidanCombatStyleHuntersOnslaught",
        name: "Hunter's Onslaught",
        descriptionShort: "Damage from Basic Abilities heals",
        descriptionLong: "Basic Abilities heal for 35% of the damage they deal. This bonus is doubled versus Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_betrayersthirst_a.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 2.3333333333333335,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "IllidanBetrayersThirst"
        ]
      }
    ],
    [
      {
        id: "IllidanMasteryRapidChaseDive",
        name: "Rapid Chase",
        descriptionShort: "Dive increases Move Speed, reduces cooldown",
        descriptionLong: "Dive grants 20% Movement Speed for 3 seconds. If the target is an enemy Hero, reduce its cooldown by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_dive.png",
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
          "IllidanDive"
        ]
      },
      {
        id: "IllidanMasteryFriendOrFoeDive",
        name: "Friend or Foe",
        descriptionShort: "Increases Dive range and can Dive to allies",
        descriptionLong: "Increases the range of Dive by 20% and allows it to be used to dive to allied Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_dive_a.png",
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
          "IllidanDive"
        ]
      },
      {
        id: "IllidanMasteryUnboundSweepingStrike",
        name: "Unbound",
        descriptionShort: "Quest: Sweeping Strike can go over terrain",
        descriptionLong: "Sweeping Strike can go over walls and terrain. Reward: After hitting 15 Heroes with Sweeping Strike, gain a second charge.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_sweepingstrike.png",
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
          "IllidanSweepingStrike"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "IllidanHeroicAbilityMetamorphosis",
        name: "Metamorphosis",
        descriptionShort: "Damage area and increase max Health",
        descriptionLong: "Transform into Demon Form at the target location, dealing 46 (+4% / level) damage in the area. Temporarily increases maximum Health by 220 (+4% / level) for each Hero hit by the initial impact. Lasts for 18 seconds.",
        cooldown: 120,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_metamorphosis.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 12.266666666666666
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "IllidanMetamorphosisTargeted"
        ]
      },
      {
        id: "IllidanHeroicAbilityTheHunt",
        name: "The Hunt",
        descriptionShort: "Charge a target from a very long range",
        descriptionLong: "Charge to target unit, dealing 251 (+4% / level) damage on impact and stunning for 1 second.",
        cooldown: 100,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_thehunt.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 66.93333333333334
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "IllidanTheHunt"
        ]
      }
    ],
    [
      {
        id: "IllidanNimbleDefender",
        name: "Nimble Defender",
        descriptionShort: "Sweeping Strike grants Armor",
        descriptionLong: "If Sweeping Strike hits an enemy Hero, gain 25 Armor for 2 seconds, reducing damage taken by 25%.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_sweepingstrike.png",
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
          "IllidanSweepingStrike"
        ]
      },
      {
        id: "IllidanElusiveStrike",
        name: "Elusive Strike",
        descriptionShort: "Sweeping Strike reduces Evasion Cooldown",
        descriptionLong: "Sweeping Strike reduces the cooldown of Evasion by 3 seconds every time it damages an enemy Hero.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_evasion.png",
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
          "IllidanEvasion"
        ]
      },
      {
        id: "IllidanMasterySixthSenseEvasion",
        name: "Sixth Sense",
        descriptionShort: "Evasion grants Spell Armor",
        descriptionLong: "While active, Evasion grants Illidan 75 Spell Armor against the next 2 sources of Spell Damage, reducing their damage by 75%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_evasion_a.png",
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
          "IllidanEvasion"
        ]
      }
    ],
    [
      {
        id: "IllidanMasteryMarkedforDeathDive",
        name: "Marked for Death",
        descriptionShort: "Repeated Dives deal extra damage",
        descriptionLong: "Dive deals an extra 180 (+4% / level) damage if used consecutively on a target within 10 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_dive.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 48
        },
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "IllidanDive"
        ]
      },
      {
        id: "IllidanFieryBrand",
        name: "Fiery Brand",
        descriptionShort: "Consecutive Basic Attacks to Heroes are empowered",
        descriptionLong: "Every 3rd attack against the same Hero deals an additional 7% of their maximum Health as damage.",
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
        id: "IllidanBladesOfAzzinoth",
        name: "Blades of Azzinoth",
        descriptionShort: "Activate to increase Basic Attack damage",
        descriptionLong: "Hitting 5 Heroes with Sweeping Strike allows Blades of Azzinoth to be activated, increasing Basic Attack damage by 75% for 8 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 5,
          chargesInitial: 5,
          chargeCost: 5,
          recastCooldown: 8
        },
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_sweepingstrike_c.png",
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
        id: "IllidanMasteryDemonicFormMetamorphosis",
        name: "Demonic Form",
        descriptionShort: "Demon form lasts forever, grants Attack Speed",
        descriptionLong: "Permanently remain in Demonic Form. Metamorphosis also increases Attack Speed by 20% and reduces the duration of Stuns, Roots, and Slows by 50%. Illidan can now mount in Demonic Form.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_metamorphosis.png",
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
          "IllidanMetamorphosisTargeted"
        ],
        prerequisiteTalentIds: [
          "IllidanHeroicAbilityMetamorphosis"
        ]
      },
      {
        id: "IllidanMasteryNowhereToHideTheHunt",
        name: "Nowhere to Hide",
        descriptionShort: "Increases The Hunt range and reveal low Health Heroes",
        descriptionLong: "The Hunt gains unlimited range. Illidan passively reveals enemy Heroes below 25% Health anywhere on the Battleground.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_illidan_thehunt.png",
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
          "IllidanTheHunt"
        ],
        prerequisiteTalentIds: [
          "IllidanHeroicAbilityTheHunt"
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
    tankiness: 51.9774011299435,
    physicalDamage: 70.9090909090909,
    mobility: 17.38446396885035,
    healing: 0.3956217855729922,
    magicalDamage: 20.218435031326614
  }
};
      
export default illidan;