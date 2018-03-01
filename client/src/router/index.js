import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '@/components/MainContent'
import Login from '@/components/Login'
import Register from '@/components/Register'
import OneArticle from '@/components/OneArticle'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainContent',
      component: MainContent
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/articles/:id',
      name: 'OneArticle',
      component: OneArticle,
      props: true
    },
    {
      path: '/articles',
      name: 'Articles',
      component: MainContent
    }
  ]
})
