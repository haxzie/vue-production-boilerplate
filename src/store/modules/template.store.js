
/**
 * Use this template to creae store modules, which will be automatically imported
 */
const initialState = () => ({
  // all your state variables here
  example: 'value'
})

const state = {
  ...initialState()
}

const getters = {
  // all your getters here
}

const actions = {
  // all your actions here
  /**
     * Action to reset all the state variables to initial value
     */
  reset ({ commit }) {
    commit('RESET')
  }
}

const mutations = {
  // all your mutations here
  /**
     * takes the initial state and assigns it to the main state
     */
  RESET (state) {
    Object.keys(initialState()).forEach(key => {
      state[key] = initialState()[key]
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
