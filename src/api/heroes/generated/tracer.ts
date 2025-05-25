import { Hero } from '../heroes';
      
export const tracer: Hero = {
  name: "Tracer",
  nameNormalized: "tracer",
  franchise: "Overwatch",
  gender: "Female",
  size: 0.625,
  movementSpeed: 4.8398,
  health: {
    amount: 1330,
    scale: 0.04,
    regenRate: 2.707,
    regenScale: 0.04
  },
  energy: {
    amount: 20,
    regenRate: 0,
    name: "Ammo"
  },
  autoAttacks: [
    {
      nameId: "TracerHeroWeapon",
      range: 5,
      period: 0.125,
      damage: 23,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/tracer.png",
  abilities: [
    {
      id: "TracerReload",
      name: "Reload",
      descriptionShort: "Tracer can move while Basic Attacking; Basic Attacks cost ammo",
      descriptionLong: "Tracer can Basic Attack while moving, and after attacking 10 times she needs to reload over 0.75 seconds. Tracer can manually reload early by activating Reload. Basic Attacks heal Tracer for 10% of the damage dealt.",
      cooldown: 1,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_reload.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 225,
        magicalDamage: 0
      }
    },
    {
      id: "TracerBlink",
      name: "Blink",
      descriptionShort: "Dash towards an area",
      descriptionLong: "Dash towards an area. Stores up to 3 charges.",
      cooldown: 9,
      charges: {
        chargesMax: 3,
        chargesInitial: 3,
        chargeCost: 1,
        recastCooldown: 0.125
      },
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_blink_empty.png",
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
      id: "TracerMelee",
      name: "Melee",
      descriptionShort: "Attack a nearby enemy",
      descriptionLong: "Deal 220 (+4% / level) damage to a nearby enemy, prioritizing Heroes. Gain 5% Pulse Bomb charge when using Melee against an enemy, and 10% against Heroes.",
      cooldown: 8,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 3
      },
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_melee.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 82.5
      }
    },
    {
      id: "TracerRecall",
      name: "Recall",
      descriptionShort: "Return to a recent location and remove negative effects",
      descriptionLong: "After 1.25 seconds, Tracer returns to the position she was at 2 seconds prior to casting, refilling her ammo, and removing all negative status effects from herself.",
      cooldown: 20,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_recall.png",
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
      id: "TracerPulseBomb",
      name: "Pulse Bomb",
      descriptionShort: "Attach a bomb to enemies that deals heavy damage",
      descriptionLong: "Fire a short range bomb that can attach to an enemy if it hits them. The bomb explodes after 2 seconds dealing 298 (+6% / level) damage to them and 149 (+6% / level) damage to other nearby enemies. This ability is slowly charged over time by dealing damage to enemies with Basic Attacks and Melee.",
      cooldown: null,
      charges: {
        chargesMax: 100,
        chargesInitial: 0,
        chargeCost: 100
      },
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_pulsebomb.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 59.6
      }
    }
  ],
  talents: [
    [
      {
        id: "TracerOneTwoPunch",
        name: "One-Two Punch",
        descriptionShort: "Melee gains an additional charge, reduced cooldown",
        descriptionLong: "Reduce the cooldown of Melee by 1 second and it gains an additional charge.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_melee.png",
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
          "TracerMelee"
        ]
      },
      {
        id: "TracerPartingGift",
        name: "Parting Gift",
        descriptionShort: "Using Recall leaves bombs",
        descriptionLong: "Recall leaves behind 6 bombs that deal 240 (+4% / level) damage each to different targets. Heroes hit with these bombs are Slowed by 50% for 0.75 seconds and grant 7% Pulse Bomb charge.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_combo_e_r.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 48
        },
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "TracerRecall"
        ]
      },
      {
        id: "TracerTracerRounds",
        name: "Tracer Rounds",
        descriptionShort: "Basic Attacks reveal, increased range",
        descriptionLong: "Increase Basic Attack range by 10%. Basic Attacks against Heroes reveal a small area around them for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_reload.png",
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
          "TracerReload"
        ]
      }
    ],
    [
      {
        id: "TracerLeechingRounds",
        name: "Leeching Rounds",
        descriptionShort: "Increase Basic Attack healing",
        descriptionLong: "Increase the healing from Basic Attacks by up to 200%, based on the amount of health Tracer is missing.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_reload.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 40,
          magicalDamage: 0
        },
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "TracerReload"
        ]
      },
      {
        id: "TracerPulseGenerator",
        name: "Pulse Generator",
        descriptionShort: "Pulse Bomb heals Tracer, refreshes Blink charge",
        descriptionLong: "Successfully sticking a Pulse Bomb to an enemy Hero heals Tracer for 12% of her maximum Health over 1.5 seconds and refunds a charge of Blink.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_combo_q_r.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 2.4000000000000004,
          magicalDamage: 0
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "TracerPulseBomb"
        ]
      },
      {
        id: "TracerIsThataHealthPack",
        name: "Is That a Health Pack?!",
        descriptionShort: "Empower Healing Fountains, Regen Globes",
        descriptionLong: "Collecting a Regeneration Globe instantly heals Tracer for 15% of her maximum Health and reduces the cooldown of Healing Fountain by 15 seconds. Drinking from a Healing Fountain instantly heals for 20% of Tracer's maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_medpack.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 10,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4"
      }
    ],
    [
      {
        id: "TracerSleightofHand",
        name: "Sleight of Hand",
        descriptionShort: "Reload twice as fast",
        descriptionLong: "Reduces Reload time by 50%. This equals 20% more damage per second.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_reload.png",
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
          "TracerReload"
        ]
      },
      {
        id: "TracerFocusFire",
        name: "Focus Fire",
        descriptionShort: "Unloading a magazine on an enemy does bonus damage",
        descriptionLong: "If an entire ammo magazine is unloaded on an enemy, the last bullet will deal 80 (+4% / level) bonus damage. This is equal to 35% of the total magazine.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_reload_b.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 16
        },
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "TracerReload"
        ]
      },
      {
        id: "TracerLockedandLoaded",
        name: "Locked and Loaded",
        descriptionShort: "Time Reload perfectly to gain Basic Attack damage",
        descriptionLong: "Reactivate Reload within the last 50% of its cast time to increase Tracer's Basic Attack damage by 40% for that magazine.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_reload_c.png",
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
          "TracerReload"
        ]
      }
    ],
    [
      {
        id: "TracerStickyBomb",
        name: "Sticky Bomb",
        descriptionShort: "Increases Pulse Bomb area and adds Slow",
        descriptionLong: "Increases Pulse Bomb's radius by 50% and enemies hit are Slowed by 70% for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_pulsebomb.png",
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
          "TracerPulseBomb"
        ]
      },
      {
        id: "TracerQuantumSpike",
        name: "Quantum Spike",
        descriptionShort: "Pulse Bomb deals percentage damage",
        descriptionLong: "Pulse Bomb deals an additional 6% of maximum Health as damage to Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_pulsebomb_b.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "TracerPulseBomb"
        ]
      },
      {
        id: "TracerPulseRounds",
        name: "Pulse Rounds",
        descriptionShort: "Increases Pulse Bomb range and charge rate",
        descriptionLong: "Increases Pulse Bomb's range and charge rate from Basic Attacks against Heroes by 100%.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_pulsebomb_c.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level10",
        linkedAbilityIds: [
          "TracerPulseBomb"
        ]
      }
    ],
    [
      {
        id: "TracerUntouchable",
        name: "Untouchable",
        descriptionShort: "Quest: Takedowns increase Attack Damage",
        descriptionLong: "Passive: After Blinking, gain 20% Movement Speed for 1.25 seconds. Quest: Takedowns increase Tracer's Basic Attack damage by 5%, up to 25%. These bonuses are lost on death.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_combo_q_trait.png",
        isPassive: false,
        analysis: {
          mobility: 0.2,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "TracerBlink"
        ],
        isQuest: true
      },
      {
        id: "TracerJumper",
        name: "Jumper",
        descriptionShort: "Blink grants Shield, reduced cooldown",
        descriptionLong: "Passive: When Blink has no charges remaining, its cooldown refreshes 100% faster. Casting Blink grants Tracer a Shield equal to 6% of her maximum Health for 3 seconds. This Shield stacks up to 3 times.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_blink.png",
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
          "TracerBlink"
        ]
      },
      {
        id: "TracerTelefrag",
        name: "Telefrag",
        descriptionShort: "Damage and knockback on Recall arrival",
        descriptionLong: "Passive: Basic Attacks against enemy Heroes reduce the cooldown of Recall by 0.1875 seconds. When Tracer arrives at her Recall location she becomes Unkillable for 1 second and nearby enemies take 175 (+4% / level) damage and are knocked back.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_recall.png",
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
          "TracerRecall"
        ]
      }
    ],
    [
      {
        id: "TracerBulletSprayMelee",
        name: "Bullet Spray",
        descriptionShort: "Melee hits all enemies in range",
        descriptionLong: "Increases the radius of Melee by 30%, and causes it to damage all enemies in range.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_melee.png",
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
          "TracerMelee"
        ]
      },
      {
        id: "TracerHeavyHanded",
        name: "Heavy Handed",
        descriptionShort: "Melee reduces Armor",
        descriptionLong: "Heroes hit by Melee have their Armor reduced by 15 for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_melee_b.png",
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
          "TracerMelee"
        ]
      },
      {
        id: "TracerRicochetHeroWeapon",
        name: "Ricochet",
        descriptionShort: "Basic Attacks can bounce to a nearby enemy",
        descriptionLong: "Tracer's Basic Attacks have a 60% chance to hit another nearby enemy, prioritizing Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_reload.png",
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
          "TracerReload"
        ]
      }
    ],
    [
      {
        id: "TracerChronoTriggers",
        name: "Chrono Triggers",
        descriptionShort: "Blink empowers ammo",
        descriptionLong: "Casting Blink causes Basic Attacks to not consume ammo for 1 second.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_combo_q_trait.png",
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
          "TracerBlink"
        ]
      },
      {
        id: "TracerGetStuffedMelee",
        name: "Get Stuffed!",
        descriptionShort: "Empower Melee",
        descriptionLong: "Increases Melee's Pulse Bomb charge against Heroes from 10% to 20%. Hitting an enemy with Melee who is stuck with a Pulse Bomb causes the bomb to instantly explode and knock the target away.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_melee.png",
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
          "TracerMelee"
        ]
      },
      {
        id: "TracerTotalRecallRecall",
        name: "Total Recall",
        descriptionShort: "Recall can restore Health",
        descriptionLong: "Recall heals Tracer equal to the amount of Health she lost during that time.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_recall.png",
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
          "TracerRecall"
        ]
      },
      {
        id: "TracerCompositionBPulseBomb",
        name: "Composition B",
        descriptionShort: "Hitting Heroes with Pulse Bomb leaves a second",
        descriptionLong: "Successfully sticking a Pulse Bomb to an enemy Hero also drops another one at their feet that deals 50% damage and explodes slightly earlier.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_tracer_pulsebomb.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 10
        },
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "TracerPulseBomb"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 40.07532956685499,
    physicalDamage: 92,
    mobility: 24.006944444444446,
    healing: 54.65808332321147,
    magicalDamage: 5.249741392049652
  }
};
