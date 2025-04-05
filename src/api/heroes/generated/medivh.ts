import { Hero } from '../heroes';
      
export const medivh: Hero = {
  name: "Medivh",
  nameNormalized: "medivh",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.75,
  movementSpeed: 4.8398,
  health: {
    amount: 1470,
    scale: 0.045,
    regenRate: 3.0625,
    regenScale: 0.045
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "MedivhHeroWeapon",
      range: 5.5,
      period: 0.9,
      damage: 80,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/medivh.png",
  abilities: [
    {
      id: "MedivhRavenForm",
      name: "Raven Form",
      descriptionShort: "Transform into a raven",
      descriptionLong: "Instead of mounting, Medivh can transform into a raven, increasing Movement Speed by 20%. While transformed, Medivh can see and fly over all terrain and is immune to all effects.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_ravenform.png",
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
      id: "MedivhTransformRaven",
      name: "Raven Form",
      descriptionShort: "Transform into a raven",
      descriptionLong: "Transform into a raven, increasing Movement Speed by 20%. While transformed, Medivh can see and fly over terrain and is immune to all effects.",
      cooldown: 4,
      category: "mount",
      type: "Z",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_mount.png",
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
      id: "MedivhArcaneRift",
      name: "Arcane Rift",
      descriptionShort: "Launch an arcane bolt that damages enemies in a line",
      descriptionLong: "Launch a rift that deals 170 (+4% / level) damage to enemies in its path. If an enemy Hero is hit, reduce its cooldown by 5 seconds and refund 50 Mana. Quest: Hit 40 enemy Heroes with Arcane Rift without dying. Reward: Permanently increase the damage dealt by 75 and cooldown reduction for hitting a Hero by 1 second.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 7,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_arcanemissile.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 72.85714285714285
      }
    },
    {
      id: "MedivhForceOfWill",
      name: "Force of Will",
      descriptionShort: "Protect an allied Hero from damage",
      descriptionLong: "Protect an allied Hero from all damage for 1.5 seconds. Upon expiration, Force of Will heals the target for 20% of the damage it absorbed.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 9,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_forceofwill.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0.3333333333333333,
        magicalDamage: 0
      }
    },
    {
      id: "MedivhPortalInstant",
      name: "Portal",
      descriptionShort: "Create a portal that allies can pass through",
      descriptionLong: "Create a set of portals between Medivh and the target location, allowing allies to teleport between both. The portals last 6 seconds.",
      cost: {
        type: "Mana",
        amount: 65
      },
      cooldown: 16,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_portal.png",
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
      id: "MedivhPolyBomb",
      name: "Poly Bomb",
      descriptionShort: "Polymorph a Hero that spreads to other Heroes",
      descriptionLong: "Polymorph an enemy Hero for 2 seconds, Silencing them and making them unable to attack. On expiration, Poly Bomb spreads to other nearby enemy Heroes.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 40,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_polybomb.png",
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
      id: "MedivhLeyLineSeal",
      name: "Ley Line Seal",
      descriptionShort: "Unleash a wave that Time Stops enemy Heroes",
      descriptionLong: "After 0.5 seconds, unleash a wave of energy that places enemy Heroes in Time Stop for 3 seconds.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 80,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_leylineblast.png",
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
        id: "MedivhTransformRavenWindsOfCelerity",
        name: "Winds of Celerity",
        descriptionShort: "Increases Raven Form Movement Speed",
        descriptionLong: "Increases Raven Form's Movement Speed bonus by 50%.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_ravenform.png",
        isPassive: false,
        analysis: {
          mobility: 10,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "MedivhRavenForm"
        ]
      },
      {
        id: "MedivhTransformRavenRavensIntellect",
        name: "Raven’s Intellect",
        descriptionShort: "Raven Form increases Health and Mana Regen",
        descriptionLong: "Raven Form increases Medivh's Mana and Health Regeneration by 75%.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_ravenform_b.png",
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
          "MedivhRavenForm"
        ]
      },
      {
        id: "MedivhPortalPortalMastery",
        name: "Portal Mastery",
        descriptionShort: "Place both Portal locations",
        descriptionLong: "Medivh can manually place both Portal locations and it no longer breaks Raven Form. Activate Medivh's Trait to cancel an unlinked Portal.",
        cost: {
          type: "Mana",
          amount: 65
        },
        cooldown: 16,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_portal.png",
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
          "MedivhPortalInstant"
        ]
      }
    ],
    [
      {
        id: "MedivhPortalMageArmor",
        name: "Mage Armor",
        descriptionShort: "Using a Portal grants Armor",
        descriptionLong: "The first time an ally uses a Portal, they gain 40 Armor for 5 seconds, reducing their damage taken by 40%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_portal.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 8,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "MedivhPortalInstant"
        ]
      },
      {
        id: "MedivhPortalRavenFamiliar",
        name: "Raven Familiar",
        descriptionShort: "Using a Portal grants a Raven Familiar",
        descriptionLong: "A Raven Familiar joins allies each time they use a Portal. The Raven will dive at the ally's next Basic Attack against a Hero within 5 seconds, dealing 114 (+4% / level) damage and Slowing them by 30% for 2.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_portal_a.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 22.8
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "MedivhPortalInstant"
        ]
      },
      {
        id: "MedivhDustOfAppearance",
        name: "Dust of Appearance",
        descriptionShort: "Activate to reveal nearby Heroes",
        descriptionLong: "Activate to greatly increase sight range for 5 seconds and reveal enemy Heroes in the area for 8 seconds. Does not cancel Raven Form. Passive: Increase Medivh's sight range while in Raven Form by 25%.",
        cooldown: 45,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_dustofappearance.png",
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
        id: "MedivhMysticAssault",
        name: "Mystic Assault",
        descriptionShort: "Arcane Rift empowers Basic Attacks",
        descriptionLong: "If Arcane Rift hits an enemy Hero, Medivh's next Basic Attack within 6 seconds deals 50% more damage and heals for 50% of the damage dealt.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_arcanemissile.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 10,
          magicalDamage: 10
        },
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "MedivhArcaneRift"
        ]
      },
      {
        id: "MedivhForceOfWillArcaneExplosion",
        name: "Arcane Explosion",
        descriptionShort: "Force of Will deals area damage",
        descriptionLong: "When Force of Will expires, it deals 80 (+4% / level) damage to nearby enemies, plus 50% of the damage it prevented, up to 315 (+4% / level) additional damage.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_forceofwill.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 16
        },
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "MedivhForceOfWill"
        ]
      },
      {
        id: "MedivhForceofMagic",
        name: "Force of Magic",
        descriptionShort: "Force of Will can grant Spell Power",
        descriptionLong: "Preventing at least 268 (+4% / level) damage with a single cast of Force of Will grants 30% Spell Power for 15 seconds. Stacks up to 2 times.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_forceofwill_a.png",
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
          "MedivhForceOfWill"
        ]
      }
    ],
    [
      {
        id: "MedivhPolyBomb",
        name: "Poly Bomb",
        descriptionShort: "Polymorph a Hero that spreads to other Heroes",
        descriptionLong: "Polymorph an enemy Hero for 2 seconds, Silencing them and making them unable to attack. On expiration, Poly Bomb spreads to other nearby enemy Heroes.",
        cost: {
          type: "Mana",
          amount: 75
        },
        cooldown: 40,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_polybomb.png",
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
          "MedivhPolyBomb"
        ]
      },
      {
        id: "MedivhLeyLineSeal",
        name: "Ley Line Seal",
        descriptionShort: "Unleash a wave that Time Stops enemy Heroes",
        descriptionLong: "After 0.5 seconds, unleash a wave of energy that places enemy Heroes in Time Stop for 3 seconds.",
        cost: {
          type: "Mana",
          amount: 75
        },
        cooldown: 80,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_leylineblast.png",
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
          "MedivhLeyLineSeal"
        ]
      }
    ],
    [
      {
        id: "MedivhForceOfWillCircleOfProtection",
        name: "Circle of Protection",
        descriptionShort: "Force of Will applies to allies near target",
        descriptionLong: "Force of Will also applies to allies near the target, but its cooldown is increased by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_forceofwill.png",
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
          "MedivhForceOfWill"
        ]
      },
      {
        id: "MedivhForceOfWillEnduringWill",
        name: "Enduring Will",
        descriptionShort: "Preventing damage reduces Force of Will cooldown",
        descriptionLong: "Preventing at least 268 (+4% / level) damage with Force of Will reduces its cooldown to 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_forceofwill_a.png",
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
          "MedivhForceOfWill"
        ]
      },
      {
        id: "MedivhForceOfWillReabsorption",
        name: "Reabsorption",
        descriptionShort: "Increase Force of Will healing",
        descriptionLong: "Increase the amount of healing from Force of Will to 70% of the damage it absorbed.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_forceofwill_b.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 14,
          magicalDamage: 0
        },
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "MedivhForceOfWill"
        ]
      }
    ],
    [
      {
        id: "MedivhArcaneRiftArcaneCharge",
        name: "Arcane Charge",
        descriptionShort: "Arcane Rift deals more damage after hitting a Hero",
        descriptionLong: "When Arcane Rift damages an enemy Hero, the next Arcane Rift deals 15% more damage.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_arcanemissile.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 3
        },
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "MedivhArcaneRift"
        ]
      },
      {
        id: "MedivhTemporalFlux",
        name: "Temporal Flux",
        descriptionShort: "Arcane Rift reduces Heroic cooldown",
        descriptionLong: "Basic Attacks reduce Medivh's Heroic Ability cooldown by 3%. Each enemy Hero hit by Arcane Rift reduces Medivh's Heroic Ability cooldown by 9%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_arcanemissile_a.png",
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
          "MedivhArcaneRift"
        ]
      },
      {
        id: "MedivhPortalStablePortal",
        name: "Stable Portal",
        descriptionShort: "Increases Portal uptime",
        descriptionLong: "Decrease Portal cooldown by 25% and increase Portal duration by 50%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_portal.png",
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
          "MedivhPortalInstant"
        ]
      }
    ],
    [
      {
        id: "MedivhPolyBombGlyphOfPolyBomb",
        name: "Glyph Of Poly Bomb",
        descriptionShort: "Poly Bomb instantly spreads in a larger area",
        descriptionLong: "Poly Bomb now hits an area, instantly Polymorphing enemy Heroes, hitting the same area again 1 second later. Poly Bomb's duration is reduced to 1 second, and the spread radius is increased by 25%.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_polybomb.png",
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
          "MedivhPolyBomb"
        ],
        prerequisiteTalentIds: [
          "MedivhPolyBomb"
        ]
      },
      {
        id: "MedivhLeyLineSealMedivhCheats",
        name: "Medivh Cheats!",
        descriptionShort: "Ley Line Seal can be redirected while active",
        descriptionLong: "Increase the duration of the Time Stop by 33% and gain the ability to redirect the wave once while it's active.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_leylineblast.png",
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
          "MedivhLeyLineSeal"
        ],
        prerequisiteTalentIds: [
          "MedivhLeyLineSeal"
        ]
      },
      {
        id: "MedivhArcaneRiftGuardianOfTirisfal",
        name: "Guardian of Tirisfal",
        descriptionShort: "Arcane Rift kills Minions instantly",
        descriptionLong: "Minions and Catapults hit by Arcane Rift are instantly killed.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_arcanemissile.png",
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
          "MedivhArcaneRift"
        ]
      },
      {
        id: "MedivhArcaneBrilliance",
        name: "Arcane Brilliance",
        descriptionShort: "Grant Spell Power and Mana to allies",
        descriptionLong: "Activate to instantly restore 200 mana to all nearby allied Heroes and grant them 15% Spell Power for 10 seconds.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_jaina_arcaneintellect.png",
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
      },
      {
        id: "MedivhDustofDisappearance",
        name: "Dust of Disappearance",
        descriptionShort: "Stealth an allied Hero",
        descriptionLong: "Stealth an allied Hero for 40 seconds, they are Unrevealable for the first 0.5 seconds. Remaining stationary for at least 1.5 seconds while Stealthed grants Invisible. Stores up to 2 charges.",
        cooldown: 10,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1
        },
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medivh_invisibility.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 5,
        tier: "level20"
      }
    ]
  ],
  analysis: {
    tankiness: 49.83050847457628,
    physicalDamage: 44.44444444444445,
    mobility: 24.006944444444446,
    healing: 0.08097493825660958,
    magicalDamage: 2.6916337689206014
  }
};
