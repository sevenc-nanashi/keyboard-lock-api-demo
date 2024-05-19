<script setup lang="ts">
const intent =
  "https://twitter.com/intent/tweet?text=" +
  encodeURIComponent(
    "脱出困難なフルスクリーンを体験してきました。\n" +
      "https://sevenc7c.com/keyboard-lock-api-demo/",
  );
</script>

<template>
  <div class="root">
    <p>
      以上、Keyboard Lock APIの悪用のデモでした。<br />
      このようなコトになっても大丈夫なように、以下に対処法を示します：
    </p>
    <h2>広告ブロッカーを入れる</h2>
    <p>
      ほとんどの場合、このような悪用は広告によって行われます。<br />
      そのため、広告ブロッカーを入れることで、このような悪用を防ぐことができます。<br />
      個人的に好きなのは<a href="https://adguard.com/ja/welcome.html">AdGuard</a
      >です。
    </p>
    <h2>Firefoxを使う</h2>
    <p>
      FirefoxはKeyboard Lock
      APIに対応していません。そのため、Esc長押しでしか抜け出せない、のような状況はなくなります。
    </p>

    <p>
      このページはこれで終わりです。ありがとうございました。
      <a :href="intent" target="_blank">拡散する</a>
    </p>
  </div>
</template>

<style scoped>
h2 {
  margin: 0;
}
</style>
