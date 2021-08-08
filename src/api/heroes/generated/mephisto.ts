import { Hero } from '../heroes';
      
const mephisto: Hero = {
  name: "Mephisto",
  nameNormalized: "mephisto",
  franchise: "Diablo",
  gender: "Male",
  size: 0.75,
  movementSpeed: 4.8398,
  health: {
    amount: 1968,
    scale: 0.04,
    regenRate: 4.1015,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "MephistoHeroWeapon",
      range: 4.5,
      period: 1,
      damage: 66,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/mephisto.png",
  abilities: [
    {
      id: "MephistoLordOfHatred",
      name: "Lord Of Hatred",
      descriptionShort: "Hitting Heroes with Basic Abilities reduces Mephisto's cooldowns",
      descriptionLong: "Hitting enemy Heroes with Basic Abilities reduces Mephisto's Basic Ability cooldowns. Skull Missile and Shade of Mephisto grant 1.5 seconds of cooldown reduction per Hero hit, and Lightning Nova grants 0.3 seconds per Hero hit.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_hatred.png",
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
      id: "MephistoSkullMissile",
      name: "Skull Missile",
      descriptionShort: "Damage enemies in a line after a short delay",
      descriptionLong: "Conjure a skull that travels in the target direction after 0.625 seconds, dealing 127 (+4% / level) damage to enemies hit and Slowing Heroes hit by 25% for 2 seconds.",
      cost: {
        type: "Mana",
        amount: 20
      },
      cooldown: 8,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 1
      },
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_skull.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 15.875
      }
    },
    {
      id: "MephistoLightningNova",
      name: "Lightning Nova",
      descriptionShort: "Deal increasing damage to nearby enemies",
      descriptionLong: "A ring of lightning appears around Mephisto for 2.5 seconds. Enemies within the ring take 43 (+4% / level) damage every 0.25 seconds. Each time a cast of Lightning Nova hits a Hero, its damage is increased by 3%, up to 30%.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 14,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_lightning.png",
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
      id: "MephistoShadeOfMephisto",
      name: "Shade of Mephisto",
      descriptionShort: "Teleport to a location and return after a delay",
      descriptionLong: "Teleport to a location, dealing 78 (+4% / level) damage to nearby enemies and leaving behind a Shade of Mephisto at Mephisto's original location. After 2.5 seconds, Mephisto is teleported back to the Shade's location.",
      cost: {
        type: "Mana",
        amount: 35
      },
      cooldown: 18,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_shade.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 5.2
      }
    },
    {
      id: "MephistoConsumeSouls",
      name: "Consume Souls",
      descriptionShort: "Damage and Slow all enemy Heroes",
      descriptionLong: "Channel for 2.5 seconds, revealing all enemy Heroes. After the Channel completes, all enemy Heroes take 357 (+4% / level) damage and are Slowed by 25% for 2.5 seconds.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 120,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_souls.png",
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
      id: "MephistoDuranceOfHate",
      name: "Durance of Hate",
      descriptionShort: "Unleash spirits that spread Roots",
      descriptionLong: "After 1 second, unleash a wave of evil spirits that Root the first enemy Hero hit for 2.5 seconds and deal 250 (+4% / level) damage to them over the same duration. Durance of Hate spreads outwards from its initial target, Rooting and damaging additional nearby enemy Heroes.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 50,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_durance.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 16.666666666666668
      }
    }
  ],
  talents: [
    [
      {
        id: "MephistoSkullMissileUnyieldingPower",
        name: "Unyielding Power",
        descriptionShort: "Quest: Empower Skull Missile",
        descriptionLong: "Quest: Hit Heroes with Skull Missile. Reward: After hitting 20 Heroes, increase Skull Missile's damage by 100. Reward: After hitting 40 Heroes, Skull Missile gains an additional charge.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_skull.png",
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
          "MephistoSkullMissile"
        ],
        isQuest: true
      },
      {
        id: "MephistoLightningNovaFuriousSpark",
        name: "Furious Spark",
        descriptionShort: "Lightning Nova deals bonus damage",
        descriptionLong: "Every 3rd hit from Lightning Nova against the same target deals 65 (+4% / level) bonus damage and grants Mephisto 2 Mana.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_lightning.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 4.333333333333333
        },
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "MephistoLightningNova"
        ]
      },
      {
        id: "MephistoShadeOfMephistoMaliciousIntent",
        name: "Malicious Intent",
        descriptionShort: "Shade of Mephisto grants Spell Power",
        descriptionLong: "Shade of Mephisto grants 25% Spell Power while active and for 2.5 seconds after ending. If Mephisto hits enemy Heroes at least 18 times with his Basic Abilities while Shade of Mephisto is active, then increase the duration of the Spell Power bonus to 10 seconds after it ends.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_shade.png",
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
          "MephistoShadeOfMephisto"
        ]
      }
    ],
    [
      {
        id: "MephistoSkullMissileHatefulMending",
        name: "Hateful Mending",
        descriptionShort: "Skull Missile heals",
        descriptionLong: "Skull Missile grants 10 Mana and heals Mephisto for 70% of the damage it deals to Heroes.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_skull.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 9.333333333333334,
          magicalDamage: 0
        },
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "MephistoSkullMissile"
        ]
      },
      {
        id: "MephistoLightningNovaStaticBarrier",
        name: "Static Barrier",
        descriptionShort: "Lightning Nova grants a Shield",
        descriptionLong: "At the end of its duration, Lightning Nova grants Mephisto a Shield equal to 40% of the damage it dealt to Heroes. Lasts 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_lightning.png",
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
          "MephistoLightningNova"
        ]
      },
      {
        id: "MephistoSpite",
        name: "Spite",
        descriptionShort: "Regen Globes activate Lord of Hatred",
        descriptionLong: "Increase Regeneration Globe healing duration by 150%. Every tick of Regeneration Globe healing activates Lord of Hatred, reducing Basic Ability cooldowns by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_hatred.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 20,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "MephistoLordOfHatred"
        ]
      }
    ],
    [
      {
        id: "MephistoShadeOfMephistoGhastlyArmor",
        name: "Ghastly Armor",
        descriptionShort: "Shade of Mephisto grants Armor",
        descriptionLong: "Shade of Mephisto grants 25 Armor while active and for 2.5 seconds after it ends.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_shade.png",
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
          "MephistoShadeOfMephisto"
        ]
      },
      {
        id: "MephistoShadeOfMephistoFrostStorm",
        name: "Frost Storm",
        descriptionShort: "Shade of Mephisto causes Lightning Nova to Slow",
        descriptionLong: "While Shade of Mephisto is active, enemies who are hit by Lightning Nova are Slowed by 15% for 1 second and the Slow from Skull Missile is increased to 50%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_shade_b.png",
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
          "MephistoShadeOfMephisto"
        ]
      },
      {
        id: "MephistoShadeOfMephistoTrickery",
        name: "Trickery",
        descriptionShort: "Shade of Mephisto grants Move Speed",
        descriptionLong: "Shade of Mephisto grants 20% Movement Speed while active and for 2.5 seconds after it ends. If Mephisto hits enemy Heroes at least 18 times with his Basic Abilities while Shade of Mephisto is active, then reset the cooldown of Shade of Mephisto.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_shade_c.png",
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
          "MephistoShadeOfMephisto"
        ]
      }
    ],
    [
      {
        id: "MephistoConsumeSouls",
        name: "Consume Souls",
        descriptionShort: "Damage and Slow all enemy Heroes",
        descriptionLong: "Channel for 2.5 seconds, revealing all enemy Heroes. After the Channel completes, all enemy Heroes take 357 (+4% / level) damage and are Slowed by 25% for 2.5 seconds.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 120,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_souls.png",
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
          "MephistoConsumeSouls"
        ]
      },
      {
        id: "MephistoDuranceOfHate",
        name: "Durance of Hate",
        descriptionShort: "Unleash spirits that spread Roots",
        descriptionLong: "After 1 second, unleash a wave of evil spirits that Root the first enemy Hero hit for 2.5 seconds and deal 250 (+4% / level) damage to them over the same duration. Durance of Hate spreads outwards from its initial target, Rooting and damaging additional nearby enemy Heroes.",
        cost: {
          type: "Mana",
          amount: 50
        },
        cooldown: 50,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_durance.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 16.666666666666668
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "MephistoDuranceOfHate"
        ]
      }
    ],
    [
      {
        id: "MephistoSkullMissileAbhorredSkull",
        name: "Abhorred Skull",
        descriptionShort: "Increase Skull Missile damage, grants Spell Power",
        descriptionLong: "Hitting a Hero with Skull Missile grants 25% Spell Power for 6 seconds. Skull Missile deals 40% more damage to Heroes under 50% Health.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_skull.png",
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
          "MephistoSkullMissile"
        ]
      },
      {
        id: "MephistoLordOfHatredHysteria",
        name: "Hysteria",
        descriptionShort: "Lord of Hatred reduces Heroic cooldown",
        descriptionLong: "Lord of Hatred also reduces the cooldown of Mephisto's Heroic Ability.  Mephisto is healed for 15% of his maximum Health and Mana when he casts his Heroic Ability.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_hatred.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 2,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "MephistoLordOfHatred"
        ]
      },
      {
        id: "MephistoShardOfHate",
        name: "Shard of Hate",
        descriptionShort: "Basic Attacks splash and activate Lord of Hatred",
        descriptionLong: "Basic Attacks hit enemies near the primary target and activate Lord of Hatred against enemy Heroes, reducing Basic Ability cooldowns by 1 second per Hero hit.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_splash.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level13"
      }
    ],
    [
      {
        id: "MephistoSkullMissileLightningReaction",
        name: "Lightning Reaction",
        descriptionShort: "Skull Missile explodes when hitting Lightning Nova",
        descriptionLong: "Skull Missile explodes on contact with Lightning Nova, dealing 138 (+4% / level) damage to nearby enemies.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_skull.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 9.2
        },
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "MephistoSkullMissile"
        ]
      },
      {
        id: "MephistoLightningNovaStaticField",
        name: "Static Field",
        descriptionShort: "Lightning Nova can deal Percent Damage",
        descriptionLong: "When Lightning Nova's damage bonus reaches 30%, enemy Heroes within its radius take damage equal to 10% of their maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_lightning.png",
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
          "MephistoLightningNova"
        ]
      },
      {
        id: "MephistoAnimosity",
        name: "Animosity",
        descriptionShort: "Increase duration, damage of Lightning Nova",
        descriptionLong: "Increase the duration of Lightning Nova by 1 second and the maximum amount of bonus damage it can deal from 30% to 42%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_lightning_b.png",
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
          "MephistoLightningNova"
        ]
      }
    ],
    [
      {
        id: "MephistoConsumeSoulsConsumedByHatred",
        name: "Consumed by Hatred",
        descriptionShort: "Consume Souls recasts upon Takedown",
        descriptionLong: "Consume Souls deals bonus damage equal to 10% of the target's missing Health. If Consume Souls initial cast kills a Hero it will cast 1 additional time.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_souls.png",
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
          "MephistoConsumeSouls"
        ],
        prerequisiteTalentIds: [
          "MephistoConsumeSouls"
        ]
      },
      {
        id: "MephistoDuranceOfHateUnspeakableHorror",
        name: "Unspeakable Horror",
        descriptionShort: "Durance of Hate Silences",
        descriptionLong: "Durance of Hate Silences enemies while they are Rooted and for 3 seconds after its Root expires.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_durance.png",
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
          "MephistoDuranceOfHate"
        ],
        prerequisiteTalentIds: [
          "MephistoDuranceOfHate"
        ]
      },
      {
        id: "MephistoLightningNovaMimic",
        name: "Mimic",
        descriptionShort: "Shade of Mephisto can cast Lightning Nova",
        descriptionLong: "While both Shade of Mephisto and Lightning Nova are active, Lightning Nova also casts from the Shade's location.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_lightning.png",
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
          "MephistoLightningNova"
        ]
      },
      {
        id: "MephistoShadeOfMephistoShadeLord",
        name: "Shade Lord",
        descriptionShort: "Activate to swap with Shade of Mephisto",
        descriptionLong: "Activate to swap locations with Shade of Mephisto and refresh its duration. Passive: Shade of Mephisto benefits from all of Mephisto's level 7 Talents.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mephisto_shade.png",
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
          "MephistoShadeOfMephisto"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 59.29943502824858,
    physicalDamage: 33,
    mobility: 24.199,
    healing: 0,
    magicalDamage: 16.706676200853536
  }
};
      
export default mephisto;