<template>
  <component :is="type" @changeType="changeType" />
</template>

<script>
import loading from '@/views/login/loading.vue'
import Login from '@/views/login/login.vue'
export default {
  name: 'TEST',
  components: {
    loading,
    Login
  },
  data() {
    return {
      type: 'Login'
    }
  },
  methods: {
    changeType() {
      this.type = 'loading'
      setTimeout(() => {
        this.$router.push({ path: this.redirect || '/' })
      }, 2000)
    }
  }
}
</script>

<style>

</style>
