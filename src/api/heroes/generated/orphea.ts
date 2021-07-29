import { Hero } from '../heroes';
      
const orphea: Hero = {
  name: "Orphea",
  nameNormalized: "orphea",
  franchise: "Nexus",
  gender: "Female",
  size: 0.625,
  movementSpeed: 4.8398,
  health: {
    amount: 1525,
    scale: 0.04,
    regenRate: 3.1757,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "OrpheaOverflowingChaosWeapon",
      range: 5.5,
      period: 0.8332,
      damage: 88,
      damageScale: 0.04
    },
    {
      nameId: "OrpheaWeapon",
      range: 5.5,
      period: 0.8332,
      damage: 88,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/orphea.png",
  abilities: [
    {
      id: "OrpheaOverflowingChaos",
      name: "Overflowing Chaos",
      descriptionShort: "Basic Abilities against enemy Heroes grant Chaos",
      descriptionLong: "Hitting an enemy Hero with a Basic Ability grants 1 Chaos. Chaos can stack up to 3 times.While Orphea has Chaos, her Basic Attacks against Heroes consume all Chaos, dealing 50% increased damage per stack, and healing for 100% of the damage dealt.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_trait.png",
      isPassive: true
    },
    {
      id: "OrpheaShadowWaltz",
      name: "Shadow Waltz",
      descriptionShort: "Damage enemies in a line and dash after hitting a Hero",
      descriptionLong: "After 0.5 seconds, deal 165 (+4% / level) damage to enemies in a line. Hitting a Hero with Shadow Waltz sets its cooldown to 2 seconds, refunds 35 Mana, and causes Orphea to dash a short distance upon moving.",
      cost: {
        type: "Mana",
        amount: 35
      },
      cooldown: 5,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_q.png",
      isPassive: false
    },
    {
      id: "OrpheaChomp",
      name: "Chomp",
      descriptionShort: "Damage enemies in front of Orphea",
      descriptionLong: "After 0.625 seconds, deal 305 (+4% / level) damage to nearby enemies in front of Orphea.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 10,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_w.png",
      isPassive: false
    },
    {
      id: "OrpheaDread",
      name: "Dread",
      descriptionShort: "Damage enemies in a line, erupting after a short delay",
      descriptionLong: "Release a wave of dread that deals 85 (+4% / level) damage to enemies hit.  Dread erupts 0.75 seconds after reaching the end of its path, dealing 175 (+4% / level) damage. Enemies hit by Dread's wave or eruption are Slowed by 25% for 2 seconds.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 14,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_e.png",
      isPassive: false
    },
    {
      id: "OrpheaCrushingJaws",
      name: "Crushing Jaws",
      descriptionShort: "Pull, damage, and Stun enemies in an area",
      descriptionLong: "After 1.25 seconds, pull enemies in an area towards the center, dealing 250 (+4% / level) damage and Stunning them for 0.5 seconds.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 70,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_ult_thrasher.png",
      isPassive: false
    },
    {
      id: "OrpheaEternalFeast",
      name: "Eternal Feast",
      descriptionShort: "Damage enemies in an area repeatedly",
      descriptionLong: "After 1.5 seconds, deal 210 (+4% / level) damage in an area. Eternal Feast repeats every 1 second as long as it hits an enemy Hero.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 50,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_ult_darkfall.png",
      isPassive: false
    },
    {
      id: "OrpheaOverflowingChaosInvasiveMiasma",
      name: "Overflowing Chaos",
      descriptionShort: "Basic Abilities against enemy Heroes grant Chaos",
      descriptionLong: "Hitting an enemy Hero with a Basic Ability grants 1 Chaos. Chaos can stack up to 3 times.While Orphea has Chaos, her Basic Attacks against Heroes consumes all Chaos, dealing 50% increased damage per stack, and healing for 100% of the damage dealt.",
      cooldown: 10,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_trait.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "OrpheaEnPointe",
        name: "En Pointe",
        descriptionShort: "Extra Shadow Waltz damage at its end",
        descriptionLong: "Shadow Waltz deals an increased 90% damage to enemies hit by its end.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_q.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "OrpheaShadowWaltz"
        ]
      },
      {
        id: "OrpheaGrowingNightmare",
        name: "Growing Nightmare",
        descriptionShort: "Quest: Empower Dread eruption",
        descriptionLong: "Increase Dread's eruption damage by 40%.  Quest: Hit 3 enemy Heroes with a single cast of Dread's eruption.Reward: Permanently increase Dread's eruption damage by an additional 25% and increase the Slow amount of Dread's eruption by 15%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_e.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "OrpheaDread"
        ],
        isQuest: true
      },
      {
        id: "OrpheaAncestralStrength",
        name: "Ancestral Strength",
        descriptionShort: "Abilities deal more damage to disabled enemies",
        descriptionLong: "Non-Heroic Abilities deal 15% more damage to Stunned, Rooted, Silenced or Slowed enemies. Enemy Heroes who are hit with Overflowing Chaos are Slowed by 20% for 2.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_trait.png",
        isPassive: false,
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "OrpheaOverflowingChaosInvasiveMiasma",
          "OrpheaOverflowingChaos"
        ]
      }
    ],
    [
      {
        id: "OrpheaAllegrissimo",
        name: "Allegrissimo",
        descriptionShort: "Reduce Shadow Waltz cooldown",
        descriptionLong: "Reduce the cooldown of Shadow Waltz by 1 second.Hitting Heroes with the end of Shadow Waltz sets its cooldown to 0.75 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_q.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "OrpheaShadowWaltz"
        ]
      },
      {
        id: "OrpheaBackbiter",
        name: "Backbiter",
        descriptionShort: "Orphea dashes back after Chomp, gain Health",
        descriptionLong: "If Chomp hits a Hero, Orphea immediately dashes a short distance backwards.Passive: Gain 15% maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_w.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "OrpheaChomp"
        ]
      },
      {
        id: "OrpheaChaoticAssault",
        name: "Chaotic Assault",
        descriptionShort: "Increase Overflowing Chaos damage",
        descriptionLong: "Basic Attacks against enemy Heroes while having 3 stacks of Chaos deal an additional 75% bonus damage.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_trait.png",
        isPassive: false,
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "OrpheaOverflowingChaosInvasiveMiasma",
          "OrpheaOverflowingChaos"
        ]
      }
    ],
    [
      {
        id: "OrpheaInsatiable",
        name: "Insatiable",
        descriptionShort: "Hitting a Hero reduces Chomp's cooldown",
        descriptionLong: "Hitting a Hero with Chomp sets its cooldown to 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_w.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "OrpheaChomp"
        ]
      },
      {
        id: "OrpheaRavenousHunger",
        name: "Ravenous Hunger",
        descriptionShort: "Quest: Chomp kills increase damage, heals",
        descriptionLong: "Quest: Minions that die within 1.5 seconds of being hit by Chomp permanently increase its damage by 2 and heal Orphea for 60 (+4% / level). Heroes that die increase its damage by 40 and heal Orphea for 25% of her maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_w_2.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "OrpheaChomp"
        ],
        isQuest: true
      },
      {
        id: "OrpheaMindDevourer",
        name: "Mind Devourer",
        descriptionShort: "Quest: Increase Dread damage, reduce cooldown",
        descriptionLong: "Quest: Hitting Heroes with Dread increases its damage by 5, up to 150.Reward: After hitting 30 Heroes, hitting an enemy Hero with Dread's eruption sets its cooldown to 6 seconds and refunds 50 Mana.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_e.png",
        isPassive: false,
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "OrpheaDread"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "OrpheaEternalFeast",
        name: "Eternal Feast",
        descriptionShort: "Damage enemies in an area repeatedly",
        descriptionLong: "After 1.5 seconds, deal 210 (+4% / level) damage in an area. Eternal Feast repeats every 1 second as long as it hits an enemy Hero.",
        cost: {
          type: "Mana",
          amount: 75
        },
        cooldown: 50,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_ult_darkfall.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "OrpheaEternalFeast"
        ]
      },
      {
        id: "OrpheaCrushingJaws",
        name: "Crushing Jaws",
        descriptionShort: "Pull, damage, and Stun enemies in an area",
        descriptionLong: "After 1.25 seconds, pull enemies in an area towards the center, dealing 250 (+4% / level) damage and Stunning them for 0.5 seconds.",
        cost: {
          type: "Mana",
          amount: 75
        },
        cooldown: 70,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_ult_thrasher.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "OrpheaCrushingJaws"
        ]
      }
    ],
    [
      {
        id: "OrpheaDetermination",
        name: "Determination",
        descriptionShort: "Shadow Waltz grants Spell Armor after dashing",
        descriptionLong: "After dashing with Shadow Waltz, Orphea gains 50 Spell Armor against the next enemy Ability, stacking up to 2 times. While Orphea has Determination, her Physical damage is increased by 15%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_q.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "OrpheaShadowWaltz"
        ]
      },
      {
        id: "OrpheaAbyssalSymbiosis",
        name: "Abyssal Symbiosis",
        descriptionShort: "Chomp hitting Heroes grants more Chaos, Shield",
        descriptionLong: "Hitting a Hero with Chomp instantly grants Orphea maximum Chaos and a 170 (+4% / level) Shield for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_w.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "OrpheaChomp"
        ]
      },
      {
        id: "OrpheaInvasiveMiasma",
        name: "Invasive Miasma",
        descriptionShort: "Activate Overflowing Chaos to damage, heal",
        descriptionLong: "Activate to deal 150 (+4% / level) damage to all nearby enemies after 2 seconds. For each Hero hit, heal for 182 (+4% / level) and gain 1 Chaos.",
        cooldown: 10,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_trait.png",
        isPassive: false,
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "OrpheaOverflowingChaosInvasiveMiasma"
        ]
      }
    ],
    [
      {
        id: "OrpheaBondOfAnguish",
        name: "Bond of Anguish",
        descriptionShort: "Shadow Waltz steals percent Health",
        descriptionLong: "Shadow Waltz deals bonus damage to Heroes equal to 3% of their maximum Health, healing Orphea for 50% of damage dealt.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_q.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "OrpheaShadowWaltz"
        ]
      },
      {
        id: "OrpheaDeadMagic",
        name: "Dead Magic",
        descriptionShort: "Chaos Basic Attacks ignore Armor, area damage",
        descriptionLong: "Basic Attacks that consume Chaos ignore Armor and deal 90 (+4% / level) Spell Damage to the target and all enemies around them.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_trait.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "OrpheaOverflowingChaosInvasiveMiasma",
          "OrpheaOverflowingChaos"
        ]
      },
      {
        id: "OrpheaLurkingTerror",
        name: "Lurking Terror",
        descriptionShort: "Activate to cast Chomp from Dread's eruption",
        descriptionLong: "After Dread erupts and for 2 seconds after, activate to cast Chomp from the eruption area. Enemy Heroes hit by this Chomp are Slowed by 70% for 1.5 seconds.",
        cost: {
          type: "Mana",
          amount: 60
        },
        cooldown: 10,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_e_terror.png",
        isPassive: false,
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "OrpheaDread"
        ]
      }
    ],
    [
      {
        id: "OrpheaMonsterWithin",
        name: "Monster Within",
        descriptionShort: "Eternal Feast grants Chaos, reduce cooldowns",
        descriptionLong: "Eternal Feast grants 1 Chaos each time it hits a Hero. While Eternal Feast is active, Orphea's Basic Abilities recharge 150% faster.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_ult_darkfall.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "OrpheaEternalFeast"
        ],
        prerequisiteTalentIds: [
          "OrpheaEternalFeast"
        ]
      },
      {
        id: "OrpheaEngulfingOblivion",
        name: "Engulfing Oblivion",
        descriptionShort: "Crushing Jaws lowers Armor, reduces cooldown",
        descriptionLong: "Crushing Jaws reduces the Armor of Heroes hit by 25 for 3 seconds. Takedowns set its cooldown to 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_ult_thrasher.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "OrpheaCrushingJaws"
        ],
        prerequisiteTalentIds: [
          "OrpheaCrushingJaws"
        ]
      },
      {
        id: "OrpheaEldritchConduit",
        name: "Eldritch Conduit",
        descriptionShort: "Consuming Chaos grants Spell Power",
        descriptionLong: "Each Chaos consumed increases Orphea's Spell Power by 3%, up to 30%. After reaching the maximum bonus, the Spell Power is increased by an additional 30%. Lasts 10 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_trait.png",
        isPassive: false,
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "OrpheaOverflowingChaosInvasiveMiasma",
          "OrpheaOverflowingChaos"
        ]
      },
      {
        id: "OrpheaFinalToccata",
        name: "Final Toccata",
        descriptionShort: "Shadow Waltz cooldown resets after dashing",
        descriptionLong: "Activate to instantly reset the cooldown of Shadow Waltz. For the next 6 seconds, dashing with Shadow Waltz resets its cooldown.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_orphea_reset.png",
        isPassive: false,
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "OrpheaShadowWaltz"
        ]
      }
    ]
  ]
};
      
export default orphea;