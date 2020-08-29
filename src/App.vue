<template>
  <div id="app">
    <Home />
    <History />
  </div>
</template>


<script>
import Home from "./components/Home";
import History from "./components/History";

export default {
  data() {
    return {};
  },
  components: {
    Home,
    History,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Maven Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  padding: 0 15%;
}
</style>
