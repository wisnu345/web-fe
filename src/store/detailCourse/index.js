import axios from 'axios'

const state = () => {
  return {
    detailCourse: []
  }
}

const mutations = {
  SET_DATA (state, payload) {
    state.detailCourse = payload
  }
}

const getters = {
  getDataDetailCourse (state) {
    return state.detailCourse
  }
}

const actions = {
  getDataDetailCourse (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get('https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/detail-course.json')
        .then((response) => {
          context.commit('SET_DATA', response.data)
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
