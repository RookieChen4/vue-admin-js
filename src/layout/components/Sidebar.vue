<template>
  <div :class="{'has-logo':showLogo}">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        class="el-menu-vertical-demo"
        background-color="transparent"
        :collapse="isCollapse"
        :unique-opened="false"
        :collapse-transition="false"
        :active-text-color="variables.menuActiveText"
        :text-color="variables.menuText"
        mode="vertical"
      >
        <!-- <template v-for="(item, index) in routes">
          <el-submenu v-if="!item.hidden" :key="item.id" :index="index + ''">
            <template slot="title">
              <i class="el-icon-location" />
              <span>{{ item.meta.name }}</span>
            </template>
            <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.path">{{ subItem.meta.name }}</el-menu-item>
          </el-submenu>
        </template> -->
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'
import SidebarItem from './SidebarItem'
export default {
  components: {
    SidebarItem
  },
  data() {
    return {
      showLogo: true,
      routes: []
    }
  },
  created() {
    // this.routes = this.permission_routes
    this.routes = this.$router.options.routes
  },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

<style>
</style>
