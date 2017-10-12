<template>
  <div class="register">    
    <h1>Register</h1>    
    
    <input
      type="email"
      name="email"
      placeholder="email@example.com"
      v-model="email"
    />
    <br/>
    <input
      type="password"
      name="password"
      placeholder="password"
      v-model="password"
    />
    <br/>
    <div class="error" v-html="error"></div>
    <br/>
    <button @click="register">Register</button>
  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'

  export default {
    data () {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async register () {
        try {
          await AuthenticationService.register({
            email: this.email,
            password: this.password
          })
        } catch (error) {
          this.error = error.response.data.error
          console.warn('We have an error here!!')
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.error {
  color: red;
}
</style>
