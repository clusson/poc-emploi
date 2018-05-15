<template>
  <v-app class="ok">
{{msg}}
<div class="bravo"><i class="material-icons">check_circle_outline</i></div>
  </v-app>
</template>

<script>
export default {
  name: "Declare",
  data() {
    return {
      msg: "Bravo ! "
    };
  }
};
</script>
<style>
.ok {
  margin-top: 100px;
}
.bravo {
  margin: 0 auto;
}
</style>
