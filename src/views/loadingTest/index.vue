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
        { title: '1.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:11' },
        { title: '2.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:12' },
        { title: '3.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:13' },
        { title: '4.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:14' },
        { title: '5.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:15' },
        { title: '6.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:16' },
        { title: '7.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:17' },
        { title: '8.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:18' },
        { title: '9.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:19' },
        { title: '10.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:20' },
        { title: '11.瑞金新村小区新增一条保修工单,瑞金新村小撒旦撒', time: '2020/12/04 19:36:21' }
      ]
    }
  },
  created() {
    this.getMsg()
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
