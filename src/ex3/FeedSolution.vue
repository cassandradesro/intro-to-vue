<template>
<div class="row">
    <form class="col s6">
        <div class="row">
            <div class="input-field col s12">
                <input v-model="currentPost.title" id="posttitle" type="text"/>
                <label for="posttitle">Post Title</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <textarea v-model="currentPost.body" class="materialize-textarea" id="postbody"></textarea>
                <label for="postbody">Post Body</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <button class="btn waves-effect waves-light" type="button" v-bind:class="{disabled: currentPost.body.length < 15}" @click="pushPost">Add Post</button>
            </div>
        </div>
    </form>
    <div class="col s6">
        <div class="row">
            <div class="col s12">
                <div class="card blue-grey darken-1" :key="post.id" v-for="post in posts">
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
      this.posts.push({ ...this.currentPost, id: this.posts.length });
      this.currentPost.body = "";
      this.currentPost.title = "";
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
li {
  margin: 5px;
}
</style>
