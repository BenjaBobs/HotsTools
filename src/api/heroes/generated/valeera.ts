import { Hero } from '../heroes';
      
const valeera: Hero = {
  name: "Valeera",
  nameNormalized: "valeera",
  franchise: "Warcraft",
  gender: "Female",
  size: 0.625,
  movementSpeed: 4.8398,
  health: {
    amount: 2047,
    scale: 0.04,
    regenRate: 4.2656,
    regenScale: 0.04
  },
  energy: {
    amount: 100,
    regenRate: 10,
    name: "Energy"
  },
  autoAttacks: [
    {
      nameId: "HeroValeera",
      range: 1.25,
      period: 0.5,
      damage: 79,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/valeera.png",
  abilities: [
    {
      id: "ValeeraStealth",
      name: "Vanish",
      descriptionShort: "Stealth and gain new Abilities",
      descriptionLong: "Vanish from sight, becoming Stealthed, gaining 20% Movement Speed and access to new Abilities. For the first second, Valeera is Unrevealable and can pass through other units. Remaining stationary for at least 1.5 seconds while Stealthed grants Invisible.After being Stealthed for 3 seconds, Ambush, Cheap Shot, and Garrote have 100% increased range, and cause Valeera to teleport to the target when used.",
      cooldown: 8,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_vanish.png",
      isPassive: false
    },
    {
      id: "ValeeraSinisterStrike",
      name: "Sinister Strike",
      descriptionShort: "Dash forward, damaging enemies in a line",
      descriptionLong: "Dash forward, hitting all enemies in a line for 110 (+4% / level) damage. If Sinister Strike hits a Hero, Valeera stops dashing immediately and the cooldown is reduced to 1 second.Awards 1 Combo Point.Stealth: AmbushHeavily damage an enemy and reduce their Armor.",
      cost: {
        type: "Energy",
        amount: 25
      },
      cooldown: 5,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_sinisterstrike.png",
      isPassive: false
    },
    {
      id: "ValeeraBladeFlurry",
      name: "Blade Flurry",
      descriptionShort: "Damage nearby enemies",
      descriptionLong: "Deal 130 (+4% / level) damage in an area around Valeera. Awards 1 Combo Point per enemy Hero hit.Stealth: Cheap ShotStun, Blind, and damage an enemy.",
      cost: {
        type: "Energy",
        amount: 40
      },
      cooldown: 4,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_bladeflurry.png",
      isPassive: false
    },
    {
      id: "ValeeraEviscerate",
      name: "Eviscerate",
      descriptionShort: "High damage finishing move",
      descriptionLong: "Eviscerate an enemy, dealing damage per Combo Point. 1 Point: 85 (+4% / level)2 Points: 170 (+4% / level)3 Points: 255 (+4% / level)Stealth: GarroteSilence and damage an enemy over time.",
      cost: {
        type: "Energy",
        amount: 25
      },
      cooldown: 1,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_eviscerate.png",
      isPassive: false
    },
    {
      id: "ValeeraCloakOfShadows",
      name: "Cloak of Shadows",
      descriptionShort: "Become Unstoppable, gain Spell Armor",
      descriptionLong: "Valeera is enveloped in a Cloak of Shadows, which immediately removes all damage over time effects from her. For 1.5 seconds, she becomes Unstoppable and gains 75 Spell Armor, reducing Ability Damage taken by 75%.Using this Ability does not break Stealth.",
      cooldown: 15,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_cloakofshadows.png",
      isPassive: false
    },
    {
      id: "ValeeraSmokeBomb",
      name: "Smoke Bomb",
      descriptionShort: "Create an obscuring cloud of smoke",
      descriptionLong: "Create a cloud of smoke. While in the smoke, Valeera is Unrevealable, can pass through other units, and gains 60 Armor, reducing damage taken by 60%. Valeera can continue to attack and use abilities without being revealed. Lasts 5 seconds.Using this Ability does not break Stealth.",
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_smokebomb.png",
      isPassive: false
    },
    {
      id: "ValeeraAmbush",
      name: "Ambush",
      descriptionShort: "Damage an enemy and reduce their Armor",
      descriptionLong: "Ambush an enemy, dealing 130 (+4% / level) damage and reducing their Armor by 10 for 5 seconds.Awards 1 Combo Point.Unstealth: Sinister StrikeDash forward, damaging enemies.",
      cost: {
        type: "Energy",
        amount: 10
      },
      cooldown: 1,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_ambush.png",
      isPassive: false
    },
    {
      id: "ValeeraCheapShot",
      name: "Cheap Shot",
      descriptionShort: "Stun, Blind, and damage an enemy",
      descriptionLong: "Deal 30 (+4% / level) damage to an enemy, Stun them for 0.75 seconds, and Blind them for 2 seconds once Cheap Shot's Stun expires.Awards 1 Combo Point.Unstealth: Blade FlurryDeal damage in an area around Valeera.",
      cost: {
        type: "Energy",
        amount: 30
      },
      cooldown: 1,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_cheapshot.png",
      isPassive: false
    },
    {
      id: "ValeeraGarrote",
      name: "Garrote",
      descriptionShort: "Deal high damage over time to an enemy",
      descriptionLong: "Deal 20 (+4% / level) damage to an enemy and an additional 140 (+4% / level) damage over 7 seconds, and Silence them for 2.5 seconds.Awards 1 Combo Point.Unstealth: EviscerateHigh damage finishing move.",
      cost: {
        type: "Energy",
        amount: 30
      },
      cooldown: 1,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_garrote.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "ValeeraVigor",
        name: "Vigor",
        descriptionShort: "Quest: Regen Globes increase max Energy",
        descriptionLong: "Valeera regenerates an additional 3 Energy per second.Reward: After Gathering 20 Regen Globes, increase Valeera's maximum Energy to 120.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_conjurerspursuit.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        isQuest: true
      },
      {
        id: "ValeeraVanishSubtlety",
        name: "Subtlety",
        descriptionShort: "Stealth Abilities increase Energy regeneration",
        descriptionLong: "After teleporting with Ambush, Cheap Shot, or Garrote, regenerate 10 Energy per second for 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_vanish.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "ValeeraCancelStealth",
          "ValeeraStealth"
        ]
      },
      {
        id: "ValeeraCombatReadiness",
        name: "Combat Readiness",
        descriptionShort: "Spending Combo Points grants Block",
        descriptionLong: "Each Combo Point spent grants 75 Physical Armor against the next enemy Hero Basic Attack, reducing its damage by 75%. Stores up to 3 charges.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_block.png",
        isPassive: false,
        order: 3,
        tier: "level1"
      },
      {
        id: "ValeeraCripplingPoison",
        name: "Crippling Poison",
        descriptionShort: "Spell Damage Slows enemies",
        descriptionLong: "Activate to make Valeera's next damaging Ability and subsequent Abilities within 4 seconds Slow targets by 20% for 4 seconds.Activating Crippling Poison does not break Stealth.",
        cooldown: 15,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_cripplingpoison.png",
        isPassive: false,
        order: 4,
        tier: "level1"
      }
    ],
    [
      {
        id: "ValeeraSinisterStrikeRelentlessStrikes",
        name: "Relentless Strikes",
        descriptionShort: "Reduces Sinister Strike Energy cost",
        descriptionLong: "Reduces the Energy cost of Sinister Strike by 10.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_sinisterstrike.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "ValeeraSinisterStrike"
        ]
      },
      {
        id: "ValeeraGarroteHemorrhage",
        name: "Hemorrhage",
        descriptionShort: "Garrote increases Basic Attack damage",
        descriptionLong: "Valeera's Basic Attacks deal 40% additional damage to enemies affected by Garrote.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_garrote.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "ValeeraGarrote"
        ]
      },
      {
        id: "ValeeraVanishInitiative",
        name: "Initiative",
        descriptionShort: "Stealth Abilities award Move Speed, Combo Points",
        descriptionLong: "Ambush, Cheap Shot, and Garrote grant 15% Movement Speed for 3 seconds and award 2 Combo Points.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_vanish.png",
        isPassive: false,
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "ValeeraCancelStealth",
          "ValeeraStealth"
        ]
      },
      {
        id: "ValeeraWoundPoison",
        name: "Wound Poison",
        descriptionShort: "Spell Damage reduces enemy healing received",
        descriptionLong: "Activate to make Valeera's next damaging Ability and subsequent Abilities within 4 seconds reduce enemy healing received by 50% for 4 seconds.Activating Wound Poison does not break Stealth.",
        cooldown: 15,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_woundpoison.png",
        isPassive: false,
        order: 4,
        tier: "level4"
      }
    ],
    [
      {
        id: "ValeeraSinisterStrikeMutilate",
        name: "Mutilate",
        descriptionShort: "Increases Sinister Strike damage but reduces range",
        descriptionLong: "Sinister Strike now hits with both blades, dealing 125% additional damage, but its range is reduced by 1.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_sinisterstrike.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "ValeeraSinisterStrike"
        ]
      },
      {
        id: "ValeeraBladeFlurryFatalFinesse",
        name: "Fatal Finesse",
        descriptionShort: "Quest: Hit Heroes with Blade Flurry",
        descriptionLong: "Quest: Each time Blade Flurry damages an enemy Hero, its damage increases by 6, up to 90.Reward: After damaging 15 Heroes with Blade Flurry, permanently reduce its Energy cost by 20.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_bladeflurry.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "ValeeraBladeFlurry"
        ],
        isQuest: true
      },
      {
        id: "ValeeraEviscerateSliceAndDice",
        name: "Slice and Dice",
        descriptionShort: "Eviscerate grants Attack Speed",
        descriptionLong: "Eviscerating an enemy with 3 Combo Points grants 150% Attack Speed. Lasts 3 seconds or 3 Basic Attacks.Passive: Basic Attacks restore 2 Energy.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_eviscerate.png",
        isPassive: false,
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "ValeeraEviscerate"
        ]
      }
    ],
    [
      {
        id: "ValeeraSmokeBomb",
        name: "Smoke Bomb",
        descriptionShort: "Create an obscuring cloud of smoke",
        descriptionLong: "Create a cloud of smoke. While in the smoke, Valeera is Unrevealable, can pass through other units, and gains 60 Armor, reducing damage taken by 60%. Valeera can continue to attack and use abilities without being revealed. Lasts 5 seconds.Using this Ability does not break Stealth.",
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_smokebomb.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "ValeeraSmokeBomb"
        ]
      },
      {
        id: "ValeeraCloakOfShadows",
        name: "Cloak of Shadows",
        descriptionShort: "Become Unstoppable, gain Spell Armor",
        descriptionLong: "Valeera is enveloped in a Cloak of Shadows, which immediately removes all damage over time effects from her. For 1.5 seconds, she becomes Unstoppable and gains 75 Spell Armor, reducing Ability Damage taken by 75%.Using this Ability does not break Stealth.",
        cooldown: 15,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_cloakofshadows.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "ValeeraCloakOfShadows"
        ]
      }
    ],
    [
      {
        id: "ValeeraAmbushDeathFromAbove",
        name: "Death From Above",
        descriptionShort: "Ambush can reduce Vanish cooldown",
        descriptionLong: "Teleporting with Ambush reduces the cooldown of Vanish by 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_ambush.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "ValeeraAmbush"
        ]
      },
      {
        id: "ValeeraCheapShotBlind",
        name: "Blind",
        descriptionShort: "Increase Cheap Shot Blind duration",
        descriptionLong: "Increase the duration of Cheap Shot's Blind by 2.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_cheapshot.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "ValeeraCheapShot"
        ]
      },
      {
        id: "ValeeraGarroteStrangle",
        name: "Strangle",
        descriptionShort: "Garrote reduces Spell Power",
        descriptionLong: "Using Garrote on a Hero reduces their Spell Power by 40% for 6 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_garrote.png",
        isPassive: false,
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "ValeeraGarrote"
        ]
      }
    ],
    [
      {
        id: "ValeeraSinisterStrikeSealFate",
        name: "Seal Fate",
        descriptionShort: "Empower Sinister Strike damage, Combo Points",
        descriptionLong: "Sinister Strike deals 50% additional damage and generates an additional Combo Point when used against Silenced, Rooted, or Stunned enemy Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_sinisterstrike.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "ValeeraSinisterStrike"
        ]
      },
      {
        id: "ValeeraAmbushAssassinate",
        name: "Assassinate",
        descriptionShort: "Ambush deals more damage to isolated Heroes",
        descriptionLong: "Ambush deals 50% additional damage and reduces the target's Armor by an additional 10 if no other enemy Heroes are within 4 range of the victim.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_ambush.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "ValeeraAmbush"
        ]
      },
      {
        id: "ValeeraThistleTea",
        name: "Thistle Tea",
        descriptionShort: "Activate to instantly restore Energy",
        descriptionLong: "Activate to instantly restore 100 Energy.Activating Thistle Tea does not break Stealth.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_thistletea.png",
        isPassive: false,
        order: 3,
        tier: "level16"
      }
    ],
    [
      {
        id: "ValeeraSmokeBombAdrenalineRush",
        name: "Adrenaline Rush",
        descriptionShort: "Smoke Bomb increases Energy regeneration",
        descriptionLong: "While in the Smoke Bomb, Valeera regenerates an additional 40 Energy per second.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_smokebomb.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "ValeeraSmokeBomb"
        ],
        prerequisiteTalentIds: [
          "ValeeraSmokeBomb"
        ]
      },
      {
        id: "ValeeraCloakOfShadowsEnvelopingShadows",
        name: "Enveloping Shadows",
        descriptionShort: "Vanish grants Cloak of Shadows",
        descriptionLong: "Whenever Valeera uses Vanish, she also gains Cloak of Shadows.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_cloakofshadows.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "ValeeraCloakOfShadows"
        ],
        prerequisiteTalentIds: [
          "ValeeraCloakOfShadows"
        ]
      },
      {
        id: "ValeeraGarroteRupture",
        name: "Rupture",
        descriptionShort: "Increase Garrote damage over time",
        descriptionLong: "Increase Garrote's damage over time by 100%. Valeera's Basic Attacks refresh the duration of Garrote.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_garrote.png",
        isPassive: false,
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "ValeeraGarrote"
        ]
      },
      {
        id: "ValeeraVanishElusiveness",
        name: "Elusiveness",
        descriptionShort: "Increases Vanish Movement Speed bonus",
        descriptionLong: "Increases Valeera's Movement Speed while Vanished by an additional 20%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_valeera_vanish.png",
        isPassive: false,
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "ValeeraCancelStealth",
          "ValeeraStealth"
        ]
      }
    ]
  ]
};
      
export default valeera;