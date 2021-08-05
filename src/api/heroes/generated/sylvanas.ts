import { Hero } from '../heroes';
      
const sylvanas: Hero = {
  name: "Sylvanas",
  nameNormalized: "sylvanas",
  franchise: "Warcraft",
  gender: "Female",
  size: 0.625,
  movementSpeed: 4.8398,
  health: {
    amount: 1650,
    scale: 0.04,
    regenRate: 3.4414,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "SylvanasHeroWeapon",
      range: 5.5,
      period: 0.6,
      damage: 81,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/sylvanas.png",
  abilities: [
    {
      id: "SylvanasBlackArrowsActive",
      name: "Black Arrows",
      descriptionShort: "Basic Attacks apply Banshee's Curse, activate to disable enemies",
      descriptionLong: "Activate to cause all Basic Attacks and Abilities to Stun Minions, non-Elite Mercenaries, and Structures for 3 seconds. Lasts for 10 seconds.  Banshee's CurseBasic Attacks infect enemies with Banshee's Curse for 3 seconds, stacking up to 3 times. Deal 25% more damage to enemies with 3 stacks.",
      cooldown: 40,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_blackarrows.png",
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
      id: "SylvanasWitheringFire",
      name: "Withering Fire",
      descriptionShort: "Shoot arrows at the closest enemy. Cooldown is reset on Takedown.",
      descriptionLong: "Shoot the closest enemy up to 5 times over 1.5 seconds for 39 (+4% / level) damage, prioritizing Heroes. Cooldown is reset on getting a Takedown.",
      cost: {
        type: "Mana",
        amount: 25
      },
      cooldown: 8,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_witheringfire.png",
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
      id: "SylvanasShadowDagger",
      name: "Shadow Dagger",
      descriptionShort: "Damage an enemy over time, spreading after hit",
      descriptionLong: "Throw a dagger at a target enemy that deals 30 (+4% / level) damage and an additional 150 (+4% / level) damage over 2.5 seconds. Damage dealt by Sylvanas to the initial target spreads Shadow Dagger to all nearby enemies.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 11,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_shadowdagger.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 2.7272727272727275
      }
    },
    {
      id: "SylvanasHauntingWave",
      name: "Haunting Wave",
      descriptionShort: "Deals damage and allows teleportation",
      descriptionLong: "Send forth a wave of banshees dealing 114 (+4% / level) damage to all targets. Reactivate to teleport to the banshees' location.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 11,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_hauntingwave.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 10.363636363636363
      }
    },
    {
      id: "SylvanasWailingArrow",
      name: "Wailing Arrow",
      descriptionShort: "Fire arrow that damages and Silences",
      descriptionLong: "Shoot an arrow that can be reactivated to deal 228 (+4% / level) damage and Silence enemies in an area for 2.5 seconds. The arrow detonates automatically if it reaches maximum range.",
      cost: {
        type: "Mana",
        amount: 100
      },
      cooldown: 90,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_wailingarrow.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 15.2
      }
    },
    {
      id: "SylvanasMindControlMissile",
      name: "Mind Control",
      descriptionShort: "Force an enemy Hero to walk towards Sylvanas",
      descriptionLong: "After 0.25 seconds, fire a missile that Mind Controls the first enemy Hero hit. Heroes hit are Silenced, Slowed by 30%, have 3 stacks of Banshee's Curse applied to them, and are forced to walk towards Sylvanas for 1.75 seconds.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 40,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_mindcontrol.png",
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
        id: "SylvanasTalentMightOfTheBansheeQueen",
        name: "Might of the Banshee Queen",
        descriptionShort: "Withering Fire grants Attack Speed, Spell Power",
        descriptionLong: "Hitting an enemy Hero with Withering Fire increases Sylvanas's Attack Speed and Spell Power by 5% for 6 seconds, stacking up to 5 times.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_witheringfire.png",
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
          "SylvanasWitheringFire"
        ]
      },
      {
        id: "SylvanasUnfurlingShadowsShadowDagger",
        name: "Unfurling Shadows",
        descriptionShort: "Quest: Increase Shadow Dagger damage",
        descriptionLong: "Quest: Each time an enemy Hero with 3 stacks of Banshee's Curse is hit by Shadow Dagger, its damage is permanently increased by 0.5%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_shadowdagger.png",
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
          "SylvanasShadowDagger"
        ],
        isQuest: true
      },
      {
        id: "SylvanasTalentOverwhelmingAffliction",
        name: "Overwhelming Affliction",
        descriptionShort: "Banshee's Curse Slows, bonus damage to Heroes",
        descriptionLong: "Enemy Heroes with 3 stacks of Banshee's Curse are Slowed by 15%. Sylvanas's Basic Attacks against Slowed enemy Heroes deal 1% of their maximum Health as damage.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_blackarrows.png",
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
          "SylvanasBlackArrowsActive"
        ]
      }
    ],
    [
      {
        id: "SylvanasTalentUnstablePoison",
        name: "Unstable Poison",
        descriptionShort: "Enemy Minions can explode on death",
        descriptionLong: "Minions that die under the effects of Shadow Dagger or Sylvanas's Traits explode, dealing 130 (+4% / level) damage to nearby Minions, Mercenaries, and Summons.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_shadowdagger.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 8.666666666666666
        },
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "SylvanasShadowDagger"
        ]
      },
      {
        id: "SylvanasTalentMercenaryQueen",
        name: "Mercenary Queen",
        descriptionShort: "Empower nearby Mercenaries",
        descriptionLong: "Friendly non-Elite Mercenaries near Sylvanas deal 60% more damage. Sylvanas Stuns and deals 30% additional damage to Mercenaries with 3 stacks of Banshee's Curse.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_blackarrows.png",
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
          "SylvanasBlackArrowsActive"
        ]
      },
      {
        id: "SylvanasHeroicAbilityPossession",
        name: "Possession",
        descriptionShort: "Activate to convert enemy Minions",
        descriptionLong: "Activate to force an enemy Minion to fight for Sylvanas's team. Catapults require 3 charges. Stores up to 3 charges.",
        cooldown: 12,
        charges: {
          chargesMax: 3,
          chargesInitial: 3,
          chargeCost: 1
        },
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_possession.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4"
      }
    ],
    [
      {
        id: "SylvanasTalentWitheringFireBarbedShot",
        name: "Barbed Shot",
        descriptionShort: "Withering Fire deals bonus damage",
        descriptionLong: "Hitting the same enemy with 5 shots of Withering Fire causes the 5th shot to deal 350% bonus damage.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_witheringfire.png",
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
          "SylvanasWitheringFire"
        ]
      },
      {
        id: "SylvanasTalentLostSoul",
        name: "Lost Soul",
        descriptionShort: "Basic Attacks reduce Shadow Dagger cooldown",
        descriptionLong: "Increase Shadow Dagger's damage by 10%.  Basic Attacks against Heroes with 3 stacks of Banshee's Curse reduce the cooldown of Shadow Dagger by 1.75 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_shadowdagger.png",
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
          "SylvanasShadowDagger"
        ]
      },
      {
        id: "SylvanasTalentFesteringWounds",
        name: "Festering Wounds",
        descriptionShort: "Haunting Wave applies Banshee's Curse",
        descriptionLong: "Increase Haunting Wave's damage by 15%. Haunting Wave applies 3 stacks of Banshee's Curse.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_hauntingwave.png",
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
          "SylvanasHauntingWave"
        ]
      }
    ],
    [
      {
        id: "SylvanasHeroicAbilityWailingArrow",
        name: "Wailing Arrow",
        descriptionShort: "Fire arrow that damages and Silences",
        descriptionLong: "Shoot an arrow that can be reactivated to deal 228 (+4% / level) damage and Silence enemies in an area for 2.5 seconds. The arrow detonates automatically if it reaches maximum range.",
        cost: {
          type: "Mana",
          amount: 100
        },
        cooldown: 90,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_wailingarrow.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 15.2
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "SylvanasWailingArrow"
        ]
      },
      {
        id: "SylvanasMindControl",
        name: "Mind Control",
        descriptionShort: "Force an enemy Hero to walk towards Sylvanas",
        descriptionLong: "After 0.25 seconds, fire a missile that Mind Controls the first enemy Hero hit. Heroes hit are Silenced, Slowed by 30%, have 3 stacks of Banshee's Curse applied to them, and are forced to walk towards Sylvanas for 1.75 seconds.",
        cost: {
          type: "Mana",
          amount: 50
        },
        cooldown: 40,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_mindcontrol.png",
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
          "SylvanasMindControlMissile"
        ]
      }
    ],
    [
      {
        id: "SylvanasTalentColdEmbrace",
        name: "Cold Embrace",
        descriptionShort: "Shadow Dagger lowers Armor",
        descriptionLong: "Shadow Dagger reduces the Armor of the initial target by 25 and any enemy it spreads to by 10 for 2.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_shadowdagger.png",
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
          "SylvanasShadowDagger"
        ]
      },
      {
        id: "SylvanasTalentWindrunnerHauntingWave",
        name: "Windrunner",
        descriptionShort: "Haunting Wave casts twice, resets Withering Fire",
        descriptionLong: "Haunting Wave can be cast a second time for free within 5 seconds after teleporting. Teleporting with Haunting Wave resets the cooldown of Withering Fire.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_hauntingwave.png",
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
          "SylvanasHauntingWaveWindrunnerTalent",
          "SylvanasHauntingWave"
        ]
      },
      {
        id: "SylvanasTalentRemorseless",
        name: "Remorseless",
        descriptionShort: "Basic Attacks cast Withering Fire",
        descriptionLong: "Increase Sylvanas's Basic Attack range by 1. Sylvanas's Basic Attacks against enemy Heroes with 3 stacks of Banshee's Curse shoot an untalented shot of Withering Fire. This shot of Withering Fire applies Banshee's Curse.",
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
        tier: "level13"
      }
    ],
    [
      {
        id: "SylvanasTalentWitheringFireEvasiveFire",
        name: "Evasive Fire",
        descriptionShort: "Withering Fire grants Move Speed",
        descriptionLong: "Hitting an enemy with Withering Fire grants 6% Movement Speed for 2 seconds, up to 30%. Basic Attacks refresh this duration.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_witheringfire.png",
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
          "SylvanasWitheringFire"
        ]
      },
      {
        id: "SylvanasTalentLifeDrain",
        name: "Life Drain",
        descriptionShort: "Sylvanas heals for damage dealt",
        descriptionLong: "Heal for 15% of damage dealt by Sylvanas to enemies with 3 stacks of Banshee's Curse. Healing is doubled against Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_heal.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 2,
          magicalDamage: 0
        },
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "SylvanasBlackArrowsActive"
        ]
      },
      {
        id: "SylvanasTalentWillOfTheForsaken",
        name: "Will of the Forsaken",
        descriptionShort: "Activate to gain Unstoppable and Move Speed",
        descriptionLong: "Activate to become Unstoppable and gain 40% Movement Speed for 3 seconds.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_willoftheforsaken.png",
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
        id: "SylvanasWailingArrowDeafeningBlast",
        name: "Deafening Blast",
        descriptionShort: "Increases power of Wailing Arrow center",
        descriptionLong: "Enemies at the center of Wailing Arrow's explosion take 50% more damage and are Silenced for twice as long.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_wailingarrow.png",
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
          "SylvanasWailingArrow"
        ],
        prerequisiteTalentIds: [
          "SylvanasHeroicAbilityWailingArrow"
        ]
      },
      {
        id: "SylvanasDarkLadysCall",
        name: "Dark Lady's Call",
        descriptionShort: "Mind Control reduces enemy vision",
        descriptionLong: "Heroes hit by Mind Control have their vision radius greatly reduced for 5 seconds. Mind Control's cooldown is reduced by 25 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_mindcontrol.png",
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
          "SylvanasMindControlMissile"
        ],
        prerequisiteTalentIds: [
          "SylvanasMindControl"
        ]
      },
      {
        id: "SylvanasTalentWitheringBarrage",
        name: "Withering Barrage",
        descriptionShort: "Withering Fire applies Banshee's Curse",
        descriptionLong: "Withering Fire applies Banshee's Curse, and Heroes hit by Withering Fire reduce its cooldown by 0.75 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_sylvanas_witheringfire.png",
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
          "SylvanasWitheringFire"
        ]
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
    tankiness: 49.717514124293785,
    physicalDamage: 67.5,
    mobility: 24.199,
    healing: 0,
    magicalDamage: 12.523216364131645
  }
};
      
export default sylvanas;