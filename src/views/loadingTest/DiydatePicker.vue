<template>
  <el-date-picker
    class="diy"
    v-model="value1"
    type="month"
    placeholder="选择日期">
  </el-date-picker>
</template>

<script>
export default {
  data() {
    return {
      value1: new Date()
    }
  },
  mounted() {
    const dom = document.getElementsByClassName('diy')
    const list = ['el-date-editor', 'el-input', 'el-input--medium', 'el-input--prefix', 'el-input--suffix', 'el-date-editor--date']
    for (let i = 0; i < dom.length; i++) {
      const input = dom[i].childNodes[1]
      input.classList = []
      dom[i].classList.remove(...list)
    }
  }

}
</script>
<style scoped>
.diy {
    font-size: 0.4vw;
    display: inline-block;
}
.diy /deep/ input {
    width: 50px;
}
.diy /deep/ .el-input__prefix {
    display: none;
}
.diy /deep/ .el-input__suffix {
    display: none;
}
.diy /deep/ .el-input__inner {
    padding: 2px;
}
</style>
