import { Hero } from '../heroes';
      
const tychus: Hero = {
  name: "Tychus",
  nameNormalized: "tychus",
  franchise: "Starcraft",
  gender: "Male",
  size: 0.8125,
  movementSpeed: 4.8398,
  health: {
    amount: 1925,
    scale: 0.04,
    regenRate: 4.0117,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "TychusMiniGunRampingSpeedWeapon",
      range: 4.5,
      period: 0.25,
      damage: 50,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/tychus.png",
  abilities: [
    {
      id: "TychusMinigun",
      name: "Minigun",
      descriptionShort: "Activate to increase Basic Attack damage to Heroes",
      descriptionLong: "Activate to have Basic Attacks against Heroes deal bonus damage equal to 2.5% of their maximum Health. Lasts 3 seconds.",
      cooldown: 12,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_minigun.png",
      isPassive: true
    },
    {
      id: "TychusOverkillTargeted",
      name: "Overkill",
      descriptionShort: "Attack one target while moving, damaging nearby enemies as well",
      descriptionLong: "Deal 552 (+4% / level) damage to the target and 276 (+4% / level) damage to nearby targets over 4 seconds. Reactivate to select a new target.  Can move and use Abilities while Channeling.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 12,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_overkill.png",
      isPassive: false
    },
    {
      id: "TychusGrenade",
      name: "Frag Grenade",
      descriptionShort: "Throw a grenade, damaging and knocking back enemies",
      descriptionLong: "Lob a grenade that deals 256 (+4% / level) damage, knocking enemies away.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 10,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_fraggrenade.png",
      isPassive: false
    },
    {
      id: "TychusRunAndGun",
      name: "Run and Gun",
      descriptionShort: "Dash a short distance",
      descriptionLong: "Dash a short distance.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 10,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 0.5
      },
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_runandgun.png",
      isPassive: false
    },
    {
      id: "TychusDrakkenLaserDrill",
      name: "Drakken Laser Drill",
      descriptionShort: "Call down a Laser to attack nearby enemies",
      descriptionLong: "Call down a Laser Drill to attack nearby enemies, dealing 142 (+4% / level) damage every second. Reactivate to assign a new target. Lasts 22 seconds.",
      cost: {
        type: "Mana",
        amount: 100
      },
      cooldown: 100,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_drakkinlaserdrill.png",
      isPassive: false
    },
    {
      id: "TychusOdinNoHealth",
      name: "Commandeer Odin",
      descriptionShort: "Call down an Odin to pilot",
      descriptionLong: "Call down an Odin to pilot. The Odin deals increased Damage, has 100% increased Basic Attack range, and uses different Abilities. The Odin has 25 Armor and lasts 23 seconds.",
      cost: {
        type: "Mana",
        amount: 100
      },
      cooldown: 100,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_commandeerodin.png",
      isPassive: false
    },
    {
      id: "TychusOdinAnnihilate",
      name: "Annihilate",
      descriptionShort: "Deals damage in a line",
      descriptionLong: "Fire the Odin's cannons in a straight line, dealing 196 (+4% / level) damage to everything in the path.",
      cooldown: 7,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_annihilate.png",
      isPassive: false
    },
    {
      id: "TychusOdinRagnarokMissilesTargeted",
      name: "Ragnarok Missiles",
      descriptionShort: "Launch a volley of missiles",
      descriptionLong: "Launches a volley of missiles at target area, dealing 132 (+4% / level) damage and slowing enemy Movement Speed by 30% for 2 seconds.",
      cooldown: 7,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_ragnarokmissiles.png",
      isPassive: false
    },
    {
      id: "TychusRunAndGunOverkill",
      name: "Run and Gun",
      descriptionShort: "Dash a short distance",
      descriptionLong: "Dash a short distance.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 10,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 0.5
      },
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_runandgun.png",
      isPassive: false
    },
    {
      id: "TychusMinigunActive",
      name: "Minigun",
      descriptionShort: "Activate to increase Basic Attack damage to Heroes",
      descriptionLong: "Activate to have Basic Attacks against Heroes deal bonus damage equal to 2.5% of their maximum Health. Lasts 3 seconds.",
      cooldown: 12,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_minigun.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "TychusMasteryQuarterback",
        name: "Quarterback",
        descriptionShort: "Increased Frag Grenade damage, range",
        descriptionLong: "Increases Frag Grenade's damage by 10% and its range by 50%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_fraggrenade.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "TychusGrenade"
        ]
      },
      {
        id: "TychusMasteryRunandGunDash",
        name: "Dash",
        descriptionShort: "Increase Run and Gun Range, Movement Speed",
        descriptionLong: "Increase the range of Run and Gun by 50%. When cast, increase Tychus's Movement Speed by 20% for 2.5 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_runandgun.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "TychusRunAndGunOverkill",
          "TychusRunAndGun"
        ]
      },
      {
        id: "TychusPressTheAdvantage",
        name: "Press the Advantage",
        descriptionShort: "Increase Tychus's Basic Attack range",
        descriptionLong: "Increase Tychus's Basic Attack range by 1.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_range.png",
        isPassive: false,
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "TychusMinigun",
          "TychusMinigunActive"
        ]
      }
    ],
    [
      {
        id: "TychusInTheRhythm",
        name: "In the Rhythm",
        descriptionShort: "Quest: Basic Attacks increase Minigun duration",
        descriptionLong: "Quest: While Minigun is active, Basic Attacks against Heroes permanently increase future Minigun durations by 0.03 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_minigun.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "TychusMinigun",
          "TychusMinigunActive"
        ],
        isQuest: true
      },
      {
        id: "TychusTheBiggerTheyAre",
        name: "The Bigger They Are...",
        descriptionShort: "Increase damage of Minigun",
        descriptionLong: "Increase the damage bonus to 4% while enemy Heroes are above 30% Health, but Minigun no longer has any effect on targets below 30%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_minigun_a.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "TychusMinigun",
          "TychusMinigunActive"
        ]
      },
      {
        id: "TychusMasterAssassin",
        name: "Master Assassin",
        descriptionShort: "Quest: Takedowns increase Attack Speed",
        descriptionLong: "Passive: Increase Tychus's Attack Speed by 10%. Reward: After getting 15 Takedowns, Tychus's Attack Speed is increased by an additional 15%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_speed.png",
        isPassive: false,
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "TychusMinigun",
          "TychusMinigunActive"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "TychusMeltingPoint",
        name: "Melting Point",
        descriptionShort: "Frag Grenade deals additional damage over time",
        descriptionLong: "Enemies hit by Frag Grenade take an additional 75 (+4% / level) damage over 3 seconds. This damage is increased by 100% against Minions, Mercenaries, and Monsters.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_fraggrenade.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "TychusGrenade"
        ]
      },
      {
        id: "TychusCombatTactician",
        name: "Combat Tactician",
        descriptionShort: "Run and Gun reduces Minigun cooldown",
        descriptionLong: "Reduce the cooldown of Minigun by 4 seconds. Reduce the cooldown of Minigun by an additional 4 seconds after using Run and Gun.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_minigun.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "TychusMinigun",
          "TychusMinigunActive"
        ]
      },
      {
        id: "TychusRelentlessSoldier",
        name: "Relentless Soldier",
        descriptionShort: "Stuns and Roots grant Armor",
        descriptionLong: "Being Stunned or Rooted grants 30 Armor for 3 seconds, reducing damage taken by 30%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_relentless.png",
        isPassive: false,
        order: 3,
        tier: "level7"
      }
    ],
    [
      {
        id: "TychusHeroicAbilityCommandeerOdin",
        name: "Commandeer Odin",
        descriptionShort: "Call down an Odin to pilot",
        descriptionLong: "Call down an Odin to pilot. The Odin deals increased Damage, has 100% increased Basic Attack range, and uses different Abilities. The Odin has 25 Armor and lasts 23 seconds.",
        cost: {
          type: "Mana",
          amount: 100
        },
        cooldown: 100,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_commandeerodin.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "TychusOdinNoHealth"
        ]
      },
      {
        id: "TychusHeroicAbilityDrakkenLaserDrill",
        name: "Drakken Laser Drill",
        descriptionShort: "Call down a Laser to attack nearby enemies",
        descriptionLong: "Call down a Laser Drill to attack nearby enemies, dealing 142 (+4% / level) damage every second. Reactivate to assign a new target. Lasts 22 seconds.",
        cost: {
          type: "Mana",
          amount: 100
        },
        cooldown: 100,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_drakkinlaserdrill.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "TychusDrakkenLaserDrill"
        ]
      }
    ],
    [
      {
        id: "TychusMasterySprayNPray",
        name: "Spray 'n' Pray",
        descriptionShort: "Overkill Slows, has increased range",
        descriptionLong: "Overkill Slows enemy Movement Speed by 25% and its range is increased by 25%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_overkill.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "TychusOverkillTargeted"
        ]
      },
      {
        id: "TychusThatsTheStuff",
        name: "That's the Stuff!",
        descriptionShort: "Minigun damage heals Tychus",
        descriptionLong: "Minigun heals Tychus for 100% of the bonus damage dealt after it expires.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_minigun.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "TychusMinigun",
          "TychusMinigunActive"
        ]
      },
      {
        id: "TychusNeosteelCoating",
        name: "Neosteel Coating",
        descriptionShort: "Activate to gain Spell Armor",
        descriptionLong: "Activate to gain 75 Spell Armor for 4 seconds, reducing Ability Damage taken by 75%.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_temp_btn-upgrade-terran-neosteelframe.png",
        isPassive: false,
        order: 3,
        tier: "level13"
      }
    ],
    [
      {
        id: "TychusMasteryOverkillArmorPiercingRounds",
        name: "Armor Piercing Rounds",
        descriptionShort: "Consecutive Overkill hits increase damage",
        descriptionLong: "Each time Overkill hits an enemy, its damage against them is increased by 15%, stacking up to 60% bonus damage.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_overkill.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "TychusOverkillTargeted"
        ]
      },
      {
        id: "TychusMasteryFragGrenadeTitanGrenade",
        name: "Titan Grenade",
        descriptionShort: "Increases Frag Grenade damage to Heroes",
        descriptionLong: "Frag Grenade deals bonus damage to Heroes equal to 5% of their maximum Health.  Each enemy Hero hit by Frag Grenade reduces its cooldown by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_fraggrenade.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "TychusGrenade"
        ]
      },
      {
        id: "TychusSizzlinAttacks",
        name: "Sizzlin' Attacks",
        descriptionShort: "Basic Attacks deal more damage to Heroes",
        descriptionLong: "Basic Attacks deal bonus damage to Heroes equal to 1% of their maximum Health. Stacks with Minigun.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_damage.png",
        isPassive: false,
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "TychusMinigun",
          "TychusMinigunActive"
        ]
      }
    ],
    [
      {
        id: "TychusMasteryOdinBigRedButton",
        name: "Big Red Button",
        descriptionShort: "Increases Odin duration and fires Nukes",
        descriptionLong: "Odin lasts 50% longer and Ragnarok Missiles also launches a Nuclear Missile which lands 2.5 seconds later, dealing 319 (+4% / level) damage in its area.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_commandeerodin.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "TychusOdinNoHealth",
          "TychusOdinRagnarokMissilesTargeted"
        ],
        prerequisiteTalentIds: [
          "TychusHeroicAbilityCommandeerOdin"
        ]
      },
      {
        id: "TychusMasteryDrakkenLaserFocusingDiodes",
        name: "Focusing Diodes",
        descriptionShort: "Increase Laser Drill range and damage",
        descriptionLong: "Increases the range of the Drakken Laser Drill by 50%.  Deals increasing damage the longer it remains on a single target, up to 100% extra damage.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_drakkinlaserdrill.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "TychusDrakkenLaserDrill"
        ],
        prerequisiteTalentIds: [
          "TychusHeroicAbilityDrakkenLaserDrill"
        ]
      },
      {
        id: "TychusCanDoThisAllDayOverkillTalent",
        name: "Can Do This All Day",
        descriptionShort: "Reduce Overkill cooldown, gain Armor",
        descriptionLong: "Reduce Overkill's cooldown by 5 seconds.  While Channeling Overkill, Tychus gains 40 Armor.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_overkill.png",
        isPassive: false,
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "TychusOverkillTargeted"
        ]
      },
      {
        id: "TychusRunAndGunBobAndWeave",
        name: "Bob and Weave",
        descriptionShort: "Adds Run and Gun charges and reduces Mana cost",
        descriptionLong: "Run and Gun and Odin's Thrusters gain 2 additional charges and reduces Run and Gun's Mana cost from 50 to 25.  After using Run and Gun, increase Tychus's Basic Attack range by 1.5 for 4 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tychus_runandgun.png",
        isPassive: false,
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "TychusRunAndGunOverkill",
          "TychusRunAndGun",
          "TychusOdinThrusters"
        ]
      }
    ]
  ]
};
      
export default tychus;