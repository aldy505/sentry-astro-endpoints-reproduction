import * as Sentry from "@sentry/astro";

Sentry.init({
  dsn: "https://295b8061729518a34db955ef660eff2b@o447951.ingest.sentry.io/4506099854475265",
  tracesSampleRate: 1.0,
  debug: true,
});
