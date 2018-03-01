<template lang="html">
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-5">
        <h2 class="pb-5 text-center">Login</h2>
        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Username</label>
          <div class="col-sm-10">
              <input type="text" name="username" placeholder="Username" class="form-control"
              v-model="formLogin.username"
              v-validate="'required|min:3|alpha_dash'"
              :class="{'input': true, 'is-danger': errors.has('username') }" >
              <span v-show="errors.has('username')" class="help is-danger">{{ errors.first('username') }}</span>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
              <input type="password" name="password" placeholder="Password" class="form-control"
              v-model="formLogin.password"
              v-validate="'required|min:5'"
              :class="{'input': true, 'is-danger': errors.has('password') }" >
              <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
          </div>
        </div>
        <button class="btn btn-primary col mt-4" type="button" name="button" @click="login">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      formLogin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'doLogin'
    ]),
    login () {
      this.doLogin(this.formLogin)
      this.$router.push('/')
    },
    goRegister () {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="css" scoped>
span{
  color: red;
}
</style>
