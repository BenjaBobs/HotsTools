import { Hero } from '../heroes';
      
const chromie: Hero = {
  name: "Chromie",
  nameNormalized: "chromie",
  franchise: "Warcraft",
  gender: "Female",
  size: 0.625,
  movementSpeed: 4.8398,
  health: {
    amount: 1390,
    scale: 0.04,
    regenRate: 2.8984,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "ChromieHeroWeapon",
      range: 7,
      period: 1,
      damage: 82,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/chromie.png",
  abilities: [
    {
      id: "ChromieTimewalkerTrait",
      name: "Timewalker",
      descriptionShort: "Gain Talents earlier than everyone else",
      descriptionLong: "Chromie has traveled to the future, and as such, will learn her Talents 2 levels earlier than her teammates!Detonate Time TrapDetonates active Time Traps.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_timetraveler.png",
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
      id: "ChromieSandBlast",
      name: "Sand Blast",
      descriptionShort: "Fire a long range blast that damages an enemy",
      descriptionLong: "After 0.5 seconds, fire a missile that deals 305 (+4% / level) damage to the first enemy hit. Deals 50% damage to Structures. Casting Sand Blast leaves an Echo behind that mimics Chromie's Sand Blast and Basic Attack, dealing 40% damage. Maximum of 1 Echo active at a time.",
      cost: {
        type: "Mana",
        amount: 20
      },
      cooldown: 3,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_aethercannon.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 101.66666666666666
      }
    },
    {
      id: "ChromieDragonsBreath",
      name: "Dragon’s Breath",
      descriptionShort: "Fire a series of blasts in an area",
      descriptionLong: "Vector TargetingLaunch 3 blasts into the air that land every 0.75 seconds towards the targeted direction, dealing 215 (+4% / level) damage each.",
      cost: {
        type: "Mana",
        amount: 65
      },
      cooldown: 14,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_sandstrike.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 15.357142857142856
      }
    },
    {
      id: "ChromieTimeTrap",
      name: "Time Trap",
      descriptionShort: "Place a trap that Time Stops Heroes",
      descriptionLong: "Place a Time Trap that arms and Stealths after 2 seconds. Chromie's Trait can be activated to detonate the trap, placing all nearby allied or enemy Heroes in Time Stop for 2 seconds. Maximum of 1 trap active at a time.",
      cost: {
        type: "Mana",
        amount: 20
      },
      cooldown: 15,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 1
      },
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_timetrap.png",
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
      id: "ChromieTemporalLoop",
      name: "Temporal Loop",
      descriptionShort: "Return an enemy Hero to a previous position",
      descriptionLong: "Choose an enemy Hero. After 3 seconds, they are teleported back to the location where Temporal Loop was cast on them. Basic Abilities recharge 500% faster for 3 seconds after casting Temporal Loop.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 50,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_looper.png",
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
      id: "ChromieSlowingSands",
      name: "Slowing Sands",
      descriptionShort: "Create a Slowing area",
      descriptionLong: "Summon a sand vortex that Slows enemies by 10% every 0.25 seconds, up to 70%.",
      cost: {
        type: "Mana",
        amount: 5,
        perSecond: true
      },
      cooldown: 5,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_timewarp.png",
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
        id: "ChromieSandBlastOnceAgainTheFirstTime",
        name: "Once Again the First Time",
        descriptionShort: "Quest: Sand Blast gains another Echo",
        descriptionLong: "Quest: Hit 40 Heroes with Sand Blast from Chromie or her Echoes. Reward: Increase the maximum number of active Echoes to 2, and increase Echo damage to 45%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_aethercannon.png",
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
          "ChromieSandBlast"
        ],
        isQuest: true
      },
      {
        id: "ChromieDragonsBreathDeepBreathing",
        name: "Deep Breathing",
        descriptionShort: "Quest: Hitting Heroes empowers Dragon's Breath",
        descriptionLong: "Quest: Every time Dragon's Breath hits a Hero increase its damage by 1%, up to 20%. Reward: After hitting 20 Heroes, reduce the cooldown of Dragon's Breath by 4 seconds and its Mana cost from 65 to 40.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_sandstrike.png",
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
          "ChromieDragonsBreath"
        ],
        isQuest: true
      },
      {
        id: "ChromieTimewalkersPursuit",
        name: "Timewalker's Pursuit",
        descriptionShort: "Increase Spell Power, Activate to reveal an area",
        descriptionLong: "Gain 10% Spell Power and reduce the arming time of Time Traps by 0.75 seconds. Activate to reveal the targeted area for 4 seconds. Enemies seen are revealed for 4 seconds.",
        cooldown: 25,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_clairvoyance.png",
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
          "ChromieTimewalkerTrait"
        ]
      }
    ],
    [
      {
        id: "ChromieTimeTrapChronicConditions",
        name: "Chronic Conditions",
        descriptionShort: "Time Trap affects enemy/allied Move Speed",
        descriptionLong: "After its Time Stop ends, enemies affected by Time Trap are Slowed by 30% for 3 seconds and allies gain 30% Movement Speed for 3 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_timetrap.png",
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
          "ChromieTimeTrap",
          "ChromieTimeTrapDetonate"
        ]
      },
      {
        id: "ChromieTimeTrapTimeTroubles",
        name: "Time Troubles",
        descriptionShort: "Time Trap affects enemy/allied Armor",
        descriptionLong: "After its Time Stop ends, enemies affected by Time Trap lose 15 Armor for 3 seconds and allies gain 30 Armor for 3 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_timetrap_a.png",
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
          "ChromieTimeTrap"
        ]
      },
      {
        id: "ChromieTimeTrapAndorhalAnomaly",
        name: "Andorhal Anomaly",
        descriptionShort: "Increase Time Trap charges, reduce cooldown",
        descriptionLong: "Increase the charges and maximum active Time Traps to 3, and reduce its cooldown by 8 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_timetrap_b.png",
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
          "ChromieTimeTrap",
          "ChromieTimeTrapDetonate"
        ]
      }
    ],
    [
      {
        id: "ChromieSandBlastBronzeTalons",
        name: "Bronze Talons",
        descriptionShort: "Sand Blast empowers Basic Attacks",
        descriptionLong: "Hitting a Hero with Sand Blast from Chromie or her Echoes grants 50% additional Basic Attack damage for 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_aethercannon.png",
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
          "ChromieSandBlast"
        ]
      },
      {
        id: "ChromieDragonsBreathMobiusLoop",
        name: "Mobius Loop",
        descriptionShort: "Dragon's Breath's center deals more damage, Slows",
        descriptionLong: "Dragon's Breath deals 30% bonus damage to enemies hit by its center.  Enemy Heroes hit by its center are Slowed by 60% for 0.75 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_sandstrike.png",
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
          "ChromieDragonsBreath"
        ]
      },
      {
        id: "ChromieAProperGreeting",
        name: "A Proper Greeting",
        descriptionShort: "Damage disabled Heroes to increase damage",
        descriptionLong: "Damaging a Stunned, Rooted, or Slowed enemy Hero grants 20% additional damage for 3 seconds.",
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
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "ChromieTimewalkerTrait"
        ]
      }
    ],
    [
      {
        id: "ChromieHeroicAbilitySlowingSands",
        name: "Slowing Sands",
        descriptionShort: "Create a Slowing area",
        descriptionLong: "Summon a sand vortex that Slows enemies by 10% every 0.25 seconds, up to 70%.",
        cost: {
          type: "Mana",
          amount: 5,
          perSecond: true
        },
        cooldown: 5,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_timewarp.png",
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
          "ChromieSlowingSands"
        ]
      },
      {
        id: "ChromieHeroicAbilityTemporalLoop",
        name: "Temporal Loop",
        descriptionShort: "Return an enemy Hero to a previous position",
        descriptionLong: "Choose an enemy Hero. After 3 seconds, they are teleported back to the location where Temporal Loop was cast on them. Basic Abilities recharge 500% faster for 3 seconds after casting Temporal Loop.",
        cost: {
          type: "Mana",
          amount: 60
        },
        cooldown: 50,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_looper.png",
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
          "ChromieTemporalLoop"
        ]
      }
    ],
    [
      {
        id: "ChromieSandBlastGnomeSpeedAhead",
        name: "Gnome Speed Ahead!",
        descriptionShort: "Sand Blast increases Move Speed and Regen",
        descriptionLong: "After casting Sand Blast, Chromie gains 20% Movement Speed and 200% increased Health Regeneration for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_aethercannon.png",
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
          "ChromieSandBlast"
        ]
      },
      {
        id: "ChromieHereAndThere",
        name: "Here and There",
        descriptionShort: "Activate to swap positions with an Echo",
        descriptionLong: "Activate to teleport to an area near an Echo, swapping it with Chromie's previous location.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_herethere.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13"
      },
      {
        id: "ChromieTimeOut",
        name: "Time Out",
        descriptionShort: "Activate to become Invulnerable",
        descriptionLong: "Activate to place Chromie in Stasis and gain Invulnerability for up to 5 seconds. Can be reactivated to end the effect early.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_timeblock.png",
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
        id: "ChromieSandBlastShiftingSands",
        name: "Shifting Sands",
        descriptionShort: "Sand Blast grants Spell Power",
        descriptionLong: "Hitting an enemy Hero with Chromie's primary Sand Blast grants 5% Spell Power for 8 seconds, up to a maximum of 50%. The duration is refreshed whenever an enemy is damaged by the primary Sand Blast.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_aethercannon.png",
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
          "ChromieSandBlast"
        ]
      },
      {
        id: "ChromieSandBlastFastForward",
        name: "Fast Forward",
        descriptionShort: "Long range Sand Blasts reduce its cooldown",
        descriptionLong: "If Chromie's primary Sand Blast travels at least 50% of its base distance and hits a Hero, its cooldown is reduced to 0.5 seconds and it refunds 10 Mana.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_aethercannon_a.png",
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
          "ChromieSandBlast"
        ]
      },
      {
        id: "ChromieQuantumOverdrive",
        name: "Quantum Overdrive",
        descriptionShort: "Activate to gain Spell Power",
        descriptionLong: "Activate to increase Spell Power by 30% for 8 seconds. Hitting an enemy Hero with Sand Blast reduces this cooldown by 3 seconds.",
        cooldown: 45,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_hyperdrivesreach.png",
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
        id: "ChromieSlowingSandsUnravelling",
        name: "Unravelling",
        descriptionShort: "Slowing Sands reduces Spell Armor, lingers",
        descriptionLong: "Every 0.25 seconds, enemy Heroes Slowed by Slowing Sands have their Spell Armor reduced by 10 up to 50. Slowing Sands persists for 5 seconds after it is cancelled.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_timewarp.png",
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
          "ChromieSlowingSands"
        ],
        prerequisiteTalentIds: [
          "ChromieHeroicAbilitySlowingSands"
        ]
      },
      {
        id: "ChromieTemporalLoopStuckInALoop",
        name: "Stuck in a Loop",
        descriptionShort: "Temporal Loop teleports twice",
        descriptionLong: "Temporal Loop teleports the target a second time after the first, and Basic Abilities continue recharging for an additional 3 seconds. Increase the cooldown recharge rate from 500% to 700%.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_looper.png",
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
          "ChromieTemporalLoop"
        ],
        prerequisiteTalentIds: [
          "ChromieHeroicAbilityTemporalLoop"
        ]
      },
      {
        id: "ChromieSandBlastPiercingSands",
        name: "Piercing Sands",
        descriptionShort: "Sand Blast pierces",
        descriptionLong: "Sand Blasts cast from Chromie and her Echoes now pierce all enemies hit.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_aethercannon.png",
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
          "ChromieSandBlast"
        ]
      },
      {
        id: "ChromieBlessingOfTheBronze",
        name: "Blessing of the Bronze",
        descriptionShort: "Increase allied Move Speed and reduce cooldowns",
        descriptionLong: "Activate to cause Chromie and all allied Heroes to gain 20% Movement Speed and their Basic Abilities recharge 35% faster for 8 seconds. Hitting an enemy Hero with Sand Blast from Chromie or her Echoes reduces the cooldown of Blessing of the Bronze by 1 second.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_chromie_blessing_of_the_bronze.png",
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
          "ChromieTimewalkerTrait"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 41.88323917137476,
    physicalDamage: 41,
    mobility: 24.199,
    healing: 0,
    magicalDamage: 51.801604597164385
  }
};
      
export default chromie;