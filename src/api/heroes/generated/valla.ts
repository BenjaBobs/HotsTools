import { Hero } from '../heroes';
      
const valla: Hero = {
  name: "Valla",
  nameNormalized: "valla",
  franchise: "Diablo",
  gender: "Female",
  size: 0.625,
  movementSpeed: 4.8398,
  health: {
    amount: 1340,
    scale: 0.04,
    regenRate: 2.793,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroDemonHunter",
      range: 5.5,
      period: 0.6,
      damage: 70,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/valla.png",
  abilities: [
    {
      id: "DemonHunterHatred",
      name: "Hatred",
      descriptionShort: "Basic Attacks grant bonus Attack Damage and Move Speed temporarily",
      descriptionLong: "Basic Attacks grant a stack of Hatred, up to 10. Each Hatred stack increases Basic Attack damage by 8% and Movement Speed by 1%. Lasts 6 seconds.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_hatred.png",
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
      id: "DemonHunterHungeringArrow",
      name: "Hungering Arrow",
      descriptionShort: "Fire an arrow which seeks out and strikes multiple targets",
      descriptionLong: "Fire an arrow that deals 140 (+4% / level) damage to the first target hit, then seeks up to 2 additional enemies, prioritizing Heroes, dealing 80 (+4% / level) damage. Can hit an enemy multiple times.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 10,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_hungeringarrow.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 88
      }
    },
    {
      id: "DemonHunterMultishot",
      name: "Multishot",
      descriptionShort: "Damage enemies in an area",
      descriptionLong: "Deal 165 (+4% / level) damage to enemies within the target area.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 12,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_multishot.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 55
      }
    },
    {
      id: "DemonHunterVault",
      name: "Vault",
      descriptionShort: "Dash to a location",
      descriptionLong: "Dash to the target area. Valla's next Basic Attack within 2 seconds deals 6% increased damage per stack of Hatred.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 10,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 0.5
      },
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_vault.png",
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
      id: "DemonHunterStrafe",
      name: "Strafe",
      descriptionShort: "Unleashes a flurry of arrows at enemies",
      descriptionLong: "Rapidly attack enemies within 10 range for 60 (+4% / level) damage per hit, prioritizing Heroes over Minions. Valla is able to move and use Vault while strafing. Lasts for 4 seconds.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_strafe.png",
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
      id: "DemonHunterRainOfVengeance",
      name: "Rain of Vengeance",
      descriptionShort: "Area attack that Stuns enemies",
      descriptionLong: "Launch a wave of Shadow Beasts that deals 250 (+4% / level) damage and Stuns enemies in the target area for 0.5 seconds. Stores up to 2 charges.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 50,
      charges: {
        chargesMax: 2,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 1
      },
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_rainofvengeance.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 66.66666666666667
      }
    }
  ],
  talents: [
    [
      {
        id: "DemonHunterMasteryPuncturingArrow",
        name: "Puncturing Arrow",
        descriptionShort: "Quest: Gain Hungering Arrow bounce, damage",
        descriptionLong: "Increase the number of Hungering Arrow bounces by 1. Quest: Hitting an enemy Hero with the initial impact of Hungering Arrow refunds 40 Mana and permanently increases the damage of its initial impact by 7.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_hungeringarrow.png",
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
          "DemonHunterHungeringArrow"
        ],
        isQuest: true
      },
      {
        id: "DemonHunterMultishotFireAtWill",
        name: "Fire At Will",
        descriptionShort: "Quest: Gain Multishot damage, Hatred",
        descriptionLong: "Quest: Hitting a Hero with Multishot grants 2 Hatred and permanently increases its damage by 2. Reward: After hitting 20 Heroes with Multishot, increase its damage by 40.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_multishot.png",
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
          "DemonHunterMultishot"
        ],
        isQuest: true
      },
      {
        id: "DemonHunterCreedoftheHunter",
        name: "Creed of the Hunter",
        descriptionShort: "Gambit: Gain Attack SpeedQuest: Increase Hatred Basic Attack bonus",
        descriptionLong: "Quest: Every 50 Basic Attacks against Heroes increases Hatred's damage bonus per stack by 1%, up to 5%. Gambit: Gain 20% bonus Attack Speed. Every death reduces this bonus by 5%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_hatred.png",
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
          "DemonHunterHatred"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "DemonHunterMasteryArsenal",
        name: "Arsenal",
        descriptionShort: "Increase Multishot range, launch grenades",
        descriptionLong: "Increase the range of Multishot by 20%. Multishot also fires 3 grenades that deal 100 (+4% / level) damage and refund 25 Mana after hitting enemy Heroes.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_multishot.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 26.666666666666668
        },
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "DemonHunterMultishot"
        ]
      },
      {
        id: "DemonHunterDeathDealer",
        name: "Death Dealer",
        descriptionShort: "Increases Vault damage bonus, reduce cooldown",
        descriptionLong: "Increase Vaults Basic Attack damage bonus from 6% to 15% per stack of Hatred. If this attack kills its victim within 1.5 seconds, the Mana cost and cooldown of Vault are refunded. Passive: Reduce the cooldown of Vault by 5 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_vault.png",
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
          "DemonHunterVault"
        ]
      },
      {
        id: "DemonHunterMasteryRepeatingArrowVault",
        name: "Repeating Arrow",
        descriptionShort: "Vault refreshes Hungering Arrow",
        descriptionLong: "Vault no longer has a Mana cost. Casting Vault resets the cooldown of Hungering Arrow.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_repeatingarrow.png",
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
          "DemonHunterVault"
        ]
      }
    ],
    [
      {
        id: "DemonHunterMasteryMonsterHunterHungeringArrow",
        name: "Monster Hunter",
        descriptionShort: "Increase Hungering Arrow non-Hero damage",
        descriptionLong: "Hungering Arrow deals 150% additional damage to Minions, Mercenaries, and Monsters.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_hungeringarrow.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 10
        },
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "DemonHunterHungeringArrow"
        ]
      },
      {
        id: "DemonHunterMasteryFrostShot",
        name: "Frost Shot",
        descriptionShort: "Gain Multishot Slow, Hungering Arrow damage",
        descriptionLong: "Multishot Slows enemies by 20% for 2.5 seconds. Hungering Arrows deals 25% more damage to Slowed enemies.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_siphoningarrow.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 1.6666666666666667
        },
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "DemonHunterHungeringArrow",
          "DemonHunterMultishot"
        ]
      },
      {
        id: "DemonHunterCombatStyleHotPursuit",
        name: "Hot Pursuit",
        descriptionShort: "Increase Hatred Move Speed bonus",
        descriptionLong: "Increase the Movement Speed bonus of each stack of Hatred to 2%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_hatred.png",
        isPassive: false,
        analysis: {
          mobility: 2,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "DemonHunterHatred"
        ]
      }
    ],
    [
      {
        id: "DemonHunterHeroicAbilityStrafe",
        name: "Strafe",
        descriptionShort: "Unleashes a flurry of arrows at enemies",
        descriptionLong: "Rapidly attack enemies within 10 range for 60 (+4% / level) damage per hit, prioritizing Heroes over Minions. Valla is able to move and use Vault while strafing. Lasts for 4 seconds.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_strafe.png",
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
          "DemonHunterStrafe"
        ]
      },
      {
        id: "DemonHunterHeroicAbilityRainofVengeance",
        name: "Rain of Vengeance",
        descriptionShort: "Area attack that Stuns enemies",
        descriptionLong: "Launch a wave of Shadow Beasts that deals 250 (+4% / level) damage and Stuns enemies in the target area for 0.5 seconds. Stores up to 2 charges.",
        cost: {
          type: "Mana",
          amount: 50
        },
        cooldown: 50,
        charges: {
          chargesMax: 2,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_rainofvengeance.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 66.66666666666667
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "DemonHunterRainOfVengeance"
        ]
      }
    ],
    [
      {
        id: "DemonHunterMasterySiphoningArrow",
        name: "Siphoning Arrows",
        descriptionShort: "Hungering Arrow and Multishot heal",
        descriptionLong: "Hitting a Hero with Hungering Arrow heals Valla for 4% of her maximum Health, and Multishot heals for 2%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_siphoningarrow.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.26666666666666666,
          magicalDamage: 0
        },
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "DemonHunterHungeringArrow",
          "DemonHunterMultishot"
        ]
      },
      {
        id: "DemonHunterCombatStyleTemperedByDiscipline",
        name: "Tempered by Discipline",
        descriptionShort: "Basic Attacks heal, increased by Hatred",
        descriptionLong: "Basic Attacks heal for 10% of the damage dealt, increased by 2% per Hatred stack.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_hatred.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.6666666666666666,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "DemonHunterHatred"
        ]
      },
      {
        id: "DemonHunterGloom",
        name: "Gloom",
        descriptionShort: "Consume Hatred to gain Spell Armor",
        descriptionLong: "Activate to consume all Hatred, granting 3 Spell Armor per Hatred consumed for 5 seconds. Passive: Gain 15 Spell Armor, and each stack of Hatred heals for 1.2 (+4% / level) Health per second.",
        cooldown: 5,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_hatred_var1.png",
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
          "DemonHunterHatred"
        ]
      }
    ],
    [
      {
        id: "DemonHunterPunishment",
        name: "Punishment",
        descriptionShort: "Reduce Multishot cooldown at max Hatred",
        descriptionLong: "While at max Hatred, Multishot's cooldown recharges 50% faster.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_multishot.png",
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
          "DemonHunterMultishot"
        ]
      },
      {
        id: "DemonHunterSeethingHatred",
        name: "Seething Hatred",
        descriptionShort: "Increase all damage at max Hatred",
        descriptionLong: "While at max Hatred, increase all damage dealt by 10%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_hatred.png",
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
          "DemonHunterHatred"
        ]
      },
      {
        id: "DemonHunterManticore",
        name: "Manticore",
        descriptionShort: "Increase Basic Attacks against Heroes",
        descriptionLong: "Every 3rd Basic Attack against the same Hero deals an additional 5% of their maximum Health as damage.",
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
        tier: "level16"
      }
    ],
    [
      {
        id: "DemonHunterMasteryDeathSiphon",
        name: "Death Siphon",
        descriptionShort: "Strafe lasts longer, fires penetrating bolts",
        descriptionLong: "Hitting an enemy Hero with Strafe increases its duration by 0.125 seconds. Strafe also fires penetrating bolts in a line for 34 (+4% / level) damage every 0.25 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_strafe.png",
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
          "DemonHunterStrafe"
        ],
        prerequisiteTalentIds: [
          "DemonHunterHeroicAbilityStrafe"
        ]
      },
      {
        id: "DemonHunterMasteryStormofVengeance",
        name: "Storm of Vengeance",
        descriptionShort: "Reduce cooldown, gain Attack Speed",
        descriptionLong: "Basic Attacks against Heroes reduce the cooldown of Rain of Vengeance by 5 seconds. Passive: Each stack of Hatred increases your Attack Speed by 2%. While at max Hatred, gain an additional 30% Attack Speed.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_rainofvengeance.png",
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
          "DemonHunterRainOfVengeance"
        ],
        prerequisiteTalentIds: [
          "DemonHunterHeroicAbilityRainofVengeance"
        ]
      },
      {
        id: "DemonHunterVaultAcrobat",
        name: "Acrobat",
        descriptionShort: "Gain Vault charges, drop Caltrops",
        descriptionLong: "Gain 2 additional charges of Vault. Drop 3 Caltrops while Vaulting that deal 60 (+4% / level) damage and Slow enemies by 40% for 1 second.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_vault.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 16
        },
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "DemonHunterVault"
        ]
      },
      {
        id: "DemonHunterFarflightQuiver",
        name: "Farflight Quiver",
        descriptionShort: "Gain Basic Attack range, increased by Hatred",
        descriptionLong: "Gain 20% Basic Attack range. While at max Hatred, gain an additional 30% Basic Attack range.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_hatred.png",
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
          "DemonHunterHatred"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 40.376647834274955,
    physicalDamage: 58.333333333333336,
    mobility: 17.38446396885035,
    healing: 0,
    magicalDamage: 23.202692272768548
  }
};
      
export default valla;