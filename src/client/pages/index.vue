<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <v-flex xs12 sm10 md8 lg6 xl6>
        <v-container v-if="$store.state.user.isAuthenticated">
          <h1>Overlord</h1>
          <h3>A card organizing app for your thoughts, lists, and life.</h3>
        </v-container>
        <v-container v-else align="center">
          <h1>Overlord</h1>
          <h3>Your personal organization app</h3>
          <v-btn dark color="red" to="/users/auth/sign-up">Sign up now</v-btn>
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
