<template>
  <div class="declare">
    <h1>{{ msg }}</h1>
    <v-btn to="/">{{ retour}}</v-btn>

  </div>
</template>

<script>
export default {
  name: 'Declare',
  data () {
    return {
      msg: 'Déclarer votre situation',
      retour: 'Retour à l\'accueil'
    }
  }
}
</script>
<style>
.declare {
  margin-top:80px;
}
</style>
