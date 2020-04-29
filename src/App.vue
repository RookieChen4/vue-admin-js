<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import request from '@/utils/request'
export default {
  name: 'App',
  created() {
    // request({
    //   method: 'get',
    //   url: '/test123'
    // }).then(res => {
    //   console.log(res)
    // })
  }
}
</script>
