import type { Move } from "@/@types/move";
export const MOVES: Move[] = [
    {
        "id": "ACID",
        "name": "Acid",
        "type": "poison",
        "power": 6,
        "energy": 0,
        "energyGain": 5,
        "cooldown": 1000,
        "archetype": "Low Quality"
    },
    {
        "id": "ACID_SPRAY",
        "name": "Acid Spray",
        "type": "poison",
        "power": 20,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -2
        ],
        "buffApplyChance": 1,
        "buffTarget": "opponent",
        "archetype": "Debuff"
    },
    {
        "id": "ACROBATICS",
        "name": "Acrobatics",
        "type": "flying",
        "power": 110,
        "energy": 60,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "AERIAL_ACE",
        "name": "Aerial Ace",
        "type": "flying",
        "power": 55,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "AEROBLAST",
        "name": "Aeroblast",
        "type": "flying",
        "power": 170,
        "energy": 75,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            2,
            0
        ],
        "buffApplyChance": 0.125,
        "buffTarget": "self",
        "archetype": "Boost Nuke"
    },
    {
        "id": "AIR_CUTTER",
        "name": "Air Cutter",
        "type": "flying",
        "power": 60,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "AIR_SLASH",
        "name": "Air Slash",
        "type": "flying",
        "power": 9,
        "energy": 0,
        "energyGain": 9,
        "cooldown": 1500,
        "archetype": "General"
    },
    {
        "id": "ANCIENT_POWER",
        "name": "Ancient Power",
        "type": "rock",
        "power": 60,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            1,
            1
        ],
        "buffApplyChance": 0.1,
        "buffTarget": "self",
        "archetype": "Boost"
    },
    {
        "id": "AQUA_JET",
        "name": "Aqua Jet",
        "type": "water",
        "power": 45,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "AQUA_TAIL",
        "name": "Aqua Tail",
        "type": "water",
        "power": 55,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "ASTONISH",
        "name": "Astonish",
        "type": "ghost",
        "power": 9,
        "energy": 0,
        "energyGain": 10,
        "cooldown": 1500,
        "archetype": "General"
    },
    {
        "id": "AURA_SPHERE",
        "name": "Aura Sphere",
        "type": "fighting",
        "power": 100,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "AURORA_BEAM",
        "name": "Aurora Beam",
        "type": "ice",
        "power": 80,
        "energy": 60,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "AVALANCHE",
        "name": "Avalanche",
        "type": "ice",
        "power": 90,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "BITE",
        "name": "Bite",
        "type": "dark",
        "power": 4,
        "energy": 0,
        "energyGain": 2,
        "cooldown": 500,
        "archetype": "Heavy Damage"
    },
    {
        "id": "BLAST_BURN",
        "name": "Blast Burn",
        "type": "fire",
        "power": 110,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "BLEAKWIND_STORM",
        "name": "Bleakwind Storm",
        "type": "flying",
        "power": 60,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -1,
            0
        ],
        "buffApplyChance": 1,
        "buffTarget": "opponent",
        "archetype": "Debuff"
    },
    {
        "id": "BLIZZARD",
        "name": "Blizzard",
        "type": "ice",
        "power": 140,
        "energy": 75,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "BODY_SLAM",
        "name": "Body Slam",
        "type": "normal",
        "power": 60,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "BOOMBURST",
        "name": "Boomburst",
        "type": "normal",
        "power": 150,
        "energy": 70,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "BONE_CLUB",
        "name": "Bone Club",
        "type": "ground",
        "power": 40,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "BRAVE_BIRD",
        "name": "Brave Bird",
        "type": "flying",
        "power": 130,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -3
        ],
        "buffApplyChance": 1,
        "buffTarget": "self",
        "archetype": "Self-Debuff Nuke"
    },
    {
        "id": "BREAKING_SWIPE",
        "name": "Breaking Swipe",
        "type": "dragon",
        "power": 50,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -1,
            0
        ],
        "buffApplyChance": 0.5,
        "buffTarget": "opponent",
        "archetype": "Debuff Spam/Bait"
    },
    {
        "id": "BRICK_BREAK",
        "name": "Brick Break",
        "type": "fighting",
        "power": 40,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -1
        ],
        "buffApplyChance": 1,
        "buffTarget": "opponent",
        "archetype": "Debuff Spam/Bait"
    },
    {
        "id": "BRUTAL_SWING",
        "name": "Brutal Swing",
        "type": "dark",
        "power": 65,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "BRINE",
        "name": "Brine",
        "type": "water",
        "power": 60,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "BUBBLE",
        "name": "Bubble",
        "type": "water",
        "power": 8,
        "energy": 0,
        "energyGain": 11,
        "cooldown": 1500,
        "archetype": "Fast Charge"
    },
    {
        "id": "BUBBLE_BEAM",
        "name": "Bubble Beam",
        "type": "water",
        "power": 25,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -1,
            0
        ],
        "buffApplyChance": 1,
        "buffTarget": "opponent",
        "archetype": "Debuff Spam/Bait"
    },
    {
        "id": "BUG_BITE",
        "name": "Bug Bite",
        "type": "bug",
        "power": 3,
        "energy": 0,
        "energyGain": 3,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "BUG_BUZZ",
        "name": "Bug Buzz",
        "type": "bug",
        "power": 100,
        "energy": 60,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -1
        ],
        "buffApplyChance": 0.3,
        "buffTarget": "opponent",
        "archetype": "High Energy Debuff"
    },
    {
        "id": "BULLDOZE",
        "name": "Bulldoze",
        "type": "ground",
        "power": 80,
        "energy": 60,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "BULLET_PUNCH",
        "name": "Bullet Punch",
        "type": "steel",
        "power": 6,
        "energy": 0,
        "energyGain": 7,
        "cooldown": 1000,
        "archetype": "General"
    },
    {
        "id": "BULLET_SEED",
        "name": "Bullet Seed",
        "type": "grass",
        "power": 5,
        "energy": 0,
        "energyGain": 13,
        "cooldown": 1500,
        "archetype": "Fast Charge"
    },
    {
        "id": "CHARGE_BEAM",
        "name": "Charge Beam",
        "type": "electric",
        "power": 5,
        "energy": 0,
        "energyGain": 11,
        "cooldown": 1500,
        "archetype": "Fast Charge"
    },
    {
        "id": "CHARM",
        "name": "Charm",
        "type": "fairy",
        "power": 15,
        "energy": 0,
        "energyGain": 6,
        "cooldown": 1500,
        "archetype": "Heavy Damage"
    },
    {
        "id": "CLOSE_COMBAT",
        "name": "Close Combat",
        "type": "fighting",
        "power": 100,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -2
        ],
        "buffApplyChance": 1,
        "buffTarget": "self",
        "archetype": "Self-Debuff"
    },
    {
        "id": "CONFUSION",
        "name": "Confusion",
        "type": "psychic",
        "power": 16,
        "energy": 0,
        "energyGain": 12,
        "cooldown": 2000,
        "archetype": "Multipurpose"
    },
    {
        "id": "COUNTER",
        "name": "Counter",
        "type": "fighting",
        "power": 8,
        "energy": 0,
        "energyGain": 7,
        "cooldown": 1000,
        "archetype": "Multipurpose"
    },
    {
        "id": "CRABHAMMER",
        "name": "Crabhammer",
        "type": "water",
        "power": 85,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            2,
            0
        ],
        "buffApplyChance": 0.125,
        "buffTarget": "self",
        "archetype": "Boost"
    },
    {
        "id": "CROSS_CHOP",
        "name": "Cross Chop",
        "type": "fighting",
        "power": 55,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "CROSS_POISON",
        "name": "Cross Poison",
        "type": "poison",
        "power": 50,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            2,
            0
        ],
        "buffApplyChance": 0.125,
        "buffTarget": "self",
        "archetype": "Boost Spam/Bait"
    },
    {
        "id": "CRUNCH",
        "name": "Crunch",
        "type": "dark",
        "power": 70,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -1
        ],
        "buffApplyChance": 0.3,
        "buffTarget": "opponent",
        "archetype": "Debuff"
    },
    {
        "id": "CUT",
        "name": "Cut",
        "type": "normal",
        "power": 3,
        "energy": 0,
        "energyGain": 2,
        "cooldown": 500,
        "archetype": "Low Quality"
    },
    {
        "id": "DARKEST_LARIAT",
        "name": "Darkest Lariat",
        "type": "dark",
        "power": 120,
        "energy": 60,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "DARK_PULSE",
        "name": "Dark Pulse",
        "type": "dark",
        "power": 80,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "DAZZLING_GLEAM",
        "name": "Dazzling Gleam",
        "type": "fairy",
        "power": 110,
        "energy": 70,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "DIG",
        "name": "Dig",
        "type": "ground",
        "power": 80,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "DISARMING_VOICE",
        "name": "Disarming Voice",
        "type": "fairy",
        "power": 70,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "DISCHARGE",
        "name": "Discharge",
        "type": "electric",
        "power": 65,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "DOOM_DESIRE",
        "name": "Doom Desire",
        "type": "steel",
        "power": 75,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "DOUBLE_IRON_BASH",
        "name": "Double Iron Bash",
        "type": "steel",
        "power": 50,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "DOUBLE_KICK",
        "name": "Double Kick",
        "type": "fighting",
        "power": 8,
        "energy": 0,
        "energyGain": 12,
        "cooldown": 1500,
        "archetype": "Multipurpose"
    },
    {
        "id": "DRACO_METEOR",
        "name": "Draco Meteor",
        "type": "dragon",
        "power": 150,
        "energy": 65,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -2,
            0
        ],
        "buffApplyChance": 1,
        "buffTarget": "self",
        "archetype": "Self-Debuff Nuke"
    },
    {
        "id": "DRAGON_ASCENT",
        "name": "Dragon Ascent",
        "type": "flying",
        "power": 150,
        "energy": 70,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -1
        ],
        "buffApplyChance": 1,
        "buffTarget": "self",
        "archetype": "Self-Debuff Nuke"
    },
    {
        "id": "DRAGON_BREATH",
        "name": "Dragon Breath",
        "type": "dragon",
        "power": 4,
        "energy": 0,
        "energyGain": 3,
        "cooldown": 500,
        "archetype": "Multipurpose"
    },
    {
        "id": "DRAGON_CLAW",
        "name": "Dragon Claw",
        "type": "dragon",
        "power": 50,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "DRAGON_PULSE",
        "name": "Dragon Pulse",
        "type": "dragon",
        "power": 90,
        "energy": 60,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "DRAGON_TAIL",
        "name": "Dragon Tail",
        "type": "dragon",
        "power": 13,
        "energy": 0,
        "energyGain": 9,
        "cooldown": 1500,
        "archetype": "Multipurpose"
    },
    {
        "id": "DRAIN_PUNCH",
        "name": "Drain Punch",
        "type": "fighting",
        "power": 20,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            1
        ],
        "buffApplyChance": 1,
        "buffTarget": "self",
        "archetype": "Boost Spam/Bait"
    },
    {
        "id": "DRAINING_KISS",
        "name": "Draining Kiss",
        "type": "fairy",
        "power": 60,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "DRILL_PECK",
        "name": "Drill Peck",
        "type": "flying",
        "power": 65,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "DRILL_RUN",
        "name": "Drill Run",
        "type": "ground",
        "power": 80,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "DYNAMIC_PUNCH",
        "name": "Dynamic Punch",
        "type": "fighting",
        "power": 90,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "EARTHQUAKE",
        "name": "Earthquake",
        "type": "ground",
        "power": 110,
        "energy": 65,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "EARTH_POWER",
        "name": "Earth Power",
        "type": "ground",
        "power": 90,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -1
        ],
        "buffApplyChance": 0.1,
        "buffTarget": "opponent",
        "archetype": "High Energy Debuff"
    },
    {
        "id": "EMBER",
        "name": "Ember",
        "type": "fire",
        "power": 7,
        "energy": 0,
        "energyGain": 6,
        "cooldown": 1000,
        "archetype": "Heavy Damage"
    },
    {
        "id": "ENERGY_BALL",
        "name": "Energy Ball",
        "type": "grass",
        "power": 90,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -1
        ],
        "buffApplyChance": 0.1,
        "buffTarget": "opponent",
        "archetype": "High Energy Debuff"
    },
    {
        "id": "EXTRASENSORY",
        "name": "Extrasensory",
        "type": "psychic",
        "power": 8,
        "energy": 0,
        "energyGain": 10,
        "cooldown": 1500,
        "archetype": "General"
    },
    {
        "id": "FEINT_ATTACK",
        "name": "Feint Attack",
        "type": "dark",
        "power": 6,
        "energy": 0,
        "energyGain": 6,
        "cooldown": 1000,
        "archetype": "General"
    },
    {
        "id": "FELL_STINGER",
        "name": "Fell Stinger",
        "type": "bug",
        "power": 20,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            1,
            0
        ],
        "buffApplyChance": 1,
        "buffTarget": "self",
        "archetype": "Boost Spam/Bait"
    },
    {
        "id": "FIRE_BLAST",
        "name": "Fire Blast",
        "type": "fire",
        "power": 140,
        "energy": 80,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "FIRE_FANG",
        "name": "Fire Fang",
        "type": "fire",
        "power": 8,
        "energy": 0,
        "energyGain": 5,
        "cooldown": 1000,
        "archetype": "Heavy Damage"
    },
    {
        "id": "FIRE_PUNCH",
        "name": "Fire Punch",
        "type": "fire",
        "power": 55,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "BLAZE_KICK",
        "name": "Blaze Kick",
        "type": "fire",
        "power": 60,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "FAIRY_WIND",
        "name": "Fairy Wind",
        "type": "fairy",
        "power": 3,
        "energy": 0,
        "energyGain": 9,
        "cooldown": 1000,
        "archetype": "Fast Charge"
    },
    {
        "id": "FEATHER_DANCE",
        "name": "Feather Dance",
        "type": "flying",
        "power": 35,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -2,
            0
        ],
        "buffApplyChance": 1,
        "buffTarget": "opponent",
        "archetype": "Debuff"
    },
    {
        "id": "FIRE_SPIN",
        "name": "Fire Spin",
        "type": "fire",
        "power": 10,
        "energy": 0,
        "energyGain": 10,
        "cooldown": 1500,
        "archetype": "General"
    },
    {
        "id": "FLAME_BURST",
        "name": "Flame Burst",
        "type": "fire",
        "power": 70,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "FLAME_CHARGE",
        "name": "Flame Charge",
        "type": "fire",
        "power": 65,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            1,
            0
        ],
        "buffApplyChance": 1,
        "buffTarget": "self",
        "archetype": "Boost"
    },
    {
        "id": "FLAME_WHEEL",
        "name": "Flame Wheel",
        "type": "fire",
        "power": 60,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "FLAMETHROWER",
        "name": "Flamethrower",
        "type": "fire",
        "power": 90,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "FLASH_CANNON",
        "name": "Flash Cannon",
        "type": "steel",
        "power": 110,
        "energy": 70,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "FLY",
        "name": "Fly",
        "type": "flying",
        "power": 80,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "FLYING_PRESS",
        "name": "Flying Press",
        "type": "fighting",
        "power": 90,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "FOCUS_BLAST",
        "name": "Focus Blast",
        "type": "fighting",
        "power": 150,
        "energy": 75,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "FORCE_PALM",
        "name": "Force Palm",
        "type": "fighting",
        "power": 13,
        "energy": 0,
        "energyGain": 10,
        "cooldown": 1500,
        "archetype": "Multipurpose"
    },
    {
        "id": "FOUL_PLAY",
        "name": "Foul Play",
        "type": "dark",
        "power": 70,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "FRENZY_PLANT",
        "name": "Frenzy Plant",
        "type": "grass",
        "power": 100,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "FROST_BREATH",
        "name": "Frost Breath",
        "type": "ice",
        "power": 7,
        "energy": 0,
        "energyGain": 5,
        "cooldown": 1000,
        "archetype": "Heavy Damage"
    },
    {
        "id": "FRUSTRATION",
        "name": "Frustration",
        "type": "normal",
        "power": 10,
        "energy": 70,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "FURY_CUTTER",
        "name": "Fury Cutter",
        "type": "bug",
        "power": 2,
        "energy": 0,
        "energyGain": 4,
        "cooldown": 500,
        "archetype": "Fast Charge"
    },
    {
        "id": "FUSION_BOLT",
        "name": "Fusion Bolt",
        "type": "electric",
        "power": 90,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "FUSION_FLARE",
        "name": "Fusion Flare",
        "type": "fire",
        "power": 90,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "FUTURE_SIGHT",
        "name": "Future Sight",
        "type": "psychic",
        "power": 120,
        "energy": 65,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "GEOMANCY",
        "name": "Geomancy",
        "type": "fairy",
        "power": 4,
        "energy": 0,
        "energyGain": 13,
        "cooldown": 1500,
        "archetype": "Fast Charge"
    },
    {
        "id": "GIGA_DRAIN",
        "name": "Giga Drain",
        "type": "grass",
        "power": 50,
        "energy": 80,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "GIGA_IMPACT",
        "name": "Giga Impact",
        "type": "normal",
        "power": 150,
        "energy": 80,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "GLACIATE",
        "name": "Glaciate",
        "type": "ice",
        "power": 60,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -1,
            0
        ],
        "buffApplyChance": 1,
        "buffTarget": "opponent",
        "archetype": "Debuff"
    },
    {
        "id": "GRASS_KNOT",
        "name": "Grass Knot",
        "type": "grass",
        "power": 90,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "GUNK_SHOT",
        "name": "Gunk Shot",
        "type": "poison",
        "power": 130,
        "energy": 75,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "GUST",
        "name": "Gust",
        "type": "flying",
        "power": 16,
        "energy": 0,
        "energyGain": 12,
        "cooldown": 2000,
        "archetype": "Multipurpose"
    },
    {
        "id": "GYRO_BALL",
        "name": "Gyro Ball",
        "type": "steel",
        "power": 80,
        "energy": 60,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "HEART_STAMP",
        "name": "Heart Stamp",
        "type": "psychic",
        "power": 40,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "HEAT_WAVE",
        "name": "Heat Wave",
        "type": "fire",
        "power": 95,
        "energy": 75,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "HEAVY_SLAM",
        "name": "Heavy Slam",
        "type": "steel",
        "power": 70,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "HEX",
        "name": "Hex",
        "type": "ghost",
        "power": 6,
        "energy": 0,
        "energyGain": 12,
        "cooldown": 1500,
        "archetype": "Fast Charge"
    },
    {
        "id": "HIDDEN_POWER_BUG",
        "name": "Hidden Power (Bug)",
        "type": "bug",
        "power": 9,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1500,
        "archetype": "Low Quality"
    },
    {
        "id": "HIDDEN_POWER_DARK",
        "name": "Hidden Power (Dark)",
        "type": "dark",
        "power": 9,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1500,
        "archetype": "Low Quality"
    },
    {
        "id": "HIDDEN_POWER_DRAGON",
        "name": "Hidden Power (Dragon)",
        "type": "dragon",
        "power": 9,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1500,
        "archetype": "Low Quality"
    },
    {
        "id": "HIDDEN_POWER_ELECTRIC",
        "name": "Hidden Power (Electric)",
        "type": "electric",
        "power": 9,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1500,
        "archetype": "Low Quality"
    },
    {
        "id": "HIDDEN_POWER_FIGHTING",
        "name": "Hidden Power (Fighting)",
        "type": "fighting",
        "power": 9,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1500,
        "archetype": "Low Quality"
    },
    {
        "id": "HIDDEN_POWER_FIRE",
        "name": "Hidden Power (Fire)",
        "type": "fire",
        "power": 9,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1500,
        "archetype": "Low Quality"
    },
    {
        "id": "HIDDEN_POWER_FLYING",
        "name": "Hidden Power (Flying)",
        "type": "flying",
        "power": 9,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1500,
        "archetype": "Low Quality"
    },
    {
        "id": "HIDDEN_POWER_GHOST",
        "name": "Hidden Power (Ghost)",
        "type": "ghost",
        "power": 9,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1500,
        "archetype": "Low Quality"
    },
    {
        "id": "HIDDEN_POWER_GRASS",
        "name": "Hidden Power (Grass)",
        "type": "grass",
        "power": 9,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1500,
        "archetype": "Low Quality"
    },
    {
        "id": "HIDDEN_POWER_GROUND",
        "name": "Hidden Power (Ground)",
        "type": "ground",
        "power": 9,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1500,
        "archetype": "Low Quality"
    },
    {
        "id": "HIDDEN_POWER_ICE",
        "name": "Hidden Power (Ice)",
        "type": "ice",
        "power": 9,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1500,
        "archetype": "Low Quality"
    },
    {
        "id": "HIDDEN_POWER_POISON",
        "name": "Hidden Power (Poison)",
        "type": "poison",
        "power": 9,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1500,
        "archetype": "Low Quality"
    },
    {
        "id": "HIDDEN_POWER_PSYCHIC",
        "name": "Hidden Power (Psychic)",
        "type": "psychic",
        "power": 9,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1500,
        "archetype": "Low Quality"
    },
    {
        "id": "HIDDEN_POWER_ROCK",
        "name": "Hidden Power (Rock)",
        "type": "rock",
        "power": 9,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1500,
        "archetype": "Low Quality"
    },
    {
        "id": "HIDDEN_POWER_STEEL",
        "name": "Hidden Power (Steel)",
        "type": "steel",
        "power": 9,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1500,
        "archetype": "Low Quality"
    },
    {
        "id": "HIDDEN_POWER_WATER",
        "name": "Hidden Power (Water)",
        "type": "water",
        "power": 9,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1500,
        "archetype": "Low Quality"
    },
    {
        "id": "HIGH_HORSEPOWER",
        "name": "High Horsepower",
        "type": "ground",
        "power": 100,
        "energy": 60,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "HIGH_JUMP_KICK",
        "name": "High Jump Kick",
        "type": "fighting",
        "power": 110,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -4
        ],
        "buffApplyChance": 0.1,
        "buffTarget": "self",
        "archetype": "Self-Debuff Nuke"
    },
    {
        "id": "HORN_ATTACK",
        "name": "Horn Attack",
        "type": "normal",
        "power": 40,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "HURRICANE",
        "name": "Hurricane",
        "type": "flying",
        "power": 110,
        "energy": 65,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "HYDRO_CANNON",
        "name": "Hydro Cannon",
        "type": "water",
        "power": 80,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "HYDRO_PUMP",
        "name": "Hydro Pump",
        "type": "water",
        "power": 130,
        "energy": 75,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "HYDRO_PUMP_BLASTOISE",
        "name": "Hydro Pump Blastoise",
        "type": "water",
        "power": 90,
        "energy": 80,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "HYPER_BEAM",
        "name": "Hyper Beam",
        "type": "normal",
        "power": 150,
        "energy": 80,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "HYPER_FANG",
        "name": "Hyper Fang",
        "type": "normal",
        "power": 80,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "ICE_BEAM",
        "name": "Ice Beam",
        "type": "ice",
        "power": 90,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "ICE_FANG",
        "name": "Ice Fang",
        "type": "ice",
        "power": 8,
        "energy": 0,
        "energyGain": 5,
        "cooldown": 1000,
        "archetype": "Heavy Damage"
    },
    {
        "id": "ICE_PUNCH",
        "name": "Ice Punch",
        "type": "ice",
        "power": 55,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "ICE_SHARD",
        "name": "Ice Shard",
        "type": "ice",
        "power": 9,
        "energy": 0,
        "energyGain": 10,
        "cooldown": 1500,
        "archetype": "General"
    },
    {
        "id": "ICICLE_SPEAR",
        "name": "Icicle Spear",
        "type": "ice",
        "power": 65,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "ICY_WIND",
        "name": "Icy Wind",
        "type": "ice",
        "power": 60,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -1,
            0
        ],
        "buffApplyChance": 1,
        "buffTarget": "opponent",
        "archetype": "Debuff"
    },
    {
        "id": "INCINERATE",
        "name": "Incinerate",
        "type": "fire",
        "power": 20,
        "energy": 0,
        "energyGain": 20,
        "cooldown": 2500,
        "archetype": "Multipurpose"
    },
    {
        "id": "INFESTATION",
        "name": "Infestation",
        "type": "bug",
        "power": 6,
        "energy": 0,
        "energyGain": 12,
        "cooldown": 1500,
        "archetype": "Fast Charge"
    },
    {
        "id": "IRON_HEAD",
        "name": "Iron Head",
        "type": "steel",
        "power": 70,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "IRON_TAIL",
        "name": "Iron Tail",
        "type": "steel",
        "power": 10,
        "energy": 0,
        "energyGain": 7,
        "cooldown": 1500,
        "archetype": "General"
    },
    {
        "id": "KARATE_CHOP",
        "name": "Karate Chop",
        "type": "fighting",
        "power": 5,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1000,
        "archetype": "Fast Charge"
    },
    {
        "id": "LAST_RESORT",
        "name": "Last Resort",
        "type": "normal",
        "power": 90,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "LEAF_BLADE",
        "name": "Leaf Blade",
        "type": "grass",
        "power": 70,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "LEAF_TORNADO",
        "name": "Leaf Tornado",
        "type": "grass",
        "power": 45,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -2,
            0
        ],
        "buffApplyChance": 0.5,
        "buffTarget": "opponent",
        "archetype": "Debuff Spam/Bait"
    },
    {
        "id": "LEAF_STORM",
        "name": "Leaf Storm",
        "type": "grass",
        "power": 130,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -2,
            0
        ],
        "buffApplyChance": 1,
        "buffTarget": "self",
        "archetype": "Self-Debuff Nuke"
    },
    {
        "id": "LEAFAGE",
        "name": "Leafage",
        "type": "grass",
        "power": 6,
        "energy": 0,
        "energyGain": 7,
        "cooldown": 1000,
        "archetype": "General"
    },
    {
        "id": "LICK",
        "name": "Lick",
        "type": "ghost",
        "power": 3,
        "energy": 0,
        "energyGain": 3,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "LIQUIDATION",
        "name": "Liquidation",
        "type": "water",
        "power": 70,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -1
        ],
        "buffApplyChance": 0.3,
        "buffTarget": "opponent",
        "archetype": "Debuff"
    },
    {
        "id": "LOCK_ON",
        "name": "Lock On",
        "type": "normal",
        "power": 1,
        "energy": 0,
        "energyGain": 5,
        "cooldown": 500,
        "archetype": "Fast Charge"
    },
    {
        "id": "LOW_KICK",
        "name": "Low Kick",
        "type": "fighting",
        "power": 4,
        "energy": 0,
        "energyGain": 5,
        "cooldown": 1000,
        "archetype": "Low Quality"
    },
    {
        "id": "LOW_SWEEP",
        "name": "Low Sweep",
        "type": "fighting",
        "power": 40,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "LUNGE",
        "name": "Lunge",
        "type": "bug",
        "power": 60,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -1,
            0
        ],
        "buffApplyChance": 1,
        "buffTarget": "opponent",
        "archetype": "Debuff"
    },
    {
        "id": "LUSTER_PURGE",
        "name": "Luster Purge",
        "type": "psychic",
        "power": 120,
        "energy": 60,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -1
        ],
        "buffApplyChance": 0.5,
        "buffTarget": "opponent",
        "archetype": "Debuff Nuke"
    },
    {
        "id": "MAGICAL_LEAF",
        "name": "Magical Leaf",
        "type": "grass",
        "power": 10,
        "energy": 0,
        "energyGain": 10,
        "cooldown": 1500,
        "archetype": "General"
    },
    {
        "id": "MAGMA_STORM",
        "name": "Magma Storm",
        "type": "fire",
        "power": 65,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "MAGNET_BOMB",
        "name": "Magnet Bomb",
        "type": "steel",
        "power": 70,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "MEGA_DRAIN",
        "name": "Mega Drain",
        "type": "grass",
        "power": 25,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "MEGAHORN",
        "name": "Megahorn",
        "type": "bug",
        "power": 110,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "METAL_CLAW",
        "name": "Metal Claw",
        "type": "steel",
        "power": 5,
        "energy": 0,
        "energyGain": 6,
        "cooldown": 1000,
        "archetype": "Low Quality"
    },
    {
        "id": "METAL_SOUND",
        "name": "Metal Sound",
        "type": "steel",
        "power": 3,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1000,
        "archetype": "Fast Charge"
    },
    {
        "id": "METEOR_BEAM",
        "name": "Meteor Beam",
        "type": "rock",
        "power": 120,
        "energy": 60,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            1,
            0
        ],
        "buffApplyChance": 1,
        "buffTarget": "self",
        "archetype": "Boost Nuke"
    },
    {
        "id": "METEOR_MASH",
        "name": "Meteor Mash",
        "type": "steel",
        "power": 100,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "MIRROR_COAT",
        "name": "Mirror Coat",
        "type": "psychic",
        "power": 60,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "MIRROR_SHOT",
        "name": "Mirror Shot",
        "type": "steel",
        "power": 35,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -1,
            0
        ],
        "buffApplyChance": 0.3,
        "buffTarget": "opponent",
        "archetype": "Debuff Spam/Bait"
    },
    {
        "id": "MIST_BALL",
        "name": "Mist Ball",
        "type": "psychic",
        "power": 120,
        "energy": 60,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -1,
            0
        ],
        "buffApplyChance": 0.5,
        "buffTarget": "opponent",
        "archetype": "Debuff Nuke"
    },
    {
        "id": "MOONBLAST",
        "name": "Moonblast",
        "type": "fairy",
        "power": 110,
        "energy": 60,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -1,
            0
        ],
        "buffApplyChance": 0.1,
        "buffTarget": "opponent",
        "archetype": "Debuff Nuke"
    },
    {
        "id": "MOONGEIST_BEAM",
        "name": "Moongeist Beam",
        "type": "ghost",
        "power": 135,
        "energy": 65,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "MUD_BOMB",
        "name": "Mud Bomb",
        "type": "ground",
        "power": 60,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "MUDDY_WATER",
        "name": "Muddy Water",
        "type": "water",
        "power": 35,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 1000,
        "buffs": [
            -1,
            0
        ],
        "buffApplyChance": 0.3,
        "buffTarget": "opponent",
        "archetype": "Debuff Spam/Bait"
    },
    {
        "id": "MUD_SHOT",
        "name": "Mud Shot",
        "type": "ground",
        "power": 3,
        "energy": 0,
        "energyGain": 9,
        "cooldown": 1000,
        "archetype": "Fast Charge"
    },
    {
        "id": "MUD_SLAP",
        "name": "Mud Slap",
        "type": "ground",
        "power": 11,
        "energy": 0,
        "energyGain": 9,
        "cooldown": 1500,
        "archetype": "Heavy Damage"
    },
    {
        "id": "MYSTICAL_FIRE",
        "name": "Mystical Fire",
        "type": "fire",
        "power": 60,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -1,
            0
        ],
        "buffApplyChance": 1,
        "buffTarget": "opponent",
        "archetype": "Debuff"
    },
    {
        "id": "NATURES_MADNESS",
        "name": "Nature's Madness",
        "type": "fairy",
        "power": 80,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -1
        ],
        "buffApplyChance": 1,
        "buffTarget": "opponent",
        "archetype": "Debuff"
    },
    {
        "id": "NIGHT_SHADE",
        "name": "Night Shade",
        "type": "ghost",
        "power": 60,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "NIGHT_SLASH",
        "name": "Night Slash",
        "type": "dark",
        "power": 50,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            2,
            0
        ],
        "buffApplyChance": 0.125,
        "buffTarget": "self",
        "archetype": "Boost Spam/Bait"
    },
    {
        "id": "OBLIVION_WING",
        "name": "Oblivion Wing",
        "type": "flying",
        "power": 85,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "OBSTRUCT",
        "name": "Obstruct",
        "type": "dark",
        "power": 15,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            1
        ],
        "buffsSelf": [
            0,
            1
        ],
        "buffsOpponent": [
            0,
            -1
        ],
        "buffApplyChance": 1,
        "buffTarget": "both",
        "archetype": "Boost Spam/Bait"
    },
    {
        "id": "OCTAZOOKA",
        "name": "Octazooka",
        "type": "water",
        "power": 50,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -2,
            0
        ],
        "buffApplyChance": 0.5,
        "buffTarget": "opponent",
        "archetype": "Debuff"
    },
    {
        "id": "OMINOUS_WIND",
        "name": "Ominous Wind",
        "type": "ghost",
        "power": 45,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            1,
            1
        ],
        "buffApplyChance": 0.1,
        "buffTarget": "self",
        "archetype": "Boost"
    },
    {
        "id": "ORIGIN_PULSE",
        "name": "Origin Pulse",
        "type": "water",
        "power": 130,
        "energy": 60,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "OUTRAGE",
        "name": "Outrage",
        "type": "dragon",
        "power": 110,
        "energy": 60,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "OVERHEAT",
        "name": "Overheat",
        "type": "fire",
        "power": 130,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -2,
            0
        ],
        "buffApplyChance": 1,
        "buffTarget": "self",
        "archetype": "Self-Debuff Nuke"
    },
    {
        "id": "PARABOLIC_CHARGE",
        "name": "Parabolic Charge",
        "type": "electric",
        "power": 65,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "PAYBACK",
        "name": "Payback",
        "type": "dark",
        "power": 110,
        "energy": 60,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "PECK",
        "name": "Peck",
        "type": "flying",
        "power": 6,
        "energy": 0,
        "energyGain": 5,
        "cooldown": 1000,
        "archetype": "Low Quality"
    },
    {
        "id": "PETAL_BLIZZARD",
        "name": "Petal Blizzard",
        "type": "grass",
        "power": 110,
        "energy": 65,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "PLAY_ROUGH",
        "name": "Play Rough",
        "type": "fairy",
        "power": 90,
        "energy": 60,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "POISON_FANG",
        "name": "Poison Fang",
        "type": "poison",
        "power": 45,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -1
        ],
        "buffApplyChance": 1,
        "buffTarget": "opponent",
        "archetype": "Debuff Spam/Bait"
    },
    {
        "id": "POISON_JAB",
        "name": "Poison Jab",
        "type": "poison",
        "power": 7,
        "energy": 0,
        "energyGain": 7,
        "cooldown": 1000,
        "archetype": "General"
    },
    {
        "id": "POISON_STING",
        "name": "Poison Sting",
        "type": "poison",
        "power": 3,
        "energy": 0,
        "energyGain": 9,
        "cooldown": 1000,
        "archetype": "Fast Charge"
    },
    {
        "id": "POLTERGEIST",
        "name": "Poltergeist",
        "type": "ghost",
        "power": 150,
        "energy": 75,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "POUND",
        "name": "Pound",
        "type": "normal",
        "power": 4,
        "energy": 0,
        "energyGain": 4,
        "cooldown": 1000,
        "archetype": "Low Quality"
    },
    {
        "id": "POWDER_SNOW",
        "name": "Powder Snow",
        "type": "ice",
        "power": 5,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1000,
        "archetype": "Fast Charge"
    },
    {
        "id": "POWER_GEM",
        "name": "Power Gem",
        "type": "rock",
        "power": 80,
        "energy": 60,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "POWER_UP_PUNCH",
        "name": "Power-Up Punch",
        "type": "fighting",
        "power": 20,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            1,
            0
        ],
        "buffApplyChance": 1,
        "buffTarget": "self",
        "archetype": "Boost Spam/Bait"
    },
    {
        "id": "POWER_WHIP",
        "name": "Power Whip",
        "type": "grass",
        "power": 90,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "PRECIPICE_BLADES",
        "name": "Precipice Blades",
        "type": "ground",
        "power": 130,
        "energy": 60,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "PRESENT",
        "name": "Present",
        "type": "normal",
        "power": 3,
        "energy": 0,
        "energyGain": 12,
        "cooldown": 1500,
        "archetype": "Fast Charge"
    },
    {
        "id": "PSYBEAM",
        "name": "Psybeam",
        "type": "psychic",
        "power": 70,
        "energy": 60,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "PSYCHIC",
        "name": "Psychic",
        "type": "psychic",
        "power": 75,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -1
        ],
        "buffApplyChance": 0.1,
        "buffTarget": "opponent",
        "archetype": "High Energy Debuff"
    },
    {
        "id": "PSYCHIC_FANGS",
        "name": "Psychic Fangs",
        "type": "psychic",
        "power": 40,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -1
        ],
        "buffApplyChance": 1,
        "buffTarget": "opponent",
        "archetype": "Debuff Spam/Bait"
    },
    {
        "id": "PSYCHO_BOOST",
        "name": "Psycho Boost",
        "type": "psychic",
        "power": 70,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -2,
            0
        ],
        "buffApplyChance": 1,
        "buffTarget": "self",
        "archetype": "Self-Debuff Spam"
    },
    {
        "id": "PSYCHO_CUT",
        "name": "Psycho Cut",
        "type": "psychic",
        "power": 3,
        "energy": 0,
        "energyGain": 9,
        "cooldown": 1000,
        "archetype": "Fast Charge"
    },
    {
        "id": "PSYSHOCK",
        "name": "Psyshock",
        "type": "psychic",
        "power": 70,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "PSYSTRIKE",
        "name": "Psystrike",
        "type": "psychic",
        "power": 90,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "PSYWAVE",
        "name": "Psywave",
        "type": "psychic",
        "power": 3,
        "energy": 0,
        "energyGain": 2,
        "cooldown": 500,
        "archetype": "Low Quality"
    },
    {
        "id": "QUICK_ATTACK",
        "name": "Quick Attack",
        "type": "normal",
        "power": 5,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1000,
        "archetype": "Fast Charge"
    },
    {
        "id": "RAZOR_LEAF",
        "name": "Razor Leaf",
        "type": "grass",
        "power": 10,
        "energy": 0,
        "energyGain": 4,
        "cooldown": 1000,
        "archetype": "Heavy Damage"
    },
    {
        "id": "RAZOR_SHELL",
        "name": "Razor Shell",
        "type": "water",
        "power": 35,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -1
        ],
        "buffApplyChance": 0.5,
        "buffTarget": "opponent",
        "archetype": "Spam/Bait Debuff"
    },
    {
        "id": "REST",
        "name": "Rest",
        "type": "normal",
        "power": 50,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "RETURN",
        "name": "Return",
        "type": "normal",
        "power": 130,
        "energy": 70,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "ROAR_OF_TIME",
        "name": "Roar of Time",
        "type": "dragon",
        "power": 150,
        "energy": 65,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "ROCK_BLAST",
        "name": "Rock Blast",
        "type": "rock",
        "power": 50,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "ROCK_SLIDE",
        "name": "Rock Slide",
        "type": "rock",
        "power": 75,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "ROCK_SMASH",
        "name": "Rock Smash",
        "type": "fighting",
        "power": 9,
        "energy": 0,
        "energyGain": 7,
        "cooldown": 1500,
        "archetype": "Low Quality"
    },
    {
        "id": "ROCK_THROW",
        "name": "Rock Throw",
        "type": "rock",
        "power": 8,
        "energy": 0,
        "energyGain": 5,
        "cooldown": 1000,
        "archetype": "Heavy Damage"
    },
    {
        "id": "ROCK_TOMB",
        "name": "Rock Tomb",
        "type": "rock",
        "power": 70,
        "energy": 60,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -1,
            0
        ],
        "buffApplyChance": 1,
        "buffTarget": "opponent",
        "archetype": "High Energy Debuff"
    },
    {
        "id": "ROCK_WRECKER",
        "name": "Rock Wrecker",
        "type": "rock",
        "power": 110,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "ROLLOUT",
        "name": "Rollout",
        "type": "rock",
        "power": 5,
        "energy": 0,
        "energyGain": 13,
        "cooldown": 1500,
        "archetype": "Fast Charge"
    },
    {
        "id": "SACRED_FIRE",
        "name": "Sacred Fire",
        "type": "fire",
        "power": 130,
        "energy": 65,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -1,
            0
        ],
        "buffApplyChance": 0.5,
        "buffTarget": "opponent",
        "archetype": "Debuff"
    },
    {
        "id": "SACRED_SWORD",
        "name": "Sacred Sword",
        "type": "fighting",
        "power": 60,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "SAND_ATTACK",
        "name": "Sand Attack",
        "type": "ground",
        "power": 2,
        "energy": 0,
        "energyGain": 4,
        "cooldown": 500,
        "archetype": "Fast Charge"
    },
    {
        "id": "SAND_TOMB",
        "name": "Sand Tomb",
        "type": "ground",
        "power": 25,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -1
        ],
        "buffApplyChance": 1,
        "buffTarget": "opponent",
        "archetype": "Debuff Spam/Bait"
    },
    {
        "id": "SANDSEAR_STORM",
        "name": "Sandsear Storm",
        "type": "ground",
        "power": 60,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -1,
            0
        ],
        "buffApplyChance": 1,
        "buffTarget": "opponent",
        "archetype": "Debuff"
    },
    {
        "id": "SCALD",
        "name": "Scald",
        "type": "water",
        "power": 85,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -1,
            0
        ],
        "buffApplyChance": 0.3,
        "buffTarget": "opponent",
        "archetype": "High Energy Debuff"
    },
    {
        "id": "SCORCHING_SANDS",
        "name": "Scorching Sands",
        "type": "ground",
        "power": 80,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -1,
            0
        ],
        "buffApplyChance": 0.3,
        "buffTarget": "opponent",
        "archetype": "High Energy Debuff"
    },
    {
        "id": "SCRATCH",
        "name": "Scratch",
        "type": "normal",
        "power": 4,
        "energy": 0,
        "energyGain": 2,
        "cooldown": 500,
        "archetype": "Heavy Damage"
    },
    {
        "id": "SEED_BOMB",
        "name": "Seed Bomb",
        "type": "grass",
        "power": 65,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "SEED_FLARE",
        "name": "Seed Flare",
        "type": "grass",
        "power": 130,
        "energy": 75,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -2
        ],
        "buffApplyChance": 0.4,
        "buffTarget": "opponent",
        "archetype": "Nuke Debuff"
    },
    {
        "id": "SHADOW_BALL",
        "name": "Shadow Ball",
        "type": "ghost",
        "power": 100,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "SHADOW_BONE",
        "name": "Shadow Bone",
        "type": "ghost",
        "power": 80,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -1
        ],
        "buffApplyChance": 0.2,
        "buffTarget": "opponent",
        "archetype": "Debuff"
    },
    {
        "id": "SHADOW_CLAW",
        "name": "Shadow Claw",
        "type": "ghost",
        "power": 6,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1000,
        "archetype": "Multipurpose"
    },
    {
        "id": "SHADOW_FORCE",
        "name": "Shadow Force",
        "type": "ghost",
        "power": 120,
        "energy": 90,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "SHADOW_PUNCH",
        "name": "Shadow Punch",
        "type": "ghost",
        "power": 40,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "SHADOW_SNEAK",
        "name": "Shadow Sneak",
        "type": "ghost",
        "power": 50,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "SIGNAL_BEAM",
        "name": "Signal Beam",
        "type": "bug",
        "power": 75,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -1,
            -1
        ],
        "buffApplyChance": 0.2,
        "buffTarget": "opponent",
        "archetype": "High Energy Debuff"
    },
    {
        "id": "SILVER_WIND",
        "name": "Silver Wind",
        "type": "bug",
        "power": 60,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            1,
            1
        ],
        "buffApplyChance": 0.1,
        "buffTarget": "self",
        "archetype": "Boost"
    },
    {
        "id": "SKULL_BASH",
        "name": "Skull Bash",
        "type": "normal",
        "power": 130,
        "energy": 75,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            1
        ],
        "buffApplyChance": 1,
        "buffTarget": "self",
        "archetype": "Boost Nuke"
    },
    {
        "id": "SKY_ATTACK",
        "name": "Sky Attack",
        "type": "flying",
        "power": 75,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "SLUDGE",
        "name": "Sludge",
        "type": "poison",
        "power": 50,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "SLUDGE_BOMB",
        "name": "Sludge Bomb",
        "type": "poison",
        "power": 80,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "SLUDGE_WAVE",
        "name": "Sludge Wave",
        "type": "poison",
        "power": 110,
        "energy": 65,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "SMACK_DOWN",
        "name": "Smack Down",
        "type": "rock",
        "power": 12,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1500,
        "archetype": "Heavy Damage"
    },
    {
        "id": "SNARL",
        "name": "Snarl",
        "type": "dark",
        "power": 5,
        "energy": 0,
        "energyGain": 13,
        "cooldown": 1500,
        "archetype": "Fast Charge"
    },
    {
        "id": "SOLAR_BEAM",
        "name": "Solar Beam",
        "type": "grass",
        "power": 150,
        "energy": 80,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "SPACIAL_REND",
        "name": "Spacial Rend",
        "type": "dragon",
        "power": 95,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "SPARK",
        "name": "Spark",
        "type": "electric",
        "power": 5,
        "energy": 0,
        "energyGain": 7,
        "cooldown": 1000,
        "archetype": "General"
    },
    {
        "id": "SPIRIT_SHACKLE",
        "name": "Spirit Shackle",
        "type": "ghost",
        "power": 50,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -1
        ],
        "buffApplyChance": 0.33,
        "buffTarget": "opponent",
        "archetype": "Debuff Spam/Bait"
    },
    {
        "id": "SPLASH",
        "name": "Splash",
        "type": "water",
        "power": 0,
        "energy": 0,
        "energyGain": 12,
        "cooldown": 2000,
        "archetype": "Low Quality"
    },
    {
        "id": "SPRINGTIDE_STORM",
        "name": "Springtide Storm (Speculative)",
        "type": "fairy",
        "power": 60,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -1,
            0
        ],
        "buffApplyChance": 1,
        "buffTarget": "opponent",
        "archetype": "Debuff"
    },
    {
        "id": "STEEL_WING",
        "name": "Steel Wing",
        "type": "steel",
        "power": 7,
        "energy": 0,
        "energyGain": 7,
        "cooldown": 1000,
        "archetype": "General"
    },
    {
        "id": "STOMP",
        "name": "Stomp",
        "type": "normal",
        "power": 55,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "STONE_EDGE",
        "name": "Stone Edge",
        "type": "rock",
        "power": 100,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "STRUGGLE",
        "name": "Struggle",
        "type": "normal",
        "power": 35,
        "energy": 100,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "STRUGGLE_BUG",
        "name": "Struggle Bug",
        "type": "bug",
        "power": 9,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1500,
        "archetype": "Low Quality"
    },
    {
        "id": "SUBMISSION",
        "name": "Submission",
        "type": "fighting",
        "power": 60,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "SUCKER_PUNCH",
        "name": "Sucker Punch",
        "type": "dark",
        "power": 5,
        "energy": 0,
        "energyGain": 7,
        "cooldown": 1000,
        "archetype": "Fast Charge"
    },
    {
        "id": "SUNSTEEL_STRIKE",
        "name": "Sunsteel Strike",
        "type": "steel",
        "power": 135,
        "energy": 65,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "SUPER_POWER",
        "name": "Superpower",
        "type": "fighting",
        "power": 85,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -1,
            -1
        ],
        "buffApplyChance": 1,
        "buffTarget": "self",
        "archetype": "Self-Debuff Spam"
    },
    {
        "id": "SURF",
        "name": "Surf",
        "type": "water",
        "power": 65,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "SWIFT",
        "name": "Swift",
        "type": "normal",
        "power": 55,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "SYNCHRONOISE",
        "name": "Synchronoise",
        "type": "psychic",
        "power": 80,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "TACKLE",
        "name": "Tackle",
        "type": "normal",
        "power": 3,
        "energy": 0,
        "energyGain": 3,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "TAKE_DOWN",
        "name": "Take Down",
        "type": "normal",
        "power": 5,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1500,
        "archetype": "Low Quality"
    },
    {
        "id": "TECHNO_BLAST_NORMAL",
        "name": "Techno Blast (Normal)",
        "type": "normal",
        "power": 120,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "TECHNO_BLAST_BURN",
        "name": "Techno Blast (Burn)",
        "type": "fire",
        "power": 120,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "TECHNO_BLAST_CHILL",
        "name": "Techno Blast (Chill)",
        "type": "ice",
        "power": 120,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "TECHNO_BLAST_DOUSE",
        "name": "Techno Blast (Douse)",
        "type": "water",
        "power": 120,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "TECHNO_BLAST_SHOCK",
        "name": "Techno Blast (Shock)",
        "type": "electric",
        "power": 120,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Nuke"
    },
    {
        "id": "THUNDER",
        "name": "Thunder",
        "type": "electric",
        "power": 100,
        "energy": 60,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "THUNDER_FANG",
        "name": "Thunder Fang",
        "type": "electric",
        "power": 8,
        "energy": 0,
        "energyGain": 5,
        "cooldown": 1000,
        "archetype": "Heavy Damage"
    },
    {
        "id": "THUNDER_PUNCH",
        "name": "Thunder Punch",
        "type": "electric",
        "power": 55,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "THUNDER_SHOCK",
        "name": "Thunder Shock",
        "type": "electric",
        "power": 3,
        "energy": 0,
        "energyGain": 9,
        "cooldown": 1000,
        "archetype": "Fast Charge"
    },
    {
        "id": "THUNDERBOLT",
        "name": "Thunderbolt",
        "type": "electric",
        "power": 90,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "High Energy"
    },
    {
        "id": "TRAILBLAZE",
        "name": "Trailblaze",
        "type": "grass",
        "power": 65,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            1,
            0
        ],
        "buffApplyChance": 1,
        "buffTarget": "self",
        "archetype": "Boost"
    },
    {
        "id": "TRANSFORM",
        "name": "Transform",
        "type": "normal",
        "power": 0,
        "energy": 0,
        "energyGain": 0,
        "cooldown": 1500
    },
    {
        "id": "TRI_ATTACK",
        "name": "Tri Attack",
        "type": "normal",
        "power": 65,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -1,
            -1
        ],
        "buffApplyChance": 0.5,
        "buffTarget": "opponent",
        "archetype": "Debuff"
    },
    {
        "id": "TRIPLE_AXEL",
        "name": "Triple Axel",
        "type": "ice",
        "power": 60,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            1,
            0
        ],
        "buffApplyChance": 1,
        "buffTarget": "self",
        "archetype": "Boost"
    },
    {
        "id": "TWISTER",
        "name": "Twister",
        "type": "dragon",
        "power": 45,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "V_CREATE",
        "name": "V-Create",
        "type": "fire",
        "power": 95,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -3
        ],
        "buffApplyChance": 1,
        "buffTarget": "self",
        "archetype": "Self-Debuff Spam"
    },
    {
        "id": "VICE_GRIP",
        "name": "Vise Grip",
        "type": "normal",
        "power": 40,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "VINE_WHIP",
        "name": "Vine Whip",
        "type": "grass",
        "power": 5,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1000,
        "archetype": "Fast Charge"
    },
    {
        "id": "VOLT_SWITCH",
        "name": "Volt Switch",
        "type": "electric",
        "power": 12,
        "energy": 0,
        "energyGain": 16,
        "cooldown": 2000,
        "archetype": "Multipurpose"
    },
    {
        "id": "VOLT_TACKLE",
        "name": "Volt Tackle",
        "type": "electric",
        "power": 90,
        "energy": 50,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -1
        ],
        "buffApplyChance": 1,
        "buffTarget": "self",
        "archetype": "Self-Debuff"
    },
    {
        "id": "WATER_GUN",
        "name": "Water Gun",
        "type": "water",
        "power": 3,
        "energy": 0,
        "energyGain": 3,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "WATER_GUN_FAST_BLASTOISE",
        "name": "Water Gun Fast Blastoise",
        "type": "water",
        "power": 6,
        "energy": 0,
        "energyGain": 4,
        "cooldown": 1000,
        "archetype": "Low Quality"
    },
    {
        "id": "WATER_PULSE",
        "name": "Water Pulse",
        "type": "water",
        "power": 80,
        "energy": 55,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "WATERFALL",
        "name": "Waterfall",
        "type": "water",
        "power": 12,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1500,
        "archetype": "Heavy Damage"
    },
    {
        "id": "WATER_SHURIKEN",
        "name": "Water Shuriken",
        "type": "water",
        "power": 6,
        "energy": 0,
        "energyGain": 14,
        "cooldown": 1500,
        "archetype": "Fast Charge"
    },
    {
        "id": "WEATHER_BALL_FIRE",
        "name": "Weather Ball (Fire)",
        "type": "fire",
        "power": 55,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "WEATHER_BALL_ICE",
        "name": "Weather Ball (Ice)",
        "type": "ice",
        "power": 55,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "WEATHER_BALL_ROCK",
        "name": "Weather Ball (Rock)",
        "type": "rock",
        "power": 55,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "WEATHER_BALL_NORMAL",
        "name": "Weather Ball (Normal)",
        "type": "normal",
        "power": 55,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "WEATHER_BALL_WATER",
        "name": "Weather Ball (Water)",
        "type": "water",
        "power": 55,
        "energy": 35,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "WILDBOLT_STORM",
        "name": "Wildbolt Storm",
        "type": "electric",
        "power": 60,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -1,
            0
        ],
        "buffApplyChance": 1,
        "buffTarget": "opponent",
        "archetype": "Debuff"
    },
    {
        "id": "WILD_CHARGE",
        "name": "Wild Charge",
        "type": "electric",
        "power": 100,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            0,
            -2
        ],
        "buffApplyChance": 1,
        "buffTarget": "self",
        "archetype": "Self-Debuff"
    },
    {
        "id": "WING_ATTACK",
        "name": "Wing Attack",
        "type": "flying",
        "power": 5,
        "energy": 0,
        "energyGain": 8,
        "cooldown": 1000,
        "archetype": "Fast Charge"
    },
    {
        "id": "WRAP",
        "name": "Wrap",
        "type": "normal",
        "power": 60,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "WRAP_GREEN",
        "name": "Wrap Green",
        "type": "normal",
        "power": 25,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "WRAP_PINK",
        "name": "Wrap Pink",
        "type": "normal",
        "power": 25,
        "energy": 45,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "General"
    },
    {
        "id": "X_SCISSOR",
        "name": "X-Scissor",
        "type": "bug",
        "power": 65,
        "energy": 40,
        "energyGain": 0,
        "cooldown": 500,
        "archetype": "Spam/Bait"
    },
    {
        "id": "YAWN",
        "name": "Yawn",
        "type": "normal",
        "power": 0,
        "energy": 0,
        "energyGain": 12,
        "cooldown": 2000,
        "archetype": "Low Quality"
    },
    {
        "id": "ZAP_CANNON",
        "name": "Zap Cannon",
        "type": "electric",
        "power": 150,
        "energy": 80,
        "energyGain": 0,
        "cooldown": 500,
        "buffs": [
            -1,
            0
        ],
        "buffApplyChance": 0.66,
        "buffTarget": "opponent",
        "archetype": "Debuff Nuke"
    },
    {
        "id": "ZEN_HEADBUTT",
        "name": "Zen Headbutt",
        "type": "psychic",
        "power": 8,
        "energy": 0,
        "energyGain": 6,
        "cooldown": 1500,
        "archetype": "Low Quality"
    }
];