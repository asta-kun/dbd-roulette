// data perks by https://github.com/Nexure/DBD-API
export default class PerksData {
  data: any = {
  "Alert": {
    "associatedPlayerIndex": 8,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Perception"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "3"
      ],
      [
        "4"
      ],
      [
        "5"
      ]
    ],
    "perkDefaultDescription": "Your acute senses are on high alert.<br>When the Killer performs a break action, the Killer is revealed to you for <span class=\"Highlight1\">{0} seconds</span>.<br><span class=\"FlavorText\">“I have true sight.” -Feng Min</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC4/iconPerks_alert.png"
    ],
    "id": "Alert",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Feng"
    ],
    "displayName": "Alert",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Balanced_Landing": {
    "associatedPlayerIndex": 4,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Navigation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "75",
        "150",
        "3",
        "60"
      ],
      [
        "75",
        "150",
        "3",
        "50"
      ],
      [
        "75",
        "150",
        "3",
        "40"
      ]
    ],
    "perkDefaultDescription": "Your agility is incomparable.<br><br>After falling from a height, cat-like reflexes reduce your stagger duration from falling by <span class=\"Highlight1\">{0}%</span> and reduce the volume of grunts from falling by <span class=\"Highlight1\">100%</span>. You start sprinting at <span class=\"Highlight2\">{1}%</span> your normal running speed for a maximum of <span class=\"Highlight3\">{2} seconds</span>.<br><br>Causes the <b>Exhausted</b> status effect for <span class=\"Highlight4\">{3} seconds</span>.<br><br><i>Balanced Landing</i> cannot be used while <b>Exhausted</b>.<br><br>You do not recover from the <b>Exhausted</b> status effect while running.<br><br><span class=\"FlavorText\">\"I've jumped from higher places.\" -Nea</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_balancedLanding.png"
    ],
    "id": "Balanced_Landing",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Nea"
    ],
    "displayName": "Balanced Landing",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "OffTheRecord": {
    "associatedPlayerIndex": 20,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "60",
        "100"
      ],
      [
        "70",
        "100"
      ],
      [
        "80",
        "100"
      ]
    ],
    "perkDefaultDescription": "You’ve learned that a quiet approach is sometimes best. <br><br>Once you are unhooked or escape from the hook, <i>Off the Record</i> activates for <span class=\"Highlight1\">{0} seconds</span>. <br><br>While <i>Off the Record</i> is active, your aura will not be shown to The Killer and grunts of pain caused by injuries are reduced by <span class=\"Highlight2\">{1}%</span>.<br><br><span class=\"FlavorText\">\"Trust me, I investigate thoroughly and discreetly.\" -Zarina Kassir</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Ukraine/iconPerks_offTheRecord.png"
    ],
    "id": "OffTheRecord",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Off the Record",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Autodidact": {
    "associatedPlayerIndex": 13,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Safeguard"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "3",
        "25",
        "15"
      ],
      [
        "4",
        "25",
        "15"
      ],
      [
        "5",
        "25",
        "15"
      ]
    ],
    "perkDefaultDescription": "You start the trial with a <span class=\"Highlight1\">-{1}%</span> progress penalty for Skill Checks to heal Survivors.<br>For every successful Skill Check while healing a Survivor, you receive a Token up to a maximum of <span class=\"Highlight2\">{0} Tokens</span>.<br>Each Token grants you a <span class=\"Highlight1\">+{2}%</span> progress bonus.<br>Great Skill Checks cannot be performed while using Autodidact.<li>Autodidact is not active when using a Med Kit to heal.</li><br><span class=\"FlavorText\">“There’s no limit to what you can achieve, as long as you back it up with hard work.” -Adam Francis</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Haiti/iconPerks_autodidact.png"
    ],
    "id": "Autodidact",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Adam"
    ],
    "displayName": "Autodidact",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Streetwise": {
    "associatedPlayerIndex": 4,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Support"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "15",
        "8",
        "15"
      ],
      [
        "20",
        "8",
        "15"
      ],
      [
        "25",
        "8",
        "15"
      ]
    ],
    "perkDefaultDescription": "Long nights out taught you to do a lot with what you've got. Reduce consumption rate of item charge by <span class=\"Highlight1\">{0}%</span> for you and allies within a <span class=\"Highlight2\">{1} meter</span> range. Once out of range, this effect persists for <span class=\"Highlight4\">{2} seconds.</span><br><span class=\"FlavorText\">\"You're doing it wrong! Let me show you how it's done.\" -Nea</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_streetwise.png"
    ],
    "id": "Streetwise",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Nea"
    ],
    "displayName": "Streetwise",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Rare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Premonition": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Perception"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "36",
        "60"
      ],
      [
        "36",
        "45"
      ],
      [
        "36",
        "30"
      ]
    ],
    "perkDefaultDescription": "You have the undeniable capability to sense danger. Get an auditory warning when looking in the direction of the Killer in a <span class=\"Highlight1\">45 degree</span> cone within a range of <span class=\"Highlight2\">{0} meters</span>. Premonition has a cooldown of <span class=\"Highlight3\">{1} seconds</span> each time it activates.<br><span class=\"FlavorText\">\"I have a bad feeling about this!\"</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_premonition.png"
    ],
    "id": "Premonition",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Survivor"
    ],
    "displayName": "Premonition",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Rare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Camaraderie": {
    "associatedPlayerIndex": 18,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "16",
        "26"
      ],
      [
        "16",
        "30"
      ],
      [
        "16",
        "34"
      ]
    ],
    "perkDefaultDescription": "Life has taught you the importance of friendship which has given you strength.<br><br>While you are on the hook in the struggle phase, <i>Camaraderie</i> activates.<br><br>If another Survivor is within <span class=\"Highlight1\">{0} meters</span> of you while <i>Camaraderie</i> is activated, the hook timer is paused for <span class=\"Highlight2\">{1} seconds</span>.<br><br><span class=\"FlavorText\">\"So, remember once you get in there… pretend like you don’t care. There you go, you’re learning my friend. You’re learning.” -Steve Harrington</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Qatar/iconPerks_camaraderie.png"
    ],
    "id": "Camaraderie",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Camaraderie",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "GeneratorOvercharge": {
    "associatedPlayerIndex": 268435462,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Obstruction"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "3"
      ],
      [
        "4"
      ],
      [
        "5"
      ]
    ],
    "perkDefaultDescription": "You are fuelled by your hate for progress.<br>Overcharge a generator by performing the <b>Damage Generator</b> action. The next Survivor interacting with that generator is faced with a <span class=\"Highlight1\">tremendously</span> difficult Skill Check. Failing the Skill Check results in an additional <span class=\"Highlight2\">{0}%</span> generator regression.<br>Succeeding the Skill Check grants no progress but prevents the generator explosion.<br><span class=\"FlavorText\">\"It is a trap. But a trap one must step in…\" -The Doctor</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC4/iconPerks_generatorOvercharge.png"
    ],
    "id": "GeneratorOvercharge",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Doctor"
    ],
    "displayName": "Overcharge",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "ForThePeople": {
    "associatedPlayerIndex": 20,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "110"
      ],
      [
        "100"
      ],
      [
        "90"
      ]
    ],
    "perkDefaultDescription": "You risk life and injury for others.<br><br><i>For the People</i> is only active while at full health.<br><br>Press the <i>Active Ability button</i> while healing another Survivor without a med kit to instantly heal them from dying to injured, or from injured to healthy.<br><br>You become injured and receive the <b>Broken</b> status effect for <span class=\"Highlight1\">{0} seconds</span>.<br><br>You become the Obsession.<br><br>Equipping this perk <b>decreases</b> your chances to be The Killer’s Obsession at the start of the trial.<br><br><span class=\"FlavorText\">\"We can write our own story and decide how it really ends.\" -Zarina Kassir</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Ukraine/iconPerks_forThePeople.png"
    ],
    "id": "ForThePeople",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "For the People",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "InTheDark": {
    "associatedPlayerIndex": 268435464,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Trickery"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "32"
      ],
      [
        "24"
      ],
      [
        "16"
      ]
    ],
    "perkDefaultDescription": "The trauma caused by your brutal attacks makes crying for help painfully difficult. Dying Survivors' auras are not revealed to other Survivors when they are standing outside of a <span class=\"Highlight1\">{0} meter</span> range.<br><span class=\"FlavorText\">\"Oh, that gun's no good. The old way… with a sledge! You see, that way's better. They die better that way.\" -Nubbins Sawyer</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Cannibal/iconPerks_knockOut.png"
    ],
    "id": "InTheDark",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Knock Out",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Rancor": {
    "associatedPlayerIndex": 268435468,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Tracking"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "5",
        "3"
      ],
      [
        "4",
        "3"
      ],
      [
        "3",
        "3"
      ]
    ],
    "perkDefaultDescription": "You become <b>obsessed</b> with one Survivor.<br>Each time a generator is completed, your obsession (a Survivor) sees your aura for <span class=\"Highlight1\"> {0} seconds</span>.<br>Each time a generator is completed, all Survivors' locations are revealed to you for <span class=\"Highlight2\"> {1} seconds</span>.<br>Once all generators are completed, the Obsession has the <span class=\"Highlight3\">Exposed </span>status effect and you can <span class=\"Highlight3\">kill</span> your obsession.<br><li><i>The Killer can only be <b>obsessed</b> with one survivor at a time.</i></li>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Haiti/iconPerks_hatred.png"
    ],
    "id": "Rancor",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Spirit"
    ],
    "displayName": "Rancor",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "TheMettleOfMan": {
    "associatedPlayerIndex": 16,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Adaptation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "3",
        "12"
      ],
      [
        "3",
        "14"
      ],
      [
        "3",
        "16"
      ]
    ],
    "perkDefaultDescription": "Evil has a way of always finding you.<br><br>After you earn <span class=\"Highlight1\">{0} </span>Protection Hit scoring events, <i>Mettle of Man</i> activates. <br><br>Once activated, the next occasion that would put you into the <b>dying state</b> from the <b>injured state</b> is ignored.<br><br>The next time you heal back to full health, your aura will be revealed to the killer when you are further than <span class=\"Highlight2\">{1} meters</span> from the killer.<br><br><i>Mettle of Man</i> will deactivate the next time you are put into the dying state.<br><i><li>Increases your chances to be the Killer’s Obsession.</li><br><li>The Killer can only be <b>obsessed</b> with one survivor at a time.</li></i><br><br><span class=\"FlavorText\">\"Evil has a bullseye on my back the size of Tiger Stadium.\" -Ash Williams</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Ash/iconPerks_mettleOfMan.png"
    ],
    "id": "TheMettleOfMan",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Mettle of Man",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Last_Standing": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      
    ],
    "perkDefaultDescription": "",
    "perkLevel1Description": "For each Survivor escaped or killed, your action speed is increased by 7%.",
    "perkLevel2Description": "For each survivor escaped or killed, your action speed is increased by 15%.",
    "perkLevel3Description": "For each survivor escaped or killed, your action speed is increased by 25%.",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_lastStanding.png"
    ],
    "id": "Last_Standing",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Survivor",
      "Disabled"
    ],
    "displayName": "Last Standing",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": false,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": false
  },
  "Unnerving_Presence": {
    "associatedPlayerIndex": 268435456,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Hinderance"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "10",
        "40"
      ],
      [
        "10",
        "50"
      ],
      [
        "10",
        "60"
      ]
    ],
    "perkDefaultDescription": "Your presence alone instills great fear. Survivors within your Terror Radius have a <span class=\"Highlight1\">{0}%</span> greater chance of triggering Skill Checks when repairing, healing, or sabotaging. Triggered Skill Checks' success zones are reduced by <span class=\"Highlight2\">{1}%</span>.<br><span class=\"FlavorText\">\"Its presence befalls us.\"</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_unnervingPresence.png"
    ],
    "id": "Unnerving_Presence",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Chuckles"
    ],
    "displayName": "Unnerving Presence",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::VeryRare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Gearhead": {
    "associatedPlayerIndex": 268435474,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "2",
        "20"
      ],
      [
        "2",
        "25"
      ],
      [
        "2",
        "30"
      ]
    ],
    "perkDefaultDescription": "You’ve got an ear for well-oiled gears.<br><br>After hitting a Survivor <span class=\"Highlight1\">{0}</span> times with your <i>basic attack</i>, <i>Gearhead</i> activates for <span class=\"Highlight2\">{1} seconds</span>.<br><br>Each time a Survivor completes a Good Skill Check while repairing, the generator will be revealed by a yellow aura for as long as it is being repaired.<br><br><span class=\"FlavorText\">\"Sometimes a man's best work is what puts him in the grave.\" -The prison warden</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Ukraine/iconPerks_gearHead.png"
    ],
    "id": "Gearhead",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Gearhead",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Small_Game": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Perception"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "8",
        "15"
      ],
      [
        "10",
        "12"
      ],
      [
        "12",
        "10"
      ]
    ],
    "perkDefaultDescription": "You have the undeniable capability to sense danger. Get an auditory warning when looking in the direction of Killer Traps and totems in a <span class=\"Highlight1\">45-degree</span> cone within a range of <span class=\"Highlight2\">{0} meters</span>. Small Game has a cooldown of <span class=\"Highlight3\">{1} seconds</span> each time it activates.<br><i>Only works on traps that are set by Killers.</i><br><span class=\"FlavorText\">\"Nope.\" -Lost Tapes: Andy</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_smallGame.png"
    ],
    "id": "Small_Game",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Survivor"
    ],
    "displayName": "Small Game",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Rare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "FireUp": {
    "associatedPlayerIndex": 268435465,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Enhancement"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "3"
      ],
      [
        "3.5"
      ],
      [
        "4"
      ]
    ],
    "perkDefaultDescription": "The increased pressure of losing your prey fills you with anger and gives you unsuspected motivation. Each time the Survivors complete repairs on a generator, Fire Up grows in power.<br><li>For each generator completed, gain a <span class=\"Highlight1\">{0}%</span> stackable buff that grants a speed bonus to picking up, dropping, vaulting, damaging generators, and breaking pallets and breakables for the remainder of the trial.</li>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "The increased pressure of losing your prey fills you with anger and gives you unsuspected motivation. Each time the Survivors complete repairs on a generator, Fire Up grows in power.<br><li>For each generator completed, gain a <span class=\"Highlight1\">{0}%</span> stackable buff that grants a speed bonus to picking up, dropping, vaulting, damaging generators, and breaking pallets and breakables for the remainder of the trial.</li>",
    "iconPathList": [
      "/perks/England/iconPerks_fireUp.png"
    ],
    "id": "FireUp",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Fire Up",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Uncommon",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Hex_The_Third_Seal": {
    "associatedPlayerIndex": 268435460,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Cruelty"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "2"
      ],
      [
        "3"
      ],
      [
        "4"
      ]
    ],
    "perkDefaultDescription": "A Hex that hinders one's aura reading ability. Hitting a Survivor with a <i>basic attack</i> while the Hex Totem is active applies the <b>Blindness</b> status effect. This effect applies to the last <span class=\"Highlight1\">{0}</span> Survivors hit.<br><i>The Hex effects persist as long as the related Hex Totem is standing.</i><br><span class=\"FlavorText\">“She touched your skin, you bear the witch's mark!”</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC3/iconPerks_theThirdSeal.png"
    ],
    "id": "Hex_The_Third_Seal",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Hag"
    ],
    "displayName": "Hex: The Third Seal",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Uncommon",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Prove_Thyself": {
    "associatedPlayerIndex": 0,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Strategy",
      "EPerkCategory::Support"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "10",
        "4",
        "50"
      ],
      [
        "10",
        "4",
        "75"
      ],
      [
        "10",
        "4",
        "100"
      ]
    ],
    "perkDefaultDescription": "For every other Survivor working on a generator within a <span class=\"Highlight2\">{1} meter</span> range, gain <span class=\"Highlight1\">{0}%</span> repair speed bonus. This same bonus is also applied to all other Survivors within range.<br>Gain <span class=\"Highlight3\">{2}%</span> more Bloodpoints for coop actions.<br>Survivors can only be affected by one Prove Thyself effect at a time.<br><span class=\"FlavorText\">\"Show me what you can do!\" -Dwight</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_proveThyself.png"
    ],
    "id": "Prove_Thyself",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Dwight"
    ],
    "displayName": "Prove Thyself",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::VeryRare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Agitation": {
    "associatedPlayerIndex": 268435456,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Enhancement"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "6",
        "12"
      ],
      [
        "12",
        "12"
      ],
      [
        "18",
        "12"
      ]
    ],
    "perkDefaultDescription": "You get excited in anticipation of hooking your prey. Increases your movement speed while transporting bodies by <span class=\"Highlight1\">{0}%</span>. While transporting a body, your Terror Radius is increased by <span class=\"Highlight2\">{1} meters</span>.<br><span class=\"FlavorText\">\"At some point, the excitement of hooking one of us becomes more important than the desire to kill us.\"</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_agitation.png"
    ],
    "id": "Agitation",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Chuckles"
    ],
    "displayName": "Agitation",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Rare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Urban_Evasion": {
    "associatedPlayerIndex": 4,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Navigation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "90"
      ],
      [
        "95"
      ],
      [
        "100"
      ]
    ],
    "perkDefaultDescription": "Years of evading the cops taught you a thing or two about stealth. Your movement speed while crouching is increased by <span class=\"Highlight1\">{0}%</span>.<br><span class=\"FlavorText\">\"The paint is still fresh but I'm long gone.\" -Nea</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_urbanEvasion.png"
    ],
    "id": "Urban_Evasion",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Nea"
    ],
    "displayName": "Urban Evasion",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Uncommon",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Lithe": {
    "associatedPlayerIndex": 8,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Navigation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "150",
        "3",
        "60"
      ],
      [
        "150",
        "3",
        "50"
      ],
      [
        "150",
        "3",
        "40"
      ]
    ],
    "perkDefaultDescription": "After performing a <b>rushed</b> vault, break into a sprint at <span class=\"Highlight1\">{0}%</span> of your normal running speed for a maximum of <span class=\"Highlight2\">{1} seconds</span>. <br>Causes the <i>Exhausted</i> status effect for <span class=\"Highlight4\">{2} seconds</span>.<br><i>Lithe</i> cannot be used while <i>Exhausted</i>.<br>You do not recover from the <i>Exhausted</i> status effect while running.<br><span class=\"FlavorText\">“U mad?” -Feng Min</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC4/iconPerks_lithe.png"
    ],
    "id": "Lithe",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Feng"
    ],
    "displayName": "Lithe",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "DetectivesHunch": {
    "associatedPlayerIndex": 12,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Perception"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "32",
        "10"
      ],
      [
        "48",
        "10"
      ],
      [
        "64",
        "10"
      ]
    ],
    "perkDefaultDescription": "Unlocks potential in one's aura reading ability. When a generator is completed, the auras of generators, chests and totems within <span class=\"Highlight1\">{0} meters</span> are revealed to you for <span class=\"Highlight2\">{1} seconds</span>.<br>If you are holding a map that can track objectives, generators, chests and totems revealed by <i>Detective's Hunch</i> are added to the map.<br><span class=\"FlavorText\">\"Are you able to tell us where you were last night?\" -Detective David Tapp</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Finland/iconPerks_detectivesHunch.png"
    ],
    "id": "DetectivesHunch",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Detective's Hunch",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_None",
    "rarity": "EItemRarity::Uncommon",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Kindred": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Perception"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "8"
      ],
      [
        "12"
      ],
      [
        "16"
      ]
    ],
    "perkDefaultDescription": "Unlocks potential in one's aura reading ability. While you are on the hook, all Survivor's auras are revealed to all other Survivors. If The Killer is within a <span class=\"Highlight1\">{0} meter</span> range, The Killer's aura is revealed to all other Survivors.<br><br>While a Survivor other than you is on the hook, all other Survivors’ auras are revealed to you. If The Killer is within a <span class=\"Highlight1\">{0} meter</span> range of the hooked Survivor, The Killer's aura is revealed to you.<span class=\"FlavorText\">“Be kind to one another. We’re all in this together.” -Lost Tapes: Sujan</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_kindred.png"
    ],
    "id": "Kindred",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Kindred",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Breakout": {
    "associatedPlayerIndex": 19,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "6",
        "5",
        "20"
      ],
      [
        "6",
        "6",
        "20"
      ],
      [
        "6",
        "7",
        "20"
      ]
    ],
    "perkDefaultDescription": "You kick into high gear when someone’s in trouble, inspiring them to overcome any obstacle.<br><br>When within <span class=\"Highlight1\">{0} meters</span> of a carried Survivor, you gain the <span class=\"Highlight2\">Haste</span> status effect, moving at <span class=\"Highlight3\">{1}%</span> increased speed. The carried Survivor’s wiggle speed is increased by <span class=\"Highlight4\">{2}%</span>.<br><br><span class=\"FlavorText\">“Come, we’re going to rip our way out of this.” -Yui Kimura </span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Sweden/iconPerks_breakout.png"
    ],
    "id": "Breakout",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Breakout",
    "description": "You kick into high gear when someone’s in trouble, inspiring them to overcome any obstacle.<br><br>When within <span class=\"Highlight1\">{0} meters</span> of a carried Survivor, you gain the <span class=\"Highlight2\">Haste</span> status effect, moving at <span class=\"Highlight3\">{1}%</span> increased speed. The carried Survivor’s wiggle speed is increased by <span class=\"Highlight4\">{2}%</span>.<br><br><span class=\"FlavorText\">“Come, we’re going to rip our way out of this.” -Yui Kimura </span>",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Aftercare": {
    "associatedPlayerIndex": 14,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Perception"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "1",
        "1"
      ],
      [
        "2",
        "2"
      ],
      [
        "3",
        "3"
      ]
    ],
    "perkDefaultDescription": "Unlocks potential in one's aura-reading ability.<br><br>You see the aura of every Survivor that:<br><li>You rescue from a hook, or rescues you from a hook;</li><li>You complete a healing action on, or completes a healing action on you.</li><br>They also see your aura.<br><br>This occurs for up to <span class=\"Highlight1\">{0} Survivors</span>. All effects of <i>Aftercare</i> are reset when you are hooked by The Killer.<br><br><span class=\"FlavorText\">“A Mercy that Rips the Storm.”<br>Oil work to honor my best buddies who happen to be the best musicians I know. Their first album is still my favorite. It got me through a dark time in my life. –Jeff, oil on canvas, 16x16</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Kenya/iconPerks_aftercare.png"
    ],
    "id": "Aftercare",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Aftercare",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "DeadMansSwitch": {
    "associatedPlayerIndex": 268435474,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "35"
      ],
      [
        "40"
      ],
      [
        "45"
      ]
    ],
    "perkDefaultDescription": "You become <b>obsessed</b> with one Survivor.<br><br>After hooking the Obsession, <i>Dead Man’s Switch</i> activates for the next <span class=\"Highlight1\">{0} seconds</span>. <br><br>While activated, any Survivor that stops repairing a generator before it is fully repaired causes The Entity to block the generator until <i>Dead Man’s Switch's</i> effect ends. <br><br>Affected generators are highlighted by a white aura.<br><br><i>The Killer can only be <b>obsessed</b> with one survivor at a time.</i><br><br><span class=\"FlavorText\">\"I've seen the look on a man's face when he realizes he's going to die.\" -Caleb Quinn</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Ukraine/iconPerks_deadManSwitch.png"
    ],
    "id": "DeadMansSwitch",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Dead Man’s Switch\t",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Fixated": {
    "associatedPlayerIndex": 17,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "10"
      ],
      [
        "15"
      ],
      [
        "20"
      ]
    ],
    "perkDefaultDescription": "When you have a goal in mind, there’s no turning back: better to ask forgiveness than permission. <br><br>You can see your own scratch marks at all times.<br><br>While uninjured, you walk <span class=\"Highlight1\">{0}%</span> faster.<br><br><span class=\"FlavorText\">\"I wanna finish what we started. I want to kill it.\" -Nancy Wheeler</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Qatar/iconPerks_fixated.png"
    ],
    "id": "Fixated",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Fixated",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Distressing": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Trickery"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "22",
        "100"
      ],
      [
        "24",
        "100"
      ],
      [
        "26",
        "100"
      ]
    ],
    "perkDefaultDescription": "Your horrifying emanation strikes at a supernaturally long distance. Your Terror Radius is increased by <span class=\"Highlight1\">{0}%</span>. Gain <span class=\"Highlight2\">{1}%</span> more Bloodpoints for actions in the Deviousness category.<br><span class=\"FlavorText\">\"Bask in their fear.\"</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_distressing.png"
    ],
    "id": "Distressing",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Killer"
    ],
    "displayName": "Distressing",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Rare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Iron_Will": {
    "associatedPlayerIndex": 3,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Concealment"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "50"
      ],
      [
        "75"
      ],
      [
        "100"
      ]
    ],
    "perkDefaultDescription": "You're able to concentrate and enter a meditative-like state to numb some pain. Grunts of pain caused by injuries are reduced by <span class=\"Highlight1\">{0}%</span>.",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_ironWill.png"
    ],
    "id": "Iron_Will",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Jake"
    ],
    "displayName": "Iron Will",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "DarkDevotion": {
    "associatedPlayerIndex": 268435470,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Trickery"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "32",
        "20",
        "",
        ""
      ],
      [
        "32",
        "25",
        "",
        ""
      ],
      [
        "32",
        "30",
        "",
        ""
      ]
    ],
    "perkDefaultDescription": "The display of your Powers creates a whirlwind of panic that spreads throughout the land.<br><br>You become obsessed with one Survivor. Hitting the Obsession with a <i>basic attack</i> causes the Obsession to emit a Terror Radius of <span class=\"Highlight1\">{0} metres</span> for <span class=\"Highlight2\">{1} seconds</span>. You are granted the <b>Undetectable</b> status effect for the duration.<br><br>The Obsession hears the Terror Radius they emit for the duration.<br><li><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i></li><br><br><span class=\"FlavorText\">“And terror shall take hold of a defiant non-believer, who shall falsely announce my arrival.” (The Tablet of Adiris, 48.9)</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Mali/iconPerks_darkDevotion.png"
    ],
    "id": "DarkDevotion",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Dark Devotion",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Bitter_Murmur": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Tracking"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "16",
        "5",
        "5"
      ],
      [
        "16",
        "5",
        "7"
      ],
      [
        "16",
        "5",
        "10"
      ]
    ],
    "perkDefaultDescription": "Unlocks potential in one's aura reading ability. Each time a generator is fully repaired, survivors within <span class=\"Highlight1\">{0} meters</span> of the completed generator will be revealed for <span class=\"Highlight2\">{1} seconds</span>.<br>When the last generator is fully repaired, all the survivors auras are revealed for <span class=\"Highlight3\">{2} seconds</span>.",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_bitterMurmur.png"
    ],
    "id": "Bitter_Murmur",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Killer"
    ],
    "displayName": "Bitter Murmur",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::UltraRare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "RememberMe": {
    "associatedPlayerIndex": 268435465,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Obstruction"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "4",
        "8"
      ],
      [
        "4",
        "12"
      ],
      [
        "4",
        "16"
      ]
    ],
    "perkDefaultDescription": "You become <b>obsessed</b> with one Survivor. Each time you hit your Obsession with a <i>basic attack</i>, you increase the opening time of the Exit Gates by <span class=\"Highlight1\">{0} seconds</span> up to a maximum of <span class=\"Highlight2\">{1} additional seconds</span>.<br>The Obsession is not affected by <i>Remember Me.<i></i><br><li>The Killer can only be <b>obsessed</b> with one survivor at a time.</i></li>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "You become <b>obsessed</b> with one Survivor. Each time you hit your obsession, you increase the opening time of the Exit Gates by <span class=\"Highlight1\">{0} seconds</span> up to a maximum of <span class=\"Highlight2\">{1} additional seconds</span>.<br>The Obsession is not affected by <i>Remember Me.</i><br><li><i>The Killer can only be <b>obsessed</b> with one survivor at a time.</i></li>",
    "iconPathList": [
      "/perks/England/iconPerks_rememberMe.png"
    ],
    "id": "RememberMe",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Remember Me",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Uncommon",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "IronMaiden": {
    "associatedPlayerIndex": 268435469,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Tracking",
      "EPerkCategory::Trickery"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "30",
        "4",
        "15"
      ],
      [
        "40",
        "4",
        "15"
      ],
      [
        "50",
        "4",
        "15"
      ]
    ],
    "perkDefaultDescription": "You open lockers <span class=\"Highlight1\">{0}%</span> faster.<br><br>Survivors who exit lockers suffer from the Exposed status effect for <span class=\"Highlight1\">{2} seconds</span> and their location is revealed for <span class=\"Highlight1\">{1} seconds</span>.<br><br><span class=\"FlavorText\">“This is no place for cowards.” -The Legion</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Kenya/iconPerks_ironMaiden.png"
    ],
    "id": "IronMaiden",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Iron Maiden",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Breakdown": {
    "associatedPlayerIndex": 14,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Adaptation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "4"
      ],
      [
        "5"
      ],
      [
        "6"
      ]
    ],
    "perkDefaultDescription": "Any time you are removed from a hook (escaped or saved), the hook breaks and the Killer's aura is shown to you for <span class=\"Highlight1\">{0} seconds</span>.<br><br><span class=\"FlavorText\">“Charge from the Belly of the Beast.”<br>Here's a sketch/painting on a piece of wood I saw by the side of the road. I felt like it got a story to tell. And it didn’t waste its second chance. –Jeff, ink and oil wash on slice of wood, 12x16</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Kenya/iconPerks_breakdown.png"
    ],
    "id": "Breakdown",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Breakdown",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "AnyMeansNecessary": {
    "associatedPlayerIndex": 19,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "4",
        "140"
      ],
      [
        "4",
        "130"
      ],
      [
        "4",
        "120"
      ]
    ],
    "perkDefaultDescription": "You stand up for yourself, using whatever’s on hand to gain an advantage.<br><br>Press and hold the <i>Active Ability button</i> for <span class=\"Highlight1\">{0} seconds</span> while standing beside a dropped pallet to reset it to its upright position.<br><br><i>Any Means Necessary</i> has a cooldown of <span class=\"Highlight2\">{1} seconds</span>.<br><br><span class=\"FlavorText\">“I’ll hit you with everything I’ve got. Then I’ll do it again.” -Yui Kimura </span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Sweden/iconPerks_anyMeansNecessary.png"
    ],
    "id": "AnyMeansNecessary",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Any Means Necessary",
    "description": "You stand up for yourself, using whatever’s on hand to gain an advantage.<br><br>Press and hold the <i>Active Ability button</i> for <span class=\"Highlight1\">{0} seconds</span> while standing beside a dropped pallet to reset it to its upright position.<br><br><i>Any Means Necessary</i> has a cooldown of <span class=\"Highlight2\">{1} seconds</span>.<br><br><span class=\"FlavorText\">“I’ll hit you with everything I’ve got. Then I’ll do it again.” -Yui Kimura </span>",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "LeftBehind": {
    "associatedPlayerIndex": 7,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Strategy",
      "EPerkCategory::Adaptation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "24"
      ],
      [
        "28"
      ],
      [
        "32"
      ]
    ],
    "perkDefaultDescription": "Unlocks potential in one's aura reading ability.<br>If you are the last Survivor remaining in the Trial, you can see the aura of the Hatch within a <span class=\"Highlight1\">{0} meter</span> range.<br><span class=\"FlavorText\">\"I'm not horseshittin' around. I'm doing this alone!\" -Bill</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/L4D/iconPerks_leftBehind.png"
    ],
    "id": "LeftBehind",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Survivor"
    ],
    "displayName": "Left Behind",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "BBQAndChilli": {
    "associatedPlayerIndex": 268435464,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Tracking"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "4",
        "40",
        "25",
        "50"
      ],
      [
        "4",
        "40",
        "25",
        "75"
      ],
      [
        "4",
        "40",
        "25",
        "100"
      ]
    ],
    "perkDefaultDescription": "A deep bond with The Entity unlocks potential in one's aura reading ability. After hooking a Survivor, all other Survivors' auras are revealed to you for <span class=\"Highlight1\">{0} seconds</span> when they are further than <span class=\"Highlight2\">{1} meters</span> from the hook.<br><li>Each time that a Survivor is hooked for the first time, gain a <span class=\"Highlight3\">{2}%</span> stackable bonus to all bloodpoint gains up to a maximum of <span class=\"Highlight4\">{3}%</span>.<br>The bonus Bloodpoints are only awarded post-trial.</li><br><span class=\"FlavorText\">\"I just can't take no pleasure in killing. There's just some things you gotta do. Don't mean you have to like it.\" -Drayton Sawyer</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Cannibal/iconPerks_BBQAndChili.png"
    ],
    "id": "BBQAndChilli",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Barbecue & Chili",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Rare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "HangmansTrick": {
    "associatedPlayerIndex": 268435466,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Obstruction"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "2"
      ],
      [
        "4"
      ],
      [
        "6"
      ]
    ],
    "perkDefaultDescription": "Your ingenious modifications to Hooks alert you of tampering.<br><li>Gain a notification when a Survivor begins sabotaging a hook.</li><li>While carrying a Survivor, see the aura of any Survivor within <span class=\"Highlight1\">{0} meters</span> of a hook.</li><br><span class=\"FlavorText\">\"No excuses, no equivocations… No crying.\" -Amanda Young</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Finland/iconPerks_hangmansTrick.png"
    ],
    "id": "HangmansTrick",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Hangman's Trick",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Uncommon",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Dark_Sense": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Perception"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "5",
        "5"
      ],
      [
        "5",
        "7"
      ],
      [
        "5",
        "10"
      ]
    ],
    "perkDefaultDescription": "Unlocks potential in one's aura reading ability. Each time a Generator is completed, The Killer's aura is revealed to you for <span class=\"Highlight1\">{0} seconds</span>.<br>When the last generator is powered the killer's aura is revealed to you for <span class=\"Highlight2\">{1} seconds</span>.<br><span class=\"FlavorText\">\"Take it from an old-timer: Slow down, don't rush and try not to worry so much! The best way to beat him is to know how he thinks.\" -Lost Tapes: Murf</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_darkSense.png"
    ],
    "id": "Dark_Sense",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Survivor"
    ],
    "displayName": "Dark Sense",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::UltraRare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Mindbreaker": {
    "associatedPlayerIndex": 268435472,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "50",
        "1"
      ],
      [
        "50",
        "2"
      ],
      [
        "50",
        "3"
      ]
    ],
    "perkDefaultDescription": "Your distressing presence drains and weakens your prey.<br><br>While repairing generators with less than <span class=\"Highlight1\">{0}%</span> repair progression, Survivors are afflicted by the <b>Exhausted</b> status effect.<br><br>Any existing <b>Exhausted</b> status effect timers are paused while the Survivor is repairing a Generator. After ending the repair action, the Survivor is afflicted by the <b>Exhausted</b> status effect for <span class=\"Highlight2\">{1} second(s)</span>.<br><br><span class=\"FlavorText\">\"The specimen's apparent telepathic ability can evoke feelings of dread and fatigue in nearby individuals.\" -Hawkins National Laboratory</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Qatar/iconPerks_mindBreaker.png"
    ],
    "id": "Mindbreaker",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Mindbreaker",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_None",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "ObjectOfObsession": {
    "associatedPlayerIndex": 5,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Perception"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "56",
        "44"
      ],
      [
        "64",
        "56"
      ],
      [
        "72",
        "64"
      ]
    ],
    "perkDefaultDescription": "A supernatural bond links you to the Killer. If you are looking in the Killer’s direction, your link will reveal your auras to each other. This effect applies only if you are outside the Killer’s Terror Radius.<br>As the Killer’s obsession, this effect applies to a maximum range of <span class=\"Highlight1\">{0} meters</span>. Otherwise, it applies to a maximum range of <span class=\"Highlight1\">{1} meters</span>.<br><i><li>Increases your chances of being the Killer’s obsession.</li><li>The Killer can only be <b>obsessed</b> with one survivor at a time.</li></i><br><span class=\"FlavorText\">“He was watching me!” -Laurie Strode</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC2/iconPerks_objectOfObsession.png"
    ],
    "id": "ObjectOfObsession",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Laurie"
    ],
    "displayName": "Object of Obsession",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Rare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Whispers": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Tracking"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "48"
      ],
      [
        "40"
      ],
      [
        "32"
      ]
    ],
    "perkDefaultDescription": "You have a rudimentary understanding of The Entity's voice. Sporadically hear The Entity's whisper when standing within a <span class=\"Highlight1\">{0} meter</span> range of a Survivor.<br><span class=\"FlavorText\">\"It's unclear as to the motivations of The Fog, but it is undeniable that it often takes the beast's side.\" -Notebook</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_whispers.png"
    ],
    "id": "Whispers",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Killer"
    ],
    "displayName": "Whispers",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::UltraRare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Surge": {
    "associatedPlayerIndex": 268435472,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "32",
        "8",
        "60"
      ],
      [
        "32",
        "8",
        "50"
      ],
      [
        "32",
        "8",
        "40"
      ]
    ],
    "perkDefaultDescription": "Your eerie presence charges the air and interferes with technology.<br><br>Putting a Survivor into the dying state with a <i>basic attack</i> causes all generators within a <span class=\"Highlight1\">{0} meter radius</span> to instantly explode and regress. This applies an additional regression of <span class=\"Highlight2\">{1}%</span>.<li><i>Surge</i> can only be triggered once every  <span class=\"Highlight3\">{2} seconds</span>.</li><br><br><span class=\"FlavorText\">“The creature appears to have some unknown influence over electricity and nearby electronics.” -Hawkins National Laboratory</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Qatar/iconPerks_surge.png"
    ],
    "id": "Surge",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Surge",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_None",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Distortion": {
    "associatedPlayerIndex": 14,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Concealment"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "3",
        "6"
      ],
      [
        "3",
        "8"
      ],
      [
        "3",
        "10"
      ]
    ],
    "perkDefaultDescription": "You start the trial with <span class=\"Highlight1\">{0} Tokens</span>.<br><br>When your aura would be shown to The Killer, <i>Distortion</i> activates and a token is consumed.<br><br>For the next <span class=\"Highlight1\">{1} seconds</span> while <i>Distortion</i> is activated, your aura and scratch marks will not be shown to The Killer.<li><i>Distortion</i> does not activate when you are in dying state or in a trap.</li><br><br><span class=\"FlavorText\">“Death Fooled by the Cloak of Falcon Feathers.”<br>Sketch inspired by a few sleepless nights during winter. Exploration of Norse mythology: bravery can conceal your flaws, even when you are at your most vulnerable. –Jeff, pencil on toned paper, 12x12</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Kenya/iconPerks_distortion.png"
    ],
    "id": "Distortion",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Distortion",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Lightborn": {
    "associatedPlayerIndex": 268435458,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Enhancement"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "60",
        "50"
      ],
      [
        "70",
        "50"
      ],
      [
        "80",
        "50"
      ]
    ],
    "perkDefaultDescription": "Unlike other beasts of The Fog, you have adapted to light. Resistance to blindness is increased by <span class=\"Highlight2\">{0}%</span>. Recovery from the blindness is increased by <span class=\"Highlight3\">{1}%</span>.<br><span class=\"FlavorText\">\"These monsters… they adapt! They emerge with strange new abilities.\" -Vigo's Journal</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_lightborn.png"
    ],
    "id": "Lightborn",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "HillBilly"
    ],
    "displayName": "Lightborn",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Plunderers_Instinct": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Perception"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "16"
      ],
      [
        "24"
      ],
      [
        "32"
      ]
    ],
    "perkDefaultDescription": "Unlocks potential in one's aura reading ability. The auras of unopened chests and items in the environment are revealed to you when standing within a <span class=\"Highlight1\">{0} meter</span> range. Grants a <b>considerably</b> better chance at finding an item of higher rarity from chests.<br><span class=\"FlavorText\">\"The pioneers used to loot these babies for hours.\" -Lost Tapes: Aizeyu</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_plunderersInstinct.png"
    ],
    "id": "Plunderers_Instinct",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Survivor"
    ],
    "displayName": "Plunderer's Instinct",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Brutal_Strength": {
    "associatedPlayerIndex": 268435456,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Enhancement"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "10"
      ],
      [
        "15"
      ],
      [
        "20"
      ]
    ],
    "perkDefaultDescription": "Your great strength allows you to shred through your prey's defenses. Destroy dropped <b>pallets, breakable walls, and generators</b> <span class=\"Highlight1\">{0}%</span> faster.<br><span class=\"FlavorText\">\"It's more than muscles. A dark power motivates the beast.\"</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_brutalStrength.png"
    ],
    "id": "Brutal_Strength",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Chuckles"
    ],
    "displayName": "Brutal Strength",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Rare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Hex_HuntressLullaby": {
    "associatedPlayerIndex": 268435463,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Obstruction"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "2"
      ],
      [
        "4"
      ],
      [
        "6"
      ]
    ],
    "perkDefaultDescription": "A Hex rooting its power in despair. Your hunt is an irresistible song of dread which muddles your prey's attention. Survivors receive a <span class=\"Highlight1\">{0}%</span> regression penalty when missing any Skill Check.<br>Each time a Survivor is hooked, Huntress Lullaby grows in power:<br><li><b>1 to 4 Tokens:</b> Time between the Skill Check warning sound and the Skill Check becomes shorter.</li><li><b>5 Tokens:</b> No Skill Check warning.</li><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC5/iconPerks_HuntressLullaby.png"
    ],
    "id": "Hex_HuntressLullaby",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Hex: Huntress Lullaby",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "BloodWarden": {
    "associatedPlayerIndex": 268435465,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Trickery",
      "EPerkCategory::Obstruction"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "30"
      ],
      [
        "40"
      ],
      [
        "60"
      ]
    ],
    "perkDefaultDescription": "As soon as an Exit Gate is opened, Blood Warden is activated. The auras of any Survivors located within Exit areas are revealed to you. <br>Once per match, hooking a Survivor while Blood Warden is active calls upon The Entity to block both Exits for all Survivors for <span class=\"Highlight1\">{0} seconds</span>.",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "As soon as an Exit Gate is opened, Blood Warden is activated. The auras of any Survivors located within Exit areas are revealed to you. <br>Once per match, hooking a Survivor while Blood Warden is active calls upon The Entity to block both Exits for all Survivors for <span class=\"Highlight1\">{0} seconds</span>.",
    "iconPathList": [
      "/perks/England/iconPerks_bloodWarden.png"
    ],
    "id": "BloodWarden",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Blood Warden",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Uncommon",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "InnerStrength": {
    "associatedPlayerIndex": 17,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "10"
      ],
      [
        "9"
      ],
      [
        "8"
      ]
    ],
    "perkDefaultDescription": "You look inward and trust your instincts when you feel lost and alone.<br><br>Each time you complete a totem cleanse action, <i>Inner Strength</i> activates. If you are already afflicted by the <b>Broken</b> status effect, <i>Inner Strength</i> does not activate.<br><br>While <i>Inner Strength</i> is active, hiding inside a locker for <span class=\"Highlight1\">{0} seconds</span> while injured automatically heals you from injured to healthy.<br><br><i>Inner Strength</i> becomes deactivated as soon as it has successfully triggered.<br><br><span class=\"FlavorText\">“All this time I’ve been trying so hard to pretend like everything’s fine, but it’s not.” -Nancy Wheeler</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Qatar/iconPerks_innerStrength.png"
    ],
    "id": "InnerStrength",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Inner Strength",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Babysitter": {
    "associatedPlayerIndex": 18,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "4",
        "4"
      ],
      [
        "6",
        "4"
      ],
      [
        "8",
        "4"
      ]
    ],
    "perkDefaultDescription": "While you have a reputation for being self-centered, you risk it all to help those in need.<br><br>When you unhook a Survivor, the unhooked Survivor leaves no scratch marks or blood trail for the next <span class=\"Highlight1\">{0} seconds</span>. You see The Killer's aura and The Killer sees your aura for <span class=\"Highlight2\">{1} seconds</span>.<br><br><span class=\"FlavorText\">“I promised to keep you shitheads safe, and that’s exactly what I plan on doing.” -Steve Harrington</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Qatar/iconPerks_babySitter.png"
    ],
    "id": "Babysitter",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Babysitter",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "BorrowedTime": {
    "associatedPlayerIndex": 7,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Safeguard"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "15",
        "10"
      ],
      [
        "15",
        "15"
      ],
      [
        "15",
        "20"
      ]
    ],
    "perkDefaultDescription": "You are fueled by unexpected energy when saving an ally from a hook within The Killer's Terror Radius.<br>After unhooking a Survivor within The Killer's Terror Radius, they gain the <b>Endurance</b> status effect for <span class=\"Highlight1\">{0} seconds</span>. Any damage taken during that time that would put the unhooked Survivor into the dying state will instead apply the <b>Deep Wound</b> status effect. The Survivor has <span class=\"Highlight2\">{1} seconds</span> to Mend themselves.<br>If the unhooked Survivor takes any damage while affected by <b>Deep Wound</b>, or if the <b>Deep Wound</b> timer ends, the unhooked Survivor is immediately put into the dying state. <br><br><span class=\"FlavorText\">\"Probably stings like hell, but it ain't gonna kill ya. Up and at 'em soldier. Time to move!\" — Bill Overbeck</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/L4D/iconPerks_borrowedTime.png"
    ],
    "id": "BorrowedTime",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Survivor"
    ],
    "displayName": "Borrowed Time",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Spine_Chill": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Navigation",
      "EPerkCategory::Strategy"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "36",
        "10",
        "10",
        "2"
      ],
      [
        "36",
        "10",
        "10",
        "4"
      ],
      [
        "36",
        "10",
        "10",
        "6"
      ]
    ],
    "perkDefaultDescription": "An unnatural tingle warns you of impending doom. Get notified when the Killer is looking directly in your direction and standing within a <span class=\"Highlight1\">{0} meter</span> range. While Spine Chill is active, Skill Check trigger odds are increased by <span class=\"Highlight2\">{1}%</span> with success zones reduced by <span class=\"Highlight3\">{2}%</span>. While Spine Chill is active, your speed while repairing, sabotaging, healing, unhooking, vaulting, cleansing, opening exit gates and searching are increased by <span class=\"Highlight4\">{3}%</span>.<br><span class=\"FlavorText\">\"There is a voice that doesn't use words. Listen.\" -Lost Tapes: Sassy</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_spineChill.png"
    ],
    "id": "Spine_Chill",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Survivor"
    ],
    "displayName": "Spine Chill",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Resilience": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Navigation",
      "EPerkCategory::Safeguard",
      "EPerkCategory::Strategy"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "3"
      ],
      [
        "6"
      ],
      [
        "9"
      ]
    ],
    "perkDefaultDescription": "You are motivated in dire situations. Grants <span class=\"Highlight1\">{0}%</span> additional speed when repairing, sabotaging, healing, unhooking, vaulting, cleansing, opening Exit Gates and searching while injured.<br><span class=\"FlavorText\">\"Focus, even in these desperate times.\"</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_resilience.png"
    ],
    "id": "Resilience",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Survivor"
    ],
    "displayName": "Resilience",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Rare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "SpiritFury": {
    "associatedPlayerIndex": 268435468,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Chasing"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "4"
      ],
      [
        "3"
      ],
      [
        "2"
      ]
    ],
    "perkDefaultDescription": "Each pallet you break magnifies the wrath of The Entity.<br>After breaking <span class=\"Highlight1\">{0} pallets</span>, the next time you are stunned by a pallet, The Entity will instantly break the pallet.<br>You still suffer from the stun effect penalty.<br><span class=\"FlavorText\">“Fury is her blood.”</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Haiti/iconPerks_spiritFury.png"
    ],
    "id": "SpiritFury",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Spirit"
    ],
    "displayName": "Spirit Fury",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "StakeOut": {
    "associatedPlayerIndex": 12,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Strategy"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "15",
        "2"
      ],
      [
        "15",
        "3"
      ],
      [
        "15",
        "4"
      ]
    ],
    "perkDefaultDescription": "Getting close to the Killer fills you with determination. For each <span class=\"Highlight1\">{0} seconds</span> you are standing within the Killer Terror Radius and not in a chase, you gain a Token up to a maximum of <span class=\"Highlight2\">{1} Tokens</span>.<br>When <i>Stake Out</i> has at least <b>1 Token</b>, Good Skill Checks are considered Great Skill Checks and consume <b>1 Token</b>.<br><span class=\"FlavorText\">\"I had you, I had you on your knees. You're runnin' scared because we had you. We're gonna close this case!\" -Detective David Tapp</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Finland/iconPerks_stakeOut.png"
    ],
    "id": "StakeOut",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Stake Out",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_None",
    "rarity": "EItemRarity::Uncommon",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "BeastOfPrey": {
    "associatedPlayerIndex": 268435463,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Chasing"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "30"
      ],
      [
        "40"
      ],
      [
        "50"
      ]
    ],
    "perkDefaultDescription": "Your lust for a kill is so intense that your connection with the Entity is momentarily lost, making you totally unpredictable.<br><br>Grants the <b>Undetectable</b> status effect after gaining Bloodlust Tier I. The status effect is removed once you lose Bloodlust.<br><br><li>Gain <span class=\"Highlight1\">{0}%</span> more Bloodpoints for actions in the Hunter Category.</li><br><span class=\"FlavorText\">\"Where did she go?\"</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC5/iconPerks_BeastOfPrey.png"
    ],
    "id": "BeastOfPrey",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Beast of Prey",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Iron_Grasp": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Enhancement"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "75",
        "4"
      ],
      [
        "75",
        "8"
      ],
      [
        "75",
        "12"
      ]
    ],
    "perkDefaultDescription": "Your powerful hold on the Survivors causes escapes to be nearly impossible. Effects of Survivor struggling are reduced by <span class=\"Highlight1\">{0}%</span>. Time to struggle out of your grasp is increased by <span class=\"Highlight2\">{1}%</span>.",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_ironGrasp.png"
    ],
    "id": "Iron_Grasp",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Killer"
    ],
    "displayName": "Iron Grasp",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "NoMither": {
    "associatedPlayerIndex": 9,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Adaptation",
      "EPerkCategory::Concealment"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "0"
      ],
      [
        "25"
      ],
      [
        "50"
      ]
    ],
    "perkDefaultDescription": "You are affected by the <span class=\"Highlight1\">Broken</span> status effect for the duration of the trial.<br>Your thick blood coagulates practically instantly. <li>You don't leave pools of blood.</li><li>Grunts of pain caused by injuries are reduced by <span class=\"Highlight2\">{0}%</span> at any time.</li><li>Grants the ability to fully recover from the dying state.</li><br><span class=\"FlavorText\">“I lost it. Just lamped him one. They went and banned me didn’t they. Went t’pub afterwards, had a few pints and moved on to the next chapter. I couldn’t be mithered with it all anyway, you know what I mean? Can’t be arsed.” -David King</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC5/iconPerks_NoMither.png"
    ],
    "id": "NoMither",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "No Mither",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Tenacity": {
    "associatedPlayerIndex": 12,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Adaptation",
      "EPerkCategory::Navigation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "30"
      ],
      [
        "40"
      ],
      [
        "50"
      ]
    ],
    "perkDefaultDescription": "There is nothing stopping you. Your ferocious tenacity in dire situations allows you to crawl <span class=\"Highlight1\">{0}%</span> faster and recover at the same time.<br><span class=\"FlavorText\">\"What the hell is this? I'm taking this bastard down!\" -Detective David Tapp</span> ",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Finland/iconPerks_tenacity.png"
    ],
    "id": "Tenacity",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Tenacity",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_None",
    "rarity": "EItemRarity::Uncommon",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Slippery_Meat": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Adaptation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "3",
        "15"
      ],
      [
        "3",
        "20"
      ],
      [
        "3",
        "25"
      ]
    ],
    "perkDefaultDescription": "You have developed an efficient way to get out of Bear Traps and off hooks.<br><li>Grants up to <span class=\"Highlight1\">{0}</span> extra escape attempts on the hook.</li><li>The odds of freeing yourself from Bear Traps is increased by <span class=\"Highlight2\">{1}%</span>.</li>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_slipperyMeat.png"
    ],
    "id": "Slippery_Meat",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Survivor"
    ],
    "displayName": "Slippery Meat",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "CruelConfinement": {
    "associatedPlayerIndex": 268435472,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "24",
        "20"
      ],
      [
        "24",
        "25"
      ],
      [
        "24",
        "30"
      ]
    ],
    "perkDefaultDescription": "Your ties to the otherworldly manifest when your prey attempts to get away.<br><br>Every time a generator is completed, all windows and vault locations within a <span class=\"Highlight1\">{0} meter radius</span> from the completed generator are blocked for all Survivors for the next <span class=\"Highlight2\">{1} seconds</span>. <br><br>You see the aura of the vault locations blocked by <i>Cruel Limits</i> for the duration.<br><br><span class=\"FlavorText\">“The specimen seems to be able to affect the state of nearby objects, as if they existed in some other form within a dimension alternate to our own.” -Hawkins National Laboratory</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Qatar/iconPerks_cruelConfinement.png"
    ],
    "id": "CruelConfinement",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Cruel Limits",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_None",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Spies_From_The_Shadows": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Tracking"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "100",
        "20",
        "5"
      ],
      [
        "100",
        "28",
        "5"
      ],
      [
        "100",
        "36",
        "5"
      ]
    ],
    "perkDefaultDescription": "The crows found in the world can communicate with you directly. <span class=\"Highlight1\">{0}%</span> of the time, cawing crows give you a visual cue when you are within a <span class=\"Highlight2\">{1} meter</span> range.<br><i>Spies From The Shadows</i> has a cooldown of <span class=\"Highlight3\">{2} seconds.</span> <br><span class=\"FlavorText\">\"In the shadows they torment, scarring our minds with each scream.\"</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_spiesFromTheShadows.png"
    ],
    "id": "Spies_From_The_Shadows",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Killer"
    ],
    "displayName": "Spies from the Shadows",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Sloppy_Butcher": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Cruelty"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      
    ],
    "perkDefaultDescription": "",
    "perkLevel1Description": "You know where to hit to make them bleed. Wounds inflicted by successful <i>basic attacks</i> <span class=\"Highlight1\">slightly</span> increase the survivor's bleeding frequency and causes the <span class=\"Highlight3\">Mangled</span> status effect. <br>Bleeding and Mangled effects caused by <i>Sloppy Butcher</i> return to normal once the survivor is fully healed.<br><span class=\"FlavorText\">\"It's in its sadistic nature. There is no swift kill as it delights in the obscene spectacle of our agonizing suffering.\"</span>",
    "perkLevel2Description": "You know where to hit to make them bleed. Wounds inflicted by successful <i>basic attacks</i> <span class=\"Highlight1\">moderately</span> increase the survivor's bleeding frequency and causes the <span class=\"Highlight3\">Mangled</span> status effect. <br>Bleeding and Mangled effects caused by <i>Sloppy Butcher</i> return to normal once the survivor is fully healed.<br><span class=\"FlavorText\">\"It's in its sadistic nature. There is no swift kill as it delights in the obscene spectacle of our agonizing suffering.\"</span>",
    "perkLevel3Description": "You know where to hit to make them bleed. Wounds inflicted by successful <i>basic attacks</i> <span class=\"Highlight1\">considerably</span> increase the survivor's bleeding frequency and causes the <span class=\"Highlight3\">Mangled</span> status effect. <br>Bleeding and Mangled effects caused by <i>Sloppy Butcher</i> return to normal once the survivor is fully healed.<br><span class=\"FlavorText\">\"It's in its sadistic nature. There is no swift kill as it delights in the obscene spectacle of our agonizing suffering.\"</span>",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_sloppyButcher.png"
    ],
    "id": "Sloppy_Butcher",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Killer"
    ],
    "displayName": "Sloppy Butcher",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "WakeUp": {
    "associatedPlayerIndex": 11,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Perception",
      "EPerkCategory::Strategy"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "128",
        "128",
        "5"
      ],
      [
        "128",
        "128",
        "10"
      ],
      [
        "128",
        "128",
        "15"
      ]
    ],
    "perkDefaultDescription": "Unlocks potential in one's aura reading ability. Once all generators are powered, Exit Gates are revealed to you within a <span class=\"Highlight1\">{0} meter</span> range. While opening the Exit Gates, reveal your aura to other Survivors up to <span class=\"Highlight2\">{1} meters</span>.<br>While <i>Wake Up!</i> is active, you open the Exit Gates <span class=\"Highlight3\">{2}%</span> faster.",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "Unlocks potential in one's aura reading ability. Once all generators are powered, Exit Gates are revealed to you within a <span class=\"Highlight1\">{0} meter</span> range. While opening the Exit Gates, reveal your aura to other Survivors up to <span class=\"Highlight2\">{1} meters</span>.<br>While <i>Wake Up!</i> is active, you open the Exit Gates <span class=\"Highlight3\">{2}%</span> faster.",
    "iconPathList": [
      "/perks/England/iconPerks_wakeUp.png"
    ],
    "id": "WakeUp",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Wake Up!",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Uncommon",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Leader": {
    "associatedPlayerIndex": 0,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Strategy",
      "EPerkCategory::Support"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "15",
        "8",
        "15"
      ],
      [
        "20",
        "8",
        "15"
      ],
      [
        "25",
        "8",
        "15"
      ]
    ],
    "perkDefaultDescription": "You're able to organize a team to cooperate more efficiently. Increases other Survivors' healing, sabotage, unhooking, cleansing, opening exit gates, and chest search speeds by <span class=\"Highlight1\">{0}%</span> when they are within a <span class=\"Highlight2\">{1} meter</span> range from you.<br>Survivors can only be affected by one Leader effect at a time.<br>This effect persists on other Survivors for <span class=\"Highlight3\">{2} seconds</span> after leaving the Leader's effective perk range.",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_leader.png"
    ],
    "id": "Leader",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Dwight"
    ],
    "displayName": "Leader",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Self_Care": {
    "associatedPlayerIndex": 2,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Adaptation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "50",
        "10"
      ],
      [
        "50",
        "15"
      ],
      [
        "50",
        "20"
      ]
    ],
    "perkDefaultDescription": "Unlocks the ability to heal yourself without a healing item at <span class=\"Highlight1\">{0}%</span> the normal healing speed. Increases the efficiency of healing item self-heal by <span class=\"Highlight3\">{1}%</span>.",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_selfCare.png"
    ],
    "id": "Self_Care",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Claudette"
    ],
    "displayName": "Self-Care",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Discordance": {
    "associatedPlayerIndex": 268435469,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Obstruction"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "8"
      ],
      [
        "10"
      ],
      [
        "12"
      ]
    ],
    "perkDefaultDescription": "Any time 2 Survivors or more are working on the same generator, the generator's aura is highlighted in yellow for <span class=\"Highlight1\">{0} seconds</span>.<br><br><span class=\"FlavorText\">“Smartasses get killed. We always see to that.” -The Legion</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Kenya/iconPerks_discordance.png"
    ],
    "id": "Discordance",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Discordance",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Bamboozle": {
    "associatedPlayerIndex": 268435467,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Chasing",
      "EPerkCategory::Trickery"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "5",
        "8"
      ],
      [
        "10",
        "12"
      ],
      [
        "15",
        "16"
      ]
    ],
    "perkDefaultDescription": "Your vault speed is <span class=\"Highlight1\">{0}%</span> faster.<br>Performing a vault action calls upon The Entity to block that vault location for <span class=\"Highlight1\">{1} seconds</span>.<br>Only 1 vault location may be blocked in this way at any time. The vault location is blocked only for Survivors. <br>Does not affect pallets.",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Guam/iconPerks_bamboozle.png"
    ],
    "id": "Bamboozle",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Bamboozle",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Dance_with_me": {
    "associatedPlayerIndex": 10,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Concealment"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "3",
        "60"
      ],
      [
        "3",
        "50"
      ],
      [
        "3",
        "40"
      ]
    ],
    "perkDefaultDescription": "When performing a fast vault or leaving a locker in a sprint, you leave no scratch marks for <span class=\"Highlight1\">{0} seconds</span>.<br><i>Dance With Me</i> has a cooldown of <span class=\"Highlight4\">{1} seconds</span>. <br><span class=\"FlavorText\">“Another show’s off and runnin’, <br>Dance with me, cuz there’s a storm a comin’, <br>Follow my boots, try to keep up,<br>Dance with me, until sun up.”<br>-Kate Denson's \"Dance with me\"</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Kate/iconPerks_danceWithMe.png"
    ],
    "id": "Dance_with_me",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Dance With Me",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Lightweight": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Navigation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "1"
      ],
      [
        "2"
      ],
      [
        "3"
      ]
    ],
    "perkDefaultDescription": "Your running is light and soft, making your tracks harder to follow. Scratch marks stay visible <span class=\"Highlight1\">{0} seconds</span> less than normal.<br><span class=\"FlavorText\">\"Take it slow, he knows where you've been… just like I`ve always said: live slow and die old.\" -Lost Tapes: Dylan</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_lightweight.png"
    ],
    "id": "Lightweight",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Survivor"
    ],
    "displayName": "Lightweight",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Stridor": {
    "associatedPlayerIndex": 268435459,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Tracking"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "25",
        "0"
      ],
      [
        "50",
        "0"
      ],
      [
        "50",
        "25"
      ]
    ],
    "perkDefaultDescription": "You are acutely sensitive to the breathing of your prey. Breathing of Survivors in pain is <span class=\"Highlight1\">{0}%</span> louder and regular breathing is <span class=\"Highlight2\">{1}%</span> louder.<br><span class=\"FlavorText\">“If you don’t stop and catch your breath… she will.”</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_stridor.png"
    ],
    "id": "Stridor",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Nurse"
    ],
    "displayName": "Stridor",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Rare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Tinkerer": {
    "associatedPlayerIndex": 268435458,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Trickery"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "85",
        "0",
        "8"
      ],
      [
        "85",
        "0",
        "10"
      ],
      [
        "85",
        "0",
        "12"
      ]
    ],
    "perkDefaultDescription": "When a Generator is repaired to <span class=\"Highlight1\">{0}%</span> repair progress, it triggers a loud noise notification and you are granted the <b>Undetectable</b> status effect for <span class=\"Highlight2\">{2} seconds</span>.<br><span class=\"FlavorText\">\"The Hillbilly makes impressive tools out of scraps. Tools aimed at maiming us in creative ways...\" -Notebook</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_tinkerer.png"
    ],
    "id": "Tinkerer",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "HillBilly"
    ],
    "displayName": "Tinkerer",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Sprint_Burst": {
    "associatedPlayerIndex": 1,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Navigation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "150",
        "3",
        "60"
      ],
      [
        "150",
        "3",
        "50"
      ],
      [
        "150",
        "3",
        "40"
      ]
    ],
    "perkDefaultDescription": "When starting to run, break into a sprint at <span class=\"Highlight1\">{0}%</span> of your normal running speed for a maximum of <span class=\"Highlight2\">{1} seconds</span>.<br>Causes the <i>Exhausted</i> status effect for <span class=\"Highlight4\">{2} seconds</span>.<br><i>Sprint Burst</i> cannot be used while <i>Exhausted</i>.<br>You do not recover from the <i>Exhausted</i> status effect while running.",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_sprintBurst.png"
    ],
    "id": "Sprint_Burst",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Meg"
    ],
    "displayName": "Sprint Burst",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "InfectiousFright": {
    "associatedPlayerIndex": 268435470,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Tracking"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "4"
      ],
      [
        "5"
      ],
      [
        "6"
      ]
    ],
    "perkDefaultDescription": "The cries of the unfaithful makes your heart leap.<br>Any Survivors that are within your Terror Radius while another Survivor is put into the dying state will yell and reveal their location to you for <span class=\"Highlight1\">{0} seconds</span>.<br><span class=\"FlavorText\">“Horror overcomes the heart of infidels who cry at the feet of the fallen.” (Hymn of Praise, 11. 4)</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Mali/iconPerks_infectiousFright.png"
    ],
    "id": "InfectiousFright",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Infectious Fright",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "FlipFlop": {
    "associatedPlayerIndex": 16,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Adaptation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "50",
        "40"
      ],
      [
        "50",
        "45"
      ],
      [
        "50",
        "50"
      ]
    ],
    "perkDefaultDescription": "You have an uncanny ability to escape the inevitable.<br><br>While in dying state, <span class=\"Highlight1\">{0}%</span> of your recovery progression is converted into wiggle progression when you are picked up by The Killer, up to a maximum of <span class=\"Highlight2\">{1}%</span> total wiggle progression.<br><br><span class=\"FlavorText\">\"Catch ya on the flip-flop.\" -Ash Williams</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Ash/iconPerks_flipFlop.png"
    ],
    "id": "FlipFlop",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Flip-Flop",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "SelfSufficient": {
    "associatedPlayerIndex": 7,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Adaptation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "25"
      ],
      [
        "30"
      ],
      [
        "35"
      ]
    ],
    "perkDefaultDescription": "Past battles have taught you a thing or two about survival.<br>Grants the ability to fully recover from the dying state <b>once per trial</b>. Increases dying recovery speed by <span class=\"Highlight1\">{0}%</span>.<br><span class=\"FlavorText\">\"Goddammit, I am seriously FUBAR!\" -Bill</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/L4D/iconPerks_unbreakable.png"
    ],
    "id": "SelfSufficient",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Survivor"
    ],
    "displayName": "Unbreakable",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Technician": {
    "associatedPlayerIndex": 8,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Concealment",
      "EPerkCategory::Strategy"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "8",
        "30"
      ],
      [
        "8",
        "40"
      ],
      [
        "8",
        "50"
      ]
    ],
    "perkDefaultDescription": "You are apt at handling machinery with the greatest care and precision.<br>The noises caused by your repairs and their hearing distance are reduced by <span class=\"Highlight2\">{0} meters</span>. On a failed repair Skill Check, there is a <span class=\"Highlight1\">{1}%</span> chance the generator explosion will be prevented.<br><span class=\"FlavorText\">“I’m gonna stealth this one.” -Feng Min</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "You are apt at handling machinery with the greatest care and precision.<br>The noises caused by your repairs and their hearing distance are reduced by <span class=\"Highlight2\">{0} meters</span>. On a failed repair Skill Check, there is a <span class=\"Highlight1\">{1}%</span> chance the generator explosion will be prevented.<br><span class=\"FlavorText\">“I’m gonna stealth this one.” -Feng Min</span>",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC4/iconPerks_technician.png"
    ],
    "id": "Technician",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Feng"
    ],
    "displayName": "Technician",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Hex_Ruin": {
    "associatedPlayerIndex": 268435460,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Obstruction"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "100",
        "0"
      ],
      [
        "150",
        "0"
      ],
      [
        "200",
        "0"
      ]
    ],
    "perkDefaultDescription": "A Hex that affects all Survivors' generator repairs progress. All generators are affected by <i>Hex: Ruin</i>. While a generator is not being repaired by a Survivor, it will immediately and automatically regress repair progress at <span class=\"Highlight1\">{0}%</span> of the normal regression speed.<br><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i><br><br><span class=\"FlavorText\">“A curse is upon you. It will be your ruin.”</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC3/iconPerks_ruin.png"
    ],
    "id": "Hex_Ruin",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Hag"
    ],
    "displayName": "Hex: Ruin",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Rare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "DeadHard": {
    "associatedPlayerIndex": 9,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Navigation",
      "EPerkCategory::Adaptation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "60"
      ],
      [
        "50"
      ],
      [
        "40"
      ]
    ],
    "perkDefaultDescription": "Activatable Perk.<br>You can take a beating. When injured, tap into your adrenaline bank and dash forward quickly to avoid damage.<br><li>Press the <i>Active Ability</i> button while running to dash forward.</li><li>During the dash, you avoid damage.</li><li>Causes the <i>Exhausted</i> status effect for <span class=\"Highlight4\">{0} seconds</span>.<br>You do not recover from the <i>Exhausted</i> status effect while running.</li><br><span class=\"FlavorText\">“We were walkin’ through t’ginnel one night when a beer bottle flew past me, then another, and another. I thought to myself, “Gonna ’ave some fun ‘ere lads, let’s get stuck in!” It were a right dust up, I swear down!” -David King</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC5/iconPerks_DeadHard.png"
    ],
    "id": "DeadHard",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Dead Hard",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "RedHerring": {
    "associatedPlayerIndex": 20,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "3",
        "60"
      ],
      [
        "3",
        "50"
      ],
      [
        "3",
        "40"
      ]
    ],
    "perkDefaultDescription": "You’ve noticed that people pay attention to whatever makes the loudest noise.<br><br>After repairing a generator for at least <span class=\"Highlight1\">{0} seconds</span>, it will be highlighted to you with a yellow aura. The generator stays highlighted until it is fully repaired, or you repair a new generator, or enter a locker. <br><br>Entering any locker will trigger a loud noise indicator for The Killer at the highlighted generator's location. <br><li><i>Red Herring</i> can only be triggered once every <span class=\"Highlight2\">{1} seconds</span>.</li><br><br><span class=\"FlavorText\">\"The news edit out what is burdensome and complex, which is the truth.\" -Zarina Kassir</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Ukraine/iconPerks_redHerring.png"
    ],
    "id": "RedHerring",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Red Herring",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Ace_In_The_Hole": {
    "associatedPlayerIndex": 6,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Support"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "100",
        "10"
      ],
      [
        "100",
        "25"
      ],
      [
        "100",
        "50"
      ]
    ],
    "perkDefaultDescription": "Lady Luck always seems to be throwing something good your way.<br>When retrieving an item from a chest, there is a <span class=\"Highlight1\">{0}%</span> chance that a <span class=\"Highlight2\">very rare</span> (or lower) add-on will be attached to it.<br><span class=\"Highlight3\">{1}%</span> chance of finding an add-on of <span class=\"Highlight4\">uncommon</span> rarity or lower.<br>When escaping, keep any addons your item has.<br><span class=\"FlavorText\">“Everything that glitters isn’t gold. But gold isn't worth a damn in this place, so this should come in handy.” -Ace</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC3/iconPerks_aceInTheHole.png"
    ],
    "id": "Ace_In_The_Hole",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Ace"
    ],
    "displayName": "Ace in the Hole",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Rare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "MonitorAndAbuse": {
    "associatedPlayerIndex": 268435462,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Tracking",
      "EPerkCategory::Trickery"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "8",
        "3"
      ],
      [
        "8",
        "5"
      ],
      [
        "8",
        "10"
      ]
    ],
    "perkDefaultDescription": "Meticulous in your approach, terrifying in your application.<br>While in a chase, your Terror Radius is increased by <span class=\"Highlight1\">{0} meters</span>. Otherwise, your Terror Radius is decreased by <span class=\"Highlight2\">{0} meters</span> and your field of view is increased by <span class=\"Highlight3\">{1} degrees</span>.<br><i>Field of view gains do not stack.</i><br><span class=\"FlavorText\">\"It's time for your treatment!\" -The Doctor</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC4/iconPerks_monitorAndAbuse.png"
    ],
    "id": "MonitorAndAbuse",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Doctor"
    ],
    "displayName": "Monitor & Abuse",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "NurseCalling": {
    "associatedPlayerIndex": 268435459,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Tracking"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "20"
      ],
      [
        "24"
      ],
      [
        "28"
      ]
    ],
    "perkDefaultDescription": "Unlocks potential in one's aura reading ability. The auras of Survivors who are healing or being healed are revealed to you when they are within a <span class=\"Highlight1\">{0} meter</span> range.<br><span class=\"FlavorText\">“Still attached to the fragments of her past life, she is drawn to those in need of help.”</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_aNursesCalling.png"
    ],
    "id": "NurseCalling",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Nurse"
    ],
    "displayName": "A Nurse's Calling",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Rare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Adrenaline": {
    "associatedPlayerIndex": 1,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Navigation",
      "EPerkCategory::Adaptation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "150",
        "5",
        "60"
      ],
      [
        "150",
        "5",
        "50"
      ],
      [
        "150",
        "5",
        "40"
      ]
    ],
    "perkDefaultDescription": "You are fuelled by unexpected energy when on the verge of escape. <span class=\"Highlight1\">Instantly heal one <b>health state</b></span> and sprint at <span class=\"Highlight2\">{0}%</span> of your normal running speed for <span class=\"Highlight3\">{1} seconds</span> when the Exit Gates are powered. Adrenaline is on hold if you are disabled at the moment it should take effect and will activate when freed.<br><i>Adrenaline</i> will <b>wake you up</b> if you are asleep when it triggers.<br><i>Adrenaline</i> ignores the <i>Exhausted</i> status effect.<br>Causes the <i>Exhausted</i> status effect for <span class=\"Highlight4\">{2} seconds</span>.<br>You do not recover from the <i>Exhausted</i> status effect when running.",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "You are fuelled by unexpected energy when on the verge of escape. <span class=\"Highlight1\">Instantly heal one <b>health state</b></span> and sprint at <span class=\"Highlight2\">{0}%</span> of your normal running speed for <span class=\"Highlight3\">{1} seconds</span> when the Exit Gates are powered. Adrenaline is on hold if you are disabled at the moment it should take effect and will activate when freed.<br><i>Adrenaline</i> ignores the <i>Exhausted</i> status effect.<br>Causes the <i>Exhausted</i> status effect for <span class=\"Highlight4\">{2} seconds</span>.<br>You do not recover from the <i>Exhausted</i> status effect when running.",
    "iconPathList": [
      "/perks/iconPerks_adrenaline.png"
    ],
    "id": "Adrenaline",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Meg"
    ],
    "displayName": "Adrenaline",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Saboteur": {
    "associatedPlayerIndex": 3,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Strategy"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "90"
      ],
      [
        "75"
      ],
      [
        "60"
      ]
    ],
    "perkDefaultDescription": "Unlocks potential in one's Aura-reading ability.<br><li>See Hook auras in a <span class=\"Highlight1\">56 meter</span> radius from the pickup spot if a Survivor is being carried.</li><br>Unlocks the ability to sabotage Hooks without a toolbox.<br><li>Sabotaging a Hook without a toolbox takes <span class=\"Highlight2\">2.5 seconds</span>.</li><li>The Sabotage action has a <span class=\"Highlight3\">{0} second</span> cooldown.</li>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_saboteur.png"
    ],
    "id": "Saboteur",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Jake"
    ],
    "displayName": "Saboteur",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Deerstalker": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Tracking"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "20"
      ],
      [
        "28"
      ],
      [
        "36"
      ]
    ],
    "perkDefaultDescription": "Unlocks potential in one's aura reading ability. Reveals dying survivors' auras when standing within a <span class=\"Highlight1\">{0} meter</span> range.",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_deerstalker.png"
    ],
    "id": "Deerstalker",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Killer"
    ],
    "displayName": "Deerstalker",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Uncommon",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "ZanshinTactics": {
    "associatedPlayerIndex": 268435473,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "24",
        "40"
      ],
      [
        "24",
        "35"
      ],
      [
        "24",
        "30"
      ]
    ],
    "perkDefaultDescription": "Unlocks potential in one's aura reading ability. You are mentally alert and aware of key points on the battlefield.<br><br>The auras of all pallets, breakable walls, and vault locations are revealed to you within a <span class=\"Highlight1\">{0} meter</span> range.<br><br>When a survivor is damaged, <i>Zanshin Tactics</i> becomes inactive for <span class=\"Highlight2\">{1} seconds</span>.<br><br><span class=\"FlavorText\">“Within your enemy’s strength is weakness.” -Renjiro’s Doctrine 12:5</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Sweden/iconPerks_zanshinTactics.png"
    ],
    "id": "ZanshinTactics",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Zanshin Tactics",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Calm_Spirit": {
    "associatedPlayerIndex": 3,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Concealment"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "80"
      ],
      [
        "90"
      ],
      [
        "100"
      ]
    ],
    "perkDefaultDescription": "Animals seem to trust you as they often stay calm in your presence. Reduces chances of alerting woodland creatures by <span class=\"Highlight1\">{0}%</span>.<br>Calm Spirit allows you to overcome the urge to scream.",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_calmSpirit.png"
    ],
    "id": "Calm_Spirit",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Jake"
    ],
    "displayName": "Calm Spirit",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "ImAllEars": {
    "associatedPlayerIndex": 268435471,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Tracking"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "6",
        "60"
      ],
      [
        "6",
        "50"
      ],
      [
        "6",
        "40"
      ]
    ],
    "perkDefaultDescription": "Your keen senses are sharpened in the dark realm of The Entity.<br><br>Unlocks potential in one's aura reading ability. Any Survivor performing a rushed action within <span class=\"Highlight1\">48 meters</span> from your location will have their aura revealed for <span class=\"Highlight2\">{0} seconds</span>.<br><br><i>I'm All Ears</i> can only be triggered once every <span class=\"Highlight3\">{1} seconds</span>.<br><br><span class=\"FlavorText\">“There is no need to worry. I’ve been preparing my whole life for this.\" –The Ghost Face</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Oman/iconPerks_imAllEars.png"
    ],
    "id": "ImAllEars",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "I'm All Ears",
    "description": "Your keen senses are sharpened in the dark realm of The Entity.<br><br>Unlocks potential in one's aura reading ability. Any Survivor performing a rushed action within <span class=\"Highlight1\">48 meters</span> from your location will have their aura revealed for <span class=\"Highlight2\">{0} seconds</span>.<br><br><i>I'm All Ears</i> can only be triggered once every <span class=\"Highlight3\">{1} seconds</span>.<br><br><span class=\"FlavorText\">“There is no need to worry. I’ve been preparing my whole life for this.\" –The Ghost Face</span>",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "FurtiveChase": {
    "associatedPlayerIndex": 268435471,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Chasing",
      "EPerkCategory::Trickery"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "2",
        "4"
      ],
      [
        "3",
        "4"
      ],
      [
        "4",
        "4"
      ]
    ],
    "perkDefaultDescription": "You become <b>obsessed</b> with one Survivor. You lurk in the shadows, eliminating your victims one by one. When your Obsession is hooked, <i>Furtive Chase</i> receives a token, up to a maximum of <span class=\"Highlight1\">{0} tokens</span>.<br><br>Each token decreases your Terror Radius by <span class=\"Highlight2\">{1} meters</span> while in a chase.<br><br>When a Survivor rescues the Obsession from a hook, the rescuer becomes the Obsession. You lose all your tokens if the Obsession is sacrificed or killed.<br><br><li>The Killer may only be <b>obsessed</b> with one Survivor at a time.</li><br><br><span class=\"FlavorText\">\"You have no idea what I have planned for you. It’ll be in the news for weeks: I’ll make sure of it.\" –The Ghost Face</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Oman/iconPerks_furtiveChase.png"
    ],
    "id": "FurtiveChase",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Furtive Chase",
    "description": "You become <b>obsessed</b> with one Survivor. You lurk in the shadows, eliminating your victims one by one. When your Obsession is hooked, <i>Furtive Chase</i> receives a token, up to a maximum of <span class=\"Highlight1\">{0} tokens</span>.<br><br>Each token decreases your Terror Radius by <span class=\"Highlight2\">{1} meters</span> while in a chase.<br><br>When a Survivor rescues the Obsession from a hook, the rescuer becomes the Obsession. You lose all your tokens if the Obsession is sacrificed or killed.<br><br><li>The Killer may only be <b>obsessed</b> with one Survivor at a time.</li><br><br><span class=\"FlavorText\">\"You have no idea what I have planned for you. It’ll be in the news for weeks: I’ll make sure of it.\" –The Ghost Face</span>",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "LuckyBreak": {
    "associatedPlayerIndex": 19,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "120"
      ],
      [
        "150"
      ],
      [
        "180"
      ]
    ],
    "perkDefaultDescription": "You’ve had your share of scrapes and bruises, but luck’s always on your side.<br><br><i>Lucky Break</i> activates any time you are injured. You won’t leave trails of blood for a total of <span class=\"Highlight1\">{0} seconds</span>.<br><br><i>Lucky Break</i> is permanently deactivated for the remainder of the trial once the total duration has elapsed.<br><br><span class=\"FlavorText\">“That’s not enough to beat me. Not even close.” -Yui Kimura </span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Sweden/iconPerks_luckyBreak.png"
    ],
    "id": "LuckyBreak",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Lucky Break",
    "description": "You’ve had your share of scrapes and bruises, but luck’s always on your side.<br><br><i>Lucky Break</i> activates any time you are injured. You won’t leave trails of blood for a total of <span class=\"Highlight1\">{0} seconds</span>.<br><br><i>Lucky Break</i> is permanently deactivated for the remainder of the trial once the total duration has elapsed.<br><br><span class=\"FlavorText\">“That’s not enough to beat me. Not even close.” -Yui Kimura </span>",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "BuckleUp": {
    "associatedPlayerIndex": 16,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Perception"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "48",
        "4"
      ],
      [
        "48",
        "5"
      ],
      [
        "48",
        "6"
      ]
    ],
    "perkDefaultDescription": "Unlocks potential in one's aura reading ability. The recovery progress of dying Survivors can be determined by the intensity of their auras at a distance of up to <span class=\"Highlight1\">{0} meters</span>.<br><br>When you heal a Survivor from the dying state to injured, both the healed Survivor and yourself see The Killer's aura for a duration of <span class=\"Highlight2\">{1} seconds</span>.<br><br><span class=\"FlavorText\">“Ghost beaters never leave a man behind.\" -Ash Williams</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Ash/iconPerks_buckleUp.png"
    ],
    "id": "BuckleUp",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Buckle Up",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Shadowborn": {
    "associatedPlayerIndex": 268435457,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Tracking"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "9"
      ],
      [
        "12"
      ],
      [
        "15"
      ]
    ],
    "perkDefaultDescription": "You have a keen vision in the darkness of the night. Your field of view is <span class=\"Highlight2\">{0} degrees</span> wider than normal.<br><i>Does not stack with other FOV increases.</i><br><span class=\"FlavorText\">\"Shining in the darkest dark, his eyes pierce the night and sting your soul.\"</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_shadowborn.png"
    ],
    "id": "Shadowborn",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Banshee"
    ],
    "displayName": "Shadowborn",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Rare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Hope": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Navigation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "5",
        "120"
      ],
      [
        "6",
        "120"
      ],
      [
        "7",
        "120"
      ]
    ],
    "perkDefaultDescription": "The growing odds of a successful escape fill you with hope and give you wings. As soon as the Exit Gates are powered you gain a <span class=\"Highlight1\">{0}%</span> <b><i>Haste</i></b> status effect for <span class=\"Highlight3\">{1} seconds</span>.<br><br><span class=\"FlavorText\">\"Buckle up, fuckos! Let's roll!\" -Lost Tapes: Nikki</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_hope.png"
    ],
    "id": "Hope",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Survivor"
    ],
    "displayName": "Hope",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::VeryRare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Empathy": {
    "associatedPlayerIndex": 2,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Perception"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "64"
      ],
      [
        "96"
      ],
      [
        "128"
      ]
    ],
    "perkDefaultDescription": "Unlocks potential in one's aura reading ability. Dying or injured allies' auras are revealed to you when within a <span class=\"Highlight1\">{0} meter</span> range. Empathy does not reveal auras of allies when they are in direct contact with the Killer.",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_empathy.png"
    ],
    "id": "Empathy",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Claudette"
    ],
    "displayName": "Empathy",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Uncommon",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Enduring": {
    "associatedPlayerIndex": 268435458,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Enhancement"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "40"
      ],
      [
        "45"
      ],
      [
        "50"
      ]
    ],
    "perkDefaultDescription": "You are resilient to pain. You reduce the duration of <b>Pallet Stuns</b> by <span class=\"Highlight1\">{0}%</span>.<br><span class=\"FlavorText\">\"He stops at nothing.\"</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_enduring.png"
    ],
    "id": "Enduring",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "HillBilly"
    ],
    "displayName": "Enduring",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Poised": {
    "associatedPlayerIndex": 15,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Concealment"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "6"
      ],
      [
        "8"
      ],
      [
        "10"
      ]
    ],
    "perkDefaultDescription": "Achieving goals boosts your confidence.<br>After a generator is completed, you leave no scratch marks for <span class=\"Highlight1\"> {0} seconds</span>.<br><span class=\"FlavorText\">“Ok, stay calm. Don’t overthink it and just keep moving forward: you got this. –Jane Romero</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Mali/iconPerks_poised.png"
    ],
    "id": "Poised",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Poised",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "WereGonnaLiveForever": {
    "associatedPlayerIndex": 9,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Support"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "25",
        "50"
      ],
      [
        "25",
        "75"
      ],
      [
        "25",
        "100"
      ]
    ],
    "perkDefaultDescription": "Your few friends deserve the best protection. Each time you perform a Safe Hook Rescue or take a hit to protect a Survivor, gain <span class=\"Highlight1\">{0}%</span> stackable bonus to all bloodpoint gains up to a maximum of <span class=\"Highlight2\">{1}%</span>. The bonus Bloodpoints are only awarded post-trial.<br><span class=\"FlavorText\">“Come on then, let’s ‘ave it! I don’t give a shit pal.” -David King</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC5/iconPerks_WereGonnaLiveForever.png"
    ],
    "id": "WereGonnaLiveForever",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "We're Gonna Live Forever",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Deliverance": {
    "associatedPlayerIndex": 13,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Adaptation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "100"
      ],
      [
        "80"
      ],
      [
        "60"
      ]
    ],
    "perkDefaultDescription": "After performing a safe hook rescue on another Survivor, <i>Deliverance</i> activates.<br>You now have a <span class=\"Highlight1\">100%</span> chance of unhooking yourself during the escape attempt.<br>A successful <i>Deliverance</i> from the hook triggers the <span class=\"Highlight2\">Broken</span> status effect for <span class=\"Highlight3\">{0} seconds</span>.<br><span class=\"FlavorText\">“I was raised by a strict man who taught me how to make the best of a bad situation.” -Adam Francis</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Haiti/iconPerks_deliverance.png"
    ],
    "id": "Deliverance",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Adam"
    ],
    "displayName": "Deliverance",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Hex_Devour_Hope": {
    "associatedPlayerIndex": 268435460,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Trickery"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "3"
      ],
      [
        "4"
      ],
      [
        "5"
      ]
    ],
    "perkDefaultDescription": "A Hex rooting its power on hope. The false hope of Survivors ignites your hunger. When a Survivor is rescued from a hook at least <span class=\"Highlight1\">24 meters</span> away, Devour Hope receives a token.<br><li><span class=\"Highlight3\">2 Tokens</span>: Gain a <span class=\"Highlight2\">{0}%</span> <b><i>Haste</i></b> status effect,<span class=\"Highlight3\">10 seconds</span> after hooking a Survivor, for a duration of <span class=\"Highlight3\">10 seconds</span>.</li><li><span class=\"Highlight3\">3 Tokens</span>: Survivors suffer from the <b><i>Exposed</i></b> status effect.</li><li><span class=\"Highlight2\">5 Tokens</span>: Grants the ability to kill Survivors by your own hand.</li><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i><br><br><span class=\"FlavorText\">“If you do nothing, you have their blood on your hands. If you save them, her hunger grows.“</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC3/iconPerks_devourHope.png"
    ],
    "id": "Hex_Devour_Hope",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Hag"
    ],
    "displayName": "Hex: Devour Hope",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Rare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "ThrillingTremors": {
    "associatedPlayerIndex": 268435471,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Obstruction"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "16",
        "100"
      ],
      [
        "16",
        "80"
      ],
      [
        "16",
        "60"
      ]
    ],
    "perkDefaultDescription": "Your dark designs and shrewd composure rouse The Entity.<br><br>After picking up a Survivor, all Generators not being repaired by Survivors are blocked by The Entity and cannot be repaired for the next <span class=\"Highlight1\">{0} seconds</span>. Affected generators are highlighted by a white aura.<br><br><i>Thrilling Tremors</i> can only be triggered once every <span class=\"Highlight2\">{1} seconds</span>.<br><br><span class=\"FlavorText\">\"The night assists me and it’s endless here.\" –The Ghost Face</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Oman/iconPerks_thrillingTremors.png"
    ],
    "id": "ThrillingTremors",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Thrilling Tremors",
    "description": "Your dark designs and shrewd composure rouse The Entity.<br><br>After picking up a Survivor, all Generators not being repaired by Survivors are blocked by The Entity and cannot be repaired for the next <span class=\"Highlight1\">{0} seconds</span>. Affected generators are highlighted by a white aura.<br><br><i>Thrilling Tremors</i> can only be triggered once every <span class=\"Highlight2\">{1} seconds</span>.<br><br><span class=\"FlavorText\">\"The night assists me and it’s endless here.\" –The Ghost Face</span>",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "SecondWind": {
    "associatedPlayerIndex": 18,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "34"
      ],
      [
        "32"
      ],
      [
        "30"
      ]
    ],
    "perkDefaultDescription": "When you have healed other Survivors for the equivalent of one health state, <i>Second Wind</i> activates. If you are already afflicted by the <span class=\"Highlight1\">Broken</span> status effect, <i>Second Wind</i> does not activate.<br><br>While <i>Second Wind</i> is activated, the next time you are unhooked or you unhook yourself, you are affected by the <span class=\"Highlight1\">Broken</span> status effect. After a total duration of <span class=\"Highlight2\">{0} seconds</span>, <i>Second Wind</i> automatically heals you from injured to healthy.<br><br><i>Second Wind</i> deactivates once you become healthy or if you are put into the dying state before <i>Second Wind</i> successfully triggers. You lose the <span class=\"Highlight1\">Broken</span> status effect.<br><br><span class=\"FlavorText\">\"Yeah, that’s a no.\" -Steve Harrington</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Qatar/iconPerks_secondWind.png"
    ],
    "id": "SecondWind",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Second Wind",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Diversion": {
    "associatedPlayerIndex": 13,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Concealment"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "10"
      ],
      [
        "15"
      ],
      [
        "20"
      ]
    ],
    "perkDefaultDescription": "Activatable Perk.<br>Standing within the Killer Terror Radius while not in a chase for <span class=\"Highlight1\">45 seconds</span> activates <i>Diversion</i>.<br><li>Once <i>Diversion</i> is activated, press the <i>Active Ability</i> button while crouched and motionless to throw a pebble, which creates a distraction for The Killer at a distance of <span class=\"Highlight1\">{0} meters</span>.</li><br><li>The perk timer resets once the ability has been activated.</li><br>The distraction consists of:<br><li>A loud noise notification</li><li>Scratch Marks</li><br><span class=\"FlavorText\">“There’s what is easy and then there’s what is right. If you confuse the two, there’s no telling what you become.” -Adam Francis</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Haiti/iconPerks_diversion.png"
    ],
    "id": "Diversion",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Adam"
    ],
    "displayName": "Diversion",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Solidarity": {
    "associatedPlayerIndex": 15,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Adaptation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "40"
      ],
      [
        "45"
      ],
      [
        "50"
      ]
    ],
    "perkDefaultDescription": "Sharing painful experiences has the power to heal.<br>While injured, healing a Survivor without using a med-kit also heals you at a <span class=\"Highlight1\">{0}%</span> conversion rate.<br><span class=\"FlavorText\">“Showing up when things get rough, listening to people’s problems, and supporting those in need; that’s how you become stronger, that’s how you grow.” –Jane Romero</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Mali/iconPerks_solidarity.png"
    ],
    "id": "Solidarity",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Solidarity",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Monstrous_Shrine": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Hinderance"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "3",
        "5",
        "3"
      ],
      [
        "6",
        "10",
        "6"
      ],
      [
        "9",
        "15",
        "9"
      ]
    ],
    "perkDefaultDescription": "Your fervent care of the hooks found in the basement have aroused The Entity's interest. The basement hooks grant the following bonuses:<br><li><span class=\"Highlight1\">{0}%</span> faster Entity progress.</li><li><span class=\"Highlight2\">{1}%</span> increased difficulty on escape attempts.</li><li><span class=\"Highlight3\">{2}%</span> increased penalty on escape fails.</li><br><span class=\"FlavorText\">\"Then you will know that there is no escape. When hanging in the depths, you face the dark one.\"</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_monstrousShrine.png"
    ],
    "id": "Monstrous_Shrine",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Killer"
    ],
    "displayName": "Monstrous Shrine",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "BloodEcho": {
    "associatedPlayerIndex": 268435473,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "45",
        "80"
      ],
      [
        "45",
        "70"
      ],
      [
        "45",
        "60"
      ]
    ],
    "perkDefaultDescription": "The agony of one is inflicted on others.<br><br>When hooking a Survivor, all other injured Survivors suffer from the <span class=\"Highlight1\">Hemorrhage</span> status effect until healed and the <span class=\"Highlight1\">Exhaustion</span> status effect for <span class=\"Highlight2\">{0} seconds</span>.<br><br><i>Blood Echo</i> has a cooldown of <span class=\"Highlight3\">{1} seconds.</span><br><br><span class=\"FlavorText\">“Attack an enemy with precision and their allies will feel it.” -Renjiro’s Doctrine 6:3</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Sweden/iconPerks_bloodEcho.png"
    ],
    "id": "BloodEcho",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Blood Echo",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Dying_Light": {
    "associatedPlayerIndex": 268435461,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Hinderance"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "33",
        "2"
      ],
      [
        "33",
        "2.5"
      ],
      [
        "33",
        "3"
      ]
    ],
    "perkDefaultDescription": "You become <b>obsessed</b> with one Survivor.<br>Your obsession gains a <span class=\"Highlight1\">{0}%</span> action speed bonus to unhooking and healing other Survivors.<br>Each time you hook a Survivor other than the Obsession, if the Obsession is alive, gain a token.<br>If the Obsession is alive, all Survivors who are not the Obsession get <span class=\"Highlight2\">{1}%</span> penalty to Repair, Healing and Sabotage speeds for each token.<br><li><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i></li><br><span class=\"FlavorText\">\"This isn't a man...\" -Dr.Sam Loomis </span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC2/iconPerks_dyingLight.png"
    ],
    "id": "Dying_Light",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Shape"
    ],
    "displayName": "Dying Light",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "SoleSurvivor": {
    "associatedPlayerIndex": 5,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Concealment"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "20"
      ],
      [
        "22"
      ],
      [
        "24"
      ]
    ],
    "perkDefaultDescription": "As more of your friends fall to the killer, you become shrouded in isolation and the killer's <b>aura reading abilities</b> towards you are disrupted.<br>Your aura cannot be read by the killer within a max range of:<li><span class=\"Highlight1\">{0} meters</span> for each <b>killed</b> or <b>sacrificed</b> survivor.</li><li><i>Increases your chances of being the killer's obsession.</i></li><li><i>The Killer can only be <b>obsessed</b> with one survivor at a time.</i></li><br><span class=\"FlavorText\">“It was the boogeyman.” -Laurie Strode</span></br>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC2/iconPerks_soleSurvivor.png"
    ],
    "id": "SoleSurvivor",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Laurie"
    ],
    "displayName": "Sole Survivor",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "HeadOn": {
    "associatedPlayerIndex": 15,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Adaptation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "3",
        "3",
        "60"
      ],
      [
        "3",
        "3",
        "50"
      ],
      [
        "3",
        "3",
        "40"
      ]
    ],
    "perkDefaultDescription": "When your mind is set, there better be no one standing in your way.<br><br>While standing in a locker, for <span class=\"Highlight1\">{0} seconds</span>, <i>Head On</i> activates.<br>While <i>Head On</i> is activated, perform a rush action to leave a locker to use <i>Head On</i>. If The Killer is standing within <i>Head On's</i> effective range, The Killer is stunned for <span class=\"Highlight1\">{1} seconds</span>.<br>Causes the <span class=\"Highlight3\">Exhausted</span> status effect for <span class=\"Highlight1\">{2} seconds</span>. <br>Head On cannot be used while Exhausted.<br>You do not recover from the <span class=\"Highlight3\">Exhausted</span> status effect while running. <br><i>Head On</i> cannot be used when you have idle crows.<br><br><span class=\"FlavorText\">“People are remembered for the challenges they overcome. You can run away and forget what you’re capable of or you can face your fears and remind the world who you are.” –Jane Romero</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Mali/iconPerks_headOn.png"
    ],
    "id": "HeadOn",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Head On",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Bond": {
    "associatedPlayerIndex": 0,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Perception"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "20"
      ],
      [
        "28"
      ],
      [
        "36"
      ]
    ],
    "perkDefaultDescription": "Unlocks potential in one's aura reading ability. Allies' auras are revealed to you when they are within a <span class=\"Highlight1\">{0} meter</span> range.<br><span class=\"FlavorText\">\"We have to work as a team, I need you to survive so that I can survive!\" -Dwight</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_bond.png"
    ],
    "id": "Bond",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Dwight"
    ],
    "displayName": "Bond",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "BetterTogether": {
    "associatedPlayerIndex": 17,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "32",
        "8"
      ],
      [
        "32",
        "9"
      ],
      [
        "32",
        "10"
      ]
    ],
    "perkDefaultDescription": "You seek justice and uncover the truth no matter what obstacle stands in your way.<br><br>The aura of the Generator you are currently repairing is revealed to all other Survivors located within <span class=\"Highlight1\">{0} meters</span>.<br><br>If The Killer downs a Survivor while you are repairing a generator, you see the aura of all other Survivors for <span class=\"Highlight2\">{1} seconds</span>.<br><br><span class=\"FlavorText\">“Let’s burn that lab to the ground.” -Nancy Wheeler</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Qatar/iconPerks_betterTogether.png"
    ],
    "id": "BetterTogether",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Better Together",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "FranklinsLoss": {
    "associatedPlayerIndex": 268435464,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Cruelty"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "0"
      ],
      [
        "5"
      ],
      [
        "10"
      ]
    ],
    "perkDefaultDescription": "Your successful <i>basic attacks</i> make the Survivors drop their item on impact. The lost item is damaged in the fall, losing <span class=\"Highlight1\">{0}%</span> of its base amount of charges.<br><span class=\"FlavorText\">\"Sally, I hear something. Stop! Stop!\" -Franklin</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Cannibal/iconPerks_franklinsLoss.png"
    ],
    "id": "FranklinsLoss",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Franklin's Demise",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Save_The_Best_For_Last": {
    "associatedPlayerIndex": 268435461,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Cruelty"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "5",
        "8",
        "4"
      ],
      [
        "5",
        "8",
        "3"
      ],
      [
        "5",
        "8",
        "2"
      ]
    ],
    "perkDefaultDescription": "You become <b>obsessed</b> with one Survivor.<br>Earn a token for each successful <i>basic attack</i> that is not dealt to the Obsession. <br>Each Token grants a stackable <span class=\"Highlight1\">{0}%</span> decreased successful <i>basic attack</i> cooldown, you can earn up to <span class=\"Highlight2\">{1}</span> tokens.<br>Hitting your Obsession with a <i>basic attack</i> will cause you to lose <span class=\"Highlight3\">{2}</span> tokens. <br>You can no longer gain tokens if your Obsession is sacrificed or killed.<br><li><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i></li><br><span class=\"FlavorText\">\"Death has come to your little town, sheriff.\" -Dr. Sam Loomis</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC2/iconPerks_saveTheBestForLast.png"
    ],
    "id": "Save_The_Best_For_Last",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Shape"
    ],
    "displayName": "Save the best for last",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Hex_HauntedGround": {
    "associatedPlayerIndex": 268435468,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Trickery"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "40"
      ],
      [
        "50"
      ],
      [
        "60"
      ]
    ],
    "perkDefaultDescription": "Two trapped Hex Totems will spawn in the Trial.<br>When either one of the two trapped Hex Totems is cleansed by a Survivor, all Survivors suffer from the <span class=\"Highlight3\">Exposed status effect</span> for <span class=\"Highlight1\"> {0} seconds</span>. <br>The remaining trapped Hex Totem immediately becomes a Dull Totem.<br><br><span class=\"FlavorText\">“Her home became profane.”</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Haiti/iconPerks_hauntedGround.png"
    ],
    "id": "Hex_HauntedGround",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Spirit"
    ],
    "displayName": "Hex: Haunted Ground",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "No_One_Escapes_Death": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Cruelty",
      "EPerkCategory::Trickery"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "2"
      ],
      [
        "3"
      ],
      [
        "4"
      ]
    ],
    "perkDefaultDescription": "A Hex rooting its power on hope. You are animated by the power of your Hex Totem when the Survivors are on the verge of escaping.<br>Once the Exit Gates are powered, if there is a Dull Totem remaining on the map, this Hex is applied to it.</br><br>While this Hex is active,<li>Survivors suffer from the <b><i>Exposed</i></b> status effect.</li><li>Your movement speed is increased by <span class=\"Highlight1\">{0}%</span></li><br>The Hex effects persist as long as the related Hex Totem is standing.<br><br><span class=\"FlavorText\">\"And the beast became faster and more powerful as if The Entity's shadowy whips were lashing at its back.\"</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_noOneEscapesDeath.png"
    ],
    "id": "No_One_Escapes_Death",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Killer"
    ],
    "displayName": "Hex: No One Escapes Death",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::UltraRare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "MadGrit": {
    "associatedPlayerIndex": 268435469,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Cruelty"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "2"
      ],
      [
        "3"
      ],
      [
        "4"
      ]
    ],
    "perkDefaultDescription": "While carrying a Survivor, you suffer no cooldown for missed <i>basic attacks</i> and successfully hitting another Survivor with a <i>basic attack</i> will pause the carried Survivor’s wiggle timer for <span class=\"Highlight1\">{0} seconds</span>.<br><br><span class=\"FlavorText\">“There’s no getting out of this now. We’re too good at it.” -The Legion</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Kenya/iconPerks_madGrit.png"
    ],
    "id": "MadGrit",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Mad Grit",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Unrelenting": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Cruelty"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "20"
      ],
      [
        "25"
      ],
      [
        "30"
      ]
    ],
    "perkDefaultDescription": "You recuperate faster from missed attacks made with your main weapon. The cooldown after missed <i>basic attacks</i> is reduced by <span class=\"Highlight1\">{0}%</span>.",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_unrelenting.png"
    ],
    "id": "Unrelenting",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Killer"
    ],
    "displayName": "Unrelenting",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Rare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Botany_Knowledge": {
    "associatedPlayerIndex": 2,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Safeguard"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "11"
      ],
      [
        "22"
      ],
      [
        "33"
      ]
    ],
    "perkDefaultDescription": "You transform plants found around the campfire into tinctures that slow down bleeding. <b>Healing speed</b> and <b>healing item efficiency</b> are increased by <span class=\"Highlight1\">{0}%</span>.<br><br><span class=\"FlavorText\">\"Basic botany knowledge could save your life someday.\"</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_botanyKnowledge.png"
    ],
    "id": "Botany_Knowledge",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Claudette"
    ],
    "displayName": "Botany Knowledge",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Uncommon",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Bloodhound": {
    "associatedPlayerIndex": 268435457,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Tracking"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "2"
      ],
      [
        "3"
      ],
      [
        "4"
      ]
    ],
    "perkDefaultDescription": "Like a hunting scent hound, you smell traces of blood at a great distance. Fresh blood marks are <span class=\"Highlight1\">considerably</span> more discernible than normal and can be tracked for <span class=\"Highlight2\">{0} seconds</span> longer than normal.<br><span class=\"FlavorText\">\"Pebbles shimmering in the moonlight; my life drips down in a trail so easy to follow.\"</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_bloodhound.png"
    ],
    "id": "Bloodhound",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Banshee"
    ],
    "displayName": "Bloodhound",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "HexRetribution": {
    "associatedPlayerIndex": 268435474,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "35",
        "10"
      ],
      [
        "40",
        "10"
      ],
      [
        "45",
        "10"
      ]
    ],
    "perkDefaultDescription": "A hex that lashes out upon its destruction. Those who cross you will be punished.<br><br>Any Survivor who cleanses a Dull Totem will suffer from the <b>Oblivious</b> status effect for <span class=\"Highlight1\">{0} seconds</span>.<br><br>If any Hex Totem is cleansed, including this one, the auras of all Survivors are revealed for <span class=\"Highlight2\">{1} seconds</span>.<br><br><span class=\"FlavorText\">\"Bloody fool, you pulled the trigger on yourself.\" -Caleb Quinn</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Ukraine/iconPerks_hexRetribution.png"
    ],
    "id": "HexRetribution",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Hex: Retribution",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Insidious": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Trickery"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "4",
        "0"
      ],
      [
        "3",
        "0"
      ],
      [
        "2",
        "0"
      ]
    ],
    "perkDefaultDescription": "Unlocks the stealth ability.<br><br>Standing still for <span class=\"Highlight1\">{0} seconds</span> grants you the <b>Undetectable</b> status effect until you move or act again.",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_insidious.png"
    ],
    "id": "Insidious",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Killer"
    ],
    "displayName": "Insidious",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Uncommon",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "This_Is_Not_Happening": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Safeguard",
      "EPerkCategory::Strategy"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "10"
      ],
      [
        "20"
      ],
      [
        "30"
      ]
    ],
    "perkDefaultDescription": "You perform at your best when you are under extreme stress. Great Skill Check success zones when repairing, healing, and sabotaging get <span class=\"Highlight1\">{0}%</span> bigger when you are injured.",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_thisIsNotHappening.png"
    ],
    "id": "This_Is_Not_Happening",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Survivor"
    ],
    "displayName": "This Is Not Happening",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Uncommon",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Thanatophobia": {
    "associatedPlayerIndex": 268435459,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Hinderance"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "3",
        "12"
      ],
      [
        "3.5",
        "14"
      ],
      [
        "4",
        "16"
      ]
    ],
    "perkDefaultDescription": "Their courage fades in the face of undeniable mortality.<br>For each injured, dying, or hooked survivor, all survivors receive a penalty of <span class=\"Highlight1\">{0}%</span> to a maximum of <span class=\"Highlight1\">{1}%</span> to repair, healing and sabotage speeds.<br><span class=\"FlavorText\">\"She plays with us and revels in our pain.\"</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_thatanophobia.png"
    ],
    "id": "Thanatophobia",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Nurse"
    ],
    "displayName": "Thanatophobia",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Rare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "pop_goes_the_weasel": {
    "associatedPlayerIndex": 268435467,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Obstruction"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "25",
        "40"
      ],
      [
        "25",
        "50"
      ],
      [
        "25",
        "60"
      ]
    ],
    "perkDefaultDescription": "A deep bond with The Entity unlocks great strength. After Hooking a Survivor, the next generator you break is instantly regressed by <span class=\"Highlight1\">{0}%</span> of its total progress. Normal generator regression applies after the damage is done.<br><i>Pop Goes the Weasel</i> is active for <span class=\"Highlight1\">{1} seconds</span> after the Survivor is hooked.",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Guam/iconPerks_popGoesTheWeasel.png"
    ],
    "id": "pop_goes_the_weasel",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Pop Goes the Weasel",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Hex_Thrill_Of_The_Hunt": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Obstruction"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "10",
        "4"
      ],
      [
        "10",
        "5"
      ],
      [
        "10",
        "6"
      ]
    ],
    "perkDefaultDescription": "A Hex rooting its power on hope. The false hope of Survivors fills you with excitement and strengthen your totems. For each Dull and Hex totem remaining on the map gain a token. <br><li>Gain <span class=\"Highlight1\">{0}%</span> more Bloodpoints for actions in the Hunter category for each token.</li><li>Survivors' cleansing speed is reduced by <span class=\"Highlight2\">{1}%</span> for each token.</li><li>Gain a notification when someone starts working on a Hex totem.</li><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC3/iconPerks_thrillOfTheHunt.png"
    ],
    "id": "Hex_Thrill_Of_The_Hunt",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Killer"
    ],
    "displayName": "Hex: Thrill of the Hunt",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Deja_Vu": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Perception"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "3",
        "30"
      ],
      [
        "3",
        "45"
      ],
      [
        "3",
        "60"
      ]
    ],
    "perkDefaultDescription": "Unlocks potential in one's aura reading ability. Paranoia paired with the horror of failure drives you to avoid repeating the same mistakes.<br>The auras of <span class=\"Highlight1\">{0}</span> generators which are in close proximity to one another are revealed to you for <span class=\"Highlight2\">{1} seconds</span>, at the start of the match and each time a generator is completed.<br>If you are holding a map that can track generators, generators revealed by <i>Deja Vu</i> are added to the map.",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_dejaVu.png"
    ],
    "id": "Deja_Vu",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Survivor"
    ],
    "displayName": "Deja Vu",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_None",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "WellMakeIt": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Safeguard"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "100",
        "30"
      ],
      [
        "100",
        "60"
      ],
      [
        "100",
        "90"
      ]
    ],
    "perkDefaultDescription": "Helping others heightens your morale. For each survivor you rescue from a hook, gain an additional <span class=\"Highlight1\">{0}%</span> speed increase while healing others for <span class=\"Highlight3\">{1} seconds</span>. Cumulative healing bonuses cannot exceed 100%.<br><span class=\"FlavorText\">\"I'm confident we can all escape in one piece if we help each other.\"</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_wellMakeIt.png"
    ],
    "id": "WellMakeIt",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Survivor"
    ],
    "displayName": "We'll make it",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Vigil": {
    "associatedPlayerIndex": 11,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Support"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "8",
        "10",
        "15"
      ],
      [
        "8",
        "15",
        "15"
      ],
      [
        "8",
        "20",
        "15"
      ]
    ],
    "perkDefaultDescription": "You look over your friends even in dire situations. You and your allies within a <span class=\"Highlight1\">{0} meter</span> range recover from the <b>Exhausted, Hemorrhage, Mangled, Hindered</b> and <b>Blindness</b> status effects <span class=\"Highlight2\">{1}%</span> faster. Once out of range, this effect persists for <span class=\"Highlight4\">{2} seconds.</span><br>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "You look over your friends even in dire situations. You and your allies within a <span class=\"Highlight1\">{0} meter</span> range recover from the <b>Exhausted, Hemorrhage, Mangled, Hindered</b> and <b>Blindness</b> status effects <span class=\"Highlight2\">{1}%</span> faster. Once out of range, this effect persists for <span class=\"Highlight4\">{2} seconds.</span><br>",
    "iconPathList": [
      "/perks/England/iconPerks_vigil.png"
    ],
    "id": "Vigil",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Vigil",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Uncommon",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "OverwhelmingPresence": {
    "associatedPlayerIndex": 268435462,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Hinderance"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "80"
      ],
      [
        "90"
      ],
      [
        "100"
      ]
    ],
    "perkDefaultDescription": "Your presence alone instills great fear. Survivors within your Terror Radius suffer from inefficiency.<br>Affected Survivors' item consumption rates are increased by <span class=\"Highlight1\">{0}%</span>.<br><span class=\"FlavorText\">\"Shit!! I dropped the gauze!\"</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC4/iconPerks_overwhelmingPresence.png"
    ],
    "id": "OverwhelmingPresence",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Doctor"
    ],
    "displayName": "Overwhelming Presence",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Coulrophobia": {
    "associatedPlayerIndex": 268435467,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Hinderance"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "30"
      ],
      [
        "40"
      ],
      [
        "50"
      ]
    ],
    "perkDefaultDescription": "Your presence alone instills great fear. Survivors within your Terror Radius have a <span class=\"Highlight1\">{0}%</span> penalty to healing progress speed.<br>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Guam/iconPerks_coulrophobia.png"
    ],
    "id": "Coulrophobia",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Coulrophobia",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Nemesis": {
    "associatedPlayerIndex": 268435473,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "40",
        "4"
      ],
      [
        "50",
        "4"
      ],
      [
        "60",
        "4"
      ]
    ],
    "perkDefaultDescription": "You seek retribution on those who have wronged you. A Survivor who blinds or stuns you using a pallet or locker becomes your Obsession.<br><br>Anytime a new Survivor becomes the Obsession, they are affected by the <span class=\"Highlight1\">Oblivious</span> status effect for <span class=\"Highlight2\">{0} seconds</span> and their aura is shown to you for <span class=\"Highlight3\">{1} seconds</span>.<br><br><li>The Killer can only be <b>obsessed</b> with one Survivor at a time.</li><br><br><span class=\"FlavorText\">“Only a fool would spit in a demon’s face and declare victory.” -Renjiro’s Doctrine 4:9</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Sweden/iconPerks_nemesis.png"
    ],
    "id": "Nemesis",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Nemesis",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "MakeYourChoice": {
    "associatedPlayerIndex": 268435466,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Hinderance"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "32",
        "40",
        "40"
      ],
      [
        "32",
        "50",
        "50"
      ],
      [
        "32",
        "60",
        "60"
      ]
    ],
    "perkDefaultDescription": "When a Survivor rescues another from a hook at least <span class=\"Highlight1\">{0} meters</span> away from you, <i>Make your Choice</i> triggers and applies the <b><i>Exposed</i></b> status effect on the rescuer for <span class=\"Highlight2\">{1} seconds</span>.<br><i>Make your Choice</i> has a cooldown of <span class=\"Highlight3\">{2} seconds</span>. <br><span class=\"FlavorText\">\"You'd be surprised what tools can save a life.\" -Amanda Young</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Finland/iconPerks_makeYourChoice.png"
    ],
    "id": "MakeYourChoice",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Make your Choice",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Uncommon",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "No_One_Left_Behind": {
    "associatedPlayerIndex": -1,
    "mandatoryOnBloodWebLevel": -1,
    "teachableOnBloodWebLevel": -1,
    "atlantaTeachableLevel": -1,
    "perkCategory": [
      "EPerkCategory::Safeguard"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "50",
        "30"
      ],
      [
        "75",
        "40"
      ],
      [
        "100",
        "50"
      ]
    ],
    "perkDefaultDescription": "It is inconceivable to leave someone behind. Once at least one exit gate is opened, you gain the following effects:<br><li><span class=\"Highlight1\">{0}%</span> additional Bloodpoints for healing and unhooking other Survivors.</li><li><span class=\"Highlight2\">{1}%</span> bonus action speed when healing and unhooking other Survivors.</li><li>The auras of all other Survivors are revealed to you.</li>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_noOneLeftBehind.png"
    ],
    "id": "No_One_Left_Behind",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Survivor"
    ],
    "displayName": "No One Left Behind",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Play_With_Your_Food": {
    "associatedPlayerIndex": 268435461,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Chasing"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "3",
        "3"
      ],
      [
        "3",
        "4"
      ],
      [
        "3",
        "5"
      ]
    ],
    "perkDefaultDescription": "You become <b>obsessed</b> with one Survivor.<br>Every time you chase your obsession and let them escape, you receive a token up to a maximum of {0} tokens.<br>Each token increases your movement speed by <span class=\"Highlight1\">{1}%</span>.<br>Each offensive action spends one token.<br><li><i>The Killer can only be <b>obsessed</b> with one survivor at a time.</i></li><br><span class=\"FlavorText\">“You've fooled them, haven't you Michael? But not me.” -Dr. Sam Loomis</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC2/iconPerks_playWithYourFood.png"
    ],
    "id": "Play_With_Your_Food",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Shape"
    ],
    "displayName": "Play with your food",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Predator": {
    "associatedPlayerIndex": 268435457,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Tracking"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      
    ],
    "perkDefaultDescription": "",
    "perkLevel1Description": "Your acute tracking ability allows you to hone in on disturbances left by running survivors.<br>Scratch Marks left by survivors will spawn <span class=\"Highlight1\">slightly</span> closer together.<br><span class=\"FlavorText\">\"Never stop moving and hope you're always two steps ahead of the beast.\" -Notebook</span>",
    "perkLevel2Description": "Your acute tracking ability allows you to hone in on disturbances left by running survivors.<br>Scratch Marks left by survivors will spawn <span class=\"Highlight1\">moderately</span> closer together.<br><span class=\"FlavorText\">\"Never stop moving and hope you're always two steps ahead of the beast.\" -Notebook</span>",
    "perkLevel3Description": "Your acute tracking ability allows you to hone in on disturbances left by running survivors.<br>Scratch Marks left by survivors will spawn <span class=\"Highlight1\">considerably</span> closer together.<br><span class=\"FlavorText\">\"Never stop moving and hope you're always two steps ahead of the beast.\" -Notebook</span>",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_predator.png"
    ],
    "id": "Predator",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      "Banshee"
    ],
    "displayName": "Predator",
    "description": "OBSOLETE",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Rare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "QuickQuiet": {
    "associatedPlayerIndex": 1,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Navigation",
      "EPerkCategory::Concealment"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "100",
        "30"
      ],
      [
        "100",
        "25"
      ],
      [
        "100",
        "20"
      ]
    ],
    "perkDefaultDescription": "You do not make as much noise as others when quickly vaulting over obstacles or hiding in lockers. The vault and hide actions' noise detection and audio range is reduced by <span class=\"Highlight1\">{0}%</span>.<br><li>This effect can only be triggered once every <span class=\"Highlight2\">{1} seconds</span>.</li>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/iconPerks_quickAndQuiet.png"
    ],
    "id": "QuickQuiet",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Meg"
    ],
    "displayName": "Quick & Quiet",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": true,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Open_Handed": {
    "associatedPlayerIndex": 6,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Support",
      "EPerkCategory::Navigation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "4"
      ],
      [
        "6"
      ],
      [
        "8"
      ]
    ],
    "perkDefaultDescription": "Strengthens the potential of you and your team's aura reading abilities.<br><li>Increases aura reading ranges by <span class=\"Highlight1\">{0} meters</span>.</li><br><span class=\"FlavorText\">“Paying attention is what kept me alive through the years. That, and my good looks of course.” -Ace</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC3/iconPerks_openHanded.png"
    ],
    "id": "Open_Handed",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Ace"
    ],
    "displayName": "Open-Handed",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Uncommon",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "TerritorialImperative": {
    "associatedPlayerIndex": 268435463,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Tracking"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "3",
        "32",
        "30"
      ],
      [
        "3",
        "32",
        "25"
      ],
      [
        "3",
        "32",
        "20"
      ]
    ],
    "perkDefaultDescription": "Unlocks potential in one's aura reading ability. Survivors' auras are revealed to you for <span class=\"Highlight1\">{0} seconds</span> when they enter the basement and you are more than <span class=\"Highlight2\">{1} meters</span> away from the basement entrance.<br><i>Territorial Imperative</i> can only be triggered once every <span class=\"Highlight3\">{2} seconds</span>.",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC5/iconPerks_TerritorialImperative.png"
    ],
    "id": "TerritorialImperative",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Territorial Imperative",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Rare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Pharmacy": {
    "associatedPlayerIndex": 11,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Adaptation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "40",
        "8"
      ],
      [
        "60",
        "8"
      ],
      [
        "80",
        "8"
      ]
    ],
    "perkDefaultDescription": "You have a knack for finding medicine. Searches through chests are <span class=\"Highlight1\">{0}%</span> faster and the noises they cause along with their hearing distances are reduced by <span class=\"Highlight2\">{1} meters.</span><br><i>Pharmacy</i> guarantees an Emergency Med-Kit on your <b>first</b> completed chest search.<br>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "You have a knack for finding medicine. Searches through chests are <span class=\"Highlight1\">{0}%</span> faster and the noises they cause along with their hearing distances are reduced by <span class=\"Highlight2\">{1} meters.</span><br><i>Pharmacy</i> guarantees an Emergency Med-Kit on your <b>first</b> completed chest search.<br>",
    "iconPathList": [
      "/perks/England/iconPerks_pharmacy.png"
    ],
    "id": "Pharmacy",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Pharmacy",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Uncommon",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Up_The_Ante": {
    "associatedPlayerIndex": 6,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Support"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "1"
      ],
      [
        "2"
      ],
      [
        "3"
      ]
    ],
    "perkDefaultDescription": "All will be well in the end; you just know it. Your confidence strengthens the feeling of hope for those around you. For each other Survivor still alive, grant a <span class=\"Highlight1\">{0}%</span> bonus of luck to all remaining Survivors.<br><span class=\"FlavorText\">“What can I say? I’m just a very lucky guy… I’m sure some of it will rub off on you.” -Ace</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC3/iconPerks_upTheAnte.png"
    ],
    "id": "Up_The_Ante",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Ace"
    ],
    "displayName": "Up the Ante",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::UltraRare",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "Surveillance": {
    "associatedPlayerIndex": 268435466,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Obstruction"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "8",
        "8"
      ],
      [
        "12",
        "8"
      ],
      [
        "16",
        "8"
      ]
    ],
    "perkDefaultDescription": "Unlocks potential in one's aura reading ability. Any regressing generator will be highlighted by a white aura. If the regression is interrupted on a generator, it will be highlighted by a yellow aura for <span class=\"Highlight1\">{0} seconds</span>.<br>Noises created by generator repairs are audible at an additional <span class=\"Highlight2\">{1} meters</span>.<br><span class=\"FlavorText\">\"Are you gonna behave?\" -Amanda Young</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Finland/iconPerks_surveillance.png"
    ],
    "id": "Surveillance",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Surveillance",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Uncommon",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "DecisiveStrike": {
    "associatedPlayerIndex": 5,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Adaptation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Rare",
      "EItemRarity::VeryRare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "40",
        "5"
      ],
      [
        "50",
        "5"
      ],
      [
        "60",
        "5"
      ]
    ],
    "perkDefaultDescription": "Using whatever is at hand, you stab at your aggressor in an ultimate attempt to escape.<br>After being unhooked or unhooking yourself, <i>Decisive Strike</i> will become active and useable for <span class=\"Highlight1\">{0} seconds</span>.<br>While <i>Decisive Strike</i> is active, when grabbed by The Killer, succeed a skill-check to automatically escape the killer's grasp and stun The Killer for <span class=\"Highlight1\">{1} seconds</span>.<br><li>Succeeding or failing the <i>Decisive Strike</i> Skill Check will disable <i>Decisive Strike</i>.</li><li>Successfully stunning the killer will result in you becoming the Obsession.</li><li><i>Increases your chances of being the Obsession.</i></li><li><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i></li><br><span class=\"FlavorText\">“There's nothing to be scared of.” -Laurie Strode</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/DLC2/iconPerks_decisiveStrike.png"
    ],
    "id": "DecisiveStrike",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      "Laurie"
    ],
    "displayName": "Decisive Strike",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Uncommon",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "CorruptIntervention": {
    "associatedPlayerIndex": 268435470,
    "mandatoryOnBloodWebLevel": 5,
    "teachableOnBloodWebLevel": 30,
    "atlantaTeachableLevel": 20,
    "perkCategory": [
      "EPerkCategory::Obstruction"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "3",
        "80"
      ],
      [
        "3",
        "100"
      ],
      [
        "3",
        "120"
      ]
    ],
    "perkDefaultDescription": "Your prayers invoke a dark power that meddles with the Survivors’s chances of survival. <span class=\"Highlight1\">{0} generators</span> located furthest from you are blocked by The Entity for <span class=\"Highlight1\">{1} seconds</span> at the start of the trial.<br>Survivors cannot repair these generators for the duration. Affected generators are highlighted by a white aura.<br><br><span class=\"FlavorText\">“It shall be known across the land that the Gods curse the unfaithful.” (The Tablet of Adiris, 3.7.)</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Mali/iconPerks_corruptIntervention.png"
    ],
    "id": "CorruptIntervention",
    "type": "EInventoryItemType::SlasherPerk",
    "tags": [
      
    ],
    "displayName": "Corrupt Intervention",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Slasher",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "BoilOver": {
    "associatedPlayerIndex": 10,
    "mandatoryOnBloodWebLevel": 15,
    "teachableOnBloodWebLevel": 40,
    "atlantaTeachableLevel": 40,
    "perkCategory": [
      "EPerkCategory::Adaptation"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Rare",
      "EItemRarity::VeryRare"
    ],
    "perkLevelTunables": [
      [
        "25",
        "10"
      ],
      [
        "50",
        "12"
      ],
      [
        "75",
        "14"
      ]
    ],
    "perkDefaultDescription": "You are a battler and do everything to escape a foe's grasp. Your struggling effects on The Killer are increased by <span class=\"Highlight1\">{0}%</span>. <br>You obscure The Killer's ability to see hook auras within <span class=\"Highlight1\">{1} meters</span>.<br><span class=\"FlavorText\">“Buck and Wild,<br> Swing to be free, <br>Your hands just can’t keep ahold of me.”<br>-Kate Denson’s “Boil Over”</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Kate/iconPerks_boilOver.png"
    ],
    "id": "BoilOver",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Boil Over",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  },
  "WindowsOfOpportunity": {
    "associatedPlayerIndex": 10,
    "mandatoryOnBloodWebLevel": 10,
    "teachableOnBloodWebLevel": 35,
    "atlantaTeachableLevel": 30,
    "perkCategory": [
      "EPerkCategory::Perception"
    ],
    "perkLevelRarity": [
      "EItemRarity::Uncommon",
      "EItemRarity::Uncommon",
      "EItemRarity::Rare"
    ],
    "perkLevelTunables": [
      [
        "20",
        "30"
      ],
      [
        "20",
        "25"
      ],
      [
        "20",
        "20"
      ]
    ],
    "perkDefaultDescription": "Unlocks potential in one's aura reading ability. Auras of pallets, breakable walls, and vault locations are revealed to you when within a <span class=\"Highlight1\">{0} meter</span> range. <br><i>Windows of Opportunity</i> has a cooldown of <span class=\"Highlight1\">{1} seconds</span> when vaulting or dropping a pallet during a chase. <br><span class=\"FlavorText\">“Rise and shine, work hard, carve out your name, <br>Take aim, pull the trigger, hit the bulls eye for fame, <br>Know the value of faith, an’ family, and don’t you complain,<br>Open wide, your windows of opportunity.”<br>-Kate Denson's \"Windows of Opportunity\"</span>",
    "perkLevel1Description": "",
    "perkLevel2Description": "",
    "perkLevel3Description": "",
    "perkUnlicensedDescriptionOverride": "",
    "iconPathList": [
      "/perks/Kate/iconPerks_windowsOfOpportunity.png"
    ],
    "id": "WindowsOfOpportunity",
    "type": "EInventoryItemType::CamperPerk",
    "tags": [
      
    ],
    "displayName": "Windows of Opportunity",
    "description": "",
    "handPosition": "EItemHandPosition::None",
    "role": "EPlayerRole::VE_Camper",
    "rarity": "EItemRarity::Common",
    "inventory": true,
    "chest": true,
    "requiredKillerAbility": "EKillerAbilities::VE_None",
    "isInNonViolentBuild": false,
    "isAvailableInAtlantaBuild": true,
    "antiDLC": false,
    "bloodWeb": true
  }
 }
 keys: any[] = []

      constructor(role: string){
        this.keys = Object.keys(this.data).filter( (perkName: string) => {
          return this.data[perkName].role === role && this.data[perkName].inventory
        })
        // console.log(this.keys)
      }

       getRandomPerk () {
        // get random perk
        const randomIndex = Math.floor(Math.random() * this.keys.length)
        const randomPerk: any = this.keys.splice(randomIndex, 1)

        return this.data[randomPerk]
        
      }
}