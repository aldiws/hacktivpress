<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link"><router-link to="/">Home</router-link></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" v-if="token === null" ><router-link to="/login">Login</router-link></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" v-if="token == null" ><router-link to="/articles">Articles</router-link></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" v-if="token === null"><router-link to="/register">Register</router-link></a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <div class="col-xs-6">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" id="myInput" autocomplete="off">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </div>
          <div class="col-xs-4">
            <button class="btn btn-info my-2 my-sm-0" type="submit" @click="logout" v-if="token !== null" >Logout</button>
          </div>
        </form>
      </div>
    </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      token: localStorage.getItem('token')
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      localStorage.clear('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="css">
</style>
