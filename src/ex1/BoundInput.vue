<template>
<div class="row">
<div class="col s6">
  <!-- 
  Update this template to bind title to the input 
  and the submit button to alertResult
   -->
   <div class="input-field">
    <input type="text" name="title" id="title" v-bind="title"/>
    <label for="title">Title</label>
   </div>
  <button v-on:click="alertResult" class="btn waves-effect waves-light">Submit</button>
</div>
</div>
</template>

<script>
// Clicking submit should alert the value of the input field

export default {
  name: "BoundInput",
  data() {
    return {
      title: "hey"
    };
  },
  methods: {
    alertResult: function() {
      // alter this method to alert the value of title
      alert("hey cassandra girl!");
    }
  }
};
</script>

<style>

</style>
