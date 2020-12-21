import axios from 'axios'

const state = () => {
  return {
    media: []
  }
}

const mutations = {
  SET_DATA (state, payload) {
    state.media = payload
  }
}

const getters = {
  getDataMedia (state) {
    return state.media
  }
}

const actions = {
  getDataMedia (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get('https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/seen_on.json')
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
