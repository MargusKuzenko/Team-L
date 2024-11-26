<template>
  <div class="home">
    <Post/>
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
  methods: {
    ResetLikes: function() {
    this.$store.dispatch("ResetLikesAct")
  }}
}
</script>

<style scoped>
button{
background:  rgb(31, 163, 163);
border: 0;
padding: 10px 20px 10px 20px;
margin-top:  20px;
margin-bottom:  20px;
margin-right:  10px;
color: white;
border-radius: 20px;
}

button:hover {
  background:  #5842b9;
}
</style>