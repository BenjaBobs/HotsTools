import { Hero } from '../heroes';
      
export const anduin: Hero = {
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
      period: 1,
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
      descriptionLong: "Faith instantly pulls an allied Hero to Anduin's location, granting them Unstoppable while they travel. Pursued By GraceBasic Attacks against enemy Heroes heal the lowest Health allied Hero near Anduin for 32 (+4% / level).",
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
      id: "AnduinFlashHeal",
      name: "Flash Heal",
      descriptionShort: "Cast a heal on an Ally",
      descriptionLong: "Cast for 0.75 seconds to heal an allied Hero for 280 (+4% / level).",
      cost: {
        type: "Mana",
        amount: 20
      },
      cooldown: 5,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_flash_heal.png",
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
      id: "AnduinDivineStar",
      name: "Divine Star",
      descriptionShort: "Send a heavenly bolt that damages and heals",
      descriptionLong: "Send light that deals 140 (+4% / level) damage to enemies and then returns to Anduin, healing allied Heroes for 130 (+4% / level) in a wider path. Healing increases by 25% per enemy Hero hit.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 10,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_divine_star.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 46.5,
        magicalDamage: 42
      }
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
      cooldown: 9,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_chastise.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 58.33333333333333
      }
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
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 6,
        magicalDamage: 0
      }
    },
    {
      id: "AnduinLightBomb",
      name: "Lightbomb",
      descriptionShort: "Stun enemies around an ally",
      descriptionLong: "Imbue an allied Hero with the Light. After 1.5 seconds, it explodes, dealing 150 (+4% / level) damage to enemies and Stunning them for 1.25 seconds. The target gains a Shield that absorbs 165 (+4% / level) damage per enemy Hero hit. Lasts for 5 seconds.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_light_bomb.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 30
      }
    }
  ],
  talents: [
    [
      {
        id: "AnduinFlashHealEvenhandedBlessings",
        name: "Evenhanded Blessings",
        descriptionShort: "Refund Flash Heal cooldown on new targets",
        descriptionLong: "If Flash Heal is cast on a different target from its last, increase its healing by 15% and refund 40% of its cooldown.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_flash_heal.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 3,
          magicalDamage: 0
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "AnduinFlashHeal"
        ]
      },
      {
        id: "AnduinDivineStarPowerWordShield",
        name: "Power Word: Shield",
        descriptionShort: "Divine Star grants Shields",
        descriptionLong: "While Divine Star is traveling out, allies in its path gain a Shield that absorbs 128 (+4% / level) damage for 4 seconds. If Divine Star hits an enemy Hero, Anduin gains a Shield that absorbs 185 (+4% / level) damage for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_divine_star.png",
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
          "AnduinDivineStar"
        ]
      },
      {
        id: "AnduinLightwell",
        name: "Lightwell",
        descriptionShort: "Activate to summon a healing Lightwell",
        descriptionLong: "Summon a Lightwell that periodically heals a nearby allied Hero for 50 (+4% / level). The well only fades after healing 15 times or when recast. This cooldown is reduced by 1 second each time Anduin heals an allied Hero.",
        cooldown: 75,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_lightwell.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 13.2,
          magicalDamage: 0
        },
        order: 3,
        tier: "level1"
      }
    ],
    [
      {
        id: "AnduinDivineStarMoralCompass",
        name: "Moral Compass",
        descriptionShort: "Divine Star fires Basic Attacks at its apex",
        descriptionLong: "Divine Star fires Basic Attacks at Heroes close to its apex. Passive: Increase Attack Range by 1.1.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_divine_star.png",
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
          "AnduinDivineStar"
        ]
      },
      {
        id: "AnduinSurgeofLight",
        name: "Surge of Light",
        descriptionShort: "Chastise empowers Basic Attacks",
        descriptionLong: "Basic Attacks reduce the cooldown of Chastise by 0.75 seconds. Basic Attacks against Heroes Rooted by Chastise launch an additional Basic Attack and restore 25 Mana.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_chastise.png",
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
          "AnduinChastise"
        ]
      },
      {
        id: "AnduinPiercingLight",
        name: "Piercing Light",
        descriptionShort: "Chastise pierces, grants Spell Power",
        descriptionLong: "Chastise pierces to hit an additional Hero. Quest: Hitting two Heroes with a single Chastise permanently increases Spell Power by 1, to a maximum of 10.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_chastise_a.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "AnduinChastise"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "AnduinFlashHealBindingHeal",
        name: "Binding Heal",
        descriptionShort: "Flash Heal also heals Anduin",
        descriptionLong: "Casting Flash Heal on an ally heals Anduin for 135 (+4% / level).",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_flash_heal.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 27,
          magicalDamage: 0
        },
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "AnduinFlashHeal"
        ]
      },
      {
        id: "AnduinBlessedRecovery",
        name: "Blessed Recovery",
        descriptionShort: "Recover Health after taking high damage",
        descriptionLong: "If Anduin loses more than 8% of his maximum Health at once, recover 15% Health over 3 seconds. This effect has a 10 second cooldown. Current Health required: 133 (+4% / level)",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_blessed_recovery.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level7"
      },
      {
        id: "AnduinFlashHealDesperatePrayer",
        name: "Desperate Prayer",
        descriptionShort: "Activate to desperately heal an allied Hero",
        descriptionLong: "Activate to instantly heal an allied Hero for 375 (+4% / level), but kneel for 2 seconds, unable to act.",
        cooldown: 35,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_desperate_prayer.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 75,
          magicalDamage: 0
        },
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
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 6,
          magicalDamage: 0
        },
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
        descriptionLong: "Imbue an allied Hero with the Light. After 1.5 seconds, it explodes, dealing 150 (+4% / level) damage to enemies and Stunning them for 1.25 seconds. The target gains a Shield that absorbs 165 (+4% / level) damage per enemy Hero hit. Lasts for 5 seconds.",
        cost: {
          type: "Mana",
          amount: 70
        },
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_light_bomb.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 30
        },
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
        descriptionLong: "While Divine Star is traveling, gain 30% Movement Speed. Each allied Hero healed by Divine Star on its return to Anduin reduces its cooldown by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_divine_star.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.2,
          magicalDamage: 0
        },
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "AnduinDivineStar"
        ]
      },
      {
        id: "AnduinPushForward",
        name: "Push Forward!",
        descriptionShort: "Damage Heroes for Move Speed, increased healing",
        descriptionLong: "Damaging an enemy Hero increases Movement Speed by 2.5% and the amount healed by Pursued By Grace by 5% for 6 seconds. These effects stack up to 8 times.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_varians_legacy.png",
        isPassive: false,
        analysis: {
          mobility: 0.4,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.4,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13"
      },
      {
        id: "AnduinLeapOfFaithEnchantBootsLionsSpeed",
        name: "Enchant Boots - Lion's Speed",
        descriptionShort: "Leap of Faith grants Move Speed, heals",
        descriptionLong: "Gain 5% Movement Speed. This bonus is quadrupled while Leap of Faith's cooldown is available. Allies pulled by Leap of Faith are healed for 280 (+4% / level) over 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_leap_of_faith.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 56,
          magicalDamage: 0
        },
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "AnduinLeapOfFaithInstant"
        ]
      }
    ],
    [
      {
        id: "AnduinFlashHealRenew",
        name: "Renew",
        descriptionShort: "Flash Heal heals over time",
        descriptionLong: "Flash Heal heals an additional 180 (+4% / level) over 6 seconds. The duration of this heal is refreshed each time Anduin hits an enemy Hero with a Basic Attack.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_flash_heal.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 37.2,
          magicalDamage: 0
        },
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
        descriptionLong: "After Anduin catches Divine Star, it explodes, healing nearby allied Heroes for 105 (+4% / level) and damaging enemies for 150 (+4% / level).",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_divine_star.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 21,
          magicalDamage: 0
        },
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "AnduinDivineStar"
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
          "AnduinLeapOfFaithInstant"
        ]
      },
      {
        id: "AnduinFlashHealInnerFocus",
        name: "Inner Focus",
        descriptionShort: "Activate to reset Flash Heal cooldown",
        descriptionLong: "Activate to reset the cooldown of Flash Heal and its next cast heals for 25% more. Damaging enemy Heroes reduces this cooldown by 1 second.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_inner_focus.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 5,
          magicalDamage: 0
        },
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
          "AnduinHolyWordSalvation"
        ],
        prerequisiteTalentIds: [
          "AnduinHolyWordSalvation"
        ]
      },
      {
        id: "AnduinInnerFire",
        name: "Inner Fire",
        descriptionShort: "Lightbomb increases Move Speed, grants Armor",
        descriptionLong: "The target of Light Bomb gains 40% Move Speed and 50 Armor for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_light_bomb.png",
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
          "AnduinLightBomb"
        ],
        prerequisiteTalentIds: [
          "AnduinLightBomb"
        ]
      },
      {
        id: "AnduinCensure",
        name: "Censure",
        descriptionShort: "Chastise Stuns, increased Root duration",
        descriptionLong: "Chastise Stuns for 0.75 seconds and its Root duration is increased by 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anduin_chastise.png",
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
          "AnduinChastise"
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
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.6000000000000001,
          magicalDamage: 0
        },
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "AnduinLeapOfFaithInstant"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 50.16949152542374,
    physicalDamage: 42.5,
    mobility: 24.006944444444446,
    healing: 12.753552775416011,
    magicalDamage: 4.815033742180187
  }
};
