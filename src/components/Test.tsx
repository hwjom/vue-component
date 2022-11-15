import { defineComponent } from "vue"
// export default () => <div>text</div>

// export default defineComponent({
//   render() {
//     return <div>test111</div>
//   }
// })

export default defineComponent({
  setup(props, ctx) {
    return () => {
      return <div>test222</div>
    }
  }
})
