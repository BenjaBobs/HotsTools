import { Hero } from '../heroes';
      
const rexxar: Hero = {
  name: "Rexxar",
  nameNormalized: "rexxar",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.875,
  movementSpeed: 4.8398,
  health: {
    amount: 1810,
    scale: 0.04,
    regenRate: 3.7695,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "RexxarMeleeWeapon",
      range: 1.5,
      period: 1.15,
      damage: 134,
      damageScale: 0.04
    },
    {
      nameId: "RexxarRangedWeapon",
      range: 5.5,
      period: 1.15,
      damage: 134,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/rexxar.png",
  abilities: [
    {
      id: "RexxarMishaFocus",
      name: "Misha, Focus!",
      descriptionShort: "Command Misha to move or attack",
      descriptionLong: "Passive: Misha gains 15% move speed. Command Misha to attack a specific enemy or move to a point and wait.Targeting Rexxar commands Misha to retreat to his position, gaining 30% move speed until she reaches Rexxar.Targeting Misha commands her to hold her current position.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_mishafixate.png",
      isPassive: false
    },
    {
      id: "RexxarSpiritSwoop",
      name: "Spirit Swoop",
      descriptionShort: "Launch a hawk to damage enemies and slow them",
      descriptionLong: "Deal 141 (+4% / level) damage to enemies in a line, slowing them by 30% for 2 seconds.",
      cost: {
        type: "Mana",
        amount: 40
      },
      cooldown: 7,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_spiritswoop.png",
      isPassive: false
    },
    {
      id: "RexxarMishaChargeRedirect",
      name: "Misha, Charge!",
      descriptionShort: "Order Misha to charge, damaging and stunning enemies",
      descriptionLong: "Misha charges in a line, dealing 150 (+4% / level) damage and stunning enemies for 1.25 seconds.",
      cost: {
        type: "Mana",
        amount: 45
      },
      cooldown: 10,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_mishacharge.png",
      isPassive: false
    },
    {
      id: "RexxarMendPet",
      name: "Mend Pet",
      descriptionShort: "Heal Misha over time",
      descriptionLong: "Heal Misha for 714 (+4% / level) Health over 5 seconds.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 10,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_mendpet.png",
      isPassive: false
    },
    {
      id: "RexxarUnleashTheBoars",
      name: "Unleash the Boars",
      descriptionShort: "Send a pack of boars to hunt enemy Heroes",
      descriptionLong: "Release a herd of boars that track down all enemy Heroes in a direction, dealing 110 (+4% / level) damage, revealing, and slowing enemies by 40% for 5 seconds.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_unleashtheboars.png",
      isPassive: false
    },
    {
      id: "RexxarBestialWrath",
      name: "Bestial Wrath",
      descriptionShort: "Increases Misha's Basic Attacks",
      descriptionLong: "Increases Misha's Basic Attack damage by 200% for 12 seconds.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 50,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_bestialwrath.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "RexxarSpiritSwoopBirdOfPrey",
        name: "Bird of Prey",
        descriptionShort: "Increases Spirit Swoop damage to Minions",
        descriptionLong: "Increases Spirit Swoop's damage by 150% to Minions.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_spiritswoop.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "RexxarSpiritSwoop"
        ]
      },
      {
        id: "RexxarSpiritBondEasyPrey",
        name: "Easy Prey",
        descriptionShort: "Misha is more effective against Minions and Mercs",
        descriptionLong: "Increases Misha's basic attack damage to Minions and Mercenaries by 150%, and Misha gains 50 Armor against Minions and Mercenaries, reducing damage taken by 50%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_heremishaactive.png",
        isPassive: false,
        order: 2,
        tier: "level1"
      },
      {
        id: "RexxarFlare",
        name: "Flare",
        descriptionShort: "Gain vision of an area",
        descriptionLong: "Fire a flare at an area, revealing it for 20 seconds.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_flare.png",
        isPassive: false,
        order: 3,
        tier: "level1"
      }
    ],
    [
      {
        id: "RexxarHungryBear",
        name: "Hungry Bear",
        descriptionShort: "Misha's Basic Attacks heal her",
        descriptionLong: "Misha's Basic Attacks heal her for 4.5% of her maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_heremishaactive.png",
        isPassive: false,
        order: 1,
        tier: "level4"
      },
      {
        id: "RexxarHunterGatherer",
        name: "Hunter-Gatherer",
        descriptionShort: "Quest: Regen Globes grant Health Regen",
        descriptionLong: "Quest: Gathering a Regeneration Globe increases Rexxar and Misha's Health Regeneration by 1 per second, up to 25 per second. Reward: After gathering 25 Globes, Rexxar and Misha gain 15 Armor.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_regenerationmaster.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        isQuest: true
      },
      {
        id: "RexxarSpiritBondGrizzledFortitude",
        name: "Grizzled Fortitude",
        descriptionShort: "Periodically gain Physical Armor",
        descriptionLong: "Every 6 seconds, Rexxar and Misha gain 75 Physical Armor against the next enemy Hero Basic Attack, reducing the damage taken by 75%.Stores up to 2 charges. Both Rexxar and Misha have their own charges.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_block.png",
        isPassive: false,
        order: 3,
        tier: "level4"
      },
      {
        id: "RexxarAnimalHusbandry",
        name: "Animal Husbandry",
        descriptionShort: "Max Health increase over time",
        descriptionLong: "Rexxar and Misha gain 2 Maximum Health every second Rexxar remains alive. These bonuses are lost on Rexxar's death.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_stayinalive.png",
        isPassive: false,
        order: 4,
        tier: "level4"
      }
    ],
    [
      {
        id: "RexxarSpiritSwoopCripplingTalons",
        name: "Crippling Talons",
        descriptionShort: "Increases Spirit Swoop slow amount and duration",
        descriptionLong: "Increases Spirit Swoop's slow amount to 50% and its duration to 3.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_spiritswoop.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "RexxarSpiritSwoop"
        ]
      },
      {
        id: "RexxarTakingFlightSpiritSwoop",
        name: "Taking Flight",
        descriptionShort: "Increases Spirit Swoop range, returns Mana",
        descriptionLong: "Increases Spirit Swoop's range by 20%. If Spirit Swoop hits an enemy Hero, the Mana cost is refunded and its cooldown is reduced by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_spiritswoop_var1.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "RexxarSpiritSwoop"
        ]
      },
      {
        id: "RexxarAspectoftheBeastCharge",
        name: "Aspect of the Beast",
        descriptionShort: "Misha's Basic Attacks lower Misha, Charge! cooldown",
        descriptionLong: "Misha's Basic Attacks lower the cooldown of Misha, Charge! by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_mishacharge.png",
        isPassive: false,
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "RexxarMishaChargeRedirect",
          "RexxarMishaCharge"
        ]
      }
    ],
    [
      {
        id: "RexxarHeroicAbilityBestialWrath",
        name: "Bestial Wrath",
        descriptionShort: "Increases Misha's Basic Attacks",
        descriptionLong: "Increases Misha's Basic Attack damage by 200% for 12 seconds.",
        cost: {
          type: "Mana",
          amount: 75
        },
        cooldown: 50,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_bestialwrath.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "RexxarBestialWrath"
        ]
      },
      {
        id: "RexxarHeroicAbilityUnleashTheBoars",
        name: "Unleash the Boars",
        descriptionShort: "Send a pack of boars to hunt enemy Heroes",
        descriptionLong: "Release a herd of boars that track down all enemy Heroes in a direction, dealing 110 (+4% / level) damage, revealing, and slowing enemies by 40% for 5 seconds.",
        cost: {
          type: "Mana",
          amount: 75
        },
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_unleashtheboars.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "RexxarUnleashTheBoars"
        ]
      }
    ],
    [
      {
        id: "RexxarAspectOfTheHawkSpiritSwoop",
        name: "Aspect of the Hawk",
        descriptionShort: "Spirit Swoop increases Attack Speed",
        descriptionLong: "When Spirit Swoop hits an enemy Hero, Rexxar gains 125% Attack Speed for 4 seconds. Misha's Basic Attacks increase the duration of this buff by 0.75 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_spiritswoop.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "RexxarSpiritSwoop"
        ]
      },
      {
        id: "RexxarDireBeast",
        name: "Dire Beast",
        descriptionShort: "Basic Attacks increase damage of Misha, Charge!",
        descriptionLong: "Rexxar and Misha's Basic Attacks increase the damage of the next Misha, Charge! by 15%, stacking up to a 150% bonus.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_mishacharge.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "RexxarMishaChargeRedirect",
          "RexxarMishaCharge"
        ]
      },
      {
        id: "RexxarSpiritBondWildfireBear",
        name: "Wildfire Bear",
        descriptionShort: "Misha deals damage to nearby enemies",
        descriptionLong: "Misha deals 28 (+4% / level) damage per second to nearby enemies.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_burningrage.png",
        isPassive: false,
        order: 3,
        tier: "level13"
      }
    ],
    [
      {
        id: "RexxarThrilloftheHunt",
        name: "Thrill of the Hunt",
        descriptionShort: "Basic Attacks increase Move Speed",
        descriptionLong: "Rexxar's Basic Attacks increase both his and Misha's Movement Speed by 25% for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_heremishaactive.png",
        isPassive: false,
        order: 1,
        tier: "level16"
      },
      {
        id: "RexxarSpiritBondPrimalIntimidation",
        name: "Primal Intimidation",
        descriptionShort: "Activate to slow enemy Attack and Move speed",
        descriptionLong: "Activate to slow the Attack Speed by 50% and Movement Speed by 20% of Heroes and Summons near Rexxar and Misha for 2.5 seconds.Passive: Heroes and Summons that attack Rexxar or Misha have their Attack Speed slowed by 20% for 2.5 seconds.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_imposingpresence.png",
        isPassive: false,
        order: 2,
        tier: "level16"
      },
      {
        id: "RexxarFeignDeath",
        name: "Feign Death",
        descriptionShort: "Become Invulnerable and control Misha",
        descriptionLong: "Rexxar fakes his death, becoming Invulnerable and untargetable for 5 seconds. During this time you control Misha.",
        cooldown: 35,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_feigndeath.png",
        isPassive: false,
        order: 3,
        tier: "level16"
      }
    ],
    [
      {
        id: "RexxarSpiritBond",
        name: "Spirit Bond",
        descriptionShort: "Misha's Basic Attacks heal Rexxar",
        descriptionLong: "Increases the duration of Bestial Wrath by 50% and Misha's Basic Attacks heal Rexxar for 50% of her damage dealt during Bestial Wrath.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_bestialwrath.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "RexxarBestialWrath"
        ],
        prerequisiteTalentIds: [
          "RexxarHeroicAbilityBestialWrath"
        ]
      },
      {
        id: "RexxarUnleashTheBoarsKillCommand",
        name: "Kill Command",
        descriptionShort: "Unleash the Boars deals more damage and roots",
        descriptionLong: "Unleash the Boars deals 50% more damage and roots for 1.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_unleashtheboars.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "RexxarUnleashTheBoars"
        ],
        prerequisiteTalentIds: [
          "RexxarHeroicAbilityUnleashTheBoars"
        ]
      },
      {
        id: "RexxarFrenzyofKalimdor",
        name: "Frenzy of Kalimdor",
        descriptionShort: "Rexxar's Basic Attacks deal more damage, Misha's attacks slow",
        descriptionLong: "Rexxar's Basic Attacks deal 10% more damage, and Misha's Basic Attacks slow the target by 20% for 1.25 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_slow.png",
        isPassive: false,
        order: 3,
        tier: "level20"
      },
      {
        id: "RexxarHardenedSkin",
        name: "Hardened Skin",
        descriptionShort: "Rexxar and Misha gain massive Armor",
        descriptionLong: "Rexxar and Misha gain 75 Armor for 4 seconds, reducing damage taken by 75%.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_hardenedshield.png",
        isPassive: false,
        order: 4,
        tier: "level20"
      }
    ]
  ],
  heroUnits: [
    {
      name: "Misha",
      nameNormalized: "rexxarmisha",
      size: 0.9375,
      movementSpeed: 4.8398,
      health: {
        amount: 1520,
        scale: 0.0475,
        regenRate: 3.1718,
        regenScale: 0.0475
      },
      autoAttacks: [
        {
          nameId: "MishaWeapon",
          range: 1.5,
          period: 1.2,
          damage: 50,
          damageScale: 0.04
        }
      ],
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/rexxarmisha.png",
      abilities: [
        {
          id: "RexxarMishaCharge",
          name: "Misha, Charge!",
          descriptionShort: "Order Misha to charge, damaging and stunning enemies",
          descriptionLong: "Misha charges in a line, dealing 150 (+4% / level) damage and stunning enemies for 1.25 seconds.",
          cooldown: null,
          category: "basic",
          type: "W",
          icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rexxar_mishacharge.png",
          isPassive: false
        }
      ],
      talents: [],
      analysis: {
        tankiness: 7.22,
        damageSustainedPhysical: 2.5
      }
    }
  ],
  analysis: {
    tankiness: 54.538606403013176,
    damageSustainedPhysical: 44.32892249527411
  }
};
      
export default rexxar;