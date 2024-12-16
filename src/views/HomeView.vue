<template>
  <div class="container">
    <button v-if = "authResult" @click="Logout">Logout</button>
  </div>
  <div class="posts">
      <Post v-for="post in posts" :post="post"/>
  </div>
  <div class="container">
    <button v-if = "authResult" @click="AddPost">Add Post</button>
    <button v-if = "authResult" @click="DeleteAll">Delete All</button>
  </div>
</template>

<script>
// @ is an alias to /src
import auth from '../auth';
import Post from '@/components/Post.vue';


export default {
  name: "HomeView",
  components: {
    Post
  },
   data: function() {
    return {
    posts:[ ],
    authResult: auth.authenticated()
    }
  }, 
  methods: {
    fetchPosts() {
      fetch('http://localhost:3000/posts/')
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },
  },
    mounted() {
      this.fetchPosts();
      console.log("mounted");
  },
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
};
</script>

<style scoped>
.posts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      width: 400px;
      gap: 10px;
  }
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
body{
  margin: 20px 40px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  background: #fafafa;
  position: relative;
}
/*.post-list{
  background: rgb(189, 212, 199);
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  padding: 3px 5px;
  border-radius: 10px;
}
  */
button{
  background: #FEE996;
  border:0;
  font-weight: 700;
  font-size: 0.8em;
  display: block;
  letter-spacing: 2px;
  padding: 5px 10px;
  font-size: 0.9em;
  width: auto;
  margin: 0;
  margin-bottom: 5px;
  border-radius: 14px;
}
button:hover {
  background: #e7e1ca;
}
.container {
  display: flex;
  justify-content: center;
  gap: 40px; /* Add spacing between items */
}
</style>