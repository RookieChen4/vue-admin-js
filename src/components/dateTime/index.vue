<template>
  <div class="Screen-time">{{ dateTime }}</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DateTime',
  data() {
    return {
      msg: '112'
    }
  },
  computed: {
    ...mapGetters([
      'dateTime'
    ])
  }
}
</script>

<style>
.Screen-time{
  position: fixed;
  top: 0;
  right: 20px;
}
</style>
