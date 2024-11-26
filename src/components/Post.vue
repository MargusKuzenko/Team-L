<template>
  <div class="post" :key="post.id">
    <div class="post-header">
        <img src="@/assets/images/me.png" alt="My picture">
        <p>{{ post.author }}</p>
        <div class="date">{{ post.date }}</div>
    </div>
    <div class="content">
        <img v-if="post.img" :src="require(`@/assets/images/${post.img}`)" :alt="post.img">
        <p>{{ post.post_body }}</p>
    </div>
    <div class="like">
        <img src="@/assets/icons/heart-regular.svg" v-on:click="IncreaseLike" :class="{ liked: isLiked }">
        <p>{{ post.likes }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post',
  props: {
    post: Object,
  },
  data() {
    return {
      isLiked: false,
    };
  },
  methods: {
    IncreaseLike: function() {
        this.isLiked = true; 
        this.$store.dispatch("IncreaseLike", this.post.id);
        setTimeout(() => {
            this.isLiked = false;
        }, 200);
    }
  }
}
</script>

<style scoped>
    .post {
        background-color: lightgrey;
        border-radius: 20px;
        padding: 15px;
    }
    .content > p {
        font-family: 'Trebuchet MS';
    }
    .post img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 100%;
    }
    .post .post-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .post .post-header .date {
        margin-right: auto;
    }

    .post .post-header p {
        padding-left: 5px;
        flex: 1;
    }

    .post .post-header img{
        max-width: 10%;
    }
    .post .like {
        font-size: 12px;
        display: flex;
        align-items: center;
        gap: 5px;
        width: 5%;
    }
    .post .like img {
        transition: transform 0.2s ease;
    }
    .post .like img.liked {
        transform: scale(.5);
    }
</style>
