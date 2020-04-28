const state = {
  dateTime: new Date()
}

const mutations = {
  SET_TIME: state => {
    state.dateTime = new Date()
  }
}

const actions = {
  setDateTime({ commit }) {
    commit('SET_TIME')
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
