<template>
  <div>
    <datepicker :minimumView="'month'" :maximumView="'month'">
    </datepicker>
    <diydatepicker />
    <diydatepicker />
    <div v-loading="loading" class="loading">123</div>
  </div>
</template>

<script>
import { getloading } from '@/api/loading'
import loading from '@/directives/loading'
import Datepicker from 'vuejs-datepicker'
import diydatepicker from './DiydatePicker'
export default {
  name: 'Loading',
  directives: {
    loading
  },
  components: {
    Datepicker,
    diydatepicker
  },
  data() {
    return {
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
