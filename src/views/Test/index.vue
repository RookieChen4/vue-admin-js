<script>
export default {
  namel: 'Test',
  functional: true,
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  render: function(createElement, context) {
    console.log(context.slots(), context)
    return createElement(
      'h' + context.props.level,
      [context.slots().head1,
        context.slots().head2,
        context.slots().head3]
    )
  }
}
</script>
