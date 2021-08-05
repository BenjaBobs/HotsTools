import { Hero } from '../heroes';
      
const nazeebo: Hero = {
  name: "Nazeebo",
  nameNormalized: "nazeebo",
  franchise: "Diablo",
  gender: "Male",
  size: 0.6875,
  movementSpeed: 4.8398,
  health: {
    amount: 1502,
    scale: 0.04,
    regenRate: 3.129,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroWitchDoctor",
      range: 5.5,
      period: 0.9,
      damage: 88,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/nazeebo.png",
  abilities: [
    {
      id: "WitchDoctorVoodooRitualTrait",
      name: "Voodoo Ritual",
      descriptionShort: "Basic Attacks and Abilities deal damage over time. Killed minions increase Health and Mana.",
      descriptionLong: "Nazeebo's Basic Attacks and Abilities poison Non-Heroic enemies, causing them to take 67 (+4% / level) additional damage over 6 seconds. Quest: If a Minion dies while poisoned by Voodoo Ritual, Nazeebo permanently gains 6 Health and 1 Mana.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_voodooritual.png",
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
      id: "WitchDoctorCorpseSpiders",
      name: "Corpse Spiders",
      descriptionShort: "Throw a jar that summons Spiders to attack enemies hit",
      descriptionLong: "Hurl a jar of spiders that deals 50 (+4% / level) damage. If it hits at least one enemy, create 3 Corpse Spiders that attack for 38 (+4% / level) damage. Spiders last for 4 seconds.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 9,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_corpsespider.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 5.555555555555555
      }
    },
    {
      id: "WitchDoctorZombieWall",
      name: "Zombie Wall",
      descriptionShort: "Summon a temporary ring of zombies that trap and attack",
      descriptionLong: "After 1 second, create a ring of Zombies surrounding the target area that deal 28 (+4% / level) damage and last for 3 seconds.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 14,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_zombiewall.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 2
      }
    },
    {
      id: "WitchDoctorPlagueofToads",
      name: "Plague of Toads",
      descriptionShort: "Summon a wave of exploding toads",
      descriptionLong: "Create a wave of 3 Toads that explode on contact, dealing 119 (+4% / level) damage over 6 seconds. This effect stacks. Stores up to 2 charges.",
      cost: {
        type: "Mana",
        amount: 30
      },
      cooldown: 8,
      charges: {
        chargesMax: 2,
        chargesInitial: 2,
        chargeCost: 1,
        recastCooldown: 1
      },
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_plagueoftoads.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 14.875
      }
    },
    {
      id: "WitchDoctorGargantuan",
      name: "Gargantuan",
      descriptionShort: "Summon a Gargantuan to guard an area",
      descriptionLong: "Summon a Gargantuan to guard an area for 20 seconds. Deals 100 (+4% / level) damage when summoned, attacks for 140 (+4% / level) damage, and can be ordered to stomp nearby enemies.",
      cost: {
        type: "Mana",
        amount: 90
      },
      cooldown: 70,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_gargantuan.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 6.666666666666667
      }
    },
    {
      id: "WitchDoctorRavenousSpirit",
      name: "Ravenous Spirit",
      descriptionShort: "Channel a damaging, movable spirit",
      descriptionLong: "Channel a Ravenous Spirit that deals 230 (+4% / level) damage per second. Cannot move while channeling. Lasts for 8 seconds.",
      cost: {
        type: "Mana",
        amount: 100
      },
      cooldown: 90,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_ravenousspirit.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 15.333333333333334
      }
    }
  ],
  talents: [
    [
      {
        id: "WitchDoctorWidowmakers",
        name: "Widowmakers",
        descriptionShort: "Quest: Empower Corpse Spiders",
        descriptionLong: "Reduce the Mana cost of Corpse Spiders by 10. Reward: After Corpse Spiders attack Heroes 100 times, their attack damage is increased by 30% and the cooldown is reduced by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_corpsespider.png",
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
          "WitchDoctorCorpseSpiders"
        ],
        isQuest: true
      },
      {
        id: "WitchDoctorPandemic",
        name: "Pandemic",
        descriptionShort: "Quest: Empower Plague of Toads",
        descriptionLong: "Reward: After hitting 40 Heroes with Plague of Toads, it spawns 2 additional toads.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_plagueoftoads.png",
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
          "WitchDoctorPlagueofToads"
        ],
        isQuest: true
      },
      {
        id: "WitchDoctorThingOfTheDeep",
        name: "Thing of the Deep",
        descriptionShort: "Increase range, Quest: Increase Spell Power",
        descriptionLong: "Increase the range of Nazeebo's Basic Abilities by 20%. Reward: After gaining 50 stacks of Voodoo Ritual, gain 5% Spell Power. Reward: After gaining 100 stacks of Voodoo Ritual, gain an additional 5% Spell Power.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_elunesgrace.png",
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
          "WitchDoctorVoodooRitualTrait"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "WitchDoctorHexedCrawlers",
        name: "Hexed Crawlers",
        descriptionShort: "Corpse Spiders restore Health and Mana",
        descriptionLong: "Corpse Spiders restore 1% of Nazeebo's maximum Health and Mana when they attack an enemy Hero.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_corpsespider.png",
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
          "WitchDoctorCorpseSpiders"
        ]
      },
      {
        id: "WitchDoctorBigVoodoo",
        name: "Big Voodoo",
        descriptionShort: "Increase Voodoo Ritual bonuses",
        descriptionLong: "Increases the Health and Mana bonuses from Voodoo Ritual by 100%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_voodooritual.png",
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
          "WitchDoctorVoodooRitualTrait"
        ]
      },
      {
        id: "WitchDoctorBloodRitual",
        name: "Blood Ritual",
        descriptionShort: "Voodoo Ritual restores Health and Mana",
        descriptionLong: "If an enemy dies while poisoned by Voodoo Ritual, restore 2% of Nazeebo's maximum Health and Mana.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_voodooritual_a.png",
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
          "WitchDoctorVoodooRitualTrait"
        ]
      }
    ],
    [
      {
        id: "WitchDoctorSpiritofArachyr",
        name: "Spirit of Arachyr",
        descriptionShort: "More Corpse Spiders against single enemy",
        descriptionLong: "If Corpse Spiders hits only one enemy, it creates 2 additional spiders.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_corpsespider.png",
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
          "WitchDoctorCorpseSpiders"
        ]
      },
      {
        id: "WitchDoctorDeadRush",
        name: "Dead Rush",
        descriptionShort: "Zombie Wall deals more damage and uproots",
        descriptionLong: "Zombie Wall deals 100% more damage. When it expires up to 5 remaining Zombies uproot and attack nearby enemies for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_zombiewall.png",
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
          "WitchDoctorZombieWall"
        ]
      },
      {
        id: "WitchDoctorToadsofHugeness",
        name: "Toads of Hugeness",
        descriptionShort: "Toads become more powerful with each hop",
        descriptionLong: "Increase the damage and explosion radius of Plague of Toads by 25% after each hop, up to a maximum of 100%.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_plagueoftoads.png",
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
          "WitchDoctorPlagueofToads"
        ]
      }
    ],
    [
      {
        id: "WitchDoctorHeroicAbilityGargantuan",
        name: "Gargantuan",
        descriptionShort: "Summon a Gargantuan to guard an area",
        descriptionLong: "Summon a Gargantuan to guard an area for 20 seconds. Deals 100 (+4% / level) damage when summoned, attacks for 140 (+4% / level) damage, and can be ordered to stomp nearby enemies.",
        cost: {
          type: "Mana",
          amount: 90
        },
        cooldown: 70,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_gargantuan.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 6.666666666666667
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "WitchDoctorGargantuan"
        ]
      },
      {
        id: "WitchDoctorHeroicAbilityRavenousSpirits",
        name: "Ravenous Spirit",
        descriptionShort: "Channel a damaging, movable spirit",
        descriptionLong: "Channel a Ravenous Spirit that deals 230 (+4% / level) damage per second. Cannot move while channeling. Lasts for 8 seconds.",
        cost: {
          type: "Mana",
          amount: 100
        },
        cooldown: 90,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_ravenousspirit.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 15.333333333333334
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "WitchDoctorRavenousSpirit"
        ]
      }
    ],
    [
      {
        id: "WitchDoctorGuardianToads",
        name: "Guardian Toads",
        descriptionShort: "Toads grant Armor",
        descriptionLong: "Hitting an enemy Hero with Plague of Toads grants 30 Armor for 1.5 seconds, stacking up to 4 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 2,
          chargesInitial: 2,
          chargeCost: 1,
          recastCooldown: 1
        },
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_plagueoftoads.png",
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
          "WitchDoctorPlagueofToads"
        ]
      },
      {
        id: "WitchDoctorSuperstition",
        name: "Superstition",
        descriptionShort: "Gain Spell Armor while not being Attacked",
        descriptionLong: "Gain 40 Spell Armor. Heroic Basic Attacks against Nazeebo remove this bonus for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_suprerstition.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level13"
      },
      {
        id: "GenericTalentIceBlock",
        name: "Ice Block",
        descriptionShort: "Activate to become Invulnerable",
        descriptionLong: "Activate to place yourself in Stasis and gain Invulnerability for 3 seconds.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_iceblock.png",
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
      }
    ],
    [
      {
        id: "WitchDoctorSpiderColony",
        name: "Spider Colony",
        descriptionShort: "Corpse Spiders reduce other Basic Ability cooldowns",
        descriptionLong: "Corpse Spider Attacks against Heroes reduce the cooldowns of Zombie Wall and Plague of Toads by 0.25 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_corpsespider.png",
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
          "WitchDoctorCorpseSpiders"
        ]
      },
      {
        id: "WitchDoctorRingOfPoison",
        name: "Ring of Poison",
        descriptionShort: "Deals damage in center area",
        descriptionLong: "Zombie Wall lasts 1 second longer, and the center is filled with poison that deals a total of 319 (+4% / level) damage over 4 seconds. This damage starts small and increases over the duration.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_zombiewall.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 21.266666666666666
        },
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "WitchDoctorZombieWall"
        ]
      },
      {
        id: "WitchDoctorSoulHarvest",
        name: "Soul Harvest",
        descriptionShort: "Activate to increase Health and Spell Power",
        descriptionLong: "Activate to increase Nazeebo's Health and Spell Power by 7% for each nearby enemy, up to a maximum of 35%. Lasts 15 seconds.",
        cooldown: 15,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_soulharvest.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level16"
      }
    ],
    [
      {
        id: "WitchDoctorHumongoid",
        name: "Humongoid",
        descriptionShort: "Reduce Gargantuan cooldown and mana cost",
        descriptionLong: "Reduce Gargantuan's cooldown by 40 seconds and its Mana cost by 50%.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_gargantuan.png",
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
          "WitchDoctorGargantuan"
        ],
        prerequisiteTalentIds: [
          "WitchDoctorHeroicAbilityGargantuan"
        ]
      },
      {
        id: "WitchDoctorAnnihilatingSpirits",
        name: "Annihilating Spirit",
        descriptionShort: "Increase Ravenous Spirit range and damage",
        descriptionLong: "Increases the range of Ravenous Spirit by 50%, and each time it damages an enemy Hero increase its damage 5% for the rest of its duration.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_ravenousspirit.png",
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
          "WitchDoctorRavenousSpirit"
        ],
        prerequisiteTalentIds: [
          "WitchDoctorHeroicAbilityRavenousSpirits"
        ]
      },
      {
        id: "GenericTalentFuryoftheStorm",
        name: "Fury of the Storm",
        descriptionShort: "Basic Attacks chain to non-Heroes",
        descriptionLong: "Every 5 seconds, your next Basic Attack will deal an additional 91 (+4% / level) damage to the target, and 228 (+4% / level) damage to all nearby Minions, Mercenaries, and Monsters.",
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
          magicalDamage: 6.066666666666666
        },
        order: 3,
        tier: "level20"
      },
      {
        id: "WitchDoctorVileInfection",
        name: "Vile Infection",
        descriptionShort: "Quest: Empower Voodoo Ritual",
        descriptionLong: "Quest: Reach 175 stacks of Voodoo Ritual. Reward: After reaching 175 stacks of Voodoo Ritual, it can also be applied to Heroes and its damage is increased from 67 (+4% / level) to 167 (+4% / level) over 6 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_voodooritual.png",
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
          "WitchDoctorVoodooRitualTrait"
        ],
        isQuest: true
      }
    ]
  ],
  analysis: {
    tankiness: 45.258003766478346,
    physicalDamage: 48.888888888888886,
    mobility: 24.199,
    healing: 0,
    magicalDamage: 19.667570901056326
  }
};
      
export default nazeebo;