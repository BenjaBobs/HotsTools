import { Hero } from '../heroes';
      
const brightwing: Hero = {
  name: "Brightwing",
  nameNormalized: "brightwing",
  franchise: "Warcraft",
  gender: "Female",
  size: 0.6875,
  movementSpeed: 4.8398,
  health: {
    amount: 1450,
    scale: 0.04,
    regenRate: 3.0195,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroFaerieDragon",
      range: 5.5,
      period: 0.9,
      damage: 81,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/brightwing.png",
  abilities: [
    {
      id: "BrightwingCalmingMist",
      name: "Soothing Mist",
      descriptionShort: "Remove disabling effects from allies",
      descriptionLong: "Activate to remove all Stun, Root, Slow, and Silence effects from nearby allied Heroes. Passive: Brightwing heals nearby allied Heroes for 115 (+4% / level) every 4 seconds",
      cooldown: 90,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_soothingmist.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 3.0666666666666664,
        magicalDamage: 0
      }
    },
    {
      id: "BrightwingPhaseShift",
      name: "Phase Shift",
      descriptionShort: "Teleport to an allied Hero and heal them",
      descriptionLong: "After 2 seconds, teleport to an allied Hero and heal them for 25% of their maximum Health.",
      cooldown: 40,
      category: "mount",
      type: "Z",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_mount.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 3.3333333333333335,
        magicalDamage: 0
      }
    },
    {
      id: "FaerieDragonArcaneFlare",
      name: "Arcane Flare",
      descriptionShort: "Fire a damaging flare",
      descriptionLong: "Shoot a flare dealing 75 (+4% / level) damage to enemies hit, and an additional 105 (+4% / level) damage to enemies in the center. If a Hero is hit by the center, Soothing Mist's passive healing instantly activates.",
      cost: {
        type: "Mana",
        amount: 35
      },
      cooldown: 6,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_arcaneflare.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 12.5
      }
    },
    {
      id: "FaerieDragonPolymorph",
      name: "Polymorph",
      descriptionShort: "Disable an enemy",
      descriptionLong: "Polymorph a target for 1.5 seconds, Slowing their Movement Speed by 30% and Silencing them. Targets are not able to attack while Polymorphed.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 12,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_polymorph.png",
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
      id: "FaerieDragonPixieDust",
      name: "Pixie Dust",
      descriptionShort: "Increase a Hero's Movement Speed and grant Spell Armor",
      descriptionLong: "Increase target Hero's Movement Speed by 20%, and grant them 30 Spell Armor for 3 seconds, reducing Spell damage taken by 30%.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 10,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_pixiedust.png",
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
      id: "FaerieDragonBlinkHealDash",
      name: "Blink Heal",
      descriptionShort: "Teleport to allies and heal them",
      descriptionLong: "Teleport to a nearby ally. When teleporting to a Hero, heal them for 200 (+4% / level). Stores up to 2 charges.",
      cost: {
        type: "Mana",
        amount: 40
      },
      cooldown: 9,
      charges: {
        chargesMax: 2,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 2
      },
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_blinkheal.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 4.444444444444445,
        magicalDamage: 0
      }
    },
    {
      id: "FaerieDragonEmeraldWind",
      name: "Emerald Wind",
      descriptionShort: "Damages and pushes enemies in area",
      descriptionLong: "After 0.5 seconds, create an expanding nova of wind, dealing 225 (+4% / level) damage and pushing enemies away.",
      cost: {
        type: "Mana",
        amount: 90
      },
      cooldown: 50,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_emeraldwind.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 15
      }
    }
  ],
  talents: [
    [
      {
        id: "BrightwingGreaterPolymorphPolymorph",
        name: "Greater Polymorph",
        descriptionShort: "Increase Polymorph range, reduce cooldown",
        descriptionLong: "Passive: Increase Polymorph's range by 30%. If Brightwing hits an enemy Hero with Arcane Flare's center within 2 seconds of being Polymorphed, then reduce Polymorph's cooldown by 7 seconds and gain 50 Mana.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_polymorph.png",
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
          "FaerieDragonPolymorph"
        ]
      },
      {
        id: "BrightwingPhaseShiftHyperShift",
        name: "Hyper Shift",
        descriptionShort: "Increase Phase Shift healing",
        descriptionLong: "Increase Phase Shift's healing by an additional 8% of the target's maximum Health. Nearby enemy Minion deaths reduce Phase Shift's cooldown by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_hypershift.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 1.0666666666666667,
          magicalDamage: 0
        },
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "BrightwingPhaseShift"
        ]
      },
      {
        id: "BrightwingPixieCharm",
        name: "Pixie Charm",
        descriptionShort: "Activate to instantly defeat a Mercenary",
        descriptionLong: "Activate to consume 20 stacks of Bribe to instantly defeat an uncaptured non-Elite Mercenary. Passive: Gain 1 stack of Bribe when a nearby enemy Minion dies, and 5 stacks when hitting an enemy Hero with Arcane Flare's center. Maximum 80 stacks.",
        cooldown: null,
        charges: {
          chargesMax: 4,
          chargesInitial: 0,
          chargeCost: 1,
          recastCooldown: 0.25
        },
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_bribe.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level1"
      }
    ],
    [
      {
        id: "BrightwingDreamShotArcaneFlare",
        name: "Dream Shot",
        descriptionShort: "Arcane Flare center hits reduce cooldown",
        descriptionLong: "Increase Arcane Flare's range by 50%. Hitting a Hero with Arcane Flare's center reduces its cooldown to 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_arcaneflare.png",
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
          "FaerieDragonArcaneFlare"
        ]
      },
      {
        id: "BrightwingUnstableAnomalyPolymorph",
        name: "Unstable Anomaly",
        descriptionShort: "Polymorph Slows more, target explodes",
        descriptionLong: "Increase Polymorph's Slow by 15%. Upon expiration, Polymorph deals damage to nearby enemy Heroes equal to 2% of their maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_polymorph.png",
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
          "FaerieDragonPolymorph"
        ]
      },
      {
        id: "BrightwingMagicSpit",
        name: "Magic Spit",
        descriptionShort: "Basic Attacks reduce Soothing Mist cooldown",
        descriptionLong: "Increase Basic Attack range by 1.1. Basic Attacks against Heroes reduce the cooldown of Soothing Mist by 6 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_cooldown.png",
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
        id: "BrightwingArcaneFlareStickyFlare",
        name: "Sticky Flare",
        descriptionShort: "Arcane Flare Slows enemies",
        descriptionLong: "Enemy Heroes hit by Arcane Flare have their Movement Speed Slowed by 20% for 3 seconds. Increase the Slow to 40% if they are hit by the center portion.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_arcaneflare.png",
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
          "FaerieDragonArcaneFlare"
        ]
      },
      {
        id: "BrightwingPhaseShiftPeekaboo",
        name: "Peekaboo!",
        descriptionShort: "Phase Shift grants a Shield, reveals an area",
        descriptionLong: "Phase Shifting to an ally grants both Brightwing and her target a 335 (+4% / level) Shield for 4 seconds and reveals a large area around them for 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_hypershift.png",
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
          "BrightwingPhaseShift"
        ]
      },
      {
        id: "BrightwingCriticalMistCalmingMist",
        name: "Critical Mist",
        descriptionShort: "Activating Soothing Mist heals",
        descriptionLong: "Soothing Mist heals allied Heroes for 165 (+4% / level). Increase this healing by 140% if Soothing Mist removed a disabling effect from that ally.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_soothingmist.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 23.06666666666667,
          magicalDamage: 0
        },
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "BrightwingCalmingMist"
        ]
      }
    ],
    [
      {
        id: "FaerieDragonHeroicAbilityBlinkHeal",
        name: "Blink Heal",
        descriptionShort: "Teleport to allies and heal them",
        descriptionLong: "Teleport to a nearby ally. When teleporting to a Hero, heal them for 200 (+4% / level). Stores up to 2 charges.",
        cost: {
          type: "Mana",
          amount: 40
        },
        cooldown: 9,
        charges: {
          chargesMax: 2,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 2
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_blinkheal.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 4.444444444444445,
          magicalDamage: 0
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "FaerieDragonBlinkHealDash"
        ]
      },
      {
        id: "FaerieDragonHeroicAbilityEmeraldWind",
        name: "Emerald Wind",
        descriptionShort: "Damages and pushes enemies in area",
        descriptionLong: "After 0.5 seconds, create an expanding nova of wind, dealing 225 (+4% / level) damage and pushing enemies away.",
        cost: {
          type: "Mana",
          amount: 90
        },
        cooldown: 50,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_emeraldwind.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 15
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "FaerieDragonEmeraldWind"
        ]
      }
    ],
    [
      {
        id: "BrightwingPixieBoostPixieDust",
        name: "Pixie Boost",
        descriptionShort: "Pixie Dust grants an additional burst of speed",
        descriptionLong: "Pixie Dust gives 50% bonus Movement Speed, decaying to 20% over 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_pixiedust.png",
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
          "FaerieDragonPixieDust"
        ]
      },
      {
        id: "BrightwingPixieDustSafetyDust",
        name: "Safety Dust",
        descriptionShort: "Pixie Dust increases healing",
        descriptionLong: "Increase Pixie Dust's duration by 1 second. Soothing Mist and Blink Heal heal allies with an active Pixie Dust for 75% more.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_pixiedust_a.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 10,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "FaerieDragonPixieDust"
        ]
      },
      {
        id: "BrightwingPixieDustPixiePower",
        name: "Pixie Power",
        descriptionShort: "Reduce Pixie Dust cooldown, increase Spell Armor",
        descriptionLong: "Reduce the cooldown of Pixie Dust by 3 seconds and increase the Spell Armor granted by 25.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_pixiedust_b.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "FaerieDragonPixieDust"
        ]
      }
    ],
    [
      {
        id: "BrightwingArcaneFlareHush!",
        name: "Hush!",
        descriptionShort: "Arcane Flare center Silences, reduces damage",
        descriptionLong: "Enemy Heroes hit by the center of Arcane Flare are Silenced for 1 second and deal 25% less damage for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_arcaneflare.png",
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
          "FaerieDragonArcaneFlare"
        ]
      },
      {
        id: "FaerieDragonMasteryCritterize",
        name: "Critterize",
        descriptionShort: "Polymorph lowers enemy's Armor",
        descriptionLong: "While Polymorphed, the target's Armor is reduced by 25, increasing the damage they take by 25%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_polymorph.png",
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
          "FaerieDragonPolymorph"
        ]
      },
      {
        id: "BrightwingPhaseOut",
        name: "Phase Out",
        descriptionShort: "Activate to gain Stasis",
        descriptionLong: "Activate to place Brightwing in Stasis for 0.75 seconds.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_stasis.png",
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
        id: "BrightwingInvisibleFriends",
        name: "Invisible Friends",
        descriptionShort: "Blink Heal grants Stealth",
        descriptionLong: "Blink Heal grants Stealth to Brightwing. If Blink Heal is cast on a Hero, they are also granted Stealth. While Stealthed by Invisible Friends, Heroes heal for 20 (+4% / level) Health per second and are Unrevealable for the first 0.5 seconds. Remaining stationary for at least 1.5 seconds while Stealthed grants Invisible.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 2
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_blinkheal.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.5333333333333333,
          magicalDamage: 0
        },
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "FaerieDragonBlinkHealDash"
        ],
        prerequisiteTalentIds: [
          "FaerieDragonHeroicAbilityBlinkHeal"
        ]
      },
      {
        id: "BrightwingIntensiveWinds",
        name: "Intensive Winds",
        descriptionShort: "Massively reduce Emerald Wind's cooldown",
        descriptionLong: "Permanently reduce Emerald Wind's cooldown to 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_emeraldwind.png",
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
          "FaerieDragonEmeraldWind"
        ],
        prerequisiteTalentIds: [
          "FaerieDragonHeroicAbilityEmeraldWind"
        ]
      },
      {
        id: "BrightwingSpeedyDragon",
        name: "Speedy Dragon",
        descriptionShort: "Permanently gain Movement Speed",
        descriptionLong: "Permanently gain 20% Movement Speed. Reduce Phase Shift's cast time by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_hypershift.png",
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
          "BrightwingPhaseShift"
        ]
      },
      {
        id: "BrightwingFaerieProtector",
        name: "Faerie Protector",
        descriptionShort: "Grant nearby allies Pixie Dust",
        descriptionLong: "Activate to apply Pixie Dust to all nearby Heroes. Passive: Pixie Dust always bounces back and applies to Brightwing.",
        cooldown: 45,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_brightwing_pixiedust.png",
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
          "FaerieDragonPixieDust"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 43.69114877589453,
    physicalDamage: 45,
    mobility: 24.199,
    healing: 14.234045035585114,
    magicalDamage: 12.173113593026423
  }
};
      
export default brightwing;