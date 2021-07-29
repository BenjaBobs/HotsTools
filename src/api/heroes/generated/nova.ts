import { Hero } from '../heroes';
      
const nova: Hero = {
  name: "Nova",
  nameNormalized: "nova",
  franchise: "Starcraft",
  gender: "Female",
  size: 0.625,
  movementSpeed: 4.8398,
  health: {
    amount: 1300,
    scale: 0.04,
    regenRate: 2.711,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroNova",
      range: 6.5,
      period: 1,
      damage: 105,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/nova.png",
  abilities: [
    {
      id: "NovaPermanentCloak",
      name: "Permanent Cloak",
      descriptionShort: "Stealth and gain Move Speed while not attacking or taking damage",
      descriptionLong: "Gain Stealth when out of combat for 3 seconds. Taking damage, attacking, using Abilities, or Channeling ends Stealth. Remaining stationary for at least 1.5 seconds while Stealthed grants Invisible.Passive: Gain 15% Movement Speed while Stealthed.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_personalcloaking.png",
      isPassive: true
    },
    {
      id: "NovaSnipeStorm",
      name: "Snipe",
      descriptionShort: "Fire a shot and deal a large amount of damage to the first enemy hit",
      descriptionLong: "Deal 230 (+4% / level) damage to the first enemy hit.Passive: Hitting an enemy Hero with Snipe permanently increases the damage of Snipe by 6%, stacking up to 30%. Gain an additional 25% damage bonus at maximum stacks. All stacks are lost if Snipe fails to hit an enemy.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 6,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_snipe.png",
      isPassive: false
    },
    {
      id: "NovaPinningShot",
      name: "Pinning Shot",
      descriptionShort: "Slow and damage an enemy",
      descriptionLong: "Deal 100 (+4% / level) damage to an enemy and Slow them by 40% for 2.25 seconds.",
      cost: {
        type: "Mana",
        amount: 65
      },
      cooldown: 12,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 1
      },
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_pinningshot.png",
      isPassive: false
    },
    {
      id: "NovaHoloDecoy",
      name: "Holo Decoy",
      descriptionShort: "Create a hologram decoy of Nova",
      descriptionLong: "Create a Decoy for 5 seconds with 100% of Nova's current Health that attacks enemies, dealing 10% of Nova's base damage. Whenever a Decoy takes damage, it deals that amount of damage to itself, effectively doubling the damage it takes.Using this Ability does not break Stealth.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 15,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_holodecoy.png",
      isPassive: false
    },
    {
      id: "NovaTripleTap",
      name: "Triple Tap",
      descriptionShort: "Fire at a target 3 times",
      descriptionLong: "Locks in on the target Hero, then fires 3 shots that hit the first Hero or Structure they come in contact with for 372 (+4% / level) damage each.",
      cost: {
        type: "Mana",
        amount: 100
      },
      cooldown: 100,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_tripletap.png",
      isPassive: false
    },
    {
      id: "NovaPrecisionStrike",
      name: "Precision Strike",
      descriptionShort: "Area attack with unlimited range",
      descriptionLong: "After a 1.5 second delay, deals 435 (+4% / level) damage to enemies within an area. Unlimited range.",
      cost: {
        type: "Mana",
        amount: 100
      },
      cooldown: 60,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 3
      },
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_orbitalstrike.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "NovaMasteryLongshot",
        name: "Longshot",
        descriptionShort: "Increases Pinning Shot range",
        descriptionLong: "Increases the cast range of Pinning Shot by 30%. Pinning Shot also increases the range of Nova's next Basic Attack by 2.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_pinningshot.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "NovaPinningShot"
        ]
      },
      {
        id: "NovaCovertOps",
        name: "Covert Ops",
        descriptionShort: "Stealth enhances Pinning Shot slow and cost",
        descriptionLong: "After being Stealthed for 4 seconds, Pinning Shot's Slow is increased to 55% and costs no Mana. Bonus is lost after losing Stealth for 1 second.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_pinningshot_var1.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "NovaPinningShot"
        ]
      },
      {
        id: "NovaAdvancedCloaking",
        name: "Advanced Cloaking",
        descriptionShort: "Stealth grants Move Speed, Mana regen",
        descriptionLong: "After being Stealthed for 2 seconds, gain an additional 10% Movement Speed. While Stealthed, regenerate 2 Mana per second.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_personalcloaking.png",
        isPassive: false,
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "NovaPermanentCloak"
        ]
      }
    ],
    [
      {
        id: "NovaRapidProjection",
        name: "Rapid Projection",
        descriptionShort: "Reduces Holo Decoy cooldown and Mana cost",
        descriptionLong: "Reduces Holo Decoy's cooldown and Mana cost by 50%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_holodecoy_var1.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "NovaHoloDecoy"
        ]
      },
      {
        id: "NovaHoloStability",
        name: "Holo Stability",
        descriptionShort: "Increase Holo Decoy range, duration",
        descriptionLong: "Increase the cast range of Holo Decoy by 100% and its duration by 120%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_holodecoy_var2.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "NovaHoloDecoy"
        ]
      },
      {
        id: "NovaCovertMission",
        name: "Covert Mission",
        descriptionShort: "Kill Minions or Heroes to bribe a Mercenary",
        descriptionLong: "Enemy Minions killed near Nova grant a stack of Bribe. Hero Takedowns grant 10 stacks of Bribe. Use 25 stacks to bribe a Mercenary, instantly defeating them.  Does not work on Elite Mercenaries.  Maximum of 100 stacks. If a camp is defeated entirely with Bribe, the camp respawns 50% faster.",
        cooldown: null,
        charges: {
          chargesMax: 4,
          chargeCost: 1,
          recastCooldown: 0.25
        },
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_bribe.png",
        isPassive: false,
        order: 3,
        tier: "level4"
      }
    ],
    [
      {
        id: "NovaMasteryPerfectShotSnipe",
        name: "Perfect Shot",
        descriptionShort: "Hero hits reduce Snipe cooldown, refund Mana",
        descriptionLong: "Hitting an enemy Hero with Snipe reduces its cooldown by 4 seconds and refunds its Mana cost.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_snipe.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "NovaSnipeStorm"
        ]
      },
      {
        id: "NovaCombatStyleOneintheChamber",
        name: "One in the Chamber",
        descriptionShort: "Using an Ability empowers next Basic Attack",
        descriptionLong: "After using an Ability, Nova's next Basic Attack within 3 seconds deals 60% additional damage.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_damage.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "NovaPermanentCloak"
        ]
      },
      {
        id: "NovaCombatStyleAntiArmorShells",
        name: "Anti-Armor Shells",
        descriptionShort: "Basic Attacks hit harder, reduce Physical Armor",
        descriptionLong: "Nova's Basic Attacks deal 250% damage and decrease the Physical Armor of Heroic targets by 15 for 3 seconds, but her Attack Speed is proportionally slower.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_antiarmorshells.png",
        isPassive: false,
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "NovaPermanentCloak"
        ]
      }
    ],
    [
      {
        id: "NovaHeroicAbilityTripleTap",
        name: "Triple Tap",
        descriptionShort: "Fire at a target 3 times",
        descriptionLong: "Locks in on the target Hero, then fires 3 shots that hit the first Hero or Structure they come in contact with for 372 (+4% / level) damage each.",
        cost: {
          type: "Mana",
          amount: 100
        },
        cooldown: 100,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_tripletap.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "NovaTripleTap"
        ]
      },
      {
        id: "NovaHeroicAbilityPrecisionStrike",
        name: "Precision Strike",
        descriptionShort: "Area attack with unlimited range",
        descriptionLong: "After a 1.5 second delay, deals 435 (+4% / level) damage to enemies within an area. Unlimited range.",
        cost: {
          type: "Mana",
          amount: 100
        },
        cooldown: 60,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 3
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_orbitalstrike.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "NovaPrecisionStrike"
        ]
      }
    ],
    [
      {
        id: "NovaMasteryPsionicEfficiency",
        name: "Psionic Efficiency",
        descriptionShort: "Increase Snipe range and stacks",
        descriptionLong: "Snipe's range is increased by 15% and hitting a Hero grants an additional stack of Precision Sniper.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_snipe.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "NovaSnipeStorm"
        ]
      },
      {
        id: "NovaMasteryDoubleTap",
        name: "Double Tap",
        descriptionShort: "Pinning Shot gains a charge, cooldown increased",
        descriptionLong: "Pinning Shot now has 2 charges, but its cooldown is increased by 2 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_pinningshot.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "NovaPinningShot"
        ]
      },
      {
        id: "NovaIonicForceField",
        name: "Ionic Force Field",
        descriptionShort: "Gain Armor after Stealth breaks",
        descriptionLong: "Gain 25 Armor for 3 seconds after losing Stealth.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_personalcloaking.png",
        isPassive: false,
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "NovaPermanentCloak"
        ]
      }
    ],
    [
      {
        id: "NovaMasteryExplosiveShot",
        name: "Explosive Round",
        descriptionShort: "Snipe deals damage in an area",
        descriptionLong: "Snipe also deals 90% damage to enemies near the impact.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_snipe.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "NovaSnipeStorm"
        ]
      },
      {
        id: "NovaMasteryCripplingShot",
        name: "Crippling Shot",
        descriptionShort: "Pinning Shot lowers Armor",
        descriptionLong: "Pinning Shot lowers a Hero's Armor by 20 for the duration of the Slow, causing them to take 20% increased damage.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_pinningshot.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "NovaPinningShot"
        ]
      },
      {
        id: "NovaMasteryLethalDecoy",
        name: "Lethal Decoy",
        descriptionShort: "Holo Decoy deals more damage",
        descriptionLong: "Increases the damage Holo Decoy deals to 30% of Nova's damage.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_holodecoy.png",
        isPassive: false,
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "NovaHoloDecoy"
        ]
      }
    ],
    [
      {
        id: "NovaMasteryFastReload",
        name: "Fast Reload",
        descriptionShort: "Triple Tap cooldown resets on Hero kills",
        descriptionLong: "Triple Tap's cooldown is reset if it kills an enemy Hero.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_tripletap.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "NovaTripleTap"
        ],
        prerequisiteTalentIds: [
          "NovaHeroicAbilityTripleTap"
        ]
      },
      {
        id: "NovaMasteryPrecisionBarrage",
        name: "Precision Barrage",
        descriptionShort: "Lower Precision Strike cooldown, gain charge",
        descriptionLong: "Precision Strike gains a 2nd charge and its cooldown is reduced by 30 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 3
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_orbitalstrike.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "NovaPrecisionStrike"
        ],
        prerequisiteTalentIds: [
          "NovaHeroicAbilityPrecisionStrike"
        ]
      },
      {
        id: "NovaApolloSuit",
        name: "Apollo Suit",
        descriptionShort: "Reduce Permanent Cloak cooldown",
        descriptionLong: "Reduce the cooldown of Permanent Cloak by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nova_personalcloaking.png",
        isPassive: false,
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "NovaPermanentCloak"
        ]
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
        order: 4,
        tier: "level20"
      }
    ]
  ]
};
      
export default nova;