<template>
    <div id ="footer">
        <div style="display:table-row">    
            <div id="authors">
            <br>
                <span id="category">Authors:</span> <br>
                Douglas Rudy, Stephan Gunawardana, Alex Helmick
            </div>
            <div id="site-name">
            <br>
                Pet Tinder
            </div>
            <div id="source-code">
                <br> 
                <b-icon-github style="font-size: larger;"> </b-icon-github>
                <br>   
                <span id="category">Source Code:</span>
                <a href="https://github.com/dmrudy17/NoSQL-Term"> https://github.com/dmrudy17/NoSQL-Term</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>

#footer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #878787;
  font-size: medium;
  height: 100px;
  background-color: #d3f7f6;
  border-top: 2px solid lightgrey;
  width: 100%;
  display: table;
  position: absolute;
  bottom: 0;
  width: 100%;
}

#authors {
    display: table-cell;
}

#source-code {
    display: table-cell;

}

#site-name{
    display: table-cell;
    font-size: 30px;
    font-weight: bold;
}

#category {

    font-weight: bold;
}

</style>