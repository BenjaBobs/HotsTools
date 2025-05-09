import { Hero } from '../heroes';
      
export const guldan: Hero = {
  name: "Gul'dan",
  nameNormalized: "guldan",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.8125,
  movementSpeed: 4.8398,
  health: {
    amount: 1700,
    scale: 0.04,
    regenRate: 3.543,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 0,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroGuldan",
      range: 5.5,
      period: 1,
      damage: 60,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/guldan.png",
  abilities: [
    {
      id: "GuldanLifeTap",
      name: "Life Tap",
      descriptionShort: "Restore Mana at the cost of Health",
      descriptionLong: "Gul'dan does not regenerate Mana. Activate to restore 25% of Gul'dan's Mana.",
      cost: {
        type: "Life",
        amount: 222
      },
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_lifetap.png",
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
      id: "GuldanFelFlame",
      name: "Fel Flame",
      descriptionShort: "Release a wave of flame that damages enemies",
      descriptionLong: "Release a wave of flame, dealing 210 (+4.5% / level) damage to enemies.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 1.5,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_felflame.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 420
      }
    },
    {
      id: "GuldanDrainLife",
      name: "Drain Life",
      descriptionShort: "Drain Health from an enemy, dealing damage and healing Gul'dan",
      descriptionLong: "Drain the life from an enemy over 3 seconds, dealing 132 (+4% / level) damage per second and healing Gul'dan for 188 (+4% / level) Health per second.",
      cooldown: 10,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_healthfunnel.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 39.6,
        magicalDamage: 39.6
      }
    },
    {
      id: "GuldanCorruption",
      name: "Corruption",
      descriptionShort: "Deals damage over time to enemies in the area",
      descriptionLong: "Call forth three bursts of shadow energy, dealing 204 (+4.5% / level) damage over 6 seconds. Corruption can stack up to 3 times on an enemy.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 14,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_handofguldan.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 43.714285714285715
      }
    },
    {
      id: "GuldanHorrify",
      name: "Horrify",
      descriptionShort: "Deals damage and Fears Heroes",
      descriptionLong: "After 0.5 seconds, deal 120 (+4% / level) damage to enemy Heroes in an area and Fear them for 2 seconds. While Feared, Heroes are Silenced and are forced to run away from Horrify's center.",
      cost: {
        type: "Mana",
        amount: 90
      },
      cooldown: 80,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_horrify.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 24
      }
    },
    {
      id: "GuldanRainOfDestruction",
      name: "Rain of Destruction",
      descriptionShort: "Summon a rain of meteors in an area",
      descriptionLong: "After 1.5 seconds, summon a rain of meteors in an area for 7 seconds. Each meteor deals 165 (+4% / level) damage in a small area.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 70,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_rainoffire.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 33
      }
    }
  ],
  talents: [
    [
      {
        id: "GuldanFelFlamePursuitOfFlame",
        name: "Pursuit of Flame",
        descriptionShort: "Quest: Hit 30 Heroes to increase area",
        descriptionLong: "Quest: Hit 30 enemy Heroes with Fel Flame. Reward: Fel Flame's radius is increased by 10%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_felflame.png",
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
          "GuldanFelFlame"
        ],
        isQuest: true
      },
      {
        id: "GuldanChaoticEnergy",
        name: "Chaotic Energy",
        descriptionShort: "Quest: Gather Regen Globes to reduce Mana costs",
        descriptionLong: "Increases the cast range of Drain Life by 25%, and Regen Globes heal for 50% more. Quest: Gather 15 Regen Globes. Reward: Basic Ability Mana costs are permanently reduced by 20.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_healthfunnel.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 5,
          magicalDamage: 0
        },
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "GuldanDrainLife"
        ],
        isQuest: true
      },
      {
        id: "GuldanCorruptionEchoedCorruption",
        name: "Echoed Corruption",
        descriptionShort: "Quest: Hit 40 Heroes with Corruption to increase strikes",
        descriptionLong: "Quest: Hit 40 enemy Heroes with Corruption. Reward: After the third strike, Corruption strikes 3 times in the opposite direction.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_handofguldan.png",
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
          "GuldanCorruption"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "GuldanDrainLifeHealthFunnel",
        name: "Health Funnel",
        descriptionShort: "Reduces Drain Life's cooldown",
        descriptionLong: "Drain Life's cooldown recharges 100% faster while it is channeling. If an enemy dies while under the effect of Drain Life, the cooldown is instantly refreshed.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_healthfunnel.png",
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
          "GuldanDrainLife"
        ]
      },
      {
        id: "GuldanLifeTapImprovedLifeTap",
        name: "Improved Life Tap",
        descriptionShort: "Life Tap restores more Mana",
        descriptionLong: "Increase the Mana restored by Life Tap to 40%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_lifetap.png",
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
          "GuldanLifeTapFree",
          "GuldanLifeTap"
        ]
      },
      {
        id: "GuldanConsumeSoul",
        name: "Consume Soul",
        descriptionShort: "Instantly kill an enemy Minion to heal",
        descriptionLong: "Instantly kill an enemy Minion and heal for 365 (+4% / level) Health. Stores up to 3 charges.",
        cooldown: 25,
        charges: {
          chargesMax: 3,
          chargesInitial: 3,
          chargeCost: 1
        },
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_darkpact.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 73,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4"
      }
    ],
    [
      {
        id: "GuldanFelFlameBoundByShadow",
        name: "Bound by Shadow",
        descriptionShort: "Fel Flame hits reduce the cooldown of Corruption",
        descriptionLong: "Each enemy Hero hit with Fel Flame reduces the cooldown of Corruption by 1.75 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_felflame.png",
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
          "GuldanFelFlame"
        ]
      },
      {
        id: "GuldanCorruptionCurseOfExhaustion",
        name: "Curse of Exhaustion",
        descriptionShort: "Drain Life deals more damage, Slows",
        descriptionLong: "Drain Life deals 50% more damage and Slows the target's Movement Speed by 40%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_healthfunnel.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 10
        },
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "GuldanDrainLife"
        ]
      },
      {
        id: "GuldanLifeTapHungerforPower",
        name: "Hunger for Power",
        descriptionShort: "Gain Spell Power but reduce healing received",
        descriptionLong: "Increases Spell Power by 15% but reduces healing received from allies by 25%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_hungerforpower.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 3,
          magicalDamage: 0
        },
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "GuldanLifeTapFree",
          "GuldanLifeTap"
        ]
      }
    ],
    [
      {
        id: "GuldanHorrify",
        name: "Horrify",
        descriptionShort: "Deals damage and Fears Heroes",
        descriptionLong: "After 0.5 seconds, deal 120 (+4% / level) damage to enemy Heroes in an area and Fear them for 2 seconds. While Feared, Heroes are Silenced and are forced to run away from Horrify's center.",
        cost: {
          type: "Mana",
          amount: 90
        },
        cooldown: 80,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_horrify.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 24
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "GuldanHorrify"
        ]
      },
      {
        id: "GuldanRainOfDestruction",
        name: "Rain of Destruction",
        descriptionShort: "Summon a rain of meteors in an area",
        descriptionLong: "After 1.5 seconds, summon a rain of meteors in an area for 7 seconds. Each meteor deals 165 (+4% / level) damage in a small area.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 70,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_rainoffire.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 33
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "GuldanRainOfDestruction"
        ]
      }
    ],
    [
      {
        id: "GuldanFelFlameFelArmor",
        name: "Fel Armor",
        descriptionShort: "Fel Flame grants Spell Armor",
        descriptionLong: "Hitting an enemy Hero with Fel Flame grants 50 Spell Armor for 2.5 seconds, reducing Ability Damage taken by 50%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_felflame.png",
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
          "GuldanFelFlame"
        ]
      },
      {
        id: "GuldanDrainLifeHarvestLife",
        name: "Harvest Life",
        descriptionShort: "Increases healing from Drain Life",
        descriptionLong: "Drain Life heals for 75% more Health when used on Heroes.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_healthfunnel.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 15,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "GuldanDrainLife"
        ]
      },
      {
        id: "GuldanDarkBargain",
        name: "Dark Bargain",
        descriptionShort: "Increase Health, respawn time",
        descriptionLong: "Gul'dan's maximum Health is permanently increased by 40% but his respawn time is increased by 10 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_darkbargain.png",
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
          "GuldanLifeTapFree",
          "GuldanLifeTap"
        ]
      },
      {
        id: "GuldanHealthstone",
        name: "Healthstone",
        descriptionShort: "Activate to heal",
        descriptionLong: "Activate to heal for 25% of Gul'dan's maximum Health.",
        cooldown: 45,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_healthstone.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 5,
          magicalDamage: 0
        },
        order: 4,
        tier: "level13"
      }
    ],
    [
      {
        id: "GuldanFelFlameRampantHellfire",
        name: "Rampant Hellfire",
        descriptionShort: "Increases Fel Flame's damage",
        descriptionLong: "Fel Flame's damage is increased by 12% for 5 seconds when hitting an enemy Hero. This can stack up to 5 times.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_felflame.png",
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
          "GuldanFelFlame"
        ]
      },
      {
        id: "GuldanCorruptionRuinousAffliction",
        name: "Ruinous Affliction",
        descriptionShort: "Corruption deals bonus damage",
        descriptionLong: "Corruption deals an additional 78 (+4% / level) damage on impact. If the enemy is hit by all three strikes, the third strike deals 268 (+4% / level) damage.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_handofguldan.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 69.2
        },
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "GuldanCorruption"
        ]
      },
      {
        id: "GuldanLifeTapDarknessWithin",
        name: "Darkness Within",
        descriptionShort: "Life Tap to gain Damage",
        descriptionLong: "Dealing 600 (+4% / level) damage to enemy Heroes causes the next cast of Life Tap to cost no Health and grant Gul'dan 25% Spell Power for 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_lifetap.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 120
        },
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "GuldanLifeTapFree",
          "GuldanLifeTap"
        ]
      }
    ],
    [
      {
        id: "GuldanHorrifyHaunt",
        name: "Haunt",
        descriptionShort: "Increases Horrify duration, lower enemies' Armor",
        descriptionLong: "Increases the duration of Horrify by 1 second, and while Feared, enemies lose 20 Armor, causing them to take 20% increased damage.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_horrify.png",
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
          "GuldanHorrify"
        ],
        prerequisiteTalentIds: [
          "GuldanHorrify"
        ]
      },
      {
        id: "GuldanRainOfDestructionDeepImpact",
        name: "Deep Impact",
        descriptionShort: "Rain of Destruction slows enemy Movement Speed",
        descriptionLong: "Rain of Destruction Slows enemies Movement Speed by 90% for 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_rainoffire.png",
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
          "GuldanRainOfDestruction"
        ],
        prerequisiteTalentIds: [
          "GuldanRainOfDestruction"
        ]
      },
      {
        id: "GuldanDemonicCircle",
        name: "Demonic Circle",
        descriptionShort: "Summon a Demonic Circle that Gul'dan can teleport to",
        descriptionLong: "Summon a Demonic Circle at Gul'dan's location. Activate to teleport Gul'dan to the Demonic Circle.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_guldan_demoniccircle.png",
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
      }
    ]
  ],
  analysis: {
    tankiness: 51.2241054613936,
    physicalDamage: 30,
    mobility: 24.006944444444446,
    healing: 9.61982266488522,
    magicalDamage: 20.700246996981146
  }
};
