<script setup lang="ts">
const step = defineModel<number>({ default: 0 });
const next = () => {
  step.value++;
  navigator.keyboard.lock(["Escape"]);
  document.body.requestFullscreen();
};
</script>

<template>
  <div class="root">
    <p>
      おめでとうございます！脱出できましたね！<br />
      どう思いましたか？もしこれがこんな感じの画面で出てきたらどうしますか？<br />
      （注意：この先、音が出ます）
    </p>
    <button @click="next">どんな感じに？</button>
  </div>
</template>

<style scoped></style>
