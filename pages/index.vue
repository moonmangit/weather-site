<template>
  <div class="h-full relative flex items-center justify-center">
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
              class="saturate-0 w-full h-full"
            />
            <div class="absolute inset-0 bg-primary mix-blend-lighten"></div>
          </div>
        </div>
        <section class="flex flex-col gap-3 items-center justify-center">
          <h1 class="text-4xl font-bold">{{ data.weather.name }}</h1>
          <p class="text-lg">{{ data.weather.weather[0].description }}</p>
          <p class="text-6xl font-bold">{{ data.weather.main.temp }}°C</p>
          <p class="text-lg">
            รู้สึกเหมือน {{ data.weather.main.feels_like }}°C
          </p>
          <p class="text-lg">
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
  lang: string = "th"
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
        reject("Could not get location.");
      },
      {
        enableHighAccuracy: true,
      }
    );
  });
  // const res: WeatherApiResponse = await $fetch(
  //   resolvePath(
  //     position.coords.latitude.toString(),
  //     position.coords.longitude.toString(),
  //     API_KEY,
  //     "metric",
  //     "th"
  //   )
  // );
  const res: WeatherApiResponse = {
    coord: {
      lon: 103.5069,
      lat: 16.4325,
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "เมฆเต็มท้องฟ้า",
        icon: "04d",
      },
    ],
    base: "stations",
    main: {
      temp: 38.29,
      feels_like: 45.29,
      temp_min: 35.51,
      temp_max: 38.29,
      pressure: 1007,
      humidity: 99,
      sea_level: 1007,
      grnd_level: 990,
    },
    visibility: 10000,
    wind: {
      speed: 4.31,
      deg: 248,
      gust: 3.33,
    },
    clouds: {
      all: 100,
    },
    dt: 1709702744,
    sys: {
      type: 2,
      id: 2038185,
      country: "TH",
      sunrise: 1709680832,
      sunset: 1709723653,
    },
    timezone: 25200,
    id: 1610469,
    name: "กาฬสินธุ์",
    cod: 200,
  };
  return {
    weather: res,
  };
});

watch(error, (v) => {
  alert(v?.message);
});
</script>

<style scoped></style>
