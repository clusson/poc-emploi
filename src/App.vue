<template>
  <div id="app" v-heatmap>
    <v-toolbar color="grey lighten-4" flat fixed>
    <v-toolbar-items>
      <router-link to="/"><img src="./assets/logo.svg"  width="70" height="60"></router-link>
        <v-btn flat v-on:click="reload"><i class="material-icons">refresh</i></v-btn>
        <v-btn to="/"><i class="material-icons">home</i>Accueil</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn color="error">Fermer</v-btn>
    </v-toolbar-items>
  </v-toolbar>
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App',
    methods: {
        reload: function() {
            location.reload()
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
