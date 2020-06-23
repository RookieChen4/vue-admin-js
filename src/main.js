import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Cookies from 'js-cookie'
import '../mock/index'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import Element from 'element-ui'
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css
import './permission'
import './icons' // icon
import '../node_modules/swiper/css/swiper.min.css'
Vue.config.productionTip = false
// if (process.env.NODE_ENV === 'development') {
//   console.log('mock')
//   require('../mock')
// }

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})
new Vue({
  router,
  store,
  created: () => {
    setInterval(function() {
      store.dispatch('dateTime/setDateTime')
    }, 10)
  },
  render: h => h(App)
}).$mount('#app')
