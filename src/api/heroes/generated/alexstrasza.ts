import { Hero } from '../heroes';
      
const alexstrasza: Hero = {
  name: "Alexstrasza",
  nameNormalized: "alexstrasza",
  franchise: "Warcraft",
  gender: "Female",
  size: 0.625,
  movementSpeed: 4.8398,
  health: {
    amount: 1698,
    scale: 0.04,
    regenRate: 3.539,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "AlexstraszaAttackWeapon",
      range: 5.5,
      period: 1,
      damage: 73,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/alexstrasza.png",
  abilities: [
    {
      id: "AlexstraszaDragonqueen",
      name: "Dragonqueen",
      descriptionShort: "Transform into a dragon aspect with empowered Abilities",
      descriptionLong: "After 1.25 seconds, transform into a dragon and gain 500 (+4% / level) Health. While Dragonqueen is active, Alexstrasza's Abilities are empowered, and her Basic Attacks deal 143 (+4% / level) damage and heal allied Heroes for 43 (+4% / level) in an arc in front of her. Additionally, the duration of incoming Stuns, Roots, and Slows, is reduced by 50%. Lasts 15 seconds.",
      cooldown: 150,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_dragon_queen.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 28.6,
        magicalDamage: 28.6
      }
    },
    {
      id: "AlexstraszaGiftOfLife",
      name: "Gift of Life",
      descriptionShort: "Give a portion of Health to an allied Hero",
      descriptionLong: "Sacrifice 15% of Alexstrasza's current Health, healing an allied Hero for 150% of that amount. Dragonqueen: Breath of LifeCooldown greatly reduced and does not cost Health.",
      cost: {
        type: "Health",
        amount: 15
      },
      cooldown: 7,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_gift_of_life.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 6.428571428571428,
        magicalDamage: 0
      }
    },
    {
      id: "AlexstraszaAbundance",
      name: "Abundance",
      descriptionShort: "Heal allied Heroes in an area",
      descriptionLong: "Plant a seed of healing that blooms after 3 seconds, healing nearby allied Heroes for 20% of their maximum Health. Dragonqueen: PreservationHeal area and amount greatly increased.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 14,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_abundance.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 4.928571428571429,
        magicalDamage: 0
      }
    },
    {
      id: "AlexstraszaFlameBuffet",
      name: "Flame Buffet",
      descriptionShort: "Launch a fireball that ignites enemies and can Slow them",
      descriptionLong: "Launch a fireball, Burning enemies hit for 75 (+4% / level) damage over 5.5 seconds. Hitting enemies that are already Burning deals 125 (+4% / level) bonus damage upon impact, Slows them by 40% decaying over 2 seconds, and refunds the Mana cost. Dragonqueen: Wing BuffetDamage and Knockback enemies in an arc.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 2,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_flame_buffet.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 187.5
      }
    },
    {
      id: "AlexstraszaLifebinder",
      name: "Life-Binder",
      descriptionShort: "Link Alexstrasza's Health with an ally",
      descriptionLong: "Bind Alexstrasza's life force with an allied Hero. Both her and her target are healed for 480 (+4% / level) Health over 2 seconds. Afterwards, the Hero with a lower percentage of Health is healed to the same Health percentage as the other Hero.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 50,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_life_binder.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 96,
        magicalDamage: 0
      }
    },
    {
      id: "AlexstraszaCleansingFlame",
      name: "Cleansing Flame",
      descriptionShort: "Rain healing and damaging fire from the sky",
      descriptionLong: "After 1.25 seconds, take to the sky and drop 5 fireballs over 6 seconds at the position of the mouse cursor. Fireballs deal 135 (+4% / level) damage to enemies and heal allied Heroes for 300 (+4% / level) Health.2 seconds after dropping all fireballs, Alexstrasza lands at the position of the mouse cursor.",
      cost: {
        type: "Mana",
        amount: 100
      },
      cooldown: 100,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_cleansing_flame.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 60,
        magicalDamage: 27
      }
    }
  ],
  talents: [
    [
      {
        id: "AlexstraszaLiveAndLetLiveGiftOfLife",
        name: "Live and Let Live",
        descriptionShort: "High Health reduces Gift of Life cooldown",
        descriptionLong: "While Alexstrasza is above 75% Health, Gift of Life's cooldown recharges 125% faster.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_gift_of_life.png",
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
          "AlexstraszaGiftOfLife"
        ]
      },
      {
        id: "AlexstraszaCircleOfLifeAbundance",
        name: "Circle of Life",
        descriptionShort: "Quest: Regen Globes empower Abundance",
        descriptionLong: "Quest: Collect Regeneration Globes. Reward: After collecting 10 Regeneration Globes, Abundance heals for an additional 5% maximum Health. Reward: After collecting 15 Regeneration Globes, Abundance's healing burst creates a Regeneration Globe.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_abundance.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 2,
          magicalDamage: 0
        },
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "AlexstraszaAbundance"
        ],
        isQuest: true
      },
      {
        id: "AlexstraszaFlamesOfFuryFlameBuffet",
        name: "Flames of Fury",
        descriptionShort: "Quest: Flame Buffet reduces Dragonqueen cooldown",
        descriptionLong: "Reduce the Mana cost of Flame Buffet from 50 to 40. Quest: Hit 20 Burning Heroes with Flame Buffet. Reward: Hitting a Burning Hero with Flame Buffet reduces Dragonqueen's cooldown by 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_flame_buffet.png",
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
          "AlexstraszaFlameBuffet"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "AlexstraszaSurgeOfVitalityAbundance",
        name: "Surge of Vitality",
        descriptionShort: "Abundance grants Move Speed",
        descriptionLong: "Abundance's healing burst grants allied Heroes 30% Movement Speed for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_abundance.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 6,
          magicalDamage: 0
        },
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "AlexstraszaAbundance"
        ]
      },
      {
        id: "AlexstraszaHeatExhaustionFlameBuffet",
        name: "Heat Exhaustion",
        descriptionShort: "Increase Flame Buffet Slow",
        descriptionLong: "Increase Flame Buffet's Slow from 40% to 50% and cause it to no longer decay.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_flame_buffet.png",
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
          "AlexstraszaFlameBuffet"
        ]
      },
      {
        id: "AlexstraszaExuberance",
        name: "Exuberance",
        descriptionShort: "High Health grants Move Speed",
        descriptionLong: "While above 75% Health, gain 15% Movement Speed.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_exuberance.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4"
      }
    ],
    [
      {
        id: "AlexstraszaLifeblossomGiftOfLife",
        name: "Lifeblossom",
        descriptionShort: "Gift of Life creates a Lifeblossom at high Health",
        descriptionLong: "While Alexstrasza is above 75% Health, Gift of Life creates a Lifeblossom at the target's location. Alexstrasza can collect the Lifeblossom to make her next Gift of Life cost no Health. Passive: Reduces the cost of Gift of Life to 10% of Alexstrasza's current Health.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_life_blossom.png",
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
          "AlexstraszaGiftOfLife"
        ]
      },
      {
        id: "AlexstraszaVerdantFlourishAbundance",
        name: "Verdant Flourish",
        descriptionShort: "Regen Globe and Abundance healing increased",
        descriptionLong: "Alexstrasza receives 40% more healing from Abundance and 100% more healing from Regeneration Globes.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_abundance.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 8,
          magicalDamage: 0
        },
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "AlexstraszaAbundance"
        ]
      },
      {
        id: "AlexstraszaFireWithinFlameBuffet",
        name: "Fire Within",
        descriptionShort: "Flame Buffet restores Health",
        descriptionLong: "Hitting a Burning Hero with Flame Buffet heals Alexstrasza for 10% of her maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_flame_buffet.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 2,
          magicalDamage: 0
        },
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "AlexstraszaFlameBuffet"
        ]
      }
    ],
    [
      {
        id: "AlexstraszaLifebinder",
        name: "Life-Binder",
        descriptionShort: "Link Alexstrasza's Health with an ally",
        descriptionLong: "Bind Alexstrasza's life force with an allied Hero. Both her and her target are healed for 480 (+4% / level) Health over 2 seconds. Afterwards, the Hero with a lower percentage of Health is healed to the same Health percentage as the other Hero.",
        cost: {
          type: "Mana",
          amount: 50
        },
        cooldown: 50,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_life_binder.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 96,
          magicalDamage: 0
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "AlexstraszaLifebinder"
        ]
      },
      {
        id: "AlexstraszaCleansingFlame",
        name: "Cleansing Flame",
        descriptionShort: "Rain healing and damaging fire from the sky",
        descriptionLong: "After 1.25 seconds, take to the sky and drop 5 fireballs over 6 seconds at the position of the mouse cursor. Fireballs deal 135 (+4% / level) damage to enemies and heal allied Heroes for 300 (+4% / level) Health.2 seconds after dropping all fireballs, Alexstrasza lands at the position of the mouse cursor.",
        cost: {
          type: "Mana",
          amount: 100
        },
        cooldown: 100,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_cleansing_flame.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 60,
          magicalDamage: 27
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "AlexstraszaCleansingFlame",
          "AlexstraszaCleansingFlameDragonqueen"
        ]
      }
    ],
    [
      {
        id: "AlexstraszaDragonScales",
        name: "Dragon Scales",
        descriptionShort: "Gain Armor while disabled",
        descriptionLong: "Gain 50 Armor while Stunned, Rooted, or Silenced, and for 2 seconds after. Can only trigger once every 10 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_dragon_scales.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 10,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level13"
      },
      {
        id: "AlexstraszaPacify",
        name: "Pacify",
        descriptionShort: "Slow an enemy Hero and reduce their damage",
        descriptionLong: "Activate to Slow and reduce an enemy Hero's damage by 50% for 3 seconds. Healing a Stunned, Rooted, or Silenced ally reduces Pacify's cooldown by 30 seconds.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_pacify.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 10,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13"
      },
      {
        id: "AlexstraszaLifeUnbound",
        name: "Life Unbound",
        descriptionShort: "Heal an ally and damage enemies",
        descriptionLong: "Activate to heal an allied Hero for 15% of their maximum Health and deal 200 (+4% / level) damage to nearby enemies. Healing a Stunned, Rooted, or Silenced ally reduces Life Unbound's cooldown by 30 seconds. Cannot be used on Alexstrasza.",
        cooldown: 90,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_life_unbound.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 9,
          magicalDamage: 40
        },
        order: 3,
        tier: "level13"
      }
    ],
    [
      {
        id: "AlexstraszaToughLoveGiftOfLife",
        name: "Tough Love",
        descriptionShort: "Gift of Life grants Armor at high Health",
        descriptionLong: "While Alexstrasza is above 75% Health, Gift of Life grants its target 30 Armor for 2.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_gift_of_life.png",
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
          "AlexstraszaGiftOfLife"
        ]
      },
      {
        id: "AlexstraszaOverprotectiveAbundance",
        name: "Overprotective",
        descriptionShort: "Abundance grants Shields",
        descriptionLong: "Heroes healed by Abundance gain a Shield for 3 seconds equal to 70% of the amount healed.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_abundance.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.6000000000000001,
          magicalDamage: 0
        },
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "AlexstraszaAbundance"
        ]
      },
      {
        id: "AlexstraszaDraconicDisciplineDragonqueen",
        name: "Draconic Discipline",
        descriptionShort: "Increase Dragonqueen duration",
        descriptionLong: "Increase Dragonqueen's duration by 6 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_dragon_queen.png",
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
          "AlexstraszaDragonqueen",
          "AlexstraszaDragonqueenDragonFormPassive"
        ]
      }
    ],
    [
      {
        id: "AlexstraszaRitualOfLife",
        name: "Ritual of Life",
        descriptionShort: "Life-Binder activates multiple times",
        descriptionLong: "Life-Binder activates 3 times over 6 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_life_binder.png",
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
          "AlexstraszaLifebinder"
        ],
        prerequisiteTalentIds: [
          "AlexstraszaLifebinder"
        ]
      },
      {
        id: "AlexstraszaOnRubyWingsCleansingFlame",
        name: "On Ruby Wings",
        descriptionShort: "Cleansing Flame can activate Dragonqueen",
        descriptionLong: "Healing or damaging Heroes 8 or more times with Cleansing Flame activates Dragonqueen for 15 seconds upon landing.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_cleansing_flame.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 1.6,
          magicalDamage: 0
        },
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "AlexstraszaCleansingFlame",
          "AlexstraszaCleansingFlameDragonqueen"
        ],
        prerequisiteTalentIds: [
          "AlexstraszaCleansingFlame"
        ]
      },
      {
        id: "AlexstraszaAncientFlameFlameBuffet",
        name: "Ancient Flame",
        descriptionShort: "Dragonqueen Attacks apply Flame Buffet",
        descriptionLong: "While Dragonqueen is active, Alexstrasza's Basic Attacks apply Flame Buffet.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_dragon_queen_a.png",
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
          "AlexstraszaDragonqueen",
          "AlexstraszaDragonqueenDragonFormPassive"
        ]
      },
      {
        id: "AlexstraszaBlessingOfTheRed",
        name: "Blessing of the Red",
        descriptionShort: "Grant bonus Health to an ally",
        descriptionLong: "Activate to grant an allied Hero 500 bonus maximum Health until they die. Cannot be used on Alexstrasza, or on a Hero who already has Blessing of the Red.",
        cooldown: 40,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_blessing_of_the_red.png",
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
  heroUnits: [
    {
      name: "Alexstrasza",
      nameNormalized: "heroalexstraszadragon",
      size: 1.25,
      movementSpeed: 4.8398,
      health: {
        amount: 1698,
        scale: 0.04,
        regenRate: 3.539,
        regenScale: 0.04
      },
      energy: {
        amount: 500,
        regenRate: 3,
        name: "Mana"
      },
      autoAttacks: [
        {
          nameId: "AlexstraszaDragonConeWeapon",
          range: 9,
          period: 1.25,
          damage: 143,
          damageScale: 0.04
        }
      ],
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/heroalexstraszadragon.png",
      abilities: [
        {
          id: "AlexstraszaDragonqueenDragonFormPassive",
          name: "Dragonqueen",
          descriptionShort: "Transform into a dragon aspect with empowered Abilities",
          descriptionLong: "Alexstrasza has transformed into a powerful dragon aspect, gaining 500 (+4% / level) Health, resistance to disabling effects, and empowered Basic Attacks and Abilities.",
          cooldown: null,
          category: "trait",
          type: "Trait",
          icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_dragon_queen.png",
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
          id: "AlexstraszaBreathOfLife",
          name: "Breath of Life",
          descriptionShort: "Heal an allied Hero",
          descriptionLong: "Heal an allied Hero for 20% of Alexstrasza's current Health.",
          cooldown: 3,
          category: "basic",
          type: "Q",
          icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_breath_of_life.png",
          isPassive: false,
          analysis: {
            mobility: 0,
            physicalDamage: 0,
            tankiness: 0,
            healing: 20,
            magicalDamage: 0
          }
        },
        {
          id: "AlexstraszaPreservation",
          name: "Preservation",
          descriptionShort: "Heal allied Heroes in an area",
          descriptionLong: "Plant a seed of healing that blooms after 3 seconds, healing nearby allied Heroes for 30% of their maximum Health.",
          cooldown: 16,
          category: "basic",
          type: "W",
          icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_preservation.png",
          isPassive: false,
          analysis: {
            mobility: 0,
            physicalDamage: 0,
            tankiness: 0,
            healing: 6.6,
            magicalDamage: 0
          }
        },
        {
          id: "AlexstraszaWingBuffet",
          name: "Wing Buffet",
          descriptionShort: "Damage, Knockback, and Slow enemies",
          descriptionLong: "Deal 150 (+4% / level) damage to enemies in an area, knocking them back and Slowing them by 50% for 3 seconds.",
          cooldown: 4,
          category: "basic",
          type: "E",
          icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_wing_buffet.png",
          isPassive: false,
          analysis: {
            mobility: 0,
            physicalDamage: 0,
            tankiness: 0,
            healing: 0,
            magicalDamage: 112.5
          }
        },
        {
          id: "AlexstraszaLifebinder",
          name: "Life-Binder",
          descriptionShort: "Link Alexstrasza's Health with an ally",
          descriptionLong: "Bind Alexstrasza's life force with an allied Hero. Both her and her target are healed for 480 (+4% / level) Health over 2 seconds. Afterwards, the Hero with a lower percentage of Health is healed to the same Health percentage as the other Hero.",
          cost: {
            type: "Mana",
            amount: 50
          },
          cooldown: 50,
          category: "heroic",
          type: "Heroic",
          icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_life_binder.png",
          isPassive: false,
          analysis: {
            mobility: 0,
            physicalDamage: 0,
            tankiness: 0,
            healing: 96,
            magicalDamage: 0
          }
        },
        {
          id: "AlexstraszaCleansingFlameDragonqueen",
          name: "Cleansing Flame",
          descriptionShort: "Rain healing and damaging fire from the sky",
          descriptionLong: "Take to the sky and drop 5 fireballs over 6 seconds at the position of the mouse cursor. Fireballs deal 135 (+4% / level) damage to enemies and heal allied Heroes for 300 (+4% / level) Health.2 seconds after dropping all fireballs, Alexstrasza lands at the position of the mouse cursor.",
          cost: {
            type: "Mana",
            amount: 100
          },
          cooldown: 100,
          category: "heroic",
          type: "Heroic",
          icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_alexstrasza_cleansing_flame.png",
          isPassive: false,
          analysis: {
            mobility: 0,
            physicalDamage: 0,
            tankiness: 0,
            healing: 60,
            magicalDamage: 27
          }
        }
      ],
      talents: [],
      analysis: {
        tankiness: 6.792,
        physicalDamage: 4.576,
        mobility: 24.199,
        healing: 182.6,
        magicalDamage: 139.5
      }
    }
  ],
  analysis: {
    tankiness: 51.163841807909606,
    physicalDamage: 36.5,
    mobility: 24.006944444444446,
    healing: 47.602852631396296,
    magicalDamage: 35.870108054117864
  }
};
      
export default alexstrasza;