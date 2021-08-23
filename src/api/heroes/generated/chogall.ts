import { Hero } from '../heroes';
      
const chogall: Hero = {
  name: "Cho",
  nameNormalized: "chogall",
  franchise: "Warcraft",
  gender: "Male",
  size: 1.1875,
  movementSpeed: 4.8398,
  health: {
    amount: 2950,
    scale: 0.045,
    regenRate: 6.1445,
    regenScale: 0.045
  },
  autoAttacks: [
    {
      nameId: "ChoShortRangeHeroWeapon",
      range: 1,
      period: 1.1,
      damage: 130,
      damageScale: 0.045
    },
    {
      nameId: "ChoHeroWeapon",
      range: 2,
      period: 1.1,
      damage: 130,
      damageScale: 0.045
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/chogall.png",
  abilities: [
    {
      id: "ChoOgreHide",
      name: "Ogre Hide",
      descriptionShort: "Activate to increase Armor",
      descriptionLong: "Activate to gain 25 Armor, but reduce Gall's damage by 25%.",
      cooldown: 5,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_ogrehide.png",
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
      id: "ChoSurgingFistCast",
      name: "Surging Fist",
      descriptionShort: "Dash a direction knocking aside enemies",
      descriptionLong: "Activate to begin charging Surging Fist. Activate again to dash forward, knocking aside enemies and dealing 46 (+4% / level) damage. The dash range increases by up to 250%, depending on how long it is charged.",
      cooldown: 12,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_moltensurge_a.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 15.333333333333332
      }
    },
    {
      id: "ChoConsumingBlaze",
      name: "Consuming Blaze",
      descriptionShort: "Damage nearby enemies and heal Cho",
      descriptionLong: "Ignite nearby enemies, dealing 150 (+4% / level) damage over 5 seconds. Basic Attacking burning enemies re-Ignites them. Cho is healed for 40 (+4% / level) when an enemy is Ignited.",
      cooldown: 12,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_consumingflame.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 50
      }
    },
    {
      id: "ChoRuneBomb",
      name: "Rune Bomb",
      descriptionShort: "Throw a Rune Bomb down a line. Gall can detonate it to do area damage",
      descriptionLong: "Roll a bomb dealing 91 (+4% / level) damage to enemies in its path. Gall can use Runic Blast to detonate it to deal 210 (+4% / level) damage in an area.",
      cooldown: 8,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_runebomb.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 150.5
      }
    },
    {
      id: "ChoUpheaval",
      name: "Upheaval",
      descriptionShort: "Pull enemies in a large area",
      descriptionLong: "After 1 second, pull enemies towards Cho'gall, Slowing them by 25% for 3 seconds and dealing 175 (+4% / level) damage.",
      cooldown: 40,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_upheaval.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 46.666666666666664
      }
    },
    {
      id: "ChoHammerOfTwilight",
      name: "Hammer of Twilight",
      descriptionShort: "Activate to knockback and Stun enemies",
      descriptionLong: "Activate to swing the Hammer of Twilight, dealing 150 (+4.5% / level) damage, pushing enemies away, and Stunning them for 0.75 seconds. Passive: Cho's Basic Attacks deal 25% increased damage.",
      cooldown: 15,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_hammeroftwilight.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 40
      }
    }
  ],
  talents: [
    [
      {
        id: "ChoConsumingFire",
        name: "Consuming Fire",
        descriptionShort: "Increased healing against Heroes",
        descriptionLong: "Consuming Blaze heals for 150% more when a Hero is Ignited.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_consumingflame.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 10,
          magicalDamage: 0
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "ChoConsumingBlaze"
        ]
      },
      {
        id: "ChoCallousedHide",
        name: "Calloused Hide",
        descriptionShort: "Low health increases healing, Move Speed",
        descriptionLong: "While under 60% maximum Health, Cho gains 15% increased Movement Speed and healing received.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_ogrehide.png",
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
          "ChoOgreHidePassive",
          "ChoOgreHide"
        ]
      },
      {
        id: "ChoTheWillofCho",
        name: "The Will of Cho",
        descriptionShort: "Killing Minions and Takedowns grant Armor",
        descriptionLong: "Quest: Killing enemy Minions grants 1 stack of The Will of Cho, and Hero takedowns grant 10 stacks.  Gain 1 Armor for every 30 stacks of The Will of Cho, up to a maximum of 10 Armor. This Armor bonus stacks with Ogre Hide.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_ogrehide_var1.png",
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
          "ChoOgreHidePassive",
          "ChoOgreHide"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "ChoUppercut",
        name: "Uppercut",
        descriptionShort: "Increases Surging Fist damage",
        descriptionLong: "Hitting an enemy Hero with Surging Fist deals additional damage to Heroes equal to 5% of their max Health and reduces the cooldown of Surging Fist by 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_moltensurge_a.png",
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
          "ChoSurgingFistTrigger",
          "ChoSurgingFistCast"
        ]
      },
      {
        id: "ChoRollback",
        name: "Rollback",
        descriptionShort: "Rune Bomb returns",
        descriptionLong: "Rune Bomb rolls back to Cho, damaging enemies in its path.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_runebomb.png",
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
          "ChoRuneBomb"
        ]
      },
      {
        id: "ChoSearedFlesh",
        name: "Seared Flesh",
        descriptionShort: "Consecutive Basic Attacks deal bonus damage",
        descriptionLong: "Each consecutive Basic Attack to enemy Heroes deals 20% more damage, to a maximum of 60% damage. This bonus lasts 5 seconds or until a non-Heroic enemy is attacked.",
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
          magicalDamage: 1.3333333333333333
        },
        order: 3,
        tier: "level4"
      }
    ],
    [
      {
        id: "ChoPowerSurge",
        name: "Power Surge",
        descriptionShort: "Surging Fist Slows enemy Heroes",
        descriptionLong: "Enemy Heroes who are hit by Surging Fist are Slowed by 30% for 2.5 seconds.  Gain 15% Movement Speed while charging Surging Fist and for 2.5 seconds after casting the Ability.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_moltensurge_a.png",
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
          "ChoSurgingFistTrigger",
          "ChoSurgingFistCast"
        ]
      },
      {
        id: "ChoFirestarter",
        name: "Firestarter",
        descriptionShort: "Reduced Consuming Blaze cooldown",
        descriptionLong: "Basic Attacks against ignited Heroes decreases the cooldown of Consuming Blaze by 1 second. Passive: Reduce the cooldown of Consuming Blaze by 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_consumingflame.png",
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
          "ChoConsumingBlaze"
        ]
      },
      {
        id: "ChoEnragedRegeneration",
        name: "Enraged Regeneration",
        descriptionShort: "Cho heals from Hero damage, Gall reduces enemy healing",
        descriptionLong: "Each time Cho hits an enemy Hero with an Ability or Basic Attack, he heals for 60 (+4% / level) over 3 seconds. Enemy Heroes hit by Gall's Dread Orb receive 35% less healing for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_ogrehide.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 16,
          magicalDamage: 0
        },
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "ChoOgreHidePassive",
          "ChoOgreHide"
        ]
      }
    ],
    [
      {
        id: "ChoHeroicAbilityHammerOfTwilight",
        name: "Hammer of Twilight",
        descriptionShort: "Activate to knockback and Stun enemies",
        descriptionLong: "Activate to swing the Hammer of Twilight, dealing 150 (+4.5% / level) damage, pushing enemies away, and Stunning them for 0.75 seconds. Passive: Cho's Basic Attacks deal 25% increased damage.",
        cooldown: 15,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_hammeroftwilight.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 40
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "ChoHammerOfTwilight"
        ]
      },
      {
        id: "ChoHeroicAbilityUpheaval",
        name: "Upheaval",
        descriptionShort: "Pull enemies in a large area",
        descriptionLong: "After 1 second, pull enemies towards Cho'gall, Slowing them by 25% for 3 seconds and dealing 175 (+4% / level) damage.",
        cooldown: 40,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_upheaval.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 46.666666666666664
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "ChoUpheaval"
        ]
      }
    ],
    [
      {
        id: "ChoSurgingDash",
        name: "Surging Dash",
        descriptionShort: "Heal while Channeling Surging Fist",
        descriptionLong: "While Channeling Surging Fist, Cho heals for 150 (+4% / level) Health per second.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_moltensurge_a.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 40,
          magicalDamage: 0
        },
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "ChoSurgingFistTrigger",
          "ChoSurgingFistCast"
        ]
      },
      {
        id: "ChoTwilightVeil",
        name: "Twilight Veil",
        descriptionShort: "Activate to increase Ogre Hide Armor",
        descriptionLong: "Activate to increase the Armor bonus of Ogre Hide to 75 for 4 seconds. If cast while Ogre Rage is active, it instantly swaps to Ogre Hide.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_hardenedshield.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13"
      },
      {
        id: "ChoTalentMoltenBlock",
        name: "Molten Block",
        descriptionShort: "Activate to become Invulnerable",
        descriptionLong: "Activate to enter Stasis and gain Invulnerability for 3 seconds, damaging nearby enemies for 92 (+4% / level) damage per second.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_moltenblock.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level13"
      }
    ],
    [
      {
        id: "ChoFrenziedFists",
        name: "Frenzied Fists",
        descriptionShort: "Surging Fist increases Attack Speed",
        descriptionLong: "Gain 75% Attack Speed for 5 seconds after using Surging Fist.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_moltensurge_a.png",
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
          "ChoSurgingFistTrigger",
          "ChoSurgingFistCast"
        ]
      },
      {
        id: "ChoRunicFeedback",
        name: "Runic Feedback",
        descriptionShort: "Runic Blast reduces Rune Bomb cooldown",
        descriptionLong: "Gall's Runic Blast reduces Cho's Rune Bomb cooldown by 1 second per enemy hit, and 2 seconds for each Hero hit.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_runebomb.png",
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
          "ChoRuneBomb"
        ]
      },
      {
        id: "ChoRunedGauntlet",
        name: "Runed Gauntlet",
        descriptionShort: "Basic Attacks reduce Heroic cooldowns",
        descriptionLong: "Basic Attacks reduce the cooldown of Cho and Gall's Heroic Abilities by 6%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_cooldown.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level16"
      }
    ],
    [
      {
        id: "ChoCthunsGift",
        name: "C'Thun's Gift",
        descriptionShort: "Basic Attacks are now ranged, Slow targets",
        descriptionLong: "Cho's Basic Attack becomes ranged and Slows targets by 20% for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_hammeroftwilight.png",
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
          "ChoHammerOfTwilight"
        ],
        prerequisiteTalentIds: [
          "ChoHeroicAbilityHammerOfTwilight"
        ]
      },
      {
        id: "ChoFavorOfTheOldGods",
        name: "Favor of the Old Gods",
        descriptionShort: "Upheaval Roots Heroes",
        descriptionLong: "Upheaval Roots enemy Heroes for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_cho_upheaval.png",
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
          "ChoUpheaval"
        ],
        prerequisiteTalentIds: [
          "ChoHeroicAbilityUpheaval"
        ]
      },
      {
        id: "ChoFuelForTheFlame",
        name: "Fuel for the Flame",
        descriptionShort: "Basic Attacks explode for damage",
        descriptionLong: "Basic Attacks against enemies cause them to explode, dealing 21 (+4% / level) damage to them and 45 (+4% / level) damage to nearby enemies.  This damage is doubled against enemy Heroes.",
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
          magicalDamage: 5.6
        },
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "ChoOgreHidePassive"
        ]
      },
      {
        id: "ChoHourofTwilight",
        name: "Hour of Twilight",
        descriptionShort: "Reduced death timer",
        descriptionLong: "Decreases Cho'gall's death timer by 50%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_gall_psychoticbreak.png",
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
    tankiness: 100,
    physicalDamage: 66.47727272727272,
    mobility: 17.38446396885035,
    healing: 0,
    magicalDamage: 33.47606238082266
  }
};
      
export default chogall;