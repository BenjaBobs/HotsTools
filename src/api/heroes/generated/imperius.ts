import { Hero } from '../heroes';
      
const imperius: Hero = {
  name: "Imperius",
  nameNormalized: "imperius",
  franchise: "Diablo",
  gender: "Male",
  size: 0.8125,
  movementSpeed: 4.8398,
  health: {
    amount: 2375,
    scale: 0.04,
    regenRate: 4.9492,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "ImperiusHeroWeapon",
      range: 2,
      period: 1.2,
      damage: 126,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/imperius.png",
  abilities: [
    {
      id: "ImperiusValorousBrand",
      name: "Valorous Brand",
      descriptionShort: "Basic Abilities mark enemy Heroes, increasing Basic Attack damage and healing",
      descriptionLong: "Each Basic Ability marks enemy Heroes hit for 10 seconds. Basic Attacks consume the target's marks, dealing 20% bonus damage per mark and healing for 75 (+4% / level) per mark.",
      cooldown: null,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_trait.png",
      isPassive: true,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 4,
        magicalDamage: 4
      }
    },
    {
      id: "ImperiusCelestialCharge",
      name: "Celestial Charge",
      descriptionShort: "Charge forward and Stun enemies",
      descriptionLong: "Lunge towards a targeted direction and stab, dealing 35 (+4% / level) damage. If an enemy Hero is hit, Channel to Stun for 1 second and deal 70 (+4% / level) additional damage when it fully finishes.",
      cost: {
        type: "Mana",
        amount: 40
      },
      cooldown: 10,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_q.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 31.5
      }
    },
    {
      id: "ImperiusSolarionsFire",
      name: "Solarion's Fire",
      descriptionShort: "Damage and Slow enemies in a line",
      descriptionLong: "Release a fiery wave that deals 110 (+4% / level) damage. Enemies hit by the center take 50% bonus damage and are Slowed by 40% for 3 seconds.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 8,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_w.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 41.25
      }
    },
    {
      id: "ImperiusMoltenArmor",
      name: "Molten Armor",
      descriptionShort: "Burn nearby enemies",
      descriptionLong: "Shroud Imperius in flames for 3 seconds, striking a nearby enemy for 19 (+4% / level) damage every 0.25 seconds. Imperius heals for 50% of the damage dealt, increased to 100% against Heroes.",
      cost: {
        type: "Mana",
        amount: 75
      },
      cooldown: 12,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_e.png",
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
      id: "ImperiusAngelicArmaments",
      name: "Angelic Armaments",
      descriptionShort: "Gain a large Shield, reactivate to damage",
      descriptionLong: "Summon a ring of blazing swords that grants 850 (+4% / level) Shield for 3 seconds. If the Shield lasts the full duration, this ability can be reactivated within 5 seconds to launch 6 swords toward an area, each dealing 140 (+4% / level) damage to the first enemy hit.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 70,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_r1.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 28
      }
    },
    {
      id: "ImperiusWrathOfTheAngiris",
      name: "Wrath of the Angiris",
      descriptionShort: "Ascend with an enemy into the Heavens",
      descriptionLong: "After 0.75 seconds, charge in the target direction, lifting the first enemy Hero hit into the Heavens. While in the air, Imperius can steer the landing location by moving. After 2 seconds, slam the target into the ground, dealing 375 (+4% / level) damage and Stunning them for 1 second.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 80,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_r2.png",
      isPassive: false,
      analysis: {
        mobility: 0,
        physicalDamage: 0,
        tankiness: 0,
        healing: 0,
        magicalDamage: 75
      }
    }
  ],
  talents: [
    [
      {
        id: "ImperiusCelestialChargeImpalingLight",
        name: "Impaling Light",
        descriptionShort: "Empower Celestial Charge with Valorous Brand",
        descriptionLong: "Celestial Charge's final damage is increased by 75% and its cooldown is reduced by 1.25 seconds for each Valorous Brand on the target when the Stun completes.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_q.png",
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
          "ImperiusCelestialCharge"
        ]
      },
      {
        id: "ImperiusSolarionsFireConsumingFlame",
        name: "Consuming Flame",
        descriptionShort: "Increase Solarion's Fire Slow, center damage",
        descriptionLong: "Increase the center damage of Solarion's Fire by an additional 125% and its Slow amount by 15%. The first enemy Hero hit with Solarion's Fire restores 30 Mana.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_w.png",
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
          "ImperiusSolarionsFire"
        ]
      },
      {
        id: "ImperiusValorousBrandBurnTheImpure",
        name: "Burn the Impure",
        descriptionShort: "Valorous Brand marks deal bonus damage",
        descriptionLong: "Consuming a Valorous Brand mark deals bonus damage equal to 2.5% of the Hero's maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_trait.png",
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
          "ImperiusValorousBrand"
        ]
      }
    ],
    [
      {
        id: "ImperiusMoltenArmorSovereignArmor",
        name: "Sovereign Armor",
        descriptionShort: "Molten Armor grants Armor",
        descriptionLong: "Molten Armor grants 20 Armor for 1.5 seconds. Damaging an enemy Hero with Molten Armor increases the duration of the Armor by 0.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_e.png",
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
          "ImperiusMoltenArmor"
        ]
      },
      {
        id: "ImperiusValorousBrandBattleHunger",
        name: "Battle Hunger",
        descriptionShort: "Increase Valorous Brand healing",
        descriptionLong: "Increase the healing of Valorous Brand by 80%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_trait.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 16,
          magicalDamage: 0
        },
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "ImperiusValorousBrand"
        ]
      },
      {
        id: "ImperiusPressForward",
        name: "Press Forward",
        descriptionShort: "Damage Heroes to refresh Regen Globes",
        descriptionLong: "Gain 10 Armor while being healed by a Regeneration Globe.  Damaging an enemy Hero sets the duration of an active Regeneration Globe on Imperius to 8 seconds (unless it is already higher).",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_globe.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 2,
          healing: 2,
          magicalDamage: 0
        },
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "ImperiusValorousBrand"
        ]
      }
    ],
    [
      {
        id: "ImperiusCelestialChargeFlashOfAnger",
        name: "Flash of Anger",
        descriptionShort: "Celestial Charge marks deal damage in an area",
        descriptionLong: "Consuming a mark from Celestial Charge deals 150 (+4% / level) damage to the target and nearby enemies and grants Imperius a 250 (+4% / level) point Shield for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_q.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 30
        },
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "ImperiusCelestialCharge"
        ]
      },
      {
        id: "ImperiusSolarionsFireBlazeOfGlory",
        name: "Blaze of Glory",
        descriptionShort: "Solarion's Fire creates a delayed explosion",
        descriptionLong: "Solarion's Fire leaves a line of scorched earth along its center, exploding after 2 seconds and dealing 185 (+4% / level) damage.  This explosion benefits from and consumes Valorous Brand marks.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_w.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 37
        },
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "ImperiusSolarionsFire"
        ]
      },
      {
        id: "ImperiusHolyFervor",
        name: "Holy Fervor",
        descriptionShort: "Activate to gain cleaving Basic Attacks",
        descriptionLong: "Activate to cause the next 4 Basic Attacks within 10 seconds to cleave for 30% additional damage. Passive: Casting Molten Armor grants Holy Fervor for 2 Basic Attacks.",
        cooldown: 25,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_item_01.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level7"
      }
    ],
    [
      {
        id: "ImperiusAngelicArmaments",
        name: "Angelic Armaments",
        descriptionShort: "Gain a large Shield, reactivate to damage",
        descriptionLong: "Summon a ring of blazing swords that grants 850 (+4% / level) Shield for 3 seconds. If the Shield lasts the full duration, this ability can be reactivated within 5 seconds to launch 6 swords toward an area, each dealing 140 (+4% / level) damage to the first enemy hit.",
        cost: {
          type: "Mana",
          amount: 70
        },
        cooldown: 70,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_r1.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 28
        },
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "ImperiusAngelicArmaments"
        ]
      },
      {
        id: "ImperiusWrathOfTheAngiris",
        name: "Wrath of the Angiris",
        descriptionShort: "Ascend with an enemy into the Heavens",
        descriptionLong: "After 0.75 seconds, charge in the target direction, lifting the first enemy Hero hit into the Heavens. While in the air, Imperius can steer the landing location by moving. After 2 seconds, slam the target into the ground, dealing 375 (+4% / level) damage and Stunning them for 1 second.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 80,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_r2.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 75
        },
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "ImperiusWrathOfTheAngiris"
        ]
      }
    ],
    [
      {
        id: "ImperiusCelestialChargePatheticMortals",
        name: "Pathetic Mortals",
        descriptionShort: "Celestial Charge reduces Move Speed, damage",
        descriptionLong: "Stunning enemy Heroes with Celestial Charge reduces their Movement Speed by 25% and their damage by 50% for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_q.png",
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
          "ImperiusCelestialCharge"
        ]
      },
      {
        id: "ImperiusMoltenArmorDivineRage",
        name: "Divine Rage",
        descriptionShort: "Valorous Brand reduces Molten Armor cooldown",
        descriptionLong: "Consuming a Valorous Brand mark reduces the cooldown of Molten Armor by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_e.png",
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
          "ImperiusMoltenArmor"
        ]
      },
      {
        id: "ImperiusMoltenArmorHeatOfBattle",
        name: "Heat of Battle",
        descriptionShort: "Molten Armor heals more against Heroes",
        descriptionLong: "Increase Molten Armor's healing against Heroes by 2% for every 1% Health Imperius is missing.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_e_alt_01.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0.4,
          magicalDamage: 0
        },
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "ImperiusMoltenArmor"
        ]
      }
    ],
    [
      {
        id: "ImperiusCelestialChargeCelestialSwiftness",
        name: "Celestial Swiftness",
        descriptionShort: "Celestial Charge grants Attack and Move Speed",
        descriptionLong: "Gain 20% Movement Speed for 5 seconds after casting Celestial Charge. Gain 40% Attack Speed for 5 seconds for each Hero stunned with Celestial Charge.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_q.png",
        isPassive: false,
        analysis: {
          mobility: 1,
          physicalDamage: 1,
          tankiness: 0,
          healing: 0,
          magicalDamage: 0
        },
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "ImperiusCelestialCharge"
        ]
      },
      {
        id: "ImperiusMoltenArmorMeltingTouch",
        name: "Melting Touch",
        descriptionShort: "Molten Armor marks lower Armor",
        descriptionLong: "Consuming a Molten Armor mark reduces the target's Armor by 25 for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_e.png",
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
          "ImperiusMoltenArmor"
        ]
      },
      {
        id: "ImperiusValorousPursuit",
        name: "Valorous Pursuit",
        descriptionShort: "Teleport to enemies marked by Valorous Brand",
        descriptionLong: "Activate to teleport to an enemy that has been marked by Valorous Brand and gain 25 Armor for 3 seconds.",
        cooldown: 20,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_item_03.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 5,
          healing: 0,
          magicalDamage: 0
        },
        order: 3,
        tier: "level16"
      }
    ],
    [
      {
        id: "ImperiusAngelicArmamentsHeavenlyHost",
        name: "Heavenly Host",
        descriptionShort: "Allied Heroes gain a weaponized Shield",
        descriptionLong: "Nearby allied Heroes gain 600 (+4% / level) Shield for 3 seconds. If the Shield lasts the full duration, fire a sword at the nearest enemy Hero, dealing 140 (+4% / level) damage.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_r1.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 0,
          healing: 0,
          magicalDamage: 28
        },
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "ImperiusAngelicArmaments"
        ],
        prerequisiteTalentIds: [
          "ImperiusAngelicArmaments"
        ]
      },
      {
        id: "ImperiusWrathOfTheAngirisUnrelentingDescent",
        name: "Unrelenting Descent",
        descriptionShort: "Wrath of the Angiris heals, reduced cooldown",
        descriptionLong: "Descending from the Heavens restores 30% of Imperius' maximum Health and Mana. Consuming a Valorous Brand reduces the cooldown of Wrath of the Angiris by 10 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_r2.png",
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
          "ImperiusWrathOfTheAngiris"
        ],
        prerequisiteTalentIds: [
          "ImperiusWrathOfTheAngiris"
        ]
      },
      {
        id: "ImperiusValorousBrandBrandOfSolarion",
        name: "Brand of Solarion",
        descriptionShort: "Valorous Brand no longer consumed",
        descriptionLong: "Reduce the duration of Valorous Brand to 5 seconds, but it is no longer consumed when triggered.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_trait.png",
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
          "ImperiusValorousBrand"
        ]
      },
      {
        id: "ImperiusImpervious",
        name: "Impervious",
        descriptionShort: "Activate to gain Unstoppable and Spell Armor",
        descriptionLong: "Activate to become Unstoppable and gain 75 Spell Armor for 3 seconds. Hitting Heroes with the center of Solarion's Fire reduces this cooldown by 5 seconds.",
        cooldown: 75,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_imperius_item_02.png",
        isPassive: false,
        analysis: {
          mobility: 0,
          physicalDamage: 0,
          tankiness: 15,
          healing: 0,
          magicalDamage: 0
        },
        order: 4,
        tier: "level20"
      }
    ]
  ],
  analysis: {
    tankiness: 71.56308851224105,
    physicalDamage: 52.5,
    mobility: 24.006944444444446,
    healing: 0.971699259079315,
    magicalDamage: 26.522632343593937
  }
};
      
export default imperius;