<template>
  <div class="container-scroll">
    <div class="textBox">
      <transition name="slide">
        <p :key="text.time" class="text"><span>{{ text.title }}</span><span>{{ text.time }}</span></p>
      </transition>
    </div>
    <div v-for="(item, index) in textArr2" :key="index">
      <p><span>{{ item.title }}</span><span>{{ item.time }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scroll',
  data() {
    return {
      textArr: [
        { title: '1.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:11' },
        { title: '2.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:12' },
        { title: '3.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:13' }
      ],
      textArr2: [
        { title: '2.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:12' },
        { title: '3.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:13' }
      ],
      text: ''
    }
  },
  created() {
    this.text = this.textArr[0]
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

<style scoped>
.container-scroll {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
