import type {Pokemon} from '@/@types/pokemon';
// Last Update at: 2024-08-28T22:01:11.117Z
// Parsed 1006 from 1196 Pokemons
export const POKEMONS: Pokemon[] =
	[
    {
        "id": "bulbasaur",
        "dexNumber": 1,
        "name": "Bulbasaur",
        "stats": {
            "atk": 118,
            "def": 111,
            "sta": 128
        },
        "types": [
            "grass",
            "poison"
        ],
        "family": {
            "id": "bulbasaur",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "POWER_WHIP",
                "SEED_BOMB",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "ivysaur",
        "dexNumber": 2,
        "name": "Ivysaur",
        "stats": {
            "atk": 151,
            "def": 143,
            "sta": 155
        },
        "types": [
            "grass",
            "poison"
        ],
        "family": {
            "id": "bulbasaur",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "POWER_WHIP",
                "SLUDGE_BOMB",
                "SOLAR_BEAM"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "venusaur",
        "dexNumber": 3,
        "name": "Venusaur",
        "stats": {
            "atk": 198,
            "def": 189,
            "sta": 190
        },
        "types": [
            "grass",
            "poison"
        ],
        "family": {
            "id": "bulbasaur",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "FRENZY_PLANT",
                "PETAL_BLIZZARD",
                "SLUDGE_BOMB",
                "SOLAR_BEAM"
            ],
            "eliteMoves": [
                "FRENZY_PLANT"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "venusaur_mega",
        "dexNumber": 3,
        "name": "Venusaur (Mega)",
        "stats": {
            "atk": 241,
            "def": 246,
            "sta": 190
        },
        "types": [
            "grass",
            "poison"
        ],
        "family": {
            "id": "bulbasaur",
            "stage": 4
        },
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "FRENZY_PLANT",
                "PETAL_BLIZZARD",
                "SLUDGE_BOMB",
                "SOLAR_BEAM"
            ],
            "eliteMoves": [
                "FRENZY_PLANT"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible",
            "mega"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "charmander",
        "dexNumber": 4,
        "name": "Charmander",
        "stats": {
            "atk": 116,
            "def": 93,
            "sta": 118
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "charmander",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "SCRATCH"
            ],
            "chargedMoves": [
                "FLAME_BURST",
                "FLAME_CHARGE",
                "FLAMETHROWER"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "charmeleon",
        "dexNumber": 5,
        "name": "Charmeleon",
        "stats": {
            "atk": 158,
            "def": 126,
            "sta": 151
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "charmander",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "FIRE_FANG",
                "SCRATCH"
            ],
            "chargedMoves": [
                "FIRE_PUNCH",
                "FLAME_BURST",
                "FLAMETHROWER"
            ],
            "eliteMoves": [
                "SCRATCH"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "charizard",
        "dexNumber": 6,
        "name": "Charizard",
        "stats": {
            "atk": 223,
            "def": 173,
            "sta": 186
        },
        "types": [
            "fire",
            "flying"
        ],
        "family": {
            "id": "charmander",
            "stage": 3
        },
        "aliases": [
            "zard"
        ],
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "EMBER",
                "FIRE_SPIN",
                "WING_ATTACK",
                "DRAGON_BREATH"
            ],
            "chargedMoves": [
                "BLAST_BURN",
                "DRAGON_CLAW",
                "FIRE_BLAST",
                "FLAMETHROWER",
                "OVERHEAT"
            ],
            "eliteMoves": [
                "EMBER",
                "WING_ATTACK",
                "BLAST_BURN",
                "FLAMETHROWER",
                "DRAGON_BREATH"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "charizard_mega_x",
        "dexNumber": 6,
        "name": "Charizard (Mega X)",
        "stats": {
            "atk": 273,
            "def": 213,
            "sta": 186
        },
        "types": [
            "fire",
            "dragon"
        ],
        "family": {
            "id": "charmander",
            "stage": 4
        },
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "EMBER",
                "FIRE_SPIN",
                "WING_ATTACK",
                "DRAGON_BREATH"
            ],
            "chargedMoves": [
                "BLAST_BURN",
                "DRAGON_CLAW",
                "FIRE_BLAST",
                "FLAMETHROWER",
                "OVERHEAT"
            ],
            "eliteMoves": [
                "EMBER",
                "WING_ATTACK",
                "BLAST_BURN",
                "FLAMETHROWER",
                "DRAGON_BREATH"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible",
            "mega"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "charizard_mega_y",
        "dexNumber": 6,
        "name": "Charizard (Mega Y)",
        "stats": {
            "atk": 319,
            "def": 212,
            "sta": 186
        },
        "types": [
            "fire",
            "flying"
        ],
        "family": {
            "id": "charmander",
            "stage": 4
        },
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "EMBER",
                "FIRE_SPIN",
                "WING_ATTACK",
                "DRAGON_BREATH"
            ],
            "chargedMoves": [
                "BLAST_BURN",
                "DRAGON_CLAW",
                "FIRE_BLAST",
                "FLAMETHROWER",
                "OVERHEAT"
            ],
            "eliteMoves": [
                "EMBER",
                "WING_ATTACK",
                "BLAST_BURN",
                "FLAMETHROWER",
                "DRAGON_BREATH"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible",
            "mega"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "squirtle",
        "dexNumber": 7,
        "name": "Squirtle",
        "stats": {
            "atk": 94,
            "def": 121,
            "sta": 127
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "squirtle",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "TACKLE"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "AQUA_TAIL",
                "WATER_PULSE"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "wartortle",
        "dexNumber": 8,
        "name": "Wartortle",
        "stats": {
            "atk": 126,
            "def": 155,
            "sta": 153
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "squirtle",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "HYDRO_PUMP",
                "ICE_BEAM"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "blastoise",
        "dexNumber": 9,
        "name": "Blastoise",
        "stats": {
            "atk": 171,
            "def": 207,
            "sta": 188
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "squirtle",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "FLASH_CANNON",
                "HYDRO_CANNON",
                "HYDRO_PUMP",
                "ICE_BEAM",
                "SKULL_BASH"
            ],
            "eliteMoves": [
                "HYDRO_CANNON"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "blastoise_mega",
        "dexNumber": 9,
        "name": "Blastoise (Mega)",
        "stats": {
            "atk": 264,
            "def": 237,
            "sta": 188
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "squirtle",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "FLASH_CANNON",
                "HYDRO_CANNON",
                "HYDRO_PUMP",
                "ICE_BEAM",
                "SKULL_BASH"
            ],
            "eliteMoves": [
                "HYDRO_CANNON"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible",
            "mega"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "caterpie",
        "dexNumber": 10,
        "name": "Caterpie",
        "stats": {
            "atk": 55,
            "def": 55,
            "sta": 128
        },
        "types": [
            "bug"
        ],
        "family": {
            "id": "caterpie",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "metapod",
        "dexNumber": 11,
        "name": "Metapod",
        "stats": {
            "atk": 45,
            "def": 80,
            "sta": 137
        },
        "types": [
            "bug"
        ],
        "family": {
            "id": "caterpie",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "butterfree",
        "dexNumber": 12,
        "name": "Butterfree",
        "stats": {
            "atk": 167,
            "def": 137,
            "sta": 155
        },
        "types": [
            "bug",
            "flying"
        ],
        "family": {
            "id": "caterpie",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "CONFUSION",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "PSYCHIC",
                "SIGNAL_BEAM"
            ],
            "eliteMoves": [
                "BUG_BITE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "weedle",
        "dexNumber": 13,
        "name": "Weedle",
        "stats": {
            "atk": 63,
            "def": 50,
            "sta": 120
        },
        "types": [
            "bug",
            "poison"
        ],
        "family": {
            "id": "weedle",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "POISON_STING"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "kakuna",
        "dexNumber": 14,
        "name": "Kakuna",
        "stats": {
            "atk": 46,
            "def": 75,
            "sta": 128
        },
        "types": [
            "bug",
            "poison"
        ],
        "family": {
            "id": "weedle",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "POISON_STING"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "beedrill",
        "dexNumber": 15,
        "name": "Beedrill",
        "stats": {
            "atk": 169,
            "def": 130,
            "sta": 163
        },
        "types": [
            "bug",
            "poison"
        ],
        "family": {
            "id": "weedle",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "INFESTATION",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "SLUDGE_BOMB",
                "X_SCISSOR",
                "FELL_STINGER",
                "DRILL_RUN"
            ],
            "eliteMoves": [
                "BUG_BITE",
                "DRILL_RUN"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "beedrill_mega",
        "dexNumber": 15,
        "name": "Beedrill (Mega)",
        "stats": {
            "atk": 303,
            "def": 148,
            "sta": 163
        },
        "types": [
            "bug",
            "poison"
        ],
        "family": {
            "id": "weedle",
            "stage": 4
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "INFESTATION",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "SLUDGE_BOMB",
                "X_SCISSOR",
                "FELL_STINGER",
                "DRILL_RUN"
            ],
            "eliteMoves": [
                "BUG_BITE",
                "DRILL_RUN"
            ]
        },
        "tags": [
            "shadoweligible",
            "mega"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pidgey",
        "dexNumber": 16,
        "name": "Pidgey",
        "stats": {
            "atk": 85,
            "def": 73,
            "sta": 120
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "pidgey",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "TACKLE"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "AIR_CUTTER",
                "TWISTER"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pidgeotto",
        "dexNumber": 17,
        "name": "Pidgeotto",
        "stats": {
            "atk": 117,
            "def": 105,
            "sta": 160
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "pidgey",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "STEEL_WING",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "AIR_CUTTER",
                "TWISTER"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pidgeot",
        "dexNumber": 18,
        "name": "Pidgeot",
        "stats": {
            "atk": 166,
            "def": 154,
            "sta": 195
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "pidgey",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "STEEL_WING",
                "WING_ATTACK",
                "GUST"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "AIR_CUTTER",
                "BRAVE_BIRD",
                "HURRICANE",
                "FEATHER_DANCE"
            ],
            "eliteMoves": [
                "WING_ATTACK",
                "AIR_CUTTER",
                "GUST"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pidgeot_mega",
        "dexNumber": 18,
        "name": "Pidgeot (Mega)",
        "stats": {
            "atk": 280,
            "def": 175,
            "sta": 195
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "pidgey",
            "stage": 4
        },
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "STEEL_WING",
                "WING_ATTACK",
                "GUST"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "AIR_CUTTER",
                "BRAVE_BIRD",
                "HURRICANE",
                "FEATHER_DANCE"
            ],
            "eliteMoves": [
                "WING_ATTACK",
                "AIR_CUTTER",
                "GUST"
            ]
        },
        "tags": [
            "mega"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "rattata",
        "dexNumber": 19,
        "name": "Rattata",
        "stats": {
            "atk": 103,
            "def": 70,
            "sta": 102
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "rattata",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "TACKLE"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DIG",
                "HYPER_FANG"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "rattata_alolan",
        "dexNumber": 19,
        "name": "Rattata (Alolan)",
        "stats": {
            "atk": 103,
            "def": 70,
            "sta": 102
        },
        "types": [
            "dark",
            "normal"
        ],
        "family": {
            "id": "rattata_alolan",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "TACKLE"
            ],
            "chargedMoves": [
                "CRUNCH",
                "HYPER_FANG",
                "SHADOW_BALL"
            ]
        },
        "tags": [
            "alolan",
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "raticate",
        "dexNumber": 20,
        "name": "Raticate",
        "stats": {
            "atk": 161,
            "def": 139,
            "sta": 146
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "rattata",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "DIG",
                "HYPER_BEAM",
                "HYPER_FANG"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "raticate_alolan",
        "dexNumber": 20,
        "name": "Raticate (Alolan)",
        "stats": {
            "atk": 135,
            "def": 154,
            "sta": 181
        },
        "types": [
            "dark",
            "normal"
        ],
        "family": {
            "id": "rattata_alolan",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "CRUNCH",
                "HYPER_BEAM",
                "HYPER_FANG"
            ]
        },
        "tags": [
            "alolan",
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "spearow",
        "dexNumber": 21,
        "name": "Spearow",
        "stats": {
            "atk": 112,
            "def": 60,
            "sta": 120
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "spearow",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "DRILL_PECK",
                "SKY_ATTACK",
                "TWISTER"
            ],
            "eliteMoves": [
                "TWISTER"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "fearow",
        "dexNumber": 22,
        "name": "Fearow",
        "stats": {
            "atk": 182,
            "def": 133,
            "sta": 163
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "spearow",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "STEEL_WING"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "DRILL_RUN",
                "SKY_ATTACK",
                "TWISTER"
            ],
            "eliteMoves": [
                "TWISTER"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "ekans",
        "dexNumber": 23,
        "name": "Ekans",
        "stats": {
            "atk": 110,
            "def": 97,
            "sta": 111
        },
        "types": [
            "poison"
        ],
        "family": {
            "id": "ekans",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ACID",
                "POISON_STING"
            ],
            "chargedMoves": [
                "GUNK_SHOT",
                "POISON_FANG",
                "SLUDGE_BOMB",
                "WRAP"
            ],
            "eliteMoves": [
                "GUNK_SHOT"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "arbok",
        "dexNumber": 24,
        "name": "Arbok",
        "stats": {
            "atk": 167,
            "def": 153,
            "sta": 155
        },
        "types": [
            "poison"
        ],
        "family": {
            "id": "ekans",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ACID",
                "BITE",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "GUNK_SHOT",
                "SLUDGE_WAVE",
                "ACID_SPRAY"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "pikachu",
        "dexNumber": 25,
        "name": "Pikachu",
        "stats": {
            "atk": 112,
            "def": 96,
            "sta": 111
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "pichu",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "PRESENT",
                "QUICK_ATTACK",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "SURF",
                "THUNDER",
                "THUNDERBOLT",
                "WILD_CHARGE"
            ],
            "eliteMoves": [
                "PRESENT",
                "SURF",
                "THUNDER"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "raichu",
        "dexNumber": 26,
        "name": "Raichu",
        "stats": {
            "atk": 193,
            "def": 151,
            "sta": 155
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "pichu",
            "stage": 2
        },
        "aliases": [
            "kchu"
        ],
        "moves": {
            "fastMoves": [
                "SPARK",
                "THUNDER_SHOCK",
                "VOLT_SWITCH",
                "CHARM"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "THUNDER",
                "THUNDER_PUNCH",
                "WILD_CHARGE",
                "SKULL_BASH"
            ],
            "eliteMoves": [
                "THUNDER"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "raichu_alolan",
        "dexNumber": 26,
        "name": "Raichu (Alolan)",
        "stats": {
            "atk": 201,
            "def": 154,
            "sta": 155
        },
        "types": [
            "electric",
            "psychic"
        ],
        "family": {
            "id": "pichu",
            "stage": 2
        },
        "aliases": [
            "achu"
        ],
        "moves": {
            "fastMoves": [
                "SPARK",
                "VOLT_SWITCH",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "PSYCHIC",
                "THUNDER_PUNCH",
                "WILD_CHARGE",
                "GRASS_KNOT"
            ]
        },
        "tags": [
            "alolan"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "sandshrew",
        "dexNumber": 27,
        "name": "Sandshrew",
        "stats": {
            "atk": 126,
            "def": 120,
            "sta": 137
        },
        "types": [
            "ground"
        ],
        "family": {
            "id": "sandshrew",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "SCRATCH"
            ],
            "chargedMoves": [
                "DIG",
                "ROCK_SLIDE",
                "ROCK_TOMB",
                "SAND_TOMB"
            ],
            "eliteMoves": [
                "ROCK_TOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "sandshrew_alolan",
        "dexNumber": 27,
        "name": "Sandshrew (Alolan)",
        "stats": {
            "atk": 125,
            "def": 129,
            "sta": 137
        },
        "types": [
            "ice",
            "steel"
        ],
        "family": {
            "id": "sandshrew_alolan",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "GYRO_BALL",
                "NIGHT_SLASH"
            ]
        },
        "tags": [
            "alolan",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "sandslash",
        "dexNumber": 28,
        "name": "Sandslash",
        "stats": {
            "atk": 182,
            "def": 175,
            "sta": 181
        },
        "types": [
            "ground"
        ],
        "family": {
            "id": "sandshrew",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "BULLDOZE",
                "EARTHQUAKE",
                "ROCK_TOMB",
                "NIGHT_SLASH"
            ],
            "eliteMoves": [
                "NIGHT_SLASH"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "sandslash_alolan",
        "dexNumber": 28,
        "name": "Sandslash (Alolan)",
        "stats": {
            "atk": 177,
            "def": 195,
            "sta": 181
        },
        "types": [
            "ice",
            "steel"
        ],
        "family": {
            "id": "sandshrew_alolan",
            "stage": 2
        },
        "aliases": [
            "aslash"
        ],
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "POWDER_SNOW",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "BULLDOZE",
                "GYRO_BALL",
                "ICE_PUNCH"
            ],
            "eliteMoves": [
                "SHADOW_CLAW"
            ]
        },
        "tags": [
            "alolan",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "nidoran_female",
        "dexNumber": 29,
        "name": "Nidoran♀",
        "stats": {
            "atk": 86,
            "def": 89,
            "sta": 146
        },
        "types": [
            "poison"
        ],
        "family": {
            "id": "nidoran_female",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "POISON_STING"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "POISON_FANG",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "nidorina",
        "dexNumber": 30,
        "name": "Nidorina",
        "stats": {
            "atk": 117,
            "def": 120,
            "sta": 172
        },
        "types": [
            "poison"
        ],
        "family": {
            "id": "nidoran_female",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "POISON_STING"
            ],
            "chargedMoves": [
                "DIG",
                "POISON_FANG",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "nidoqueen",
        "dexNumber": 31,
        "name": "Nidoqueen",
        "stats": {
            "atk": 180,
            "def": 173,
            "sta": 207
        },
        "types": [
            "poison",
            "ground"
        ],
        "family": {
            "id": "nidoran_female",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "SLUDGE_WAVE",
                "STONE_EDGE",
                "EARTH_POWER",
                "POISON_FANG"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "nidoran_male",
        "dexNumber": 32,
        "name": "Nidoran♂",
        "stats": {
            "atk": 105,
            "def": 76,
            "sta": 130
        },
        "types": [
            "poison"
        ],
        "family": {
            "id": "nidoran_male",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "POISON_STING"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "HORN_ATTACK",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "nidorino",
        "dexNumber": 33,
        "name": "Nidorino",
        "stats": {
            "atk": 137,
            "def": 111,
            "sta": 156
        },
        "types": [
            "poison"
        ],
        "family": {
            "id": "nidoran_male",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "POISON_STING"
            ],
            "chargedMoves": [
                "DIG",
                "HORN_ATTACK",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "nidoking",
        "dexNumber": 34,
        "name": "Nidoking",
        "stats": {
            "atk": 204,
            "def": 156,
            "sta": 191
        },
        "types": [
            "poison",
            "ground"
        ],
        "family": {
            "id": "nidoran_male",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "FURY_CUTTER",
                "IRON_TAIL",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "MEGAHORN",
                "SLUDGE_WAVE",
                "EARTH_POWER",
                "SAND_TOMB"
            ],
            "eliteMoves": [
                "FURY_CUTTER"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "clefairy",
        "dexNumber": 35,
        "name": "Clefairy",
        "stats": {
            "atk": 107,
            "def": 108,
            "sta": 172
        },
        "types": [
            "fairy"
        ],
        "family": {
            "id": "cleffa",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DISARMING_VOICE",
                "MOONBLAST"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "clefable",
        "dexNumber": 36,
        "name": "Clefable",
        "stats": {
            "atk": 178,
            "def": 162,
            "sta": 216
        },
        "types": [
            "fairy"
        ],
        "family": {
            "id": "cleffa",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "POUND",
                "ZEN_HEADBUTT",
                "CHARM"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "METEOR_MASH",
                "MOONBLAST",
                "PSYCHIC"
            ],
            "eliteMoves": [
                "POUND"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "vulpix",
        "dexNumber": 37,
        "name": "Vulpix",
        "stats": {
            "atk": 96,
            "def": 109,
            "sta": 116
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "vulpix",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "FLAME_CHARGE",
                "FLAMETHROWER",
                "WEATHER_BALL_FIRE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "vulpix_alolan",
        "dexNumber": 37,
        "name": "Vulpix (Alolan)",
        "stats": {
            "atk": 96,
            "def": 109,
            "sta": 116
        },
        "types": [
            "ice"
        ],
        "family": {
            "id": "vulpix_alolan",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POWDER_SNOW",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "DARK_PULSE",
                "ICE_BEAM",
                "WEATHER_BALL_ICE"
            ]
        },
        "tags": [
            "alolan"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "ninetales",
        "dexNumber": 38,
        "name": "Ninetales",
        "stats": {
            "atk": 169,
            "def": 190,
            "sta": 177
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "vulpix",
            "stage": 2
        },
        "aliases": [
            "k9"
        ],
        "moves": {
            "fastMoves": [
                "EMBER",
                "FEINT_ATTACK",
                "FIRE_SPIN"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "FLAMETHROWER",
                "HEAT_WAVE",
                "OVERHEAT",
                "PSYSHOCK",
                "SOLAR_BEAM",
                "WEATHER_BALL_FIRE"
            ],
            "eliteMoves": [
                "EMBER",
                "FIRE_BLAST",
                "FLAMETHROWER"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "ninetales_alolan",
        "dexNumber": 38,
        "name": "Ninetales (Alolan)",
        "stats": {
            "atk": 170,
            "def": 193,
            "sta": 177
        },
        "types": [
            "ice",
            "fairy"
        ],
        "family": {
            "id": "vulpix_alolan",
            "stage": 2
        },
        "aliases": [
            "a9"
        ],
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "POWDER_SNOW",
                "CHARM"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "DAZZLING_GLEAM",
                "ICE_BEAM",
                "PSYSHOCK",
                "WEATHER_BALL_ICE"
            ]
        },
        "tags": [
            "alolan"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "jigglypuff",
        "dexNumber": 39,
        "name": "Jigglypuff",
        "stats": {
            "atk": 80,
            "def": 41,
            "sta": 251
        },
        "types": [
            "normal",
            "fairy"
        ],
        "family": {
            "id": "igglybuff",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "POUND"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DAZZLING_GLEAM",
                "DISARMING_VOICE",
                "GYRO_BALL",
                "PLAY_ROUGH"
            ],
            "eliteMoves": [
                "PLAY_ROUGH",
                "BODY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "wigglytuff",
        "dexNumber": 40,
        "name": "Wigglytuff",
        "stats": {
            "atk": 156,
            "def": 90,
            "sta": 295
        },
        "types": [
            "normal",
            "fairy"
        ],
        "family": {
            "id": "igglybuff",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "POUND",
                "CHARM"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "HYPER_BEAM",
                "ICE_BEAM",
                "PLAY_ROUGH"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "zubat",
        "dexNumber": 41,
        "name": "Zubat",
        "stats": {
            "atk": 83,
            "def": 73,
            "sta": 120
        },
        "types": [
            "poison",
            "flying"
        ],
        "family": {
            "id": "zubat",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "AIR_CUTTER",
                "POISON_FANG",
                "SLUDGE_BOMB",
                "SWIFT"
            ],
            "eliteMoves": [
                "SLUDGE_BOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "golbat",
        "dexNumber": 42,
        "name": "Golbat",
        "stats": {
            "atk": 161,
            "def": 150,
            "sta": 181
        },
        "types": [
            "poison",
            "flying"
        ],
        "family": {
            "id": "zubat",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AIR_CUTTER",
                "OMINOUS_WIND",
                "POISON_FANG",
                "SHADOW_BALL"
            ],
            "eliteMoves": [
                "OMINOUS_WIND"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "oddish",
        "dexNumber": 43,
        "name": "Oddish",
        "stats": {
            "atk": 131,
            "def": 112,
            "sta": 128
        },
        "types": [
            "grass",
            "poison"
        ],
        "family": {
            "id": "oddish",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ACID",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "MOONBLAST",
                "SEED_BOMB",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gloom",
        "dexNumber": 44,
        "name": "Gloom",
        "stats": {
            "atk": 153,
            "def": 136,
            "sta": 155
        },
        "types": [
            "grass",
            "poison"
        ],
        "family": {
            "id": "oddish",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ACID",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "MOONBLAST",
                "PETAL_BLIZZARD",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "vileplume",
        "dexNumber": 45,
        "name": "Vileplume",
        "stats": {
            "atk": 202,
            "def": 167,
            "sta": 181
        },
        "types": [
            "grass",
            "poison"
        ],
        "family": {
            "id": "oddish",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "ACID",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "MOONBLAST",
                "PETAL_BLIZZARD",
                "SOLAR_BEAM",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "paras",
        "dexNumber": 46,
        "name": "Paras",
        "stats": {
            "atk": 121,
            "def": 99,
            "sta": 111
        },
        "types": [
            "bug",
            "grass"
        ],
        "family": {
            "id": "paras",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "SCRATCH"
            ],
            "chargedMoves": [
                "CROSS_POISON",
                "SEED_BOMB",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "parasect",
        "dexNumber": 47,
        "name": "Parasect",
        "stats": {
            "atk": 165,
            "def": 146,
            "sta": 155
        },
        "types": [
            "bug",
            "grass"
        ],
        "family": {
            "id": "paras",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "FURY_CUTTER",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "CROSS_POISON",
                "SOLAR_BEAM",
                "X_SCISSOR"
            ],
            "eliteMoves": [
                "BUG_BITE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "venonat",
        "dexNumber": 48,
        "name": "Venonat",
        "stats": {
            "atk": 100,
            "def": 100,
            "sta": 155
        },
        "types": [
            "bug",
            "poison"
        ],
        "family": {
            "id": "venonat",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "CONFUSION"
            ],
            "chargedMoves": [
                "POISON_FANG",
                "PSYBEAM",
                "SIGNAL_BEAM"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "venomoth",
        "dexNumber": 49,
        "name": "Venomoth",
        "stats": {
            "atk": 179,
            "def": 143,
            "sta": 172
        },
        "types": [
            "bug",
            "poison"
        ],
        "family": {
            "id": "venonat",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "CONFUSION",
                "INFESTATION"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "POISON_FANG",
                "PSYCHIC",
                "SILVER_WIND"
            ],
            "eliteMoves": [
                "BUG_BITE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "diglett",
        "dexNumber": 50,
        "name": "Diglett",
        "stats": {
            "atk": 109,
            "def": 78,
            "sta": 67
        },
        "types": [
            "ground"
        ],
        "family": {
            "id": "diglett",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "MUD_SLAP",
                "SCRATCH"
            ],
            "chargedMoves": [
                "DIG",
                "MUD_BOMB",
                "ROCK_TOMB"
            ],
            "legacyMoves": [
                "MUD_SHOT"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "diglett_alolan",
        "dexNumber": 50,
        "name": "Diglett (Alolan)",
        "stats": {
            "atk": 108,
            "def": 81,
            "sta": 67
        },
        "types": [
            "ground",
            "steel"
        ],
        "family": {
            "id": "diglett_alolan",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "DIG",
                "MUD_BOMB",
                "ROCK_TOMB"
            ]
        },
        "tags": [
            "alolan"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "dugtrio",
        "dexNumber": 51,
        "name": "Dugtrio",
        "stats": {
            "atk": 167,
            "def": 136,
            "sta": 111
        },
        "types": [
            "ground"
        ],
        "family": {
            "id": "diglett",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "MUD_SLAP",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "MUD_BOMB",
                "STONE_EDGE"
            ],
            "legacyMoves": [
                "MUD_SHOT"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "dugtrio_alolan",
        "dexNumber": 51,
        "name": "Dugtrio (Alolan)",
        "stats": {
            "atk": 201,
            "def": 142,
            "sta": 111
        },
        "types": [
            "ground",
            "steel"
        ],
        "family": {
            "id": "diglett_alolan",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "IRON_HEAD",
                "MUD_BOMB"
            ]
        },
        "tags": [
            "alolan"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "meowth",
        "dexNumber": 52,
        "name": "Meowth",
        "stats": {
            "atk": 92,
            "def": 78,
            "sta": 120
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "meowth",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "SCRATCH"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DARK_PULSE",
                "FOUL_PLAY",
                "NIGHT_SLASH"
            ],
            "eliteMoves": [
                "BODY_SLAM"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "meowth_alolan",
        "dexNumber": 52,
        "name": "Meowth (Alolan)",
        "stats": {
            "atk": 99,
            "def": 78,
            "sta": 120
        },
        "types": [
            "dark"
        ],
        "family": {
            "id": "meowth_alolan",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "SCRATCH"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "FOUL_PLAY",
                "NIGHT_SLASH"
            ]
        },
        "tags": [
            "alolan"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "meowth_galarian",
        "dexNumber": 52,
        "name": "Meowth (Galarian)",
        "stats": {
            "atk": 115,
            "def": 92,
            "sta": 137
        },
        "types": [
            "steel"
        ],
        "family": {
            "id": "meowth_galarian",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SCRATCH",
                "METAL_CLAW"
            ],
            "chargedMoves": [
                "NIGHT_SLASH",
                "GYRO_BALL",
                "DIG"
            ]
        },
        "tags": [
            "galarian"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "persian",
        "dexNumber": 53,
        "name": "Persian",
        "stats": {
            "atk": 150,
            "def": 136,
            "sta": 163
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "meowth",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "SCRATCH"
            ],
            "chargedMoves": [
                "FOUL_PLAY",
                "NIGHT_SLASH",
                "PLAY_ROUGH",
                "POWER_GEM",
                "PAYBACK"
            ],
            "eliteMoves": [
                "NIGHT_SLASH"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "persian_alolan",
        "dexNumber": 53,
        "name": "Persian (Alolan)",
        "stats": {
            "atk": 158,
            "def": 136,
            "sta": 163
        },
        "types": [
            "dark"
        ],
        "family": {
            "id": "meowth_alolan",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "SCRATCH"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "FOUL_PLAY",
                "PLAY_ROUGH",
                "PAYBACK"
            ]
        },
        "tags": [
            "alolan"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "psyduck",
        "dexNumber": 54,
        "name": "Psyduck",
        "stats": {
            "atk": 122,
            "def": 95,
            "sta": 137
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "psyduck",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "CROSS_CHOP",
                "PSYBEAM"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "golduck",
        "dexNumber": 55,
        "name": "Golduck",
        "stats": {
            "atk": 191,
            "def": 162,
            "sta": 190
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "psyduck",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "HYDRO_PUMP",
                "ICE_BEAM",
                "PSYCHIC",
                "BUBBLE_BEAM",
                "SYNCHRONOISE",
                "CROSS_CHOP"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "mankey",
        "dexNumber": 56,
        "name": "Mankey",
        "stats": {
            "atk": 148,
            "def": 82,
            "sta": 120
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "mankey",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "KARATE_CHOP",
                "SCRATCH"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "CROSS_CHOP",
                "LOW_SWEEP"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "primeape",
        "dexNumber": 57,
        "name": "Primeape",
        "stats": {
            "atk": 207,
            "def": 138,
            "sta": 163
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "mankey",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "COUNTER",
                "KARATE_CHOP",
                "LOW_KICK"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "CROSS_CHOP",
                "LOW_SWEEP",
                "NIGHT_SLASH",
                "ICE_PUNCH"
            ],
            "eliteMoves": [
                "KARATE_CHOP",
                "CROSS_CHOP"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "growlithe",
        "dexNumber": 58,
        "name": "Growlithe",
        "stats": {
            "atk": 136,
            "def": 93,
            "sta": 146
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "growlithe",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "EMBER"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "FLAME_WHEEL",
                "FLAMETHROWER"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "arcanine",
        "dexNumber": 59,
        "name": "Arcanine",
        "stats": {
            "atk": 227,
            "def": 166,
            "sta": 207
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "growlithe",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "FIRE_FANG",
                "SNARL",
                "THUNDER_FANG"
            ],
            "chargedMoves": [
                "BULLDOZE",
                "CRUNCH",
                "FIRE_BLAST",
                "FLAMETHROWER",
                "WILD_CHARGE"
            ],
            "eliteMoves": [
                "BITE",
                "BULLDOZE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "poliwag",
        "dexNumber": 60,
        "name": "Poliwag",
        "stats": {
            "atk": 101,
            "def": 82,
            "sta": 120
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "poliwag",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "BUBBLE_BEAM",
                "MUD_BOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "poliwhirl",
        "dexNumber": 61,
        "name": "Poliwhirl",
        "stats": {
            "atk": 130,
            "def": 123,
            "sta": 163
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "poliwag",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "MUD_BOMB",
                "SCALD",
                "WATER_PULSE"
            ],
            "eliteMoves": [
                "SCALD"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "poliwrath",
        "dexNumber": 62,
        "name": "Poliwrath",
        "stats": {
            "atk": 182,
            "def": 184,
            "sta": 207
        },
        "types": [
            "water",
            "fighting"
        ],
        "family": {
            "id": "poliwag",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "MUD_SHOT",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "DYNAMIC_PUNCH",
                "HYDRO_PUMP",
                "ICE_PUNCH",
                "SUBMISSION",
                "POWER_UP_PUNCH",
                "SCALD"
            ],
            "eliteMoves": [
                "SUBMISSION"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "abra",
        "dexNumber": 63,
        "name": "Abra",
        "stats": {
            "atk": 195,
            "def": 82,
            "sta": 93
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "abra",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "PSYSHOCK",
                "SHADOW_BALL",
                "SIGNAL_BEAM"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "kadabra",
        "dexNumber": 64,
        "name": "Kadabra",
        "stats": {
            "atk": 232,
            "def": 117,
            "sta": 120
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "abra",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "PSYCHO_CUT"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "PSYBEAM",
                "SHADOW_BALL"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "alakazam",
        "dexNumber": 65,
        "name": "Alakazam",
        "stats": {
            "atk": 271,
            "def": 167,
            "sta": 146
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "abra",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "PSYCHO_CUT",
                "COUNTER"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "FIRE_PUNCH",
                "FOCUS_BLAST",
                "FUTURE_SIGHT",
                "PSYCHIC",
                "SHADOW_BALL"
            ],
            "eliteMoves": [
                "COUNTER",
                "DAZZLING_GLEAM",
                "PSYCHIC"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "machop",
        "dexNumber": 66,
        "name": "Machop",
        "stats": {
            "atk": 137,
            "def": 82,
            "sta": 172
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "machop",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "KARATE_CHOP",
                "LOW_KICK",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "CROSS_CHOP",
                "LOW_SWEEP"
            ],
            "eliteMoves": [
                "LOW_KICK"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "machoke",
        "dexNumber": 67,
        "name": "Machoke",
        "stats": {
            "atk": 177,
            "def": 125,
            "sta": 190
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "machop",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "KARATE_CHOP",
                "LOW_KICK"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "CROSS_CHOP",
                "DYNAMIC_PUNCH",
                "SUBMISSION"
            ],
            "eliteMoves": [
                "CROSS_CHOP"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "machamp",
        "dexNumber": 68,
        "name": "Machamp",
        "stats": {
            "atk": 234,
            "def": 159,
            "sta": 207
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "machop",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "BULLET_PUNCH",
                "COUNTER",
                "KARATE_CHOP"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "CROSS_CHOP",
                "DYNAMIC_PUNCH",
                "HEAVY_SLAM",
                "ROCK_SLIDE",
                "STONE_EDGE",
                "SUBMISSION",
                "PAYBACK"
            ],
            "eliteMoves": [
                "KARATE_CHOP",
                "STONE_EDGE",
                "SUBMISSION",
                "PAYBACK"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "bellsprout",
        "dexNumber": 69,
        "name": "Bellsprout",
        "stats": {
            "atk": 139,
            "def": 61,
            "sta": 137
        },
        "types": [
            "grass",
            "poison"
        ],
        "family": {
            "id": "bellsprout",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ACID",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "POWER_WHIP",
                "SLUDGE_BOMB",
                "WRAP"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "weepinbell",
        "dexNumber": 70,
        "name": "Weepinbell",
        "stats": {
            "atk": 172,
            "def": 92,
            "sta": 163
        },
        "types": [
            "grass",
            "poison"
        ],
        "family": {
            "id": "bellsprout",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ACID",
                "BULLET_SEED",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "POWER_WHIP",
                "SEED_BOMB",
                "SLUDGE_BOMB"
            ],
            "eliteMoves": [
                "RAZOR_LEAF"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "victreebel",
        "dexNumber": 71,
        "name": "Victreebel",
        "stats": {
            "atk": 207,
            "def": 135,
            "sta": 190
        },
        "types": [
            "grass",
            "poison"
        ],
        "family": {
            "id": "bellsprout",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "ACID",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "LEAF_BLADE",
                "SLUDGE_BOMB",
                "SOLAR_BEAM",
                "ACID_SPRAY",
                "LEAF_TORNADO"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "tentacool",
        "dexNumber": 72,
        "name": "Tentacool",
        "stats": {
            "atk": 97,
            "def": 149,
            "sta": 120
        },
        "types": [
            "water",
            "poison"
        ],
        "family": {
            "id": "tentacool",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "POISON_STING"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "WATER_PULSE",
                "WRAP"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "tentacruel",
        "dexNumber": 73,
        "name": "Tentacruel",
        "stats": {
            "atk": 166,
            "def": 209,
            "sta": 190
        },
        "types": [
            "water",
            "poison"
        ],
        "family": {
            "id": "tentacool",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ACID",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HYDRO_PUMP",
                "SLUDGE_WAVE",
                "ACID_SPRAY"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "geodude",
        "dexNumber": 74,
        "name": "Geodude",
        "stats": {
            "atk": 132,
            "def": 132,
            "sta": 120
        },
        "types": [
            "rock",
            "ground"
        ],
        "family": {
            "id": "geodude",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ROCK_THROW",
                "TACKLE"
            ],
            "chargedMoves": [
                "DIG",
                "ROCK_SLIDE",
                "ROCK_TOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "geodude_alolan",
        "dexNumber": 74,
        "name": "Geodude (Alolan)",
        "stats": {
            "atk": 132,
            "def": 132,
            "sta": 120
        },
        "types": [
            "rock",
            "electric"
        ],
        "family": {
            "id": "geodude_alolan",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ROCK_THROW",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "ROCK_SLIDE",
                "ROCK_TOMB",
                "THUNDERBOLT"
            ]
        },
        "tags": [
            "alolan"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "graveler",
        "dexNumber": 75,
        "name": "Graveler",
        "stats": {
            "atk": 164,
            "def": 164,
            "sta": 146
        },
        "types": [
            "rock",
            "ground"
        ],
        "family": {
            "id": "geodude",
            "stage": 2
        },
        "aliases": [
            "kgrav"
        ],
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "MUD_SLAP",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "DIG",
                "ROCK_BLAST",
                "ROCK_SLIDE",
                "STONE_EDGE"
            ],
            "legacyMoves": [
                "MUD_SHOT"
            ],
            "eliteMoves": [
                "ROCK_SLIDE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "graveler_alolan",
        "dexNumber": 75,
        "name": "Graveler (Alolan)",
        "stats": {
            "atk": 164,
            "def": 164,
            "sta": 146
        },
        "types": [
            "rock",
            "electric"
        ],
        "family": {
            "id": "geodude_alolan",
            "stage": 2
        },
        "aliases": [
            "agrav"
        ],
        "moves": {
            "fastMoves": [
                "ROCK_THROW",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "ROCK_BLAST",
                "STONE_EDGE",
                "THUNDERBOLT"
            ]
        },
        "tags": [
            "alolan"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "golem",
        "dexNumber": 76,
        "name": "Golem",
        "stats": {
            "atk": 211,
            "def": 198,
            "sta": 190
        },
        "types": [
            "rock",
            "ground"
        ],
        "family": {
            "id": "geodude",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "MUD_SLAP",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "EARTHQUAKE",
                "ROCK_BLAST",
                "STONE_EDGE"
            ],
            "legacyMoves": [
                "MUD_SHOT"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "golem_alolan",
        "dexNumber": 76,
        "name": "Golem (Alolan)",
        "stats": {
            "atk": 211,
            "def": 198,
            "sta": 190
        },
        "types": [
            "rock",
            "electric"
        ],
        "family": {
            "id": "geodude_alolan",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "ROCK_THROW",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "ROCK_BLAST",
                "STONE_EDGE",
                "WILD_CHARGE"
            ]
        },
        "tags": [
            "alolan"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "ponyta",
        "dexNumber": 77,
        "name": "Ponyta",
        "stats": {
            "atk": 170,
            "def": 127,
            "sta": 137
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "ponyta",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "TACKLE"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "FLAME_CHARGE",
                "FLAME_WHEEL",
                "STOMP"
            ],
            "eliteMoves": [
                "FIRE_BLAST"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "ponyta_galarian",
        "dexNumber": 77,
        "name": "Ponyta (Galarian)",
        "stats": {
            "atk": 170,
            "def": 127,
            "sta": 137
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "ponyta_galarian",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "PSYCHO_CUT"
            ],
            "chargedMoves": [
                "PLAY_ROUGH",
                "PSYBEAM",
                "SWIFT"
            ]
        },
        "tags": [
            "galarian"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "rapidash",
        "dexNumber": 78,
        "name": "Rapidash",
        "stats": {
            "atk": 207,
            "def": 162,
            "sta": 163
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "ponyta",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "FIRE_SPIN",
                "LOW_KICK",
                "INCINERATE"
            ],
            "chargedMoves": [
                "DRILL_RUN",
                "FIRE_BLAST",
                "HEAT_WAVE",
                "FLAME_CHARGE"
            ],
            "eliteMoves": [
                "EMBER"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "rapidash_galarian",
        "dexNumber": 78,
        "name": "Rapidash (Galarian)",
        "stats": {
            "atk": 207,
            "def": 162,
            "sta": 163
        },
        "types": [
            "psychic",
            "fairy"
        ],
        "family": {
            "id": "ponyta_galarian",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "PSYCHO_CUT"
            ],
            "chargedMoves": [
                "PLAY_ROUGH",
                "PSYCHIC",
                "BODY_SLAM",
                "MEGAHORN"
            ]
        },
        "tags": [
            "galarian"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "slowpoke",
        "dexNumber": 79,
        "name": "Slowpoke",
        "stats": {
            "atk": 109,
            "def": 98,
            "sta": 207
        },
        "types": [
            "water",
            "psychic"
        ],
        "family": {
            "id": "slowpoke",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "PSYCHIC",
                "PSYSHOCK",
                "WATER_PULSE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "slowpoke_galarian",
        "dexNumber": 79,
        "name": "Slowpoke (Galarian)",
        "stats": {
            "atk": 109,
            "def": 98,
            "sta": 207
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "slowpoke_galarian",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "IRON_TAIL"
            ],
            "chargedMoves": [
                "SURF",
                "PSYSHOCK",
                "PSYCHIC"
            ]
        },
        "tags": [
            "galarian"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "slowbro",
        "dexNumber": 80,
        "name": "Slowbro",
        "stats": {
            "atk": 177,
            "def": 180,
            "sta": 216
        },
        "types": [
            "water",
            "psychic"
        ],
        "family": {
            "id": "slowpoke",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "ICE_BEAM",
                "PSYCHIC",
                "WATER_PULSE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "slowbro_galarian",
        "dexNumber": 80,
        "name": "Slowbro (Galarian)",
        "stats": {
            "atk": 182,
            "def": 156,
            "sta": 216
        },
        "types": [
            "poison",
            "psychic"
        ],
        "family": {
            "id": "slowpoke_galarian",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "FOCUS_BLAST",
                "PSYCHIC",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [
            "galarian"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "slowbro_mega",
        "dexNumber": 80,
        "name": "Slowbro (Mega)",
        "stats": {
            "atk": 224,
            "def": 259,
            "sta": 216
        },
        "types": [
            "water",
            "psychic"
        ],
        "family": {
            "id": "slowpoke",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "ICE_BEAM",
                "PSYCHIC",
                "WATER_PULSE"
            ]
        },
        "tags": [
            "mega"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "magnemite",
        "dexNumber": 81,
        "name": "Magnemite",
        "stats": {
            "atk": 165,
            "def": 121,
            "sta": 93
        },
        "types": [
            "electric",
            "steel"
        ],
        "family": {
            "id": "magnemite",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SPARK",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "MAGNET_BOMB",
                "THUNDERBOLT"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "magneton",
        "dexNumber": 82,
        "name": "Magneton",
        "stats": {
            "atk": 223,
            "def": 169,
            "sta": 137
        },
        "types": [
            "electric",
            "steel"
        ],
        "family": {
            "id": "magnemite",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "SPARK",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "FLASH_CANNON",
                "MAGNET_BOMB",
                "ZAP_CANNON"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "farfetchd",
        "dexNumber": 83,
        "name": "Farfetch'd",
        "stats": {
            "atk": 124,
            "def": 115,
            "sta": 141
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "farfetchd",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "CUT",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "AIR_CUTTER",
                "LEAF_BLADE"
            ],
            "eliteMoves": [
                "CUT"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "farfetchd_galarian",
        "dexNumber": 83,
        "name": "Farfetchd (Galarian)",
        "stats": {
            "atk": 174,
            "def": 114,
            "sta": 141
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "farfetchd_galarian",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "BRAVE_BIRD",
                "LEAF_BLADE"
            ]
        },
        "tags": [
            "galarian"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "doduo",
        "dexNumber": 84,
        "name": "Doduo",
        "stats": {
            "atk": 158,
            "def": 83,
            "sta": 111
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "doduo",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BRAVE_BIRD",
                "DRILL_PECK",
                "SWIFT"
            ],
            "eliteMoves": [
                "SWIFT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "dodrio",
        "dexNumber": 85,
        "name": "Dodrio",
        "stats": {
            "atk": 218,
            "def": 140,
            "sta": 155
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "doduo",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "STEEL_WING"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "AIR_CUTTER",
                "BRAVE_BIRD",
                "DRILL_PECK"
            ],
            "eliteMoves": [
                "AIR_CUTTER"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "seel",
        "dexNumber": 86,
        "name": "Seel",
        "stats": {
            "atk": 85,
            "def": 121,
            "sta": 163
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "seel",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ICE_SHARD",
                "LICK",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "AQUA_TAIL",
                "AURORA_BEAM",
                "ICY_WIND"
            ],
            "eliteMoves": [
                "WATER_GUN",
                "AQUA_JET"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "dewgong",
        "dexNumber": 87,
        "name": "Dewgong",
        "stats": {
            "atk": 139,
            "def": 177,
            "sta": 207
        },
        "types": [
            "water",
            "ice"
        ],
        "family": {
            "id": "seel",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FROST_BREATH",
                "ICE_SHARD",
                "IRON_TAIL"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "AURORA_BEAM",
                "BLIZZARD",
                "ICY_WIND",
                "WATER_PULSE"
            ],
            "eliteMoves": [
                "ICE_SHARD",
                "AQUA_JET",
                "ICY_WIND"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "grimer",
        "dexNumber": 88,
        "name": "Grimer",
        "stats": {
            "atk": 135,
            "def": 90,
            "sta": 190
        },
        "types": [
            "poison"
        ],
        "family": {
            "id": "grimer",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ACID",
                "MUD_SLAP",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "MUD_BOMB",
                "SLUDGE",
                "SLUDGE_BOMB"
            ],
            "legacyMoves": [
                "ACID"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "grimer_alolan",
        "dexNumber": 88,
        "name": "Grimer (Alolan)",
        "stats": {
            "atk": 135,
            "def": 90,
            "sta": 190
        },
        "types": [
            "poison",
            "dark"
        ],
        "family": {
            "id": "grimer_alolan",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ACID",
                "BITE",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "CRUNCH",
                "GUNK_SHOT",
                "SLUDGE_BOMB"
            ],
            "legacyMoves": [
                "ACID"
            ]
        },
        "tags": [
            "alolan"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "muk",
        "dexNumber": 89,
        "name": "Muk",
        "stats": {
            "atk": 190,
            "def": 172,
            "sta": 233
        },
        "types": [
            "poison"
        ],
        "family": {
            "id": "grimer",
            "stage": 2
        },
        "aliases": [
            "kmuk"
        ],
        "moves": {
            "fastMoves": [
                "ACID",
                "INFESTATION",
                "LICK",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "GUNK_SHOT",
                "SLUDGE_WAVE",
                "THUNDER_PUNCH",
                "ACID_SPRAY"
            ],
            "legacyMoves": [
                "ACID"
            ],
            "eliteMoves": [
                "LICK"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "muk_alolan",
        "dexNumber": 89,
        "name": "Muk (Alolan)",
        "stats": {
            "atk": 190,
            "def": 172,
            "sta": 233
        },
        "types": [
            "poison",
            "dark"
        ],
        "family": {
            "id": "grimer_alolan",
            "stage": 2
        },
        "aliases": [
            "amuk"
        ],
        "moves": {
            "fastMoves": [
                "BITE",
                "POISON_JAB",
                "SNARL"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "GUNK_SHOT",
                "SLUDGE_WAVE",
                "ACID_SPRAY"
            ]
        },
        "tags": [
            "alolan"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "shellder",
        "dexNumber": 90,
        "name": "Shellder",
        "stats": {
            "atk": 116,
            "def": 134,
            "sta": 102
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "shellder",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ICE_SHARD",
                "TACKLE"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "ICY_WIND",
                "WATER_PULSE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "cloyster",
        "dexNumber": 91,
        "name": "Cloyster",
        "stats": {
            "atk": 186,
            "def": 256,
            "sta": 137
        },
        "types": [
            "water",
            "ice"
        ],
        "family": {
            "id": "shellder",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FROST_BREATH",
                "ICE_SHARD"
            ],
            "chargedMoves": [
                "AURORA_BEAM",
                "AVALANCHE",
                "BLIZZARD",
                "HYDRO_PUMP",
                "ICY_WIND"
            ],
            "eliteMoves": [
                "BLIZZARD"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gastly",
        "dexNumber": 92,
        "name": "Gastly",
        "stats": {
            "atk": 186,
            "def": 67,
            "sta": 102
        },
        "types": [
            "ghost",
            "poison"
        ],
        "family": {
            "id": "gastly",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "LICK",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "NIGHT_SHADE",
                "OMINOUS_WIND",
                "SLUDGE_BOMB"
            ],
            "eliteMoves": [
                "SUCKER_PUNCH",
                "OMINOUS_WIND"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "haunter",
        "dexNumber": 93,
        "name": "Haunter",
        "stats": {
            "atk": 223,
            "def": 107,
            "sta": 128
        },
        "types": [
            "ghost",
            "poison"
        ],
        "family": {
            "id": "gastly",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "LICK",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "SHADOW_BALL",
                "SHADOW_PUNCH",
                "SLUDGE_BOMB"
            ],
            "eliteMoves": [
                "LICK"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gengar",
        "dexNumber": 94,
        "name": "Gengar",
        "stats": {
            "atk": 261,
            "def": 149,
            "sta": 155
        },
        "types": [
            "ghost",
            "poison"
        ],
        "family": {
            "id": "gastly",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "HEX",
                "LICK",
                "SHADOW_CLAW",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "FOCUS_BLAST",
                "PSYCHIC",
                "SHADOW_BALL",
                "SLUDGE_BOMB",
                "SLUDGE_WAVE",
                "SHADOW_PUNCH"
            ],
            "eliteMoves": [
                "LICK",
                "SLUDGE_WAVE",
                "DARK_PULSE",
                "PSYCHIC",
                "SHADOW_PUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gengar_mega",
        "dexNumber": 94,
        "name": "Gengar (Mega)",
        "stats": {
            "atk": 349,
            "def": 199,
            "sta": 155
        },
        "types": [
            "ghost",
            "poison"
        ],
        "family": {
            "id": "gastly",
            "stage": 4
        },
        "moves": {
            "fastMoves": [
                "HEX",
                "LICK",
                "SHADOW_CLAW",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "FOCUS_BLAST",
                "PSYCHIC",
                "SHADOW_BALL",
                "SLUDGE_BOMB",
                "SLUDGE_WAVE",
                "SHADOW_PUNCH"
            ],
            "eliteMoves": [
                "LICK",
                "SLUDGE_WAVE",
                "DARK_PULSE",
                "PSYCHIC",
                "SHADOW_PUNCH"
            ]
        },
        "tags": [
            "mega"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "onix",
        "dexNumber": 95,
        "name": "Onix",
        "stats": {
            "atk": 85,
            "def": 232,
            "sta": 111
        },
        "types": [
            "rock",
            "ground"
        ],
        "family": {
            "id": "onix",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ROCK_THROW",
                "TACKLE"
            ],
            "chargedMoves": [
                "HEAVY_SLAM",
                "IRON_HEAD",
                "ROCK_SLIDE",
                "SAND_TOMB",
                "STONE_EDGE"
            ],
            "eliteMoves": [
                "IRON_HEAD",
                "ROCK_SLIDE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "drowzee",
        "dexNumber": 96,
        "name": "Drowzee",
        "stats": {
            "atk": 89,
            "def": 136,
            "sta": 155
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "drowzee",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "POUND"
            ],
            "chargedMoves": [
                "PSYBEAM",
                "PSYCHIC",
                "PSYSHOCK"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "hypno",
        "dexNumber": 97,
        "name": "Hypno",
        "stats": {
            "atk": 144,
            "def": 193,
            "sta": 198
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "drowzee",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "FOCUS_BLAST",
                "FUTURE_SIGHT",
                "PSYCHIC",
                "PSYSHOCK",
                "SHADOW_BALL",
                "FIRE_PUNCH",
                "ICE_PUNCH",
                "THUNDER_PUNCH"
            ],
            "eliteMoves": [
                "PSYSHOCK"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "krabby",
        "dexNumber": 98,
        "name": "Krabby",
        "stats": {
            "atk": 181,
            "def": 124,
            "sta": 102
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "krabby",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "VICE_GRIP",
                "WATER_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "kingler",
        "dexNumber": 99,
        "name": "Kingler",
        "stats": {
            "atk": 240,
            "def": 181,
            "sta": 146
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "krabby",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "METAL_CLAW",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "VICE_GRIP",
                "WATER_PULSE",
                "X_SCISSOR",
                "CRABHAMMER"
            ],
            "eliteMoves": [
                "MUD_SHOT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "voltorb",
        "dexNumber": 100,
        "name": "Voltorb",
        "stats": {
            "atk": 109,
            "def": 111,
            "sta": 120
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "voltorb",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SPARK",
                "TACKLE"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "GYRO_BALL",
                "SIGNAL_BEAM",
                "THUNDERBOLT"
            ],
            "eliteMoves": [
                "SIGNAL_BEAM"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "voltorb_hisuian",
        "dexNumber": 100,
        "name": "Voltorb (Hisuian)",
        "stats": {
            "atk": 109,
            "def": 111,
            "sta": 120
        },
        "types": [
            "electric",
            "grass"
        ],
        "family": {
            "id": "voltorb_hisuian",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "TACKLE"
            ],
            "chargedMoves": [
                "SWIFT",
                "THUNDERBOLT",
                "ENERGY_BALL"
            ]
        },
        "tags": [
            "hisuian"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "electrode",
        "dexNumber": 101,
        "name": "Electrode",
        "stats": {
            "atk": 173,
            "def": 173,
            "sta": 155
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "voltorb",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "SPARK",
                "TACKLE",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "HYPER_BEAM",
                "THUNDERBOLT",
                "FOUL_PLAY"
            ],
            "eliteMoves": [
                "TACKLE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "electrode_hisuian",
        "dexNumber": 101,
        "name": "Electrode (Hisuian)",
        "stats": {
            "atk": 176,
            "def": 176,
            "sta": 155
        },
        "types": [
            "electric",
            "grass"
        ],
        "family": {
            "id": "voltorb_hisuian",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "TACKLE"
            ],
            "chargedMoves": [
                "SWIFT",
                "WILD_CHARGE",
                "ENERGY_BALL"
            ],
            "eliteMoves": [
                "TACKLE"
            ]
        },
        "tags": [
            "hisuian"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "exeggcute",
        "dexNumber": 102,
        "name": "Exeggcute",
        "stats": {
            "atk": 107,
            "def": 125,
            "sta": 155
        },
        "types": [
            "grass",
            "psychic"
        ],
        "family": {
            "id": "exeggcute",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "CONFUSION"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "PSYCHIC",
                "SEED_BOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "exeggutor",
        "dexNumber": 103,
        "name": "Exeggutor",
        "stats": {
            "atk": 233,
            "def": 149,
            "sta": 216
        },
        "types": [
            "grass",
            "psychic"
        ],
        "family": {
            "id": "exeggcute",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "CONFUSION",
                "EXTRASENSORY",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "PSYCHIC",
                "SEED_BOMB",
                "SOLAR_BEAM"
            ],
            "eliteMoves": [
                "ZEN_HEADBUTT"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "exeggutor_alolan",
        "dexNumber": 103,
        "name": "Exeggutor (Alolan)",
        "stats": {
            "atk": 230,
            "def": 153,
            "sta": 216
        },
        "types": [
            "grass",
            "dragon"
        ],
        "family": {
            "id": "exeggcute",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "DRAGON_PULSE",
                "SEED_BOMB",
                "SOLAR_BEAM",
                "DRACO_METEOR"
            ],
            "eliteMoves": [
                "DRACO_METEOR"
            ]
        },
        "tags": [
            "alolan",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "cubone",
        "dexNumber": 104,
        "name": "Cubone",
        "stats": {
            "atk": 90,
            "def": 144,
            "sta": 137
        },
        "types": [
            "ground"
        ],
        "family": {
            "id": "cubone",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "BONE_CLUB",
                "BULLDOZE",
                "DIG"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "marowak",
        "dexNumber": 105,
        "name": "Marowak",
        "stats": {
            "atk": 144,
            "def": 186,
            "sta": 155
        },
        "types": [
            "ground"
        ],
        "family": {
            "id": "cubone",
            "stage": 2
        },
        "aliases": [
            "kwak"
        ],
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "BONE_CLUB",
                "DIG",
                "EARTHQUAKE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "marowak_alolan",
        "dexNumber": 105,
        "name": "Marowak (Alolan)",
        "stats": {
            "atk": 144,
            "def": 186,
            "sta": 155
        },
        "types": [
            "fire",
            "ghost"
        ],
        "family": {
            "id": "cubone",
            "stage": 2
        },
        "aliases": [
            "awak"
        ],
        "moves": {
            "fastMoves": [
                "HEX",
                "ROCK_SMASH",
                "FIRE_SPIN"
            ],
            "chargedMoves": [
                "BONE_CLUB",
                "FIRE_BLAST",
                "SHADOW_BALL",
                "FLAME_WHEEL",
                "SHADOW_BONE"
            ],
            "eliteMoves": [
                "SHADOW_BONE"
            ]
        },
        "tags": [
            "alolan"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "hitmonlee",
        "dexNumber": 106,
        "name": "Hitmonlee",
        "stats": {
            "atk": 224,
            "def": 181,
            "sta": 137
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "tyrogue",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "CLOSE_COMBAT",
                "LOW_SWEEP",
                "STOMP",
                "STONE_EDGE"
            ],
            "eliteMoves": [
                "STOMP",
                "BRICK_BREAK"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "hitmonchan",
        "dexNumber": 107,
        "name": "Hitmonchan",
        "stats": {
            "atk": 193,
            "def": 197,
            "sta": 137
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "tyrogue",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BULLET_PUNCH",
                "COUNTER",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "CLOSE_COMBAT",
                "FIRE_PUNCH",
                "ICE_PUNCH",
                "THUNDER_PUNCH",
                "POWER_UP_PUNCH"
            ],
            "eliteMoves": [
                "ROCK_SMASH",
                "BRICK_BREAK"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "lickitung",
        "dexNumber": 108,
        "name": "Lickitung",
        "stats": {
            "atk": 108,
            "def": 137,
            "sta": 207
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "lickitung",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "LICK",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "HYPER_BEAM",
                "POWER_WHIP",
                "STOMP",
                "BODY_SLAM"
            ],
            "eliteMoves": [
                "BODY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "koffing",
        "dexNumber": 109,
        "name": "Koffing",
        "stats": {
            "atk": 119,
            "def": 141,
            "sta": 120
        },
        "types": [
            "poison"
        ],
        "family": {
            "id": "koffing",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ACID",
                "INFESTATION",
                "TACKLE"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "SLUDGE",
                "SLUDGE_BOMB"
            ],
            "legacyMoves": [
                "ACID"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "weezing",
        "dexNumber": 110,
        "name": "Weezing",
        "stats": {
            "atk": 174,
            "def": 197,
            "sta": 163
        },
        "types": [
            "poison"
        ],
        "family": {
            "id": "koffing",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ACID",
                "INFESTATION",
                "TACKLE"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "SHADOW_BALL",
                "SLUDGE_BOMB",
                "THUNDERBOLT"
            ],
            "legacyMoves": [
                "ACID"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "weezing_galarian",
        "dexNumber": 110,
        "name": "Weezing (Galarian)",
        "stats": {
            "atk": 174,
            "def": 197,
            "sta": 163
        },
        "types": [
            "poison",
            "fairy"
        ],
        "family": {
            "id": "koffing",
            "stage": 2
        },
        "aliases": [
            "gweezing"
        ],
        "moves": {
            "fastMoves": [
                "TACKLE"
            ],
            "chargedMoves": [
                "SLUDGE",
                "HYPER_BEAM",
                "PLAY_ROUGH",
                "OVERHEAT"
            ]
        },
        "tags": [
            "galarian"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "rhyhorn",
        "dexNumber": 111,
        "name": "Rhyhorn",
        "stats": {
            "atk": 140,
            "def": 127,
            "sta": 190
        },
        "types": [
            "ground",
            "rock"
        ],
        "family": {
            "id": "rhyhorn",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "BULLDOZE",
                "HORN_ATTACK",
                "STOMP"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "rhydon",
        "dexNumber": 112,
        "name": "Rhydon",
        "stats": {
            "atk": 222,
            "def": 171,
            "sta": 233
        },
        "types": [
            "ground",
            "rock"
        ],
        "family": {
            "id": "rhyhorn",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "MEGAHORN",
                "STONE_EDGE",
                "SURF"
            ],
            "eliteMoves": [
                "MEGAHORN"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "chansey",
        "dexNumber": 113,
        "name": "Chansey",
        "stats": {
            "atk": 60,
            "def": 128,
            "sta": 487
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "happiny",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "HYPER_BEAM",
                "PSYBEAM",
                "PSYCHIC"
            ],
            "legacyMoves": [
                "PSYBEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "tangela",
        "dexNumber": 114,
        "name": "Tangela",
        "stats": {
            "atk": 183,
            "def": 169,
            "sta": 163
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "tangela",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "INFESTATION",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "GRASS_KNOT",
                "POWER_WHIP",
                "SLUDGE_BOMB",
                "SOLAR_BEAM"
            ],
            "eliteMoves": [
                "POWER_WHIP"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "kangaskhan",
        "dexNumber": 115,
        "name": "Kangaskhan",
        "stats": {
            "atk": 181,
            "def": 165,
            "sta": 233
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "kangaskhan",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "CRUNCH",
                "EARTHQUAKE",
                "OUTRAGE",
                "STOMP",
                "POWER_UP_PUNCH"
            ],
            "eliteMoves": [
                "BRICK_BREAK",
                "STOMP"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "kangaskhan_mega",
        "dexNumber": 115,
        "name": "Kangaskhan (Mega)",
        "stats": {
            "atk": 246,
            "def": 210,
            "sta": 233
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "kangaskhan",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "CRUNCH",
                "EARTHQUAKE",
                "OUTRAGE",
                "STOMP",
                "POWER_UP_PUNCH"
            ],
            "eliteMoves": [
                "BRICK_BREAK",
                "STOMP"
            ]
        },
        "tags": [
            "regional",
            "mega"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "horsea",
        "dexNumber": 116,
        "name": "Horsea",
        "stats": {
            "atk": 129,
            "def": 103,
            "sta": 102
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "horsea",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "DRAGON_PULSE",
                "FLASH_CANNON"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "seadra",
        "dexNumber": 117,
        "name": "Seadra",
        "stats": {
            "atk": 187,
            "def": 156,
            "sta": 146
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "horsea",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AURORA_BEAM",
                "BLIZZARD",
                "DRAGON_PULSE",
                "HYDRO_PUMP"
            ],
            "eliteMoves": [
                "BLIZZARD"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "goldeen",
        "dexNumber": 118,
        "name": "Goldeen",
        "stats": {
            "atk": 123,
            "def": 110,
            "sta": 128
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "goldeen",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "PECK"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "HORN_ATTACK",
                "WATER_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "seaking",
        "dexNumber": 119,
        "name": "Seaking",
        "stats": {
            "atk": 175,
            "def": 147,
            "sta": 190
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "goldeen",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "POISON_JAB",
                "WATERFALL"
            ],
            "chargedMoves": [
                "DRILL_RUN",
                "ICE_BEAM",
                "ICY_WIND",
                "MEGAHORN",
                "WATER_PULSE"
            ],
            "eliteMoves": [
                "POISON_JAB",
                "ICY_WIND",
                "DRILL_RUN"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "staryu",
        "dexNumber": 120,
        "name": "Staryu",
        "stats": {
            "atk": 137,
            "def": 112,
            "sta": 102
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "staryu",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "TACKLE",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "POWER_GEM",
                "SWIFT"
            ],
            "legacyMoves": [
                "QUICK_ATTACK"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "starmie",
        "dexNumber": 121,
        "name": "Starmie",
        "stats": {
            "atk": 210,
            "def": 184,
            "sta": 155
        },
        "types": [
            "water",
            "psychic"
        ],
        "family": {
            "id": "staryu",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "QUICK_ATTACK",
                "TACKLE",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "HYDRO_PUMP",
                "ICE_BEAM",
                "POWER_GEM",
                "PSYBEAM",
                "PSYCHIC",
                "THUNDER"
            ],
            "legacyMoves": [
                "QUICK_ATTACK",
                "PSYBEAM"
            ],
            "eliteMoves": [
                "TACKLE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "mr_mime",
        "dexNumber": 122,
        "name": "Mr. Mime",
        "stats": {
            "atk": 192,
            "def": 205,
            "sta": 120
        },
        "types": [
            "psychic",
            "fairy"
        ],
        "family": {
            "id": "mime_jr",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "PSYBEAM",
                "PSYCHIC",
                "SHADOW_BALL"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "mr_mime_galarian",
        "dexNumber": 122,
        "name": "Mr. Mime (Galarian)",
        "stats": {
            "atk": 183,
            "def": 169,
            "sta": 137
        },
        "types": [
            "ice",
            "psychic"
        ],
        "family": {
            "id": "mr_mime_galarian",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "PSYBEAM",
                "PSYCHIC",
                "ICE_PUNCH"
            ]
        },
        "tags": [
            "galarian"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "scyther",
        "dexNumber": 123,
        "name": "Scyther",
        "stats": {
            "atk": 218,
            "def": 170,
            "sta": 172
        },
        "types": [
            "bug",
            "flying"
        ],
        "family": {
            "id": "scyther",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "FURY_CUTTER",
                "STEEL_WING"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BUG_BUZZ",
                "NIGHT_SLASH",
                "X_SCISSOR"
            ],
            "eliteMoves": [
                "STEEL_WING",
                "BUG_BUZZ"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "jynx",
        "dexNumber": 124,
        "name": "Jynx",
        "stats": {
            "atk": 223,
            "def": 151,
            "sta": 163
        },
        "types": [
            "ice",
            "psychic"
        ],
        "family": {
            "id": "smoochum",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "FROST_BREATH",
                "POUND"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "DRAINING_KISS",
                "FOCUS_BLAST",
                "ICE_PUNCH",
                "PSYSHOCK"
            ],
            "eliteMoves": [
                "POUND",
                "ICE_PUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "electabuzz",
        "dexNumber": 125,
        "name": "Electabuzz",
        "stats": {
            "atk": 198,
            "def": 158,
            "sta": 163
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "elekid",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "THUNDER",
                "THUNDER_PUNCH",
                "THUNDERBOLT"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "magmar",
        "dexNumber": 126,
        "name": "Magmar",
        "stats": {
            "atk": 206,
            "def": 154,
            "sta": 163
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "magby",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "KARATE_CHOP"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "FIRE_PUNCH",
                "FLAMETHROWER"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "pinsir",
        "dexNumber": 127,
        "name": "Pinsir",
        "stats": {
            "atk": 238,
            "def": 182,
            "sta": 163
        },
        "types": [
            "bug"
        ],
        "family": {
            "id": "pinsir",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "FURY_CUTTER",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "SUBMISSION",
                "VICE_GRIP",
                "X_SCISSOR",
                "SUPER_POWER"
            ],
            "eliteMoves": [
                "SUBMISSION"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "tauros",
        "dexNumber": 128,
        "name": "Tauros",
        "stats": {
            "atk": 198,
            "def": 183,
            "sta": 181
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "tauros",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "HORN_ATTACK",
                "IRON_HEAD"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "magikarp",
        "dexNumber": 129,
        "name": "Magikarp",
        "stats": {
            "atk": 29,
            "def": 85,
            "sta": 85
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "magikarp",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SPLASH"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "gyarados",
        "dexNumber": 130,
        "name": "Gyarados",
        "stats": {
            "atk": 237,
            "def": 186,
            "sta": 216
        },
        "types": [
            "water",
            "flying"
        ],
        "family": {
            "id": "magikarp",
            "stage": 2
        },
        "aliases": [
            "gary"
        ],
        "moves": {
            "fastMoves": [
                "BITE",
                "DRAGON_BREATH",
                "DRAGON_TAIL",
                "WATERFALL"
            ],
            "chargedMoves": [
                "CRUNCH",
                "DRAGON_PULSE",
                "HYDRO_PUMP",
                "OUTRAGE",
                "TWISTER",
                "AQUA_TAIL"
            ],
            "eliteMoves": [
                "DRAGON_TAIL",
                "DRAGON_PULSE",
                "AQUA_TAIL"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "gyarados_mega",
        "dexNumber": 130,
        "name": "Gyarados (Mega)",
        "stats": {
            "atk": 292,
            "def": 247,
            "sta": 216
        },
        "types": [
            "water",
            "dark"
        ],
        "family": {
            "id": "magikarp",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "DRAGON_BREATH",
                "DRAGON_TAIL",
                "WATERFALL"
            ],
            "chargedMoves": [
                "CRUNCH",
                "DRAGON_PULSE",
                "HYDRO_PUMP",
                "OUTRAGE",
                "TWISTER",
                "AQUA_TAIL"
            ],
            "eliteMoves": [
                "DRAGON_TAIL",
                "DRAGON_PULSE",
                "AQUA_TAIL"
            ]
        },
        "tags": [
            "shadoweligible",
            "mega"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "lapras",
        "dexNumber": 131,
        "name": "Lapras",
        "stats": {
            "atk": 165,
            "def": 174,
            "sta": 277
        },
        "types": [
            "water",
            "ice"
        ],
        "family": {
            "id": "lapras",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "FROST_BREATH",
                "ICE_SHARD",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "DRAGON_PULSE",
                "HYDRO_PUMP",
                "ICE_BEAM",
                "SURF",
                "SKULL_BASH"
            ],
            "eliteMoves": [
                "ICE_SHARD",
                "DRAGON_PULSE",
                "ICE_BEAM"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "ditto",
        "dexNumber": 132,
        "name": "Ditto",
        "stats": {
            "atk": 91,
            "def": 91,
            "sta": 134
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "ditto",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TRANSFORM"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "eevee",
        "dexNumber": 133,
        "name": "Eevee",
        "stats": {
            "atk": 104,
            "def": 114,
            "sta": 146
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "eevee",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "TACKLE"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DIG",
                "LAST_RESORT",
                "SWIFT"
            ],
            "eliteMoves": [
                "LAST_RESORT",
                "BODY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "vaporeon",
        "dexNumber": 134,
        "name": "Vaporeon",
        "stats": {
            "atk": 205,
            "def": 161,
            "sta": 277
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "eevee",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "HYDRO_PUMP",
                "LAST_RESORT",
                "WATER_PULSE",
                "SCALD"
            ],
            "eliteMoves": [
                "LAST_RESORT",
                "SCALD"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "jolteon",
        "dexNumber": 135,
        "name": "Jolteon",
        "stats": {
            "atk": 232,
            "def": 182,
            "sta": 163
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "eevee",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "LAST_RESORT",
                "THUNDER",
                "THUNDERBOLT",
                "ZAP_CANNON"
            ],
            "eliteMoves": [
                "LAST_RESORT",
                "ZAP_CANNON"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "flareon",
        "dexNumber": 136,
        "name": "Flareon",
        "stats": {
            "atk": 246,
            "def": 179,
            "sta": 163
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "eevee",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "FIRE_SPIN"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "FLAMETHROWER",
                "HEAT_WAVE",
                "LAST_RESORT",
                "OVERHEAT",
                "SUPER_POWER"
            ],
            "eliteMoves": [
                "LAST_RESORT",
                "HEAT_WAVE",
                "SUPER_POWER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "porygon",
        "dexNumber": 137,
        "name": "Porygon",
        "stats": {
            "atk": 153,
            "def": 136,
            "sta": 163
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "porygon",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "QUICK_ATTACK",
                "TACKLE",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "HYPER_BEAM",
                "PSYBEAM",
                "SIGNAL_BEAM",
                "SOLAR_BEAM",
                "ZAP_CANNON"
            ],
            "legacyMoves": [
                "QUICK_ATTACK"
            ],
            "eliteMoves": [
                "TACKLE",
                "ZEN_HEADBUTT",
                "SIGNAL_BEAM",
                "PSYBEAM",
                "DISCHARGE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "omanyte",
        "dexNumber": 138,
        "name": "Omanyte",
        "stats": {
            "atk": 155,
            "def": 153,
            "sta": 111
        },
        "types": [
            "rock",
            "water"
        ],
        "family": {
            "id": "omanyte",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "BRINE",
                "BUBBLE_BEAM",
                "ROCK_BLAST",
                "ROCK_TOMB"
            ],
            "eliteMoves": [
                "ROCK_TOMB",
                "BRINE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "omastar",
        "dexNumber": 139,
        "name": "Omastar",
        "stats": {
            "atk": 207,
            "def": 201,
            "sta": 172
        },
        "types": [
            "rock",
            "water"
        ],
        "family": {
            "id": "omanyte",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "ROCK_THROW",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "HYDRO_PUMP",
                "ROCK_BLAST",
                "ROCK_SLIDE"
            ],
            "eliteMoves": [
                "ROCK_THROW",
                "ROCK_SLIDE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "kabuto",
        "dexNumber": 140,
        "name": "Kabuto",
        "stats": {
            "atk": 148,
            "def": 140,
            "sta": 102
        },
        "types": [
            "rock",
            "water"
        ],
        "family": {
            "id": "kabuto",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "SCRATCH"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "AQUA_JET",
                "ROCK_TOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "kabutops",
        "dexNumber": 141,
        "name": "Kabutops",
        "stats": {
            "atk": 220,
            "def": 186,
            "sta": 155
        },
        "types": [
            "rock",
            "water"
        ],
        "family": {
            "id": "kabuto",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FURY_CUTTER",
                "MUD_SHOT",
                "ROCK_SMASH",
                "WATERFALL"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "STONE_EDGE",
                "WATER_PULSE"
            ],
            "eliteMoves": [
                "FURY_CUTTER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "aerodactyl",
        "dexNumber": 142,
        "name": "Aerodactyl",
        "stats": {
            "atk": 221,
            "def": 159,
            "sta": 190
        },
        "types": [
            "rock",
            "flying"
        ],
        "family": {
            "id": "aerodactyl",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "STEEL_WING",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "HYPER_BEAM",
                "IRON_HEAD",
                "ROCK_SLIDE",
                "EARTH_POWER"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "aerodactyl_mega",
        "dexNumber": 142,
        "name": "Aerodactyl (Mega)",
        "stats": {
            "atk": 292,
            "def": 210,
            "sta": 190
        },
        "types": [
            "rock",
            "flying"
        ],
        "family": {
            "id": "aerodactyl",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "STEEL_WING",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "HYPER_BEAM",
                "IRON_HEAD",
                "ROCK_SLIDE",
                "EARTH_POWER"
            ]
        },
        "tags": [
            "mega"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "snorlax",
        "dexNumber": 143,
        "name": "Snorlax",
        "stats": {
            "atk": 190,
            "def": 169,
            "sta": 330
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "munchlax",
            "stage": 2
        },
        "aliases": [
            "lax"
        ],
        "moves": {
            "fastMoves": [
                "LICK",
                "ZEN_HEADBUTT",
                "YAWN"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "EARTHQUAKE",
                "HEAVY_SLAM",
                "HYPER_BEAM",
                "OUTRAGE",
                "SKULL_BASH",
                "SUPER_POWER"
            ],
            "eliteMoves": [
                "YAWN"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "articuno",
        "dexNumber": 144,
        "name": "Articuno",
        "stats": {
            "atk": 192,
            "def": 236,
            "sta": 207
        },
        "types": [
            "ice",
            "flying"
        ],
        "family": {
            "id": "articuno",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "FROST_BREATH",
                "ICE_SHARD"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HURRICANE",
                "ICE_BEAM",
                "ICY_WIND",
                "ANCIENT_POWER"
            ],
            "eliteMoves": [
                "HURRICANE"
            ]
        },
        "tags": [
            "legendary",
            "shadoweligible"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "zapdos",
        "dexNumber": 145,
        "name": "Zapdos",
        "stats": {
            "atk": 253,
            "def": 185,
            "sta": 207
        },
        "types": [
            "electric",
            "flying"
        ],
        "family": {
            "id": "zapdos",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "THUNDER",
                "THUNDERBOLT",
                "ZAP_CANNON",
                "ANCIENT_POWER",
                "DRILL_PECK"
            ],
            "eliteMoves": [
                "THUNDER_SHOCK"
            ]
        },
        "tags": [
            "legendary",
            "shadoweligible"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "moltres",
        "dexNumber": 146,
        "name": "Moltres",
        "stats": {
            "atk": 251,
            "def": 181,
            "sta": 207
        },
        "types": [
            "fire",
            "flying"
        ],
        "family": {
            "id": "moltres",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "FIRE_SPIN",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "HEAT_WAVE",
                "OVERHEAT",
                "SKY_ATTACK",
                "ANCIENT_POWER"
            ],
            "eliteMoves": [
                "SKY_ATTACK"
            ]
        },
        "tags": [
            "legendary",
            "shadoweligible"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "dratini",
        "dexNumber": 147,
        "name": "Dratini",
        "stats": {
            "atk": 119,
            "def": 91,
            "sta": 121
        },
        "types": [
            "dragon"
        ],
        "family": {
            "id": "dratini",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "IRON_TAIL"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "TWISTER",
                "WRAP"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "dragonair",
        "dexNumber": 148,
        "name": "Dragonair",
        "stats": {
            "atk": 163,
            "def": 135,
            "sta": 156
        },
        "types": [
            "dragon"
        ],
        "family": {
            "id": "dratini",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "IRON_TAIL"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "DRAGON_PULSE",
                "WRAP"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "dragonite",
        "dexNumber": 149,
        "name": "Dragonite",
        "stats": {
            "atk": 263,
            "def": 198,
            "sta": 209
        },
        "types": [
            "dragon",
            "flying"
        ],
        "family": {
            "id": "dratini",
            "stage": 3
        },
        "aliases": [
            "dnite"
        ],
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "DRAGON_TAIL",
                "STEEL_WING"
            ],
            "chargedMoves": [
                "DRACO_METEOR",
                "DRAGON_CLAW",
                "DRAGON_PULSE",
                "HURRICANE",
                "HYPER_BEAM",
                "OUTRAGE"
            ],
            "eliteMoves": [
                "DRACO_METEOR",
                "DRAGON_PULSE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "mewtwo",
        "dexNumber": 150,
        "name": "Mewtwo",
        "stats": {
            "atk": 300,
            "def": 182,
            "sta": 214
        },
        "types": [
            "psychic"
        ],
        "floor": 1,
        "family": {
            "id": "mewtwo",
            "stage": 1
        },
        "aliases": [
            "m2"
        ],
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "PSYCHO_CUT"
            ],
            "chargedMoves": [
                "FLAMETHROWER",
                "FOCUS_BLAST",
                "HYPER_BEAM",
                "ICE_BEAM",
                "PSYCHIC",
                "SHADOW_BALL",
                "THUNDERBOLT",
                "PSYSTRIKE"
            ],
            "eliteMoves": [
                "PSYSTRIKE",
                "SHADOW_BALL",
                "HYPER_BEAM"
            ]
        },
        "tags": [
            "legendary",
            "shadoweligible"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "mewtwo_armored",
        "dexNumber": 150,
        "name": "Mewtwo (Armored)",
        "stats": {
            "atk": 182,
            "def": 278,
            "sta": 214
        },
        "types": [
            "psychic"
        ],
        "floor": 1,
        "family": {
            "id": "mewtwo_armored",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "IRON_TAIL"
            ],
            "chargedMoves": [
                "DYNAMIC_PUNCH",
                "ROCK_SLIDE",
                "EARTHQUAKE",
                "FUTURE_SIGHT",
                "PSYSTRIKE"
            ],
            "eliteMoves": [
                "PSYSTRIKE"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "mewtwo_mega_x",
        "dexNumber": 150,
        "name": "Mewtwo (Mega X, 3% nerf)",
        "stats": {
            "atk": 399,
            "def": 215,
            "sta": 228
        },
        "types": [
            "psychic"
        ],
        "floor": 1,
        "family": {
            "id": "mewtwo",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "PSYCHO_CUT"
            ],
            "chargedMoves": [
                "FLAMETHROWER",
                "FOCUS_BLAST",
                "HYPER_BEAM",
                "ICE_BEAM",
                "PSYCHIC",
                "SHADOW_BALL",
                "THUNDERBOLT",
                "PSYSTRIKE"
            ],
            "eliteMoves": [
                "PSYSTRIKE",
                "SHADOW_BALL",
                "HYPER_BEAM"
            ]
        },
        "tags": [
            "legendary",
            "shadoweligible",
            "mega"
        ],
        "thirdMoveCost": 10000
    },
    {
        "id": "mewtwo_mega_y",
        "dexNumber": 150,
        "name": "Mewtwo (Mega Y, 3% nerf)",
        "stats": {
            "atk": 413,
            "def": 223,
            "sta": 228
        },
        "types": [
            "psychic"
        ],
        "floor": 1,
        "family": {
            "id": "mewtwo",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "PSYCHO_CUT"
            ],
            "chargedMoves": [
                "FLAMETHROWER",
                "FOCUS_BLAST",
                "HYPER_BEAM",
                "ICE_BEAM",
                "PSYCHIC",
                "SHADOW_BALL",
                "THUNDERBOLT",
                "PSYSTRIKE"
            ],
            "eliteMoves": [
                "PSYSTRIKE",
                "SHADOW_BALL",
                "HYPER_BEAM"
            ]
        },
        "tags": [
            "legendary",
            "shadoweligible",
            "mega"
        ],
        "thirdMoveCost": 10000
    },
    {
        "id": "mew",
        "dexNumber": 151,
        "name": "Mew",
        "stats": {
            "atk": 210,
            "def": 210,
            "sta": 225
        },
        "types": [
            "psychic"
        ],
        "floor": 10,
        "family": {
            "id": "mew",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "CUT",
                "DRAGON_TAIL",
                "FROST_BREATH",
                "INFESTATION",
                "POISON_JAB",
                "POUND",
                "ROCK_SMASH",
                "SHADOW_CLAW",
                "SNARL",
                "STEEL_WING",
                "STRUGGLE_BUG",
                "VOLT_SWITCH",
                "WATERFALL"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "BLIZZARD",
                "BULLDOZE",
                "DARK_PULSE",
                "DAZZLING_GLEAM",
                "DRAGON_CLAW",
                "ENERGY_BALL",
                "FLAME_CHARGE",
                "FLASH_CANNON",
                "FOCUS_BLAST",
                "GRASS_KNOT",
                "GYRO_BALL",
                "HYPER_BEAM",
                "ICE_BEAM",
                "LOW_SWEEP",
                "OVERHEAT",
                "PSYCHIC",
                "PSYSHOCK",
                "ROCK_SLIDE",
                "SOLAR_BEAM",
                "STONE_EDGE",
                "SURF",
                "THUNDER",
                "THUNDERBOLT",
                "WILD_CHARGE"
            ]
        },
        "tags": [
            "mythical",
            "untradeable"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "chikorita",
        "dexNumber": 152,
        "name": "Chikorita",
        "stats": {
            "atk": 92,
            "def": 122,
            "sta": 128
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "chikorita",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "ENERGY_BALL",
                "GRASS_KNOT"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "bayleef",
        "dexNumber": 153,
        "name": "Bayleef",
        "stats": {
            "atk": 122,
            "def": 155,
            "sta": 155
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "chikorita",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "TACKLE"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "ENERGY_BALL",
                "GRASS_KNOT"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "meganium",
        "dexNumber": 154,
        "name": "Meganium",
        "stats": {
            "atk": 168,
            "def": 202,
            "sta": 190
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "chikorita",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "FRENZY_PLANT",
                "PETAL_BLIZZARD",
                "SOLAR_BEAM"
            ],
            "eliteMoves": [
                "FRENZY_PLANT"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "cyndaquil",
        "dexNumber": 155,
        "name": "Cyndaquil",
        "stats": {
            "atk": 116,
            "def": 93,
            "sta": 118
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "cyndaquil",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "TACKLE"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "FLAMETHROWER",
                "SWIFT"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "quilava",
        "dexNumber": 156,
        "name": "Quilava",
        "stats": {
            "atk": 158,
            "def": 126,
            "sta": 151
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "cyndaquil",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "TACKLE"
            ],
            "chargedMoves": [
                "DIG",
                "FLAME_CHARGE",
                "FLAMETHROWER"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "typhlosion",
        "dexNumber": 157,
        "name": "Typhlosion",
        "stats": {
            "atk": 223,
            "def": 173,
            "sta": 186
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "cyndaquil",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "SHADOW_CLAW",
                "INCINERATE"
            ],
            "chargedMoves": [
                "BLAST_BURN",
                "FIRE_BLAST",
                "OVERHEAT",
                "SOLAR_BEAM"
            ],
            "eliteMoves": [
                "BLAST_BURN"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "totodile",
        "dexNumber": 158,
        "name": "Totodile",
        "stats": {
            "atk": 117,
            "def": 109,
            "sta": 137
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "totodile",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SCRATCH",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "CRUNCH",
                "WATER_PULSE"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "croconaw",
        "dexNumber": 159,
        "name": "Croconaw",
        "stats": {
            "atk": 150,
            "def": 142,
            "sta": 163
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "totodile",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "SCRATCH",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "CRUNCH",
                "ICE_PUNCH",
                "WATER_PULSE"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "feraligatr",
        "dexNumber": 160,
        "name": "Feraligatr",
        "stats": {
            "atk": 205,
            "def": 188,
            "sta": 198
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "totodile",
            "stage": 3
        },
        "aliases": [
            "zygon"
        ],
        "moves": {
            "fastMoves": [
                "BITE",
                "WATER_GUN",
                "WATERFALL",
                "ICE_FANG"
            ],
            "chargedMoves": [
                "CRUNCH",
                "HYDRO_CANNON",
                "HYDRO_PUMP",
                "ICE_BEAM"
            ],
            "eliteMoves": [
                "WATER_GUN",
                "HYDRO_CANNON"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "sentret",
        "dexNumber": 161,
        "name": "Sentret",
        "stats": {
            "atk": 79,
            "def": 73,
            "sta": 111
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "sentret",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "SCRATCH"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "DIG",
                "GRASS_KNOT"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "furret",
        "dexNumber": 162,
        "name": "Furret",
        "stats": {
            "atk": 148,
            "def": 125,
            "sta": 198
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "sentret",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "DIG",
                "HYPER_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "hoothoot",
        "dexNumber": 163,
        "name": "Hoothoot",
        "stats": {
            "atk": 67,
            "def": 88,
            "sta": 155
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "hoothoot",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "PECK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "NIGHT_SHADE",
                "SKY_ATTACK"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "noctowl",
        "dexNumber": 164,
        "name": "Noctowl",
        "stats": {
            "atk": 145,
            "def": 156,
            "sta": 225
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "hoothoot",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "EXTRASENSORY",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "NIGHT_SHADE",
                "PSYCHIC",
                "SKY_ATTACK",
                "SHADOW_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "ledyba",
        "dexNumber": 165,
        "name": "Ledyba",
        "stats": {
            "atk": 72,
            "def": 118,
            "sta": 120
        },
        "types": [
            "bug",
            "flying"
        ],
        "family": {
            "id": "ledyba",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "SILVER_WIND",
                "SWIFT"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "ledian",
        "dexNumber": 166,
        "name": "Ledian",
        "stats": {
            "atk": 107,
            "def": 179,
            "sta": 146
        },
        "types": [
            "bug",
            "flying"
        ],
        "family": {
            "id": "ledyba",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BUG_BUZZ",
                "SILVER_WIND"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "spinarak",
        "dexNumber": 167,
        "name": "Spinarak",
        "stats": {
            "atk": 105,
            "def": 73,
            "sta": 120
        },
        "types": [
            "bug",
            "poison"
        ],
        "family": {
            "id": "spinarak",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "POISON_STING"
            ],
            "chargedMoves": [
                "CROSS_POISON",
                "NIGHT_SLASH",
                "SIGNAL_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "ariados",
        "dexNumber": 168,
        "name": "Ariados",
        "stats": {
            "atk": 161,
            "def": 124,
            "sta": 172
        },
        "types": [
            "bug",
            "poison"
        ],
        "family": {
            "id": "spinarak",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "INFESTATION",
                "POISON_STING"
            ],
            "chargedMoves": [
                "CROSS_POISON",
                "MEGAHORN",
                "SHADOW_SNEAK",
                "LUNGE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "crobat",
        "dexNumber": 169,
        "name": "Crobat",
        "stats": {
            "atk": 194,
            "def": 178,
            "sta": 198
        },
        "types": [
            "poison",
            "flying"
        ],
        "family": {
            "id": "zubat",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "BITE"
            ],
            "chargedMoves": [
                "AIR_CUTTER",
                "SHADOW_BALL",
                "SLUDGE_BOMB",
                "CROSS_POISON",
                "POISON_FANG"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "chinchou",
        "dexNumber": 170,
        "name": "Chinchou",
        "stats": {
            "atk": 106,
            "def": 97,
            "sta": 181
        },
        "types": [
            "water",
            "electric"
        ],
        "family": {
            "id": "chinchou",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "SPARK"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "THUNDERBOLT",
                "WATER_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "lanturn",
        "dexNumber": 171,
        "name": "Lanturn",
        "stats": {
            "atk": 146,
            "def": 137,
            "sta": 268
        },
        "types": [
            "water",
            "electric"
        ],
        "family": {
            "id": "chinchou",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "WATER_GUN",
                "SPARK"
            ],
            "chargedMoves": [
                "HYDRO_PUMP",
                "THUNDER",
                "THUNDERBOLT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "pichu",
        "dexNumber": 172,
        "name": "Pichu",
        "stats": {
            "atk": 77,
            "def": 53,
            "sta": 85
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "pichu",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "DISARMING_VOICE",
                "THUNDER_PUNCH",
                "THUNDERBOLT"
            ],
            "legacyMoves": [
                "QUICK_ATTACK"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "cleffa",
        "dexNumber": 173,
        "name": "Cleffa",
        "stats": {
            "atk": 75,
            "def": 79,
            "sta": 137
        },
        "types": [
            "fairy"
        ],
        "family": {
            "id": "cleffa",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "GRASS_KNOT",
                "PSYCHIC",
                "PSYSHOCK",
                "SIGNAL_BEAM"
            ],
            "eliteMoves": [
                "PSYCHIC",
                "BODY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "igglybuff",
        "dexNumber": 174,
        "name": "Igglybuff",
        "stats": {
            "atk": 69,
            "def": 32,
            "sta": 207
        },
        "types": [
            "normal",
            "fairy"
        ],
        "family": {
            "id": "igglybuff",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "POUND"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "PSYCHIC",
                "SHADOW_BALL",
                "WILD_CHARGE"
            ],
            "eliteMoves": [
                "BODY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "togepi",
        "dexNumber": 175,
        "name": "Togepi",
        "stats": {
            "atk": 67,
            "def": 116,
            "sta": 111
        },
        "types": [
            "fairy"
        ],
        "family": {
            "id": "togepi",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "PECK",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "DAZZLING_GLEAM",
                "PSYSHOCK"
            ],
            "eliteMoves": [
                "ZEN_HEADBUTT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "togetic",
        "dexNumber": 176,
        "name": "Togetic",
        "stats": {
            "atk": 139,
            "def": 181,
            "sta": 146
        },
        "types": [
            "fairy",
            "flying"
        ],
        "family": {
            "id": "togepi",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "EXTRASENSORY",
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "STEEL_WING",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "ANCIENT_POWER",
                "DAZZLING_GLEAM"
            ],
            "eliteMoves": [
                "STEEL_WING",
                "ZEN_HEADBUTT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "natu",
        "dexNumber": 177,
        "name": "Natu",
        "stats": {
            "atk": 134,
            "def": 89,
            "sta": 120
        },
        "types": [
            "psychic",
            "flying"
        ],
        "family": {
            "id": "natu",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "DRILL_PECK",
                "NIGHT_SHADE",
                "PSYSHOCK"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "xatu",
        "dexNumber": 178,
        "name": "Xatu",
        "stats": {
            "atk": 192,
            "def": 146,
            "sta": 163
        },
        "types": [
            "psychic",
            "flying"
        ],
        "family": {
            "id": "natu",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "FEINT_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "FUTURE_SIGHT",
                "OMINOUS_WIND"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "mareep",
        "dexNumber": 179,
        "name": "Mareep",
        "stats": {
            "atk": 114,
            "def": 79,
            "sta": 146
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "mareep",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DISCHARGE",
                "THUNDERBOLT"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "flaaffy",
        "dexNumber": 180,
        "name": "Flaaffy",
        "stats": {
            "atk": 145,
            "def": 109,
            "sta": 172
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "mareep",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "TACKLE"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "POWER_GEM",
                "THUNDERBOLT"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "ampharos",
        "dexNumber": 181,
        "name": "Ampharos",
        "stats": {
            "atk": 211,
            "def": 169,
            "sta": 207
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "mareep",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "DRAGON_PULSE",
                "FOCUS_BLAST",
                "POWER_GEM",
                "THUNDER",
                "ZAP_CANNON",
                "THUNDER_PUNCH"
            ],
            "eliteMoves": [
                "DRAGON_PULSE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "ampharos_mega",
        "dexNumber": 181,
        "name": "Ampharos (Mega)",
        "stats": {
            "atk": 294,
            "def": 203,
            "sta": 207
        },
        "types": [
            "electric",
            "dragon"
        ],
        "family": {
            "id": "mareep",
            "stage": 4
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "DRAGON_PULSE",
                "FOCUS_BLAST",
                "POWER_GEM",
                "THUNDER",
                "ZAP_CANNON",
                "THUNDER_PUNCH"
            ],
            "eliteMoves": [
                "DRAGON_PULSE"
            ]
        },
        "tags": [
            "shadoweligible",
            "mega"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "bellossom",
        "dexNumber": 182,
        "name": "Bellossom",
        "stats": {
            "atk": 169,
            "def": 186,
            "sta": 181
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "oddish",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "ACID",
                "RAZOR_LEAF",
                "BULLET_SEED"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "LEAF_BLADE",
                "PETAL_BLIZZARD"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "marill",
        "dexNumber": 183,
        "name": "Marill",
        "stats": {
            "atk": 37,
            "def": 93,
            "sta": 172
        },
        "types": [
            "water",
            "fairy"
        ],
        "family": {
            "id": "azurill",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "TACKLE"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "BODY_SLAM",
                "BUBBLE_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "azumarill",
        "dexNumber": 184,
        "name": "Azumarill",
        "stats": {
            "atk": 112,
            "def": 152,
            "sta": 225
        },
        "types": [
            "water",
            "fairy"
        ],
        "family": {
            "id": "azurill",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "HYDRO_PUMP",
                "ICE_BEAM",
                "PLAY_ROUGH"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "sudowoodo",
        "dexNumber": 185,
        "name": "Sudowoodo",
        "stats": {
            "atk": 167,
            "def": 176,
            "sta": 172
        },
        "types": [
            "rock"
        ],
        "family": {
            "id": "bonsly",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "COUNTER",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "ROCK_SLIDE",
                "STONE_EDGE",
                "ROCK_TOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "politoed",
        "dexNumber": 186,
        "name": "Politoed",
        "stats": {
            "atk": 174,
            "def": 179,
            "sta": 207
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "poliwag",
            "stage": 4
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "EARTHQUAKE",
                "HYDRO_PUMP",
                "SURF",
                "WEATHER_BALL_WATER"
            ],
            "eliteMoves": [
                "EARTHQUAKE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "hoppip",
        "dexNumber": 187,
        "name": "Hoppip",
        "stats": {
            "atk": 67,
            "def": 94,
            "sta": 111
        },
        "types": [
            "grass",
            "flying"
        ],
        "family": {
            "id": "hoppip",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "TACKLE"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "GRASS_KNOT",
                "SEED_BOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "skiploom",
        "dexNumber": 188,
        "name": "Skiploom",
        "stats": {
            "atk": 91,
            "def": 120,
            "sta": 146
        },
        "types": [
            "grass",
            "flying"
        ],
        "family": {
            "id": "hoppip",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "TACKLE"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "ENERGY_BALL",
                "GRASS_KNOT"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "jumpluff",
        "dexNumber": 189,
        "name": "Jumpluff",
        "stats": {
            "atk": 118,
            "def": 183,
            "sta": 181
        },
        "types": [
            "grass",
            "flying"
        ],
        "family": {
            "id": "hoppip",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "INFESTATION"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "ENERGY_BALL",
                "AERIAL_ACE",
                "SOLAR_BEAM",
                "ACROBATICS"
            ],
            "eliteMoves": [
                "ACROBATICS"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "aipom",
        "dexNumber": 190,
        "name": "Aipom",
        "stats": {
            "atk": 136,
            "def": 112,
            "sta": 146
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "aipom",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "SCRATCH"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "LOW_SWEEP",
                "SWIFT"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "sunkern",
        "dexNumber": 191,
        "name": "Sunkern",
        "stats": {
            "atk": 55,
            "def": 55,
            "sta": 102
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "sunkern",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CUT",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "GRASS_KNOT",
                "SEED_BOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "sunflora",
        "dexNumber": 192,
        "name": "Sunflora",
        "stats": {
            "atk": 185,
            "def": 135,
            "sta": 181
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "sunkern",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "PETAL_BLIZZARD",
                "SLUDGE_BOMB",
                "SOLAR_BEAM",
                "LEAF_STORM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "yanma",
        "dexNumber": 193,
        "name": "Yanma",
        "stats": {
            "atk": 154,
            "def": 94,
            "sta": 163
        },
        "types": [
            "bug",
            "flying"
        ],
        "family": {
            "id": "yanma",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "ANCIENT_POWER",
                "SILVER_WIND"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "wooper",
        "dexNumber": 194,
        "name": "Wooper",
        "stats": {
            "atk": 75,
            "def": 66,
            "sta": 146
        },
        "types": [
            "water",
            "ground"
        ],
        "family": {
            "id": "wooper",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DIG",
                "MUD_BOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "quagsire",
        "dexNumber": 195,
        "name": "Quagsire",
        "stats": {
            "atk": 152,
            "def": 143,
            "sta": 216
        },
        "types": [
            "water",
            "ground"
        ],
        "family": {
            "id": "wooper",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "SLUDGE_BOMB",
                "STONE_EDGE",
                "ACID_SPRAY"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "espeon",
        "dexNumber": 196,
        "name": "Espeon",
        "stats": {
            "atk": 261,
            "def": 175,
            "sta": 163
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "eevee",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "LAST_RESORT",
                "PSYBEAM",
                "PSYCHIC",
                "SHADOW_BALL"
            ],
            "eliteMoves": [
                "LAST_RESORT",
                "SHADOW_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "umbreon",
        "dexNumber": 197,
        "name": "Umbreon",
        "stats": {
            "atk": 126,
            "def": 240,
            "sta": 216
        },
        "types": [
            "dark"
        ],
        "family": {
            "id": "eevee",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "SNARL"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "FOUL_PLAY",
                "LAST_RESORT",
                "PSYCHIC"
            ],
            "eliteMoves": [
                "LAST_RESORT",
                "PSYCHIC"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "murkrow",
        "dexNumber": 198,
        "name": "Murkrow",
        "stats": {
            "atk": 175,
            "def": 87,
            "sta": 155
        },
        "types": [
            "dark",
            "flying"
        ],
        "family": {
            "id": "murkrow",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "PECK"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "DRILL_PECK",
                "FOUL_PLAY"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "slowking",
        "dexNumber": 199,
        "name": "Slowking",
        "stats": {
            "atk": 177,
            "def": 180,
            "sta": 216
        },
        "types": [
            "water",
            "psychic"
        ],
        "family": {
            "id": "slowpoke",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "FIRE_BLAST",
                "PSYCHIC"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "slowking_galarian",
        "dexNumber": 199,
        "name": "Slowking (Galarian)",
        "stats": {
            "atk": 190,
            "def": 180,
            "sta": 216
        },
        "types": [
            "poison",
            "psychic"
        ],
        "family": {
            "id": "slowpoke_galarian",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "HEX",
                "CONFUSION",
                "ACID"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "SHADOW_BALL",
                "SLUDGE_WAVE"
            ]
        },
        "tags": [
            "galarian"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "misdreavus",
        "dexNumber": 200,
        "name": "Misdreavus",
        "stats": {
            "atk": 167,
            "def": 154,
            "sta": 155
        },
        "types": [
            "ghost"
        ],
        "family": {
            "id": "misdreavus",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "HEX"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "OMINOUS_WIND",
                "SHADOW_SNEAK"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "unown",
        "dexNumber": 201,
        "name": "Unown",
        "stats": {
            "atk": 136,
            "def": 91,
            "sta": 134
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "unown",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "wobbuffet",
        "dexNumber": 202,
        "name": "Wobbuffet",
        "stats": {
            "atk": 60,
            "def": 106,
            "sta": 382
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "wynaut",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "COUNTER",
                "SPLASH",
                "CHARM"
            ],
            "chargedMoves": [
                "MIRROR_COAT"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "girafarig",
        "dexNumber": 203,
        "name": "Girafarig",
        "stats": {
            "atk": 182,
            "def": 133,
            "sta": 172
        },
        "types": [
            "normal",
            "psychic"
        ],
        "family": {
            "id": "girafarig",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "TACKLE"
            ],
            "chargedMoves": [
                "MIRROR_COAT",
                "PSYCHIC",
                "THUNDERBOLT"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "pineco",
        "dexNumber": 204,
        "name": "Pineco",
        "stats": {
            "atk": 108,
            "def": 122,
            "sta": 137
        },
        "types": [
            "bug"
        ],
        "family": {
            "id": "pineco",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "GYRO_BALL",
                "ROCK_TOMB",
                "SAND_TOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "forretress",
        "dexNumber": 205,
        "name": "Forretress",
        "stats": {
            "atk": 161,
            "def": 205,
            "sta": 181
        },
        "types": [
            "bug",
            "steel"
        ],
        "family": {
            "id": "pineco",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "HEAVY_SLAM",
                "ROCK_TOMB",
                "SAND_TOMB",
                "MIRROR_SHOT"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "dunsparce",
        "dexNumber": 206,
        "name": "Dunsparce",
        "stats": {
            "atk": 131,
            "def": 128,
            "sta": 225
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "dunsparce",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "BITE"
            ],
            "chargedMoves": [
                "DIG",
                "DRILL_RUN",
                "ROCK_SLIDE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gligar",
        "dexNumber": 207,
        "name": "Gligar",
        "stats": {
            "atk": 143,
            "def": 184,
            "sta": 163
        },
        "types": [
            "ground",
            "flying"
        ],
        "family": {
            "id": "gligar",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "FURY_CUTTER",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "DIG",
                "NIGHT_SLASH"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "steelix",
        "dexNumber": 208,
        "name": "Steelix",
        "stats": {
            "atk": 148,
            "def": 272,
            "sta": 181
        },
        "types": [
            "steel",
            "ground"
        ],
        "family": {
            "id": "onix",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "IRON_TAIL",
                "THUNDER_FANG"
            ],
            "chargedMoves": [
                "CRUNCH",
                "EARTHQUAKE",
                "HEAVY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "steelix_mega",
        "dexNumber": 208,
        "name": "Steelix (Mega)",
        "stats": {
            "atk": 212,
            "def": 327,
            "sta": 181
        },
        "types": [
            "steel",
            "ground"
        ],
        "family": {
            "id": "onix",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "IRON_TAIL",
                "THUNDER_FANG"
            ],
            "chargedMoves": [
                "CRUNCH",
                "EARTHQUAKE",
                "HEAVY_SLAM"
            ]
        },
        "tags": [
            "mega"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "snubbull",
        "dexNumber": 209,
        "name": "Snubbull",
        "stats": {
            "atk": 137,
            "def": 85,
            "sta": 155
        },
        "types": [
            "fairy"
        ],
        "family": {
            "id": "snubbull",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "CRUNCH",
                "DAZZLING_GLEAM"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "granbull",
        "dexNumber": 210,
        "name": "Granbull",
        "stats": {
            "atk": 212,
            "def": 131,
            "sta": 207
        },
        "types": [
            "fairy"
        ],
        "family": {
            "id": "snubbull",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "SNARL",
                "CHARM"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "CRUNCH",
                "PLAY_ROUGH"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "qwilfish",
        "dexNumber": 211,
        "name": "Qwilfish",
        "stats": {
            "atk": 184,
            "def": 138,
            "sta": 163
        },
        "types": [
            "water",
            "poison"
        ],
        "family": {
            "id": "qwilfish",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POISON_STING",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "ICE_BEAM",
                "SLUDGE_WAVE",
                "ACID_SPRAY",
                "FELL_STINGER"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "scizor",
        "dexNumber": 212,
        "name": "Scizor",
        "stats": {
            "atk": 236,
            "def": 181,
            "sta": 172
        },
        "types": [
            "bug",
            "steel"
        ],
        "family": {
            "id": "scyther",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BULLET_PUNCH",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "IRON_HEAD",
                "NIGHT_SLASH",
                "X_SCISSOR"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "shuckle",
        "dexNumber": 213,
        "name": "Shuckle",
        "stats": {
            "atk": 17,
            "def": 396,
            "sta": 85
        },
        "types": [
            "bug",
            "rock"
        ],
        "family": {
            "id": "shuckle",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ROCK_THROW",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "GYRO_BALL",
                "ROCK_BLAST",
                "STONE_EDGE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "heracross",
        "dexNumber": 214,
        "name": "Heracross",
        "stats": {
            "atk": 234,
            "def": 179,
            "sta": 190
        },
        "types": [
            "bug",
            "fighting"
        ],
        "family": {
            "id": "heracross",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "COUNTER",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "EARTHQUAKE",
                "MEGAHORN",
                "ROCK_BLAST"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "sneasel",
        "dexNumber": 215,
        "name": "Sneasel",
        "stats": {
            "atk": 189,
            "def": 146,
            "sta": 146
        },
        "types": [
            "dark",
            "ice"
        ],
        "family": {
            "id": "sneasel",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "ICE_SHARD"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "FOUL_PLAY",
                "ICE_PUNCH"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "teddiursa",
        "dexNumber": 216,
        "name": "Teddiursa",
        "stats": {
            "atk": 142,
            "def": 93,
            "sta": 155
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "teddiursa",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "LICK",
                "SCRATCH"
            ],
            "chargedMoves": [
                "CROSS_CHOP",
                "CRUNCH",
                "PLAY_ROUGH"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "ursaring",
        "dexNumber": 217,
        "name": "Ursaring",
        "stats": {
            "atk": 236,
            "def": 144,
            "sta": 207
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "teddiursa",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "COUNTER",
                "METAL_CLAW",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "HYPER_BEAM",
                "PLAY_ROUGH"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "slugma",
        "dexNumber": 218,
        "name": "Slugma",
        "stats": {
            "atk": 118,
            "def": 71,
            "sta": 120
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "slugma",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "FLAME_BURST",
                "FLAME_CHARGE",
                "ROCK_SLIDE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "magcargo",
        "dexNumber": 219,
        "name": "Magcargo",
        "stats": {
            "atk": 139,
            "def": 191,
            "sta": 137
        },
        "types": [
            "fire",
            "rock"
        ],
        "family": {
            "id": "slugma",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "ROCK_THROW",
                "INCINERATE"
            ],
            "chargedMoves": [
                "HEAT_WAVE",
                "OVERHEAT",
                "STONE_EDGE",
                "ROCK_TOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "swinub",
        "dexNumber": 220,
        "name": "Swinub",
        "stats": {
            "atk": 90,
            "def": 69,
            "sta": 137
        },
        "types": [
            "ice",
            "ground"
        ],
        "family": {
            "id": "swinub",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POWDER_SNOW",
                "TACKLE"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "ICY_WIND",
                "ROCK_SLIDE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "piloswine",
        "dexNumber": 221,
        "name": "Piloswine",
        "stats": {
            "atk": 181,
            "def": 138,
            "sta": 225
        },
        "types": [
            "ice",
            "ground"
        ],
        "family": {
            "id": "swinub",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ICE_SHARD",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "BULLDOZE",
                "STONE_EDGE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "corsola",
        "dexNumber": 222,
        "name": "Corsola",
        "stats": {
            "atk": 118,
            "def": 156,
            "sta": 146
        },
        "types": [
            "water",
            "rock"
        ],
        "family": {
            "id": "corsola",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "TACKLE"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "POWER_GEM",
                "ROCK_BLAST"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "remoraid",
        "dexNumber": 223,
        "name": "Remoraid",
        "stats": {
            "atk": 127,
            "def": 69,
            "sta": 111
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "remoraid",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AURORA_BEAM",
                "ROCK_BLAST",
                "WATER_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "octillery",
        "dexNumber": 224,
        "name": "Octillery",
        "stats": {
            "atk": 197,
            "def": 141,
            "sta": 181
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "remoraid",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN",
                "LOCK_ON"
            ],
            "chargedMoves": [
                "AURORA_BEAM",
                "GUNK_SHOT",
                "WATER_PULSE",
                "ACID_SPRAY",
                "OCTAZOOKA"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "delibird",
        "dexNumber": 225,
        "name": "Delibird",
        "stats": {
            "atk": 128,
            "def": 90,
            "sta": 128
        },
        "types": [
            "ice",
            "flying"
        ],
        "family": {
            "id": "delibird",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "PRESENT",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "ICE_PUNCH",
                "ICY_WIND"
            ],
            "legacyMoves": [
                "QUICK_ATTACK"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "mantine",
        "dexNumber": 226,
        "name": "Mantine",
        "stats": {
            "atk": 148,
            "def": 226,
            "sta": 163
        },
        "types": [
            "water",
            "flying"
        ],
        "family": {
            "id": "mantyke",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "BULLET_SEED",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "ICE_BEAM",
                "WATER_PULSE",
                "BUBBLE_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "skarmory",
        "dexNumber": 227,
        "name": "Skarmory",
        "stats": {
            "atk": 148,
            "def": 226,
            "sta": 163
        },
        "types": [
            "steel",
            "flying"
        ],
        "family": {
            "id": "skarmory",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "STEEL_WING"
            ],
            "chargedMoves": [
                "BRAVE_BIRD",
                "FLASH_CANNON",
                "SKY_ATTACK"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "houndour",
        "dexNumber": 228,
        "name": "Houndour",
        "stats": {
            "atk": 152,
            "def": 83,
            "sta": 128
        },
        "types": [
            "dark",
            "fire"
        ],
        "family": {
            "id": "houndour",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "FEINT_ATTACK"
            ],
            "chargedMoves": [
                "CRUNCH",
                "DARK_PULSE",
                "FLAMETHROWER"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "houndoom",
        "dexNumber": 229,
        "name": "Houndoom",
        "stats": {
            "atk": 224,
            "def": 144,
            "sta": 181
        },
        "types": [
            "dark",
            "fire"
        ],
        "family": {
            "id": "houndour",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FIRE_FANG",
                "SNARL"
            ],
            "chargedMoves": [
                "CRUNCH",
                "FIRE_BLAST",
                "FLAMETHROWER",
                "FOUL_PLAY"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "houndoom_mega",
        "dexNumber": 229,
        "name": "Houndoom (Mega)",
        "stats": {
            "atk": 289,
            "def": 194,
            "sta": 181
        },
        "types": [
            "dark",
            "fire"
        ],
        "family": {
            "id": "houndour",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "FIRE_FANG",
                "SNARL"
            ],
            "chargedMoves": [
                "CRUNCH",
                "FIRE_BLAST",
                "FLAMETHROWER",
                "FOUL_PLAY"
            ]
        },
        "tags": [
            "shadoweligible",
            "mega"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "kingdra",
        "dexNumber": 230,
        "name": "Kingdra",
        "stats": {
            "atk": 194,
            "def": 194,
            "sta": 181
        },
        "types": [
            "water",
            "dragon"
        ],
        "family": {
            "id": "horsea",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "WATER_GUN",
                "WATERFALL"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HYDRO_PUMP",
                "OUTRAGE",
                "OCTAZOOKA"
            ],
            "eliteMoves": [
                "WATER_GUN"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "phanpy",
        "dexNumber": 231,
        "name": "Phanpy",
        "stats": {
            "atk": 107,
            "def": 98,
            "sta": 207
        },
        "types": [
            "ground"
        ],
        "family": {
            "id": "phanpy",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "TACKLE"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "BULLDOZE",
                "ROCK_SLIDE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "donphan",
        "dexNumber": 232,
        "name": "Donphan",
        "stats": {
            "atk": 214,
            "def": 185,
            "sta": 207
        },
        "types": [
            "ground"
        ],
        "family": {
            "id": "phanpy",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "COUNTER",
                "MUD_SLAP",
                "TACKLE",
                "CHARM"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "HEAVY_SLAM",
                "PLAY_ROUGH",
                "BODY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "porygon2",
        "dexNumber": 233,
        "name": "Porygon2",
        "stats": {
            "atk": 198,
            "def": 180,
            "sta": 198
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "porygon",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "LOCK_ON",
                "CHARGE_BEAM",
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER"
            ],
            "chargedMoves": [
                "HYPER_BEAM",
                "SOLAR_BEAM",
                "ZAP_CANNON",
                "TRI_ATTACK"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "stantler",
        "dexNumber": 234,
        "name": "Stantler",
        "stats": {
            "atk": 192,
            "def": 131,
            "sta": 177
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "stantler",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "MEGAHORN",
                "STOMP",
                "WILD_CHARGE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "smeargle",
        "dexNumber": 235,
        "name": "Smeargle",
        "stats": {
            "atk": 40,
            "def": 83,
            "sta": 146
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "smeargle",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "FURY_CUTTER",
                "BUG_BITE",
                "BITE",
                "SUCKER_PUNCH",
                "DRAGON_BREATH",
                "THUNDER_SHOCK",
                "SPARK",
                "LOW_KICK",
                "KARATE_CHOP",
                "EMBER",
                "WING_ATTACK",
                "PECK",
                "LICK",
                "SHADOW_CLAW",
                "VINE_WHIP",
                "RAZOR_LEAF",
                "MUD_SHOT",
                "ICE_SHARD",
                "FROST_BREATH",
                "QUICK_ATTACK",
                "SCRATCH",
                "POUND",
                "CUT",
                "POISON_JAB",
                "ACID",
                "PSYCHO_CUT",
                "ROCK_THROW",
                "METAL_CLAW",
                "BULLET_PUNCH",
                "WATER_GUN",
                "SPLASH",
                "MUD_SLAP",
                "ZEN_HEADBUTT",
                "CONFUSION",
                "POISON_STING",
                "BUBBLE",
                "FEINT_ATTACK",
                "STEEL_WING",
                "FIRE_FANG",
                "ROCK_SMASH",
                "COUNTER",
                "POWDER_SNOW",
                "CHARGE_BEAM",
                "VOLT_SWITCH",
                "DRAGON_TAIL",
                "AIR_SLASH",
                "INFESTATION",
                "STRUGGLE_BUG",
                "ASTONISH",
                "HEX",
                "IRON_TAIL",
                "FIRE_SPIN",
                "BULLET_SEED",
                "EXTRASENSORY",
                "SNARL",
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "TAKE_DOWN",
                "WATERFALL",
                "YAWN",
                "PRESENT",
                "CHARM",
                "LOCK_ON",
                "THUNDER_FANG",
                "ICE_FANG",
                "GUST",
                "INCINERATE"
            ],
            "chargedMoves": [
                "STRUGGLE",
                "WRAP",
                "HYPER_BEAM",
                "DARK_PULSE",
                "SLUDGE",
                "VICE_GRIP",
                "FLAME_WHEEL",
                "MEGAHORN",
                "FLAMETHROWER",
                "DIG",
                "CROSS_CHOP",
                "PSYBEAM",
                "EARTHQUAKE",
                "STONE_EDGE",
                "ICE_PUNCH",
                "DISCHARGE",
                "FLASH_CANNON",
                "DRILL_PECK",
                "ICE_BEAM",
                "BLIZZARD",
                "HEAT_WAVE",
                "AERIAL_ACE",
                "DRILL_RUN",
                "PETAL_BLIZZARD",
                "BUG_BUZZ",
                "POISON_FANG",
                "NIGHT_SLASH",
                "BUBBLE_BEAM",
                "SUBMISSION",
                "LOW_SWEEP",
                "AQUA_JET",
                "AQUA_TAIL",
                "SEED_BOMB",
                "PSYSHOCK",
                "ANCIENT_POWER",
                "ROCK_TOMB",
                "ROCK_SLIDE",
                "POWER_GEM",
                "SHADOW_SNEAK",
                "SHADOW_PUNCH",
                "OMINOUS_WIND",
                "SHADOW_BALL",
                "MAGNET_BOMB",
                "IRON_HEAD",
                "THUNDER_PUNCH",
                "THUNDER",
                "THUNDERBOLT",
                "TWISTER",
                "DRAGON_PULSE",
                "DRAGON_CLAW",
                "DISARMING_VOICE",
                "DRAINING_KISS",
                "DAZZLING_GLEAM",
                "MOONBLAST",
                "PLAY_ROUGH",
                "CROSS_POISON",
                "SLUDGE_BOMB",
                "SLUDGE_WAVE",
                "GUNK_SHOT",
                "BONE_CLUB",
                "BULLDOZE",
                "MUD_BOMB",
                "SIGNAL_BEAM",
                "X_SCISSOR",
                "FLAME_CHARGE",
                "FLAME_BURST",
                "FIRE_BLAST",
                "WATER_PULSE",
                "HYDRO_PUMP",
                "PSYCHIC",
                "ICY_WIND",
                "FIRE_PUNCH",
                "SOLAR_BEAM",
                "LEAF_BLADE",
                "POWER_WHIP",
                "AIR_CUTTER",
                "HURRICANE",
                "BRICK_BREAK",
                "SWIFT",
                "HORN_ATTACK",
                "STOMP",
                "HYPER_FANG",
                "BODY_SLAM",
                "CLOSE_COMBAT",
                "DYNAMIC_PUNCH",
                "FOCUS_BLAST",
                "AURORA_BEAM",
                "WILD_CHARGE",
                "ZAP_CANNON",
                "AVALANCHE",
                "BRAVE_BIRD",
                "SKY_ATTACK",
                "SAND_TOMB",
                "ROCK_BLAST",
                "SILVER_WIND",
                "NIGHT_SHADE",
                "GYRO_BALL",
                "HEAVY_SLAM",
                "OVERHEAT",
                "GRASS_KNOT",
                "ENERGY_BALL",
                "FUTURE_SIGHT",
                "MIRROR_COAT",
                "OUTRAGE",
                "CRUNCH",
                "FOUL_PLAY",
                "SURF",
                "DRACO_METEOR",
                "PSYCHO_BOOST",
                "FRENZY_PLANT",
                "BLAST_BURN",
                "HYDRO_CANNON",
                "LAST_RESORT",
                "METEOR_MASH",
                "BRINE",
                "SCALD",
                "PSYSTRIKE",
                "DOOM_DESIRE",
                "WEATHER_BALL_FIRE",
                "WEATHER_BALL_ICE",
                "WEATHER_BALL_ROCK",
                "WEATHER_BALL_WATER",
                "SKULL_BASH",
                "ACID_SPRAY",
                "EARTH_POWER",
                "CRABHAMMER",
                "LUNGE",
                "OCTAZOOKA",
                "MIRROR_SHOT",
                "SUPER_POWER",
                "FELL_STINGER",
                "LEAF_TORNADO",
                "SHADOW_BONE",
                "MUDDY_WATER",
                "BLAZE_KICK",
                "POWER_UP_PUNCH",
                "GIGA_IMPACT",
                "SYNCHRONOISE",
                "SACRED_SWORD",
                "FLYING_PRESS",
                "AURA_SPHERE",
                "PAYBACK",
                "ROCK_WRECKER",
                "AEROBLAST",
                "TECHNO_BLAST_NORMAL",
                "TECHNO_BLAST_BURN",
                "TECHNO_BLAST_CHILL",
                "TECHNO_BLAST_DOUSE",
                "TECHNO_BLAST_SHOCK",
                "FLY",
                "V_CREATE",
                "TRI_ATTACK"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 0,
        "released": true
    },
    {
        "id": "tyrogue",
        "dexNumber": 236,
        "name": "Tyrogue",
        "stats": {
            "atk": 64,
            "def": 64,
            "sta": 111
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "tyrogue",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "TACKLE"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "LOW_SWEEP",
                "ROCK_SLIDE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "hitmontop",
        "dexNumber": 237,
        "name": "Hitmontop",
        "stats": {
            "atk": 173,
            "def": 207,
            "sta": 137
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "tyrogue",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "COUNTER",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "GYRO_BALL",
                "STONE_EDGE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "smoochum",
        "dexNumber": 238,
        "name": "Smoochum",
        "stats": {
            "atk": 153,
            "def": 91,
            "sta": 128
        },
        "types": [
            "ice",
            "psychic"
        ],
        "family": {
            "id": "smoochum",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "FROST_BREATH",
                "POUND",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "ICE_BEAM",
                "ICE_PUNCH",
                "PSYSHOCK"
            ],
            "eliteMoves": [
                "FROST_BREATH"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "elekid",
        "dexNumber": 239,
        "name": "Elekid",
        "stats": {
            "atk": 135,
            "def": 101,
            "sta": 128
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "elekid",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "DISCHARGE",
                "THUNDER_PUNCH",
                "THUNDERBOLT"
            ],
            "eliteMoves": [
                "THUNDERBOLT"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "magby",
        "dexNumber": 240,
        "name": "Magby",
        "stats": {
            "atk": 151,
            "def": 99,
            "sta": 128
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "magby",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "KARATE_CHOP"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "FIRE_PUNCH",
                "FLAME_BURST",
                "FLAMETHROWER"
            ],
            "eliteMoves": [
                "FLAMETHROWER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "miltank",
        "dexNumber": 241,
        "name": "Miltank",
        "stats": {
            "atk": 157,
            "def": 193,
            "sta": 216
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "miltank",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "GYRO_BALL",
                "ICE_BEAM",
                "STOMP",
                "THUNDERBOLT"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "blissey",
        "dexNumber": 242,
        "name": "Blissey",
        "stats": {
            "atk": 129,
            "def": 169,
            "sta": 496
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "happiny",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "HYPER_BEAM",
                "PSYCHIC"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "raikou",
        "dexNumber": 243,
        "name": "Raikou",
        "stats": {
            "atk": 241,
            "def": 195,
            "sta": 207
        },
        "types": [
            "electric"
        ],
        "floor": 1,
        "family": {
            "id": "raikou",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "SHADOW_BALL",
                "THUNDER",
                "THUNDERBOLT",
                "WILD_CHARGE"
            ]
        },
        "tags": [
            "legendary",
            "shadoweligible"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "entei",
        "dexNumber": 244,
        "name": "Entei",
        "stats": {
            "atk": 235,
            "def": 171,
            "sta": 251
        },
        "types": [
            "fire"
        ],
        "floor": 1,
        "family": {
            "id": "entei",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "FIRE_FANG",
                "FIRE_SPIN"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "FLAMETHROWER",
                "IRON_HEAD",
                "OVERHEAT",
                "FLAME_CHARGE"
            ]
        },
        "tags": [
            "legendary",
            "shadoweligible"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "suicune",
        "dexNumber": 245,
        "name": "Suicune",
        "stats": {
            "atk": 180,
            "def": 235,
            "sta": 225
        },
        "types": [
            "water"
        ],
        "floor": 1,
        "family": {
            "id": "suicune",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "EXTRASENSORY",
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "ICE_FANG",
                "SNARL"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "HYDRO_PUMP",
                "ICE_BEAM",
                "WATER_PULSE"
            ],
            "eliteMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER"
            ]
        },
        "tags": [
            "legendary",
            "shadoweligible"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "larvitar",
        "dexNumber": 246,
        "name": "Larvitar",
        "stats": {
            "atk": 115,
            "def": 93,
            "sta": 137
        },
        "types": [
            "rock",
            "ground"
        ],
        "family": {
            "id": "larvitar",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "CRUNCH",
                "STOMP"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "pupitar",
        "dexNumber": 247,
        "name": "Pupitar",
        "stats": {
            "atk": 155,
            "def": 133,
            "sta": 172
        },
        "types": [
            "rock",
            "ground"
        ],
        "family": {
            "id": "larvitar",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "CRUNCH",
                "DIG"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "tyranitar",
        "dexNumber": 248,
        "name": "Tyranitar",
        "stats": {
            "atk": 251,
            "def": 207,
            "sta": 225
        },
        "types": [
            "rock",
            "dark"
        ],
        "family": {
            "id": "larvitar",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "IRON_TAIL",
                "SMACK_DOWN"
            ],
            "chargedMoves": [
                "CRUNCH",
                "FIRE_BLAST",
                "STONE_EDGE"
            ],
            "eliteMoves": [
                "SMACK_DOWN"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "lugia",
        "dexNumber": 249,
        "name": "Lugia",
        "stats": {
            "atk": 193,
            "def": 310,
            "sta": 235
        },
        "types": [
            "psychic",
            "flying"
        ],
        "floor": 1,
        "family": {
            "id": "lugia",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "EXTRASENSORY"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "HYDRO_PUMP",
                "SKY_ATTACK",
                "AEROBLAST"
            ],
            "eliteMoves": [
                "AEROBLAST"
            ]
        },
        "tags": [
            "legendary",
            "shadoweligible"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "ho_oh",
        "dexNumber": 250,
        "name": "Ho-Oh",
        "stats": {
            "atk": 239,
            "def": 244,
            "sta": 214
        },
        "types": [
            "fire",
            "flying"
        ],
        "floor": 1,
        "family": {
            "id": "ho_oh",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "EXTRASENSORY",
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "STEEL_WING",
                "INCINERATE"
            ],
            "chargedMoves": [
                "BRAVE_BIRD",
                "FIRE_BLAST",
                "SOLAR_BEAM",
                "EARTHQUAKE",
                "SACRED_FIRE"
            ],
            "eliteMoves": [
                "EARTHQUAKE",
                "SACRED_FIRE"
            ]
        },
        "tags": [
            "legendary",
            "shadoweligible"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "celebi",
        "dexNumber": 251,
        "name": "Celebi",
        "stats": {
            "atk": 210,
            "def": 210,
            "sta": 225
        },
        "types": [
            "psychic",
            "grass"
        ],
        "floor": 10,
        "family": {
            "id": "celebi",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "CONFUSION",
                "MAGICAL_LEAF"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "HYPER_BEAM",
                "PSYCHIC",
                "SEED_BOMB",
                "LEAF_STORM"
            ],
            "eliteMoves": [
                "MAGICAL_LEAF"
            ]
        },
        "tags": [
            "mythical",
            "untradeable"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "treecko",
        "dexNumber": 252,
        "name": "Treecko",
        "stats": {
            "atk": 124,
            "def": 94,
            "sta": 120
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "treecko",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "POUND"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "ENERGY_BALL",
                "GRASS_KNOT"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "grovyle",
        "dexNumber": 253,
        "name": "Grovyle",
        "stats": {
            "atk": 172,
            "def": 120,
            "sta": 137
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "treecko",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "GRASS_KNOT",
                "LEAF_BLADE"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "sceptile",
        "dexNumber": 254,
        "name": "Sceptile",
        "stats": {
            "atk": 223,
            "def": 169,
            "sta": 172
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "treecko",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "EARTHQUAKE",
                "LEAF_BLADE",
                "FRENZY_PLANT",
                "DRAGON_CLAW"
            ],
            "eliteMoves": [
                "FRENZY_PLANT"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "torchic",
        "dexNumber": 255,
        "name": "Torchic",
        "stats": {
            "atk": 130,
            "def": 87,
            "sta": 128
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "torchic",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "SCRATCH"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "FLAMETHROWER",
                "ROCK_TOMB"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "combusken",
        "dexNumber": 256,
        "name": "Combusken",
        "stats": {
            "atk": 163,
            "def": 115,
            "sta": 155
        },
        "types": [
            "fire",
            "fighting"
        ],
        "family": {
            "id": "torchic",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "PECK"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "FLAMETHROWER",
                "ROCK_SLIDE"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "blaziken",
        "dexNumber": 257,
        "name": "Blaziken",
        "stats": {
            "atk": 240,
            "def": 141,
            "sta": 190
        },
        "types": [
            "fire",
            "fighting"
        ],
        "family": {
            "id": "torchic",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "COUNTER",
                "FIRE_SPIN"
            ],
            "chargedMoves": [
                "BRAVE_BIRD",
                "FOCUS_BLAST",
                "OVERHEAT",
                "STONE_EDGE",
                "BLAST_BURN",
                "BLAZE_KICK"
            ],
            "eliteMoves": [
                "BLAST_BURN",
                "STONE_EDGE"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "mudkip",
        "dexNumber": 258,
        "name": "Mudkip",
        "stats": {
            "atk": 126,
            "def": 93,
            "sta": 137
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "mudkip",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "DIG",
                "SLUDGE",
                "STOMP"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "marshtomp",
        "dexNumber": 259,
        "name": "Marshtomp",
        "stats": {
            "atk": 156,
            "def": 133,
            "sta": 172
        },
        "types": [
            "water",
            "ground"
        ],
        "family": {
            "id": "mudkip",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "MUD_BOMB",
                "SLUDGE",
                "SURF"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "swampert",
        "dexNumber": 260,
        "name": "Swampert",
        "stats": {
            "atk": 208,
            "def": 175,
            "sta": 225
        },
        "types": [
            "water",
            "ground"
        ],
        "family": {
            "id": "mudkip",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "SLUDGE_WAVE",
                "SURF",
                "HYDRO_CANNON",
                "MUDDY_WATER"
            ],
            "eliteMoves": [
                "HYDRO_CANNON"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "poochyena",
        "dexNumber": 261,
        "name": "Poochyena",
        "stats": {
            "atk": 96,
            "def": 61,
            "sta": 111
        },
        "types": [
            "dark"
        ],
        "family": {
            "id": "poochyena",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SNARL",
                "TACKLE"
            ],
            "chargedMoves": [
                "CRUNCH",
                "DIG",
                "POISON_FANG"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "mightyena",
        "dexNumber": 262,
        "name": "Mightyena",
        "stats": {
            "atk": 171,
            "def": 132,
            "sta": 172
        },
        "types": [
            "dark"
        ],
        "family": {
            "id": "poochyena",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "FIRE_FANG",
                "THUNDER_FANG",
                "ICE_FANG"
            ],
            "chargedMoves": [
                "CRUNCH",
                "PLAY_ROUGH",
                "POISON_FANG"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "zigzagoon",
        "dexNumber": 263,
        "name": "Zigzagoon",
        "stats": {
            "atk": 58,
            "def": 80,
            "sta": 116
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "zigzagoon",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "TACKLE"
            ],
            "chargedMoves": [
                "DIG",
                "GRASS_KNOT",
                "THUNDERBOLT"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "zigzagoon_galarian",
        "dexNumber": 263,
        "name": "Zigzagoon (Galarian)",
        "stats": {
            "atk": 58,
            "def": 80,
            "sta": 116
        },
        "types": [
            "dark",
            "normal"
        ],
        "family": {
            "id": "zigzagoon_galarian",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "DIG",
                "BODY_SLAM",
                "SWIFT"
            ]
        },
        "tags": [
            "galarian"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "linoone",
        "dexNumber": 264,
        "name": "Linoone",
        "stats": {
            "atk": 142,
            "def": 128,
            "sta": 186
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "zigzagoon",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "SHADOW_CLAW",
                "TACKLE"
            ],
            "chargedMoves": [
                "DIG",
                "GRASS_KNOT",
                "THUNDER"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "linoone_galarian",
        "dexNumber": 264,
        "name": "Linoone (Galarian)",
        "stats": {
            "atk": 142,
            "def": 128,
            "sta": 186
        },
        "types": [
            "dark",
            "normal"
        ],
        "family": {
            "id": "zigzagoon_galarian",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "SNARL",
                "LICK"
            ],
            "chargedMoves": [
                "DIG",
                "BODY_SLAM",
                "GUNK_SHOT"
            ]
        },
        "tags": [
            "galarian"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "wurmple",
        "dexNumber": 265,
        "name": "Wurmple",
        "stats": {
            "atk": 75,
            "def": 59,
            "sta": 128
        },
        "types": [
            "bug"
        ],
        "family": {
            "id": "wurmple",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "silcoon",
        "dexNumber": 266,
        "name": "Silcoon",
        "stats": {
            "atk": 60,
            "def": 77,
            "sta": 137
        },
        "types": [
            "bug"
        ],
        "family": {
            "id": "wurmple",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "POISON_STING"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "beautifly",
        "dexNumber": 267,
        "name": "Beautifly",
        "stats": {
            "atk": 189,
            "def": 98,
            "sta": 155
        },
        "types": [
            "bug",
            "flying"
        ],
        "family": {
            "id": "wurmple",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "INFESTATION",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "AIR_CUTTER",
                "BUG_BUZZ",
                "SILVER_WIND"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "cascoon",
        "dexNumber": 268,
        "name": "Cascoon",
        "stats": {
            "atk": 60,
            "def": 77,
            "sta": 137
        },
        "types": [
            "bug"
        ],
        "family": {
            "id": "wurmple",
            "stage": 4
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "POISON_STING"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "dustox",
        "dexNumber": 269,
        "name": "Dustox",
        "stats": {
            "atk": 98,
            "def": 162,
            "sta": 155
        },
        "types": [
            "bug",
            "poison"
        ],
        "family": {
            "id": "wurmple",
            "stage": 5
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "SILVER_WIND",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "lotad",
        "dexNumber": 270,
        "name": "Lotad",
        "stats": {
            "atk": 71,
            "def": 77,
            "sta": 120
        },
        "types": [
            "water",
            "grass"
        ],
        "family": {
            "id": "lotad",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "ENERGY_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "lombre",
        "dexNumber": 271,
        "name": "Lombre",
        "stats": {
            "atk": 112,
            "def": 119,
            "sta": 155
        },
        "types": [
            "water",
            "grass"
        ],
        "family": {
            "id": "lotad",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "GRASS_KNOT",
                "ICE_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "ludicolo",
        "dexNumber": 272,
        "name": "Ludicolo",
        "stats": {
            "atk": 173,
            "def": 176,
            "sta": 190
        },
        "types": [
            "water",
            "grass"
        ],
        "family": {
            "id": "lotad",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HYDRO_PUMP",
                "ENERGY_BALL",
                "ICE_BEAM",
                "SOLAR_BEAM",
                "LEAF_STORM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "seedot",
        "dexNumber": 273,
        "name": "Seedot",
        "stats": {
            "atk": 71,
            "def": 77,
            "sta": 120
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "seedot",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "FOUL_PLAY",
                "GRASS_KNOT"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "nuzleaf",
        "dexNumber": 274,
        "name": "Nuzleaf",
        "stats": {
            "atk": 134,
            "def": 78,
            "sta": 172
        },
        "types": [
            "grass",
            "dark"
        ],
        "family": {
            "id": "seedot",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "FOUL_PLAY",
                "GRASS_KNOT",
                "LEAF_BLADE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "shiftry",
        "dexNumber": 275,
        "name": "Shiftry",
        "stats": {
            "atk": 200,
            "def": 121,
            "sta": 207
        },
        "types": [
            "grass",
            "dark"
        ],
        "family": {
            "id": "seedot",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "RAZOR_LEAF",
                "SNARL",
                "BULLET_SEED"
            ],
            "chargedMoves": [
                "FOUL_PLAY",
                "HURRICANE",
                "LEAF_BLADE",
                "LEAF_TORNADO"
            ],
            "eliteMoves": [
                "BULLET_SEED"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "taillow",
        "dexNumber": 276,
        "name": "Taillow",
        "stats": {
            "atk": 106,
            "def": 61,
            "sta": 120
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "taillow",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "swellow",
        "dexNumber": 277,
        "name": "Swellow",
        "stats": {
            "atk": 185,
            "def": 124,
            "sta": 155
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "taillow",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "STEEL_WING",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BRAVE_BIRD",
                "SKY_ATTACK"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "wingull",
        "dexNumber": 278,
        "name": "Wingull",
        "stats": {
            "atk": 106,
            "def": 61,
            "sta": 120
        },
        "types": [
            "water",
            "flying"
        ],
        "family": {
            "id": "wingull",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AIR_CUTTER",
                "ICE_BEAM",
                "WATER_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "pelipper",
        "dexNumber": 279,
        "name": "Pelipper",
        "stats": {
            "atk": 175,
            "def": 174,
            "sta": 155
        },
        "types": [
            "water",
            "flying"
        ],
        "family": {
            "id": "wingull",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HURRICANE",
                "HYDRO_PUMP",
                "WEATHER_BALL_WATER"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "ralts",
        "dexNumber": 280,
        "name": "Ralts",
        "stats": {
            "atk": 79,
            "def": 59,
            "sta": 99
        },
        "types": [
            "psychic",
            "fairy"
        ],
        "family": {
            "id": "ralts",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "CONFUSION"
            ],
            "chargedMoves": [
                "DISARMING_VOICE",
                "PSYSHOCK",
                "SHADOW_SNEAK"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "kirlia",
        "dexNumber": 281,
        "name": "Kirlia",
        "stats": {
            "atk": 117,
            "def": 90,
            "sta": 116
        },
        "types": [
            "psychic",
            "fairy"
        ],
        "family": {
            "id": "ralts",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "CONFUSION"
            ],
            "chargedMoves": [
                "DISARMING_VOICE",
                "PSYCHIC",
                "SHADOW_SNEAK",
                "DRAINING_KISS"
            ],
            "eliteMoves": [
                "DRAINING_KISS"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "gardevoir",
        "dexNumber": 282,
        "name": "Gardevoir",
        "stats": {
            "atk": 237,
            "def": 195,
            "sta": 169
        },
        "types": [
            "psychic",
            "fairy"
        ],
        "family": {
            "id": "ralts",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "CONFUSION",
                "CHARM"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "PSYCHIC",
                "SHADOW_BALL",
                "SYNCHRONOISE"
            ],
            "eliteMoves": [
                "SYNCHRONOISE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "surskit",
        "dexNumber": 283,
        "name": "Surskit",
        "stats": {
            "atk": 93,
            "def": 87,
            "sta": 120
        },
        "types": [
            "bug",
            "water"
        ],
        "family": {
            "id": "surskit",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "BUG_BITE"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "BUBBLE_BEAM",
                "SIGNAL_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "masquerain",
        "dexNumber": 284,
        "name": "Masquerain",
        "stats": {
            "atk": 192,
            "def": 150,
            "sta": 172
        },
        "types": [
            "bug",
            "flying"
        ],
        "family": {
            "id": "surskit",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "INFESTATION"
            ],
            "chargedMoves": [
                "AIR_CUTTER",
                "OMINOUS_WIND",
                "SILVER_WIND",
                "BUBBLE_BEAM",
                "LUNGE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "shroomish",
        "dexNumber": 285,
        "name": "Shroomish",
        "stats": {
            "atk": 74,
            "def": 110,
            "sta": 155
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "shroomish",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "TACKLE"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "GRASS_KNOT",
                "SEED_BOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "breloom",
        "dexNumber": 286,
        "name": "Breloom",
        "stats": {
            "atk": 241,
            "def": 144,
            "sta": 155
        },
        "types": [
            "grass",
            "fighting"
        ],
        "family": {
            "id": "shroomish",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "COUNTER"
            ],
            "chargedMoves": [
                "DYNAMIC_PUNCH",
                "GRASS_KNOT",
                "SEED_BOMB",
                "SLUDGE_BOMB"
            ],
            "eliteMoves": [
                "GRASS_KNOT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "slakoth",
        "dexNumber": 287,
        "name": "Slakoth",
        "stats": {
            "atk": 104,
            "def": 92,
            "sta": 155
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "slakoth",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "YAWN"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "BRICK_BREAK",
                "NIGHT_SLASH"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "vigoroth",
        "dexNumber": 288,
        "name": "Vigoroth",
        "stats": {
            "atk": 159,
            "def": 145,
            "sta": 190
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "slakoth",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "COUNTER",
                "SCRATCH"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "BRICK_BREAK",
                "BULLDOZE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "slaking",
        "dexNumber": 289,
        "name": "Slaking",
        "stats": {
            "atk": 290,
            "def": 166,
            "sta": 284
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "slakoth",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "YAWN"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "HYPER_BEAM",
                "PLAY_ROUGH",
                "BODY_SLAM"
            ],
            "eliteMoves": [
                "BODY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "nincada",
        "dexNumber": 290,
        "name": "Nincada",
        "stats": {
            "atk": 80,
            "def": 126,
            "sta": 104
        },
        "types": [
            "bug",
            "ground"
        ],
        "family": {
            "id": "nincada",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "SCRATCH"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BUG_BUZZ",
                "NIGHT_SLASH"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "ninjask",
        "dexNumber": 291,
        "name": "Ninjask",
        "stats": {
            "atk": 199,
            "def": 112,
            "sta": 156
        },
        "types": [
            "bug",
            "flying"
        ],
        "family": {
            "id": "nincada",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FURY_CUTTER",
                "METAL_CLAW"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BUG_BUZZ",
                "SHADOW_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "shedinja",
        "dexNumber": 292,
        "name": "Shedinja",
        "stats": {
            "atk": 153,
            "def": 73,
            "sta": 1
        },
        "types": [
            "bug",
            "ghost"
        ],
        "family": {
            "id": "shedinja",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "SHADOW_CLAW",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "DIG",
                "SHADOW_SNEAK"
            ],
            "eliteMoves": [
                "STRUGGLE_BUG"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "whismur",
        "dexNumber": 293,
        "name": "Whismur",
        "stats": {
            "atk": 92,
            "def": 42,
            "sta": 162
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "whismur",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "POUND"
            ],
            "chargedMoves": [
                "DISARMING_VOICE",
                "FLAMETHROWER",
                "STOMP"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "loudred",
        "dexNumber": 294,
        "name": "Loudred",
        "stats": {
            "atk": 134,
            "def": 81,
            "sta": 197
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "whismur",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "DISARMING_VOICE",
                "FLAMETHROWER",
                "STOMP"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "exploud",
        "dexNumber": 295,
        "name": "Exploud",
        "stats": {
            "atk": 179,
            "def": 137,
            "sta": 232
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "whismur",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "BITE"
            ],
            "chargedMoves": [
                "CRUNCH",
                "DISARMING_VOICE",
                "FIRE_BLAST"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "makuhita",
        "dexNumber": 296,
        "name": "Makuhita",
        "stats": {
            "atk": 99,
            "def": 54,
            "sta": 176
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "makuhita",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "TACKLE"
            ],
            "chargedMoves": [
                "CROSS_CHOP",
                "HEAVY_SLAM",
                "LOW_SWEEP"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "hariyama",
        "dexNumber": 297,
        "name": "Hariyama",
        "stats": {
            "atk": 209,
            "def": 114,
            "sta": 302
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "makuhita",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BULLET_PUNCH",
                "COUNTER"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "DYNAMIC_PUNCH",
                "HEAVY_SLAM",
                "SUPER_POWER"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "azurill",
        "dexNumber": 298,
        "name": "Azurill",
        "stats": {
            "atk": 36,
            "def": 71,
            "sta": 137
        },
        "types": [
            "normal",
            "fairy"
        ],
        "family": {
            "id": "azurill",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "SPLASH"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "BUBBLE_BEAM",
                "ICE_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "nosepass",
        "dexNumber": 299,
        "name": "Nosepass",
        "stats": {
            "atk": 82,
            "def": 215,
            "sta": 102
        },
        "types": [
            "rock"
        ],
        "family": {
            "id": "nosepass",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ROCK_THROW",
                "SPARK"
            ],
            "chargedMoves": [
                "ROCK_BLAST",
                "ROCK_SLIDE",
                "THUNDERBOLT"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "skitty",
        "dexNumber": 300,
        "name": "Skitty",
        "stats": {
            "atk": 84,
            "def": 79,
            "sta": 137
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "skitty",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "TACKLE"
            ],
            "chargedMoves": [
                "DIG",
                "DISARMING_VOICE",
                "WILD_CHARGE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "delcatty",
        "dexNumber": 301,
        "name": "Delcatty",
        "stats": {
            "atk": 132,
            "def": 127,
            "sta": 172
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "skitty",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CHARM",
                "FEINT_ATTACK",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "DISARMING_VOICE",
                "PLAY_ROUGH",
                "WILD_CHARGE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "sableye",
        "dexNumber": 302,
        "name": "Sableye",
        "stats": {
            "atk": 141,
            "def": 136,
            "sta": 137
        },
        "types": [
            "dark",
            "ghost"
        ],
        "family": {
            "id": "sableye",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "FOUL_PLAY",
                "POWER_GEM",
                "SHADOW_SNEAK"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "mawile",
        "dexNumber": 303,
        "name": "Mawile",
        "stats": {
            "atk": 155,
            "def": 141,
            "sta": 137
        },
        "types": [
            "steel",
            "fairy"
        ],
        "family": {
            "id": "mawile",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "BITE",
                "FIRE_FANG",
                "ICE_FANG"
            ],
            "chargedMoves": [
                "IRON_HEAD",
                "PLAY_ROUGH",
                "VICE_GRIP",
                "POWER_UP_PUNCH"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "mawile_mega",
        "dexNumber": 303,
        "name": "Mawile (Mega)",
        "stats": {
            "atk": 188,
            "def": 217,
            "sta": 137
        },
        "types": [
            "steel",
            "fairy"
        ],
        "family": {
            "id": "mawile",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "BITE",
                "FIRE_FANG",
                "ICE_FANG",
                "FAIRY_WIND"
            ],
            "chargedMoves": [
                "IRON_HEAD",
                "PLAY_ROUGH",
                "VICE_GRIP",
                "POWER_UP_PUNCH"
            ]
        },
        "tags": [
            "shadoweligible",
            "mega"
        ],
        "thirdMoveCost": 10000
    },
    {
        "id": "aron",
        "dexNumber": 304,
        "name": "Aron",
        "stats": {
            "atk": 121,
            "def": 141,
            "sta": 137
        },
        "types": [
            "steel",
            "rock"
        ],
        "family": {
            "id": "aron",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "TACKLE"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "IRON_HEAD",
                "ROCK_TOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "lairon",
        "dexNumber": 305,
        "name": "Lairon",
        "stats": {
            "atk": 158,
            "def": 198,
            "sta": 155
        },
        "types": [
            "steel",
            "rock"
        ],
        "family": {
            "id": "aron",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "IRON_TAIL",
                "METAL_CLAW"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "HEAVY_SLAM",
                "ROCK_SLIDE",
                "ROCK_TOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "aggron",
        "dexNumber": 306,
        "name": "Aggron",
        "stats": {
            "atk": 198,
            "def": 257,
            "sta": 172
        },
        "types": [
            "steel",
            "rock"
        ],
        "family": {
            "id": "aron",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "IRON_TAIL",
                "SMACK_DOWN"
            ],
            "chargedMoves": [
                "HEAVY_SLAM",
                "STONE_EDGE",
                "THUNDER",
                "ROCK_TOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "meditite",
        "dexNumber": 307,
        "name": "Meditite",
        "stats": {
            "atk": 78,
            "def": 107,
            "sta": 102
        },
        "types": [
            "fighting",
            "psychic"
        ],
        "family": {
            "id": "meditite",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "ICE_PUNCH",
                "LOW_SWEEP",
                "PSYSHOCK"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "medicham",
        "dexNumber": 308,
        "name": "Medicham",
        "stats": {
            "atk": 121,
            "def": 152,
            "sta": 155
        },
        "types": [
            "fighting",
            "psychic"
        ],
        "family": {
            "id": "meditite",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "COUNTER",
                "PSYCHO_CUT"
            ],
            "chargedMoves": [
                "DYNAMIC_PUNCH",
                "ICE_PUNCH",
                "PSYCHIC",
                "POWER_UP_PUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "electrike",
        "dexNumber": 309,
        "name": "Electrike",
        "stats": {
            "atk": 123,
            "def": 78,
            "sta": 120
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "electrike",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "SPARK"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "SWIFT",
                "THUNDERBOLT"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "manectric",
        "dexNumber": 310,
        "name": "Manectric",
        "stats": {
            "atk": 215,
            "def": 127,
            "sta": 172
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "electrike",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "SNARL",
                "THUNDER_FANG"
            ],
            "chargedMoves": [
                "FLAME_BURST",
                "THUNDER",
                "WILD_CHARGE",
                "OVERHEAT"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "manectric_mega",
        "dexNumber": 310,
        "name": "Manectric (Mega)",
        "stats": {
            "atk": 286,
            "def": 179,
            "sta": 172
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "electrike",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "SNARL",
                "THUNDER_FANG"
            ],
            "chargedMoves": [
                "FLAME_BURST",
                "THUNDER",
                "WILD_CHARGE",
                "OVERHEAT"
            ]
        },
        "tags": [
            "mega"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "plusle",
        "dexNumber": 311,
        "name": "Plusle",
        "stats": {
            "atk": 167,
            "def": 129,
            "sta": 155
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "plusle",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "SPARK"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "SWIFT",
                "THUNDERBOLT",
                "GRASS_KNOT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "minun",
        "dexNumber": 312,
        "name": "Minun",
        "stats": {
            "atk": 147,
            "def": 150,
            "sta": 155
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "minun",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "SPARK"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "SWIFT",
                "THUNDERBOLT",
                "GRASS_KNOT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "volbeat",
        "dexNumber": 313,
        "name": "Volbeat",
        "stats": {
            "atk": 143,
            "def": 166,
            "sta": 163
        },
        "types": [
            "bug"
        ],
        "family": {
            "id": "volbeat",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE_BUG",
                "TACKLE"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "SIGNAL_BEAM",
                "THUNDERBOLT"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "illumise",
        "dexNumber": 314,
        "name": "Illumise",
        "stats": {
            "atk": 143,
            "def": 166,
            "sta": 163
        },
        "types": [
            "bug"
        ],
        "family": {
            "id": "illumise",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE_BUG",
                "TACKLE"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "DAZZLING_GLEAM",
                "SILVER_WIND"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "roselia",
        "dexNumber": 315,
        "name": "Roselia",
        "stats": {
            "atk": 186,
            "def": 131,
            "sta": 137
        },
        "types": [
            "grass",
            "poison"
        ],
        "family": {
            "id": "budew",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "PETAL_BLIZZARD",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gulpin",
        "dexNumber": 316,
        "name": "Gulpin",
        "stats": {
            "atk": 80,
            "def": 99,
            "sta": 172
        },
        "types": [
            "poison"
        ],
        "family": {
            "id": "gulpin",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "GUNK_SHOT",
                "ICE_BEAM",
                "SLUDGE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "swalot",
        "dexNumber": 317,
        "name": "Swalot",
        "stats": {
            "atk": 140,
            "def": 159,
            "sta": 225
        },
        "types": [
            "poison"
        ],
        "family": {
            "id": "gulpin",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "INFESTATION",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "GUNK_SHOT",
                "ICE_BEAM",
                "SLUDGE_BOMB",
                "ACID_SPRAY"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "carvanha",
        "dexNumber": 318,
        "name": "Carvanha",
        "stats": {
            "atk": 171,
            "def": 39,
            "sta": 128
        },
        "types": [
            "water",
            "dark"
        ],
        "family": {
            "id": "carvanha",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "SNARL"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "CRUNCH",
                "POISON_FANG"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "sharpedo",
        "dexNumber": 319,
        "name": "Sharpedo",
        "stats": {
            "atk": 243,
            "def": 83,
            "sta": 172
        },
        "types": [
            "water",
            "dark"
        ],
        "family": {
            "id": "carvanha",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "WATERFALL"
            ],
            "chargedMoves": [
                "CRUNCH",
                "HYDRO_PUMP",
                "POISON_FANG"
            ]
        },
        "tags": [
            "shadoweligible",
            "include1500"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "sharpedo_mega",
        "dexNumber": 319,
        "name": "Sharpedo (Mega)",
        "stats": {
            "atk": 289,
            "def": 144,
            "sta": 172
        },
        "types": [
            "water",
            "dark"
        ],
        "family": {
            "id": "carvanha",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "WATERFALL"
            ],
            "chargedMoves": [
                "CRUNCH",
                "HYDRO_PUMP",
                "POISON_FANG"
            ]
        },
        "tags": [
            "shadoweligible",
            "mega"
        ],
        "thirdMoveCost": 10000
    },
    {
        "id": "wailmer",
        "dexNumber": 320,
        "name": "Wailmer",
        "stats": {
            "atk": 136,
            "def": 68,
            "sta": 277
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "wailmer",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SPLASH",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "HEAVY_SLAM",
                "WATER_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "wailord",
        "dexNumber": 321,
        "name": "Wailord",
        "stats": {
            "atk": 175,
            "def": 87,
            "sta": 347
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "wailmer",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HYPER_BEAM",
                "SURF"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "numel",
        "dexNumber": 322,
        "name": "Numel",
        "stats": {
            "atk": 119,
            "def": 79,
            "sta": 155
        },
        "types": [
            "fire",
            "ground"
        ],
        "family": {
            "id": "numel",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "TACKLE"
            ],
            "chargedMoves": [
                "BULLDOZE",
                "HEAT_WAVE",
                "STOMP"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "camerupt",
        "dexNumber": 323,
        "name": "Camerupt",
        "stats": {
            "atk": 194,
            "def": 136,
            "sta": 172
        },
        "types": [
            "fire",
            "ground"
        ],
        "family": {
            "id": "numel",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "OVERHEAT",
                "SOLAR_BEAM",
                "EARTH_POWER"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "camerupt_mega",
        "dexNumber": 323,
        "name": "Camerupt (Mega)",
        "stats": {
            "atk": 253,
            "def": 183,
            "sta": 172
        },
        "types": [
            "fire",
            "ground"
        ],
        "family": {
            "id": "numel",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "ROCK_SMASH",
                "INCINERATE"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "OVERHEAT",
                "SOLAR_BEAM",
                "EARTH_POWER"
            ]
        },
        "tags": [],
        "thirdMoveCost": 10000
    },
    {
        "id": "torkoal",
        "dexNumber": 324,
        "name": "Torkoal",
        "stats": {
            "atk": 151,
            "def": 203,
            "sta": 172
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "torkoal",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "FIRE_SPIN"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "OVERHEAT",
                "SOLAR_BEAM"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "spoink",
        "dexNumber": 325,
        "name": "Spoink",
        "stats": {
            "atk": 125,
            "def": 122,
            "sta": 155
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "spoink",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SPLASH",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "MIRROR_COAT",
                "PSYBEAM",
                "SHADOW_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "grumpig",
        "dexNumber": 326,
        "name": "Grumpig",
        "stats": {
            "atk": 171,
            "def": 188,
            "sta": 190
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "spoink",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "EXTRASENSORY"
            ],
            "chargedMoves": [
                "MIRROR_COAT",
                "PSYCHIC",
                "SHADOW_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "spinda",
        "dexNumber": 327,
        "name": "Spinda",
        "stats": {
            "atk": 116,
            "def": 116,
            "sta": 155
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "spinda",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "PSYCHO_CUT",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "DIG",
                "ICY_WIND",
                "ROCK_TOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "trapinch",
        "dexNumber": 328,
        "name": "Trapinch",
        "stats": {
            "atk": 162,
            "def": 78,
            "sta": 128
        },
        "types": [
            "ground"
        ],
        "family": {
            "id": "trapinch",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "CRUNCH",
                "DIG",
                "SAND_TOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "vibrava",
        "dexNumber": 329,
        "name": "Vibrava",
        "stats": {
            "atk": 134,
            "def": 99,
            "sta": 137
        },
        "types": [
            "ground",
            "dragon"
        ],
        "family": {
            "id": "trapinch",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "BULLDOZE",
                "SAND_TOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "flygon",
        "dexNumber": 330,
        "name": "Flygon",
        "stats": {
            "atk": 205,
            "def": 168,
            "sta": 190
        },
        "types": [
            "ground",
            "dragon"
        ],
        "family": {
            "id": "trapinch",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "EARTHQUAKE",
                "STONE_EDGE",
                "EARTH_POWER"
            ],
            "eliteMoves": [
                "EARTH_POWER"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "cacnea",
        "dexNumber": 331,
        "name": "Cacnea",
        "stats": {
            "atk": 156,
            "def": 74,
            "sta": 137
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "cacnea",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POISON_STING",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "GRASS_KNOT",
                "SEED_BOMB",
                "PAYBACK"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "cacturne",
        "dexNumber": 332,
        "name": "Cacturne",
        "stats": {
            "atk": 221,
            "def": 115,
            "sta": 172
        },
        "types": [
            "grass",
            "dark"
        ],
        "family": {
            "id": "cacnea",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "DYNAMIC_PUNCH",
                "GRASS_KNOT",
                "PAYBACK"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "swablu",
        "dexNumber": 333,
        "name": "Swablu",
        "stats": {
            "atk": 76,
            "def": 132,
            "sta": 128
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "swablu",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "PECK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "DISARMING_VOICE",
                "ICE_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "altaria",
        "dexNumber": 334,
        "name": "Altaria",
        "stats": {
            "atk": 141,
            "def": 201,
            "sta": 181
        },
        "types": [
            "dragon",
            "flying"
        ],
        "family": {
            "id": "swablu",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "PECK"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "DRAGON_PULSE",
                "SKY_ATTACK",
                "MOONBLAST"
            ],
            "eliteMoves": [
                "MOONBLAST"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "altaria_mega",
        "dexNumber": 334,
        "name": "Altaria (Mega)",
        "stats": {
            "atk": 222,
            "def": 218,
            "sta": 181
        },
        "types": [
            "dragon",
            "fairy"
        ],
        "family": {
            "id": "swablu",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "PECK"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "DRAGON_PULSE",
                "SKY_ATTACK",
                "MOONBLAST"
            ],
            "eliteMoves": [
                "MOONBLAST"
            ]
        },
        "tags": [
            "mega"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "zangoose",
        "dexNumber": 335,
        "name": "Zangoose",
        "stats": {
            "atk": 222,
            "def": 124,
            "sta": 177
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "zangoose",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "FURY_CUTTER",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "DIG",
                "NIGHT_SLASH"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "seviper",
        "dexNumber": 336,
        "name": "Seviper",
        "stats": {
            "atk": 196,
            "def": 118,
            "sta": 177
        },
        "types": [
            "poison"
        ],
        "family": {
            "id": "seviper",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "IRON_TAIL",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "CRUNCH",
                "POISON_FANG",
                "WRAP"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "lunatone",
        "dexNumber": 337,
        "name": "Lunatone",
        "stats": {
            "atk": 178,
            "def": 153,
            "sta": 207
        },
        "types": [
            "rock",
            "psychic"
        ],
        "family": {
            "id": "lunatone",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "MOONBLAST",
                "PSYCHIC",
                "ROCK_SLIDE"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "solrock",
        "dexNumber": 338,
        "name": "Solrock",
        "stats": {
            "atk": 178,
            "def": 153,
            "sta": 207
        },
        "types": [
            "rock",
            "psychic"
        ],
        "family": {
            "id": "solrock",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "PSYCHIC",
                "ROCK_SLIDE",
                "SOLAR_BEAM"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "barboach",
        "dexNumber": 339,
        "name": "Barboach",
        "stats": {
            "atk": 93,
            "def": 82,
            "sta": 137
        },
        "types": [
            "water",
            "ground"
        ],
        "family": {
            "id": "barboach",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "ICE_BEAM",
                "MUD_BOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "whiscash",
        "dexNumber": 340,
        "name": "Whiscash",
        "stats": {
            "atk": 151,
            "def": 141,
            "sta": 242
        },
        "types": [
            "water",
            "ground"
        ],
        "family": {
            "id": "barboach",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "MUD_BOMB",
                "WATER_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "corphish",
        "dexNumber": 341,
        "name": "Corphish",
        "stats": {
            "atk": 141,
            "def": 99,
            "sta": 125
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "corphish",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "BUBBLE_BEAM",
                "VICE_GRIP"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "crawdaunt",
        "dexNumber": 342,
        "name": "Crawdaunt",
        "stats": {
            "atk": 224,
            "def": 142,
            "sta": 160
        },
        "types": [
            "water",
            "dark"
        ],
        "family": {
            "id": "corphish",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "SNARL",
                "WATERFALL"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "NIGHT_SLASH",
                "VICE_GRIP",
                "CRABHAMMER"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "baltoy",
        "dexNumber": 343,
        "name": "Baltoy",
        "stats": {
            "atk": 77,
            "def": 124,
            "sta": 120
        },
        "types": [
            "ground",
            "psychic"
        ],
        "family": {
            "id": "baltoy",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "EXTRASENSORY"
            ],
            "chargedMoves": [
                "DIG",
                "GYRO_BALL",
                "PSYBEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "claydol",
        "dexNumber": 344,
        "name": "Claydol",
        "stats": {
            "atk": 140,
            "def": 229,
            "sta": 155
        },
        "types": [
            "ground",
            "psychic"
        ],
        "family": {
            "id": "baltoy",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "EXTRASENSORY",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "GYRO_BALL",
                "PSYCHIC",
                "EARTH_POWER",
                "ICE_BEAM",
                "SHADOW_BALL",
                "ROCK_TOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "lileep",
        "dexNumber": 345,
        "name": "Lileep",
        "stats": {
            "atk": 105,
            "def": 150,
            "sta": 165
        },
        "types": [
            "rock",
            "grass"
        ],
        "family": {
            "id": "lileep",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ACID",
                "INFESTATION",
                "BULLET_SEED"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "GRASS_KNOT",
                "MIRROR_COAT"
            ],
            "legacyMoves": [
                "BULLET_SEED"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "cradily",
        "dexNumber": 346,
        "name": "Cradily",
        "stats": {
            "atk": 152,
            "def": 194,
            "sta": 200
        },
        "types": [
            "rock",
            "grass"
        ],
        "family": {
            "id": "lileep",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ACID",
                "INFESTATION",
                "BULLET_SEED"
            ],
            "chargedMoves": [
                "BULLDOZE",
                "GRASS_KNOT",
                "STONE_EDGE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "anorith",
        "dexNumber": 347,
        "name": "Anorith",
        "stats": {
            "atk": 176,
            "def": 100,
            "sta": 128
        },
        "types": [
            "rock",
            "bug"
        ],
        "family": {
            "id": "anorith",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SCRATCH",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "AQUA_JET",
                "CROSS_POISON"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "armaldo",
        "dexNumber": 348,
        "name": "Armaldo",
        "stats": {
            "atk": 222,
            "def": 174,
            "sta": 181
        },
        "types": [
            "rock",
            "bug"
        ],
        "family": {
            "id": "anorith",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FURY_CUTTER",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "CROSS_POISON",
                "ROCK_BLAST",
                "WATER_PULSE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "feebas",
        "dexNumber": 349,
        "name": "Feebas",
        "stats": {
            "atk": 29,
            "def": 85,
            "sta": 85
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "feebas",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SPLASH",
                "TACKLE"
            ],
            "chargedMoves": [
                "MIRROR_COAT"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "milotic",
        "dexNumber": 350,
        "name": "Milotic",
        "stats": {
            "atk": 192,
            "def": 219,
            "sta": 216
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "feebas",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "WATERFALL"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HYPER_BEAM",
                "SURF"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "castform",
        "dexNumber": 351,
        "name": "Castform",
        "stats": {
            "atk": 139,
            "def": 139,
            "sta": 172
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "castform",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "HEX",
                "TACKLE"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "HURRICANE",
                "WEATHER_BALL_ROCK",
                "WEATHER_BALL_NORMAL"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "castform_rainy",
        "dexNumber": 351,
        "name": "Castform (Rainy)",
        "stats": {
            "atk": 139,
            "def": 139,
            "sta": 172
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "castform_rainy",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "HYDRO_PUMP",
                "THUNDER",
                "WEATHER_BALL_WATER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "castform_snowy",
        "dexNumber": 351,
        "name": "Castform (Snowy)",
        "stats": {
            "atk": 139,
            "def": 139,
            "sta": 172
        },
        "types": [
            "ice"
        ],
        "family": {
            "id": "castform_snowy",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POWDER_SNOW",
                "TACKLE"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "ICE_BEAM",
                "WEATHER_BALL_ICE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "castform_sunny",
        "dexNumber": 351,
        "name": "Castform (Sunny)",
        "stats": {
            "atk": 139,
            "def": 139,
            "sta": 172
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "castform_sunny",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "TACKLE"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "SOLAR_BEAM",
                "WEATHER_BALL_FIRE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "kecleon",
        "dexNumber": 352,
        "name": "Kecleon",
        "stats": {
            "atk": 161,
            "def": 189,
            "sta": 155
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "kecleon",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "LICK",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "FLAMETHROWER",
                "FOUL_PLAY",
                "ICE_BEAM",
                "SHADOW_SNEAK",
                "THUNDER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "shuppet",
        "dexNumber": 353,
        "name": "Shuppet",
        "stats": {
            "atk": 138,
            "def": 65,
            "sta": 127
        },
        "types": [
            "ghost"
        ],
        "family": {
            "id": "shuppet",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "FEINT_ATTACK"
            ],
            "chargedMoves": [
                "NIGHT_SHADE",
                "OMINOUS_WIND",
                "SHADOW_SNEAK"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "banette",
        "dexNumber": 354,
        "name": "Banette",
        "stats": {
            "atk": 218,
            "def": 126,
            "sta": 162
        },
        "types": [
            "ghost"
        ],
        "family": {
            "id": "shuppet",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "HEX",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "SHADOW_BALL",
                "THUNDER"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "duskull",
        "dexNumber": 355,
        "name": "Duskull",
        "stats": {
            "atk": 70,
            "def": 162,
            "sta": 85
        },
        "types": [
            "ghost"
        ],
        "family": {
            "id": "duskull",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "HEX"
            ],
            "chargedMoves": [
                "NIGHT_SHADE",
                "OMINOUS_WIND",
                "SHADOW_SNEAK"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "dusclops",
        "dexNumber": 356,
        "name": "Dusclops",
        "stats": {
            "atk": 124,
            "def": 234,
            "sta": 120
        },
        "types": [
            "ghost"
        ],
        "family": {
            "id": "duskull",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "HEX"
            ],
            "chargedMoves": [
                "FIRE_PUNCH",
                "ICE_PUNCH",
                "SHADOW_PUNCH"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "tropius",
        "dexNumber": 357,
        "name": "Tropius",
        "stats": {
            "atk": 136,
            "def": 163,
            "sta": 223
        },
        "types": [
            "grass",
            "flying"
        ],
        "family": {
            "id": "tropius",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "LEAF_BLADE",
                "STOMP"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "chimecho",
        "dexNumber": 358,
        "name": "Chimecho",
        "stats": {
            "atk": 175,
            "def": 170,
            "sta": 181
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "chingling",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "EXTRASENSORY"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "PSYSHOCK",
                "SHADOW_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "absol",
        "dexNumber": 359,
        "name": "Absol",
        "stats": {
            "atk": 246,
            "def": 120,
            "sta": 163
        },
        "types": [
            "dark"
        ],
        "family": {
            "id": "absol",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "PSYCHO_CUT",
                "SNARL"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "MEGAHORN",
                "THUNDER",
                "PAYBACK"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "absol_mega",
        "dexNumber": 359,
        "name": "Absol (Mega)",
        "stats": {
            "atk": 314,
            "def": 130,
            "sta": 163
        },
        "types": [
            "dark"
        ],
        "family": {
            "id": "absol",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "PSYCHO_CUT",
                "SNARL"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "MEGAHORN",
                "THUNDER",
                "PAYBACK"
            ]
        },
        "tags": [
            "mega"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "wynaut",
        "dexNumber": 360,
        "name": "Wynaut",
        "stats": {
            "atk": 41,
            "def": 86,
            "sta": 216
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "wynaut",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "COUNTER",
                "SPLASH"
            ],
            "chargedMoves": [
                "MIRROR_COAT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "snorunt",
        "dexNumber": 361,
        "name": "Snorunt",
        "stats": {
            "atk": 95,
            "def": 95,
            "sta": 137
        },
        "types": [
            "ice"
        ],
        "family": {
            "id": "snorunt",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "HEX",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "ICY_WIND",
                "SHADOW_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "glalie",
        "dexNumber": 362,
        "name": "Glalie",
        "stats": {
            "atk": 162,
            "def": 162,
            "sta": 190
        },
        "types": [
            "ice"
        ],
        "family": {
            "id": "snorunt",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FROST_BREATH",
                "ICE_SHARD"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "GYRO_BALL",
                "SHADOW_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "spheal",
        "dexNumber": 363,
        "name": "Spheal",
        "stats": {
            "atk": 95,
            "def": 90,
            "sta": 172
        },
        "types": [
            "ice",
            "water"
        ],
        "family": {
            "id": "spheal",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AURORA_BEAM",
                "BODY_SLAM",
                "WATER_PULSE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "sealeo",
        "dexNumber": 364,
        "name": "Sealeo",
        "stats": {
            "atk": 137,
            "def": 132,
            "sta": 207
        },
        "types": [
            "ice",
            "water"
        ],
        "family": {
            "id": "spheal",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "POWDER_SNOW",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AURORA_BEAM",
                "BODY_SLAM",
                "WATER_PULSE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "walrein",
        "dexNumber": 365,
        "name": "Walrein",
        "stats": {
            "atk": 182,
            "def": 176,
            "sta": 242
        },
        "types": [
            "ice",
            "water"
        ],
        "family": {
            "id": "spheal",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "FROST_BREATH",
                "WATERFALL",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "EARTHQUAKE",
                "WATER_PULSE",
                "ICICLE_SPEAR"
            ],
            "eliteMoves": [
                "POWDER_SNOW",
                "ICICLE_SPEAR"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "clamperl",
        "dexNumber": 366,
        "name": "Clamperl",
        "stats": {
            "atk": 133,
            "def": 135,
            "sta": 111
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "clamperl",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "ICE_BEAM",
                "WATER_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "huntail",
        "dexNumber": 367,
        "name": "Huntail",
        "stats": {
            "atk": 197,
            "def": 179,
            "sta": 146
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "clamperl",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "CRUNCH",
                "ICE_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gorebyss",
        "dexNumber": 368,
        "name": "Gorebyss",
        "stats": {
            "atk": 211,
            "def": 179,
            "sta": 146
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "clamperl",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "DRAINING_KISS",
                "PSYCHIC",
                "WATER_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "relicanth",
        "dexNumber": 369,
        "name": "Relicanth",
        "stats": {
            "atk": 162,
            "def": 203,
            "sta": 225
        },
        "types": [
            "water",
            "rock"
        ],
        "family": {
            "id": "relicanth",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "AQUA_TAIL",
                "HYDRO_PUMP"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "luvdisc",
        "dexNumber": 370,
        "name": "Luvdisc",
        "stats": {
            "atk": 81,
            "def": 128,
            "sta": 125
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "luvdisc",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SPLASH",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "DRAINING_KISS",
                "WATER_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "bagon",
        "dexNumber": 371,
        "name": "Bagon",
        "stats": {
            "atk": 134,
            "def": 93,
            "sta": 128
        },
        "types": [
            "dragon"
        ],
        "family": {
            "id": "bagon",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "EMBER"
            ],
            "chargedMoves": [
                "CRUNCH",
                "FLAMETHROWER",
                "TWISTER"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "shelgon",
        "dexNumber": 372,
        "name": "Shelgon",
        "stats": {
            "atk": 172,
            "def": 155,
            "sta": 163
        },
        "types": [
            "dragon"
        ],
        "family": {
            "id": "bagon",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "EMBER"
            ],
            "chargedMoves": [
                "DRAGON_PULSE",
                "FLAMETHROWER",
                "TWISTER"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "salamence",
        "dexNumber": 373,
        "name": "Salamence",
        "stats": {
            "atk": 277,
            "def": 168,
            "sta": 216
        },
        "types": [
            "dragon",
            "flying"
        ],
        "family": {
            "id": "bagon",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "DRAGON_TAIL",
                "FIRE_FANG"
            ],
            "chargedMoves": [
                "DRACO_METEOR",
                "FIRE_BLAST",
                "HYDRO_PUMP",
                "OUTRAGE"
            ],
            "eliteMoves": [
                "OUTRAGE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "beldum",
        "dexNumber": 374,
        "name": "Beldum",
        "stats": {
            "atk": 96,
            "def": 132,
            "sta": 120
        },
        "types": [
            "steel",
            "psychic"
        ],
        "family": {
            "id": "beldum",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "metang",
        "dexNumber": 375,
        "name": "Metang",
        "stats": {
            "atk": 138,
            "def": 176,
            "sta": 155
        },
        "types": [
            "steel",
            "psychic"
        ],
        "family": {
            "id": "beldum",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "GYRO_BALL",
                "PSYCHIC",
                "PSYSHOCK"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "metagross",
        "dexNumber": 376,
        "name": "Metagross",
        "stats": {
            "atk": 257,
            "def": 228,
            "sta": 190
        },
        "types": [
            "steel",
            "psychic"
        ],
        "family": {
            "id": "beldum",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "BULLET_PUNCH",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "FLASH_CANNON",
                "METEOR_MASH",
                "PSYCHIC"
            ],
            "eliteMoves": [
                "METEOR_MASH"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "metagross_mega",
        "dexNumber": 376,
        "name": "Metagross (Mega)",
        "stats": {
            "atk": 300,
            "def": 289,
            "sta": 190
        },
        "types": [
            "steel",
            "psychic"
        ],
        "family": {
            "id": "beldum",
            "stage": 4
        },
        "moves": {
            "fastMoves": [
                "BULLET_PUNCH",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "FLASH_CANNON",
                "METEOR_MASH",
                "PSYCHIC"
            ],
            "eliteMoves": [
                "METEOR_MASH"
            ]
        },
        "tags": [
            "shadoweligible",
            "mega"
        ],
        "thirdMoveCost": 10000
    },
    {
        "id": "regirock",
        "dexNumber": 377,
        "name": "Regirock",
        "stats": {
            "atk": 179,
            "def": 309,
            "sta": 190
        },
        "types": [
            "rock"
        ],
        "floor": 1,
        "family": {
            "id": "regirock",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "ROCK_THROW",
                "LOCK_ON"
            ],
            "chargedMoves": [
                "FOCUS_BLAST",
                "STONE_EDGE",
                "ZAP_CANNON",
                "EARTHQUAKE"
            ],
            "eliteMoves": [
                "EARTHQUAKE"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "regice",
        "dexNumber": 378,
        "name": "Regice",
        "stats": {
            "atk": 179,
            "def": 309,
            "sta": 190
        },
        "types": [
            "ice"
        ],
        "floor": 1,
        "family": {
            "id": "regice",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "FROST_BREATH",
                "ROCK_SMASH",
                "LOCK_ON"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "EARTHQUAKE",
                "FOCUS_BLAST",
                "THUNDER"
            ],
            "eliteMoves": [
                "THUNDER"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "registeel",
        "dexNumber": 379,
        "name": "Registeel",
        "stats": {
            "atk": 143,
            "def": 285,
            "sta": 190
        },
        "types": [
            "steel"
        ],
        "floor": 1,
        "family": {
            "id": "registeel",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "ROCK_SMASH",
                "LOCK_ON"
            ],
            "chargedMoves": [
                "FLASH_CANNON",
                "FOCUS_BLAST",
                "HYPER_BEAM",
                "ZAP_CANNON"
            ],
            "eliteMoves": [
                "ZAP_CANNON"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "latias",
        "dexNumber": 380,
        "name": "Latias",
        "stats": {
            "atk": 228,
            "def": 246,
            "sta": 190
        },
        "types": [
            "dragon",
            "psychic"
        ],
        "floor": 1,
        "family": {
            "id": "latias",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "ZEN_HEADBUTT",
                "CHARM"
            ],
            "chargedMoves": [
                "OUTRAGE",
                "PSYCHIC",
                "THUNDER",
                "MIST_BALL"
            ],
            "eliteMoves": [
                "MIST_BALL"
            ]
        },
        "tags": [
            "legendary",
            "shadoweligible"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "latias_mega",
        "dexNumber": 380,
        "name": "Latias (Mega)",
        "stats": {
            "atk": 289,
            "def": 297,
            "sta": 190
        },
        "types": [
            "dragon",
            "psychic"
        ],
        "floor": 1,
        "family": {
            "id": "latias",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "ZEN_HEADBUTT",
                "CHARM"
            ],
            "chargedMoves": [
                "OUTRAGE",
                "PSYCHIC",
                "THUNDER",
                "MIST_BALL"
            ],
            "eliteMoves": [
                "MIST_BALL"
            ]
        },
        "tags": [
            "legendary",
            "mega"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "latios",
        "dexNumber": 381,
        "name": "Latios",
        "stats": {
            "atk": 268,
            "def": 212,
            "sta": 190
        },
        "types": [
            "dragon",
            "psychic"
        ],
        "floor": 1,
        "family": {
            "id": "latios",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "PSYCHIC",
                "SOLAR_BEAM",
                "LUSTER_PURGE"
            ],
            "eliteMoves": [
                "LUSTER_PURGE"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "latios_mega",
        "dexNumber": 381,
        "name": "Latios (Mega)",
        "stats": {
            "atk": 335,
            "def": 241,
            "sta": 190
        },
        "types": [
            "dragon",
            "psychic"
        ],
        "floor": 1,
        "family": {
            "id": "latios",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "PSYCHIC",
                "SOLAR_BEAM",
                "LUSTER_PURGE"
            ],
            "eliteMoves": [
                "LUSTER_PURGE"
            ]
        },
        "tags": [
            "legendary",
            "mega"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "kyogre",
        "dexNumber": 382,
        "name": "Kyogre",
        "stats": {
            "atk": 270,
            "def": 228,
            "sta": 205
        },
        "types": [
            "water"
        ],
        "floor": 1,
        "family": {
            "id": "kyogre",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "WATERFALL"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HYDRO_PUMP",
                "THUNDER",
                "SURF"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "groudon",
        "dexNumber": 383,
        "name": "Groudon",
        "stats": {
            "atk": 270,
            "def": 228,
            "sta": 205
        },
        "types": [
            "ground"
        ],
        "floor": 1,
        "family": {
            "id": "groudon",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "FIRE_BLAST",
                "SOLAR_BEAM",
                "FIRE_PUNCH"
            ],
            "eliteMoves": [
                "FIRE_PUNCH"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "rayquaza",
        "dexNumber": 384,
        "name": "Rayquaza",
        "stats": {
            "atk": 284,
            "def": 170,
            "sta": 213
        },
        "types": [
            "dragon",
            "flying"
        ],
        "floor": 1,
        "family": {
            "id": "rayquaza",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "ANCIENT_POWER",
                "OUTRAGE",
                "HURRICANE"
            ],
            "eliteMoves": [
                "HURRICANE"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "jirachi",
        "dexNumber": 385,
        "name": "Jirachi",
        "stats": {
            "atk": 210,
            "def": 210,
            "sta": 225
        },
        "types": [
            "steel",
            "psychic"
        ],
        "floor": 10,
        "family": {
            "id": "jirachi",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "CONFUSION"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "DOOM_DESIRE",
                "PSYCHIC"
            ]
        },
        "tags": [
            "mythical",
            "untradeable"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "deoxys",
        "dexNumber": 386,
        "name": "Deoxys",
        "stats": {
            "atk": 345,
            "def": 115,
            "sta": 137
        },
        "types": [
            "psychic"
        ],
        "floor": 10,
        "family": {
            "id": "deoxys",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "HYPER_BEAM",
                "PSYCHO_BOOST",
                "THUNDERBOLT"
            ]
        },
        "tags": [
            "mythical",
            "untradeable"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "deoxys_attack",
        "dexNumber": 386,
        "name": "Deoxys (Attack)",
        "stats": {
            "atk": 414,
            "def": 46,
            "sta": 137
        },
        "types": [
            "psychic"
        ],
        "floor": 10,
        "family": {
            "id": "deoxys_atk",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "PSYCHO_BOOST",
                "ZAP_CANNON"
            ]
        },
        "tags": [
            "mythical",
            "untradeable"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "deoxys_defense",
        "dexNumber": 386,
        "name": "Deoxys (Defense)",
        "stats": {
            "atk": 144,
            "def": 330,
            "sta": 137
        },
        "types": [
            "psychic"
        ],
        "floor": 10,
        "family": {
            "id": "deoxys_defense",
            "stage": 1
        },
        "aliases": [
            "dd"
        ],
        "moves": {
            "fastMoves": [
                "COUNTER",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "PSYCHO_BOOST",
                "ROCK_SLIDE",
                "THUNDERBOLT"
            ]
        },
        "tags": [
            "mythical",
            "untradeable"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "deoxys_speed",
        "dexNumber": 386,
        "name": "Deoxys (Speed)",
        "stats": {
            "atk": 230,
            "def": 218,
            "sta": 137
        },
        "types": [
            "psychic"
        ],
        "floor": 10,
        "family": {
            "id": "deoxys_speed",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "PSYCHO_BOOST",
                "SWIFT",
                "THUNDERBOLT"
            ]
        },
        "tags": [
            "mythical",
            "untradeable"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "turtwig",
        "dexNumber": 387,
        "name": "Turtwig",
        "stats": {
            "atk": 119,
            "def": 110,
            "sta": 146
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "turtwig",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "TACKLE"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "ENERGY_BALL",
                "SEED_BOMB"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "grotle",
        "dexNumber": 388,
        "name": "Grotle",
        "stats": {
            "atk": 157,
            "def": 143,
            "sta": 181
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "turtwig",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "ENERGY_BALL",
                "SOLAR_BEAM"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "torterra",
        "dexNumber": 389,
        "name": "Torterra",
        "stats": {
            "atk": 202,
            "def": 188,
            "sta": 216
        },
        "types": [
            "grass",
            "ground"
        ],
        "family": {
            "id": "turtwig",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "SOLAR_BEAM",
                "SAND_TOMB",
                "STONE_EDGE",
                "FRENZY_PLANT"
            ],
            "eliteMoves": [
                "FRENZY_PLANT"
            ]
        },
        "tags": [
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "chimchar",
        "dexNumber": 390,
        "name": "Chimchar",
        "stats": {
            "atk": 113,
            "def": 86,
            "sta": 127
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "chimchar",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "SCRATCH"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "FLAME_WHEEL",
                "FLAMETHROWER"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "monferno",
        "dexNumber": 391,
        "name": "Monferno",
        "stats": {
            "atk": 158,
            "def": 105,
            "sta": 162
        },
        "types": [
            "fire",
            "fighting"
        ],
        "family": {
            "id": "chimchar",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "FLAME_WHEEL",
                "FLAMETHROWER",
                "LOW_SWEEP"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "infernape",
        "dexNumber": 392,
        "name": "Infernape",
        "stats": {
            "atk": 222,
            "def": 151,
            "sta": 183
        },
        "types": [
            "fire",
            "fighting"
        ],
        "family": {
            "id": "chimchar",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "FIRE_SPIN",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "FLAMETHROWER",
                "SOLAR_BEAM",
                "BLAST_BURN"
            ],
            "eliteMoves": [
                "BLAST_BURN"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "piplup",
        "dexNumber": 393,
        "name": "Piplup",
        "stats": {
            "atk": 112,
            "def": 102,
            "sta": 142
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "piplup",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "POUND"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "DRILL_PECK",
                "ICY_WIND"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "prinplup",
        "dexNumber": 394,
        "name": "Prinplup",
        "stats": {
            "atk": 150,
            "def": 139,
            "sta": 162
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "piplup",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "METAL_CLAW"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "HYDRO_PUMP",
                "ICY_WIND"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "empoleon",
        "dexNumber": 395,
        "name": "Empoleon",
        "stats": {
            "atk": 210,
            "def": 186,
            "sta": 197
        },
        "types": [
            "water",
            "steel"
        ],
        "family": {
            "id": "piplup",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "WATERFALL"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "FLASH_CANNON",
                "HYDRO_PUMP",
                "HYDRO_CANNON",
                "DRILL_PECK"
            ],
            "eliteMoves": [
                "HYDRO_CANNON"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "starly",
        "dexNumber": 396,
        "name": "Starly",
        "stats": {
            "atk": 101,
            "def": 58,
            "sta": 120
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "starly",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "TACKLE"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BRAVE_BIRD"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "staravia",
        "dexNumber": 397,
        "name": "Staravia",
        "stats": {
            "atk": 142,
            "def": 94,
            "sta": 146
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "starly",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BRAVE_BIRD",
                "HEAT_WAVE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "staraptor",
        "dexNumber": 398,
        "name": "Staraptor",
        "stats": {
            "atk": 234,
            "def": 140,
            "sta": 198
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "starly",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "BRAVE_BIRD",
                "CLOSE_COMBAT",
                "HEAT_WAVE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "bidoof",
        "dexNumber": 399,
        "name": "Bidoof",
        "stats": {
            "atk": 80,
            "def": 73,
            "sta": 153
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "bidoof",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "CRUNCH",
                "GRASS_KNOT",
                "HYPER_FANG",
                "ICE_BEAM",
                "THUNDERBOLT",
                "SHADOW_BALL",
                "SUPER_POWER"
            ],
            "eliteMoves": [
                "ICE_BEAM",
                "THUNDERBOLT",
                "SHADOW_BALL",
                "SUPER_POWER"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "bibarel",
        "dexNumber": 400,
        "name": "Bibarel",
        "stats": {
            "atk": 162,
            "def": 119,
            "sta": 188
        },
        "types": [
            "normal",
            "water"
        ],
        "family": {
            "id": "bidoof",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "TAKE_DOWN",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "HYPER_BEAM",
                "HYPER_FANG",
                "SURF"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "kricketot",
        "dexNumber": 401,
        "name": "Kricketot",
        "stats": {
            "atk": 45,
            "def": 74,
            "sta": 114
        },
        "types": [
            "bug"
        ],
        "family": {
            "id": "kricketot",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "kricketune",
        "dexNumber": 402,
        "name": "Kricketune",
        "stats": {
            "atk": 160,
            "def": 100,
            "sta": 184
        },
        "types": [
            "bug"
        ],
        "family": {
            "id": "kricketot",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FURY_CUTTER",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BUG_BUZZ",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "shinx",
        "dexNumber": 403,
        "name": "Shinx",
        "stats": {
            "atk": 117,
            "def": 64,
            "sta": 128
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "shinx",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SPARK",
                "TACKLE"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "SWIFT",
                "THUNDERBOLT"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "luxio",
        "dexNumber": 404,
        "name": "Luxio",
        "stats": {
            "atk": 159,
            "def": 95,
            "sta": 155
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "shinx",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "SPARK"
            ],
            "chargedMoves": [
                "CRUNCH",
                "THUNDERBOLT",
                "WILD_CHARGE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "luxray",
        "dexNumber": 405,
        "name": "Luxray",
        "stats": {
            "atk": 232,
            "def": 156,
            "sta": 190
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "shinx",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "SNARL",
                "SPARK"
            ],
            "chargedMoves": [
                "CRUNCH",
                "HYPER_BEAM",
                "WILD_CHARGE",
                "PSYCHIC_FANGS"
            ],
            "eliteMoves": [
                "PSYCHIC_FANGS"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "budew",
        "dexNumber": 406,
        "name": "Budew",
        "stats": {
            "atk": 91,
            "def": 109,
            "sta": 120
        },
        "types": [
            "grass",
            "poison"
        ],
        "family": {
            "id": "budew",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "GRASS_KNOT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "roserade",
        "dexNumber": 407,
        "name": "Roserade",
        "stats": {
            "atk": 243,
            "def": 185,
            "sta": 155
        },
        "types": [
            "grass",
            "poison"
        ],
        "family": {
            "id": "budew",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "RAZOR_LEAF",
                "BULLET_SEED"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "GRASS_KNOT",
                "SLUDGE_BOMB",
                "SOLAR_BEAM",
                "WEATHER_BALL_FIRE",
                "LEAF_STORM"
            ],
            "eliteMoves": [
                "BULLET_SEED",
                "WEATHER_BALL_FIRE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "cranidos",
        "dexNumber": 408,
        "name": "Cranidos",
        "stats": {
            "atk": 218,
            "def": 71,
            "sta": 167
        },
        "types": [
            "rock"
        ],
        "family": {
            "id": "cranidos",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TAKE_DOWN",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "BULLDOZE",
                "ROCK_TOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "rampardos",
        "dexNumber": 409,
        "name": "Rampardos",
        "stats": {
            "atk": 295,
            "def": 109,
            "sta": 219
        },
        "types": [
            "rock"
        ],
        "family": {
            "id": "cranidos",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "SMACK_DOWN",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "FLAMETHROWER",
                "OUTRAGE",
                "ROCK_SLIDE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "shieldon",
        "dexNumber": 410,
        "name": "Shieldon",
        "stats": {
            "atk": 76,
            "def": 195,
            "sta": 102
        },
        "types": [
            "rock",
            "steel"
        ],
        "family": {
            "id": "shieldon",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "IRON_TAIL",
                "TACKLE"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "HEAVY_SLAM",
                "ROCK_TOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "bastiodon",
        "dexNumber": 411,
        "name": "Bastiodon",
        "stats": {
            "atk": 94,
            "def": 286,
            "sta": 155
        },
        "types": [
            "rock",
            "steel"
        ],
        "family": {
            "id": "shieldon",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "IRON_TAIL",
                "SMACK_DOWN"
            ],
            "chargedMoves": [
                "FLAMETHROWER",
                "FLASH_CANNON",
                "STONE_EDGE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "burmy_plant",
        "dexNumber": 412,
        "name": "Burmy (Plant)",
        "stats": {
            "atk": 53,
            "def": 83,
            "sta": 120
        },
        "types": [
            "bug"
        ],
        "family": {
            "id": "burmy",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "burmy_sandy",
        "dexNumber": 412,
        "name": "Burmy (Sandy)",
        "stats": {
            "atk": 53,
            "def": 83,
            "sta": 120
        },
        "types": [
            "bug"
        ],
        "family": {
            "id": "burmy",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "burmy_trash",
        "dexNumber": 412,
        "name": "Burmy (Trash)",
        "stats": {
            "atk": 53,
            "def": 83,
            "sta": 120
        },
        "types": [
            "bug"
        ],
        "family": {
            "id": "burmy",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "wormadam_plant",
        "dexNumber": 413,
        "name": "Wormadam (Plant)",
        "stats": {
            "atk": 141,
            "def": 180,
            "sta": 155
        },
        "types": [
            "bug",
            "grass"
        ],
        "family": {
            "id": "burmy",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "CONFUSION"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "ENERGY_BALL",
                "PSYBEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "wormadam_sandy",
        "dexNumber": 413,
        "name": "Wormadam (Sandy)",
        "stats": {
            "atk": 141,
            "def": 180,
            "sta": 155
        },
        "types": [
            "bug",
            "ground"
        ],
        "family": {
            "id": "burmy",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "CONFUSION"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "BULLDOZE",
                "PSYBEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "wormadam_trash",
        "dexNumber": 413,
        "name": "Wormadam (Trash)",
        "stats": {
            "atk": 127,
            "def": 175,
            "sta": 155
        },
        "types": [
            "bug",
            "steel"
        ],
        "family": {
            "id": "burmy",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "CONFUSION"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "IRON_HEAD",
                "PSYBEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "mothim",
        "dexNumber": 414,
        "name": "Mothim",
        "stats": {
            "atk": 185,
            "def": 98,
            "sta": 172
        },
        "types": [
            "bug",
            "flying"
        ],
        "family": {
            "id": "burmy",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "BUG_BITE"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BUG_BUZZ",
                "PSYBEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "combee",
        "dexNumber": 415,
        "name": "Combee",
        "stats": {
            "atk": 59,
            "def": 83,
            "sta": 102
        },
        "types": [
            "bug",
            "flying"
        ],
        "family": {
            "id": "combee",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE"
            ],
            "chargedMoves": [
                "BUG_BUZZ"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "vespiquen",
        "dexNumber": 416,
        "name": "Vespiquen",
        "stats": {
            "atk": 149,
            "def": 190,
            "sta": 172
        },
        "types": [
            "bug",
            "flying"
        ],
        "family": {
            "id": "combee",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "POISON_STING",
                "FURY_CUTTER",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "POWER_GEM",
                "X_SCISSOR",
                "FELL_STINGER",
                "SIGNAL_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "pachirisu",
        "dexNumber": 417,
        "name": "Pachirisu",
        "stats": {
            "atk": 94,
            "def": 172,
            "sta": 155
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "pachirisu",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SPARK",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "THUNDER",
                "THUNDER_PUNCH",
                "THUNDERBOLT"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "buizel",
        "dexNumber": 418,
        "name": "Buizel",
        "stats": {
            "atk": 132,
            "def": 67,
            "sta": 146
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "buizel",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "SWIFT",
                "WATER_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "floatzel",
        "dexNumber": 419,
        "name": "Floatzel",
        "stats": {
            "atk": 221,
            "def": 114,
            "sta": 198
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "buizel",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "WATERFALL"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "HYDRO_PUMP",
                "SWIFT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "cherubi",
        "dexNumber": 420,
        "name": "Cherubi",
        "stats": {
            "atk": 108,
            "def": 92,
            "sta": 128
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "cherubi",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "TACKLE"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "PETAL_BLIZZARD",
                "SEED_BOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "cherrim_overcast",
        "dexNumber": 421,
        "name": "Cherrim (Overcast)",
        "stats": {
            "atk": 170,
            "def": 153,
            "sta": 172
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "cherubi",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "HYPER_BEAM",
                "SOLAR_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "cherrim_sunny",
        "dexNumber": 421,
        "name": "Cherrim (Sunny)",
        "stats": {
            "atk": 170,
            "def": 153,
            "sta": 172
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "cherubi",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "HYPER_BEAM",
                "SOLAR_BEAM",
                "WEATHER_BALL_FIRE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "shellos",
        "dexNumber": 422,
        "name": "Shellos",
        "stats": {
            "atk": 103,
            "def": 105,
            "sta": 183
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "shellos",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "MUD_BOMB",
                "WATER_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gastrodon",
        "dexNumber": 423,
        "name": "Gastrodon",
        "stats": {
            "atk": 169,
            "def": 143,
            "sta": 244
        },
        "types": [
            "water",
            "ground"
        ],
        "family": {
            "id": "shellos",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "WATER_PULSE",
                "EARTH_POWER",
                "EARTHQUAKE"
            ],
            "legacyMoves": [
                "EARTHQUAKE"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "ambipom",
        "dexNumber": 424,
        "name": "Ambipom",
        "stats": {
            "atk": 205,
            "def": 143,
            "sta": 181
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "aipom",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "SCRATCH"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "HYPER_BEAM",
                "LOW_SWEEP"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "drifloon",
        "dexNumber": 425,
        "name": "Drifloon",
        "stats": {
            "atk": 117,
            "def": 80,
            "sta": 207
        },
        "types": [
            "ghost",
            "flying"
        ],
        "family": {
            "id": "drifloon",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "HEX"
            ],
            "chargedMoves": [
                "ICY_WIND",
                "OMINOUS_WIND",
                "SHADOW_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "drifblim",
        "dexNumber": 426,
        "name": "Drifblim",
        "stats": {
            "atk": 180,
            "def": 102,
            "sta": 312
        },
        "types": [
            "ghost",
            "flying"
        ],
        "family": {
            "id": "drifloon",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "HEX"
            ],
            "chargedMoves": [
                "ICY_WIND",
                "OMINOUS_WIND",
                "SHADOW_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "buneary",
        "dexNumber": 427,
        "name": "Buneary",
        "stats": {
            "atk": 130,
            "def": 105,
            "sta": 146
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "buneary",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "FIRE_PUNCH",
                "SWIFT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "lopunny",
        "dexNumber": 428,
        "name": "Lopunny",
        "stats": {
            "atk": 156,
            "def": 194,
            "sta": 163
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "buneary",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "POUND"
            ],
            "chargedMoves": [
                "FIRE_PUNCH",
                "FOCUS_BLAST",
                "HYPER_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "lopunny_mega",
        "dexNumber": 428,
        "name": "Lopunny (Mega)",
        "stats": {
            "atk": 282,
            "def": 214,
            "sta": 163
        },
        "types": [
            "normal",
            "fighting"
        ],
        "family": {
            "id": "buneary",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "POUND"
            ],
            "chargedMoves": [
                "FIRE_PUNCH",
                "FOCUS_BLAST",
                "HYPER_BEAM"
            ]
        },
        "tags": [
            "mega"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "mismagius",
        "dexNumber": 429,
        "name": "Mismagius",
        "stats": {
            "atk": 211,
            "def": 187,
            "sta": 155
        },
        "types": [
            "ghost"
        ],
        "family": {
            "id": "misdreavus",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "HEX",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "DAZZLING_GLEAM",
                "SHADOW_BALL"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "honchkrow",
        "dexNumber": 430,
        "name": "Honchkrow",
        "stats": {
            "atk": 243,
            "def": 103,
            "sta": 225
        },
        "types": [
            "dark",
            "flying"
        ],
        "family": {
            "id": "murkrow",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "SNARL"
            ],
            "chargedMoves": [
                "BRAVE_BIRD",
                "DARK_PULSE",
                "PSYCHIC",
                "SKY_ATTACK"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "glameow",
        "dexNumber": 431,
        "name": "Glameow",
        "stats": {
            "atk": 109,
            "def": 82,
            "sta": 135
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "glameow",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "SCRATCH"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "PLAY_ROUGH",
                "THUNDERBOLT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "purugly",
        "dexNumber": 432,
        "name": "Purugly",
        "stats": {
            "atk": 172,
            "def": 133,
            "sta": 174
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "glameow",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "SCRATCH",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "PLAY_ROUGH",
                "THUNDER"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "chingling",
        "dexNumber": 433,
        "name": "Chingling",
        "stats": {
            "atk": 114,
            "def": 94,
            "sta": 128
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "chingling",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "PSYSHOCK",
                "SHADOW_BALL",
                "WRAP"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "stunky",
        "dexNumber": 434,
        "name": "Stunky",
        "stats": {
            "atk": 121,
            "def": 90,
            "sta": 160
        },
        "types": [
            "poison",
            "dark"
        ],
        "family": {
            "id": "stunky",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "SCRATCH"
            ],
            "chargedMoves": [
                "CRUNCH",
                "FLAMETHROWER",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "skuntank",
        "dexNumber": 435,
        "name": "Skuntank",
        "stats": {
            "atk": 184,
            "def": 132,
            "sta": 230
        },
        "types": [
            "poison",
            "dark"
        ],
        "family": {
            "id": "stunky",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "CRUNCH",
                "FLAMETHROWER",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "bronzor",
        "dexNumber": 436,
        "name": "Bronzor",
        "stats": {
            "atk": 43,
            "def": 154,
            "sta": 149
        },
        "types": [
            "steel",
            "psychic"
        ],
        "family": {
            "id": "bronzor",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "TACKLE"
            ],
            "chargedMoves": [
                "GYRO_BALL",
                "HEAVY_SLAM",
                "PSYSHOCK",
                "PAYBACK"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "bronzong",
        "dexNumber": 437,
        "name": "Bronzong",
        "stats": {
            "atk": 161,
            "def": 213,
            "sta": 167
        },
        "types": [
            "steel",
            "psychic"
        ],
        "family": {
            "id": "bronzor",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "FEINT_ATTACK"
            ],
            "chargedMoves": [
                "FLASH_CANNON",
                "HEAVY_SLAM",
                "PSYCHIC",
                "BULLDOZE",
                "PSYSHOCK",
                "PAYBACK"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "bonsly",
        "dexNumber": 438,
        "name": "Bonsly",
        "stats": {
            "atk": 124,
            "def": 133,
            "sta": 137
        },
        "types": [
            "rock"
        ],
        "family": {
            "id": "bonsly",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "COUNTER",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "ROCK_SLIDE",
                "ROCK_TOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "mime_jr",
        "dexNumber": 439,
        "name": "Mime (Jr)",
        "stats": {
            "atk": 125,
            "def": 142,
            "sta": 85
        },
        "types": [
            "psychic",
            "fairy"
        ],
        "family": {
            "id": "mime_jr",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "POUND"
            ],
            "chargedMoves": [
                "PSYBEAM",
                "PSYCHIC",
                "PSYSHOCK"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "happiny",
        "dexNumber": 440,
        "name": "Happiny",
        "stats": {
            "atk": 25,
            "def": 77,
            "sta": 225
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "happiny",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "PSYCHIC"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "chatot",
        "dexNumber": 441,
        "name": "Chatot",
        "stats": {
            "atk": 183,
            "def": 91,
            "sta": 183
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "chatot",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "STEEL_WING"
            ],
            "chargedMoves": [
                "HEAT_WAVE",
                "NIGHT_SHADE",
                "SKY_ATTACK"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "spiritomb",
        "dexNumber": 442,
        "name": "Spiritomb",
        "stats": {
            "atk": 169,
            "def": 199,
            "sta": 137
        },
        "types": [
            "ghost",
            "dark"
        ],
        "floor": 1,
        "family": {
            "id": "spiritomb",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "OMINOUS_WIND",
                "SHADOW_BALL",
                "SHADOW_SNEAK"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "gible",
        "dexNumber": 443,
        "name": "Gible",
        "stats": {
            "atk": 124,
            "def": 84,
            "sta": 151
        },
        "types": [
            "dragon",
            "ground"
        ],
        "family": {
            "id": "gible",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DIG",
                "TWISTER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "gabite",
        "dexNumber": 444,
        "name": "Gabite",
        "stats": {
            "atk": 172,
            "def": 125,
            "sta": 169
        },
        "types": [
            "dragon",
            "ground"
        ],
        "family": {
            "id": "gible",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "DIG",
                "FLAMETHROWER",
                "TWISTER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "garchomp",
        "dexNumber": 445,
        "name": "Garchomp",
        "stats": {
            "atk": 261,
            "def": 193,
            "sta": 239
        },
        "types": [
            "dragon",
            "ground"
        ],
        "family": {
            "id": "gible",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "FIRE_BLAST",
                "OUTRAGE",
                "SAND_TOMB",
                "EARTH_POWER"
            ],
            "eliteMoves": [
                "EARTH_POWER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "munchlax",
        "dexNumber": 446,
        "name": "Munchlax",
        "stats": {
            "atk": 137,
            "def": 117,
            "sta": 286
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "munchlax",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "LICK",
                "TACKLE"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "BULLDOZE",
                "GUNK_SHOT"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "riolu",
        "dexNumber": 447,
        "name": "Riolu",
        "stats": {
            "atk": 127,
            "def": 78,
            "sta": 120
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "riolu",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "COUNTER",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "CROSS_CHOP",
                "LOW_SWEEP"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "lucario",
        "dexNumber": 448,
        "name": "Lucario",
        "stats": {
            "atk": 236,
            "def": 144,
            "sta": 172
        },
        "types": [
            "fighting",
            "steel"
        ],
        "family": {
            "id": "riolu",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BULLET_PUNCH",
                "COUNTER"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "FLASH_CANNON",
                "SHADOW_BALL",
                "POWER_UP_PUNCH",
                "AURA_SPHERE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "hippopotas",
        "dexNumber": 449,
        "name": "Hippopotas",
        "stats": {
            "atk": 124,
            "def": 118,
            "sta": 169
        },
        "types": [
            "ground"
        ],
        "family": {
            "id": "hippopotas",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DIG",
                "ROCK_TOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "hippowdon",
        "dexNumber": 450,
        "name": "Hippowdon",
        "stats": {
            "atk": 201,
            "def": 191,
            "sta": 239
        },
        "types": [
            "ground"
        ],
        "family": {
            "id": "hippopotas",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "FIRE_FANG",
                "THUNDER_FANG",
                "ICE_FANG"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "EARTHQUAKE",
                "STONE_EDGE",
                "EARTH_POWER",
                "WEATHER_BALL_ROCK"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "skorupi",
        "dexNumber": 451,
        "name": "Skorupi",
        "stats": {
            "atk": 93,
            "def": 151,
            "sta": 120
        },
        "types": [
            "poison",
            "bug"
        ],
        "family": {
            "id": "skorupi",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "INFESTATION",
                "POISON_STING"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "CROSS_POISON",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "drapion",
        "dexNumber": 452,
        "name": "Drapion",
        "stats": {
            "atk": 180,
            "def": 202,
            "sta": 172
        },
        "types": [
            "poison",
            "dark"
        ],
        "family": {
            "id": "skorupi",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "INFESTATION",
                "POISON_STING",
                "ICE_FANG"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "CRUNCH",
                "SLUDGE_BOMB",
                "FELL_STINGER"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "croagunk",
        "dexNumber": 453,
        "name": "Croagunk",
        "stats": {
            "atk": 116,
            "def": 76,
            "sta": 134
        },
        "types": [
            "poison",
            "fighting"
        ],
        "family": {
            "id": "croagunk",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "POISON_STING"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "LOW_SWEEP",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "toxicroak",
        "dexNumber": 454,
        "name": "Toxicroak",
        "stats": {
            "atk": 211,
            "def": 133,
            "sta": 195
        },
        "types": [
            "poison",
            "fighting"
        ],
        "family": {
            "id": "croagunk",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "COUNTER",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "DYNAMIC_PUNCH",
                "MUD_BOMB",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "carnivine",
        "dexNumber": 455,
        "name": "Carnivine",
        "stats": {
            "atk": 187,
            "def": 136,
            "sta": 179
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "carnivine",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "CRUNCH",
                "ENERGY_BALL",
                "POWER_WHIP"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "finneon",
        "dexNumber": 456,
        "name": "Finneon",
        "stats": {
            "atk": 96,
            "def": 116,
            "sta": 135
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "finneon",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "ICE_BEAM",
                "SILVER_WIND",
                "WATER_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "lumineon",
        "dexNumber": 457,
        "name": "Lumineon",
        "stats": {
            "atk": 142,
            "def": 170,
            "sta": 170
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "finneon",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "WATERFALL"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "SILVER_WIND",
                "WATER_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "mantyke",
        "dexNumber": 458,
        "name": "Mantyke",
        "stats": {
            "atk": 105,
            "def": 179,
            "sta": 128
        },
        "types": [
            "water",
            "flying"
        ],
        "family": {
            "id": "mantyke",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "TACKLE"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "ICE_BEAM",
                "WATER_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "snover",
        "dexNumber": 459,
        "name": "Snover",
        "stats": {
            "atk": 115,
            "def": 105,
            "sta": 155
        },
        "types": [
            "grass",
            "ice"
        ],
        "family": {
            "id": "snover",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ICE_SHARD",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "ICE_BEAM",
                "STOMP"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "abomasnow",
        "dexNumber": 460,
        "name": "Abomasnow",
        "stats": {
            "atk": 178,
            "def": 158,
            "sta": 207
        },
        "types": [
            "grass",
            "ice"
        ],
        "family": {
            "id": "snover",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "POWDER_SNOW",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "ENERGY_BALL",
                "OUTRAGE",
                "WEATHER_BALL_ICE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "abomasnow_mega",
        "dexNumber": 460,
        "name": "Abomasnow (Mega)",
        "stats": {
            "atk": 240,
            "def": 191,
            "sta": 207
        },
        "types": [
            "grass",
            "ice"
        ],
        "family": {
            "id": "snover",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "POWDER_SNOW",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "ENERGY_BALL",
                "OUTRAGE",
                "WEATHER_BALL_ICE"
            ]
        },
        "tags": [
            "shadoweligible",
            "mega"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "weavile",
        "dexNumber": 461,
        "name": "Weavile",
        "stats": {
            "atk": 243,
            "def": 171,
            "sta": 172
        },
        "types": [
            "dark",
            "ice"
        ],
        "family": {
            "id": "sneasel",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "ICE_SHARD",
                "SNARL"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "FOCUS_BLAST",
                "FOUL_PLAY"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "magnezone",
        "dexNumber": 462,
        "name": "Magnezone",
        "stats": {
            "atk": 238,
            "def": 205,
            "sta": 172
        },
        "types": [
            "electric",
            "steel"
        ],
        "family": {
            "id": "magnemite",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "SPARK"
            ],
            "chargedMoves": [
                "FLASH_CANNON",
                "WILD_CHARGE",
                "ZAP_CANNON",
                "MIRROR_SHOT"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "lickilicky",
        "dexNumber": 463,
        "name": "Lickilicky",
        "stats": {
            "atk": 161,
            "def": 181,
            "sta": 242
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "lickitung",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "LICK",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "HYPER_BEAM",
                "SOLAR_BEAM",
                "SHADOW_BALL",
                "BODY_SLAM"
            ],
            "eliteMoves": [
                "BODY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "rhyperior",
        "dexNumber": 464,
        "name": "Rhyperior",
        "stats": {
            "atk": 241,
            "def": 190,
            "sta": 251
        },
        "types": [
            "ground",
            "rock"
        ],
        "family": {
            "id": "rhyhorn",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "SMACK_DOWN"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "STONE_EDGE",
                "SURF",
                "SKULL_BASH",
                "SUPER_POWER",
                "ROCK_WRECKER"
            ],
            "eliteMoves": [
                "ROCK_WRECKER"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "tangrowth",
        "dexNumber": 465,
        "name": "Tangrowth",
        "stats": {
            "atk": 207,
            "def": 184,
            "sta": 225
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "tangela",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "INFESTATION",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "ROCK_SLIDE",
                "SLUDGE_BOMB",
                "SOLAR_BEAM",
                "POWER_WHIP"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "electivire",
        "dexNumber": 466,
        "name": "Electivire",
        "stats": {
            "atk": 249,
            "def": 163,
            "sta": 181
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "elekid",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "THUNDER",
                "THUNDER_PUNCH",
                "WILD_CHARGE",
                "ICE_PUNCH",
                "FLAMETHROWER"
            ],
            "eliteMoves": [
                "FLAMETHROWER"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "magmortar",
        "dexNumber": 467,
        "name": "Magmortar",
        "stats": {
            "atk": 247,
            "def": 172,
            "sta": 181
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "magby",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "FIRE_SPIN",
                "KARATE_CHOP"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "FIRE_BLAST",
                "FIRE_PUNCH",
                "PSYCHIC",
                "THUNDERBOLT"
            ],
            "eliteMoves": [
                "THUNDERBOLT"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "togekiss",
        "dexNumber": 468,
        "name": "Togekiss",
        "stats": {
            "atk": 225,
            "def": 217,
            "sta": 198
        },
        "types": [
            "fairy",
            "flying"
        ],
        "family": {
            "id": "togepi",
            "stage": 3
        },
        "aliases": [
            "kiss"
        ],
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "CHARM",
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "ANCIENT_POWER",
                "DAZZLING_GLEAM",
                "FLAMETHROWER"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "yanmega",
        "dexNumber": 469,
        "name": "Yanmega",
        "stats": {
            "atk": 231,
            "def": 156,
            "sta": 200
        },
        "types": [
            "bug",
            "flying"
        ],
        "family": {
            "id": "yanma",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "ANCIENT_POWER",
                "BUG_BUZZ"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "leafeon",
        "dexNumber": 470,
        "name": "Leafeon",
        "stats": {
            "atk": 216,
            "def": 219,
            "sta": 163
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "eevee",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "RAZOR_LEAF",
                "BULLET_SEED"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "LEAF_BLADE",
                "SOLAR_BEAM",
                "LAST_RESORT"
            ],
            "eliteMoves": [
                "LAST_RESORT",
                "BULLET_SEED"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "glaceon",
        "dexNumber": 471,
        "name": "Glaceon",
        "stats": {
            "atk": 238,
            "def": 205,
            "sta": 163
        },
        "types": [
            "ice"
        ],
        "family": {
            "id": "eevee",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FROST_BREATH",
                "ICE_SHARD"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "ICE_BEAM",
                "ICY_WIND",
                "LAST_RESORT",
                "WATER_PULSE"
            ],
            "eliteMoves": [
                "LAST_RESORT",
                "WATER_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "gliscor",
        "dexNumber": 472,
        "name": "Gliscor",
        "stats": {
            "atk": 185,
            "def": 222,
            "sta": 181
        },
        "types": [
            "ground",
            "flying"
        ],
        "family": {
            "id": "gligar",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FURY_CUTTER",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "EARTHQUAKE",
                "NIGHT_SLASH",
                "SAND_TOMB"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "mamoswine",
        "dexNumber": 473,
        "name": "Mamoswine",
        "stats": {
            "atk": 247,
            "def": 146,
            "sta": 242
        },
        "types": [
            "ice",
            "ground"
        ],
        "family": {
            "id": "swinub",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "BULLDOZE",
                "STONE_EDGE",
                "ANCIENT_POWER"
            ],
            "eliteMoves": [
                "ANCIENT_POWER"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "porygon_z",
        "dexNumber": 474,
        "name": "Porygon-Z",
        "stats": {
            "atk": 264,
            "def": 150,
            "sta": 198
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "porygon",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "LOCK_ON",
                "CHARGE_BEAM",
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HYPER_BEAM",
                "SOLAR_BEAM",
                "ZAP_CANNON",
                "TRI_ATTACK"
            ],
            "eliteMoves": [
                "TRI_ATTACK"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gallade",
        "dexNumber": 475,
        "name": "Gallade",
        "stats": {
            "atk": 237,
            "def": 195,
            "sta": 169
        },
        "types": [
            "psychic",
            "fighting"
        ],
        "family": {
            "id": "ralts",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "LOW_KICK",
                "CHARM"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "LEAF_BLADE",
                "PSYCHIC",
                "SYNCHRONOISE"
            ],
            "eliteMoves": [
                "SYNCHRONOISE"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "gallade_mega",
        "dexNumber": 475,
        "name": "Gallade (Mega)",
        "stats": {
            "atk": 326,
            "def": 230,
            "sta": 169
        },
        "types": [
            "psychic",
            "fighting"
        ],
        "family": {
            "id": "ralts",
            "stage": 4
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "LOW_KICK",
                "CHARM"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "LEAF_BLADE",
                "PSYCHIC",
                "SYNCHRONOISE"
            ],
            "eliteMoves": [
                "SYNCHRONOISE"
            ]
        },
        "tags": [
            "shadoweligible",
            "mega"
        ],
        "thirdMoveCost": 10000
    },
    {
        "id": "probopass",
        "dexNumber": 476,
        "name": "Probopass",
        "stats": {
            "atk": 135,
            "def": 275,
            "sta": 155
        },
        "types": [
            "rock",
            "steel"
        ],
        "family": {
            "id": "nosepass",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ROCK_THROW",
                "SPARK"
            ],
            "chargedMoves": [
                "MAGNET_BOMB",
                "ROCK_SLIDE",
                "THUNDERBOLT"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "dusknoir",
        "dexNumber": 477,
        "name": "Dusknoir",
        "stats": {
            "atk": 180,
            "def": 254,
            "sta": 128
        },
        "types": [
            "ghost"
        ],
        "family": {
            "id": "duskull",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "HEX"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "OMINOUS_WIND",
                "PSYCHIC",
                "SHADOW_BALL"
            ],
            "eliteMoves": [
                "SHADOW_BALL"
            ]
        },
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "froslass",
        "dexNumber": 478,
        "name": "Froslass",
        "stats": {
            "atk": 171,
            "def": 150,
            "sta": 172
        },
        "types": [
            "ice",
            "ghost"
        ],
        "family": {
            "id": "snorunt",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "HEX",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "CRUNCH",
                "SHADOW_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "rotom",
        "dexNumber": 479,
        "name": "Rotom",
        "stats": {
            "atk": 185,
            "def": 159,
            "sta": 137
        },
        "types": [
            "electric",
            "ghost"
        ],
        "family": {
            "id": "rotom",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "OMINOUS_WIND",
                "THUNDER",
                "THUNDERBOLT"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "uxie",
        "dexNumber": 480,
        "name": "Uxie",
        "stats": {
            "atk": 156,
            "def": 270,
            "sta": 181
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "uxie",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "EXTRASENSORY"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "SWIFT",
                "THUNDER"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "mesprit",
        "dexNumber": 481,
        "name": "Mesprit",
        "stats": {
            "atk": 212,
            "def": 212,
            "sta": 190
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "mesprit",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "EXTRASENSORY"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "FUTURE_SIGHT",
                "SWIFT"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "azelf",
        "dexNumber": 482,
        "name": "Azelf",
        "stats": {
            "atk": 270,
            "def": 151,
            "sta": 181
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "azelf",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "EXTRASENSORY"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "FUTURE_SIGHT",
                "SWIFT"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "dialga",
        "dexNumber": 483,
        "name": "Dialga",
        "stats": {
            "atk": 275,
            "def": 211,
            "sta": 205
        },
        "types": [
            "steel",
            "dragon"
        ],
        "floor": 1,
        "family": {
            "id": "dialga",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "METAL_CLAW"
            ],
            "chargedMoves": [
                "DRACO_METEOR",
                "IRON_HEAD",
                "THUNDER"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "palkia",
        "dexNumber": 484,
        "name": "Palkia",
        "stats": {
            "atk": 280,
            "def": 215,
            "sta": 189
        },
        "types": [
            "water",
            "dragon"
        ],
        "floor": 1,
        "family": {
            "id": "palkia",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "DRACO_METEOR",
                "FIRE_BLAST",
                "HYDRO_PUMP",
                "AQUA_TAIL"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "heatran",
        "dexNumber": 485,
        "name": "Heatran",
        "stats": {
            "atk": 251,
            "def": 213,
            "sta": 209
        },
        "types": [
            "fire",
            "steel"
        ],
        "floor": 1,
        "family": {
            "id": "heatran",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "FIRE_SPIN"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "IRON_HEAD",
                "STONE_EDGE",
                "FLAMETHROWER"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "regigigas",
        "dexNumber": 486,
        "name": "Regigigas",
        "stats": {
            "atk": 287,
            "def": 210,
            "sta": 221
        },
        "types": [
            "normal"
        ],
        "floor": 1,
        "family": {
            "id": "regigigas",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "GIGA_IMPACT",
                "FOCUS_BLAST",
                "THUNDER"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "giratina_altered",
        "dexNumber": 487,
        "name": "Giratina (Altered)",
        "stats": {
            "atk": 187,
            "def": 225,
            "sta": 284
        },
        "types": [
            "ghost",
            "dragon"
        ],
        "floor": 1,
        "family": {
            "id": "giratina_altered",
            "stage": 1
        },
        "aliases": [
            "tinaa"
        ],
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "DRAGON_CLAW",
                "SHADOW_SNEAK"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "giratina_origin",
        "dexNumber": 487,
        "name": "Giratina (Origin)",
        "stats": {
            "atk": 225,
            "def": 187,
            "sta": 284
        },
        "types": [
            "ghost",
            "dragon"
        ],
        "floor": 1,
        "family": {
            "id": "giratina_origin",
            "stage": 1
        },
        "aliases": [
            "tinao"
        ],
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "OMINOUS_WIND",
                "DRAGON_PULSE",
                "SHADOW_BALL"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "cresselia",
        "dexNumber": 488,
        "name": "Cresselia",
        "stats": {
            "atk": 152,
            "def": 258,
            "sta": 260
        },
        "types": [
            "psychic"
        ],
        "floor": 1,
        "family": {
            "id": "cresselia",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "PSYCHO_CUT"
            ],
            "chargedMoves": [
                "AURORA_BEAM",
                "FUTURE_SIGHT",
                "MOONBLAST",
                "GRASS_KNOT"
            ],
            "eliteMoves": [
                "GRASS_KNOT"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "phione",
        "dexNumber": 489,
        "name": "Phione",
        "stats": {
            "atk": 162,
            "def": 162,
            "sta": 190
        },
        "types": [
            "water"
        ],
        "floor": 10,
        "family": {
            "id": "phione",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "WATERFALL"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "SURF",
                "WATER_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "manaphy",
        "dexNumber": 490,
        "name": "Manaphy",
        "stats": {
            "atk": 210,
            "def": 210,
            "sta": 225
        },
        "types": [
            "water"
        ],
        "floor": 10,
        "family": {
            "id": "manaphy",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "WATERFALL"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "PSYCHIC",
                "SURF"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "darkrai",
        "dexNumber": 491,
        "name": "Darkrai",
        "stats": {
            "atk": 285,
            "def": 198,
            "sta": 172
        },
        "types": [
            "dark"
        ],
        "floor": 10,
        "family": {
            "id": "darkrai",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "SNARL"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "FOCUS_BLAST",
                "SHADOW_BALL",
                "SLUDGE_BOMB"
            ],
            "eliteMoves": [
                "SLUDGE_BOMB"
            ]
        },
        "tags": [
            "mythical",
            "untradeable"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "shaymin_land",
        "dexNumber": 492,
        "name": "Shaymin (Land)",
        "stats": {
            "atk": 210,
            "def": 210,
            "sta": 225
        },
        "types": [
            "grass"
        ],
        "floor": 10,
        "family": {
            "id": "shaymin",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "GRASS_KNOT",
                "SOLAR_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "shaymin_sky",
        "dexNumber": 492,
        "name": "Shaymin (Sky)",
        "stats": {
            "atk": 261,
            "def": 166,
            "sta": 225
        },
        "types": [
            "grass",
            "flying"
        ],
        "floor": 10,
        "family": {
            "id": "shaymin",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "GRASS_KNOT",
                "SOLAR_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "arceus",
        "dexNumber": 493,
        "name": "Arceus",
        "stats": {
            "atk": 238,
            "def": 238,
            "sta": 237
        },
        "types": [
            "normal"
        ],
        "floor": 10,
        "family": {
            "id": "arceus",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "IRON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "HYPER_BEAM",
                "OUTRAGE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "victini",
        "dexNumber": 494,
        "name": "Victini",
        "stats": {
            "atk": 210,
            "def": 210,
            "sta": 225
        },
        "types": [
            "psychic",
            "fire"
        ],
        "floor": 10,
        "family": {
            "id": "victini",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "OVERHEAT",
                "FOCUS_BLAST",
                "PSYCHIC",
                "V_CREATE"
            ]
        },
        "tags": [
            "mythical",
            "untradeable"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "snivy",
        "dexNumber": 495,
        "name": "Snivy",
        "stats": {
            "atk": 88,
            "def": 107,
            "sta": 128
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "snivy",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "SEED_BOMB",
                "WRAP"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "servine",
        "dexNumber": 496,
        "name": "Servine",
        "stats": {
            "atk": 122,
            "def": 152,
            "sta": 155
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "snivy",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "IRON_TAIL",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "GRASS_KNOT",
                "LEAF_TORNADO",
                "WRAP"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "serperior",
        "dexNumber": 497,
        "name": "Serperior",
        "stats": {
            "atk": 161,
            "def": 204,
            "sta": 181
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "snivy",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "IRON_TAIL",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "GRASS_KNOT",
                "LEAF_TORNADO",
                "AERIAL_ACE",
                "FRENZY_PLANT"
            ],
            "eliteMoves": [
                "FRENZY_PLANT"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "tepig",
        "dexNumber": 498,
        "name": "Tepig",
        "stats": {
            "atk": 115,
            "def": 85,
            "sta": 163
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "tepig",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "EMBER"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "FLAMETHROWER",
                "BODY_SLAM"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pignite",
        "dexNumber": 499,
        "name": "Pignite",
        "stats": {
            "atk": 173,
            "def": 106,
            "sta": 207
        },
        "types": [
            "fire",
            "fighting"
        ],
        "family": {
            "id": "tepig",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "EMBER"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "FLAMETHROWER",
                "ROCK_TOMB"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "emboar",
        "dexNumber": 500,
        "name": "Emboar",
        "stats": {
            "atk": 235,
            "def": 127,
            "sta": 242
        },
        "types": [
            "fire",
            "fighting"
        ],
        "family": {
            "id": "tepig",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "EMBER"
            ],
            "chargedMoves": [
                "HEAT_WAVE",
                "ROCK_SLIDE",
                "FOCUS_BLAST",
                "FLAME_CHARGE",
                "BLAST_BURN"
            ],
            "eliteMoves": [
                "BLAST_BURN"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "oshawott",
        "dexNumber": 501,
        "name": "Oshawott",
        "stats": {
            "atk": 117,
            "def": 85,
            "sta": 146
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "oshawott",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "WATER_PULSE",
                "NIGHT_SLASH"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "dewott",
        "dexNumber": 502,
        "name": "Dewott",
        "stats": {
            "atk": 159,
            "def": 116,
            "sta": 181
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "oshawott",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FURY_CUTTER",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "WATER_PULSE",
                "X_SCISSOR"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "samurott",
        "dexNumber": 503,
        "name": "Samurott",
        "stats": {
            "atk": 212,
            "def": 157,
            "sta": 216
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "oshawott",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "FURY_CUTTER",
                "WATERFALL"
            ],
            "chargedMoves": [
                "HYDRO_PUMP",
                "BLIZZARD",
                "MEGAHORN",
                "RAZOR_SHELL",
                "HYDRO_CANNON"
            ],
            "eliteMoves": [
                "HYDRO_CANNON"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "patrat",
        "dexNumber": 504,
        "name": "Patrat",
        "stats": {
            "atk": 98,
            "def": 73,
            "sta": 128
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "patrat",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "BITE"
            ],
            "chargedMoves": [
                "DIG",
                "HYPER_FANG",
                "GRASS_KNOT"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "watchog",
        "dexNumber": 505,
        "name": "Watchog",
        "stats": {
            "atk": 165,
            "def": 139,
            "sta": 155
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "patrat",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "BITE"
            ],
            "chargedMoves": [
                "CRUNCH",
                "HYPER_FANG",
                "GRASS_KNOT"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "lillipup",
        "dexNumber": 506,
        "name": "Lillipup",
        "stats": {
            "atk": 107,
            "def": 86,
            "sta": 128
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "lillipup",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "THUNDERBOLT",
                "ROCK_TOMB",
                "DIG"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "herdier",
        "dexNumber": 507,
        "name": "Herdier",
        "stats": {
            "atk": 145,
            "def": 126,
            "sta": 163
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "lillipup",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "LICK",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "THUNDERBOLT",
                "PLAY_ROUGH",
                "DIG"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "stoutland",
        "dexNumber": 508,
        "name": "Stoutland",
        "stats": {
            "atk": 206,
            "def": 182,
            "sta": 198
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "lillipup",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "LICK",
                "TAKE_DOWN",
                "ICE_FANG"
            ],
            "chargedMoves": [
                "WILD_CHARGE",
                "PLAY_ROUGH",
                "CRUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "purrloin",
        "dexNumber": 509,
        "name": "Purrloin",
        "stats": {
            "atk": 98,
            "def": 73,
            "sta": 121
        },
        "types": [
            "dark"
        ],
        "family": {
            "id": "purrloin",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SCRATCH",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "NIGHT_SLASH",
                "PLAY_ROUGH",
                "DARK_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "liepard",
        "dexNumber": 510,
        "name": "Liepard",
        "stats": {
            "atk": 187,
            "def": 106,
            "sta": 162
        },
        "types": [
            "dark"
        ],
        "family": {
            "id": "purrloin",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CHARM",
                "SNARL"
            ],
            "chargedMoves": [
                "GUNK_SHOT",
                "PLAY_ROUGH",
                "DARK_PULSE",
                "PAYBACK"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pansage",
        "dexNumber": 511,
        "name": "Pansage",
        "stats": {
            "atk": 104,
            "def": 94,
            "sta": 137
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "pansage",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SCRATCH",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "SEED_BOMB",
                "CRUNCH"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "simisage",
        "dexNumber": 512,
        "name": "Simisage",
        "stats": {
            "atk": 206,
            "def": 133,
            "sta": 181
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "pansage",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "SOLAR_BEAM",
                "GRASS_KNOT",
                "CRUNCH"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "pansear",
        "dexNumber": 513,
        "name": "Pansear",
        "stats": {
            "atk": 104,
            "def": 94,
            "sta": 137
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "pansear",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SCRATCH",
                "FIRE_SPIN"
            ],
            "chargedMoves": [
                "FLAME_BURST",
                "FLAME_CHARGE",
                "CRUNCH"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "simisear",
        "dexNumber": 514,
        "name": "Simisear",
        "stats": {
            "atk": 206,
            "def": 133,
            "sta": 181
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "pansear",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "FIRE_SPIN"
            ],
            "chargedMoves": [
                "FLAMETHROWER",
                "FIRE_BLAST",
                "CRUNCH"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "panpour",
        "dexNumber": 515,
        "name": "Panpour",
        "stats": {
            "atk": 104,
            "def": 94,
            "sta": 137
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "panpour",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SCRATCH",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "SURF",
                "WATER_PULSE",
                "CRUNCH"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "simipour",
        "dexNumber": 516,
        "name": "Simipour",
        "stats": {
            "atk": 206,
            "def": 133,
            "sta": 181
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "panpour",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "SURF",
                "HYDRO_PUMP",
                "CRUNCH"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "munna",
        "dexNumber": 517,
        "name": "Munna",
        "stats": {
            "atk": 111,
            "def": 92,
            "sta": 183
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "munna",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ZEN_HEADBUTT",
                "CHARGE_BEAM"
            ],
            "chargedMoves": [
                "PSYBEAM",
                "DAZZLING_GLEAM",
                "PSYSHOCK"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "musharna",
        "dexNumber": 518,
        "name": "Musharna",
        "stats": {
            "atk": 183,
            "def": 166,
            "sta": 253
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "munna",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ZEN_HEADBUTT",
                "CHARGE_BEAM"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "DAZZLING_GLEAM",
                "PSYSHOCK"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "pidove",
        "dexNumber": 519,
        "name": "Pidove",
        "stats": {
            "atk": 98,
            "def": 80,
            "sta": 137
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "pidove",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "HEAT_WAVE",
                "AERIAL_ACE",
                "AIR_CUTTER"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "tranquill",
        "dexNumber": 520,
        "name": "Tranquill",
        "stats": {
            "atk": 144,
            "def": 107,
            "sta": 158
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "pidove",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "STEEL_WING"
            ],
            "chargedMoves": [
                "HEAT_WAVE",
                "AERIAL_ACE",
                "SKY_ATTACK"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "unfezant",
        "dexNumber": 521,
        "name": "Unfezant",
        "stats": {
            "atk": 226,
            "def": 146,
            "sta": 190
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "pidove",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "STEEL_WING"
            ],
            "chargedMoves": [
                "HEAT_WAVE",
                "HYPER_BEAM",
                "SKY_ATTACK"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "blitzle",
        "dexNumber": 522,
        "name": "Blitzle",
        "stats": {
            "atk": 118,
            "def": 64,
            "sta": 128
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "blitzle",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "SPARK"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "DISCHARGE",
                "THUNDERBOLT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "zebstrika",
        "dexNumber": 523,
        "name": "Zebstrika",
        "stats": {
            "atk": 211,
            "def": 136,
            "sta": 181
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "blitzle",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "SPARK"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "DISCHARGE",
                "WILD_CHARGE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "roggenrola",
        "dexNumber": 524,
        "name": "Roggenrola",
        "stats": {
            "atk": 121,
            "def": 110,
            "sta": 146
        },
        "types": [
            "rock"
        ],
        "family": {
            "id": "roggenrola",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "SMACK_DOWN"
            ],
            "chargedMoves": [
                "BULLDOZE",
                "ROCK_BLAST",
                "STONE_EDGE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "boldore",
        "dexNumber": 525,
        "name": "Boldore",
        "stats": {
            "atk": 174,
            "def": 143,
            "sta": 172
        },
        "types": [
            "rock"
        ],
        "family": {
            "id": "roggenrola",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "SMACK_DOWN"
            ],
            "chargedMoves": [
                "ROCK_SLIDE",
                "BULLDOZE",
                "STONE_EDGE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gigalith",
        "dexNumber": 526,
        "name": "Gigalith",
        "stats": {
            "atk": 226,
            "def": 201,
            "sta": 198
        },
        "types": [
            "rock"
        ],
        "family": {
            "id": "roggenrola",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "SMACK_DOWN"
            ],
            "chargedMoves": [
                "ROCK_SLIDE",
                "SOLAR_BEAM",
                "SUPER_POWER",
                "HEAVY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "woobat",
        "dexNumber": 527,
        "name": "Woobat",
        "stats": {
            "atk": 107,
            "def": 85,
            "sta": 163
        },
        "types": [
            "psychic",
            "flying"
        ],
        "family": {
            "id": "woobat",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "AIR_CUTTER",
                "AERIAL_ACE",
                "PSYSHOCK"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "swoobat",
        "dexNumber": 528,
        "name": "Swoobat",
        "stats": {
            "atk": 161,
            "def": 119,
            "sta": 167
        },
        "types": [
            "psychic",
            "flying"
        ],
        "family": {
            "id": "woobat",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "PSYCHIC",
                "AERIAL_ACE",
                "FUTURE_SIGHT"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "drilbur",
        "dexNumber": 529,
        "name": "Drilbur",
        "stats": {
            "atk": 154,
            "def": 85,
            "sta": 155
        },
        "types": [
            "ground"
        ],
        "family": {
            "id": "drilbur",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SCRATCH",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "ROCK_TOMB",
                "DIG",
                "DRILL_RUN"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "excadrill",
        "dexNumber": 530,
        "name": "Excadrill",
        "stats": {
            "atk": 255,
            "def": 129,
            "sta": 242
        },
        "types": [
            "ground",
            "steel"
        ],
        "family": {
            "id": "drilbur",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "MUD_SLAP",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "ROCK_SLIDE",
                "EARTHQUAKE",
                "DRILL_RUN",
                "IRON_HEAD"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "audino",
        "dexNumber": 531,
        "name": "Audino",
        "stats": {
            "atk": 114,
            "def": 163,
            "sta": 230
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "audino",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "DISARMING_VOICE",
                "DAZZLING_GLEAM",
                "HYPER_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "audino_mega",
        "dexNumber": 531,
        "name": "Audino (Mega)",
        "stats": {
            "atk": 147,
            "def": 239,
            "sta": 230
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "audino",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "DISARMING_VOICE",
                "DAZZLING_GLEAM",
                "HYPER_BEAM"
            ]
        },
        "tags": [
            "mega"
        ],
        "thirdMoveCost": 10000
    },
    {
        "id": "timburr",
        "dexNumber": 532,
        "name": "Timburr",
        "stats": {
            "atk": 134,
            "def": 87,
            "sta": 181
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "timburr",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "POUND"
            ],
            "chargedMoves": [
                "LOW_SWEEP",
                "BRICK_BREAK",
                "ROCK_TOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "gurdurr",
        "dexNumber": 533,
        "name": "Gurdurr",
        "stats": {
            "atk": 180,
            "def": 134,
            "sta": 198
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "timburr",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "LOW_SWEEP",
                "BRICK_BREAK",
                "STONE_EDGE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "conkeldurr",
        "dexNumber": 534,
        "name": "Conkeldurr",
        "stats": {
            "atk": 243,
            "def": 158,
            "sta": 233
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "timburr",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "COUNTER",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "DYNAMIC_PUNCH",
                "FOCUS_BLAST",
                "STONE_EDGE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "tympole",
        "dexNumber": 535,
        "name": "Tympole",
        "stats": {
            "atk": 98,
            "def": 78,
            "sta": 137
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "tympole",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "BUBBLE"
            ],
            "chargedMoves": [
                "WATER_PULSE",
                "MUD_BOMB",
                "SLUDGE_WAVE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "palpitoad",
        "dexNumber": 536,
        "name": "Palpitoad",
        "stats": {
            "atk": 128,
            "def": 109,
            "sta": 181
        },
        "types": [
            "water",
            "ground"
        ],
        "family": {
            "id": "tympole",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "BUBBLE"
            ],
            "chargedMoves": [
                "WATER_PULSE",
                "EARTH_POWER",
                "SLUDGE_WAVE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "seismitoad",
        "dexNumber": 537,
        "name": "Seismitoad",
        "stats": {
            "atk": 188,
            "def": 150,
            "sta": 233
        },
        "types": [
            "water",
            "ground"
        ],
        "family": {
            "id": "tympole",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "BUBBLE"
            ],
            "chargedMoves": [
                "MUDDY_WATER",
                "EARTH_POWER",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "throh",
        "dexNumber": 538,
        "name": "Throh",
        "stats": {
            "atk": 172,
            "def": 160,
            "sta": 260
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "throh",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "FOCUS_BLAST",
                "LOW_SWEEP",
                "BODY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "sawk",
        "dexNumber": 539,
        "name": "Sawk",
        "stats": {
            "atk": 231,
            "def": 153,
            "sta": 181
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "sawk",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "FOCUS_BLAST",
                "LOW_SWEEP",
                "BODY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "sewaddle",
        "dexNumber": 540,
        "name": "Sewaddle",
        "stats": {
            "atk": 96,
            "def": 124,
            "sta": 128
        },
        "types": [
            "bug",
            "grass"
        ],
        "family": {
            "id": "sewaddle",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE_BUG",
                "BUG_BITE"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "SEED_BOMB",
                "SILVER_WIND"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "swadloon",
        "dexNumber": 541,
        "name": "Swadloon",
        "stats": {
            "atk": 115,
            "def": 162,
            "sta": 146
        },
        "types": [
            "bug",
            "grass"
        ],
        "family": {
            "id": "sewaddle",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE_BUG",
                "BUG_BITE"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "BUG_BUZZ",
                "SILVER_WIND"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "leavanny",
        "dexNumber": 542,
        "name": "Leavanny",
        "stats": {
            "atk": 205,
            "def": 165,
            "sta": 181
        },
        "types": [
            "bug",
            "grass"
        ],
        "family": {
            "id": "sewaddle",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "BUG_BITE"
            ],
            "chargedMoves": [
                "LEAF_BLADE",
                "X_SCISSOR",
                "SILVER_WIND",
                "LEAF_STORM"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "venipede",
        "dexNumber": 543,
        "name": "Venipede",
        "stats": {
            "atk": 83,
            "def": 99,
            "sta": 102
        },
        "types": [
            "bug",
            "poison"
        ],
        "family": {
            "id": "venipede",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "POISON_STING"
            ],
            "chargedMoves": [
                "SIGNAL_BEAM",
                "SLUDGE_BOMB",
                "GYRO_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "whirlipede",
        "dexNumber": 544,
        "name": "Whirlipede",
        "stats": {
            "atk": 100,
            "def": 173,
            "sta": 120
        },
        "types": [
            "bug",
            "poison"
        ],
        "family": {
            "id": "venipede",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "POISON_STING"
            ],
            "chargedMoves": [
                "SIGNAL_BEAM",
                "SLUDGE_BOMB",
                "GYRO_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "scolipede",
        "dexNumber": 545,
        "name": "Scolipede",
        "stats": {
            "atk": 203,
            "def": 175,
            "sta": 155
        },
        "types": [
            "bug",
            "poison"
        ],
        "family": {
            "id": "venipede",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "MEGAHORN",
                "SLUDGE_BOMB",
                "GYRO_BALL",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "cottonee",
        "dexNumber": 546,
        "name": "Cottonee",
        "stats": {
            "atk": 71,
            "def": 111,
            "sta": 120
        },
        "types": [
            "grass",
            "fairy"
        ],
        "family": {
            "id": "cottonee",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CHARM",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "SEED_BOMB",
                "GRASS_KNOT"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "whimsicott",
        "dexNumber": 547,
        "name": "Whimsicott",
        "stats": {
            "atk": 164,
            "def": 176,
            "sta": 155
        },
        "types": [
            "grass",
            "fairy"
        ],
        "family": {
            "id": "cottonee",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CHARM",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "GRASS_KNOT",
                "HURRICANE",
                "MOONBLAST"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "petilil",
        "dexNumber": 548,
        "name": "Petilil",
        "stats": {
            "atk": 119,
            "def": 91,
            "sta": 128
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "petilil",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CHARM",
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "SEED_BOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "lilligant",
        "dexNumber": 549,
        "name": "Lilligant",
        "stats": {
            "atk": 214,
            "def": 155,
            "sta": 172
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "petilil",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CHARM",
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER"
            ],
            "chargedMoves": [
                "PETAL_BLIZZARD",
                "HYPER_BEAM",
                "SOLAR_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "basculin",
        "dexNumber": 550,
        "name": "Basculin",
        "stats": {
            "atk": 189,
            "def": 129,
            "sta": 172
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "basculin",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "AQUA_TAIL",
                "MUDDY_WATER"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "sandile",
        "dexNumber": 551,
        "name": "Sandile",
        "stats": {
            "atk": 132,
            "def": 69,
            "sta": 137
        },
        "types": [
            "ground",
            "dark"
        ],
        "family": {
            "id": "sandile",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "DIG",
                "CRUNCH",
                "BULLDOZE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "krokorok",
        "dexNumber": 552,
        "name": "Krokorok",
        "stats": {
            "atk": 155,
            "def": 90,
            "sta": 155
        },
        "types": [
            "ground",
            "dark"
        ],
        "family": {
            "id": "sandile",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "CRUNCH",
                "BULLDOZE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "krookodile",
        "dexNumber": 553,
        "name": "Krookodile",
        "stats": {
            "atk": 229,
            "def": 158,
            "sta": 216
        },
        "types": [
            "ground",
            "dark"
        ],
        "family": {
            "id": "sandile",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "SNARL",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "CRUNCH",
                "OUTRAGE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "darumaka",
        "dexNumber": 554,
        "name": "Darumaka",
        "stats": {
            "atk": 153,
            "def": 86,
            "sta": 172
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "darumaka",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "FIRE_FANG"
            ],
            "chargedMoves": [
                "FIRE_PUNCH",
                "FLAME_CHARGE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "darumaka_galarian",
        "dexNumber": 554,
        "name": "Darumaka (Galarian)",
        "stats": {
            "atk": 153,
            "def": 86,
            "sta": 172
        },
        "types": [
            "ice"
        ],
        "family": {
            "id": "darumaka_galarian",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "ICE_FANG"
            ],
            "chargedMoves": [
                "ICE_PUNCH",
                "ICE_BEAM"
            ]
        },
        "tags": [
            "galarian"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "darmanitan_galarian_standard",
        "dexNumber": 555,
        "name": "Darmanitan (Galarian)",
        "stats": {
            "atk": 263,
            "def": 114,
            "sta": 233
        },
        "types": [
            "ice"
        ],
        "family": {
            "id": "darumaka_galarian",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "ICE_FANG"
            ],
            "chargedMoves": [
                "OVERHEAT",
                "AVALANCHE",
                "SUPER_POWER",
                "ICE_PUNCH"
            ]
        },
        "tags": [
            "galarian"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "darmanitan_galarian_zen",
        "dexNumber": 555,
        "name": "Darmanitan (Galarian Zen)",
        "stats": {
            "atk": 323,
            "def": 123,
            "sta": 233
        },
        "types": [
            "ice",
            "fire"
        ],
        "family": {
            "id": "darumaka_galarian",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "ICE_FANG"
            ],
            "chargedMoves": [
                "OVERHEAT",
                "AVALANCHE",
                "SUPER_POWER",
                "ICE_PUNCH"
            ]
        },
        "tags": [
            "galarian"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "darmanitan_standard",
        "dexNumber": 555,
        "name": "Darmanitan (Standard)",
        "stats": {
            "atk": 263,
            "def": 114,
            "sta": 233
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "darumaka",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "FIRE_FANG",
                "INCINERATE"
            ],
            "chargedMoves": [
                "OVERHEAT",
                "FOCUS_BLAST",
                "PSYCHIC",
                "ROCK_SLIDE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "darmanitan_zen",
        "dexNumber": 555,
        "name": "Darmanitan (Zen)",
        "stats": {
            "atk": 243,
            "def": 202,
            "sta": 233
        },
        "types": [
            "fire",
            "psychic"
        ],
        "family": {
            "id": "darumaka",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "FIRE_FANG"
            ],
            "chargedMoves": [
                "OVERHEAT",
                "FOCUS_BLAST",
                "PSYCHIC",
                "ROCK_SLIDE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "maractus",
        "dexNumber": 556,
        "name": "Maractus",
        "stats": {
            "atk": 201,
            "def": 130,
            "sta": 181
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "maractus",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "PETAL_BLIZZARD",
                "SOLAR_BEAM"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "dwebble",
        "dexNumber": 557,
        "name": "Dwebble",
        "stats": {
            "atk": 118,
            "def": 128,
            "sta": 137
        },
        "types": [
            "bug",
            "rock"
        ],
        "family": {
            "id": "dwebble",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CUT",
                "SMACK_DOWN"
            ],
            "chargedMoves": [
                "ROCK_BLAST",
                "X_SCISSOR",
                "ROCK_TOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "crustle",
        "dexNumber": 558,
        "name": "Crustle",
        "stats": {
            "atk": 188,
            "def": 200,
            "sta": 172
        },
        "types": [
            "bug",
            "rock"
        ],
        "family": {
            "id": "dwebble",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FURY_CUTTER",
                "SMACK_DOWN"
            ],
            "chargedMoves": [
                "ROCK_BLAST",
                "X_SCISSOR",
                "ROCK_SLIDE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "scraggy",
        "dexNumber": 559,
        "name": "Scraggy",
        "stats": {
            "atk": 132,
            "def": 132,
            "sta": 137
        },
        "types": [
            "dark",
            "fighting"
        ],
        "family": {
            "id": "scraggy",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "FEINT_ATTACK"
            ],
            "chargedMoves": [
                "ACID_SPRAY",
                "BRICK_BREAK",
                "FOUL_PLAY"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "scrafty",
        "dexNumber": 560,
        "name": "Scrafty",
        "stats": {
            "atk": 163,
            "def": 222,
            "sta": 163
        },
        "types": [
            "dark",
            "fighting"
        ],
        "family": {
            "id": "scraggy",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "COUNTER",
                "SNARL"
            ],
            "chargedMoves": [
                "ACID_SPRAY",
                "POWER_UP_PUNCH",
                "FOUL_PLAY"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "sigilyph",
        "dexNumber": 561,
        "name": "Sigilyph",
        "stats": {
            "atk": 204,
            "def": 167,
            "sta": 176
        },
        "types": [
            "psychic",
            "flying"
        ],
        "family": {
            "id": "sigilyph",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "AIR_CUTTER",
                "PSYBEAM",
                "ANCIENT_POWER",
                "SIGNAL_BEAM"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "yamask",
        "dexNumber": 562,
        "name": "Yamask",
        "stats": {
            "atk": 95,
            "def": 141,
            "sta": 116
        },
        "types": [
            "ghost"
        ],
        "family": {
            "id": "yamask",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "SHADOW_BALL",
                "DARK_PULSE",
                "OMINOUS_WIND"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "yamask_galarian",
        "dexNumber": 562,
        "name": "Yamask (Galarian)",
        "stats": {
            "atk": 95,
            "def": 141,
            "sta": 116
        },
        "types": [
            "ground",
            "ghost"
        ],
        "family": {
            "id": "yamask_galarian",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH"
            ],
            "chargedMoves": [
                "NIGHT_SHADE",
                "ROCK_TOMB"
            ]
        },
        "tags": [
            "galarian"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "cofagrigus",
        "dexNumber": 563,
        "name": "Cofagrigus",
        "stats": {
            "atk": 163,
            "def": 237,
            "sta": 151
        },
        "types": [
            "ghost"
        ],
        "family": {
            "id": "yamask",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "ZEN_HEADBUTT",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "SHADOW_BALL",
                "DARK_PULSE",
                "PSYCHIC"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "tirtouga",
        "dexNumber": 564,
        "name": "Tirtouga",
        "stats": {
            "atk": 134,
            "def": 146,
            "sta": 144
        },
        "types": [
            "water",
            "rock"
        ],
        "family": {
            "id": "tirtouga",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "BITE"
            ],
            "chargedMoves": [
                "SURF",
                "ANCIENT_POWER",
                "BODY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "carracosta",
        "dexNumber": 565,
        "name": "Carracosta",
        "stats": {
            "atk": 192,
            "def": 197,
            "sta": 179
        },
        "types": [
            "water",
            "rock"
        ],
        "family": {
            "id": "tirtouga",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "SURF",
                "ANCIENT_POWER",
                "BODY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "archen",
        "dexNumber": 566,
        "name": "Archen",
        "stats": {
            "atk": 213,
            "def": 89,
            "sta": 146
        },
        "types": [
            "rock",
            "flying"
        ],
        "family": {
            "id": "archen",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "ANCIENT_POWER",
                "CRUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "archeops",
        "dexNumber": 567,
        "name": "Archeops",
        "stats": {
            "atk": 292,
            "def": 139,
            "sta": 181
        },
        "types": [
            "rock",
            "flying"
        ],
        "family": {
            "id": "archen",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "STEEL_WING",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "ANCIENT_POWER",
                "CRUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "trubbish",
        "dexNumber": 568,
        "name": "Trubbish",
        "stats": {
            "atk": 96,
            "def": 122,
            "sta": 137
        },
        "types": [
            "poison"
        ],
        "family": {
            "id": "trubbish",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "GUNK_SHOT",
                "SEED_BOMB",
                "GUNK_SHOT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "garbodor",
        "dexNumber": 569,
        "name": "Garbodor",
        "stats": {
            "atk": 181,
            "def": 164,
            "sta": 190
        },
        "types": [
            "poison"
        ],
        "family": {
            "id": "trubbish",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "INFESTATION",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "ACID_SPRAY",
                "SEED_BOMB",
                "GUNK_SHOT",
                "BODY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "zorua",
        "dexNumber": 570,
        "name": "Zorua",
        "stats": {
            "atk": 153,
            "def": 78,
            "sta": 120
        },
        "types": [
            "dark"
        ],
        "family": {
            "id": "zorua",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SCRATCH",
                "FEINT_ATTACK"
            ],
            "chargedMoves": [
                "FOUL_PLAY",
                "AERIAL_ACE",
                "DARK_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "zoroark",
        "dexNumber": 571,
        "name": "Zoroark",
        "stats": {
            "atk": 250,
            "def": 127,
            "sta": 155
        },
        "types": [
            "dark"
        ],
        "family": {
            "id": "zorua",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "SHADOW_CLAW",
                "SNARL"
            ],
            "chargedMoves": [
                "FOUL_PLAY",
                "SLUDGE_BOMB",
                "FLAMETHROWER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "minccino",
        "dexNumber": 572,
        "name": "Minccino",
        "stats": {
            "atk": 98,
            "def": 80,
            "sta": 146
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "minccino",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "CHARM"
            ],
            "chargedMoves": [
                "SWIFT",
                "THUNDERBOLT",
                "AQUA_TAIL"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "cinccino",
        "dexNumber": 573,
        "name": "Cinccino",
        "stats": {
            "atk": 198,
            "def": 130,
            "sta": 181
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "minccino",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "CHARM"
            ],
            "chargedMoves": [
                "HYPER_BEAM",
                "THUNDERBOLT",
                "AQUA_TAIL"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gothita",
        "dexNumber": 574,
        "name": "Gothita",
        "stats": {
            "atk": 98,
            "def": 112,
            "sta": 128
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "gothita",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "CONFUSION"
            ],
            "chargedMoves": [
                "PSYBEAM",
                "PSYSHOCK",
                "PSYCHIC"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gothorita",
        "dexNumber": 575,
        "name": "Gothorita",
        "stats": {
            "atk": 137,
            "def": 153,
            "sta": 155
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "gothita",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "CONFUSION"
            ],
            "chargedMoves": [
                "PSYBEAM",
                "FUTURE_SIGHT",
                "PSYCHIC"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gothitelle",
        "dexNumber": 576,
        "name": "Gothitelle",
        "stats": {
            "atk": 176,
            "def": 205,
            "sta": 172
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "gothita",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "CHARM",
                "CONFUSION"
            ],
            "chargedMoves": [
                "ROCK_SLIDE",
                "FUTURE_SIGHT",
                "PSYCHIC"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "solosis",
        "dexNumber": 577,
        "name": "Solosis",
        "stats": {
            "atk": 170,
            "def": 83,
            "sta": 128
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "solosis",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "PSYSHOCK",
                "NIGHT_SHADE",
                "THUNDER"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "duosion",
        "dexNumber": 578,
        "name": "Duosion",
        "stats": {
            "atk": 208,
            "def": 103,
            "sta": 163
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "solosis",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "PSYSHOCK",
                "NIGHT_SHADE",
                "THUNDER"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "reuniclus",
        "dexNumber": 579,
        "name": "Reuniclus",
        "stats": {
            "atk": 214,
            "def": 148,
            "sta": 242
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "solosis",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "SHADOW_BALL",
                "THUNDER"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "ducklett",
        "dexNumber": 580,
        "name": "Ducklett",
        "stats": {
            "atk": 84,
            "def": 96,
            "sta": 158
        },
        "types": [
            "water",
            "flying"
        ],
        "family": {
            "id": "ducklett",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BUBBLE_BEAM",
                "BRAVE_BIRD"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "swanna",
        "dexNumber": 581,
        "name": "Swanna",
        "stats": {
            "atk": 182,
            "def": 132,
            "sta": 181
        },
        "types": [
            "water",
            "flying"
        ],
        "family": {
            "id": "ducklett",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "ICE_BEAM",
                "BUBBLE_BEAM",
                "HURRICANE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "vanillite",
        "dexNumber": 582,
        "name": "Vanillite",
        "stats": {
            "atk": 118,
            "def": 106,
            "sta": 113
        },
        "types": [
            "ice"
        ],
        "family": {
            "id": "vanillite",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POWDER_SNOW",
                "ASTONISH"
            ],
            "chargedMoves": [
                "ICY_WIND",
                "ICE_BEAM",
                "SIGNAL_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "vanillish",
        "dexNumber": 583,
        "name": "Vanillish",
        "stats": {
            "atk": 151,
            "def": 138,
            "sta": 139
        },
        "types": [
            "ice"
        ],
        "family": {
            "id": "vanillite",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FROST_BREATH",
                "ASTONISH"
            ],
            "chargedMoves": [
                "ICY_WIND",
                "ICE_BEAM",
                "SIGNAL_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "vanilluxe",
        "dexNumber": 584,
        "name": "Vanilluxe",
        "stats": {
            "atk": 218,
            "def": 184,
            "sta": 174
        },
        "types": [
            "ice"
        ],
        "family": {
            "id": "vanillite",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "FROST_BREATH",
                "ASTONISH"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "FLASH_CANNON",
                "SIGNAL_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "deerling",
        "dexNumber": 585,
        "name": "Deerling",
        "stats": {
            "atk": 115,
            "def": 100,
            "sta": 155
        },
        "types": [
            "normal",
            "grass"
        ],
        "family": {
            "id": "deerling",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "SEED_BOMB",
                "WILD_CHARGE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "sawsbuck",
        "dexNumber": 586,
        "name": "Sawsbuck",
        "stats": {
            "atk": 198,
            "def": 146,
            "sta": 190
        },
        "types": [
            "normal",
            "grass"
        ],
        "family": {
            "id": "deerling",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "MEGAHORN",
                "SOLAR_BEAM",
                "WILD_CHARGE",
                "HYPER_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "emolga",
        "dexNumber": 587,
        "name": "Emolga",
        "stats": {
            "atk": 158,
            "def": 127,
            "sta": 146
        },
        "types": [
            "electric",
            "flying"
        ],
        "family": {
            "id": "emolga",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "AERIAL_ACE",
                "THUNDERBOLT"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "karrablast",
        "dexNumber": 588,
        "name": "Karrablast",
        "stats": {
            "atk": 137,
            "def": 87,
            "sta": 137
        },
        "types": [
            "bug"
        ],
        "family": {
            "id": "karrablast",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "SIGNAL_BEAM",
                "X_SCISSOR",
                "DRILL_RUN",
                "AERIAL_ACE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "escavalier",
        "dexNumber": 589,
        "name": "Escavalier",
        "stats": {
            "atk": 223,
            "def": 187,
            "sta": 172
        },
        "types": [
            "bug",
            "steel"
        ],
        "family": {
            "id": "karrablast",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "COUNTER",
                "BUG_BITE"
            ],
            "chargedMoves": [
                "MEGAHORN",
                "ACID_SPRAY",
                "DRILL_RUN",
                "AERIAL_ACE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "foongus",
        "dexNumber": 590,
        "name": "Foongus",
        "stats": {
            "atk": 97,
            "def": 91,
            "sta": 170
        },
        "types": [
            "grass",
            "poison"
        ],
        "family": {
            "id": "foongus",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "FEINT_ATTACK"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "BODY_SLAM",
                "GRASS_KNOT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "amoonguss",
        "dexNumber": 591,
        "name": "Amoonguss",
        "stats": {
            "atk": 155,
            "def": 139,
            "sta": 249
        },
        "types": [
            "grass",
            "poison"
        ],
        "family": {
            "id": "foongus",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "FEINT_ATTACK"
            ],
            "chargedMoves": [
                "FOUL_PLAY",
                "SLUDGE_BOMB",
                "GRASS_KNOT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "frillish",
        "dexNumber": 592,
        "name": "Frillish",
        "stats": {
            "atk": 115,
            "def": 134,
            "sta": 146
        },
        "types": [
            "water",
            "ghost"
        ],
        "family": {
            "id": "frillish",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "HEX"
            ],
            "chargedMoves": [
                "NIGHT_SHADE",
                "ICE_BEAM",
                "OMINOUS_WIND"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "jellicent",
        "dexNumber": 593,
        "name": "Jellicent",
        "stats": {
            "atk": 159,
            "def": 178,
            "sta": 225
        },
        "types": [
            "water",
            "ghost"
        ],
        "family": {
            "id": "frillish",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "HEX"
            ],
            "chargedMoves": [
                "SHADOW_BALL",
                "ICE_BEAM",
                "BUBBLE_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "alomomola",
        "dexNumber": 594,
        "name": "Alomomola",
        "stats": {
            "atk": 138,
            "def": 131,
            "sta": 338
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "alomomola",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "WATERFALL",
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER"
            ],
            "chargedMoves": [
                "HYDRO_PUMP",
                "BLIZZARD",
                "PSYCHIC"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "joltik",
        "dexNumber": 595,
        "name": "Joltik",
        "stats": {
            "atk": 110,
            "def": 98,
            "sta": 137
        },
        "types": [
            "bug",
            "electric"
        ],
        "family": {
            "id": "joltik",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "CROSS_POISON",
                "BUG_BUZZ",
                "DISCHARGE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "galvantula",
        "dexNumber": 596,
        "name": "Galvantula",
        "stats": {
            "atk": 201,
            "def": 128,
            "sta": 172
        },
        "types": [
            "bug",
            "electric"
        ],
        "family": {
            "id": "joltik",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "VOLT_SWITCH",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "CROSS_POISON",
                "BUG_BUZZ",
                "DISCHARGE",
                "ENERGY_BALL",
                "LUNGE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "ferroseed",
        "dexNumber": 597,
        "name": "Ferroseed",
        "stats": {
            "atk": 82,
            "def": 155,
            "sta": 127
        },
        "types": [
            "grass",
            "steel"
        ],
        "family": {
            "id": "ferroseed",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "METAL_CLAW"
            ],
            "chargedMoves": [
                "GYRO_BALL",
                "FLASH_CANNON",
                "IRON_HEAD"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "ferrothorn",
        "dexNumber": 598,
        "name": "Ferrothorn",
        "stats": {
            "atk": 158,
            "def": 223,
            "sta": 179
        },
        "types": [
            "grass",
            "steel"
        ],
        "family": {
            "id": "ferroseed",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "METAL_CLAW"
            ],
            "chargedMoves": [
                "POWER_WHIP",
                "FLASH_CANNON",
                "ACID_SPRAY",
                "THUNDER",
                "MIRROR_SHOT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "klink",
        "dexNumber": 599,
        "name": "Klink",
        "stats": {
            "atk": 98,
            "def": 121,
            "sta": 120
        },
        "types": [
            "steel"
        ],
        "family": {
            "id": "klink",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "VOLT_SWITCH",
                "CHARGE_BEAM"
            ],
            "chargedMoves": [
                "VICE_GRIP",
                "DISCHARGE",
                "ZAP_CANNON"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "klang",
        "dexNumber": 600,
        "name": "Klang",
        "stats": {
            "atk": 150,
            "def": 174,
            "sta": 155
        },
        "types": [
            "steel"
        ],
        "family": {
            "id": "klink",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "CHARGE_BEAM"
            ],
            "chargedMoves": [
                "VICE_GRIP",
                "THUNDERBOLT",
                "ZAP_CANNON"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "klinklang",
        "dexNumber": 601,
        "name": "Klinklang",
        "stats": {
            "atk": 199,
            "def": 214,
            "sta": 155
        },
        "types": [
            "steel"
        ],
        "family": {
            "id": "klink",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "CHARGE_BEAM"
            ],
            "chargedMoves": [
                "HYPER_BEAM",
                "FLASH_CANNON",
                "ZAP_CANNON",
                "MIRROR_SHOT"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "tynamo",
        "dexNumber": 602,
        "name": "Tynamo",
        "stats": {
            "atk": 105,
            "def": 78,
            "sta": 111
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "tynamo",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "SPARK"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "eelektrik",
        "dexNumber": 603,
        "name": "Eelektrik",
        "stats": {
            "atk": 156,
            "def": 130,
            "sta": 163
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "tynamo",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ACID",
                "SPARK"
            ],
            "chargedMoves": [
                "CRUNCH",
                "THUNDERBOLT",
                "DISCHARGE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "eelektross",
        "dexNumber": 604,
        "name": "Eelektross",
        "stats": {
            "atk": 217,
            "def": 152,
            "sta": 198
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "tynamo",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "ACID",
                "SPARK"
            ],
            "chargedMoves": [
                "CRUNCH",
                "THUNDERBOLT",
                "ACID_SPRAY",
                "DRAGON_CLAW"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "elgyem",
        "dexNumber": 605,
        "name": "Elgyem",
        "stats": {
            "atk": 148,
            "def": 100,
            "sta": 146
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "elgyem",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "ASTONISH"
            ],
            "chargedMoves": [
                "PSYBEAM",
                "DARK_PULSE",
                "PSYCHIC"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "beheeyem",
        "dexNumber": 606,
        "name": "Beheeyem",
        "stats": {
            "atk": 221,
            "def": 163,
            "sta": 181
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "elgyem",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "ASTONISH"
            ],
            "chargedMoves": [
                "ROCK_SLIDE",
                "DARK_PULSE",
                "PSYCHIC"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "litwick",
        "dexNumber": 607,
        "name": "Litwick",
        "stats": {
            "atk": 108,
            "def": 98,
            "sta": 137
        },
        "types": [
            "ghost",
            "fire"
        ],
        "family": {
            "id": "litwick",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "EMBER"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "FLAME_BURST",
                "HEAT_WAVE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "lampent",
        "dexNumber": 608,
        "name": "Lampent",
        "stats": {
            "atk": 169,
            "def": 115,
            "sta": 155
        },
        "types": [
            "ghost",
            "fire"
        ],
        "family": {
            "id": "litwick",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "EMBER"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "FLAME_BURST",
                "HEAT_WAVE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "chandelure",
        "dexNumber": 609,
        "name": "Chandelure",
        "stats": {
            "atk": 271,
            "def": 182,
            "sta": 155
        },
        "types": [
            "ghost",
            "fire"
        ],
        "family": {
            "id": "litwick",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "HEX",
                "FIRE_SPIN",
                "INCINERATE"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "SHADOW_BALL",
                "OVERHEAT",
                "FLAME_CHARGE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "axew",
        "dexNumber": 610,
        "name": "Axew",
        "stats": {
            "atk": 154,
            "def": 101,
            "sta": 130
        },
        "types": [
            "dragon"
        ],
        "family": {
            "id": "axew",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SCRATCH",
                "IRON_TAIL"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "AQUA_TAIL",
                "DRAGON_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "fraxure",
        "dexNumber": 611,
        "name": "Fraxure",
        "stats": {
            "atk": 212,
            "def": 123,
            "sta": 165
        },
        "types": [
            "dragon"
        ],
        "family": {
            "id": "axew",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "IRON_TAIL"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "AQUA_TAIL",
                "NIGHT_SLASH"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "haxorus",
        "dexNumber": 612,
        "name": "Haxorus",
        "stats": {
            "atk": 284,
            "def": 172,
            "sta": 183
        },
        "types": [
            "dragon"
        ],
        "family": {
            "id": "axew",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "COUNTER"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "SURF",
                "NIGHT_SLASH",
                "EARTHQUAKE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "cubchoo",
        "dexNumber": 613,
        "name": "Cubchoo",
        "stats": {
            "atk": 128,
            "def": 74,
            "sta": 146
        },
        "types": [
            "ice"
        ],
        "family": {
            "id": "cubchoo",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POWDER_SNOW",
                "CHARM"
            ],
            "chargedMoves": [
                "ICE_PUNCH",
                "ICY_WIND",
                "PLAY_ROUGH"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "beartic",
        "dexNumber": 614,
        "name": "Beartic",
        "stats": {
            "atk": 233,
            "def": 152,
            "sta": 216
        },
        "types": [
            "ice"
        ],
        "family": {
            "id": "cubchoo",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "POWDER_SNOW",
                "CHARM"
            ],
            "chargedMoves": [
                "ICE_PUNCH",
                "SURF",
                "PLAY_ROUGH"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "cryogonal",
        "dexNumber": 615,
        "name": "Cryogonal",
        "stats": {
            "atk": 190,
            "def": 218,
            "sta": 190
        },
        "types": [
            "ice"
        ],
        "family": {
            "id": "cryogonal",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ICE_SHARD",
                "FROST_BREATH"
            ],
            "chargedMoves": [
                "AURORA_BEAM",
                "NIGHT_SLASH",
                "SOLAR_BEAM",
                "WATER_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "shelmet",
        "dexNumber": 616,
        "name": "Shelmet",
        "stats": {
            "atk": 72,
            "def": 140,
            "sta": 137
        },
        "types": [
            "bug"
        ],
        "family": {
            "id": "shelmet",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ACID",
                "INFESTATION"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "BODY_SLAM",
                "SIGNAL_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "accelgor",
        "dexNumber": 617,
        "name": "Accelgor",
        "stats": {
            "atk": 220,
            "def": 120,
            "sta": 190
        },
        "types": [
            "bug"
        ],
        "family": {
            "id": "shelmet",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ACID",
                "INFESTATION"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "ACID_SPRAY",
                "SIGNAL_BEAM",
                "FOCUS_BLAST"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "stunfisk",
        "dexNumber": 618,
        "name": "Stunfisk",
        "stats": {
            "atk": 144,
            "def": 171,
            "sta": 240
        },
        "types": [
            "ground",
            "electric"
        ],
        "family": {
            "id": "stunfisk",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "MUD_BOMB",
                "DISCHARGE",
                "MUDDY_WATER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "stunfisk_galarian",
        "dexNumber": 618,
        "name": "Stunfisk (Galarian)",
        "stats": {
            "atk": 144,
            "def": 171,
            "sta": 240
        },
        "types": [
            "ground",
            "steel"
        ],
        "family": {
            "id": "stunfisk_galarian",
            "stage": 1
        },
        "aliases": [
            "gfisk"
        ],
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "METAL_CLAW"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "FLASH_CANNON",
                "MUDDY_WATER",
                "ROCK_SLIDE"
            ]
        },
        "tags": [
            "galarian"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "mienfoo",
        "dexNumber": 619,
        "name": "Mienfoo",
        "stats": {
            "atk": 160,
            "def": 98,
            "sta": 128
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "mienfoo",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "POUND"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "LOW_SWEEP",
                "FOCUS_BLAST"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "mienshao",
        "dexNumber": 620,
        "name": "Mienshao",
        "stats": {
            "atk": 258,
            "def": 127,
            "sta": 163
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "mienfoo",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "GRASS_KNOT",
                "STONE_EDGE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "druddigon",
        "dexNumber": 621,
        "name": "Druddigon",
        "stats": {
            "atk": 213,
            "def": 170,
            "sta": 184
        },
        "types": [
            "dragon"
        ],
        "family": {
            "id": "druddigon",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "BITE"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "NIGHT_SLASH",
                "HYPER_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "golett",
        "dexNumber": 622,
        "name": "Golett",
        "stats": {
            "atk": 127,
            "def": 92,
            "sta": 153
        },
        "types": [
            "ground",
            "ghost"
        ],
        "family": {
            "id": "golett",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "SHADOW_PUNCH",
                "BRICK_BREAK",
                "NIGHT_SHADE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "golurk",
        "dexNumber": 623,
        "name": "Golurk",
        "stats": {
            "atk": 222,
            "def": 154,
            "sta": 205
        },
        "types": [
            "ground",
            "ghost"
        ],
        "family": {
            "id": "golett",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "SHADOW_PUNCH",
                "DYNAMIC_PUNCH",
                "EARTH_POWER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "pawniard",
        "dexNumber": 624,
        "name": "Pawniard",
        "stats": {
            "atk": 154,
            "def": 114,
            "sta": 128
        },
        "types": [
            "dark",
            "steel"
        ],
        "family": {
            "id": "pawniard",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SCRATCH",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "NIGHT_SLASH",
                "IRON_HEAD",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "bisharp",
        "dexNumber": 625,
        "name": "Bisharp",
        "stats": {
            "atk": 232,
            "def": 176,
            "sta": 163
        },
        "types": [
            "dark",
            "steel"
        ],
        "family": {
            "id": "pawniard",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "SNARL",
                "METAL_CLAW"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "IRON_HEAD",
                "X_SCISSOR",
                "FOCUS_BLAST"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "bouffalant",
        "dexNumber": 626,
        "name": "Bouffalant",
        "stats": {
            "atk": 195,
            "def": 182,
            "sta": 216
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "bouffalant",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ZEN_HEADBUTT",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "MEGAHORN",
                "STOMP",
                "SKULL_BASH",
                "EARTHQUAKE"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "rufflet",
        "dexNumber": 627,
        "name": "Rufflet",
        "stats": {
            "atk": 150,
            "def": 97,
            "sta": 172
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "rufflet",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BRAVE_BIRD",
                "ROCK_TOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "braviary",
        "dexNumber": 628,
        "name": "Braviary",
        "stats": {
            "atk": 232,
            "def": 152,
            "sta": 225
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "rufflet",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "STEEL_WING",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "HEAT_WAVE",
                "BRAVE_BIRD",
                "ROCK_SLIDE",
                "CLOSE_COMBAT"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "vullaby",
        "dexNumber": 629,
        "name": "Vullaby",
        "stats": {
            "atk": 105,
            "def": 139,
            "sta": 172
        },
        "types": [
            "dark",
            "flying"
        ],
        "family": {
            "id": "vullaby",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "BRAVE_BIRD",
                "FOUL_PLAY"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "mandibuzz",
        "dexNumber": 630,
        "name": "Mandibuzz",
        "stats": {
            "atk": 129,
            "def": 205,
            "sta": 242
        },
        "types": [
            "dark",
            "flying"
        ],
        "family": {
            "id": "vullaby",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "SNARL",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "AERIAL_ACE",
                "FOUL_PLAY",
                "SHADOW_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "heatmor",
        "dexNumber": 631,
        "name": "Heatmor",
        "stats": {
            "atk": 204,
            "def": 129,
            "sta": 198
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "heatmor",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "LICK",
                "FIRE_SPIN"
            ],
            "chargedMoves": [
                "FLAMETHROWER",
                "THUNDER_PUNCH",
                "POWER_UP_PUNCH"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "durant",
        "dexNumber": 632,
        "name": "Durant",
        "stats": {
            "atk": 217,
            "def": 188,
            "sta": 151
        },
        "types": [
            "bug",
            "steel"
        ],
        "family": {
            "id": "durant",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "METAL_CLAW"
            ],
            "chargedMoves": [
                "X_SCISSOR",
                "IRON_HEAD",
                "STONE_EDGE"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "deino",
        "dexNumber": 633,
        "name": "Deino",
        "stats": {
            "atk": 116,
            "def": 93,
            "sta": 141
        },
        "types": [
            "dark",
            "dragon"
        ],
        "family": {
            "id": "deino",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "DRAGON_BREATH"
            ],
            "chargedMoves": [
                "DRAGON_PULSE",
                "CRUNCH",
                "BODY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "zweilous",
        "dexNumber": 634,
        "name": "Zweilous",
        "stats": {
            "atk": 159,
            "def": 135,
            "sta": 176
        },
        "types": [
            "dark",
            "dragon"
        ],
        "family": {
            "id": "deino",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "DRAGON_BREATH"
            ],
            "chargedMoves": [
                "DRAGON_PULSE",
                "DARK_PULSE",
                "BODY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "hydreigon",
        "dexNumber": 635,
        "name": "Hydreigon",
        "stats": {
            "atk": 256,
            "def": 188,
            "sta": 211
        },
        "types": [
            "dark",
            "dragon"
        ],
        "family": {
            "id": "deino",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "DRAGON_BREATH"
            ],
            "chargedMoves": [
                "DRAGON_PULSE",
                "DARK_PULSE",
                "FLASH_CANNON"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "larvesta",
        "dexNumber": 636,
        "name": "Larvesta",
        "stats": {
            "atk": 156,
            "def": 107,
            "sta": 146
        },
        "types": [
            "bug",
            "fire"
        ],
        "family": {
            "id": "larvesta",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "BUG_BITE"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "BUG_BUZZ",
                "FLAME_WHEEL"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "volcarona",
        "dexNumber": 637,
        "name": "Volcarona",
        "stats": {
            "atk": 264,
            "def": 189,
            "sta": 198
        },
        "types": [
            "bug",
            "fire"
        ],
        "family": {
            "id": "larvesta",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FIRE_SPIN",
                "BUG_BITE"
            ],
            "chargedMoves": [
                "OVERHEAT",
                "BUG_BUZZ",
                "SOLAR_BEAM",
                "HURRICANE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "cobalion",
        "dexNumber": 638,
        "name": "Cobalion",
        "stats": {
            "atk": 192,
            "def": 229,
            "sta": 209
        },
        "types": [
            "steel",
            "fighting"
        ],
        "floor": 1,
        "family": {
            "id": "cobalion",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "IRON_HEAD",
                "STONE_EDGE",
                "SACRED_SWORD"
            ],
            "eliteMoves": [
                "SACRED_SWORD"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "terrakion",
        "dexNumber": 639,
        "name": "Terrakion",
        "stats": {
            "atk": 260,
            "def": 192,
            "sta": 209
        },
        "types": [
            "rock",
            "fighting"
        ],
        "floor": 1,
        "family": {
            "id": "terrakion",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SMACK_DOWN",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "EARTHQUAKE",
                "ROCK_SLIDE",
                "SACRED_SWORD"
            ],
            "eliteMoves": [
                "SACRED_SWORD"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "virizion",
        "dexNumber": 640,
        "name": "Virizion",
        "stats": {
            "atk": 192,
            "def": 229,
            "sta": 209
        },
        "types": [
            "grass",
            "fighting"
        ],
        "floor": 1,
        "family": {
            "id": "virizion",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "LEAF_BLADE",
                "STONE_EDGE",
                "SACRED_SWORD"
            ],
            "eliteMoves": [
                "SACRED_SWORD"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "tornadus_incarnate",
        "dexNumber": 641,
        "name": "Tornadus (Incarnate)",
        "stats": {
            "atk": 266,
            "def": 164,
            "sta": 188
        },
        "types": [
            "flying"
        ],
        "floor": 1,
        "family": {
            "id": "tornadus_incarnate",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "GRASS_KNOT",
                "DARK_PULSE",
                "HYPER_BEAM",
                "HURRICANE"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "tornadus_therian",
        "dexNumber": 641,
        "name": "Tornadus (Therian)",
        "stats": {
            "atk": 238,
            "def": 189,
            "sta": 188
        },
        "types": [
            "flying"
        ],
        "floor": 1,
        "family": {
            "id": "tornadus_therian",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "GUST"
            ],
            "chargedMoves": [
                "HEAT_WAVE",
                "PSYCHIC",
                "FOCUS_BLAST",
                "HURRICANE"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "thundurus_incarnate",
        "dexNumber": 642,
        "name": "Thundurus (Incarnate)",
        "stats": {
            "atk": 266,
            "def": 164,
            "sta": 188
        },
        "types": [
            "electric",
            "flying"
        ],
        "floor": 1,
        "family": {
            "id": "thundurus_incarnate",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "CRUNCH",
                "THUNDER",
                "BRICK_BREAK",
                "THUNDER_PUNCH"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "thundurus_therian",
        "dexNumber": 642,
        "name": "Thundurus (Therian)",
        "stats": {
            "atk": 295,
            "def": 161,
            "sta": 188
        },
        "types": [
            "electric",
            "flying"
        ],
        "floor": 1,
        "family": {
            "id": "thundurus_therian",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "SLUDGE_WAVE",
                "THUNDER",
                "FOCUS_BLAST",
                "THUNDERBOLT"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "reshiram",
        "dexNumber": 643,
        "name": "Reshiram",
        "stats": {
            "atk": 275,
            "def": 211,
            "sta": 205
        },
        "types": [
            "dragon",
            "fire"
        ],
        "floor": 1,
        "family": {
            "id": "reshiram",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "FIRE_FANG"
            ],
            "chargedMoves": [
                "CRUNCH",
                "OVERHEAT",
                "DRACO_METEOR",
                "STONE_EDGE"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "zekrom",
        "dexNumber": 644,
        "name": "Zekrom",
        "stats": {
            "atk": 275,
            "def": 211,
            "sta": 205
        },
        "types": [
            "dragon",
            "electric"
        ],
        "floor": 1,
        "family": {
            "id": "zekrom",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "CHARGE_BEAM"
            ],
            "chargedMoves": [
                "OUTRAGE",
                "WILD_CHARGE",
                "FLASH_CANNON",
                "CRUNCH"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "landorus_incarnate",
        "dexNumber": 645,
        "name": "Landorus (Incarnate)",
        "stats": {
            "atk": 261,
            "def": 182,
            "sta": 205
        },
        "types": [
            "ground",
            "flying"
        ],
        "floor": 1,
        "family": {
            "id": "landorus_incarnate",
            "stage": 1
        },
        "aliases": [
            "landoi"
        ],
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "EARTH_POWER",
                "OUTRAGE",
                "ROCK_SLIDE",
                "FOCUS_BLAST"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "landorus_therian",
        "dexNumber": 645,
        "name": "Landorus (Therian)",
        "stats": {
            "atk": 289,
            "def": 179,
            "sta": 205
        },
        "types": [
            "ground",
            "flying"
        ],
        "floor": 1,
        "family": {
            "id": "landorus_therian",
            "stage": 1
        },
        "aliases": [
            "landot"
        ],
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "EXTRASENSORY"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "STONE_EDGE",
                "SUPER_POWER",
                "BULLDOZE"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "kyurem",
        "dexNumber": 646,
        "name": "Kyurem",
        "stats": {
            "atk": 246,
            "def": 170,
            "sta": 245
        },
        "types": [
            "dragon",
            "ice"
        ],
        "floor": 1,
        "family": {
            "id": "kyurem",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "STEEL_WING"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "BLIZZARD",
                "DRACO_METEOR"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "kyurem_black",
        "dexNumber": 646,
        "name": "Kyurem (Black)",
        "stats": {
            "atk": 310,
            "def": 183,
            "sta": 245
        },
        "types": [
            "dragon",
            "ice"
        ],
        "floor": 1,
        "family": {
            "id": "kyurem",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "IRON_HEAD",
                "BLIZZARD",
                "STONE_EDGE",
                "OUTRAGE"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "kyurem_white",
        "dexNumber": 646,
        "name": "Kyurem (White)",
        "stats": {
            "atk": 310,
            "def": 183,
            "sta": 245
        },
        "types": [
            "dragon",
            "ice"
        ],
        "floor": 1,
        "family": {
            "id": "kyurem",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "STEEL_WING"
            ],
            "chargedMoves": [
                "DRAGON_PULSE",
                "BLIZZARD",
                "ANCIENT_POWER",
                "FOCUS_BLAST"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "keldeo_ordinary",
        "dexNumber": 647,
        "name": "Keldeo (Ordinary)",
        "stats": {
            "atk": 260,
            "def": 192,
            "sta": 209
        },
        "types": [
            "water",
            "fighting"
        ],
        "family": {
            "id": "keldeo_ordinary",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "LOW_KICK"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "CLOSE_COMBAT",
                "HYDRO_PUMP",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "keldeo_resolute",
        "dexNumber": 647,
        "name": "Keldeo (Resolute)",
        "stats": {
            "atk": 260,
            "def": 192,
            "sta": 209
        },
        "types": [
            "water",
            "fighting"
        ],
        "family": {
            "id": "keldeo_resolute",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "LOW_KICK"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "CLOSE_COMBAT",
                "HYDRO_PUMP",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "meloetta_aria",
        "dexNumber": 648,
        "name": "Meloetta (Aria)",
        "stats": {
            "atk": 250,
            "def": 225,
            "sta": 225
        },
        "types": [
            "normal",
            "psychic"
        ],
        "family": {
            "id": "meloetta_aria",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "CONFUSION"
            ],
            "chargedMoves": [
                "PSYSHOCK",
                "THUNDERBOLT",
                "DAZZLING_GLEAM",
                "HYPER_BEAM"
            ]
        },
        "tags": [
            "mythical",
            "untradeable"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "meloetta_pirouette",
        "dexNumber": 648,
        "name": "Meloetta (Pirouette)",
        "stats": {
            "atk": 269,
            "def": 188,
            "sta": 225
        },
        "types": [
            "normal",
            "fighting"
        ],
        "family": {
            "id": "meloetta_pirouette",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "LOW_KICK"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "FIRE_PUNCH",
                "ICE_PUNCH",
                "HYPER_BEAM"
            ]
        },
        "tags": [
            "mythical",
            "untradeable"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "genesect",
        "dexNumber": 649,
        "name": "Genesect",
        "stats": {
            "atk": 252,
            "def": 199,
            "sta": 174
        },
        "types": [
            "bug",
            "steel"
        ],
        "floor": 10,
        "family": {
            "id": "genesect",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "X_SCISSOR",
                "MAGNET_BOMB",
                "HYPER_BEAM"
            ]
        },
        "tags": [
            "mythical",
            "untradeable"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "chespin",
        "dexNumber": 650,
        "name": "Chespin",
        "stats": {
            "atk": 110,
            "def": 106,
            "sta": 148
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "chespin",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TAKE_DOWN",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "GYRO_BALL",
                "SEED_BOMB",
                "BODY_SLAM"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "quilladin",
        "dexNumber": 651,
        "name": "Quilladin",
        "stats": {
            "atk": 146,
            "def": 156,
            "sta": 156
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "chespin",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "GYRO_BALL",
                "ENERGY_BALL",
                "BODY_SLAM"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "chesnaught",
        "dexNumber": 652,
        "name": "Chesnaught",
        "stats": {
            "atk": 201,
            "def": 204,
            "sta": 204
        },
        "types": [
            "grass",
            "fighting"
        ],
        "family": {
            "id": "chespin",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "SMACK_DOWN",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "GYRO_BALL",
                "ENERGY_BALL",
                "SUPER_POWER",
                "SOLAR_BEAM"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "fennekin",
        "dexNumber": 653,
        "name": "Fennekin",
        "stats": {
            "atk": 116,
            "def": 102,
            "sta": 120
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "fennekin",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SCRATCH",
                "EMBER"
            ],
            "chargedMoves": [
                "PSYSHOCK",
                "FLAMETHROWER",
                "FLAME_CHARGE"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "braixen",
        "dexNumber": 654,
        "name": "Braixen",
        "stats": {
            "atk": 171,
            "def": 130,
            "sta": 153
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "fennekin",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "SCRATCH",
                "EMBER"
            ],
            "chargedMoves": [
                "PSYSHOCK",
                "FLAMETHROWER",
                "FLAME_CHARGE"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "delphox",
        "dexNumber": 655,
        "name": "Delphox",
        "stats": {
            "atk": 230,
            "def": 189,
            "sta": 181
        },
        "types": [
            "fire",
            "psychic"
        ],
        "family": {
            "id": "fennekin",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "SCRATCH",
                "FIRE_SPIN",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "PSYCHIC",
                "FLAMETHROWER",
                "FLAME_CHARGE",
                "FIRE_BLAST"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "froakie",
        "dexNumber": 656,
        "name": "Froakie",
        "stats": {
            "atk": 122,
            "def": 84,
            "sta": 121
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "froakie",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "BUBBLE"
            ],
            "chargedMoves": [
                "WATER_PULSE",
                "AERIAL_ACE",
                "SURF"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "frogadier",
        "dexNumber": 657,
        "name": "Frogadier",
        "stats": {
            "atk": 168,
            "def": 114,
            "sta": 144
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "froakie",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "BUBBLE"
            ],
            "chargedMoves": [
                "WATER_PULSE",
                "AERIAL_ACE",
                "SURF"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "greninja",
        "dexNumber": 658,
        "name": "Greninja",
        "stats": {
            "atk": 223,
            "def": 152,
            "sta": 176
        },
        "types": [
            "water",
            "dark"
        ],
        "family": {
            "id": "froakie",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "BUBBLE"
            ],
            "chargedMoves": [
                "NIGHT_SLASH",
                "AERIAL_ACE",
                "SURF",
                "HYDRO_PUMP"
            ]
        },
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "bunnelby",
        "dexNumber": 659,
        "name": "Bunnelby",
        "stats": {
            "atk": 68,
            "def": 72,
            "sta": 116
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "bunnelby",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "DIG",
                "BULLDOZE",
                "EARTHQUAKE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "diggersby",
        "dexNumber": 660,
        "name": "Diggersby",
        "stats": {
            "atk": 112,
            "def": 155,
            "sta": 198
        },
        "types": [
            "normal",
            "ground"
        ],
        "family": {
            "id": "bunnelby",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "DIG",
                "HYPER_BEAM",
                "EARTHQUAKE",
                "FIRE_PUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "fletchling",
        "dexNumber": 661,
        "name": "Fletchling",
        "stats": {
            "atk": 95,
            "def": 80,
            "sta": 128
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "fletchling",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "HEAT_WAVE",
                "SWIFT"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "fletchinder",
        "dexNumber": 662,
        "name": "Fletchinder",
        "stats": {
            "atk": 145,
            "def": 110,
            "sta": 158
        },
        "types": [
            "fire",
            "flying"
        ],
        "family": {
            "id": "fletchling",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "EMBER",
                "STEEL_WING"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "HEAT_WAVE",
                "FLAME_CHARGE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "talonflame",
        "dexNumber": 663,
        "name": "Talonflame",
        "stats": {
            "atk": 176,
            "def": 155,
            "sta": 186
        },
        "types": [
            "fire",
            "flying"
        ],
        "family": {
            "id": "fletchling",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "FIRE_SPIN",
                "STEEL_WING",
                "INCINERATE"
            ],
            "chargedMoves": [
                "BRAVE_BIRD",
                "FIRE_BLAST",
                "FLAME_CHARGE",
                "HURRICANE"
            ],
            "eliteMoves": [
                "INCINERATE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "scatterbug",
        "dexNumber": 664,
        "name": "Scatterbug",
        "stats": {
            "atk": 63,
            "def": 63,
            "sta": 116
        },
        "types": [
            "bug"
        ],
        "family": {
            "id": "scatterbug",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "spewpa",
        "dexNumber": 665,
        "name": "Spewpa",
        "stats": {
            "atk": 48,
            "def": 89,
            "sta": 128
        },
        "types": [
            "bug"
        ],
        "family": {
            "id": "scatterbug",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "vivillon",
        "dexNumber": 666,
        "name": "Vivillon",
        "stats": {
            "atk": 176,
            "def": 103,
            "sta": 190
        },
        "types": [
            "bug",
            "flying"
        ],
        "family": {
            "id": "scatterbug",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "GUST",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "AERIAL_ACE",
                "ENERGY_BALL",
                "HURRICANE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "litleo",
        "dexNumber": 667,
        "name": "Litleo",
        "stats": {
            "atk": 139,
            "def": 112,
            "sta": 158
        },
        "types": [
            "fire",
            "normal"
        ],
        "family": {
            "id": "litleo",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "FIRE_FANG",
                "TACKLE",
                "EMBER"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "FLAMETHROWER",
                "CRUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pyroar",
        "dexNumber": 668,
        "name": "Pyroar",
        "stats": {
            "atk": 221,
            "def": 149,
            "sta": 200
        },
        "types": [
            "fire",
            "normal"
        ],
        "family": {
            "id": "litleo",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "FIRE_FANG",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "SOLAR_BEAM",
                "DARK_PULSE",
                "OVERHEAT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "flabebe",
        "dexNumber": 669,
        "name": "Flabebe",
        "stats": {
            "atk": 108,
            "def": 120,
            "sta": 127
        },
        "types": [
            "fairy"
        ],
        "family": {
            "id": "flabebe",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "VINE_WHIP",
                "TACKLE"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "PETAL_BLIZZARD",
                "PSYCHIC"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "floette",
        "dexNumber": 670,
        "name": "Floette",
        "stats": {
            "atk": 136,
            "def": 151,
            "sta": 144
        },
        "types": [
            "fairy"
        ],
        "family": {
            "id": "flabebe",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "VINE_WHIP",
                "TACKLE"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "PETAL_BLIZZARD",
                "PSYCHIC"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "florges",
        "dexNumber": 671,
        "name": "Florges",
        "stats": {
            "atk": 212,
            "def": 244,
            "sta": 186
        },
        "types": [
            "fairy"
        ],
        "family": {
            "id": "flabebe",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "VINE_WHIP",
                "TACKLE",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "MOONBLAST",
                "PETAL_BLIZZARD",
                "PSYCHIC",
                "DISARMING_VOICE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "skiddo",
        "dexNumber": 672,
        "name": "Skiddo",
        "stats": {
            "atk": 123,
            "def": 102,
            "sta": 165
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "skiddo",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ZEN_HEADBUTT",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "ROCK_SLIDE",
                "SEED_BOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "gogoat",
        "dexNumber": 673,
        "name": "Gogoat",
        "stats": {
            "atk": 196,
            "def": 146,
            "sta": 265
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "skiddo",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ZEN_HEADBUTT",
                "ROCK_SMASH",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "ROCK_SLIDE",
                "LEAF_BLADE",
                "SEED_BOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "pancham",
        "dexNumber": 674,
        "name": "Pancham",
        "stats": {
            "atk": 145,
            "def": 107,
            "sta": 167
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "pancham",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "TACKLE"
            ],
            "chargedMoves": [
                "LOW_SWEEP",
                "CRUNCH",
                "BODY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "pangoro",
        "dexNumber": 675,
        "name": "Pangoro",
        "stats": {
            "atk": 226,
            "def": 146,
            "sta": 216
        },
        "types": [
            "fighting",
            "dark"
        ],
        "family": {
            "id": "pancham",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "SNARL",
                "BULLET_PUNCH"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "NIGHT_SLASH",
                "IRON_HEAD",
                "ROCK_SLIDE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "furfrou",
        "dexNumber": 676,
        "name": "Furfrou",
        "stats": {
            "atk": 164,
            "def": 167,
            "sta": 181
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "furfrou",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TAKE_DOWN",
                "BITE",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "SURF",
                "DARK_PULSE",
                "GRASS_KNOT"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "espurr",
        "dexNumber": 677,
        "name": "Espurr",
        "stats": {
            "atk": 120,
            "def": 114,
            "sta": 158
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "espurr",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "SCRATCH"
            ],
            "chargedMoves": [
                "PSYSHOCK",
                "ENERGY_BALL",
                "PSYCHIC"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "meowstic",
        "dexNumber": 678,
        "name": "Meowstic",
        "stats": {
            "atk": 166,
            "def": 167,
            "sta": 179
        },
        "types": [
            "steel"
        ],
        "family": {
            "id": "espurr",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "PSYCHIC",
                "ENERGY_BALL",
                "THUNDERBOLT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "honedge",
        "dexNumber": 679,
        "name": "Honedge",
        "stats": {
            "atk": 135,
            "def": 139,
            "sta": 128
        },
        "types": [
            "steel",
            "ghost"
        ],
        "family": {
            "id": "honedge",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "IRON_HEAD",
                "GYRO_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "doublade",
        "dexNumber": 680,
        "name": "Doublade",
        "stats": {
            "atk": 188,
            "def": 206,
            "sta": 153
        },
        "types": [
            "steel",
            "ghost"
        ],
        "family": {
            "id": "honedge",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "PSYCHO_CUT",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "IRON_HEAD",
                "GYRO_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "aegislash",
        "dexNumber": 681,
        "name": "Aegislash",
        "stats": {
            "atk": 97,
            "def": 291,
            "sta": 155
        },
        "types": [
            "steel",
            "ghost"
        ],
        "family": {
            "id": "honedge",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "PSYCHO_CUT",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "FLASH_CANNON",
                "GYRO_BALL",
                "SHADOW_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "spritzee",
        "dexNumber": 682,
        "name": "Spritzee",
        "stats": {
            "atk": 110,
            "def": 113,
            "sta": 186
        },
        "types": [
            "fairy"
        ],
        "family": {
            "id": "spritzee",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CHARM",
                "CHARGE_BEAM"
            ],
            "chargedMoves": [
                "DRAINING_KISS",
                "THUNDERBOLT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "aromatisse",
        "dexNumber": 683,
        "name": "Aromatisse",
        "stats": {
            "atk": 173,
            "def": 150,
            "sta": 226
        },
        "types": [
            "fairy"
        ],
        "family": {
            "id": "spritzee",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CHARM",
                "CHARGE_BEAM"
            ],
            "chargedMoves": [
                "MOONBLAST",
                "THUNDERBOLT",
                "PSYCHIC",
                "DRAINING_KISS"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "swirlix",
        "dexNumber": 684,
        "name": "Swirlix",
        "stats": {
            "atk": 109,
            "def": 119,
            "sta": 158
        },
        "types": [
            "fairy"
        ],
        "family": {
            "id": "swirlix",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE"
            ],
            "chargedMoves": [
                "DRAINING_KISS",
                "ENERGY_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "slurpuff",
        "dexNumber": 685,
        "name": "Slurpuff",
        "stats": {
            "atk": 168,
            "def": 163,
            "sta": 193
        },
        "types": [
            "fairy"
        ],
        "family": {
            "id": "swirlix",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "CHARM"
            ],
            "chargedMoves": [
                "PLAY_ROUGH",
                "ENERGY_BALL",
                "FLAMETHROWER",
                "DRAINING_KISS"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "inkay",
        "dexNumber": 686,
        "name": "Inkay",
        "stats": {
            "atk": 98,
            "def": 95,
            "sta": 142
        },
        "types": [
            "dark",
            "psychic"
        ],
        "family": {
            "id": "inkay",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "TACKLE"
            ],
            "chargedMoves": [
                "PSYBEAM",
                "NIGHT_SLASH"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "malamar",
        "dexNumber": 687,
        "name": "Malamar",
        "stats": {
            "atk": 177,
            "def": 165,
            "sta": 200
        },
        "types": [
            "dark",
            "psychic"
        ],
        "family": {
            "id": "inkay",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "PSYCHO_CUT"
            ],
            "chargedMoves": [
                "PSYBEAM",
                "FOUL_PLAY",
                "SUPER_POWER",
                "HYPER_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "binacle",
        "dexNumber": 688,
        "name": "Binacle",
        "stats": {
            "atk": 96,
            "def": 120,
            "sta": 123
        },
        "types": [
            "rock",
            "water"
        ],
        "family": {
            "id": "binacle",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SCRATCH",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "CROSS_CHOP",
                "DIG"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "barbaracle",
        "dexNumber": 689,
        "name": "Barbaracle",
        "stats": {
            "atk": 194,
            "def": 205,
            "sta": 176
        },
        "types": [
            "rock",
            "water"
        ],
        "family": {
            "id": "binacle",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "MUD_SLAP",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "SKULL_BASH",
                "CROSS_CHOP",
                "STONE_EDGE",
                "GRASS_KNOT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "skrelp",
        "dexNumber": 690,
        "name": "Skrelp",
        "stats": {
            "atk": 109,
            "def": 109,
            "sta": 137
        },
        "types": [
            "poison",
            "water"
        ],
        "family": {
            "id": "skrelp",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "ACID"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "WATER_PULSE",
                "TWISTER",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "dragalge",
        "dexNumber": 691,
        "name": "Dragalge",
        "stats": {
            "atk": 177,
            "def": 207,
            "sta": 163
        },
        "types": [
            "poison",
            "dragon"
        ],
        "family": {
            "id": "skrelp",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "ACID",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "HYDRO_PUMP",
                "AQUA_TAIL",
                "OUTRAGE",
                "GUNK_SHOT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "clauncher",
        "dexNumber": 692,
        "name": "Clauncher",
        "stats": {
            "atk": 108,
            "def": 117,
            "sta": 137
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "clauncher",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "SMACK_DOWN"
            ],
            "chargedMoves": [
                "WATER_PULSE",
                "CRABHAMMER",
                "AQUA_JET"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "clawitzer",
        "dexNumber": 693,
        "name": "Clawitzer",
        "stats": {
            "atk": 221,
            "def": 171,
            "sta": 174
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "clauncher",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "SMACK_DOWN"
            ],
            "chargedMoves": [
                "WATER_PULSE",
                "DARK_PULSE",
                "ICE_BEAM",
                "CRABHAMMER"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "helioptile",
        "dexNumber": 694,
        "name": "Helioptile",
        "stats": {
            "atk": 115,
            "def": 78,
            "sta": 127
        },
        "types": [
            "electric",
            "normal"
        ],
        "family": {
            "id": "helioptile",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "PARABOLIC_CHARGE",
                "BULLDOZE",
                "THUNDERBOLT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "heliolisk",
        "dexNumber": 695,
        "name": "Heliolisk",
        "stats": {
            "atk": 219,
            "def": 168,
            "sta": 158
        },
        "types": [
            "electric",
            "normal"
        ],
        "family": {
            "id": "helioptile",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "VOLT_SWITCH",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "PARABOLIC_CHARGE",
                "BULLDOZE",
                "THUNDERBOLT",
                "GRASS_KNOT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "tyrunt",
        "dexNumber": 696,
        "name": "Tyrunt",
        "stats": {
            "atk": 158,
            "def": 123,
            "sta": 151
        },
        "types": [
            "rock",
            "dragon"
        ],
        "family": {
            "id": "tyrunt",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "TACKLE"
            ],
            "chargedMoves": [
                "STOMP",
                "ANCIENT_POWER",
                "DRAGON_CLAW"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "tyrantrum",
        "dexNumber": 697,
        "name": "Tyrantrum",
        "stats": {
            "atk": 227,
            "def": 191,
            "sta": 193
        },
        "types": [
            "rock",
            "dragon"
        ],
        "family": {
            "id": "tyrunt",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "CHARM",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "CRUNCH",
                "STONE_EDGE",
                "OUTRAGE",
                "EARTHQUAKE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "amaura",
        "dexNumber": 698,
        "name": "Amaura",
        "stats": {
            "atk": 124,
            "def": 109,
            "sta": 184
        },
        "types": [
            "rock",
            "ice"
        ],
        "family": {
            "id": "amaura",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POWDER_SNOW",
                "FROST_BREATH"
            ],
            "chargedMoves": [
                "WEATHER_BALL_ICE",
                "ANCIENT_POWER",
                "AURORA_BEAM",
                "THUNDERBOLT"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "aurorus",
        "dexNumber": 699,
        "name": "Aurorus",
        "stats": {
            "atk": 186,
            "def": 163,
            "sta": 265
        },
        "types": [
            "rock",
            "ice"
        ],
        "family": {
            "id": "amaura",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "POWDER_SNOW",
                "FROST_BREATH",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "WEATHER_BALL_ICE",
                "ANCIENT_POWER",
                "BLIZZARD",
                "THUNDERBOLT",
                "HYPER_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "sylveon",
        "dexNumber": 700,
        "name": "Sylveon",
        "stats": {
            "atk": 203,
            "def": 205,
            "sta": 216
        },
        "types": [
            "fairy"
        ],
        "family": {
            "id": "eevee",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CHARM",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "MOONBLAST",
                "DAZZLING_GLEAM",
                "DRAINING_KISS",
                "LAST_RESORT",
                "PSYSHOCK"
            ],
            "eliteMoves": [
                "LAST_RESORT",
                "PSYSHOCK"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "hawlucha",
        "dexNumber": 701,
        "name": "Hawlucha",
        "stats": {
            "atk": 195,
            "def": 153,
            "sta": 186
        },
        "types": [
            "fighting",
            "flying"
        ],
        "family": {
            "id": "hawlucha",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "WING_ATTACK",
                "LOW_KICK",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "FLYING_PRESS",
                "SKY_ATTACK",
                "X_SCISSOR",
                "POWER_UP_PUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "dedenne",
        "dexNumber": 702,
        "name": "Dedenne",
        "stats": {
            "atk": 164,
            "def": 134,
            "sta": 167
        },
        "types": [
            "electric",
            "fairy"
        ],
        "family": {
            "id": "dedenne",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "PLAY_ROUGH"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "carbink",
        "dexNumber": 703,
        "name": "Carbink",
        "stats": {
            "atk": 95,
            "def": 285,
            "sta": 137
        },
        "types": [
            "rock",
            "fairy"
        ],
        "family": {
            "id": "carbink",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "ROCK_SLIDE",
                "MOONBLAST",
                "POWER_GEM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "goomy",
        "dexNumber": 704,
        "name": "Goomy",
        "stats": {
            "atk": 101,
            "def": 112,
            "sta": 128
        },
        "types": [
            "dragon"
        ],
        "family": {
            "id": "goomy",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "TACKLE"
            ],
            "chargedMoves": [
                "DRAGON_PULSE",
                "SLUDGE_WAVE",
                "MUDDY_WATER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "sliggoo",
        "dexNumber": 705,
        "name": "Sliggoo",
        "stats": {
            "atk": 159,
            "def": 176,
            "sta": 169
        },
        "types": [
            "dragon"
        ],
        "family": {
            "id": "goomy",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "TACKLE"
            ],
            "chargedMoves": [
                "DRAGON_PULSE",
                "SLUDGE_WAVE",
                "MUDDY_WATER",
                "WATER_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "goodra",
        "dexNumber": 706,
        "name": "Goodra",
        "stats": {
            "atk": 220,
            "def": 242,
            "sta": 207
        },
        "types": [
            "dragon"
        ],
        "family": {
            "id": "goomy",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "DRAGON_BREATH"
            ],
            "chargedMoves": [
                "DRACO_METEOR",
                "SLUDGE_WAVE",
                "MUDDY_WATER",
                "POWER_WHIP"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "klefki",
        "dexNumber": 707,
        "name": "Klefki",
        "stats": {
            "atk": 160,
            "def": 179,
            "sta": 149
        },
        "types": [
            "steel",
            "fairy"
        ],
        "family": {
            "id": "klefki",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "TACKLE"
            ],
            "chargedMoves": [
                "FLASH_CANNON",
                "PLAY_ROUGH",
                "DRAINING_KISS",
                "FOUL_PLAY"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "phantump",
        "dexNumber": 708,
        "name": "Phantump",
        "stats": {
            "atk": 125,
            "def": 103,
            "sta": 125
        },
        "types": [
            "ghost",
            "grass"
        ],
        "family": {
            "id": "phantump",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "TACKLE"
            ],
            "chargedMoves": [
                "SEED_BOMB",
                "SHADOW_BALL",
                "FOUL_PLAY"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "trevenant",
        "dexNumber": 709,
        "name": "Trevenant",
        "stats": {
            "atk": 201,
            "def": 154,
            "sta": 198
        },
        "types": [
            "ghost",
            "grass"
        ],
        "family": {
            "id": "phantump",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "SHADOW_CLAW",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "SEED_BOMB",
                "SHADOW_BALL",
                "FOUL_PLAY"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "pumpkaboo_small",
        "dexNumber": 710,
        "name": "Pumpkaboo (Small)",
        "stats": {
            "atk": 122,
            "def": 124,
            "sta": 127
        },
        "types": [
            "ghost",
            "grass"
        ],
        "family": {
            "id": "pumpkaboo_small",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "GRASS_KNOT",
                "SHADOW_SNEAK",
                "FOUL_PLAY"
            ]
        },
        "tags": [
            "teambuilderexclude"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "pumpkaboo_average",
        "dexNumber": 710,
        "name": "Pumpkaboo (Average)",
        "stats": {
            "atk": 121,
            "def": 123,
            "sta": 135
        },
        "types": [
            "ghost",
            "grass"
        ],
        "family": {
            "id": "pumpkaboo_average",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "GRASS_KNOT",
                "SHADOW_SNEAK",
                "FOUL_PLAY"
            ]
        },
        "tags": [
            "teambuilderexclude"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "pumpkaboo_large",
        "dexNumber": 710,
        "name": "Pumpkaboo (Large)",
        "stats": {
            "atk": 120,
            "def": 122,
            "sta": 144
        },
        "types": [
            "ghost",
            "grass"
        ],
        "family": {
            "id": "pumpkaboo_large",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "GRASS_KNOT",
                "SHADOW_SNEAK",
                "FOUL_PLAY"
            ]
        },
        "tags": [
            "teambuilderexclude"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "pumpkaboo_super",
        "dexNumber": 710,
        "name": "Pumpkaboo (Super)",
        "stats": {
            "atk": 118,
            "def": 120,
            "sta": 153
        },
        "types": [
            "ghost",
            "grass"
        ],
        "family": {
            "id": "pumpkaboo_super",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "GRASS_KNOT",
                "SHADOW_SNEAK",
                "FOUL_PLAY"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "gourgeist_small",
        "dexNumber": 711,
        "name": "Gourgeist (Small)",
        "stats": {
            "atk": 171,
            "def": 219,
            "sta": 146
        },
        "types": [
            "ghost",
            "grass"
        ],
        "family": {
            "id": "pumpkaboo_small",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "HEX",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "SEED_BOMB",
                "SHADOW_BALL",
                "FOUL_PLAY",
                "FIRE_BLAST"
            ]
        },
        "tags": [
            "teambuilderexclude"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "gourgeist_average",
        "dexNumber": 711,
        "name": "Gourgeist (Average)",
        "stats": {
            "atk": 175,
            "def": 213,
            "sta": 163
        },
        "types": [
            "ghost",
            "grass"
        ],
        "family": {
            "id": "pumpkaboo_average",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "HEX",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "SEED_BOMB",
                "SHADOW_BALL",
                "FOUL_PLAY",
                "FIRE_BLAST"
            ]
        },
        "tags": [
            "teambuilderexclude"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "gourgeist_large",
        "dexNumber": 711,
        "name": "Gourgeist (Large)",
        "stats": {
            "atk": 179,
            "def": 206,
            "sta": 181
        },
        "types": [
            "ghost",
            "grass"
        ],
        "family": {
            "id": "pumpkaboo_large",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "HEX",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "SEED_BOMB",
                "SHADOW_BALL",
                "FOUL_PLAY",
                "FIRE_BLAST"
            ]
        },
        "tags": [
            "teambuilderexclude"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "gourgeist_super",
        "dexNumber": 711,
        "name": "Gourgeist (Super)",
        "stats": {
            "atk": 182,
            "def": 200,
            "sta": 198
        },
        "types": [
            "ghost",
            "grass"
        ],
        "family": {
            "id": "pumpkaboo_super",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "HEX",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "SEED_BOMB",
                "SHADOW_BALL",
                "FOUL_PLAY",
                "FIRE_BLAST"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "bergmite",
        "dexNumber": 712,
        "name": "Bergmite",
        "stats": {
            "atk": 117,
            "def": 120,
            "sta": 146
        },
        "types": [
            "ice"
        ],
        "family": {
            "id": "bergmite",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "CRUNCH",
                "ICY_WIND"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "avalugg",
        "dexNumber": 713,
        "name": "Avalugg",
        "stats": {
            "atk": 196,
            "def": 240,
            "sta": 216
        },
        "types": [
            "ice"
        ],
        "family": {
            "id": "bergmite",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "ICE_FANG"
            ],
            "chargedMoves": [
                "CRUNCH",
                "AVALANCHE",
                "EARTHQUAKE",
                "BODY_SLAM",
                "MIRROR_COAT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "noibat",
        "dexNumber": 714,
        "name": "Noibat",
        "stats": {
            "atk": 83,
            "def": 73,
            "sta": 120
        },
        "types": [
            "flying",
            "dragon"
        ],
        "family": {
            "id": "noibat",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "WING_ATTACK",
                "BITE"
            ],
            "chargedMoves": [
                "DRAGON_PULSE",
                "AIR_CUTTER",
                "HEAT_WAVE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "noivern",
        "dexNumber": 715,
        "name": "Noivern",
        "stats": {
            "atk": 205,
            "def": 175,
            "sta": 198
        },
        "types": [
            "flying",
            "dragon"
        ],
        "family": {
            "id": "noibat",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "BITE"
            ],
            "chargedMoves": [
                "DRACO_METEOR",
                "HURRICANE",
                "HEAT_WAVE",
                "PSYCHIC"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "xerneas",
        "dexNumber": 716,
        "name": "Xerneas",
        "stats": {
            "atk": 250,
            "def": 185,
            "sta": 246
        },
        "types": [
            "fairy"
        ],
        "floor": 1,
        "family": {
            "id": "xerneas",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "MOONBLAST",
                "MEGAHORN",
                "CLOSE_COMBAT",
                "GIGA_IMPACT",
                "THUNDER"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "yveltal",
        "dexNumber": 717,
        "name": "Yveltal",
        "stats": {
            "atk": 250,
            "def": 185,
            "sta": 246
        },
        "types": [
            "dark",
            "flying"
        ],
        "floor": 1,
        "family": {
            "id": "yveltal",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SUCKER_PUNCH",
                "SNARL",
                "GUST"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "HURRICANE",
                "FOCUS_BLAST",
                "HYPER_BEAM",
                "PSYCHIC"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "diancie",
        "dexNumber": 719,
        "name": "Diancie",
        "stats": {
            "atk": 190,
            "def": 285,
            "sta": 137
        },
        "types": [
            "rock",
            "fairy"
        ],
        "floor": 10,
        "family": {
            "id": "diancie",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "ROCK_SLIDE",
                "MOONBLAST",
                "POWER_GEM"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "hoopa_confined",
        "dexNumber": 720,
        "name": "Hoopa (Confined)",
        "stats": {
            "atk": 261,
            "def": 187,
            "sta": 173
        },
        "types": [
            "psychic",
            "ghost"
        ],
        "family": {
            "id": "hoopa",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "ASTONISH"
            ],
            "chargedMoves": [
                "SHADOW_BALL",
                "PSYBEAM",
                "PSYCHIC"
            ]
        },
        "tags": [
            "mythical"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "hoopa_unbound",
        "dexNumber": 720,
        "name": "Hoopa (Unbound)",
        "stats": {
            "atk": 311,
            "def": 191,
            "sta": 239
        },
        "types": [
            "psychic",
            "dark"
        ],
        "family": {
            "id": "hoopa",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "ASTONISH"
            ],
            "chargedMoves": [
                "SHADOW_BALL",
                "DARK_PULSE",
                "PSYCHIC"
            ]
        },
        "tags": [
            "mythical",
            "untradeable"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "volcanion",
        "dexNumber": 721,
        "name": "Volcanion",
        "stats": {
            "atk": 252,
            "def": 216,
            "sta": 190
        },
        "types": [
            "fire",
            "water"
        ],
        "family": {
            "id": "volcanion",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "INCINERATE",
                "WATER_GUN",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "HYDRO_PUMP",
                "OVERHEAT",
                "EARTH_POWER",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "rowlet",
        "dexNumber": 722,
        "name": "Rowlet",
        "stats": {
            "atk": 102,
            "def": 99,
            "sta": 169
        },
        "types": [
            "grass",
            "flying"
        ],
        "family": {
            "id": "rowlet",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "SEED_BOMB",
                "ENERGY_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "dartrix",
        "dexNumber": 723,
        "name": "Dartrix",
        "stats": {
            "atk": 142,
            "def": 139,
            "sta": 186
        },
        "types": [
            "grass",
            "flying"
        ],
        "family": {
            "id": "rowlet",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "SEED_BOMB",
                "ENERGY_BALL",
                "BRAVE_BIRD"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "decidueye",
        "dexNumber": 724,
        "name": "Decidueye",
        "stats": {
            "atk": 210,
            "def": 179,
            "sta": 186
        },
        "types": [
            "grass",
            "ghost"
        ],
        "family": {
            "id": "rowlet",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "SHADOW_SNEAK",
                "ENERGY_BALL",
                "BRAVE_BIRD"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "litten",
        "dexNumber": 725,
        "name": "Litten",
        "stats": {
            "atk": 128,
            "def": 79,
            "sta": 128
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "litten",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SCRATCH",
                "EMBER"
            ],
            "chargedMoves": [
                "FLAMETHROWER",
                "FLAME_CHARGE",
                "CRUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "torracat",
        "dexNumber": 726,
        "name": "Torracat",
        "stats": {
            "atk": 174,
            "def": 103,
            "sta": 163
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "litten",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "EMBER"
            ],
            "chargedMoves": [
                "FLAMETHROWER",
                "FLAME_CHARGE",
                "CRUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "incineroar",
        "dexNumber": 727,
        "name": "Incineroar",
        "stats": {
            "atk": 214,
            "def": 175,
            "sta": 216
        },
        "types": [
            "fire",
            "dark"
        ],
        "family": {
            "id": "litten",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "SNARL",
                "FIRE_FANG"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "FLAME_CHARGE",
                "DARK_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "popplio",
        "dexNumber": 728,
        "name": "Popplio",
        "stats": {
            "atk": 120,
            "def": 103,
            "sta": 137
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "popplio",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "WATER_PULSE",
                "AQUA_TAIL"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "brionne",
        "dexNumber": 729,
        "name": "Brionne",
        "stats": {
            "atk": 168,
            "def": 145,
            "sta": 155
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "popplio",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CHARM",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "WATER_PULSE",
                "DISARMING_VOICE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "primarina",
        "dexNumber": 730,
        "name": "Primarina",
        "stats": {
            "atk": 232,
            "def": 195,
            "sta": 190
        },
        "types": [
            "water",
            "fairy"
        ],
        "family": {
            "id": "popplio",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "CHARM",
                "WATERFALL"
            ],
            "chargedMoves": [
                "PSYCHIC",
                "HYDRO_PUMP",
                "MOONBLAST"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pikipek",
        "dexNumber": 731,
        "name": "Pikipek",
        "stats": {
            "atk": 136,
            "def": 59,
            "sta": 111
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "pikipek",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "DRILL_PECK",
                "AERIAL_ACE",
                "SKY_ATTACK"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "trumbeak",
        "dexNumber": 732,
        "name": "Trumbeak",
        "stats": {
            "atk": 159,
            "def": 100,
            "sta": 146
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "pikipek",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "DRILL_PECK",
                "ROCK_BLAST",
                "SKY_ATTACK"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "toucannon",
        "dexNumber": 733,
        "name": "Toucannon",
        "stats": {
            "atk": 222,
            "def": 146,
            "sta": 190
        },
        "types": [
            "normal",
            "flying"
        ],
        "family": {
            "id": "pikipek",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "ROCK_SMASH",
                "BULLET_SEED"
            ],
            "chargedMoves": [
                "DRILL_PECK",
                "ROCK_BLAST",
                "FLASH_CANNON"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "yungoos",
        "dexNumber": 734,
        "name": "Yungoos",
        "stats": {
            "atk": 122,
            "def": 56,
            "sta": 134
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "yungoos",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "BITE"
            ],
            "chargedMoves": [
                "HYPER_FANG",
                "CRUNCH",
                "ROCK_TOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "gumshoos",
        "dexNumber": 735,
        "name": "Gumshoos",
        "stats": {
            "atk": 194,
            "def": 113,
            "sta": 204
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "yungoos",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "TAKE_DOWN",
                "BITE"
            ],
            "chargedMoves": [
                "HYPER_FANG",
                "CRUNCH",
                "ROCK_TOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "grubbin",
        "dexNumber": 736,
        "name": "Grubbin",
        "stats": {
            "atk": 115,
            "def": 85,
            "sta": 132
        },
        "types": [
            "bug"
        ],
        "family": {
            "id": "grubbin",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "charjabug",
        "dexNumber": 737,
        "name": "Charjabug",
        "stats": {
            "atk": 145,
            "def": 161,
            "sta": 149
        },
        "types": [
            "bug",
            "electric"
        ],
        "family": {
            "id": "grubbin",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "vikavolt",
        "dexNumber": 738,
        "name": "Vikavolt",
        "stats": {
            "atk": 254,
            "def": 158,
            "sta": 184
        },
        "types": [
            "bug",
            "electric"
        ],
        "family": {
            "id": "grubbin",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "crabrawler",
        "dexNumber": 739,
        "name": "Crabrawler",
        "stats": {
            "atk": 150,
            "def": 104,
            "sta": 132
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "crabrawler",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "crabominable",
        "dexNumber": 740,
        "name": "Crabominable",
        "stats": {
            "atk": 231,
            "def": 138,
            "sta": 219
        },
        "types": [
            "fighting",
            "ice"
        ],
        "family": {
            "id": "crabrawler",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "oricorio_baile",
        "dexNumber": 741,
        "name": "Oricorio (Baile)",
        "stats": {
            "atk": 196,
            "def": 145,
            "sta": 181
        },
        "types": [
            "fire",
            "flying"
        ],
        "family": {
            "id": "oricorio",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "AIR_CUTTER",
                "HURRICANE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "oricorio_pau",
        "dexNumber": 741,
        "name": "Oricorio (Pa'u)",
        "stats": {
            "atk": 196,
            "def": 145,
            "sta": 181
        },
        "types": [
            "psychic",
            "flying"
        ],
        "family": {
            "id": "oricorio",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "AIR_CUTTER",
                "HURRICANE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "oricorio_pom_pom",
        "dexNumber": 741,
        "name": "Oricorio (Pom-Pom)",
        "stats": {
            "atk": 196,
            "def": 145,
            "sta": 181
        },
        "types": [
            "electric",
            "flying"
        ],
        "family": {
            "id": "oricorio",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "AIR_CUTTER",
                "HURRICANE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "oricorio_sensu",
        "dexNumber": 741,
        "name": "Oricorio (Sensu)",
        "stats": {
            "atk": 196,
            "def": 145,
            "sta": 181
        },
        "types": [
            "ghost",
            "flying"
        ],
        "family": {
            "id": "oricorio",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "AIR_CUTTER",
                "HURRICANE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "cutiefly",
        "dexNumber": 742,
        "name": "Cutiefly",
        "stats": {
            "atk": 110,
            "def": 81,
            "sta": 120
        },
        "types": [
            "bug",
            "fairy"
        ],
        "family": {
            "id": "cutiefly",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "ribombee",
        "dexNumber": 743,
        "name": "Ribombee",
        "stats": {
            "atk": 198,
            "def": 146,
            "sta": 155
        },
        "types": [
            "bug",
            "fairy"
        ],
        "family": {
            "id": "cutiefly",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "rockruff",
        "dexNumber": 744,
        "name": "Rockruff",
        "stats": {
            "atk": 117,
            "def": 78,
            "sta": 128
        },
        "types": [
            "rock"
        ],
        "family": {
            "id": "rockruff",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "STONE_EDGE",
                "ROCK_TOMB",
                "CRUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "lycanroc_dusk",
        "dexNumber": 745,
        "name": "Lycanroc (Dusk)",
        "stats": {
            "atk": 234,
            "def": 139,
            "sta": 181
        },
        "types": [
            "rock"
        ],
        "family": {
            "id": "rockruff",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "lycanroc_midday",
        "dexNumber": 745,
        "name": "Lycanroc (Midday)",
        "stats": {
            "atk": 231,
            "def": 140,
            "sta": 181
        },
        "types": [
            "rock"
        ],
        "family": {
            "id": "rockruff",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "SUCKER_PUNCH",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "STONE_EDGE",
                "DRILL_RUN",
                "CRUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "lycanroc_midnight",
        "dexNumber": 745,
        "name": "Lycanroc (Midnight)",
        "stats": {
            "atk": 218,
            "def": 152,
            "sta": 198
        },
        "types": [
            "rock"
        ],
        "family": {
            "id": "rockruff",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "COUNTER",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "STONE_EDGE",
                "PSYCHIC_FANGS",
                "CRUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "wishiwashi",
        "dexNumber": 746,
        "name": "Wishiwashi",
        "stats": {
            "atk": 46,
            "def": 43,
            "sta": 128
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "wishiwashi",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "wishiwashi_school",
        "dexNumber": 746,
        "name": "Wishiwashi (School)",
        "stats": {
            "atk": 255,
            "def": 242,
            "sta": 128
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "wishiwashi",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "mareanie",
        "dexNumber": 747,
        "name": "Mareanie",
        "stats": {
            "atk": 98,
            "def": 110,
            "sta": 137
        },
        "types": [
            "poison",
            "water"
        ],
        "family": {
            "id": "mareanie",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "toxapex",
        "dexNumber": 748,
        "name": "Toxapex",
        "stats": {
            "atk": 114,
            "def": 273,
            "sta": 137
        },
        "types": [
            "poison",
            "water"
        ],
        "family": {
            "id": "mareanie",
            "stage": 2
        },
        "aliases": [
            "pex"
        ],
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "mudbray",
        "dexNumber": 749,
        "name": "Mudbray",
        "stats": {
            "atk": 175,
            "def": 121,
            "sta": 172
        },
        "types": [
            "ground"
        ],
        "family": {
            "id": "mudbray",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "mudsdale",
        "dexNumber": 750,
        "name": "Mudsdale",
        "stats": {
            "atk": 214,
            "def": 174,
            "sta": 225
        },
        "types": [
            "ground"
        ],
        "family": {
            "id": "mudbray",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "dewpider",
        "dexNumber": 751,
        "name": "Dewpider",
        "stats": {
            "atk": 72,
            "def": 117,
            "sta": 116
        },
        "types": [
            "water",
            "bug"
        ],
        "family": {
            "id": "dewpider",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "INFESTATION",
                "BUG_BITE"
            ],
            "chargedMoves": [
                "WATER_PULSE",
                "BUBBLE_BEAM",
                "MIRROR_COAT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "araquanid",
        "dexNumber": 752,
        "name": "Araquanid",
        "stats": {
            "atk": 126,
            "def": 219,
            "sta": 169
        },
        "types": [
            "water",
            "bug"
        ],
        "family": {
            "id": "dewpider",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "INFESTATION",
                "BUG_BITE"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "BUBBLE_BEAM",
                "MIRROR_COAT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "fomantis",
        "dexNumber": 753,
        "name": "Fomantis",
        "stats": {
            "atk": 100,
            "def": 64,
            "sta": 120
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "fomantis",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "LEAF_BLADE",
                "ENERGY_BALL",
                "GRASS_KNOT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "lurantis",
        "dexNumber": 754,
        "name": "Lurantis",
        "stats": {
            "atk": 192,
            "def": 169,
            "sta": 172
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "fomantis",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "LEAF_BLADE",
                "LEAF_STORM",
                "SUPER_POWER",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "morelull",
        "dexNumber": 755,
        "name": "Morelull",
        "stats": {
            "atk": 108,
            "def": 119,
            "sta": 120
        },
        "types": [
            "grass",
            "fairy"
        ],
        "family": {
            "id": "morelull",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "shiinotic",
        "dexNumber": 756,
        "name": "Shiinotic",
        "stats": {
            "atk": 154,
            "def": 168,
            "sta": 155
        },
        "types": [
            "grass",
            "fairy"
        ],
        "family": {
            "id": "morelull",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "salandit",
        "dexNumber": 757,
        "name": "Salandit",
        "stats": {
            "atk": 136,
            "def": 80,
            "sta": 134
        },
        "types": [
            "poison",
            "fire"
        ],
        "family": {
            "id": "salandit",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "EMBER",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "POISON_FANG",
                "FLAMETHROWER",
                "DRAGON_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "salazzle",
        "dexNumber": 758,
        "name": "Salazzle",
        "stats": {
            "atk": 228,
            "def": 130,
            "sta": 169
        },
        "types": [
            "poison",
            "fire"
        ],
        "family": {
            "id": "salandit",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "INCINERATE",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "POISON_FANG",
                "FIRE_BLAST",
                "DRAGON_PULSE",
                "SLUDGE_WAVE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "stufful",
        "dexNumber": 759,
        "name": "Stufful",
        "stats": {
            "atk": 136,
            "def": 95,
            "sta": 172
        },
        "types": [
            "normal",
            "fighting"
        ],
        "family": {
            "id": "stufful",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "SUPER_POWER",
                "BRICK_BREAK",
                "STOMP"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "bewear",
        "dexNumber": 760,
        "name": "Bewear",
        "stats": {
            "atk": 226,
            "def": 141,
            "sta": 260
        },
        "types": [
            "normal",
            "fighting"
        ],
        "family": {
            "id": "stufful",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "LOW_KICK",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "SUPER_POWER",
                "PAYBACK",
                "STOMP",
                "DRAIN_PUNCH"
            ],
            "eliteMoves": [
                "DRAIN_PUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "bounsweet",
        "dexNumber": 761,
        "name": "Bounsweet",
        "stats": {
            "atk": 55,
            "def": 69,
            "sta": 123
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "bounsweet",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "steenee",
        "dexNumber": 762,
        "name": "Steenee",
        "stats": {
            "atk": 78,
            "def": 94,
            "sta": 141
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "bounsweet",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "tsareena",
        "dexNumber": 763,
        "name": "Tsareena",
        "stats": {
            "atk": 222,
            "def": 195,
            "sta": 176
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "bounsweet",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "comfey",
        "dexNumber": 764,
        "name": "Comfey",
        "stats": {
            "atk": 165,
            "def": 215,
            "sta": 139
        },
        "types": [
            "fairy"
        ],
        "family": {
            "id": "comfey",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "VINE_WHIP",
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER"
            ],
            "chargedMoves": [
                "PETAL_BLIZZARD",
                "GRASS_KNOT",
                "DRAINING_KISS"
            ]
        },
        "tags": [
            "regional"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "oranguru",
        "dexNumber": 765,
        "name": "Oranguru",
        "stats": {
            "atk": 168,
            "def": 192,
            "sta": 207
        },
        "types": [
            "normal",
            "psychic"
        ],
        "family": {
            "id": "oranguru",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "ZEN_HEADBUTT",
                "YAWN"
            ],
            "chargedMoves": [
                "PSYCHIC",
                "FOUL_PLAY",
                "FUTURE_SIGHT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "passimian",
        "dexNumber": 766,
        "name": "Passimian",
        "stats": {
            "atk": 222,
            "def": 160,
            "sta": 225
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "passimian",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "wimpod",
        "dexNumber": 767,
        "name": "Wimpod",
        "stats": {
            "atk": 67,
            "def": 74,
            "sta": 93
        },
        "types": [
            "bug",
            "water"
        ],
        "family": {
            "id": "wimpod",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "golisopod",
        "dexNumber": 768,
        "name": "Golisopod",
        "stats": {
            "atk": 218,
            "def": 226,
            "sta": 181
        },
        "types": [
            "bug",
            "water"
        ],
        "family": {
            "id": "wimpod",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "sandygast",
        "dexNumber": 769,
        "name": "Sandygast",
        "stats": {
            "atk": 120,
            "def": 118,
            "sta": 146
        },
        "types": [
            "ghost",
            "ground"
        ],
        "family": {
            "id": "sandygast",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "palossand",
        "dexNumber": 770,
        "name": "Palossand",
        "stats": {
            "atk": 178,
            "def": 178,
            "sta": 198
        },
        "types": [
            "ghost",
            "ground"
        ],
        "family": {
            "id": "sandygast",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "pyukumuku",
        "dexNumber": 771,
        "name": "Pyukumuku",
        "stats": {
            "atk": 97,
            "def": 224,
            "sta": 146
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "pyukumuku",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "type_null",
        "dexNumber": 772,
        "name": "Type (Null)",
        "stats": {
            "atk": 184,
            "def": 184,
            "sta": 216
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "type_null",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "silvally",
        "dexNumber": 773,
        "name": "Silvally",
        "stats": {
            "atk": 198,
            "def": 198,
            "sta": 216
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "type_null",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "minior_core",
        "dexNumber": 774,
        "name": "Minior (Core)",
        "stats": {
            "atk": 218,
            "def": 131,
            "sta": 155
        },
        "types": [
            "rock",
            "flying"
        ],
        "family": {
            "id": "minior",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "minior_meteor",
        "dexNumber": 774,
        "name": "Minior (Meteor)",
        "stats": {
            "atk": 116,
            "def": 194,
            "sta": 155
        },
        "types": [
            "rock",
            "flying"
        ],
        "family": {
            "id": "minior",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "komala",
        "dexNumber": 775,
        "name": "Komala",
        "stats": {
            "atk": 216,
            "def": 165,
            "sta": 163
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "komala",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "turtonator",
        "dexNumber": 776,
        "name": "Turtonator",
        "stats": {
            "atk": 165,
            "def": 215,
            "sta": 155
        },
        "types": [
            "fire",
            "dragon"
        ],
        "family": {
            "id": "turtonator",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "togedemaru",
        "dexNumber": 777,
        "name": "Togedemaru",
        "stats": {
            "atk": 190,
            "def": 145,
            "sta": 163
        },
        "types": [
            "electric",
            "steel"
        ],
        "family": {
            "id": "togedemaru",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "mimikyu",
        "dexNumber": 778,
        "name": "Mimikyu",
        "stats": {
            "atk": 177,
            "def": 199,
            "sta": 146
        },
        "types": [
            "ghost",
            "fairy"
        ],
        "family": {
            "id": "mimikyu",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "bruxish",
        "dexNumber": 779,
        "name": "Bruxish",
        "stats": {
            "atk": 208,
            "def": 145,
            "sta": 169
        },
        "types": [
            "water",
            "psychic"
        ],
        "family": {
            "id": "bruxish",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "drampa",
        "dexNumber": 780,
        "name": "Drampa",
        "stats": {
            "atk": 231,
            "def": 164,
            "sta": 186
        },
        "types": [
            "normal",
            "dragon"
        ],
        "family": {
            "id": "drampa",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "dhelmise",
        "dexNumber": 781,
        "name": "Dhelmise",
        "stats": {
            "atk": 233,
            "def": 179,
            "sta": 172
        },
        "types": [
            "ghost",
            "grass"
        ],
        "family": {
            "id": "dhelmise",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "jangmo_o",
        "dexNumber": 782,
        "name": "Jangmo-o",
        "stats": {
            "atk": 102,
            "def": 108,
            "sta": 128
        },
        "types": [
            "dragon"
        ],
        "family": {
            "id": "jangmo_o",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "BRICK_BREAK",
                "DRAGON_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "hakamo_o",
        "dexNumber": 783,
        "name": "Hakamo-o",
        "stats": {
            "atk": 145,
            "def": 162,
            "sta": 146
        },
        "types": [
            "dragon",
            "fighting"
        ],
        "family": {
            "id": "jangmo_o",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "BRICK_BREAK",
                "DRAGON_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "kommo_o",
        "dexNumber": 784,
        "name": "Kommo-o",
        "stats": {
            "atk": 222,
            "def": 240,
            "sta": 181
        },
        "types": [
            "dragon",
            "fighting"
        ],
        "family": {
            "id": "jangmo_o",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "CLOSE_COMBAT",
                "FLAMETHROWER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "tapu_koko",
        "dexNumber": 785,
        "name": "Tapu Koko",
        "stats": {
            "atk": 250,
            "def": 181,
            "sta": 172
        },
        "types": [
            "electric",
            "fairy"
        ],
        "floor": 1,
        "family": {
            "id": "tapu_koko",
            "stage": 1
        },
        "aliases": [
            "koko"
        ],
        "moves": {
            "fastMoves": [
                "VOLT_SWITCH",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "THUNDERBOLT",
                "DAZZLING_GLEAM",
                "BRAVE_BIRD",
                "THUNDER"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "tapu_lele",
        "dexNumber": 786,
        "name": "Tapu Lele",
        "stats": {
            "atk": 259,
            "def": 208,
            "sta": 172
        },
        "types": [
            "psychic",
            "fairy"
        ],
        "floor": 1,
        "family": {
            "id": "tapu_lele",
            "stage": 1
        },
        "aliases": [
            "lele"
        ],
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "ASTONISH"
            ],
            "chargedMoves": [
                "PSYSHOCK",
                "MOONBLAST",
                "FOCUS_BLAST",
                "FUTURE_SIGHT"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "tapu_bulu",
        "dexNumber": 787,
        "name": "Tapu Bulu",
        "stats": {
            "atk": 249,
            "def": 215,
            "sta": 172
        },
        "types": [
            "grass",
            "fairy"
        ],
        "floor": 1,
        "family": {
            "id": "tapu_bulu",
            "stage": 1
        },
        "aliases": [
            "bulu"
        ],
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "GRASS_KNOT",
                "DAZZLING_GLEAM",
                "MEGAHORN",
                "SOLAR_BEAM"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "tapu_fini",
        "dexNumber": 788,
        "name": "Tapu Fini",
        "stats": {
            "atk": 189,
            "def": 254,
            "sta": 172
        },
        "types": [
            "water",
            "fairy"
        ],
        "floor": 1,
        "family": {
            "id": "tapu_fini",
            "stage": 1
        },
        "aliases": [
            "fini"
        ],
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "HIDDEN_POWER_BUG",
                "HIDDEN_POWER_DARK",
                "HIDDEN_POWER_DRAGON",
                "HIDDEN_POWER_ELECTRIC",
                "HIDDEN_POWER_FIGHTING",
                "HIDDEN_POWER_FIRE",
                "HIDDEN_POWER_FLYING",
                "HIDDEN_POWER_GHOST",
                "HIDDEN_POWER_GRASS",
                "HIDDEN_POWER_GROUND",
                "HIDDEN_POWER_ICE",
                "HIDDEN_POWER_POISON",
                "HIDDEN_POWER_PSYCHIC",
                "HIDDEN_POWER_ROCK",
                "HIDDEN_POWER_STEEL",
                "HIDDEN_POWER_WATER"
            ],
            "chargedMoves": [
                "SURF",
                "MOONBLAST",
                "ICE_BEAM",
                "HYDRO_PUMP"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "cosmog",
        "dexNumber": 789,
        "name": "Cosmog",
        "stats": {
            "atk": 54,
            "def": 57,
            "sta": 125
        },
        "types": [
            "psychic"
        ],
        "floor": 1,
        "family": {
            "id": "cosmog",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "cosmoem",
        "dexNumber": 790,
        "name": "Cosmoem",
        "stats": {
            "atk": 54,
            "def": 242,
            "sta": 125
        },
        "types": [
            "psychic"
        ],
        "floor": 1,
        "family": {
            "id": "cosmog",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "solgaleo",
        "dexNumber": 791,
        "name": "Solgaleo",
        "stats": {
            "atk": 255,
            "def": 191,
            "sta": 264
        },
        "types": [
            "psychic",
            "steel"
        ],
        "floor": 1,
        "family": {
            "id": "cosmog",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "lunala",
        "dexNumber": 792,
        "name": "Lunala",
        "stats": {
            "atk": 255,
            "def": 191,
            "sta": 264
        },
        "types": [
            "psychic",
            "ghost"
        ],
        "floor": 1,
        "family": {
            "id": "cosmog",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "nihilego",
        "dexNumber": 793,
        "name": "Nihilego",
        "stats": {
            "atk": 249,
            "def": 210,
            "sta": 240
        },
        "types": [
            "rock",
            "poison"
        ],
        "floor": 1,
        "family": {
            "id": "nihilego",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "buzzwole",
        "dexNumber": 794,
        "name": "Buzzwole",
        "stats": {
            "atk": 236,
            "def": 196,
            "sta": 216
        },
        "types": [
            "bug",
            "fighting"
        ],
        "floor": 1,
        "family": {
            "id": "buzzwole",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "pheromosa",
        "dexNumber": 795,
        "name": "Pheromosa",
        "stats": {
            "atk": 316,
            "def": 85,
            "sta": 174
        },
        "types": [
            "bug",
            "fighting"
        ],
        "floor": 1,
        "family": {
            "id": "pheromosa",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "xurkitree",
        "dexNumber": 796,
        "name": "Xurkitree",
        "stats": {
            "atk": 330,
            "def": 144,
            "sta": 195
        },
        "types": [
            "electric"
        ],
        "floor": 1,
        "family": {
            "id": "xurkitree",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "celesteela",
        "dexNumber": 797,
        "name": "Celesteela",
        "stats": {
            "atk": 207,
            "def": 199,
            "sta": 219
        },
        "types": [
            "steel",
            "flying"
        ],
        "floor": 1,
        "family": {
            "id": "celesteela",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "kartana",
        "dexNumber": 798,
        "name": "Kartana",
        "stats": {
            "atk": 323,
            "def": 182,
            "sta": 139
        },
        "types": [
            "grass",
            "steel"
        ],
        "floor": 1,
        "family": {
            "id": "kartana",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "guzzlord",
        "dexNumber": 799,
        "name": "Guzzlord",
        "stats": {
            "atk": 188,
            "def": 99,
            "sta": 440
        },
        "types": [
            "dark",
            "dragon"
        ],
        "floor": 1,
        "family": {
            "id": "guzzlord",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "necrozma",
        "dexNumber": 800,
        "name": "Necrozma",
        "stats": {
            "atk": 251,
            "def": 195,
            "sta": 219
        },
        "types": [
            "psychic"
        ],
        "floor": 1,
        "family": {
            "id": "necrozma",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "necrozma_dawn_wings",
        "dexNumber": 800,
        "name": "Necrozma (Dawn Wings)",
        "stats": {
            "atk": 277,
            "def": 220,
            "sta": 200
        },
        "types": [
            "psychic",
            "ghost"
        ],
        "floor": 1,
        "family": {
            "id": "necrozma",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "necrozma_dusk_mane",
        "dexNumber": 800,
        "name": "Necrozma (Dusk Mane)",
        "stats": {
            "atk": 277,
            "def": 220,
            "sta": 200
        },
        "types": [
            "psychic",
            "steel"
        ],
        "floor": 1,
        "family": {
            "id": "necrozma",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "necrozma_ultra",
        "dexNumber": 800,
        "name": "Necrozma (Ultra)",
        "stats": {
            "atk": 337,
            "def": 196,
            "sta": 200
        },
        "types": [
            "psychic",
            "dragon"
        ],
        "floor": 1,
        "family": {
            "id": "necrozma",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "magearna",
        "dexNumber": 801,
        "name": "Magearna",
        "stats": {
            "atk": 246,
            "def": 225,
            "sta": 190
        },
        "types": [
            "steel",
            "fairy"
        ],
        "floor": 10,
        "family": {
            "id": "magearna",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "poipole",
        "dexNumber": 803,
        "name": "Poipole",
        "stats": {
            "atk": 145,
            "def": 133,
            "sta": 167
        },
        "types": [
            "poison"
        ],
        "floor": 1,
        "family": {
            "id": "poipole",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "naganadel",
        "dexNumber": 804,
        "name": "Naganadel",
        "stats": {
            "atk": 263,
            "def": 159,
            "sta": 177
        },
        "types": [
            "poison",
            "dragon"
        ],
        "floor": 1,
        "family": {
            "id": "poipole",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "stakataka",
        "dexNumber": 805,
        "name": "Stakataka",
        "stats": {
            "atk": 213,
            "def": 298,
            "sta": 156
        },
        "types": [
            "rock",
            "steel"
        ],
        "floor": 1,
        "family": {
            "id": "stakataka",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "blacephalon",
        "dexNumber": 806,
        "name": "Blacephalon",
        "stats": {
            "atk": 315,
            "def": 148,
            "sta": 142
        },
        "types": [
            "fire",
            "ghost"
        ],
        "floor": 1,
        "family": {
            "id": "blacephalon",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "zeraora",
        "dexNumber": 807,
        "name": "Zeraora",
        "stats": {
            "atk": 252,
            "def": 177,
            "sta": 204
        },
        "types": [
            "electric"
        ],
        "floor": 1,
        "family": {
            "id": "zeraora",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "meltan",
        "dexNumber": 808,
        "name": "Meltan",
        "stats": {
            "atk": 118,
            "def": 99,
            "sta": 130
        },
        "types": [
            "steel"
        ],
        "family": {
            "id": "meltan",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "FLASH_CANNON",
                "THUNDERBOLT"
            ]
        },
        "tags": [
            "mythical",
            "include1500"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "melmetal",
        "dexNumber": 809,
        "name": "Melmetal",
        "stats": {
            "atk": 226,
            "def": 190,
            "sta": 264
        },
        "types": [
            "steel"
        ],
        "family": {
            "id": "meltan",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "FLASH_CANNON",
                "HYPER_BEAM",
                "ROCK_SLIDE",
                "THUNDERBOLT",
                "SUPER_POWER"
            ]
        },
        "tags": [
            "mythical"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "grookey",
        "dexNumber": 810,
        "name": "Grookey",
        "stats": {
            "atk": 122,
            "def": 91,
            "sta": 137
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "grookey",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SCRATCH",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "GRASS_KNOT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "thwackey",
        "dexNumber": 811,
        "name": "Thwackey",
        "stats": {
            "atk": 165,
            "def": 134,
            "sta": 172
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "grookey",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "SCRATCH",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "GRASS_KNOT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "rillaboom",
        "dexNumber": 812,
        "name": "Rillaboom",
        "stats": {
            "atk": 239,
            "def": 168,
            "sta": 225
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "grookey",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "SCRATCH",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "GRASS_KNOT",
                "EARTH_POWER"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "scorbunny",
        "dexNumber": 813,
        "name": "Scorbunny",
        "stats": {
            "atk": 132,
            "def": 79,
            "sta": 137
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "scorbunny",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "EMBER"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "FLAMETHROWER"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "raboot",
        "dexNumber": 814,
        "name": "Raboot",
        "stats": {
            "atk": 170,
            "def": 125,
            "sta": 163
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "scorbunny",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "EMBER"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "FLAMETHROWER"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "cinderace",
        "dexNumber": 815,
        "name": "Cinderace",
        "stats": {
            "atk": 238,
            "def": 163,
            "sta": 190
        },
        "types": [
            "fire"
        ],
        "family": {
            "id": "scorbunny",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "EMBER"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "FLAMETHROWER",
                "FOCUS_BLAST"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "sobble",
        "dexNumber": 816,
        "name": "Sobble",
        "stats": {
            "atk": 132,
            "def": 79,
            "sta": 137
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "sobble",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "WATER_PULSE",
                "SURF"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "drizzile",
        "dexNumber": 817,
        "name": "Drizzile",
        "stats": {
            "atk": 186,
            "def": 113,
            "sta": 163
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "sobble",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "WATER_PULSE",
                "SURF"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "inteleon",
        "dexNumber": 818,
        "name": "Inteleon",
        "stats": {
            "atk": 262,
            "def": 142,
            "sta": 172
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "sobble",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "WATER_PULSE",
                "SURF",
                "SHADOW_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "skwovet",
        "dexNumber": 819,
        "name": "Skwovet",
        "stats": {
            "atk": 95,
            "def": 86,
            "sta": 172
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "skwovet",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "BITE",
                "BULLET_SEED"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "CRUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "greedent",
        "dexNumber": 820,
        "name": "Greedent",
        "stats": {
            "atk": 160,
            "def": 156,
            "sta": 260
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "skwovet",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "BITE",
                "BULLET_SEED"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "CRUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "rookidee",
        "dexNumber": 821,
        "name": "Rookidee",
        "stats": {
            "atk": 88,
            "def": 67,
            "sta": 116
        },
        "types": [
            "flying"
        ],
        "family": {
            "id": "rookidee",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "DRILL_PECK",
                "BRAVE_BIRD"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "corvisquire",
        "dexNumber": 822,
        "name": "Corvisquire",
        "stats": {
            "atk": 129,
            "def": 110,
            "sta": 169
        },
        "types": [
            "flying"
        ],
        "family": {
            "id": "rookidee",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "DRILL_PECK",
                "BRAVE_BIRD"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "corviknight",
        "dexNumber": 823,
        "name": "Corviknight",
        "stats": {
            "atk": 163,
            "def": 192,
            "sta": 221
        },
        "types": [
            "flying",
            "steel"
        ],
        "family": {
            "id": "rookidee",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "STEEL_WING",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "DRILL_PECK",
                "BRAVE_BIRD",
                "IRON_HEAD"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "blipbug",
        "dexNumber": 824,
        "name": "Blipbug",
        "stats": {
            "atk": 46,
            "def": 67,
            "sta": 93
        },
        "types": [
            "bug"
        ],
        "family": {
            "id": "blipbug",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "dottler",
        "dexNumber": 825,
        "name": "Dottler",
        "stats": {
            "atk": 87,
            "def": 157,
            "sta": 137
        },
        "types": [
            "bug",
            "psychic"
        ],
        "family": {
            "id": "blipbug",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE_BUG",
                "CONFUSION"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "PSYCHIC"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "orbeetle",
        "dexNumber": 826,
        "name": "Orbeetle",
        "stats": {
            "atk": 156,
            "def": 240,
            "sta": 155
        },
        "types": [
            "bug",
            "psychic"
        ],
        "family": {
            "id": "blipbug",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "STRUGGLE_BUG",
                "CONFUSION"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "PSYCHIC"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "nickit",
        "dexNumber": 827,
        "name": "Nickit",
        "stats": {
            "atk": 85,
            "def": 82,
            "sta": 120
        },
        "types": [
            "dark"
        ],
        "family": {
            "id": "nickit",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "SNARL"
            ],
            "chargedMoves": [
                "NIGHT_SLASH",
                "PLAY_ROUGH"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "thievul",
        "dexNumber": 828,
        "name": "Thievul",
        "stats": {
            "atk": 172,
            "def": 164,
            "sta": 172
        },
        "types": [
            "dark"
        ],
        "family": {
            "id": "nickit",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "SNARL"
            ],
            "chargedMoves": [
                "NIGHT_SLASH",
                "PLAY_ROUGH"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "gossifleur",
        "dexNumber": 829,
        "name": "Gossifleur",
        "stats": {
            "atk": 70,
            "def": 104,
            "sta": 120
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "gossifleur",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "BULLET_SEED"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "GRASS_KNOT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "eldegoss",
        "dexNumber": 830,
        "name": "Eldegoss",
        "stats": {
            "atk": 148,
            "def": 211,
            "sta": 155
        },
        "types": [
            "grass"
        ],
        "family": {
            "id": "gossifleur",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "BULLET_SEED"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "GRASS_KNOT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "wooloo",
        "dexNumber": 831,
        "name": "Wooloo",
        "stats": {
            "atk": 76,
            "def": 97,
            "sta": 123
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "wooloo",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "WILD_CHARGE",
                "PAYBACK",
                "STOMP"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "dubwool",
        "dexNumber": 832,
        "name": "Dubwool",
        "stats": {
            "atk": 159,
            "def": 198,
            "sta": 176
        },
        "types": [
            "normal"
        ],
        "family": {
            "id": "wooloo",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "WILD_CHARGE",
                "PAYBACK",
                "BODY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "chewtle",
        "dexNumber": 833,
        "name": "Chewtle",
        "stats": {
            "atk": 114,
            "def": 85,
            "sta": 137
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "chewtle",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "BITE"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "SURF"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "drednaw",
        "dexNumber": 834,
        "name": "Drednaw",
        "stats": {
            "atk": 213,
            "def": 164,
            "sta": 207
        },
        "types": [
            "water",
            "rock"
        ],
        "family": {
            "id": "chewtle",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "WATERFALL",
                "BITE"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "SURF",
                "ROCK_BLAST"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "yamper",
        "dexNumber": 835,
        "name": "Yamper",
        "stats": {
            "atk": 80,
            "def": 90,
            "sta": 153
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "yamper",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SPARK",
                "BITE"
            ],
            "chargedMoves": [
                "CRUNCH",
                "THUNDER"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "boltund",
        "dexNumber": 836,
        "name": "Boltund",
        "stats": {
            "atk": 197,
            "def": 131,
            "sta": 170
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "yamper",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "SPARK",
                "BITE"
            ],
            "chargedMoves": [
                "CRUNCH",
                "THUNDER"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "rolycoly",
        "dexNumber": 837,
        "name": "Rolycoly",
        "stats": {
            "atk": 73,
            "def": 91,
            "sta": 102
        },
        "types": [
            "rock"
        ],
        "family": {
            "id": "rolycoly",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "SMACK_DOWN",
                "TACKLE"
            ],
            "chargedMoves": [
                "ROCK_BLAST",
                "ROCK_SLIDE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "carkol",
        "dexNumber": 838,
        "name": "Carkol",
        "stats": {
            "atk": 114,
            "def": 157,
            "sta": 190
        },
        "types": [
            "rock",
            "fire"
        ],
        "family": {
            "id": "rolycoly",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "SMACK_DOWN",
                "INCINERATE"
            ],
            "chargedMoves": [
                "ROCK_BLAST",
                "ROCK_SLIDE",
                "FLAME_CHARGE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "coalossal",
        "dexNumber": 839,
        "name": "Coalossal",
        "stats": {
            "atk": 146,
            "def": 198,
            "sta": 242
        },
        "types": [
            "rock",
            "fire"
        ],
        "family": {
            "id": "rolycoly",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "SMACK_DOWN",
                "INCINERATE"
            ],
            "chargedMoves": [
                "ROCK_BLAST",
                "ROCK_SLIDE",
                "FLAME_CHARGE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "applin",
        "dexNumber": 840,
        "name": "Applin",
        "stats": {
            "atk": 71,
            "def": 116,
            "sta": 120
        },
        "types": [
            "grass",
            "dragon"
        ],
        "family": {
            "id": "applin",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "flapple",
        "dexNumber": 841,
        "name": "Flapple",
        "stats": {
            "atk": 214,
            "def": 144,
            "sta": 172
        },
        "types": [
            "grass",
            "dragon"
        ],
        "family": {
            "id": "applin",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "DRAGON_BREATH"
            ],
            "chargedMoves": [
                "DRAGON_PULSE",
                "FLY",
                "OUTRAGE",
                "SEED_BOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "appletun",
        "dexNumber": 842,
        "name": "Appletun",
        "stats": {
            "atk": 178,
            "def": 146,
            "sta": 242
        },
        "types": [
            "grass",
            "dragon"
        ],
        "family": {
            "id": "applin",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "ASTONISH"
            ],
            "chargedMoves": [
                "DRAGON_PULSE",
                "ENERGY_BALL",
                "OUTRAGE",
                "SEED_BOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "silicobra",
        "dexNumber": 843,
        "name": "Silicobra",
        "stats": {
            "atk": 103,
            "def": 123,
            "sta": 141
        },
        "types": [
            "ground"
        ],
        "family": {
            "id": "silicobra",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "DIG",
                "BULLDOZE",
                "EARTH_POWER"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "sandaconda",
        "dexNumber": 844,
        "name": "Sandaconda",
        "stats": {
            "atk": 202,
            "def": 207,
            "sta": 176
        },
        "types": [
            "ground"
        ],
        "family": {
            "id": "silicobra",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "DIG",
                "BULLDOZE",
                "EARTH_POWER"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "cramorant",
        "dexNumber": 845,
        "name": "Cramorant",
        "stats": {
            "atk": 173,
            "def": 163,
            "sta": 172
        },
        "types": [
            "flying",
            "water"
        ],
        "family": {
            "id": "cramorant",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "PECK",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "DRILL_PECK",
                "FLY",
                "HYDRO_PUMP"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "arrokuda",
        "dexNumber": 846,
        "name": "Arrokuda",
        "stats": {
            "atk": 118,
            "def": 72,
            "sta": 121
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "arrokuda",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "WATERFALL",
                "BITE",
                "PECK"
            ],
            "chargedMoves": [
                "CRUNCH",
                "AQUA_JET",
                "CLOSE_COMBAT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "barraskewda",
        "dexNumber": 847,
        "name": "Barraskewda",
        "stats": {
            "atk": 258,
            "def": 127,
            "sta": 156
        },
        "types": [
            "water"
        ],
        "family": {
            "id": "arrokuda",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "WATERFALL",
                "BITE",
                "PECK"
            ],
            "chargedMoves": [
                "CRUNCH",
                "AQUA_JET",
                "CLOSE_COMBAT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "toxel",
        "dexNumber": 848,
        "name": "Toxel",
        "stats": {
            "atk": 97,
            "def": 65,
            "sta": 120
        },
        "types": [
            "electric",
            "poison"
        ],
        "family": {
            "id": "toxel",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ACID"
            ],
            "chargedMoves": [
                "POWER_UP_PUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "toxtricity",
        "dexNumber": 849,
        "name": "Toxtricity",
        "stats": {
            "atk": 224,
            "def": 140,
            "sta": 181
        },
        "types": [
            "electric",
            "poison"
        ],
        "family": {
            "id": "toxel",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ACID",
                "SPARK",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "ACID_SPRAY",
                "DISCHARGE",
                "WILD_CHARGE",
                "POWER_UP_PUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "sizzlipede",
        "dexNumber": 850,
        "name": "Sizzlipede",
        "stats": {
            "atk": 118,
            "def": 90,
            "sta": 137
        },
        "types": [
            "fire",
            "bug"
        ],
        "family": {
            "id": "sizzlipede",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "EMBER"
            ],
            "chargedMoves": [
                "HEAT_WAVE",
                "BUG_BUZZ",
                "CRUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "centiskorch",
        "dexNumber": 851,
        "name": "Centiskorch",
        "stats": {
            "atk": 220,
            "def": 158,
            "sta": 225
        },
        "types": [
            "fire",
            "bug"
        ],
        "family": {
            "id": "sizzlipede",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "EMBER"
            ],
            "chargedMoves": [
                "HEAT_WAVE",
                "BUG_BUZZ",
                "CRUNCH",
                "LUNGE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "clobbopus",
        "dexNumber": 852,
        "name": "Clobbopus",
        "stats": {
            "atk": 121,
            "def": 103,
            "sta": 137
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "clobbopus",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "SUPER_POWER",
                "ICE_PUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "grapploct",
        "dexNumber": 853,
        "name": "Grapploct",
        "stats": {
            "atk": 209,
            "def": 162,
            "sta": 190
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "clobbopus",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "WATERFALL"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "SUPER_POWER",
                "ICE_PUNCH",
                "SURF"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "sinistea",
        "dexNumber": 854,
        "name": "Sinistea",
        "stats": {
            "atk": 134,
            "def": 96,
            "sta": 120
        },
        "types": [
            "ghost"
        ],
        "family": {
            "id": "sinistea",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "SHADOW_BALL",
                "DARK_PULSE",
                "PSYCHIC"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "polteageist",
        "dexNumber": 855,
        "name": "Polteageist",
        "stats": {
            "atk": 248,
            "def": 189,
            "sta": 155
        },
        "types": [
            "ghost"
        ],
        "family": {
            "id": "sinistea",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "SUCKER_PUNCH",
                "HEX"
            ],
            "chargedMoves": [
                "SHADOW_BALL",
                "DARK_PULSE",
                "PSYCHIC"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "hatenna",
        "dexNumber": 856,
        "name": "Hatenna",
        "stats": {
            "atk": 98,
            "def": 93,
            "sta": 123
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "hatenna",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "CHARM"
            ],
            "chargedMoves": [
                "PSYBEAM",
                "PSYCHIC",
                "DAZZLING_GLEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "hattrem",
        "dexNumber": 857,
        "name": "Hattrem",
        "stats": {
            "atk": 153,
            "def": 133,
            "sta": 149
        },
        "types": [
            "psychic"
        ],
        "family": {
            "id": "hatenna",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "CHARM"
            ],
            "chargedMoves": [
                "PSYBEAM",
                "PSYCHIC",
                "DAZZLING_GLEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "hatterene",
        "dexNumber": 858,
        "name": "Hatterene",
        "stats": {
            "atk": 237,
            "def": 182,
            "sta": 149
        },
        "types": [
            "psychic",
            "fairy"
        ],
        "family": {
            "id": "hatenna",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "CHARM",
                "PSYCHO_CUT"
            ],
            "chargedMoves": [
                "PSYBEAM",
                "PSYCHIC",
                "DAZZLING_GLEAM",
                "POWER_WHIP"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "impidimp",
        "dexNumber": 859,
        "name": "Impidimp",
        "stats": {
            "atk": 103,
            "def": 69,
            "sta": 128
        },
        "types": [
            "dark",
            "fairy"
        ],
        "family": {
            "id": "impidimp",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "FOUL_PLAY",
                "DARK_PULSE",
                "PLAY_ROUGH"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "morgrem",
        "dexNumber": 860,
        "name": "Morgrem",
        "stats": {
            "atk": 145,
            "def": 102,
            "sta": 163
        },
        "types": [
            "dark",
            "fairy"
        ],
        "family": {
            "id": "impidimp",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "FOUL_PLAY",
                "DARK_PULSE",
                "PLAY_ROUGH"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "grimmsnarl",
        "dexNumber": 861,
        "name": "Grimmsnarl",
        "stats": {
            "atk": 227,
            "def": 139,
            "sta": 216
        },
        "types": [
            "dark",
            "fairy"
        ],
        "family": {
            "id": "impidimp",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "BITE",
                "SUCKER_PUNCH",
                "LOW_KICK"
            ],
            "chargedMoves": [
                "FOUL_PLAY",
                "DARK_PULSE",
                "PLAY_ROUGH",
                "POWER_UP_PUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "obstagoon",
        "dexNumber": 862,
        "name": "Obstagoon",
        "stats": {
            "atk": 180,
            "def": 194,
            "sta": 212
        },
        "types": [
            "dark",
            "normal"
        ],
        "family": {
            "id": "zigzagoon_galarian",
            "stage": 3
        },
        "aliases": [
            "goon"
        ],
        "moves": {
            "fastMoves": [
                "COUNTER",
                "LICK"
            ],
            "chargedMoves": [
                "CROSS_CHOP",
                "NIGHT_SLASH",
                "HYPER_BEAM",
                "GUNK_SHOT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "perrserker",
        "dexNumber": 863,
        "name": "Perrserker",
        "stats": {
            "atk": 195,
            "def": 162,
            "sta": 172
        },
        "types": [
            "steel"
        ],
        "family": {
            "id": "meowth_galarian",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "IRON_HEAD",
                "CLOSE_COMBAT",
                "PLAY_ROUGH",
                "FOUL_PLAY"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "cursola",
        "dexNumber": 864,
        "name": "Cursola",
        "stats": {
            "atk": 253,
            "def": 182,
            "sta": 155
        },
        "types": [
            "ghost"
        ],
        "family": {
            "id": "corsola_galarian",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "HEX"
            ],
            "chargedMoves": [
                "ROCK_BLAST",
                "BRINE",
                "NIGHT_SHADE",
                "SHADOW_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "sirfetchd",
        "dexNumber": 865,
        "name": "Sirfetch'd",
        "stats": {
            "atk": 248,
            "def": 176,
            "sta": 158
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "farfetchd_galarian",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "COUNTER",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "BRAVE_BIRD",
                "LEAF_BLADE",
                "NIGHT_SLASH"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "mr_rime",
        "dexNumber": 866,
        "name": "Mr. Rime",
        "stats": {
            "atk": 212,
            "def": 179,
            "sta": 190
        },
        "types": [
            "ice",
            "psychic"
        ],
        "family": {
            "id": "mr_mime_galarian",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "ZEN_HEADBUTT",
                "ICE_SHARD"
            ],
            "chargedMoves": [
                "PSYBEAM",
                "PSYCHIC",
                "ICE_PUNCH",
                "ICY_WIND"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "runerigus",
        "dexNumber": 867,
        "name": "Runerigus",
        "stats": {
            "atk": 163,
            "def": 237,
            "sta": 151
        },
        "types": [
            "ground",
            "ghost"
        ],
        "family": {
            "id": "yamask_galarian",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ASTONISH"
            ],
            "chargedMoves": [
                "SHADOW_BALL",
                "SAND_TOMB",
                "ROCK_TOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "milcery",
        "dexNumber": 868,
        "name": "Milcery",
        "stats": {
            "atk": 90,
            "def": 97,
            "sta": 128
        },
        "types": [
            "fairy"
        ],
        "family": {
            "id": "milcery",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "CHARM"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "alcremie",
        "dexNumber": 869,
        "name": "Alcremie",
        "stats": {
            "atk": 203,
            "def": 203,
            "sta": 163
        },
        "types": [
            "fairy"
        ],
        "family": {
            "id": "milcery",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "CHARM"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "PSYSHOCK",
                "ENERGY_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "falinks",
        "dexNumber": 870,
        "name": "Falinks",
        "stats": {
            "atk": 193,
            "def": 170,
            "sta": 163
        },
        "types": [
            "fighting"
        ],
        "family": {
            "id": "falinks",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "COUNTER"
            ],
            "chargedMoves": [
                "SUPER_POWER",
                "BRICK_BREAK",
                "MEGAHORN"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "pincurchin",
        "dexNumber": 871,
        "name": "Pincurchin",
        "stats": {
            "atk": 176,
            "def": 161,
            "sta": 134
        },
        "types": [
            "electric"
        ],
        "family": {
            "id": "pincurchin",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "WATER_GUN",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "THUNDERBOLT",
                "BUBBLE_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "snom",
        "dexNumber": 872,
        "name": "Snom",
        "stats": {
            "atk": 76,
            "def": 59,
            "sta": 102
        },
        "types": [
            "ice",
            "bug"
        ],
        "family": {
            "id": "snom",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POWDER_SNOW",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "ICY_WIND",
                "BUG_BUZZ"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "frosmoth",
        "dexNumber": 873,
        "name": "Frosmoth",
        "stats": {
            "atk": 230,
            "def": 155,
            "sta": 172
        },
        "types": [
            "ice",
            "bug"
        ],
        "family": {
            "id": "snom",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "POWDER_SNOW",
                "BUG_BITE"
            ],
            "chargedMoves": [
                "ICY_WIND",
                "BUG_BUZZ",
                "ICE_BEAM",
                "HURRICANE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "stonjourner",
        "dexNumber": 874,
        "name": "Stonjourner",
        "stats": {
            "atk": 222,
            "def": 182,
            "sta": 225
        },
        "types": [
            "rock"
        ],
        "family": {
            "id": "stonjourner",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "STONE_EDGE",
                "ROCK_SLIDE",
                "STOMP"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "eiscue",
        "dexNumber": 875,
        "name": "Eiscue",
        "stats": {
            "atk": 148,
            "def": 195,
            "sta": 181
        },
        "types": [
            "ice"
        ],
        "family": {
            "id": "eiscue",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "ICY_WIND",
                "WEATHER_BALL_ICE",
                "SURF"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "eiscue_noice",
        "dexNumber": 875,
        "name": "Eiscue (No Ice)",
        "stats": {
            "atk": 173,
            "def": 139,
            "sta": 181
        },
        "types": [
            "ice"
        ],
        "family": {
            "id": "eiscue",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "ICY_WIND",
                "WEATHER_BALL_ICE",
                "SURF"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "indeedee_female",
        "dexNumber": 876,
        "name": "Indeedee (Female)",
        "stats": {
            "atk": 184,
            "def": 184,
            "sta": 172
        },
        "types": [
            "psychic",
            "normal"
        ],
        "family": {
            "id": "indeedee",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "EXTRASENSORY"
            ],
            "chargedMoves": [
                "PSYBEAM",
                "PSYCHIC",
                "ENERGY_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "indeedee_male",
        "dexNumber": 876,
        "name": "Indeedee (Male)",
        "stats": {
            "atk": 208,
            "def": 166,
            "sta": 155
        },
        "types": [
            "psychic",
            "normal"
        ],
        "family": {
            "id": "indeedee",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "EXTRASENSORY"
            ],
            "chargedMoves": [
                "PSYBEAM",
                "PSYCHIC",
                "SHADOW_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "morpeko",
        "dexNumber": 877,
        "name": "Morpeko",
        "stats": {
            "atk": 192,
            "def": 121,
            "sta": 151
        },
        "types": [
            "electric",
            "dark"
        ],
        "family": {
            "id": "morpeko",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "BITE"
            ],
            "chargedMoves": [
                "CRUNCH",
                "PAYBACK",
                "THUNDERBOLT",
                "WILD_CHARGE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "cufant",
        "dexNumber": 878,
        "name": "Cufant",
        "stats": {
            "atk": 140,
            "def": 91,
            "sta": 176
        },
        "types": [
            "steel"
        ],
        "family": {
            "id": "cufant",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "IRON_HEAD",
                "DIG",
                "PLAY_ROUGH"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "copperajah",
        "dexNumber": 879,
        "name": "Copperajah",
        "stats": {
            "atk": 226,
            "def": 126,
            "sta": 263
        },
        "types": [
            "steel"
        ],
        "family": {
            "id": "cufant",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "IRON_HEAD",
                "DIG",
                "PLAY_ROUGH",
                "HEAVY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "dracozolt",
        "dexNumber": 880,
        "name": "Dracozolt",
        "stats": {
            "atk": 195,
            "def": 165,
            "sta": 207
        },
        "types": [
            "electric",
            "dragon"
        ],
        "family": {
            "id": "dracozolt",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "DRAGON_PULSE",
                "ANCIENT_POWER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "arctozolt",
        "dexNumber": 881,
        "name": "Arctozolt",
        "stats": {
            "atk": 190,
            "def": 166,
            "sta": 207
        },
        "types": [
            "electric",
            "ice"
        ],
        "family": {
            "id": "arctozolt",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POWDER_SNOW",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "AVALANCHE",
                "ANCIENT_POWER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "dracovish",
        "dexNumber": 882,
        "name": "Dracovish",
        "stats": {
            "atk": 175,
            "def": 185,
            "sta": 207
        },
        "types": [
            "water",
            "dragon"
        ],
        "family": {
            "id": "dracovish",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BRINE",
                "DRAGON_PULSE",
                "ANCIENT_POWER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "arctovish",
        "dexNumber": 883,
        "name": "Arctovish",
        "stats": {
            "atk": 171,
            "def": 185,
            "sta": 207
        },
        "types": [
            "water",
            "ice"
        ],
        "family": {
            "id": "arctovish",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POWDER_SNOW",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BRINE",
                "AVALANCHE",
                "ANCIENT_POWER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "duraludon",
        "dexNumber": 884,
        "name": "Duraludon",
        "stats": {
            "atk": 239,
            "def": 185,
            "sta": 172
        },
        "types": [
            "steel",
            "dragon"
        ],
        "family": {
            "id": "duraludon",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "METAL_CLAW"
            ],
            "chargedMoves": [
                "FLASH_CANNON",
                "DRAGON_CLAW",
                "HYPER_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "dreepy",
        "dexNumber": 885,
        "name": "Dreepy",
        "stats": {
            "atk": 117,
            "def": 61,
            "sta": 99
        },
        "types": [
            "dragon",
            "ghost"
        ],
        "family": {
            "id": "dreepy",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "drakloak",
        "dexNumber": 886,
        "name": "Drakloak",
        "stats": {
            "atk": 163,
            "def": 105,
            "sta": 169
        },
        "types": [
            "dragon",
            "ghost"
        ],
        "family": {
            "id": "dreepy",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "DRAGON_PULSE",
                "SHADOW_BALL",
                "OUTRAGE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "dragapult",
        "dexNumber": 887,
        "name": "Dragapult",
        "stats": {
            "atk": 266,
            "def": 170,
            "sta": 204
        },
        "types": [
            "dragon",
            "ghost"
        ],
        "family": {
            "id": "dreepy",
            "stage": 3
        },
        "moves": {
            "fastMoves": [
                "HEX",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "DRAGON_PULSE",
                "SHADOW_BALL",
                "OUTRAGE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "zacian_hero",
        "dexNumber": 888,
        "name": "Zacian (Hero)",
        "stats": {
            "atk": 254,
            "def": 236,
            "sta": 192
        },
        "types": [
            "fairy"
        ],
        "floor": 1,
        "family": {
            "id": "zacian",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "SNARL",
                "QUICK_ATTACK",
                "FIRE_FANG"
            ],
            "chargedMoves": [
                "PLAY_ROUGH",
                "IRON_HEAD",
                "WILD_CHARGE",
                "CLOSE_COMBAT"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "zacian_crowned_sword",
        "dexNumber": 888,
        "name": "Zacian (Crowned Sword)",
        "stats": {
            "atk": 332,
            "def": 240,
            "sta": 192
        },
        "types": [
            "fairy",
            "steel"
        ],
        "floor": 1,
        "family": {
            "id": "zacian",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "SNARL",
                "QUICK_ATTACK",
                "FIRE_FANG"
            ],
            "chargedMoves": [
                "PLAY_ROUGH",
                "IRON_HEAD",
                "WILD_CHARGE",
                "CLOSE_COMBAT"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "zamazenta_hero",
        "dexNumber": 889,
        "name": "Zamazenta (Hero)",
        "stats": {
            "atk": 254,
            "def": 236,
            "sta": 192
        },
        "types": [
            "fighting"
        ],
        "floor": 1,
        "family": {
            "id": "zamazenta",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "SNARL",
                "QUICK_ATTACK",
                "ICE_FANG"
            ],
            "chargedMoves": [
                "MOONBLAST",
                "IRON_HEAD",
                "CRUNCH",
                "CLOSE_COMBAT"
            ]
        },
        "tags": [
            "legendary"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "zamazenta_crowned_shield",
        "dexNumber": 889,
        "name": "Zamazenta (Crowned Shield)",
        "stats": {
            "atk": 250,
            "def": 292,
            "sta": 192
        },
        "types": [
            "fighting",
            "steel"
        ],
        "floor": 1,
        "family": {
            "id": "zamazenta",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "SNARL",
                "QUICK_ATTACK",
                "ICE_FANG"
            ],
            "chargedMoves": [
                "MOONBLAST",
                "IRON_HEAD",
                "CRUNCH",
                "CLOSE_COMBAT"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "eternatus",
        "dexNumber": 890,
        "name": "Eternatus",
        "stats": {
            "atk": 278,
            "def": 192,
            "sta": 268
        },
        "types": [
            "poison",
            "dragon"
        ],
        "floor": 1,
        "family": {
            "id": "eternatus",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "CROSS_POISON",
                "DRAGON_PULSE",
                "FLAMETHROWER"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "eternatus_eternamax",
        "dexNumber": 890,
        "name": "Eternatus (Eternamax)",
        "stats": {
            "atk": 251,
            "def": 505,
            "sta": 452
        },
        "types": [
            "poison",
            "dragon"
        ],
        "floor": 1,
        "family": {
            "id": "eternatus",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "CROSS_POISON",
                "DRAGON_PULSE",
                "FLAMETHROWER",
                "HYPER_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "kubfu",
        "dexNumber": 891,
        "name": "Kubfu",
        "stats": {
            "atk": 170,
            "def": 112,
            "sta": 155
        },
        "types": [
            "fighting"
        ],
        "floor": 1,
        "family": {
            "id": "kubfu",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "COUNTER"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "DYNAMIC_PUNCH",
                "CLOSE_COMBAT"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "urshifu",
        "dexNumber": 892,
        "name": "Urshifu",
        "stats": {
            "atk": 254,
            "def": 177,
            "sta": 225
        },
        "types": [
            "fighting"
        ],
        "floor": 1,
        "family": {
            "id": "kubfu",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "COUNTER"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "DYNAMIC_PUNCH",
                "CLOSE_COMBAT"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "zarude",
        "dexNumber": 893,
        "name": "Zarude",
        "stats": {
            "atk": 242,
            "def": 215,
            "sta": 233
        },
        "types": [
            "dark",
            "grass"
        ],
        "floor": 10,
        "family": {
            "id": "zarude",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "VINE_WHIP",
                "BITE"
            ],
            "chargedMoves": [
                "POWER_WHIP",
                "ENERGY_BALL",
                "DARK_PULSE"
            ]
        },
        "tags": [
            "mythical",
            "untradeable"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "regieleki",
        "dexNumber": 894,
        "name": "Regieleki",
        "stats": {
            "atk": 250,
            "def": 125,
            "sta": 190
        },
        "types": [
            "electric"
        ],
        "floor": 1,
        "family": {
            "id": "regieleki",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "LOCK_ON"
            ],
            "chargedMoves": [
                "THUNDERBOLT",
                "THUNDER",
                "HYPER_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "regidrago",
        "dexNumber": 895,
        "name": "Regidrago",
        "stats": {
            "atk": 202,
            "def": 101,
            "sta": 400
        },
        "types": [
            "dragon"
        ],
        "floor": 1,
        "family": {
            "id": "regidrago",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "BITE"
            ],
            "chargedMoves": [
                "HYPER_BEAM",
                "OUTRAGE",
                "DRAGON_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "glastrier",
        "dexNumber": 896,
        "name": "Glastrier",
        "stats": {
            "atk": 246,
            "def": 223,
            "sta": 225
        },
        "types": [
            "ice"
        ],
        "floor": 1,
        "family": {
            "id": "glastrier",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "ICY_WIND",
                "BULLDOZE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "spectrier",
        "dexNumber": 897,
        "name": "Spectrier",
        "stats": {
            "atk": 273,
            "def": 146,
            "sta": 205
        },
        "types": [
            "ghost"
        ],
        "floor": 1,
        "family": {
            "id": "spectrier",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "SHADOW_BALL",
                "FOUL_PLAY",
                "BULLDOZE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "calyrex",
        "dexNumber": 898,
        "name": "Calyrex",
        "stats": {
            "atk": 162,
            "def": 162,
            "sta": 225
        },
        "types": [
            "psychic",
            "grass"
        ],
        "floor": 1,
        "family": {
            "id": "calyrex",
            "stage": 1
        },
        "moves": {
            "fastMoves": [
                "POUND",
                "CONFUSION"
            ],
            "chargedMoves": [
                "PSYSHOCK",
                "PSYCHIC",
                "ENERGY_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "calyrex_ice_rider",
        "dexNumber": 898,
        "name": "Calyrex (Ice Rider)",
        "stats": {
            "atk": 268,
            "def": 246,
            "sta": 205
        },
        "types": [
            "psychic",
            "ice"
        ],
        "floor": 1,
        "family": {
            "id": "calyrex",
            "stage": 2
        },
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "PSYSHOCK",
                "PSYCHIC",
                "ENERGY_BALL",
                "AVALANCHE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    }
];