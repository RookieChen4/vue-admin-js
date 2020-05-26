<script>
export default {
  namel: 'Test2',
  functional: true,
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  render: function(createElement, context) {
    console.log(context)
    if (context.slots().default) {
      return createElement(
        'h' + context.props.level, context.slots().default[0].text)
    } else {
      return createElement(
        'h' + context.props.level)
    }
  }
}
</script>
