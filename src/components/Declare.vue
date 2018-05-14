<template>
  <div class="declare">
    <h1>{{ msg }}</h1>
    <v-btn to="/" dark color="danger">retour</v-btn>

  </div>
</template>

<script>
export default {
  name: 'Declare',
  data () {
    return {
      msg: 'Déclarer votre situation'
    }
  }
}
</script>
