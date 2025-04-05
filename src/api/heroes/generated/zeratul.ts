import { Hero } from '../heroes';
      
export const zeratul: Hero = {
  name: "Zeratul",
  nameNormalized: "zeratul",
  franchise: "Starcraft",
  gender: "Male",
  size: 0.75,
  movementSpeed: 4.8398,
  health: {
    amount: 1622,
    scale: 0.04,
    regenRate: 3.379,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroZeratul",
      range: 1.5,
      period: 0.9,
      damage: 126,
      damageScale: 0.04
    },
    {
      nameId: "HeroZeratulShadowAssault",
      range: 0.75,
      period: 0.9,
      damage: 126,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/zeratul.png",
  abilities: [
    {
      id: "ZeratulPermanentCloak",
      name: "Permanent Cloak",
      descriptionShort: "Become Stealthed while not attacking, using Abilities, or taking damage",
      descriptionLong: "Gain Stealth when out of combat for 3 seconds. Taking damage, attacking, using Abilities, or Channeling ends Stealth. Remaining stationary for at least 1.5 seconds while Stealthed grants Invisible.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zeratul_cloak.png",
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
      id: "ZeratulCleave",
      name: "Cleave",
      descriptionShort: "Damage nearby enemies",
      descriptionLong: "Deal 200 (+4% / level) damage to nearby enemies.",
      cost: {
        type: "Mana",
        amount: 40
      },
      cooldown: 6,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zeratul_cleave.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 100
      }
    },
    {
      id: "ZeratulSingularitySpike",
      name: "Singularity Spike",
      descriptionShort: "Slow and damage the first enemy hit",
      descriptionLong: "Flings a Singularity Spike that sticks to the first enemy hit. Deals 240 (+4% / level) damage after 1 second and Slows the enemy by 40% for 3 seconds.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 12,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zeratul_singularityspike.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 60
      }
    },
    {
      id: "ZeratulBlinkStorm",
      name: "Blink",
      descriptionShort: "Teleport to a location. Ability does not break cloak",
      descriptionLong: "Teleport to the target location. Using this Ability does not break Stealth.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 10,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zeratul_blink.png",
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
      id: "ZeratulMightOfTheNerazimDummy",
      name: "Might Of The Nerazim",
      descriptionShort: "Recast last Basic Ability",
      descriptionLong: "Activate to cast an untalented version of Zeratul's most recently used Basic Ability, dealing 50% less damage. Passive: After using an Ability, Zeratul's next Basic Attack within 6 seconds deals 30% more damage.",
      cost: {
        type: "Mana",
        amount: 30
      },
      cooldown: 20,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zeratul_mightofnerazim.png",
      isPassive: true,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 16
      }
    },
    {
      id: "ZeratulVoidPrison",
      name: "Void Prison",
      descriptionShort: "Time Stop targets in an area",
      descriptionLong: "Slows time in an area to a near standstill, placing allies and enemies in Time Stop for 5 seconds. Zeratul is not affected.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 100,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zeratul_voidprison.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 0
      }
    }
  ],
  talents: [
    [
      {
        id: "ZeratulMasteryGreaterCleaveCleave",
        name: "Greater Cleave",
        descriptionShort: "Increases radius of Cleave",
        descriptionLong: "Increases the radius of Cleave by 33%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zeratul_cleave.png",
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
          "ZeratulCleave"
        ]
      },
      {
        id: "ZeratulShadowHunter",
        name: "Shadow Hunter",
        descriptionShort: "Quest: Gather Regen Globes to empower Blink",
        descriptionLong: "Quest: Gather Regeneration Globes to lower the Mana cost of Blink by 3, up to 45. Reward: Upon gathering 15 Regeneration Globes, Basic Attacks reduce the cooldown of Blink by 1.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zeratul_blink.png",
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
          "ZeratulBlinkStorm"
        ],
        isQuest: true
      },
      {
        id: "ZeratulMoveUnseen",
        name: "Move Unseen",
        descriptionShort: "Gain Stealth faster and Move Speed while Stealthed",
        descriptionLong: "Reduce the cooldown of Permanent Cloak by 1 second. Gain 30% Movement Speed while Stealthed.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zeratul_cloak.png",
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
          "ZeratulPermanentCloak"
        ]
      }
    ],
    [
      {
        id: "ZeratulRendingCleave",
        name: "Rending Cleave",
        descriptionShort: "Cleave deals additional damage over time",
        descriptionLong: "Cleave deals an additional 40% damage over 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zeratul_cleave.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 8
        },
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "ZeratulCleave"
        ]
      },
      {
        id: "ZeratulPsionicStrength",
        name: "Psionic Strength",
        descriptionShort: "Basic Attacks, Abilities increase damage dealt",
        descriptionLong: "Dealing damage to enemy Heroes increases all damage dealt by 6% for 3 seconds, stacking up to 30%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_abilitytalent_damage.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level4"
      },
      {
        id: "ZeratulDarknessDescends",
        name: "Darkness Descends",
        descriptionShort: "Activate to gain Attack Speed",
        descriptionLong: "Activate to gain 40% Attack Speed for 5 seconds. Passive: Gain 20% Attack Speed.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zeratul_shadowassault.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 1,
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
        id: "ZeratulWormhole",
        name: "Wormhole",
        descriptionShort: "Can return from Blink location",
        descriptionLong: "After 1.25 seconds, reactivate Blink to return to the point where it was cast from within 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zeratul_blink.png",
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
          "ZeratulBlinkStorm"
        ]
      },
      {
        id: "ZeratulSeekerInTheDark",
        name: "Seeker in the Dark",
        descriptionShort: "Teleport to Singularity Spike target",
        descriptionLong: "Singularity Spike takes 50% longer to explode. It can be reactivated to teleport to the target, granting 30% increased Move Speed for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zeratul_singularityspike.png",
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
          "ZeratulSingularitySpike"
        ]
      },
      {
        id: "ZeratulWarpSkirmisherTalent",
        name: "Warp Skirmisher",
        descriptionShort: "Vorpal Blade gains a charge",
        descriptionLong: "Vorpal Blade gains a 2nd charge. Teleporting to an enemy with Vorpal Blade or entering Permanent Cloak causes Zeratul's next Basic Attack to deal 50% more damage.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zeratul_vorpalblade.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 10
        },
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "VorpalBladeBlink"
        ]
      }
    ],
    [
      {
        id: "ZeratulMightOfTheNerazim",
        name: "Might Of The Nerazim",
        descriptionShort: "Recast last Basic Ability",
        descriptionLong: "Activate to cast an untalented version of Zeratul's most recently used Basic Ability, dealing 50% less damage. Passive: After using an Ability, Zeratul's next Basic Attack within 6 seconds deals 30% more damage.",
        cost: {
          type: "Mana",
          amount: 30
        },
        cooldown: 20,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zeratul_mightofnerazim.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 16
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "ZeratulMightOfTheNerazimDummy"
        ]
      },
      {
        id: "ZeratulHeroicAbilityVoidPrison",
        name: "Void Prison",
        descriptionShort: "Time Stop targets in an area",
        descriptionLong: "Slows time in an area to a near standstill, placing allies and enemies in Time Stop for 5 seconds. Zeratul is not affected.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 100,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zeratul_voidprison.png",
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
          "ZeratulVoidPrison"
        ]
      }
    ],
    [
      {
        id: "ZeratulShroudofAdun",
        name: "Shroud of Adun",
        descriptionShort: "Gain a shield while under Permanent Cloak",
        descriptionLong: "Zeratul gains a Shield equal to 20% of his Maximum Health over 3 seconds while under Permanent Cloak.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zeratul_cloak.png",
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
          "ZeratulPermanentCloak"
        ]
      },
      {
        id: "ZeratulMendingStrikes",
        name: "Mending Strikes",
        descriptionShort: "Basic Attacks heal",
        descriptionLong: "Basic Attacks heal for 35% of the damage dealt.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_heal.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 7,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13"
      },
      {
        id: "GenericTalentSpellShield",
        name: "Spell Shield",
        descriptionShort: "Periodically gain temporary Spell Armor",
        descriptionLong: "Every 30 seconds, gain 50 Spell Armor against the next enemy Ability and subsequent Abilities for 3 seconds, reducing the damage taken by 50%. Can be toggled to allow or prevent this talent from triggering automatically.",
        cooldown: null,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_spellshield.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 10,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level13"
      }
    ],
    [
      {
        id: "ZeratulMasterWarpBlade",
        name: "Master Warp-Blade",
        descriptionShort: "Bonus damage every third Basic Attack",
        descriptionLong: "Every third consecutive Basic Attack against the same target deals 125% bonus damage.",
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
          magicalDamage: 25
        },
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "ZeratulPermanentCloak"
        ]
      },
      {
        id: "ZeratulVoidSlash",
        name: "Void Slash",
        descriptionShort: "Cleave empowered against multiple Heroes",
        descriptionLong: "If Cleave hits more than one enemy Hero, it deals 40% increased damage and its cooldown is reduced by 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zeratul_cleave.png",
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
          "ZeratulCleave"
        ]
      },
      {
        id: "ZeratulSentencedtoDeath",
        name: "Sentenced to Death",
        descriptionShort: "Deal bonus damage to marked targets",
        descriptionLong: "Deal 25% increased damage to enemies while they are marked or Slowed by Singularity Spike.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zeratul_singularityspike.png",
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
          "ZeratulSingularitySpike"
        ]
      }
    ],
    [
      {
        id: "ZeratulTwilightFalls",
        name: "Twilight Falls",
        descriptionShort: "Might of the Nerazim resets cooldowns",
        descriptionLong: "Might of the Nerazim resets the cooldown of all Basic Abilities.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zeratul_mightofnerazim.png",
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
          "ZeratulMightOfTheNerazimDummy"
        ],
        prerequisiteTalentIds: [
          "ZeratulMightOfTheNerazim"
        ]
      },
      {
        id: "ZeratulUnwaveringPressure",
        name: "Unwavering Pressure",
        descriptionShort: "Basic Attacks reduce Singularity Spike cooldown",
        descriptionLong: "Singularity Spike no longer costs Mana. Basic Attacks against enemies reduce its cooldown by 1.25 seconds, double versus Heroes.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zeratul_singularityspike.png",
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
          "ZeratulSingularitySpike"
        ]
      },
      {
        id: "ZeratulShadowStrideTalent",
        name: "Shadow Stride",
        descriptionShort: "Reduce Vorpal Blade's cooldown, gain Shields",
        descriptionLong: "Reduce the cooldown of Vorpal Blade by 10 seconds. Casting Vorpal Blade grants Zeratul a Shield that absorbs up to 260 (+4% / level) damage for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_zeratul_vorpalblade.png",
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
          "VorpalBladeBlink"
        ]
      },
      {
        id: "ZeratulShadowMending",
        name: "Shadow Mending",
        descriptionShort: "Spell Damage dealt to Heroes heals",
        descriptionLong: "Heal for 60% of Spell Damage dealt to Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_abilitytalent_heal.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 12,
          magicalDamage: 0
        },
        order: 4,
        tier: "level20"
      }
    ]
  ],
  analysis: {
    tankiness: 48.873822975517896,
    physicalDamage: 70,
    mobility: 24.006944444444446,
    healing: 0,
    magicalDamage: 6.5021427515885915
  }
};
