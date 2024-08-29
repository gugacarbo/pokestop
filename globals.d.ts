import main from "./locales/en/main.json";
import rankings from "./locales/en/rankings.json";
import filters from "./locales/en/filters.json";
import pokemons from "./locales/en/pokemons.json";
import settings from "./locales/en/settings.json";
import pages from "./locales/en/pages.json";
import moves from "./locales/en/moves.json";

type Messages = {
  main: typeof main;
  pages: typeof pages;
  rankings: typeof rankings;
  filters: typeof filters;
  settings: typeof settings;
  moves: typeof moves;

};

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
