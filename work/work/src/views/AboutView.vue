<template>
  <div class="about">
    <h3>카카오톡 URL공유시, 타이틀, 이미지, description, url 등은 header의 og테그를 읽어옴.</h3>
    <br>
    <h3>따라서, 다수의 기업들이 이를 이용하여 공유하기를 개발하고 있음.</h3>
    <br>
    <h3>그러나, vue.js는 SPA라서 페이지마다 헤더를 가지지 않음. 따라서, 현재 각 갓생 상세피이지를 넣으면 고유한 공유 화면이 아닌 다 같은 화면이 보여짐.</h3>
    <br>
    <h3>해결할 수 있는 방법</h3>
     <br>
    <h3>1) prerender-plugin-spa(Vue.js에서 SEO를 제공) 적용. 그러나 현재 npm deprecated 된 상태. 시도를 해봤으나 계속 빌드 실패..</h3>
     <br>
    <h3>2) Nuxt.js 사용 - Vue.js 어플리케이션을 만드는 프레임워크. vue2 포함됨. </h3>
     <br>
    <h3>3) ssr</h3>
    
  </div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    // 페이지 제목 설정
    document.title = 'NFC 챌린지 하고있어유 ㅎㅎ';

    // OG 태그 설정
    const ogTitle = '홈 페이지 - My Vue App';
    const ogImage ='https://postfiles.pstatic.net/MjAyMzA4MjVfMzgg/MDAxNjkyOTAwNTI5ODQ4.8zMaCDK-h_hS1F4NFRXYyaUZhK5-Mo3emOTQ7EKDcLEg.oQ-yOYpdo-chAjO8VD-Z8SUrSqePnH7AK7YM_FiwYcsg.PNG.happychae98/godlifegogo.png?type=w966';
    const ogDescription = '국민은행 New Fun Contnents에서의 갓생살기 하자~!!!!';
    const ogType = 'website';
    const currentUrl = 'http://3.35.208.221/about';// EC2 public IP 노출X


    // 기존 OG 태그 삭제 (선택사항)
    const existingOgTags = document.querySelectorAll('meta[property^="og:"]');
    existingOgTags.forEach(tag => tag.remove());

    // 새로운 OG 태그 추가
    const metaTags = [
      { property: 'og:title', content: ogTitle },
      { property: 'og:image', content: ogImage },
      { property: 'og:description', content: ogDescription },
      { property: 'og:type', content: ogType },
      { property: 'og:url', content: currentUrl }, // 여기에 URL 추가

    ];

    metaTags.forEach(tagInfo => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', tagInfo.property);
      meta.content = tagInfo.content;
      document.head.appendChild(meta);
    });

    next();
  },
};
</script>