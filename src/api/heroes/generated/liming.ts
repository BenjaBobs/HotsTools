import { Hero } from '../heroes';
      
export const liming: Hero = {
  name: "Li-Ming",
  nameNormalized: "liming",
  franchise: "Diablo",
  gender: "Female",
  size: 0.625,
  movementSpeed: 4.8398,
  health: {
    amount: 1270,
    scale: 0.04,
    regenRate: 2.6484,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroWizardWeapon",
      range: 5.5,
      period: 1,
      damage: 63,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/liming.png",
  abilities: [
    {
      id: "WizardTraitCriticalMass",
      name: "Critical Mass",
      descriptionShort: "Takedowns refresh Li-Ming's Ability cooldowns",
      descriptionLong: "Getting a Takedown will refresh the cooldown on all of Li-Ming's Abilities.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_criticalmass.png",
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
      id: "WizardMagicMissiles",
      name: "Magic Missiles",
      descriptionShort: "Fire a volley of missiles",
      descriptionLong: "Fire three missiles toward an area, each dealing 147 (+3.5% / level) damage to the first enemy hit. These missiles do 50% damage to Structures.",
      cost: {
        type: "Mana",
        amount: 20
      },
      cooldown: 3,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_magicmissiles.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 147
      }
    },
    {
      id: "WizardArcaneOrb",
      name: "Arcane Orb",
      descriptionShort: "Launch an orb that deals increasing damage the further it travels",
      descriptionLong: "Fire an Orb that powers up as it travels, dealing 135 (+3% / level) damage to the first enemy hit. Damage is increased the further it travels, up to 270 (+3% / level) more damage.",
      cost: {
        type: "Mana",
        amount: 40
      },
      cooldown: 8,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_arcaneorb.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 50.625
      }
    },
    {
      id: "WizardTeleport",
      name: "Teleport",
      descriptionShort: "Teleport a short distance",
      descriptionLong: "Teleport a short distance instantly.",
      cost: {
        type: "Mana",
        amount: 30
      },
      cooldown: 5,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_teleport.png",
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
      id: "WizardDisintegrate",
      name: "Disintegrate",
      descriptionShort: "Long range channeled beam",
      descriptionLong: "Channel a powerful beam, dealing 480 (+5% / level) damage over 2.6 seconds to enemies while they are in it. The direction of the beam changes with your mouse cursor position.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 20,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_disintegrate.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 96
      }
    },
    {
      id: "WizardWaveOfForce",
      name: "Wave of Force",
      descriptionShort: "Damage and knock enemies back",
      descriptionLong: "Knock away all enemies from an area and deal 160 (+5% / level) damage.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 30,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_waveofforce.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 32
      }
    }
  ],
  talents: [
    [
      {
        id: "WizardForceArmor",
        name: "Force Armor",
        descriptionShort: "Magic Missiles grants Spell Armor",
        descriptionLong: "When Magic Missiles damages an enemy Hero, gain 50 Spell Armor, reducing the damage taken by the next Ability by 50%. Gain 1 charge per cast and store up to 4 charges. Passive: Li-Ming's Mana regeneration is increased by 100% while below 35% Mana.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_magicmissiles.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 10,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "WizardMagicMissiles"
        ]
      },
      {
        id: "WizardAetherWalker",
        name: "Aether Walker",
        descriptionShort: "Reduce Teleport's cooldown when out of combat",
        descriptionLong: "Teleport costs no Mana. If Li-Ming hasn't taken damage in the last 3 seconds, Teleport's cooldown is decreased by 2 seconds. Casting Teleport causes Li-Ming's next cast of Magic Missiles to deal 10% bonus damage.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_teleport.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 2
        },
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "WizardTeleport"
        ]
      },
      {
        id: "WizardPowerHungry",
        name: "Power Hungry",
        descriptionShort: "Regen Globes give Spell Power and more Mana",
        descriptionLong: "Regeneration Globes restore 100% more Mana and grant 10% Spell Power for 20 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_powerhungry.png",
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
          "WizardTraitCriticalMass"
        ]
      }
    ],
    [
      {
        id: "WizardMagicMissilesChargedBlast",
        name: "Charged Blast",
        descriptionShort: "Magic Missiles marks enemies for bonus damage",
        descriptionLong: "Basic Attacking a target recently hit by a Magic Missile does an extra 87 (+4% / level) damage.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_magicmissiles.png",
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
          "WizardMagicMissiles"
        ]
      },
      {
        id: "WizardArcaneOrbTriumvirate",
        name: "Triumvirate",
        descriptionShort: "Reduces Arcane Orb cooldown at max range",
        descriptionLong: "If Arcane Orb hits an enemy Hero after traveling at least 50% of its base range, the cooldown is reduced by 5 seconds and 40 Mana is refunded.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_arcaneorb.png",
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
          "WizardArcaneOrb"
        ]
      },
      {
        id: "WizardDominance",
        name: "Dominance",
        descriptionShort: "Takedowns restore Health",
        descriptionLong: "Takedowns restore 30% of Li-Ming's missing Health.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_criticalmass.png",
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
          "WizardTraitCriticalMass"
        ]
      }
    ],
    [
      {
        id: "WizardMagicMissilesSeeker",
        name: "Seeker",
        descriptionShort: "Increases Magic Missiles single-target damage",
        descriptionLong: "If three Magic Missiles hit the same target, the third one deals an additional 140 (+4% / level) damage.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_magicmissiles.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 28
        },
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "WizardMagicMissiles"
        ]
      },
      {
        id: "WizardArcaneOrbZeisVengeance",
        name: "Zei's Vengeance",
        descriptionShort: "Arcane Orb does more damage from afar",
        descriptionLong: "Increase Arcane Orb's damage increase for distance traveled by 30%. Additionally, reduce its cooldown by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_arcaneorb.png",
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
          "WizardArcaneOrb"
        ]
      },
      {
        id: "WizardTeleportCalamity",
        name: "Calamity",
        descriptionShort: "Teleport deals damage",
        descriptionLong: "Teleport does 300 (+3% / level) damage to enemy Heroes near the destination.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_teleport.png",
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
          "WizardTeleport"
        ]
      }
    ],
    [
      {
        id: "WizardHeroicAbilityDisintegrate",
        name: "Disintegrate",
        descriptionShort: "Long range channeled beam",
        descriptionLong: "Channel a powerful beam, dealing 480 (+5% / level) damage over 2.6 seconds to enemies while they are in it. The direction of the beam changes with your mouse cursor position.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 20,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_disintegrate.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 96
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "WizardDisintegrate"
        ]
      },
      {
        id: "WizardHeroicAbilityWaveOfForce",
        name: "Wave of Force",
        descriptionShort: "Damage and knock enemies back",
        descriptionLong: "Knock away all enemies from an area and deal 160 (+5% / level) damage.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 30,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_waveofforce.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 32
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "WizardWaveOfForce"
        ]
      }
    ],
    [
      {
        id: "WizardTeleportIllusionist",
        name: "Illusionist",
        descriptionShort: "Increases Teleport range, damage refreshes cooldown",
        descriptionLong: "If Li-Ming loses more than 20% of her Health at once, its cooldown is instantly refreshed. This effect has a 4 second cooldown. Passive: Increases Teleport range by 50%",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_teleport.png",
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
          "WizardTeleport"
        ]
      },
      {
        id: "WizardCannoneer",
        name: "Cannoneer",
        descriptionShort: "Abilities empower Basic Attacks",
        descriptionLong: "When Li-Ming uses an Ability, her next Basic Attack's damage is increased by 75% and deals Spell damage instead of Physical. Stacks up to 3 times.",
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
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "WizardTraitCriticalMass"
        ]
      },
      {
        id: "WizardGlassCannon",
        name: "Glass Cannon",
        descriptionShort: "Gain Spell Power but lose max Health",
        descriptionLong: "Increase Li-Ming's Spell Power by 20%, but decrease her maximum Health by 15%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_btn_d3_traits_wizard_glasscannon.png",
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
          "WizardTraitCriticalMass"
        ]
      }
    ],
    [
      {
        id: "WizardFireflies",
        name: "Fireflies",
        descriptionShort: "Magic Missiles move faster, lower cooldown and Mana cost",
        descriptionLong: "Drastically increases Magic Missiles speed. Its cooldown is reduced by 1 second, and its Mana cost is reduced by 5.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_magicmissiles.png",
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
          "WizardMagicMissiles"
        ]
      },
      {
        id: "WizardMagicMissilesMirrorball",
        name: "Mirrorball",
        descriptionShort: "Fires 2 extra Magic Missiles and increases Mana cost",
        descriptionLong: "Magic Missiles fires an additional 2 missiles, but its Mana cost is increased by 5.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_magicmissiles_b.png",
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
          "WizardMagicMissiles"
        ]
      },
      {
        id: "WizardArcaneOrbArcaneOrbit",
        name: "Arcane Orbit",
        descriptionShort: "Increases Arcane Orb range",
        descriptionLong: "Arcane Orb travels 25% farther, increasing its maximum distance damage bonus from 270 (+3% / level) to 371 (+3% / level).",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_arcaneorb.png",
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
          "WizardArcaneOrb"
        ]
      },
      {
        id: "WizardTeleportDiamondSkin",
        name: "Diamond Skin",
        descriptionShort: "Teleport grants a Shield",
        descriptionLong: "Teleport grants a Shield equal to 25% of Li-Ming's maximum Health for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_teleport.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 4,
        tier: "level16",
        linkedAbilityIds: [
          "WizardTeleport"
        ]
      }
    ],
    [
      {
        id: "WizardDisintegrateTemporalFlux",
        name: "Temporal Flux",
        descriptionShort: "Disintegrate slows enemies",
        descriptionLong: "Disintegrate gradually Slows enemies caught in its beam, to a maximum of 60%.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_disintegrate.png",
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
          "WizardDisintegrate"
        ],
        prerequisiteTalentIds: [
          "WizardHeroicAbilityDisintegrate"
        ]
      },
      {
        id: "WizardWaveOfForceRepulsion",
        name: "Repulsion",
        descriptionShort: "Increases cast range and knockback distance",
        descriptionLong: "Increases Wave of Force knockback distance by 150% and increases its cast range by 100%.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_waveofforce.png",
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
          "WizardWaveOfForce"
        ],
        prerequisiteTalentIds: [
          "WizardHeroicAbilityWaveOfForce"
        ]
      },
      {
        id: "WizardTalRashasElements",
        name: "Tal Rasha's Elements",
        descriptionShort: "Cycle Abilities to gain damage",
        descriptionLong: "Casting Abilities increases the damage of the next Ability by 5%, up to 20%. This bonus is reset when the same Ability is used within a chain.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_btn_d3_traits_wizard_elementalexposure.png",
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
          "WizardTraitCriticalMass"
        ]
      },
      {
        id: "WizardArchonPurePower",
        name: "Archon: Pure Power",
        descriptionShort: "Use Disintegrate repeatedly, but no other Abilities",
        descriptionLong: "Activate to enter Archon form, allowing Li-Ming to repeatedly use Disintegrate, but be unable to cast other Abilities.",
        cooldown: null,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_wizard_archon.png",
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
    tankiness: 38.26741996233521,
    physicalDamage: 31.5,
    mobility: 24.006944444444446,
    healing: 0,
    magicalDamage: 12.029887690261562
  }
};
