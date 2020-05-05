<template>
  <div class="Screen-time">{{ moment(dateTime).format('YYYY-MM-DD hh:mm:ss') }}</div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
export default {
  name: 'DateTime',
  data() {
    return {
      msg: '112'
    }
  },
  methods: {
    moment
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
  top: 85px;
  right: 20px;
}
</style>
