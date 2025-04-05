import { Hero } from '../heroes';
      
export const qhira: Hero = {
  name: "Qhira",
  nameNormalized: "qhira",
  franchise: "Nexus",
  gender: "Female",
  size: 0.625,
  movementSpeed: 4.8398,
  health: {
    amount: 2000,
    scale: 0.04,
    regenRate: 4.168,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "NexusHunterHeroWeapon",
      range: 2.25,
      period: 1,
      damage: 100,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/qhira.png",
  abilities: [
    {
      id: "NexusHunterGrapplingHook",
      name: "Grappling Hook",
      descriptionShort: "Qhira launches herself towards terrain or Heroes",
      descriptionLong: "Qhira fires a grappling hook that pulls her to terrain it contacts. If an enemy Hero is hit, they take 35 (+4% / level) damage and Qhira launches at them, kicking them for an additional 108 (+4% / level) damage. Can be used while Revolving Sweep is active.",
      cooldown: 20,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_d.png",
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
      id: "NexusHunterCarnage",
      name: "Carnage",
      descriptionShort: "Unleash your blade to deal damage in an area in front of you",
      descriptionLong: "Unleash your sword in the target direction, continuously dealing 30 (+4% / level) damage to enemies caught in its path.",
      cost: {
        type: "Mana",
        amount: 40
      },
      cooldown: 6,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_q.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 15
      }
    },
    {
      id: "NexusHunterBloodRage",
      name: "Blood Rage",
      descriptionShort: "Your Basic Attacks and Abilities cause enemies to take damage over time",
      descriptionLong: "Passive: Basic Attack and Ability damage cause enemies to bleed for 44 (+4% / level) damage over 4 seconds. Stacks 5 times. Qhira deals 32 (+4% / level) damage and heals for 90 (+4% / level) Health per enemy Hero affected. Damage and healing is increased by 50% per each additional stack on that Hero.",
      cost: {
        type: "Mana",
        amount: 35
      },
      cooldown: 7,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_w.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 35.14285714285714,
        magicalDamage: 13.714285714285714
      }
    },
    {
      id: "NexusHunterRevolvingSweep",
      name: "Revolving Sweep",
      descriptionShort: "Attach to an enemy Hero to rotate around and Stun them",
      descriptionLong: "Attach your sword on the first enemy Hero hit, dealing 96 (+4% / level) damage and Stunning them for 0.25 seconds. Once attached, Qhira becomes Immune to all effects, swinging around the target for 2.75 seconds and dealing 105 (+4% / level) damage to enemies between you and the target. Re-activate to send you to the target's location knocking them away, dealing 108 (+4% / level) damage and Stunning them for 0.75 seconds.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 16,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_e.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 61.800000000000004
      }
    },
    {
      id: "NexusHunterUnrelentingStrikes",
      name: "Unrelenting Strikes",
      descriptionShort: "Deal damage and Stun nearby enemies",
      descriptionLong: "Deal 44 (+4% / level) damage to nearby enemies every 0.5 seconds for 2.5 seconds as your sword grows outward. Upon expiring, deal 160 (+4% / level) damage to nearby enemy Heroes and Stun them for 1.5 seconds.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_r1.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 40.8
      }
    },
    {
      id: "NexusHunterFinalStrikeActivate",
      name: "Final Strike",
      descriptionShort: "Extend sword to deal finishing blow",
      descriptionLong: "After 1 second, deal 410 (+4% / level) damage to enemies in a line. This damage is increased by 25% against enemy Heroes who are below 50% Health.",
      cost: {
        type: "Mana",
        amount: 45
      },
      cooldown: 40,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_r2.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 82
      }
    }
  ],
  talents: [
    [
      {
        id: "NexusHunterCarnageMaximumEffort",
        name: "Maximum Effort",
        descriptionShort: "Carnage deals additional damage, Slows",
        descriptionLong: "If Carnage damages the same enemy Hero 3 times it deals an additional 108 (+4% / level) damage and Slows by 25% for 2.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_q.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 21.6
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "NexusHunterCarnage"
        ]
      },
      {
        id: "NexusHunterFatalWounds",
        name: "Fatal Wounds",
        descriptionShort: "Quest: Increase Blood Rage damage, duration",
        descriptionLong: "While at maximum stacks, Blood Rage's bleed deals 30% additional damage to enemy Heroes under 50% Health. Quest: Damage enemy Heroes with Blood Rage's bleed damage. Reward: After damaging Heroes with Blood Rage's bleed damage 150 times, Blood Rage's duration is increased by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_w.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 6
        },
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "NexusHunterBloodRage"
        ],
        isQuest: true
      },
      {
        id: "NexusHunterFinishingTouch",
        name: "Finishing Touch",
        descriptionShort: "Empower Basic Attacks against weak Heroes",
        descriptionLong: "Gain 20% Basic Attack damage. When Qhira Basic Attacks an enemy Hero below 50% Health it deals 20% additional damage, and she gains 35% Attack Speed for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_passive.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0.6000000000000001,
          tankiness: 0,
          healing: 0,
          magicalDamage: 4
        },
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "NexusHunterGrapplingHook"
        ]
      }
    ],
    [
      {
        id: "NexusHunterUpstage",
        name: "Upstage",
        descriptionShort: "Blood Rage grants Evasion",
        descriptionLong: "Damaging at least 2 Heroes with Blood Rage causes Qhira to Evade the next 4 Heroic Basic Attacks within 12 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_w.png",
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
          "NexusHunterBloodRage"
        ]
      },
      {
        id: "NexusHunterEnsnaringSwing",
        name: "Ensnaring Swing",
        descriptionShort: "Revolving Sweep Slows enemies",
        descriptionLong: "The primary target of Revolving Sweep is Slowed by 60% while Qhira is attached to them. Secondary targets hit by Revolving Sweep's swing are Slowed by 40% for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_e.png",
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
          "NexusHunterRevolvingSweepSecondary",
          "NexusHunterRevolvingSweep"
        ]
      },
      {
        id: "NexusHunterBloodRageYourPainMyGain",
        name: "Your Pain, My Gain",
        descriptionShort: "Basic Attacking Heroes grants Armor",
        descriptionLong: "Basic Attacking an enemy Hero causes Qhira to gain 10 Armor for 3 seconds. Stacks 3 times.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_passive.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 2,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "NexusHunterGrapplingHook"
        ]
      }
    ],
    [
      {
        id: "NexusHunterTheThirst",
        name: "The Thirst",
        descriptionShort: "Carnage increases Basic Attack damage, healing",
        descriptionLong: "Carnage heals for 50% of the damage dealt to enemy Heroes. Anytime Carnage damages an enemy Hero, Qhira's next Basic Attack within 4 seconds against an enemy Hero deals 15% additional damage, stacking up to 10 times.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_q.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 10,
          magicalDamage: 3
        },
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "NexusHunterCarnage"
        ]
      },
      {
        id: "NexusHunterBloodRageHealmonger",
        name: "Healmonger",
        descriptionShort: "Blood Rage heals more against low Health",
        descriptionLong: "If Blood Rage damages an enemy Hero below 50% Health, it heals for an additional 210 (+4% / level) Health.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_w.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 10,
          magicalDamage: 0
        },
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "NexusHunterBloodRage"
        ]
      },
      {
        id: "NexusHunterSiphoningLink",
        name: "Siphoning Link",
        descriptionShort: "Revolving Sweep heals over time",
        descriptionLong: "Damaging an enemy Hero with Revolving Sweep's initial impact or swing causes Qhira to regenerate 96 (+4% / level) Health over 4 seconds. Stacks up to 4 times. Passive: Basic Attacks heal for 20% of the damage dealt.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_e.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.8,
          magicalDamage: 0
        },
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "NexusHunterRevolvingSweepSecondary",
          "NexusHunterRevolvingSweep"
        ]
      }
    ],
    [
      {
        id: "NexusHunterUnrelentingStrikes",
        name: "Unrelenting Strikes",
        descriptionShort: "Deal damage and Stun nearby enemies",
        descriptionLong: "Deal 44 (+4% / level) damage to nearby enemies every 0.5 seconds for 2.5 seconds as your sword grows outward. Upon expiring, deal 160 (+4% / level) damage to nearby enemy Heroes and Stun them for 1.5 seconds.",
        cost: {
          type: "Mana",
          amount: 50
        },
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_r1.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 40.8
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "NexusHunterUnrelentingStrikes"
        ]
      },
      {
        id: "NexusHunterFinalStrike",
        name: "Final Strike",
        descriptionShort: "Extend sword to deal finishing blow",
        descriptionLong: "After 1 second, deal 410 (+4% / level) damage to enemies in a line. This damage is increased by 25% against enemy Heroes who are below 50% Health.",
        cost: {
          type: "Mana",
          amount: 45
        },
        cooldown: 40,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_r2.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 82
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "NexusHunterFinalStrikeActivate"
        ]
      }
    ],
    [
      {
        id: "NexusHunterChainsaw",
        name: "Chainsaw",
        descriptionShort: "Blood Rage reduces Carnage cooldown",
        descriptionLong: "Carnage's cooldown recharges 100% faster while an enemy Hero has maximum Blood Rage stacks.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_q.png",
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
          "NexusHunterCarnage"
        ]
      },
      {
        id: "NexusHunterPulsingPain",
        name: "Pulsing Pain",
        descriptionShort: "Increase Revolving Sweep damage to main target",
        descriptionLong: "Each additional enemy Hero hit by Revolving Sweep causes the primary target to take an additional 135 (+4% / level) damage.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_e.png",
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
          "NexusHunterRevolvingSweepSecondary",
          "NexusHunterRevolvingSweep"
        ]
      },
      {
        id: "NexusHunterTheHunted",
        name: "The Hunted",
        descriptionShort: "Consecutive Basic Attacks deal bonus damage",
        descriptionLong: "Basic Attacking an enemy Hero increases your Basic Attack damage against that Hero by 25%. Stacks up to 4 times and lasts 4 seconds. Bonus is reset if a different Hero is attacked.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_passive.png",
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
          "NexusHunterGrapplingHook"
        ]
      }
    ],
    [
      {
        id: "NexusHunterRevolvingSweepBoomingKick",
        name: "Booming Kick",
        descriptionShort: "Revolving Sweep re-activation hits area",
        descriptionLong: "Increase the Stun duration of Revolving Sweep's re-activation by 0.25 seconds. Enemy Heroes around the primary target are also affected by Revolving Sweep's re-activation.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_e.png",
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
          "NexusHunterRevolvingSweepSecondary",
          "NexusHunterRevolvingSweep"
        ]
      },
      {
        id: "NexusHunterRevolvingSweepLingeringAilment",
        name: "Lingering Ailment",
        descriptionShort: "Reduce enemy Hero Armor",
        descriptionLong: "Enemy Heroes hit by Revolving Sweep or by Grappling Hook have their Armor reduced by 35 for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_e_alt_1.png",
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
          "NexusHunterRevolvingSweepSecondary",
          "NexusHunterRevolvingSweep"
        ]
      },
      {
        id: "NexusHunterRevolvingSweepSwingLifeAway",
        name: "Swing Life Away",
        descriptionShort: "Revolving Sweep recharges faster",
        descriptionLong: "Revolving Sweep's cooldown recharges 250% faster while Qhira is swinging around her target. She also gains 60 Spell Armor for 5 seconds after the re-activation impact.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_e_alt_2.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 12,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "NexusHunterRevolvingSweepSecondary",
          "NexusHunterRevolvingSweep"
        ]
      }
    ],
    [
      {
        id: "NexusHunterUnrelentingStrikesSilentKiller",
        name: "Silent Killer",
        descriptionShort: "Unrelenting Strikes Silences",
        descriptionLong: "Hitting enemy Heroes with Unrelenting Strikes Silences them for 0.5 seconds and reduces its cooldown by 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_r1.png",
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
          "NexusHunterUnrelentingStrikes"
        ],
        prerequisiteTalentIds: [
          "NexusHunterUnrelentingStrikes"
        ]
      },
      {
        id: "NexusHunterFinalStrikeUnleashedPotential",
        name: "Unleashed Potential",
        descriptionShort: "Final Strike refunds Ability cooldowns",
        descriptionLong: "Increase the damage to enemy Heroes under 50% Health from 25% to 50%. If an enemy Hero dies within 1.5 seconds of being hit by Final Strike, then reset the cooldowns of Final Strike and all of Qhira's Basic Abilities.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_r2.png",
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
          "NexusHunterFinalStrikeActivate"
        ],
        prerequisiteTalentIds: [
          "NexusHunterFinalStrike"
        ]
      },
      {
        id: "NexusHunterGrapplingHookUtilityBelt",
        name: "Utility Belt",
        descriptionShort: "Grappling Hook recharges faster",
        descriptionLong: "Grappling Hook's cooldown is reset when hitting an enemy Hero with the initial impact of Revolving Sweep and recharges 900% faster if Qhira hasn't taken damage within the last 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_d.png",
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
          "NexusHunterGrapplingHook"
        ]
      },
      {
        id: "NexusHunterHuntersVengeanceNoSanctuary",
        name: "No Sanctuary",
        descriptionShort: "Hunt low Health enemies",
        descriptionLong: "Nearby enemy Heroes below 50% Health are revealed and you gain 20% Movement Speed while an enemy Hero is revealed by you in this way. Additionally, you deal 20% increased damage to these revealed enemies.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nexushunter_passive_alt_1.png",
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
          "NexusHunterGrapplingHook"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 60.263653483992464,
    physicalDamage: 50,
    mobility: 24.006944444444446,
    healing: 8.537072061911124,
    magicalDamage: 7.8806814583377305
  }
};
