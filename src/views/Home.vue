<template>
  <div class="home">
    <div class="main">
      <img alt="Vue logo" src="../assets/logo.png">
      <Scroll />
      <div class="container">
        <div class="grid-item1"><ScrollList /></div>
        <div class="grid-item2"><ScrollList /></div>
        <div class="grid-item3">1233</div>
      </div>
      <ScrollList style="display:none" />
    </div>
    <Amap />
  </div>
</template>

<script>
// @ is an alias to /src
import Scroll from '@/components/NoticeList'
import ScrollList from '@/components/ScrollList'
import Amap from '@/components/Amap'
export default {
  name: 'Home',
  components: {
    Scroll,
    ScrollList,
    Amap
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
.container {
  width: 300px;
  height: 600px;
  display: grid;
  grid-template-rows: 1fr 1fr 300px
  // display: flex;
  // flex-direction: column;
}
.main {
  position: relative;
  z-index: 11;
  pointer-events:none;
}
.grid-item1 {
  // flex: 1;
  overflow: hidden;
}
.grid-item2 {
  // flex: 1;
  overflow: hidden;
}
.grid-item3 {
  // flex: 1;
  overflow: hidden;
}
</style>
