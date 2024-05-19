<script setup lang="ts">
const step = defineModel<number>({ default: 0 });
const next = () => step.value++;

const goJail = async () => {
  await navigator.keyboard.lock(["Escape"]);
  document.body.requestFullscreen();
  next();
};
</script>

<template>
  <div class="root">
    <p>それではやってみましょう。</p>
    <button @click="goJail">牢獄に入る</button>
  </div>
</template>

<style scoped>
</style>
