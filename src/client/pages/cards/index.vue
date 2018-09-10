<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <v-flex>
        <v-btn fab floating top right dark color="red" @click="create = true">
          <v-icon>add</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs12 sm10 md8 lg6 xl6>
        <v-container align="center">
          <div v-for="card in $store.state.lists.cards">
            <v-card class="ma-2 grey lighten-4 elevation-3">
              <v-card-title><h2>{{ card.title }}</h2></v-card-title>
              <v-card-text>{{ card.body }}</v-card-text>
            </v-card>
          </div>
        </v-container>
      </v-flex>
    </v-layout>
    <v-dialog v-model="create" width="500">
      <v-card>
        <v-card-title><h2>Create a card</h2></v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field name="title" label="title" outline v-model="card.title"></v-text-field>
            <v-text-field name="body" label="body" outline v-model="card.body"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn flat color="red lighten-2" @click="create = false && clearCard()">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="submit(card)" outline color="deep-orange">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      create: false,
      cards: [],
      card: {
        title: '',
        body: '',
        tags: []
      }
    }
  },
  fetch ({ store }) {
    if (store.state.user.isAuthenticated) {
      return store.dispatch('fetchAllCards')
    }
  },
  methods: {
    clearCard: function () {
      this.card.title = ''
      this.card.body = ''
      this.card.tags = []
    },
    submit (card) {
      const self = this
      this.$state.lists.cards.push(card)
      this.$store.dispatch('cards/create', card)
        .then(() => {
          if (this.$store.state.notification.success) {
            self.card = {title: "", body: "", tags: []} 
            this.$store.dispatch('fetchAllCards')
          } 
        })
    }, 
    delete (id) {
      console.log('not implemented')
    }
  }
}
</script>
