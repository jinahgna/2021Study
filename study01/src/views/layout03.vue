<template>
  <div class="layout03">
    <!-- scroll-area 스크롤시 data-role-hide가 false이면 보이는 형태이고, true면 숨겨져 있는 형태입니다 -->
    <div class="tab-shv" data-role-hide="false">
        scroll hidden&amp;visible
    </div>
    <div class="scroll-area" @scroll="scrollAction" @touchstart="scrollStart" @touchend="scrollEnd">
      scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>
      scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>
    </div>
    <div class="fixed-bottom-area" data-role-hide="false">
      <button class="button">fixed button</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "layout03",
  components: {
  },
  data() {
    return {
      // 전역 변수
      touchY: 0,
      direction: '',
      scrolling: Boolean,
    }
  },
  methods: {
    scrollAction() {
      this.scrolling = true;
      const fixedContents = document.querySelectorAll('[data-role-hide]'); // 숨겨져야 하는 영역
      const scrollArea = document.querySelector('.scroll-area'); // scroll되는 영역
      const curY = scrollArea.scrollTop;
      const toBottom = curY + scrollArea.clientHeight + 100;
      if(this.scrolling){
          fixedContents.forEach((fixedContent) => {
            if (this.direction === 'down') { // 방향을 내리고 있을때
              fixedContent.setAttribute('data-role-hide', 'true'); 
              if (toBottom >= scrollArea.scrollHeight) fixedContent.setAttribute('data-role-hide', 'false');
            } else { // 방향을 올리고 있을때
              fixedContent.setAttribute('data-role-hide', 'false'); 
            }
            if (scrollArea.scrollTop === 0) {  // 맨위까지 올려졌을때
              fixedContent.setAttribute('data-role-hide', 'false'); 
            } else if (scrollArea.scrollTop === scrollArea.scrollHeight - scrollArea.clientHeight) { // 맨밑까지 내려졌을때
              fixedContent.setAttribute('data-role-hide', 'false'); 
            };
          });
          this.scrolling = false;
      }
    },
    scrollStart(e) {
      this.touchY = e.touches[0].clientY;
    },
    scrollEnd(e) {
      this.deltaY = e.changedTouches[0].clientY - this.touchY;
      if (this.deltaY >= 0) {
          this.direction = 'up';
      } else {
          this.direction = 'down';
      }
    },
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
