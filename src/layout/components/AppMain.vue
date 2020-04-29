<template>
  <transition name="fade-transform" mode="out-in">
    <keep-alive>
      <router-view :key="key" />
    </keep-alive>
  </transition>
</template>

<script>
export default {
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss">
</style>
