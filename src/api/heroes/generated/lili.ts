import { Hero } from '../heroes';
      
const lili: Hero = {
  name: "Li Li",
  nameNormalized: "lili",
  franchise: "Warcraft",
  gender: "Female",
  size: 0.625,
  movementSpeed: 4.8398,
  health: {
    amount: 1500,
    scale: 0.04,
    regenRate: 3.125,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroLiLi",
      range: 5.5,
      period: 0.8,
      damage: 60,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/lili.png",
  abilities: [
    {
      id: "LiLiFastFeet",
      name: "Fast Feet",
      descriptionShort: "When struck by enemies, gain Movement Speed",
      descriptionLong: "Upon taking damage, your Basic Ability cooldowns refresh 50% faster and you gain 10% Movement Speed for 1 second.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_fastfeet.png",
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
      id: "LiLiHealingBrew",
      name: "Healing Brew",
      descriptionShort: "Heal a nearby ally",
      descriptionLong: "Heal lowest Health ally (prioritizing Heroes) within 6 range for 175 (+4% / level) Health.",
      cost: {
        type: "Mana",
        amount: 25
      },
      cooldown: 4,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_healingbrew.png",
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
      id: "LiLiCloudSerpent",
      name: "Cloud Serpent",
      descriptionShort: "Summon a serpent to assist an ally",
      descriptionLong: "Summon a Cloud Serpent on an allied Hero that attacks nearby enemies every second. Each attack deals 26 (+4% / level) damage and heals the ally for 20 (+4% / level). Lasts for 8 seconds.",
      cost: {
        type: "Mana",
        amount: 35
      },
      cooldown: 11,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_cloudserpent.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0.36363636363636365,
        magicalDamage: 2.3636363636363638
      }
    },
    {
      id: "LiLiBlindingWind",
      name: "Blinding Wind",
      descriptionShort: "Blind, Slow, and damage nearby enemies",
      descriptionLong: "Throw a cloud of wind at the 2 nearest enemies (prioritizing Heroes), dealing 133 (+4% / level) damage. Heroes hit are Blinded and Slowed by 15% for 1.5 seconds.",
      cost: {
        type: "Mana",
        amount: 30
      },
      cooldown: 12,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_blindingwind.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 11.083333333333332
      }
    },
    {
      id: "LiLiJugof1000Cups",
      name: "Jug of 1,000 Cups",
      descriptionShort: "Rapidly heal nearby allies",
      descriptionLong: "Channel for up to 6 seconds. Every 0.25 seconds, increase the cooldown of Jug of 1,000 Cups by 2 seconds, up to 50 additional seconds, and heal the lowest Health nearby allied Hero for 66 (+4% / level) Health.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 20,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_jugofathousandcups.png",
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
      id: "LiLiWaterDragon",
      name: "Water Dragon",
      descriptionShort: "Damages and heavily slows nearest enemy Hero",
      descriptionLong: "Li Li channels for 2 seconds, summoning a Water Dragon that hits the nearest enemy Hero within 12 range and all enemies near them, dealing 300 (+4% / level) damage and slowing their Movement Speed by 70% for 4 seconds.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 50,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_waterdragon.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 20
      }
    }
  ],
  talents: [
    [
      {
        id: "LiLiFreeDrinks",
        name: "Free Drinks",
        descriptionShort: "Healing Brew cost reduced on low Health targets",
        descriptionLong: "Healing Brew's cooldown is reduced by 1 second and its Mana cost is refunded if it heals a Hero under 50% Health.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_healingbrew.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 6.666666666666667,
          magicalDamage: 0
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "LiLiHealingBrew"
        ]
      },
      {
        id: "LiLiMasteryCloudSerpentSerpentSidekick",
        name: "Serpent Sidekick",
        descriptionShort: "Reduce Cloud Serpent cost, cooldown",
        descriptionLong: "Cloud Serpent no longer costs Mana and while Fast Feet is active its cooldown refreshes an additional 75% faster.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_cloudserpent.png",
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
          "LiLiCloudSerpent"
        ]
      },
      {
        id: "LiLiEagerAdventurer",
        name: "Eager Adventurer",
        descriptionShort: "Increase Fast Feet duration",
        descriptionLong: "Increase Fast Feet's duration by 150% and increase Mana regeneration by 150% while Fast Feet is active.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_fastfeet.png",
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
          "LiLiSafetySprint",
          "LiLiFastFeet"
        ]
      }
    ],
    [
      {
        id: "LiLiWindSerpent",
        name: "Wind Serpent",
        descriptionShort: "Increase Serpent Attack Speed, grants Move Speed",
        descriptionLong: "Cloud Serpent grants its bearer 10% increased Movement Speed. Casting Blinding Wind increases this bonus to 20% for 3 seconds. Passive: Cloud Serpent attacks 25% faster.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_cloudserpent.png",
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
          "LiLiCloudSerpent"
        ]
      },
      {
        id: "LiLiMasteryBlindingWindSurgingWinds",
        name: "Surging Winds",
        descriptionShort: "Gain Spell Power from Blinding Wind",
        descriptionLong: "If Blinding Wind hits 2 Heroes, its cooldown is reduced by 2 seconds and Li Li gains 10% Spell Power for 10 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_blindingwind.png",
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
          "LiLiBlindingWind"
        ]
      },
      {
        id: "LiLiMasteryFastFeetSafetySprint",
        name: "Safety Sprint",
        descriptionShort: "Activate Fast Feet for a burst of speed",
        descriptionLong: "Activate to gain Fast Feet, 30 Armor, and 30% Movement Speed for 3 seconds. Passive: While Fast Feet is active, Li Li gains 10 Armor.",
        cooldown: 30,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_fastfeet.png",
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
          "LiLiSafetySprint",
          "LiLiFastFeet"
        ]
      }
    ],
    [
      {
        id: "LiLiMasteryHealingBrewTheGoodStuff",
        name: "The Good Stuff",
        descriptionShort: "Healing Brew also heals over time",
        descriptionLong: "Healing Brew heals for an additional 42 (+4% / level) over 3 seconds. While Fast Feet is active, this heal amount is increased by 100%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_healingbrew.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 13.893333333333334,
          magicalDamage: 0
        },
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "LiLiHealingBrew"
        ]
      },
      {
        id: "LiLiMasteryBlindingWindMassVortex",
        name: "Mass Vortex",
        descriptionShort: "Blinding Wind hits more targets",
        descriptionLong: "Increase the number of enemies hit by Blinding Wind from 2 to 3. Blinding Wind deals 75% additional damage if all 3 enemies hit are Heroes.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_blindingwind.png",
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
          "LiLiBlindingWind"
        ]
      },
      {
        id: "LiLiLetsGo",
        name: "Let's Go!",
        descriptionShort: "Activate to heal ally, make them Unstoppable",
        descriptionLong: "Activate to heal an allied Hero for 160 (+4% / level) and make them Unstoppable for 1 second. Let's Go's cooldown is affected by Fast Feet. Cannot be used on Li Li.",
        cooldown: 40,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_cleanse.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 2.1333333333333333,
          magicalDamage: 0
        },
        order: 3,
        tier: "level7"
      }
    ],
    [
      {
        id: "LiLiHeroicAbilityJugof1000Cups",
        name: "Jug of 1,000 Cups",
        descriptionShort: "Rapidly heal nearby allies",
        descriptionLong: "Channel for up to 6 seconds. Every 0.25 seconds, increase the cooldown of Jug of 1,000 Cups by 2 seconds, up to 50 additional seconds, and heal the lowest Health nearby allied Hero for 66 (+4% / level) Health.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 20,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_jugofathousandcups.png",
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
          "LiLiJugof1000Cups"
        ]
      },
      {
        id: "LiLiHeroicAbilityWaterDragon",
        name: "Water Dragon",
        descriptionShort: "Damages and heavily slows nearest enemy Hero",
        descriptionLong: "Li Li channels for 2 seconds, summoning a Water Dragon that hits the nearest enemy Hero within 12 range and all enemies near them, dealing 300 (+4% / level) damage and slowing their Movement Speed by 70% for 4 seconds.",
        cost: {
          type: "Mana",
          amount: 60
        },
        cooldown: 50,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_waterdragon.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 20
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "LiLiWaterDragon"
        ]
      }
    ],
    [
      {
        id: "LiLiMasteryCloudSerpentLightningSerpent",
        name: "Lightning Serpent",
        descriptionShort: "Cloud Serpent's attacks bounce",
        descriptionLong: "Cloud Serpent attacks bounce to hit 2 additional targets for 13 (+4% / level) damage and 10 (+4% / level) healing.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_cloudserpent.png",
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
          "LiLiCloudSerpent"
        ]
      },
      {
        id: "LiLiMasteryBlindingWindGaleForce",
        name: "Gale Force",
        descriptionShort: "Increase Blinding Wind's Blind duration",
        descriptionLong: "Increase Blinding Wind's Blind duration by 0.75 seconds. Li Li's Basic Attacks against Blinded Heroes deal 100% increased damage.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_blindingwind.png",
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
          "LiLiBlindingWind"
        ]
      },
      {
        id: "LiLiHinderingWinds",
        name: "Hindering Winds",
        descriptionShort: "Increase Blinding Wind's Slow",
        descriptionLong: "Increase Blinding Wind's Slow amount to 30% and its duration to 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_blindingwind_a.png",
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
          "LiLiBlindingWind"
        ]
      }
    ],
    [
      {
        id: "LiLiMasteryHealingBrewTwoForOne",
        name: "Two For One",
        descriptionShort: "Healing Brew heals twice but longer cooldown",
        descriptionLong: "Increases the number of allies healed by Healing Brew to 2, but increases the cooldown by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_healingbrew.png",
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
          "LiLiHealingBrew"
        ]
      },
      {
        id: "LiLiPickMeUp",
        name: "Pick Me Up",
        descriptionShort: "Healing Brew heals more on low Health targets",
        descriptionLong: "Healing Brew's healing for Heroes is increased by 33% if they are under 50% Health.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_healingbrew_a.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 8.8,
          magicalDamage: 0
        },
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "LiLiHealingBrew"
        ]
      },
      {
        id: "LiLiBlessingsOfYulon",
        name: "Blessings Of Yu’lon",
        descriptionShort: "Increase Cloud Serpent healing",
        descriptionLong: "Cloud Serpent grants its bearer 10% increased healing received and heals them for an additional 0.5% of their maximum Health each time it attacks.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_cloudserpent.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.06666666666666667,
          magicalDamage: 0
        },
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "LiLiCloudSerpent"
        ]
      }
    ],
    [
      {
        id: "LiLiMasteryJugof1000CupsJugof1000000Cups",
        name: "Jug of 1,000,000 Cups",
        descriptionShort: "Jug of 1,000 cups heals two allies at once",
        descriptionLong: "Jug of 1,000 Cups heals two allies at a time.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_jugofathousandcups.png",
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
          "LiLiJugof1000Cups"
        ],
        prerequisiteTalentIds: [
          "LiLiHeroicAbilityJugof1000Cups"
        ]
      },
      {
        id: "LiLiMasteryWaterDragonDoubleDragon",
        name: "Double Dragon",
        descriptionShort: "Summons two dragons",
        descriptionLong: "After hitting a target with Water Dragon, another Water Dragon is summoned at the point of impact.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_waterdragon.png",
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
          "LiLiWaterDragon"
        ],
        prerequisiteTalentIds: [
          "LiLiHeroicAbilityWaterDragon"
        ]
      },
      {
        id: "LiLiMistweaver",
        name: "Mistweaver",
        descriptionShort: "Activate to heal nearby Heroes",
        descriptionLong: "Activate to heal nearby allied Heroes for 149 (+4% / level). Basic Attacks and Cloud Serpent attacks reduce the cooldown of Mistweaver by 1 second.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_mistweaver.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 3.973333333333333,
          magicalDamage: 0
        },
        order: 3,
        tier: "level20"
      },
      {
        id: "LiLiShakeItOff",
        name: "Shake It Off",
        descriptionShort: "Gain Armor while disabled, empower Fast Feet",
        descriptionLong: "Gain 35 Armor while Stunned, Silenced, or Rooted. Passive: Increase Fast Feet's cooldown refresh rate to 75%",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lili_fastfeet.png",
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
          "LiLiSafetySprint",
          "LiLiFastFeet"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 45.19774011299435,
    physicalDamage: 37.49999999999999,
    mobility: 24.199,
    healing: 0.47729659210233244,
    magicalDamage: 14.805591325953623
  }
};
      
export default lili;