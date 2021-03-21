<template>
  <div class="container">
    <h1>Current Pets</h1>
    <div class="create-post">
      <label for="create-post">Add your pet...</label>
      <input type="text" id="create-post" v-model="text" placeholder="Create a post">
      <button v-on:click="createPost">Post!</button>
    </div>
    <hr>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
      <div class="post"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-on:dblclick="deletePost(post._id)"
      >
        {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}}
        <p class="text">Name: {{ post.petname }}</p>
        <p class="text">Weight: {{ post.weight }}</p>
        <p class="text">Age: {{ post.age }}</p>
        <p class="text">Breed: {{ post.breed }}</p>
        <p class="text">Gender: {{ post.gender }}</p>
        <p class="text">Neutered: {{ post.neutered }}</p>
        <p class="text">Likes: {{ post.likes }}</p>
        <p class="text">Dislikes: {{ post.dislikes }}</p>
        <p class="text">Personality: {{ post.personality }}</p>
        <p class="text">Owner: {{ post.ownername }}</p>
        <p class="text">Phone: {{ post.contactinfo }}</p>
        <img class="text" src="https://lh3.googleusercontent.com/proxy/o87F5qvm8HERJ6RquUh9X_tPOdUr70H0qrcBIhvLBvVqq3S18QrJ05U4Jw86o6BW5mbb-66e9nRajozgOb_SFHov3dkwS19qzxV00Fgo1NxhWg9bf-W4PBKKlrOZ6ocwnWZ1gcbrStY">
      </div>
    </div>
  </div>
</template>

<script>
import PostService from '../PostService';
export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch(err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #000000;
  background-color: #D3F7F6;
  border-radius: 5px;
  border-width: medium;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
