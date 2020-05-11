<template>
  <div class="home">
    <div class="main">
      <img alt="Vue logo" src="../assets/logo.png">
      <Scroll />
      <div style="width:300px">
        <ScrollList />
      </div>
      <div style="width:300px;pointer-events:visible">
        <ScrollList />
      </div>
    </div>
    <Amap />
  </div>
</template>

<script>
// @ is an alias to /src
import Scroll from '@/components/NoticeList'
import ScrollList from '@/components/ScrollList'
import { AutoScrollList } from '@/utils/AutoScroll'
import Amap from '@/components/Amap'
export default {
  name: 'Home',
  components: {
    Scroll,
    ScrollList,
    Amap
  },
  mounted() {
    AutoScrollList('test')
    AutoScrollList('test2')
  }
}
</script>

<style lang="scss" scoped>
.home {
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
.main {
  position: relative;
  z-index: 11;
  pointer-events:none
}
</style>
