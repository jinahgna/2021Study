<template>
  <div class="layout01">
    <div class="scroll-area">
      <label for="input-text01">text input01</label>
      <input type="text" id="input-text01" class="input-text">
      <label for="input-text02">text input02</label>
      <input type="text" id="input-text02" class="input-text">
      <label for="input-text03">text input03</label>
      <input type="text" id="input-text03" class="input-text">
      <label for="input-input04">text input04</label>
      <input type="text" id="input-input04" class="input-text">
      <label for="input-input05">text input05</label>
      <input type="text" id="input-input05" class="input-text">
      <label for="input-input06">text input06</label>
      <input type="text" id="input-input06" class="input-text">
    </div>
    <div class="fixed-bottom-area">
      <button class="button">fixed button</button>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "layout01",
  components: {
    // HelloWorld,
  },
  mounted() {
    // ios 스크롤 문제 적용 코드
    const bodyScrollLock = require('body-scroll-lock');
    const disableBodyScroll = bodyScrollLock.disableBodyScroll;
    const targetElement = document.querySelector('.scroll-area');
    disableBodyScroll(targetElement);
  },
};
</script>