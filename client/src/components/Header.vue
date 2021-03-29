<template>
    <div id="main-header-class">
        <p1 class="header-title">Pet Tinder</p1>
    <md-button class="md-icon-button1 md-raised md-plain">
        <router-link to="/" class="App-home-link">Home</router-link>
      </md-button>
            <md-button class="md-icon-button2 md-raised md-plain">
        <router-link to="/post" class="App-post-link">Posts</router-link>
      </md-button>

    </div>
</template>
<script>
</script>
<style scoped>
#main-header-class{
    background-color:#D3F7F6 ;
    height: 60px;
}

.header-title {
    line-height: 2.6em;
    font-family: 'Brush Script MT', cursive;
    font-size: x-large;
    position: relative;
    left: 94px
}
.md-icon-button2
{
    position: relative;
    right: -40em;
}



 </style>