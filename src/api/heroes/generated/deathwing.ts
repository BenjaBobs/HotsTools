import { Hero } from '../heroes';
      
const deathwing: Hero = {
  name: "Deathwing",
  nameNormalized: "deathwing",
  franchise: "Warcraft",
  gender: "Male",
  size: 1.25,
  movementSpeed: 4.8398,
  health: {
    amount: 2750,
    scale: 0.04,
    regenRate: 5.7304,
    regenScale: 0.04
  },
  energy: {
    amount: 100,
    regenRate: 5,
    name: "Energy"
  },
  autoAttacks: [
    {
      nameId: "DeathwingHeroWeapon",
      range: 2.5,
      period: 1.5,
      damage: 155,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/deathwing.png",
  abilities: [
    {
      id: "DeathwingAspectOfDeath",
      name: "Aspect of Death",
      descriptionShort: "Deathwing is especially powerful, but ignores friendly effects",
      descriptionLong: "Deathwing is fitted with 4 Armor Plates which grant 10 Armor each. Every 25% Health lost causes Deathwing to lose a plate. Plates are only restored when Dragonflight is used, based on the amount of Health Deathwing has when landing.Deathwing is also a mighty Dragon Aspect who is permanently Unstoppable and deals 100% additional Spell Damage to Heroes, but views his allies with contempt and ignores any of their friendly effects.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_aspect_of_death.png",
      isPassive: true
    },
    {
      id: "DeathwingDragonflight",
      name: "Dragonflight",
      descriptionShort: "Take to the sky",
      descriptionLong: "After 3 seconds, fly into the sky, becoming Immune to all effects and gaining 2.5% Health per second. Once cast, this ability cannot be interrupted. Cannot be cast for 4 seconds after taking damage, Basic Attacking or casting an Ability.",
      cooldown: 45,
      category: "mount",
      type: "Z",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_mount.png",
      isPassive: false
    },
    {
      id: "DeathwingMoltenFlame",
      name: "Molten Flame",
      descriptionShort: "Melt enemies with a stream of molten flame",
      descriptionLong: "After 1.5 seconds, Deathwing breathes a stream of flame, dealing 21 (+4% / level) damage every 0.125 seconds. Drains 30 Energy per second.",
      cost: {
        type: "Mana",
        amount: 10
      },
      cooldown: 3,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_molten_flame.png",
      isPassive: false
    },
    {
      id: "DeathwingIncinerate",
      name: "Incinerate",
      descriptionShort: "Damage enemies near Deathwing",
      descriptionLong: "After 0.75 seconds, Deathwing flaps his wings, dealing 65 (+4% / level) damage to nearby enemies.World Breaker: Lava BurstCreate a lava pool that damages and Slows",
      cost: {
        type: "Energy",
        amount: 20
      },
      cooldown: 4,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_incinerate.png",
      isPassive: false
    },
    {
      id: "DeathwingOnslaught",
      name: "Onslaught",
      descriptionShort: "Lunge in a direction",
      descriptionLong: "After 0.5 seconds, Deathwing lunges in a direction dealing 38 (+4% / level) damage to enemies and Slowing them by 35% for 2 seconds. Deathwing bites enemies at the end of the lunge, dealing an additional 72 (+4% / level) damage.World Breaker: Earth ShatterDamage and Stun enemies in two lines",
      cost: {
        type: "Energy",
        amount: 20
      },
      cooldown: 5,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_onslaught.png",
      isPassive: false
    },
    {
      id: "DeathwingCataclysm",
      name: "Cataclysm",
      descriptionShort: "Deathwing flies over an area, causing devastation in his wake.",
      descriptionLong: "After 2 seconds, Deathwing flies in the targeted direction, dealing 90 (+4% / level) damage on impact and leaving scorched ground that deals 36 (+4% / level) damage a second. Lasts 6 seconds.",
      cooldown: 90,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_cataclysm.png",
      isPassive: false
    },
    {
      id: "DeathwingDestroyerForm",
      name: "Destroyer",
      descriptionShort: "Land on the ground in Destroyer form",
      descriptionLong: "After 1.75 seconds, Deathwing slams down to the ground, dealing 50 (+4% / level) damage to enemies in the area and landing in Destroyer form. Deathwing can begin to cast Abilities 3 seconds after landing.",
      cooldown: 8,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_destroyer.png",
      isPassive: false
    },
    {
      id: "DeathwingWorldbreakerForm",
      name: "World Breaker",
      descriptionShort: "Land on the ground in World Breaker form",
      descriptionLong: "After 1.75 seconds, Deathwing slams down to the ground, dealing 50 (+4% / level) damage to enemies in the area and landing in World Breaker form. Deathwing can begin to cast Abilities 3 seconds after landing.",
      cooldown: 8,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_world_breaker.png",
      isPassive: false
    },
    {
      id: "DeathwingLavaBurst",
      name: "Lava Burst",
      descriptionShort: "Create a lava pool that damages and Slows",
      descriptionLong: "After a 1 second delay, deal 30 (+4% / level) damage to all enemies in an area and create a pool of magma that deals 24 (+4% / level) damage per second and Slows enemies by 35%. Lasts 6 seconds.Destroyer: IncinerateDamage enemies near Deathwing",
      cost: {
        type: "Energy",
        amount: 15
      },
      cooldown: 6,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_lava_burst.png",
      isPassive: false
    },
    {
      id: "DeathwingEarthShatter",
      name: "Earth Shatter",
      descriptionShort: "Damage and Stun enemies in two lines",
      descriptionLong: "Create a fissure of earth that deals 90 (+4% / level) damage to enemies hit and Stuns them for 0.75 seconds.Destroyer: OnslaughtLunge in a direction",
      cost: {
        type: "Energy",
        amount: 25
      },
      cooldown: 12,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_earth_shatter.png",
      isPassive: false
    },
    {
      id: "DeathwingSkyfall",
      name: "Skyfall",
      descriptionShort: "Deathwing can drop meteors while in Dragonflight",
      descriptionLong: "After 0.8 seconds, a meteor falls from the sky, dealing 58 (+4% / level) damage to enemies in the area.If a Hero is hit, Deathwing heals for 3% of his maximum Health.",
      cooldown: 10,
      charges: {
        chargesMax: 3,
        chargesInitial: 3,
        chargeCost: 1,
        recastCooldown: 0.5
      },
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_skyfall.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "DeathwingDragonSoul",
        name: "Dragon Soul",
        descriptionShort: "Incinerate, Lava Burst explosion heal Deathwing",
        descriptionLong: "Destroyer: Incinerate heals Deathwing for 75% of the damage dealt to enemy Heroes.World Breaker: Lava Burst's explosion damage heals Deathwing for 150% of the damage dealt to enemy Heroes.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_heat_wave.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "DeathwingIncinerate",
          "DeathwingLavaBurst"
        ]
      },
      {
        id: "DeathwingMoltenBlood",
        name: "Molten Blood",
        descriptionShort: "Armor Plates increase Regen",
        descriptionLong: "While Deathwing has 3 or more Armor Plates, he heals for 0.6% of his maximum Health per second.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_aspect_of_death.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "DeathwingAspectOfDeath",
          "DeathwingFormSwitch"
        ]
      },
      {
        id: "DeathwingDraconicMight",
        name: "Draconic Might",
        descriptionShort: "Protected from Armor Plate loss, Basic Attacks heal",
        descriptionLong: "Deathwing's Basic Attacks against enemy Heroes heal him for 25% of the damage dealt. Upon losing an Armor Plate, Deathwing becomes Protected for 0.75 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_aspect_of_death_alt1.png",
        isPassive: false,
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "DeathwingAspectOfDeath",
          "DeathwingFormSwitch"
        ]
      }
    ],
    [
      {
        id: "DeathwingInfernus",
        name: "Infernus",
        descriptionShort: "Increase Molten Flame damage at high Energy",
        descriptionLong: "Increase the damage of Molten Flame against enemy Heroes by 25%.  Increase this damage bonus to 75% when Molten Flame is cast at 75 Energy or higher.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_molten_flame.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "DeathwingMoltenFlameCancel",
          "DeathwingMoltenFlame"
        ]
      },
      {
        id: "DeathwingHeatWave",
        name: "Heat Wave",
        descriptionShort: "Increase Incinerate and Lava Burst damage",
        descriptionLong: "Destroyer: After hitting an enemy Hero with Incinerate, Deathwing deals 12 (+4% / level) damage per second to all nearby enemies for the next 8 seconds. Stacks up to 4 times.World Breaker: Increase the explosion damage of Lava Burst by 125%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_heat_wave.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "DeathwingIncinerate",
          "DeathwingLavaBurst"
        ]
      },
      {
        id: "DeathwingDragonsIre",
        name: "Dragon's Ire",
        descriptionShort: "Deathwing gains damage while missing Armor Plates",
        descriptionLong: "While Deathwing has 3 or fewer Armor Plates, his damage is increased by 25%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_aspect_of_death.png",
        isPassive: false,
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "DeathwingAspectOfDeath",
          "DeathwingFormSwitch"
        ]
      }
    ],
    [
      {
        id: "DeathwingFirestorm",
        name: "Firestorm",
        descriptionShort: "Meteors reduce Dragonflight's cooldown",
        descriptionLong: "Reduce the cooldown of Deathwing's landing Abilities by 2 seconds.  When Deathwing lands, he drops 7 meteors near the landing area, dealing 70 (+4% / level) damage to enemies hit. Heroes hit by the meteors reduce Dragonflight's cooldown by 25 seconds.Meteors prioritize landing on Heroes, otherwise they fall randomly in the area.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_firestorm.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "DeathwingDestroyerForm",
          "DeathwingWorldbreakerForm",
          "DeathwingDragonflight"
        ]
      },
      {
        id: "DeathwingDeathDrop",
        name: "Death Drop",
        descriptionShort: "Landing on Heroes reduces Spell Armor",
        descriptionLong: "Hitting an enemy Hero with Destroyer or World Breaker's landing damage reduces their Spell Armor by 15 for 6 seconds and Deathwing's Basic Ability cooldowns by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_deathdrop.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "DeathwingDestroyerForm",
          "DeathwingWorldbreakerForm",
          "DeathwingDragonflight"
        ]
      },
      {
        id: "DeathwingSkyfall",
        name: "Skyfall",
        descriptionShort: "Deathwing can drop meteors to heal himself",
        descriptionLong: "After using Dragonflight, Deathwing can drop meteors anywhere within vision dealing 58 (+4% / level) damage to enemies in the area. Has 3 charges.If a Hero is hit, Deathwing heals for 3% of his maximum Health.",
        cooldown: 10,
        charges: {
          chargesMax: 3,
          chargesInitial: 3,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_skyfall.png",
        isPassive: false,
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "DeathwingDragonflight"
        ]
      }
    ],
    [
      {
        id: "DeathwingBurnBeneathMyShadow",
        name: "Burn Beneath My Shadow",
        descriptionShort: "Destroying Forts or Keeps refreshes Cataclysm",
        descriptionLong: "When an enemy Fort or Keep is destroyed the cooldown of Cataclysm is reset. Cataclysm's periodic damage is increased by 80%.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_cataclysm.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "DeathwingCataclysm"
        ]
      },
      {
        id: "DeathwingBellowingRoar",
        name: "Bellowing Roar",
        descriptionShort: "Roar Fears nearby Heroes",
        descriptionLong: "After 1 second, Deathwing unleashes a mighty roar, dealing 25 (+4% / level) damage to nearby Heroes and causing them to run in Fear for 1.5 seconds.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_bellowing_roar.png",
        isPassive: false,
        order: 2,
        tier: "level10"
      }
    ],
    [
      {
        id: "DeathwingWickedInferno",
        name: "Wicked Inferno",
        descriptionShort: "Reduce Molten Flame's Energy cost",
        descriptionLong: "Molten Flame's Energy cost per second is reduced by 10.  After using Molten Flame, Deathwing gains 15 Energy over 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_molten_flame.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "DeathwingMoltenFlameCancel",
          "DeathwingMoltenFlame"
        ]
      },
      {
        id: "DeathwingRuination",
        name: "Ruination",
        descriptionShort: "Onslaught bite Slows, Earth Shatter cost reduced",
        descriptionLong: "Destroyer: The bite from Onslaught now Slows by 60% for 1.5 seconds.World Breaker: Reduce Earth Shatter's cooldown by 6 seconds and its Energy cost by 10.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_ruination.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "DeathwingOnslaught",
          "DeathwingEarthShatter"
        ]
      },
      {
        id: "DeathwingFireAndFury",
        name: "Fire and Fury",
        descriptionShort: "Empower Basic Attacks against disabled enemies",
        descriptionLong: "Basic Attacks against Rooted, Slowed, or Stunned enemy Heroes deal 30% additional damage and reduce the cooldowns of Deathwing's Basic Abilities by 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_fire_and_fury.png",
        isPassive: false,
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "DeathwingAspectOfDeath",
          "DeathwingFormSwitch"
        ]
      }
    ],
    [
      {
        id: "DeathwingConflagration",
        name: "Conflagration",
        descriptionShort: "Molten Flame causes Heroes to explode",
        descriptionLong: "Dealing 320 (+4% / level) damage with Molten Flame to enemy Heroes within 4 seconds causes them to burn for an additional 100 (+4% / level) damage over 4 seconds. While burning, they explode every 1 second, dealing 80 (+4% / level) damage to all nearby enemies.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_molten_flame.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "DeathwingMoltenFlameCancel",
          "DeathwingMoltenFlame"
        ]
      },
      {
        id: "DeathwingGazeOntoDestruction",
        name: "Gaze Onto Destruction",
        descriptionShort: "Landing on Heroes Slows and reduces damage",
        descriptionLong: "Hitting Heroes with Destroyer or World Breaker's landing causes their damage to be reduced by 75% and Slows them by 40% for 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_deathdrop.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "DeathwingDestroyerForm",
          "DeathwingWorldbreakerForm",
          "DeathwingDragonflight"
        ]
      },
      {
        id: "DeathwingElementiumPlating",
        name: "Elementium Plating",
        descriptionShort: "Activate to gain a Shield, restore Health",
        descriptionLong: "Activate to gain a Shield equal to 30% of Deathwing's missing Health for 8 seconds. While the Shield holds, Deathwing regenerates 2% of his maximum Health per second. When the Shield expires or is destroyed, Deathwing regains Armor Plates appropriate for his new Health.The Shield and effect end immediately if Deathwing uses Dragonflight.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_elemental_plating.png",
        isPassive: false,
        order: 3,
        tier: "level16"
      }
    ],
    [
      {
        id: "DeathwingStoodInTheFire",
        name: "Stood in the Fire",
        descriptionShort: "Cataclysm Slows, duration increased",
        descriptionLong: "Enemy Heroes are Slowed by 40% while standing in scorched ground, and its duration is increased by 50%.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_cataclysm.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "DeathwingCataclysm"
        ]
      },
      {
        id: "DeathwingArrivalOfAGod",
        name: "Arrival of a God",
        descriptionShort: "Landing damage increased, gain all level 7 talents",
        descriptionLong: "Destroyer or World Breaker's landing damage is increased by 400%.Deathwing also gains the benefits of all of his level 7 talents.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_deathdrop.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "DeathwingDestroyerForm",
          "DeathwingWorldbreakerForm",
          "DeathwingDragonflight"
        ]
      },
      {
        id: "DeathwingDestroyersRampage",
        name: "Destroyer's Rampage",
        descriptionShort: "Landing in Destroyer form empowers Deathwing",
        descriptionLong: "For the next 6 seconds after landing in Destroyer form, Deathwing's damage is increased by 40% and his Basic Ability cooldowns recharge 50% faster.Damaging Heroes refreshes this effect and switching to World Breaker form removes the effect.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deathwing_destroyer.png",
        isPassive: false,
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "DeathwingDestroyerForm",
          "DeathwingDragonflight",
          "DeathwingAspectOfDeath",
          "DeathwingFormSwitch"
        ]
      }
    ]
  ]
};
      
export default deathwing;