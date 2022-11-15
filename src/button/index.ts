import type { App } from "vue"
import Button from "./src/button"

export { Button as SButton }

export default {
  install(app: App) {
    app.component(Button.name, Button)
  }
}
