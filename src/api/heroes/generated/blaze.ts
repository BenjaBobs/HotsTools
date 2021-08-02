import { Hero } from '../heroes';
      
const blaze: Hero = {
  name: "Blaze",
  nameNormalized: "blaze",
  franchise: "Starcraft",
  gender: "Male",
  size: 0.9375,
  movementSpeed: 4.8398,
  health: {
    amount: 2900,
    scale: 0.04,
    regenRate: 6.039,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "FirebatHeroWeapon",
      range: 4.5,
      period: 1,
      damage: 55,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/blaze.png",
  abilities: [
    {
      id: "FirebatIgnite",
      name: "Pyromania",
      descriptionShort: "Gain Armor and damage nearby enemies",
      descriptionLong: "Gain 40 Armor and deal 40 (+4% / level) damage to nearby enemies every 0.5 seconds for 4 seconds.Each Hero hit by Flame Stream reduces Pyromania's cooldown by 5 seconds.",
      cooldown: 90,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_pyromania.png",
      isPassive: false
    },
    {
      id: "FirebatFlameStream",
      name: "Flame Stream",
      descriptionShort: "Fire two streams of flames",
      descriptionLong: "Fire two streams that deal 83 (+4% / level) damage to enemies hit. Flame Stream Ignites Oil Spills it comes in contact with.",
      cost: {
        type: "Mana",
        amount: 30
      },
      cooldown: 4,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_flame.png",
      isPassive: false
    },
    {
      id: "FirebatOilSpill",
      name: "Oil Spill",
      descriptionShort: "Splash oil that Slows and can be Ignited to damage enemies and heal Blaze",
      descriptionLong: "Vector TargetingDispense a slick of oil that lasts for 5 seconds and Slows enemies that come in contact with it by 50%.Oil Spills are Ignited for 2.5 seconds when hit by Flame Stream. Ignited Oil Spills no longer Slow enemies, but instead deal 16 (+4% / level) damage to them every 0.3 seconds. Additionally, Blaze is healed for 49 (+4% / level) Health every 0.3 seconds while standing in Ignited Oil Spills.Stores up to 2 charges.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 12,
      charges: {
        chargesMax: 2,
        chargesInitial: 2,
        chargeCost: 1,
        recastCooldown: 1
      },
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_oil.png",
      isPassive: false
    },
    {
      id: "FirebatJetPropulsion",
      name: "Jet Propulsion",
      descriptionShort: "Charge forward, Stunning and damaging enemy Heroes",
      descriptionLong: "After 0.375 seconds, charge forward. Colliding with an enemy Hero deals 52 (+4% / level) damage to all nearby enemy Heroes and Stuns them for 1.25 seconds.",
      cost: {
        type: "Mana",
        amount: 45
      },
      cooldown: 10,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_jet.png",
      isPassive: false
    },
    {
      id: "FirebatBunkerDrop",
      name: "Bunker Drop",
      descriptionShort: "Call down a Bunker",
      descriptionLong: "After 0.5 seconds, deploy and enter a Bunker with 1435 (+4% / level) Health. Blaze and his allies can enter and exit the Bunker at will. While in the Bunker, occupants gain access to Flamethrower, dealing 170 (+4% / level) damage to enemies in a line. Exiting the Bunker grants 25 Armor for 2 seconds. Bunkers last 10 seconds, or until destroyed.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 70,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_bunker.png",
      isPassive: false
    },
    {
      id: "FirebatCombustion",
      name: "Combustion",
      descriptionShort: "Channel to damage and Slow enemies",
      descriptionLong: "Channel for up to 2.6 seconds. Upon ending, Slow nearby enemies by 60% and deal 55 (+4% / level) damage to them every 0.5 seconds. Combustion's Slow and damage over time duration is extended the longer Blaze Channels, from 1 second up to 5 seconds.Blaze's Movement Speed is reduced by 40% while Channeling.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 80,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_combustion.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "FirebatAdrenalineStimpack",
        name: "Adrenaline Stimpack",
        descriptionShort: "Activate to gain Attack Speed, Move Speed",
        descriptionLong: "Passive: While over 80% Health, gain 25% bonus Attack Speed and 10% bonus Movement Speed.Activate to gain 100% Attack Speed and 25% Movement Speed for 5 seconds.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_stim_2.png",
        isPassive: false,
        order: 1,
        tier: "level1"
      },
      {
        id: "FirebatEnduranceStimpack",
        name: "Endurance Stimpack",
        descriptionShort: "Activate to gain a Shield",
        descriptionLong: "Activate to gain a Shield that absorbs 590 (+4% / level) damage over 5 seconds.When taking damage while below 30% maximum Health, Endurance Stimpack will automatically be cast if it is not on cooldown.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_stim_1.png",
        isPassive: false,
        order: 2,
        tier: "level1"
      },
      {
        id: "FirebatNeuralStimpack",
        name: "Neural Stimpack",
        descriptionShort: "Activate to increase cooldown recharge rate",
        descriptionLong: "Activate to gain 40 Mana and cause Basic Ability cooldowns to recharge 100% faster for 5 seconds.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_stim_3.png",
        isPassive: false,
        order: 3,
        tier: "level1"
      },
      {
        id: "FirebatNewHabits",
        name: "New Habits",
        descriptionShort: "Quest: Pyromania grants Unstoppable",
        descriptionLong: "Collecting Regeneration Globes reduces the cooldown of Pyromania by 8 seconds.Quest: Collect 15 Regeneration Globes.Reward: Pyromania grants Unstoppable for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_new_habits.png",
        isPassive: false,
        order: 4,
        tier: "level1",
        linkedAbilityIds: [
          "FirebatIgnite"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "FirebatOilSpillOilDispersal",
        name: "Oil Dispersal",
        descriptionShort: "Increase Oil Spill area",
        descriptionLong: "Increase Oil Spill's area by 20%.  Each enemy Hero hit by Flame Stream reduces the cooldown of Oil Spill by 1 second and refunds 5 Mana.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_oil.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "FirebatOilSpill"
        ]
      },
      {
        id: "FirebatIgniteMeltdown",
        name: "Meltdown",
        descriptionShort: "Pyromania reduces enemy damage dealt",
        descriptionLong: "Hitting an enemy Hero with Pyromania reduces their damage dealt by 8% for 2.5 seconds, up to 40%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_pyromania.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "FirebatIgnite"
        ]
      },
      {
        id: "FirebatWeaponIncineratorGauntlets",
        name: "Incinerator Gauntlets",
        descriptionShort: "Basic Attacks deal bonus damage to non-Heroes",
        descriptionLong: "Increase Basic Attack area by 15%, and Basic Attack damage to Minions, Mercenaries, and Monsters by 50%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_slow.png",
        isPassive: false,
        order: 3,
        tier: "level4"
      }
    ],
    [
      {
        id: "FirebatFlameStreamCrossfire",
        name: "Crossfire",
        descriptionShort: "Flame Stream can deal bonus damage",
        descriptionLong: "Hitting an enemy with both streams of Flame Stream deals 139 (+4% / level) bonus damage.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_flame.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "FirebatFlameStream"
        ]
      },
      {
        id: "FirebatOilSpillGrillandKill",
        name: "Grill and Kill",
        descriptionShort: "Quest: Increase Ignited Oil Spill damage, duration",
        descriptionLong: "Quest: Damage enemy Heroes with Ignited Oil Spills 60 times.Reward: Increase Oil Spill's Ignite duration by 2 seconds, and damage by 35%.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_oil.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "FirebatOilSpill"
        ],
        isQuest: true
      },
      {
        id: "FirebatOilSpillAdhesivePetroleum",
        name: "Adhesive Petroleum",
        descriptionShort: "Oil Spill Slows when Ignited",
        descriptionLong: "Enemies standing in Oil Spill when it is Ignited are Slowed by 40% for 3 seconds.  Additionally, Basic Attack splashes Ignite Oil Spills.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_oil_b.png",
        isPassive: false,
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "FirebatOilSpill"
        ]
      }
    ],
    [
      {
        id: "FirebatHeroicAbilityBunkerDrop",
        name: "Bunker Drop",
        descriptionShort: "Call down a Bunker",
        descriptionLong: "After 0.5 seconds, deploy and enter a Bunker with 1435 (+4% / level) Health. Blaze and his allies can enter and exit the Bunker at will. While in the Bunker, occupants gain access to Flamethrower, dealing 170 (+4% / level) damage to enemies in a line. Exiting the Bunker grants 25 Armor for 2 seconds. Bunkers last 10 seconds, or until destroyed.",
        cost: {
          type: "Mana",
          amount: 70
        },
        cooldown: 70,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_bunker.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "FirebatBunkerDrop"
        ]
      },
      {
        id: "FirebatHeroicAbilityCombustion",
        name: "Combustion",
        descriptionShort: "Channel to damage and Slow enemies",
        descriptionLong: "Channel for up to 2.6 seconds. Upon ending, Slow nearby enemies by 60% and deal 55 (+4% / level) damage to them every 0.5 seconds. Combustion's Slow and damage over time duration is extended the longer Blaze Channels, from 1 second up to 5 seconds.Blaze's Movement Speed is reduced by 40% while Channeling.",
        cost: {
          type: "Mana",
          amount: 70
        },
        cooldown: 80,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_combustion.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "FirebatCombustion"
        ]
      }
    ],
    [
      {
        id: "FirebatFlameStreamSuppressiveFire",
        name: "Suppressive Fire",
        descriptionShort: "Flame Stream reduces Spell Power",
        descriptionLong: "Each stream of Flame Stream reduces the Spell Power of Heroes hit by 25% for 4 seconds, up to 50%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_flame.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "FirebatFlameStream"
        ]
      },
      {
        id: "FirebatOilSpillNanomachineCoating",
        name: "Nanomachine Coating",
        descriptionShort: "Oil Spill reduces Attack Speed",
        descriptionLong: "Enemies standing in Oil Spills and Ignited Oil Spills have their Attack Speed reduced by 50% for 3 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_oil.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "FirebatOilSpill"
        ]
      },
      {
        id: "FirebatJetPropulsionFuelLeak",
        name: "Fuel Leak",
        descriptionShort: "Jet Propulsion creates a trail of Oil Spills",
        descriptionLong: "Jet Propulsion creates Oil Spills along Blaze's path. If Jet Propulsion impacts an enemy Hero, an additional Oil Spill is created underneath them.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_jet.png",
        isPassive: false,
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "FirebatJetPropulsion"
        ]
      }
    ],
    [
      {
        id: "FirebatJetPropulsionThermalProtection",
        name: "Thermal Protection",
        descriptionShort: "Jet Propulsion hits grant Armor, reduce cooldown",
        descriptionLong: "Each enemy hit by Jet Propulsion grants 10 Armor for 3 seconds and reduces its cooldown by 1.25 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_jet.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "FirebatJetPropulsion"
        ]
      },
      {
        id: "FirebatIgniteHeatTreatment",
        name: "Heat Treatment",
        descriptionShort: "Pyromania heals for damage dealt",
        descriptionLong: "Heal for 75% of the damage dealt by Pyromania.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_pyromania.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "FirebatIgnite"
        ]
      },
      {
        id: "FirebatActiveJuggernautPlating",
        name: "Juggernaut Plating",
        descriptionShort: "Gain Spell Armor, then Shield for damage taken",
        descriptionLong: "Activate to gain 50 Spell Armor for 3 seconds. Upon expiration, gain a Shield equal to 125% of the Spell Damage taken while Juggernaut Plating was active.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_vanadium_plating.png",
        isPassive: false,
        order: 3,
        tier: "level16"
      }
    ],
    [
      {
        id: "FirebatBunkerDropFortifiedBunker",
        name: "Fortified Bunker",
        descriptionShort: "Allies can cast Oil Spill from Bunker Drop",
        descriptionLong: "Occupants can cast Oil Spill from Bunker Drop every 6 seconds. Additionally, Bunker Drop's Armor bonus upon exiting is increased by 25, and its duration by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_bunker.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "FirebatBunkerDrop"
        ],
        prerequisiteTalentIds: [
          "FirebatHeroicAbilityBunkerDrop"
        ]
      },
      {
        id: "FirebatCombustionFlashFire",
        name: "Flash Fire",
        descriptionShort: "Combustion Slows, remove Move Speed penalty",
        descriptionLong: "While Channeling Combustion, Blaze's Movement Speed is no longer reduced, and nearby enemies are Slowed by 60%.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_blaze_combustion.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "FirebatCombustion"
        ],
        prerequisiteTalentIds: [
          "FirebatHeroicAbilityCombustion"
        ]
      },
      {
        id: "FirebatWeaponBurnNotice",
        name: "Burn Notice",
        descriptionShort: "Basic Attacks Slow, damage over time",
        descriptionLong: "Basic Attacks Slow enemies by 5% and deal an additional 18 (+4% / level) damage over 2.5 seconds. Stacks up to 5 times.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_slow.png",
        isPassive: false,
        order: 3,
        tier: "level20"
      }
    ]
  ],
  analysis: {
    tankiness: 87.38229755178907,
    damageSustainedPhysical: 26.902173913043477
  }
};
      
export default blaze;