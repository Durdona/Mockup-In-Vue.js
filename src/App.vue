<template>
  <div id="app">
    <Home />
    <History />
    <Climb />
    <Footer />
  </div>
</template>


<script>
import Home from "./components/Home";
import History from "./components/History";
import Climb from "./components/Climb";
import Footer from "./components/Footer";

export default {
  data() {
    return {};
  },
  components: {
    Home,
    History,
    Climb,
    Footer,
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
@media (max-width: 500px) {
  .container {
    padding-left: 0;
    padding-right: 0;
  }
}
@media (min-width: 414px) and (max-width: 920px) and (orientation: landscape) {
  /* @media (min-width: 421px) and (max-width: 767px) and (orientation: landscape) { */
  .container {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
