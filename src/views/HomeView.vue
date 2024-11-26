<template>
  <div class="home">
    <div class="posts">
      <Post v-for="post in posts" :post="post"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'

export default {
  name: 'HomeView',
  components: {
    Post
  },
  computed: {
    posts(){
      return this.$store.state.posts
    }
  },
}
</script>

<style> 
  .posts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      width: 400px;
      gap: 10px;
  }
</style>
