<template>
  <div id="app">
      <div id="nav">
        <router-link to="/layout01">layout01</router-link>
        <router-link to="/layout02">layout02</router-link>
        <router-link to="/layout03">layout03</router-link>
        <router-link to="/layout04">layout04</router-link>
      </div>
      <router-view />
    </div>
</template>

<script>

export default {
  name: "app",
  components: {
    
  },
    mounted() {
      // ios 스크롤 문제 적용 코드
      const bodyScrollLock = require('body-scroll-lock');
      const enableBodyScroll = bodyScrollLock.enableBodyScroll;
      const targetElement = document.querySelector('#app');
      enableBodyScroll(targetElement);
  },
}
</script>
