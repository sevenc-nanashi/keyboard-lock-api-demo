<script setup lang="ts">
const step = defineModel<number>({ default: 0 });
const next = () => step.value++;
</script>

<template>
  <div class="root">
    <p>
      Chrome・Edgeには、Keyboard Lock APIというものがあります。<br />
      これは、ウェブページがページ内のキーボードの入力を独占することができる機能です。<br />
      これにより、フルスクリーンをEscapeキーを押すだけで抜けられなくすることができます。
    </p>
    <button @click="next">マジで？</button>
  </div>
</template>

<style scoped>
</style>
