<template>
<div >
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
            <!--   Bonus: add the disabled class to the "Add Post" button if the post body is less than 10 characters -->
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
      this.onSubmit(this.currentPost);
      this.currentPost.body = "";
      this.currentPost.title = "";
    }
  }
};
</script>

<style scoped>

</style>
