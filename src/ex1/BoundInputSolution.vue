<template>
<div class="row">
  <div class="col s6">
    <!-- 
    Update this template to bind title to the input 
    and the submit button to alertResult
    -->
    <div class="input-field">
      <input type="text" name="title" id="title" v-model="title"/>
      <label for="title">Title</label>
    </div>
    <button class="btn waves-effect waves-light" v-on:click="alertResult">Submit</button>
  </div>
</div>
</template>

<script>
export default {
  name: "BoundInput",
  data() {
    return {
      title: "hey"
    };
  },
  methods: {
    alertResult: function() {
      alert(this.title);
    }
  }
};
</script>

<style>

</style>
