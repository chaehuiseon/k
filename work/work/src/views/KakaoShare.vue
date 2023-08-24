<template>
  <div>
    <a id="kakaotalk-sharing-btn" href="javascript:;">
    <img src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
     alt="카카오톡 공유 보내기 버튼" @click="sendLinkDefault"/>
     </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "", // text 초기값을 빈 문자열로 설정합니다.
      defaultLinkUrl: 'https://kbwallet.kbstar.com/main/FMA10000',
      title: "[하늘보기] NFC 챌린지에 함께 해요!",
      description: "#2주마다 작심2주 # 하루1번 #총 10회 #갓생살기 \n#성공하면 STAR리워드, NFC 획득! #하루에 한 번은 하늘을 바라보세요. \n#탁 트인 하늘로 모든 스트레스를 던져버리세요!",
    };
  },
  methods: {
    formatText() {
      // title을 대괄호 안에 넣고 들여쓰기한 후 description을 추가하여 text를 조합합니다.
      this.text = `${this.title}\n\n${this.description}`;
    },
    sendLinkDefault() {
      // text 조합을 카카오 링크 생성 전에 수행
      this.formatText();

      // Kakao 링크 생성
      window.Kakao.Share.createDefaultButton({
        container: '#kakaotalk-sharing-btn',
        objectType: 'text',
        text: this.text, // formatText에서 업데이트한 text를 사용합니다.
        link: {
          mobileWebUrl: this.defaultLinkUrl,
          webUrl: this.defaultLinkUrl,
        },
      });
    },
  },
};
</script>
