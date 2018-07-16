<template>
<div>
  <div v-if="Math.random() > 0.5">
    <h1>You were slain by Thanos, for the good of the Universe.</h1>
  </div>
  <div v-else>
    <h1>You were spared by Thanos.</h1>
  </div>
</div>
</template>

<script>
export default {
  name: "Thanos"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
