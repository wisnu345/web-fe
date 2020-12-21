import axios from 'axios'

const state = () => {
  return {
    review: []
  }
}

const mutations = {
  SET_DATA (state, payload) {
    state.review = payload
  }
}

const getters = {
  getDataReview (state) {
    return state.review
  }
}

const actions = {
  getDataReview (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get('https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/alumni-report.json')
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
