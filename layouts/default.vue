<template>
  <div class="container mx-auto h-[calc(100dvh-45px)] flex flex-col">
    <header class="flex justify-between items-center py-3 px-5">
      <section class="flex items-center gap-2">
        <Icon name="wi:day-cloudy" class="text-4xl text-primary"></Icon>
        <h1 class="text-2xl font-bold">อากาศวันนี้</h1>
      </section>
      <button class="btn btn-square btn-ghost">
        <Icon name="mdi:menu"></Icon>
      </button>
    </header>

    <main class="flex-1">
      <slot></slot>
    </main>

    <footer
      class="fixed inset-x-0 bottom-0 flex justify-center text-sm p-3 text-neutral/50 text-center"
    >
      <p>
        All rights reserved to SG Studio. API powered by
        <a
          href="https://openweathermap.org"
          target="_blank"
          class="link link-primary"
          >OpenWeatherMap</a
        >.
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
