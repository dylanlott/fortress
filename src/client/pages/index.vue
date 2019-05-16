<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <v-flex xs12 sm10 md8 lg6 xl6>
        <v-container v-if="$store.state.user.isAuthenticated">
          <h1>Fortress</h1>
          <h3>The organizer for developers.</h3>
          <v-card class="my-3" color="primary" dark>
            <v-card-text>Create a project</v-card-text>
          </v-card>

          <v-card class="my-3" color="warning" dark>
            <v-card-text>View Cards</v-card-text>
          </v-card>

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
