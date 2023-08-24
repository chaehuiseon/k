<template>
  <div>
    <a id="kakaotalk-sharing-btn2" href="javascript:;">
      <img src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
           alt="카카오톡 공유 보내기 버튼" @click="sendKakao"/>
    </a>
  </div>
</template>

<script>
export default {

  methods: {
    sendKakao() {
      // 공통 link
      const commonLink = {
        mobileWebUrl: 'https://kbwallet.kbstar.com/main/FMA10000',
        webUrl: 'https://kbwallet.kbstar.com/main/FMA10000',
      };


      const params = {

        //실제, 아래 순서대로 배치됨.
        imageUrl: 'https://postfiles.pstatic.net/MjAyMzA4MjVfMzgg/MDAxNjkyOTAwNTI5ODQ4.8zMaCDK-h_hS1F4NFRXYyaUZhK5-Mo3emOTQ7EKDcLEg.oQ-yOYpdo-chAjO8VD-Z8SUrSqePnH7AK7YM_FiwYcsg.PNG.happychae98/godlifegogo.png?type=w966',
        //국민지갑 아이콘..
        profileImageUrl: 'https://postfiles.pstatic.net/MjAyMzA4MjVfMjcx/MDAxNjkyOTAwNTA1OTY4.mI8JN3Us7qu5EG93zbHKLGmG-Y5s1hyv118caPoRCmog.bdLgh9QqxUpt_xoz6vkMhFklvexzxyKgokdYGKNj18Yg.PNG.happychae98/kbwallet.png?type=w966',
        profileText: '하늘보기',
        title: '하루에 한 번은 하늘을 바라보세요.',
        //[최대 2줄까지 노출되지만, 2줄이 화면 넓이에 따라 상대적임. 따라서 화면이아래 텍스트 길이 정도까지가 적당.]
        //1) 갤럭시 S23+ 기준
        // #성공하면 STAR리워드, NFC'
        //   --> 뒤로 간 경우 : 전부 표시, 앞으로 온 경우 : 하루 1번까지만 표시(STAR리워드, 찍고 다음줄로 이동)
        //2) 갤럭시 S23 기준
        //#성공하면 STAR리워드, NFC'
        //   --> 뒤로 간 경우 : STAR리워드까지만 표시, 앞으로 온 경우 : 2주마다 작심 2주 ... 에서 짤림.
        description: '#2주마다 작심2주 #하루1번 #총 10번 #성공하면 STAR리워드, NFC',
        //image는 1:1비율, 원본비율 유지.
        //배경이미지를 조작이 불가능한 경우로 생각함.
        //따라서, 기존 상세페이지이미지 + 함께 갓생살래? 고정 텍스트를 프로그램상에서 조합시켜서 url 생성 제안
        commonLink: commonLink, // 공통 link
      };

      this.createKakaoLink(params);
    },
    
    createKakaoLink(params) {
      window.Kakao.Share.createDefaultButton({
        container: '#kakaotalk-sharing-btn2',
        objectType: 'feed',
        content: {
          title: params.title,
          description: params.description,
          imageUrl: params.imageUrl,
          link: params.commonLink, // 공통 link 사용
        },
        itemContent: {
          profileText: params.profileText,
          profileImageUrl: params.profileImageUrl,
        },
        buttons: [
          {
            title: '갓生이란',
            //로그인을 하지 않으면, 페이지에 접근을 하지 못하기 때문에 공톨 link로 설정을 해 놓은 것.
            //가능하다면, 로그인 없이도 접근 가능하게 하여 갓생이 무엇인지 설명을 볼 수 있도록함.
            link: params.commonLink, // 공통 link 사용
          },
          {
            //로그인을 하지 않으면, 페이지 접근을 하지 못하기 때문에 공톨 link로 설정을 해 놓은 것.
            //가능하다면, 로그인 없이도 접근 가능하게 하여 해당 챌린지(갓생)(ex: 하늘보기)가 무엇인지 설명을 볼 수 있도록함.
            title: '자세히 보기',
            link: params.commonLink, // 공통 link 사용
          },
        ],
      });
    },
  },
};
</script>