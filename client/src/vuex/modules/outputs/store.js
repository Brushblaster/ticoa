import fetchConfig from '../../../config/fetchConfig'
export default {
  state: {
    Q: {
      Q0_0: false,
      Q0_1: false,
      Q0_2: false,
      Q0_3: false,
      Q0_4: false,
      Q0_5: false,
      Q0_6: false,
      Q0_7: false
    }
  },
  getters: {

  },
  mutations: {
    switchOutputState: (state, witch) => {

    }
  },
  actions: {
    switchOutput: ({ commit }) => {
      fetch(fetchConfig.BaseURL + 'output', {
        method: 'POST',
        mode: fetchConfig.mode,
        headers: fetchConfig.headers
      })
    }
  }
}
