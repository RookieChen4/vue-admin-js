<template>
  <component :is="type" @changeType="changeType" />
</template>

<script>
import loading from '@/views/login/loading.vue'
import loading2 from '@/views/login/loading2.vue'
import Login from '@/views/login/login.vue'
export default {
  name: 'TEST',
  components: {
    loading,
    Login,
    loading2
  },
  data() {
    return {
      type: 'Login'
    }
  },
  methods: {
    changeType() {
      this.type = 'loading2'
      setTimeout(() => {
        this.$router.push({ path: this.redirect || '/' })
      }, 2000)
    }
  }
}
</script>

<style>

</style>
