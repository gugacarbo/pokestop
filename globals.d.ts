import main from "./locales/en/main.json";
import rankings from "./locales/en/rankings.json";
import filters from "./locales/en/filters.json";

type Messages = {
  main: typeof main;
  rankings: typeof rankings;
  filters: typeof filters;
};

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
