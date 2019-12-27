import Vue from 'vue'
import iView from 'iview'
import locale from 'iview/dist/locale/zh-CN' // 更改地区，检查 node_modules/iview/dist/locale
import '../theme/pink.less'

Vue.use(iView, {
  locale
})
