import { Hero } from '../heroes';
      
export const anubarak: Hero = {
  name: "Anub'arak",
  nameNormalized: "anubarak",
  franchise: "Warcraft",
  gender: "Male",
  size: 1.0625,
  movementSpeed: 4.8398,
  health: {
    amount: 2150,
    scale: 0.04,
    regenRate: 4.4804,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "AnubarakHeroWeapon",
      range: 1.5,
      period: 1,
      damage: 81,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/anubarak.png",
  abilities: [
    {
      id: "AnubarakLegionOfBeetlesVisual",
      name: "Scarab Host",
      descriptionShort: "Spawn a Beetle whenever an Ability is cast",
      descriptionLong: "Using an Ability spawns a Beetle which lasts for 8 seconds, attacking nearby enemies for 20 (+4% / level) damage.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anubarak_scarabhost.png",
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
      id: "AnubarakImpale",
      name: "Impale",
      descriptionShort: "Shoot line of spikes that damages and stuns enemies",
      descriptionLong: "Deals 90 (+4% / level) damage. Stuns for 1 second.",
      cost: {
        type: "Mana",
        amount: 65
      },
      cooldown: 12,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anubarak_impale.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 22.5
      }
    },
    {
      id: "AnubarakHardenCarapace",
      name: "Harden Carapace",
      descriptionShort: "Gain a shield",
      descriptionLong: "Gain a Shield that grants 40 Spell Armor and absorbs 340 (+4% / level) damage over 3 seconds.",
      cost: {
        type: "Mana",
        amount: 25
      },
      cooldown: 7,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anubarak_hardencarapace_var1.png",
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
      id: "AnubarakBurrowCharge",
      name: "Burrow Charge",
      descriptionShort: "Burrow underground and charge in a direction",
      descriptionLong: "Burrow to the target location, dealing 91 (+4% / level) damage and briefly stunning enemies in a small area upon surfacing, slowing them by 25% for 2.5 seconds. Burrow Charge can be reactivated to surface early.",
      cost: {
        type: "Mana",
        amount: 65
      },
      cooldown: 14,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anubarak_burrowcharge.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 19.5
      }
    },
    {
      id: "AnubarakLocustSwarm",
      name: "Locust Swarm",
      descriptionShort: "Damages enemies while healing",
      descriptionLong: "Deal 68 (+4% / level) damage per second to nearby enemies. Each enemy damaged restores 24 (+4% / level) Health. Lasts 6 seconds.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 100,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anubarak_locustswarm.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 13.600000000000001
      }
    },
    {
      id: "AnubarakCocoon",
      name: "Cocoon",
      descriptionShort: "Wraps enemy in a cocoon",
      descriptionLong: "Wraps target enemy Hero in a cocoon, rendering them unable to act or be targeted for 7 seconds. Allies of the Hero can attack the cocoon to break it and free them early.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 70,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anubarak_webblast.png",
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
        id: "AnubarakNerubianArmor",
        name: "Nerubian Armor",
        descriptionShort: "Increase Harden Carapace's Spell Armor",
        descriptionLong: "Increase Harden Carapace's Spell Armor by 25.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anubarak_hardencarapace_var1.png",
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
          "AnubarakHardenCarapace"
        ]
      },
      {
        id: "AnubarakCombatStyleLegionOfBeetles",
        name: "Legion of Beetles",
        descriptionShort: "Spawn Beetles periodically",
        descriptionLong: "Beetles have 30 Spell Armor. Automatically spawn a Beetle every 12 seconds. Can be toggled on and off.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anubarak_scarabhost.png",
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
          "AnubarakLegionOfBeetlesVisual"
        ]
      },
      {
        id: "GenericTalentRegenerationMaster",
        name: "Regeneration Master",
        descriptionShort: "Quest: Regen Globes increase Health Regen",
        descriptionLong: "Quest: Gathering a Regeneration Globe increases your Health Regeneration by 1 per second, up to 30. Reward: After gathering 30 Regeneration Globes, you also gain 500 Health.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_regenerationmaster.png",
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
        isQuest: true
      }
    ],
    [
      {
        id: "AnubarakMasteryBedOfBarbs",
        name: "Bed of Barbs",
        descriptionShort: "Impale slows and damages over time",
        descriptionLong: "Create a bed of spikes along Impale's path that Slows enemies by 25% and deals 21 (+4% / level) damage per second. Spikes persist for 3.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anubarak_impale.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 4.2
        },
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "AnubarakImpale"
        ]
      },
      {
        id: "AnubarakMasteryShedExoskeletonHardenCarapace",
        name: "Shed Exoskeleton",
        descriptionShort: "Harden Carapace increases Move Speed",
        descriptionLong: "Harden Carapace grants 30% increased Movement Speed for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anubarak_hardencarapace_var1.png",
        isPassive: false,
        analysis: {
          mobility: 0.6000000000000001,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "AnubarakHardenCarapace"
        ]
      },
      {
        id: "AnubarakMasteryUnderkingBurrowCharge",
        name: "Underking",
        descriptionShort: "Increases Burrow Charge range and damage",
        descriptionLong: "Increases Burrow Charge range by 20% and damage by 100%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anubarak_burrowcharge.png",
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
          "AnubarakBurrowCharge"
        ]
      }
    ],
    [
      {
        id: "AnubarakCombatStyleChitinousPlating",
        name: "Chitinous Plating",
        descriptionShort: "Reduces Harden Carapace cooldown",
        descriptionLong: "While Harden Carapace is active, taking damage from enemy Abilities reduces its cooldown by 1 second, up to 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anubarak_hardencarapace_var1.png",
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
          "AnubarakHardenCarapace"
        ]
      },
      {
        id: "AnubarakSubterraneanShield",
        name: "Subterranean Shield",
        descriptionShort: "Burrow Charge grants Shield",
        descriptionLong: "Burrow Charge also grants a 400 (+4% / level) point Shield for 5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anubarak_burrowcharge.png",
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
          "AnubarakBurrowCharge"
        ]
      },
      {
        id: "AnubarakMasteryLeechingScarabs",
        name: "Leeching Scarabs",
        descriptionShort: "Beetles heal Anub'arak",
        descriptionLong: "Beetles gain 30% bonus attack damage and they heal Anub'arak for 50% of their damage with each attack if he is nearby.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anubarak_scarabhost.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 6,
          magicalDamage: 0
        },
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "AnubarakLegionOfBeetlesVisual"
        ]
      }
    ],
    [
      {
        id: "AnubarakLocustSwarm",
        name: "Locust Swarm",
        descriptionShort: "Damages enemies while healing",
        descriptionLong: "Deal 68 (+4% / level) damage per second to nearby enemies. Each enemy damaged restores 24 (+4% / level) Health. Lasts 6 seconds.",
        cost: {
          type: "Mana",
          amount: 75
        },
        cooldown: 100,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anubarak_locustswarm.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 13.600000000000001
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "AnubarakLocustSwarm"
        ]
      },
      {
        id: "AnubarakHeroicAbilityCocoon",
        name: "Cocoon",
        descriptionShort: "Wraps enemy in a cocoon",
        descriptionLong: "Wraps target enemy Hero in a cocoon, rendering them unable to act or be targeted for 7 seconds. Allies of the Hero can attack the cocoon to break it and free them early.",
        cost: {
          type: "Mana",
          amount: 70
        },
        cooldown: 70,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anubarak_webblast.png",
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
          "AnubarakCocoon"
        ]
      }
    ],
    [
      {
        id: "AnubarakMasteryUrticatingSpines",
        name: "Urticating Spines",
        descriptionShort: "Harden Carapace deals area damage",
        descriptionLong: "Casting Harden Carapace will also deal 90 (+4% / level) damage to nearby enemies. Deals double damage against Heroes.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anubarak_hardencarapace_var1.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 18
        },
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "AnubarakHardenCarapace"
        ]
      },
      {
        id: "AnubarakBurningBeetles",
        name: "Burning Beetles",
        descriptionShort: "Deal damage to nearby enemies",
        descriptionLong: "Deal 21 (+4% / level) damage per second to nearby enemies. Beetles deal 6 (+4% / level) damage per second to nearby enemies.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_burningrage.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 5.4
        },
        order: 2,
        tier: "level13"
      },
      {
        id: "AnubarakAcidDrenchedMandibles",
        name: "Acid-Drenched Mandibles",
        descriptionShort: "Attacking disabled Heroes increases damage",
        descriptionLong: "Attacking a Hero that is Slowed, Rooted, or Stunned increases Anub'arak's Basic Attack damage by 80% for 4 seconds.",
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
          magicalDamage: 0
        },
        order: 3,
        tier: "level13"
      }
    ],
    [
      {
        id: "AnubarakMasteryEpicenterBurrowCharge",
        name: "Epicenter",
        descriptionShort: "Increases Burrow Charge area and reduces cooldown",
        descriptionLong: "Increases Burrow Charge impact area by 60% and lowers the cooldown by 1 second for each Hero hit.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anubarak_burrowcharge.png",
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
          "AnubarakBurrowCharge"
        ]
      },
      {
        id: "AnubarakDebilitation",
        name: "Debilitation",
        descriptionShort: "Burrow Charge, Impale reduce enemy Spell Power",
        descriptionLong: "Enemy Heroes hit by Burrow Charge or Impale have their Spell Power reduced by 50% for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anubarak_combo_q_e.png",
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
          "AnubarakImpale",
          "AnubarakBurrowCharge"
        ]
      },
      {
        id: "AnubarakScarabHostBeetleJuiced",
        name: "Beetle, Juiced",
        descriptionShort: "Basic Attacks spawn Beetles",
        descriptionLong: "Passive: Beetles gain 30% increased health. Every 4th Basic Attack spawns a Beetle.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anubarak_scarabhost.png",
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
          "AnubarakLegionOfBeetlesVisual"
        ]
      }
    ],
    [
      {
        id: "AnubarakLocustSwarmHiveMaster",
        name: "Hive Master",
        descriptionShort: "Gain a permanent life-stealing Locust",
        descriptionLong: "Gain a permanent Vampire Locust that attacks a nearby enemy every 3 seconds. The Vampire Locust deals 165 (+4% / level) damage and returns to heal Anub'arak for 80 (+4% / level) health.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anubarak_locustswarm.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 33,
          magicalDamage: 33
        },
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "AnubarakLocustSwarm"
        ],
        prerequisiteTalentIds: [
          "AnubarakLocustSwarm"
        ]
      },
      {
        id: "AnubarakCocoonCryptweave",
        name: "Cryptweave",
        descriptionShort: "Increases Cocoon duration, damage on exit",
        descriptionLong: "Staying near the Cocoon allows Anub'arak to extend the duration by up to 6 seconds per Cocoon. Upon exiting the Cocoon, enemies take 60 (+4% / level) damage over 4 seconds. This damage is increased by 100% for each second that they were inside.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_anubarak_webblast.png",
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
          "AnubarakCocoon"
        ],
        prerequisiteTalentIds: [
          "AnubarakHeroicAbilityCocoon"
        ]
      },
      {
        id: "AnubarakTheTraitorKing",
        name: "The Traitor King",
        descriptionShort: "Gain Health and Armor",
        descriptionLong: "Gain 10% bonus maximum Health and 20 Spell Armor. Activate to gain 75 Armor for 4 seconds.",
        cooldown: 60,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_glues_draft_portrait_anubarak.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 15,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level20"
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
    tankiness: 64.7834274952919,
    physicalDamage: 40.5,
    mobility: 24.006944444444446,
    healing: 0,
    magicalDamage: 2.054086005615487
  }
};
