import { Hero } from '../heroes';
      
const mei: Hero = {
  name: "Mei",
  nameNormalized: "mei",
  franchise: "Overwatch",
  gender: "Female",
  size: 0.875,
  movementSpeed: 4.8398,
  health: {
    amount: 2675,
    scale: 0.04,
    regenRate: 5.5742,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "MeiOWHeroWeapon",
      range: 4.5,
      period: 1,
      damage: 75,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/mei.png",
  abilities: [
    {
      id: "MeiOWCryoFreeze",
      name: "Cryo-Freeze",
      descriptionShort: "Activate to gain Shield and heal",
      descriptionLong: "Become encased in ice for 3 seconds, gaining a rapidly decaying Shield that absorbs up to 1104 (+4% / level) damage. While active, this Shield grants Unstoppable and restores up to 35% of Mei's maximum Health.",
      cooldown: 40,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_trait.png",
      isPassive: false
    },
    {
      id: "MeiOWSnowBlind",
      name: "Snow Blind",
      descriptionShort: "Throw a snowball that Slows and Blinds",
      descriptionLong: "Throw a snowball that hits all enemies in an area. Enemies hit take 70 (+4% / level) damage, are Slowed by 35%, and are Blinded for 1.75 seconds.",
      cost: {
        type: "Mana",
        amount: 35
      },
      cooldown: 10,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 2
      },
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_q_snowblind.png",
      isPassive: false
    },
    {
      id: "MeiOWBlizzard",
      name: "Blizzard",
      descriptionShort: "Freeze enemies in an area",
      descriptionLong: "Command Snowball to create a Blizzard at the target location for 2 seconds. Enemies within the blizzard take 13 (+4% / level) damage every 0.25 seconds and are Slowed by 7%, stacking up to 35%. When the Blizzard ends, enemies within its area take an additional 75 (+4% / level) damage and are Stunned for 1.25 seconds.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 14,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_w_blizzard.png",
      isPassive: false
    },
    {
      id: "MeiOWIcing",
      name: "Icing",
      descriptionShort: "Slide in a direction and knockback enemies",
      descriptionLong: "Slide quickly in the targeted direction. When this effect ends, enemies near Mei are knocked back, take 52 (+4% / level) damage, and are Slowed by 80%, rapidly decaying over 1.5 seconds.Can be canceled during sliding.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 14,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_e1_slide.png",
      isPassive: false
    },
    {
      id: "MeiOWAvalanche",
      name: "Avalanche",
      descriptionShort: "Consume Heroes in a massive snowball",
      descriptionLong: "After 0.5 seconds, roll a massive snowball that consumes enemy Heroes in its path. At the end of its path, the snowball crumbles, releasing the consumed Heroes, dealing 220 (+4% / level) damage and Stunning them for 0.5 seconds per Hero consumed.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 90,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_r1_avalanche.png",
      isPassive: false
    },
    {
      id: "MeiOWIceWall",
      name: "Ice Wall",
      descriptionShort: "Trap enemies inside of a path blocking wall",
      descriptionLong: "Vector TargetingAfter a 0.75 second delay, create an impassable wall that traps enemy Heroes hit for 2.5 seconds. When the wall expires, trapped Heroes are Slowed by 75%, decaying over 3 seconds.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 50,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_r2_icewall.png",
      isPassive: false
    },
    {
      id: "MeiOWIcingCancel",
      name: "Icing",
      descriptionShort: "Slide in a direction and knockback enemies",
      descriptionLong: "Cancel Icing",
      cooldown: 14,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_e2_slide.png",
      isPassive: false
    },
    {
      id: "MeiOWCryoFreezeCancel",
      name: "Cryo-Freeze",
      descriptionShort: "Activate to gain Shield and heal",
      descriptionLong: "Cancel Cryo-Freeze",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/hud_btn_bg_ability_cancel.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "MeiOWHeavyPack",
        name: "Heavy Pack",
        descriptionShort: "Increase Snow Blind's Slow, reduced cooldown",
        descriptionLong: "Increases the duration of Snow Blind's Slow by 1.5 seconds. Each time Blizzard damages an enemy Hero, reduce the cooldown of Snow Blind by 0.5 seconds and gain 3 Mana.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 2
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_q_snowblind.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "MeiOWSnowBlind"
        ]
      },
      {
        id: "MeiOWIceStorm",
        name: "Ice Storm",
        descriptionShort: "Blizzard can deal extra damage",
        descriptionLong: "Every 3rd hit of Blizzard against enemy Heroes deals an additional 45 (+4% / level) damage. Blizzard's final Stun damage is increased by 150% against all enemies.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_w_blizzard.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "MeiOWBlizzard"
        ]
      },
      {
        id: "MeiOWHeatTransfer",
        name: "Heat Transfer",
        descriptionShort: "Gain bonuses from disabling Heroes",
        descriptionLong: "Basic Attacks against Stunned, Rooted, or Slowed Heroes deal 33% more damage. Each time Mei Stuns or Slows an enemy Hero she heals for 18 (+4% / level) Health.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_damage.png",
        isPassive: false,
        order: 3,
        tier: "level1"
      }
    ],
    [
      {
        id: "MeiOWSlushball",
        name: "Slushball",
        descriptionShort: "Increase Snow Blind damage, disables Structures",
        descriptionLong: "Snow Blind deals 75% increased damage and Structures hit are disabled for 3 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 2
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_q_snowblind.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "MeiOWSnowBlind"
        ]
      },
      {
        id: "MeiOWColdFront",
        name: "Cold Front",
        descriptionShort: "Blizzard reduces Icing cooldown",
        descriptionLong: "Reduce the cooldown of Icing by 4 seconds.  If Mei enters her own Blizzard while Icing is active, the cooldown of Icing is reduced by 5 seconds and she gains 80 Mana.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_e1_slide.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "MeiOWIcing"
        ]
      },
      {
        id: "MeiOWCrystallize",
        name: "Crystallize",
        descriptionShort: "Cryo-Freeze grants Spell Armor",
        descriptionLong: "Reduce the cooldown of Cryo-Freeze by 10 seconds. Mei gains 40 Spell Armor while Cryo-Freeze is active and for 1 second after.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_trait.png",
        isPassive: false,
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "MeiOWCryoFreeze"
        ]
      }
    ],
    [
      {
        id: "MeiOWInduceHibernation",
        name: "Induce Hibernation",
        descriptionShort: "Blizzard reduces enemy damage dealt",
        descriptionLong: "Blizzard reduces the damage dealt by enemy Heroes inside of its area by 40%. When Blizzard ends, enemy Heroes still within its area gain this effect for an additional 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_w_blizzard.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "MeiOWBlizzard"
        ]
      },
      {
        id: "MeiOWSkatingAway",
        name: "Skating Away",
        descriptionShort: "Icing grants allies Movement Speed, Physical Armor",
        descriptionLong: "When Icing ends, Mei and all nearby allied Heroes gain 20% Movement Speed and 50 Physical Armor for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_e1_slide.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "MeiOWIcing"
        ]
      },
      {
        id: "MeiOWBackupBattery",
        name: "Backup Battery",
        descriptionShort: "Activate to remove Roots and Slows, heal",
        descriptionLong: "Activate to remove all Roots and Slows and regenerate 20% of maximum Health over 2 seconds. The cooldown of this ability is reduced by 10 seconds each time Mei picks up a Regeneration Globe.",
        cooldown: 70,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_battery.png",
        isPassive: false,
        order: 3,
        tier: "level7"
      }
    ],
    [
      {
        id: "MeiOWAvalanche",
        name: "Avalanche",
        descriptionShort: "Consume Heroes in a massive snowball",
        descriptionLong: "After 0.5 seconds, roll a massive snowball that consumes enemy Heroes in its path. At the end of its path, the snowball crumbles, releasing the consumed Heroes, dealing 220 (+4% / level) damage and Stunning them for 0.5 seconds per Hero consumed.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 90,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_r1_avalanche.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "MeiOWAvalanche"
        ]
      },
      {
        id: "MeiOWIceWall",
        name: "Ice Wall",
        descriptionShort: "Trap enemies inside of a path blocking wall",
        descriptionLong: "Vector TargetingAfter a 0.75 second delay, create an impassable wall that traps enemy Heroes hit for 2.5 seconds. When the wall expires, trapped Heroes are Slowed by 75%, decaying over 3 seconds.",
        cost: {
          type: "Mana",
          amount: 50
        },
        cooldown: 50,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_r2_icewall.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "MeiOWIceWall"
        ]
      }
    ],
    [
      {
        id: "MeiOWFlurry",
        name: "Flurry",
        descriptionShort: "Standing in Blizzard reduces its cooldown",
        descriptionLong: "While in her own Blizzard, Mei gains 50% increased Attack Speed and Blizzard's cooldown refreshes 125% faster. If Mei is in her own Blizzard when it ends, gain these bonuses for 3 additional seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_w_blizzard.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "MeiOWBlizzard"
        ]
      },
      {
        id: "MeiOWCryoFreezeCoolingServos",
        name: "Cooling Servos",
        descriptionShort: "Empower Cryo-Freeze, Basic Attacks",
        descriptionLong: "While Cryo-Freeze is active, Mei's Basic Ability cooldowns recover 200% faster.Passive: Basic Attacks Slow by 20% for 1.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_trait.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "MeiOWCryoFreeze"
        ]
      },
      {
        id: "MeiOWPolarVortex",
        name: "Polar Vortex",
        descriptionShort: "Deal area damage and Slow after casting abilities",
        descriptionLong: "Using an ability causes Mei to deal 24 (+4% / level) damage a second to nearby enemies for 4 seconds. Enemy Heroes damaged by this effect also have their Movement Speed and Attack Speed Slowed by 20%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_arthas_frosentempest.png",
        isPassive: false,
        order: 3,
        tier: "level13"
      }
    ],
    [
      {
        id: "MeiOWFreshPowder",
        name: "Fresh Powder",
        descriptionShort: "Snow Blind gains a charge, increased range",
        descriptionLong: "Snow Blind gains an additional charge and its range is increased by 33%.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 2
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_q_snowblind.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "MeiOWSnowBlind"
        ]
      },
      {
        id: "MeiOWBlackIce",
        name: "Black Ice",
        descriptionShort: "Increased Icing Slow, damage",
        descriptionLong: "Icing's Slow effect no longer decays over its duration. Icing deals 300% more damage to enemies very close to Mei.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_e1_slide.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "MeiOWIcing"
        ]
      },
      {
        id: "MeiOWAcclimation",
        name: "Acclimation",
        descriptionShort: "Disabling Heroes empowers Mei",
        descriptionLong: "Each time Mei Stuns or Slows an enemy Hero, the damage she deals and healing she receives is increased by 1%, stacking up to 20 times. While at maximum stacks, Mei also gains 10 Armor. Lasts 8 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_frostarmor.png",
        isPassive: false,
        order: 3,
        tier: "level16"
      }
    ],
    [
      {
        id: "MeiOWCascade",
        name: "Cascade",
        descriptionShort: "Avalanche launches Snow Blinds during travel",
        descriptionLong: "While traveling, Avalanche constantly launches a volley of untalented Snow Blind snowballs ahead of itself.Passive: Reduce the cooldown of Avalanche by 30 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_r1_avalanche.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "MeiOWAvalanche"
        ],
        prerequisiteTalentIds: [
          "MeiOWAvalanche"
        ]
      },
      {
        id: "MeiOWShatter",
        name: "Shatter",
        descriptionShort: "Ice Wall damages, reduces Armor",
        descriptionLong: "When Ice Wall expires, trapped enemy Heroes hit take 210 (+4% / level) damage and have their Armor reduced by 25 for 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_r2_icewall.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "MeiOWIceWall"
        ],
        prerequisiteTalentIds: [
          "MeiOWIceWall"
        ]
      },
      {
        id: "MeiOWTheBigOne",
        name: "The Big One",
        descriptionShort: "Snow Blind is periodically empowered",
        descriptionLong: "Every 15 seconds, the next Snow Blind you cast has 67% increased area and 200% increased damage.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 2
        },
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_q_snowblind.png",
        isPassive: false,
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "MeiOWSnowBlind"
        ]
      },
      {
        id: "MeiOWFlashFreeze",
        name: "Flash Freeze",
        descriptionShort: "Cryo-Freeze activates on fatal damage",
        descriptionLong: "When Mei takes fatal damage she instantly gains Cryo-Freeze. This effect has a 180 second cooldown.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_mei_trait.png",
        isPassive: false,
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "MeiOWCryoFreeze"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 80.60263653483992,
    damageSustainedPhysical: 36.68478260869565
  }
};
      
export default mei;