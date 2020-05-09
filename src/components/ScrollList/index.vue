<template>
  <div>
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
      <!-- <div class="item">
        <div>姓名</div>
        <div>状态</div>
        <div>类型</div>
        <div>时间</div>
      </div>
      <div class="item">
        <div>姓名</div>
        <div>状态</div>
        <div>类型</div>
        <div>时间</div>
      </div>
      <div class="item">
        <div>姓名</div>
        <div>状态</div>
        <div>类型</div>
        <div>时间</div>
      </div>
      <div class="item">
        <div>姓名</div>
        <div>状态</div>
        <div>类型</div>
        <div>时间</div>
      </div>
      <div class="item">
        <div>姓名</div>
        <div>状态</div>
        <div>类型</div>
        <div>时间</div>
      </div>
      <div class="item">
        <div>姓名</div>
        <div>状态</div>
        <div>类型</div>
        <div>时间</div>
      </div>
      <div class="item">
        <div>姓名</div>
        <div>状态</div>
        <div>类型</div>
        <div>时间</div>
      </div>
      <div class="item">
        <div>姓名</div>
        <div>状态</div>
        <div>类型</div>
        <div>时间</div>
      </div>
      <div class="item">
        <div>姓名</div>
        <div>状态</div>
        <div>类型</div>
        <div>时间</div>
      </div>
      <div class="item">
        <div>姓名</div>
        <div>状态</div>
        <div>类型</div>
        <div>时间</div>
      </div>
      <div class="item">
        <div>姓名</div>
        <div>状态</div>
        <div>类型</div>
        <div>时间</div>
      </div>
      <div class="item">
        <div>姓名</div>
        <div>状态</div>
        <div>类型</div>
        <div>时间</div>
      </div>
      <div class="item">
        <div>姓名</div>
        <div>状态</div>
        <div>类型</div>
        <div>时间</div>
      </div> -->
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
        name: 'cjh',
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
.head {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
}
.listBox {
  height: 150px;
  overflow: auto;
  .item {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
  }
}
.listBox::-webkit-scrollbar { width: 0 !important }
</style>
