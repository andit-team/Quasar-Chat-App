<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Hello {{ user.username }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      
    }
  },
   async created() {
        let response = await this.$store.dispatch('auth/verify')
        if(response.error === true ) {
            await this.$router.push('/')
        }
    },
    computed: {
      user: {
        get() {
          return this.$store.getters['auth/getUser']
        }
      }
    }

}
</script>
