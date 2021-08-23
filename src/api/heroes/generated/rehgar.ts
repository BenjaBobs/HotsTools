import { Hero } from '../heroes';
      
const rehgar: Hero = {
  name: "Rehgar",
  nameNormalized: "rehgar",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.75,
  movementSpeed: 4.8398,
  health: {
    amount: 2000,
    scale: 0.04,
    regenRate: 4.168,
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
      period: 0.8,
      damage: 106,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/rehgar.png",
  abilities: [
    {
      id: "RehgarGhostWolf",
      name: "Ghost Wolf",
      descriptionShort: "Transform into a Ghost Wolf",
      descriptionLong: "Instead of using a mount, Rehgar transforms into a Ghost Wolf with 20% increased Movement Speed. Basic Attacks in Ghost Wolf form cause him to lunge at his target and deal 75% bonus damage. Dealing damage, using Abilities, and channeling cancels Ghost Wolf form.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_ghostwolf.png",
      isPassive: true,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 5
      }
    },
    {
      id: "RehgarGhostWolfActivate",
      name: "Ghost Wolf",
      descriptionShort: "Transform into a Ghost Wolf",
      descriptionLong: "Increases Movement Speed by 20%.",
      cooldown: 4,
      category: "mount",
      type: "Z",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_mount.png",
      isPassive: false,
      analysis: {
        mobility: 20,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 0
      }
    },
    {
      id: "RehgarChainHeal",
      name: "Chain Heal",
      descriptionShort: "Create a healing wave that jumps between allies",
      descriptionLong: "Heal an ally with a wave of healing for 260 (+4% / level) Health. The wave then bounces 2 times to nearby allies within 7 range, restoring 260 (+4% / level) Health to them.",
      cost: {
        type: "Mana",
        amount: 55
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
        healing: 130,
        magicalDamage: 0
      }
    },
    {
      id: "RehgarLightningShield",
      name: "Lightning Shield",
      descriptionShort: "Imbue target ally with lightning, causing damage to nearby enemies",
      descriptionLong: "Imbue an ally with lightning dealing 64 (+4% / level) damage a second to nearby enemies. Lasts 5 seconds.",
      cost: {
        type: "Mana",
        amount: 60
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
        magicalDamage: 32
      }
    },
    {
      id: "RehgarEarthbindTotem",
      name: "Earthbind Totem",
      descriptionShort: "Creates a totem that Slows nearby enemies",
      descriptionLong: "Create a totem that Slows nearby enemies by 35%. The totem has 217 (+4% / level) Health and lasts for 8 seconds.",
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
        healing: 2,
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
        healing: 314.6666666666667,
        magicalDamage: 0
      }
    }
  ],
  talents: [
    [
      {
        id: "RehgarLightningShieldElectricCharge",
        name: "Electric Charge",
        descriptionShort: "Increases Lightning Shield radius, heals",
        descriptionLong: "Increases the radius of Lightning Shield by 25%. Heal for 30% of the damage it deals to enemy Heroes.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_lightningshield.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 2,
          magicalDamage: 0
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "RehgarLightningShield"
        ]
      },
      {
        id: "RehgarEarthbindTotemColossalTotem",
        name: "Colossal Totem",
        descriptionShort: "Increases Earthbind Totem area and range, reactivatable",
        descriptionLong: "Increases the area and range of Earthbind Totem by 50% and it can be reactivated to move an existing totem to a new location once.",
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
        id: "RehgarWolfRun",
        name: "Wolf Run",
        descriptionShort: "Increases Ghost Wolf Speed, lower cooldown",
        descriptionLong: "Increases the Movement Speed of Ghost Wolf from 20% to 30%. If an enemy Hero is hit by Ghost Wolf's Basic Attack, reduce its cooldown by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_ghostwolf.png",
        isPassive: false,
        analysis: {
          mobility: 20,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "RehgarGhostWolf",
          "RehgarGhostWolfLunge"
        ]
      }
    ],
    [
      {
        id: "RehgarLightningShieldStormcaller",
        name: "Stormcaller",
        descriptionShort: "Lightning Shield returns Mana",
        descriptionLong: "When Lightning Shield damages an enemy it restores 4 Mana, up to 100.",
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
        tier: "level4",
        linkedAbilityIds: [
          "RehgarLightningShield"
        ]
      },
      {
        id: "RehgarFeralHeart",
        name: "Feral Heart",
        descriptionShort: "Ghost Wolf restores Health and Mana",
        descriptionLong: "Increases Rehgar's Health Regeneration by 75% while in Ghost Wolf form. Ghost Wolf attacks also restore 1% of Rehgar's maximum Mana, increased to 5% against Heroes.",
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
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "RehgarGhostWolf",
          "RehgarGhostWolfLunge"
        ]
      },
      {
        id: "RehgarHealingTotem",
        name: "Healing Totem",
        descriptionShort: "Activate to place a ward which heals in an area",
        descriptionLong: "Activate to place a Totem that heals allied Heroes in an area for 2% of their maximum Health every second for 10 seconds.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_healingward.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.13333333333333333,
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
        descriptionShort: "Increase Totem Health, lower Attack Speed",
        descriptionLong: "Increase the Health of Earthbind Totem by 100%.  Enemy Heroes who are Slowed by Earthbind Totem also have their Attack Speed Slowed by 40%.",
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
        tier: "level7"
      },
      {
        id: "RehgarBloodAndThunder",
        name: "Blood and Thunder",
        descriptionShort: "Ghost Wolf attacks reduce Basic Ability cooldowns",
        descriptionLong: "Ghost Wolf attacks reduce Basic Ability cooldowns by 2 seconds.",
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
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "RehgarGhostWolf",
          "RehgarGhostWolfLunge"
        ]
      },
      {
        id: "GenericTalentCleanse",
        name: "Cleanse",
        descriptionShort: "Makes target ally Unstoppable",
        descriptionLong: "Activate to make target ally Unstoppable for 1 second. Cannot be cast on yourself.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_cleanse.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level7"
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
          healing: 314.6666666666667,
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
          healing: 2,
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
        descriptionLong: "Reduces Chain Heal's cooldown by .75 seconds for each Hero healed, and reduces its Mana cost from 55 to 40.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_chainheal.png",
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
          "RehgarChainHeal"
        ]
      },
      {
        id: "RehgarEarthlivingEnchant",
        name: "Earthliving Enchant",
        descriptionShort: "Empowers Chain Heal on low Health Heroes",
        descriptionLong: "When Chain Heal heals a Hero below 50% Health, they are healed an additional 225 (+4% / level) Health over 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_rehgar_chainheal_a.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 63.333333333333336,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "RehgarChainHeal"
        ]
      },
      {
        id: "RehgarLightningShieldEarthShield",
        name: "Earth Shield",
        descriptionShort: "Lightning Shield gives a Shield",
        descriptionLong: "Lightning Shield gives Heroes a Shield that absorbs damage equal to 12% of their maximum Health for 3 seconds.",
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
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "RehgarLightningShield"
        ]
      }
    ],
    [
      {
        id: "RehgarLightningShieldRisingStorm",
        name: "Rising Storm",
        descriptionShort: "Increases Lightning Shield damage with each hit",
        descriptionLong: "Casting Lightning Shield on an ally also casts an untalented version on Rehgar.  Every time either Lighting Shield damages an enemy Hero, increase the damage of both Lightning Shields by 10%. Stacks up to 15 times.",
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
        descriptionShort: "Increases Earthbind Totem initial Slow",
        descriptionLong: "When Earthbind Totem is first cast, it Slows nearby enemies by 90% for 1 second.",
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
        tier: "level16",
        linkedAbilityIds: [
          "RehgarEarthbindTotem"
        ]
      },
      {
        id: "RehgarHungerOfTheWolf",
        name: "Hunger of the Wolf",
        descriptionShort: "Ghost Wolf attacks do extra damage and heal",
        descriptionLong: "Ghost Wolf attacks against Heroes deal an additional 5% of the target's maximum Health and heal Rehgar for 5% of his maximum Health.",
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
        tier: "level16",
        linkedAbilityIds: [
          "RehgarGhostWolf",
          "RehgarGhostWolfLunge"
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
          healing: 157.33333333333334,
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
        id: "GenericTalentRewind",
        name: "Rewind",
        descriptionShort: "Activate to reset cooldowns",
        descriptionLong: "Activate to reset the cooldowns of your Basic Abilities.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_rewind.png",
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
        id: "GenericTalentStormShield",
        name: "Storm Shield",
        descriptionShort: "Activate to grant Shields to all nearby allies",
        descriptionLong: "Activate to give all nearby allied Heroes a Shield for 20% of their max Health for 3 seconds.",
        cooldown: 45,
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
        order: 4,
        tier: "level20"
      }
    ]
  ],
  analysis: {
    tankiness: 60.263653483992464,
    physicalDamage: 66.25,
    mobility: 31.752383278615504,
    healing: 88.3555321113016,
    magicalDamage: 4.094592754017978
  }
};
      
export default rehgar;