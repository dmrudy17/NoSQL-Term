<template>
  <div>
    <b-card
      style="max-width: 20rem; height: 15rem; margin: 0 auto; float: none;"
      class="mb-2"
      border-variant="dark"
    >
      <div class="card-text">
        <b-card-text>
        Start Swiping Now!
        </b-card-text>
      </div>
        <router-link to="/post">
            <b-icon icon="chevron-double-right" variant="secondary" style="width: 100px; height: 100px" animation="cylon"></b-icon>
        </router-link>
    </b-card>
  </div>
</template>

<style scoped>
    .mb-2 {
        background-color: #d3f7f6;
    }
    .card-text {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #878787;
        font-size: x-large;
    }
</style>