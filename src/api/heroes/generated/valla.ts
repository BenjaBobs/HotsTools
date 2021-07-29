import { Hero } from '../heroes';
      
const valla: Hero = {
  name: "Valla",
  nameNormalized: "valla",
  franchise: "Diablo",
  gender: "Female",
  size: 0.625,
  movementSpeed: 4.8398,
  health: {
    amount: 1340,
    scale: 0.04,
    regenRate: 2.793,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroDemonHunter",
      range: 5.5,
      period: 0.6,
      damage: 75,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/valla.png",
  abilities: [
    {
      id: "DemonHunterHatred",
      name: "Hatred",
      descriptionShort: "Basic Attacks grant bonus Attack Damage and Move Speed temporarily",
      descriptionLong: "Basic Attacks grant a stack of Hatred, up to 10. Each Hatred stack increases Basic Attack damage by 8% and Movement Speed by 1%. Lasts 6 seconds.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_hatred.png",
      isPassive: true
    },
    {
      id: "DemonHunterHungeringArrow",
      name: "Hungering Arrow",
      descriptionShort: "Fire an arrow which seeks out and strikes multiple targets",
      descriptionLong: "Fire an arrow that deals 140 (+4% / level) damage to the first target hit, then seeks up to 2 additional enemies, prioritizing Heroes, dealing 80 (+4% / level) damage. Can hit an enemy multiple times.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 10,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_hungeringarrow.png",
      isPassive: false
    },
    {
      id: "DemonHunterMultishot",
      name: "Multishot",
      descriptionShort: "Damage enemies in an area",
      descriptionLong: "Deal 172 (+4% / level) damage to enemies within the target area.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 12,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_multishot.png",
      isPassive: false
    },
    {
      id: "DemonHunterVault",
      name: "Vault",
      descriptionShort: "Dash to a location",
      descriptionLong: "Dash to the target area. Valla's next Basic Attack within 2 seconds deals 6% increased damage per stack of Hatred.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 10,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 2
      },
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_vault.png",
      isPassive: false
    },
    {
      id: "DemonHunterStrafe",
      name: "Strafe",
      descriptionShort: "Unleashes a flurry of arrows at enemies",
      descriptionLong: "Rapidly attack enemies within 10 range for 60 (+4% / level) damage per hit, prioritizing Heroes over Minions. Valla is able to move and use Vault while strafing. Lasts for 4 seconds.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_strafe.png",
      isPassive: false
    },
    {
      id: "DemonHunterRainOfVengeance",
      name: "Rain of Vengeance",
      descriptionShort: "Area attack that stuns enemies",
      descriptionLong: "Launch a wave of Shadow Beasts that deals 250 (+4% / level) damage and stuns enemies in the target area for 0.5 seconds.Stores up to 2 charges.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 50,
      charges: {
        chargesMax: 2,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 1
      },
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_rainofvengeance.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "DemonHunterMasteryMonsterHunterHungeringArrow",
        name: "Monster Hunter",
        descriptionShort: "Reduces Hungering Arrow Mana cost and increases non-Hero damage",
        descriptionLong: "Reduces the Mana cost of Hungering Arrow by 40 and increases the damage it deals to Minions, Mercenaries, and Monsters by 150%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_hungeringarrow.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "DemonHunterHungeringArrow"
        ]
      },
      {
        id: "DemonHunterMasteryCaltrops",
        name: "Caltrops",
        descriptionShort: "Drop Caltrops while Vaulting Quest: Maintain Hatred to empower Vault",
        descriptionLong: "Drop 3 Caltrops while Vaulting. Caltrops do 60 (+4% / level) damage and Slow enemies by 40% for 1 second.Quest: Spend 160 seconds at 10 stacks of Hatred.Reward: Vault cooldown is reduced by 5 seconds and its Mana cost is reduced from 50 to 25.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 2
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_vault.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "DemonHunterVault"
        ],
        isQuest: true
      },
      {
        id: "DemonHunterCombatStyleHotPursuit",
        name: "Hot Pursuit",
        descriptionShort: "Max Hatred increases Movement Speed and Mana Regen",
        descriptionLong: "When at 10 stacks of Hatred, the Movement Speed bonus increases to 20% total and Valla gains 4 Mana per second.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_hatred.png",
        isPassive: false,
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "DemonHunterHatred"
        ]
      }
    ],
    [
      {
        id: "DemonHunterMasteryPuncturingArrow",
        name: "Puncturing Arrow",
        descriptionShort: "Quest: Hitting Heroes empowers Hungering Arrow",
        descriptionLong: "Quest: Hitting an enemy Hero with the initial impact of Hungering Arrow increases its damage by 5, up to a maximum of 100.Reward: After gaining 100 bonus damage, gain an additional 75 bonus damage and Hungering Arrow also bounces 1 additional time.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_hungeringarrow.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "DemonHunterHungeringArrow"
        ],
        isQuest: true
      },
      {
        id: "DemonHunterPunishment",
        name: "Punishment",
        descriptionShort: "Hatred increases Multishot damage",
        descriptionLong: "Each stack of Hatred increases the damage of Multishot by 4%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_multishot.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "DemonHunterMultishot"
        ]
      },
      {
        id: "DemonHunterCreedoftheHunter",
        name: "Creed of the Hunter",
        descriptionShort: "Increases Attack SpeedQuest: Attacking Heroes empowers Hatred",
        descriptionLong: "Increases Attack Speed by 10%.Quest: Use 100 Basic Attacks against Heroes.Reward: Hatred grants an additional 2% Basic Attack Damage per stack.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_hatred.png",
        isPassive: false,
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "DemonHunterHatred"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "DemonHunterMasteryArsenal",
        name: "Arsenal",
        descriptionShort: "Multishot launches grenades",
        descriptionLong: "Multishot also fires 3 grenades which deal 120 (+4% / level) damage. Each enemy Hero hit by a grenade reduces the cooldown of Multishot by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_multishot.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "DemonHunterMultishot"
        ]
      },
      {
        id: "DemonHunterDeathDealer",
        name: "Death Dealer",
        descriptionShort: "Increases Vault Basic Attack damage bonus",
        descriptionLong: "Increases Vault Basic Attack damage bonus from 6% to 14% per stack of Hatred. If this attack kills its victim, the Mana cost and cooldown of Vault are refunded.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 2
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_vault.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "DemonHunterVault"
        ]
      },
      {
        id: "DemonHunterMasteryRepeatingArrowVault",
        name: "Repeating Arrow",
        descriptionShort: "Vault refreshes Hungering Arrow",
        descriptionLong: "The cooldown for Hungering Arrow is reset when Vault is used.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 2
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_vault_a.png",
        isPassive: false,
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "DemonHunterVault"
        ]
      }
    ],
    [
      {
        id: "DemonHunterHeroicAbilityStrafe",
        name: "Strafe",
        descriptionShort: "Unleashes a flurry of arrows at enemies",
        descriptionLong: "Rapidly attack enemies within 10 range for 60 (+4% / level) damage per hit, prioritizing Heroes over Minions. Valla is able to move and use Vault while strafing. Lasts for 4 seconds.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_strafe.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "DemonHunterStrafe"
        ]
      },
      {
        id: "DemonHunterHeroicAbilityRainofVengeance",
        name: "Rain of Vengeance",
        descriptionShort: "Area attack that stuns enemies",
        descriptionLong: "Launch a wave of Shadow Beasts that deals 250 (+4% / level) damage and stuns enemies in the target area for 0.5 seconds.Stores up to 2 charges.",
        cost: {
          type: "Mana",
          amount: 50
        },
        cooldown: 50,
        charges: {
          chargesMax: 2,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_rainofvengeance.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "DemonHunterRainOfVengeance"
        ]
      }
    ],
    [
      {
        id: "DemonHunterMasterySiphoningArrow",
        name: "Siphoning Arrow",
        descriptionShort: "Hungering Arrow returns damage as Health",
        descriptionLong: "Valla heals for 75% of the damage dealt to Heroes by Hungering Arrow.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_hungeringarrow.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "DemonHunterHungeringArrow"
        ]
      },
      {
        id: "DemonHunterCombatStyleTemperedByDiscipline",
        name: "Tempered by Discipline",
        descriptionShort: "Max Hatred grants healing on Basic Attacks",
        descriptionLong: "While at 10 stacks of Hatred, Basic Attacks heal for 25% of the damage dealt.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_hatred.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "DemonHunterHatred"
        ]
      },
      {
        id: "DemonHunterGloom",
        name: "Gloom",
        descriptionShort: "Consume Hatred to gain Spell Armor",
        descriptionLong: "Activate to consume all Hatred, granting 3 Spell Armor per Hatred consumed for 5 seconds.Passive: Permanently gain 20 Spell Armor, reducing Ability Damage taken by 20%.",
        cooldown: 5,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_hatred_var1.png",
        isPassive: false,
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "DemonHunterHatred"
        ]
      }
    ],
    [
      {
        id: "DemonHunterMasteryFrostShot",
        name: "Frost Shot",
        descriptionShort: "Multishot slows enemies and has increased range",
        descriptionLong: "Increases the range of Multishot by 20% and it also slows by 25% for 1.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_multishot.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "DemonHunterMultishot"
        ]
      },
      {
        id: "DemonHunterSeethingHatred",
        name: "Seething Hatred",
        descriptionShort: "Max Hatred grants Spell Power, gain Hatred faster",
        descriptionLong: "While at 10 stacks of Hatred, gain 15% Spell Power. Basic Attacks now grant 2 stacks of Hatred.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_hatred.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "DemonHunterHatred"
        ]
      },
      {
        id: "DemonHunterManticore",
        name: "Manticore",
        descriptionShort: "Consecutive Basic Attacks against Heroes are empowered",
        descriptionLong: "Every 3rd Basic Attack against the same Heroic target deals an additional 5% of their maximum Health as damage.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_damage.png",
        isPassive: false,
        order: 3,
        tier: "level16"
      }
    ],
    [
      {
        id: "DemonHunterMasteryDeathSiphon",
        name: "Death Siphon",
        descriptionShort: "Fires penetrating bolts and heals",
        descriptionLong: "Strafe also fires penetrating bolts in a line for 34 (+4% / level) damage every 0.25 seconds. 25% of the damage dealt with Strafe is returned as Health.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_strafe.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "DemonHunterStrafe"
        ],
        prerequisiteTalentIds: [
          "DemonHunterHeroicAbilityStrafe"
        ]
      },
      {
        id: "DemonHunterMasteryStormofVengeance",
        name: "Storm of Vengeance",
        descriptionShort: "Basic Attacks reduce Cooldown",
        descriptionLong: "Basic Attacks reduce the charge cooldown of Rain of Vengeance by 5 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_rainofvengeance.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "DemonHunterRainOfVengeance"
        ],
        prerequisiteTalentIds: [
          "DemonHunterHeroicAbilityRainofVengeance"
        ]
      },
      {
        id: "DemonHunterCombatStyleRancor",
        name: "Rancor",
        descriptionShort: "Hatred increases Attack Speed",
        descriptionLong: "Each stack of Hatred also increases Attack Speed by 2%. While at 10 stacks of Hatred, gain an additional 30% Attack Speed.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valla_hatred.png",
        isPassive: false,
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "DemonHunterHatred"
        ]
      },
      {
        id: "DemonHunterFarflightQuiver",
        name: "Farflight Quiver",
        descriptionShort: "Increases Basic Attack range",
        descriptionLong: "Increases Valla's Basic Attack range by 2.2.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_range.png",
        isPassive: false,
        order: 4,
        tier: "level20"
      }
    ]
  ]
};
      
export default valla;