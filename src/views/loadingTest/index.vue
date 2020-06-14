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
  </div>
</template>

<script>
import { getloading } from '@/api/loading'
import loading from '@/directives/loading'
import Datepicker from 'vuejs-datepicker'
import diydatepicker from './DiydatePicker'
// import test from '@/components/ScrollList/test.vue'
import ScrollList from '@/components/ScrollList'
export default {
  name: 'Loading',
  directives: {
    loading
  },
  components: {
    Datepicker,
    diydatepicker,
    // test,
    ScrollList
  },
  data() {
    return {
      height: '300px',
      width: '400px',
      value1: new Date(),
      msg: '123',
      loading: true
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
