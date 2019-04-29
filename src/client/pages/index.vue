<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <v-flex xs12 sm10 md8 lg6 xl6>
        <v-container v-if="$store.state.user.isAuthenticated">
          <h3>Fortress</h3>
          Authenticated.
        </v-container>
        <v-container v-else align="center">
          <h3>Fortress</h3>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import vueniverseLogo from '~/assets/img/vueniverse_logo.svg'
export default {
  data () {
    return {
      vueniverseLogo
    }
  }
}
</script>
