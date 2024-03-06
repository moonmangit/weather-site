export default defineNuxtConfig({
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
