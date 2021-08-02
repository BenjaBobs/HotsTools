import { Hero } from '../heroes';
      
const anduin: Hero = {
  name: "Anduin",
  nameNormalized: "anduin",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.625,
  movementSpeed: 4.8398,
  health: {
    amount: 1665,
    scale: 0.04,
    regenRate: 3.4687,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "AnduinHeroWeapon",
      range: 5.5,
      period: 1.2,
      damage: 85,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/anduin.png",
  abilities: [
    {
      id: "AnduinLeapOfFaithInstant",
      name: "Leap of Faith",
      descriptionShort: "Pull an allied Hero to your location",
      descriptionLong: "Faith instantly pulls an allied Hero to Anduin's location, granting them Unstoppable while they travel.",
      cooldown: 70,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 0.5
      },
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_leap_of_faith.png",
      isPassive: false
    },
    {
      id: "AnduinFlashHeal",
      name: "Flash Heal",
      descriptionShort: "Cast a heal on an Ally",
      descriptionLong: "Cast for 0.75 seconds to heal an allied Hero for 270 (+4% / level).",
      cost: {
        type: "Mana",
        amount: 25
      },
      cooldown: 4,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_flash_heal.png",
      isPassive: false
    },
    {
      id: "AnduinDivineStar",
      name: "Divine Star",
      descriptionShort: "Send a heavenly bolt that damages and heals",
      descriptionLong: "Send light that deals 140 (+4% / level) damage to enemies and then returns to Anduin, healing allied Heroes for 130 (+4% / level) in a wider path. Healing increases by 25% per enemy Hero hit.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 9,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_divine_star.png",
      isPassive: false
    },
    {
      id: "AnduinChastise",
      name: "Chastise",
      descriptionShort: "Shove light forward that Roots",
      descriptionLong: "Shove a swell of light forward, dealing 175 (+4% / level) damage to the first enemy Hero hit and Rooting them for 1.25 seconds.",
      cost: {
        type: "Mana",
        amount: 40
      },
      cooldown: 10,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_chastise.png",
      isPassive: false
    },
    {
      id: "AnduinHolyWordSalvation",
      name: "Holy Word: Salvation",
      descriptionShort: "Protect and heal allies near Anduin",
      descriptionLong: "After 0.5 seconds, Channel to invoke the Light for 3 seconds. While nearby, allied Heroes heal for up to 30% of their max Health and are Protected.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 80,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_holy_word_salvation.png",
      isPassive: false
    },
    {
      id: "AnduinLightBomb",
      name: "Lightbomb",
      descriptionShort: "Stun enemies around an ally",
      descriptionLong: "Imbue an allied Hero with the Light. After 1.5 seconds, it explodes, dealing 150 (+4% / level) damage to enemies and Stunning them for 1.25 seconds.The target gains a Shield that absorbs 165 (+4% / level) damage per enemy Hero hit. Lasts for 5 seconds.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_light_bomb.png",
      isPassive: false
    },
    {
      id: "AnduinHolyWordSalvationCancel",
      name: "Cancel Holy Word: Salvation",
      descriptionShort: "Cancel Holy Word: Salvation",
      descriptionLong: "Cancel Holy Word: Salvation.",
      cooldown: 1,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/hud_btn_bg_ability_cancel.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "AnduinFlashHealRenew",
        name: "Renew",
        descriptionShort: "Basic Attacks enhance Flash Heal",
        descriptionLong: "Basic Attacks against Heroes empower the next Flash Heal to also heal for 130 (+4% / level) over 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_flash_heal_a.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "AnduinFlashHeal"
        ]
      },
      {
        id: "AnduinPursuedByGrace",
        name: "Pursued by Grace",
        descriptionShort: "Damage Heroes to heal nearby allies",
        descriptionLong: "Damaging an enemy Hero heals the lowest Health allied Hero near Anduin for 35 (+4% / level).",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_varians_legacy.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "AnduinLeapOfFaithInstant"
        ]
      },
      {
        id: "AnduinBoldStrategy",
        name: "Bold Strategy",
        descriptionShort: "Weaken Flash Heal to gain extra Talents",
        descriptionLong: "Anduin gains his other level 1 Talents, but Flash Heal's cooldown is increased by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_bold_strategy.png",
        isPassive: false,
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "AnduinFlashHeal"
        ]
      }
    ],
    [
      {
        id: "AnduinDivineStarMoralCompass",
        name: "Moral Compass",
        descriptionShort: "Divine Star fires Basic Attacks at its apex",
        descriptionLong: "Divine Star fires Basic Attacks at 2 Heroes close to its apex for 70% damage.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_divine_star.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "AnduinDivineStar"
        ]
      },
      {
        id: "AnduinChastiseHolyReach",
        name: "Holy Reach",
        descriptionShort: "Chastise empowers next Basic Attack",
        descriptionLong: "Increase the Root duration of Chastise from 1.25 to 1.5 seconds.  After hitting an enemy with Chastise, Anduin's next Basic Attack deals 75% more damage and heals allied Heroes near him for 100 (+4% / level).",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_chastise.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "AnduinChastise"
        ]
      },
      {
        id: "AnduinInnerFire",
        name: "Inner Fire",
        descriptionShort: "Increase Attack Speed and range",
        descriptionLong: "Increases Attack Speed by 20% and Basic Attack range by 15%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_varians_legacy.png",
        isPassive: false,
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "AnduinLeapOfFaithInstant"
        ]
      }
    ],
    [
      {
        id: "AnduinFlashHealBindingHeal",
        name: "Binding Heal",
        descriptionShort: "Flash Heal also heals Anduin",
        descriptionLong: "Casting Flash Heal on an ally heals Anduin for 115 (+4% / level).",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_flash_heal.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "AnduinFlashHeal"
        ]
      },
      {
        id: "AnduinDivineStarPowerWordShield",
        name: "Power Word: Shield",
        descriptionShort: "Divine Star can grant Anduin a Shield",
        descriptionLong: "If Divine Star hits an enemy Hero, gain a Shield that absorbs 185 (+4% / level) damage for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_divine_star.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "AnduinDivineStar"
        ]
      },
      {
        id: "AnduinBlessedRecovery",
        name: "Blessed Recovery",
        descriptionShort: "Recover Health after taking high damage",
        descriptionLong: "If Anduin loses more than 8% of his maximum Health at once, recover 15% Health over 3 seconds. This effect has a 10 second cooldown.Current Health required: 133 (+4% / level)",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_blessed_recovery.png",
        isPassive: false,
        order: 3,
        tier: "level7"
      }
    ],
    [
      {
        id: "AnduinHolyWordSalvation",
        name: "Holy Word: Salvation",
        descriptionShort: "Protect and heal allies near Anduin",
        descriptionLong: "After 0.5 seconds, Channel to invoke the Light for 3 seconds. While nearby, allied Heroes heal for up to 30% of their max Health and are Protected.",
        cost: {
          type: "Mana",
          amount: 70
        },
        cooldown: 80,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_holy_word_salvation.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "AnduinHolyWordSalvation"
        ]
      },
      {
        id: "AnduinLightBomb",
        name: "Lightbomb",
        descriptionShort: "Stun enemies around an ally",
        descriptionLong: "Imbue an allied Hero with the Light. After 1.5 seconds, it explodes, dealing 150 (+4% / level) damage to enemies and Stunning them for 1.25 seconds.The target gains a Shield that absorbs 165 (+4% / level) damage per enemy Hero hit. Lasts for 5 seconds.",
        cost: {
          type: "Mana",
          amount: 70
        },
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_light_bomb.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "AnduinLightBomb"
        ]
      }
    ],
    [
      {
        id: "AnduinDivineStarSpeedOfThePious",
        name: "Speed of the Pious",
        descriptionShort: "Divine Star grants Move Speed, reduce cooldown",
        descriptionLong: "While Divine Star is traveling, gain 30% Movement Speed.  Each allied Hero healed by Divine Star on its return to Anduin reduces its cooldown by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_divine_star.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "AnduinDivineStar"
        ]
      },
      {
        id: "AnduinPushForward",
        name: "Push Forward!",
        descriptionShort: "Damage Heroes for Move Speed, reduce cooldown",
        descriptionLong: "Damaging an enemy Hero grants 2.5% Movement Speed for 6 seconds, up to 20%.  While gaining 20% Movement Speed, Chastise's cooldown recharges 25% faster.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_chastise.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "AnduinChastise"
        ]
      },
      {
        id: "AnduinLeapOfFaithEnchantBootsLionsSpeed",
        name: "Enchant Boots - Lion's Speed",
        descriptionShort: "Leap of Faith grants Move Speed, heals",
        descriptionLong: "Gain 5% Movement Speed. This bonus is quadrupled while Leap of Faith's cooldown is available.  Allies pulled by Leap of Faith are healed for 280 (+4% / level) over 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_leap_of_faith.png",
        isPassive: false,
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "AnduinLeapOfFaithInstant"
        ]
      }
    ],
    [
      {
        id: "AnduinFlashHealEvenhandedBlessings",
        name: "Evenhanded Blessings",
        descriptionShort: "Refund Flash Heal cooldown on new targets",
        descriptionLong: "If Flash Heal is cast on a different target from its last, increase its healing by 20% and  refund 50% of its cooldown.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_flash_heal.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "AnduinFlashHeal"
        ]
      },
      {
        id: "AnduinDivineStarHolyNova",
        name: "Holy Nova",
        descriptionShort: "Divine Star explodes when caught",
        descriptionLong: "After Anduin catches Divine Star, it explodes, healing nearby allied Heroes for 105 (+4% / level) and damaging enemies for 105 (+4% / level).",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_divine_star.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "AnduinDivineStar"
        ]
      },
      {
        id: "AnduinFlashHealInnerFocus",
        name: "Inner Focus",
        descriptionShort: "Activate to reset Flash Heal cooldown",
        descriptionLong: "Activate to reset the cooldown of Flash Heal and its next cast heals for 40% more.Damaging enemy Heroes with Divine Star reduces this cooldown by 8 seconds.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_inner_focus.png",
        isPassive: false,
        order: 3,
        tier: "level16"
      },
      {
        id: "AnduinLightwell",
        name: "Lightwell",
        descriptionShort: "Activate to summon a healing Lightwell",
        descriptionLong: "Summon a Lightwell that periodically heals a nearby allied Hero for 75 (+4% / level). The well only fades after healing 10 times or when recast.This cooldown is reduced by 1 second each time Anduin heals an allied Hero.",
        cooldown: 80,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_lightwell.png",
        isPassive: false,
        order: 4,
        tier: "level16"
      }
    ],
    [
      {
        id: "AnduinHolyWordSalvationLightOfStormwind",
        name: "Light of Stormwind",
        descriptionShort: "Holy Word: Salvation grants allies Invulnerability",
        descriptionLong: "Holy Word: Salvation grants allied Heroes Invulnerability instead of Protected. This does not affect Anduin. Channeling Holy Word: Salvation for its full duration reduces its cooldown by 60 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_holy_word_salvation.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "AnduinHolyWordSalvation"
        ],
        prerequisiteTalentIds: [
          "AnduinHolyWordSalvation"
        ]
      },
      {
        id: "AnduinLeapOfFaithGlyphOfFaith",
        name: "Glyph of Faith",
        descriptionShort: "Leap of Faith gains a charge",
        descriptionLong: "Leap of Faith gains a 2nd charge.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_leap_of_faith.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "AnduinLeapOfFaithInstant"
        ]
      },
      {
        id: "AnduinVariansLegacy",
        name: "Varian's Legacy",
        descriptionShort: "Basic Attacks burn enemies",
        descriptionLong: "Basic Attacks burn enemies for 87 (+4% / level) damage over 3 seconds and Anduin heals for 50% of the damage dealt.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_varians_legacy.png",
        isPassive: false,
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "AnduinLeapOfFaithInstant"
        ]
      },
      {
        id: "AnduinFlashHealDesperatePrayer",
        name: "Desperate Prayer",
        descriptionShort: "Activate to desperately heal an allied Hero",
        descriptionLong: "Activate to desperately heal an allied Hero for 540 (+4% / level), but kneel for 2 seconds, unable to act.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_desperate_prayer.png",
        isPassive: false,
        order: 4,
        tier: "level20"
      }
    ]
  ],
  analysis: {
    tankiness: 50.16949152542374,
    damageSustainedPhysical: 42.34601449275362
  }
};
      
export default anduin;