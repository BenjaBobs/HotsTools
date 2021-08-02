import { Hero } from '../heroes';
      
const kaelthas: Hero = {
  name: "Kael'thas",
  nameNormalized: "kaelthas",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.8125,
  movementSpeed: 4.8398,
  health: {
    amount: 1520,
    scale: 0.04,
    regenRate: 3.168,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "KaelthasHeroWeapon",
      range: 5.5,
      period: 0.9,
      damage: 65,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/kaelthas.png",
  abilities: [
    {
      id: "KaelthasVerdantSpheres",
      name: "Verdant Spheres",
      descriptionShort: "Make Kael'thas's next Basic Ability more powerful",
      descriptionLong: "Activate to make Kael'thas's next Basic Ability more powerful.",
      cooldown: 6,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        recastCooldown: 0.0625
      },
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_verdantspheres.png",
      isPassive: false
    },
    {
      id: "KaelthasFlamestrike",
      name: "Flamestrike",
      descriptionShort: "Deal damage in an area",
      descriptionLong: "After 1 second, deal 345 (+4% / level) damage in an area. Verdant Spheres increases the radius by 50%.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 7,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_flamestrike.png",
      isPassive: false
    },
    {
      id: "KaelthasLivingBomb",
      name: "Living Bomb",
      descriptionShort: "Damage an enemy over time, eventually exploding in an area around them",
      descriptionLong: "Deal 126 (+4% / level) damage over 3 seconds to an enemy, then they explode dealing 215 (+4% / level) damage to all nearby enemies.  Other Heroes damaged by this explosion are also affected by Living Bomb, though the secondary explosions cannot spread.Verdant Spheres makes this Ability cost no Mana and have no cooldown.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 10,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_livingbomb.png",
      isPassive: false
    },
    {
      id: "KaelthasGravityLapse",
      name: "Gravity Lapse",
      descriptionShort: "Stun an enemy",
      descriptionLong: "Stun the first enemy hit for 1 second. Verdant Spheres causes Gravity Lapse to stun the first 3 enemies hit and increases the stun duration by 50%.",
      cost: {
        type: "Mana",
        amount: 90
      },
      cooldown: 14,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_gravitylapse.png",
      isPassive: false
    },
    {
      id: "KaelthasPyroblast",
      name: "Pyroblast",
      descriptionShort: "Blast an enemy with a big fireball",
      descriptionLong: "After 1.5 seconds, cast a slow-moving fireball that deals 810 (+5% / level) damage to an enemy Hero and 405 (+5% / level) damage to enemies nearby.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 100,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_pyroblast.png",
      isPassive: false
    },
    {
      id: "KaelthasPhoenix",
      name: "Phoenix",
      descriptionShort: "Summon a Phoenix to burn enemies",
      descriptionLong: "Launch a Phoenix to an area, dealing 78 (+4% / level) damage to enemies along the way. The Phoenix persists for 7 seconds, attacking enemies for 78 (+4% / level) damage and splashing for 39 (+4% / level) damage.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_phoenix.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "KaelthasFlamestrikeConvection",
        name: "Convection",
        descriptionShort: "Quest: Flamestrike hits increase damage",
        descriptionLong: "Quest: Damaging an enemy Hero with Flamestrike increase its damage by 5, up to 100. This bonus is lost on death.Reward: After hitting 20 enemy Heroes, increase Flamestrike damage by an additional 100 and no longer lose any bonuses on death.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_flamestrike.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "KaelthasFlamestrike"
        ],
        isQuest: true
      },
      {
        id: "KaelthasVerdantSpheresFelInfusion",
        name: "Fel Infusion",
        descriptionShort: "Increases Spell Power, Verdant Spheres heals",
        descriptionLong: "Increases Kael'thas's Spell Power by 4%. Kael'thas heals for 94 (+4% / level) Health when activating Verdant Spheres.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          recastCooldown: 0.0625
        },
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_verdantspheres.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "KaelthasVerdantSpheresActive",
          "KaelthasVerdantSpheres"
        ]
      },
      {
        id: "KaelthasManaAddict",
        name: "Mana Addict",
        descriptionShort: "Quest: Regen Globes grant Arcane Barrier",
        descriptionLong: "Quest: Gathering a Regeneration Globe increases Kael'thas's maximum Mana by 15.Reward: After gathering 20 Globes, Kael'thas can activate Arcane Barrier to gain a Shield equal to 100% of his maximum Mana for 4 seconds. 45 second cooldown.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_manaaddict.png",
        isPassive: false,
        order: 3,
        tier: "level1",
        isQuest: true
      }
    ],
    [
      {
        id: "KaelthasGravityLapseNetherWind",
        name: "Nether Wind",
        descriptionShort: "Increases Gravity Lapse range and restores Mana",
        descriptionLong: "Increases Gravity Lapse's range by 30%. When Gravity Lapse hits an enemy Hero, refund 80 Mana.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_gravitylapse.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "KaelthasGravityLapse"
        ]
      },
      {
        id: "KaelthasGravityLapseEnergyRoil",
        name: "Energy Roil",
        descriptionShort: "Reduce Gravity Lapse cooldown on Heroes",
        descriptionLong: "Reduce the Mana cost of Gravity Lapse by 70.  If Gravity Lapse hits a Hero, reduce its cooldown by 9 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_gravitylapse_a.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "KaelthasGravityLapse"
        ]
      },
      {
        id: "KaelthasFlamestrikeManaTap",
        name: "Mana Tap",
        descriptionShort: "Verdant Spheres restores Mana",
        descriptionLong: "Activating Verdant Spheres restores 4% of Kael'thas's maximum Mana.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          recastCooldown: 0.0625
        },
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_verdantspheres.png",
        isPassive: false,
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "KaelthasVerdantSpheresActive",
          "KaelthasVerdantSpheres"
        ]
      }
    ],
    [
      {
        id: "KaelthasFlamestrikeBurnedFlesh",
        name: "Burned Flesh",
        descriptionShort: "Empower Flamestrike against multiple Heroes",
        descriptionLong: "When Flamestrike damages 2 or more Heroes, they take additional damage equal to 8% of their maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_flamestrike.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "KaelthasFlamestrike"
        ]
      },
      {
        id: "KaelthasLivingBombSunKingsFury",
        name: "Sun King's Fury",
        descriptionShort: "Living Bomb deals more damage after spreading",
        descriptionLong: "Living Bombs that spread to enemy Heroes deal 35% more damage.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_livingbomb.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "KaelthasLivingBomb"
        ]
      },
      {
        id: "KaelthasMasterySunfireEnchantment",
        name: "Sunfire Enchantment",
        descriptionShort: "Special attack on Verdant Spheres",
        descriptionLong: "Activating Verdant Spheres causes Kael'thas's next 2 Basic Attacks to instead deal 115 (+4% / level) Spell Damage.  If both of these Attacks hit enemy Heroes, gain 15% Spell Power for 10 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          recastCooldown: 0.0625
        },
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_verdantspheres.png",
        isPassive: false,
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "KaelthasVerdantSpheresActive",
          "KaelthasVerdantSpheres"
        ]
      }
    ],
    [
      {
        id: "KaelthasHeroicAbilityPhoenix",
        name: "Phoenix",
        descriptionShort: "Summon a Phoenix to burn enemies",
        descriptionLong: "Launch a Phoenix to an area, dealing 78 (+4% / level) damage to enemies along the way. The Phoenix persists for 7 seconds, attacking enemies for 78 (+4% / level) damage and splashing for 39 (+4% / level) damage.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_phoenix.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "KaelthasPhoenix"
        ]
      },
      {
        id: "KaelthasHeroicAbilityPyroblast",
        name: "Pyroblast",
        descriptionShort: "Blast an enemy with a big fireball",
        descriptionLong: "After 1.5 seconds, cast a slow-moving fireball that deals 810 (+5% / level) damage to an enemy Hero and 405 (+5% / level) damage to enemies nearby.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 100,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_pyroblast.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "KaelthasPyroblast"
        ]
      }
    ],
    [
      {
        id: "KaelthasLivingBombPyromaniac",
        name: "Pyromaniac",
        descriptionShort: "Living Bomb reduces Basic Ability cooldowns",
        descriptionLong: "Each time Living Bomb deals periodic damage, Kael'thas's Basic Ability cooldowns are reduced by 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_livingbomb.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "KaelthasLivingBomb"
        ]
      },
      {
        id: "KaelthasLivingBombBackdraft",
        name: "Backdraft",
        descriptionShort: "Living Bomb explosion slows enemies",
        descriptionLong: "Living Bomb's explosion slows enemy Movement Speed by 30% for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_livingbomb_var1.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "KaelthasLivingBomb"
        ]
      },
      {
        id: "KaelthasLivingBombFissionBomb",
        name: "Fission Bomb",
        descriptionShort: "Increases Living Bomb explosion radius",
        descriptionLong: "Increases Living Bomb's explosion radius by 20%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_livingbomb_b.png",
        isPassive: false,
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "KaelthasLivingBomb"
        ]
      }
    ],
    [
      {
        id: "KaelthasFlamestrikeFuryOfTheSunwell",
        name: "Fury of the Sunwell",
        descriptionShort: "Flamestrike explodes twice",
        descriptionLong: "Flamestrike will explode a second time 1.5 seconds later.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_flamestrike.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "KaelthasFlamestrike"
        ]
      },
      {
        id: "KaelthasLivingBombIgnite",
        name: "Ignite",
        descriptionShort: "Flamestrike applies Living Bomb",
        descriptionLong: "Flamestrikes apply Living Bomb to the enemy Hero closest to its center who is not currently affected by Living Bomb.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_livingbomb.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "KaelthasLivingBomb"
        ]
      },
      {
        id: "KaelthasTwinSpheres",
        name: "Twin Spheres",
        descriptionShort: "Gain level 7 talents, Verdant Spheres charge",
        descriptionLong: "Verdant Spheres gains a second charge.Passive: Kael'thas benefits from all of his level 7 talents.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          recastCooldown: 0.0625
        },
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_verdantspheres.png",
        isPassive: false,
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "KaelthasVerdantSpheresActive",
          "KaelthasVerdantSpheres",
          "KaelthasFlamestrike",
          "KaelthasLivingBomb"
        ]
      }
    ],
    [
      {
        id: "KaelthasPhoenixRebirth",
        name: "Rebirth",
        descriptionShort: "Increases Phoenix duration and may retarget",
        descriptionLong: "Increases Phoenix duration by 100%. While alive, the Phoenix may be ordered to move to a different location.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_phoenix.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "KaelthasPhoenix"
        ],
        prerequisiteTalentIds: [
          "KaelthasHeroicAbilityPhoenix"
        ]
      },
      {
        id: "KaelthasPyroblastPresenceOfMind",
        name: "Presence Of Mind",
        descriptionShort: "Increases Pyroblast radius, lowers cooldown",
        descriptionLong: "Increases Pyroblast's explosion radius by 50%. Heroes that are hit by Flamestrike or have Living Bomb spread to them reduce the cooldown of Pyroblast by 10 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_pyroblast.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "KaelthasPyroblast"
        ],
        prerequisiteTalentIds: [
          "KaelthasHeroicAbilityPyroblast"
        ]
      },
      {
        id: "KaelthasMasterOfFlames",
        name: "Master of Flames",
        descriptionShort: "Living Bomb spreads indefinitely",
        descriptionLong: "Living Bomb's spread from explosions can now also spread Living Bomb.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_livingbomb.png",
        isPassive: false,
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "KaelthasLivingBomb"
        ]
      },
      {
        id: "KaelthasMasteryFlamethrower",
        name: "Flamethrower",
        descriptionShort: "Increases Flamestrike's range",
        descriptionLong: "Increases the cast range of Flamestrike by 40%. If Flamestrike hits 2 or more Heroes, its cooldown is reduced by 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kaelthas_flamestrike.png",
        isPassive: false,
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "KaelthasFlamestrike"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 45.80037664783427,
    damageSustainedPhysical: 43.17632850241546
  }
};
      
export default kaelthas;