import { Hero } from '../heroes';
      
const dehaka: Hero = {
  name: "Dehaka",
  nameNormalized: "dehaka",
  franchise: "Starcraft",
  gender: "Male",
  size: 1,
  movementSpeed: 4.8398,
  health: {
    amount: 2434,
    scale: 0.04,
    regenRate: 5.0703,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroDehaka",
      range: 1,
      period: 0.9,
      damage: 100,
      damageScale: 0.04
    },
    {
      nameId: "HeroDehakaDragWeapon",
      range: 1,
      period: 0.9,
      damage: 100,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/dehaka.png",
  abilities: [
    {
      id: "DehakaEssenceCollection",
      name: "Essence Collection",
      descriptionShort: "Collect and consume enemy Essence to heal",
      descriptionLong: "Heal Dehaka for 29 (+4% / level) Health per stored Essence over 5 seconds. Can be cast during Drag and Burrow.Passive: Gain 10 Essence from Takedowns and 2 Essence from nearby Minions dying. Maximum of 50 Essence.",
      cooldown: 5,
      charges: {
        chargesMax: 50,
        chargesInitial: 0,
        recastCooldown: 1
      },
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_essencecollection.png",
      isPassive: false
    },
    {
      id: "DehakaBrushstalker",
      name: "Brushstalker",
      descriptionShort: "Burrow to a bush on the Battleground.",
      descriptionLong: "Activate to burrow to a bush on the Battleground.Passive: Gain 20% movement speed while in a bush and for 2 seconds after leaving.",
      cooldown: 75,
      category: "mount",
      type: "Z",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_mount.png",
      isPassive: false
    },
    {
      id: "DehakaDrag",
      name: "Drag",
      descriptionShort: "Deal light damage and drag an enemy",
      descriptionLong: "Dehaka lashes out his tongue, dealing 160 (+4% / level) damage to the first enemy hit, Stunning and dragging them with him for 1.75 seconds.If Dehaka is Stunned or Silenced while using Drag, the effect ends.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 15,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_drag.png",
      isPassive: false
    },
    {
      id: "DehakaDarkSwarm",
      name: "Dark Swarm",
      descriptionShort: "Damage nearby enemies",
      descriptionLong: "Deal 52 (+4% / level) damage every 0.5 seconds to nearby enemies for 3.5 seconds. While active, you are able to move through units. Can be cast during Drag and Burrow.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 10,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_trample.png",
      isPassive: false
    },
    {
      id: "DehakaBurrow",
      name: "Burrow",
      descriptionShort: "Gain Stasis by burrowing into the ground",
      descriptionLong: "Burrow into the ground, entering Stasis and becoming Invulnerable for 2 seconds.",
      cost: {
        type: "Mana",
        amount: 65
      },
      cooldown: 20,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_burrow.png",
      isPassive: false
    },
    {
      id: "DehakaIsolation",
      name: "Isolation",
      descriptionShort: "Silence, Slow, and reduce vision of an enemy",
      descriptionLong: "Launch biomass that hits the first enemy Hero dealing 200 (+4% / level) damage, revealing, Silencing, and Slowing them 30% for 3 seconds. Additionally, their vision radius is greatly reduced for 6 seconds.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_isolation.png",
      isPassive: false
    },
    {
      id: "DehakaAdaptation",
      name: "Adaptation",
      descriptionShort: "Heal back damage taken",
      descriptionLong: "After 4 seconds, heal for 100% of the damage Dehaka took over this period.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_adaptation.png",
      isPassive: false
    },
    {
      id: "DehakaCancelBurrow",
      name: "Cancel Burrow",
      descriptionShort: "Unburrow",
      descriptionLong: "Cancels Burrow",
      cooldown: null,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/hud_btn_bg_ability_cancel.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "DehakaDarkSwarmTalentEnduringSwarm",
        name: "Enduring Swarm",
        descriptionShort: "Increases Dark Swarm duration, grants Spell Armor",
        descriptionLong: "Dark Swarm's duration is increased by 0.5 seconds and grants 50 Spell Armor while active.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_trample.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "DehakaDarkSwarm"
        ]
      },
      {
        id: "DehakaEssenceCollectionTalentTissueRegeneration",
        name: "Tissue Regeneration",
        descriptionShort: "Quest: Essence increases Health Regen, max Essence",
        descriptionLong: "Regeneration Globes grant 10 Essence.Repeatable Quest: Every 50 Essence collected permanently increases Health Regeneration by 4, up to 40, and maximum Essence by 1, up to 10.",
        cooldown: null,
        charges: {
          chargesMax: 50,
          chargesInitial: 0,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_essencecollection.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "DehakaEssenceCollection"
        ],
        isQuest: true
      },
      {
        id: "DehakaEssenceCollectionTalentEnhancedAgility",
        name: "Enhanced Agility",
        descriptionShort: "Quest: Essence increases Brushstalker Move Speed",
        descriptionLong: "Brushstalker's Movement Speed bonus now lasts for 5 seconds after leaving a bush.Repeatable Quest: Every 50 Essence collected permanently increases the Movement Speed bonus of Brushstalker by 2%, up to 20%.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_brushstalker.png",
        isPassive: false,
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "DehakaBrushstalker"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "DehakaBurrowTalentLurkerStrain",
        name: "Lurker Strain",
        descriptionShort: "Burrow Stealths, knocks enemies away",
        descriptionLong: "Reduce the cooldown of Burrow by 6 seconds.  Emerging from Burrow grants Dehaka Stealth for 3 seconds and also knocks nearby enemies back, Slowing them by 30% for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_burrow.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "DehakaBurrow"
        ]
      },
      {
        id: "DehakaEssenceCollectionOneWhoCollectsTalent",
        name: "One-Who-Collects",
        descriptionShort: "Increases Essence from Minions",
        descriptionLong: "Increases Essence collected from Minions by 50%.",
        cooldown: null,
        charges: {
          chargesMax: 50,
          chargesInitial: 0,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_essencecollection.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "DehakaEssenceCollection"
        ]
      },
      {
        id: "DehakaEssenceCollectionTalentHeroStalker",
        name: "Hero Stalker",
        descriptionShort: "Takedowns grant more Essence",
        descriptionLong: "Increases Essence gained from Takedowns by 100%, and gain 1 Essence each time an enemy Hero is hit by Dark Swarm.",
        cooldown: null,
        charges: {
          chargesMax: 50,
          chargesInitial: 0,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_essencecollection_var1.png",
        isPassive: false,
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "DehakaDarkSwarm",
          "DehakaEssenceCollection"
        ]
      }
    ],
    [
      {
        id: "DehakaDragTalentFeedingFrenzy",
        name: "Feeding Frenzy",
        descriptionShort: "Basic Attacks reduce Drag cooldown",
        descriptionLong: "Basic Attacks reduce Drag's cooldown by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_drag.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "DehakaDrag"
        ]
      },
      {
        id: "DehakaDragTalentParalyzingEnzymes",
        name: "Paralyzing Enzymes",
        descriptionShort: "Increase Drag duration, Slow",
        descriptionLong: "Increase the duration of Drag by 0.5 seconds. Drag Slows enemies by 35% for 2 seconds after it ends.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_drag_var1.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "DehakaDrag"
        ]
      },
      {
        id: "DehakaDarkSwarmTalentSymbiosis",
        name: "Symbiosis",
        descriptionShort: "Reduces Dark Swarm cooldown against Heroes",
        descriptionLong: "Every time Dark Swarm damages an enemy Hero, reduce its cooldown by 0.4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_trample.png",
        isPassive: false,
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "DehakaDarkSwarm"
        ]
      }
    ],
    [
      {
        id: "DehakaHeroicAbilityIsolation",
        name: "Isolation",
        descriptionShort: "Silence, Slow, and reduce vision of an enemy",
        descriptionLong: "Launch biomass that hits the first enemy Hero dealing 200 (+4% / level) damage, revealing, Silencing, and Slowing them 30% for 3 seconds. Additionally, their vision radius is greatly reduced for 6 seconds.",
        cost: {
          type: "Mana",
          amount: 70
        },
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_isolation.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "DehakaIsolation"
        ]
      },
      {
        id: "DehakaHeroicAbilityAdaptation",
        name: "Adaptation",
        descriptionShort: "Heal back damage taken",
        descriptionLong: "After 4 seconds, heal for 100% of the damage Dehaka took over this period.",
        cost: {
          type: "Mana",
          amount: 70
        },
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_adaptation.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "DehakaAdaptation"
        ]
      }
    ],
    [
      {
        id: "DehakaBrushstalkerFerociousStalker",
        name: "Ferocious Stalker",
        descriptionShort: "Brushstalker Slows, increases Dark Swarm damage",
        descriptionLong: "Dark Swarm Slows enemy Heroes by 15% for 0.75 seconds and deals 50% more damage while Brushstalker's Movement Speed bonus is active.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_trample.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "DehakaDarkSwarm"
        ]
      },
      {
        id: "DehakaPrimalSwarm",
        name: "Primal Swarm",
        descriptionShort: "Dark Swarm lowers enemies' Armor",
        descriptionLong: "Dark Swarm causes enemies hit to lose 10 Armor for 0.75 seconds, causing them to take 10% extra damage.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_trample_a.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "DehakaDarkSwarm"
        ]
      },
      {
        id: "DehakaPrimalRage",
        name: "Primal Rage",
        descriptionShort: "Essence increases Attack Damage",
        descriptionLong: "Gain 1.25% increased Attack Damage per Essence stored.",
        cooldown: null,
        charges: {
          chargesMax: 50,
          chargesInitial: 0,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_essencecollection.png",
        isPassive: false,
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "DehakaEssenceCollection"
        ]
      }
    ],
    [
      {
        id: "DehakaDragTalentElongatedTongue",
        name: "Elongated Tongue",
        descriptionShort: "Increases Drag range",
        descriptionLong: "Increase Drag range by 20%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_drag_var1.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "DehakaDrag"
        ]
      },
      {
        id: "DehakaTunnelingClaws",
        name: "Tunneling Claws",
        descriptionShort: "Dehaka can move while Burrowed",
        descriptionLong: "Dehaka can move while Burrowed.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_burrow.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "DehakaBurrow"
        ]
      },
      {
        id: "DehakaPackLeaderBrushstalkerTalent",
        name: "Pack Leader",
        descriptionShort: "Gain Armor near bushes",
        descriptionLong: "Dehaka gains 20 Armor while in a bush and for 5 seconds after leaving.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_brushstalker.png",
        isPassive: false,
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "DehakaBrushstalker"
        ]
      }
    ],
    [
      {
        id: "DehakaIsolationTalentContagion",
        name: "Contagion",
        descriptionShort: "Isolation splashes to nearby Heroes",
        descriptionLong: "Isolation hits all Heroes near the first target.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_isolation.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "DehakaIsolation"
        ],
        prerequisiteTalentIds: [
          "DehakaHeroicAbilityIsolation"
        ]
      },
      {
        id: "DehakaAdaptationChangeIsSurvivalTalent",
        name: "Change Is Survival",
        descriptionShort: "Enhanced Adaptation healing, cooldown",
        descriptionLong: "Increases Adaptation healing to 200% of the damage received and reduces the cooldown by 40 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_adaptation.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "DehakaAdaptation"
        ],
        prerequisiteTalentIds: [
          "DehakaHeroicAbilityAdaptation"
        ]
      },
      {
        id: "DehakaEssenceClaws",
        name: "Essence Claws",
        descriptionShort: "Basic Attacks slow, grant Essence",
        descriptionLong: "Dehaka's Basic Attacks slow the target by 20% for 1 second. If the target is a Hero, Dehaka gains 5 Essence.",
        cooldown: null,
        charges: {
          chargesMax: 50,
          chargesInitial: 0,
          recastCooldown: 1
        },
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_essencecollection.png",
        isPassive: false,
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "DehakaEssenceCollection"
        ]
      },
      {
        id: "DehakaBrushstalkerApexPredator",
        name: "Apex Predator",
        descriptionShort: "Reduced Brushstalker cooldown, cast time",
        descriptionLong: "Reduces Brushstalker's cooldown by 50 seconds and the cast time by 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_dehaka_brushstalker.png",
        isPassive: false,
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "DehakaBrushstalker"
        ]
      }
    ]
  ]
};
      
export default dehaka;