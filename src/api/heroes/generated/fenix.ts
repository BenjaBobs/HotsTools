import { Hero } from '../heroes';
      
const fenix: Hero = {
  name: "Fenix",
  nameNormalized: "fenix",
  franchise: "Starcraft",
  gender: "Male",
  size: 1.0625,
  movementSpeed: 4.8398,
  health: {
    amount: 1140,
    scale: 0.04,
    regenRate: 2.379,
    regenScale: 0.04
  },
  autoAttacks: [
    {
      nameId: "FenixHeroWeapon",
      range: 5,
      period: 1.35,
      damage: 83,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/fenix.png",
  abilities: [
    {
      id: "FenixShieldCapacitor",
      name: "Shield Capacitor",
      descriptionShort: "Permanent Shield that regenerates out of combat",
      descriptionLong: "Fenix has a permanent 760 (+4% / level) Shield which regenerates at 10% per second after not taking damage for 5 seconds.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_shield_1.png",
      isPassive: true
    },
    {
      id: "FenixPlasmaCutter",
      name: "Plasma Cutter",
      descriptionShort: "Summon a laser that circles Fenix, damaging and Slowing enemies",
      descriptionLong: "Create a laser beam at the target point that circles around Fenix twice, dealing 135 (+4% / level) damage to enemies hit and Slowing them by 25% for 4 seconds.",
      cooldown: 12,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_q.png",
      isPassive: false
    },
    {
      id: "FenixPhaseBomb",
      name: "Weapon Mode: Repeater Cannon",
      descriptionShort: "Basic Attack speed increased",
      descriptionLong: "Basic Attack speed increased by 150%.Activate to change to Weapon Mode: Phase Bomb, increasing Basic Attack range and damage, and causing Basic Attacks to splash.",
      cooldown: null,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_w_2.png",
      isPassive: false
    },
    {
      id: "FenixWarp",
      name: "Warp",
      descriptionShort: "Warp to a location",
      descriptionLong: "Warp to a targeted location, phasing out after 0.5 seconds, and arriving 0.75 seconds later.",
      cooldown: 17,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_teleport.png",
      isPassive: false
    },
    {
      id: "FenixPlanetCracker",
      name: "Planet Cracker",
      descriptionShort: "Fire a laser across the battleground",
      descriptionLong: "After 0.5 seconds, Channel a powerful beam that spans across the battleground for 4 seconds, dealing 112 (+4% / level) damage every 0.25 seconds to non-Structure enemies hit.",
      cooldown: 100,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_r_planet_cracker.png",
      isPassive: false
    },
    {
      id: "FenixPurificationSalvo",
      name: "Purification Salvo",
      descriptionShort: "Fire a barrage of homing missiles",
      descriptionLong: "Channel for 1.5 seconds, sweeping a laser in front of Fenix that locks onto enemy Heroes. Once Channeling finishes, fire 5 missiles at each locked Hero, dealing 79 (+4% / level) damage each. Deals 50% increased damage to Slowed targets.",
      cooldown: 90,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_r_scan.png",
      isPassive: false
    },
    {
      id: "FenixRepeaterCannon",
      name: "Weapon Mode: Phase Bomb",
      descriptionShort: "Basic Attacks splash, deal more damage, have longer range",
      descriptionLong: "Basic Attacks have 1.25 increased range, deal 25% more damage, and splash to nearby enemies.Activate to change to Weapon Mode: Repeater Cannon, increasing Basic Attack speed.",
      cooldown: null,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_w_1.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "FenixAdvancedTargeting",
        name: "Advanced Targeting",
        descriptionShort: "Quest: Plasma Cutter circles an additional time",
        descriptionLong: "Quest: Hitting enemy Heroes with Plasma Cutter permanently increases Fenix's Basic Attack damage by 0.5, up to 60.Reward: After hitting 30 Heroes, Plasma Cutter circles an additional time.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_q.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "FenixPlasmaCutter"
        ],
        isQuest: true
      },
      {
        id: "FenixArsenalSynergy",
        name: "Arsenal Synergy",
        descriptionShort: "Repeater Cannon empowers Phase Bomb",
        descriptionLong: "After hitting enemy Heroes with Basic Attacks 3 times while Repeater Cannon is active, the next Basic Attack with Phase Bomb deals 150% more damage and splashes in a 50% larger area.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_w_1.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "FenixRepeaterCannon",
          "FenixPhaseBomb"
        ]
      },
      {
        id: "FenixMobileOffense",
        name: "Mobile Offense",
        descriptionShort: "Movement empowers Basic Attacks",
        descriptionLong: "After moving, Fenix's next Basic Attack deals 35% more damage to Heroes.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_w_2.png",
        isPassive: false,
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "FenixRepeaterCannon",
          "FenixPhaseBomb"
        ]
      }
    ],
    [
      {
        id: "FenixTargetAcquired",
        name: "Target Acquired",
        descriptionShort: "Repeater Cannon can grant Move Speed",
        descriptionLong: "Basic Attacks against Slowed Heroes with Repeater Cannon active grant 10% Movement Speed for 4 seconds, up to 40%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_w_2.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "FenixPhaseBomb"
        ]
      },
      {
        id: "FenixInhibitingEnergy",
        name: "Inhibiting Energy",
        descriptionShort: "Phase Bomb can Slow enemies hit",
        descriptionLong: "Every 10 seconds, Fenix's next Basic Attack with Phase Bomb active Slows all enemies hit by 60%, decaying in strength over 1.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_w_1.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "FenixRepeaterCannon"
        ]
      },
      {
        id: "FenixEmergencyProtocol",
        name: "Emergency Protocol",
        descriptionShort: "Gain Move Speed, more when Shield depletes",
        descriptionLong: "While Fenix has shields from Shield Capacitor, he gains 10% Movement Speed.  This bonus is increased to 15% when Fenix loses shields from Shield Capacitor.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_shield_1.png",
        isPassive: false,
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "FenixShieldCapacitor"
        ]
      }
    ],
    [
      {
        id: "FenixCombatAdvantage",
        name: "Combat Advantage",
        descriptionShort: "Plasma Cutter deals more damage to Slowed targets",
        descriptionLong: "Plasma Cutter deals 35% more damage to Slowed targets.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_q.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "FenixPlasmaCutter"
        ]
      },
      {
        id: "FenixWarpWarfare",
        name: "Warp Warfare",
        descriptionShort: "Warp grants Attack Speed",
        descriptionLong: "After arriving with Warp, gain 175% Attack Speed for 4 seconds while in Repeater Cannon mode. Hero Takedowns reset Warp's cooldown.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_teleport.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "FenixWarp"
        ]
      },
      {
        id: "FenixDivertPowerWeaponsTalent",
        name: "Divert Power: Weapons",
        descriptionShort: "Activate to increase damage, lose Shield",
        descriptionLong: "Activate to gain 40% Basic Attack damage for 5 seconds. Basic Attacking a Hero refreshes this duration. Once Divert Power: Weapons ends, drain all of Shield Capacitor's Shields.",
        cooldown: 40,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_w_2.png",
        isPassive: false,
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "FenixShieldCapacitor"
        ]
      }
    ],
    [
      {
        id: "FenixHeroicAbilityPurificationSalvo",
        name: "Purification Salvo",
        descriptionShort: "Fire a barrage of homing missiles",
        descriptionLong: "Channel for 1.5 seconds, sweeping a laser in front of Fenix that locks onto enemy Heroes. Once Channeling finishes, fire 5 missiles at each locked Hero, dealing 79 (+4% / level) damage each. Deals 50% increased damage to Slowed targets.",
        cooldown: 90,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_r_scan.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "FenixPurificationSalvo"
        ]
      },
      {
        id: "FenixHeroicAbilityPlanetCracker",
        name: "Planet Cracker",
        descriptionShort: "Fire a laser across the battleground",
        descriptionLong: "After 0.5 seconds, Channel a powerful beam that spans across the battleground for 4 seconds, dealing 112 (+4% / level) damage every 0.25 seconds to non-Structure enemies hit.",
        cooldown: 100,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_r_planet_cracker.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "FenixPlanetCracker"
        ]
      }
    ],
    [
      {
        id: "FenixAdaniumShell",
        name: "Adanium Shell",
        descriptionShort: "Warp grants Armor",
        descriptionLong: "After arriving with Warp, gain 50 Armor for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_teleport.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "FenixWarp"
        ]
      },
      {
        id: "FenixDampeningField",
        name: "Dampening Field",
        descriptionShort: "Shield Capacitor grants Spell Armor",
        descriptionLong: "Fenix gains 30 Spell Armor while he has a Shield from Shield Capacitor.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_shield_1.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "FenixShieldCapacitor"
        ]
      },
      {
        id: "FenixRapidRecharge",
        name: "Rapid Recharge",
        descriptionShort: "Healing regenerates Shield Capacitor",
        descriptionLong: "The time before Shield Capacitor begins regenerating after taking damage is reduced by 2 seconds. Whenever Fenix is healed, Shield Capacitor's Shield recharges for 60% of the healing received.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_shield_3.png",
        isPassive: false,
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "FenixShieldCapacitor"
        ]
      },
      {
        id: "FenixAuxiliaryShields",
        name: "Auxiliary Shields",
        descriptionShort: "Increase Shields but reduce Health",
        descriptionLong: "Permanently reduce Fenix's maximum Health by 30% but increase Shield Capacitor's Shield by 40%. Basic Attacks regenerate Shields equal to 10% of the damage dealt.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_shield_2.png",
        isPassive: false,
        order: 4,
        tier: "level13",
        linkedAbilityIds: [
          "FenixShieldCapacitor"
        ]
      }
    ],
    [
      {
        id: "FenixOffensiveCadence",
        name: "Offensive Cadence",
        descriptionShort: "Successive Repeater Cannon attacks empowered",
        descriptionLong: "Every 3rd Basic Attack against Heroes while Repeater Cannon is active deals an additional 6% of the target's maximum Health as damage.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_w_2.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "FenixPhaseBomb"
        ]
      },
      {
        id: "FenixPhotonicWeaponry",
        name: "Photonic Weaponry",
        descriptionShort: "Shield Capacitor increases damage dealt",
        descriptionLong: "Fenix deals 20% more damage while he has a Shield from Shield Capacitor.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_shield_1.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "FenixShieldCapacitor"
        ]
      },
      {
        id: "FenixArsenalOvercharge",
        name: "Arsenal Overcharge",
        descriptionShort: "Basic Attacks reduce Ability cooldowns",
        descriptionLong: "Basic Attacks with Repeater Cannon reduce Ability cooldowns by 0.5 seconds. Basic Attacks with Phase Bomb active reduce Ability cooldowns by 0.5 seconds per Hero hit.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_cooldown.png",
        isPassive: false,
        order: 3,
        tier: "level16"
      }
    ],
    [
      {
        id: "FenixArmageddonBeam",
        name: "Armageddon Beam",
        descriptionShort: "Increase Planet Cracker width, reduce cooldown",
        descriptionLong: "Planet Cracker's width increases by 100% over 1.5 seconds.Passive: Reduce Planet Cracker's cooldown by 40 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_r_planet_cracker.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "FenixPlanetCracker"
        ],
        prerequisiteTalentIds: [
          "FenixHeroicAbilityPlanetCracker"
        ]
      },
      {
        id: "FenixSecondaryFire",
        name: "Secondary Fire",
        descriptionShort: "Plasma Cutter can fire Purification Salvo missiles",
        descriptionLong: "Hitting an enemy Hero with Plasma Cutter fires a Purification Salvo missile at them after 0.5 seconds, dealing 79 (+4% / level) damage. Deals 50% increased damage to Slowed targets.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_q.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "FenixPlasmaCutter"
        ]
      },
      {
        id: "FenixSingularityCharge",
        name: "Singularity Charge",
        descriptionShort: "Increase Weapon Mode bonuses",
        descriptionLong: "Repeater Cannon grants 100% more Attack Speed, and Phase Bomb grants 1.25 more range.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_w_2.png",
        isPassive: false,
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "FenixRepeaterCannon",
          "FenixPhaseBomb"
        ]
      },
      {
        id: "FenixUnconqueredSpirit",
        name: "Unconquered Spirit",
        descriptionShort: "Fatal damage recharges Shield Capacitor",
        descriptionLong: "Upon taking fatal damage, Shield Capacitor regains 800 (+4% / level) Shields. This effect has a 120 second cooldown.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_fenix_shield_1.png",
        isPassive: false,
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "FenixShieldCapacitor"
        ]
      }
    ]
  ]
};
      
export default fenix;