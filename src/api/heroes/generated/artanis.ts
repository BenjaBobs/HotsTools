import { Hero } from '../heroes';
      
export const artanis: Hero = {
  name: "Artanis",
  nameNormalized: "artanis",
  franchise: "Starcraft",
  gender: "Male",
  size: 0.8125,
  movementSpeed: 4.8398,
  health: {
    amount: 2490,
    scale: 0.04,
    regenRate: 5.1875,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroArtanis",
      range: 1.25,
      period: 1,
      damage: 111,
      damageScale: 0.04
    },
    {
      nameId: "HeroArtanisTwinBlades",
      range: 1.25,
      period: 1,
      damage: 111,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/artanis.png",
  abilities: [
    {
      id: "ArtanisShieldOverloadDummy",
      name: "Shield Overload",
      descriptionShort: "Gain a Shield when attacked at low Health",
      descriptionLong: "After taking damage while below 75% Health, Artanis gains a 365 (+4% / level) Shield for 5 seconds. Basic Attacks lower the cooldown of Shield Overload by 4 seconds.",
      cooldown: 24,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_shieldoverload.png",
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
      id: "ArtanisBladeDash",
      name: "Blade Dash",
      descriptionShort: "Dash forward then back again, damaging enemies along the way",
      descriptionLong: "Dash forward and deal 63 (+4% / level) damage to enemies, then return and deal 171 (+4% / level) damage. Every enemy hit reduces the cooldown on Shield Overload by 1 second, and Heroes by 2 seconds.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 10,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_powerstrikes.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 70.19999999999999
      }
    },
    {
      id: "ArtanisTwinBlades",
      name: "Twin Blades",
      descriptionShort: "Charge and Basic Attack twice",
      descriptionLong: "Artanis's next Basic Attack immediately causes him to charge a short distance and strike the enemy 2 times.",
      cost: {
        type: "Mana",
        amount: 20
      },
      cooldown: 4,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_doubleslash_on.png",
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
      id: "ArtanisPhasePrism",
      name: "Phase Prism",
      descriptionShort: "Swap positions with an enemy Hero",
      descriptionLong: "Fire a Phase Prism that deals 66 (+4% / level) damage to the first Hero hit and swaps Artanis's position with theirs. Hitting a Hero also grants Artanis Unstoppable for 1.5 seconds. Can be used during Blade Dash.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 12,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_repositionmatrix.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 16.5
      }
    },
    {
      id: "ArtanisSpearofAdunPurifierBeam",
      name: "Purifier Beam",
      descriptionShort: "Chase an enemy with an orbital beam",
      descriptionLong: "Target an enemy Hero with an orbital beam from the Spear of Adun, dealing 184 (+4% / level) damage per second for 8 seconds. The beam will chase the target as they move. Unlimited range.",
      cost: {
        type: "Mana",
        amount: 65
      },
      cooldown: 70,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_purifierbeam.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 36.800000000000004
      }
    },
    {
      id: "ArtanisSpearofAdunSuppressionPulse",
      name: "Suppression Pulse",
      descriptionShort: "Damage and Blind enemies in a large area",
      descriptionLong: "Fire a large area pulse from the Spear of Adun, dealing 114 (+4% / level) damage and Blinding enemies for 4 seconds. Unlimited range.",
      cost: {
        type: "Mana",
        amount: 40
      },
      cooldown: 50,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 10
      },
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_disruptionweb.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 22.8
      }
    }
  ],
  talents: [
    [
      {
        id: "ArtanisTwinBladesReactiveParry",
        name: "Reactive Parry",
        descriptionShort: "Twin Blades, Blade Dash gives Physical Armor",
        descriptionLong: "Damaging enemy Heroes with Twin Blades or Blade Dash grants Artanis 50 Physical Armor against the next enemy Hero Basic Attack, reducing its damage by 50%. Stores up to 2 charges.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_doubleslash_on.png",
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
          "ArtanisBladeDash",
          "ArtanisTwinBladesPrimed",
          "ArtanisTwinBlades"
        ]
      },
      {
        id: "ArtanisTwinBladesAmateurOpponent",
        name: "Amateur Opponent",
        descriptionShort: "Increases Twin Blades damage to non-Heroes",
        descriptionLong: "Twin Blades attacks deal 150% bonus damage to non-Heroes.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_doubleslash_var1.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 30
        },
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "ArtanisTwinBladesPrimed",
          "ArtanisTwinBlades"
        ]
      },
      {
        id: "ArtanisProtectorOfAiur",
        name: "Protector Of Aiur",
        descriptionShort: "Quest: Attacks against Heroes increase damage",
        descriptionLong: "Quest: Basic Attacks against enemy Heroes increase Artanis's Attack damage by 0.1%. Takedowns grant 1% bonus damage.",
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
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "ArtanisShieldOverloadDummy"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "ArtanisPhasePrismPsionicSynergy",
        name: "Psionic Synergy",
        descriptionShort: "Phase Prism grants Armor",
        descriptionLong: "Hitting an enemy Hero with Phase Prism grants 30 Armor for 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_repositionmatrix.png",
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
          "ArtanisPhasePrism"
        ]
      },
      {
        id: "ArtanisShieldOverloadShieldBattery",
        name: "Shield Battery",
        descriptionShort: "Shield Overload recharges faster while active",
        descriptionLong: "Shield Overload's cooldown recharges 125% faster while its Shield is active. Passive: Reduce Shield Overload's cooldown by 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_shieldoverload.png",
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
          "ArtanisShieldOverloadDummy"
        ]
      },
      {
        id: "ArtanisShieldOverloadShieldSurge",
        name: "Shield Surge",
        descriptionShort: "Increase Shield Overload shield at low Health",
        descriptionLong: "Increases Shield Overload's Shields by 80% while below 25% Health.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_shieldoverload_a.png",
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
          "ArtanisShieldOverloadDummy"
        ]
      }
    ],
    [
      {
        id: "ArtanisBladeDashSolariteReaper",
        name: "Solarite Reaper",
        descriptionShort: "Increases Blade Dash damage",
        descriptionLong: "Increases the damage of the first dash of Blade Dash by 175%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_powerstrikes.png",
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
          "ArtanisBladeDash"
        ]
      },
      {
        id: "ArtanisPhasePrismChronoSurge",
        name: "Chrono Surge",
        descriptionShort: "Phase Prism grants Attack Speed, Slows",
        descriptionLong: "Hitting an enemy Hero with Phase Prism grants 40% bonus Attack Speed for 5 seconds and Slows the enemy's Movement Speed by 30% for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_repositionmatrix.png",
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
          "ArtanisPhasePrism"
        ]
      },
      {
        id: "ArtanisFinalCut",
        name: "Final Cut",
        descriptionShort: "Abilities increase Basic Attack damage",
        descriptionLong: "After using an Ability, your next Basic Attack within 6 seconds deals 40% additional damage. While under 25% Health, this damage bonus is increased to 60%.",
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
          magicalDamage: 8
        },
        order: 3,
        tier: "level7"
      }
    ],
    [
      {
        id: "ArtanisHeroicAbilitySpearofAdunSuppressionPulse",
        name: "Suppression Pulse",
        descriptionShort: "Damage and Blind enemies in a large area",
        descriptionLong: "Fire a large area pulse from the Spear of Adun, dealing 114 (+4% / level) damage and Blinding enemies for 4 seconds. Unlimited range.",
        cost: {
          type: "Mana",
          amount: 40
        },
        cooldown: 50,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 10
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_disruptionweb.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 22.8
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "ArtanisSpearofAdunSuppressionPulse"
        ]
      },
      {
        id: "ArtanisHeroicAbilitySpearofAdunPurifierBeam",
        name: "Purifier Beam",
        descriptionShort: "Chase an enemy with an orbital beam",
        descriptionLong: "Target an enemy Hero with an orbital beam from the Spear of Adun, dealing 184 (+4% / level) damage per second for 8 seconds. The beam will chase the target as they move. Unlimited range.",
        cost: {
          type: "Mana",
          amount: 65
        },
        cooldown: 70,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_purifierbeam.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 36.800000000000004
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "ArtanisSpearofAdunPurifierBeam"
        ]
      }
    ],
    [
      {
        id: "ArtanisBladeDashTemplarsZeal",
        name: "Templar's Zeal",
        descriptionShort: "Reduce the cooldown of Blade Dash",
        descriptionLong: "Reduce the Mana cost of Blade Dash from 50 to 25. Each time that Shield Overload activates, reduce the cooldown of Blade Dash by 6 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_powerstrikes.png",
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
          "ArtanisBladeDash"
        ]
      },
      {
        id: "ArtanisTwinBladesTripleStrike",
        name: "Triple Strike",
        descriptionShort: "Twin Blades strikes 3 times",
        descriptionLong: "Increases Twin Blades's number of Basic Attacks to 3, but increase its cooldown by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_doubleslash_on.png",
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
          "ArtanisTwinBladesPrimed",
          "ArtanisTwinBlades"
        ]
      },
      {
        id: "ArtanisPhasePrismGravitonVortex",
        name: "Graviton Vortex",
        descriptionShort: "Attacks reduce Phase Prism cooldown",
        descriptionLong: "Reduce the Mana cost of Phase Prism from 50 to 25. Hitting an enemy Hero with Basic Attacks or Blade Dash reduces the cooldown of Phase Prism by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_repositionmatrix.png",
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
          "ArtanisPhasePrism"
        ]
      },
      {
        id: "ArtanisShieldOverloadPhaseBulwark",
        name: "Phase Bulwark",
        descriptionShort: "Shield Overload grants Spell Armor",
        descriptionLong: "Shield Overload grants 50 Spell Armor while active and for 2 seconds after it expires.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_shieldoverload.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 4,
        tier: "level13",
        linkedAbilityIds: [
          "ArtanisShieldOverloadDummy"
        ]
      }
    ],
    [
      {
        id: "ArtanisTwinBladesTitanKiller",
        name: "Titan Killer",
        descriptionShort: "Basic Attacks deal percent damage",
        descriptionLong: "Basic Attacks against Heroes deal bonus damage equal to 0.5% of the target's maximum Health in damage, increased to 1.5% when empowered by Twin Blades.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_doubleslash_on.png",
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
          "ArtanisTwinBladesPrimed",
          "ArtanisTwinBlades"
        ]
      },
      {
        id: "ArtanisShieldOverloadForceofWill",
        name: "Force of Will",
        descriptionShort: "Abilities reduce Shield Overload cooldown",
        descriptionLong: "Casting Basic Abilities reduces the cooldown of Shield Overload by 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_shieldoverload.png",
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
          "ArtanisShieldOverloadDummy"
        ]
      },
      {
        id: "ArtanisTwinBladesBladesofaTemplar",
        name: "Blades of a Templar",
        descriptionShort: "Gain Attack Speed, Slow enemies",
        descriptionLong: "Increase Attack Speed by 20%. Basic Attacks Slow by 20% for 1.25 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_slow.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 4,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "ArtanisShieldOverloadDummy"
        ]
      }
    ],
    [
      {
        id: "ArtanisSpearofAdunSuppressionPulseOrbitalBombardment",
        name: "Orbital Bombardment",
        descriptionShort: "Suppression Pulse gains an additional charge",
        descriptionLong: "Suppression Pulse gains an additional charge. There is a 10 second cooldown between uses.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 10
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_disruptionweb.png",
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
          "ArtanisSpearofAdunSuppressionPulse"
        ],
        prerequisiteTalentIds: [
          "ArtanisHeroicAbilitySpearofAdunSuppressionPulse"
        ]
      },
      {
        id: "ArtanisSpearofAdunPurifierBeamTargetPurified",
        name: "Target Purified",
        descriptionShort: "Purifier Beam is faster, recasts if target dies",
        descriptionLong: "Increase the speed of Purifier Beam by 15%. If the target of Purifier Beam dies, it automatically recasts on the nearest visible enemy Hero.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_purifierbeam.png",
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
          "ArtanisSpearofAdunPurifierBeam"
        ],
        prerequisiteTalentIds: [
          "ArtanisHeroicAbilitySpearofAdunPurifierBeam"
        ]
      },
      {
        id: "ArtanisTwinBladesZealotCharge",
        name: "Zealot Charge",
        descriptionShort: "Increase Twin Blades charge distance",
        descriptionLong: "Increase Twin Blades' charge distance by 75%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_doubleslash_on.png",
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
          "ArtanisTwinBladesPrimed",
          "ArtanisTwinBlades"
        ]
      },
      {
        id: "ArtanisPlasmaBurn",
        name: "Plasma Burn",
        descriptionShort: "Shield Overload burns nearby enemies",
        descriptionLong: "While Shield Overload is active, deal 70 (+4% / level) damage per second to nearby enemies.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_artanis_shieldoverload.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 14
        },
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "ArtanisShieldOverloadDummy"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 75.02824858757063,
    physicalDamage: 55.50000000000001,
    mobility: 24.006944444444446,
    healing: 0,
    magicalDamage: 5.404906162258017
  }
};
