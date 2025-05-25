import { Hero } from '../heroes';
      
export const leoric: Hero = {
  name: "Leoric",
  nameNormalized: "leoric",
  franchise: "Diablo",
  gender: "Male",
  size: 0.8125,
  movementSpeed: 4.8398,
  health: {
    amount: 2550,
    scale: 0.04,
    regenRate: 5.3125,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "LeoricWeapon",
      range: 2,
      period: 1.3,
      damage: 115,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/leoric.png",
  abilities: [
    {
      id: "LeoricUndyingTrait",
      name: "Undying",
      descriptionShort: "Leoric haunts his enemies as a ghost while dead",
      descriptionLong: "Leoric becomes a ghost when he dies, and resurrects upon reaching full Health. Leoric deals no damage while dead. Wrath Of The Bone KingLeoric's first two Basic Attacks cleave for 100% damage, and his third Basic Attack deals 225% damage to a single target.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_trait.png",
      isPassive: true,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 45
      }
    },
    {
      id: "LeoricSkeletalSwingTargetedReady",
      name: "Skeletal Swing",
      descriptionShort: "Damage and slow enemies",
      descriptionLong: "Leoric swings his mace, dealing 150 (+4% / level) damage and Slowing enemies by 40% for 2.5 seconds. If an enemy Hero is hit, refund 50% of the cooldown and Mana cost. Deals 75% additional damage to Minions. Peasants!",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 12,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_skeletalswing.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 56.25
      }
    },
    {
      id: "LeoricDrainHope",
      name: "Drain Hope",
      descriptionShort: "Drain Health from an enemy Hero while close to them",
      descriptionLong: "Grab an enemy Hero's soul, dealing up to 20% of their maximum Health as damage and healing Leoric for up to 20% of his maximum Health while he is nearby, over 4 seconds. Leoric's Movement Speed is reduced by 20% while this is active.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 10,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_drainhope.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 6,
        magicalDamage: 0
      }
    },
    {
      id: "LeoricWraithWalk",
      name: "Wraith Walk",
      descriptionShort: "Leoric's ghost separates from his body to move unhindered",
      descriptionLong: "Leoric separates from his body, becoming Unstoppable and gaining Movement Speed accelerating up to 50% over 2.5 seconds. When Wraith Walk ends or is canceled, his body jumps to his wraith.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 14,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_wraithwalk.png",
      isPassive: false,
      analysis: {
        mobility: 10.714285714285714,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 0
      }
    },
    {
      id: "LeoricEntomb",
      name: "Entomb",
      descriptionShort: "Wall in an area",
      descriptionLong: "Create an unpassable tomb for 4 seconds.",
      cost: {
        type: "Mana",
        amount: 90
      },
      cooldown: 50,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_entomb.png",
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
      id: "LeoricMarchoftheBlackKing",
      name: "March of the Black King",
      descriptionShort: "March forward, healing Leoric, damaging enemies",
      descriptionLong: "Leoric becomes Unstoppable and walks forward, swinging his mace 3 times. Enemies hit take 250 (+4% / level) damage, and Heroes hit heal Leoric for 12% of his maximum Health.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 50,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_r2.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 2.4000000000000004,
        magicalDamage: 0
      }
    }
  ],
  talents: [
    [
      {
        id: "LeoricMasteryConsumeVitalitySkeletalSwing",
        name: "Consume Vitality",
        descriptionShort: "Skeletal Swing heals",
        descriptionLong: "Skeletal Swing's cooldown is reduced by 2 seconds. Enemy Heroes hit heal Leoric for 4% of his maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_skeletalswing.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.8,
          magicalDamage: 0
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "LeoricSkeletalSwingTargetedReady"
        ]
      },
      {
        id: "LeoricMasteryFealtyUntoDeathUndying",
        name: "Fealty Unto Death",
        descriptionShort: "Gain Health and Mana when Minions die",
        descriptionLong: "When a nearby friendly or enemy Minion dies, Leoric restores 32 (+4% / level) Health and 6 Mana.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_trait.png",
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
          "LeoricUndyingTrait"
        ]
      },
      {
        id: "LeoricMasteryOsseinRenewal",
        name: "Ossein Renewal",
        descriptionShort: "Activate to heal",
        descriptionLong: "Activate to heal Leoric for 30% of his maximum Health over 5 seconds. Regeneration Globes lower the cooldown of this Ability by 20 seconds.",
        cooldown: 120,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_amplifiedhealing.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 6,
          magicalDamage: 0
        },
        order: 3,
        tier: "level1"
      }
    ],
    [
      {
        id: "LeoricMasteryGhastlyReachSkeletalSwing",
        name: "Ghastly Reach",
        descriptionShort: "Increase Skeletal Swing range",
        descriptionLong: "Increase the range of Skeletal Swing by 25%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_skeletalswing.png",
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
          "LeoricSkeletalSwingTargetedReady"
        ]
      },
      {
        id: "LeoricMasteryParalyzingRageSkeletalSwing",
        name: "Paralyzing Rage",
        descriptionShort: "Increase Skeletal Swing Slow",
        descriptionLong: "Increase the Slow of Skeletal Swing by 20%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_skeletalswing_var1.png",
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
          "LeoricSkeletalSwingTargetedReady"
        ]
      },
      {
        id: "LeoricSkeletalSwingKneelPeasantsTalent",
        name: "Kneel, Peasants!",
        descriptionShort: "Empower Skeletal Swing against non-Heroes",
        descriptionLong: "Skeletal Swing deals 75% additional damage to Mercenaries and Monsters, and hitting them activates Skeletal Swing's cost and cooldown refund.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_skeletalswing_var2.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 15
        },
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "LeoricSkeletalSwingTargetedReady"
        ]
      }
    ],
    [
      {
        id: "LeoricMasteryWillingVesselDrainHope",
        name: "Willing Vessel",
        descriptionShort: "Increase Drain Hope healing",
        descriptionLong: "Increase the healing from Drain Hope to 25% of Leoric's maximum Health. If Drain Hope lasts its full duration, Leoric instantly heals for an additional 5% of his maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_drainhope.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 6,
          magicalDamage: 0
        },
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "LeoricDrainEssence",
          "LeoricDrainHope"
        ]
      },
      {
        id: "LeoricMasteryDrainMomentumDrainHope",
        name: "Drain Momentum",
        descriptionShort: "Drain Hope grants Move Speed",
        descriptionLong: "Drain Hope no longer reduces Leoric's Movement Speed. If Drain Hope lasts its full duration, gain 30% Movement Speed for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_drainhope_var1.png",
        isPassive: false,
        analysis: {
          mobility: 6,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "LeoricDrainHope"
        ]
      },
      {
        id: "LeoricMasteryHopelessnessDrainHope",
        name: "Hopelessness",
        descriptionShort: "Increase Drain Hope range",
        descriptionLong: "Increase the range of Drain Hope by 25%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_drainhope_var2.png",
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
          "LeoricDrainHope"
        ]
      }
    ],
    [
      {
        id: "LeoricHeroicAbilityEntomb",
        name: "Entomb",
        descriptionShort: "Wall in an area",
        descriptionLong: "Create an unpassable tomb for 4 seconds.",
        cost: {
          type: "Mana",
          amount: 90
        },
        cooldown: 50,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_entomb.png",
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
          "LeoricEntomb"
        ]
      },
      {
        id: "LeoricHeroicAbilityMarchoftheBlackKing",
        name: "March of the Black King",
        descriptionShort: "March forward, healing Leoric, damaging enemies",
        descriptionLong: "Leoric becomes Unstoppable and walks forward, swinging his mace 3 times. Enemies hit take 250 (+4% / level) damage, and Heroes hit heal Leoric for 12% of his maximum Health.",
        cost: {
          type: "Mana",
          amount: 75
        },
        cooldown: 50,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_r2.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 2.4000000000000004,
          magicalDamage: 0
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "LeoricMarchoftheBlackKing"
        ]
      }
    ],
    [
      {
        id: "LeoricMasteryUnyieldingDespairDrainHope",
        name: "Unyielding Despair",
        descriptionShort: "Reduce Drain Hope cooldown",
        descriptionLong: "Drain Hope's cooldown is reduced by 0.75 seconds for every 1 second it is active. If Drain Hope lasts its full duration, its cooldown is reduced by an additional 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_drainhope.png",
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
          "LeoricDrainHope"
        ]
      },
      {
        id: "LeoricWraithWalkOminousWraithTalent",
        name: "Ominous Wraith",
        descriptionShort: "Empower Wraith Walk",
        descriptionLong: "Increase Wraith Walk's duration by 100%. Enemy Heroes that come in contact with the wraith deal 50% less damage for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_wraithwalk.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 10
        },
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "LeoricWraithWalk"
        ]
      },
      {
        id: "LeoricMasterySpectralLeech",
        name: "Spectral Leech",
        descriptionShort: "Basic Attacks deal extra damage and heal",
        descriptionLong: "Basic Attacks against enemy Heroes deal bonus damage equal to 2.5% of the Hero's maximum Health and heal Leoric for twice that amount.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_heal.png",
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
          "LeoricUndyingTrait"
        ]
      }
    ],
    [
      {
        id: "LeoricDrainHopeCrushingHopeTalent",
        name: "Crushing Hope",
        descriptionShort: "Full duration Drain Hope deals bonus damage",
        descriptionLong: "If Drain Hope lasts its full duration, it instantly deals an additional 15% of the target's maximum Health as damage. This damage does not heal Leoric.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_drainhope.png",
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
          "LeoricDrainHope"
        ]
      },
      {
        id: "LeoricMasteryRoyalFocusWraithWalk",
        name: "Royal Focus",
        descriptionShort: "Empower Skeletal Swing and Wraith Walk",
        descriptionLong: "Wraith Walk increases the damage of the next Skeletal Swing within 5 seconds by 50%. Each enemy Hero hit by Skeletal Swing reduces the cooldown of Wraith Walk by 7 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_wraithwalk.png",
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
          "LeoricWraithWalk"
        ]
      },
      {
        id: "LeoricMithrilMaceTalent",
        name: "Mithril Mace",
        descriptionShort: "Quest: Empower Wrath Of The Bone King",
        descriptionLong: "Increase Leoric's Attack Speed by 20%. Repeatable Quest: Nearby enemy Minion deaths grant 0.3% permanent Attack Speed, and Takedowns grant 3% permanent Attack Speed, up to 30%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_speed.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 4,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "LeoricUndyingTrait"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "LeoricMasteryBuriedAliveEntomb",
        name: "Buried Alive",
        descriptionShort: "Entomb damages and Silences",
        descriptionLong: "The duration of Entomb is lowered by 1 second, but enemies trapped inside are Silenced and take 50 (+4% / level) damage every 1 second.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_entomb.png",
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
          "LeoricEntomb"
        ],
        prerequisiteTalentIds: [
          "LeoricHeroicAbilityEntomb"
        ]
      },
      {
        id: "LeoricMasteryDeathMarchMarchoftheBlackKing",
        name: "Death March",
        descriptionShort: "March of the Black King applies Drain Hope",
        descriptionLong: "The final swing of March of the Black King also applies Drain Hope to nearby enemy Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_r2.png",
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
          "LeoricMarchoftheBlackKing"
        ],
        prerequisiteTalentIds: [
          "LeoricHeroicAbilityMarchoftheBlackKing"
        ]
      },
      {
        id: "LeoricBurningDespairTalent",
        name: "Burning Despair",
        descriptionShort: "Damage nearby enemies, gain Armor",
        descriptionLong: "Deal 40 (+4% / level) damage per second to nearby enemies. While Drain Hope is active, gain 40 Armor and the damage and area is increased by 100%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_leoric_drainhope.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 8,
          healing: 0,
          magicalDamage: 8
        },
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "LeoricDrainHope"
        ]
      },
      {
        id: "LeoricShroudoftheDeadKingTalent",
        name: "Shroud of the Dead King",
        descriptionShort: "Activate to become Protected",
        descriptionLong: "Activate to become Protected for 3 seconds, preventing all damage.",
        cooldown: 25,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_hardenedshield.png",
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
    tankiness: 76.83615819209038,
    physicalDamage: 44.23076923076923,
    mobility: 34.636196145124714,
    healing: 2.0405684440665617,
    magicalDamage: 3.740579281808778
  }
};
