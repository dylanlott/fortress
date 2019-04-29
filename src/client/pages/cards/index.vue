<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <v-btn to="/cards/create"><v-icon>add</v-icon>Create</v-btn>
      </v-flex>
    </v-layout>
    <v-layout justify-center align-center>
      <v-flex xs12 sm10 md8 lg6 xl6>
          <v-card v-for="(card, index) in cards" :key="index">
              <v-card-title>
                  {{ card.title }}
              </v-card-title>
              <v-card-text>
                  {{ card.text }}
              </v-card-text>
          </v-card>
      </v-flex>
      <v-flex v-if="cards.length == 0">
        You haven't created any cards yet!
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data () {
        return {
        }
    },
    computed: mapState({
        cards: state => state.lists.cards,
    }),
    created () {
        this.$store.dispatch('fetchAllCards')
    }
}
</script>

<style>

</style>
