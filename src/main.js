import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../mock/index'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import Element from 'element-ui'
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css
Vue.config.productionTip = false

// if (process.env.NODE_ENV === 'development') {
//   console.log('mock')
//   require('../mock')
// }

Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
