import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Course from '../views/Course.vue'
import ListCourse from '../views/ListCourse.vue'
import DetailCourse from '../views/DetailCourse.vue'
import Blog from '../views/Blog.vue'
import DetailBlog from '../views/DetailBlog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/course',
    name: 'Course',
    component: Course
  },
  {
    path: '/course/list-course',
    name: 'List Course',
    component: ListCourse
  },
  {
    path: '/course/detail-course/',
    name: 'Detail Course',
    component: DetailCourse
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/detail-blog',
    name: 'Detail Blog',
    component: DetailBlog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
