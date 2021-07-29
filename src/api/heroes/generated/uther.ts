import { Hero } from '../heroes';
      
const uther: Hero = {
  name: "Uther",
  nameNormalized: "uther",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.75,
  movementSpeed: 4.8398,
  health: {
    amount: 1975,
    scale: 0.04,
    regenRate: 4.1093,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroUther",
      range: 1,
      period: 1,
      damage: 75,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/uther.png",
  abilities: [
    {
      id: "UtherEternalDevotion",
      name: "Devotion",
      descriptionShort: "Uther's healing grants Armor, and when killed his spirit remains",
      descriptionLong: "Allied Heroes affected by Uther's Basic Abilities gain 25 Armor for 2 seconds.  This effect does not stack with itself.Eternal VanguardUpon dying, Uther becomes an Invulnerable spirit for up to 8 seconds. While in spirit form, Uther can heal allies with Flash of Light.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_eternaldevotion.png",
      isPassive: true
    },
    {
      id: "UtherHolyLight",
      name: "Holy Light",
      descriptionShort: "Heal an allied Hero and Uther",
      descriptionLong: "Heal target allied Hero for 362 (+4% / level) Health. When used on a target other than Uther, also heal Uther for 181 (+4% / level) Health.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 12,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_holylight.png",
      isPassive: false
    },
    {
      id: "UtherHolyRadiance",
      name: "Holy Radiance",
      descriptionShort: "Heal allies and damage enemies in a line",
      descriptionLong: "Heal all allied Heroes and Minions in a line for 194 (+4% / level) Health, dealing 177 (+4% / level) damage to enemies.",
      cost: {
        type: "Mana",
        amount: 55
      },
      cooldown: 10,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_holyradiance.png",
      isPassive: false
    },
    {
      id: "UtherHammerOfJustice",
      name: "Hammer of Justice",
      descriptionShort: "Stun and damage an enemy",
      descriptionLong: "Deal 109 (+4% / level) damage and Stun the target for 1 second.",
      cost: {
        type: "Mana",
        amount: 40
      },
      cooldown: 10,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_hammerofjustice.png",
      isPassive: false
    },
    {
      id: "UtherDivineIntervention",
      name: "Divine Shield",
      descriptionShort: "Give ally Invulnerable and increased Move Speed",
      descriptionLong: "Make an allied Hero Invulnerable and increase their Movement Speed by 20% for 3 seconds.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 90,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_divineshield.png",
      isPassive: false
    },
    {
      id: "UtherDivineStorm",
      name: "Divine Storm",
      descriptionShort: "Damage and stun nearby enemies",
      descriptionLong: "Deal 170 (+4% / level) damage and Stun nearby enemies for 1.75 seconds.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 80,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_divinestorm.png",
      isPassive: false
    },
    {
      id: "UtherHolyShock",
      name: "Holy Light",
      descriptionShort: "Heal an allied Hero and Uther",
      descriptionLong: "Heal target allied Hero for 362 (+4% / level) Health. When used on a target other than Uther, also heal Uther for 181 (+4% / level) Health.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 12,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_holylight.png",
      isPassive: false
    },
    {
      id: "UtherFlashofLight",
      name: "Flash of Light",
      descriptionShort: "Heal an Ally",
      descriptionLong: "Heal an ally for 230 (+4% / level) Health.",
      cooldown: 1.5,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_flashoflight.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "UtherHolyLightSilverTouch",
        name: "Silver Touch",
        descriptionShort: "Quest: Mitigate damage to improve Holy Light",
        descriptionLong: "Quest: Reduce damage from Heroic sources with Devotion.Reward: After reducing damage 40 times, Holy Light's Mana cost is reduced from 80 to 60.Reward: After reducing damage 80 times, Holy Light's Mana cost is reduced to 40, and its range is increased by 50%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_holylight.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "UtherHolyLight",
          "UtherHolyShock"
        ],
        isQuest: true
      },
      {
        id: "UtherMasteryWaveofLightHolyRadiance",
        name: "Wave of Light",
        descriptionShort: "Quest: Holy Radiance increases Devotion duration",
        descriptionLong: "Quest: Damage or heal Heroes 60 times with Holy Radiance.Reward: Increase the duration of Devotion by 0.5 seconds.Passive: Damaging or healing Heroes with Holy Radiance refunds 5 Mana and reduces its cooldown by 0.75 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_holyradiance.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "UtherHolyRadiance"
        ],
        isQuest: true
      },
      {
        id: "UtherCombatStyleHammerOfTheLightbringer",
        name: "Hammer of the Lightbringer",
        descriptionShort: "Quest: Reduce Hammer of Justice cooldown",
        descriptionLong: "Quest: Basic Attack enemies 75 times.Reward: Basic Attacks reduce the cooldown of Hammer of Justice by 1.5 seconds.Passive: Basic Attacks restore 1.5% of Uther's maximum Mana.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_mana.png",
        isPassive: false,
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "UtherHammerOfJustice"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "UtherMasteryHolyShock",
        name: "Holy Shock",
        descriptionShort: "Holy Light can deal damage",
        descriptionLong: "Holy Light can be used on an enemy to do 40% of its healing amount as damage. When used this way, Uther receives its self-healing benefits, its cooldown is reduced by 6 seconds, and it refunds 45 Mana.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_holylight.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "UtherHolyLight",
          "UtherHolyShock"
        ]
      },
      {
        id: "UtherHammerOfJusticePursuitOfJustice",
        name: "Pursuit of Justice",
        descriptionShort: "Hammer of Justice grants Move Speed",
        descriptionLong: "Hammer of Justice increases Uther's Movement Speed by 25% for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_hammerofjustice.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "UtherHammerOfJustice"
        ]
      },
      {
        id: "UtherHolyFire",
        name: "Holy Fire",
        descriptionShort: "Deals damage to nearby enemies",
        descriptionLong: "Deal 13 (+4% / level) damage per second to nearby enemies. Basic Attacks against enemy Heroes increase this damage by 20% for 3 seconds. This can stack up to 3 times.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_holyfire.png",
        isPassive: false,
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "UtherEternalDevotion"
        ]
      }
    ],
    [
      {
        id: "UtherEternalDevotionArmorOfFaith",
        name: "Armor of Faith",
        descriptionShort: "Holy Light recharges faster while disabled",
        descriptionLong: "Being Stunned, Rooted, or Silenced grants Uther 90 Mana and causes Holy Light's cooldown to recharge 200% faster for 6 seconds. This effect has a 20 second cooldown.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_holylight.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "UtherHolyLight",
          "UtherHolyShock"
        ]
      },
      {
        id: "UtherEternalDevotionGuardianOfAncientKings",
        name: "Guardian of Ancient Kings",
        descriptionShort: "Increase Devotion's Armor on disabled targets",
        descriptionLong: "Healing a Hero with a Basic Ability that is Stunned, Rooted, or Silenced grants them 50 Armor for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_eternaldevotion.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "UtherEternalDevotion"
        ]
      },
      {
        id: "UtherHandOfProtection",
        name: "Hand of Protection",
        descriptionShort: "Make an ally Unstoppable",
        descriptionLong: "Activate to make target ally Unstoppable for 1 second. Cannot be cast on Uther. Basic Attacks reduce Hand of Protection's cooldown by 5 seconds.",
        cooldown: 90,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_cleanse.png",
        isPassive: false,
        order: 3,
        tier: "level7"
      }
    ],
    [
      {
        id: "UtherHeroicAbilityDivineShield",
        name: "Divine Shield",
        descriptionShort: "Give ally Invulnerable and increased Move Speed",
        descriptionLong: "Make an allied Hero Invulnerable and increase their Movement Speed by 20% for 3 seconds.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 90,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_divineshield.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "UtherDivineIntervention"
        ]
      },
      {
        id: "UtherHeroicAbilityDivineStorm",
        name: "Divine Storm",
        descriptionShort: "Damage and stun nearby enemies",
        descriptionLong: "Deal 170 (+4% / level) damage and Stun nearby enemies for 1.75 seconds.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 80,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_divinestorm.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "UtherDivineStorm"
        ]
      }
    ],
    [
      {
        id: "UtherMasteryBlessedChampion",
        name: "Blessed Champion",
        descriptionShort: "Holy Light makes Basic Attacks heal",
        descriptionLong: "For the next 5 seconds after using Holy Light, Uther's Basic Attacks heal him and nearby allied Heroes for 15% of the total amount healed by Holy Light.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_holylight.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "UtherHolyLight",
          "UtherHolyShock"
        ]
      },
      {
        id: "UtherHammerOfJusticeWellMet",
        name: "Well Met",
        descriptionShort: "Hammer of Justice weakens enemies",
        descriptionLong: "When used against Heroes, Hammer of Justice reduces the target's Movement Speed and damage dealt by 25% for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_hammerofjustice.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "UtherHammerOfJustice"
        ]
      },
      {
        id: "GenericTalentSpellShield",
        name: "Spell Shield",
        descriptionShort: "Periodically gain temporary Spell Armor",
        descriptionLong: "Every 30 seconds, gain 50 Spell Armor against the next enemy Ability and subsequent Abilities for 3 seconds, reducing the damage taken by 50%.Can be toggled to allow or prevent this talent from triggering automatically.",
        cooldown: null,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_spellshield.png",
        isPassive: false,
        order: 3,
        tier: "level13"
      }
    ],
    [
      {
        id: "UtherBeaconOfLight",
        name: "Beacon of Light",
        descriptionShort: "Increase Holy Light self-healing",
        descriptionLong: "Uther receives 100% bonus self-healing when targeting others with Holy Light.  This bonus is increased to 200% while he is below 50% Health.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_holylight.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "UtherHolyLight",
          "UtherHolyShock"
        ]
      },
      {
        id: "UtherHolyRadianceTyrsDeliverance",
        name: "Tyr's Deliverance",
        descriptionShort: "Increased Holy Radiance healing and damage",
        descriptionLong: "Increase the damage and healing of Holy Radiance by 10%. Basic Attacks against enemy Heroes cause Uther's next cast of Holy Radiance to have its damage and healing increased by an additional 10%, stacking up to 4 times.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_holyradiance.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "UtherHolyRadiance"
        ]
      },
      {
        id: "UtherMasteryBenediction",
        name: "Benediction",
        descriptionShort: "Reduce Mana cost, cooldown of next ability",
        descriptionLong: "Activate to reduce the Mana cost of Uther's next Basic Ability by 50 and its cooldown by 10 seconds.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_benediction.png",
        isPassive: false,
        order: 3,
        tier: "level16"
      }
    ],
    [
      {
        id: "UtherMasteryBulwarkOfLightDivineShield",
        name: "Bulwark of Light",
        descriptionShort: "Increase Divine Shield duration, applied to nearby allies",
        descriptionLong: "Divine Shield is also applied to all nearby allied Heroes and lasts 1 second longer.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_divineshield.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "UtherDivineIntervention"
        ],
        prerequisiteTalentIds: [
          "UtherHeroicAbilityDivineShield"
        ]
      },
      {
        id: "UtherMasteryDivineHurricaneDivineStorm",
        name: "Divine Hurricane",
        descriptionShort: "Increase Divine Storm radius, reduce cooldown",
        descriptionLong: "Divine Storm's radius is increased by 50% and its cooldown is reduced by 40 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_divinestorm.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "UtherDivineStorm"
        ],
        prerequisiteTalentIds: [
          "UtherHeroicAbilityDivineStorm"
        ]
      },
      {
        id: "UtherMasteryRedemption",
        name: "Redemption",
        descriptionShort: "Resurrect after Eternal Vanguard ends",
        descriptionLong: "After Eternal Vanguard ends, Uther revives at the spirit's location with 50% of his maximum Health.This effect has a 180 second cooldown.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_eternaldevotion.png",
        isPassive: false,
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "UtherEternalDevotion"
        ]
      },
      {
        id: "UtherEternalDevotionDivineProtection",
        name: "Divine Protection",
        descriptionShort: "Increase Devotion Armor and duration",
        descriptionLong: "Increase Devotion's Armor to 50 and its duration by 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_uther_eternaldevotion_a.png",
        isPassive: false,
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "UtherEternalDevotion"
        ]
      }
    ]
  ]
};
      
export default uther;