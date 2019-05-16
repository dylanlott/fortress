<template>

  <v-container fluid v-if="!loading">
    <CardModal></CardModal>
    <v-layout justify-center justify-space-around align-center>
      <v-flex xs12 sm10 md8 lg6 xl6>
        <v-card v-on:keyup. @click="open(card)" v-for="(card, index) in cards" :key="index">
          <v-card-title>
            <h2>{{ card.title }}</h2>
          </v-card-title>
          <v-card-text>
            {{ card.text }}
          </v-card-text>
          <v-card-text v-if="card.tags.length > 0">
            <v-chip v-for="(t, i) in card.tags" :key="t">{{ t }}
            </v-chip>
          </v-card-text>
          <v-card-actions>
            <v-layout justify-space-around>
              <v-icon>more</v-icon>
              <v-icon>delete</v-icon>
              <v-icon>label</v-icon>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex v-if="cards.length == 0 && loading == false">
        You haven't created any cards yet!
      </v-flex>
    </v-layout>
    <v-layout justify-center>
      <v-dialog v-model="detailDialog">
        <CardDetail></CardDetail>
      </v-dialog>
    </v-layout>
  </v-container>

</template>

<script>

  import CardModal from './cardModal'
  import CardDetail from './detail'
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        detailDialog: false
      }
    },
    computed: mapState({
      cards: state => state.lists.cards,
      loading: state => state.loading,
      detail: state => state.card.data
    }),
    components: {
      CardModal,
      CardDetail
    },
    created() {
      this.$store.dispatch('fetchAllCards')
    },
    methods: {
      open(card) {
        this.$store.dispatch('card/detail', card)
        this.detailDialog = !this.detailDialog
      }
    }
  }

</script>

<style>

</style>
