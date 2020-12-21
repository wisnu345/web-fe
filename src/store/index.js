import Vue from 'vue'
import Vuex from 'vuex'
import partner from './partner'
import media from './media'
import review from './review'
import listCourse from './listCourse'
import detailCourse from './detailCourse'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    media,
    partner,
    review,
    listCourse,
    detailCourse
  }
})
