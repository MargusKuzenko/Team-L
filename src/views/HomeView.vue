<template>
  <div class="container">
    <button v-if = "authResult" @click="Logout">Logout</button>
  </div>
  <div class="post-list" v-for="post in posts"   :key="post.index">  
    <a :href="'/auth/post/' + post.id" class="post-link">
      <div class="post">
        <p class="date"> {{ formatDate(post.date) }} </p>
        <br></br>
        <p>{{post.body}} </p>
        <div class="likes-container">
          <img 
            src="@/assets/icons/heart-regular.svg" 
            alt="Like Icon" 
            class="like-icon" 
            @click="likePost(post.index)"
          />
          <p>{{ post.likes }}</p>
        </div>
      </div>
    </a>
  </div>
  <div class="container">
    <button v-if = "authResult" @click="AddPost">Add Post</button>
    <button v-if = "authResult" @click="DeleteAll">Delete All</button>
  </div>
</template>

<script>
// @ is an alias to /src
import auth from '../auth';


export default {
  name: "HomeView",
  components: {
  },
   data: function() {
    return {
    posts:[ ],
    authResult: auth.authenticated()
    }
  }, 
  methods: {
    likePost(){
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
  },
    fetchPosts() {
      fetch('http://localhost:3000/auth/posts/')
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
*{
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  color: #444;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.likes-container {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
}
.like-icon {
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 5px;
    width: 5%;
}
body{
  margin: 20px 40px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  background: #fafafa;
  position: relative;
}
.post-list{
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
p.date {
text-align: right;
}
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
.post {
  width: 80%;
  position: relative;
  padding: 10px;
  margin: 10px auto;
  text-align: left;
}
.container {
  display: flex;
  justify-content: center;
  gap: 40px; /* Add spacing between items */
}
</style>