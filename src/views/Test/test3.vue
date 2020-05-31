<script>
export default {
  namel: 'Test',
  functional: true,
  props: {
    // eslint-disable-next-line vue/require-default-prop
    item: {
      type: Array
    }
  },
  render: function(createElement, context) {
    if (context.props.item.length) {
      return createElement('div', Array.apply(null, { length: 4 }).map((value, index) => {
        return createElement('span', context.slots()['reserve' + (index + 1)])
      }))
    } else {
      return createElement('div', '')
    }
  }
}
</script>
