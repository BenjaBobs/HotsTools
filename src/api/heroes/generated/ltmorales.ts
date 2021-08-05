import { Hero } from '../heroes';
      
const ltmorales: Hero = {
  name: "Lt. Morales",
  nameNormalized: "ltmorales",
  franchise: "Starcraft",
  gender: "Female",
  size: 0.75,
  movementSpeed: 4.8398,
  health: {
    amount: 1545,
    scale: 0.04,
    regenRate: 3.2187,
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
        healing: 0.26666666666666666,
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
        healing: 2.293333333333333,
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
      cooldown: 90,
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
      cooldown: 60,
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
        descriptionShort: "Safeguard generates Energy",
        descriptionLong: "Generate 2 Energy each time Safeguard reduces damage, up to a maximum of 20 Energy per use.",
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
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "MedicSafeguard"
        ]
      },
      {
        id: "MedicClear",
        name: "Clear!",
        descriptionShort: "Quest: Hit Heroes to empower Displacement Grenade",
        descriptionLong: "Quest: Hit Heroes with Displacement Grenade. Reward: After hitting 15 Heroes, reduce the cooldown of Displacement Grenade from 12 seconds to 9 seconds. Reward: After hitting 30 Heroes, increase the detonation area of Displacement Grenade by 25%.",
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
        descriptionShort: "Consume Energy to heal",
        descriptionLong: "Consume 30 Energy to heal Lt. Morales for 40% of her maximum Health over 4 seconds. Caduceus Reactor is disabled while this is active.",
        cooldown: 45,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_temp_btn-upgrade-terran-mobiusreactor.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 5.333333333333333,
          magicalDamage: 0
        },
        order: 1,
        tier: "level4"
      },
      {
        id: "MedicTraumaTrigger",
        name: "Trauma Trigger",
        descriptionShort: "Gain Armor at low Health",
        descriptionLong: "Taking damage while below 40% Health grants 40 Armor for 3 seconds. This effect has a 20 second cooldown.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_advancedblock.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 2,
        tier: "level4"
      },
      {
        id: "MedicBlastShield",
        name: "Blast Shield",
        descriptionShort: "Displacement Grenade grants Energy, Shield",
        descriptionLong: "Heroes hit by Displacement Grenade generate 2 Energy and grant Lt. Morales a Shield equal to 6% of her maximum Health, stacking up to 5 times.",
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
        descriptionShort: "Increased duration, Stuns, Roots increase Safeguard Armor",
        descriptionLong: "Passive: Increase the duration of Safeguard by 1 second. While an ally affected by Safeguard is Stunned or Rooted, Safeguard grants an additional 20 Armor.",
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
          healing: 0,
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
        cooldown: 90,
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
        name: "Medivac Dropship",
        descriptionShort: "Transport allies across long distances",
        descriptionLong: "Target a location for a Medivac transport. For up to 10 seconds before takeoff, allies can right-click to enter the Medivac.",
        cooldown: 60,
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
          magicalDamage: 6.4
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
        descriptionLong: "Heroes hit by Displacement Grenade deal 30% less damage for 4 seconds.",
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
          magicalDamage: 0
        },
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "MedicDetonateDisplacementGrenade",
          "MedicDisplacementGrenade"
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
        descriptionShort: "Increase Healing Beam range",
        descriptionLong: "Increase the range of Healing Beam by 30%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_healingbeam.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 4,
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
        descriptionLong: "While above 60 Energy, Healing Beam's healing is increased by 25%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_healingbeam_c.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 3.3333333333333335,
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
        descriptionShort: "Safeguard gains a second charge",
        descriptionLong: "Safeguard gains a second charge.",
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
        descriptionLong: "Reduce the cooldown of Stim Drone from 90 seconds to 45 seconds, and increase the Movement Speed bonus from 25% to 50%.",
        cooldown: null,
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
        descriptionShort: "Exiting Medivac grants Protected",
        descriptionLong: "After exiting the Medivac, allies are Protected from all damage for 2 seconds.",
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
        id: "MedicReinforcements",
        name: "Reinforcements",
        descriptionShort: "Medivac appears at Hall of Storms",
        descriptionLong: "Activate to call down a Medivac Dropship at your Hall of Storms for your allies. After 10 seconds, or when the Ability is activated again, the Medivac will travel to the original cast location to unload its passengers. Cooldown is shared with Medivac Dropship. Passive: Reduce the cooldown of Medivac Dropship from 60 to 30 seconds. Does not require the Medivac Dropship Talent.",
        cooldown: 30,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_medivacdropship_b.png",
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
          "MedicMedivacDropship"
        ]
      },
      {
        id: "MedicCaduceusReactor2dot0",
        name: "Caduceus Reactor 2.0",
        descriptionShort: "Increase Caduceus Reactor healing",
        descriptionLong: "Increase the healing provided by Caduceus Reactor from 2% to 6% of Lt. Morales's maximum Health per second.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_medic_caduceusreactor.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 1.0666666666666667,
          magicalDamage: 0
        },
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "MedicCaduceusReactor"
        ]
      }
    ]
  ],
  analysis: {
    tankiness: 46.55367231638417,
    physicalDamage: 41.5,
    mobility: 24.199,
    healing: 3.3601680084004193,
    magicalDamage: 0
  }
};
      
export default ltmorales;