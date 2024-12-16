<template>
  <div class="container">
    <button v-if = "authResult" @click="Logout">Logout</button>
  </div>
  <div class="posts">
      <Post v-for="post in posts" :post="post" @click="(e) => changePost(post, e)"/>
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
import AddPost from '@/views/AddPost.vue';


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
    changePost(post, e) {
      if(!e.target.classList.contains("liked") && !e.target.classList.contains("like")) {
        this.$router.push('/post/'+post.id)
      }
    },
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        this.$router.push("/login");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
    AddPost() {
      console.log('Navigating to AddPost');
      this.$router.push("/addpost");
    },
    DeleteAll() {
      fetch("http://localhost:3000/posts/all", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        console.log('Deleted all posts');
        this.posts = [];
      })
      .catch((err) => {
        console.log('Error deleting posts:', err.message);
      });
    }
  },
  mounted() {
    this.fetchPosts();
  }
};
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
  @media only screen and (max-width: 415px) {
    .posts {
        width: 100%;
    }
  }
  .container {
    display: flex;
    justify-content: center; /* Centers the buttons horizontally */
    gap: 10px; /* Adds space between buttons */
    margin-top: 20px; /* Adds some space above the container */
}
</style>