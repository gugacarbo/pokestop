import { TypesEffectiveness } from "@/@types/type-effectiveness";

export const typesEffectiveness: TypesEffectiveness = {
  normal: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 0.63,
    ghost: 0.39,
    dragon: 1,
    dark: 1,
    steel: 0.63,
    fairy: 1,
  },
  fire: {
    normal: 1,
    fire: 0.63,
    water: 0.63,
    electric: 1,
    grass: 1.6,
    ice: 1.6,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1.6,
    rock: 0.63,
    ghost: 1,
    dragon: 0.63,
    dark: 1,
    steel: 1.6,
    fairy: 1,
  },
  water: {
    normal: 1,
    fire: 1.6,
    water: 0.63,
    electric: 1,
    grass: 0.63,
    ice: 1,
    fighting: 1,
    poison: 1,
    ground: 1.6,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 1.6,
    ghost: 1,
    dragon: 0.63,
    dark: 1,
    steel: 1,
    fairy: 1,
  },
  electric: {
    normal: 1,
    fire: 1,
    water: 1.6,
    electric: 0.63,
    grass: 0.63,
    ice: 1,
    fighting: 1,
    poison: 1,
    ground: 0.39,
    flying: 1.6,
    psychic: 1,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 0.63,
    dark: 1,
    steel: 1,
    fairy: 1,
  },
  grass: {
    normal: 1,
    fire: 0.63,
    water: 1.6,
    electric: 1,
    grass: 0.63,
    ice: 1,
    fighting: 1,
    poison: 0.63,
    ground: 1.6,
    flying: 0.63,
    psychic: 1,
    bug: 0.63,
    rock: 1.6,
    ghost: 1,
    dragon: 0.63,
    dark: 1,
    steel: 0.63,
    fairy: 1,
  },
  ice: {
    normal: 1,
    fire: 0.63,
    water: 0.63,
    electric: 1,
    grass: 1.6,
    ice: 0.63,
    fighting: 1,
    poison: 1,
    ground: 1.6,
    flying: 1.6,
    psychic: 1,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 1.6,
    dark: 1,
    steel: 0.63,
    fairy: 1,
  },
  fighting: {
    normal: 1.6,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1.6,
    fighting: 1,
    poison: 0.63,
    ground: 1,
    flying: 0.63,
    psychic: 0.63,
    bug: 0.63,
    rock: 1.6,
    ghost: 0.39,
    dragon: 1,
    dark: 1.6,
    steel: 1.6,
    fairy: 0.63,
  },
  poison: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1.6,
    ice: 1,
    fighting: 1,
    poison: 0.63,
    ground: 0.63,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 0.63,
    ghost: 0.63,
    dragon: 1,
    dark: 1,
    steel: 0.39,
    fairy: 1.6,
  },
  ground: {
    normal: 1,
    fire: 1.6,
    water: 1,
    electric: 1.6,
    grass: 0.63,
    ice: 1,
    fighting: 1,
    poison: 1.6,
    ground: 1,
    flying: 0.39,
    psychic: 1,
    bug: 0.63,
    rock: 1.6,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 1.6,
    fairy: 1,
  },
  flying: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 0.63,
    grass: 1.6,
    ice: 1,
    fighting: 1.6,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1.6,
    rock: 0.63,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 0.63,
    fairy: 0.63,
  },
  psychic: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 1.6,
    poison: 1.6,
    ground: 1,
    flying: 1,
    psychic: 0.63,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 1,
    dark: 0.39,
    steel: 0.63,
    fairy: 1,
  },
  bug: {
    normal: 1,
    fire: 0.63,
    water: 1,
    electric: 1,
    grass: 1.6,
    ice: 1,
    fighting: 0.63,
    poison: 0.63,
    ground: 1,
    flying: 0.63,
    psychic: 1.6,
    bug: 1,
    rock: 1,
    ghost: 0.63,
    dragon: 1,
    dark: 1.6,
    steel: 0.63,
    fairy: 0.63,
  },
  rock: {
    normal: 1,
    fire: 1.6,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1.6,
    fighting: 0.63,
    poison: 1,
    ground: 0.63,
    flying: 1.6,
    psychic: 1,
    bug: 1.6,
    rock: 1,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 0.63,
    fairy: 1,
  },
  ghost: {
    normal: 0.39,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1.6,
    bug: 1,
    rock: 1,
    ghost: 1.6,
    dragon: 1,
    dark: 0.63,
    steel: 0.63,
    fairy: 1,
  },
  dragon: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 1.6,
    dark: 1,
    steel: 0.63,
    fairy: 0.39,
  },
  dark: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 0.63,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1.6,
    bug: 1,
    rock: 1,
    ghost: 1.6,
    dragon: 1,
    dark: 0.63,
    steel: 0.63,
    fairy: 0.63,
  },
  steel: {
    normal: 1,
    fire: 0.63,
    water: 0.63,
    electric: 0.63,
    grass: 1,
    ice: 1.6,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 1.6,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 0.63,
    fairy: 1.6,
  },
  fairy: {
    normal: 1,
    fire: 0.63,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 1.6,
    poison: 0.63,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 1.6,
    dark: 1.6,
    steel: 1,
    fairy: 1,
  },
};




