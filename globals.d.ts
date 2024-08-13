import main from "./locales/en/main.json";
import rankings from "./locales/en/rankings.json";
import filters from "./locales/en/filters.json";
import pokemons from "./locales/en/pokemons.json";
import settings from "./locales/en/settings.json";

type Messages = {
  main: typeof main;
  rankings: typeof rankings;
  filters: typeof filters;
  pokemons: typeof pokemons;
  settings: typeof settings;
};

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
