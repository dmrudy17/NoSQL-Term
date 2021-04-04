<template>
  <div class="main-header">
    <md-card class="md-primary" md-with-hover md-theme="green-card">
      <md-ripple>
        <md-card-media-cover md-text-scrim>
          <md-card-media md-ratio="16:9">
            <img :src="dogLink" height="400px" />
          </md-card-media>
        </md-card-media-cover>
        <div class="head-color">
          <h1>Welcome to our Website</h1>
          <md-button
            class="md-raised md-primary"
            :md-ripple="false"
            @click="loadDogImage"
            >Check Out More</md-button
          >
        </div>
      </md-ripple>
    </md-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      dogLink: "",
    };
  },
  methods: {
    loadDogImage() {
      axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
          this.dogLink = response.data.message;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.loadDogImage();
  },
};
</script>
<style scoped>
.md-card {
  height: 650px;
  width: 920px;
  margin: 3%;
  border-radius: 15px;
}
.head-color {
  height: 30px;
}
.md-card-media-cover {
  border-radius: 15px;
}
</style>
