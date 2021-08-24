import { Hero } from '../heroes';
      
const ltmorales: Hero = {
  name: "Lt. Morales",
  nameNormalized: "ltmorales",
  franchise: "Starcraft",
  gender: "Female",
  size: 0.75,
  movementSpeed: 4.8398,
  health: {
    amount: 1560,
    scale: 0.04,
    regenRate: 3.25,
    regenScale: 0.04
  },
  energy: {
    amount: 100,
    regenRate: 0,
    name: "Energy"
  },
  autoAttacks: [
    {
      nameId: "MedicHeroWeapon",
      range: 5.5,
      period: 1,
      damage: 83,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/ltmorales.png",
  abilities: [
    {
      id: "MedicCaduceusReactor",
      name: "Caduceus Reactor",
      descriptionShort: "Restore Health while channeling Healing Beam",
      descriptionLong: "While channeling Healing Beam, Lt. Morales regenerates 2% of her maximum Health per second.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_caduceusreactor.png",
      isPassive: true,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0.4,
        magicalDamage: 0
      }
    },
    {
      id: "MedicHealingBeam",
      name: "Healing Beam",
      descriptionShort: "Heals allies over time",
      descriptionLong: "Heal target allied Hero or Minion for 172 (+4% / level) Health per second as long as they are in range. After not channeling Healing Beam for 2 seconds, regenerate 6 Energy per second. Reactivate to switch targets, or self-cast to cancel channeling.",
      cost: {
        type: "Energy",
        amount: 6,
        perSecond: true
      },
      cooldown: null,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_healingbeam.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 34.8,
        magicalDamage: 0
      }
    },
    {
      id: "MedicSafeguard",
      name: "Safeguard",
      descriptionShort: "Grants Armor to the target",
      descriptionLong: "Grant target ally Hero 35 Armor for 3 seconds.",
      cooldown: 11,
      charges: {
        chargesMax: 1,
        chargesInitial: 1,
        chargeCost: 1,
        recastCooldown: 0.5
      },
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_deployshield.png",
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
      id: "MedicDisplacementGrenade",
      name: "Displacement Grenade",
      descriptionShort: "Damages and knocks enemies away",
      descriptionLong: "Fire a grenade that can be manually detonated, dealing 208 (+4% / level) to nearby enemies and knocking them away.",
      cooldown: 12,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_displacementgrenade.png",
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
      id: "MedicStimDrone",
      name: "Stim Drone",
      descriptionShort: "Grant massive Attack and Movement Speed",
      descriptionLong: "Grant an allied Hero 75% Attack Speed and 25% Movement Speed for 10 seconds.",
      cooldown: 70,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_stim.png",
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
      id: "MedicMedivacDropship",
      name: "Medivac Dropship",
      descriptionShort: "Transport allies across long distances",
      descriptionLong: "Target a location for a Medivac transport. For up to 10 seconds before takeoff, allies can right-click to enter the Medivac.",
      cooldown: 45,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_medivacdropship.png",
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
        id: "MedicCaduceusFeedback",
        name: "Caduceus Feedback",
        descriptionShort: "Basic Attacks generate Energy",
        descriptionLong: "Increases Attack Range by 1.1 and Basic Attacks against Heroes generate 4 Energy.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_talent_autoattack_mana.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level1"
      },
      {
        id: "MedicLifeSupport",
        name: "Life Support",
        descriptionShort: "Increase maximum Energy, recharge rate",
        descriptionLong: "During the first 2 seconds of Energy regeneration, Healing Beam regenerates 100% more Energy. Passive: Increase your maximum Energy by 10.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_healingbeam.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.4,
          magicalDamage: 0
        },
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "MedicHealingBeam"
        ]
      },
      {
        id: "MedicClear",
        name: "Clear!",
        descriptionShort: "Quest: Hit Heroes to empower Displacement Grenade",
        descriptionLong: "Quest: Each enemy Hero hit with Displacement Grenade restores 3 Energy. Reward: After hitting 15 Heroes, reduce the cooldown of Displacement Grenade from 12 seconds to 9 seconds. Reward: After hitting 30 Heroes, increase the detonation area of Displacement Grenade by 25%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_displacementgrenade.png",
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
          "MedicDetonateDisplacementGrenade",
          "MedicDisplacementGrenade"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "MedicCellularReactor",
        name: "Cellular Reactor",
        descriptionShort: "Consume Energy to heal, Safeguard restores Energy",
        descriptionLong: "Consume 30 Energy to heal Lt. Morales for 30% of her maximum Health over 3 seconds. Caduceus Reactor is disabled while this is active. Passive: Generate 2 Energy each time Safeguard reduces damage, up to a maximum of 10 Energy per use.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_temp_btn-upgrade-terran-mobiusreactor.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 6,
          magicalDamage: 0
        },
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "MedicSafeguard"
        ]
      },
      {
        id: "MedicTraumaTrigger",
        name: "Trauma Trigger",
        descriptionShort: "Gain Armor at low Health, increase Caduceus Reactor healing",
        descriptionLong: "Taking damage while below 40% Health grants 40 Armor for 3 seconds. This effect has a 30 second cooldown. Passive: Increase the healing provided by Caduceus Reactor from 2% to 4% of Lt. Morales's maximum Health per second.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_advancedblock.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 6,
          magicalDamage: 0
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "MedicCaduceusReactor"
        ]
      },
      {
        id: "MedicBlastShield",
        name: "Blast Shield",
        descriptionShort: "Displacement Grenade Slows, grants Shields",
        descriptionLong: "Enemy Heroes hit by Displacement Grenade are Slowed by 50% for 1 second after being knocked away and grant Lt. Morales a Shield equal to 6% of her maximum Health. This shield stacks up to 5 times.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_displacementgrenade.png",
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
          "MedicDisplacementGrenade"
        ]
      }
    ],
    [
      {
        id: "MedicPhysicalTherapy",
        name: "Physical Therapy",
        descriptionShort: "Safeguard removes Slows",
        descriptionLong: "Safeguard removes all Slows from its target and its cooldown is reduced by 3 seconds.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_deployshield.png",
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
          "MedicSafeguard"
        ]
      },
      {
        id: "MedicVanadiumPlating",
        name: "Vanadium Plating",
        descriptionShort: "Stuns, Roots increase Safeguard Armor, increased duration",
        descriptionLong: "While an ally affected by Safeguard is Stunned or Rooted, Safeguard grants an additional 20 Armor. Passive: Increase the duration of Safeguard by 1 second.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_deployshield_c.png",
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
          "MedicSafeguard"
        ]
      },
      {
        id: "MedicMediDrone",
        name: "Medi-Drone",
        descriptionShort: "Healing Beam heals Safeguard targets",
        descriptionLong: "Allies with Safeguard receive 75% of the healing done by Healing Beam on another ally.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_deployshield_b.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 15,
          magicalDamage: 0
        },
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "MedicSafeguard"
        ]
      }
    ],
    [
      {
        id: "MedicHeroicAbilityStimDrone",
        name: "Stim Drone",
        descriptionShort: "Grant massive Attack and Movement Speed",
        descriptionLong: "Grant an allied Hero 75% Attack Speed and 25% Movement Speed for 10 seconds.",
        cooldown: 70,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_stim.png",
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
          "MedicStimDrone"
        ]
      },
      {
        id: "MedicHeroicAbilityMedivacDropship",
        name: "Medivac Dropships",
        descriptionShort: "Unlock Medivac transports",
        descriptionLong: "Unlock the Medivac Dropship and Reinforcements abilities. These abilities share a cooldown. Medivac DropshipTarget a location for a Medivac transport. For up to 10 seconds before takeoff, allies can right-click to enter the Medivac. ReinforcementsCall down a Medivac Dropship at your Hall of Storms for your allies. After 10 seconds, or when the Ability is activated again, the Medivac will travel to the original cast location to unload its passengers.",
        cooldown: 45,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_medivacdropship.png",
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
          "MedicMedivacDropship"
        ]
      }
    ],
    [
      {
        id: "MedicEMPGrenade",
        name: "EMP Grenade",
        descriptionShort: "Displacement Grenade deals more damage to Shields",
        descriptionLong: "Displacement Grenade deals an additional 96 (+4% / level) damage over 2 seconds, and up to 400 (+4% / level) bonus damage to Shields.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_displacementgrenade.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 19.200000000000003
        },
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "MedicDisplacementGrenade"
        ]
      },
      {
        id: "MedicSystemShock",
        name: "System Shock",
        descriptionShort: "Displacement Grenade reduces damage dealt",
        descriptionLong: "Heroes hit by Displacement Grenade deal 30% less damage for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_displacementgrenade_b.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 6
        },
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "MedicDetonateDisplacementGrenade",
          "MedicDisplacementGrenade"
        ]
      },
      {
        id: "MedicBedsideManner",
        name: "Bedside Manner",
        descriptionShort: "Displacement Grenade empowers Basic Attacks",
        descriptionLong: "Heroes hit by Displacement Grenade will take an additional 6% of maximum Health as damage from Lt. Morales' next Basic Attack against them. Passive: Basic Attacks against Heroes deal an additional 1% of maximum Health as damage.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_displacementgrenade_c.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "MedicDisplacementGrenade"
        ]
      }
    ],
    [
      {
        id: "MedicExtendedCare",
        name: "Extended Care",
        descriptionShort: "Healing Beam heals over time, increased range",
        descriptionLong: "Channeling Healing Beam on a Hero for at least 3 seconds causes them to be healed for 258 (+4% / level) over 3 seconds when Healing Beam ends. Passive: Increase the range of Healing Beam by 30%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_healingbeam.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 58.800000000000004,
          magicalDamage: 0
        },
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "MedicRedirectHealingBeam",
          "MedicHealingBeam"
        ]
      },
      {
        id: "MedicFirstResponder",
        name: "First Responder",
        descriptionShort: "Healing Beam empowered at high Energy",
        descriptionLong: "While above 60 Energy, Healing Beam's healing is increased by 20% and both Lt. Morales and her Healing Beam target gain 15% Movement Speed.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_healingbeam_c.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 16,
          magicalDamage: 0
        },
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "MedicRedirectHealingBeam",
          "MedicHealingBeam"
        ]
      },
      {
        id: "MedicShieldSequencer",
        name: "Shield Sequencer",
        descriptionShort: "Safeguard gains a second charge, increased range",
        descriptionLong: "Safeguard gains a second charge and its range is increased by 60%.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_deployshield.png",
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
          "MedicSafeguard"
        ]
      }
    ],
    [
      {
        id: "MedicHyperactivity",
        name: "Hyperactivity",
        descriptionShort: "Lower cooldown, increase Movement Speed",
        descriptionLong: "Reduce the cooldown of Stim Drone from 70 seconds to 35 seconds, and increase the Movement Speed bonus from 25% to 50%.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_stim.png",
        isPassive: false,
        analysis: {
          mobility: 5,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "MedicStimDrone"
        ],
        prerequisiteTalentIds: [
          "MedicHeroicAbilityStimDrone"
        ]
      },
      {
        id: "MedicSafeZone",
        name: "Safe Zone",
        descriptionShort: "Exiting Medivac grants Protected, reduced cooldown",
        descriptionLong: "After exiting the Medivac, allies are Protected from all damage for 3 seconds. Passive: Reduce the cooldown of Medivac Dropship abilities by 15 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_medivacdropship.png",
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
          "MedicMedivacDropship"
        ],
        prerequisiteTalentIds: [
          "MedicHeroicAbilityMedivacDropship"
        ]
      },
      {
        id: "MedicHospiceCare",
        name: "Hospice Care",
        descriptionShort: "Safeguard grants Unkillable, can heal",
        descriptionLong: "Safeguard grants its target Unkillable for 1 second. If the target is under 50% maximum Health when the Unkillable effect ends, they are healed for 8% of their maximum Health.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: 0.5
        },
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_deployshield.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 10,
          magicalDamage: 0
        },
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "MedicSafeguard"
        ]
      },
      {
        id: "MedicSecondOpinion",
        name: "Second Opinion",
        descriptionShort: "Reduce Displacement Grenade cooldown",
        descriptionLong: "Hitting 2 or more Heroes with Displacement Grenade reduces its cooldown to 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_displacementgrenade.png",
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
          "MedicDisplacementGrenade"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 47.005649717514125,
    physicalDamage: 41.5,
    mobility: 24.006944444444446,
    healing: 8.550953479897972,
    magicalDamage: 0
  }
};
      
export default ltmorales;