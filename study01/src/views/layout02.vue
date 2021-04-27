<template>
  <div class="layout02">
    <div class="scroll-area">
      scroll<br/>scroll<br/>scroll<br/><br/>키패드 활성화시<br/>보여지는 뷰영역 만큼만<br/>높이 조정이 필요한 경우<br/>ex)채팅창<br/><br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>
    </div>
    <div class="fixed-bottom-area">
      <label for="input-text01">text input01</label>
      <input type="text" id="input-text01" class="input-text" @focus="inputFocus()" @blur="inputFocusOut()">
    </div>
  </div>
</template>

<script>
export default {
  name: "layout02",
  components: {
  },
  methods: {
    // 키패드 활성화시 뷰영역 조정
    inputFocus() {
        setTimeout(()=>{
            document.querySelector('body').style.position = 'absolute';
            document.querySelector('#nav').style.position = 'absolute';
            document.querySelector('body').style.top = `${window.pageYOffset}px`;
            document.querySelector('body').style.height = `auto`;
            document.querySelector('#app').style.height = `${window.innerHeight}px`;
        }, 70);
    },
    // 키패드 비활성화시 뷰영역 조정
    inputFocusOut() {
      document.querySelector('body').style.position = 'fixed';
      document.querySelector('#nav').style.position = 'fixed';
      document.querySelector('body').style.top = 0;
      document.querySelector('body').style.height = `100%`;
      document.querySelector('#app').style.height = `100%`;
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
