<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Swiper>
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
    </Swiper>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'
export default {
  components: {
    Swiper
  }
}
</script>
