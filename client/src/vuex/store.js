
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    login: [],
    articles: [],
    oneArticle: {}
  },
  mutations: {
    setArticles (state, payload) {
      state.articles = payload
    },
    setOneArticle (state, payload) {
      state.oneArticle = payload
    },
    setLogin (state, payload) {
      state.login.status = true
      state.login = payload
      state.login.userID = payload.id
    }
  },
  actions: {
    doLogin (commit, payload) {
      axios.post('/users/login', {
        username: payload.username,
        password: payload.password
      }).then(response => {
        console.log('response ada ga', response)
        commit('setLogin', response.data.data)
        localStorage.setItem('token', response.data.token)
      }).catch(err => console.log(err))
    },
    doRegister ({ commit }, payload) {
      axios.post('/users/register', {
        username: payload.username,
        password: payload.password
      }).then(created => console.log(created)).catch(err => console.log(err))
    },
    getArticles ({ commit }) {
      axios.get('/articles').then(({ data }) => {
        commit('setArticles', data)
      }).catch(err => {
        console.log(err)
      })
    },
    getOneArticle ({ commit }, payload) {
      axios.get(`/articles/${payload.id}`).then(({ data }) => {
        console.log(data)
        commit('setOneArticle', data)
      }).catch(err => {
        console.log(err)
      })
    },
    postArticle ({ state }, payload) {
      axios.post('/articles', {
        title: payload.title,
        content: payload.content,
        author: state.login.userID
      }).then(created => console.log(created)).catch(err => console.log(err))
    },
    editArticle ({ state }, payload) {
      axios.put(`/articles/${payload.id}`, {
        title: payload.title,
        content: payload.content
      }).then(updated => updated => console.log(updated)).catch(err => console.log(err))
    },
    removeArticle ({ state }, payload) {
      axios.delete(`/articles${payload.id}`).then(removed => console.log(removed)).catch(err => console.log(err))
    }
  }
})

export default store
