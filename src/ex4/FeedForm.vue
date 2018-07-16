<template>
  <div>
    <div class="row">
      <div class="input-field col s12">
        <input  id="posttitle" type="text" v-model="currentPost.title"/>
        <label for="posttitle">Post Title</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <textarea  class="materialize-textarea" id="postbody" v-model="currentPost.body"></textarea>
        <label for="postbody">Post Body</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <button class="btn waves-effect waves-light" type="button" @click="pushPost">Add Post</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedForm",
  props: ["onSubmit"],
  data() {
    return {
      currentPost: {
        body: "",
        title: ""
      }
    };
  },
  methods: {
    pushPost: function() {
      //Need to call onSubmit prop fn to update posts array
      this.currentPost.body = "";
      this.currentPost.title = "";
    }
  }
};
</script>

<style scoped>

</style>
