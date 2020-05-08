<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    1231
    <Scroll />
    <ScrollList />
  </div>
</template>

<script>
// @ is an alias to /src
import Scroll from '@/components/NoticeList'
import ScrollList from '@/components/ScrollList'
export default {
  name: 'Home',
  components: {
    Scroll,
    ScrollList
  }
}
</script>
