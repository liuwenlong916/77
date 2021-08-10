import {
  Button,
  Select,
  Input,
  Form,
  FormItem,
  Timeline,
  TimelineItem,
  Card,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default {
  install(Vue) {
    Vue.component(Button.name, Button)
    Vue.use(Select)
    Vue.use(Input)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Timeline)
    Vue.use(TimelineItem)
    Vue.use(Card)
  },
}
