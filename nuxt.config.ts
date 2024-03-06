export default defineNuxtConfig({
  app: {
    head: {
      title: "อากาศวันนี้",
    },
  },
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
  ],

  ssr: false,

  runtimeConfig: {
    public: {
      openWeatherMapApiKey: process.env.OPEN_WEATHER_MAP_API_KEY,
      firebase: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID,
      },
      metaEndpoint: process.env.META_ENDPOINT,
    },
  },

  // # Module Configuration
  pinia: {
    storesDirs: ["./stores"],
  },
  googleFonts: {
    families: {
      "IBM Plex Sans Thai": [400, 700, 900],
    },
  },
});
