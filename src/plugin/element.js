import {
  Button,
  Select,
  Input,
  Form,
  FormItem,
  Timeline,
  TimelineItem,
  Card,
  Carousel,
  CarouselItem,
  Image,
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
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Image)
    Vue.use(Card)
  },
}
