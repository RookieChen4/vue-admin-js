<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div> -->
      <slot />
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" />

    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev" />
    <div class="swiper-button-next" /> -->

    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar" /> -->
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Swiper',
  mounted() {
    this.initSwiper()
  },
  methods: {
    initSwiper() {
      new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        slidesPerView: 3,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: 'true'
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }

        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar'
        // }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
    width: 600px;
    height: 300px;
}
</style>
