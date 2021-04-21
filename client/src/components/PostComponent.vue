<style>
div.postTop {
  column-count: 2;
  line-height: normal;
  font-size: x-large;
  font-weight: normal;
  text-align: center;
}

span.category {
  font-weight: bold;
}

div.postbottom {
  line-height: normal;
  font-size: x-large;
}
</style>
<template>
  <div class="container">
    <h1>Current Pets</h1>
    <hr />
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
      <div
        class="post"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
      >
        {{
          `${post.createdAt.getMonth() +
            1}/${post.createdAt.getDate()}/${post.createdAt.getFullYear()}`
        }}
        <div class="postTop">
          <span class="category">Name: </span>{{ post.petname }}<br />
          <span class="category">Weight: </span>{{ post.weight }}<br />
          <span class="category">Age: </span>{{ post.age }}<br />
          <span class="category">Breed: </span>{{ post.breed }}<br />
          <span class="category">Gender: </span>{{ post.gender }}<br />
          <span class="category">Neutered: </span>{{ post.neutered }}<br />
          <span class="category">Likes: </span>{{ post.likes }}<br />
          <span class="category">Dislikes: </span>{{ post.dislikes }}<br />
          <span class="category">Personality: </span>{{ post.personality
          }}<br />
        </div>
        <br />
        <div v-if="post.petImage !== null">
          <img
            class="text"
            v-bind:src="
              `http://localhost:5000/api/posts/image/${post.petImage.filename}`
            "
          />
        </div>
        <br />
        <div class="postbottom">
          <span class="category">Owner: </span>{{ post.ownername }}<br />
        </div>
        <b-button variant="danger" @click="deletePost(post._id)">Delete!</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from "../PostService";
import Vue from "vue";
import Toasted from "vue-toasted";
Vue.use(Toasted);
export default {
  name: "PostComponent",
  data() {
    return {
      posts: [],
      error: "",
      text: "",
      petname: "",
      weight: "",
      age: "",
      breed: "",
      neutered: "",
      ownername: "",
      gender: "",
      petImage: "",
      likes: "",
      dislikes: "",
      personality: "",
      contactinfo: "",
    };
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async deletePost(id) {
      Vue.toasted.show("Pet Deleted!!", {
        duration: 2000,
      });
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    },
  },
};
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
  background-color: #d3f7f6;
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
