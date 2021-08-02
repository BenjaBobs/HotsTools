import { Hero } from '../heroes';
      
const garrosh: Hero = {
  name: "Garrosh",
  nameNormalized: "garrosh",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.875,
  movementSpeed: 4.8398,
  health: {
    amount: 2060,
    scale: 0.04,
    regenRate: 4.293,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroGarrosh",
      range: 1.25,
      period: 1.2,
      damage: 137,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/garrosh.png",
  abilities: [
    {
      id: "GarroshArmorUp",
      name: "Armor Up",
      descriptionShort: "Gain Armor as Health gets lower",
      descriptionLong: "Garrosh gains 1 Armor for every 2% of maximum Health missing.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_armor_up.png",
      isPassive: true
    },
    {
      id: "GarroshGroundbreaker",
      name: "Groundbreaker",
      descriptionShort: "Deal damage to enemies, can Stun them",
      descriptionLong: "Deal 81 (+4% / level) damage to enemies in an area. Heroes hit on the outer edge are Stunned for 0.5 seconds and then Slowed by 40% for 2 seconds.",
      cost: {
        type: "Mana",
        amount: 40
      },
      cooldown: 8,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_groundbreaker.png",
      isPassive: false
    },
    {
      id: "GarroshBloodthirst",
      name: "Bloodthirst",
      descriptionShort: "Deal damage and heal for a portion of missing Health",
      descriptionLong: "Deal 156 (+4% / level) damage to an enemy and heal for 10% of Garrosh's missing Health. Healing is increased by 100% against Heroes.",
      cost: {
        type: "Mana",
        amount: 55
      },
      cooldown: 12,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 1
      },
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_bloodthirst.png",
      isPassive: false
    },
    {
      id: "GarroshWreckingBall",
      name: "Wrecking Ball",
      descriptionShort: "Throw an enemy, damaging and Slowing them",
      descriptionLong: "Throw a nearby enemy Hero, Minion, or Mercenary to the target location, dealing 91 (+4% / level) damage to enemies near the impact and Slowing them by 30% for 2.5 seconds.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 16,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_wrecking_ball.png",
      isPassive: false
    },
    {
      id: "GarroshWarlordsChallenge",
      name: "Warlord's Challenge",
      descriptionShort: "Force nearby Heroes to attack Garrosh",
      descriptionLong: "Silence nearby Heroes and force them to attack Garrosh for 2 seconds.",
      cost: {
        type: "Mana",
        amount: 40
      },
      cooldown: 50,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_warlords_challenge.png",
      isPassive: false
    },
    {
      id: "GarroshDecimate",
      name: "Decimate",
      descriptionShort: "Damage and Slow nearby enemies",
      descriptionLong: "Deal 50 (+4% / level) damage to nearby enemies and Slow them by 40% for 1.5 seconds. Deals 100% more damage to Heroes, and each Hero hit reduces the cooldown by 1 second.Stores up to 3 charges.",
      cost: {
        type: "Mana",
        amount: 25
      },
      cooldown: 8,
      charges: {
        chargesMax: 3,
        chargesInitial: 3,
        chargeCost: 1,
        recastCooldown: 1
      },
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_decimate.png",
      isPassive: false
    },
    {
      id: "GarroshArmorUpDoubleUp",
      name: "Double Up",
      descriptionShort: "Activate Armor Up to increase bonus",
      descriptionLong: "Armor Up can be activated to increase its Armor bonus by 100% for 3 seconds.",
      cooldown: 30,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_armor_up.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "GarroshGroundbreakerWarbreaker",
        name: "Warbreaker",
        descriptionShort: "Quest: Stun Heroes to empower Groundbreaker",
        descriptionLong: "Quest: Stun Heroes with Groundbreaker.Reward: After Stunning 5 Heroes, Groundbreaker's Stun deals an additional 165 (+4% / level) damage over 3 seconds to Heroes.Reward: After Stunning 15 Heroes, permanently reduce Groundbreaker's cooldown by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_groundbreaker.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "GarroshGroundbreaker"
        ],
        isQuest: true
      },
      {
        id: "GarroshWreckingBallUnrivaledStrength",
        name: "Unrivaled Strength",
        descriptionShort: "Increase Wrecking Ball's throw range, damage",
        descriptionLong: "Increase Wrecking Ball's throw range by 25% and its damage by 125%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_wrecking_ball.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "GarroshWreckingBall"
        ]
      },
      {
        id: "GarroshArmorUpBodyCheck",
        name: "Body Check",
        descriptionShort: "Damage and Slow an enemy",
        descriptionLong: "Activate to deal 111 (+4% / level) damage to a target enemy and Slow them by 35% for 3 seconds. Enemy Heroes hit receive 30% reduced healing for 3 seconds.",
        cooldown: 15,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_slam.png",
        isPassive: false,
        order: 3,
        tier: "level1"
      }
    ],
    [
      {
        id: "GarroshBloodthirstInFortheKill",
        name: "In For the Kill",
        descriptionShort: "Bloodthirst kills reset cooldown, restore Mana",
        descriptionLong: "Increase Bloodthirst's damage against non-Heroes by 70%. Killing enemies with Bloodthirst resets its cooldown and refunds its Mana cost.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_bloodthirst.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "GarroshBloodthirst"
        ]
      },
      {
        id: "GarroshBloodthirstThirstforBattle",
        name: "Thirst for Battle",
        descriptionShort: "Basic Attacks reduce Bloodthirst cooldown",
        descriptionLong: "Basic Attacks against Heroes reduce the cooldown of Bloodthirst by 2 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_bloodthirst_var1.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "GarroshBloodthirst"
        ]
      },
      {
        id: "GarroshIndomitable",
        name: "Indomitable",
        descriptionShort: "Activate to become Unstoppable",
        descriptionLong: "Activate to become Unstoppable for 1.5 seconds.",
        cooldown: 40,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_indomitablel.png",
        isPassive: false,
        order: 3,
        tier: "level4"
      }
    ],
    [
      {
        id: "GarroshGroundbreakerIntimidation",
        name: "Intimidation",
        descriptionShort: "Groundbreaker reduces Attack Speed",
        descriptionLong: "Groundbreaker reduces the Attack Speed of Heroes hit by 40% for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_groundbreaker.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "GarroshGroundbreaker"
        ]
      },
      {
        id: "GarroshOppressor",
        name: "Oppressor",
        descriptionShort: "Basic Attacks reduce Spell Power",
        descriptionLong: "Basic Attacks against Heroes reduce the target's Spell Power by 40% for 2.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_slow.png",
        isPassive: false,
        order: 2,
        tier: "level7"
      },
      {
        id: "GarroshWreckingBallIntotheFray",
        name: "Into the Fray",
        descriptionShort: "Activate to throw an ally",
        descriptionLong: "Activate to throw a nearby ally and grant them 25 Armor for 3 seconds. Deals 91 (+4% / level) damage to nearby enemies upon impact and Slows them by 30% for 2.5 seconds.While in flight, allied Heroes are Unstoppable.",
        cooldown: 45,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_intothefray.png",
        isPassive: false,
        order: 3,
        tier: "level7"
      }
    ],
    [
      {
        id: "GarroshHeroicAbilityWarlordsChallenge",
        name: "Warlord's Challenge",
        descriptionShort: "Force nearby Heroes to attack Garrosh",
        descriptionLong: "Silence nearby Heroes and force them to attack Garrosh for 2 seconds.",
        cost: {
          type: "Mana",
          amount: 40
        },
        cooldown: 50,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_warlords_challenge.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "GarroshWarlordsChallenge"
        ]
      },
      {
        id: "GarroshHeroicAbilityDecimate",
        name: "Decimate",
        descriptionShort: "Damage and Slow nearby enemies",
        descriptionLong: "Deal 50 (+4% / level) damage to nearby enemies and Slow them by 40% for 1.5 seconds. Deals 100% more damage to Heroes, and each Hero hit reduces the cooldown by 1 second.Stores up to 3 charges.",
        cost: {
          type: "Mana",
          amount: 25
        },
        cooldown: 8,
        charges: {
          chargesMax: 3,
          chargesInitial: 3,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_decimate.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "GarroshDecimate"
        ]
      }
    ],
    [
      {
        id: "GarroshGroundbreakerDefensiveMeasures",
        name: "Defensive Measures",
        descriptionShort: "Groundbreaker Stun grants Shield",
        descriptionLong: "If Groundbreaker Stuns a Hero, Garrosh gains a 350 (+4% / level) Shield for 6 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_groundbreaker.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "GarroshGroundbreaker"
        ]
      },
      {
        id: "GarroshBloodthirstBloodcraze",
        name: "Bloodcraze",
        descriptionShort: "Bloodthirst heals over time",
        descriptionLong: "When hitting a Hero, Bloodthirst heals for an additional 15% of Garrosh's maximum Health over 3 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_bloodthirst.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "GarroshBloodthirst"
        ]
      },
      {
        id: "GarroshArmorUpDoubleUp",
        name: "Double Up",
        descriptionShort: "Activate Armor Up to increase bonus",
        descriptionLong: "Armor Up can be activated to increase its Armor bonus by 100% for 3 seconds.",
        cooldown: 30,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_armor_up.png",
        isPassive: false,
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "GarroshArmorUp"
        ]
      }
    ],
    [
      {
        id: "GarroshGroundbreakerMortalCombo",
        name: "Mortal Combo",
        descriptionShort: "Reduce Wrecking Ball cooldown on Stunned targets",
        descriptionLong: "Hitting a Hero with Groundbreaker's Stun and throwing them with Wrecking Ball within 3 seconds reduces Wrecking Ball's cooldown by 10 seconds, regardless of order.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_wrecking_ball.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "GarroshWreckingBall"
        ]
      },
      {
        id: "GarroshWreckingBallEarthshaker",
        name: "Earthshaker",
        descriptionShort: "Wrecking Ball Stuns enemies near impact",
        descriptionLong: "Wrecking Ball Stuns enemies near the impact area for 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_intothefray.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "GarroshWreckingBall"
        ]
      },
      {
        id: "GarroshArmorUpSeasonedSoldier",
        name: "Seasoned Soldier",
        descriptionShort: "Gain multiple bonuses",
        descriptionLong: "Gain 5% maximum Health, increase Groundbreaker's Slow duration by 1 second, and Bloodthirst gains an additional charge.",
        cooldown: null,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_armor_up.png",
        isPassive: false,
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "GarroshArmorUpDoubleUp",
          "GarroshArmorUp"
        ]
      }
    ],
    [
      {
        id: "GarroshWarlordsChallengeDeathWish",
        name: "Death Wish",
        descriptionShort: "Takedowns reduce Warlord's Challenge cooldown",
        descriptionLong: "Increase the duration of Warlord's Challenge by 0.5 seconds.  If an enemy Hero is killed while Taunted by Warlord's Challenge, its cooldown is reduced by 45 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_warlords_challenge.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "GarroshWarlordsChallenge"
        ],
        prerequisiteTalentIds: [
          "GarroshHeroicAbilityWarlordsChallenge"
        ]
      },
      {
        id: "GarroshDecimateDeadlyCalm",
        name: "Deadly Calm",
        descriptionShort: "Decimate reduces damage dealt",
        descriptionLong: "Heroes hit by Decimate deal 40% less damage for 3 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 3,
          chargesInitial: 3,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_decimate.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "GarroshDecimate"
        ],
        prerequisiteTalentIds: [
          "GarroshHeroicAbilityDecimate"
        ]
      },
      {
        id: "GarroshWreckingBallTitanicMight",
        name: "Titanic Might",
        descriptionShort: "Wrecking Ball throws an additional enemy",
        descriptionLong: "Wrecking Ball now throws the 2 closest enemies.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_wrecking_ball.png",
        isPassive: false,
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "GarroshWreckingBall"
        ]
      },
      {
        id: "GarroshArmorUpInnerRage",
        name: "Inner Rage",
        descriptionShort: "Body Check gains an additional charge",
        descriptionLong: "Body Check gains an additional charge and its healing reduction is increased by an additional 45%.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_garrosh_slam.png",
        isPassive: false,
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "GarroshArmorUpBodyCheck"
        ],
        prerequisiteTalentIds: [
          "GarroshArmorUpBodyCheck"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 62.071563088512235,
    damageSustainedPhysical: 15.511775362318842
  }
};
      
export default garrosh;