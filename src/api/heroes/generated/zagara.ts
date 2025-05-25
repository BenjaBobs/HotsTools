import { Hero } from '../heroes';
      
export const zagara: Hero = {
  name: "Zagara",
  nameNormalized: "zagara",
  franchise: "Starcraft",
  gender: "Female",
  size: 1.125,
  movementSpeed: 4.8398,
  health: {
    amount: 1550,
    scale: 0.04,
    regenRate: 3.2304,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroZagara",
      range: 6.6,
      period: 0.8,
      damage: 83,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/zagara.png",
  abilities: [
    {
      id: "ZagaraSummonCreepTumor",
      name: "Creep Tumor",
      descriptionShort: "Generates Creep allowing Zagara and her minions to move faster",
      descriptionLong: "Lay a Creep Tumor that generates Creep. While on Creep, Zagara moves 20% faster and her summons move 30% faster. Tumors last 240 seconds and reveal the surrounding area while active. Stores up to 3 charges.",
      cooldown: 18,
      charges: {
        chargesMax: 3,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 3
      },
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_creep.png",
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
      id: "ZagaraBanelingBarrage",
      name: "Baneling Barrage",
      descriptionShort: "Launch 2 Banelings that explode on contact with an enemy",
      descriptionLong: "Launch 2 Banelings that deal 80 (+4% / level) damage to enemies they hit. Stores up to 2 charges.",
      cost: {
        type: "Mana",
        amount: 15
      },
      cooldown: 4,
      charges: {
        chargesMax: 2,
        chargesInitial: 2,
        chargeCost: 1,
        recastCooldown: 0.125
      },
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_banelingbarrage.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 60
      }
    },
    {
      id: "ZagaraSummonHydralisk",
      name: "Hunter Killer",
      descriptionShort: "Unleash a Hydralisk on an enemy",
      descriptionLong: "Summon a Hydralisk to attack a single target, dealing 71 (+5% / level) damage per second. Lasts 8 seconds.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 16,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_hunterkiller.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 14.200000000000001
      }
    },
    {
      id: "ZagaraInfestedDrop",
      name: "Infested Drop",
      descriptionShort: "Bombard an area with a Zerg Drop Pod that spawns Roachlings",
      descriptionLong: "Bombard target area with a Zerg Drop Pod for 140 (+4% / level) damage. The pod spawns 2 Roachlings that deal 30 (+4% / level) damage per second and last for 8 seconds.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 12,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_infesteddrop.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 7.5
      }
    },
    {
      id: "ZagaraSummonNydusWorm",
      name: "Nydus Network",
      descriptionShort: "Empowers Creep and can create Nydus Worms",
      descriptionLong: "Summon a Nydus Worm on Creep anywhere that Zagara has vision. Zagara can enter a Nydus Worm and travel to any other Nydus Worm by right-clicking near it. While inside a Nydus Worm, Zagara regenerates 10% Health and Mana per second. Stores up to 2 charges. Maximum of 4 Nydus Worms at a time. Passive: Creep spreads 15% farther. Passive: While on Creep, each Basic Attack reduces all of Zagara's cooldowns by 0.4 seconds.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 120,
      charges: {
        chargesMax: 2,
        chargesInitial: 2,
        chargeCost: 1,
        recastCooldown: 2
      },
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_nydusworm.png",
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
      id: "ZagaraDevouringMaw",
      name: "Devouring Maw",
      descriptionShort: "Eats enemies in area",
      descriptionLong: "Summon a Devouring Maw that devours enemies for 4 seconds. Devoured enemies cannot fight and take 94 (+4% / level) damage per second. Usable on Unstoppable enemies.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 80,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_devouringmaw.png",
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
        id: "ZagaraMasteryVolatileAcid",
        name: "Volatile Acid",
        descriptionShort: "Increase Baneling range",
        descriptionLong: "Banelings can travel 50% further before exploding.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_banelingbarrage.png",
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
          "ZagaraBanelingBarrage"
        ]
      },
      {
        id: "ZagaraMasteryCorpseFeeders",
        name: "Corpse Feeders",
        descriptionShort: "Infested Drop cooldown reduced, increase Roachling Health",
        descriptionLong: "Reduces the cooldown of Infested Drop by 3 seconds and Roachlings have 30% more Health.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_infesteddrop.png",
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
          "ZagaraInfestedDrop"
        ]
      },
      {
        id: "ZagaraMasteryInfest",
        name: "Infest",
        descriptionShort: "Increases nearby allied Ranged Minion's damage",
        descriptionLong: "Nearby Ranged Minions deal an additional 125% damage, plus an additional 1% per 1000 Siege damage Zagara has dealt. Can be toggled on or off.",
        cooldown: null,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_infest.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 25
        },
        order: 3,
        tier: "level1"
      }
    ],
    [
      {
        id: "ZagaraMasteryEnvenomedSpines",
        name: "Envenomed Spines",
        descriptionShort: "Empower Zagara's next Basic Attack",
        descriptionLong: "Activate to have Zagara's next Basic Attack apply 230 (+4% / level) damage over 5 seconds.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_range.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level4"
      },
      {
        id: "ZagaraCombatStyleMedusaBlades",
        name: "Medusa Blades",
        descriptionShort: "Basic Attacks hit 3 additional targets",
        descriptionLong: "Basic Attacks deal 33% damage to three nearby targets.",
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
          magicalDamage: 6.6000000000000005
        },
        order: 2,
        tier: "level4"
      },
      {
        id: "ZagaraMasterySerratedSpines",
        name: "Serrated Spines",
        descriptionShort: "Quest: Basic Attacks against Heroes increase damage",
        descriptionLong: "Quest: Each Basic Attack against a Hero increases Zagara's Attack Damage by 0.2%.",
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
        tier: "level4",
        isQuest: true
      }
    ],
    [
      {
        id: "ZagaraMasteryBanelingMassacre",
        name: "Baneling Massacre",
        descriptionShort: "Gain Baneling charges, but increase cooldown",
        descriptionLong: "Gain 2 additional charges of Banelings Barrage, but increase its cooldown by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_banelingbarrage.png",
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
          "ZagaraBanelingBarrage"
        ]
      },
      {
        id: "ZagaraViscousAcid",
        name: "Viscous Acid",
        descriptionShort: "Banelings also Slow enemies",
        descriptionLong: "Banelings Slow enemies by 25% for 2.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_banelingbarrage_a.png",
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
          "ZagaraBanelingBarrage"
        ]
      },
      {
        id: "ZagaraMasteryBileDrop",
        name: "Bile Drop",
        descriptionShort: "Quest: Increase maximum number of Roachlings",
        descriptionLong: "Quest: Passively increases the radius of Infested Drop by 20%. Reward: After hitting 12 Heroes with Infested Drop, it spawns an additional Roachling.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_infesteddrop.png",
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
          "ZagaraInfestedDrop"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "ZagaraHeroicAbilityDevouringMaw",
        name: "Devouring Maw",
        descriptionShort: "Eats enemies in area",
        descriptionLong: "Summon a Devouring Maw that devours enemies for 4 seconds. Devoured enemies cannot fight and take 94 (+4% / level) damage per second. Usable on Unstoppable enemies.",
        cost: {
          type: "Mana",
          amount: 70
        },
        cooldown: 80,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_devouringmaw.png",
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
          "ZagaraDevouringMaw"
        ]
      },
      {
        id: "ZagaraHeroicAbilityNydusAssault",
        name: "Nydus Network",
        descriptionShort: "Empowers Creep and can create Nydus Worms",
        descriptionLong: "Summon a Nydus Worm on Creep anywhere that Zagara has vision. Zagara can enter a Nydus Worm and travel to any other Nydus Worm by right-clicking near it. While inside a Nydus Worm, Zagara regenerates 10% Health and Mana per second. Stores up to 2 charges. Maximum of 4 Nydus Worms at a time. Passive: Creep spreads 15% farther. Passive: While on Creep, each Basic Attack reduces all of Zagara's cooldowns by 0.4 seconds.",
        cost: {
          type: "Mana",
          amount: 50
        },
        cooldown: 120,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 2
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_nydusworm.png",
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
          "ZagaraSummonNydusWorm"
        ]
      }
    ],
    [
      {
        id: "ZagaraMasteryHydraliskTransfusion",
        name: "Hydralisk Transfusion",
        descriptionShort: "Hunter Killer attacks restore Health",
        descriptionLong: "Zagara is healed for 60% of the damage dealt by Hunter Killers' Basic Attacks to Heroes.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_hunterkiller.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 12,
          magicalDamage: 0
        },
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "ZagaraSummonHydralisk"
        ]
      },
      {
        id: "ZagaraMasteryProtectiveCoating",
        name: "Protective Coating",
        descriptionShort: "Gain Armor on Creep",
        descriptionLong: "While on Creep, Zagara gains 20 Armor, taking 20% less damage.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_creep.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 4,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "ZagaraSummonCreepTumor"
        ]
      },
      {
        id: "GenericTalentSpellShield",
        name: "Spell Shield",
        descriptionShort: "Periodically gain temporary Spell Armor",
        descriptionLong: "Every 30 seconds, gain 50 Spell Armor against the next enemy Ability and subsequent Abilities for 3 seconds, reducing the damage taken by 50%. Can be toggled to allow or prevent this talent from triggering automatically.",
        cooldown: null,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_spellshield.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 10,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level13"
      }
    ],
    [
      {
        id: "ZagaraMasteryCorrosiveSaliva",
        name: "Corrosive Saliva",
        descriptionShort: "Empowers Hunter Killer, Roachling damage against Heroes",
        descriptionLong: "When attacking Heroes, Hunter Killers and Roachlings deal additional damage equal to 1.5% of their maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_hunterkiller.png",
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
          "ZagaraSummonHydralisk"
        ]
      },
      {
        id: "ZagaraMasteryMutalisk",
        name: "Mutalisk",
        descriptionShort: "Hunter Killer summons a Mutalisk instead",
        descriptionLong: "Reduce the cooldown of Hunter Killer by 4 seconds. Hunter Killer now spawns a Mutalisk. Mutalisks have a bounce attack and last for 30 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_hunterkillermuta.png",
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
          "ZagaraSummonHydralisk"
        ]
      },
      {
        id: "ZagaraJaggedBarbsTalent",
        name: "Jagged Barbs",
        descriptionShort: "Gain Attack Damage, range on Creep",
        descriptionLong: "While on Creep, Zagara gains 50% more Basic Attack damage and her attack range is increased by 1.1.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_creep.png",
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
          "ZagaraSummonCreepTumor"
        ]
      }
    ],
    [
      {
        id: "ZagaraMasteryTyrantMaw",
        name: "Tyrant Maw",
        descriptionShort: "More damage and cooldown reduction from Takedowns",
        descriptionLong: "Devouring Maw deals 50% more damage. Takedowns reduce its cooldown by 25 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_devouringmaw.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 10
        },
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "ZagaraDevouringMaw"
        ],
        prerequisiteTalentIds: [
          "ZagaraHeroicAbilityDevouringMaw"
        ]
      },
      {
        id: "ZagaraMasteryEndlessCreep",
        name: "Endless Creep",
        descriptionShort: "Increases Creep Tumor's cast range and duration",
        descriptionLong: "The cast range for Creep Tumor is increased by 2000%. Creep Tumors now last 600 seconds. While on Creep, Zagara gains an additional 10% Movement Speed.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_nydusworm.png",
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
          "ZagaraSummonNydusWorm"
        ],
        prerequisiteTalentIds: [
          "ZagaraHeroicAbilityNydusAssault"
        ]
      },
      {
        id: "ZagaraBroodmother",
        name: "Broodmother",
        descriptionShort: "Basic Attacks launch Banelings",
        descriptionLong: "Every 3rd Basic Attack also launches a Baneling towards the target. Passive: Gain 20% bonus Attack Speed.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_banelingbarrage.png",
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
          "ZagaraBanelingBarrage"
        ]
      },
      {
        id: "ZagaraPackInstinct",
        name: "Pack Instinct",
        descriptionShort: "Increase damage against Hunter Killer target",
        descriptionLong: "Zagara and her summons deal 20% more damage to enemies attacked by a Hunter Killer in the last 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zagara_hunterkiller.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 4
        },
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "ZagaraSummonHydralisk"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 46.704331450094166,
    physicalDamage: 51.87500000000001,
    mobility: 24.006944444444446,
    healing: 0,
    magicalDamage: 3.0183242204817495
  }
};
