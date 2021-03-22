<style>
div.postTop {
  column-count: 2;
  font-size: x-large;
  font-weight: normal;
  text-align: center;
}

span.category {
  font-weight: bold;
}

div.postbottom {
  font-size: x-large;
}
</style>
<template>
  <div class="container">
    <h1>Current Pets</h1>
    <div class="post">
      <div class="create-post">
        <label for="create-post"><strong>Add Your Pet Info</strong></label>
        <br />
        <br />
        <input
          type="text"
          id="create-post"
          v-model="petname"
          placeholder="Pet Name"
        />
        <input
          type="text"
          id="create-post"
          v-model="weight"
          placeholder="Pet Weight"
        />
        <input
          type="text"
          id="create-post"
          v-model="age"
          placeholder="Pet Age"
        />
        <br />
        <br />
        <input
          type="text"
          id="create-post"
          v-model="breed"
          placeholder="Breed"
        />
        <input
          type="text"
          id="create-post"
          v-model="neutered"
          placeholder="Neutered Status"
        />
        <input
          type="text"
          id="create-post"
          v-model="ownername"
          placeholder="Owner Name"
        />
        <br />
        <br />
        <input
          type="text"
          id="create-post"
          v-model="gender"
          placeholder="Gender"
        />
        <input
          type="text"
          id="create-post"
          v-model="likes"
          placeholder="Likes"
        />
        <input
          type="text"
          id="create-post"
          v-model="dislikes"
          placeholder="Dislikes"
        />
        <br />
        <br />
        <input
          type="text"
          id="create-post"
          v-model="personality"
          placeholder="Personality"
        />
        <input
          type="text"
          id="create-post"
          v-model="contactinfo"
          placeholder="Phone Number"
        />
        <br />
        <br />
        <button v-on:click="createPost" id="postButton">Post!</button>
      </div>
    </div>
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
          `${post.createdAt.getMonth() + 1}/${post.createdAt.getDate()}/${post.createdAt.getFullYear()}`
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
        <img
          class="text"
          src="https://storage.googleapis.com/kagglesdsdata/datasets/119698/791828/images/Images/n02089078-black-and-tan_coonhound/n02089078_1025.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20210322%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210322T204216Z&X-Goog-Expires=172799&X-Goog-SignedHeaders=host&X-Goog-Signature=37e8dc1f3a28b22cbd56a93c42f00f81e828be684f398b3d41caba6c0067cc333d2e367b84d87dfd6dd695782cd73708333ee9d0887744152fc340afb39f79bd0162e8affa3cb8be7703013940bb23c9df0930d992274630f5b1783fa0d55a4ec15a84ada13b427035297663620c4aea23b5ebbb86cd0eac69ce3ed1ac72ae1f20e81dd31f7342a4c75fbcbea68862bc1d6d5ae167141caa2c33c2272b895654259b74ff264935e828963335aa59ae4befc498445b37a12da61fc82f2be143dea83a4eea99869baff1e79541cac4864dbd584379ec24b4ea745ad0b8858b72382c65fabc6762d524b5ecd5a9a3d6de8af5564cd38344fa12892a2a105c945ca2"
        />
        <br />
        <div class="postbottom">
          <span class="category">Owner: </span>{{ post.ownername }}<br />
          <span class="category">Phone: </span>{{ post.contactinfo }}<br />
        </div>
        <button @click="deletePost(post._id)">Delete!</button>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from "../PostService";
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
    async createPost() {
      await PostService.insertPost(
        this.petname,
        this.weight,
        this.age,
        this.breed,
        this.neutered,
        this.ownername,
        this.gender,
        this.likes,
        this.dislikes,
        this.personality,
        this.contactinfo
      );
      this.posts = await PostService.getPosts();
    },
    async deletePost(id) {
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
