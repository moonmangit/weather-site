<template>
  <div class="w-screen h-[100dvh] flex items-center justify-center">
    <section class="flex flex-col items-center gap-3">
      <h1 class="text-xl">เกิดปัญหา {{ err?.message }}</h1>
      <button class="btn btn-primary w-fit" @click.prevent="navigateTo('/')">
        <Icon name="mdi:arrow-left"></Icon>
        <span>กลับหน้าหลัก</span>
      </button>
    </section>

    <FooterText />
  </div>
</template>

<script setup lang="ts">
const err = useError();
</script>

<style scoped></style>
