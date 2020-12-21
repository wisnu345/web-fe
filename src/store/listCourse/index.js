import axios from 'axios'

const state = () => {
  return {
    listCourse: []
  }
}

const mutations = {
  SET_DATA (state, payload) {
    state.listCourse = payload
  }
}

const getters = {
  getDataListCourse (state) {
    return state.listCourse
  }
}

const actions = {
  getDataListCourse (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get('../listCourse.json')
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
