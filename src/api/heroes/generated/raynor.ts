import { Hero } from '../heroes';
      
const raynor: Hero = {
  name: "Raynor",
  nameNormalized: "raynor",
  franchise: "Starcraft",
  gender: "Male",
  size: 0.8125,
  movementSpeed: 4.8398,
  health: {
    amount: 1450,
    scale: 0.04,
    regenRate: 3.0195,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "RaynorWeaponMelee",
      range: 2,
      period: 0.8,
      damage: 101,
      damageScale: 0.04
    },
    {
      nameId: "RaynorWeapon",
      range: 6.5,
      period: 0.8,
      damage: 101,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/raynor.png",
  abilities: [
    {
      id: "RaynorGiveEmSomePepper",
      name: "Give 'Em Some Pepper",
      descriptionShort: "Periodically empower Basic Attacks",
      descriptionLong: "Every 4th Basic Attack splashes in a small area and deals 125% more damage to the main target.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_acquireweakspot.png",
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
      id: "RaynorPenetratingRound",
      name: "Penetrating Round",
      descriptionShort: "Fire a shot damaging, knocking back, and Slowing enemies",
      descriptionLong: "Deal 220 (+4% / level) damage, knock back, and Slow enemies in a line by 20% for 2 seconds. Enemies close to Raynor are knocked back further.",
      cost: {
        type: "Mana",
        amount: 65
      },
      cooldown: 10,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_penetratinground.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 22
      }
    },
    {
      id: "RaynorInspire",
      name: "Inspire",
      descriptionShort: "Reset and empower Basic Attacks",
      descriptionLong: "Raynor and all nearby allied Minions and Mercenaries gain 30% Attack Speed and 10% Movement Speed for 4 seconds. Casting Inspire resets Raynor's Basic Attack cooldown.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 12,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_inspire.png",
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
      id: "RaynorAdrenalineRush",
      name: "Adrenaline Rush",
      descriptionShort: "Activate to heal",
      descriptionLong: "Heal Raynor for 25% of his maximum Health over 1 second. Raynor's Basic Attacks lower the cooldown of this by 0.5 seconds, doubled against Heroes.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 45,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_adrenalinrush.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 3.3333333333333335,
        magicalDamage: 0
      }
    },
    {
      id: "RaynorHyperion",
      name: "Hyperion",
      descriptionShort: "Call down a strafing Battlecruiser",
      descriptionLong: "Order the Hyperion to make a strafing run for 12 seconds, hitting up to 4 enemies for 66 (+4% / level) damage every second. Every 4 seconds, it can fire its Yamato Cannon at a Structure, dealing 794 (+4% / level) damage.",
      cost: {
        type: "Mana",
        amount: 100
      },
      cooldown: 100,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_hyperion.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 52.93333333333333
      }
    },
    {
      id: "RaynorRaynorsRaidersDummy",
      name: "Raynor's Raider",
      descriptionShort: "Summon a Banshee escort",
      descriptionLong: "Summon a Banshee that assists Raynor. The Banshee deals 84 (+4% / level) damage per second and regenerates 75 (+4% / level) Health per second if it hasn't taken damage in the last 4 seconds. Can reactivate to retarget or move the Banshee. The Banshee respawns automatically after 45 seconds.",
      cooldown: 45,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_raynorsraiders.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 5.6
      }
    }
  ],
  talents: [
    [
      {
        id: "RaynorVeteranMarksman",
        name: "Veteran Marksman",
        descriptionShort: "Quest: Empower Give 'Em Some Pepper",
        descriptionLong: "Quest: Every time the primary target of Give 'Em Some Pepper is a Hero, permanently increase its damage bonus by 1%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_acquireweakspot.png",
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
          "RaynorBountyHunter",
          "RaynorGiveEmSomePepper"
        ],
        isQuest: true
      },
      {
        id: "RaynorAceInTheHole",
        name: "Ace In The Hole",
        descriptionShort: "Deal more damage to disabled Heroes",
        descriptionLong: "Passive: Deal 10% more damage to Stunned or Slowed Heroes. Enemy Heroes hit by Give 'Em Some Pepper are Slowed by 10% for 2.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_acardtoplay.png",
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
          "RaynorBountyHunter",
          "RaynorGiveEmSomePepper"
        ]
      },
      {
        id: "RaynorGiveEmSomePepperExterminator",
        name: "Exterminator",
        descriptionShort: "Increased Attack damage to non-Heroes",
        descriptionLong: "Basic Attacks deal 50% more damage to Minions, Mercenaries, and Monsters. This is increased to 125% while Inspire is active.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_building.png",
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
          "RaynorBountyHunter",
          "RaynorGiveEmSomePepper"
        ]
      }
    ],
    [
      {
        id: "RaynorMasteryFightorFlightAdrenalineRush",
        name: "Fight or Flight",
        descriptionShort: "Adrenaline Rush cooldown reduced, grants Armor",
        descriptionLong: "Reduce Adrenaline Rush's cooldown by 10 seconds. Casting Adrenaline Rush grants 25 Armor for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_adrenalinrush.png",
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
          "RaynorAdrenalineRush"
        ]
      },
      {
        id: "RaynorBasicAttackSustainingRounds",
        name: "Sustaining Rounds",
        descriptionShort: "Give 'Em Some Pepper Attacks heal",
        descriptionLong: "Give 'Em Some Pepper heals Raynor for 3% of his maximum Health, increased to 6% if the primary target is a Hero.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_acquireweakspot.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.4,
          magicalDamage: 0
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "RaynorBountyHunter",
          "RaynorGiveEmSomePepper"
        ]
      },
      {
        id: "RaynorBehemothArmor",
        name: "Behemoth Armor",
        descriptionShort: "Quest: Gain bonus max Health",
        descriptionLong: "Gain 200 bonus maximum Health.  Quest: Every time Give 'Em Some Pepper's primary target is a Hero, gain an additional 5 maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_hulkarmor.png",
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
          "RaynorBountyHunter",
          "RaynorGiveEmSomePepper"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "RaynorInspireFuelTheRush",
        name: "Fuel The Rush",
        descriptionShort: "Increase Adrenaline Rush cooldown reduction",
        descriptionLong: "Reduce the Mana cost of Adrenaline Rush from 75 to 50.  While Inspire is active, increase Adrenaline Rush's cooldown reduction from Basic Attacks by 200%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_split_debilitatingrounds.png",
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
          "RaynorInspire",
          "RaynorAdrenalineRush"
        ]
      },
      {
        id: "RaynorGiveEmSomePepperUnstableCompound",
        name: "Unstable Compound",
        descriptionShort: "Give 'Em Some Pepper area increased, reduces cooldowns",
        descriptionLong: "Increase the area of Give 'Em Some Pepper by 15%. Each enemy Hero hit by Give 'Em Some Pepper grants Raynor 10 Mana and reduces the cooldown of Penetrating Round and Inspire by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_acquireweakspot.png",
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
          "RaynorBountyHunter",
          "RaynorGiveEmSomePepper"
        ]
      },
      {
        id: "RaynorPenetratingRoundHeavySlugs",
        name: "Heavy Slugs",
        descriptionShort: "Activate to empower Penetrating Round",
        descriptionLong: "Activate to increase the distance of the next Penetrating Round by 30% and increase its Slow duration to 6 seconds.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_penetratinground.png",
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
          "RaynorPenetratingRound"
        ]
      }
    ],
    [
      {
        id: "RaynorHeroicAbilityHyperion",
        name: "Hyperion",
        descriptionShort: "Call down a strafing Battlecruiser",
        descriptionLong: "Order the Hyperion to make a strafing run for 12 seconds, hitting up to 4 enemies for 66 (+4% / level) damage every second. Every 4 seconds, it can fire its Yamato Cannon at a Structure, dealing 794 (+4% / level) damage.",
        cost: {
          type: "Mana",
          amount: 100
        },
        cooldown: 100,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_hyperion.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 52.93333333333333
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "RaynorHyperion"
        ]
      },
      {
        id: "RaynorHeroicAbilityRaynorsRaiders",
        name: "Raynor's Raider",
        descriptionShort: "Summon a Banshee escort",
        descriptionLong: "Summon a Banshee that assists Raynor. The Banshee deals 84 (+4% / level) damage per second and regenerates 75 (+4% / level) Health per second if it hasn't taken damage in the last 4 seconds. Can reactivate to retarget or move the Banshee. The Banshee respawns automatically after 45 seconds.",
        cooldown: 45,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_raynorsraiders.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 5.6
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "RaynorRaynorsRaidersDummy"
        ]
      }
    ],
    [
      {
        id: "RaynorPenetratingRoundDebilitatingRounds",
        name: "Debilitating Rounds",
        descriptionShort: "Inspire empowers Penetrating Round",
        descriptionLong: "Reduce the Mana cost of Penetrating Round from 65 to 45, and its cooldown by 3 seconds. While Inspire is active, Penetrating Round's Slow is increased by 20%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_split_fuelrush.png",
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
          "RaynorPenetratingRound",
          "RaynorInspire"
        ]
      },
      {
        id: "RaynorInspireRallyingCry",
        name: "Rallying Cry",
        descriptionShort: "Inspire lasts longer and affects allied Heroes",
        descriptionLong: "Increase the duration of Inspire by 1 second. Casting Inspire grants nearby allied Heroes 10% Movement and Attack Speed for its duration.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_inspire.png",
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
          "RaynorInspire"
        ]
      },
      {
        id: "RaynorInspireGiddyUp",
        name: "Giddy-Up",
        descriptionShort: "Gain Move Speed, empower Inspire",
        descriptionLong: "Gain 8% Movement Speed while mounted and unmounted. Inspire grants 8% more Movement Speed.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_inspire_a.png",
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
          "RaynorInspire"
        ]
      }
    ],
    [
      {
        id: "RaynorPenetratingRoundPaintThemRed",
        name: "Paint Them Red",
        descriptionShort: "Penetrating Round deals more damage, heals",
        descriptionLong: "Increase the damage of Penetrating Round by 50% and heal for 90% of the damage it deals to Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_penetratinground.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 12,
          magicalDamage: 0
        },
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "RaynorPenetratingRound"
        ]
      },
      {
        id: "RaynorMasteryGiveMeMoreAdrenalineRush",
        name: "Give Me More!",
        descriptionShort: "Empower Adrenaline Rush and Inspire",
        descriptionLong: "Increase Adrenaline Rush healing by 50%. While Inspire is active, gain 1 Basic Attack range.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_split_debilitatingrounds.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 6.666666666666667,
          magicalDamage: 0
        },
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "RaynorInspire",
          "RaynorAdrenalineRush"
        ]
      },
      {
        id: "RaynorBountyHunter",
        name: "Bounty Hunter",
        descriptionShort: "Empowers Give 'Em Some Pepper, grants Armor",
        descriptionLong: "If Give 'Em Some Pepper's target is a Hero, it deals an additional 3% of their maximum Health as damage and grants Raynor 10 Armor for 3 seconds. Activate Give 'Em Some Pepper to apply it to Raynor's next Basic Attack.",
        cooldown: 40,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_acquireweakspot.png",
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
          "RaynorGiveEmSomePepper"
        ]
      }
    ],
    [
      {
        id: "RaynorHyperionIndomitableResolve",
        name: "Indomitable Resolve",
        descriptionShort: "Empower Hyperion, Inspire grants Unstoppable",
        descriptionLong: "Give 'Em Some Pepper lowers the cooldown of Hyperion by 5 seconds if the primary target is a Hero. Inspire grants Raynor Unstoppable for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_hyperion.png",
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
          "RaynorHyperion"
        ],
        prerequisiteTalentIds: [
          "RaynorHeroicAbilityHyperion"
        ]
      },
      {
        id: "RaynorDuskWing",
        name: "Dusk Wing",
        descriptionShort: "Upgrade Raynor's Raider",
        descriptionLong: "Increase the damage, Health, and leash range of Raynor's Raider by 100%. When it dies, both Inspire and Adrenaline Rush are activated for free.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_raynorsraiders.png",
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
          "RaynorRaynorsRaidersDummy",
          "RaynorRaynorsRaidersRedirect"
        ],
        prerequisiteTalentIds: [
          "RaynorHeroicAbilityRaynorsRaiders"
        ]
      },
      {
        id: "RaynorGiveEmSomePepperWeakSpotAcquired",
        name: "Weak Spot Acquired",
        descriptionShort: "Give 'Em Some Pepper reduces Armor",
        descriptionLong: "Enemy Heroes that are the primary target of Give 'Em Some Pepper have their Armor reduced by 25 for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_acquireweakspot.png",
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
          "RaynorBountyHunter",
          "RaynorGiveEmSomePepper"
        ]
      },
      {
        id: "RaynorBasicAttackExecute",
        name: "Execute",
        descriptionShort: "Empowers Basic Attacks",
        descriptionLong: "Increase Attack Speed by 20%. Basic Attack damage is increased by 25% against targets below 50% Health.",
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
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "RaynorBountyHunter",
          "RaynorGiveEmSomePepper"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 43.69114877589453,
    physicalDamage: 63.125,
    mobility: 24.199,
    healing: 4.375218760938047,
    magicalDamage: 35.648778716062836
  }
};
      
export default raynor;