<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-btn color="info">Info</v-btn>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Bienvenue sur le site de POC Emploi'
    }
  }
}
</script>
