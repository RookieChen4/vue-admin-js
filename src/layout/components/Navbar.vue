<template>
  <div class="navbar">
    <div class="hamburger" style="padding: 0 15px;" @click="toggleClick">
      <svg
        :class="{'is-active':isActive}"
        class="burger"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
      >
        <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
      </svg>
    </div>
    <!-- <breadcrumb id="breadcrumb-container" class="breadcrumb-container" /> -->
  </div>
</template>

<script>
// import Breadcrumb from '@/components/Breadcrumb'
export default {
  components: {
    // Breadcrumb
  },
  data() {
    return {
      isActive: true
    }
  },
  methods: {
    toggleClick() {
      this.isActive = !this.isActive
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style>
.navbar {
  height: 50px;
}
.hamburger {
  vertical-align: middle;
  width: 20px;
  line-height: 43px;
  height: 100%;
  cursor: pointer;
  transition: background .3s;
  -webkit-tap-highlight-color:transparent;
  float: left;
}
.burger{
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}
.hamburger .is-active {
  transform: rotate(180deg);
}
.breadcrumb{
  display: inline-block;
  line-height: 50px;
  font-size: 14px;
}
.breadcrumb-container {
    float: left;
  }
</style>
