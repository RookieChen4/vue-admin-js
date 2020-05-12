<template>
  <div class="swiper-container" :class="swipeid">
    <div class="swiper-wrapper">
      <slot />
    </div>
    <div class="swiper-pagination" />
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Swiper',
  props: {
    swipeid: {
      type: String,
      default: ''
    },
    loop: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    autoPlay: {
      type: Number,
      default: 3000
    },
    slidesPerView: {
      type: Number,
      default: 1
    }
  },
  mounted() {
    console.log(this.swipeid)
    this.initSwiper()
  },
  methods: {
    initSwiper() {
      new Swiper('.' + this.swipeid, {
        direction: this.direction, // 垂直切换选项
        loop: this.loop, // 循环模式选项
        slidesPerView: this.slidesPerView,
        spaceBetween: 30,
        centeredSlides: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: 'true'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
    width: 100%;
    height: 100%;
}
</style>
