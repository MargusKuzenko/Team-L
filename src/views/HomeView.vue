<template>
  <div class="home">
    <div class="posts">
      <Post v-for="post in posts" :post="post"/>
    </div>
    <button v-on:click="ResetLikes "> Reset likes </button>
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
    }},
  methods: {
    ResetLikes: function() {
    this.$store.dispatch("ResetLikesAct")
  }}
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

  button{
    background:  #7ebeb6;
    border: 0;
    padding: 10px 20px 10px 20px;
    margin-top:  20px;
    margin-bottom:  20px;
    margin-right:  auto;
    margin-left:  auto;
    color: white;
    border-radius: 20px;
    display: block;
  }

  button:hover {
    background:  #a2ccea;
  }
</style>