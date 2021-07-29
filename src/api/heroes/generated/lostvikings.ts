import { Hero } from '../heroes';
      
const lostvikings: Hero = {
  name: "The Lost Vikings",
  nameNormalized: "lostvikings",
  franchise: "Classic",
  gender: "Male",
  size: 0.75,
  movementSpeed: 20,
  health: {
    amount: 1,
    scale: 0,
    regenRate: 0,
    regenScale: 0
  },
  autoAttacks: [],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/lostvikings.png",
  abilities: [
    {
      id: "LostVikingsVikingHoardTalent",
      name: "Viking Hoard",
      descriptionShort: "Gather Regen Globes to increase Health Regen",
      descriptionLong: "Gathering a Regeneration Globe with a Viking permanently increases all their Health Regeneration by 0.5 per second.Current Bonus: 0 Regen per second",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_vikinghoard.png",
      isPassive: true
    },
    {
      id: "LostVikingsGoGoGo",
      name: "Go Go Go!",
      descriptionShort: "Gain 30% increased Movement Speed",
      descriptionLong: "The Vikings gain 30% increased Movement Speed for 4 seconds.",
      cooldown: 30,
      category: "mount",
      type: "Z",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_mount.png",
      isPassive: false
    },
    {
      id: "LostVikingsSpinToWin",
      name: "Spin To Win!",
      descriptionShort: "Deals damage around each Viking",
      descriptionLong: "Activate to have each Viking deal 85 (+4% / level) damage to nearby enemies.  Deals 100% bonus damage to enemy Heroes.",
      cooldown: 10,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_spintowin.png",
      isPassive: false
    },
    {
      id: "LostVikingsNorseForce",
      name: "Norse Force!",
      descriptionShort: "All Vikings gain a Shield",
      descriptionLong: "All Vikings gain a 130 (+4% / level) to 260 (+4% / level) point Shield, increasing in strength for each Viking alive. Lasts 4 seconds.",
      cooldown: 15,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_norseforce.png",
      isPassive: false
    },
    {
      id: "LostVikingsPressA",
      name: "Jump!",
      descriptionShort: "Grants temporary Invulnerability",
      descriptionLong: "Makes all Vikings Invulnerable and able to pass over enemies for 1.5 seconds.",
      cooldown: 30,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_jump.png",
      isPassive: false
    },
    {
      id: "LostVikingsNordicAttackSquad",
      name: "Nordic Attack Squad",
      descriptionShort: "Vikings deal bonus damage when together",
      descriptionLong: "While Olaf, Baleog, and Erik are near each of the other two Vikings, their Basic Attacks deal bonus damage equal to 1.25% maximum Health to enemy Heroes.",
      cooldown: 20,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_damage.png",
      isPassive: false
    },
    {
      id: "LostVikingsVikingBribery",
      name: "Viking Bribery",
      descriptionShort: "Kill Minions to bribe a Mercenary",
      descriptionLong: "Enemy Minions or captured Mercenaries killed near The Lost Vikings grant stacks of Bribe. Use 40 stacks to bribe target Mercenary, instantly defeating them. Does not work on Elite Mercenaries. Maximum stacks available: 200.Current number of Bribe stacks: 0",
      cooldown: null,
      charges: {
        chargesMax: 5,
        chargesInitial: 0,
        chargeCost: 1
      },
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_bribe.png",
      isPassive: false
    },
    {
      id: "LostVikingsLongboatRaidNewer",
      name: "Longboat Raid!",
      descriptionShort: "Load into a Longboat to attack enemies",
      descriptionLong: "Hop into an Unstoppable Longboat that fires at nearby enemies for 112 (+4% / level) damage per second and can fire a mortar that deals 228 (+4% / level) damage in an area.  The boat has increased Health for each Viking inside. If the boat is destroyed by enemies, all Vikings are Stunned for 1 second. Lasts 15 seconds.Requires all surviving Vikings to be nearby.",
      cooldown: 90,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_longboatraid.png",
      isPassive: false
    },
    {
      id: "LostVikingsPlayAgain",
      name: "Play Again!",
      descriptionShort: "Revive and summon Vikings",
      descriptionLong: "Summon, fully heal, and revive all Lost Vikings at target location after a Viking channels for 2 seconds. Only one Viking may attempt to summon at a time.",
      cooldown: 100,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_playagain.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "LostVikingsMasteryOlafTheStout",
        name: "Olaf the Stout",
        descriptionShort: "Olaf gains Health, Physical Armor",
        descriptionLong: "Passive: Olaf gains 20% bonus maximum Health.Every 5 seconds, Olaf gains 75 Physical Armor against the next enemy Hero Basic Attack, reducing the damage taken by 75%.Stores up to 2 charges.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_selectolaf.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "LostVikingSelectOlaf"
        ]
      },
      {
        id: "LostVikingsMasterySpyGames",
        name: "Spy Games",
        descriptionShort: "Erik gains Stealth and increases vision if stationary",
        descriptionLong: "After standing still for 3 seconds, Erik gains Stealth and his Sight Radius is increased by 75%. The Stealth persists for 3 seconds after moving and once removed, Erik gains 75% bonus Basic Attack damage for 6 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_selecterik.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "LostVikingSelectErik"
        ]
      },
      {
        id: "LostVikingsMasteryExplosiveAttacks",
        name: "Explosive Attacks",
        descriptionShort: "Increases Baleog splash to non-Heroic enemies",
        descriptionLong: "Increases Baleog's splash damage against non-Heroes to 100%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_selectbaleog.png",
        isPassive: false,
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "LostVikingSelectBaleog"
        ]
      },
      {
        id: "LostVikingsMasteryVikingBribery",
        name: "Viking Bribery",
        descriptionShort: "Kill Minions to bribe a Mercenary",
        descriptionLong: "Enemy Minions or captured Mercenaries killed near The Lost Vikings grant stacks of Bribe. Use 40 stacks to bribe target Mercenary, instantly defeating them. Does not work on Elite Mercenaries. Maximum stacks available: 200.Current number of Bribe stacks: 0",
        cooldown: null,
        charges: {
          chargesMax: 5,
          chargesInitial: 0,
          chargeCost: 1
        },
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_bribe.png",
        isPassive: false,
        order: 4,
        tier: "level1"
      }
    ],
    [
      {
        id: "LostVikingsMasteryPainDontHurt",
        name: "Pain Don't Hurt",
        descriptionShort: "Baleog's attacks heal himself",
        descriptionLong: "Baleog's Basic Attacks and splash damage heal for 20% of the damage dealt. Healing is doubled against Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_selectbaleog.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "LostVikingSelectBaleog"
        ]
      },
      {
        id: "LostVikingsMasteryErikTheSwift",
        name: "Erik the Swift",
        descriptionShort: "Increases Erik's Move Speed and heal while running",
        descriptionLong: "Permanently increases Erik's base Movement Speed by 10%, and as long as Erik is moving he heals 34 (+4% / level) Health per second.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_selecterik.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "LostVikingSelectErik"
        ]
      },
      {
        id: "LostVikingsMasteryItsASabotage",
        name: "It's a Sabotage!",
        descriptionShort: "Erik's attacks stronger against Structures",
        descriptionLong: "Erik's Basic Attacks against Structures light them on fire for 5 seconds, causing 250 (+4% / level) damage.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_selecterik_var1.png",
        isPassive: false,
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "LostVikingSelectErik"
        ]
      },
      {
        id: "GenericTalentMercenaryLord",
        name: "Mercenary Lord",
        descriptionShort: "Empower nearby Mercenaries",
        descriptionLong: "Friendly non-Boss Mercenaries near your Hero deal 50% more damage. Gain 50 Armor against Minions and Mercenaries, reducing the damage taken by 50%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_mercenarylord.png",
        isPassive: false,
        order: 4,
        tier: "level4"
      }
    ],
    [
      {
        id: "LostVikingsMasteryBaleogTheFierce",
        name: "Baleog the Fierce",
        descriptionShort: "Baleog gains Attack Speed, Range",
        descriptionLong: "Increase Baleog's attack range by 2.5.  While near Olaf and Erik, he becomes inspired by the power of teamwork and his Attack Speed is increased by 50%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_selectbaleog.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "LostVikingSelectBaleog"
        ]
      },
      {
        id: "LostVikingsMasterySpinToWin",
        name: "Spin To Win!",
        descriptionShort: "Deals damage around each Viking",
        descriptionLong: "Activate to have each Viking deal 85 (+4% / level) damage to nearby enemies.  Deals 100% bonus damage to enemy Heroes.",
        cooldown: 10,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_spintowin.png",
        isPassive: false,
        order: 2,
        tier: "level7"
      },
      {
        id: "LostVikingsMasteryNorseForce",
        name: "Norse Force!",
        descriptionShort: "All Vikings gain a Shield",
        descriptionLong: "All Vikings gain a 130 (+4% / level) to 260 (+4% / level) point Shield, increasing in strength for each Viking alive. Lasts 4 seconds.",
        cooldown: 15,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_norseforce.png",
        isPassive: false,
        order: 3,
        tier: "level7"
      }
    ],
    [
      {
        id: "LostVikingsHeroicAbilityLongboatRaid",
        name: "Longboat Raid!",
        descriptionShort: "Load into a Longboat to attack enemies",
        descriptionLong: "Hop into an Unstoppable Longboat that fires at nearby enemies for 112 (+4% / level) damage per second and can fire a mortar that deals 228 (+4% / level) damage in an area.  The boat has increased Health for each Viking inside. If the boat is destroyed by enemies, all Vikings are Stunned for 1 second. Lasts 15 seconds.Requires all surviving Vikings to be nearby.",
        cooldown: 90,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_longboatraid.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "LostVikingsLongboatRaidNewer"
        ]
      },
      {
        id: "LostVikingsHeroicAbilityPlayAgain",
        name: "Play Again!",
        descriptionShort: "Revive and summon Vikings",
        descriptionLong: "Summon, fully heal, and revive all Lost Vikings at target location after a Viking channels for 2 seconds. Only one Viking may attempt to summon at a time.",
        cooldown: 100,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_playagain.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "LostVikingsPlayAgain"
        ]
      }
    ],
    [
      {
        id: "LostVikingsMasteryHunkaBurningOlaf",
        name: "Hunka' Burning Olaf",
        descriptionShort: "Olaf deals damage to nearby enemies",
        descriptionLong: "Olaf deals 34 (+4% / level) damage every second to nearby enemies.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_selectolaf.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "LostVikingSelectOlaf"
        ]
      },
      {
        id: "LostVikingsMasteryJump",
        name: "Jump!",
        descriptionShort: "Grants temporary Invulnerability",
        descriptionLong: "Makes all Vikings Invulnerable and able to pass over enemies for 1.5 seconds.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_jump.png",
        isPassive: false,
        order: 2,
        tier: "level13"
      },
      {
        id: "LostVikingsMasteryNordicAttackSquad",
        name: "Nordic Attack Squad",
        descriptionShort: "Vikings deal bonus damage when together",
        descriptionLong: "While Olaf, Baleog, and Erik are near each of the other two Vikings, their Basic Attacks deal bonus damage equal to 1.25% maximum Health to enemy Heroes.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_damage.png",
        isPassive: false,
        order: 3,
        tier: "level13"
      }
    ],
    [
      {
        id: "LostVikingsMasteryLargeAndInCharge",
        name: "Large and In Charge",
        descriptionShort: "Charge stuns enemies",
        descriptionLong: "When Olaf charges enemies, they are stunned for 1 second.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_selectolaf.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "LostVikingSelectOlaf"
        ]
      },
      {
        id: "LostVikingsMasteryImpatienceIsAVirtue",
        name: "Impatience Is a Virtue",
        descriptionShort: "Vikings' attacks reduce cooldowns of all Vikings",
        descriptionLong: "Enemies damaged by a Viking's Basic Attack reduce the cooldown of all Viking Abilities by 0.25 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_cooldown.png",
        isPassive: false,
        order: 2,
        tier: "level16"
      },
      {
        id: "LostVikingsGoGoGo64KBMarathon",
        name: "64 KB Marathon",
        descriptionShort: "Run faster and break slows and roots",
        descriptionLong: "Gain an additional 40% Movement Speed when activating Go Go Go! that decays over 4 seconds.  Additionally, the Vikings will break out of Roots and Slows.",
        cooldown: null,
        category: "Talent",
        type: "Z",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_64kbmarathon.png",
        isPassive: false,
        order: 3,
        tier: "level16",
        linkedAbilityIds: [
          "LostVikingsGoGoGo"
        ]
      },
      {
        id: "HeroGenericExecutionerPassive",
        name: "Executioner",
        descriptionShort: "Attacking disabled Heroes increases damage",
        descriptionLong: "Attacking a Hero that is slowed, rooted, or stunned increases your Basic Attack damage by 30% for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_damage.png",
        isPassive: false,
        order: 4,
        tier: "level16"
      }
    ],
    [
      {
        id: "LostVikingsMasteryWereOnABoat",
        name: "Ragnarok 'n' Roll!",
        descriptionShort: "Increased combat prowess",
        descriptionLong: "The Longboat can attack two targets at once and the range of its Mortar is increased by 100%.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_longboatraid.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "LostVikingsLongboatRaidNewer"
        ],
        prerequisiteTalentIds: [
          "LostVikingsHeroicAbilityLongboatRaid"
        ]
      },
      {
        id: "LostVikingsMasteryCheckpointReached",
        name: "Checkpoint Reached",
        descriptionShort: "Additional revive and heal",
        descriptionLong: "10 seconds after using Play Again!, any dead Vikings are revived and summoned again, and all are healed to full.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_playagain.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "LostVikingsPlayAgain"
        ],
        prerequisiteTalentIds: [
          "LostVikingsHeroicAbilityPlayAgain"
        ]
      },
      {
        id: "LostVikingsMasteryTheSequel",
        name: "The Sequel!",
        descriptionShort: "Reduces death timer for all Vikings",
        descriptionLong: "Reduces the Lost Vikings's death timer by 50%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_lostvikings_fastrestart.png",
        isPassive: false,
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "LostVikingsVikingHoardTalent"
        ]
      },
      {
        id: "LostVikingsTalentFuryoftheStorm",
        name: "Fury of the Storm",
        descriptionShort: "Basic Attacks chain to non-Heroes",
        descriptionLong: "Every 5 seconds, the next Basic Attack will deal an additional 41 (+4% / level) damage to the target, and 105 (+4% / level) damage to all nearby Minions, Mercenaries and Monsters.  Each Viking has their own cooldown.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_damage.png",
        isPassive: false,
        order: 4,
        tier: "level20"
      }
    ]
  ]
};
      
export default lostvikings;