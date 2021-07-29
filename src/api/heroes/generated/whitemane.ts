import { Hero } from '../heroes';
      
const whitemane: Hero = {
  name: "Whitemane",
  nameNormalized: "whitemane",
  franchise: "Warcraft",
  gender: "Female",
  size: 0.625,
  movementSpeed: 4.8398,
  health: {
    amount: 1400,
    scale: 0.04,
    regenRate: 2.9218,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "WhitemaneHeroWeapon",
      range: 5.5,
      period: 1,
      damage: 62,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/whitemane.png",
  abilities: [
    {
      id: "WhitemaneFanaticalPower",
      name: "Zeal",
      descriptionShort: "Heal marked allies for damage dealt",
      descriptionLong: "Whitemane's healing Abilities apply Zeal for 8 seconds. Allies with Zeal are healed for 100% of the damage Whitemane deals to Heroes.Activate to gain 25% Spell Power and lose 25 Armor for 5 seconds. Can be cast while channeling abilities.",
      cooldown: 40,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_zeal.png",
      isPassive: false
    },
    {
      id: "WhitemaneDesperatePlea",
      name: "Desperate Plea",
      descriptionShort: "Heal an allied Hero",
      descriptionLong: "Heal an allied Hero for 140 (+4% / level) and gain Desperation for 4 seconds.Desperation increases Desperate Plea's Mana cost by 45, and stacks up to 3 times.Current Mana Cost: 45",
      cost: {
        type: "Mana",
        amount: 45
      },
      cooldown: null,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_desperation.png",
      isPassive: false
    },
    {
      id: "WhitemaneInquisition",
      name: "Inquisition",
      descriptionShort: "Damage or heal Heroes",
      descriptionLong: "Channel on an enemy Hero for up to 3 seconds, dealing 50 (+4% / level) damage every 0.5 seconds and Slowing them by 30%. Removes a stack of Desperation.Shares a cooldown with Clemency.",
      cooldown: 12,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_inquisition.png",
      isPassive: false
    },
    {
      id: "WhitemaneSearingLash",
      name: "Searing Lash",
      descriptionShort: "Damage enemies in a line",
      descriptionLong: "After 0.5 seconds, smite enemies in a straight line for 82 (+4% / level) damage.If the first strike hits an enemy Hero, a second strike will occur after a short delay.",
      cooldown: 6,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_lash.png",
      isPassive: false
    },
    {
      id: "WhitemaneScarletAegis",
      name: "Scarlet Aegis",
      descriptionShort: "Heal and grant Armor to nearby allies",
      descriptionLong: "Bolster the spirits of nearby allied Heroes, healing them for 300 (+4% / level) and granting them 40 Armor for 4 seconds.",
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_aegis.png",
      isPassive: false
    },
    {
      id: "WhitemaneDivineReckoning",
      name: "Divine Reckoning",
      descriptionShort: "Consecrate an area",
      descriptionLong: "After 1 second, consecrate an area for 4 seconds, dealing 50 (+4% / level) damage every 0.5 seconds to enemies inside. 25% of the damage dealt to Heroes is returned as Mana.",
      cooldown: 75,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_reckoning.png",
      isPassive: false
    },
    {
      id: "WhitemaneInquisitionCancel",
      name: "Inquisition (Cancel)",
      descriptionShort: "Cancel Inquisition",
      descriptionLong: "Stop Channeling Inquisition.",
      cooldown: null,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/hud_btn_bg_ability_cancel.png",
      isPassive: false
    },
    {
      id: "WhitemaneInquisitionCancel",
      name: "Inquisition (Cancel)",
      descriptionShort: "Cancel Inquisition",
      descriptionLong: "Stop Channeling Inquisition.",
      cooldown: null,
      category: "activable",
      type: "Active",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/hud_btn_bg_ability_cancel.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "WhitemaneZealPityTheFrail",
        name: "Pity the Frail",
        descriptionShort: "Searing Lash lowers Inquisition cooldown",
        descriptionLong: "For every Hero hit with Searing Lash, lower the cooldown of Inquisition by 1.5 seconds. Allies below 30% Health receive 25% more healing from Whitemane.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_inquisition_lash.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "WhitemaneInquisition"
        ]
      },
      {
        id: "WhitemaneSearingLashRighteousFlame",
        name: "Righteous Flame",
        descriptionShort: "Increase Searing Lash damage",
        descriptionLong: "Searing Lash deals 25% more damage to enemies. If the second strike hits an enemy Hero, they take an additional 25% damage and Whitemane gains 40% Attack Speed for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_lash.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "WhitemaneSearingLash"
        ]
      },
      {
        id: "WhitemaneInquisitorsPrayer",
        name: "Inquisitor's Prayer",
        descriptionShort: "Quest: Searing Lash increases Health and Mana",
        descriptionLong: "Quest: Hit Heroes with Searing Lash.Reward: Each Hero hit grants 3 permanent Health and 2 permanent Mana. Heroes hit with the second strike count as 2 hits.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_lash_alt_1.png",
        isPassive: false,
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "WhitemaneSearingLash"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "WhitemaneDesperatePleaUnwaveringFaith",
        name: "Unwavering Faith",
        descriptionShort: "Increase Basic Attack range and damage",
        descriptionLong: "Increase Whitemane's Basic Attack range by 1.1. Whitemane gains 20% increased Basic Attack damage for each active Zeal buff.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_desperation.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "WhitemaneDesperatePlea"
        ]
      },
      {
        id: "WhitemaneDesperatePleaMartyrdom",
        name: "Martyrdom",
        descriptionShort: "Zeal increases Desperate Plea's healing",
        descriptionLong: "Desperate Plea's healing is increased by 30%. Increase this by an additional 10% for each active Zeal.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_desperation_alt_1.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "WhitemaneDesperatePlea"
        ]
      },
      {
        id: "WhitemaneZealIndulgence",
        name: "Indulgence",
        descriptionShort: "Zeal grants Movement Speed",
        descriptionLong: "Gain 5% Movement Speed. Increase this by an additional 5% for each active Zeal.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_zeal.png",
        isPassive: false,
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "WhitemaneFanaticalPower"
        ]
      }
    ],
    [
      {
        id: "WhitemaneDesperatePleaZealousSpirit",
        name: "Zealous Spirit",
        descriptionShort: "Desperation grants Whitemane Zeal",
        descriptionLong: "Upon reaching 2 stacks of Desperation, Whitemane gains Zeal.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_desperation.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "WhitemaneDesperatePlea"
        ]
      },
      {
        id: "WhitemaneSaintlyGreatstaff",
        name: "Saintly Greatstaff",
        descriptionShort: "Searing Lash empowers Basic Attacks",
        descriptionLong: "Enemy Heroes hit by Searing Lash are marked for 3 seconds. Basic Attacks against them deal an additional 55 (+4% / level) Spell damage and remove the mark.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_lash_alt_1.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "WhitemaneSearingLash"
        ]
      },
      {
        id: "WhitemaneIntercession",
        name: "Intercession",
        descriptionShort: "Make an ally Unstoppable",
        descriptionLong: "Activate to make an ally Unstoppable for 1 second and gain 1 stack of Desperation.",
        cooldown: 45,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_intercession.png",
        isPassive: false,
        order: 3,
        tier: "level7"
      }
    ],
    [
      {
        id: "WhitemaneScarletAegis",
        name: "Scarlet Aegis",
        descriptionShort: "Heal and grant Armor to nearby allies",
        descriptionLong: "Bolster the spirits of nearby allied Heroes, healing them for 300 (+4% / level) and granting them 40 Armor for 4 seconds.",
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_aegis.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "WhitemaneScarletAegis"
        ]
      },
      {
        id: "WhitemaneDivineReckoning",
        name: "Divine Reckoning",
        descriptionShort: "Consecrate an area",
        descriptionLong: "After 1 second, consecrate an area for 4 seconds, dealing 50 (+4% / level) damage every 0.5 seconds to enemies inside. 25% of the damage dealt to Heroes is returned as Mana.",
        cooldown: 75,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_reckoning.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "WhitemaneDivineReckoning"
        ]
      }
    ],
    [
      {
        id: "WhitemaneInquisitionSubjugation",
        name: "Subjugation",
        descriptionShort: "Inquisition reduces enemy damage",
        descriptionLong: "Inquisition reduces all damage the target deals by 50%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_inquisition.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "WhitemaneInquisition"
        ]
      },
      {
        id: "WhitemaneSearingLashLashingOut",
        name: "Lashing Out",
        descriptionShort: "Reduce Searing Lash cooldown",
        descriptionLong: "If Searing Lash's second strike hits an enemy Hero, reduce its cooldown to 1 second.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_lash.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "WhitemaneSearingLash"
        ]
      },
      {
        id: "WhitemaneZealScarletWrath",
        name: "Scarlet Wrath",
        descriptionShort: "Basic Attacks increase Zeal duration",
        descriptionLong: "Basic Attacks against Heroes increase the duration of all active Zeals by 0.75 seconds and lower the cooldown of Zeals activation by 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_zeal.png",
        isPassive: false,
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "WhitemaneFanaticalPower"
        ]
      }
    ],
    [
      {
        id: "WhitemaneDesperatePleaRadiance",
        name: "Radiance",
        descriptionShort: "Desperation heals allies with Zeal",
        descriptionLong: "Upon reaching 3 stacks of Desperation, all allies with Zeal are healed for 175 (+4% / level). Activating Zeal while at 3 stacks of Desperation now increases Armor by 15 instead of reducing it.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_desperation.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "WhitemaneDesperatePlea"
        ]
      },
      {
        id: "WhitemaneInquisitionSharedPunishment",
        name: "Shared Punishment",
        descriptionShort: "Inquisition chains to a nearby enemy, lowers Armor",
        descriptionLong: "Upon casting, Inquisition can chain to an additional enemy Hero near its target, dealing 35 (+4% / level) damage every 0.5 seconds. Affected enemies lose 10 Armor.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_inquisition.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "WhitemaneInquisition"
        ]
      },
      {
        id: "WhitemaneSearingLashHarshDiscipline",
        name: "Harsh Discipline",
        descriptionShort: "Searing Lash Roots Inquisition target",
        descriptionLong: "Hitting a Hero with Searing Lash while they are being targeted by Inquisition Roots them for 1.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_lash.png",
        isPassive: false,
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "WhitemaneSearingLash"
        ]
      }
    ],
    [
      {
        id: "WhitemaneScarletAegisScarletCrusade",
        name: "Scarlet Crusade",
        descriptionShort: "Scarlet Aegis makes allies Unstoppable",
        descriptionLong: "Scarlet Aegis heals for 50% more and makes affected allies Unstoppable for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_aegis.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "WhitemaneScarletAegis"
        ],
        prerequisiteTalentIds: [
          "WhitemaneScarletAegis"
        ]
      },
      {
        id: "WhitemaneDivineReckoningJudgmentDay",
        name: "Judgment Day",
        descriptionShort: "Divine Reckoning pulls in enemies",
        descriptionLong: "Divine Reckoning deals 50% more damage and pulls enemies to its center the first time it hits them.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_reckoning.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "WhitemaneDivineReckoning"
        ],
        prerequisiteTalentIds: [
          "WhitemaneDivineReckoning"
        ]
      },
      {
        id: "WhitemaneGuidingLight",
        name: "Guiding Light",
        descriptionShort: "Activate to cast a free Zeal",
        descriptionLong: "Activate to cast a permanent Zeal on an allied Hero that costs no Mana and doesn't grant Desperation. Only one can be active at a time and has global cast range.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_zeal.png",
        isPassive: false,
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "WhitemaneDesperatePlea"
        ]
      },
      {
        id: "WhitemanePurgeTheWicked",
        name: "Purge the Wicked",
        descriptionShort: "Activate to damage, reduce Armor",
        descriptionLong: "Activate to blast an enemy Hero with holy fire, reducing their Armor by 25 and dealing 300 (+4% / level) damage over 4 seconds.",
        cooldown: 40,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_whitemane_purge.png",
        isPassive: false,
        order: 4,
        tier: "level20"
      }
    ]
  ]
};
      
export default whitemane;