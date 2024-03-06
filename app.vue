<template>
  <div class="font-sans text-neutral">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import "animate.css/animate.min.css";

// Weather App
const title = "อากาศวันนี้";
const description = "เว็บแอพพลิเคชั่นสำหรับดูสภาพอากาศตามสถานที่และเวลาจริง";
const iconImage = "/favicon.png";
useSeoMeta({
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: iconImage,
  ogUrl: useRuntimeConfig().public.metaEndpoint,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: iconImage,
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "th",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: iconImage,
    },
  ],
});
</script>
