<template>
  <q-page class="bg-light-green window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Chat Application</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
                <q-input square filled clearable v-model="username" type="text" label="User Name" />
                <q-input square filled clearable v-model="email" type="email" label="email" />
                <q-input square filled clearable v-model="password" type="password" label="password" />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn @click="signup()" unelevated color="light-green-7" size="lg" class="full-width" label="Register" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <q-btn to="/"  class="text-grey-6">Login</q-btn>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
      async signup(){
       let data = {
          username: this.username,
          email: this.email,
          password: this.password
        }
        let response = await this.$store.dispatch('auth/register', data )
        if(response.error) {
            // Swal.fire(
            //     'Error',
            //     response.msg,
            //     'error'
            // )
            console.log(response.msg)
        } else {
            // Swal.fire(
            //     'Success',
            //     response.msg,
            //     'success'
            // ).then(r => {
                
            // })
            this.$router.push('/')
        }
      }
  }
}
</script>

<style>
.q-card {
  width: 360px;
}
</style>