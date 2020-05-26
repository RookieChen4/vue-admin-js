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
  attrs: {
    id: 'foo'
  },
  render: function(createElement, context) {
    const clickHandler = (el) => {
      console.log('clickHandler', el)
    }
    const data = Object.assign({}, context.data,
      {
        attrs: {
          style: 'color:red'
        }
      })
    console.log(context)
    return createElement(
      'h' + context.props.level,
      { ...data },
      [...Array.apply(null, { length: 3 }).map(function(value, index) {
        return createElement('p', { on: {
          click: clickHandler
        }}, context.slots()['head' + (index + 1)])
      }), context.children]
    )
  }
}
</script>
