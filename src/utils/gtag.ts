"use client"
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  if (process.env.NODE_ENV === 'production') {
    // @ts-ignore
    window?.gtag?.('config', process.env.NEXT_PUBLIC_GA_KEY, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action: string, data: unknown) => {
  if (process.env.NODE_ENV === 'production') {
    // @ts-ignore
    window?.gtag?.('event', action, data);
  }
};
