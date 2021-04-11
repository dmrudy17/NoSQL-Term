<template>
  <div class="main-card">
    <b-card no-body class="overflow-hidden" style="max-width:">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="dogLink" alt="Image"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body>
            <b-card-text>
              <h1>Welcome to our website</h1>
            </b-card-text>
            <hr />
            <b-card-text><h2>Check out some of our pets</h2></b-card-text>
            <b-button pill variant="info" @click="loadImage"
              >Check out more dogs</b-button
            >
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      dogLink: "",
      temperature: [],
    };
  },
  methods: {
    loadImage() {
      axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
          console.log(response);
          this.dogLink = response.data.message;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchTemp(uri) {
      axios.get(uri).then((res) => {
        this.temperature = res.data.temperature;
      });
    },
  },
  created() {
    this.loadImage();

    this.fetchTemp("/");

    /* setInterval(() => {
      this.fetchItems("api/temperature");
    }, 500); */
  },
};
</script>
<style scoped>
.card {
  border-radius: 3.25rem;
  border-color: black;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
}
.card:hover {
  transform: scale(1.06);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
.main-card {
  border-radius: 60%;
  width: 1100px;
  padding: 60px;
}
</style>
