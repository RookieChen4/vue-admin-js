<template>
  <div>
    <datepicker :minimumView="'month'" :maximumView="'month'">
    </datepicker>
    <diydatepicker />
    <diydatepicker />
    <div v-loading="loading" class="loading">123</div>
    <!-- <test :style="{height:height,width:width}"/> -->
    <div style="height:200px">
      <ScrollList/>
    </div>
    <test />
    <div style="width:500px;height:100px">
      <test2 :dataList="dataList" />
    </div>
    <div class="tick" data-value="Hello World"></div>
  </div>
</template>

<script>
import { getloading } from '@/api/loading'
import loading from '@/directives/loading'
import Datepicker from 'vuejs-datepicker'
import diydatepicker from './DiydatePicker'
// import test from '@/components/ScrollList/test.vue'
import ScrollList from '@/components/ScrollList'
import test from '@/components/NoticeList/test'
import test2 from '@/components/NoticeList/test2'
import Tick from '@pqina/flip'
export default {
  name: 'Loading',
  directives: {
    loading
  },
  components: {
    Datepicker,
    diydatepicker,
    test,
    ScrollList,
    test2
  },
  data() {
    return {
      height: '300px',
      width: '400px',
      value1: new Date(),
      msg: '123',
      loading: true,
      dataList: [
        { title: '1.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:11' }
      ]
    }
  },
  created() {
    this.getMsg()
    console.log(Tick)
    Tick()
  },
  methods: {
    getMsg() {
      this.loading = true
      getloading().then(res => {
        console.log(res)
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>
.loading {
    width: 200px;
    height: 200px;
    background-color: aquamarine;
		position: absolute;
}
</style>
