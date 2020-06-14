<template>
  <div class="ScrollList">
    <div class="head">
      <div class="item">姓名</div>
      <div class="item">状态</div>
      <div class="item">类型</div>
      <div class="item">时间</div>
    </div>
    <div class="listBox" ref="listBox" @mouseover="stopScroll" @mouseleave="startScroll">
      <div v-for="item in dateList" :key="item.time" class="item">
        <div class="it">{{ item.name }}</div>
        <div class="it">{{ item.status }}</div>
        <div class="it">{{ item.type }}</div>
        <div class="it">{{ item.time }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollList',
  props: ['dateList'],
  data() {
    return {
      dom: '',
      intervalScroll: '',
      setTime1: '',
      setTime2: '',
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
  mounted() {
    this.AutoScrollList()
  },
  methods: {
    AutoScrollList() {
      this.dom = this.$refs.listBox
      this.startScroll()
    },
    startScroll() {
      this.stopScroll()
      const listBox = this.dom
      if (listBox.offsetHeight < listBox.scrollHeight) {
        this.intervalScroll = setInterval(() => {
          if ((listBox.scrollTop + listBox.offsetHeight) < listBox.scrollHeight) {
            listBox.scrollTop++
          } else {
            clearInterval(this.intervalScroll)
            this.setTime1 = setTimeout(function() {
              listBox.scrollTop = 0
            }, 2000)
            this.setTime2 = setTimeout(this.startScroll, 4000)
          }
        }, 30)
      }
    },
    stopScroll() { // 停止滚动
      clearInterval(this.intervalScroll)
      clearTimeout(this.setTime1)
      clearTimeout(this.setTime2)
    }
  },
  watch: {
    dateList: {
      handler: function(val, oldVal) {
        this.$nextTick(() => {
          this.AutoScrollList()
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ScrollList {
  height: 100%;
  pointer-events: visible;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.head {
  display: flex;
  background-color: #3498db;
  padding: 5px 10px;
  .item {
    text-align: center;
    flex: 1;
  }
}
.listBox {
  overflow: scroll;
  .item:nth-child(2n) {
    background-color: #bdc3c7;
  }
  .item {
    display: flex;
    justify-content: center;
    padding: 5px 10px;
    .it {
      text-align: center;
      flex: 1;
    }
  }
}
.listBox::-webkit-scrollbar { width: 0 !important }
</style>
