import { Hero } from '../heroes';
      
export const deckard: Hero = {
  name: "Deckard",
  nameNormalized: "deckard",
  franchise: "Diablo",
  gender: "Male",
  size: 0.625,
  movementSpeed: 4.8398,
  health: {
    amount: 1780,
    scale: 0.04,
    regenRate: 3.707,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "DeckardHeroWeapon",
      range: 1.5,
      period: 1.1,
      damage: 63,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/deckard.png",
  abilities: [
    {
      id: "DeckardFortitudeOfTheFaithful",
      name: "Fortitude of the Faithful",
      descriptionShort: "Nearby allies grant Armor, cooldown reduction",
      descriptionLong: "When at least 1 other allied Hero is nearby, Deckard gains 10 Armor and his Basic Abilities recharge 50% faster.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_protectors_of_cain.png",
      isPassive: true,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 2,
        healing: 0,
        magicalDamage: 0
      }
    },
    {
      id: "DeckardHealingPotion",
      name: "Healing Potion",
      descriptionShort: "Throw Potions that heal allies",
      descriptionLong: "Throw a Healing Potion on the ground that heals the first allied Hero that comes in contact with it for 285 (+4% / level). Limit 5 active Potions.",
      cost: {
        type: "Mana",
        amount: 25
      },
      cooldown: 4,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_healing_potion.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 213.75,
        magicalDamage: 0
      }
    },
    {
      id: "DeckardHoradricCube",
      name: "Horadric Cube",
      descriptionShort: "Damage and Slow enemies in an area",
      descriptionLong: "Release the Horadric Cube. After 0.5 seconds it explodes, dealing 80 (+4% / level) damage to all enemies in the area and Slowing them by 35% for 2 seconds.",
      cost: {
        type: "Mana",
        amount: 35
      },
      cooldown: 12,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_horadric_cube.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 20
      }
    },
    {
      id: "DeckardScrollOfSealing",
      name: "Scroll Of Sealing",
      descriptionShort: "Damage and Root enemies in an area",
      descriptionLong: "Unfurl an enchanted scroll over 2.25 seconds, forming a triangle that deals 150 (+4% / level) damage to enemies inside and Roots them for 1.5 seconds.",
      cost: {
        type: "Mana",
        amount: 40
      },
      cooldown: 16,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_scroll_of_sealing.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 30
      }
    },
    {
      id: "DeckardStayAWhileAndListen",
      name: "Stay Awhile and Listen",
      descriptionShort: "Put enemies to Sleep with a fascinating story",
      descriptionLong: "After 1 second, Channel for 3 seconds, putting enemy Heroes in front of Deckard to Sleep while Channeling, and for 2 seconds after. Enemies can only be put to Sleep once per cast, and Sleep's effects end instantly if they take damage.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 70,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_stay_awhile_and_listen.png",
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
      id: "DeckardLorenado",
      name: "Lorenado",
      descriptionShort: "Conjure a lorenado that knocks enemies away",
      descriptionLong: "Vector TargetingAfter 1 second, create a twirling tome tornado that travels towards the targeted direction, continually knocking away enemies that come into contact with it. Deals 20 (+4% / level) damage to Heroes hit.",
      cost: {
        type: "Mana",
        amount: 35
      },
      cooldown: 30,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 1
      },
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_lorenado.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 4
      }
    }
  ],
  talents: [
    [
      {
        id: "DeckardScrollOfIdentify",
        name: "Scroll of Identify",
        descriptionShort: "Quest: Increase Scroll of Sealing damage, reduces Armor",
        descriptionLong: "Quest: Hitting an enemy Hero with Scroll of Sealing permanently increases its damage by 2. Reward: After hitting 15 Heroes, Scroll of Sealing reveals and reduces the Armor of Heroes hit by 10 for 4 seconds. Reward: After hitting 30 Heroes, this talent's Armor reduction effect is increased to 15 and its duration to 6 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_scroll_of_sealing.png",
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
          "DeckardScrollOfSealing"
        ],
        isQuest: true
      },
      {
        id: "DeckardFieldStudy",
        name: "Field Study",
        descriptionShort: "Scroll of Sealing can grant Spell Power",
        descriptionLong: "Each enemy Hero hit by Scroll of Sealing grants 20% Spell Power for 16 seconds, up to 40%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_scroll_of_sealing_a.png",
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
          "DeckardScrollOfSealing"
        ]
      },
      {
        id: "DeckardGemSapphire",
        name: "Sapphire",
        descriptionShort: "Next Horadric Cube Slow increased",
        descriptionLong: "Activate to increase the damage of the next Horadric Cube by 100% and its slow by 30%. Only 1 Gem may be active at a time.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_sapphire.png",
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
          "DeckardHoradricCube"
        ]
      }
    ],
    [
      {
        id: "DeckardPotionOfShielding",
        name: "Potion of Shielding",
        descriptionShort: "Healing Potions grant a Shield",
        descriptionLong: "Whenever an ally is healed by a Healing Potion, they gain a 140 (+4% / level) Shield for 6 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_healing_potion.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 28,
          magicalDamage: 0
        },
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "DeckardHealingPotion"
        ]
      },
      {
        id: "DeckardRejuvenationPotion",
        name: "Rejuvenation Potion",
        descriptionShort: "Healing Potions restore Mana, heal more",
        descriptionLong: "Healing Potions restore 15 Mana and heal for an additional 114 (+4% / level) over 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_rejuvination_potion.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 25.8,
          magicalDamage: 0
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "DeckardHealingPotion"
        ]
      },
      {
        id: "DeckardGemRuby",
        name: "Ruby",
        descriptionShort: "Next Horadric Cube creates Lesser Healing Potions",
        descriptionLong: "Activate to increase the damage of the next Horadric Cube by 100%  and it spawns 3 Lesser Healing Potions from each enemy Hero hit, healing allied Heroes for 250 (+4% / level) when picked up. Lesser Healing Potions last for 10 seconds. Only 1 Gem may be active at a time.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_ruby.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 52.6,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "DeckardHoradricCube"
        ]
      }
    ],
    [
      {
        id: "DeckardCubeMastery",
        name: "Cube Mastery",
        descriptionShort: "Horadric Cube reduces Scroll of Sealing cooldown",
        descriptionLong: "Reduce the Mana cost of Scroll of Sealing from 40 to 25. Each enemy Hero hit by Horadric Cube reduces the cooldown of Scroll of Sealing by 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_horadric_cube.png",
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
          "DeckardHoradricCube"
        ]
      },
      {
        id: "DeckardKanaisCube",
        name: "Kanai's Cube",
        descriptionShort: "Horadric Cube reduces Hero damage dealt",
        descriptionLong: "Horadric Cube reduces Hero damage dealt by 30% for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_kanais_cube.png",
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
          "DeckardHoradricCube"
        ]
      },
      {
        id: "DeckardGemEmerald",
        name: "Emerald",
        descriptionShort: "Next Horadric Cube reduces enemy healing received",
        descriptionLong: "Activate to increase the damage of the next Horadric Cube by 100% and have it reduce the healing received of enemy Heroes by 75% for 4 seconds. Only 1 Gem may be active at a time.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_emerald.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 20,
          magicalDamage: 0
        },
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "DeckardHoradricCube"
        ]
      }
    ],
    [
      {
        id: "DeckardStayAWhileAndListen",
        name: "Stay Awhile and Listen",
        descriptionShort: "Put enemies to Sleep with a fascinating story",
        descriptionLong: "After 1 second, Channel for 3 seconds, putting enemy Heroes in front of Deckard to Sleep while Channeling, and for 2 seconds after. Enemies can only be put to Sleep once per cast, and Sleep's effects end instantly if they take damage.",
        cost: {
          type: "Mana",
          amount: 60
        },
        cooldown: 70,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_stay_awhile_and_listen.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "DeckardStayAWhileAndListen"
        ]
      },
      {
        id: "DeckardLorenado",
        name: "Lorenado",
        descriptionShort: "Conjure a lorenado that knocks enemies away",
        descriptionLong: "Vector TargetingAfter 1 second, create a twirling tome tornado that travels towards the targeted direction, continually knocking away enemies that come into contact with it. Deals 20 (+4% / level) damage to Heroes hit.",
        cost: {
          type: "Mana",
          amount: 35
        },
        cooldown: 30,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_lorenado.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 4
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "DeckardLorenado"
        ]
      }
    ],
    [
      {
        id: "DeckardSuperHealingPotion",
        name: "Super Healing Potion",
        descriptionShort: "Healing Potions heal more after a duration",
        descriptionLong: "If a Healing Potion isn't picked up for at least 2 seconds, it heals for 100% more. Passive: Healing Potion heals for 25% more when the target is under 50% health.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_super_healing_potion.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 25.4,
          magicalDamage: 0
        },
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "DeckardHealingPotion"
        ]
      },
      {
        id: "DeckardPotionOfRevival",
        name: "Potion of Revival",
        descriptionShort: "Healing Potions heal in an area",
        descriptionLong: "When a Healing Potion is picked up, it also heals all nearby allied Heroes for 75% of the healing amount.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_unstable_healing_potion.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 15,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "DeckardHealingPotion"
        ]
      },
      {
        id: "DeckardAncientBlessings",
        name: "Ancient Blessings",
        descriptionShort: "Activate Fortitude to empower ally Attacks",
        descriptionLong: "Activate Fortitude of the Faithful to empower nearby allied Hero Basic Attacks for 8 seconds, causing them to deal an additional 62 (+4% / level) damage in an area and heal for 90 (+4% / level) for each Hero hit. This effect can only occur once per second.",
        cooldown: 45,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_angelic_conduit.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 12.4,
          magicalDamage: 12.4
        },
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "DeckardFortitudeOfTheFaithful"
        ]
      }
    ],
    [
      {
        id: "DeckardScrollOfStoneCurse",
        name: "Scroll of Stone Curse",
        descriptionShort: "Scroll of Sealing can deal more damage",
        descriptionLong: "Scroll of Sealing deals 200% more damage when hitting at least 2 Heroes.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_scroll_of_sealing.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 40
        },
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "DeckardScrollOfSealing"
        ]
      },
      {
        id: "DeckardSafetyInNumbers",
        name: "Safety in Numbers",
        descriptionShort: "Additional allies empower Fortitude of the Faithful",
        descriptionLong: "If at least 2 allied Heroes are nearby, Fortitude of the Faithful grants an additional 10 Armor, 50% Mana Regeneration per second, and causes Deckard's Basic Abilities to recharge an additional 50% faster.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_study_time.png",
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
          "DeckardAncientBlessings",
          "DeckardFortitudeOfTheFaithful"
        ]
      },
      {
        id: "DeckardHoradricStaff",
        name: "Horadric Staff",
        descriptionShort: "Basic Attacks periodically Stun Heroes",
        descriptionLong: "Every 5 seconds, Deckard's next Basic Attack Stuns Heroes for 0.75 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_horadric_staff.png",
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
        id: "DeckardRespectTheElderly",
        name: "Respect the Elderly",
        descriptionShort: "Stay Awhile and Listen Silences, Blinds",
        descriptionLong: "Stay Awhile and Listen Silences and Blinds enemies for 3 seconds upon waking up from Sleep.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_stay_awhile_and_listen.png",
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
          "DeckardStayAWhileAndListen"
        ],
        prerequisiteTalentIds: [
          "DeckardStayAWhileAndListen"
        ]
      },
      {
        id: "DeckardMorenados",
        name: "Morenados!",
        descriptionShort: "Gain Lorenado charge, reduce cooldown",
        descriptionLong: "Lorenado gains an additional charge and its cooldown is reduced by 10 seconds every time an enemy Hero is knocked back. This effect can only occur once per 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_lorenado.png",
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
          "DeckardLorenado"
        ],
        prerequisiteTalentIds: [
          "DeckardLorenado"
        ]
      },
      {
        id: "DeckardBottomlessFlask",
        name: "Bottomless Flask",
        descriptionShort: "Healing Potions recharge after use",
        descriptionLong: "After use, Healing Potions recharge after 8 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_healing_potion.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 1.6,
          magicalDamage: 0
        },
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "DeckardHealingPotion"
        ]
      },
      {
        id: "DeckardPerfectGems",
        name: "Perfect Gems",
        descriptionShort: "Reduce Gem, Horadric Cube cooldown",
        descriptionLong: "Reduce the cooldown of all Gems to 5 seconds and the cooldown of Horadric Cube by 6 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_deckard_perfect_gems.png",
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
          "DeckardHoradricCube"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 53.634651600753294,
    physicalDamage: 28.636363636363633,
    mobility: 24.006944444444446,
    healing: 51.92517915705089,
    magicalDamage: 1.9949756169646813
  }
};
