import { Hero } from '../heroes';
      
export const hanzo: Hero = {
  name: "Hanzo",
  nameNormalized: "hanzo",
  franchise: "Overwatch",
  gender: "Male",
  size: 0.6875,
  movementSpeed: 4.8398,
  health: {
    amount: 1375,
    scale: 0.04,
    regenRate: 2.8632,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HanzoHeroWeapon",
      range: 6.5,
      period: 1.5,
      damage: 198,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/hanzo.png",
  abilities: [
    {
      id: "HanzoNaturalAgilityButton",
      name: "Natural Agility",
      descriptionShort: "Jump over terrain",
      descriptionLong: "Jump over unpathable terrain or Structures, up to a maximum range.",
      cooldown: 25,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 0.25
      },
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_wallvault.png",
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
      id: "HanzoStormBowFireTargetPoint",
      name: "Storm Bow",
      descriptionShort: "Charge up to fire a deadly arrow",
      descriptionLong: "Activate to charge an arrow that deals 291 (+4% / level) damage to the first enemy hit. Storm Bow's range increases the longer it is Channeled.",
      cost: {
        type: "Mana",
        amount: 20
      },
      cooldown: 4,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_stormbow.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 218.25
      }
    },
    {
      id: "HanzoScatterArrow",
      name: "Scatter Arrow",
      descriptionShort: "Fire an arrow that ricochets and splits",
      descriptionLong: "Fire an arrow that deals 88 (+4% / level) to the first enemy Hero hit. Scatter Arrow can collide with terrain and Structures, splitting into 5 arrows that travel extra distance, ricochet up to 4 additional times, and deal 88 (+4% / level) damage each to the first enemy hit.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 8,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_scatterarrow.png",
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
      id: "HanzoSonicArrow",
      name: "Sonic Arrow",
      descriptionShort: "Reveal a large area",
      descriptionLong: "Fire an arrow that grants vision in a large area for 5 seconds. Enemies inside are revealed for 1 second. If Sonic Arrow lands directly on an enemy, it deals 165 (+4% / level) damage to them and follows them as they move.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 20,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_sonicarrow.png",
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
      id: "HanzoDragonstrike",
      name: "Dragonstrike",
      descriptionShort: "Summon a pair of Spirit Dragons to damage enemies",
      descriptionLong: "After 1.5 seconds, summon a pair of Spirit Dragons which travel forward, dealing 84 (+4% / level) damage every 0.25 seconds to enemy Heroes in its area. Enemies in the center take 75% increased damage.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_dragonstrike.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 16.8
      }
    },
    {
      id: "HanzoDragonsArrow",
      name: "Dragon's Arrow",
      descriptionShort: "Fire a global arrow that Stuns, damages",
      descriptionLong: "Fire a missile that travels across the battleground. Explodes upon hitting an enemy Hero, dealing 130 (+4% / level) damage to all nearby enemies and Stunning them for 0.5 seconds. After traveling a medium distance, the damage is increased to 260 (+4% / level) and the Stun duration to 1.25 seconds. After traveling a long distance, the damage is increased to 390 (+4% / level) and the Stun duration to 2 seconds.",
      cost: {
        type: "Mana",
        amount: 90
      },
      cooldown: 70,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_thedragonsarrow.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 26
      }
    }
  ],
  talents: [
    [
      {
        id: "HanzoTargetPractice",
        name: "Target Practice",
        descriptionShort: "Quest: Hit all enemy Heroes to empower Storm Bow",
        descriptionLong: "Quest: Hit every enemy Hero with Storm Bow. Reward: After hitting every enemy Hero once with Storm Bow, its range is increased by 30%. Reward: After hitting every enemy Hero 3 times with Storm Bow, its damage is increased by 100.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_stormbow.png",
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
          "HanzoStormBowFireTargetPoint"
        ],
        isQuest: true
      },
      {
        id: "HanzoSimpleGeometry",
        name: "Simple Geometry",
        descriptionShort: "Quest: Gain additional Scatter Arrows",
        descriptionLong: "Quest: Hit a Hero with multiple arrows from the same Scatter Arrow cast 20 times. Each arrow hit after the second grants additional progress. Reward: Upon hitting terrain for the first time, Scatter Arrow creates 2 additional arrows.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_scatterarrow.png",
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
          "HanzoScatterArrow"
        ],
        isQuest: true
      },
      {
        id: "HanzoRedemption",
        name: "Redemption",
        descriptionShort: "Quest: Hit Heroes to gain Attack Speed",
        descriptionLong: "Quest: Every 2 Basic Attacks against the same Hero within 10 seconds grants 1 Redemption, stacking up to 12. Dying decreases Redemption by 3, and Redemption can be lost even at maximum stacks. Reward: At 12 Redemption, gain 50% Attack Speed.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_redemption.png",
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
          "HanzoNaturalAgilityButton"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "HanzoExplosiveArrows",
        name: "Explosive Arrows",
        descriptionShort: "Storm Bow arrows explode on Minions, Monsters",
        descriptionLong: "Upon hitting a Minion or Monster, Storm Bow deals 60% of its damage to enemies around its target.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_stormbow.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 12
        },
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "HanzoStormBowFireTargetPoint"
        ]
      },
      {
        id: "HanzoSerratedArrows",
        name: "Serrated Arrows",
        descriptionShort: "Scatter Arrow deals more damage to non-Heroes",
        descriptionLong: "Scatter Arrow deals 100% more damage to Minions, Mercenaries, and Monsters.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_scatterarrow.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 20
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "HanzoScatterArrow"
        ]
      },
      {
        id: "HanzoIgnoreAllDistractions",
        name: "Ignore All Distractions",
        descriptionShort: "Basic Attacks instantly kill Minions, increase range",
        descriptionLong: "Basic Attacks instantly kill Minions and increase Hanzo's Basic Attack range by 2 for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_fromonething.png",
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
          "HanzoNaturalAgilityButton"
        ]
      }
    ],
    [
      {
        id: "HanzoTheDragonHungers",
        name: "The Dragon Hungers",
        descriptionShort: "Storm Bow grants Spell Power",
        descriptionLong: "Hitting a Hero with Storm Bow grants 5% Spell Power for 12 seconds, stacking up to 20%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_draconicadvantage.png",
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
          "HanzoStormBowFireTargetPoint"
        ]
      },
      {
        id: "HanzoNeverOutmatched",
        name: "Never Outmatched",
        descriptionShort: "Basic Attacks reduce Scatter Arrow cooldown",
        descriptionLong: "Reduce Scatter Arrow's Mana cost from 50 to 30. Basic Attacks against Heroes lower the cooldown of Scatter Arrow by 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_scatterarrow.png",
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
          "HanzoScatterArrow"
        ]
      },
      {
        id: "HanzoSharpenedArrowheads",
        name: "Sharpened Arrowheads",
        descriptionShort: "Basic Attacks, Storm Bow reduce Armor",
        descriptionLong: "Hitting a Hero with Storm Bow or Basic Attacks reduces their Armor by 3 for 3 seconds, up to a maximum reduction of 20 Armor.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_shieldbreaker.png",
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
          "HanzoStormBowFireTargetPoint"
        ]
      }
    ],
    [
      {
        id: "HanzoDragonstrike",
        name: "Dragonstrike",
        descriptionShort: "Summon a pair of Spirit Dragons to damage enemies",
        descriptionLong: "After 1.5 seconds, summon a pair of Spirit Dragons which travel forward, dealing 84 (+4% / level) damage every 0.25 seconds to enemy Heroes in its area. Enemies in the center take 75% increased damage.",
        cost: {
          type: "Mana",
          amount: 60
        },
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_dragonstrike.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 16.8
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "HanzoDragonstrike"
        ]
      },
      {
        id: "HanzoDragonsArrow",
        name: "Dragon's Arrow",
        descriptionShort: "Fire a global arrow that Stuns, damages",
        descriptionLong: "Fire a missile that travels across the battleground. Explodes upon hitting an enemy Hero, dealing 130 (+4% / level) damage to all nearby enemies and Stunning them for 0.5 seconds. After traveling a medium distance, the damage is increased to 260 (+4% / level) and the Stun duration to 1.25 seconds. After traveling a long distance, the damage is increased to 390 (+4% / level) and the Stun duration to 2 seconds.",
        cost: {
          type: "Mana",
          amount: 90
        },
        cooldown: 70,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_thedragonsarrow.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 26
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "HanzoDragonsArrow"
        ]
      }
    ],
    [
      {
        id: "HanzoFleetofFoot",
        name: "Fleet of Foot",
        descriptionShort: "Storm Bow grants Move Speed",
        descriptionLong: "Hitting a Hero with Storm Bow grants 10% Movement Speed for 6 seconds, up to 30%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_stormbow.png",
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
          "HanzoStormBowFireTargetPoint"
        ]
      },
      {
        id: "HanzoNinjaAssassin",
        name: "Ninja Assassin",
        descriptionShort: "Storm Bow lowers Natural Agility cooldown",
        descriptionLong: "Hitting Heroes with Storm Bow lowers Natural Agility's cooldown by 10 seconds. Additionally, Hero Takedowns reset Natural Agility's cooldown.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 0.25
        },
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_wallvault.png",
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
          "HanzoNaturalAgilityButton"
        ]
      },
      {
        id: "HanzoMountedArchery",
        name: "Mounted Archery",
        descriptionShort: "Increase Mount Speed, Natural Agility mounts",
        descriptionLong: "Reduce the cooldown of Summon Mount by 2 seconds. Upon mounting, gain 25% additional Movement Speed for 5 seconds. Using Natural Agility instantly mounts.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_grabthereins.png",
        isPassive: false,
        analysis: {
          mobility: 1,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "HanzoNaturalAgilityButton"
        ]
      }
    ],
    [
      {
        id: "HanzoFlawlessTechnique",
        name: "Flawless Technique",
        descriptionShort: "Storm Bow, Basic Attacks empower each other",
        descriptionLong: "Hitting Heroes with Storm Bow increases the damage of Hanzo's next Basic Attack within 5 seconds by 40%. Basic Attacks against Heroes increase the damage of Hanzo's next Storm Bow within 5 seconds by 40%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_fromonething.png",
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
          "HanzoStormBowFireTargetPoint"
        ]
      },
      {
        id: "HanzoPiercingArrows",
        name: "Piercing Arrows",
        descriptionShort: "Storm Bow, Scatter Arrow pierce",
        descriptionLong: "Storm Bow and Scatter Arrow pierce, hitting an additional enemy. Additionally, Scatter Arrow can pierce through 1 enemy each time it ricochets.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_piercingarrows.png",
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
          "HanzoStormBowFireTargetPoint",
          "HanzoScatterArrow"
        ]
      },
      {
        id: "HanzoGiantSlayer",
        name: "Giant Slayer",
        descriptionShort: "Basic Attacks, Scatter Arrow deal bonus damage",
        descriptionLong: "Enemy Heroes hit by Scatter Arrow and Basic Attacks take a bonus 1.6% of their maximum Health as damage.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_kaijuhunter.png",
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
          "HanzoScatterArrow"
        ]
      }
    ],
    [
      {
        id: "HanzoTheDragonAwakens",
        name: "The Dragon Awakens",
        descriptionShort: "Abilities and Attacks reduce Dragonstrike cooldown",
        descriptionLong: "Hitting a Hero with Storm Bow, Scatter Arrow, or Basic Attacks reduces the cooldown of Dragonstrike by 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_dragonstrike.png",
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
          "HanzoDragonstrike"
        ],
        prerequisiteTalentIds: [
          "HanzoDragonstrike"
        ]
      },
      {
        id: "HanzoPOTG",
        name: "Play of the Game",
        descriptionShort: "Activate to teleport to Dragon's Arrow",
        descriptionLong: "While in flight or for up to 2 seconds after impacting a target, Dragon's Arrow can be reactivated to teleport to its location and jump backwards. If used after impact, Hanzo shoots arrows that deal 132 (+4% / level) damage to each target hit by the impact. Hanzo is Unstoppable during Play of the Game.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_thedragonsarrow.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 26.400000000000002
        },
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "HanzoDragonsArrow"
        ],
        prerequisiteTalentIds: [
          "HanzoDragonsArrow"
        ]
      },
      {
        id: "HanzoBullseye",
        name: "Bullseye",
        descriptionShort: "Sonic Arrow travels faster, Stuns",
        descriptionLong: "Increase Sonic Arrow's speed and center radius by 100%. Additionally, Heroes hit by Sonic Arrow's center are Stunned for 1 second.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_sonicarrow.png",
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
          "HanzoSonicArrow"
        ]
      },
      {
        id: "HanzoPerfectAgility",
        name: "Perfect Agility",
        descriptionShort: "Gain Natural Agility charge, cooldown reduced",
        descriptionLong: "Natural Agility gains a 2nd charge and its cooldown is reduced by 10 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 0.25
        },
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_hanzo_wallvault.png",
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
          "HanzoNaturalAgilityButton"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 41.431261770244824,
    physicalDamage: 66,
    mobility: 24.006944444444446,
    healing: 0,
    magicalDamage: 12.082532880153686
  }
};
