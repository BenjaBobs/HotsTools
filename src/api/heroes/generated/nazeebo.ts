import { Hero } from '../heroes';
      
export const nazeebo: Hero = {
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
        amount: 40
      },
      cooldown: 8,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_corpsespider.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 18.75
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
        magicalDamage: 6
      }
    },
    {
      id: "WitchDoctorPlagueofToads",
      name: "Plague of Toads",
      descriptionShort: "Summon a wave of exploding toads",
      descriptionLong: "Create a wave of 3 Toads that explode on contact, dealing 126 (+4% / level) damage over 6 seconds. This effect stacks. Stores up to 2 charges.",
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
        magicalDamage: 47.25
      }
    },
    {
      id: "WitchDoctorGargantuan",
      name: "Gargantuan",
      descriptionShort: "Summon a Gargantuan to guard an area",
      descriptionLong: "Summon a Gargantuan to guard an area for 20 seconds. Deals 100 (+4% / level) damage when summoned, attacks for 140 (+4% / level) damage, and can be ordered to stomp nearby enemies. The Gargantuan's Stomp deals 240 (+4% / level) damage and Slows by 30% for 2 seconds.",
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
        magicalDamage: 68
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
        magicalDamage: 46
      }
    }
  ],
  talents: [
    [
      {
        id: "WitchDoctorWidowmakers",
        name: "Widowmakers",
        descriptionShort: "Quest: Empower Corpse Spiders",
        descriptionLong: "Enemies hit by Corpse Spiders' jar are Slowed by 25% for 1 second. Reward: After Corpse Spiders attack Heroes 100 times, their attack damage is increased by 25% and their duration is increased by 1 second.",
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
        descriptionLong: "Quest: Hit Heroes with Plague of Toads. Reward: After hitting 35 Heroes with Plague of Toads, it spawns 2 additional toads. Reward: After hitting 70 Heroes with Plague of Toads, it reduces the damage Heroes deal by 5%, stacking up to 25%.",
        cooldown: null,
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
        descriptionLong: "If an enemy dies while poisoned by Voodoo Ritual, restore 2% of Nazeebo's maximum Health and Mana. Passive: Takedowns grant 3 stacks of Voodoo Ritual.",
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
        descriptionShort: "Spawn more Corpse Spiders",
        descriptionLong: "The number of Corpse Spiders spawned is increased from 3 to 4. If Corpse Spiders' jar hits only one enemy, it creates an additional spider.",
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
          magicalDamage: 20
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
        descriptionLong: "Summon a Gargantuan to guard an area for 20 seconds. Deals 100 (+4% / level) damage when summoned, attacks for 140 (+4% / level) damage, and can be ordered to stomp nearby enemies. The Gargantuan's Stomp deals 240 (+4% / level) damage and Slows by 30% for 2 seconds.",
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
          magicalDamage: 68
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
          magicalDamage: 46
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
        descriptionLong: "Hitting an enemy Hero with Plague of Toads grants 30 Armor for 3 seconds, stacking up to 6 seconds.",
        cooldown: null,
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
        descriptionLong: "Gain 40 Spell Armor. Heroic Basic Attacks against Nazeebo remove this bonus for 3 seconds and spawn a Corpse Spider to attack the Hero.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_suprerstition.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 8,
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
        descriptionShort: "Corpse Spiders reduce Basic Ability cooldowns",
        descriptionLong: "Corpse Spider Attacks against Heroes reduce the cooldown of Nazeebo's Basic Abilities by 0.125 seconds.",
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
          magicalDamage: 63.800000000000004
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
        descriptionShort: "Empower Gargantuan, Gargantuan Stomp",
        descriptionLong: "Gargantuan Stomp's area is increased by 25% and its Slow amount is increased to 50%. Passive: Reduce Gargantuan's cooldown by 40 seconds and its Mana cost by 50%.",
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
        descriptionShort: "Increase Ravenous Spirit range and damage, reduces healing received",
        descriptionLong: "When Ravenous Spirit damages an enemy Hero, reduce their healing received by 50% for 1 second and increase Ravenous Spirit's damage by 5% for the rest of its duration. Passive: Increases the range of Ravenous Spirit by 50%.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_ravenousspirit.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 10,
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
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "WitchDoctorVoodooRitualTrait"
        ],
        isQuest: true
      },
      {
        id: "WitchDoctorBadMedicine",
        name: "Bad Medicine",
        descriptionShort: "Consume Voodoo Ritual to become Unstoppable",
        descriptionLong: "Consume 5 stacks of Voodoo Ritual to become Unstoppable, gain 20% increased Movement Speed, and 50 Armor for 2 seconds.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_nazeebo_voodooritual_a.png",
        isPassive: false,
        analysis: {
          mobility: 10,
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
    tankiness: 45.258003766478346,
    physicalDamage: 48.888888888888886,
    mobility: 24.006944444444446,
    healing: 0,
    magicalDamage: 6.871582680656124
  }
};
