<template>
  <div class="container-scroll">
    <div class="textBox">
      <transition name="slide">
        <p :key="text.time" class="text"><span class="title">{{ text.title }}</span><span style="flex-shrink: 0;">{{ text.time }}</span></p>
      </transition>
    </div>
    <div class="scroll-list-container">
      <div v-for="(item, index) in textArr2" :key="index" class="scroll-list">
        <div class="scroll-list-item"><span class="title">{{ item.title }}</span><span style="flex-shrink: 0;">{{ item.time }}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scroll',
  props: {
    dataList: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      textArr: [
        { title: '1.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:11' },
        { title: '2.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:12' },
        { title: '4.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:13' },
        { title: '5.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:13' },
        { title: '6.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:13' },
        { title: '7.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:13' },
        { title: '8.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:13' },
        { title: '9.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:13' },
        { title: '10.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:13' },
        { title: '11.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:13' }
      ],
      textArr2: [
        { title: '2.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:12' },
        { title: '4.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:13' },
        { title: '5.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:13' },
        { title: '6.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:13' },
        { title: '7.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:13' },
        { title: '8.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:13' },
        { title: '9.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:13' },
        { title: '10.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:13' },
        { title: '11.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:13' }
      ],
      text: ''
    }
  },
  created() {
    this.textArr = this.dataList
    this.textArr2 = [...this.dataList]
    this.textArr2.splice(0, 1)
    this.text = this.dataList[0]
    // this.text = this.textArr[0]
    console.log(this.textArr, this.textArr2, this.text)
    this.startMove()
  },
  methods: {
    startMove() {
      // eslint-disable-next-line no-unused-vars
      let timer = setTimeout(() => {
        if (!this.textArr2.length) {
          this.textArr2 = [...this.textArr]
        }
        this.textArr2.push(this.text)
        this.text = this.textArr2.shift()
        timer = null
        this.startMove()
      }, 2000) // 滚动不需要停顿则将2000改成动画持续时间
    }
  }
}
</script>

<style lang="scss" scoped>
.container-scroll {
  width: 100%;
  height: 100%;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  .scroll-list-container {
    // flex: 1;
    // overflow-y: auto;
  }
  .scroll-list-item {
      display: flex;
      .title {
        flex:1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  .textBox {
    flex-shrink: 0;
    .text {
      display: flex;
      .title {
        flex:1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
  h2 {
    padding: 20px 0
  }
  .textBox {
    width: 100%;
    height: 40px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    text-align: center;
  }
  .text {
    color: red;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 0.5s linear;
  }
  .slide-enter{
    transform: translateY(20px) scale(1);
    opacity: 1;
  }
  .slide-leave-to {
    transform: translateY(-20px) scale(0.8);
    opacity: 0;
  }
</style>
