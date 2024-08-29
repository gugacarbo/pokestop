import type {Pokemon} from '@/@types/pokemon';
// Last Update at: 2024-08-29T13:35:29.882Z
// From {@ local file} 
export const POKEMONS_DATA: (Pick<
		Pokemon,
		'id' | 'dexNumber' | 'tags' | 'buddyDistance' | 'thirdMoveCost' | 'released'| 'moves' >)[] =
	[
    {
        "id": "bulbasaur",
        "dexNumber": 1,
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
        "id": "bulbasaur_shadow",
        "dexNumber": 1,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "ivysaur",
        "dexNumber": 2,
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
        "id": "ivysaur_shadow",
        "dexNumber": 2,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "venusaur",
        "dexNumber": 3,
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
        "id": "venusaur_shadow",
        "dexNumber": 3,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "charmander",
        "dexNumber": 4,
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
        "id": "charmander_shadow",
        "dexNumber": 4,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "charmeleon",
        "dexNumber": 5,
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
        "id": "charmeleon_shadow",
        "dexNumber": 5,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "charizard",
        "dexNumber": 6,
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
        "id": "charizard_shadow",
        "dexNumber": 6,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "squirtle",
        "dexNumber": 7,
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
        "id": "squirtle_shadow",
        "dexNumber": 7,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "wartortle",
        "dexNumber": 8,
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
        "id": "wartortle_shadow",
        "dexNumber": 8,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "blastoise",
        "dexNumber": 9,
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
        "id": "blastoise_shadow",
        "dexNumber": 9,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "caterpie",
        "dexNumber": 10,
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
        "id": "weedle_shadow",
        "dexNumber": 13,
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
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "kakuna",
        "dexNumber": 14,
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
        "id": "kakuna_shadow",
        "dexNumber": 14,
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
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "beedrill",
        "dexNumber": 15,
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
        "id": "beedrill_shadow",
        "dexNumber": 15,
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
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pidgey",
        "dexNumber": 16,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pidgey_shadow",
        "dexNumber": 16,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pidgeotto",
        "dexNumber": 17,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pidgeotto_shadow",
        "dexNumber": 17,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pidgeot",
        "dexNumber": 18,
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
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pidgeot_mega",
        "dexNumber": 18,
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
        "id": "pidgeot_shadow",
        "dexNumber": 18,
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
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "rattata",
        "dexNumber": 19,
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
        "id": "rattata_shadow",
        "dexNumber": 19,
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
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "rattata_alolan_shadow",
        "dexNumber": 19,
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
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "raticate",
        "dexNumber": 20,
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
        "id": "raticate_shadow",
        "dexNumber": 20,
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
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "raticate_alolan_shadow",
        "dexNumber": 20,
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
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "spearow",
        "dexNumber": 21,
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
        "moves": {
            "fastMoves": [
                "PECK",
                "STEEL_WING"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "DRILL_RUN",
                "SKY_ATTACK",
                "TWISTER",
                "FLY"
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
        "id": "ekans_shadow",
        "dexNumber": 23,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "arbok",
        "dexNumber": 24,
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
        "id": "arbok_shadow",
        "dexNumber": 24,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "pikachu",
        "dexNumber": 25,
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
        "id": "pikachu_5th_anniversary",
        "dexNumber": 25,
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "QUICK_ATTACK",
                "PRESENT"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "THUNDERBOLT",
                "WILD_CHARGE",
                "FLY"
            ],
            "eliteMoves": [
                "PRESENT"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pikachu_flying",
        "dexNumber": 25,
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "THUNDERBOLT",
                "WILD_CHARGE",
                "FLY"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pikachu_horizons",
        "dexNumber": 25,
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "THUNDERBOLT",
                "WILD_CHARGE",
                "VOLT_TACKLE"
            ],
            "eliteMoves": [
                "VOLT_TACKLE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pikachu_kariyushi",
        "dexNumber": 25,
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "THUNDERBOLT",
                "WILD_CHARGE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pikachu_libre",
        "dexNumber": 25,
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "CHARM"
            ],
            "chargedMoves": [
                "FLYING_PRESS",
                "PLAY_ROUGH",
                "THUNDER_PUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pikachu_pop_star",
        "dexNumber": 25,
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "CHARM"
            ],
            "chargedMoves": [
                "DRAINING_KISS",
                "THUNDER_PUNCH",
                "PLAY_ROUGH"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pikachu_rock_star",
        "dexNumber": 25,
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "CHARM"
            ],
            "chargedMoves": [
                "METEOR_MASH",
                "THUNDER_PUNCH",
                "PLAY_ROUGH"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pikachu_shaymin",
        "dexNumber": 25,
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
                "WILD_CHARGE",
                "GRASS_KNOT"
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
                "SKULL_BASH",
                "TRAILBLAZE"
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
                "GRASS_KNOT",
                "TRAILBLAZE"
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
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "SCRATCH",
                "SAND_ATTACK"
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
        "id": "sandshrew_shadow",
        "dexNumber": 27,
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "SCRATCH",
                "SAND_ATTACK"
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "sandshrew_alolan_shadow",
        "dexNumber": 27,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "sandslash",
        "dexNumber": 28,
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "MUD_SHOT",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "BULLDOZE",
                "EARTHQUAKE",
                "ROCK_TOMB",
                "NIGHT_SLASH",
                "SCORCHING_SANDS"
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
                "ICE_PUNCH",
                "DRILL_RUN",
                "AERIAL_ACE"
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
        "id": "sandslash_shadow",
        "dexNumber": 28,
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "MUD_SHOT",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "BULLDOZE",
                "EARTHQUAKE",
                "ROCK_TOMB",
                "NIGHT_SLASH",
                "SCORCHING_SANDS"
            ],
            "eliteMoves": [
                "NIGHT_SLASH"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "sandslash_alolan_shadow",
        "dexNumber": 28,
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
                "ICE_PUNCH",
                "DRILL_RUN",
                "AERIAL_ACE"
            ],
            "eliteMoves": [
                "SHADOW_CLAW"
            ]
        },
        "tags": [
            "alolan",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "nidoran_female",
        "dexNumber": 29,
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
        "id": "nidoran_female_shadow",
        "dexNumber": 29,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "nidorina",
        "dexNumber": 30,
        "moves": {
            "fastMoves": [
                "BITE",
                "POISON_STING"
            ],
            "chargedMoves": [
                "DIG",
                "POISON_FANG",
                "SLUDGE_BOMB",
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
        "id": "nidorina_shadow",
        "dexNumber": 30,
        "moves": {
            "fastMoves": [
                "BITE",
                "POISON_STING"
            ],
            "chargedMoves": [
                "DIG",
                "POISON_FANG",
                "SLUDGE_BOMB",
                "THUNDERBOLT"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "nidoqueen",
        "dexNumber": 31,
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
        "id": "nidoqueen_shadow",
        "dexNumber": 31,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "nidoran_male",
        "dexNumber": 32,
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
        "id": "nidoran_male_shadow",
        "dexNumber": 32,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "nidorino",
        "dexNumber": 33,
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "POISON_STING"
            ],
            "chargedMoves": [
                "DIG",
                "HORN_ATTACK",
                "SLUDGE_BOMB",
                "ICE_BEAM"
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
        "id": "nidorino_shadow",
        "dexNumber": 33,
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "POISON_STING"
            ],
            "chargedMoves": [
                "DIG",
                "HORN_ATTACK",
                "SLUDGE_BOMB",
                "ICE_BEAM"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "nidoking",
        "dexNumber": 34,
        "moves": {
            "fastMoves": [
                "FURY_CUTTER",
                "IRON_TAIL",
                "POISON_JAB",
                "DOUBLE_KICK"
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
        "id": "nidoking_shadow",
        "dexNumber": 34,
        "moves": {
            "fastMoves": [
                "FURY_CUTTER",
                "IRON_TAIL",
                "POISON_JAB",
                "DOUBLE_KICK"
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "clefairy",
        "dexNumber": 35,
        "moves": {
            "fastMoves": [
                "POUND",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DISARMING_VOICE",
                "MOONBLAST",
                "SWIFT"
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
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "POUND",
                "ZEN_HEADBUTT",
                "CHARM",
                "FAIRY_WIND"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "METEOR_MASH",
                "MOONBLAST",
                "PSYCHIC",
                "SWIFT"
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
            "alolan",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "vulpix_shadow",
        "dexNumber": 37,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "vulpix_alolan_shadow",
        "dexNumber": 37,
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
            "alolan",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "ninetales",
        "dexNumber": 38,
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
                "WEATHER_BALL_FIRE",
                "SCORCHING_SANDS"
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
            "alolan",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "ninetales_shadow",
        "dexNumber": 38,
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
                "WEATHER_BALL_FIRE",
                "SCORCHING_SANDS"
            ],
            "eliteMoves": [
                "EMBER",
                "FIRE_BLAST",
                "FLAMETHROWER"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "ninetales_alolan_shadow",
        "dexNumber": 38,
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
            "alolan",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "jigglypuff",
        "dexNumber": 39,
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
                "PLAY_ROUGH",
                "SWIFT"
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
                "PLAY_ROUGH",
                "DISARMING_VOICE",
                "ICY_WIND",
                "SWIFT"
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
        "id": "zubat_shadow",
        "dexNumber": 41,
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
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "golbat",
        "dexNumber": 42,
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
        "id": "golbat_shadow",
        "dexNumber": 42,
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
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "oddish",
        "dexNumber": 43,
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
        "id": "oddish_shadow",
        "dexNumber": 43,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gloom",
        "dexNumber": 44,
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
        "id": "gloom_shadow",
        "dexNumber": 44,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "vileplume",
        "dexNumber": 45,
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
        "id": "vileplume_shadow",
        "dexNumber": 45,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "paras",
        "dexNumber": 46,
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
        "id": "venonat_shadow",
        "dexNumber": 48,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "venomoth",
        "dexNumber": 49,
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
        "id": "venomoth_shadow",
        "dexNumber": 49,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "diglett",
        "dexNumber": 50,
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
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "MUD_SLAP",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "DIG",
                "MUD_BOMB",
                "ROCK_TOMB"
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
        "id": "diglett_shadow",
        "dexNumber": 50,
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
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "diglett_alolan_shadow",
        "dexNumber": 50,
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "MUD_SLAP",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "DIG",
                "MUD_BOMB",
                "ROCK_TOMB"
            ]
        },
        "tags": [
            "alolan",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "dugtrio",
        "dexNumber": 51,
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
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "MUD_SLAP",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "IRON_HEAD",
                "MUD_BOMB"
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
        "id": "dugtrio_shadow",
        "dexNumber": 51,
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
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "dugtrio_alolan_shadow",
        "dexNumber": 51,
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "MUD_SLAP",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "IRON_HEAD",
                "MUD_BOMB"
            ]
        },
        "tags": [
            "alolan",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "meowth",
        "dexNumber": 52,
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
        "moves": {
            "fastMoves": [
                "BITE",
                "SCRATCH"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "FOUL_PLAY",
                "NIGHT_SLASH",
                "TRAILBLAZE"
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
        "moves": {
            "fastMoves": [
                "SCRATCH",
                "METAL_CLAW"
            ],
            "chargedMoves": [
                "NIGHT_SLASH",
                "GYRO_BALL",
                "DIG",
                "TRAILBLAZE"
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
        "id": "meowth_shadow",
        "dexNumber": 52,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "persian",
        "dexNumber": 53,
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
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "SCRATCH"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "FOUL_PLAY",
                "PLAY_ROUGH",
                "PAYBACK",
                "TRAILBLAZE"
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
        "id": "persian_shadow",
        "dexNumber": 53,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "psyduck",
        "dexNumber": 54,
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
        "id": "psyduck_shadow",
        "dexNumber": 54,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "golduck",
        "dexNumber": 55,
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
                "CROSS_CHOP",
                "LIQUIDATION"
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
        "id": "golduck_shadow",
        "dexNumber": 55,
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
                "CROSS_CHOP",
                "LIQUIDATION"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "mankey",
        "dexNumber": 56,
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
        "tags": [
            "include1500"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "primeape",
        "dexNumber": 57,
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
        "id": "growlithe_hisuian",
        "dexNumber": 58,
        "moves": {
            "fastMoves": [
                "BITE",
                "EMBER"
            ],
            "chargedMoves": [
                "ROCK_SLIDE",
                "CRUNCH",
                "FLAMETHROWER"
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
        "id": "growlithe_shadow",
        "dexNumber": 58,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "arcanine",
        "dexNumber": 59,
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
                "WILD_CHARGE",
                "PSYCHIC_FANGS",
                "SCORCHING_SANDS"
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
        "id": "arcanine_hisuian",
        "dexNumber": 59,
        "moves": {
            "fastMoves": [
                "FIRE_FANG",
                "SNARL",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "ROCK_SLIDE",
                "WILD_CHARGE",
                "CRUNCH",
                "FLAMETHROWER"
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
        "id": "arcanine_shadow",
        "dexNumber": 59,
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
                "WILD_CHARGE",
                "PSYCHIC_FANGS",
                "SCORCHING_SANDS"
            ],
            "eliteMoves": [
                "BITE",
                "BULLDOZE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "poliwag",
        "dexNumber": 60,
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
        "id": "poliwag_shadow",
        "dexNumber": 60,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "poliwhirl",
        "dexNumber": 61,
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
        "id": "poliwhirl_shadow",
        "dexNumber": 61,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "poliwrath",
        "dexNumber": 62,
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "MUD_SHOT",
                "ROCK_SMASH",
                "COUNTER"
            ],
            "chargedMoves": [
                "DYNAMIC_PUNCH",
                "HYDRO_PUMP",
                "ICE_PUNCH",
                "SUBMISSION",
                "POWER_UP_PUNCH",
                "SCALD",
                "ICY_WIND"
            ],
            "eliteMoves": [
                "SUBMISSION",
                "COUNTER"
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
        "id": "poliwrath_shadow",
        "dexNumber": 62,
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "MUD_SHOT",
                "ROCK_SMASH",
                "COUNTER"
            ],
            "chargedMoves": [
                "DYNAMIC_PUNCH",
                "HYDRO_PUMP",
                "ICE_PUNCH",
                "SUBMISSION",
                "POWER_UP_PUNCH",
                "SCALD",
                "ICY_WIND"
            ],
            "eliteMoves": [
                "SUBMISSION",
                "COUNTER"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "abra",
        "dexNumber": 63,
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
        "id": "abra_shadow",
        "dexNumber": 63,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "kadabra",
        "dexNumber": 64,
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
            "shadoweligible",
            "include1500"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "kadabra_shadow",
        "dexNumber": 64,
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
            "shadoweligible",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "alakazam",
        "dexNumber": 65,
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
        "id": "alakazam_mega",
        "dexNumber": 65,
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
            "shadoweligible",
            "mega"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "alakazam_shadow",
        "dexNumber": 65,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "machop",
        "dexNumber": 66,
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
        "id": "machop_shadow",
        "dexNumber": 66,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "machoke",
        "dexNumber": 67,
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
        "id": "machoke_shadow",
        "dexNumber": 67,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "machamp",
        "dexNumber": 68,
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
        "id": "machamp_shadow",
        "dexNumber": 68,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "bellsprout",
        "dexNumber": 69,
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
        "id": "bellsprout_shadow",
        "dexNumber": 69,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "weepinbell",
        "dexNumber": 70,
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
        "id": "weepinbell_shadow",
        "dexNumber": 70,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "victreebel",
        "dexNumber": 71,
        "moves": {
            "fastMoves": [
                "ACID",
                "RAZOR_LEAF",
                "MAGICAL_LEAF"
            ],
            "chargedMoves": [
                "LEAF_BLADE",
                "SLUDGE_BOMB",
                "SOLAR_BEAM",
                "ACID_SPRAY",
                "LEAF_TORNADO"
            ],
            "eliteMoves": [
                "MAGICAL_LEAF"
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
        "id": "victreebel_shadow",
        "dexNumber": 71,
        "moves": {
            "fastMoves": [
                "ACID",
                "RAZOR_LEAF",
                "MAGICAL_LEAF"
            ],
            "chargedMoves": [
                "LEAF_BLADE",
                "SLUDGE_BOMB",
                "SOLAR_BEAM",
                "ACID_SPRAY",
                "LEAF_TORNADO"
            ],
            "eliteMoves": [
                "MAGICAL_LEAF"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "tentacool",
        "dexNumber": 72,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "tentacool_shadow",
        "dexNumber": 72,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "tentacruel",
        "dexNumber": 73,
        "moves": {
            "fastMoves": [
                "ACID",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HYDRO_PUMP",
                "SLUDGE_WAVE",
                "ACID_SPRAY",
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
        "id": "tentacruel_shadow",
        "dexNumber": 73,
        "moves": {
            "fastMoves": [
                "ACID",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HYDRO_PUMP",
                "SLUDGE_WAVE",
                "ACID_SPRAY",
                "SCALD"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "geodude",
        "dexNumber": 74,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "geodude_alolan",
        "dexNumber": 74,
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
            "alolan",
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "geodude_shadow",
        "dexNumber": 74,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "geodude_alolan_shadow",
        "dexNumber": 74,
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
            "alolan",
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "graveler",
        "dexNumber": 75,
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
            "eliteMoves": [
                "ROCK_SLIDE"
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
        "id": "graveler_alolan",
        "dexNumber": 75,
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
            "alolan",
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "graveler_shadow",
        "dexNumber": 75,
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
            "eliteMoves": [
                "ROCK_SLIDE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "graveler_alolan_shadow",
        "dexNumber": 75,
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
            "alolan",
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "golem",
        "dexNumber": 76,
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
        "id": "golem_alolan",
        "dexNumber": 76,
        "moves": {
            "fastMoves": [
                "ROCK_THROW",
                "VOLT_SWITCH",
                "ROLLOUT"
            ],
            "chargedMoves": [
                "ROCK_BLAST",
                "STONE_EDGE",
                "WILD_CHARGE"
            ],
            "eliteMoves": [
                "ROLLOUT"
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
        "id": "golem_shadow",
        "dexNumber": 76,
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
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "golem_alolan_shadow",
        "dexNumber": 76,
        "moves": {
            "fastMoves": [
                "ROCK_THROW",
                "VOLT_SWITCH",
                "ROLLOUT"
            ],
            "chargedMoves": [
                "ROCK_BLAST",
                "STONE_EDGE",
                "WILD_CHARGE"
            ],
            "eliteMoves": [
                "ROLLOUT"
            ]
        },
        "tags": [
            "alolan",
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "ponyta",
        "dexNumber": 77,
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
                "FLAME_CHARGE",
                "SCORCHING_SANDS"
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
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "PSYCHO_CUT",
                "FAIRY_WIND"
            ],
            "chargedMoves": [
                "PLAY_ROUGH",
                "PSYCHIC",
                "BODY_SLAM",
                "MEGAHORN",
                "HIGH_HORSEPOWER"
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
        "id": "slowpoke_shadow",
        "dexNumber": 79,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "slowbro",
        "dexNumber": 80,
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "ICE_BEAM",
                "PSYCHIC",
                "WATER_PULSE",
                "SURF",
                "SCALD"
            ],
            "eliteMoves": [
                "SURF"
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
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "FOCUS_BLAST",
                "PSYCHIC",
                "SLUDGE_BOMB",
                "SURF",
                "SCALD"
            ],
            "eliteMoves": [
                "SURF"
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
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "ICE_BEAM",
                "PSYCHIC",
                "WATER_PULSE",
                "SURF",
                "SCALD"
            ],
            "eliteMoves": [
                "SURF"
            ]
        },
        "tags": [
            "mega",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "slowbro_shadow",
        "dexNumber": 80,
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "ICE_BEAM",
                "PSYCHIC",
                "WATER_PULSE",
                "SURF",
                "SCALD"
            ],
            "eliteMoves": [
                "SURF"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "magnemite",
        "dexNumber": 81,
        "moves": {
            "fastMoves": [
                "SPARK",
                "THUNDER_SHOCK",
                "VOLT_SWITCH",
                "METAL_SOUND"
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
        "id": "magnemite_shadow",
        "dexNumber": 81,
        "moves": {
            "fastMoves": [
                "SPARK",
                "THUNDER_SHOCK",
                "VOLT_SWITCH",
                "METAL_SOUND"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "MAGNET_BOMB",
                "THUNDERBOLT"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "magneton",
        "dexNumber": 82,
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "SPARK",
                "THUNDER_SHOCK",
                "VOLT_SWITCH",
                "METAL_SOUND"
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
        "id": "magneton_shadow",
        "dexNumber": 82,
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "SPARK",
                "THUNDER_SHOCK",
                "VOLT_SWITCH",
                "METAL_SOUND"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "FLASH_CANNON",
                "MAGNET_BOMB",
                "ZAP_CANNON"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "farfetchd",
        "dexNumber": 83,
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
                "WATER_PULSE",
                "DRILL_RUN",
                "LIQUIDATION"
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
            "alolan",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "grimer_shadow",
        "dexNumber": 88,
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "MUD_BOMB",
                "SLUDGE",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "grimer_alolan_shadow",
        "dexNumber": 88,
        "moves": {
            "fastMoves": [
                "BITE",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "CRUNCH",
                "GUNK_SHOT",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [
            "alolan",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "muk",
        "dexNumber": 89,
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
            "alolan",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "muk_shadow",
        "dexNumber": 89,
        "moves": {
            "fastMoves": [
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
            "eliteMoves": [
                "LICK"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "muk_alolan_shadow",
        "dexNumber": 89,
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
            "alolan",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "shellder",
        "dexNumber": 90,
        "moves": {
            "fastMoves": [
                "ICE_SHARD",
                "TACKLE"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "ICY_WIND",
                "WATER_PULSE",
                "RAZOR_SHELL"
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
        "id": "shellder_shadow",
        "dexNumber": 90,
        "moves": {
            "fastMoves": [
                "ICE_SHARD",
                "TACKLE"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "ICY_WIND",
                "WATER_PULSE",
                "RAZOR_SHELL"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "cloyster",
        "dexNumber": 91,
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
                "ICY_WIND",
                "LIQUIDATION",
                "RAZOR_SHELL"
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
        "id": "cloyster_shadow",
        "dexNumber": 91,
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
                "ICY_WIND",
                "LIQUIDATION",
                "RAZOR_SHELL"
            ],
            "eliteMoves": [
                "BLIZZARD"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gastly",
        "dexNumber": 92,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gastly_shadow",
        "dexNumber": 92,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "haunter",
        "dexNumber": 93,
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
                "SLUDGE_BOMB",
                "ICE_PUNCH"
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
        "id": "haunter_shadow",
        "dexNumber": 93,
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
                "SLUDGE_BOMB",
                "ICE_PUNCH"
            ],
            "eliteMoves": [
                "LICK"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gengar",
        "dexNumber": 94,
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
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gengar_mega",
        "dexNumber": 94,
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
        "id": "gengar_shadow",
        "dexNumber": 94,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "onix",
        "dexNumber": 95,
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
                "STONE_EDGE",
                "BREAKING_SWIPE"
            ],
            "eliteMoves": [
                "IRON_HEAD",
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
        "id": "onix_shadow",
        "dexNumber": 95,
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
                "STONE_EDGE",
                "BREAKING_SWIPE"
            ],
            "eliteMoves": [
                "IRON_HEAD",
                "ROCK_SLIDE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "drowzee",
        "dexNumber": 96,
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
        "id": "drowzee_shadow",
        "dexNumber": 96,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "hypno",
        "dexNumber": 97,
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
        "id": "hypno_shadow",
        "dexNumber": 97,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "krabby",
        "dexNumber": 98,
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "VICE_GRIP",
                "WATER_PULSE",
                "RAZOR_SHELL"
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
                "CRABHAMMER",
                "RAZOR_SHELL"
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
        "released": true
    },
    {
        "id": "voltorb_shadow",
        "dexNumber": 100,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "electrode",
        "dexNumber": 101,
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
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "TACKLE"
            ],
            "chargedMoves": [
                "SWIFT",
                "WILD_CHARGE",
                "ENERGY_BALL"
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
        "id": "electrode_shadow",
        "dexNumber": 101,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "exeggcute",
        "dexNumber": 102,
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
        "id": "exeggcute_shadow",
        "dexNumber": 102,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "exeggutor",
        "dexNumber": 103,
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
        "id": "exeggutor_shadow",
        "dexNumber": 103,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "exeggutor_alolan_shadow",
        "dexNumber": 103,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "cubone",
        "dexNumber": 104,
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
        "id": "cubone_shadow",
        "dexNumber": 104,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "marowak",
        "dexNumber": 105,
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "BONE_CLUB",
                "DIG",
                "EARTHQUAKE",
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
        "id": "marowak_alolan",
        "dexNumber": 105,
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
            "alolan",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "marowak_shadow",
        "dexNumber": 105,
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "BONE_CLUB",
                "DIG",
                "EARTHQUAKE",
                "ROCK_SLIDE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "marowak_alolan_shadow",
        "dexNumber": 105,
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
            "alolan",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "hitmonlee",
        "dexNumber": 106,
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "ROCK_SMASH",
                "DOUBLE_KICK"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "CLOSE_COMBAT",
                "LOW_SWEEP",
                "STOMP",
                "STONE_EDGE",
                "BLAZE_KICK"
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
        "id": "hitmonlee_shadow",
        "dexNumber": 106,
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "ROCK_SMASH",
                "DOUBLE_KICK"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "CLOSE_COMBAT",
                "LOW_SWEEP",
                "STOMP",
                "STONE_EDGE",
                "BLAZE_KICK"
            ],
            "eliteMoves": [
                "STOMP",
                "BRICK_BREAK"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "hitmonchan",
        "dexNumber": 107,
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
        "id": "hitmonchan_shadow",
        "dexNumber": 107,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "lickitung",
        "dexNumber": 108,
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
        "id": "koffing_shadow",
        "dexNumber": 109,
        "moves": {
            "fastMoves": [
                "INFESTATION",
                "TACKLE"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "SLUDGE",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "weezing",
        "dexNumber": 110,
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
        "moves": {
            "fastMoves": [
                "TACKLE",
                "FAIRY_WIND"
            ],
            "chargedMoves": [
                "SLUDGE",
                "HYPER_BEAM",
                "PLAY_ROUGH",
                "OVERHEAT",
                "BRUTAL_SWING"
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
        "id": "weezing_shadow",
        "dexNumber": 110,
        "moves": {
            "fastMoves": [
                "INFESTATION",
                "TACKLE"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "SHADOW_BALL",
                "SLUDGE_BOMB",
                "THUNDERBOLT"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "rhyhorn",
        "dexNumber": 111,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "rhyhorn_shadow",
        "dexNumber": 111,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "rhydon",
        "dexNumber": 112,
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "MEGAHORN",
                "STONE_EDGE",
                "SURF",
                "BREAKING_SWIPE"
            ],
            "eliteMoves": [
                "MEGAHORN"
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
        "id": "rhydon_shadow",
        "dexNumber": 112,
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "MEGAHORN",
                "STONE_EDGE",
                "SURF",
                "BREAKING_SWIPE"
            ],
            "eliteMoves": [
                "MEGAHORN"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "chansey",
        "dexNumber": 113,
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
        "id": "tangela_shadow",
        "dexNumber": 114,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "kangaskhan",
        "dexNumber": 115,
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
        "id": "horsea_shadow",
        "dexNumber": 116,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "seadra",
        "dexNumber": 117,
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
        "id": "seadra_shadow",
        "dexNumber": 117,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "goldeen",
        "dexNumber": 118,
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
                "QUICK_ATTACK"
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
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "ZEN_HEADBUTT",
                "MAGICAL_LEAF",
                "PSYWAVE"
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
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "PSYBEAM",
                "PSYCHIC",
                "ICE_PUNCH",
                "TRIPLE_AXEL"
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
                "X_SCISSOR",
                "TRAILBLAZE"
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
        "id": "scyther_shadow",
        "dexNumber": 123,
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
                "X_SCISSOR",
                "TRAILBLAZE"
            ],
            "eliteMoves": [
                "STEEL_WING",
                "BUG_BUZZ"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "jynx",
        "dexNumber": 124,
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
        "id": "electabuzz_shadow",
        "dexNumber": 125,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "magmar",
        "dexNumber": 126,
        "moves": {
            "fastMoves": [
                "EMBER",
                "KARATE_CHOP"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "FIRE_PUNCH",
                "FLAMETHROWER",
                "SCORCHING_SANDS"
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
        "id": "magmar_shadow",
        "dexNumber": 126,
        "moves": {
            "fastMoves": [
                "EMBER",
                "KARATE_CHOP"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "FIRE_PUNCH",
                "FLAMETHROWER",
                "SCORCHING_SANDS"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "pinsir",
        "dexNumber": 127,
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
        "id": "pinsir_mega",
        "dexNumber": 127,
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
            "shadoweligible",
            "mega"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "pinsir_shadow",
        "dexNumber": 127,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "tauros",
        "dexNumber": 128,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "HORN_ATTACK",
                "IRON_HEAD",
                "TRAILBLAZE"
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
        "id": "magikarp_shadow",
        "dexNumber": 129,
        "moves": {
            "fastMoves": [
                "SPLASH"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "gyarados",
        "dexNumber": 130,
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
        "id": "gyarados_shadow",
        "dexNumber": 130,
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
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "lapras",
        "dexNumber": 131,
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
        "id": "lapras_shadow",
        "dexNumber": 131,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "ditto",
        "dexNumber": 132,
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
        "released": false
    },
    {
        "id": "eevee",
        "dexNumber": 133,
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
        "moves": {
            "fastMoves": [
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "HYDRO_PUMP",
                "LAST_RESORT",
                "WATER_PULSE",
                "SCALD",
                "LIQUIDATION"
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
        "id": "porygon_shadow",
        "dexNumber": 137,
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
            "eliteMoves": [
                "TACKLE",
                "ZEN_HEADBUTT",
                "SIGNAL_BEAM",
                "PSYBEAM",
                "DISCHARGE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "omanyte",
        "dexNumber": 138,
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
        "id": "omanyte_shadow",
        "dexNumber": 138,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "omastar",
        "dexNumber": 139,
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
        "id": "omastar_shadow",
        "dexNumber": 139,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "kabuto",
        "dexNumber": 140,
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
            "mega",
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "aerodactyl_shadow",
        "dexNumber": 142,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "snorlax",
        "dexNumber": 143,
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
        "id": "snorlax_shadow",
        "dexNumber": 143,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "articuno",
        "dexNumber": 144,
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
                "ANCIENT_POWER",
                "TRIPLE_AXEL"
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
        "id": "articuno_galarian",
        "dexNumber": 144,
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "PSYCHO_CUT"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "ANCIENT_POWER",
                "BRAVE_BIRD"
            ]
        },
        "tags": [
            "legendary",
            "galarian"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "articuno_shadow",
        "dexNumber": 144,
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
                "ANCIENT_POWER",
                "TRIPLE_AXEL"
            ],
            "eliteMoves": [
                "HURRICANE"
            ]
        },
        "tags": [
            "legendary",
            "shadow"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "zapdos",
        "dexNumber": 145,
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
        "id": "zapdos_galarian",
        "dexNumber": 145,
        "moves": {
            "fastMoves": [
                "COUNTER"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "ANCIENT_POWER",
                "BRAVE_BIRD"
            ]
        },
        "tags": [
            "legendary",
            "galarian"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "zapdos_shadow",
        "dexNumber": 145,
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
            "shadow"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "moltres",
        "dexNumber": 146,
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
        "id": "moltres_galarian",
        "dexNumber": 146,
        "moves": {
            "fastMoves": [
                "SUCKER_PUNCH",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "PAYBACK",
                "ANCIENT_POWER",
                "BRAVE_BIRD"
            ]
        },
        "tags": [
            "legendary",
            "galarian"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "moltres_shadow",
        "dexNumber": 146,
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
            "shadow"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "dratini",
        "dexNumber": 147,
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
        "id": "dratini_shadow",
        "dexNumber": 147,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "dragonair",
        "dexNumber": 148,
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "IRON_TAIL"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "DRAGON_PULSE",
                "WRAP",
                "BODY_SLAM"
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
        "id": "dragonair_shadow",
        "dexNumber": 148,
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "IRON_TAIL"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "DRAGON_PULSE",
                "WRAP",
                "BODY_SLAM"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "dragonite",
        "dexNumber": 149,
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
                "OUTRAGE",
                "SUPER_POWER"
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
        "id": "dragonite_shadow",
        "dexNumber": 149,
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
                "OUTRAGE",
                "SUPER_POWER"
            ],
            "eliteMoves": [
                "DRACO_METEOR",
                "DRAGON_PULSE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "mewtwo",
        "dexNumber": 150,
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
        "id": "mewtwo_shadow",
        "dexNumber": 150,
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
            "shadow"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "mew",
        "dexNumber": 151,
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
        "moves": {
            "fastMoves": [
                "TACKLE",
                "VINE_WHIP",
                "MAGICAL_LEAF"
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
        "id": "chikorita_shadow",
        "dexNumber": 152,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "VINE_WHIP",
                "MAGICAL_LEAF"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "ENERGY_BALL",
                "GRASS_KNOT"
            ]
        },
        "tags": [
            "starter",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "bayleef",
        "dexNumber": 153,
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "TACKLE",
                "MAGICAL_LEAF"
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
        "id": "bayleef_shadow",
        "dexNumber": 153,
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "TACKLE",
                "MAGICAL_LEAF"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "ENERGY_BALL",
                "GRASS_KNOT"
            ]
        },
        "tags": [
            "starter",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "meganium",
        "dexNumber": 154,
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "VINE_WHIP",
                "MAGICAL_LEAF"
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
        "id": "meganium_shadow",
        "dexNumber": 154,
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "VINE_WHIP",
                "MAGICAL_LEAF"
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "cyndaquil",
        "dexNumber": 155,
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
        "id": "cyndaquil_shadow",
        "dexNumber": 155,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "quilava",
        "dexNumber": 156,
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
        "id": "quilava_shadow",
        "dexNumber": 156,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "typhlosion",
        "dexNumber": 157,
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
                "SOLAR_BEAM",
                "THUNDER_PUNCH"
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
        "id": "typhlosion_hisuian",
        "dexNumber": 157,
        "moves": {
            "fastMoves": [
                "EMBER",
                "HEX"
            ],
            "chargedMoves": [
                "FIRE_PUNCH",
                "WILD_CHARGE",
                "SHADOW_BALL",
                "OVERHEAT"
            ]
        },
        "tags": [
            "starter",
            "hisuian"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "typhlosion_shadow",
        "dexNumber": 157,
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
                "SOLAR_BEAM",
                "THUNDER_PUNCH"
            ],
            "eliteMoves": [
                "BLAST_BURN"
            ]
        },
        "tags": [
            "starter",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "totodile",
        "dexNumber": 158,
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
        "id": "totodile_shadow",
        "dexNumber": 158,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "croconaw",
        "dexNumber": 159,
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
        "id": "croconaw_shadow",
        "dexNumber": 159,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "feraligatr",
        "dexNumber": 160,
        "moves": {
            "fastMoves": [
                "BITE",
                "WATER_GUN",
                "WATERFALL",
                "ICE_FANG",
                "SHADOW_CLAW"
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
        "id": "feraligatr_shadow",
        "dexNumber": 160,
        "moves": {
            "fastMoves": [
                "BITE",
                "WATER_GUN",
                "WATERFALL",
                "ICE_FANG",
                "SHADOW_CLAW"
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "sentret",
        "dexNumber": 161,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "ledyba_shadow",
        "dexNumber": 165,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "ledian",
        "dexNumber": 166,
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BUG_BUZZ",
                "SILVER_WIND",
                "DYNAMIC_PUNCH"
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
        "id": "ledian_shadow",
        "dexNumber": 166,
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BUG_BUZZ",
                "SILVER_WIND",
                "DYNAMIC_PUNCH"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "spinarak",
        "dexNumber": 167,
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
        "moves": {
            "fastMoves": [
                "INFESTATION",
                "POISON_STING"
            ],
            "chargedMoves": [
                "CROSS_POISON",
                "MEGAHORN",
                "SHADOW_SNEAK",
                "LUNGE",
                "TRAILBLAZE"
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
        "id": "crobat_shadow",
        "dexNumber": 169,
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
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "chinchou",
        "dexNumber": 170,
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
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "WATER_GUN",
                "SPARK"
            ],
            "chargedMoves": [
                "HYDRO_PUMP",
                "THUNDER",
                "THUNDERBOLT",
                "SURF"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "lanturnw",
        "dexNumber": 171,
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "WATER_GUN",
                "SPARK"
            ],
            "chargedMoves": [
                "HYDRO_PUMP",
                "THUNDER",
                "THUNDERBOLT",
                "SURF"
            ]
        },
        "tags": [
            "duplicate",
            "duplicate1500"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "pichu",
        "dexNumber": 172,
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
                "SIGNAL_BEAM",
                "SWIFT"
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
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "POUND"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "PSYCHIC",
                "SHADOW_BALL",
                "WILD_CHARGE",
                "SWIFT"
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
        "moves": {
            "fastMoves": [
                "FAIRY_WIND",
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "natu_shadow",
        "dexNumber": 177,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "xatu",
        "dexNumber": 178,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "xatu_shadow",
        "dexNumber": 178,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "mareep",
        "dexNumber": 179,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DISCHARGE",
                "THUNDERBOLT",
                "TRAILBLAZE"
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
        "id": "mareep_shadow",
        "dexNumber": 179,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DISCHARGE",
                "THUNDERBOLT",
                "TRAILBLAZE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "flaaffy",
        "dexNumber": 180,
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "TACKLE"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "POWER_GEM",
                "THUNDERBOLT",
                "TRAILBLAZE"
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
        "id": "flaaffy_shadow",
        "dexNumber": 180,
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "TACKLE"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "POWER_GEM",
                "THUNDERBOLT",
                "TRAILBLAZE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "ampharos",
        "dexNumber": 181,
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
                "THUNDER_PUNCH",
                "BRUTAL_SWING",
                "TRAILBLAZE"
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
                "THUNDER_PUNCH",
                "BRUTAL_SWING",
                "TRAILBLAZE"
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
        "id": "ampharos_shadow",
        "dexNumber": 181,
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
                "THUNDER_PUNCH",
                "BRUTAL_SWING",
                "TRAILBLAZE"
            ],
            "eliteMoves": [
                "DRAGON_PULSE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "bellossom",
        "dexNumber": 182,
        "moves": {
            "fastMoves": [
                "ACID",
                "RAZOR_LEAF",
                "BULLET_SEED",
                "MAGICAL_LEAF"
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
        "id": "bellossom_shadow",
        "dexNumber": 182,
        "moves": {
            "fastMoves": [
                "ACID",
                "RAZOR_LEAF",
                "BULLET_SEED",
                "MAGICAL_LEAF"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "LEAF_BLADE",
                "PETAL_BLIZZARD"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "marill",
        "dexNumber": 183,
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
        "moves": {
            "fastMoves": [
                "COUNTER",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "ROCK_SLIDE",
                "STONE_EDGE",
                "ROCK_TOMB",
                "METEOR_BEAM",
                "TRAILBLAZE"
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
        "id": "sudowoodo_shadow",
        "dexNumber": 185,
        "moves": {
            "fastMoves": [
                "COUNTER",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "ROCK_SLIDE",
                "STONE_EDGE",
                "ROCK_TOMB",
                "METEOR_BEAM",
                "TRAILBLAZE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "politoed",
        "dexNumber": 186,
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
                "WEATHER_BALL_WATER",
                "ICE_BEAM",
                "SCALD"
            ],
            "eliteMoves": [
                "EARTHQUAKE",
                "ICE_BEAM"
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
        "id": "politoed_shadow",
        "dexNumber": 186,
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
                "WEATHER_BALL_WATER",
                "ICE_BEAM",
                "SCALD"
            ],
            "eliteMoves": [
                "EARTHQUAKE",
                "ICE_BEAM"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "hoppip",
        "dexNumber": 187,
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
        "id": "hoppip_shadow",
        "dexNumber": 187,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "skiploom",
        "dexNumber": 188,
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
        "id": "skiploom_shadow",
        "dexNumber": 188,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "jumpluff",
        "dexNumber": 189,
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "INFESTATION",
                "FAIRY_WIND"
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
        "id": "jumpluff_shadow",
        "dexNumber": 189,
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "INFESTATION",
                "FAIRY_WIND"
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "aipom",
        "dexNumber": 190,
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
        "id": "aipom_shadow",
        "dexNumber": 190,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "sunkern",
        "dexNumber": 191,
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
        "id": "wooper_paldean",
        "dexNumber": 194,
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DIG",
                "SLUDGE_WAVE"
            ]
        },
        "tags": [
            "paldean"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "wooper_shadow",
        "dexNumber": 194,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "quagsire",
        "dexNumber": 195,
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "SLUDGE_BOMB",
                "STONE_EDGE",
                "ACID_SPRAY",
                "MUD_BOMB",
                "AQUA_TAIL"
            ],
            "eliteMoves": [
                "AQUA_TAIL"
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
        "id": "quagsire_shadow",
        "dexNumber": 195,
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "SLUDGE_BOMB",
                "STONE_EDGE",
                "ACID_SPRAY",
                "MUD_BOMB",
                "AQUA_TAIL"
            ],
            "eliteMoves": [
                "AQUA_TAIL"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "espeon",
        "dexNumber": 196,
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
                "SHADOW_BALL",
                "PSYCHIC_FANGS"
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
        "id": "murkrow_shadow",
        "dexNumber": 198,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "slowking",
        "dexNumber": 199,
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "FIRE_BLAST",
                "PSYCHIC",
                "SURF",
                "SCALD"
            ],
            "eliteMoves": [
                "SURF"
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
        "moves": {
            "fastMoves": [
                "HEX",
                "CONFUSION",
                "ACID"
            ],
            "chargedMoves": [
                "FUTURE_SIGHT",
                "SHADOW_BALL",
                "SLUDGE_WAVE",
                "SURF",
                "SCALD"
            ],
            "eliteMoves": [
                "SURF"
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
        "id": "slowking_shadow",
        "dexNumber": 199,
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "FIRE_BLAST",
                "PSYCHIC",
                "SURF",
                "SCALD"
            ],
            "eliteMoves": [
                "SURF"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "misdreavus",
        "dexNumber": 200,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "HEX",
                "PSYWAVE"
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
        "id": "misdreavus_shadow",
        "dexNumber": 200,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "HEX",
                "PSYWAVE"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "OMINOUS_WIND",
                "SHADOW_SNEAK"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "unown",
        "dexNumber": 201,
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
        "id": "wobbuffet_shadow",
        "dexNumber": 202,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "girafarig",
        "dexNumber": 203,
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "TACKLE",
                "DOUBLE_KICK"
            ],
            "chargedMoves": [
                "MIRROR_COAT",
                "PSYCHIC",
                "THUNDERBOLT",
                "PSYCHIC_FANGS",
                "TRAILBLAZE"
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
        "id": "girafarig_shadow",
        "dexNumber": 203,
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "TACKLE",
                "DOUBLE_KICK"
            ],
            "chargedMoves": [
                "MIRROR_COAT",
                "PSYCHIC",
                "THUNDERBOLT",
                "PSYCHIC_FANGS",
                "TRAILBLAZE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "pineco",
        "dexNumber": 204,
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
        "id": "pineco_shadow",
        "dexNumber": 204,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "forretress",
        "dexNumber": 205,
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
        "id": "forretress_shadow",
        "dexNumber": 205,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "dunsparce",
        "dexNumber": 206,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "BITE",
                "ROLLOUT"
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
        "id": "gligar_shadow",
        "dexNumber": 207,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "steelix",
        "dexNumber": 208,
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "IRON_TAIL",
                "THUNDER_FANG"
            ],
            "chargedMoves": [
                "CRUNCH",
                "EARTHQUAKE",
                "HEAVY_SLAM",
                "PSYCHIC_FANGS",
                "BREAKING_SWIPE"
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
        "id": "steelix_mega",
        "dexNumber": 208,
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "IRON_TAIL",
                "THUNDER_FANG"
            ],
            "chargedMoves": [
                "CRUNCH",
                "EARTHQUAKE",
                "HEAVY_SLAM",
                "PSYCHIC_FANGS",
                "BREAKING_SWIPE"
            ]
        },
        "tags": [
            "mega",
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "steelix_shadow",
        "dexNumber": 208,
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "IRON_TAIL",
                "THUNDER_FANG"
            ],
            "chargedMoves": [
                "CRUNCH",
                "EARTHQUAKE",
                "HEAVY_SLAM",
                "PSYCHIC_FANGS",
                "BREAKING_SWIPE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "snubbull",
        "dexNumber": 209,
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
        "id": "snubbull_shadow",
        "dexNumber": 209,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "granbull",
        "dexNumber": 210,
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
        "id": "granbull_shadow",
        "dexNumber": 210,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "qwilfish",
        "dexNumber": 211,
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
                "FELL_STINGER",
                "SCALD"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "qwilfish_hisuian",
        "dexNumber": 211,
        "moves": {
            "fastMoves": [
                "POISON_STING",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "ICE_BEAM",
                "SLUDGE_BOMB",
                "DARK_PULSE",
                "SHADOW_BALL"
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
        "id": "scizor",
        "dexNumber": 212,
        "moves": {
            "fastMoves": [
                "BULLET_PUNCH",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "IRON_HEAD",
                "NIGHT_SLASH",
                "X_SCISSOR",
                "TRAILBLAZE"
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
        "id": "scizor_mega",
        "dexNumber": 212,
        "moves": {
            "fastMoves": [
                "BULLET_PUNCH",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "IRON_HEAD",
                "NIGHT_SLASH",
                "X_SCISSOR",
                "TRAILBLAZE"
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
        "id": "scizor_shadow",
        "dexNumber": 212,
        "moves": {
            "fastMoves": [
                "BULLET_PUNCH",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "IRON_HEAD",
                "NIGHT_SLASH",
                "X_SCISSOR",
                "TRAILBLAZE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "shuckle",
        "dexNumber": 213,
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
        "id": "shuckle_shadow",
        "dexNumber": 213,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "heracross",
        "dexNumber": 214,
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
        "id": "heracross_mega",
        "dexNumber": 214,
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
            "regional",
            "mega"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "sneasel",
        "dexNumber": 215,
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "ICE_SHARD"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "FOUL_PLAY",
                "ICE_PUNCH",
                "TRIPLE_AXEL"
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
        "id": "sneasel_hisuian",
        "dexNumber": 215,
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "CLOSE_COMBAT",
                "X_SCISSOR"
            ]
        },
        "tags": [
            "hisuian",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "sneasel_shadow",
        "dexNumber": 215,
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "ICE_SHARD"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "FOUL_PLAY",
                "ICE_PUNCH",
                "TRIPLE_AXEL"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "sneasel_hisuian_shadow",
        "dexNumber": 215,
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "CLOSE_COMBAT",
                "X_SCISSOR"
            ]
        },
        "tags": [
            "hisuian",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "teddiursa",
        "dexNumber": 216,
        "moves": {
            "fastMoves": [
                "LICK",
                "SCRATCH"
            ],
            "chargedMoves": [
                "CROSS_CHOP",
                "CRUNCH",
                "PLAY_ROUGH",
                "TRAILBLAZE",
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
        "id": "teddiursa_shadow",
        "dexNumber": 216,
        "moves": {
            "fastMoves": [
                "LICK",
                "SCRATCH"
            ],
            "chargedMoves": [
                "CROSS_CHOP",
                "CRUNCH",
                "PLAY_ROUGH",
                "TRAILBLAZE",
                "SWIFT"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "ursaring",
        "dexNumber": 217,
        "moves": {
            "fastMoves": [
                "COUNTER",
                "METAL_CLAW",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "HYPER_BEAM",
                "PLAY_ROUGH",
                "TRAILBLAZE",
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
        "id": "ursaring_shadow",
        "dexNumber": 217,
        "moves": {
            "fastMoves": [
                "COUNTER",
                "METAL_CLAW",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "HYPER_BEAM",
                "PLAY_ROUGH",
                "TRAILBLAZE",
                "SWIFT"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "slugma",
        "dexNumber": 218,
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
        "id": "swinub_shadow",
        "dexNumber": 220,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "piloswine",
        "dexNumber": 221,
        "moves": {
            "fastMoves": [
                "ICE_SHARD",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "BULLDOZE",
                "STONE_EDGE",
                "HIGH_HORSEPOWER"
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
        "id": "piloswine_shadow",
        "dexNumber": 221,
        "moves": {
            "fastMoves": [
                "ICE_SHARD",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "BULLDOZE",
                "STONE_EDGE",
                "HIGH_HORSEPOWER"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "corsola",
        "dexNumber": 222,
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
        "moves": {
            "fastMoves": [
                "PRESENT",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "ICE_PUNCH",
                "ICY_WIND",
                "FLY",
                "TRIPLE_AXEL"
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
        "id": "delibird_shadow",
        "dexNumber": 225,
        "moves": {
            "fastMoves": [
                "PRESENT"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "ICE_PUNCH",
                "ICY_WIND",
                "FLY",
                "TRIPLE_AXEL"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "mantine",
        "dexNumber": 226,
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
        "id": "skarmory_shadow",
        "dexNumber": 227,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "houndour",
        "dexNumber": 228,
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
        "id": "houndour_shadow",
        "dexNumber": 228,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "houndoom",
        "dexNumber": 229,
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
        "id": "houndoom_shadow",
        "dexNumber": 229,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "kingdra",
        "dexNumber": 230,
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
        "id": "kingdra_shadow",
        "dexNumber": 230,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "phanpy",
        "dexNumber": 231,
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "TACKLE"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "BULLDOZE",
                "ROCK_SLIDE",
                "TRAILBLAZE"
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
        "id": "phanpy_shadow",
        "dexNumber": 231,
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "TACKLE"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "BULLDOZE",
                "ROCK_SLIDE",
                "TRAILBLAZE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "donphan",
        "dexNumber": 232,
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
                "BODY_SLAM",
                "TRAILBLAZE"
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
        "id": "donphan_shadow",
        "dexNumber": 232,
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
                "BODY_SLAM",
                "TRAILBLAZE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "porygon2",
        "dexNumber": 233,
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
        "id": "porygon2_shadow",
        "dexNumber": 233,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "stantler",
        "dexNumber": 234,
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
        "id": "stantler_shadow",
        "dexNumber": 234,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "smeargle",
        "dexNumber": 235,
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
        "moves": {
            "fastMoves": [
                "COUNTER",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "GYRO_BALL",
                "STONE_EDGE",
                "TRIPLE_AXEL"
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
        "id": "hitmontop_shadow",
        "dexNumber": 237,
        "moves": {
            "fastMoves": [
                "COUNTER",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "GYRO_BALL",
                "STONE_EDGE",
                "TRIPLE_AXEL"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "smoochum",
        "dexNumber": 238,
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
        "moves": {
            "fastMoves": [
                "TACKLE",
                "ZEN_HEADBUTT",
                "ROLLOUT"
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
        "moves": {
            "fastMoves": [
                "POUND",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "HYPER_BEAM",
                "PSYCHIC",
                "WILD_CHARGE"
            ],
            "eliteMoves": [
                "WILD_CHARGE"
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
        "id": "raikou_shadow",
        "dexNumber": 243,
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
            "shadow"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "entei",
        "dexNumber": 244,
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
                "FLAME_CHARGE",
                "SCORCHING_SANDS"
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
        "id": "entei_shadow",
        "dexNumber": 244,
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
                "FLAME_CHARGE",
                "SCORCHING_SANDS"
            ]
        },
        "tags": [
            "legendary",
            "shadow"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "suicune",
        "dexNumber": 245,
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
                "WATER_PULSE",
                "SCALD"
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
        "id": "suicune_shadow",
        "dexNumber": 245,
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
                "WATER_PULSE",
                "SCALD"
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
            "shadow"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "larvitar",
        "dexNumber": 246,
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
        "id": "larvitar_shadow",
        "dexNumber": 246,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "pupitar",
        "dexNumber": 247,
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
        "id": "pupitar_shadow",
        "dexNumber": 247,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "tyranitar",
        "dexNumber": 248,
        "moves": {
            "fastMoves": [
                "BITE",
                "IRON_TAIL",
                "SMACK_DOWN"
            ],
            "chargedMoves": [
                "CRUNCH",
                "FIRE_BLAST",
                "STONE_EDGE",
                "BRUTAL_SWING"
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
        "id": "tyranitar_mega",
        "dexNumber": 248,
        "moves": {
            "fastMoves": [
                "BITE",
                "IRON_TAIL",
                "SMACK_DOWN"
            ],
            "chargedMoves": [
                "CRUNCH",
                "FIRE_BLAST",
                "STONE_EDGE",
                "BRUTAL_SWING"
            ],
            "eliteMoves": [
                "SMACK_DOWN"
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
        "id": "tyranitar_shadow",
        "dexNumber": 248,
        "moves": {
            "fastMoves": [
                "BITE",
                "IRON_TAIL",
                "SMACK_DOWN"
            ],
            "chargedMoves": [
                "CRUNCH",
                "FIRE_BLAST",
                "STONE_EDGE",
                "BRUTAL_SWING"
            ],
            "eliteMoves": [
                "SMACK_DOWN"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "lugia",
        "dexNumber": 249,
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
        "id": "lugia_shadow",
        "dexNumber": 249,
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
            "shadow"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "ho_oh",
        "dexNumber": 250,
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
        "id": "ho_oh_shadow",
        "dexNumber": 250,
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
            "shadow"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "celebi",
        "dexNumber": 251,
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
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "treecko_shadow",
        "dexNumber": 252,
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
            "starter",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "grovyle",
        "dexNumber": 253,
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
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "grovyle_shadow",
        "dexNumber": 253,
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
            "starter",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "sceptile",
        "dexNumber": 254,
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
                "DRAGON_CLAW",
                "BREAKING_SWIPE"
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
        "id": "sceptile_mega",
        "dexNumber": 254,
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
                "DRAGON_CLAW",
                "BREAKING_SWIPE"
            ],
            "eliteMoves": [
                "FRENZY_PLANT"
            ]
        },
        "tags": [
            "starter",
            "mega",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "sceptile_shadow",
        "dexNumber": 254,
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
                "DRAGON_CLAW",
                "BREAKING_SWIPE"
            ],
            "eliteMoves": [
                "FRENZY_PLANT"
            ]
        },
        "tags": [
            "starter",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "torchic",
        "dexNumber": 255,
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
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "torchic_shadow",
        "dexNumber": 255,
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
            "starter",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "combusken",
        "dexNumber": 256,
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
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "combusken_shadow",
        "dexNumber": 256,
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
            "starter",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "blaziken",
        "dexNumber": 257,
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
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "blaziken_mega",
        "dexNumber": 257,
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
            "starter",
            "mega",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "blaziken_shadow",
        "dexNumber": 257,
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
            "starter",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "mudkip",
        "dexNumber": 258,
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
        "id": "mudkip_shadow",
        "dexNumber": 258,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "marshtomp",
        "dexNumber": 259,
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
        "id": "marshtomp_shadow",
        "dexNumber": 259,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "swampert",
        "dexNumber": 260,
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
        "id": "swampert_mega",
        "dexNumber": 260,
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
            "shadoweligible",
            "mega"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "swampert_shadow",
        "dexNumber": 260,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "poochyena",
        "dexNumber": 261,
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
        "id": "poochyena_shadow",
        "dexNumber": 261,
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
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "mightyena",
        "dexNumber": 262,
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
        "id": "mightyena_shadow",
        "dexNumber": 262,
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
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "zigzagoon",
        "dexNumber": 263,
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "TACKLE",
                "SAND_ATTACK"
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
        "moves": {
            "fastMoves": [
                "SHADOW_CLAW",
                "TACKLE",
                "SAND_ATTACK"
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
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "ENERGY_BALL",
                "SCALD"
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
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "GRASS_KNOT",
                "ICE_BEAM",
                "SCALD"
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
                "LEAF_STORM",
                "SCALD"
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
        "id": "seedot_shadow",
        "dexNumber": 273,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "nuzleaf",
        "dexNumber": 274,
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
        "id": "nuzleaf_shadow",
        "dexNumber": 274,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "shiftry",
        "dexNumber": 275,
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
        "id": "shiftry_shadow",
        "dexNumber": 275,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "taillow",
        "dexNumber": 276,
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
        "id": "ralts_shadow",
        "dexNumber": 280,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "kirlia",
        "dexNumber": 281,
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "CONFUSION",
                "MAGICAL_LEAF"
            ],
            "chargedMoves": [
                "DISARMING_VOICE",
                "PSYCHIC",
                "SHADOW_SNEAK",
                "DRAINING_KISS",
                "TRIPLE_AXEL"
            ],
            "legacyMoves": [
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
        "id": "kirlia_shadow",
        "dexNumber": 281,
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "CONFUSION",
                "MAGICAL_LEAF"
            ],
            "chargedMoves": [
                "DISARMING_VOICE",
                "PSYCHIC",
                "SHADOW_SNEAK",
                "TRIPLE_AXEL"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "gardevoir",
        "dexNumber": 282,
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "CONFUSION",
                "CHARM",
                "MAGICAL_LEAF"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "PSYCHIC",
                "SHADOW_BALL",
                "SYNCHRONOISE",
                "TRIPLE_AXEL"
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
        "id": "gardevoir_mega",
        "dexNumber": 282,
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "CONFUSION",
                "CHARM",
                "MAGICAL_LEAF"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "PSYCHIC",
                "SHADOW_BALL",
                "SYNCHRONOISE",
                "TRIPLE_AXEL"
            ],
            "eliteMoves": [
                "SYNCHRONOISE"
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
        "id": "gardevoir_shadow",
        "dexNumber": 282,
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "CONFUSION",
                "CHARM",
                "MAGICAL_LEAF"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "PSYCHIC",
                "SHADOW_BALL",
                "SYNCHRONOISE",
                "TRIPLE_AXEL"
            ],
            "eliteMoves": [
                "SYNCHRONOISE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "surskit",
        "dexNumber": 283,
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
        "moves": {
            "fastMoves": [
                "COUNTER",
                "SCRATCH"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "BRICK_BREAK",
                "BULLDOZE",
                "ROCK_SLIDE"
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
        "released": false
    },
    {
        "id": "whismur",
        "dexNumber": 293,
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
        "id": "whismur_shadow",
        "dexNumber": 293,
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
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "loudred",
        "dexNumber": 294,
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
        "id": "loudred_shadow",
        "dexNumber": 294,
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
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "exploud",
        "dexNumber": 295,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "BITE"
            ],
            "chargedMoves": [
                "CRUNCH",
                "DISARMING_VOICE",
                "FIRE_BLAST",
                "BOOMBURST"
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
        "id": "exploud_shadow",
        "dexNumber": 295,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "BITE"
            ],
            "chargedMoves": [
                "CRUNCH",
                "DISARMING_VOICE",
                "FIRE_BLAST",
                "BOOMBURST"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "makuhita",
        "dexNumber": 296,
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
        "id": "makuhita_shadow",
        "dexNumber": 296,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "hariyama",
        "dexNumber": 297,
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
        "id": "hariyama_shadow",
        "dexNumber": 297,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "azurill",
        "dexNumber": 298,
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
        "id": "nosepass_shadow",
        "dexNumber": 299,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "skitty",
        "dexNumber": 300,
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
        "id": "sableye_mega",
        "dexNumber": 302,
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
            "shadoweligible",
            "mega"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "sableye_shadow",
        "dexNumber": 302,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "mawile",
        "dexNumber": 303,
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
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "mawile_shadow",
        "dexNumber": 303,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "aron",
        "dexNumber": 304,
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
        "id": "aron_shadow",
        "dexNumber": 304,
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
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "lairon",
        "dexNumber": 305,
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
        "id": "lairon_shadow",
        "dexNumber": 305,
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
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "aggron",
        "dexNumber": 306,
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
                "ROCK_TOMB",
                "METEOR_BEAM"
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
        "id": "aggron_mega",
        "dexNumber": 306,
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
                "ROCK_TOMB",
                "METEOR_BEAM"
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
        "id": "aggron_shadow",
        "dexNumber": 306,
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
                "ROCK_TOMB",
                "METEOR_BEAM"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "meditite",
        "dexNumber": 307,
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
        "id": "medicham_mega",
        "dexNumber": 308,
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
        "tags": [
            "mega"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "electrike",
        "dexNumber": 309,
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
        "id": "electrike_shadow",
        "dexNumber": 309,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "manectric",
        "dexNumber": 310,
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
                "OVERHEAT",
                "PSYCHIC_FANGS"
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
                "OVERHEAT",
                "PSYCHIC_FANGS"
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
        "id": "manectric_shadow",
        "dexNumber": 310,
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
                "OVERHEAT",
                "PSYCHIC_FANGS"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "plusle",
        "dexNumber": 311,
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
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "RAZOR_LEAF",
                "MAGICAL_LEAF"
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
        "moves": {
            "fastMoves": [
                "INFESTATION",
                "ROCK_SMASH",
                "MUD_SHOT"
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
        "id": "carvanha_shadow",
        "dexNumber": 318,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "sharpedo",
        "dexNumber": 319,
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
        "id": "sharpedo_shadow",
        "dexNumber": 319,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "wailmer",
        "dexNumber": 320,
        "moves": {
            "fastMoves": [
                "SPLASH",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "HEAVY_SLAM",
                "WATER_PULSE",
                "SCALD"
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
        "id": "wailmer_shadow",
        "dexNumber": 320,
        "moves": {
            "fastMoves": [
                "SPLASH",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "HEAVY_SLAM",
                "WATER_PULSE",
                "SCALD"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "wailord",
        "dexNumber": 321,
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HYPER_BEAM",
                "SURF",
                "SCALD"
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
        "id": "wailord_shadow",
        "dexNumber": 321,
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HYPER_BEAM",
                "SURF",
                "SCALD"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "numel",
        "dexNumber": 322,
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
        "id": "numel_shadow",
        "dexNumber": 322,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "camerupt",
        "dexNumber": 323,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "camerupt_shadow",
        "dexNumber": 323,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "torkoal",
        "dexNumber": 324,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "spoink_shadow",
        "dexNumber": 325,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "grumpig",
        "dexNumber": 326,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "grumpig_shadow",
        "dexNumber": 326,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "spinda",
        "dexNumber": 327,
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
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "STRUGGLE_BUG",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "CRUNCH",
                "DIG",
                "SAND_TOMB",
                "SCORCHING_SANDS"
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
        "id": "trapinch_shadow",
        "dexNumber": 328,
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "STRUGGLE_BUG",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "CRUNCH",
                "DIG",
                "SAND_TOMB",
                "SCORCHING_SANDS"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "vibrava",
        "dexNumber": 329,
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "MUD_SHOT",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "BULLDOZE",
                "SAND_TOMB",
                "SCORCHING_SANDS"
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
        "id": "vibrava_shadow",
        "dexNumber": 329,
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "MUD_SHOT",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "BULLDOZE",
                "SAND_TOMB",
                "SCORCHING_SANDS"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "flygon",
        "dexNumber": 330,
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "MUD_SHOT",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "EARTHQUAKE",
                "STONE_EDGE",
                "EARTH_POWER",
                "BOOMBURST",
                "SCORCHING_SANDS"
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
        "id": "flygon_shadow",
        "dexNumber": 330,
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "MUD_SHOT",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "EARTHQUAKE",
                "STONE_EDGE",
                "EARTH_POWER",
                "BOOMBURST",
                "SCORCHING_SANDS"
            ],
            "eliteMoves": [
                "EARTH_POWER"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "cacnea",
        "dexNumber": 331,
        "moves": {
            "fastMoves": [
                "POISON_STING",
                "SUCKER_PUNCH",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "GRASS_KNOT",
                "SEED_BOMB",
                "PAYBACK",
                "TRAILBLAZE"
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
        "id": "cacnea_shadow",
        "dexNumber": 331,
        "moves": {
            "fastMoves": [
                "POISON_STING",
                "SUCKER_PUNCH",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "GRASS_KNOT",
                "SEED_BOMB",
                "PAYBACK",
                "TRAILBLAZE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "cacturne",
        "dexNumber": 332,
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "SUCKER_PUNCH",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "DYNAMIC_PUNCH",
                "GRASS_KNOT",
                "PAYBACK",
                "TRAILBLAZE"
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
        "id": "cacturne_shadow",
        "dexNumber": 332,
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "SUCKER_PUNCH",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "DYNAMIC_PUNCH",
                "GRASS_KNOT",
                "PAYBACK",
                "TRAILBLAZE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "swablu",
        "dexNumber": 333,
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
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "ROCK_THROW",
                "PSYWAVE"
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
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "ROCK_THROW",
                "PSYWAVE"
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
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "ICE_BEAM",
                "MUD_BOMB",
                "SCALD"
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
        "id": "barboach_shadow",
        "dexNumber": 339,
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "ICE_BEAM",
                "MUD_BOMB",
                "SCALD"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "whiscash",
        "dexNumber": 340,
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "MUD_BOMB",
                "WATER_PULSE",
                "SCALD"
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
        "id": "whiscash_shadow",
        "dexNumber": 340,
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "MUD_BOMB",
                "WATER_PULSE",
                "SCALD"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "corphish",
        "dexNumber": 341,
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "BUBBLE_BEAM",
                "VICE_GRIP",
                "RAZOR_SHELL",
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
        "id": "corphish_shadow",
        "dexNumber": 341,
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "BUBBLE_BEAM",
                "VICE_GRIP",
                "RAZOR_SHELL",
                "SCALD"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "crawdaunt",
        "dexNumber": 342,
        "moves": {
            "fastMoves": [
                "SNARL",
                "WATERFALL"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "NIGHT_SLASH",
                "VICE_GRIP",
                "CRABHAMMER",
                "RAZOR_SHELL",
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
        "id": "crawdaunt_shadow",
        "dexNumber": 342,
        "moves": {
            "fastMoves": [
                "SNARL",
                "WATERFALL"
            ],
            "chargedMoves": [
                "BUBBLE_BEAM",
                "NIGHT_SLASH",
                "VICE_GRIP",
                "CRABHAMMER",
                "RAZOR_SHELL",
                "SCALD"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "baltoy",
        "dexNumber": 343,
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
                "ROCK_TOMB",
                "SCORCHING_SANDS"
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
        "id": "lileep_shadow",
        "dexNumber": 345,
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
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "cradily",
        "dexNumber": 346,
        "moves": {
            "fastMoves": [
                "ACID",
                "INFESTATION",
                "BULLET_SEED"
            ],
            "chargedMoves": [
                "BULLDOZE",
                "GRASS_KNOT",
                "STONE_EDGE",
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
        "id": "cradily_shadow",
        "dexNumber": 346,
        "moves": {
            "fastMoves": [
                "ACID",
                "INFESTATION",
                "BULLET_SEED"
            ],
            "chargedMoves": [
                "BULLDOZE",
                "GRASS_KNOT",
                "STONE_EDGE",
                "ROCK_SLIDE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "anorith",
        "dexNumber": 347,
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
        "id": "anorith_shadow",
        "dexNumber": 347,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "armaldo",
        "dexNumber": 348,
        "moves": {
            "fastMoves": [
                "FURY_CUTTER",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "CROSS_POISON",
                "ROCK_BLAST",
                "WATER_PULSE",
                "LIQUIDATION"
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
        "id": "armaldo_shadow",
        "dexNumber": 348,
        "moves": {
            "fastMoves": [
                "FURY_CUTTER",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "CROSS_POISON",
                "ROCK_BLAST",
                "WATER_PULSE",
                "LIQUIDATION"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "feebas",
        "dexNumber": 349,
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
        "released": true
    },
    {
        "id": "shuppet",
        "dexNumber": 353,
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
        "id": "shuppet_shadow",
        "dexNumber": 353,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "banette",
        "dexNumber": 354,
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
        "id": "banette_mega",
        "dexNumber": 354,
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
            "shadoweligible",
            "mega"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "banette_shadow",
        "dexNumber": 354,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "duskull",
        "dexNumber": 355,
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
        "id": "duskull_shadow",
        "dexNumber": 355,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "dusclops",
        "dexNumber": 356,
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "HEX"
            ],
            "chargedMoves": [
                "FIRE_PUNCH",
                "ICE_PUNCH",
                "SHADOW_PUNCH",
                "POLTERGEIST"
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
        "id": "dusclops_shadow",
        "dexNumber": 356,
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "HEX"
            ],
            "chargedMoves": [
                "FIRE_PUNCH",
                "ICE_PUNCH",
                "SHADOW_PUNCH",
                "POLTERGEIST"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "tropius",
        "dexNumber": 357,
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
            "shadoweligible",
            "mega"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "absol_shadow",
        "dexNumber": 359,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "wynaut",
        "dexNumber": 360,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "snorunt_shadow",
        "dexNumber": 361,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "glalie",
        "dexNumber": 362,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "glalie_mega",
        "dexNumber": 362,
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
        "tags": [
            "mega"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "glalie_shadow",
        "dexNumber": 362,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "spheal",
        "dexNumber": 363,
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
        "id": "spheal_shadow",
        "dexNumber": 363,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "sealeo",
        "dexNumber": 364,
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
        "id": "sealeo_shadow",
        "dexNumber": 364,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "walrein",
        "dexNumber": 365,
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
        "id": "walrein_shadow",
        "dexNumber": 365,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "clamperl",
        "dexNumber": 366,
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
        "id": "bagon_shadow",
        "dexNumber": 371,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "shelgon",
        "dexNumber": 372,
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
        "id": "shelgon_shadow",
        "dexNumber": 372,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "salamence",
        "dexNumber": 373,
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
                "OUTRAGE",
                "FLY"
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
        "id": "salamence_mega",
        "dexNumber": 373,
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
                "OUTRAGE",
                "FLY"
            ],
            "eliteMoves": [
                "OUTRAGE"
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
        "id": "salamence_shadow",
        "dexNumber": 373,
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
                "OUTRAGE",
                "FLY"
            ],
            "eliteMoves": [
                "OUTRAGE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "beldum",
        "dexNumber": 374,
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
        "id": "beldum_shadow",
        "dexNumber": 374,
        "moves": {
            "fastMoves": [
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "metang",
        "dexNumber": 375,
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
        "id": "metang_shadow",
        "dexNumber": 375,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "metagross",
        "dexNumber": 376,
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
        "id": "metagross_shadow",
        "dexNumber": 376,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "regirock",
        "dexNumber": 377,
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
            "legendary",
            "shadoweligible"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "regirock_shadow",
        "dexNumber": 377,
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
            "legendary",
            "shadow"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "regice",
        "dexNumber": 378,
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
            "legendary",
            "shadoweligible"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "regice_shadow",
        "dexNumber": 378,
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
            "legendary",
            "shadow"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "registeel",
        "dexNumber": 379,
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
            "legendary",
            "shadoweligible"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "registeel_shadow",
        "dexNumber": 379,
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
            "legendary",
            "shadow"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "latias",
        "dexNumber": 380,
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
            "shadoweligible",
            "mega"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "latias_shadow",
        "dexNumber": 380,
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
            "shadow"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "latios",
        "dexNumber": 381,
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
            "shadoweligible"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "latios_mega",
        "dexNumber": 381,
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
            "shadoweligible",
            "mega"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "latios_shadow",
        "dexNumber": 381,
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
            "shadow"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "kyogre",
        "dexNumber": 382,
        "moves": {
            "fastMoves": [
                "WATERFALL"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HYDRO_PUMP",
                "THUNDER",
                "SURF",
                "ORIGIN_PULSE"
            ],
            "eliteMoves": [
                "ORIGIN_PULSE"
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
        "id": "kyogre_primal",
        "dexNumber": 382,
        "moves": {
            "fastMoves": [
                "WATERFALL"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HYDRO_PUMP",
                "THUNDER",
                "SURF",
                "ORIGIN_PULSE"
            ],
            "eliteMoves": [
                "ORIGIN_PULSE"
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
        "id": "kyogre_shadow",
        "dexNumber": 382,
        "moves": {
            "fastMoves": [
                "WATERFALL"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "HYDRO_PUMP",
                "THUNDER",
                "SURF",
                "ORIGIN_PULSE"
            ],
            "eliteMoves": [
                "ORIGIN_PULSE"
            ]
        },
        "tags": [
            "legendary",
            "shadow"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "groudon",
        "dexNumber": 383,
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "FIRE_BLAST",
                "SOLAR_BEAM",
                "FIRE_PUNCH",
                "PRECIPICE_BLADES"
            ],
            "eliteMoves": [
                "PRECIPICE_BLADES",
                "FIRE_PUNCH"
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
        "id": "groudon_primal",
        "dexNumber": 383,
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "FIRE_BLAST",
                "SOLAR_BEAM",
                "FIRE_PUNCH",
                "PRECIPICE_BLADES"
            ],
            "eliteMoves": [
                "PRECIPICE_BLADES",
                "FIRE_PUNCH"
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
        "id": "groudon_shadow",
        "dexNumber": 383,
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "FIRE_BLAST",
                "SOLAR_BEAM",
                "FIRE_PUNCH",
                "PRECIPICE_BLADES"
            ],
            "eliteMoves": [
                "PRECIPICE_BLADES",
                "FIRE_PUNCH"
            ]
        },
        "tags": [
            "legendary",
            "shadow"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "rayquaza",
        "dexNumber": 384,
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "ANCIENT_POWER",
                "OUTRAGE",
                "HURRICANE",
                "BREAKING_SWIPE",
                "DRAGON_ASCENT"
            ],
            "eliteMoves": [
                "HURRICANE",
                "BREAKING_SWIPE",
                "DRAGON_ASCENT"
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
        "id": "rayquaza_mega",
        "dexNumber": 384,
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "ANCIENT_POWER",
                "OUTRAGE",
                "HURRICANE",
                "BREAKING_SWIPE",
                "DRAGON_ASCENT"
            ],
            "eliteMoves": [
                "HURRICANE",
                "BREAKING_SWIPE",
                "DRAGON_ASCENT"
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
        "id": "jirachi",
        "dexNumber": 385,
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
        "id": "turtwig_shadow",
        "dexNumber": 387,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "grotle",
        "dexNumber": 388,
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
        "id": "grotle_shadow",
        "dexNumber": 388,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "torterra",
        "dexNumber": 389,
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
        "id": "torterra_shadow",
        "dexNumber": 389,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "chimchar",
        "dexNumber": 390,
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
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "chimchar_shadow",
        "dexNumber": 390,
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
            "starter",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "monferno",
        "dexNumber": 391,
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
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "monferno_shadow",
        "dexNumber": 391,
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
            "starter",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "infernape",
        "dexNumber": 392,
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
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "infernape_shadow",
        "dexNumber": 392,
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
            "starter",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "piplup",
        "dexNumber": 393,
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
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "piplup_shadow",
        "dexNumber": 393,
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
            "starter",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "prinplup",
        "dexNumber": 394,
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
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "prinplup_shadow",
        "dexNumber": 394,
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
            "starter",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "empoleon",
        "dexNumber": 395,
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "WATERFALL",
                "STEEL_WING"
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
            "starter",
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "empoleon_shadow",
        "dexNumber": 395,
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "WATERFALL",
                "STEEL_WING"
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
            "starter",
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "starly",
        "dexNumber": 396,
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "TACKLE",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BRAVE_BIRD",
                "FLY"
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
        "id": "starly_shadow",
        "dexNumber": 396,
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "TACKLE",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BRAVE_BIRD",
                "FLY"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "staravia",
        "dexNumber": 397,
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "WING_ATTACK",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BRAVE_BIRD",
                "HEAT_WAVE",
                "FLY"
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
        "id": "staravia_shadow",
        "dexNumber": 397,
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "WING_ATTACK",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BRAVE_BIRD",
                "HEAT_WAVE",
                "FLY"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "staraptor",
        "dexNumber": 398,
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "WING_ATTACK",
                "GUST",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "BRAVE_BIRD",
                "CLOSE_COMBAT",
                "HEAT_WAVE",
                "FLY"
            ],
            "eliteMoves": [
                "GUST"
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
        "id": "staraptor_shadow",
        "dexNumber": 398,
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "WING_ATTACK",
                "GUST",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "BRAVE_BIRD",
                "CLOSE_COMBAT",
                "HEAT_WAVE",
                "FLY"
            ],
            "eliteMoves": [
                "GUST"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "bidoof",
        "dexNumber": 399,
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
        "id": "bidoof_shadow",
        "dexNumber": 399,
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
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "bibarel",
        "dexNumber": 400,
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
        "id": "bibarel_shadow",
        "dexNumber": 400,
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
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "kricketot",
        "dexNumber": 401,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "shinx_shadow",
        "dexNumber": 403,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "luxio",
        "dexNumber": 404,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "luxio_shadow",
        "dexNumber": 404,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "luxray",
        "dexNumber": 405,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "luxray_shadow",
        "dexNumber": 405,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "budew",
        "dexNumber": 406,
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
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "RAZOR_LEAF",
                "BULLET_SEED",
                "MAGICAL_LEAF"
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "cranidos_shadow",
        "dexNumber": 408,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "rampardos",
        "dexNumber": 409,
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
        "tags": [
            "include1500",
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "rampardos_shadow",
        "dexNumber": 409,
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
        "tags": [
            "include1500",
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "shieldon",
        "dexNumber": 410,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "shieldon_shadow",
        "dexNumber": 410,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "bastiodon",
        "dexNumber": 411,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "bastiodon_shadow",
        "dexNumber": 411,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "burmy_plant",
        "dexNumber": 412,
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
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "CONFUSION",
                "METAL_SOUND"
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
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "WATERFALL"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "HYDRO_PUMP",
                "SWIFT",
                "LIQUIDATION"
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
        "id": "ambipom_shadow",
        "dexNumber": 424,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "drifloon",
        "dexNumber": 425,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "drifloon_shadow",
        "dexNumber": 425,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "drifblim",
        "dexNumber": 426,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "HEX"
            ],
            "chargedMoves": [
                "ICY_WIND",
                "OMINOUS_WIND",
                "SHADOW_BALL",
                "MYSTICAL_FIRE"
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
        "id": "drifblim_shadow",
        "dexNumber": 426,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "HEX"
            ],
            "chargedMoves": [
                "ICY_WIND",
                "OMINOUS_WIND",
                "SHADOW_BALL",
                "MYSTICAL_FIRE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "buneary",
        "dexNumber": 427,
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
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "POUND",
                "DOUBLE_KICK"
            ],
            "chargedMoves": [
                "FIRE_PUNCH",
                "FOCUS_BLAST",
                "HYPER_BEAM",
                "TRIPLE_AXEL"
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
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "POUND",
                "DOUBLE_KICK"
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
        "moves": {
            "fastMoves": [
                "HEX",
                "SUCKER_PUNCH",
                "MAGICAL_LEAF",
                "PSYWAVE"
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
        "id": "mismagius_shadow",
        "dexNumber": 429,
        "moves": {
            "fastMoves": [
                "HEX",
                "SUCKER_PUNCH",
                "MAGICAL_LEAF",
                "PSYWAVE"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "DAZZLING_GLEAM",
                "SHADOW_BALL"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "honchkrow",
        "dexNumber": 430,
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
        "id": "honchkrow_shadow",
        "dexNumber": 430,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "glameow",
        "dexNumber": 431,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "glameow_shadow",
        "dexNumber": 431,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "purugly",
        "dexNumber": 432,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "purugly_shadow",
        "dexNumber": 432,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "chingling",
        "dexNumber": 433,
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
        "moves": {
            "fastMoves": [
                "BITE",
                "SCRATCH"
            ],
            "chargedMoves": [
                "CRUNCH",
                "FLAMETHROWER",
                "SLUDGE_BOMB",
                "TRAILBLAZE"
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
        "id": "stunky_shadow",
        "dexNumber": 434,
        "moves": {
            "fastMoves": [
                "BITE",
                "SCRATCH"
            ],
            "chargedMoves": [
                "CRUNCH",
                "FLAMETHROWER",
                "SLUDGE_BOMB",
                "TRAILBLAZE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "skuntank",
        "dexNumber": 435,
        "moves": {
            "fastMoves": [
                "BITE",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "CRUNCH",
                "FLAMETHROWER",
                "SLUDGE_BOMB",
                "TRAILBLAZE"
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
        "id": "skuntank_shadow",
        "dexNumber": 435,
        "moves": {
            "fastMoves": [
                "BITE",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "CRUNCH",
                "FLAMETHROWER",
                "SLUDGE_BOMB",
                "TRAILBLAZE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "bronzor",
        "dexNumber": 436,
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
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "FEINT_ATTACK",
                "METAL_SOUND"
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "gible_shadow",
        "dexNumber": 443,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "gabite",
        "dexNumber": 444,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "gabite_shadow",
        "dexNumber": 444,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "garchomp",
        "dexNumber": 445,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "garchomp_mega",
        "dexNumber": 445,
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
        "tags": [
            "mega"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "garchomp_shadow",
        "dexNumber": 445,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "munchlax",
        "dexNumber": 446,
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
        "moves": {
            "fastMoves": [
                "COUNTER",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "CROSS_CHOP",
                "LOW_SWEEP",
                "BLAZE_KICK",
                "THUNDER_PUNCH"
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
        "moves": {
            "fastMoves": [
                "BULLET_PUNCH",
                "COUNTER",
                "FORCE_PALM"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "FLASH_CANNON",
                "SHADOW_BALL",
                "POWER_UP_PUNCH",
                "AURA_SPHERE",
                "BLAZE_KICK",
                "THUNDER_PUNCH"
            ],
            "eliteMoves": [
                "FORCE_PALM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "lucario_mega",
        "dexNumber": 448,
        "moves": {
            "fastMoves": [
                "BULLET_PUNCH",
                "COUNTER",
                "FORCE_PALM"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "FLASH_CANNON",
                "SHADOW_BALL",
                "POWER_UP_PUNCH",
                "AURA_SPHERE",
                "BLAZE_KICK",
                "THUNDER_PUNCH"
            ],
            "eliteMoves": [
                "FORCE_PALM"
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
        "id": "hippopotas",
        "dexNumber": 449,
        "moves": {
            "fastMoves": [
                "BITE",
                "TACKLE",
                "SAND_ATTACK"
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
        "id": "hippopotas_shadow",
        "dexNumber": 449,
        "moves": {
            "fastMoves": [
                "BITE",
                "TACKLE",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "DIG",
                "ROCK_TOMB"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "hippowdon",
        "dexNumber": 450,
        "moves": {
            "fastMoves": [
                "BITE",
                "FIRE_FANG",
                "THUNDER_FANG",
                "ICE_FANG",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "EARTHQUAKE",
                "STONE_EDGE",
                "EARTH_POWER",
                "WEATHER_BALL_ROCK",
                "SCORCHING_SANDS"
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
        "id": "hippowdon_shadow",
        "dexNumber": 450,
        "moves": {
            "fastMoves": [
                "BITE",
                "FIRE_FANG",
                "THUNDER_FANG",
                "ICE_FANG",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "EARTHQUAKE",
                "STONE_EDGE",
                "EARTH_POWER",
                "WEATHER_BALL_ROCK",
                "SCORCHING_SANDS"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "skorupi",
        "dexNumber": 451,
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
        "id": "skorupi_shadow",
        "dexNumber": 451,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "drapion",
        "dexNumber": 452,
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
        "id": "drapion_shadow",
        "dexNumber": 452,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "croagunk",
        "dexNumber": 453,
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "POISON_STING",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "LOW_SWEEP",
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
        "id": "croagunk_shadow",
        "dexNumber": 453,
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "POISON_STING",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "LOW_SWEEP",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "toxicroak",
        "dexNumber": 454,
        "moves": {
            "fastMoves": [
                "COUNTER",
                "POISON_JAB",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "DYNAMIC_PUNCH",
                "MUD_BOMB",
                "SLUDGE_BOMB",
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
        "id": "toxicroak_shadow",
        "dexNumber": 454,
        "moves": {
            "fastMoves": [
                "COUNTER",
                "POISON_JAB",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "DYNAMIC_PUNCH",
                "MUD_BOMB",
                "SLUDGE_BOMB",
                "SHADOW_BALL"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "carnivine",
        "dexNumber": 455,
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
        "moves": {
            "fastMoves": [
                "ICE_SHARD",
                "POWDER_SNOW",
                "LEAFAGE"
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
        "id": "snover_shadow",
        "dexNumber": 459,
        "moves": {
            "fastMoves": [
                "ICE_SHARD",
                "POWDER_SNOW",
                "LEAFAGE"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "ICE_BEAM",
                "STOMP"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "abomasnow",
        "dexNumber": 460,
        "moves": {
            "fastMoves": [
                "POWDER_SNOW",
                "RAZOR_LEAF",
                "LEAFAGE"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "ENERGY_BALL",
                "OUTRAGE",
                "WEATHER_BALL_ICE",
                "ICY_WIND"
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
        "moves": {
            "fastMoves": [
                "POWDER_SNOW",
                "RAZOR_LEAF",
                "LEAFAGE"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "ENERGY_BALL",
                "OUTRAGE",
                "WEATHER_BALL_ICE",
                "ICY_WIND"
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
        "id": "abomasnow_shadow",
        "dexNumber": 460,
        "moves": {
            "fastMoves": [
                "POWDER_SNOW",
                "RAZOR_LEAF",
                "LEAFAGE"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "ENERGY_BALL",
                "OUTRAGE",
                "WEATHER_BALL_ICE",
                "ICY_WIND"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "weavile",
        "dexNumber": 461,
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "ICE_SHARD",
                "SNARL"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "FOCUS_BLAST",
                "FOUL_PLAY",
                "TRIPLE_AXEL"
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
        "id": "weavile_shadow",
        "dexNumber": 461,
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "ICE_SHARD",
                "SNARL"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "FOCUS_BLAST",
                "FOUL_PLAY",
                "TRIPLE_AXEL"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "magnezone",
        "dexNumber": 462,
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "SPARK",
                "VOLT_SWITCH",
                "METAL_SOUND"
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
        "id": "magnezone_shadow",
        "dexNumber": 462,
        "moves": {
            "fastMoves": [
                "CHARGE_BEAM",
                "SPARK",
                "VOLT_SWITCH",
                "METAL_SOUND"
            ],
            "chargedMoves": [
                "FLASH_CANNON",
                "WILD_CHARGE",
                "ZAP_CANNON",
                "MIRROR_SHOT"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "lickilicky",
        "dexNumber": 463,
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
                "ROCK_WRECKER",
                "BREAKING_SWIPE"
            ],
            "eliteMoves": [
                "ROCK_WRECKER"
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
        "id": "rhyperior_shadow",
        "dexNumber": 464,
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
                "ROCK_WRECKER",
                "BREAKING_SWIPE"
            ],
            "eliteMoves": [
                "ROCK_WRECKER"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "tangrowth",
        "dexNumber": 465,
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
        "id": "tangrowth_shadow",
        "dexNumber": 465,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "electivire",
        "dexNumber": 466,
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
        "id": "electivire_shadow",
        "dexNumber": 466,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "magmortar",
        "dexNumber": 467,
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
                "THUNDERBOLT",
                "SCORCHING_SANDS"
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
        "id": "magmortar_shadow",
        "dexNumber": 467,
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
                "THUNDERBOLT",
                "SCORCHING_SANDS"
            ],
            "eliteMoves": [
                "THUNDERBOLT"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "togekiss",
        "dexNumber": 468,
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
                "FLAMETHROWER",
                "AURA_SPHERE"
            ],
            "eliteMoves": [
                "AURA_SPHERE"
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
        "id": "gliscor_shadow",
        "dexNumber": 472,
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "mamoswine",
        "dexNumber": 473,
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "BULLDOZE",
                "STONE_EDGE",
                "ANCIENT_POWER",
                "HIGH_HORSEPOWER"
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
        "id": "mamoswine_shadow",
        "dexNumber": 473,
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "BULLDOZE",
                "STONE_EDGE",
                "ANCIENT_POWER",
                "HIGH_HORSEPOWER"
            ],
            "eliteMoves": [
                "ANCIENT_POWER"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "porygon_z",
        "dexNumber": 474,
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
        "id": "porygon_z_shadow",
        "dexNumber": 474,
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
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gallade",
        "dexNumber": 475,
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "LOW_KICK",
                "CHARM",
                "PSYCHO_CUT"
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
        "id": "gallade_shadow",
        "dexNumber": 475,
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "LOW_KICK",
                "CHARM",
                "PSYCHO_CUT"
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
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "probopass",
        "dexNumber": 476,
        "moves": {
            "fastMoves": [
                "ROCK_THROW",
                "SPARK"
            ],
            "chargedMoves": [
                "MAGNET_BOMB",
                "ROCK_SLIDE",
                "THUNDERBOLT",
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
        "id": "probopass_shadow",
        "dexNumber": 476,
        "moves": {
            "fastMoves": [
                "ROCK_THROW",
                "SPARK"
            ],
            "chargedMoves": [
                "MAGNET_BOMB",
                "ROCK_SLIDE",
                "THUNDERBOLT",
                "ZAP_CANNON"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "dusknoir",
        "dexNumber": 477,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "HEX"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "OMINOUS_WIND",
                "PSYCHIC",
                "SHADOW_BALL",
                "POLTERGEIST"
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
        "id": "dusknoir_shadow",
        "dexNumber": 477,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "HEX"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "OMINOUS_WIND",
                "PSYCHIC",
                "SHADOW_BALL",
                "POLTERGEIST"
            ],
            "eliteMoves": [
                "SHADOW_BALL"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "froslass",
        "dexNumber": 478,
        "moves": {
            "fastMoves": [
                "HEX",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "CRUNCH",
                "SHADOW_BALL",
                "TRIPLE_AXEL"
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
        "id": "froslass_shadow",
        "dexNumber": 478,
        "moves": {
            "fastMoves": [
                "HEX",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "AVALANCHE",
                "CRUNCH",
                "SHADOW_BALL",
                "TRIPLE_AXEL"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "rotom",
        "dexNumber": 479,
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
        "released": true
    },
    {
        "id": "rotom_fan",
        "dexNumber": 479,
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "ASTONISH"
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
        "id": "rotom_frost",
        "dexNumber": 479,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "BLIZZARD",
                "THUNDER",
                "THUNDERBOLT"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "rotom_heat",
        "dexNumber": 479,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "OVERHEAT",
                "THUNDER",
                "THUNDERBOLT"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "rotom_mow",
        "dexNumber": 479,
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
        "released": true
    },
    {
        "id": "rotom_wash",
        "dexNumber": 479,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "HYDRO_PUMP",
                "THUNDER",
                "THUNDERBOLT"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "uxie",
        "dexNumber": 480,
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
        "id": "dialga_origin",
        "dexNumber": 483,
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "METAL_CLAW"
            ],
            "chargedMoves": [
                "DRACO_METEOR",
                "IRON_HEAD",
                "THUNDER",
                "ROAR_OF_TIME"
            ],
            "legacyMoves": [
                "ROAR_OF_TIME"
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
        "id": "palkia_origin",
        "dexNumber": 484,
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "DRACO_METEOR",
                "FIRE_BLAST",
                "HYDRO_PUMP",
                "AQUA_TAIL",
                "SPACIAL_REND"
            ],
            "legacyMoves": [
                "SPACIAL_REND"
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
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "FIRE_SPIN"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "IRON_HEAD",
                "STONE_EDGE",
                "FLAMETHROWER",
                "EARTH_POWER",
                "MAGMA_STORM"
            ],
            "eliteMoves": [
                "MAGMA_STORM"
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
            "legendary",
            "shadoweligible"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "regigigas_shadow",
        "dexNumber": 486,
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
            "legendary",
            "shadow"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "giratina_altered",
        "dexNumber": 487,
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "ANCIENT_POWER",
                "DRAGON_CLAW",
                "SHADOW_SNEAK",
                "SHADOW_FORCE"
            ],
            "eliteMoves": [
                "SHADOW_FORCE"
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
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "OMINOUS_WIND",
                "DRAGON_PULSE",
                "SHADOW_BALL",
                "SHADOW_FORCE"
            ],
            "eliteMoves": [
                "SHADOW_FORCE"
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
                "ZEN_HEADBUTT",
                "MAGICAL_LEAF"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "GRASS_KNOT",
                "SOLAR_BEAM",
                "SEED_FLARE"
            ],
            "eliteMoves": [
                "SEED_FLARE"
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
        "id": "shaymin_sky",
        "dexNumber": 492,
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
                "ZEN_HEADBUTT",
                "MAGICAL_LEAF"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "GRASS_KNOT",
                "SOLAR_BEAM",
                "SEED_FLARE"
            ],
            "eliteMoves": [
                "SEED_FLARE"
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
        "id": "arceus",
        "dexNumber": 493,
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
        "id": "arceus_bug",
        "dexNumber": 493,
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
        "id": "arceus_dark",
        "dexNumber": 493,
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
        "id": "arceus_dragon",
        "dexNumber": 493,
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
        "id": "arceus_electric",
        "dexNumber": 493,
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
        "id": "arceus_fairy",
        "dexNumber": 493,
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
        "id": "arceus_fighting",
        "dexNumber": 493,
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
        "id": "arceus_fire",
        "dexNumber": 493,
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
        "id": "arceus_flying",
        "dexNumber": 493,
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
        "id": "arceus_ghost",
        "dexNumber": 493,
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
        "id": "arceus_grass",
        "dexNumber": 493,
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
        "id": "arceus_ground",
        "dexNumber": 493,
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
        "id": "arceus_ice",
        "dexNumber": 493,
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
        "id": "arceus_poison",
        "dexNumber": 493,
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
        "id": "arceus_psychic",
        "dexNumber": 493,
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
        "id": "arceus_rock",
        "dexNumber": 493,
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
        "id": "arceus_steel",
        "dexNumber": 493,
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
        "id": "arceus_water",
        "dexNumber": 493,
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
                "HYDRO_CANNON",
                "LIQUIDATION"
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
        "id": "samurott_hisuian",
        "dexNumber": 503,
        "moves": {
            "fastMoves": [
                "FURY_CUTTER",
                "WATERFALL",
                "SNARL"
            ],
            "chargedMoves": [
                "RAZOR_SHELL",
                "ICY_WIND",
                "X_SCISSOR",
                "DARK_PULSE"
            ]
        },
        "tags": [
            "starter",
            "hisuian"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "patrat",
        "dexNumber": 504,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "patrat_shadow",
        "dexNumber": 504,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "watchog",
        "dexNumber": 505,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "watchog_shadow",
        "dexNumber": 505,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "lillipup",
        "dexNumber": 506,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN",
                "SAND_ATTACK"
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
        "moves": {
            "fastMoves": [
                "LICK",
                "TAKE_DOWN",
                "SAND_ATTACK"
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
        "moves": {
            "fastMoves": [
                "LICK",
                "TAKE_DOWN",
                "ICE_FANG",
                "SAND_ATTACK"
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "purrloin_shadow",
        "dexNumber": 509,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "liepard",
        "dexNumber": 510,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "liepard_shadow",
        "dexNumber": 510,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pansage",
        "dexNumber": 511,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "pidove_shadow",
        "dexNumber": 519,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "tranquill",
        "dexNumber": 520,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "tranquill_shadow",
        "dexNumber": 520,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "unfezant",
        "dexNumber": 521,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "unfezant_shadow",
        "dexNumber": 521,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "blitzle",
        "dexNumber": 522,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "blitzle_shadow",
        "dexNumber": 522,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "zebstrika",
        "dexNumber": 523,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "zebstrika_shadow",
        "dexNumber": 523,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "roggenrola",
        "dexNumber": 524,
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
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "SMACK_DOWN"
            ],
            "chargedMoves": [
                "ROCK_SLIDE",
                "SOLAR_BEAM",
                "SUPER_POWER",
                "HEAVY_SLAM",
                "METEOR_BEAM"
            ],
            "eliteMoves": [
                "METEOR_BEAM"
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
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "PSYCHIC",
                "AERIAL_ACE",
                "FUTURE_SIGHT",
                "PSYCHIC_FANGS",
                "FLY"
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "drilbur_shadow",
        "dexNumber": 529,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "excadrill",
        "dexNumber": 530,
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
                "IRON_HEAD",
                "SCORCHING_SANDS"
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
        "id": "excadrill_shadow",
        "dexNumber": 530,
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
                "IRON_HEAD",
                "SCORCHING_SANDS"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "audino",
        "dexNumber": 531,
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
        "id": "timburr",
        "dexNumber": 532,
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
        "moves": {
            "fastMoves": [
                "COUNTER",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "DYNAMIC_PUNCH",
                "FOCUS_BLAST",
                "STONE_EDGE",
                "BRUTAL_SWING"
            ],
            "eliteMoves": [
                "BRUTAL_SWING"
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
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "FOCUS_BLAST",
                "LOW_SWEEP",
                "BODY_SLAM",
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
        "id": "throh_shadow",
        "dexNumber": 538,
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "FOCUS_BLAST",
                "LOW_SWEEP",
                "BODY_SLAM",
                "BRICK_BREAK"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "sawk",
        "dexNumber": 539,
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "FOCUS_BLAST",
                "LOW_SWEEP",
                "BODY_SLAM",
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
        "id": "sawk_shadow",
        "dexNumber": 539,
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "FOCUS_BLAST",
                "LOW_SWEEP",
                "BODY_SLAM",
                "BRICK_BREAK"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "sewaddle",
        "dexNumber": 540,
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
        "moves": {
            "fastMoves": [
                "CHARM",
                "RAZOR_LEAF",
                "FAIRY_WIND"
            ],
            "chargedMoves": [
                "GRASS_KNOT",
                "HURRICANE",
                "MOONBLAST",
                "SEED_BOMB"
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
                "HIDDEN_POWER_WATER",
                "MAGICAL_LEAF"
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
        "moves": {
            "fastMoves": [
                "SNARL",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "CRUNCH",
                "OUTRAGE",
                "BRICK_BREAK"
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "darumaka_galarian",
        "dexNumber": 554,
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
        "id": "darumaka_shadow",
        "dexNumber": 554,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "darmanitan_galarian_zen",
        "dexNumber": 555,
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
        "id": "darmanitan_galarian_standard",
        "dexNumber": 555,
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
        "id": "darmanitan_standard",
        "dexNumber": 555,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "darmanitan_zen",
        "dexNumber": 555,
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
        "released": false
    },
    {
        "id": "darmanitan_standard_shadow",
        "dexNumber": 555,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "maractus",
        "dexNumber": 556,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "dwebble_shadow",
        "dexNumber": 557,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "crustle",
        "dexNumber": 558,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "crustle_shadow",
        "dexNumber": 558,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "scraggy",
        "dexNumber": 559,
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "FEINT_ATTACK"
            ],
            "chargedMoves": [
                "ACID_SPRAY",
                "BRICK_BREAK",
                "FOUL_PLAY",
                "THUNDER_PUNCH"
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
        "moves": {
            "fastMoves": [
                "COUNTER",
                "SNARL"
            ],
            "chargedMoves": [
                "ACID_SPRAY",
                "POWER_UP_PUNCH",
                "FOUL_PLAY",
                "THUNDER_PUNCH"
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
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "SURF",
                "ANCIENT_POWER",
                "BODY_SLAM",
                "LIQUIDATION"
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
        "moves": {
            "fastMoves": [
                "POUND",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "GUNK_SHOT",
                "SEED_BOMB"
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
        "released": true
    },
    {
        "id": "zoroark",
        "dexNumber": 571,
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
        "released": true
    },
    {
        "id": "minccino",
        "dexNumber": 572,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gothita_shadow",
        "dexNumber": 574,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gothorita",
        "dexNumber": 575,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gothorita_shadow",
        "dexNumber": 575,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gothitelle",
        "dexNumber": 576,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "gothitelle_shadow",
        "dexNumber": 576,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "solosis",
        "dexNumber": 577,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "solosis_shadow",
        "dexNumber": 577,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "duosion",
        "dexNumber": 578,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "duosion_shadow",
        "dexNumber": 578,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "reuniclus",
        "dexNumber": 579,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "reuniclus_shadow",
        "dexNumber": 579,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "ducklett",
        "dexNumber": 580,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "ducklett_shadow",
        "dexNumber": 580,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "swanna",
        "dexNumber": 581,
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "ICE_BEAM",
                "BUBBLE_BEAM",
                "HURRICANE",
                "FLY"
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
        "id": "swanna_shadow",
        "dexNumber": 581,
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "ICE_BEAM",
                "BUBBLE_BEAM",
                "HURRICANE",
                "FLY"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "vanillite",
        "dexNumber": 582,
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
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "SEED_BOMB",
                "WILD_CHARGE",
                "TRAILBLAZE"
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
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "MEGAHORN",
                "SOLAR_BEAM",
                "WILD_CHARGE",
                "HYPER_BEAM",
                "TRAILBLAZE"
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
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "AERIAL_ACE",
                "THUNDERBOLT",
                "ACROBATICS"
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "foongus_shadow",
        "dexNumber": 590,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "amoonguss",
        "dexNumber": 591,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "amoonguss_shadow",
        "dexNumber": 591,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "frillish",
        "dexNumber": 592,
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
        "moves": {
            "fastMoves": [
                "BUBBLE",
                "HEX"
            ],
            "chargedMoves": [
                "SHADOW_BALL",
                "ICE_BEAM",
                "BUBBLE_BEAM",
                "SURF"
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "joltik_shadow",
        "dexNumber": 595,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "galvantula",
        "dexNumber": 596,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "galvantula_shadow",
        "dexNumber": 596,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "ferroseed",
        "dexNumber": 597,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "ferroseed_shadow",
        "dexNumber": 597,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "ferrothorn",
        "dexNumber": 598,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "ferrothorn_shadow",
        "dexNumber": 598,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "klink",
        "dexNumber": 599,
        "moves": {
            "fastMoves": [
                "VOLT_SWITCH",
                "CHARGE_BEAM",
                "METAL_SOUND"
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
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "CHARGE_BEAM",
                "METAL_SOUND"
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
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "CHARGE_BEAM",
                "METAL_SOUND"
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
        "moves": {
            "fastMoves": [
                "ACID",
                "SPARK",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "CRUNCH",
                "THUNDERBOLT",
                "ACID_SPRAY",
                "DRAGON_CLAW",
                "LIQUIDATION"
            ],
            "eliteMoves": [
                "VOLT_SWITCH"
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
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "EMBER"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "FLAME_BURST",
                "HEAT_WAVE",
                "MYSTICAL_FIRE"
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
        "id": "litwick_shadow",
        "dexNumber": 607,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "EMBER"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "FLAME_BURST",
                "HEAT_WAVE",
                "MYSTICAL_FIRE"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "lampent",
        "dexNumber": 608,
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "lampent_shadow",
        "dexNumber": 608,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "chandelure",
        "dexNumber": 609,
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
                "FLAME_CHARGE",
                "POLTERGEIST"
            ],
            "eliteMoves": [
                "POLTERGEIST"
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
        "id": "chandelure_shadow",
        "dexNumber": 609,
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
                "FLAME_CHARGE",
                "POLTERGEIST"
            ],
            "eliteMoves": [
                "POLTERGEIST"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "axew",
        "dexNumber": 610,
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
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "COUNTER"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "SURF",
                "NIGHT_SLASH",
                "EARTHQUAKE",
                "BREAKING_SWIPE"
            ],
            "eliteMoves": [
                "BREAKING_SWIPE"
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
        "moves": {
            "fastMoves": [
                "POWDER_SNOW",
                "CHARM"
            ],
            "chargedMoves": [
                "ICE_PUNCH",
                "SURF",
                "PLAY_ROUGH",
                "LIQUIDATION"
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
        "moves": {
            "fastMoves": [
                "ICE_SHARD",
                "FROST_BREATH"
            ],
            "chargedMoves": [
                "AURORA_BEAM",
                "NIGHT_SLASH",
                "SOLAR_BEAM",
                "WATER_PULSE",
                "TRIPLE_AXEL"
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
        "moves": {
            "fastMoves": [
                "ACID",
                "INFESTATION",
                "WATER_SHURIKEN"
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
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "GRASS_KNOT",
                "STONE_EDGE",
                "BLAZE_KICK"
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
        "tags": [
            "shadoweligible"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "golett_shadow",
        "dexNumber": 622,
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
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "golurk",
        "dexNumber": 623,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "SHADOW_PUNCH",
                "DYNAMIC_PUNCH",
                "EARTH_POWER",
                "POLTERGEIST"
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
        "id": "golurk_shadow",
        "dexNumber": 623,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "SHADOW_PUNCH",
                "DYNAMIC_PUNCH",
                "EARTH_POWER",
                "POLTERGEIST"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "pawniard",
        "dexNumber": 624,
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
        "moves": {
            "fastMoves": [
                "PECK",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BRAVE_BIRD",
                "ROCK_TOMB",
                "FLY"
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
        "moves": {
            "fastMoves": [
                "STEEL_WING",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "HEAT_WAVE",
                "BRAVE_BIRD",
                "ROCK_SLIDE",
                "CLOSE_COMBAT",
                "FLY"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "braviary_hisuian",
        "dexNumber": 628,
        "moves": {
            "fastMoves": [
                "ZEN_HEADBUTT",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "BRAVE_BIRD",
                "PSYCHIC",
                "OMINOUS_WIND",
                "FLY"
            ]
        },
        "tags": [
            "hisuian"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "vullaby",
        "dexNumber": 629,
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
        "moves": {
            "fastMoves": [
                "BITE",
                "DRAGON_BREATH"
            ],
            "chargedMoves": [
                "DRAGON_PULSE",
                "DARK_PULSE",
                "FLASH_CANNON",
                "BRUTAL_SWING"
            ],
            "eliteMoves": [
                "BRUTAL_SWING"
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
        "released": true
    },
    {
        "id": "volcarona",
        "dexNumber": 637,
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
        "released": true
    },
    {
        "id": "cobalion",
        "dexNumber": 638,
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "ZEN_HEADBUTT",
                "DOUBLE_KICK"
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
        "moves": {
            "fastMoves": [
                "SMACK_DOWN",
                "ZEN_HEADBUTT",
                "DOUBLE_KICK"
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
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "ZEN_HEADBUTT",
                "DOUBLE_KICK"
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
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "GUST"
            ],
            "chargedMoves": [
                "HEAT_WAVE",
                "PSYCHIC",
                "FOCUS_BLAST",
                "HURRICANE",
                "BLEAKWIND_STORM"
            ],
            "eliteMoves": [
                "BLEAKWIND_STORM"
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
        "moves": {
            "fastMoves": [
                "BITE",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "SLUDGE_WAVE",
                "THUNDER",
                "FOCUS_BLAST",
                "THUNDERBOLT",
                "WILDBOLT_STORM"
            ],
            "eliteMoves": [
                "WILDBOLT_STORM"
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
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "FIRE_FANG"
            ],
            "chargedMoves": [
                "CRUNCH",
                "OVERHEAT",
                "DRACO_METEOR",
                "STONE_EDGE",
                "FUSION_FLARE"
            ],
            "eliteMoves": [
                "FUSION_FLARE"
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
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "CHARGE_BEAM"
            ],
            "chargedMoves": [
                "OUTRAGE",
                "WILD_CHARGE",
                "FLASH_CANNON",
                "CRUNCH",
                "FUSION_BOLT"
            ],
            "eliteMoves": [
                "FUSION_BOLT"
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
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "EXTRASENSORY"
            ],
            "chargedMoves": [
                "EARTHQUAKE",
                "STONE_EDGE",
                "SUPER_POWER",
                "BULLDOZE",
                "SANDSEAR_STORM"
            ],
            "eliteMoves": [
                "SANDSEAR_STORM"
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
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "STEEL_WING"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "BLIZZARD",
                "DRACO_METEOR",
                "GLACIATE"
            ],
            "eliteMoves": [
                "GLACIATE"
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
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "LOW_KICK"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "CLOSE_COMBAT",
                "HYDRO_PUMP",
                "X_SCISSOR",
                "SACRED_SWORD"
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
        "id": "keldeo_resolute",
        "dexNumber": 647,
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "LOW_KICK"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "CLOSE_COMBAT",
                "HYDRO_PUMP",
                "X_SCISSOR",
                "SACRED_SWORD"
            ],
            "eliteMoves": [
                "SACRED_SWORD"
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
        "id": "meloetta_aria",
        "dexNumber": 648,
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
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "X_SCISSOR",
                "MAGNET_BOMB",
                "HYPER_BEAM",
                "TECHNO_BLAST_NORMAL"
            ],
            "eliteMoves": [
                "TECHNO_BLAST_NORMAL"
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
        "id": "genesect_burn",
        "dexNumber": 649,
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "X_SCISSOR",
                "MAGNET_BOMB",
                "FLAMETHROWER",
                "TECHNO_BLAST_BURN"
            ],
            "eliteMoves": [
                "TECHNO_BLAST_BURN"
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
        "id": "genesect_chill",
        "dexNumber": 649,
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "X_SCISSOR",
                "MAGNET_BOMB",
                "ICE_BEAM",
                "TECHNO_BLAST_CHILL"
            ],
            "eliteMoves": [
                "TECHNO_BLAST_CHILL"
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
        "id": "genesect_douse",
        "dexNumber": 649,
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "X_SCISSOR",
                "MAGNET_BOMB",
                "GUNK_SHOT",
                "TECHNO_BLAST_DOUSE"
            ],
            "eliteMoves": [
                "TECHNO_BLAST_DOUSE"
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
        "id": "genesect_shock",
        "dexNumber": 649,
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "FURY_CUTTER"
            ],
            "chargedMoves": [
                "X_SCISSOR",
                "MAGNET_BOMB",
                "ZAP_CANNON",
                "TECHNO_BLAST_SHOCK"
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
                "SOLAR_BEAM",
                "FRENZY_PLANT",
                "THUNDER_PUNCH"
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
        "id": "fennekin",
        "dexNumber": 653,
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
                "FIRE_BLAST",
                "BLAST_BURN",
                "MYSTICAL_FIRE"
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
        "id": "froakie",
        "dexNumber": 656,
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
        "moves": {
            "fastMoves": [
                "FEINT_ATTACK",
                "BUBBLE",
                "WATER_SHURIKEN"
            ],
            "chargedMoves": [
                "NIGHT_SLASH",
                "AERIAL_ACE",
                "SURF",
                "HYDRO_PUMP",
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
        "id": "bunnelby",
        "dexNumber": 659,
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
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "DIG",
                "HYPER_BEAM",
                "EARTHQUAKE",
                "FIRE_PUNCH",
                "SCORCHING_SANDS"
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
        "moves": {
            "fastMoves": [
                "PECK",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "HEAT_WAVE",
                "SWIFT",
                "FLY"
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
        "moves": {
            "fastMoves": [
                "PECK",
                "EMBER",
                "STEEL_WING"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "HEAT_WAVE",
                "FLAME_CHARGE",
                "FLY"
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
                "HURRICANE",
                "FLY"
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
        "id": "spewpa",
        "dexNumber": 665,
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
        "id": "vivillon",
        "dexNumber": 666,
        "moves": {
            "fastMoves": [
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
        "released": true
    },
    {
        "id": "litleo",
        "dexNumber": 667,
        "moves": {
            "fastMoves": [
                "FIRE_FANG",
                "TACKLE",
                "EMBER",
                "INCINERATE"
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
        "moves": {
            "fastMoves": [
                "FIRE_FANG",
                "TAKE_DOWN",
                "INCINERATE",
                "EMBER"
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
        "moves": {
            "fastMoves": [
                "VINE_WHIP",
                "TACKLE",
                "RAZOR_LEAF",
                "FAIRY_WIND"
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
        "released": true
    },
    {
        "id": "gogoat",
        "dexNumber": 673,
        "moves": {
            "fastMoves": [
                "ZEN_HEADBUTT",
                "ROCK_SMASH",
                "VINE_WHIP"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "LEAF_BLADE",
                "SEED_BOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "pancham",
        "dexNumber": 674,
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
        "moves": {
            "fastMoves": [
                "TAKE_DOWN",
                "BITE",
                "SUCKER_PUNCH",
                "SAND_ATTACK"
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
        "id": "meowstic_female",
        "dexNumber": 678,
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "CHARM",
                "MAGICAL_LEAF"
            ],
            "chargedMoves": [
                "PSYCHIC",
                "ENERGY_BALL",
                "SHADOW_BALL"
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
        "moves": {
            "fastMoves": [
                "TACKLE",
                "CHARM",
                "FAIRY_WIND"
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
        "moves": {
            "fastMoves": [
                "PECK",
                "TACKLE",
                "PSYWAVE"
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
        "moves": {
            "fastMoves": [
                "PECK",
                "PSYCHO_CUT",
                "PSYWAVE"
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
                "GRASS_KNOT",
                "RAZOR_SHELL"
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
                "GRASS_KNOT",
                "BREAKING_SWIPE"
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
        "released": true
    },
    {
        "id": "tyrantrum",
        "dexNumber": 697,
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
                "EARTHQUAKE",
                "METEOR_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "amaura",
        "dexNumber": 698,
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
        "released": true
    },
    {
        "id": "aurorus",
        "dexNumber": 699,
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
                "HYPER_BEAM",
                "METEOR_BEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "sylveon",
        "dexNumber": 700,
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
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "FLYING_PRESS",
                "AERIAL_ACE",
                "X_SCISSOR",
                "POWER_UP_PUNCH"
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
        "id": "dedenne",
        "dexNumber": 702,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "PLAY_ROUGH",
                "PARABOLIC_CHARGE"
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
        "released": true
    },
    {
        "id": "goomy",
        "dexNumber": 704,
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
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "DRAGON_BREATH"
            ],
            "chargedMoves": [
                "DRACO_METEOR",
                "SLUDGE_WAVE",
                "MUDDY_WATER",
                "POWER_WHIP",
                "AQUA_TAIL",
                "THUNDER_PUNCH"
            ],
            "eliteMoves": [
                "THUNDER_PUNCH"
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
        "id": "pumpkaboo_average",
        "dexNumber": 710,
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
        "id": "pumpkaboo_small",
        "dexNumber": 710,
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
        "id": "gourgeist_average",
        "dexNumber": 711,
        "moves": {
            "fastMoves": [
                "HEX",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "SEED_BOMB",
                "SHADOW_BALL",
                "FOUL_PLAY",
                "FIRE_BLAST",
                "POLTERGEIST"
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
        "moves": {
            "fastMoves": [
                "HEX",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "SEED_BOMB",
                "SHADOW_BALL",
                "FOUL_PLAY",
                "FIRE_BLAST",
                "POLTERGEIST"
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
        "id": "gourgeist_small",
        "dexNumber": 711,
        "moves": {
            "fastMoves": [
                "HEX",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "SEED_BOMB",
                "SHADOW_BALL",
                "FOUL_PLAY",
                "FIRE_BLAST",
                "POLTERGEIST"
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
        "moves": {
            "fastMoves": [
                "HEX",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "SEED_BOMB",
                "SHADOW_BALL",
                "FOUL_PLAY",
                "FIRE_BLAST",
                "POLTERGEIST"
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
        "moves": {
            "fastMoves": [
                "BITE",
                "TACKLE"
            ],
            "chargedMoves": [
                "CRUNCH",
                "ICY_WIND",
                "MIRROR_COAT"
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
                "MIRROR_COAT",
                "ICY_WIND"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "avalugg_hisuian",
        "dexNumber": 713,
        "moves": {
            "fastMoves": [
                "BITE",
                "TACKLE",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "CRUNCH",
                "ROCK_SLIDE",
                "BLIZZARD",
                "ICY_WIND"
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
        "id": "noibat",
        "dexNumber": 714,
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
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "BITE"
            ],
            "chargedMoves": [
                "DRACO_METEOR",
                "HURRICANE",
                "HEAT_WAVE",
                "PSYCHIC",
                "BOOMBURST"
            ],
            "eliteMoves": [
                "BOOMBURST"
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
        "moves": {
            "fastMoves": [
                "TACKLE",
                "ZEN_HEADBUTT",
                "GEOMANCY"
            ],
            "chargedMoves": [
                "MOONBLAST",
                "MEGAHORN",
                "CLOSE_COMBAT",
                "GIGA_IMPACT",
                "THUNDER"
            ],
            "eliteMoves": [
                "GEOMANCY"
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
                "PSYCHIC",
                "OBLIVION_WING"
            ],
            "eliteMoves": [
                "OBLIVION_WING"
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
        "id": "zygarde_10",
        "dexNumber": 718,
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "BITE",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "OUTRAGE",
                "EARTHQUAKE",
                "CRUNCH",
                "HYPER_BEAM",
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
        "id": "zygarde",
        "dexNumber": 718,
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "BITE",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "OUTRAGE",
                "EARTHQUAKE",
                "CRUNCH",
                "HYPER_BEAM",
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
        "id": "zygarde_complete",
        "dexNumber": 718,
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "BITE",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "OUTRAGE",
                "EARTHQUAKE",
                "CRUNCH",
                "HYPER_BEAM",
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
        "id": "diancie",
        "dexNumber": 719,
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
        "tags": [
            "mythical",
            "untradeable"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "diancie_mega",
        "dexNumber": 719,
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
        "tags": [
            "mythical",
            "untradeable",
            "mega"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "hoopa",
        "dexNumber": 720,
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
            "mythical",
            "untradeable"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "hoopa_confined",
        "dexNumber": 720,
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
        "moves": {
            "fastMoves": [
                "TACKLE",
                "RAZOR_LEAF",
                "LEAFAGE",
                "MAGICAL_LEAF"
            ],
            "chargedMoves": [
                "SEED_BOMB",
                "ENERGY_BALL"
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
        "id": "dartrix",
        "dexNumber": 723,
        "moves": {
            "fastMoves": [
                "PECK",
                "RAZOR_LEAF",
                "LEAFAGE",
                "MAGICAL_LEAF"
            ],
            "chargedMoves": [
                "SEED_BOMB",
                "ENERGY_BALL",
                "BRAVE_BIRD"
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
        "id": "decidueye",
        "dexNumber": 724,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "RAZOR_LEAF",
                "LEAFAGE",
                "MAGICAL_LEAF"
            ],
            "chargedMoves": [
                "SHADOW_SNEAK",
                "ENERGY_BALL",
                "BRAVE_BIRD",
                "FRENZY_PLANT",
                "SPIRIT_SHACKLE"
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
        "id": "decidueye_hisuian",
        "dexNumber": 724,
        "moves": {
            "fastMoves": [
                "MAGICAL_LEAF",
                "PSYCHO_CUT"
            ],
            "chargedMoves": [
                "AURA_SPHERE",
                "ENERGY_BALL",
                "AERIAL_ACE"
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
        "id": "litten",
        "dexNumber": 725,
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
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "torracat",
        "dexNumber": 726,
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
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "incineroar",
        "dexNumber": 727,
        "moves": {
            "fastMoves": [
                "SNARL",
                "FIRE_FANG",
                "DOUBLE_KICK"
            ],
            "chargedMoves": [
                "FIRE_BLAST",
                "FLAME_CHARGE",
                "DARK_PULSE",
                "BLAZE_KICK",
                "BLAST_BURN",
                "DARKEST_LARIAT"
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
        "id": "popplio",
        "dexNumber": 728,
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
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "brionne",
        "dexNumber": 729,
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
        "tags": [
            "starter"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "primarina",
        "dexNumber": 730,
        "moves": {
            "fastMoves": [
                "CHARM",
                "WATERFALL"
            ],
            "chargedMoves": [
                "PSYCHIC",
                "HYDRO_PUMP",
                "MOONBLAST",
                "DISARMING_VOICE"
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
        "id": "pikipek",
        "dexNumber": 731,
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
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "SPARK"
            ],
            "chargedMoves": [
                "X_SCISSOR",
                "VICE_GRIP",
                "CRUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "charjabug",
        "dexNumber": 737,
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "SPARK",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "X_SCISSOR",
                "DISCHARGE",
                "CRUNCH"
            ],
            "eliteMoves": [
                "VOLT_SWITCH"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "vikavolt",
        "dexNumber": 738,
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "SPARK",
                "MUD_SLAP",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "X_SCISSOR",
                "DISCHARGE",
                "CRUNCH",
                "FLY"
            ],
            "eliteMoves": [
                "VOLT_SWITCH"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "crabrawler",
        "dexNumber": 739,
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "BUBBLE"
            ],
            "chargedMoves": [
                "POWER_UP_PUNCH",
                "CRABHAMMER",
                "PAYBACK",
                "BRICK_BREAK"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "crabominable",
        "dexNumber": 740,
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "BUBBLE"
            ],
            "chargedMoves": [
                "POWER_UP_PUNCH",
                "CRABHAMMER",
                "PAYBACK",
                "ICE_PUNCH",
                "BRICK_BREAK"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "oricorio_baile",
        "dexNumber": 741,
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
        "moves": {
            "fastMoves": [
                "FAIRY_WIND",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "BUG_BUZZ"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "ribombee",
        "dexNumber": 743,
        "moves": {
            "fastMoves": [
                "FAIRY_WIND",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "BUG_BUZZ"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "rockruff",
        "dexNumber": 744,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "STONE_EDGE",
                "ROCK_TOMB",
                "CRUNCH",
                "TRAILBLAZE"
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
        "moves": {
            "fastMoves": [
                "COUNTER",
                "SUCKER_PUNCH",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "STONE_EDGE",
                "IRON_HEAD",
                "CRUNCH",
                "TRAILBLAZE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "lycanroc_midday",
        "dexNumber": 745,
        "moves": {
            "fastMoves": [
                "SUCKER_PUNCH",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "STONE_EDGE",
                "DRILL_RUN",
                "CRUNCH",
                "TRAILBLAZE"
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
        "moves": {
            "fastMoves": [
                "COUNTER",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "STONE_EDGE",
                "PSYCHIC_FANGS",
                "CRUNCH",
                "TRAILBLAZE"
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
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "WATERFALL",
                "IRON_TAIL"
            ],
            "chargedMoves": [
                "BRINE",
                "SURF",
                "AQUA_TAIL"
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
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "WATERFALL",
                "IRON_TAIL"
            ],
            "chargedMoves": [
                "BRINE",
                "SURF",
                "AQUA_TAIL"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "wishiwashi_solo",
        "dexNumber": 746,
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "WATERFALL",
                "IRON_TAIL"
            ],
            "chargedMoves": [
                "BRINE",
                "SURF",
                "AQUA_TAIL"
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
        "moves": {
            "fastMoves": [
                "POISON_STING",
                "BITE"
            ],
            "chargedMoves": [
                "BRINE",
                "GUNK_SHOT",
                "SLUDGE_WAVE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "toxapex",
        "dexNumber": 748,
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "BITE"
            ],
            "chargedMoves": [
                "BRINE",
                "GUNK_SHOT",
                "SLUDGE_WAVE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "mudbray",
        "dexNumber": 749,
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "BULLDOZE",
                "BODY_SLAM",
                "EARTHQUAKE"
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
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "BULLDOZE",
                "BODY_SLAM",
                "EARTHQUAKE",
                "HEAVY_SLAM"
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
        "released": true
    },
    {
        "id": "araquanid",
        "dexNumber": 752,
        "moves": {
            "fastMoves": [
                "INFESTATION",
                "BUG_BITE"
            ],
            "chargedMoves": [
                "BUG_BUZZ",
                "BUBBLE_BEAM",
                "MIRROR_COAT",
                "WATER_PULSE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "fomantis",
        "dexNumber": 753,
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "FURY_CUTTER",
                "LEAFAGE"
            ],
            "chargedMoves": [
                "LEAF_BLADE",
                "ENERGY_BALL",
                "GRASS_KNOT",
                "TRAILBLAZE"
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
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "FURY_CUTTER",
                "LEAFAGE"
            ],
            "chargedMoves": [
                "LEAF_BLADE",
                "LEAF_STORM",
                "SUPER_POWER",
                "X_SCISSOR",
                "TRAILBLAZE"
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
        "moves": {
            "fastMoves": [
                "ASTONISH"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "SEED_BOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "shiinotic",
        "dexNumber": 756,
        "moves": {
            "fastMoves": [
                "ASTONISH"
            ],
            "chargedMoves": [
                "MOONBLAST",
                "SEED_BOMB",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "salandit",
        "dexNumber": 757,
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
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "CHARM"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "DRAINING_KISS"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "steenee",
        "dexNumber": 762,
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "CHARM"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "DRAINING_KISS",
                "GRASS_KNOT",
                "TRIPLE_AXEL"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "tsareena",
        "dexNumber": 763,
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "CHARM",
                "MAGICAL_LEAF"
            ],
            "chargedMoves": [
                "ENERGY_BALL",
                "DRAINING_KISS",
                "GRASS_KNOT",
                "STOMP",
                "TRIPLE_AXEL",
                "HIGH_JUMP_KICK"
            ],
            "eliteMoves": [
                "HIGH_JUMP_KICK"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "comfey",
        "dexNumber": 764,
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
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "ZEN_HEADBUTT",
                "YAWN"
            ],
            "chargedMoves": [
                "PSYCHIC",
                "FOUL_PLAY",
                "FUTURE_SIGHT",
                "TRAILBLAZE"
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
        "moves": {
            "fastMoves": [
                "COUNTER",
                "ROCK_SMASH",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "CLOSE_COMBAT",
                "SUPER_POWER"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "wimpod",
        "dexNumber": 767,
        "moves": {
            "fastMoves": [
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "BUG_BUZZ"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "golisopod",
        "dexNumber": 768,
        "moves": {
            "fastMoves": [
                "FURY_CUTTER",
                "METAL_CLAW",
                "WATERFALL",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "X_SCISSOR",
                "AQUA_JET",
                "AERIAL_ACE",
                "LIQUIDATION",
                "RAZOR_SHELL"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "sandygast",
        "dexNumber": 769,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "MUD_SHOT",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "SAND_TOMB",
                "SHADOW_BALL",
                "EARTH_POWER",
                "SCORCHING_SANDS"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "palossand",
        "dexNumber": 770,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "MUD_SHOT",
                "SAND_ATTACK"
            ],
            "chargedMoves": [
                "SAND_TOMB",
                "SHADOW_BALL",
                "EARTH_POWER",
                "SCORCHING_SANDS"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "pyukumuku",
        "dexNumber": 771,
        "moves": {
            "fastMoves": [
                "COUNTER"
            ],
            "chargedMoves": [
                "MIRROR_COAT"
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
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "TRI_ATTACK",
                "IRON_HEAD",
                "AERIAL_ACE"
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
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN",
                "BITE"
            ],
            "chargedMoves": [
                "TRI_ATTACK",
                "IRON_HEAD",
                "AERIAL_ACE",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "silvally_bug",
        "dexNumber": 773,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN",
                "BITE"
            ],
            "chargedMoves": [
                "TRI_ATTACK",
                "IRON_HEAD",
                "AERIAL_ACE",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "silvally_dark",
        "dexNumber": 773,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN",
                "BITE"
            ],
            "chargedMoves": [
                "TRI_ATTACK",
                "IRON_HEAD",
                "AERIAL_ACE",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "silvally_dragon",
        "dexNumber": 773,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN",
                "BITE"
            ],
            "chargedMoves": [
                "TRI_ATTACK",
                "IRON_HEAD",
                "AERIAL_ACE",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "silvally_electric",
        "dexNumber": 773,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN",
                "BITE"
            ],
            "chargedMoves": [
                "TRI_ATTACK",
                "IRON_HEAD",
                "AERIAL_ACE",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "silvally_fairy",
        "dexNumber": 773,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN",
                "BITE"
            ],
            "chargedMoves": [
                "TRI_ATTACK",
                "IRON_HEAD",
                "AERIAL_ACE",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "silvally_fighting",
        "dexNumber": 773,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN",
                "BITE"
            ],
            "chargedMoves": [
                "TRI_ATTACK",
                "IRON_HEAD",
                "AERIAL_ACE",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "silvally_fire",
        "dexNumber": 773,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN",
                "BITE"
            ],
            "chargedMoves": [
                "TRI_ATTACK",
                "IRON_HEAD",
                "AERIAL_ACE",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "silvally_flying",
        "dexNumber": 773,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN",
                "BITE"
            ],
            "chargedMoves": [
                "TRI_ATTACK",
                "IRON_HEAD",
                "AERIAL_ACE",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "silvally_ghost",
        "dexNumber": 773,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN",
                "BITE"
            ],
            "chargedMoves": [
                "TRI_ATTACK",
                "IRON_HEAD",
                "AERIAL_ACE",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "silvally_grass",
        "dexNumber": 773,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN",
                "BITE"
            ],
            "chargedMoves": [
                "TRI_ATTACK",
                "IRON_HEAD",
                "AERIAL_ACE",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "silvally_ground",
        "dexNumber": 773,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN",
                "BITE"
            ],
            "chargedMoves": [
                "TRI_ATTACK",
                "IRON_HEAD",
                "AERIAL_ACE",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "silvally_ice",
        "dexNumber": 773,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN",
                "BITE"
            ],
            "chargedMoves": [
                "TRI_ATTACK",
                "IRON_HEAD",
                "AERIAL_ACE",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "silvally_poison",
        "dexNumber": 773,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN",
                "BITE"
            ],
            "chargedMoves": [
                "TRI_ATTACK",
                "IRON_HEAD",
                "AERIAL_ACE",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "silvally_psychic",
        "dexNumber": 773,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN",
                "BITE"
            ],
            "chargedMoves": [
                "TRI_ATTACK",
                "IRON_HEAD",
                "AERIAL_ACE",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "silvally_rock",
        "dexNumber": 773,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN",
                "BITE"
            ],
            "chargedMoves": [
                "TRI_ATTACK",
                "IRON_HEAD",
                "AERIAL_ACE",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "silvally_steel",
        "dexNumber": 773,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN",
                "BITE"
            ],
            "chargedMoves": [
                "TRI_ATTACK",
                "IRON_HEAD",
                "AERIAL_ACE",
                "X_SCISSOR"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "silvally_water",
        "dexNumber": 773,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN",
                "BITE"
            ],
            "chargedMoves": [
                "TRI_ATTACK",
                "IRON_HEAD",
                "AERIAL_ACE",
                "X_SCISSOR"
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
        "moves": {
            "fastMoves": [
                "ROLLOUT",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "POWER_GEM",
                "ANCIENT_POWER",
                "ACROBATICS"
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
        "moves": {
            "fastMoves": [
                "ROLLOUT",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "POWER_GEM",
                "ANCIENT_POWER",
                "ACROBATICS"
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
        "moves": {
            "fastMoves": [
                "ROLLOUT",
                "YAWN"
            ],
            "chargedMoves": [
                "PLAY_ROUGH",
                "BULLDOZE",
                "PAYBACK"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "turtonator",
        "dexNumber": 776,
        "moves": {
            "fastMoves": [
                "EMBER",
                "FIRE_SPIN",
                "INCINERATE"
            ],
            "chargedMoves": [
                "OVERHEAT",
                "FLAMETHROWER",
                "DRAGON_PULSE",
                "FLASH_CANNON"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "togedemaru",
        "dexNumber": 777,
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "SPARK"
            ],
            "chargedMoves": [
                "FELL_STINGER",
                "WILD_CHARGE",
                "GYRO_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "mimikyu",
        "dexNumber": 778,
        "moves": {
            "fastMoves": [
                "SHADOW_CLAW",
                "CHARM"
            ],
            "chargedMoves": [
                "SHADOW_SNEAK",
                "PLAY_ROUGH",
                "SHADOW_BALL"
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
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "CONFUSION",
                "BITE"
            ],
            "chargedMoves": [
                "PSYCHIC_FANGS",
                "AQUA_TAIL",
                "CRUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "drampa",
        "dexNumber": 780,
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "EXTRASENSORY"
            ],
            "chargedMoves": [
                "OUTRAGE",
                "DRAGON_PULSE",
                "FLY"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "dhelmise",
        "dexNumber": 781,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "POWER_WHIP",
                "SHADOW_BALL",
                "HEAVY_SLAM"
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
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "CLOSE_COMBAT",
                "FLAMETHROWER",
                "BOOMBURST",
                "BRICK_BREAK"
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
        "moves": {
            "fastMoves": [
                "VOLT_SWITCH",
                "QUICK_ATTACK"
            ],
            "chargedMoves": [
                "THUNDERBOLT",
                "DAZZLING_GLEAM",
                "BRAVE_BIRD",
                "THUNDER",
                "NATURES_MADNESS"
            ],
            "eliteMoves": [
                "NATURES_MADNESS"
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
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "ASTONISH"
            ],
            "chargedMoves": [
                "PSYSHOCK",
                "MOONBLAST",
                "FOCUS_BLAST",
                "FUTURE_SIGHT",
                "NATURES_MADNESS"
            ],
            "eliteMoves": [
                "NATURES_MADNESS"
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
        "moves": {
            "fastMoves": [
                "BULLET_SEED",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "GRASS_KNOT",
                "DAZZLING_GLEAM",
                "MEGAHORN",
                "SOLAR_BEAM",
                "NATURES_MADNESS"
            ],
            "eliteMoves": [
                "NATURES_MADNESS"
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
                "HYDRO_PUMP",
                "NATURES_MADNESS"
            ],
            "eliteMoves": [
                "NATURES_MADNESS"
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
        "id": "cosmog",
        "dexNumber": 789,
        "moves": {
            "fastMoves": [
                "SPLASH"
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
        "moves": {
            "fastMoves": [
                "SPLASH"
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
        "moves": {
            "fastMoves": [
                "ZEN_HEADBUTT",
                "FIRE_SPIN"
            ],
            "chargedMoves": [
                "IRON_HEAD",
                "PSYCHIC_FANGS",
                "SOLAR_BEAM",
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
        "id": "lunala",
        "dexNumber": 792,
        "moves": {
            "fastMoves": [
                "CONFUSION",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "SHADOW_BALL",
                "PSYCHIC",
                "MOONBLAST",
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
        "id": "nihilego",
        "dexNumber": 793,
        "moves": {
            "fastMoves": [
                "ACID",
                "POUND",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "POWER_GEM",
                "GUNK_SHOT",
                "SLUDGE_BOMB",
                "ROCK_SLIDE"
            ]
        },
        "tags": [
            "ultrabeast"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "buzzwole",
        "dexNumber": 794,
        "moves": {
            "fastMoves": [
                "COUNTER",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "POWER_UP_PUNCH",
                "FELL_STINGER",
                "LUNGE",
                "SUPER_POWER"
            ]
        },
        "tags": [
            "ultrabeast"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "pheromosa",
        "dexNumber": 795,
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "LOW_KICK"
            ],
            "chargedMoves": [
                "FOCUS_BLAST",
                "BUG_BUZZ",
                "LUNGE",
                "CLOSE_COMBAT"
            ]
        },
        "tags": [
            "ultrabeast"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "xurkitree",
        "dexNumber": 796,
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "SPARK"
            ],
            "chargedMoves": [
                "DISCHARGE",
                "THUNDER",
                "POWER_WHIP",
                "DAZZLING_GLEAM"
            ]
        },
        "tags": [
            "ultrabeast"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "celesteela",
        "dexNumber": 797,
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "SMACK_DOWN"
            ],
            "chargedMoves": [
                "IRON_HEAD",
                "BODY_SLAM",
                "HEAVY_SLAM",
                "BULLDOZE"
            ]
        },
        "tags": [
            "ultrabeast"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "kartana",
        "dexNumber": 798,
        "moves": {
            "fastMoves": [
                "AIR_SLASH",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "LEAF_BLADE",
                "X_SCISSOR",
                "NIGHT_SLASH",
                "AERIAL_ACE"
            ]
        },
        "tags": [
            "ultrabeast",
            "include1500"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "guzzlord",
        "dexNumber": 799,
        "moves": {
            "fastMoves": [
                "SNARL",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "BRUTAL_SWING",
                "DRAGON_CLAW",
                "CRUNCH",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [
            "ultrabeast"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "necrozma",
        "dexNumber": 800,
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "PSYCHO_CUT",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "FUTURE_SIGHT",
                "IRON_HEAD",
                "OUTRAGE"
            ]
        },
        "tags": [
            "ultrabeast"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "necrozma_dawn_wings",
        "dexNumber": 800,
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "PSYCHO_CUT",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "FUTURE_SIGHT",
                "IRON_HEAD",
                "OUTRAGE",
                "MOONGEIST_BEAM"
            ],
            "eliteMoves": [
                "MOONGEIST_BEAM"
            ]
        },
        "tags": [
            "ultrabeast"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "necrozma_dusk_mane",
        "dexNumber": 800,
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "PSYCHO_CUT",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "FUTURE_SIGHT",
                "IRON_HEAD",
                "OUTRAGE",
                "SUNSTEEL_STRIKE"
            ],
            "eliteMoves": [
                "SUNSTEEL_STRIKE"
            ]
        },
        "tags": [
            "ultrabeast"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "necrozma_ultra",
        "dexNumber": 800,
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "PSYCHO_CUT",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "FUTURE_SIGHT",
                "IRON_HEAD",
                "OUTRAGE"
            ]
        },
        "tags": [
            "ultrabeast"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "magearna",
        "dexNumber": 801,
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
        "id": "marshadow",
        "dexNumber": 802,
        "moves": {
            "fastMoves": [
                "SUCKER_PUNCH",
                "COUNTER",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "FIRE_PUNCH",
                "THUNDER_PUNCH",
                "ICE_PUNCH",
                "ROCK_SLIDE"
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
        "id": "poipole",
        "dexNumber": 803,
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "PECK"
            ],
            "chargedMoves": [
                "SLUDGE_BOMB",
                "SLUDGE_WAVE",
                "FELL_STINGER"
            ]
        },
        "tags": [
            "ultrabeast",
            "untradeable"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "naganadel",
        "dexNumber": 804,
        "moves": {
            "fastMoves": [
                "POISON_JAB",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "SLUDGE_BOMB",
                "ACROBATICS",
                "FELL_STINGER",
                "DRAGON_PULSE",
                "DRAGON_CLAW"
            ]
        },
        "tags": [
            "ultrabeast"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "stakataka",
        "dexNumber": 805,
        "moves": {
            "fastMoves": [
                "ROCK_THROW",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "FLASH_CANNON",
                "STONE_EDGE",
                "BULLDOZE"
            ]
        },
        "tags": [
            "ultrabeast"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "blacephalon",
        "dexNumber": 806,
        "moves": {
            "fastMoves": [
                "INCINERATE",
                "ASTONISH"
            ],
            "chargedMoves": [
                "MYSTICAL_FIRE",
                "SHADOW_BALL",
                "OVERHEAT"
            ]
        },
        "tags": [
            "ultrabeast"
        ],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": true
    },
    {
        "id": "zeraora",
        "dexNumber": 807,
        "moves": {
            "fastMoves": [
                "SPARK",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "THUNDER_PUNCH",
                "DISCHARGE",
                "WILD_CHARGE"
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
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK"
            ],
            "chargedMoves": [
                "FLASH_CANNON",
                "HYPER_BEAM",
                "ROCK_SLIDE",
                "THUNDERBOLT",
                "SUPER_POWER",
                "DOUBLE_IRON_BASH"
            ],
            "eliteMoves": [
                "DOUBLE_IRON_BASH"
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
        "moves": {
            "fastMoves": [
                "TACKLE",
                "BITE",
                "BULLET_SEED"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "CRUNCH",
                "TRAILBLAZE"
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
        "moves": {
            "fastMoves": [
                "TACKLE",
                "BITE",
                "BULLET_SEED",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "CRUNCH",
                "TRAILBLAZE"
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
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN",
                "DOUBLE_KICK"
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
        "id": "toxtricity_amped",
        "dexNumber": 849,
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
        "id": "toxtricity_low_key",
        "dexNumber": 849,
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
        "id": "sinistea_antique",
        "dexNumber": 854,
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
        "id": "sinistea_phony",
        "dexNumber": 854,
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
        "id": "polteageist_antique",
        "dexNumber": 855,
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
        "id": "polteageist_phony",
        "dexNumber": 855,
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
        "moves": {
            "fastMoves": [
                "COUNTER",
                "LICK"
            ],
            "chargedMoves": [
                "CROSS_CHOP",
                "NIGHT_SLASH",
                "HYPER_BEAM",
                "GUNK_SHOT",
                "OBSTRUCT"
            ],
            "eliteMoves": [
                "OBSTRUCT"
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
        "moves": {
            "fastMoves": [
                "METAL_CLAW",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "IRON_HEAD",
                "CLOSE_COMBAT",
                "PLAY_ROUGH",
                "FOUL_PLAY",
                "TRAILBLAZE"
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
                "ICY_WIND",
                "TRIPLE_AXEL"
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
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "SHADOW_CLAW"
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
        "id": "eiscue_ice",
        "dexNumber": 875,
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
        "id": "indeedee",
        "dexNumber": 876,
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
        "id": "indeedee_female",
        "dexNumber": 876,
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
        "id": "morpeko_full_belly",
        "dexNumber": 877,
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
        "id": "morpeko_hangry",
        "dexNumber": 877,
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
        "id": "zacian",
        "dexNumber": 888,
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
        "id": "zacian_crowned_sword",
        "dexNumber": 888,
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
        "id": "zacian_hero",
        "dexNumber": 888,
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
        "id": "zamazenta",
        "dexNumber": 889,
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
        "id": "zamazenta_crowned_shield",
        "dexNumber": 889,
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
        "id": "zamazenta_hero",
        "dexNumber": 889,
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
        "id": "eternatus",
        "dexNumber": 890,
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
        "id": "urshifu_rapid_strike",
        "dexNumber": 892,
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "COUNTER",
                "WATERFALL"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "DYNAMIC_PUNCH",
                "CLOSE_COMBAT",
                "AQUA_JET"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "urshifu_single_strike",
        "dexNumber": 892,
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "COUNTER",
                "SUCKER_PUNCH"
            ],
            "chargedMoves": [
                "BRICK_BREAK",
                "DYNAMIC_PUNCH",
                "CLOSE_COMBAT",
                "PAYBACK"
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
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "LOCK_ON",
                "VOLT_SWITCH"
            ],
            "chargedMoves": [
                "ZAP_CANNON",
                "THUNDER",
                "HYPER_BEAM"
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
        "id": "regidrago",
        "dexNumber": 895,
        "moves": {
            "fastMoves": [
                "BITE"
            ],
            "chargedMoves": [
                "HYPER_BEAM",
                "OUTRAGE",
                "DRAGON_PULSE",
                "BREAKING_SWIPE"
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
        "id": "glastrier",
        "dexNumber": 896,
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
    },
    {
        "id": "wyrdeer",
        "dexNumber": 899,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "ZEN_HEADBUTT",
                "CONFUSION"
            ],
            "chargedMoves": [
                "MEGAHORN",
                "STOMP",
                "WILD_CHARGE",
                "PSYCHIC"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "kleavor",
        "dexNumber": 900,
        "moves": {
            "fastMoves": [
                "QUICK_ATTACK",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "X_SCISSOR",
                "ROCK_SLIDE",
                "STONE_EDGE",
                "TRAILBLAZE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "ursaluna",
        "dexNumber": 901,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "FIRE_PUNCH",
                "THUNDER_PUNCH",
                "AERIAL_ACE",
                "HIGH_HORSEPOWER",
                "ICE_PUNCH",
                "TRAILBLAZE",
                "SWIFT"
            ],
            "eliteMoves": [
                "HIGH_HORSEPOWER"
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
        "id": "ursaluna_shadow",
        "dexNumber": 901,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "FIRE_PUNCH",
                "THUNDER_PUNCH",
                "AERIAL_ACE",
                "HIGH_HORSEPOWER",
                "ICE_PUNCH",
                "TRAILBLAZE",
                "SWIFT"
            ],
            "eliteMoves": [
                "HIGH_HORSEPOWER"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "basculegion_female",
        "dexNumber": 902,
        "moves": {
            "fastMoves": [
                "SPLASH"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "basculegion_male",
        "dexNumber": 902,
        "moves": {
            "fastMoves": [
                "SPLASH"
            ],
            "chargedMoves": [
                "STRUGGLE"
            ]
        },
        "tags": [],
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "sneasler",
        "dexNumber": 903,
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "POISON_JAB",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "CLOSE_COMBAT",
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
        "id": "sneasler_shadow",
        "dexNumber": 903,
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "POISON_JAB",
                "SHADOW_CLAW"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "CLOSE_COMBAT",
                "X_SCISSOR"
            ]
        },
        "tags": [
            "shadow"
        ],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "overqwil",
        "dexNumber": 904,
        "moves": {
            "fastMoves": [
                "POISON_STING",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "AQUA_TAIL",
                "ICE_BEAM",
                "SLUDGE_BOMB",
                "DARK_PULSE",
                "SHADOW_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "enamorus_incarnate",
        "dexNumber": 905,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "ZEN_HEADBUTT",
                "FAIRY_WIND"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "FLY",
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
        "id": "enamorus_therian",
        "dexNumber": 905,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "ZEN_HEADBUTT",
                "FAIRY_WIND"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "FLY",
                "GRASS_KNOT"
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
        "id": "sprigatito",
        "dexNumber": 906,
        "moves": {
            "fastMoves": [
                "LEAFAGE",
                "CHARM"
            ],
            "chargedMoves": [
                "GRASS_KNOT",
                "PLAY_ROUGH",
                "ENERGY_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "floragato",
        "dexNumber": 907,
        "moves": {
            "fastMoves": [
                "LEAFAGE",
                "CHARM"
            ],
            "chargedMoves": [
                "GRASS_KNOT",
                "PLAY_ROUGH",
                "ENERGY_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "meowscarada",
        "dexNumber": 908,
        "moves": {
            "fastMoves": [
                "LEAFAGE",
                "CHARM"
            ],
            "chargedMoves": [
                "GRASS_KNOT",
                "PLAY_ROUGH",
                "ENERGY_BALL",
                "NIGHT_SLASH"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "fuecoco",
        "dexNumber": 909,
        "moves": {
            "fastMoves": [
                "INCINERATE",
                "BITE"
            ],
            "chargedMoves": [
                "FLAMETHROWER",
                "DISARMING_VOICE",
                "CRUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "crocalor",
        "dexNumber": 910,
        "moves": {
            "fastMoves": [
                "INCINERATE",
                "BITE"
            ],
            "chargedMoves": [
                "FLAMETHROWER",
                "DISARMING_VOICE",
                "CRUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "skeledirge",
        "dexNumber": 911,
        "moves": {
            "fastMoves": [
                "INCINERATE",
                "BITE"
            ],
            "chargedMoves": [
                "FLAMETHROWER",
                "DISARMING_VOICE",
                "CRUNCH",
                "SHADOW_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "quaxly",
        "dexNumber": 912,
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "AERIAL_ACE",
                "LIQUIDATION"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "quaxwell",
        "dexNumber": 913,
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "AERIAL_ACE",
                "LIQUIDATION"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "quaquaval",
        "dexNumber": 914,
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "WING_ATTACK"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "AERIAL_ACE",
                "LIQUIDATION",
                "CLOSE_COMBAT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "lechonk",
        "dexNumber": 915,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "DIG",
                "BODY_SLAM",
                "TRAILBLAZE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "oinkologne",
        "dexNumber": 916,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "DIG",
                "BODY_SLAM",
                "TRAILBLAZE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "oinkologne_female",
        "dexNumber": 916,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "DIG",
                "BODY_SLAM",
                "TRAILBLAZE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "tarountula",
        "dexNumber": 917,
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "X_SCISSOR",
                "GRASS_KNOT",
                "LUNGE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "spidops",
        "dexNumber": 918,
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "COUNTER"
            ],
            "chargedMoves": [
                "X_SCISSOR",
                "GRASS_KNOT",
                "LUNGE",
                "ROCK_TOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "nymble",
        "dexNumber": 919,
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "X_SCISSOR",
                "BUG_BUZZ",
                "TRAILBLAZE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "lokix",
        "dexNumber": 920,
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "SUCKER_PUNCH",
                "COUNTER"
            ],
            "chargedMoves": [
                "X_SCISSOR",
                "BUG_BUZZ",
                "DARK_PULSE",
                "TRAILBLAZE"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "pawmi",
        "dexNumber": 921,
        "moves": {
            "fastMoves": [
                "SPARK",
                "CHARGE_BEAM"
            ],
            "chargedMoves": [
                "THUNDERBOLT",
                "DISCHARGE",
                "WILD_CHARGE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "pawmo",
        "dexNumber": 922,
        "moves": {
            "fastMoves": [
                "SPARK",
                "CHARGE_BEAM"
            ],
            "chargedMoves": [
                "THUNDERBOLT",
                "DISCHARGE",
                "WILD_CHARGE",
                "THUNDER_PUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "pawmot",
        "dexNumber": 923,
        "moves": {
            "fastMoves": [
                "SPARK",
                "CHARGE_BEAM",
                "LOW_KICK"
            ],
            "chargedMoves": [
                "THUNDERBOLT",
                "DISCHARGE",
                "WILD_CHARGE",
                "CLOSE_COMBAT",
                "THUNDER_PUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "tandemaus",
        "dexNumber": 924,
        "moves": {
            "fastMoves": [
                "TAKE_DOWN",
                "MUD_SHOT",
                "BULLET_SEED"
            ],
            "chargedMoves": [
                "SWIFT",
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
        "id": "maushold",
        "dexNumber": 925,
        "moves": {
            "fastMoves": [
                "TAKE_DOWN",
                "MUD_SHOT",
                "BULLET_SEED"
            ],
            "chargedMoves": [
                "SWIFT",
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
        "id": "maushold_family_of_four",
        "dexNumber": 925,
        "moves": {
            "fastMoves": [
                "TAKE_DOWN",
                "MUD_SHOT",
                "BULLET_SEED"
            ],
            "chargedMoves": [
                "SWIFT",
                "PLAY_ROUGH",
                "CRUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "maushold_family_of_three",
        "dexNumber": 925,
        "moves": {
            "fastMoves": [
                "TAKE_DOWN",
                "MUD_SHOT",
                "BULLET_SEED"
            ],
            "chargedMoves": [
                "SWIFT",
                "PLAY_ROUGH",
                "CRUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "fidough",
        "dexNumber": 926,
        "moves": {
            "fastMoves": [
                "CHARM",
                "BITE"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "PLAY_ROUGH",
                "PSYCHIC_FANGS"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "dachsbun",
        "dexNumber": 927,
        "moves": {
            "fastMoves": [
                "CHARM",
                "BITE"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "PLAY_ROUGH",
                "PSYCHIC_FANGS"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "smoliv",
        "dexNumber": 928,
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "TACKLE"
            ],
            "chargedMoves": [
                "SEED_BOMB",
                "ENERGY_BALL",
                "EARTH_POWER",
                "TRAILBLAZE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "dolliv",
        "dexNumber": 929,
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "TACKLE",
                "MAGICAL_LEAF"
            ],
            "chargedMoves": [
                "SEED_BOMB",
                "ENERGY_BALL",
                "EARTH_POWER",
                "TRAILBLAZE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "arboliva",
        "dexNumber": 930,
        "moves": {
            "fastMoves": [
                "RAZOR_LEAF",
                "TACKLE",
                "MAGICAL_LEAF"
            ],
            "chargedMoves": [
                "SEED_BOMB",
                "ENERGY_BALL",
                "EARTH_POWER",
                "TRAILBLAZE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "squawkabilly",
        "dexNumber": 931,
        "moves": {
            "fastMoves": [
                "PECK",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BRAVE_BIRD",
                "FLY"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "squawkabilly_blue",
        "dexNumber": 931,
        "moves": {
            "fastMoves": [
                "PECK",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BRAVE_BIRD",
                "FLY"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "squawkabilly_green",
        "dexNumber": 931,
        "moves": {
            "fastMoves": [
                "PECK",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BRAVE_BIRD",
                "FLY"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "squawkabilly_white",
        "dexNumber": 931,
        "moves": {
            "fastMoves": [
                "PECK",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BRAVE_BIRD",
                "FLY"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "squawkabilly_yellow",
        "dexNumber": 931,
        "moves": {
            "fastMoves": [
                "PECK",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BRAVE_BIRD",
                "FLY"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "nacli",
        "dexNumber": 932,
        "moves": {
            "fastMoves": [
                "ROCK_THROW",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "ROCK_BLAST",
                "ROCK_TOMB",
                "ANCIENT_POWER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "naclstack",
        "dexNumber": 933,
        "moves": {
            "fastMoves": [
                "SMACK_DOWN",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "ROCK_BLAST",
                "ROCK_TOMB",
                "ANCIENT_POWER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "garganacl",
        "dexNumber": 934,
        "moves": {
            "fastMoves": [
                "SMACK_DOWN",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "ROCK_SLIDE",
                "ROCK_TOMB",
                "ANCIENT_POWER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "charcadet",
        "dexNumber": 935,
        "moves": {
            "fastMoves": [
                "EMBER",
                "INCINERATE"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "HEAT_WAVE",
                "FLAMETHROWER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "armarouge",
        "dexNumber": 936,
        "moves": {
            "fastMoves": [
                "EMBER",
                "INCINERATE"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "HEAT_WAVE",
                "FLAMETHROWER",
                "PSYSHOCK"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "ceruledge",
        "dexNumber": 937,
        "moves": {
            "fastMoves": [
                "EMBER",
                "INCINERATE"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "HEAT_WAVE",
                "FLAMETHROWER",
                "SHADOW_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "tadbulb",
        "dexNumber": 938,
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "PARABOLIC_CHARGE",
                "DISCHARGE",
                "ZAP_CANNON"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "bellibolt",
        "dexNumber": 939,
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "PARABOLIC_CHARGE",
                "DISCHARGE",
                "ZAP_CANNON"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "wattrel",
        "dexNumber": 940,
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "PECK"
            ],
            "chargedMoves": [
                "ACROBATICS",
                "AERIAL_ACE",
                "THUNDERBOLT"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "kilowattrel",
        "dexNumber": 941,
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "AIR_SLASH"
            ],
            "chargedMoves": [
                "ACROBATICS",
                "AERIAL_ACE",
                "THUNDERBOLT"
            ]
        },
        "tags": [],
        "buddyDistance": 1,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "maschiff",
        "dexNumber": 942,
        "moves": {
            "fastMoves": [
                "SNARL",
                "BITE"
            ],
            "chargedMoves": [
                "CRUNCH",
                "PAYBACK",
                "DIG"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "mabosstiff",
        "dexNumber": 943,
        "moves": {
            "fastMoves": [
                "SNARL",
                "BITE"
            ],
            "chargedMoves": [
                "CRUNCH",
                "PAYBACK",
                "DIG"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "shroodle",
        "dexNumber": 944,
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "ACID_SPRAY",
                "POISON_FANG",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "grafaiai",
        "dexNumber": 945,
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "ACID_SPRAY",
                "POISON_FANG",
                "SLUDGE_BOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "bramblin",
        "dexNumber": 946,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "BULLET_SEED"
            ],
            "chargedMoves": [
                "SHADOW_SNEAK",
                "NIGHT_SHADE",
                "POWER_WHIP"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "brambleghast",
        "dexNumber": 947,
        "moves": {
            "fastMoves": [
                "HEX",
                "BULLET_SEED"
            ],
            "chargedMoves": [
                "SHADOW_SNEAK",
                "NIGHT_SHADE",
                "POWER_WHIP"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "toedscool",
        "dexNumber": 948,
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "EARTH_POWER",
                "SEED_BOMB",
                "WRAP"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "toedscruel",
        "dexNumber": 949,
        "moves": {
            "fastMoves": [
                "MUD_SLAP",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "EARTH_POWER",
                "SEED_BOMB",
                "ACID_SPRAY"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "klawf",
        "dexNumber": 950,
        "moves": {
            "fastMoves": [
                "ROCK_THROW",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "ROCK_SLIDE",
                "ROCK_TOMB",
                "BULLDOZE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "capsakid",
        "dexNumber": 951,
        "moves": {
            "fastMoves": [
                "LEAFAGE",
                "RAZOR_LEAF"
            ],
            "chargedMoves": [
                "LEAF_STORM",
                "GRASS_KNOT",
                "SEED_BOMB"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "scovillain",
        "dexNumber": 952,
        "moves": {
            "fastMoves": [
                "LEAFAGE",
                "FIRE_FANG"
            ],
            "chargedMoves": [
                "LEAF_STORM",
                "GRASS_KNOT",
                "OVERHEAT",
                "FLAMETHROWER"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 10000,
        "released": false
    },
    {
        "id": "rellor",
        "dexNumber": 953,
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "STRUGGLE_BUG"
            ],
            "chargedMoves": [
                "DIG",
                "BUG_BUZZ",
                "LUNGE"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "rabsca",
        "dexNumber": 954,
        "moves": {
            "fastMoves": [
                "BUG_BITE",
                "CONFUSION"
            ],
            "chargedMoves": [
                "DIG",
                "BUG_BUZZ",
                "LUNGE",
                "PSYBEAM"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "flittle",
        "dexNumber": 955,
        "moves": {
            "fastMoves": [
                "PECK",
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
        "released": false
    },
    {
        "id": "espathra",
        "dexNumber": 956,
        "moves": {
            "fastMoves": [
                "PECK",
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
        "released": false
    },
    {
        "id": "tinkatink",
        "dexNumber": 957,
        "moves": {
            "fastMoves": [
                "FAIRY_WIND",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "PLAY_ROUGH",
                "BRUTAL_SWING",
                "FLASH_CANNON"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "tinkatuff",
        "dexNumber": 958,
        "moves": {
            "fastMoves": [
                "FAIRY_WIND",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "PLAY_ROUGH",
                "BRUTAL_SWING",
                "FLASH_CANNON"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "tinkaton",
        "dexNumber": 959,
        "moves": {
            "fastMoves": [
                "FAIRY_WIND",
                "ROCK_SMASH"
            ],
            "chargedMoves": [
                "PLAY_ROUGH",
                "BRUTAL_SWING",
                "FLASH_CANNON",
                "HEAVY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "wiglett",
        "dexNumber": 960,
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "LIQUIDATION",
                "DIG",
                "SURF"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "wugtrio",
        "dexNumber": 961,
        "moves": {
            "fastMoves": [
                "WATER_GUN",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "LIQUIDATION",
                "DIG",
                "SURF"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "bombirdier",
        "dexNumber": 962,
        "moves": {
            "fastMoves": [
                "WING_ATTACK",
                "ROCK_THROW"
            ],
            "chargedMoves": [
                "PAYBACK",
                "AERIAL_ACE",
                "FLY"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "finizen",
        "dexNumber": 963,
        "moves": {
            "fastMoves": [
                "WATERFALL",
                "CHARM"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "WATER_PULSE",
                "ICY_WIND"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "palafin",
        "dexNumber": 964,
        "moves": {
            "fastMoves": [
                "WATERFALL",
                "CHARM",
                "COUNTER"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "WATER_PULSE",
                "ICY_WIND",
                "DRAIN_PUNCH",
                "ACROBATICS"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "palafin_hero",
        "dexNumber": 964,
        "moves": {
            "fastMoves": [
                "WATERFALL",
                "CHARM",
                "COUNTER"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "WATER_PULSE",
                "ICY_WIND",
                "DRAIN_PUNCH",
                "ACROBATICS"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "palafin_zero",
        "dexNumber": 964,
        "moves": {
            "fastMoves": [
                "WATERFALL",
                "CHARM",
                "COUNTER"
            ],
            "chargedMoves": [
                "AQUA_JET",
                "WATER_PULSE",
                "ICY_WIND",
                "DRAIN_PUNCH",
                "ACROBATICS"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "varoom",
        "dexNumber": 965,
        "moves": {
            "fastMoves": [
                "LICK",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "ACID_SPRAY",
                "GUNK_SHOT",
                "GYRO_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "revavroom",
        "dexNumber": 966,
        "moves": {
            "fastMoves": [
                "LICK",
                "POISON_JAB"
            ],
            "chargedMoves": [
                "ACID_SPRAY",
                "GUNK_SHOT",
                "GYRO_BALL",
                "OVERHEAT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "cyclizar",
        "dexNumber": 967,
        "moves": {
            "fastMoves": [
                "DRAGON_TAIL",
                "TAKE_DOWN"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "BODY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "orthworm",
        "dexNumber": 968,
        "moves": {
            "fastMoves": [
                "IRON_TAIL",
                "MUD_SLAP"
            ],
            "chargedMoves": [
                "ROCK_TOMB",
                "EARTHQUAKE",
                "IRON_HEAD"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "glimmet",
        "dexNumber": 969,
        "moves": {
            "fastMoves": [
                "ROCK_THROW",
                "SMACK_DOWN"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "ROCK_SLIDE",
                "SLUDGE_WAVE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "glimmora",
        "dexNumber": 970,
        "moves": {
            "fastMoves": [
                "ROCK_THROW",
                "SMACK_DOWN"
            ],
            "chargedMoves": [
                "DAZZLING_GLEAM",
                "ROCK_SLIDE",
                "SLUDGE_WAVE"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "greavard",
        "dexNumber": 971,
        "moves": {
            "fastMoves": [
                "LICK",
                "BITE"
            ],
            "chargedMoves": [
                "SHADOW_BALL",
                "DIG",
                "PSYCHIC_FANGS"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "houndstone",
        "dexNumber": 972,
        "moves": {
            "fastMoves": [
                "LICK",
                "BITE"
            ],
            "chargedMoves": [
                "SHADOW_BALL",
                "DIG",
                "PSYCHIC_FANGS"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "flamigo",
        "dexNumber": 973,
        "moves": {
            "fastMoves": [
                "WING_ATTACK",
                "DOUBLE_KICK"
            ],
            "chargedMoves": [
                "AERIAL_ACE",
                "BRAVE_BIRD",
                "CLOSE_COMBAT"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "cetoddle",
        "dexNumber": 974,
        "moves": {
            "fastMoves": [
                "ICE_SHARD",
                "TACKLE",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "AVALANCHE",
                "HEAVY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "cetitan",
        "dexNumber": 975,
        "moves": {
            "fastMoves": [
                "ICE_SHARD",
                "TACKLE",
                "POWDER_SNOW"
            ],
            "chargedMoves": [
                "BODY_SLAM",
                "AVALANCHE",
                "HEAVY_SLAM"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "veluza",
        "dexNumber": 976,
        "moves": {
            "fastMoves": [
                "ICE_FANG",
                "ZEN_HEADBUTT"
            ],
            "chargedMoves": [
                "WATER_PULSE",
                "PSYCHIC_FANGS",
                "DRILL_RUN",
                "CRUNCH"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "dondozo",
        "dexNumber": 977,
        "moves": {
            "fastMoves": [
                "WATERFALL",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "OUTRAGE",
                "SURF",
                "HYDRO_PUMP",
                "LIQUIDATION"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "tatsugiri",
        "dexNumber": 978,
        "moves": {
            "fastMoves": [
                "TAKE_DOWN",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "OUTRAGE",
                "SURF",
                "HYDRO_PUMP",
                "MUDDY_WATER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "tatsugiri_curly",
        "dexNumber": 978,
        "moves": {
            "fastMoves": [
                "TAKE_DOWN",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "OUTRAGE",
                "SURF",
                "HYDRO_PUMP",
                "MUDDY_WATER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "tatsugiri_droopy",
        "dexNumber": 978,
        "moves": {
            "fastMoves": [
                "TAKE_DOWN",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "OUTRAGE",
                "SURF",
                "HYDRO_PUMP",
                "MUDDY_WATER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "tatsugiri_stretchy",
        "dexNumber": 978,
        "moves": {
            "fastMoves": [
                "TAKE_DOWN",
                "WATER_GUN"
            ],
            "chargedMoves": [
                "OUTRAGE",
                "SURF",
                "HYDRO_PUMP",
                "MUDDY_WATER"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": false
    },
    {
        "id": "annihilape",
        "dexNumber": 979,
        "moves": {
            "fastMoves": [
                "LOW_KICK",
                "COUNTER"
            ],
            "chargedMoves": [
                "CLOSE_COMBAT",
                "LOW_SWEEP",
                "NIGHT_SLASH",
                "ICE_PUNCH",
                "SHADOW_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": true
    },
    {
        "id": "clodsire",
        "dexNumber": 980,
        "moves": {
            "fastMoves": [
                "POISON_STING",
                "MUD_SHOT"
            ],
            "chargedMoves": [
                "SLUDGE_BOMB",
                "EARTHQUAKE",
                "STONE_EDGE",
                "ACID_SPRAY",
                "WATER_PULSE",
                "MEGAHORN"
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
        "id": "farigiraf",
        "dexNumber": 981,
        "moves": {
            "fastMoves": [
                "TACKLE",
                "CONFUSION",
                "DOUBLE_KICK"
            ],
            "chargedMoves": [
                "PSYCHIC",
                "THUNDERBOLT",
                "MIRROR_COAT",
                "PSYCHIC_FANGS"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "dudunsparce",
        "dexNumber": 982,
        "moves": {
            "fastMoves": [
                "BITE",
                "ASTONISH",
                "ROLLOUT"
            ],
            "chargedMoves": [
                "DIG",
                "ROCK_SLIDE",
                "DRILL_RUN"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "dudunsparce_three",
        "dexNumber": 982,
        "moves": {
            "fastMoves": [
                "BITE",
                "ASTONISH",
                "ROLLOUT"
            ],
            "chargedMoves": [
                "DIG",
                "ROCK_SLIDE",
                "DRILL_RUN"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "dudunsparce_two",
        "dexNumber": 982,
        "moves": {
            "fastMoves": [
                "BITE",
                "ASTONISH",
                "ROLLOUT"
            ],
            "chargedMoves": [
                "DIG",
                "ROCK_SLIDE",
                "DRILL_RUN"
            ]
        },
        "tags": [],
        "buddyDistance": 3,
        "thirdMoveCost": 50000,
        "released": false
    },
    {
        "id": "kingambit",
        "dexNumber": 983,
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
        "released": false
    },
    {
        "id": "greattusk",
        "dexNumber": 984,
        "moves": {
            "fastMoves": [
                "SPLASH"
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
        "id": "screamtail",
        "dexNumber": 985,
        "moves": {
            "fastMoves": [
                "SPLASH"
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
        "id": "brutebonnet",
        "dexNumber": 986,
        "moves": {
            "fastMoves": [
                "SPLASH"
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
        "id": "fluttermane",
        "dexNumber": 987,
        "moves": {
            "fastMoves": [
                "SPLASH"
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
        "id": "slitherwing",
        "dexNumber": 988,
        "moves": {
            "fastMoves": [
                "SPLASH"
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
        "id": "sandyshocks",
        "dexNumber": 989,
        "moves": {
            "fastMoves": [
                "SPLASH"
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
        "id": "irontreads",
        "dexNumber": 990,
        "moves": {
            "fastMoves": [
                "SPLASH"
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
        "id": "ironbundle",
        "dexNumber": 991,
        "moves": {
            "fastMoves": [
                "SPLASH"
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
        "id": "ironhands",
        "dexNumber": 992,
        "moves": {
            "fastMoves": [
                "SPLASH"
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
        "id": "ironjugulis",
        "dexNumber": 993,
        "moves": {
            "fastMoves": [
                "SPLASH"
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
        "id": "ironmoth",
        "dexNumber": 994,
        "moves": {
            "fastMoves": [
                "SPLASH"
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
        "id": "ironthorns",
        "dexNumber": 995,
        "moves": {
            "fastMoves": [
                "SPLASH"
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
        "id": "frigibax",
        "dexNumber": 996,
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "ICE_FANG"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "AVALANCHE",
                "OUTRAGE",
                "ICY_WIND"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "arctibax",
        "dexNumber": 997,
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "ICE_FANG"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "AVALANCHE",
                "OUTRAGE",
                "ICY_WIND"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "baxcalibur",
        "dexNumber": 998,
        "moves": {
            "fastMoves": [
                "DRAGON_BREATH",
                "ICE_FANG"
            ],
            "chargedMoves": [
                "DRAGON_CLAW",
                "AVALANCHE",
                "OUTRAGE",
                "BLIZZARD",
                "ICY_WIND"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 75000,
        "released": true
    },
    {
        "id": "gimmighoul",
        "dexNumber": 999,
        "moves": {
            "fastMoves": [
                "ASTONISH"
            ],
            "chargedMoves": [
                "SHADOW_BALL"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "gholdengo",
        "dexNumber": 1000,
        "moves": {
            "fastMoves": [
                "ASTONISH",
                "HEX"
            ],
            "chargedMoves": [
                "SHADOW_BALL",
                "DAZZLING_GLEAM",
                "FOCUS_BLAST"
            ]
        },
        "tags": [],
        "buddyDistance": 5,
        "thirdMoveCost": 10000,
        "released": true
    },
    {
        "id": "wo_chien",
        "dexNumber": 1001,
        "moves": {
            "fastMoves": [
                "MAGICAL_LEAF",
                "SNARL"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "GRASS_KNOT",
                "LEAF_STORM"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "chien_pao",
        "dexNumber": 1002,
        "moves": {
            "fastMoves": [
                "POWDER_SNOW",
                "SNARL"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "AVALANCHE",
                "BLIZZARD"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "ting_lu",
        "dexNumber": 1003,
        "moves": {
            "fastMoves": [
                "MUD_SHOT",
                "SNARL"
            ],
            "chargedMoves": [
                "DARK_PULSE",
                "BULLDOZE",
                "EARTHQUAKE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "chi_yu",
        "dexNumber": 1004,
        "moves": {
            "fastMoves": [
                "INCINERATE",
                "SNARL"
            ],
            "chargedMoves": [
                "FLAME_CHARGE",
                "DARK_PULSE",
                "FLAME_WHEEL"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "roaringmoon",
        "dexNumber": 1005,
        "moves": {
            "fastMoves": [
                "SPLASH"
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
        "id": "ironvaliant",
        "dexNumber": 1006,
        "moves": {
            "fastMoves": [
                "SPLASH"
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
        "id": "koraidon",
        "dexNumber": 1007,
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "GIGA_IMPACT",
                "DRAGON_CLAW",
                "CLOSE_COMBAT",
                "OUTRAGE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "koraidon_apex",
        "dexNumber": 1007,
        "moves": {
            "fastMoves": [
                "ROCK_SMASH",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "GIGA_IMPACT",
                "DRAGON_CLAW",
                "CLOSE_COMBAT",
                "OUTRAGE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "miraidon",
        "dexNumber": 1008,
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "HYPER_BEAM",
                "DRAGON_PULSE",
                "THUNDER",
                "OUTRAGE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    },
    {
        "id": "miraidon_ultimate",
        "dexNumber": 1008,
        "moves": {
            "fastMoves": [
                "THUNDER_SHOCK",
                "DRAGON_TAIL"
            ],
            "chargedMoves": [
                "HYPER_BEAM",
                "DRAGON_PULSE",
                "THUNDER",
                "OUTRAGE"
            ]
        },
        "tags": [],
        "buddyDistance": 20,
        "thirdMoveCost": 100000,
        "released": false
    }
];