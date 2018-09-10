<template>
  <v-container fluid>
    <v-layout align-center>
      <v-flex xs12 sm10 md8 lg6 xl6>
        <v-container v-if="$store.state.user.isAuthenticated">
          <h1>Profile &amp; Settings</h1>
          {{ $store.state.user.email }}<br/>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>
