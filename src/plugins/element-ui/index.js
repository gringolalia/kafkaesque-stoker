import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ko'

import './custom.scss'

export default () => {
  Vue.use(Element, { locale })
}
