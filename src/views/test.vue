<template>
  <div>
    {{ msg }}
    <button @click="change">change</button>
    <input v-model="msg">
    <input v-model="obj.a">
    {{ obj.a }}
  </div>
</template>

<script>
export default {
  data() {
    this.msg = 'msg'
    return {
      obj: {
      }
    }
  },
  created() {
    this.msg = 'msg2'
  },
  mounted() {
    this.msg = 'end'
    console.log('1')
    setTimeout(() => { // macroTask
      console.log('3')
    }, 0)
    Promise.resolve().then(function() {
      console.log('promise!')
    })
    this.$nextTick(function() {
      console.log('2')
    })
  },
  methods: {
    change() {
      console.log(this.msg, this.obj.a)
    }
  }
}
</script>

<style>

</style>
