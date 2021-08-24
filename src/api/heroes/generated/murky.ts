import { Hero } from '../heroes';
      
const murky: Hero = {
  name: "Murky",
  nameNormalized: "murky",
  franchise: "Warcraft",
  gender: "Male",
  size: 0.625,
  movementSpeed: 4.8398,
  health: {
    amount: 730,
    scale: 0.04,
    regenRate: 29.1992,
    regenScale: 0.04
  },
  autoAttacks: [
    {
      nameId: "HeroMurky",
      range: 1.25,
      period: 0.8,
      damage: 60,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/murky.png",
  abilities: [
    {
      id: "MurkyRespawnEgg",
      name: "Spawn Egg",
      descriptionShort: "Place an Egg, from which Murky will respawn",
      descriptionLong: "Place an Egg at target location, revealing the nearby area. Upon dying, Murky respawns at the Egg after 8 seconds. Murky only grants 25% of a real Hero's experience upon dying. If Murky's Egg is killed, he is revealed to enemies for 15 seconds, and Spawn Egg is placed on cooldown.",
      cooldown: 15,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_trait_spawnegg.png",
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
      id: "MurkySlime",
      name: "Slime",
      descriptionShort: "Release Slime to damage and slow enemies",
      descriptionLong: "Deal 86 (+4% / level) damage and apply Slime on nearby enemies for 6 seconds, slowing them by 20%. Deal 210 (+4% / level) damage to enemies who are already Slimed.",
      cooldown: 4,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_slime.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 222
      }
    },
    {
      id: "MurkyPufferfish",
      name: "Pufferfish",
      descriptionShort: "Spit out a fish that explodes after a delay",
      descriptionLong: "Spit out a Pufferfish with 225 (+5.5% / level) health at the target point. After 3 seconds, the fish will blow up for 410 (+4% / level) damage. Deals 50% less damage to Structures.",
      cooldown: 15,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_pufferfish.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 10
      }
    },
    {
      id: "MurkySafetyBubble",
      name: "Safety Bubble",
      descriptionShort: "Becomes Invulnerable, but cannot attack or use abilities",
      descriptionLong: "Becomes Invulnerable for 2 seconds. While active, Murky cannot attack or use abilities.",
      cooldown: 14,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_safetybubble.png",
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
      id: "MurkyMarchoftheMurlocs",
      name: "March of the Murlocs",
      descriptionShort: "Swarm enemies with Murlocs",
      descriptionLong: "After 0.75 seconds, Murky commands a legion of Murlocs to march in a target direction, each one leaping onto the first enemy Hero or Structure they find. Each Murloc deals 125 (+4% / level) damage and slows its target by 15% for 5 seconds. Murlocs deal 50% damage to Structures.",
      cooldown: 110,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_marchofthemurlocs.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 35
      }
    },
    {
      id: "MurkyOctoGrab",
      name: "Octo-Grab",
      descriptionShort: "Stun and poke an enemy Hero",
      descriptionLong: "Murky becomes Unstoppable and Stuns target enemy Hero for 3 seconds while he hits them for 1 damage a second.",
      cooldown: 50,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_octograb.png",
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
        id: "MurkyFishEye",
        name: "Fish Eye",
        descriptionShort: "Egg sees further, detects Stealth",
        descriptionLong: "Egg's Health is increased by 100%, its sight radius is increased by 300% and it can see Stealthed enemies. Passive: Spawning from his Egg increases Murky's mount speed to 45% for 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_trait_spawnegg.png",
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
          "MurkyRespawnEgg"
        ]
      },
      {
        id: "MurkyEggHunt",
        name: "Egg Hunt",
        descriptionShort: "Place fake Eggs",
        descriptionLong: "Activate to place a fake Egg. If the fake Egg dies, it casts an untalented Slime. Maximum 3 fake Eggs. Passive: Spawning from his Egg grants Murky Stealth for 5 seconds.",
        cooldown: 3,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_egghunt.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level1"
      },
      {
        id: "MurkyAFishyDeal",
        name: "A Fishy Deal",
        descriptionShort: "Kill Minions with Pufferfish to bribe Mercs",
        descriptionLong: "Killing a Minion with Pufferfish grants a stack of Bribe. Use 8 stacks to bribe a Mercenary, instantly defeating them. Does not work on Elite Mercenaries. Maximum of 32 stacks of Bribe.",
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
        id: "MurkySlimeTime",
        name: "Slime Time",
        descriptionShort: "Quest: Slime Heroes to empower Slime",
        descriptionLong: "Quest: Slime enemy Heroes that are already Slimed. Reward: After Sliming 10 Heroes, increase Slime's bonus damage by 125. Reward: After Sliming 20 Heroes, increase Slime's slow amount to 30%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_slime.png",
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
          "MurkySlime"
        ],
        isQuest: true
      },
      {
        id: "MurkyMasteryTufferfish",
        name: "Tufferfish",
        descriptionShort: "Pufferfish gains Spell Armor, damage",
        descriptionLong: "Pufferfish gains 50 Spell Armor and deals 50% more damage to Slimed targets.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_pufferfish.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 10,
          healing: 0,
          magicalDamage: 10
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "MurkyPufferfish"
        ]
      },
      {
        id: "MurkyLivingtheDream",
        name: "Living the Dream",
        descriptionShort: "Quest: Living increases Spell Power",
        descriptionLong: "Quest: Every 15 seconds Murky is alive, he gains 5% Spell Power, up to 25%. This bonus is reset upon his death.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_trait_spawnegg_var1.png",
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
          "MurkyRespawnEgg"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "MurkyBlackLagoon",
        name: "Black Lagoon",
        descriptionShort: "Increases Slime radius",
        descriptionLong: "Increase Slime's radius by 30%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_slime.png",
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
          "MurkySlime"
        ]
      },
      {
        id: "MurkySlipperyWhenWet",
        name: "Slippery When Wet",
        descriptionShort: "Move faster during Safety Bubble, reduce cooldown",
        descriptionLong: "Gain 50% Movement Speed and move through units while in Safety Bubble. Additionally, Safety Bubble's cooldown is reduced by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_safetybubble.png",
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
          "MurkySafetyBubble"
        ]
      },
      {
        id: "MurkyTimetoKrill",
        name: "Time to Krill",
        descriptionShort: "Basic Attacks slow enemies",
        descriptionLong: "Basic Attacks against Heroes deal an additional 7 (+4% / level) damage a second and slow the target by 7% for 4 seconds. This effect can stack up to 5 times.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_slow.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 1.4000000000000001
        },
        order: 3,
        tier: "level7"
      }
    ],
    [
      {
        id: "MurkyHeroicAbilityMarchoftheMurlocs",
        name: "March of the Murlocs",
        descriptionShort: "Swarm enemies with Murlocs",
        descriptionLong: "After 0.75 seconds, Murky commands a legion of Murlocs to march in a target direction, each one leaping onto the first enemy Hero or Structure they find. Each Murloc deals 125 (+4% / level) damage and slows its target by 15% for 5 seconds. Murlocs deal 50% damage to Structures.",
        cooldown: 110,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_marchofthemurlocs.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 35
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "MurkyMarchoftheMurlocs"
        ]
      },
      {
        id: "MurkyHeroicAbilityOctoGrab",
        name: "Octo-Grab",
        descriptionShort: "Stun and poke an enemy Hero",
        descriptionLong: "Murky becomes Unstoppable and Stuns target enemy Hero for 3 seconds while he hits them for 1 damage a second.",
        cooldown: 50,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_octograb.png",
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
          "MurkyOctoGrab"
        ]
      }
    ],
    [
      {
        id: "MurkyMasteryRejuvenatingBubble",
        name: "Rejuvenating Bubble",
        descriptionShort: "Safety Bubble heals",
        descriptionLong: "Safety Bubble restores 40% of Murky's maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_safetybubble.png",
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
          "MurkySafetyBubble"
        ]
      },
      {
        id: "MurkyEggShell",
        name: "Egg Shell",
        descriptionShort: "Spawning from Egg grants Shield",
        descriptionLong: "Spawning from his Egg grants Murky a Shield equal to 100% of his maximum Health. The shield lasts indefinitely.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_trait_spawnegg.png",
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
          "MurkyRespawnEgg"
        ]
      },
      {
        id: "MurkyFishTank",
        name: "Fish Tank",
        descriptionShort: "Heal for damage dealt",
        descriptionLong: "Murky is healed for 25% of the damage he deals with Basic Attacks and Basic Abilities.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_fishtank.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 5,
          magicalDamage: 0
        },
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "MurkyRespawnEgg"
        ]
      }
    ],
    [
      {
        id: "MurkyToxicBuildup",
        name: "Toxic Buildup",
        descriptionShort: "Successive Basic Attacks cast Slime",
        descriptionLong: "Every 3rd consecutive Basic Attack against an enemy Hero causes a free Slime to be cast upon them.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_slime.png",
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
          "MurkySlime"
        ]
      },
      {
        id: "MurkyFishOil",
        name: "Fish Oil",
        descriptionShort: "Casts Slime at Pufferfish location",
        descriptionLong: "The Pufferfish casts Slime at its location upon landing.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_pufferfish.png",
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
          "MurkyPufferfish"
        ]
      },
      {
        id: "MurkyMasteryWrathOfCod",
        name: "Wrath of Cod",
        descriptionShort: "Increase Pufferfish damage on Heroes",
        descriptionLong: "Heroes hit by Pufferfish take additional damage equal to 15% of their maximum Health over 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_pufferfish_b.png",
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
          "MurkyPufferfish"
        ]
      }
    ],
    [
      {
        id: "MurkyMasteryNeverEndingMurlocs",
        name: "Never-Ending Murlocs",
        descriptionShort: "March of the Murlocs can channel forever",
        descriptionLong: "March of the Murlocs can be channeled, sending little Murlocs indefinitely.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_marchofthemurlocs.png",
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
          "MurkyMarchoftheMurlocs"
        ],
        prerequisiteTalentIds: [
          "MurkyHeroicAbilityMarchoftheMurlocs"
        ]
      },
      {
        id: "MurkyMasteryAndASharkToo",
        name: "... And a Shark Too!",
        descriptionShort: "Increase Octo-Grab's damage",
        descriptionLong: "Increase the damage of Octo-Grab by 13700% (+4% / level).",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_octograb.png",
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
          "MurkyOctoGrab"
        ],
        prerequisiteTalentIds: [
          "MurkyHeroicAbilityOctoGrab"
        ]
      },
      {
        id: "MurkyBigTunaKahuna",
        name: "Big Tuna Kahuna",
        descriptionShort: "Increase Health and respawn time",
        descriptionLong: "Murky's maximum Health and Egg respawn time are doubled.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_ingame_heroselect_btn_murky.png",
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
          "MurkyRespawnEgg"
        ]
      },
      {
        id: "MurkyMakingInky",
        name: "Making Inky",
        descriptionShort: "Reduced Slime cooldown",
        descriptionLong: "Reduces the cooldown of Slime from 4 seconds to 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_murky_slime.png",
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
          "MurkySlime"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 21.99623352165725,
    physicalDamage: 37.49999999999999,
    mobility: 24.006944444444446,
    healing: 0,
    magicalDamage: 39.39662217379461
  }
};
      
export default murky;