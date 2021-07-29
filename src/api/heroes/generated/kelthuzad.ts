import { Hero } from '../heroes';
      
const kelthuzad: Hero = {
  name: "Kel'Thuzad",
  nameNormalized: "kelthuzad",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.875,
  movementSpeed: 4.8398,
  health: {
    amount: 1445,
    scale: 0.04,
    regenRate: 3.0117,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroKelThuzad",
      range: 5.5,
      period: 1,
      damage: 72,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/kelthuzad.png",
  abilities: [
    {
      id: "KelThuzadMasterOfTheColdDark",
      name: "Master of the Cold Dark",
      descriptionShort: "Kel'Thuzad becomes increasingly stronger as he disrupts enemies",
      descriptionLong: "Quest: Gain 1 Blight every time a Hero is Rooted by Frost Nova or hit by Chains of Kel'Thuzad.Reward: After gaining 15 Blight, gain the Glacial Spike Ability.Reward: After gaining 30 Blight, gain 75% Spell Power.Blight: 0/30",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_powerofthecolddark.png",
      isPassive: true
    },
    {
      id: "KelThuzadDeathAndDecay",
      name: "Death and Decay",
      descriptionShort: "Damage enemies and create a damaging pool",
      descriptionLong: "After 0.5 seconds, launch an orb that explodes upon hitting an enemy, dealing 150 (+2.5% / level) damage to enemies in the area. The explosion leaves behind a pool of decay that lasts 2 seconds, dealing 82 (+2.5% / level) damage every 0.5 seconds to enemies.",
      cost: {
        type: "Mana",
        amount: 20
      },
      cooldown: 5,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_deathanddecay.png",
      isPassive: false
    },
    {
      id: "KelThuzadFrostNova",
      name: "Frost Nova",
      descriptionShort: "Damage and disable enemies",
      descriptionLong: "Create a nova that explodes after 1 second, dealing 180 (+2.5% / level) damage to enemies inside and Slowing them by 35% for 2.5 seconds. Enemies in the center are Rooted for 1 second.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 8,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_frostnova.png",
      isPassive: false
    },
    {
      id: "KelThuzadChains",
      name: "Chains of Kel'Thuzad",
      descriptionShort: "Pull enemy Heroes together",
      descriptionLong: "Launch a chain, dealing 97 (+2.5% / level) damage to the first enemy Hero hit. For 3 seconds after hitting an enemy, Chains can be reactivated to launch to an additional enemy, pulling both enemies together and Stunning them for 0.5 seconds.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 10,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_chains.png",
      isPassive: false
    },
    {
      id: "KelThuzadFrozenTomb",
      name: "Frost Blast",
      descriptionShort: "Root and damage enemies around a target",
      descriptionLong: "Launch a meteor of ice at an enemy Hero. Upon impact, the meteor deals 115 (+2.5% / level) damage to its target and 275 (+2.5% / level) damage to enemies in the area. All enemies hit by Frost Blast are Rooted for 2 seconds.",
      cost: {
        type: "Mana",
        amount: 45
      },
      cooldown: 50,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_frozentomb.png",
      isPassive: false
    },
    {
      id: "KelThuzadShadowFissure",
      name: "Shadow Fissure",
      descriptionShort: "Deal high damage in an area",
      descriptionLong: "Create a fissure anywhere on the Battleground that explodes after 1.5 seconds, dealing 320 (+2.5% / level) damage to enemy Heroes in its area. If an enemy Hero is hit, set its cooldown to 1.5 seconds.",
      cost: {
        type: "Mana",
        amount: 40
      },
      cooldown: 16,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_shadowfissure.png",
      isPassive: false
    },
    {
      id: "KelThuzadGlacialSpike",
      name: "Glacial Spike",
      descriptionShort: "Create a spike that explodes, deals damage",
      descriptionLong: "Activate to create a spike that detonates after 4 seconds, dealing 60 (+2.5% / level) damage to nearby enemies. The spike can be affected by Chains of Kel'Thuzad.",
      cooldown: 30,
      category: "activable",
      type: "Active",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_glacialspike.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "KelThuzadThePlaguelands",
        name: "The Plaguelands",
        descriptionShort: "Increase Death and Decay duration, radius",
        descriptionLong: "Increase Death and Decay's duration by 1 second. After gaining 30 Blight, increase the radius of Death and Decay's pool by 30%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_deathanddecay.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "KelThuzadDeathAndDecay"
        ]
      },
      {
        id: "KelThuzadBlightedFrost",
        name: "Blighted Frost",
        descriptionShort: "Increase Frost Nova center damage, duration",
        descriptionLong: "Frost Nova deals 75% more damage to enemies in the center. After gaining 30 Blight, increase Frost Nova's Root duration by 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_frostnova.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "KelThuzadFrostNova"
        ]
      },
      {
        id: "KelThuzadBarbedChains",
        name: "Barbed Chains",
        descriptionShort: "Chains deals more damage, reduces Armor",
        descriptionLong: "Increase Chains of Kel'Thuzad damage by 125%. After gaining 30 Blight, Chains of Kel'Thuzad reduces the Armor of pulled Heroes by 10 for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_chains.png",
        isPassive: false,
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "KelThuzadChains"
        ]
      }
    ],
    [
      {
        id: "KelThuzadStripShields",
        name: "Strip Shields",
        descriptionShort: "Chains grants Shield, damages Shields",
        descriptionLong: "Pulling a Hero with Chains of Kel'Thuzad grants Kel'Thuzad a permanent 128 (+4% / level) Shield, stacking up to 2 times.Additionally, Chains of Kel'Thuzad deals up to 270 (+2.5% / level) bonus damage to Heroes' Shields.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_chains.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "KelThuzadChains"
        ]
      },
      {
        id: "KelThuzadPhylactery",
        name: "Phylactery of Kel'Thuzad",
        descriptionShort: "Quest: Collect Regen Globes for instant respawn",
        descriptionLong: "Quest: Collect 12 Regeneration Globes to charge Kel'Thuzad's Phylactery.Reward: Kel'Thuzad's Phylactery can be activated while dead to immediately respawn at the Hall of Storms, but must be charged again.Passive: Kel'Thuzad heals for 10% of all Spell Damage dealt while the Phylactery is charged.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_phylactery.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "KelThuzadMasterOfTheColdDark"
        ],
        isQuest: true
      },
      {
        id: "KelThuzadArchlichArmor",
        name: "Armor of the Archlich",
        descriptionShort: "Activate to gain Physical Armor, Slow enemies",
        descriptionLong: "Activate to gain 50 Physical Armor for 4 seconds. Upon activation, nearby enemies take 45 (+4% / level) damage and are Slowed by 35% for 4 seconds.",
        cooldown: 25,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_armorofthearchlich.png",
        isPassive: false,
        order: 3,
        tier: "level4"
      }
    ],
    [
      {
        id: "KelThuzadAcceleratedDecay",
        name: "Accelerated Decay",
        descriptionShort: "Death and Decay damage increases",
        descriptionLong: "Each time a Hero is hit by Death and Decay's pool, they take 25% more periodic damage from Death and Decay for the next 4 seconds, stacking up to 4 times.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_deathanddecay.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "KelThuzadDeathAndDecay"
        ]
      },
      {
        id: "KelThuzadChillingTouch",
        name: "Chilling Touch",
        descriptionShort: "Basic Attacks periodically deal area Spell damage",
        descriptionLong: "Every 8 seconds, Kel'Thuzad's next Basic Attack hits all enemies in the area for 80%  additional damage, deals Spell damage instead of Physical, and Slows by 30% for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_chillingtouch.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "KelThuzadMasterOfTheColdDark"
        ]
      },
      {
        id: "KelThuzadIceCold",
        name: "Ice Cold",
        descriptionShort: "Reduce cooldown of Glacial Spike",
        descriptionLong: "Reduce the cooldown of Glacial Spike by 8 seconds and increase its damage by 400%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_glacialspike.png",
        isPassive: false,
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "KelThuzadGlacialSpike"
        ]
      }
    ],
    [
      {
        id: "KelThuzadFrozenTomb",
        name: "Frost Blast",
        descriptionShort: "Root and damage enemies around a target",
        descriptionLong: "Launch a meteor of ice at an enemy Hero. Upon impact, the meteor deals 115 (+2.5% / level) damage to its target and 275 (+2.5% / level) damage to enemies in the area. All enemies hit by Frost Blast are Rooted for 2 seconds.",
        cost: {
          type: "Mana",
          amount: 45
        },
        cooldown: 50,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_frozentomb.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "KelThuzadFrozenTomb"
        ]
      },
      {
        id: "KelThuzadShadowFissure",
        name: "Shadow Fissure",
        descriptionShort: "Deal high damage in an area",
        descriptionLong: "Create a fissure anywhere on the Battleground that explodes after 1.5 seconds, dealing 320 (+2.5% / level) damage to enemy Heroes in its area. If an enemy Hero is hit, set its cooldown to 1.5 seconds.",
        cost: {
          type: "Mana",
          amount: 40
        },
        cooldown: 16,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_shadowfissure.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "KelThuzadShadowFissure"
        ]
      }
    ],
    [
      {
        id: "KelThuzadIcyGrasp",
        name: "Icy Grasp",
        descriptionShort: "Increase Frost Nova Slow, reduce cooldown",
        descriptionLong: "Increase Frost Nova's Slow by 20%. Each time Kel'Thuzad damages enemies Slowed by Frost Nova, reduce the cooldown of Frost Nova by 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_frostnova.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "KelThuzadFrostNova"
        ]
      },
      {
        id: "KelThuzadChainsOfIce",
        name: "Chains of Ice",
        descriptionShort: "Chains Slows after pull",
        descriptionLong: "After Chains of Kel'Thuzad's Stun expires, the enemy is also Slowed by 60% for 1 second.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_chains.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "KelThuzadChains"
        ]
      },
      {
        id: "KelThuzadChainLink",
        name: "Chain-Link",
        descriptionShort: "Pulling Heroes reduces Chains cooldown",
        descriptionLong: "Pulling a Hero with Chains of Kel'Thuzad reduces its cooldown by 5 seconds and refunds its Mana cost.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_chains_a.png",
        isPassive: false,
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "KelThuzadChains"
        ]
      }
    ],
    [
      {
        id: "KelThuzadArcaneEchoes",
        name: "Arcane Echoes",
        descriptionShort: "Reduce Death and Decay cooldown",
        descriptionLong: "Whenever Kel'Thuzad hits an enemy Hero with Death and Decay's explosion, its cooldown is reduced by 1.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_deathanddecay.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "KelThuzadDeathAndDecay"
        ]
      },
      {
        id: "KelThuzadHungeringCold",
        name: "Hungering Cold",
        descriptionShort: "Deal bonus damage to Rooted enemies",
        descriptionLong: "Enemies that are Rooted take an additional 55 (+2.5% / level) damage each time they are damaged by Kel'Thuzad.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_abilitytalent_damage.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "KelThuzadMasterOfTheColdDark"
        ]
      },
      {
        id: "KelThuzadPowerOfIcecrown",
        name: "Power of Icecrown",
        descriptionShort: "Disabling enemies grants Spell Power",
        descriptionLong: "Stunning, Rooting, or Slowing a Hero grants 6% Spell Power for 10 seconds, stacking up to 5 times.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_poweroficecrown.png",
        isPassive: false,
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "KelThuzadMasterOfTheColdDark"
        ]
      }
    ],
    [
      {
        id: "KelThuzadDeathchill",
        name: "Deathchill",
        descriptionShort: "Frost Blast Slows, Takedowns release blasts",
        descriptionLong: "When Frost Blast's Root expires, enemies are Slowed by 40% for 3 seconds. Heroes killed while under the effects of Frost Blast instantly release another Frost Blast explosion.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_frozentomb.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "KelThuzadFrozenTomb"
        ],
        prerequisiteTalentIds: [
          "KelThuzadFrozenTomb"
        ]
      },
      {
        id: "KelThuzadMightOfTheScourge",
        name: "Might of the Scourge",
        descriptionShort: "Hitting Heroes recasts Shadow Fissure",
        descriptionLong: "If a Hero is hit with Shadow Fissure, a second one is cast below them 1 second later.  This second cast will not duplicate itself.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_shadowfissure.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "KelThuzadShadowFissure"
        ],
        prerequisiteTalentIds: [
          "KelThuzadShadowFissure"
        ]
      },
      {
        id: "KelThuzadShiftingMalice",
        name: "Shifting Malice",
        descriptionShort: "Activate to dash and deal damage",
        descriptionLong: "Activate to dash forward, dealing 150 (+2.5% / level) damage to enemies in the path. Takedowns reset the cooldown of Shifting Malice.",
        cooldown: 240,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_shiftingmalice.png",
        isPassive: false,
        order: 3,
        tier: "level20"
      },
      {
        id: "KelThuzadTheDamnedReturn",
        name: "The Damned Return",
        descriptionShort: "Create Shades that mimic Death and Decay",
        descriptionLong: "Activate to create a Shade of Naxxramas that lasts 15 seconds and mimics Kel'Thuzad's casts of Death and Decay.",
        cooldown: 15,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_kel'thuzad_cultofthedamned.png",
        isPassive: false,
        order: 4,
        tier: "level20"
      }
    ]
  ]
};
      
export default kelthuzad;