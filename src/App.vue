<script setup lang="ts">
import { ref } from "vue";
import AboutThis from "./components/AboutThis.vue";
import EvilDemo from "./components/EvilDemo.vue";
import NotAvailable from "./components/NotAvailable.vue";
import JailScreen from "./components/JailScreen.vue";
import EscapeSuccess from "./components/EscapeSuccess.vue";
import EscapeFail from "./components/EscapeFail.vue";
import BluescreenDemo from "./components/BluescreenDemo.vue";
import ConclusionText from "./components/ConclusionText.vue";

const step = ref(navigator.keyboard ? 0 : -1);
</script>

<template>
  <BluescreenDemo v-model="step" :playSound="false" v-if="step === 4.1" />
  <BluescreenDemo v-model="step" :playSound="true" v-else-if="step === 4.2" />
  <div v-else>
    <h1>脱出困難なフルスクリーン</h1>
    <NotAvailable v-if="step === -1" />
    <AboutThis v-model="step" v-if="step === 0" />
    <EvilDemo v-model="step" v-else-if="step === 1" />
    <JailScreen v-model="step" v-else-if="step === 2" />
    <EscapeFail v-model="step" v-else-if="step === 3.1" />
    <EscapeSuccess v-model="step" v-else-if="step === 3.2" />
    <ConclusionText v-else-if="step === 5" />

    <div class="footer">
      作：<a href="https://sevenc7c.com" target="_blank">名無し｡</a> |
      ソースコード：<a
        href="https://github.com/sevenc-nanashi/keyboard-lock-api-demo"
        target="_blank"
        >GitHub</a
      >
      <template v-if="step === 5"> | 声：Voicevox Nemo / 女声1 </template>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2rem;
}
button {
  font-size: 1rem;

  background-color: #eee;
  padding: 0.5rem 1rem;
  border: 2px solid #333;
  border-radius: 0.5rem;
}

.footer {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #333;
  font-size: 0.8rem;
}
</style>
