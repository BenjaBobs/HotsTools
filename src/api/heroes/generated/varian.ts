import { Hero } from '../heroes';
      
const varian: Hero = {
  name: "Varian",
  nameNormalized: "varian",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.75,
  movementSpeed: 4.8398,
  health: {
    amount: 2220,
    scale: 0.04,
    regenRate: 4.625,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "VarianHeroWeaponBase",
      range: 1.25,
      period: 0.8,
      damage: 74,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/varian.png",
  abilities: [
    {
      id: "VarianHeroicStrike",
      name: "Heroic Strike",
      descriptionShort: "Deal bonus damage on next Basic Attack",
      descriptionLong: "Every 18 seconds, Varian's next Basic Attack deals 125 (+4% / level) bonus Spell Damage. Basic Attacks reduce this cooldown by 2 seconds.",
      cooldown: 18,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_heroicstrike.png",
      isPassive: true
    },
    {
      id: "VarianLionsFang",
      name: "Lion's Fang",
      descriptionShort: "Damage and Slow enemies in a line and heal Varian",
      descriptionLong: "Create a shockwave that travels in a straight line, dealing 150 (+4% / level) damage and Slowing enemies by 35% for 1.5 seconds. Each enemy hit heals Varian for 35 (+4% / level), increased to 140 (+4% / level) against Heroes.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 8,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_lionsfang.png",
      isPassive: false
    },
    {
      id: "VarianParry",
      name: "Parry",
      descriptionShort: "Block incoming Basic Attacks for a short duration",
      descriptionLong: "Parry all incoming Basic Attacks for 1.25 seconds, reducing their damage by 100%.Stores up to 2 charges.",
      cost: {
        type: "Mana",
        amount: 30
      },
      cooldown: 10,
      charges: {
        chargesMax: 2,
        chargesInitial: 2,
        chargeCost: 1,
        recastCooldown: 10
      },
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_parry.png",
      isPassive: false
    },
    {
      id: "VarianCharge",
      name: "Charge",
      descriptionShort: "Charge to an enemy and damage them",
      descriptionLong: "Charge to the target enemy, dealing 50 (+4% / level) damage and Slowing them by 75% for 1 second.",
      cost: {
        type: "Mana",
        amount: 45
      },
      cooldown: 12,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_charge.png",
      isPassive: false
    },
    {
      id: "VarianTaunt",
      name: "Taunt",
      descriptionShort: "Gain HealthForce a Hero to attack Varian",
      descriptionLong: "Silence a target Hero and force them to attack Varian for 1.25 seconds.Passive: Maximum Health and Health Regeneration increased by 40%.",
      cost: {
        type: "Mana",
        amount: 20
      },
      cooldown: 16,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_taunt.png",
      isPassive: false
    },
    {
      id: "VarianColossusSmash",
      name: "Colossus Smash",
      descriptionShort: "Gain Damage, Lose HealthSmash enemies and lower their Armor",
      descriptionLong: "Smash a target enemy, dealing 160 (+4% / level) damage and lowering their Armor by 20 for 3 seconds, causing them to take 20% increased damage.Passive: Base Attack Damage increased by 100%.Passive: Maximum Health and Health Regeneration reduced by 10%.",
      cost: {
        type: "Mana",
        amount: 40
      },
      cooldown: 20,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_colossus_smash.png",
      isPassive: false
    },
    {
      id: "VarianTwinBladesOfFury",
      name: "Twin Blades of Fury",
      descriptionShort: "Gain Attack Speed, Lose DamageBasic Attacks reduce Heroic Strike cooldown",
      descriptionLong: "Basic Attacks reduce Heroic Strike's cooldown by 9 seconds, and increase Varian's Movement Speed by 30% for 2 seconds.Passive: Attack Speed increased by 100%.Passive: Base Attack Damage reduced by 25%.",
      cooldown: null,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_twinbladesoffury.png",
      isPassive: true
    },
    {
      id: "VarianHeroicStrikeActive",
      name: "Heroic Strike",
      descriptionShort: "Bonus Basic Attack damage",
      descriptionLong: "Every 18 seconds, Varian's next Basic Attack deals 125 (+4% / level) bonus Spell Damage. Basic Attacks reduce this cooldown by 2 seconds.",
      cooldown: 18,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_heroicstrike.png",
      isPassive: true
    }
  ],
  talents: [
    [
      {
        id: "VarianLionsFangLionsMawQuest",
        name: "Lion's Maw",
        descriptionShort: "Quest: Hit Heroes to empower Lion's Fang",
        descriptionLong: "Quest: Every time Lion's Fang hits a Hero, increase its damage by 6, up to 150.Reward: After hitting 25 Heroes, the Slow is increased to 50% and its duration is increased to 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_lionsfang.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "VarianLionsFang"
        ],
        isQuest: true
      },
      {
        id: "VarianParryOverpower",
        name: "Overpower",
        descriptionShort: "Parrying a Hero's attack will refresh Heroic Strike",
        descriptionLong: "When Parry blocks a Hero's Basic Attack, Heroic Strike's cooldown is refreshed and the next one does 40% more damage.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: null
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_parry.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "VarianParry"
        ]
      },
      {
        id: "VarianHighKingsQuestQuest",
        name: "High King's Quest",
        descriptionShort: "Quest:  Complete Quests to gain Attack Damage",
        descriptionLong: "Quest: Hit 50 Heroes with Basic Attacks.Quest: Participate in 5 Hero Takedowns.Quest: Gather 15 Regeneration Globes.Reward: Completing a Quest grants 10 Base Attack Damage. Completing all 3 Quests grants an additional 30 Base Attack Damage.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_highkingsquest.png",
        isPassive: false,
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "VarianHeroicStrikeActive",
          "VarianHeroicStrike"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "VarianTaunt",
        name: "Taunt",
        descriptionShort: "Gain HealthForce a Hero to attack Varian",
        descriptionLong: "Silence a target Hero and force them to attack Varian for 1.25 seconds.Passive: Maximum Health and Health Regeneration increased by 40%.",
        cost: {
          type: "Mana",
          amount: 20
        },
        cooldown: 16,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_taunt.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "VarianTaunt"
        ]
      },
      {
        id: "VarianColossusSmash",
        name: "Colossus Smash",
        descriptionShort: "Gain Damage, Lose HealthSmash enemies and lower their Armor",
        descriptionLong: "Smash a target enemy, dealing 160 (+4% / level) damage and lowering their Armor by 20 for 3 seconds, causing them to take 20% increased damage.Passive: Base Attack Damage increased by 100%.Passive: Maximum Health and Health Regeneration reduced by 10%.",
        cost: {
          type: "Mana",
          amount: 40
        },
        cooldown: 20,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_colossus_smash.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "VarianColossusSmash"
        ]
      },
      {
        id: "VarianTwinBladesOfFury",
        name: "Twin Blades of Fury",
        descriptionShort: "Gain Attack Speed, Lose DamageBasic Attacks reduce Heroic Strike cooldown",
        descriptionLong: "Basic Attacks reduce Heroic Strike's cooldown by 9 seconds, and increase Varian's Movement Speed by 30% for 2 seconds.Passive: Attack Speed increased by 100%.Passive: Base Attack Damage reduced by 25%.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_twinbladesoffury.png",
        isPassive: false,
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "VarianTwinBladesOfFury"
        ]
      }
    ],
    [
      {
        id: "VarianLionsFangLionheart",
        name: "Lionheart",
        descriptionShort: "Increase Lion's Fang healing",
        descriptionLong: "Increase Lion's Fang's healing from Heroes by 75%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_lionsfang.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "VarianLionsFang"
        ]
      },
      {
        id: "VarianSecondWind",
        name: "Second Wind",
        descriptionShort: "Basic Attacks heal, more when low Health",
        descriptionLong: "Basic Attacks heal Varian for 1% of his maximum Health. While below 50% Health, they also heal him for 50% of the damage dealt.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_secondwind.png",
        isPassive: false,
        order: 2,
        tier: "level7"
      },
      {
        id: "VarianVictoryRush",
        name: "Victory Rush",
        descriptionShort: "Basic Attacks periodically grant a large heal",
        descriptionLong: "Every 30 seconds, Varian's next Basic Attack will heal him for 350 (+4% / level) Health. When a nearby enemy Minion or Monster dies, the cooldown is reduced by 10 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_victoryrush.png",
        isPassive: false,
        order: 3,
        tier: "level7"
      }
    ],
    [
      {
        id: "VarianParryShieldWall",
        name: "Shield Wall",
        descriptionShort: "Parry grants Protected",
        descriptionLong: "Parry grants Protected, preventing all incoming damage while active. Additionally, Parry's cooldown is reduced by 5 seconds, but it loses 1 charge.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: null
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_parry.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "VarianParry"
        ]
      },
      {
        id: "VarianChargeWarbringer",
        name: "Warbringer",
        descriptionShort: "Reduce Charge cooldown, can be used on allies",
        descriptionLong: "Reduce Charge's cooldown by 8 seconds and Mana cost from 45 to 22. Additionally, Charge can be cast on allied Heroes.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_charge.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "VarianCharge"
        ]
      }
    ],
    [
      {
        id: "VarianChargeJuggernaut",
        name: "Juggernaut",
        descriptionShort: "Increase Charge damage",
        descriptionLong: "Charge deals bonus damage to Heroes equal to 4% of their maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_charge.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "VarianCharge"
        ]
      },
      {
        id: "VarianMortalStrike",
        name: "Mortal Strike",
        descriptionShort: "Heroic Strike reduces enemy healing",
        descriptionLong: "Heroes hit by Heroic Strike receive 40% reduced healing for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_mortalstrike.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "VarianHeroicStrikeActive",
          "VarianHeroicStrike"
        ]
      },
      {
        id: "VarianShatteringThrow",
        name: "Shattering Throw",
        descriptionShort: "Deal massive damage to enemy Shields",
        descriptionLong: "Activate to throw a sword at a target Hero that deals 50 (+4% / level) damage, and up to 1400 (+4% / level) bonus damage to their Shields.Passive: Basic Attacks against Heroes deal up to 200% bonus Physical Damage to Shields.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_shatteringthrow.png",
        isPassive: false,
        order: 3,
        tier: "level13"
      }
    ],
    [
      {
        id: "VarianBannerOfStormwind",
        name: "Banner of Stormwind",
        descriptionShort: "Banner that grants Movement Speed",
        descriptionLong: "Activate to place a Banner that grants 25% increased Movement Speed to nearby allied Heroes. Lasts 12 seconds.",
        cooldown: 25,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_bannerofstormwind.png",
        isPassive: false,
        order: 1,
        tier: "level16"
      },
      {
        id: "VarianBannerOfIronforge",
        name: "Banner of Ironforge",
        descriptionShort: "Banner that grants Armor",
        descriptionLong: "Activate to place a Banner that grants 20 Armor to nearby allied Heroes, reducing damage taken by 20%. Lasts 12 seconds.",
        cooldown: 45,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_bannerofironforge.png",
        isPassive: false,
        order: 2,
        tier: "level16"
      },
      {
        id: "VarianBannerOfDalaran",
        name: "Banner of Dalaran",
        descriptionShort: "Banner that grants Spell Power",
        descriptionLong: "Activate to place a Banner that grants 20% increased Spell Power to nearby allied Heroes. Lasts 12 seconds.",
        cooldown: 25,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_bannerofdalaran.png",
        isPassive: false,
        order: 3,
        tier: "level16"
      }
    ],
    [
      {
        id: "VarianTauntVigilance",
        name: "Vigilance",
        descriptionShort: "Incoming attacks reduce Taunt cooldown",
        descriptionLong: "Being hit by a Hero Basic Attack reduces the cooldown of Taunt by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_taunt.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "VarianTaunt"
        ],
        prerequisiteTalentIds: [
          "VarianTaunt"
        ]
      },
      {
        id: "VarianColossusSmashMasterAtArms",
        name: "Master at Arms",
        descriptionShort: "Colossus Smash hits enemies near the target",
        descriptionLong: "Colossus Smash affects all enemies near the target, and its cooldown is reduced by 10 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_colossus_smash.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "VarianColossusSmash"
        ],
        prerequisiteTalentIds: [
          "VarianColossusSmash"
        ]
      },
      {
        id: "VarianTwinBladesOfFuryFrenzy",
        name: "Frenzy",
        descriptionShort: "Increase Twin Blades of Fury bonuses",
        descriptionLong: "Twin Blades of Fury increases Heroic Strike damage by an additional 25%, and Basic Attacks increase his Movement Speed by an additional 10%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_twinbladesoffury.png",
        isPassive: false,
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "VarianTwinBladesOfFury"
        ],
        prerequisiteTalentIds: [
          "VarianTwinBladesOfFury"
        ]
      },
      {
        id: "VarianBannersGloryToTheAlliance",
        name: "Glory to the Alliance",
        descriptionShort: "Banner also increases healing effects",
        descriptionLong: "Banner now also increases health regeneration and all healing received for nearby allied Heroes by 50%, and the cooldown is reduced by 50%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_glorytothealliance.png",
        isPassive: false,
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "VarianBannerOfStormwind",
          "VarianBannerOfIronforge",
          "VarianBannerOfDalaran"
        ]
      },
      {
        id: "VarianDemoralizingShout",
        name: "Demoralizing Shout",
        descriptionShort: "Reduce damage of nearby Heroes",
        descriptionLong: "Activate to demoralize nearby enemy Heroes, reducing damage they deal by 40% for 5 seconds.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_varian_demoralizingshout.png",
        isPassive: false,
        order: 5,
        tier: "level20"
      }
    ]
  ]
};
      
export default varian;