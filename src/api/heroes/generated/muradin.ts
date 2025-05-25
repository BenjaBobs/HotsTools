import { Hero } from '../heroes';
      
export const muradin: Hero = {
  name: "Muradin",
  nameNormalized: "muradin",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.8125,
  movementSpeed: 4.8398,
  health: {
    amount: 2765,
    scale: 0.04,
    regenRate: 5.7617,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroMuradin",
      range: 1,
      period: 0.9,
      damage: 88,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/muradin.png",
  abilities: [
    {
      id: "MuradinSecondWind",
      name: "Second Wind",
      descriptionShort: "Restore Health when not taking damage",
      descriptionLong: "Muradin restores 55 (+4% / level) Health per second when he has not taken damage for 4 seconds. When below 40% Health, increased to 111 (+4% / level) Health per second.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_muradin_secondwind.png",
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
      id: "MuradinStormBolt",
      name: "Storm Bolt",
      descriptionShort: "Throw a hammer, stunning and damaging the first enemy hit",
      descriptionLong: "Throw a hammer, dealing 110 (+4% / level) damage to the first enemy hit and Stunning them for 1.25 seconds. After reaching level 10, Storm Bolt pierces to hit an additional target. Muradin's Basic Attacks reduce the cooldown of Storm Bolt by 1 second and restore 3 Mana.",
      cost: {
        type: "Mana",
        amount: 45
      },
      cooldown: 10,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_muradin_stormbolt.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 33
      }
    },
    {
      id: "MuradinThunderclap",
      name: "Thunder Clap",
      descriptionShort: "Slow and damage nearby enemies",
      descriptionLong: "Blast nearby enemies for 96 (+4% / level) damage and Slow them by 30% for 2.5 seconds. Heroes hit also have their Attack Speed reduced by 30% for the duration.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 8,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_muradin_thunderclap.png",
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
      id: "MuradinDwarfToss",
      name: "Dwarf Toss",
      descriptionShort: "Leap to an area, dealing damage to nearby enemies",
      descriptionLong: "Leap to target location, dealing 59 (+4% / level) damage to enemies on landing. Upon leaping, gain 30 Armor for 2 seconds, reducing damage taken by 30%.",
      cost: {
        type: "Mana",
        amount: 55
      },
      cooldown: 10,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_muradin_dwarftoss.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 9,
        healing: 0,
        magicalDamage: 17.7
      }
    },
    {
      id: "MuradinAvatar",
      name: "Avatar",
      descriptionShort: "Temporary Health boost",
      descriptionLong: "Transform for 20 seconds, gaining 1000 (+4% / level) Health.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 90,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_muradin_avatar.png",
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
      id: "MuradinHaymaker",
      name: "Haymaker",
      descriptionShort: "Stun and knock an enemy away",
      descriptionLong: "Stun target enemy Hero, and wind up a punch dealing 319 (+4% / level) damage and knocking the target back, hitting enemies in the way for 319 (+4% / level) damage and knocking them aside.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 40,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 0.75
      },
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_muradin_haymaker.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 63.800000000000004
      }
    }
  ],
  talents: [
    [
      {
        id: "MuradinStormboltPerfectStorm",
        name: "Perfect Storm",
        descriptionShort: "Quest: Hitting Heroes empowers Storm Bolt",
        descriptionLong: "Quest: Every time Muradin hits an enemy Hero with a Basic Attack, increase Storm Bolt's damage by 0.75. If an enemy Hero is killed within 3 seconds of being hit by a Storm Bolt increase its damage by an additional 10.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_muradin_stormbolt.png",
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
          "MuradinStormBolt"
        ],
        isQuest: true
      },
      {
        id: "MuradinDwarfBlock",
        name: "Dwarf Block",
        descriptionShort: "Dwarf Toss grants Physical Armor",
        descriptionLong: "Casting Dwarf Toss grants 4 charges of Block. Each Block charge grants 75 Physical Armor against a single enemy Hero Basic Attack, reducing the damage taken by 75%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_muradin_dwarftoss.png",
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
          "MuradinDwarfToss"
        ]
      },
      {
        id: "MuradinCombatStyleThirdWind",
        name: "Third Wind",
        descriptionShort: "Increases Second Wind's healing",
        descriptionLong: "Increases Health Restoration rate to 90 (+4% / level) per second, and raises Health threshold to 60% Health for improved 180 (+4% / level) per second Restoration.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_muradin_secondwind.png",
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
          "MuradinSecondWind"
        ]
      }
    ],
    [
      {
        id: "MuradinMasteryStormhammerSledgehammer",
        name: "Sledgehammer",
        descriptionShort: "Increase Storm Bolt non-Hero damage",
        descriptionLong: "Stormbolt deals 350% damage to non-Heroic enemies. Increase Storm Bolt's cooldown reduction from 1 second to 1.25 seconds per Basic Attack.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_muradin_stormbolt.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 70
        },
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "MuradinStormBolt"
        ]
      },
      {
        id: "MuradinMasteryThunderclapReverberation",
        name: "Reverberation",
        descriptionShort: "Empowers Thunder Clap, Heroic Ability",
        descriptionLong: "Increases the Attack Speed Slow of Thunder Clap from 30% to 50% and the duration from 2.5 seconds to 3.5 seconds. Each enemy Hero hit reduces your Heroic Ability cooldown by 5%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_muradin_thunderclap.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 6,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "MuradinThunderclap"
        ]
      },
      {
        id: "MuradinMasteryThunderburn",
        name: "Thunder Burn",
        descriptionShort: "Thunder Clap can strike a second time",
        descriptionLong: "Hitting an enemy Hero with Thunder Clap triggers a second Thunder Clap explosion 2 seconds later in the same location that deals 72 (+4% / level) damage.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_muradin_thunderclap_b.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 14.4
        },
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "MuradinThunderclap"
        ]
      }
    ],
    [
      {
        id: "MuradinMasteryDwarfTossHeavyImpact",
        name: "Heavy Impact",
        descriptionShort: "Dwarf Toss briefly Slows enemies hit",
        descriptionLong: "Enemies hit by Dwarf Toss are Slowed by 80% for 1.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_muradin_dwarftoss.png",
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
          "MuradinDwarfToss"
        ]
      },
      {
        id: "MuradinGiveEmTheAxeExecutioner60DamageBonus",
        name: "Give 'em the Axe!",
        descriptionShort: "Attacking disabled Heroes increases damage",
        descriptionLong: "Attacking a Hero that is Stunned, Rooted, or Slowed increases Muradin's Basic Attack damage by 50% for 3 seconds.",
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
          magicalDamage: 0
        },
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "MuradinSecondWind"
        ]
      },
      {
        id: "MuradinCombatStyleSkullcracker",
        name: "Skullcracker",
        descriptionShort: "Successive Basic Attacks Stun, deal more damage",
        descriptionLong: "Every 3rd Basic Attack against the same enemy deals 90% bonus damage and Stuns them for 0.25 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_stun.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 18
        },
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "MuradinSecondWind"
        ]
      }
    ],
    [
      {
        id: "MuradinHeroicAbilityAvatar",
        name: "Avatar",
        descriptionShort: "Temporary Health boost",
        descriptionLong: "Transform for 20 seconds, gaining 1000 (+4% / level) Health.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 90,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_muradin_avatar.png",
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
          "MuradinAvatar"
        ]
      },
      {
        id: "MuradinHeroicAbilityHaymaker",
        name: "Haymaker",
        descriptionShort: "Stun and knock an enemy away",
        descriptionLong: "Stun target enemy Hero, and wind up a punch dealing 319 (+4% / level) damage and knocking the target back, hitting enemies in the way for 319 (+4% / level) damage and knocking them aside.",
        cost: {
          type: "Mana",
          amount: 60
        },
        cooldown: 40,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 0.75
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_muradin_haymaker.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 63.800000000000004
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "MuradinHaymaker"
        ]
      }
    ],
    [
      {
        id: "MuradinBronzebeardRage",
        name: "Bronzebeard Rage",
        descriptionShort: "Deals damage to nearby enemies",
        descriptionLong: "Deal 15 (+4% / level) damage per second to nearby enemies and heal for 75% of the damage dealt. Hitting an enemy Hero with Storm Bolt increase this damage by 200% for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_burningrage.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 15,
          magicalDamage: 3
        },
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "MuradinStormBolt"
        ]
      },
      {
        id: "MuradinMasteryThunderclapHealingStatic",
        name: "Healing Static",
        descriptionShort: "Thunder Clap heals Muradin",
        descriptionLong: "Muradin heals for 5% of his maximum Health for each Hero hit by Thunder Clap.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_muradin_thunderclap_a.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 1,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "MuradinThunderclap"
        ]
      },
      {
        id: "MuradinMasteryThunderclapThunderstrike",
        name: "Thunder Strike",
        descriptionShort: "Increases Thunder Clap damage to one enemy",
        descriptionLong: "Thunder Clap deals 200% more damage if only one target is hit. Passive: Increase the duration of Dwarf Toss's Armor by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_muradin_thunderclap.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 40
        },
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "MuradinThunderclap"
        ]
      }
    ],
    [
      {
        id: "MuradinMasteryDwarfTossDwarfLaunch",
        name: "Dwarf Launch",
        descriptionShort: "Increase Dwarf Toss range",
        descriptionLong: "Increase the range of Dwarf Toss by 40%. Hitting an enemy Hero with Dwarf Toss reduces its cooldown by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_muradin_dwarftoss.png",
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
          "MuradinDwarfToss"
        ]
      },
      {
        id: "GenericTalentImposingPresence",
        name: "Imposing Presence",
        descriptionShort: "Activate to Slow enemy Basic Attacks and Move Speed",
        descriptionLong: "Activate to reduce the Attack Speed by 50% and Movement Speed by 20% of nearby Heroes and Summons for 2.5 seconds. Passive: Heroes and Summons that attack your Hero have their Attack Speed Slowed by 20% for 2.5 seconds.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_imposingpresence.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level16"
      },
      {
        id: "MuradinMasteryPassiveStoneform",
        name: "Stoneform",
        descriptionShort: "Activate to heal over time",
        descriptionLong: "Activate to heal Muradin for 30% of his maximum Health over 10 seconds. Second Wind is disabled during this time.",
        cooldown: 60,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_muradin_secondwind.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 6,
          magicalDamage: 0
        },
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "Stoneform",
          "MuradinSecondWind"
        ]
      }
    ],
    [
      {
        id: "MuradinMasteryAvatarUnstoppableForce",
        name: "Unstoppable Force",
        descriptionShort: "Avatar grants additional bonuses",
        descriptionLong: "While active, Avatar grants 20 Armor and causes Muradin's Basic Attacks to reduce the cooldowns of Thunder Clap and Dwarf Toss by 0.75 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_muradin_avatar.png",
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
          "MuradinAvatar"
        ],
        prerequisiteTalentIds: [
          "MuradinHeroicAbilityAvatar"
        ]
      },
      {
        id: "MuradinMasteryHaymakerGrandSlam",
        name: "Grand Slam",
        descriptionShort: "Increases Haymaker damage and adds charge",
        descriptionLong: "Haymaker gains a 2nd charge and its damage is increased by 25%. If a Hero dies within 3 seconds of being hit by Haymaker, instantly gain 1 charge.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_muradin_haymaker.png",
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
          "MuradinHaymaker"
        ],
        prerequisiteTalentIds: [
          "MuradinHeroicAbilityHaymaker"
        ]
      },
      {
        id: "GenericTalentHardenedShield",
        name: "Hardened Shield",
        descriptionShort: "Activate to gain massive Armor",
        descriptionLong: "Activate to gain 75 Armor for 4 seconds, taking 75% less damage.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_hardenedshield.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 15,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level20"
      },
      {
        id: "GenericTalentRewind",
        name: "Rewind",
        descriptionShort: "Activate to reset cooldowns",
        descriptionLong: "Activate to reset the cooldowns of your Basic Abilities.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_rewind.png",
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
    tankiness: 83.31450094161958,
    physicalDamage: 48.888888888888886,
    mobility: 24.006944444444446,
    healing: 0,
    magicalDamage: 4.230087187823259
  }
};
