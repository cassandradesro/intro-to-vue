<template>
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
</template>

<script>
export default {
  name: "FeedList",
  props: ["posts"]
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
