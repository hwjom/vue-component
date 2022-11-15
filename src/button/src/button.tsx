import { defineComponent, toRefs } from "vue"

import type { ButtonProps } from "./button-type"
import { buttonProps } from "./button-type"

export default defineComponent({
  name: "SButton",
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type } = toRefs(props)
    return () => {
      return (
        <button class={`s-btn s-btn--${type.value}`}>
          {slots.default && slots.default()}
        </button>
      )
    }
  }
})
