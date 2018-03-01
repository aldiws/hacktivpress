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
            <a class="nav-link" v-if="token !== null" ><router-link to="/">Logout</router-link></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" v-if="token === null" ><router-link to="/login">Login</router-link></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" v-if="token === null"><router-link to="/register">Register</router-link></a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="css">
</style>
