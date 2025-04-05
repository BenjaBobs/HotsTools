import { Hero } from '../heroes';
      
export const yrel: Hero = {
  name: "Yrel",
  nameNormalized: "yrel",
  franchise: "Warcraft",
  gender: "Female",
  size: 0.75,
  movementSpeed: 4.8398,
  health: {
    amount: 2678,
    scale: 0.04,
    regenRate: 5.418,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "YrelHeroWeapon",
      range: 1.5,
      period: 1.3,
      damage: 155,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/yrel.png",
  abilities: [
    {
      id: "YrelDivinePurpose",
      name: "Divine Purpose",
      descriptionShort: "Make next Basic Ability cast instantly",
      descriptionLong: "Activate to instantly charge Yrel's next Basic Ability at no mana cost. Divine Purpose's cooldown is reset when Yrel casts a Heroic ability. Passive: Yrel's Basic Abilities charge up over 1.5 seconds, increasing in effectiveness, but reducing Yrel's Movement Speed by 25%.",
      cooldown: 8,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_divine_purpose.png",
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
      id: "YrelVindication",
      name: "Vindication",
      descriptionShort: "Restore Health, damage enemies",
      descriptionLong: "Unleash holy energy around Yrel, dealing 42 (+4% / level) damage to nearby enemies and healing her for 96 (+4% / level). Charging up this Ability increases its damage up to 140 (+4% / level), and healing up to 320 (+4% / level).",
      cost: {
        type: "Mana",
        amount: 65
      },
      cooldown: 6,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_vindication.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 118,
        magicalDamage: 21
      }
    },
    {
      id: "YrelRighteousHammerChannel",
      name: "Righteous Hammer",
      descriptionShort: "Knockback and Stun enemies",
      descriptionLong: "Swing Yrel's hammer, dealing 38 (+4% / level) damage to enemies in front of her and knocking them away. Charging up this Ability increases its knockback distance, and damage up to 125 (+4% / level). Enemies hit at maximum charge are Stunned for 0.75 seconds.",
      cost: {
        type: "Mana",
        amount: 65
      },
      cooldown: 6,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_righteous_hammer.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 19
      }
    },
    {
      id: "YrelAvengingWrath",
      name: "Avenging Wrath",
      descriptionShort: "Leap to an area to damage, Slow enemies",
      descriptionLong: "Leap to a location, dealing 225 (+4% / level) damage to enemies in an area and Slowing them by 50% for 1 second. Charging up this Ability increases its range.",
      cost: {
        type: "Mana",
        amount: 65
      },
      cooldown: 6,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_avenging_wrath.png",
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
      id: "YrelArdentDefender",
      name: "Ardent Defender",
      descriptionShort: "Convert damage taken to Health",
      descriptionLong: "Surround Yrel in a barrier for 3 seconds, absorbing all damage taken and healing her for 50% of the damage received.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 120,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_ardent_defender.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 10,
        magicalDamage: 0
      }
    },
    {
      id: "YrelSacredGround",
      name: "Sacred Ground",
      descriptionShort: "Yrel gains Armor in an area",
      descriptionLong: "Yrel sanctifies the ground around her, gaining 50 Armor until she leaves the area.",
      cooldown: 25,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_sacred_ground.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 10,
        healing: 0,
        magicalDamage: 0
      }
    }
  ],
  talents: [
    [
      {
        id: "YrelVindicationLightOfKarabor",
        name: "Light of Karabor",
        descriptionShort: "Increase Vindication radius, healing",
        descriptionLong: "Increase Vindication's radius by 15%. Hitting an enemy Hero increases Vindication's healing by 45%. If more than one Hero is hit, the bonus is increased to 90%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_vindication.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 9,
          magicalDamage: 0
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "YrelVindicationCast",
          "YrelVindication"
        ]
      },
      {
        id: "YrelDauntless",
        name: "Dauntless",
        descriptionShort: "Basic Abilities grant Physical Armor",
        descriptionLong: "Casting a Basic Ability grants Yrel 35 Physical Armor for 2.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_abilitytalent_armor.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level1"
      },
      {
        id: "YrelMaraadsInsight",
        name: "Maraad's Insight",
        descriptionShort: "Attacking after Basic Abilities heals",
        descriptionLong: "After damaging an enemy Hero with a Basic Ability, Yrel's next Basic Attack heals her for 160 (+4% / level).",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_heal.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 32,
          magicalDamage: 0
        },
        order: 3,
        tier: "level1"
      }
    ],
    [
      {
        id: "YrelAvengingWrathAegisOfLight",
        name: "Aegis of Light",
        descriptionShort: "Avenging Wrath grants allies Armor",
        descriptionLong: "Upon landing, Avenging Wrath grants other nearby allied Heroes 40 Armor for 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_avenging_wrath.png",
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
          "YrelAvengingWrathDivinePurpose",
          "YrelAvengingWrath",
          "YrelAvengingWrathChannel"
        ]
      },
      {
        id: "YrelDivinePurposeGiftOfTheNaaru",
        name: "Gift of the Naaru",
        descriptionShort: "Divine Purpose heals an ally",
        descriptionLong: "Divine Purpose heals the lowest Health nearby allied Hero other than Yrel for 275 (+4% / level).",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_divine_purpose.png",
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
          "YrelDivinePurpose"
        ]
      },
      {
        id: "YrelHandOfFreedom",
        name: "Hand of Freedom",
        descriptionShort: "Grants Move Speed, removes Slows, Roots",
        descriptionLong: "Grant an allied Hero 30% Movement Speed for 3 seconds and remove all Slows and Roots from them.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_hand_of_freedom.png",
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
        id: "YrelRighteousHammerRighteousMomentum",
        name: "Righteous Momentum",
        descriptionShort: "Righteous Hammer increases Movement Speed",
        descriptionLong: "Gain 5% Movement Speed. Yrel is no longer Slowed while Channeling Righteous Hammer, and instead this bonus is quadrupled.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_righteous_hammer.png",
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
          "YrelRighteousHammerDivinePurpose",
          "YrelRighteousHammer",
          "YrelRighteousHammerChannel"
        ]
      },
      {
        id: "YrelAvengingWrathHolyAvenger",
        name: "Holy Avenger",
        descriptionShort: "Avenging Wrath cooldown reduced at max charge",
        descriptionLong: "Hitting an enemy Hero with Avenging Wrath at maximum charge deals 25% more damage and reduces its cooldown to 1 second.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_avenging_wrath.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 5
        },
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "YrelAvengingWrathDivinePurpose",
          "YrelAvengingWrath",
          "YrelAvengingWrathChannel"
        ]
      },
      {
        id: "YrelDivineSteed",
        name: "Divine Steed",
        descriptionShort: "Mounting is instant",
        descriptionLong: "Mounting is instant and grants 60% Movement Speed that decays over 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_divine_steed.png",
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
          "YrelDivineSteedSummonMount"
        ]
      }
    ],
    [
      {
        id: "YrelArdentDefender",
        name: "Ardent Defender",
        descriptionShort: "Convert damage taken to Health",
        descriptionLong: "Surround Yrel in a barrier for 3 seconds, absorbing all damage taken and healing her for 50% of the damage received.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 120,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_ardent_defender.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 10,
          magicalDamage: 0
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "YrelArdentDefender"
        ]
      },
      {
        id: "YrelSacredGround",
        name: "Sacred Ground",
        descriptionShort: "Yrel gains Armor in an area",
        descriptionLong: "Yrel sanctifies the ground around her, gaining 50 Armor until she leaves the area.",
        cooldown: 25,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_sacred_ground.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 10,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "YrelSacredGround"
        ]
      }
    ],
    [
      {
        id: "YrelVindicationAldorPeacekeeper",
        name: "Aldor Peacekeeper",
        descriptionShort: "Vindication can reduce enemy damage",
        descriptionLong: "Enemy Heroes hit by Vindication at maximum charge deal 40% less damage for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_vindication.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 8
        },
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "YrelVindicationCast",
          "YrelVindication"
        ]
      },
      {
        id: "YrelAvengingWrathRepentance",
        name: "Repentance",
        descriptionShort: "Increase Avenging Wrath Slow, duration",
        descriptionLong: "Increase Avenging Wrath's Slow by 25% and duration by 0.75 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_avenging_wrath.png",
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
          "YrelAvengingWrathDivinePurpose",
          "YrelAvengingWrath",
          "YrelAvengingWrathChannel"
        ]
      },
      {
        id: "YrelVelensChosen",
        name: "Velen's Chosen",
        descriptionShort: "Basic Abilities can grant Spell Power",
        descriptionLong: "Hitting an enemy Hero with a Basic Ability at maximum charge grants 10% Spell Power for 10 seconds, up to 30%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_velens_chosen.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level13"
      }
    ],
    [
      {
        id: "YrelRighteousHammerTemplarsVerdict",
        name: "Templar's Verdict",
        descriptionShort: "Righteous Hammer reduces Armor, deals percent damage",
        descriptionLong: "Righteous Hammer reduces the Armor of enemy Heroes hit by 15 for 4 seconds and deals bonus damage equal to 6% of their maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_righteous_hammer.png",
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
          "YrelRighteousHammerDivinePurpose",
          "YrelRighteousHammer",
          "YrelRighteousHammerChannel"
        ]
      },
      {
        id: "YrelDivinePurposeDivineFavor",
        name: "Divine Favor",
        descriptionShort: "Basic Abilities reduce Divine Purpose cooldown",
        descriptionLong: "Casting a Basic Ability reduces the cooldown of Divine Purpose by 2.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_divine_purpose.png",
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
          "YrelDivinePurpose"
        ]
      },
      {
        id: "YrelHolyWrath",
        name: "Holy Wrath",
        descriptionShort: "Attacks splash after casting Basic Abilities",
        descriptionLong: "After casting a Basic Ability, Yrel's next Basic Attack splashes for 35% increased damage around the target.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_aoe.png",
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
        id: "YrelArdentDefenderWordOfGlory",
        name: "Word of Glory",
        descriptionShort: "Ardent Defender conversion increased, heals allies in an area",
        descriptionLong: "Increase the amount that Yrel heals from damage received from 50% to 75%. Ardent Defender heals nearby allied Heroes for 100% of the healing received by Yrel.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_ardent_defender.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 25,
          magicalDamage: 0
        },
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "YrelArdentDefender"
        ],
        prerequisiteTalentIds: [
          "YrelArdentDefender"
        ]
      },
      {
        id: "YrelSacredGroundHallowedGround",
        name: "Hallowed Ground",
        descriptionShort: "Avenging Wrath moves Sacred Ground",
        descriptionLong: "Casting Avenging Wrath while inside Sacred Ground moves Sacred Ground to Yrel's location upon landing.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_sacred_ground.png",
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
          "YrelSacredGround"
        ],
        prerequisiteTalentIds: [
          "YrelSacredGround"
        ]
      },
      {
        id: "YrelBubbleHearth",
        name: "Bubble Hearth",
        descriptionShort: "Activate to become Invulnerable and Hearth",
        descriptionLong: "After 1 second, Yrel becomes Invulnerable and casts Hearthstone. Cannot be canceled.",
        cooldown: 80,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_bubble_hearth.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level20"
      },
      {
        id: "YrelSeraphim",
        name: "Seraphim",
        descriptionShort: "Activate to become Unstoppable",
        descriptionLong: "Activate to become Unstoppable for 2 seconds.",
        cooldown: 10,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_yrel_seraphim.png",
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
  analysis: {
    tankiness: 80.69303201506591,
    physicalDamage: 59.61538461538461,
    mobility: 24.006944444444446,
    healing: 31.09437629053808,
    magicalDamage: 5.6339589182798875
  }
};
