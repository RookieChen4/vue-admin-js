<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Swiper>
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
    </Swiper>
    <div class="grid">
      <div class="grid-item1">
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
      <div class="grid-item2">
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </div>
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

<style lang="scss" scoped>
.grid {
  display: grid;
  height: 500px;
  width: 500px;
  grid-template-rows: repeat(2,1fr);
  // flex-direction: column;
  // overflow: hidden;
}
.grid-item1 {
  flex: 1;
  background-color: red;
  overflow: scroll;
}
.grid-item2 {
  flex: 1;
  background-color: blue;
  overflow: scroll;
}
</style>
