<template>
  <div :class="classObj" class="app-wrap">
    <DateTime />
    <sidebar class="siderbar" />
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
        <tags-view />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Sidebar, AppMain, Navbar, TagsView } from './components'
import DateTime from '@/components/dateTime'
export default {
  name: 'Layout',
  components: {
    Sidebar,
    AppMain,
    Navbar,
    TagsView,
    DateTime
  },
  data() {
    return {
      fixedHeader: false
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation
      }
    }
  },
  watch: {
    isCollapse: (val) => {
      // console.log(val)
    }
  }
}
</script>

<style lang="scss">
</style>
