import { Hero } from '../heroes';
      
const lunara: Hero = {
  name: "Lunara",
  nameNormalized: "lunara",
  franchise: "Warcraft",
  gender: "Female",
  size: 0.75,
  movementSpeed: 4.8398,
  health: {
    amount: 1430,
    scale: 0.04,
    regenRate: 2.9804,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "DryadHeroMeleeWeapon",
      range: 1.6,
      period: 0.9,
      damage: 90,
      damageScale: 0.04
    },
    {
      nameId: "DryadHeroRangedWeapon",
      range: 5.5,
      period: 0.9,
      damage: 90,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/lunara.png",
  abilities: [
    {
      id: "DryadNaturesToxin",
      name: "Nature's Toxin",
      descriptionShort: "Basic Attacks and damaging Abilities deal damage over time",
      descriptionLong: "Lunara's Basic Attacks and damaging Abilities poison their target, dealing 36 (+4% / level) damage a second for 3 seconds. Every additional application increases the duration by 3 seconds, up to a maximum of 9 seconds.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_stiflingblossom.png",
      isPassive: true
    },
    {
      id: "DryadDryadsSwiftness",
      name: "Dryad's Swiftness",
      descriptionShort: "Lunara moves about 20% faster by leaping short distances.",
      descriptionLong: "Lunara moves 20% faster by leaping short distances.",
      cooldown: null,
      category: "mount",
      type: "Z",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_mount.png",
      isPassive: true
    },
    {
      id: "DryadNoxiousBlossom",
      name: "Noxious Blossom",
      descriptionShort: "Deals area damage",
      descriptionLong: "After 0.5 seconds, cause an area to explode with pollen dealing 160 (+4% / level) damage.",
      cost: {
        type: "Mana",
        amount: 60
      },
      cooldown: 8,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_pollencloud.png",
      isPassive: false
    },
    {
      id: "DryadCripplingSpores",
      name: "Crippling Spores",
      descriptionShort: "Slow enemies afflicted by Nature's Toxin and extend duration",
      descriptionLong: "Enemies currently afflicted by Nature's Toxin have its duration increased by 3 seconds and are Slowed by 40% decaying over 3 seconds.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 10,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_fullbloom.png",
      isPassive: false
    },
    {
      id: "DryadWisp",
      name: "Wisp",
      descriptionShort: "Spawns a Wisp to scout",
      descriptionLong: "Spawn a Wisp to scout an area. Can be redirected once active. When the Wisp is in a bush for more 2 seconds, its vision radius is increased by 75%.  Lasts 45 seconds.",
      cooldown: 30,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_wisp.png",
      isPassive: false
    },
    {
      id: "DryadThornwoodVine",
      name: "Thornwood Vine",
      descriptionShort: "Damages in a line",
      descriptionLong: "Send forth vines that deal 176 (+4% / level) damage to all enemies in a line.Stores up to 3 charges.",
      cost: {
        type: "Mana",
        amount: 35
      },
      cooldown: 15,
      charges: {
        chargesMax: 3,
        chargesInitial: 3,
        chargeCost: 1,
        recastCooldown: 0.5
      },
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_wildspear.png",
      isPassive: false
    },
    {
      id: "DryadLeapingStrike",
      name: "Leaping Strike",
      descriptionShort: "Leap over enemies, damaging and Slowing",
      descriptionLong: "Leap over an enemy, Slowing them by 80% for 0.35 seconds and dealing 271 (+4% / level) damage.Stores up to 2 charges.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 20,
      charges: {
        chargesMax: 2,
        chargesInitial: 2,
        chargeCost: 1,
        recastCooldown: 0.5
      },
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_boundlessstride.png",
      isPassive: false
    },
    {
      id: "DryadWispRedirect",
      name: "Relocate Wisp",
      descriptionShort: "Move the Wisp to a new location",
      descriptionLong: "Moves the Wisp to a new location.",
      cooldown: 1,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_wispredirect.png",
      isPassive: false
    },
    {
      id: "DryadGallopingGait",
      name: "Dryad's Swiftness",
      descriptionShort: "Lunara moves about 20% faster by leaping short distances.",
      descriptionLong: "Lunara moves 20% faster by leaping short distances.",
      cooldown: 30,
      category: "mount",
      type: "Z",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_mount.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "DryadSentinelWisp",
        name: "Sentinel Wisp",
        descriptionShort: "Wisp's bonus vision radius is increased",
        descriptionLong: "After remaining in a bush for 5 seconds, Wisp's vision radius is increased by 200% and reveals the surrounding area.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_wisp.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "DryadWispRedirect",
          "DryadWisp"
        ]
      },
      {
        id: "DryadNaturalPerspective",
        name: "Natural Perspective",
        descriptionShort: "Nature's Toxin reveals enemies",
        descriptionLong: "Nature's Toxin reveals enemies for its duration.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_stiflingblossom.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "DryadNaturesToxin"
        ]
      },
      {
        id: "DryadHippityHop",
        name: "Hippity Hop",
        descriptionShort: "Increase Dryad's Swiftness bonus",
        descriptionLong: "After not Basic Attacking or taking damage for 4 seconds, increase the Move Speed bonus of Dryad's Swiftness by 10%.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_boundlessstride_a.png",
        isPassive: false,
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "DryadGallopingGait",
          "DryadDryadsSwiftness"
        ]
      }
    ],
    [
      {
        id: "DryadBlossomSwell",
        name: "Blossom Swell",
        descriptionShort: "Increases Noxious Blossom range and radius",
        descriptionLong: "Increases Noxious Blossom's range by 25% and its radius by 20%.  Blossom Swell applies 2 stacks of Nature's Toxin to enemies hit.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_pollencloud.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "DryadNoxiousBlossom"
        ]
      },
      {
        id: "DryadSiphoningToxin",
        name: "Siphoning Toxin",
        descriptionShort: "Nature's Toxin heals Lunara",
        descriptionLong: "While at least one enemy is afflicted by Nature's Toxin, heal for 9 (+4% / level) per second.  When an enemy Hero has 3 stacks of Nature's Toxin, increase this healing by 19 (+4% / level) per second.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_stiflingblossom_var1.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "DryadNaturesToxin"
        ]
      },
      {
        id: "DryadNaturesCulling",
        name: "Nature's Culling",
        descriptionShort: "Increases Nature's Toxin damage to non-Heroes",
        descriptionLong: "Increases Nature's Toxin's damage by 125% to non-Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_stiflingblossom.png",
        isPassive: false,
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "DryadNaturesToxin"
        ]
      }
    ],
    [
      {
        id: "DryadSplinteredSpear",
        name: "Splintered Spear",
        descriptionShort: "Noxious Blossom makes Basic Attack spread",
        descriptionLong: "Using Noxious Blossom causes Lunara's next Basic Attack to hit up to 4 enemies. These extra attacks can apply Nature's Toxin.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_pollencloud.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "DryadNoxiousBlossom"
        ]
      },
      {
        id: "DryadChokingPollen",
        name: "Choking Pollen",
        descriptionShort: "Nature's Toxin increases Noxious Blossom damage",
        descriptionLong: "Noxious Blossom deals 100% more damage to enemies afflicted by Nature's Toxin, increased to 150% against enemies with 3 stacks.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_pollencloud_b.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "DryadNoxiousBlossom"
        ]
      },
      {
        id: "DryadWildVigor",
        name: "Wild Vigor",
        descriptionShort: "Crippling Spores increases Basic Attack damage",
        descriptionLong: "Using Crippling Spores increases the damage of Lunara's next 4 Basic Attacks by 50%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_fullbloom.png",
        isPassive: false,
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "DryadCripplingSpores"
        ]
      }
    ],
    [
      {
        id: "DryadHeroicAbilityThornwoodVine",
        name: "Thornwood Vine",
        descriptionShort: "Damages in a line",
        descriptionLong: "Send forth vines that deal 176 (+4% / level) damage to all enemies in a line.Stores up to 3 charges.",
        cost: {
          type: "Mana",
          amount: 35
        },
        cooldown: 15,
        charges: {
          chargesMax: 3,
          chargesInitial: 3,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_wildspear.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "DryadThornwoodVine"
        ]
      },
      {
        id: "DryadHeroicAbilityLeapingStrike",
        name: "Leaping Strike",
        descriptionShort: "Leap over enemies, damaging and Slowing",
        descriptionLong: "Leap over an enemy, Slowing them by 80% for 0.35 seconds and dealing 271 (+4% / level) damage.Stores up to 2 charges.",
        cost: {
          type: "Mana",
          amount: 50
        },
        cooldown: 20,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_boundlessstride.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "DryadLeapingStrike"
        ]
      }
    ],
    [
      {
        id: "DryadEndlessSpores",
        name: "Endless Spores",
        descriptionShort: "Nature's Toxin can reduce Crippling Spores cooldown",
        descriptionLong: "Casting Crippling Spores while at least 2 Heroes are afflicted by Nature's Toxin reduces the cooldown by 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_fullbloom.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "DryadCripplingSpores"
        ]
      },
      {
        id: "DryadLetThemWither",
        name: "Let Them Wither",
        descriptionShort: "Increase Crippling Spores Slow",
        descriptionLong: "Increases Crippling Spores' Slow duration by 1 second and causes it to no longer decay.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_fullbloom_b.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "DryadCripplingSpores"
        ]
      },
      {
        id: "DryadGreaterSpellShield",
        name: "Greater Spell Shield",
        descriptionShort: "Periodically gain temporary Spell Armor",
        descriptionLong: "Every 30 seconds, gain 75 Spell Armor against the next enemy Ability and subsequent Abilities for 3 seconds, reducing the damage taken by 75%.Can be toggled to allow or prevent this talent from triggering automatically.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_greaterspellshield.png",
        isPassive: false,
        order: 3,
        tier: "level13"
      },
      {
        id: "DryadAbolishMagic",
        name: "Abolish Magic",
        descriptionShort: "Remove crowd control from a target and Lunara",
        descriptionLong: "Target an ally to remove all damage over time and disabling effects from them and Lunara. For 2 seconds after, the duration of disabling effects is reduced by 50%.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_abolishmagic.png",
        isPassive: false,
        order: 4,
        tier: "level13"
      }
    ],
    [
      {
        id: "DryadAcceleratedContamination",
        name: "Accelerated Contamination",
        descriptionShort: "Noxious Blossom recharges faster",
        descriptionLong: "Reduce the Mana cost of Noxious Blossom from 60 to 40.  While at least 1 enemy Hero is afflicted with Nature's Toxin, Noxious Blossom's cooldown recharges 75% faster.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_pollencloud.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "DryadNoxiousBlossom"
        ]
      },
      {
        id: "DryadStarWoodSpear",
        name: "Star Wood Spear",
        descriptionShort: "Crippling Spores increases Basic Attack range",
        descriptionLong: "Increase Lunara's Basic Attack range by 0.5.  Using Crippling Spores increases Lunara's Basic Attack range by an additional 2.25 for 6 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_fullbloom.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "DryadCripplingSpores"
        ]
      },
      {
        id: "DryadInvigoratingSpores",
        name: "Invigorating Spores",
        descriptionShort: "Crippling Spores empowers Basic Attacks",
        descriptionLong: "Crippling Spores grants 30% Attack Speed for 6 seconds.  Basic Attacks against enemy Heroes with 3 stacks of Nature's Toxin deal damage equal to 1.5% of their maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_fullbloom_a.png",
        isPassive: false,
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "DryadCripplingSpores"
        ]
      },
      {
        id: "DryadUnfairAdvantage",
        name: "Unfair Advantage",
        descriptionShort: "Increases Nature's Toxin damage to disabled Heroes",
        descriptionLong: "Nature's Toxin deals 60% more damage to Heroes that are Slowed, Rooted, or Stunned.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_stiflingblossom.png",
        isPassive: false,
        order: 4,
        tier: "level16",
        linkedAbilityIds: [
          "DryadNaturesToxin"
        ]
      }
    ],
    [
      {
        id: "DryadForestsWrath",
        name: "Forest's Wrath",
        descriptionShort: "Thornwood Vine applies Nature's Toxin",
        descriptionLong: "Thornwood Vine now applies 2 stacks of Nature's Toxin.  Increase Thornwood Vine's range by 30% and Lunara's vision radius by 35%.",
        cooldown: null,
        charges: {
          chargesMax: 3,
          chargesInitial: 3,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_wildspear.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "DryadThornwoodVine"
        ],
        prerequisiteTalentIds: [
          "DryadHeroicAbilityThornwoodVine"
        ]
      },
      {
        id: "DryadBoundlessStrideTalent",
        name: "Boundless Stride",
        descriptionShort: "Leaping Strike can target allies",
        descriptionLong: "All Leaping Strike charges are returned every 15 seconds. Leaping Strike can be used on allies.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_boundlessstride.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "DryadLeapingStrike"
        ],
        prerequisiteTalentIds: [
          "DryadHeroicAbilityLeapingStrike"
        ]
      },
      {
        id: "DryadIntensifyingToxin",
        name: "Intensifying Toxin",
        descriptionShort: "Increase Nature's Toxin damage",
        descriptionLong: "At 3 stacks, Nature's Toxin deals 40% more damage.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_stiflingblossom.png",
        isPassive: false,
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "DryadNaturesToxin",
          "DryadNoxiousBlossom"
        ]
      },
      {
        id: "DryadGallopingGait",
        name: "Galloping Gait",
        descriptionShort: "Activate to increase Movement Speed",
        descriptionLong: "Activate to increase the Movement Speed bonus of Dryad's Swiftness to 80% for 6 seconds.",
        cooldown: 30,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lunara_boundlessstride_a.png",
        isPassive: false,
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "DryadDryadsSwiftness"
        ]
      }
    ]
  ]
};
      
export default lunara;