<template>
  <div
    class="container mx-auto h-[calc(100vh-45px)] flex flex-col overflow-y-auto overflow-x-hidden"
  >
    <header class="flex justify-between items-center py-3 px-5">
      <section class="flex items-center gap-2">
        <Icon
          name="wi:day-cloudy"
          class="text-4xl text-primary # animate__animated animate__fadeInLeft"
        ></Icon>
        <h1
          class="text-2xl font-bold # animate__animated animate__fadeInDown"
          :style="{
            animationDelay: '0.25s',
          }"
        >
          อากาศวันนี้
        </h1>
      </section>
      <section>
        <ul class="hidden md:flex flex-wrap items-center gap-2">
          <li v-for="(nav, navKey, navIndex) in navigates" :key="navKey">
            <RouterLink
              :to="nav.path"
              class="flex items-center gap-1 btn btn-ghost btn-sm font-normal # animate__animated animate__fadeInDown animate__faster"
              :disabled="nav.disabled"
              :style="{
                animationDelay: `${navIndex * 0.1 + 0.25}s`,
              }"
            >
              <span>{{ nav.displayText }}</span>
              <Icon v-if="nav.icon" :name="nav.icon"></Icon>
            </RouterLink>
          </li>
        </ul>

        <div class="block md:hidden">
          <div class="dropdown dropdown-end">
            <div
              tabindex="0"
              role="button"
              class="btn btn-ghost btn-square btn-sm font-normal"
            >
              <Icon class="text-xl" name="mdi:menu"></Icon>
            </div>
            <ul
              tabindex="0"
              class="dropdown-content z-[1] menu p-2 shadow hover:shadow-xl bg-base-100 rounded-btn w-52 gap-2 border border-transparent hover:border-neutral/10"
            >
              <li v-for="(nav, navKey) in navigates" :key="navKey">
                <RouterLink
                  :to="nav.path"
                  class="flex items-center justify-between gap-1 btn btn-ghost btn-sm font-normal"
                  :disabled="nav.disabled"
                >
                  <span>{{ nav.displayText }}</span>
                  <Icon v-if="nav.icon" :name="nav.icon"></Icon>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </header>

    <main class="flex-1">
      <slot></slot>
    </main>

    <FooterText class="# animate__animated animate__fadeInUp"></FooterText>
  </div>
</template>

<script setup lang="ts">
enum AppPaths {
  Home = "/",
  About = "/about",
  Contact = "/contact",
}
const navigates: {
  [key in keyof typeof AppPaths]: {
    displayText: string;
    icon?: string;
    path: string;
    disabled?: boolean;
  };
} = {
  Home: {
    displayText: "หน้าหลัก",
    path: AppPaths.Home,
  },
  About: {
    displayText: "เกี่ยวกับ",
    path: AppPaths.About,
    icon: "mdi:information-slab-circle",
    disabled: true,
  },
  Contact: {
    displayText: "ติดต่อ",
    path: AppPaths.Contact,
    icon: "mdi:email",
    disabled: true,
  },
};
</script>

<style scoped>
.router-link-exact-active {
  @apply bg-primary text-primary-content;
}
</style>
