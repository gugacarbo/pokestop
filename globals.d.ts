import main from './locales/en/main.json';
import rankings from './locales/en/rankings.json';


type Messages = {
    main: typeof main;
    rankings: typeof rankings;
};

declare global {
    // Use type safe message keys with `next-intl`
    interface IntlMessages extends Messages { }
}