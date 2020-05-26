<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <div class="Swiper-container">
      <Swiper direction="horizontal" swipeid="test2" loop="true" slides-per-view="3">
        <div class="swiper-slide">
          <router-link class="img">
            1
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link class="img">
            2
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link class="img">
            3
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link class="img">
            4
          </router-link>
        </div>
      </Swiper>
    </div> -->
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
    <div class="Swiper-container">
      <Swiper direction="vertical" swipeid="test1">
        <div class="swiper-slide">1</div>
        <div class="swiper-slide">2</div>
      </Swiper>
    </div>
    <Test :level="2" style="font-size:20px">
      <template v-slot:head1>second</template>
      <template v-slot:head2>second</template>
      <template v-slot:head3>second</template>
      <span>123</span>
    </Test>
    <Test2>
      <template v-slot:default>second</template>
    </Test2>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'
import { getloading } from '@/api/loading'
import Test from './Test/index'
import Test2 from './Test/test'
export default {
  components: {
    Swiper,
    Test,
    Test2
  },
  data() {
    return {
      num: 1
    }
  },
  created() {
    console.log('createdAbout')
    getloading().then(res => {
      console.log('ab', res)
    }).catch(err => console.error(err))
  },
  methods: {
    test() {
      console.log('123')
    }
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
.Swiper-container{
  margin: 0 auto;
  width: 800px;
  height: 200px;
  a{
    display: block;
  }
}
.img{
  width: 100%;
  height: 100%;
  background: url('../assets/logo.png') no-repeat center;
  background-size: 100% 100%;
 }
// .swiper-slide {
//       text-align: center;
//       font-size: 18px;
//       background: #fff;

//       /* Center slide text vertically */
//       display: -webkit-box;
//       display: -ms-flexbox;
//       display: -webkit-flex;
//       display: flex;
//       -webkit-box-pack: center;
//       -ms-flex-pack: center;
//       -webkit-justify-content: center;
//       justify-content: center;
//       -webkit-box-align: center;
//       -ms-flex-align: center;
//       -webkit-align-items: center;
//       align-items: center;
//       transition: 300ms;
//       transform: scale(0.8);
//     }
// .swiper-slide.swiper-slide-duplicate.swiper-slide-prev {
//     opacity: 1;
//     visibility: visible;
//     transform: scale(.9) translateY(-10px) rotateY(45deg) skewY(5deg);
// }
.swiper-slide.swiper-slide-prev .img {
  transform: scale(.9) translateY(-10px) rotateY(45deg) skewY(5deg);
}
.swiper-slide.swiper-slide-next .img{
    transform: scale(.9) translateY(-10px) rotateY(-45deg) skewY(-5deg);
}
</style>
