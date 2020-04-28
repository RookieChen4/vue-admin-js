import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import permission from './modules/permission'
import dateTime from './modules/dateTime'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    permission,
    dateTime
  },
  getters
})

export default store
