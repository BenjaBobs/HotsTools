import { Hero } from '../heroes';
      
export const malthael: Hero = {
  name: "Malthael",
  nameNormalized: "malthael",
  franchise: "Diablo",
  gender: "Male",
  size: 0.6875,
  movementSpeed: 4.8398,
  health: {
    amount: 1962,
    scale: 0.04,
    regenRate: 4.086,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "MalthaelHeroWeapon",
      range: 1.5,
      period: 1.1,
      damage: 82,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/malthael.png",
  abilities: [
    {
      id: "MalthaelReapersMark",
      name: "Reaper's Mark",
      descriptionShort: "Basic Attacks cleave, apply Reaper's Mark",
      descriptionLong: "Basic Attacks cleave in an area in front of Malthael and afflict non-Structure targets with Reaper's Mark for 4 seconds. Marked enemies are revealed and take damage equal to 2% of their maximum Health every 1 second.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_reapersmark.png",
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
      id: "MalthaelSoulRip",
      name: "Soul Rip",
      descriptionShort: "Damage Marked enemies and heal",
      descriptionLong: "Extract the souls of nearby enemies afflicted by Reaper's Mark, dealing 100 (+4% / level) damage and healing Malthael for 25 (+4% / level) per target hit. Heroic targets heal Malthael for an additional 4% of the Hero's maximum Health.",
      cost: {
        type: "Mana",
        amount: 25
      },
      cooldown: 2,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_soulrip.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 156,
        magicalDamage: 150
      }
    },
    {
      id: "MalthaelWraithStrike",
      name: "Wraith Strike",
      descriptionShort: "Teleport to a Marked target",
      descriptionLong: "Instantly teleport through an enemy afflicted by Reaper's Mark, dealing 59 (+4% / level) damage and refreshing Reaper's Mark.",
      cost: {
        type: "Mana",
        amount: 30
      },
      cooldown: 5,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_wraithstrike.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 35.4
      }
    },
    {
      id: "MalthaelDeathShroud",
      name: "Death Shroud",
      descriptionShort: "Unleash a wave that applies Reaper's Mark",
      descriptionLong: "After 0.25 seconds, unleash a wave of dark mist that applies Reaper's Mark to enemies it hits.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 8,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_deathshroud.png",
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
      id: "MalthaelTormentedSouls",
      name: "Tormented Souls",
      descriptionShort: "Apply Reaper's Mark to nearby enemies",
      descriptionLong: "Unleash a torrent of souls, continually applying Reaper's Mark to nearby enemies for 4 seconds. Tormented Souls resets the cooldown of Wraith Strike when activated, and while active, Wraith Strike costs no Mana its cooldown is reduced to 2 seconds.",
      cost: {
        type: "Mana",
        amount: 20
      },
      cooldown: 60,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_tormentedsoul.png",
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
      id: "MalthaelLastRites",
      name: "Last Rites",
      descriptionShort: "Quest: Damage a Hero based on their missing Health",
      descriptionLong: "Apply a death sentence to an enemy Hero that, after 2 seconds, deals damage equal to 50% of their missing Health. Quest: Enemies killed between the application of Last Rites and within 1.5 seconds of it dealing damage permanently reduce its cooldown by 5 seconds, to a minimum of 20 seconds.",
      cost: {
        type: "Mana",
        amount: 100
      },
      cooldown: 70,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_lastrites.png",
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
        id: "MalthaelDeathsReach",
        name: "Death's Reach",
        descriptionShort: "Increase Wraith Strike range",
        descriptionLong: "Increase Wraith Strike's range by 35%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_wraithstrike.png",
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
          "MalthaelWraithStrike"
        ]
      },
      {
        id: "MalthaelOnAPaleHorse",
        name: "On a Pale Horse",
        descriptionShort: "Increase mounted Movement Speed",
        descriptionLong: "Gain an additional 20% Movement Speed while mounted.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_onpalehorse.png",
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
          "Mount",
          "Dismount"
        ]
      },
      {
        id: "MalthaelFearTheReaper",
        name: "Fear the Reaper",
        descriptionShort: "Activate to increase Movement Speed",
        descriptionLong: "Activate to increase Movement Speed by 25% and pass through other units for 4 seconds.",
        cooldown: 25,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_fearthereaper.png",
        isPassive: false,
        analysis: {
          mobility: 5,
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
        id: "MalthaelDieAlone",
        name: "Die Alone",
        descriptionShort: "Increase Soul Rip single-target damage",
        descriptionLong: "Soul Rip deals 50% more damage to Heroes if it hits only one Hero.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_soulrip.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 10
        },
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "MalthaelSoulRip"
        ]
      },
      {
        id: "MalthaelThrowingShade",
        name: "Throwing Shade",
        descriptionShort: "Increase Death Shroud range, reduce cooldown",
        descriptionLong: "Increase Death Shroud's range by 33%, reduce its cooldown by 3 seconds, and reduce its Mana cost from 50 to 30. Death Shroud's initial impact deals 2% maximum Health as damage to non-Structure enemies.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_deathshroud.png",
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
          "MalthaelDeathShroud"
        ]
      },
      {
        id: "MalthaelBlackHarvest",
        name: "Black Harvest",
        descriptionShort: "Quest: Increase Reaper's Mark duration",
        descriptionLong: "Quest: Apply Reaper's Mark to Heroes for a total of 150 seconds. Reward: Permanently increase Reaper's Mark's duration by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_reapersmark.png",
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
          "MalthaelReapersMark"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "MalthaelColdHand",
        name: "Cold Hand",
        descriptionShort: "Soul Rip Slows",
        descriptionLong: "Soul Rip Slows enemies by 20% for 2.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_soulrip.png",
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
          "MalthaelSoulRip"
        ]
      },
      {
        id: "MalthaelMassacre",
        name: "Massacre",
        descriptionShort: "Wraith Strike hits an area",
        descriptionLong: "Wraith Strike now damages and applies Reaper's Mark to enemies around its target.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_wraithstrike.png",
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
          "MalthaelWraithStrike"
        ]
      },
      {
        id: "MalthaelTouchOfDeath",
        name: "Touch of Death",
        descriptionShort: "Activate to reduce enemy healing",
        descriptionLong: "Activate to reduce healing received by Heroes afflicted by Reaper's Mark by 50% for 4 seconds.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_touchofdeath.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 10,
          magicalDamage: 0
        },
        order: 3,
        tier: "level7"
      }
    ],
    [
      {
        id: "MalthaelTormentedSouls",
        name: "Tormented Souls",
        descriptionShort: "Apply Reaper's Mark to nearby enemies",
        descriptionLong: "Unleash a torrent of souls, continually applying Reaper's Mark to nearby enemies for 4 seconds. Tormented Souls resets the cooldown of Wraith Strike when activated, and while active, Wraith Strike costs no Mana its cooldown is reduced to 2 seconds.",
        cost: {
          type: "Mana",
          amount: 20
        },
        cooldown: 60,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_tormentedsoul.png",
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
          "MalthaelTormentedSouls"
        ]
      },
      {
        id: "MalthaelLastRites",
        name: "Last Rites",
        descriptionShort: "Quest: Damage a Hero based on their missing Health",
        descriptionLong: "Apply a death sentence to an enemy Hero that, after 2 seconds, deals damage equal to 50% of their missing Health. Quest: Enemies killed between the application of Last Rites and within 1.5 seconds of it dealing damage permanently reduce its cooldown by 5 seconds, to a minimum of 20 seconds.",
        cost: {
          type: "Mana",
          amount: 100
        },
        cooldown: 70,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_lastrites.png",
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
          "MalthaelLastRites"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "MalthaelSoulSiphon",
        name: "Soul Siphon",
        descriptionShort: "Increase Soul Rip healing",
        descriptionLong: "Increase Soul Rip's bonus healing from Heroes to 4.75% of the Hero's maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_soulrip.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.8,
          magicalDamage: 0
        },
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "MalthaelSoulRip"
        ]
      },
      {
        id: "MalthaelEtherealExistence",
        name: "Ethereal Existence",
        descriptionShort: "Marked targets grant Physical Armor",
        descriptionLong: "Gain 10 Physical Armor per enemy Hero afflicted by Reaper's Mark, up to a maximum of 30.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_reapersmark.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 2,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "MalthaelReapersMark"
        ]
      },
      {
        id: "MalthaelInevitableEnd",
        name: "Inevitable End",
        descriptionShort: "Activate to become Unstoppable, remove Marks",
        descriptionLong: "Activate to become Unstoppable for 2 seconds, but remove all active Reaper's Marks.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_inevitableend.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level13"
      },
      {
        id: "MalthaelShroudOfWisdom",
        name: "Shroud of Wisdom",
        descriptionShort: "Activate to gain Spell Armor",
        descriptionLong: "After 2 seconds, gain 50 Spell Armor for 4 seconds.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_shroudofwisdom.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 10,
          healing: 0,
          magicalDamage: 0
        },
        order: 4,
        tier: "level13"
      }
    ],
    [
      {
        id: "MalthaelSoulCollector",
        name: "Soul Collector",
        descriptionShort: "Increase Soul Rip range, reduce cooldown",
        descriptionLong: "Reduce Soul Rip's cooldown by 0.5 seconds and increase its range by 25%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_soulrip.png",
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
          "MalthaelSoulRip"
        ]
      },
      {
        id: "MalthaelMortality",
        name: "Mortality",
        descriptionShort: "Wraith Strike deals bonus damage to Heroes",
        descriptionLong: "When damaging a Hero, Wraith Strike deals bonus damage equal to 8% of the Hero's maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_wraithstrike.png",
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
          "MalthaelWraithStrike"
        ]
      },
      {
        id: "MalthaelMementoMori",
        name: "Memento Mori",
        descriptionShort: "Reaper's Mark deals increased damage over time",
        descriptionLong: "Reaper's Mark deals 60% increased damage after afflicting an enemy for more than 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_reapersmark.png",
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
          "MalthaelReapersMark"
        ]
      }
    ],
    [
      {
        id: "MalthaelReaperOfSouls",
        name: "Reaper of Souls",
        descriptionShort: "Extend Tormented Souls duration",
        descriptionLong: "Increase the duration of Tormented Souls to 6 seconds, and while Tormented Souls is active, Hero Takedowns refresh its duration. If 2 or more enemy Heroes are in Tormented Souls' radius, it does not decay.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_tormentedsoul.png",
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
          "MalthaelTormentedSouls"
        ],
        prerequisiteTalentIds: [
          "MalthaelTormentedSouls"
        ]
      },
      {
        id: "MalthaelAngelOfDeath",
        name: "Angel of Death",
        descriptionShort: "Last Rites heals",
        descriptionLong: "Last Rites heals for 100% of the damage dealt, and its current and future cooldown reduction bonuses are doubled.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_lastrites.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 20,
          magicalDamage: 0
        },
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "MalthaelLastRites"
        ],
        prerequisiteTalentIds: [
          "MalthaelLastRites"
        ]
      },
      {
        id: "MalthaelFinalCurtain",
        name: "Final Curtain",
        descriptionShort: "Death Shroud leaves a trail",
        descriptionLong: "Death Shroud leaves a trail in its wake for 4 seconds, applying Reaper's Mark to enemies in its area.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_deathshroud.png",
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
          "MalthaelDeathShroud"
        ]
      },
      {
        id: "MalthaelNoOneCanStopDeath",
        name: "No One Can Stop Death",
        descriptionShort: "Activate to respawn",
        descriptionLong: "Activate while dead to immediately respawn at the Hall of Storms but increase Malthael's next respawn time by 25%.",
        cooldown: 180,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_malthael_noonecanstopdeath.png",
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
      }
    ]
  ],
  analysis: {
    tankiness: 59.1186440677966,
    physicalDamage: 37.27272727272727,
    mobility: 24.006944444444446,
    healing: 37.89627110409329,
    magicalDamage: 6.849416284912073
  }
};
