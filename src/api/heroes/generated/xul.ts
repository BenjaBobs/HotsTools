import { Hero } from '../heroes';
      
const xul: Hero = {
  name: "Xul",
  nameNormalized: "xul",
  franchise: "Diablo",
  gender: "Male",
  size: 0.6875,
  movementSpeed: 4.8398,
  health: {
    amount: 2080,
    scale: 0.04,
    regenRate: 4.332,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "NecromancerHeroWeapon",
      range: 1.5,
      period: 0.8332,
      damage: 95,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/xul.png",
  abilities: [
    {
      id: "NecromancerRaiseSkeletonDisplayAbility",
      name: "Raise Skeleton",
      descriptionShort: "Spawn Skeletal Warriors from Minions",
      descriptionLong: "When a nearby enemy Minion dies, it becomes a Skeletal Warrior with 240 (+4% / level) Health that attacks for 21 (+4% / level) damage and lasts up to 12 seconds. Upon death, Skeletal Warriors deal 40 (+4% / level) damage to nearby enemies.  Up to 3 Skeletal Warriors can be active at once when spawned in this way.",
      cooldown: null,
      charges: {
        chargesMax: 3,
        recastCooldown: null
      },
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_raiseskeleton.png",
      isPassive: true
    },
    {
      id: "NecromancerSpectralScythe",
      name: "Spectral Scythe",
      descriptionShort: "Throw a scythe that damages enemies as it returns to Xul",
      descriptionLong: "Summon a scythe that travels to Xul after 1 second, dealing 190 (+4% / level) damage to enemies and spawning a Skeletal Warrior when hitting enemy Heroes.  These do not count towards Xul's Raise Skeleton maximum.",
      cost: {
        type: "Mana",
        amount: 55
      },
      cooldown: 8,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_reap.png",
      isPassive: false
    },
    {
      id: "NecromancerCursedStrikes",
      name: "Cursed Strikes",
      descriptionShort: "Basic Attacks deal damage in an area and reduce Attack Speed",
      descriptionLong: "Xul's Basic Attacks deal damage in a wide area and reduce the Attack Speed of Heroes and Summons by 40% for 2 seconds. Lasts 4 seconds once triggered.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 16,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_cursedstrikes_off.png",
      isPassive: false
    },
    {
      id: "NecromancerBonePrison",
      name: "Bone Prison",
      descriptionShort: "Root an enemy in place",
      descriptionLong: "After a 2 second delay, deal 80 (+4% / level) damage and Root the target enemy Hero for 1.75 seconds.  All nearby Skeletal Warriors will fixate on the target for their duration.",
      cost: {
        type: "Mana",
        amount: 70
      },
      cooldown: 10,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_boneprison.png",
      isPassive: false
    },
    {
      id: "NecromancerSkeletalMages",
      name: "Skeletal Mages",
      descriptionShort: "Summon Frost Mages to damage and Slow enemies",
      descriptionLong: "Vector TargetingSummon 4 Frost Mages in a line that attack nearby enemies for 47 (+4% / level) damage a second and Slow them by 30% for 2 seconds. Last up to 15 seconds.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 90,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_skeletalmages.png",
      isPassive: false
    },
    {
      id: "NecromancerPoisonNovaInstant",
      name: "Poison Nova",
      descriptionShort: "Poison enemies in a large area",
      descriptionLong: "After 0.5 seconds, release poisonous missiles that deal 630 (+4% / level) damage to all enemies hit over 10 seconds.",
      cost: {
        type: "Mana",
        amount: 100
      },
      cooldown: 90,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_poisonnova.png",
      isPassive: false
    },
    {
      id: "NecromancerSpectralScythe",
      name: "Spectral Scythe",
      descriptionShort: "Throw a scythe that damages enemies as it returns to Xul",
      descriptionLong: "Summon a scythe that travels to Xul after 1 second, dealing 190 (+4% / level) damage to enemies and spawning a Skeletal Warrior when hitting enemy Heroes.  These do not count towards Xul's Raise Skeleton maximum.",
      cost: {
        type: "Mana",
        amount: 55
      },
      cooldown: 8,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_reap.png",
      isPassive: true
    },
    {
      id: "NecromancerCursedStrikesPassive",
      name: "Cursed Strikes",
      descriptionShort: "Basic Attacks deal damage in an area and reduce Attack Speed",
      descriptionLong: "Xul's Basic Attacks deal damage in a wide area and reduce the Attack Speed of Heroes and Summons by 40% for 2 seconds. Lasts 4 seconds once triggered.",
      cooldown: null,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_cursedstrikes_on.png",
      isPassive: true
    }
  ],
  talents: [
    [
      {
        id: "NecromancerTalentBoneArmorBacklash",
        name: "Backlash",
        descriptionShort: "Bone Armor explodes for damage",
        descriptionLong: "When Bone Armor expires, nearby enemy Heroes take damage equal to 12% of their maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_bonearmor_b.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "NecromancerBoneArmor"
        ]
      },
      {
        id: "NecromancerTalentBoneArmorShackler",
        name: "Shackler",
        descriptionShort: "Bone Armor Slows, can reduce cooldown",
        descriptionLong: "While Bone Armor is active, nearby enemies are Slowed by 35% for 1 second. Basic Attacks against Heroes that are Stunned, Rooted, or Slowed reduce the cooldown of Bone Armor by 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_bonearmor_c.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "NecromancerBoneArmor"
        ]
      },
      {
        id: "NecromancerTalentBoneArmorShade",
        name: "Shade",
        descriptionShort: "Bone Armor evades Basic Attacks",
        descriptionLong: "While Bone Armor is active, Xul evades all Basic Attacks, but increases the cooldown of Bone Armor by 10 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_bonearmor.png",
        isPassive: false,
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "NecromancerBoneArmor"
        ]
      }
    ],
    [
      {
        id: "NecromancerTalentReapersToll",
        name: "Reaper's Toll",
        descriptionShort: "Lower Spectral Scythe cooldown, Mana cost",
        descriptionLong: "Reduce the cooldown of Spectral Scythe by 2 seconds and its Mana cost by 15.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_reap.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "NecromancerSpectralScythe"
        ]
      },
      {
        id: "NecromancerTalentGrimScythe",
        name: "Grim Scythe",
        descriptionShort: "Reduce Cursed Strikes cooldown",
        descriptionLong: "Increase Xul's Basic Attack damage by 15%.  Each enemy hit by Cursed Strikes reduces its cooldown by 1 second, up to 12 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_cursedstrikes_off.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "NecromancerCursedStrikesPassive",
          "NecromancerCursedStrikes"
        ]
      },
      {
        id: "NecromancerTalentJailors",
        name: "Jailors",
        descriptionShort: "Quest: Bone Prison spawns Skeletal Warriors",
        descriptionLong: "Bone Prison spawns 2 Skeletal Warriors.  These do not count towards Xul's Raise Skeleton maximum.Quest: Spawn 80 Skeletal Warriors.Reward: While fixating on an enemy, Skeletal Warriors gain 25% Movement and Attack Speed.",
        cooldown: null,
        charges: {
          chargesMax: 3,
          recastCooldown: null
        },
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_raiseskeleton.png",
        isPassive: false,
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "NecromancerRaiseSkeletonDisplayAbility"
        ],
        isQuest: true
      }
    ],
    [
      {
        id: "NecromancerTalentHarvestVitality",
        name: "Harvest Vitality",
        descriptionShort: "Cursed Strikes against Heroes heals",
        descriptionLong: "Cursed Strikes heals for 70% of the damage dealt to Heroes.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_cursedstrikes_off.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "NecromancerCursedStrikesPassive",
          "NecromancerCursedStrikes"
        ]
      },
      {
        id: "NecromancerTalentTragOulsEssence",
        name: "Trag'Oul's Essence",
        descriptionShort: "Skeletal Warrior attacks restore Health, Mana",
        descriptionLong: "Every time a Skeletal Warrior attacks an enemy, restore 0.5% of Xul's maximum Health and 0.2% of his maximum Mana.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_raiseskeleton.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "NecromancerRaiseSkeletonDisplayAbility"
        ]
      },
      {
        id: "NecromancerBoneArmorWallOfBonesTalent",
        name: "Wall Of Bones",
        descriptionShort: "Increase Bone Armor Shield Amount",
        descriptionLong: "Increase the Shield amount of Bone Armor to 35% of Xul's maximum Health, and Xul gains 20 Spell Armor for its duration.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_bonearmor.png",
        isPassive: false,
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "NecromancerBoneArmor"
        ]
      }
    ],
    [
      {
        id: "NecromancerHeroicAbilityPoisonNova",
        name: "Poison Nova",
        descriptionShort: "Poison nearby enemies",
        descriptionLong: "After 0.5 seconds, release poisonous missiles that deal 630 (+4% / level) damage to all enemies hit over 10 seconds.",
        cost: {
          type: "Mana",
          amount: 100
        },
        cooldown: 90,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_poisonnova.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "NecromancerPoisonNovaInstant"
        ]
      },
      {
        id: "NecromancerHeroicAbilitySkeletalMages",
        name: "Skeletal Mages",
        descriptionShort: "Summon Frost Mages to damage and Slow enemies",
        descriptionLong: "Vector TargetingSummon 4 Frost Mages in a line that attack nearby enemies for 47 (+4% / level) damage a second and Slow them by 30% for 2 seconds. Last up to 15 seconds.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 90,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_skeletalmages.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "NecromancerSkeletalMages"
        ]
      }
    ],
    [
      {
        id: "NecromancerTalentEchoesOfDeath",
        name: "Echoes of Death",
        descriptionShort: "Spectral Scythe spawns additional scythes",
        descriptionLong: "Spectral Scythe spawns 2 additional scythes next to the first after 1.5 seconds, dealing 40% damage.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_reap.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "NecromancerSpectralScythe"
        ]
      },
      {
        id: "NecromancerTalentRapidHarvest",
        name: "Rapid Harvest",
        descriptionShort: "Cursed Strikes increases Attack Speed",
        descriptionLong: "Gain 5% Attack Speed for 3 seconds each time Cursed Strikes hits an enemy, up to 75%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_cursedstrikes_off.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "NecromancerCursedStrikesPassive",
          "NecromancerCursedStrikes"
        ]
      },
      {
        id: "NecromancerTalentAmplifyDamage",
        name: "Amplify Damage",
        descriptionShort: "Bone Prison lowers Armor",
        descriptionLong: "Increase the Root duration of Bone Prison by 0.25 seconds.  Enemies Rooted by Bone Prison lose 25 Armor for 2 seconds.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_boneprison.png",
        isPassive: false,
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "NecromancerBonePrison"
        ]
      }
    ],
    [
      {
        id: "NecromancerTalentDecrepify",
        name: "Decrepify",
        descriptionShort: "Spectral Scythe, Skeletal Warriors Slow",
        descriptionLong: "Enemy Heroes that are damaged by Spectral Scythe or Skeletal Warriors are Slowed by 30% for 2.5 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_reap.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "NecromancerRaiseSkeletonDisplayAbility"
        ]
      },
      {
        id: "NecromancerTalentWeaken",
        name: "Weaken",
        descriptionShort: "Cursed Strikes, Skeletal Warriors reduce damage dealt",
        descriptionLong: "Enemy Heroes who are damaged by Cursed Strikes or Skeletal Warriors deal 35% less damage for 3 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_cursedstrikes_off.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "NecromancerCursedStrikesPassive",
          "NecromancerCursedStrikes"
        ]
      },
      {
        id: "NecromancerTalentBoneSpear",
        name: "Bone Spear",
        descriptionShort: "Damage enemies in a line",
        descriptionLong: "Deal 230 (+4% / level) damage to enemies in a line.",
        cooldown: 12,
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_bonespear.png",
        isPassive: false,
        order: 3,
        tier: "level16"
      }
    ],
    [
      {
        id: "NecromancerTalentAndarielsVisage",
        name: "Andariel's Visage",
        descriptionShort: "Increase Poison Nova duration, now heals",
        descriptionLong: "Poison Nova heals for 50% of the damage dealt and its duration is increased by 50%.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_poisonnova.png",
        isPassive: false,
        order: 1,
        tier: "level20",
        linkedAbilityIds: [
          "NecromancerPoisonNovaInstant"
        ],
        prerequisiteTalentIds: [
          "NecromancerHeroicAbilityPoisonNova"
        ]
      },
      {
        id: "NecromancerTalentColdHandOfDeath",
        name: "Cold Hand of Death",
        descriptionShort: "Spectral Scythe spawns Skeletal Mages",
        descriptionLong: "Increase the Slow of Frost Mages by 20%.  Every 5th Spectral Scythe that hits enemy Heroes spawns a Frost Mage instead of a Skeletal Warrior at their location.",
        cooldown: null,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_skeletalmages.png",
        isPassive: false,
        order: 2,
        tier: "level20",
        linkedAbilityIds: [
          "NecromancerSkeletalMages"
        ],
        prerequisiteTalentIds: [
          "NecromancerHeroicAbilitySkeletalMages"
        ]
      },
      {
        id: "NecromancerTalentMortalWound",
        name: "Mortal Wound",
        descriptionShort: "Spectral Scythe reduces healing taken",
        descriptionLong: "Enemy Heroes hit by Spectral Scythe receive 75% less healing for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_reap.png",
        isPassive: false,
        order: 3,
        tier: "level20",
        linkedAbilityIds: [
          "NecromancerSpectralScythe"
        ]
      },
      {
        id: "NecromancerTalentKalansEdict",
        name: "Kalan's Edict",
        descriptionShort: "Skeletal Warriors reduce Heroic cooldown",
        descriptionLong: "Each time Skeletal Warriors deal damage, reduce the cooldown of Bone Armor and Xul's Heroic Ability by 1.5%.",
        cooldown: null,
        category: "Talent",
        type: "Trait",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_necromancer_raiseskeleton.png",
        isPassive: false,
        order: 4,
        tier: "level20",
        linkedAbilityIds: [
          "NecromancerRaiseSkeletonDisplayAbility"
        ]
      }
    ]
  ]
};
      
export default xul;