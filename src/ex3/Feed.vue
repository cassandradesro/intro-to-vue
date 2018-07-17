<template>
<!-- 
  Alter this template to push the values of the title and body input onto the posts array.
  Also render the list of posts

  Bonus: add the disabled class to the "Add Post" button if the post body is less than 10 characters
-->
<div class="row">
    <form class="col s6">
        <div class="row">
            <div class="input-field col s12">
                <input  v-model="currentPost.title" id="posttitle" type="text"/>
                <label for="posttitle">Post Title</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <textarea  v-model="currentPost.body" class="materialize-textarea" id="postbody"></textarea>
                <label for="postbody">Post Body</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
            <!--   Bonus: add the disabled class to the "Add Post" button if the post body is less than 10 characters -->
                <button v-on:click="pushPost" :disabled="currentPost.body.length < 10 && currentPost.title.length < 5" class="btn waves-effect waves-light" type="button" >Add Post</button>
            </div>
        </div>
    </form>
    <div class="col s6">
        <div class="row">
            <div class="col s12">
                <!-- render list of posts here -->
                <div :key="post.id" v-for="post of posts" class="card blue-grey darken-1" >
                    <div class="card-content white-text">
                        <span class="card-title">{{post.title}}</span>
                        <p>{{post.body}}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
export default {
  name: "Feed",
  data() {
    return {
      posts: [],
      currentPost: {
        body: "",
        title: ""
      }
    };
  },
  methods: {
    pushPost: function() {
      console.log(this.currentPost);
      this.posts.push({
        body: this.currentPost.body,
        title: this.currentPost.title
      });

      //hint: you can use currentPost to get the values of the input fields with v-model
    }
  }
};
</script>

<style scoped>

</style>
