import { Hero } from '../heroes';
      
export const tassadar: Hero = {
  name: "Tassadar",
  nameNormalized: "tassadar",
  franchise: "Starcraft",
  gender: "Male",
  size: 0.8125,
  movementSpeed: 4.8398,
  health: {
    amount: 1650,
    scale: 0.04,
    regenRate: 3.4375,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "TassadarResonanceBeam",
      range: 6.5,
      period: 0.25,
      damage: 14,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/tassadar.png",
  abilities: [
    {
      id: "TassadarResonanceBeam",
      name: "Resonance Beam",
      descriptionShort: "Basic Attacks are Channeled, restore Mana",
      descriptionLong: "Tassadar's Basic Attack is a Channeled beam that Slows by 15%. While Channeling, your Basic Attack damage and Mana regeneration increases by 25% a second, to a maximum of 100%. While at full charge, gain an extra 3 Mana every second. This bonus is lost after 6 seconds of not Channeling.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_rework_trait.png",
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
      id: "TassadarShockRay",
      name: "Shock Ray",
      descriptionShort: "Damage and Slow enemies in a line",
      descriptionLong: "Channel a beam of Psionic energy, dealing 280 (+4% / level) damage and Slowing enemies in a line by 30% for 2 seconds.",
      cost: {
        type: "Mana",
        amount: 55
      },
      cooldown: 7,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_rework_q_ray.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 120
      }
    },
    {
      id: "TassadarPsionicStorm",
      name: "Psionic Storm",
      descriptionShort: "Damage enemies in an area",
      descriptionLong: "Create a Psionic Storm at the targeted location for 3 seconds. While in a storm, enemies take 38 (+4% / level) damage every 0.5 seconds, increasing by 20% for each consecutive instance of damage, up to 100%.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 8,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_psionicstorm.png",
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
      id: "TassadarForceWall",
      name: "Force Wall",
      descriptionShort: "Create an unpathable wall",
      descriptionLong: "After a 0.5 second delay, create a wall that blocks all units from moving through it for 2 seconds.",
      cost: {
        type: "Mana",
        amount: 65
      },
      cooldown: 18,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_forcewall.png",
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
      id: "TassadarArchon",
      name: "Archon",
      descriptionShort: "Become an Archon",
      descriptionLong: "Tassadar transforms into an Archon, gaining a Shield equal to 25% of his maximum Health and empowering Resonance Beam. Lasts for 12 seconds. Resonance Beam: Deals 140 (+4% / level) damage to the target and splashes 70 (+4% / level) damage to nearby enemies. Heroes hit have their Spell Armor reduced by 20 for 2 seconds. Resonance Beam is fully charged while Archon is active.",
      cost: {
        type: "Mana",
        amount: 100
      },
      cooldown: 90,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_archon.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 28
      }
    },
    {
      id: "TassadarBlackHole",
      name: "Black Hole",
      descriptionShort: "Damage and Stun Heroes in long line",
      descriptionLong: "After a 0.5 second cast, create a Black Hole that travels in a long line. Enemy Heroes within the Black Hole's area are quickly pulled towards its center. Touching the center deals 310 (+4% / level) damage and Stuns the target for 1.25 seconds.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_rework_blackhole.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 62
      }
    }
  ],
  talents: [
    [
      {
        id: "TassadarStaticCharge",
        name: "Static Charge",
        descriptionShort: "Quest: Hero hits increase damage",
        descriptionLong: "Quest: Heroes hit by Shock Ray permanently increases its damage by 5 and grants 33% Resonance Beam charge. Maximum of 200 bonus damage.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_rework_q_ray.png",
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
          "TassadarShockRay"
        ],
        isQuest: true
      },
      {
        id: "TassadarPsionicStormPsiInfusion",
        name: "Psi-Infusion",
        descriptionShort: "Increased range, hits return Mana",
        descriptionLong: "Increases the range of Psionic Storm by 33%. Each non-Structure enemy hit by Psionic Storm restores 0.5 Mana, increased to 5 against Heroes.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_psionicstorm.png",
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
          "TassadarPsionicStorm"
        ]
      },
      {
        id: "TassadarKhaydarinAmulet",
        name: "Khaydarin Amulet",
        descriptionShort: "Quest: Empower Resonance Beam",
        descriptionLong: "Quest: Resonance Beam charges 50% faster. Reward: After Resonance Beam has been fully charged for 80 seconds, it bounces to hit 1 additional target for 75% damage, prioritizing Heroes. Reward: After Resonance Beam has been fully charged for 160 seconds, it bounces to hit 2 additional targets for 75% damage, prioritizing Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_rework_trait.png",
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
          "TassadarResonanceBeamArcDischargeDummy",
          "TassadarResonanceBeam"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "TassadarInduction",
        name: "Induction",
        descriptionShort: "Shock Ray grants Movement Speed",
        descriptionLong: "Tassadar gains 10% increased Movement Speed. Casting Shock Ray increases this bonus to 30% for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_rework_q_ray.png",
        isPassive: false,
        analysis: {
          mobility: 6,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "TassadarShockRay"
        ]
      },
      {
        id: "TassadarElectricFence",
        name: "Electric Fence",
        descriptionShort: "Force Wall deals damage and Slows",
        descriptionLong: "Force Wall deals 92 (+4% / level) damage a second to nearby enemies and Slows them by 35%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_forcewall.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 18.400000000000002
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "TassadarForceWall"
        ]
      },
      {
        id: "TassadarPlasmaShield",
        name: "Plasma Shield",
        descriptionShort: "Resonance Beam charge grants Shields",
        descriptionLong: "While Resonance Beam is fully charged, gain a Shield equal to 3% of max Health every second, stacking up to 12%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_rework_trait.png",
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
          "TassadarResonanceBeamArcDischargeDummy",
          "TassadarResonanceBeam"
        ]
      }
    ],
    [
      {
        id: "TassadarBeamAlignment",
        name: "Beam Alignment",
        descriptionShort: "Resonance Beam reduces Shock Ray cooldown",
        descriptionLong: "While Resonance Beam is fully charged, Shock Ray's cooldown refreshes 100% faster and its Slow duration is increased to 4 seconds. Passive: Reduce the Mana cost of Shock Ray from 55 to 40.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_rework_q_ray.png",
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
          "TassadarShockRay"
        ]
      },
      {
        id: "TassadarPsionicEcho",
        name: "Psionic Echo",
        descriptionShort: "Shock Ray creates Psionic Storm on Hero hit",
        descriptionLong: "Casting Psionic Storm causes your next Shock Ray within 3 seconds to only cost 30 Mana and create a Psionic Storm on the first enemy Hero hit.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_psionicstorm.png",
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
          "TassadarShockRay",
          "TassadarPsionicStorm"
        ]
      },
      {
        id: "TassadarArcDischarge",
        name: "Arc Discharge",
        descriptionShort: "Resonance Beam creates Psionic Storms",
        descriptionLong: "When Resonance Beam is fully charged, Tassadar's Basic Attack range is increased by 1 and its next instance of damage also creates a Psionic Storm on the target. This effect has a 20 second cooldown that decays twice as fast while Resonance Beam is fully charged.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_rework_trait.png",
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
          "TassadarResonanceBeamArcDischargeDummy",
          "TassadarResonanceBeam"
        ]
      }
    ],
    [
      {
        id: "TassadarHeroicAbilityArchon",
        name: "Archon",
        descriptionShort: "Become an Archon",
        descriptionLong: "Tassadar transforms into an Archon, gaining a Shield equal to 25% of his maximum Health and empowering Resonance Beam. Lasts for 12 seconds. Resonance Beam: Deals 140 (+4% / level) damage to the target and splashes 70 (+4% / level) damage to nearby enemies. Heroes hit have their Spell Armor reduced by 20 for 2 seconds. Resonance Beam is fully charged while Archon is active.",
        cost: {
          type: "Mana",
          amount: 100
        },
        cooldown: 90,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_archon.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 28
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "TassadarArchon"
        ]
      },
      {
        id: "TassadarHeroicAbilityBlackHole",
        name: "Black Hole",
        descriptionShort: "Damage and Stun Heroes in long line",
        descriptionLong: "After a 0.5 second cast, create a Black Hole that travels in a long line. Enemy Heroes within the Black Hole's area are quickly pulled towards its center. Touching the center deals 310 (+4% / level) damage and Stuns the target for 1.25 seconds.",
        cost: {
          type: "Mana",
          amount: 60
        },
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_rework_blackhole.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 62
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "TassadarBlackHole"
        ]
      }
    ],
    [
      {
        id: "TassadarFeedback",
        name: "Feedback",
        descriptionShort: "Psionic Storm enhances Resonance Beam",
        descriptionLong: "When an enemy Hero is affected by Psionic Storm, Resonance Beam's Slow is increased to 50% and it reduces Physical Armor by 25.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_psionicstorm.png",
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
          "TassadarPsionicStorm"
        ]
      },
      {
        id: "TassadarShadowWalk",
        name: "Shadow Walk",
        descriptionShort: "Become temporarily Stealthed, gain Armor",
        descriptionLong: "Tassadar becomes Stealthed and Unrevealable, but cannot attack or use Abilities for 1.5 seconds. While this effect is active, gain 40% increased Movement Speed and 35 Armor. Can be cast while Channeling Shock Ray.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_dimensionalshift.png",
        isPassive: false,
        analysis: {
          mobility: 7,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13"
      },
      {
        id: "TassadarOracle",
        name: "Oracle",
        descriptionShort: "Gain Spell Armor, Channel to reveal an area",
        descriptionLong: "Passive: While stationary, gain 30 Spell Armor for 0.75 seconds and restore 12 (+4% / level) Health a second. Activate to Channel for up to 4 seconds, revealing a gradually increasing area anywhere on the map.",
        cooldown: 45,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_oracle.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 6,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level13"
      }
    ],
    [
      {
        id: "TassadarThermalLance",
        name: "Thermal Lance",
        descriptionShort: "Percentage damage against first Hero",
        descriptionLong: "Shock Ray deals an additional 8% of maximum Health as damage to the first Hero it hits.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_rework_q_ray.png",
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
          "TassadarShockRay"
        ]
      },
      {
        id: "TassadarPsychicShock",
        name: "Psychic Shock",
        descriptionShort: "Psionic Storm damages faster",
        descriptionLong: "Psionic Storm deals damage 25% faster.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_psionicstorm.png",
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
          "TassadarPsionicStorm"
        ]
      },
      {
        id: "TassadarExecutorsWill",
        name: "Executor's Will",
        descriptionShort: "Activate to empower Resonance Beam",
        descriptionLong: "Activate to gain full Resonance Beam charge, 20% Spell Power, and cause Basic and Heroic Ability cooldowns to regenerate 25% faster. This effect lasts as long as Resonance Beam remains at full charge.",
        cooldown: 40,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_temp_btn-upgrade-protoss-khaydarinamulet.png",
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
        id: "TassadarMasteryTwilightArchon",
        name: "Twilight Archon",
        descriptionShort: "Basic Attacks increase Archon duration",
        descriptionLong: "Basic Attacks while in Archon form increase its duration by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_archon.png",
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
          "TassadarArchon"
        ],
        prerequisiteTalentIds: [
          "TassadarHeroicAbilityArchon"
        ]
      },
      {
        id: "TassadarKugelblitz",
        name: "Kugelblitz",
        descriptionShort: "Black Hole reduces Armor, creates Psionic Storms",
        descriptionLong: "Enemy Heroes hit by Black Hole's center have their Armor reduced by 20 for 3 seconds and have a Psionic Storm created at their location.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_rework_blackhole.png",
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
          "TassadarBlackHole"
        ],
        prerequisiteTalentIds: [
          "TassadarHeroicAbilityBlackHole"
        ]
      },
      {
        id: "TassadarMasteryForceBarrier",
        name: "Force Barrier",
        descriptionShort: "Increased range, reduced cooldown",
        descriptionLong: "Increase the duration of Force Wall by 0.5 seconds, its range by 50%, and reduce its cooldown by 10 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_forcewall.png",
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
          "TassadarForceWall"
        ]
      },
      {
        id: "TassadarKhalasGift",
        name: "Khala's Gift",
        descriptionShort: "Nearby Allies grant and gain Spell Power",
        descriptionLong: "Gain 4% Spell Power for yourself and each nearby ally Hero, up to 20% total Spell Power. Your total bonus is shared with all contributing allies.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tassadar_rework_active_khala.png",
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
    tankiness: 49.717514124293785,
    physicalDamage: 28.000000000000004,
    mobility: 24.006944444444446,
    healing: 0,
    magicalDamage: 7.758238510418206
  }
};
