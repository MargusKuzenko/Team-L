<template>
    <div class="aPost">
        <h2 class="rainbow rainbow_text_animated">A Post</h2>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="body">Body:</label>
                <input type="text" name="body" id="body" v-model="post.body" required/>
            </div>
            <div class="form-group">
                <button type="submit" name="action" value="update">Update</button>
                <button type="submit" name="action" value="delete">Delete</button>
            </div>
        </form>  
    </div>
</template>

<script>
    export default {
        name: 'aPost',
        data() {
            return {
                post: {
                    id: "",
                    body: "",
                    date: "",
                    likes: null
                },
            };
        },
        methods: {
            submitForm() {
                const action = event.submitter.value;
                if (action === "update") {
                    this.updatePost();
                } else if (action === "delete") {
                    this.deletePost();
                }
            },
            fetchPost(id) {
                fetch(`http://localhost:3000/posts/${id}`)
                .then((response) => response.json())
                .then((data) => (this.post = data))
                .catch((err) => console.log(err.message));
            },
            updatePost(){
                fetch(`http://localhost:3000/posts/${this.post.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(this.post), // Send updated post data
                }).then(this.$router.push("/")).catch((e) => console.error(e));
            },
            deletePost(){
                fetch(`http://localhost:3000/posts/${this.post.id}`, {
                    method: "DELETE",
                }).then(this.$router.push("/")).catch((e) => console.error(e));
            }
        },
        mounted() {
            this.fetchPost(this.$route.params.id);
        },
    }
</script>

<style scoped> 
    .aPost {
        max-width: 500px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f7f9fb;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .rainbow {
        text-align: center;
        text-decoration: underline;
        font-size: 32px;
        font-family: monospace;
        margin-top: -5px;
        letter-spacing: 5px;
    }
    .rainbow_text_animated {
        background: linear-gradient(to right, #6666ff, #0099ff , #00ff00, #ff3399, #6666ff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: rainbow_animation 6s ease-in-out infinite;
        background-size: 400% 100%;
    }

    @keyframes rainbow_animation {
        0%,100% {
            background-position: 0 0;
        }

        50% {
            background-position: 100% 0;
        }
    }
    .form-group {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .form-group label {
        font-weight: bold;
        text-align: right;
    }

    .form-group input {
        flex: 1; 
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1em;
        margin-bottom: 10px;
    }
</style>