<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-btn to="/declare" color="danger">{{start}}</v-btn>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Bienvenue sur le site de POC Emploi',
      start: 'Commencer'
    }
  }
}
</script>
