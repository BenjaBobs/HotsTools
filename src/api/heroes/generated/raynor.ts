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
      damage: 98,
      damageScale: 0.04
    },
    {
      nameId: "RaynorWeapon",
      range: 6.5,
      period: 0.8,
      damage: 98,
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
      descriptionLong: "Deal 205 (+4% / level) damage, knock back, and Slow enemies in a line by 20% for 2 seconds. Enemies close to Raynor are knocked back further.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 9,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_penetratinground.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 22.777777777777775
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
        id: "RaynorGiveEmSomePepperExterminator",
        name: "Exterminator",
        descriptionShort: "Increase damage to non-Heroes",
        descriptionLong: "Basic Attacks deal 50% more damage to Minions, Mercenaries, and Monsters. This is increased to 125% while Inspire is active. Passive: Inspire does not expire on friendly Minions and Mercenaries.",
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
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "RaynorInspire",
          "RaynorBountyHunter",
          "RaynorGiveEmSomePepper"
        ]
      },
      {
        id: "RaynorVeteranMarksman",
        name: "Veteran Marksman",
        descriptionShort: "Gambit: Gain Give 'Em Some Pepper damageQuest: Gain Give 'Em Some Pepper damage",
        descriptionLong: "Quest: Every time the primary target of Give 'Em Some Pepper is a Hero, permanently increase its damage bonus by 0.75%. Gambit: Gain 60% bonus Give 'Em Some Pepper damage. Every death reduces this bonus by 15%.",
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
        descriptionLong: "Deal 10% more damage to Stunned or Slowed Heroes. Enemy Heroes hit by Give 'Em Some Pepper are Slowed by 10% for 2.5 seconds.",
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
        descriptionShort: "Lower Adrenaline Rush cooldown, grants Armor",
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
        descriptionShort: "Give 'Em Some Pepper attacks heal",
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
        descriptionLong: "Gain 200 bonus maximum Health.  Quest: Every time Give 'Em Some Pepper's primary target is a Hero, gain an additional 8 maximum Health.",
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
        id: "RaynorPenetratingRoundHeavySlugs",
        name: "Heavy Slugs",
        descriptionShort: "Improve Penetrating Round's Slow",
        descriptionLong: "Increase Penetrating Round's Slow by 15% and its duration by 1.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_penetratinground.png",
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
          "RaynorPenetratingRound"
        ]
      },
      {
        id: "RaynorInspireFuelTheRush",
        name: "Fuel The Rush",
        descriptionShort: "Increase Adrenaline Rush cooldown reduction",
        descriptionLong: "Reduce the Mana cost of Adrenaline Rush from 75 to 45. While Inspire is active, increase Adrenaline Rush's cooldown reduction from Basic Attacks by 300%.",
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
        order: 2,
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
        descriptionLong: "Increase the area of Give 'Em Some Pepper by 15%. Each enemy Hero hit by Give 'Em Some Pepper grants Raynor 10 Mana and reduces the cooldown of Penetrating Round by 1.5 seconds.",
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
        tier: "level7",
        linkedAbilityIds: [
          "RaynorBountyHunter",
          "RaynorGiveEmSomePepper"
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
        id: "RaynorPenetratingRoundLine'EmUp",
        name: "Line 'Em Up",
        descriptionShort: "Reduce Penetrating Round's cooldown",
        descriptionLong: "Reduce the cooldown of Penetrating Round by 3 seconds. Penetrating Round hitting two or more enemy Heroes reduces its cooldown by an additional 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_penetratinground.png",
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
          "RaynorPenetratingRound"
        ]
      },
      {
        id: "RaynorInspireGiddyUp",
        name: "Giddy-Up",
        descriptionShort: "Gain Move Speed, increased during Inspire",
        descriptionLong: "Gain 10% Movement Speed while mounted and unmounted. Inspire grants 10% more Movement Speed.",
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
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "RaynorInspire",
          "RaynorAdrenalineRush"
        ]
      }
    ],
    [
      {
        id: "RaynorPenetratingRoundPaintThemRed",
        name: "Paint Them Red",
        descriptionShort: "Penetrating Round deals more damage, heals",
        descriptionLong: "Increase the damage of Penetrating Round by 50% and heal for 90% of the damage Penetrating Round deals to Heroes.",
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
        id: "RaynorInspireRallyingCry",
        name: "Rallying Cry",
        descriptionShort: "Increase Inspire Attack Speed, cast for free",
        descriptionLong: "Increase the Attack Speed bonus of Inspire by 20%. Passive: After every 12 Basic Attacks, cast Inspire for free.",
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
        tier: "level16",
        linkedAbilityIds: [
          "RaynorInspire"
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
        id: "RaynorHyperionCavalrysArrived",
        name: "Cavalry's Arrived",
        descriptionShort: "Mark targets for the Hyperion",
        descriptionLong: "Give 'Em Some Pepper lowers the cooldown of Hyperion by 5 seconds if the primary target is a Hero. These Heroes are targeted by the Hyperion for 100% increased damage.",
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
        descriptionLong: "Increase the Health and leash range of Raynor's Raider by 100%. Its Basic Attack lowers enemy Hero Armor by 2 for 1 second, stacking up to 25.",
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
        id: "RaynorAdrenalineRushRaidersRoll",
        name: "Raiders Roll",
        descriptionShort: "Adrenaline Rush grants Unstoppable",
        descriptionLong: "Adrenaline Rush grants Unstoppable and continues healing for an additional 2 seconds. The additional duration ends upon reaching 70% Health.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_adrenalinrush.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 9.333333333333334,
          magicalDamage: 0
        },
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "RaynorAdrenalineRush"
        ]
      },
      {
        id: "RaynorGive'EmSomePepperSergeantPepper",
        name: "Sergeant Pepper",
        descriptionShort: "Give 'Em Some Pepper every 3rd attack",
        descriptionLong: "Give 'Em Some Pepper now activates every 3 Basic Attacks.",
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
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "RaynorBountyHunter",
          "RaynorGiveEmSomePepper"
        ]
      },
      {
        id: "RaynorHyperionExecuteOrders",
        name: "Execute Orders",
        descriptionShort: "Retaliate upon death",
        descriptionLong: "Reduce Raynor's death timer by 35 seconds. Upon death, the Hyperion is cast towards the closest enemy Hero.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_raynor_advancedoptics.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 5,
        tier: "level20"
      }
    ]
  ],
  analysis: {
    tankiness: 43.69114877589453,
    physicalDamage: 61.24999999999999,
    mobility: 24.199,
    healing: 4.375218760938047,
    magicalDamage: 35.99306879748176
  }
};
      
export default raynor;