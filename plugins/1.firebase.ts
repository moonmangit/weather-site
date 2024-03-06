import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin(({ $config }) => {
  const app = initializeApp($config.public.firebase);
  getAnalytics(app);
});
