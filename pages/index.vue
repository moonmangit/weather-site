<template>
  <div class="h-full flex flex-col items-center justify-center">
    <div v-if="pending" class="flex flex-col gap-3 items-center justify-center">
      <Icon
        name="mdi:loading"
        class="animate-spin text-8xl text-primary"
      ></Icon>
      <p class="animate-pulse text-sm">กำลังรับข้อมูลสภาพอากาศ ...</p>
    </div>
    <main v-else class="p-5">
      <section v-if="data">
        <div class="flex items-center justify-center">
          <div class="relative w-[min(150px,100%)] sm:w-full">
            <img
              :src="`https://openweathermap.org/img/wn/${data.weather.weather[0].icon}@4x.png`"
              class="saturate-0 w-full h-full # animate__animated animate__fadeIn"
            />
            <div class="absolute inset-0 bg-primary mix-blend-lighten"></div>
          </div>
        </div>
        <section class="flex flex-col gap-3 items-center justify-center">
          <h1
            class="text-4xl font-bold # animate__animated animate__fadeInDown"
          >
            {{ data.weather.name }}
          </h1>
          <p
            class="text-lg # animate__animated animate__fadeInUp"
            :style="{
              animationDelay: '0.25s',
            }"
          >
            {{ data.weather.weather[0].description }}
          </p>
          <p
            class="text-6xl font-bold flex # animate__animated animate__fadeInUp"
            :style="{
              animationDelay: '0.4s',
            }"
          >
            <RunningText :to="data.weather.main.temp" />
            °C
          </p>
          <p
            class="text-lg # animate__animated animate__fadeInUp"
            :style="{
              animationDelay: '0.5s',
            }"
          >
            รู้สึกเหมือน {{ data.weather.main.feels_like }}°C
          </p>
          <p
            class="text-lg # animate__animated animate__fadeInUp"
            :style="{
              animationDelay: '0.6s',
            }"
          >
            ต่ำสุด: {{ data.weather.main.temp_min }}°C, สูงสุด:
            {{ data.weather.main.temp_max }}°C
          </p>
        </section>
      </section>
      <section v-else>no data</section>
    </main>
  </div>
</template>

<script setup lang="ts">
import type { WeatherApiResponse } from "~/assets/types/apiResponse";

function resolvePath(
  lat: string,
  lon: string,
  apiKey: string,
  units: "metric" | "imperial" = "metric",
  lang: string = "th",
) {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}&lang=${lang}`;
}

const API_KEY = useRuntimeConfig().public.openWeatherMapApiKey;
const { data, pending, error } = useAsyncData<{
  weather: WeatherApiResponse;
}>(async () => {
  const position: GeolocationPosition = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      () => {
        reject(new Error("Could not get location."));
      },
      {
        enableHighAccuracy: true,
      },
    );
  });
  const res: WeatherApiResponse = await $fetch(
    resolvePath(
      position.coords.latitude.toString(),
      position.coords.longitude.toString(),
      API_KEY,
      "metric",
      "th",
    ),
  );

  return {
    weather: res,
  };
});

watch(error, (v) => {
  alert(v?.message);
});
</script>

<style scoped></style>
