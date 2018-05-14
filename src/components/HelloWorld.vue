<template>
  <div class="hello">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-card-title primary-title>
            <h3 class="headline mb-0">{{ msg }}</h3>
            <v-btn to="/declare" color="danger">{{start}}</v-btn>
      </v-card-title>
      </v-card>
      </v-flex>
    </v-layout>

  </div>
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
