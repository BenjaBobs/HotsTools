import { Hero } from '../heroes';
      
const lucio: Hero = {
  name: "Lúcio",
  nameNormalized: "lucio",
  franchise: "Overwatch",
  gender: "Male",
  size: 0.6875,
  movementSpeed: 4.8398,
  health: {
    amount: 1442,
    scale: 0.04,
    regenRate: 3,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroLucioWeapon",
      range: 5.5,
      period: 1.25,
      damage: 23,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/lucio.png",
  abilities: [
    {
      id: "LucioPushOff",
      name: "Push Off",
      descriptionShort: "Push off a wall to Slow enemies",
      descriptionLong: "While moving alongside terrain, activate to slide towards a targeted location. Enemies hit take 100 (+4% / level) damage and are Slowed by 75% for 1 second.",
      cooldown: 20,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_accelerando.png",
      isPassive: false
    },
    {
      id: "LucioWallRide",
      name: "Wall Ride",
      descriptionShort: "Lúcio gains Move Speed near terrain and can move through units",
      descriptionLong: "When moving alongside terrain, Lúcio begins to Wall Ride for 2 seconds. While Wall Ride is active, Lúcio can walk through units and gains 20% Movement Speed that stacks with other bonuses.",
      cooldown: null,
      category: "mount",
      type: "Z",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_mount.png",
      isPassive: true
    },
    {
      id: "LucioSoundwave",
      name: "Soundwave",
      descriptionShort: "Knockback nearby enemies",
      descriptionLong: "Deal 105 (+4% / level) damage to enemies in an area and knock them back.",
      cost: {
        type: "Mana",
        amount: 30
      },
      cooldown: 7,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_soundwave.png",
      isPassive: false
    },
    {
      id: "LucioCrossfade",
      name: "Crossfade",
      descriptionShort: "Play a Healing Boost or Speed Boost track",
      descriptionLong: "Currently playing Speed Boost, increasing the Movement Speed of Lúcio and nearby allied Heroes by 10%.Toggle to play Healing Boost instead.",
      cooldown: null,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_crossfadehealing.png",
      isPassive: false
    },
    {
      id: "LucioAmpItUp",
      name: "Amp It Up",
      descriptionShort: "Boost the effect of Lúcio's Crossfade track",
      descriptionLong: "Raise Lúcio's Crossfade track volume for 3 seconds, amping Healing Boost to 112 (+4% / level) Health per second and Speed Boost to 30% increased Movement Speed.",
      cost: {
        type: "Mana",
        amount: 90
      },
      cooldown: 13,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_ampitup.png",
      isPassive: false
    },
    {
      id: "LucioSoundBarrier",
      name: "Sound Barrier",
      descriptionShort: "Shield nearby allies",
      descriptionLong: "After 1 second, Lúcio and nearby allied Heroes gain a 1296 (+4% / level) point Shield that rapidly decays over 6 seconds.",
      cost: {
        type: "Mana",
        amount: 100
      },
      cooldown: 80,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_soundbarrier.png",
      isPassive: false
    },
    {
      id: "LucioHighFive",
      name: "High Five",
      descriptionShort: "Skate to allies, healing and granting Unstoppable",
      descriptionLong: "Quickly skate to an allied Hero. Upon arrival the ally is healed for 250 (+4% / level), Lúcio is healed for 125 (+4% / level), and both gain Unstoppable for 1 second.",
      cost: {
        type: "Mana",
        amount: 30
      },
      cooldown: 20,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_highfive.png",
      isPassive: false
    },
    {
      id: "LucioCrossfade",
      name: "Crossfade",
      descriptionShort: "Play a Healing Boost or Speed Boost track",
      descriptionLong: "Currently playing Healing Boost, passively healing Lúcio and nearby allied Heroes for 15 (+4% / level) Health per second.Toggle to play Speed Boost instead.",
      cooldown: null,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_crossfadespeed.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "LucioCrossfadePartyMixQuest",
        name: "Party Mix",
        descriptionShort: "Quest: Playing Crossfade for allies increases range",
        descriptionLong: "Quest: Play Lúcio's Crossfade tracks to nearby allies for a total of 8 minutes. Multiple allies provide additional time.Reward: Permanently increase Crossfade's range by 20%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_crossfade_all.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "LucioCrossfade"
        ],
        isQuest: true
      },
      {
        id: "LucioWallRideAccelerando",
        name: "Accelerando",
        descriptionShort: "Wall Ride gradually increases Move Speed",
        descriptionLong: "Wall Ride's Movement Speed bonus gradually increases to 40% over 4 seconds while Lúcio maintains its effect.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_wallride.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "LucioWallRide"
        ]
      },
      {
        id: "LucioPassiveSmoothMoves",
        name: "Smooth Moves",
        descriptionShort: "Wall Ride Basic Attacks heal",
        descriptionLong: "While Wall Ride is active, Basic Attacks heal for 30% of the damage dealt and restore 0.5 Mana.Passive: Increase Wall Ride duration by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_wallride_a.png",
        isPassive: false,
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "LucioWallRide"
        ]
      }
    ],
    [
      {
        id: "LucioSoundwaveSubwoofer",
        name: "Subwoofer",
        descriptionShort: "Quest: Empower Soundwave",
        descriptionLong: "Enemies within the first half of Soundwave's range are knocked back 75% further.Quest: Hit 3 enemy Heroes with a single Soundwave.Reward: Increase Soundwave's arc by 50% and its range by 20%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_soundwave.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "LucioSoundwave"
        ],
        isQuest: true
      },
      {
        id: "LucioSoundwaveOffTheWall",
        name: "Off the Wall",
        descriptionShort: "Wall Ride Soundwave hits reduce cooldown",
        descriptionLong: "Hitting an enemy with Soundwave while Wall Ride is active reduces its cooldown by 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_soundwave_a.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "LucioSoundwave"
        ]
      },
      {
        id: "LucioPushOffSupersonic",
        name: "Supersonic",
        descriptionShort: "Wall Ride recharges Push Off cooldown",
        descriptionLong: "While Wall Ride is active, Push Off's cooldown recharges 100% faster.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_accelerando.png",
        isPassive: false,
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "LucioPushOff"
        ]
      }
    ],
    [
      {
        id: "LucioSoundwaveGoodVibrations",
        name: "Good Vibrations",
        descriptionShort: "Soundwave grants Shield",
        descriptionLong: "Hitting an enemy with Soundwave grants Lúcio a 38 (+4% / level) Shield for 7 seconds. Hitting enemy Heroes grants 3 times this amount.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_soundwave_a.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "LucioSoundwave"
        ]
      },
      {
        id: "LucioReverseAmp",
        name: "Reverse Amp",
        descriptionShort: "Amp It Up blasts Crossfade at enemy Heroes",
        descriptionLong: "Blast Lúcio's active Crossfade track at enemy Heroes. While Amp It Up is active, Healing Boost deals 50 (+4% / level) damage per second and Speed Boost Slows by 20%.This ability is unaffected by Crossfade talents.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_crossfade_all.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "LucioCrossfade"
        ]
      },
      {
        id: "LucioBoombox",
        name: "Boombox",
        descriptionShort: "Drop a boombox that plays Crossfade",
        descriptionLong: "Place a boombox that plays Lúcio's active Crossfade track. Its volume adjusts with Amp It Up.Crossfade tracks do not stack.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_fineshrine.png",
        isPassive: false,
        order: 3,
        tier: "level7"
      }
    ],
    [
      {
        id: "LucioSoundBarrier",
        name: "Sound Barrier",
        descriptionShort: "Shield nearby allies",
        descriptionLong: "After 1 second, Lúcio and nearby allied Heroes gain a 1296 (+4% / level) point Shield that rapidly decays over 6 seconds.",
        cost: {
          type: "Mana",
          amount: 100
        },
        cooldown: 80,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_soundbarrier.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "LucioSoundBarrier"
        ]
      },
      {
        id: "LucioHighFive",
        name: "High Five",
        descriptionShort: "Skate to allies, healing and granting Unstoppable",
        descriptionLong: "Quickly skate to an allied Hero. Upon arrival the ally is healed for 250 (+4% / level), Lúcio is healed for 125 (+4% / level), and both gain Unstoppable for 1 second.",
        cost: {
          type: "Mana",
          amount: 30
        },
        cooldown: 20,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_highfive.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "LucioHighFive"
        ]
      }
    ],
    [
      {
        id: "LucioCrossfadeAllTogetherTalent",
        name: "All Together",
        descriptionShort: "Gain Move Speed from nearby allies",
        descriptionLong: "For each ally affected by Crossfade, Lúcio gains 5% Movement Speed that stacks with other bonuses.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_crossfade_all.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "LucioCrossfade"
        ]
      },
      {
        id: "LucioPushOffHeavyCasters",
        name: "Heavy Casters",
        descriptionShort: "Push Off Stuns, no longer Slows",
        descriptionLong: "Push Off no longer Slows enemies, and instead Stuns them for 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_accelerando.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "LucioPushOff"
        ]
      },
      {
        id: "LucioWallRideSlip",
        name: "Slip",
        descriptionShort: "Gain Armor, Move Speed during Wall Ride",
        descriptionLong: "While Wall Ride is active, passing near an enemy Hero increases its Movement Speed bonus to 40% for 1 second.Passive: Wall Ride grants 20 Armor.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_wallride.png",
        isPassive: false,
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "LucioWallRide"
        ]
      }
    ],
    [
      {
        id: "LucioAmpItUpRejuvenescencia",
        name: "Rejuvenescência",
        descriptionShort: "Healing Boost heals percent Health",
        descriptionLong: "While Amp It Up is active, Crossfade's Healing Boost heals for an additional 2.5% of the target's maximum Health each second.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_ampitup.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "LucioAmpItUp"
        ]
      },
      {
        id: "LucioAmpItUpUpTheFrequency",
        name: "Up the Frequency",
        descriptionShort: "Basic Attacks reduce Amp It Up cooldown",
        descriptionLong: "Hitting enemy Heroes with Basic Attacks reduces the cooldown of Amp It Up by 0.4 seconds.Passive: Wall Ride increases Basic Attack range by 2.2.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_ampitup_b.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "LucioAmpItUp"
        ]
      },
      {
        id: "LucioAmpItUpUpToEleven",
        name: "Up To Eleven",
        descriptionShort: "Increase Amp It Up duration",
        descriptionLong: "Increase the duration of Amp It Up by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_ampitup_a.png",
        isPassive: false,
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "LucioAmpItUp"
        ]
      }
    ],
    [
      {
        id: "LucioSoundBarrierBossaNova",
        name: "Bossa Nova",
        descriptionShort: "Reduce Sound Barrier's cooldown, duration",
        descriptionLong: "Reduce the cooldown of Sound Barrier to 30 seconds, but the Shield now decays over 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_soundbarrier.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "LucioSoundBarrier"
        ],
        prerequisiteTalentIds: [
          "LucioSoundBarrier"
        ]
      },
      {
        id: "LucioCrossfadeMixingFire",
        name: "Mixing Fire",
        descriptionShort: "High Five damages enemies, reduces their healing",
        descriptionLong: "High Five can now be cast on enemy Heroes, dealing 225 (+4% / level) damage and reducing all healing received by 50% for 3 seconds.Passive: Reduce the cost and cooldown of High Five by 50%.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_highfive.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "LucioHighFive"
        ],
        prerequisiteTalentIds: [
          "LucioHighFive"
        ]
      },
      {
        id: "LucioPassiveHouseParty",
        name: "House Party",
        descriptionShort: "Gain increased healing from nearby allies",
        descriptionLong: "For each ally affected by Crossfade, Lúcio gains 8% increased healing.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_crossfade_all.png",
        isPassive: false,
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "LucioCrossfade"
        ]
      },
      {
        id: "LucioItemSummerAnthem",
        name: "Summer Anthem",
        descriptionShort: "Activate for Crossfade to grant Unkillable",
        descriptionLong: "Activate for allies affected by Crossfade to become Unkillable for 1.5 seconds.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lucio_crossfade_a.png",
        isPassive: false,
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "LucioCrossfade"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 43.45009416195856,
    damageSustainedPhysical: 10.999999999999998
  }
};
      
export default lucio;