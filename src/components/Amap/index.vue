<template>
  <div id="container" />
</template>

<script>
import AMap from '@/utils/map'
export default {
  name: 'Amap',
  mounted() {
    AMap.init().then(AMap => {
      console.log(AMap)
      this.map = new AMap.Map('container', {
        center: [117.000923, 36.675807],
        zoom: 11
      })
    })
  }

}
</script>

<style>
#container {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: calc(100vw - 210px);
  height: 100%;
}
</style>
