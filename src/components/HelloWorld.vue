<template>
  <v-app class="hello">
    <h3 class="headline mb-0">{{ msg }}</h3>
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12 sm6 offset-sm3>
            <v-card-title>
              <v-btn to="/declare">{{start}}
              <v-icon right>check_circle</v-icon></v-btn>
            </v-card-title>
            </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Bienvenue sur le site de POC Emploi',
      start: 'Déclarer ma situation'
    }
  }
}
</script>
<style>
.hello {
  margin-top:80px;
}
</style>
