<template>
  <div class="home">
    <div class="main">
      <img alt="Vue logo" src="../assets/logo.png">
      <Scroll />
      <div class="container">
        <div class="grid-item1"><ScrollList /></div>
        <div class="grid-item2"><test :dateList="list" /></div>
        <div class="grid-item3">1233</div>
        <button @click="addList">addList</button>
        <svg-icon icon-class="dashboard" />
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
import { getloading } from '@/api/loading'
import test from '@/components/ScrollList/test.vue'
export default {
  name: 'Home',
  components: {
    Scroll,
    ScrollList,
    Amap,
    test
  },
  data() {
    return {
      list: []
    }
  },
  created() {
    this.$message({ message: '这是一条消息提示', duration: 0, center: true, type: 'success' })
    console.log('createdHome')
    getloading().then(res => {
      console.log('home', res)
    }).catch(err => console.error(err))
  },
  mounted() {
  },
  methods: {
    addList() {
      this.list = [{
        name: '你好',
        status: '1',
        type: '1',
        time: '2010-1-1'
      },
      {
        name: '你好',
        status: '1',
        type: '1',
        time: '2010-1-1'
      },
      {
        name: 'cjh',
        status: '1',
        type: '1',
        time: '2010-1-1'
      },
      {
        name: 'cjh',
        status: '1',
        type: '1',
        time: '2010-1-1'
      },
      {
        name: 'cjh',
        status: '1',
        type: '1',
        time: '2010-1-1'
      },
      {
        name: 'cjh',
        status: '1',
        type: '1',
        time: '2010-1-1'
      },
      {
        name: 'cjh',
        status: '1',
        type: '1',
        time: '2010-1-1'
      },
      {
        name: 'cjh',
        status: '1',
        type: '1',
        time: '2010-1-1'
      },
      {
        name: 'cjh',
        status: '1',
        type: '1',
        time: '2010-1-1'
      },
      {
        name: 'cjh',
        status: '1',
        type: '1',
        time: '2010-1-1'
      },
      {
        name: 'cjh',
        status: '1',
        type: '1',
        time: '2010-1-1'
      },
      {
        name: 'cjh',
        status: '1',
        type: '1',
        time: '2010-1-1'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  pointer-events: auto;
}
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
