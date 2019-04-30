<template>
  <v-container fluid>
    <CardModal></CardModal>
    <v-layout justify-center justify-space-around align-center>
      <v-flex xs12 sm10 md8 lg6 xl6>
          <v-card v-for="(card, index) in cards" :key="index">
              <v-card-title>
                  {{ card.title }}
              </v-card-title>
              <v-card-text>
                  {{ card.text }}
              </v-card-text>
              <v-card-text>
                  {{ card.tags }}
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
import CardModal from './cardModal'
import { mapState } from 'vuex'

export default {
    data () {
        return {
        }
    },
    computed: mapState({
        cards: state => state.lists.cards,
    }),
    components: {
      CardModal
    },
    created () {
        this.$store.dispatch('fetchAllCards')
    }
}
</script>

<style>

</style>
