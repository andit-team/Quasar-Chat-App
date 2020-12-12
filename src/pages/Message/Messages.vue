<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        name="me"
        :text="['hey, how are you?']"
        sent
      />
      <q-chat-message
        name="Jane"
        :text="['doing fine, how r you?']"
      />
      <q-chat-message
        name="me"
        :text="['hey, how are you?']"
        sent
      />
      <q-chat-message
        name="Jane"
        :text="['doing fine, how r you?']"
      />
    </div>
  </div>
</template>

<script>

export default {

    // data(){
    //     return{

    //     }
    // },
    // created() {
    //     this.$store.dispatch('user/fetchUsers')
    // },
    // computed: {
    //     users: {
    //         get() {
    //             return this.$store.getters["user/getUsers"]
    //         }
    //     },
    // },
    // methods: {
    //     goToMessagePage(_id){
    //         console.log(_id)
    //     }
    // }

}
</script>