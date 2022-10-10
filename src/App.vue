<template>
  <div id="app">
    <Navbar />
    <post-list/>
  </div>
</template>

<script>
import Navbar from './components/navbar/nav-bar.vue'
import PostList from './components/Post-list/PostList.vue'
export default {
  name: "App",
  components: {
     Navbar,
     PostList
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
