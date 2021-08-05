import { Hero } from '../heroes';
      
const cassia: Hero = {
  name: "Cassia",
  nameNormalized: "cassia",
  franchise: "Diablo",
  gender: "Female",
  size: 0.6875,
  movementSpeed: 4.8398,
  health: {
    amount: 1660,
    scale: 0.04,
    regenRate: 3.457,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "AmazonHeroWeaponMelee",
      range: 2,
      period: 0.9,
      damage: 120,
      damageScale: 0.04
    },
    {
      nameId: "AmazonHeroWeaponRanged",
      range: 4.5,
      period: 0.9,
      damage: 120,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/cassia.png",
  abilities: [
    {
      id: "AmazonAvoidance",
      name: "Avoidance",
      descriptionShort: "Gain Armor while moving",
      descriptionLong: "While moving, Cassia gradually gains up to 30 Armor over 3 seconds. After being stationary for 0.75 seconds, the Armor is rapidly lost over .5 seconds. Avoidance remains charged while Fending.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_avoidance_b.png",
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
      id: "AmazonLightningFury",
      name: "Lightning Fury",
      descriptionShort: "Hurl a lightning javelin that splits upon impact",
      descriptionLong: "Hurl a lightning javelin that deals 158 (+4% / level) damage to the first enemy hit and splits into two lightning bolts that deal 158 (+4% / level) damage to enemies in their path.",
      cost: {
        type: "Mana",
        amount: 20
      },
      cooldown: 5,
      charges: {
        chargesMax: 2,
        chargesInitial: 2,
        chargeCost: 1,
        recastCooldown: 1
      },
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_lightningfury.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 63.2
      }
    },
    {
      id: "AmazonBlindingLight",
      name: "Blinding Light",
      descriptionShort: "Blind enemies in an area",
      descriptionLong: "After 0.5 seconds, deal 50 (+4% / level) damage and Blind enemies in the target area for 2 seconds. Passive: Cassia deals 20% increased damage to Blinded targets.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 15,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_blindinglight.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 3.3333333333333335
      }
    },
    {
      id: "AmazonFend",
      name: "Fend",
      descriptionShort: "Charge at a target and rapidly attack nearby enemies",
      descriptionLong: "Charge at an enemy, and upon arriving Channel for up to 1.5 seconds, dealing 64 (+4% / level) damage to enemies in front of Cassia every 0.25 seconds. Deals 50% reduced damage to non-Heroes. Avoidance remains charged while Channeling.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 10,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_fend.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 6.4
      }
    },
    {
      id: "AmazonBallLightning",
      name: "Ball Lightning",
      descriptionShort: "Throw a bouncing lightning ball",
      descriptionLong: "Throw a ball of lightning at an enemy Hero that bounces up to 6 times between nearby enemy Heroes and Cassia, dealing 180 (+4% / level) damage to enemies hit.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_balllightning.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 12
      }
    },
    {
      id: "AmazonValkyrie",
      name: "Valkyrie",
      descriptionShort: "Summon a Valkyrie to impale enemies",
      descriptionLong: "Summon a Valkyrie that rushes to Cassia after 0.75 seconds, pulling the first enemy Hero hit, dealing 225 (+4% / level) damage and Stunning them for 0.5 seconds at the end of her path. The Valkyrie knocks back all other enemy Heroes in her way.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_valkrie.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 15
      }
    }
  ],
  talents: [
    [
      {
        id: "AmazonThunderstroke",
        name: "Thunderstroke",
        descriptionShort: "Quest: Increase Lightning Fury damage",
        descriptionLong: "Increase the damage of Lightning Fury by 25. Quest: Lightning Fury's damage is increased by 1.5 every time it hits a Hero.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_lightningfury.png",
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
          "AmazonLightningFury"
        ],
        isQuest: true
      },
      {
        id: "AmazonImpale",
        name: "Impale",
        descriptionShort: "Increase Fend range and damage",
        descriptionLong: "Increase Fend's cast range and area of effect by 25%. It deals an additional 50% damage to enemies below 50% Health.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_fend.png",
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
          "AmazonFend"
        ]
      },
      {
        id: "AmazonChargedStrikes",
        name: "Charged Strikes",
        descriptionShort: "Gain Attack Speed, bounce damage",
        descriptionLong: "Gain 15% Attack Speed. Every 3rd Basic Attack deals 15% bonus damage and bounces to nearby enemy Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_new_chargedstrikes.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level1"
      }
    ],
    [
      {
        id: "AmazonPlateoftheWhale",
        name: "Plate of the Whale",
        descriptionShort: "Avoidance regenerates Health",
        descriptionLong: "Regenerate 6 (+4% / level) Health per second while Avoidance is active. If fully charged, gain an additional 12 (+4% / level) Health per second.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_avoidance_b.png",
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
          "AmazonSurgeOfLight",
          "AmazonAvoidance"
        ]
      },
      {
        id: "AmazonRingoftheLeech",
        name: "Ring of the Leech",
        descriptionShort: "Basic Attacks heal",
        descriptionLong: "Basic Attacks against your primary target heal for 15% of their damage. If an enemy is Blinded, this also affects Lightning Fury and Fend.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_ringoftheleech.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 2,
          magicalDamage: 0
        },
        order: 2,
        tier: "level4"
      },
      {
        id: "AmazonInnerLight",
        name: "Inner Light",
        descriptionShort: "Activate to heal",
        descriptionLong: "Activate to heal for 25% of your maximum Health over 5 seconds. Enemy Heroes hit with Lightning Fury lower the cooldown of this ability by 10 seconds.",
        cooldown: 70,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_innerlight.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 3.3333333333333335,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "AmazonLightningFury"
        ]
      }
    ],
    [
      {
        id: "AmazonFendGroundingRod",
        name: "Grounding Rod",
        descriptionShort: "Lightning Fury and Fend Slow enemies",
        descriptionLong: "Enemies hit by Lightning Fury or Fend are Slowed by 20% for 2 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_combo_q_e.png",
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
          "AmazonLightningFury",
          "AmazonFend"
        ]
      },
      {
        id: "AmazonSeraphsHymn",
        name: "Seraph's Hymn",
        descriptionShort: "Empower Basic Attacks, Blinding Light",
        descriptionLong: "Basic Attacks against your primary enemy Hero grant 10 Mana and reduce the cooldown of Blinding Light by 1.5 seconds. Passive: Increase the passive damage bonus of Blinding Light from 20% to 30%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_blindinglight.png",
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
          "AmazonBlindingLight"
        ]
      },
      {
        id: "AmazonSurgeOfLight",
        name: "Surge of Light",
        descriptionShort: "Activate Avoidance to deal damage",
        descriptionLong: "After taking 650 (+4% / level) damage with Avoidance active, Cassia can activate Avoidance to deal 240 (+4% / level) damage to enemies around her.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_avoidance_b.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 16
        },
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "AmazonAvoidance"
        ]
      }
    ],
    [
      {
        id: "AmazonBallLightning",
        name: "Ball Lightning",
        descriptionShort: "Throw a bouncing lightning ball",
        descriptionLong: "Throw a ball of lightning at an enemy Hero that bounces up to 6 times between nearby enemy Heroes and Cassia, dealing 180 (+4% / level) damage to enemies hit.",
        cost: {
          type: "Mana",
          amount: 60
        },
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_balllightning.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 12
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "AmazonBallLightning"
        ]
      },
      {
        id: "AmazonValkyrie",
        name: "Valkyrie",
        descriptionShort: "Summon a Valkyrie to impale enemies",
        descriptionLong: "Summon a Valkyrie that rushes to Cassia after 0.75 seconds, pulling the first enemy Hero hit, dealing 225 (+4% / level) damage and Stunning them for 0.5 seconds at the end of her path. The Valkyrie knocks back all other enemy Heroes in her way.",
        cost: {
          type: "Mana",
          amount: 60
        },
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_valkrie.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 15
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "AmazonValkyrie"
        ]
      }
    ],
    [
      {
        id: "AmazonFendWarMatron",
        name: "War Matron",
        descriptionShort: "Fend grants Protected",
        descriptionLong: "Cassia becomes Protected while Channeling Fend and for an additional 1 second if the Channel is completed.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_fend.png",
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
          "AmazonFend"
        ]
      },
      {
        id: "AmazonWarTraveler",
        name: "War Traveler",
        descriptionShort: "Increase Movement Speed, instant Mount",
        descriptionLong: "Gain 5% Movement Speed. While Avoidance is fully charged, gain an additional 10% Movement Speed and Mounting is instant.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_avoidance_b.png",
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
          "AmazonSurgeOfLight",
          "AmazonAvoidance"
        ]
      },
      {
        id: "AmazonFendGlovesOfAlacrity",
        name: "Gloves Of Alacrity",
        descriptionShort: "Increase Attack Range",
        descriptionLong: "Gain 1 Basic Attack range. While Avoidance is fully charged, gain an additional 1 Basic Attack range.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_new_gloves.png",
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
          "AmazonSurgeOfLight",
          "AmazonAvoidance"
        ]
      }
    ],
    [
      {
        id: "AmazonPowerStrike",
        name: "Power Strike",
        descriptionShort: "Lightning Fury pierces and casts Blinding Light",
        descriptionLong: "Lightning Fury pierces but only splits on Heroes. Enemy Heroes hit reduce its cooldown by 1 second and become marked for 15 seconds. Upon reaching 3 marks, remove them and cast a Blinding Light at their feet.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_combo_q_w.png",
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
          "AmazonLightningFury",
          "AmazonBlindingLight"
        ]
      },
      {
        id: "AmazonStaticElectricity",
        name: "Static Electricity",
        descriptionShort: "Fend releases Lightning Fury bolts",
        descriptionLong: "Gain 2 additional charges of Lightning Fury. Fend's impact launches a lightning bolt towards each nearby enemy Hero.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_combo_q_e.png",
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
          "AmazonLightningFury",
          "AmazonFend"
        ]
      },
      {
        id: "AmazonMartialLaw",
        name: "Martial Law",
        descriptionShort: "Disabled Heroes take additional damage",
        descriptionLong: "Basic Attacks against enemy Heroes deal bonus damage equal to 1% of their maximum Health. Increase this to 3% if they are Stunned, Rooted or Slowed.",
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
        id: "AmazonInfiniteLightning",
        name: "Infinite Lightning",
        descriptionShort: "Ball Lightning bounces indefinitely",
        descriptionLong: "Ball Lightning can now bounce indefinitely. Every bounce reduces its cooldown by 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_balllightning_a.png",
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
          "AmazonBallLightning"
        ],
        prerequisiteTalentIds: [
          "AmazonBallLightning"
        ]
      },
      {
        id: "AmazonImprisoningLight",
        name: "Imprisoning Light",
        descriptionShort: "Valkyrie Roots and Silences enemies",
        descriptionLong: "Upon impaling an enemy Hero, they are Blinded for 5 seconds and Cassia's Valkyrie creates a wave of light that deals 200 (+4% / level) damage to nearby enemies. This wave Silences and Roots them for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_valkrie_a.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 13.333333333333334
        },
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "AmazonValkyrie"
        ],
        prerequisiteTalentIds: [
          "AmazonValkyrie"
        ]
      },
      {
        id: "AmazonTitansRevenge",
        name: "Titan's Revenge",
        descriptionShort: "Basic Attacks ignore Armor",
        descriptionLong: "Cassia's Basic Attacks now ignore Armor and while Avoidance is fully charged, they deal an additional 20% bonus damage.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_avoidance_b.png",
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
          "AmazonSurgeOfLight",
          "AmazonAvoidance"
        ]
      },
      {
        id: "Amazon-AvoidanceRockstopper",
        name: "Rockstopper",
        descriptionShort: "Instantly charge and empower Avoidance",
        descriptionLong: "Activate to fully charge Avoidance and increase its Armor value to 60 for 4 seconds.  Losing Avoidance removes this bonus.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cassia_avoidance.png",
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
          "AmazonSurgeOfLight",
          "AmazonAvoidance"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 50.018832391713744,
    physicalDamage: 66.66666666666666,
    mobility: 24.199,
    healing: 0,
    magicalDamage: 44.23635703259784
  }
};
      
export default cassia;