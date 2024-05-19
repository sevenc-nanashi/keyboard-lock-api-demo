<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

const step = defineModel<number>({ default: 0 });

const giveUp = async () => {
  document.exitFullscreen();
  step.value = 3.1;
};
let beforeSize = { width: window.innerWidth, height: window.innerHeight };
const onResize = () => {
  if (
    beforeSize.width < window.innerWidth ||
    beforeSize.height < window.innerHeight
  ) {
    beforeSize = { width: window.innerWidth, height: window.innerHeight };
    return;
  }
  step.value = 3.2;
};

const cancelAll = (e: Event) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};

onMounted(() => {
  window.addEventListener("resize", onResize);
  window.addEventListener("keydown", cancelAll);
  document.body.setAttribute("hide-cursor", "");
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
  window.removeEventListener("keydown", cancelAll);
  navigator.keyboard.unlock();
  document.body.removeAttribute("hide-cursor");
});
</script>

<template>
  <div class="root">
    <p>牢獄へようこそ。ここから抜け出してみて下さい。</p>
    <button @click="giveUp">牢獄から出る（ギブアップ）</button>
  </div>
</template>

<style scoped></style>

<style>
body[hide-cursor] {
  cursor: none;
}
</style>
