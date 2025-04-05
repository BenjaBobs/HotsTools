import { Hero } from '../heroes';
      
export const auriel: Hero = {
  name: "Auriel",
  nameNormalized: "auriel",
  franchise: "Diablo",
  gender: "Female",
  size: 0.625,
  movementSpeed: 4.8398,
  health: {
    amount: 1700,
    scale: 0.04,
    regenRate: 3.539,
    regenScale: 0.04
  },
  energy: {
    amount: 475,
    regenRate: 0,
    name: "Stored Energy"
  },
  autoAttacks: [
    {
      nameId: "AurielHeroWeapon",
      range: 5.5,
      period: 0.8,
      damage: 64,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/auriel.png",
  abilities: [
    {
      id: "AurielBestowHope",
      name: "Bestow Hope",
      descriptionShort: "Bestowed ally's damage grants energy",
      descriptionLong: "Passive: 80% of the damage Auriel deals to Heroes and 40% dealt to non-Heroes is stored as energy. Bestow an allied Hero with Hope. While they remain near Auriel, 30% of their damage to Heroes and 10% of their damage to non-Heroes is converted to energy. Auriel can only have Bestow Hope on 1 ally at a time. Auriel can store up to 475 (+4% / level) energy.",
      cooldown: 1.5,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_bestowhope.png",
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
      id: "AurielSacredSweep",
      name: "Sacred Sweep",
      descriptionShort: "Damages enemies in an a wide arc, bonus damage to enemies in the center",
      descriptionLong: "Sweep the area with sacred power, dealing 40 (+4% / level) damage to enemies and an additional 160 (+4% / level) damage to enemies caught in the center.",
      cooldown: 8,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_angelicsweep.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 15
      }
    },
    {
      id: "AurielRayOfHeaven",
      name: "Ray of Heaven",
      descriptionShort: "Spend all energy to heal allied Heroes in an area",
      descriptionLong: "Consume Auriel's stored energy and heal allied Heroes in the area for the amount of energy consumed.",
      cooldown: 4,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_rayofheaven.png",
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
      id: "AurielDetainmentStrike",
      name: "Detainment Strike",
      descriptionShort: "Knock an enemy Hero back, stunning them if they collide with terrain",
      descriptionLong: "Deal 55 (+4% / level) damage to the first enemy Hero hit and knock them back. If they collide with terrain, they are also stunned for 1.25 seconds and take an additional 165 (+4% / level) damage.",
      cooldown: 12,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_restrainingblow.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 13.75
      }
    },
    {
      id: "AurielResurrect",
      name: "Resurrect",
      descriptionShort: "Bring an allied Hero back to life",
      descriptionLong: "Channel on the spirit of a dead ally for 1 second. After a 3 second delay, they are brought back to life with 100% of their maximum Health at the location where they died. Auriel can use this ability while dead to resurrect herself.",
      cooldown: 100,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_resurrect.png",
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
      id: "AurielCrystalAegis",
      name: "Crystal Aegis",
      descriptionShort: "Put an allied Hero into a Stasis crystal that explodes",
      descriptionLong: "Place an allied Hero into Stasis for 2 seconds. Upon expiration, Crystal Aegis deals 255 (+4% / level) damage to all nearby enemies.",
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_ribboncocoon.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 51
      }
    }
  ],
  talents: [
    [
      {
        id: "AurielIncreasingClaritySacredSweepTalent",
        name: "Increasing Clarity",
        descriptionShort: "Quest: Increases center damage by hitting Heroes",
        descriptionLong: "Quest: Every time Sacred Sweep hits a Hero in the center, increase the center damage by 2, up to 50. Reward: After hitting 25 Heroes, this center damage bonus is increased to 180.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_angelicsweep.png",
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
          "AurielSacredSweep"
        ],
        isQuest: true
      },
      {
        id: "AurielRighteousAssaultSacredSweepTalent",
        name: "Righteous Assault",
        descriptionShort: "Reduce Sacred Sweep cooldown by hitting Heroes",
        descriptionLong: "Reduces the cooldown of Sacred Sweep by 3 seconds for each enemy Hero hit by its center.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_angelicsweep_b.png",
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
          "AurielSacredSweep"
        ]
      },
      {
        id: "AurielSearingLightRayOfHeavenTalent",
        name: "Searing Light",
        descriptionShort: "Ray of Heaven also damages Heroes in the area",
        descriptionLong: "Ray of Heaven also deals damage to enemy Heroes in the area equal to 30% of the energy consumed.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_rayofheaven.png",
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
          "AurielRayOfHeaven"
        ]
      }
    ],
    [
      {
        id: "AurielMajesticSpanSacredSweepTalent",
        name: "Majestic Span",
        descriptionShort: "Increases Sacred Sweep radius",
        descriptionLong: "Increases the radius of Sacred Sweep by 15%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_angelicsweep.png",
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
          "AurielSacredSweep"
        ]
      },
      {
        id: "AurielHeavyBurdenDetainmentStrikeTalent",
        name: "Heavy Burden",
        descriptionShort: "Detainment Strike Slows",
        descriptionLong: "Detainment Strike Slows enemy Heroes by 20% for 2.5 seconds. Slow amount and duration doubled on enemies it Stuns. Passive: Increase Detainment Strikes' Stun duration by 0.25 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_restrainingblow.png",
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
          "AurielDetainmentStrike"
        ]
      },
      {
        id: "AurielRepeatedOffenseDetainmentStrikeTalent",
        name: "Repeated Offense",
        descriptionShort: "Increases Detainment Strike rangeQuest: Increases damage when Heroes are stunned",
        descriptionLong: "Enemies hit by Detainment Strike are knocked back 25% farther. Quest: Every time Detainment Strike stuns a Hero, increase the stun damage by 10, up to 60. Reward: After stunning 6 Heroes, increase this damage bonus to 250.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_restrainingblow_a.png",
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
          "AurielDetainmentStrike"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "AurielGlimmerofHopeRayOfHeavenTalent",
        name: "Glimmer of Hope",
        descriptionShort: "Regen Globes reduce Ray of Heaven energy cost",
        descriptionLong: "Collecting a Regeneration Globe reduces the cost of Auriel's next Ray of Heaven by 75%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_rayofheaven.png",
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
          "AurielRayOfHeaven"
        ]
      },
      {
        id: "AurielEmpathicLinkBestowHopeTalent",
        name: "Empathic Link",
        descriptionShort: "Allied damage taken grants energy",
        descriptionLong: "Auriel stores 25% of damage taken by allies with Bestow Hope.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_bestowhope.png",
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
          "AurielBestowHope"
        ]
      },
      {
        id: "AurielEnergizedCordRayOfHeavenTalent",
        name: "Energized Cord",
        descriptionShort: "Increases energy from Auriel Basic Attacks",
        descriptionLong: "Increases the energy stored from Auriel's Basic Attacks to 140% of the damage against Heroes and 75% of the damage against non-Heroes. Does not affect Auriel's Bestow Hope ally. Passive: Increase Basic Attack Range by 1.1.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_bestowhope_a.png",
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
          "AurielBestowHope"
        ]
      }
    ],
    [
      {
        id: "AurielHeroicResurrect",
        name: "Resurrect",
        descriptionShort: "Bring an allied Hero back to life",
        descriptionLong: "Channel on the spirit of a dead ally for 1 second. After a 3 second delay, they are brought back to life with 100% of their maximum Health at the location where they died. Auriel can use this ability while dead to resurrect herself.",
        cooldown: 100,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_resurrect.png",
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
          "AurielResurrect"
        ]
      },
      {
        id: "AurielHeroicCrystalAegis",
        name: "Crystal Aegis",
        descriptionShort: "Put an allied Hero into a Stasis crystal that explodes",
        descriptionLong: "Place an allied Hero into Stasis for 2 seconds. Upon expiration, Crystal Aegis deals 255 (+4% / level) damage to all nearby enemies.",
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_ribboncocoon.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 51
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "AurielCrystalAegis"
        ]
      }
    ],
    [
      {
        id: "AurielBlindingFlashSacredSweepTalent",
        name: "Blinding Flash",
        descriptionShort: "Sacred Sweep blinds enemies in the center",
        descriptionLong: "Enemies hit by the center area of Sacred Sweep are blinded for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_angelicsweep.png",
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
          "AurielSacredSweep"
        ]
      },
      {
        id: "AurielConvergingForceSacredSweepTalent",
        name: "Converging Force",
        descriptionShort: "Sacred Sweep pushes enemies towards the center",
        descriptionLong: "Enemies hit by the outer area are pushed slightly toward the center.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_angelicsweep_b.png",
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
          "AurielSacredSweep"
        ]
      },
      {
        id: "AurielPiercingLashDetainmentStrikeTalent",
        name: "Piercing Lash",
        descriptionShort: "Detainment Strike hits all enemy Heroes in a line",
        descriptionLong: "Detainment Strike now pierces and hits all enemy Heroes in a line, reducing the cooldown by 2 seconds for each Hero hit.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_restrainingblow.png",
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
          "AurielDetainmentStrike"
        ]
      }
    ],
    [
      {
        id: "AurielReservoirofHopeRayOfHeavenTalent",
        name: "Reservoir of Hope",
        descriptionShort: "Quest: Increases maximum Ray of Heaven energy",
        descriptionLong: "Quest: Each maximum energy Ray of Heaven Auriel casts increases the maximum amount of energy that can be stored by 55.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_rayofheaven.png",
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
          "AurielRayOfHeaven"
        ],
        isQuest: true
      },
      {
        id: "AurielWillofHeavenBestowHopeTalent",
        name: "Will of Heaven",
        descriptionShort: "Bestow Hope ally gains Attack Speed",
        descriptionLong: "Allies with Bestow Hope gain 20% Attack Speed. Passive: Auriel gains 10% increased Basic Attack Damage.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_bestowhope.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 2,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "AurielBestowHope"
        ]
      },
      {
        id: "AurielWrathofHeavenBestowHopeTalent",
        name: "Wrath of Heaven",
        descriptionShort: "Bestow Hope ally gains Spell Power",
        descriptionLong: "Allies with Bestow Hope gain 15% Spell Power. Enemy Heroes hit by the center area of Sacred Sweep or the terrain collision of Detainment Strike have their Spell Armor reduced by 20 for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_bestowhope_a.png",
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
          "AurielBestowHope"
        ]
      }
    ],
    [
      {
        id: "AurielLightSpeedResurrectTalent",
        name: "Light Speed",
        descriptionShort: "Resurrected allies gain Move Speed, reduce cooldown",
        descriptionLong: "Resurrected allies gain 200% increased Movement Speed, decaying over 4 seconds. While a resurrected ally remains alive, Resurrect's next cooldown recharges 100% faster.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_resurrect.png",
        isPassive: false,
        analysis: {
          mobility: 0.8,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "AurielResurrectSelf",
          "AurielResurrect"
        ],
        prerequisiteTalentIds: [
          "AurielHeroicResurrect"
        ]
      },
      {
        id: "AurielDiamondResolveCrystalAegisTalent",
        name: "Diamond Resolve",
        descriptionShort: "Crystal Aegis grants Armor",
        descriptionLong: "When Crystal Aegis expires, it grants the target 75 Armor for 5 seconds, reducing damage taken by 75%.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_ribboncocoon.png",
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
          "AurielCrystalAegis"
        ],
        prerequisiteTalentIds: [
          "AurielHeroicCrystalAegis"
        ]
      },
      {
        id: "AurielAngelicFlightTalent",
        name: "Angelic Flight",
        descriptionShort: "Activate to fly to a location",
        descriptionLong: "After 2 seconds, fly to a target location.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_angelicflight.png",
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
        id: "AurielShieldOfHopeTalent",
        name: "Shield of Hope",
        descriptionShort: "Shield nearby allies based on their missing Health",
        descriptionLong: "Activate to grant all nearby allied Heroes a shield for 3 seconds equal to 50% of the amount of Health they are missing.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_auriel_shieldofhope.png",
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
    tankiness: 51.2241054613936,
    physicalDamage: 40,
    mobility: 24.006944444444446,
    healing: 0,
    magicalDamage: 2.9462834343135804
  }
};
