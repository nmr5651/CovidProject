<template>
  <div class="container">
    <h1>Latest Posts</h1>
    <input type="text" name="searchText" id="searchBar" v-model="text" />
    <button type="submit" v-on:click="searchPost">Search</button>
    <hr />
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
      <div
        class="posts"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
      >
        <p class="text">{{ post.Province_State }}</p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import PostService from "../PostService";

export default {
  name: "PostComp",
  data() {
    return {
      posts: [],
      error: "",
      text: "",
    };
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async searchPost() {
      this.posts = await PostService.getPostsNew(this.text);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}
</style>
