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
                <input  id="posttitle" type="text"/>
                <label for="posttitle">Post Title</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <textarea  class="materialize-textarea" id="postbody"></textarea>
                <label for="postbody">Post Body</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
            <!--   Bonus: add the disabled class to the "Add Post" button if the post body is less than 10 characters -->
                <button class="btn waves-effect waves-light" type="button" >Add Post</button>
            </div>
        </div>
    </form>
    <div class="col s6">
        <div class="row">
            <div class="col s12">
                <!-- render list of posts here -->
                <div class="card blue-grey darken-1" >
                    <div class="card-content white-text">
                        <span class="card-title">Post Title</span>
                        <p>Bacon ipsum dolor amet doner buffalo corned beef t-bone ground round jowl picanha burgdoggen landjaeger swine meatball. Pig brisket beef ribs, buffalo pancetta porchetta ball tip pork loin. </p>
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
      //hint: you can use currentPost to get the values of the input fields with v-model
    }
  }
};
</script>

<style scoped>

</style>
