<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps<{
  playSound: boolean;
}>();
const step = defineModel<number>({ default: 0 });

const virus = ref("");
let interval: ReturnType<typeof setInterval> | null = null;
let timeout: ReturnType<typeof setTimeout> | null = null;

let beforeSize = { width: window.innerWidth, height: window.innerHeight };
const onResize = () => {
  if (
    beforeSize.width < window.innerWidth ||
    beforeSize.height < window.innerHeight
  ) {
    beforeSize = { width: window.innerWidth, height: window.innerHeight };
    return;
  }
  step.value = 5;
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
  if (props.playSound) {
    beep.play();
    voice.play();
  }
  interval = setInterval(() => {
    const randHex = Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, "0");
    virus.value += `0x${randHex}: Trojan.Win32.FakeAlert `;
  }, 100);

  timeout = setTimeout(() => {
    step.value = 5;
  }, 10000);
});
onUnmounted(() => {
  beep.pause();
  voice.pause();
  window.removeEventListener("resize", onResize);
  window.removeEventListener("keydown", cancelAll);
  navigator.keyboard.unlock();
  document.exitFullscreen();
  document.body.removeAttribute("hide-cursor");

  if (interval !== null) {
    clearInterval(interval);
  }
  if (timeout !== null) {
    clearTimeout(timeout);
  }
});

const beep = new Audio("/sounds/beep.mp3");
beep.loop = true;
const voice = new Audio("/sounds/voice.mp3");
voice.loop = true;
</script>

<template>
  <div class="root">
    <h1>回復</h1>
    <p>
      あなたのコンピュータからウイルスが検出されました。今すぐ Nicrosoft
      サポートに電話してください。
    </p>
    <p class="phone">0X0-1234-5678</p>
    <p>検出されたウイルス：</p>
    <pre class="viruslist">{{ virus }}</pre>
  </div>
</template>

<style scoped>
.root {
  background: #0074d0;
  color: white;

  padding: 20px;
  box-sizing: border-box;

  width: 100%;
  height: 100%;

  font-size: 1.5em;

  cursor: none;
}

h1 {
  font-size: 4em;
  margin: 0;
}

p {
  margin: 0;
}

.phone {
  font-size: 2em;
  font-weight: bold;
}

.viruslist {
  font-family: monospace;
  white-space: pre;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
  white-space: pre-wrap;
  word-break: break-all;
  overflow-wrap: break-word;
  display: inline-block;
}
</style>
