<template>
  <div>
    <!-- 이미지를 그릴 캔버스 요소 -->
    <canvas ref="canvas"></canvas>

    <!-- 합성된 이미지를 표시할 이미지 요소 -->
    <img :src="compositeImage" alt="합성된 이미지" />

    <!-- 합성 버튼 -->
    <button @click="composeImage">이미지 합성</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      compositeImage: null, // 합성된 이미지를 저장할 데이터
    };
  },
  methods: {
    composeImage() {
      // 캔버스 요소 가져오기
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext('2d');

      // 이미지 그리기
      const backgroundImage = new Image();
      backgroundImage.src = 'https://postfiles.pstatic.net/MjAyMzA4MjVfMjg0/MDAxNjkyOTA3NzQwMjE4._GqxRpmN8lRU7zZqrnLPcuUJk_n4XvXH5U-E-efrqIcg.WeZCavbkAOF2-4bSR9k0nS2HuGngRMrmmOrAff2Vk34g.PNG.happychae98/Screenshot_2023-08-25_at_1.30.46_AM.png?type=w966';
      backgroundImage.onload = () => {
        canvas.width = backgroundImage.width;
        canvas.height = backgroundImage.height;

        // 배경 이미지 그리기
        ctx.drawImage(backgroundImage, 0, 0);

        // 합성할 이미지 그리기
        const overlayImage = new Image();
        overlayImage.src = 'https://postfiles.pstatic.net/MjAyMzA4MjVfNyAg/MDAxNjkyOTA3NTg4ODI2.FyFV2UmTZ3oXjvglQkKi_H5-xTQg6TM0OQ7aC5Cbvygg.xodlZYo1FXxjNlUbbCKdYj3Gptzqso2o6wc1oe3vmWEg.PNG.happychae98/Screenshot_2023-08-25_at_5.05.10_AM-removebg-preview.png?type=w966';
        overlayImage.onload = () => {
          ctx.drawImage(overlayImage, 50, 50); // 원하는 위치에 그림. 위치 아직 결정 X

          // 합성된 이미지를 데이터 URL로 변환하여 저장
          this.compositeImage = canvas.toDataURL();
        };
      };
    },
  },
};
</script>