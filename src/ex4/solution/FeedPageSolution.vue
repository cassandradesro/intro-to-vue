<template>
<div class="row">
    <div class="col s6">
      <div class="card">
        <div class="card-content">
          <span class="card-title">Add Post</span>    
          <FeedForm v-bind:onSubmit="pushPost" />
        </div>
      </div>
    </div>
    <div class="col s6">
      <h5>Posts</h5>
      <FeedList v-bind:posts="posts" />
    </div>
</div>
</template>

<script>
import FeedList from "./FeedListSolution";
import FeedForm from "./FeedFormSolution";

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
      console.log(post);
      this.posts.push({ ...post, id: this.posts.length });
    }
  }
};
</script>

<style scoped>

</style>
