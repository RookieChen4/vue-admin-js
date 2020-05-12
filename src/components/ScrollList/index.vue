<template>
  <div class="ScrollList">
    <div class="head">
      <div>姓名</div>
      <div>状态</div>
      <div>类型</div>
      <div>时间</div>
    </div>
    <div :id="listBox" class="listBox">
      <div v-for="item in list" :key="item.time" class="item">
        <div>{{ item.name }}</div>
        <div>{{ item.status }}</div>
        <div>{{ item.type }}</div>
        <div>{{ item.time }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { AutoScrollList } from '@/utils/AutoScroll'
export default {
  name: 'ScrollList',
  data() {
    return {
      listBox: 1,
      list: [{
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
      },
      {
        name: 'cjhxx',
        status: '1',
        type: '1',
        time: '2010-1-1'
      }]
    }
  },
  created() {
    this.listBox = Math.ceil(Math.random() * 100)
  },
  mounted() {
    this.$nextTick(() => {
      AutoScrollList(this.listBox)
    })
  }
}
</script>

<style lang="scss" scoped>
.ScrollList {
  height: 100%;
  pointer-events: visible;
  // display: flex;
  // flex-direction: column;
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
}
.head {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  background-color: #3498db;
  padding: 5px 10px;
}
.listBox {
  // flex: 1;
  overflow: scroll;
  .item:nth-child(2n) {
    background-color: #bdc3c7;
  }
  .item {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    padding: 5px 10px;
  }
}
.listBox::-webkit-scrollbar { width: 0 !important }
</style>
