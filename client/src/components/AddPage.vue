<template>
  <div class="container">
    <div class="page-title">
      <h2>Enter Your Pet's Info</h2>
    </div>
    <b-form @submit="createPost" @reset="onReset">
      <b-form-group
        id="create-post"
        label="Pet Name*:"
        label-for="create-post"
      >
        <b-form-input
          id="create-post"
          v-model="petname"
          placeholder="Enter pet name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="create-post"
        label="Pet Weight*:"
        label-for="create-post"
      >
        <b-form-input
          type="number"
          id="create-post"
          v-model="weight"
          placeholder="Enter pet weight"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="create-post"
        label="Pet Age*:"
        label-for="create-post"
      >
        <b-form-select
          id="create-post"
          v-model="age"
          :options="ages"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="create-post"
        label="Pet Breed*:"
        label-for="create-post"
      >
        <b-form-input
          id="create-post"
          v-model="breed"
          placeholder="Enter pet breed"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="create-post"
        label="Pet Neutered Status*:"
        label-for="create-post"
      >
        <b-form-input
          id="create-post"
          v-model="neutered"
          placeholder="Enter pet neutered status (Yes/No)"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="create-post"
        label="Pet Owner Name*:"
        label-for="create-post"
      >
        <b-form-input
          id="create-post"
          v-model="ownername"
          placeholder="Enter pet owner's name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="create-post"
        label="Pet Gender*:"
        label-for="create-post"
      >
        <b-form-select
          id="create-post"
          v-model="gender"
          :options="genders"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="create-post"
        label="Pet Interests*:"
        label-for="create-post"
      >
        <b-form-input
          id="create-post"
          v-model="likes"
          placeholder="What thing(s) make your pet happy?"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="create-post"
        label="Pet Dislikes*:"
        label-for="create-post"
      >
        <b-form-input
          id="create-post"
          v-model="dislikes"
          placeholder="What makes your pet unhappy/uncomfortable?"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="create-post"
        label="How would you describe your pet's personality?*"
        label-for="create-post"
      >
        <b-form-select
          id="create-post"
          v-model="personality"
          :options="personalities"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="create-post"
        label="Contact Information*:"
        label-for="create-post"
      >
        <b-form-input
          id="create-post"
          v-model="contactinfo"
          placeholder="Enter pet owner's phone number"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="create-post"
        label="Pet Image*:"
        label-for="create-post"
      >
      <b-form-file
        id="create-post"
        v-model="petImage"
        class="mt-3"
        plain
        required
      ></b-form-file>
      </b-form-group>
      <b-button type="submit" variant="success">Add!</b-button>
      <div class="divider"/>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import PostService from "../PostService";
import Vue from "vue";
import Toasted from "vue-toasted";
Vue.use(Toasted);
export default {
  name: "AddPage",
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
      gender: null,
      petImage: null,
      likes: "",
      dislikes: "",
      personality: null,
      contactinfo: "",
      genders: [{ text: 'Select One', value: null }, 'Male', 'Female', 'Other'],
      personalities: [{ text: 'Select One', value: null}, 'Hyper', 'Shy/Timid', 'Independent', 'Loyal'],
      ages: [{ text: 'Select One', value: null }, '0 - 6 months', '7 months - 2 years', '3 - 6 years', '7 - 10 years', '10+ years']
    };
  },
  methods: {
    async createPost() {
      Vue.toasted.show("Pet Added!!", {
        duration: 2000,
      });
      const formData = new FormData();
      formData.append("petname", this.petname);
      formData.append("weight", this.weight);
      formData.append("age", this.age);
      formData.append("breed", this.breed);
      formData.append("neutered", this.neutered);
      formData.append("ownername", this.ownername);
      formData.append("gender", this.gender);
      formData.append("petImage", this.petImage);
      formData.append("likes", this.likes);
      formData.append("dislikes", this.dislikes);
      formData.append("personality", this.personality);
      formData.append("contactinfo", this.contactinfo);
      await PostService.insertPost(formData);
      this.posts = await PostService.getPosts();
      this.$router.push('/post');
    },
    onReset(event) {
      event.preventDefault()
      this.petname = ""
      this.weight = ""
      this.age = ""
      this.breed = ""
      this.neutered = ""
      this.ownername = ""
      this.gender = null
      this.likes = ""
      this.dislikes = ""
      this.persoanlity = null
      this.contactinfo = ""
      this.petImage = null
    }
  }
};
</script>

<style scoped>
  .page-title {
    text-align: center;
    padding: 10px;
  }
  .container {
    text-align: left;
    border-radius: 5px;
    background-color: #E7F5FC;
    border-width: 10px;
    margin-top: 15px;
  }
  .divider {
    width: 10px;
    height: auto;
    display: inline-block;
  }
</style>
