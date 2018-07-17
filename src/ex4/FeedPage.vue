<template>
<div class="row">
    <div class="col s6">
      <div class="card">
        <div class="card-content">
          <span class="card-title">Add Post</span>
            <!-- Need to render FeedForm Component here and pass onsubmit as prop-->
          <FeedForm v-bind:onSubmit="pushPost"/>
        </div>
      </div>
    </div>
    <div class="col s6">
      <h5>Posts</h5>
      <FeedList v-bind:posts="posts"/>
      <!-- Need to render FeedList Component here and pass posts as prop-->
    </div>
</div>
</template>

<script>
import FeedList from "./FeedList";
import FeedForm from "./FeedForm";

export default {
  name: "FeedPage",
  components: { FeedList, FeedForm },
  data() {
    return {
      posts: []
    };
  },
  methods: {
    pushPost: function(post) {
      // console.log(posts);
      this.posts.push({ ...post, id: this.posts.length });
      console.log(this.posts);
      // this.currentPost.body = "";
      // this.currentPost.title = "";
    }
  }
};
</script>

<style scoped>

</style>
