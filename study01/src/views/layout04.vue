<template>
  <div class="layout04">
    <div class="scroll-area">
      scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>
      scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>scroll<br/>
    </div>
    <div class="fixed-bottom-area">
      <button @click="popupAction('popup01')" class="button">popup open</button>
    </div>
    <!-- START : 팝업 -->
    <div class="wrap-popup" v-if="this.popup.popup01">
        <span class="dimmed"></span>
        <div class="popup-area">
            <div class="popup-title">
                <h2 class="title-text">데이터 요금 부과 안내</h2>
            </div>
            <div class="popup-content">
                <p class="popup-message">Wi-Fi 환경이 아닌 경우<br/>데이터 요금이 부과될 수 있습니다.<br/>계속 진행하시겠습니까?</p>
            </div>
            <div class="popup-btn-area">
                <button type="button"  @click="popupAction('popup01')" class="btn btn-text" data-popup-close="popupNormal">
                    <span>취소</span>
                </button>
                <button type="button" @click="popupAction('popup01')" class="btn btn-text pink">
                    <span>확인</span>
                </button>
            </div>
        </div>
    </div>
    <!-- END : 팝업 -->
  </div>
</template>

<script>
export default {
  name: "layout04",
  components: {
  },
  data() {
    return {
      popup: {
        popup01: false,
      }
    }
  },
  methods: {
    popupAction(target) {
      if (target === 'popup01') {
        this.popup.popup01 === false?this.popup.popup01 = true:this.popup.popup01 = false ;
      }
    }
  },
  mounted() {
    console.log('e', this.popup.popup01);
      // ios 스크롤 문제 적용 코드
      const bodyScrollLock = require('body-scroll-lock');
      const disableBodyScroll = bodyScrollLock.disableBodyScroll;
      const targetElement = document.querySelector('.scroll-area');
      disableBodyScroll(targetElement);
  },
};
</script>
