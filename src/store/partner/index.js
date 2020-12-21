import axios from 'axios'

const state = () => {
  return {
    partner: []
  }
}

const mutations = {
  SET_DATA (state, payload) {
    state.partner = payload
  }
}

const getters = {
  getDataPartner (state) {
    return state.partner
  }
}

const actions = {
  getDataPartner (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get('https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/partner.json')
        .then((response) => {
          context.commit('SET_DATA', response.data.data)
          resolve(response.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
