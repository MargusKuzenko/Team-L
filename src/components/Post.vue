<template>
  <div class="post">
    <div class="post-header">
        <img src="res/images/me.png" alt="My picture">
        <div class="date">Oct 22, 2024</div>
    </div>
    <div class="content">
        <img src="res/images/tartu.jpg" alt="Tartu 2024">
        <p>Tartu 2024</p>
    </div>
    <div class="like">
        <img src="res/images/icons/heart-regular.svg">
        <p>Like</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post',
}
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
</style>
