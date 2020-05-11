<template>
  <div class="container-scroll">
    <div class="title">
      标题
    </div>
    <ScrollList />
    <div class="title">
      标题
    </div>
    <ScrollList />
    <div class="img">
      图片
    </div>
  </div>
</template>

<script>
import ScrollList from '@/components/ScrollList'
export default {
  name: 'ScrollTest',
  components: {
    ScrollList
  }
}
</script>

<style>
.container-scroll {
  width: 300px;
  max-height:  calc(100vh - 85px);
  display: grid;
  grid-template-rows: auto 1fr auto 1fr auto
}
.title {
	padding: 10px;
}
.img {
	height: 200px;
}
</style>
