<template>
  <q-page class="flex q-pa-md">
    <q-list
    class="full-width"
    separator
    >
      <q-item v-for="user in users" :key="user._id" clickable v-ripple :to="'/messages?id=' + user._id">
        <q-item-section avatar>

          <q-avatar color="primary" text-color="white">
            {{ user.username.charAt(0) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.username }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chat_bubble" color="green" />
        </q-item-section>

      </q-item>
    </q-list>
  </q-page>
</template>

<script>

export default {
    data(){
        return{

        }
    },
    created() {
        this.$store.dispatch('user/fetchUsers')
    },
    computed: {
        users: {
            get() {
                return this.$store.getters["user/getUsers"]
            }
        },
    },
    methods: {
        goToMessagePage(_id){
            console.log(_id)
        }
    }

}
</script>