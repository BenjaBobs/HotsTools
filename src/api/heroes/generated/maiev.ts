import { Hero } from '../heroes';
      
const maiev: Hero = {
  name: "Maiev",
  nameNormalized: "maiev",
  franchise: "Warcraft",
  gender: "Female",
  size: 0.75,
  movementSpeed: 4.8398,
  health: {
    amount: 2021,
    scale: 0.04,
    regenRate: 4.211,
    regenScale: 0.04
  },
  energy: {
    amount: 500,
    regenRate: 3,
    name: "Mana"
  },
  autoAttacks: [
    {
      nameId: "HeroMaievWeapon",
      range: 1.5,
      period: 0.9,
      damage: 145,
      damageScale: 0.04
    }
  ],
  icon: "https://heroespatchnotes.github.io/heroes-talents/images/heroes/maiev.png",
  abilities: [
    {
      id: "MaievVaultOfTheWardens",
      name: "Vault of the Wardens",
      descriptionShort: "Leap into the air, becoming temporarily Immune",
      descriptionLong: "Leap into the air, becoming Immune to all hostile effects for 0.75 seconds.",
      cooldown: 13,
      category: "trait",
      type: "Trait",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_trait.png",
      isPassive: false
    },
    {
      id: "MaievFanOfKnives",
      name: "Fan of Knives",
      descriptionShort: "Throw a volley of knives",
      descriptionLong: "Deal 152 (+4% / level) damage to enemies in a crescent area.Hitting at least 2 enemy Heroes with Fan of Knives reduces its cooldown to 0.5 seconds, and refunds its Mana cost.",
      cost: {
        type: "Mana",
        amount: 30
      },
      cooldown: 4,
      category: "basic",
      type: "Q",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_knives.png",
      isPassive: false
    },
    {
      id: "MaievUmbralBind",
      name: "Umbral Bind",
      descriptionShort: "Tether enemy Heroes to Maiev, pulling those that stray too far",
      descriptionLong: "Maiev's next Basic Attack cleaves and applies a tether to enemy Heroes hit for 2.5 seconds. If a tethered Hero moves too far from Maiev, they are pulled toward her, dealing 110 (+4% / level) damage and breaking the tether.",
      cost: {
        type: "Mana",
        amount: 55
      },
      cooldown: 14,
      category: "basic",
      type: "W",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_umbra_1.png",
      isPassive: false
    },
    {
      id: "MaievSpiritOfVengeance",
      name: "Spirit of Vengeance",
      descriptionShort: "Project a shadow of Maiev that she can later Blink to",
      descriptionLong: "Send a shadow of Maiev outward that will return to its cast location, dealing 150 (+4% / level) damage to enemies along both paths. If an enemy Hero is hit, reduce the cooldown by 4 seconds.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 13,
      category: "basic",
      type: "E",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_rush_1.png",
      isPassive: false
    },
    {
      id: "MaievContainmentDisc",
      name: "Containment Disc",
      descriptionShort: "Time Stop an enemy Hero and remove their vision",
      descriptionLong: "Throw a glaive in the target direction. If an enemy Hero is hit, Containment Disc can be reactivated to remove their vision and Time Stop them for 4 seconds.Containment Disc automatically activates 6 seconds after hitting a Hero.",
      cost: {
        type: "Mana",
        amount: 50
      },
      cooldown: 40,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_heroic_1_a.png",
      isPassive: false
    },
    {
      id: "MaievWardensCage",
      name: "Warden's Cage",
      descriptionShort: "Trap enemies in a cage of Avatars",
      descriptionLong: "Summon 8 Warden Avatars as a cage around Maiev. After 1.5 seconds, enemy Heroes that come in contact with an Avatar consume it and are knocked to the center of the cage. Warden Avatars last 5 seconds.",
      cost: {
        type: "Mana",
        amount: 80
      },
      cooldown: 100,
      category: "heroic",
      type: "Heroic",
      icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_heroic_2.png",
      isPassive: false
    }
  ],
  talents: [
    [
      {
        id: "MaievUmbralBindBondsOfJustice",
        name: "Bonds of Justice",
        descriptionShort: "Quest: Secondary tethers increase Umbral Bind damage",
        descriptionLong: "Quest: Each tether applied to a secondary target of Umbral Bind permanently increases Umbral Bind's pull damage by 15.Reward: After applying 5 tethers to secondary targets, increase Umbral Bind's pull damage by 75.Reward: After applying 10 tethers to secondary targets, increase Umbral Bind's cleave damage by 30%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_umbra_1.png",
        isPassive: false,
        order: 1,
        tier: "level1",
        linkedAbilityIds: [
          "MaievUmbralBindPrimed",
          "MaievUmbralBind"
        ],
        isQuest: true
      },
      {
        id: "MaievUmbralBindPursuitOfVengeance",
        name: "Pursuit of Vengeance",
        descriptionShort: "Reduce Umbral Bind, Spirit of Vengeance cooldown",
        descriptionLong: "Each Hero tethered by Umbral Bind reduces the cooldown of Spirit of Vengeance by 2.5 seconds and each Hero hit by Spirit of Vengeance reduces the cooldown of Umbral Bind by 1 second.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_pursuit_vengeance.png",
        isPassive: false,
        order: 2,
        tier: "level1",
        linkedAbilityIds: [
          "MaievUmbralBindPrimed",
          "MaievUmbralBind"
        ]
      },
      {
        id: "MaievFanOfKnivesNaishasMemento",
        name: "Naisha's Memento",
        descriptionShort: "Activate to make Basic Attacks bounce",
        descriptionLong: "Activate to make primary Basic Attacks bounce between nearby enemies up to 2 times. Lasts 8 seconds.Recharge Naisha's Memento by hitting at least 2 Heroes with a single Fan of Knives.",
        cooldown: null,
        charges: {
          chargesMax: 1,
          chargesInitial: 1,
          chargeCost: 1,
          recastCooldown: null
        },
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_memento.png",
        isPassive: false,
        order: 3,
        tier: "level1",
        linkedAbilityIds: [
          "MaievFanOfKnives"
        ]
      }
    ],
    [
      {
        id: "MaievFanOfKnivesPinDown",
        name: "Pin Down",
        descriptionShort: "Quest: Hitting multiple Heroes empowers Fan of Knives",
        descriptionLong: "Quest: Hit 3 enemy Heroes with a single Fan of Knives.Reward: Increase Fan of Knives damage by 25%.Reward: Each additional time 3 enemy Heroes are hit by a single Fan of Knives, gain an additional 5% damage, up to 40%.Reward: Hit 4 enemy Heroes with a single Fan of Knives to instantly gain all Rewards.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_knives.png",
        isPassive: false,
        order: 1,
        tier: "level4",
        linkedAbilityIds: [
          "MaievFanOfKnives"
        ],
        isQuest: true
      },
      {
        id: "MaievFanOfKnivesBladeDance",
        name: "Blade Dance",
        descriptionShort: "Fan of Knives deals Physical Damage around Maiev",
        descriptionLong: "Using Fan of Knives deals 50 (+4% / level) Physical Damage to enemies around Maiev.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_knives_2.png",
        isPassive: false,
        order: 2,
        tier: "level4",
        linkedAbilityIds: [
          "MaievFanOfKnives"
        ]
      },
      {
        id: "MaievSpiritOfVengeanceSuddenVengeance",
        name: "Sudden Vengeance",
        descriptionShort: "Blink deals area damage",
        descriptionLong: "After blinking with Spirit of Vengeance, the shadow explodes, damaging all nearby enemy Heroes for 6% of their maximum Health.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_rush_2.png",
        isPassive: false,
        order: 3,
        tier: "level4",
        linkedAbilityIds: [
          "MaievSpiritOfVengeanceBlink",
          "MaievSpiritOfVengeance"
        ]
      }
    ],
    [
      {
        id: "MaievFanOfKnivesElunesWrath",
        name: "Elune's Wrath",
        descriptionShort: "Fan of Knives deals more damage after hitting multiple Heroes",
        descriptionLong: "Hitting at least 2 Heroes with a single Fan of Knives causes the next Fan of Knives to drop a star on targets that deals 77 (+4% / level) damage when it impacts.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_knives.png",
        isPassive: false,
        order: 1,
        tier: "level7",
        linkedAbilityIds: [
          "MaievFanOfKnives"
        ]
      },
      {
        id: "MaievUmbralBindBondsOfCorruption",
        name: "Bonds of Corruption",
        descriptionShort: "Umbral Bind pull reduces Armor, Movement Speed",
        descriptionLong: "Enemy Heroes pulled by Umbral Bind have their Armor reduced by 10 and are Slowed by 20% for 4 seconds",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_orb_corruption.png",
        isPassive: false,
        order: 2,
        tier: "level7",
        linkedAbilityIds: [
          "MaievUmbralBindPrimed",
          "MaievUmbralBind"
        ]
      },
      {
        id: "MaievSpiritOfVengeanceRuthlessSpirit",
        name: "Ruthless Spirit",
        descriptionShort: "Enemy Heroes hit increase Maiev's damage",
        descriptionLong: "Each enemy Hero hit by Spirit of Vengeance increases all damage Maiev deals by 15% for 4 seconds, stacking up to 30%.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_rush_1.png",
        isPassive: false,
        order: 3,
        tier: "level7",
        linkedAbilityIds: [
          "MaievSpiritOfVengeanceBlink",
          "MaievSpiritOfVengeance"
        ]
      }
    ],
    [
      {
        id: "MaievContainmentDisc",
        name: "Containment Disc",
        descriptionShort: "Time Stop an enemy Hero and remove their vision",
        descriptionLong: "Throw a glaive in the target direction. If an enemy Hero is hit, Containment Disc can be reactivated to remove their vision and Time Stop them for 4 seconds.Containment Disc automatically activates 6 seconds after hitting a Hero.",
        cost: {
          type: "Mana",
          amount: 50
        },
        cooldown: 40,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_heroic_1_a.png",
        isPassive: false,
        order: 1,
        tier: "level10",
        linkedAbilityIds: [
          "MaievContainmentDisc"
        ]
      },
      {
        id: "MaievWardensCage",
        name: "Warden's Cage",
        descriptionShort: "Trap enemies in a cage of Avatars",
        descriptionLong: "Summon 8 Warden Avatars as a cage around Maiev. After 1.5 seconds, enemy Heroes that come in contact with an Avatar consume it and are knocked to the center of the cage. Warden Avatars last 5 seconds.",
        cost: {
          type: "Mana",
          amount: 80
        },
        cooldown: 100,
        category: "Talent",
        type: "Heroic",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_heroic_2.png",
        isPassive: false,
        order: 2,
        tier: "level10",
        linkedAbilityIds: [
          "MaievWardensCage"
        ]
      }
    ],
    [
      {
        id: "MaievFanOfKnivesBladedArmor",
        name: "Bladed Armor",
        descriptionShort: "Fan of Knives grants Armor",
        descriptionLong: "Each enemy Hero hit by Fan of Knives grants 5 Armor for 5 seconds, up to 20 Armor.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_knives.png",
        isPassive: false,
        order: 1,
        tier: "level13",
        linkedAbilityIds: [
          "MaievFanOfKnives"
        ]
      },
      {
        id: "MaievUmbralBindChainGang",
        name: "Chain Gang",
        descriptionShort: "Multiple Umbral Bind tethers grant Armor",
        descriptionLong: "Tethering at least 2 enemy Heroes with Umbral Bind grants 35 Armor for 4 seconds.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_umbra_1.png",
        isPassive: false,
        order: 2,
        tier: "level13",
        linkedAbilityIds: [
          "MaievUmbralBindPrimed",
          "MaievUmbralBind"
        ]
      },
      {
        id: "MaievSpiritOfVengeanceShadowArmor",
        name: "Shadow Armor",
        descriptionShort: "Blink grants Armor",
        descriptionLong: "Blink grants 20 Armor for 3.5 seconds. Maiev's Basic Attacks against enemy Heroes refresh this duration.",
        cooldown: null,
        category: "Talent",
        type: "E",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_rush_2.png",
        isPassive: false,
        order: 3,
        tier: "level13",
        linkedAbilityIds: [
          "MaievSpiritOfVengeanceBlink",
          "MaievSpiritOfVengeance"
        ]
      }
    ],
    [
      {
        id: "MaievSpiritOfVengeanceVengefulKnives",
        name: "Vengeful Knives",
        descriptionShort: "Dealing damage increases Fan of Knives damage",
        descriptionLong: "Dealing damage to enemy Heroes causes the next cast of Fan of Knives that hits enemy Heroes to deal 1% maximum Health as bonus damage, up to 5%.",
        cooldown: null,
        category: "Talent",
        type: "Q",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_knives.png",
        isPassive: false,
        order: 1,
        tier: "level16",
        linkedAbilityIds: [
          "MaievFanOfKnives"
        ]
      },
      {
        id: "MaievUmbralBindCruelChain",
        name: "Cruel Chain",
        descriptionShort: "Damage Umbral Bind targets to increase pull damage",
        descriptionLong: "Umbral Bind grants 25% Movement Speed for 2.5 seconds. In addition, each time Maiev deals damage to tethered targets, Umbral Bind's pull damage to all targets is increased by 30%, up to 150%.",
        cooldown: null,
        category: "Talent",
        type: "W",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_umbra_1.png",
        isPassive: false,
        order: 2,
        tier: "level16",
        linkedAbilityIds: [
          "MaievUmbralBindPrimed",
          "MaievUmbralBind"
        ]
      },
      {
        id: "MaievArmoredAssault",
        name: "Armored Assault",
        descriptionShort: "Armor increases Physical Damage dealt",
        descriptionLong: "While Maiev has positive Armor of any kind, all Physical Damage dealt is increased by 20%.",
        cooldown: null,
        category: "Talent",
        type: "Passive",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_heavy_strikes.png",
        isPassive: false,
        order: 3,
        tier: "level16"
      }
    ],
    [
      {
        id: "MaievSpiritOfVengeanceShadowOrbVengeance",
        name: "Shadow Orb: Vengeance",
        descriptionShort: "Activate to reset Spirit of Vengeance cooldown",
        descriptionLong: "Activate to reset the cooldown of Spirit of Vengeance.Recharge Shadow Orb by damaging enemy Heroes with Spirit of Vengeance 5 times.",
        cooldown: null,
        charges: {
          chargesMax: 5,
          chargesInitial: 5,
          chargeCost: 5,
          recastCooldown: null
        },
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_shadoworb_vengeance.png",
        isPassive: false,
        order: 1,
        tier: "level20"
      },
      {
        id: "MaievShadowOrbHuntress",
        name: "Shadow Orb: Huntress",
        descriptionShort: "Activate to gain Move Speed, Attack Speed",
        descriptionLong: "Activate to increase Movement Speed and Attack Speed by 40% for 5 seconds.Recharge Shadow Orb by dealing Physical Damage to enemy Heroes 10 times.",
        cooldown: null,
        charges: {
          chargesMax: 10,
          chargesInitial: 10,
          chargeCost: 10,
          recastCooldown: null
        },
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_shadoworb_relentless.png",
        isPassive: false,
        order: 2,
        tier: "level20"
      },
      {
        id: "MaievShadowOrbShadowStrike",
        name: "Shadow Orb: Shadow Strike",
        descriptionShort: "Activate to Slow, reduce Armor",
        descriptionLong: "Activate to deal 75 (+4% / level) damage to an enemy Hero, Slowing them by 30% and reducing their Armor by 20 for 4 seconds.Recharge Shadow Orb by dealing Spell Damage to enemy Heroes 10 times.",
        cooldown: null,
        charges: {
          chargesMax: 10,
          chargesInitial: 10,
          chargeCost: 10,
          recastCooldown: null
        },
        category: "Talent",
        type: "Active",
        icon: "https://heroespatchnotes.github.io/heroes-talents/images/talents/storm_ui_icon_maiev_shadoworb_strike.png",
        isPassive: false,
        order: 3,
        tier: "level20"
      }
    ]
  ]
};
      
export default maiev;