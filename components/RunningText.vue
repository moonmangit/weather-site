<template>
  <div>{{ currentDisplay }}</div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to: number;
    from?: number;
  }>(),
  {
    from: 0,
  },
);

const currentDisplay = ref(props.from);

onMounted(() => {
  const interval = setInterval(() => {
    currentDisplay.value += 1;
    if (currentDisplay.value >= props.to) {
      clearInterval(interval);
    }
  }, 50);
});
</script>

<style scoped></style>
