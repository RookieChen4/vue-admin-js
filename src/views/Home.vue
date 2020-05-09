<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Scroll />
    <div style="width:300px;display:inline-block;position:absolute;z-index:11">
      <ScrollList />
    </div>
    <!-- <div style="width:300px;display:inline-block">
      <ScrollList />
    </div>
    <div style="width:300px;display:inline-block">
      <ScrollList />
    </div> -->
    <div id="container">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Scroll from '@/components/NoticeList'
import ScrollList from '@/components/ScrollList'
import { AutoScrollList } from '@/utils/AutoScroll'
import AMap from '@/utils/map'
export default {
  name: 'Home',
  components: {
    Scroll,
    ScrollList
  },
  mounted() {
    AutoScrollList('test')
    AutoScrollList('test2')
    AMap.init().then(AMap => {
      console.log(AMap)
      this.map = new AMap.Map('container', {
        center: [117.000923, 36.675807],
        zoom: 11
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  height: 100%;
}
#container {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: calc(100vw - 210px);
  height: 100%;
}
</style>
