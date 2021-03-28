<template>
    <div id ="footer">
        
        <div id="authors">
            <span id="category">Authors:</span> <br>
             Douglas Rudy, Stephan Gunawardana, Alex Helmick
        </div>
        <div id="sourceCode">
            <span id="category">Source Code:</span>
            <a href="https://github.com/dmrudy17/NoSQL-Term">https://github.com/dmrudy17/NoSQL-Term</a>
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
}

#authors {
    width: 50%;
    float: left;
}

#sourceCode {
    margin-left: 50%

}

#category {

    font-weight: bold;
}

</style>