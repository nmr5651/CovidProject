<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <PostComp />
</template>

<script>
import PostComp from "./components/PostComp.vue";

export default {
  name: "App",
  components: {
    PostComp,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
