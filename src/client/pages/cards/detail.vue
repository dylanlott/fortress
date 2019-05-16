<template>

  <v-layout>
    <v-flex>
      <v-card>
        <v-card-title>
          <v-text-field outline v-bind:value="card.title"></v-text-field>
        </v-card-title>
        <v-card-text>
          <v-textarea outline v-bind:value="card.text"></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn color="Primary">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

</template>
<script>

  import _ from 'lodash'
  import { mapState } from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: mapState({
      card: state => state.card.data
    }),
    created() {
      keyListener()
    }
  }

  function keyListener() {
    // register an event listener to trigger whenever a key is pressed
    window.addEventListener(
      'keypress',
      function(e) {
        //console.log(String.fromCharCode(e.keyCode))
        // TODO: update card after any text is changed
        // TODO: throttle updates to every 5 or so seconds,
        // so that we don't flood the server with tiny updates.
      }.bind(this)
    )
  }

</script>

<style media="screen" >
</style>
