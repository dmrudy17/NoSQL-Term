<template>
  <div class="main-container">
    <div class="fixed">
      <Vue2InteractDraggable
        @draggedRight="right"
        @draggedLeft="left"
        @draggedUp="up"
        @draggedDown="down"
        :interact-max-rotation="15"
        :interact-out-of-sight-x-coordinate="1200"
        :interact-x-threshold="300"
        :interact-y-threshold="300"
        v-if="visible"
      >
        <div class="card">
          <div v-if="cards[index].petImage !== null">
            <b-img
              v-bind:src="
                `http://localhost:5000/api/posts/image/${cards[index].petImage.filename}`
              "
              style="max-width: 20rem;"
              class="img-thumbnail"
            />
          </div>

          <b-card
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
            border-variant="primary"
          >
            <b-card-text>
              <div>
                <div v-if="this.index < this.cards.length">
                  <h2>Hi my name is {{ cards[index].petname }}</h2>
                  <hr />
                  Weight: {{ cards[index].weight }}<br />
                  Breed: {{ cards[index].breed }}<br />
                  I am {{ cards[index].age }} old <br />
                  Personality: {{ cards[index].personality }}
                </div>
                <div v-else>
                  <h2>Sorry out of matches</h2>
                </div>
              </div>
            </b-card-text>
          </b-card>
        </div>
      </Vue2InteractDraggable>
    </div>
  </div>
</template>
<script>
import { Vue2InteractDraggable } from "vue2-interact";
import Vue from "vue";
import PostService from "../PostService";
import Toasted from "vue-toasted";
Vue.use(Toasted);
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
      //index starts at on so it does not take default dog into swipe
      index: 1,
      defaultDog: [],
      starVal: 0,
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
    //Set default dog on creation of conponent
    this.defaultDog = this.cards[0];
    //console.log(this.defaultDog.personality);
  },
  methods: {
    right() {
      setTimeout(() => (this.visible = false), 200);
      setTimeout(() => {
        this.visible = true;
        this.starVal = 0;
        if (this.defaultDog.personality == this.cards[this.index].personality) {
          this.starVal++;
        }
        if (this.defaultDog.weight == this.cards[this.index].weight) {
          this.starVal++;
        }
        if (this.defaultDog.age == this.cards[this.index].age) {
          this.starVal++;
        }

        if (this.starVal == 0) {
          Vue.toasted.show("Sorry no match", {
            theme: "bubble",
            duration: 2000,
          });
        } else if (this.starVal == 1) {
          Vue.toasted.show("Its a 1 star match", {
            theme: "bubble",
            duration: 2000,
          });
        } else if (this.starVal == 2) {
          Vue.toasted.show("Its a 2 star match", {
            theme: "bubble",
            duration: 2000,
          });
        } else if (this.starVal == 3) {
          Vue.toasted.show("Its a 3 star match!!", {
            theme: "bubble",
            duration: 2000,
          });
        }
        if (this.starVal == 1 || this.starVal == 2 || this.starVal) {
          alert("My phone number is: " + this.cards[this.index].contactinfo);
        }

        this.index++;
        console.log(this.starVal);
      }, 300);
    },
    left() {
      setTimeout(() => (this.visible = false), 200);
      setTimeout(() => {
        this.visible = true;
        this.index++;
        console.log("Disliked");
      }, 300);
    },
    up() {
      setTimeout(() => (this.visible = false), 200);
      setTimeout(() => {
        this.visible = true;
        Vue.toasted.show("Invalid Swipe!", {
          theme: "bubble",
          duration: 2000,
        });
        this.index++;
      }, 300);
    },
    down() {
      setTimeout(() => (this.visible = false), 200);
      setTimeout(() => {
        this.visible = true;
        Vue.toasted.show("Invalid Swipe!", {
          theme: "bubble",
          duration: 2000,
        });
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
  left: 40%;
  top: 20%;
}
.card {
  border-radius: 2px;
  background-color: #d3f7f6;
}
.fixed:hover {
  transform: scale(1.16);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
</style>
