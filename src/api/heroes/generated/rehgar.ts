import { Hero } from '../heroes';
      
export const rehgar: Hero = {
  name: "Rehgar",
  nameNormalized: "rehgar",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.75,
  movementSpeed: 4.8398,
  health: {
    amount: 1900,
    scale: 0.04,
    regenRate: 3.957,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroRehgar",
      range: 1.5,
      period: 0.9,
      damage: 110,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/rehgar.png",
  abilities: [
    {
      id: "RehgarPurge",
      name: "Purge",
      descriptionShort: "Makes target ally Unstoppable, Slows enemy Hero",
      descriptionLong: "When used on an allied Hero, make them Unstoppable for 0.5 seconds. When used on an enemy Hero, Slow them by 80%, decaying over 2 seconds. Cannot be cast on yourself.",
      cooldown: 60,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_purge.png",
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
      id: "RehgarGhostWolfActivate",
      name: "Ghost Wolf",
      descriptionShort: "Transform into a Ghost Wolf",
      descriptionLong: "Instead of using a mount, Rehgar transforms into a Ghost Wolf with 20% increased Movement Speed. Basic Attacks in Ghost Wolf form cause him to lunge at his target and deal 60% bonus damage. Dealing damage, using Abilities, and channeling cancels Ghost Wolf form.",
      cooldown: 4,
      category: "mount",
      type: "Z",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_mount.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 45
      }
    },
    {
      id: "RehgarChainHeal",
      name: "Chain Heal",
      descriptionShort: "Create a healing wave that jumps between allies",
      descriptionLong: "Heal an ally with a wave of healing for 260 (+4% / level) Health. The wave then bounces 2 times to nearby allies within 7 range, restoring 260 (+4% / level) Health to them.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 8,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_chainheal.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 97.5,
        magicalDamage: 0
      }
    },
    {
      id: "RehgarLightningShield",
      name: "Lightning Shield",
      descriptionShort: "Imbue target ally with lightning, causing damage to nearby enemies",
      descriptionLong: "Imbue an ally with lightning dealing 64 (+4% / level) damage a second to nearby enemies. Each enemy hit restores 1 Mana to Rehgar. Lasts 5 seconds.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 8,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_lightningshield.png",
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
      id: "RehgarEarthbindTotem",
      name: "Earthbind Totem",
      descriptionShort: "Creates a totem that Slows nearby enemies",
      descriptionLong: "Create a totem that Slows nearby enemies by 35%. The totem has 260 (+4% / level) Health and lasts for 6 seconds.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 15,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_earthbindtotem.png",
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
      id: "RehgarBloodlust",
      name: "Bloodlust",
      descriptionShort: "Give allied Heroes Movement Speed, Attack Speed, and Life Steal",
      descriptionLong: "Grant nearby allied Heroes 40% Attack Speed and 35% Movement Speed and causes them to heal for 30% of the Basic Attack damage to their primary target. Lasts for 6 seconds.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 90,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_bloodlust.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 7,
        magicalDamage: 0
      }
    },
    {
      id: "RehgarAncestralHealing",
      name: "Ancestral Healing",
      descriptionShort: "Significantly heal allied Hero",
      descriptionLong: "After 1 second, heal an allied Hero for 1180 (+4% / level) Health.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 100,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_ancestralhealing.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0.2,
        magicalDamage: 0
      }
    }
  ],
  talents: [
    [
      {
        id: "RehgarLightningShieldStormcaller",
        name: "Stormcaller",
        descriptionShort: "Quest: Lightning Shield increases Health, Mana",
        descriptionLong: "Increase the radius of Lightning Shield by 25%. Quest: Each time Lightning Shield damages an enemy Hero, permanently increase Rehgar's Health by 2 and Mana by 1, stacking up to 200 times.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_lightningshield.png",
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
          "RehgarLightningShield"
        ],
        isQuest: true
      },
      {
        id: "RehgarEarthbindTotemColossalTotem",
        name: "Colossal Totem",
        descriptionShort: "Increases Earthbind Totem Health, area, duration",
        descriptionLong: "Reactivate Earthbind Totem to move an existing totem to a new location. This can be used once per cast. Passive: Increase Earthbind Totem's area and duration by 50%, and Health by 25%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_earthbindtotem.png",
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
          "RehgarEarthbindTotem"
        ]
      },
      {
        id: "RehgarFeralHeart",
        name: "Feral Heart",
        descriptionShort: "Increase Ghost Wolf Movement Speed, grants Armor",
        descriptionLong: "Ghost Wolf's Movement Speed bonus is increased to 40% for the first second, then falls to 30%. Entering or exiting Ghost Wolf form grants 15 Armor for 1 second.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_ghostwolf.png",
        isPassive: false,
        analysis: {
          mobility: 8,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "RehgarGhostWolfActivate"
        ]
      }
    ],
    [
      {
        id: "RehgarEarthlivingEnchant",
        name: "Earthliving Enchant",
        descriptionShort: "Empowers Chain Heal on low Health Heroes",
        descriptionLong: "When Chain Heal heals a Hero below 50% Health, they are healed an additional 160 (+4% / level) Health over 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_chainheal.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 42,
          magicalDamage: 0
        },
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "RehgarChainHeal"
        ]
      },
      {
        id: "RehgarLightningShieldElectricCharge",
        name: "Electric Charge",
        descriptionShort: "Lightning Shield heals, increases Movement Speed",
        descriptionLong: "The bearer of Lightning Shield Heals for 20% of the damage it deals to enemy Heroes, doubled if the bearer is Rehgar. While Lightning Shield is damaging an enemy, its bearer gains 10% increased Movement Speed.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_lightningshield.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 4,
          magicalDamage: 0
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "RehgarLightningShield"
        ]
      },
      {
        id: "RehgarHealingTotem",
        name: "Healing Totem",
        descriptionShort: "Activate to place a ward which heals in an area",
        descriptionLong: "Activate to place a Totem that heals allied Heroes in an area for 2% of their maximum Health every second. This Totem has 125 (+4% / level) Health and lasts for 10 seconds.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_healingward.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.4,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4"
      }
    ],
    [
      {
        id: "RehgarEarthbindTotemGroundedTotem",
        name: "Grounded Totem",
        descriptionShort: "Empower Earthbind Totem",
        descriptionLong: "Enemy Heroes in Earthbind Totem's area also have their Attack Speed Slowed by 15% and their Spell Power reduced by 15%. Passive: Increase Earthbind Totem's range by 50%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_earthbindtotem.png",
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
          "RehgarEarthbindTotem"
        ]
      },
      {
        id: "RehgarPurification",
        name: "Purification",
        descriptionShort: "Empower Purge",
        descriptionLong: "If Purge removes a Slow, Stun, Root, or Silence effect from an ally, heal them for 220 (+4% / level). Using Purge on an enemy Hero deals up to 330 (+4% / level) damage to Shields and reduces healing received by 40% for 2 seconds. Passive: Reduce Purge's cooldown by 15 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_purge.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 52,
          magicalDamage: 66
        },
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "RehgarPurge"
        ]
      },
      {
        id: "RehgarBloodAndThunder",
        name: "Blood and Thunder",
        descriptionShort: "Ghost Wolf attacks reduce Basic Ability cooldowns",
        descriptionLong: "Ghost Wolf attacks reduce Basic Ability cooldowns by 1.5 seconds and restore 4% of Rehgar's maximum Mana.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_ghostwolf.png",
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
          "RehgarGhostWolfActivate"
        ]
      }
    ],
    [
      {
        id: "RehgarAncestralHealing",
        name: "Ancestral Healing",
        descriptionShort: "Significantly heal allied Hero",
        descriptionLong: "After 1 second, heal an allied Hero for 1180 (+4% / level) Health.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 100,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_ancestralhealing.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.2,
          magicalDamage: 0
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "RehgarAncestralHealing"
        ]
      },
      {
        id: "RehgarBloodlust",
        name: "Bloodlust",
        descriptionShort: "Give allied Heroes Movement Speed, Attack Speed, and Life Steal",
        descriptionLong: "Grant nearby allied Heroes 40% Attack Speed and 35% Movement Speed and causes them to heal for 30% of the Basic Attack damage to their primary target. Lasts for 6 seconds.",
        cost: {
          type: "Mana",
          amount: 70
        },
        cooldown: 90,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_bloodlust.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 7,
          magicalDamage: 0
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "RehgarBloodlust"
        ]
      }
    ],
    [
      {
        id: "RehgarMasteryTidalWaves",
        name: "Tidal Waves",
        descriptionShort: "Reduces Chain Heal cooldown, Mana cost",
        descriptionLong: "Reduces Chain Heal's cooldown by 1 second for each Hero healed, and reduces its Mana cost from 60 to 40.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_chainheal.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 12.2,
          magicalDamage: 0
        },
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "RehgarChainHeal"
        ]
      },
      {
        id: "RehgarLightningShieldEarthShield",
        name: "Earth Shield",
        descriptionShort: "Lightning Shield gives a Shield",
        descriptionLong: "Lightning Shield gives Heroes a Shield that absorbs damage equal to 14% of their maximum Health for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_lightningshield.png",
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
          "RehgarLightningShield"
        ]
      },
      {
        id: "RehgarWellspring",
        name: "Wellspring",
        descriptionShort: "Earthbind Totem casts Chain Heal",
        descriptionLong: "Every 2 seconds, Earthbind Totem will cast an untalented Chain Heal at the nearest allied Hero with the lowest Health. This Chain Heal heals for 35% of its normal amount.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_earthbindtotem.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 7.4,
          magicalDamage: 0
        },
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "RehgarEarthbindTotem"
        ]
      }
    ],
    [
      {
        id: "RehgarLightningShieldRisingStorm",
        name: "Rising Storm",
        descriptionShort: "Increase Lightning Shield damage, duration",
        descriptionLong: "Every time a Lightning Shield damages an enemy Hero, increase its damage by 10%. Stacks up to 15 times. Passive: Increase the duration of Lightning Shield by 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_lightningshield.png",
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
          "RehgarLightningShield"
        ]
      },
      {
        id: "RehgarEarthbindTotemEarthgraspTotem",
        name: "Earthgrasp Totem",
        descriptionShort: "Earthbind Totem placement damages, increased Slow",
        descriptionLong: "When Earthbind Totem is first cast, it deals 90 (+4% / level) damage and Slows nearby enemies by 90% for 1 second.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_earthbindtotem.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 18
        },
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "RehgarEarthbindTotem"
        ]
      },
      {
        id: "RehgarHungerOfTheWolf",
        name: "Hunger of the Wolf",
        descriptionShort: "Ghost Wolf attacks do extra damage and heal",
        descriptionLong: "Ghost Wolf attacks against Heroes deal an additional 6% of the target's maximum Health and heal Rehgar for 6% of his maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_ghostwolf.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 1.2000000000000002,
          magicalDamage: 0
        },
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "RehgarGhostWolfActivate"
        ]
      }
    ],
    [
      {
        id: "RehgarAncestralHealingFarseersBlessing",
        name: "Farseer's Blessing",
        descriptionShort: "Heals a second time and in an area",
        descriptionLong: "After 1.5 seconds, Ancestral Healing is cast a second time on the same target. Allies near the target are healed for 590 (+4% / level).",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_ancestralhealing.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 118.2,
          magicalDamage: 0
        },
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "RehgarAncestralHealing"
        ],
        prerequisiteTalentIds: [
          "RehgarAncestralHealing"
        ]
      },
      {
        id: "RehgarGladiatorsWarShout",
        name: "Gladiator's War Shout",
        descriptionShort: "Increases Bloodlust Duration, Range",
        descriptionLong: "Increase the duration and range of Bloodlust by 100%.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_bloodlust.png",
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
          "RehgarBloodlust"
        ],
        prerequisiteTalentIds: [
          "RehgarBloodlust"
        ]
      },
      {
        id: "RehgarElementalConduit",
        name: "Elemental Conduit",
        descriptionShort: "Gain Lightning Shield, Shield nearby allies",
        descriptionLong: "Activate to gain Lightning Shield and grant all nearby allied Heroes a Shield equal to 10% of their maximum Health for 5 seconds. For up to 5 seconds after activating, hitting an enemy Hero with this effects' Lightning Shield gives nearby allies a Shield equal to 1.5% of their maximum Health for 5 seconds.",
        cooldown: 70,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_stormshield.png",
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
        id: "RehgarPitFighter",
        name: "Pit Fighter",
        descriptionShort: "Gain Attack Damage, Spellpower near Allies",
        descriptionLong: "Gain 10% increased Attack Damage and 3 Spell Power. Each nearby ally Hero grants an additional stack of this effect, up to 5 stacks. While at 2 or more stacks, Purge's cooldown refreshes 50% faster.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_ingame_heroselect_btn_rehgar.png",
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
    tankiness: 57.250470809792844,
    physicalDamage: 61.111111111111114,
    mobility: 24.006944444444446,
    healing: 25.43422810640107,
    magicalDamage: 2.5491355105659816
  }
};
