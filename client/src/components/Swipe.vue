<template>
  <div class="main-container">
    <div class="fixed">
      <Vue2InteractDraggable
        @draggedRight="right"
        :interact-max-rotation="15"
        :interact-out-of-sight-x-coordinate="1200"
        :interact-x-threshold="300"
        :interact-y-threshold="300"
        v-if="visible"
      >
        <div class="card">
          <b-card
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              <div v-if="this.index < this.cards.length">
                <h2>Hi my name is {{ cards[index].petname }}</h2>
                <hr />
                Weight: {{ cards[index].weight }}<br />
                Breed: {{ cards[index].breed }}<br />
                I am {{ cards[index].age }} years old
              </div>
              <div v-else>
                <h2>Sorry out of matches</h2>
              </div>
            </b-card-text>
            <b-button href="#" variant="primary">Like</b-button>
          </b-card>
        </div>
      </Vue2InteractDraggable>
    </div>
  </div>
</template>
<script>
import { Vue2InteractDraggable } from "vue2-interact";
import PostService from "../PostService";
export default {
  components: {
    Vue2InteractDraggable,
  },
  data() {
    return {
      cardTitle: "This is Card Title",
      visible: true,
      cards: [],
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
      index: 0,
    };
  },
  //This function will run at load of the component and fill the array with whole
  //database
  async created() {
    try {
      this.cards = await PostService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    right() {
      setTimeout(() => (this.visible = false), 200);
      setTimeout(() => {
        this.visible = true;
        this.index++;
      }, 300);
    },
  },
};
</script>
<style scoped>
.main-container {
  background-color: aqua;
}
.fixed {
  position: fixed;
  left: 50%;
}
.card {
  border-radius: 2px;
}
</style>
