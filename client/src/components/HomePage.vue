<template>
  <div class="home-foot">
    <b-container fluid>
      <b-row class="align-self-stretch">
        <b-col cols="12" md="auto"><image-slide /></b-col>
        <b-col col><br /><br /><br /><br /><swipe-card /></b-col>
      </b-row>
    </b-container>
    <swiper-one></swiper-one>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped></style>
