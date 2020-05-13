<template>
  <div v-loading="loading" class="loading">123</div>
</template>

<script>
import { getloading } from '@/api/loading'
import loading from '@/directives/loading'
export default {
  name: 'Loading',
  directives: {
    loading
  },
  data() {
    return {
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
