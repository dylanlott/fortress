<template>

  <v-container>
    <v-flex>
      <h1>New Card</h1>
      <v-form ref="card-form">
        <v-text-field v-model="title"
                      label="Title"
                      outline></v-text-field>

        <v-text-field v-model="link"
                      label="Link"
                      outline></v-text-field>

        <v-textarea v-model="text"
                    label="Text"
                    outline></v-textarea>
        <v-btn @click="submit()" color="primary">
          Submit
        </v-btn>
      </v-form>
    </v-flex>
  </v-container>

</template>

<script>

  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        title: '',
        link: '',
        text: '',
        tags: []
      }
    },
    computed: mapState({
      user: state => state.user.email
    }),
    methods: {
      submit() {
        const _card = {
          title: this.title,
          text: this.text,
          link: this.link,
          tags: this.tags,
          user: this.user
        }
        console.log(_card)
        this.$store.dispatch('card/create', _card)
      }
    }
  }

</script>
