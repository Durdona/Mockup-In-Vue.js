<template>
  <!-- ===================== Hero Page #1 ===================== -->
  <div id="hero">
    <div class="overlay-hero">
      <div class="headline-mask">
        <span class="losangeles">Losangeles</span>
        <span class="mountains">Mountains</span>

        <div class="container">
          <header>
            <Menu :nav-links="navLinks" />
            <router-view />
          </header>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu";

export default {
  name: "Home",
  data() {
    return {
      navLinks: [
        {
          text: "01. history",
          path: "./history",
        },
        {
          text: "02. team",
          path: "./team",
        },
      ],
    };
  },
  components: {
    Menu,
  },
};
</script>

<style lang="scss" scoped>
#hero {
  background: url("../assets/background.jpg") no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100vh;
}
.overlay-hero {
  background: rgba(255, 255, 255, 0.3);
  height: 100%;
  overflow: hidden;
}
.headline-mask {
  // background: green;
  mask-image: url("../assets/background_mask.png");
  -webkit-mask-image: url("../assets/background_mask.png");
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-size: cover;
  -webkit-mask-size: cover;
  height: 100%;
  overflow: hidden;
  .losangeles {
    color: rgba(77, 77, 77, 1);
    font-family: "Bebas Neue", cursive;
    font-size: 11rem;
    text-transform: uppercase;
    position: absolute;
    top: 29%;
    left: 44%;
    transform: translate(-50%, -50%);
    letter-spacing: -1px;
  }
  .mountains {
    color: #414f6b;
    font-family: "Bebas Neue", cursive;
    font-size: 11rem;
    text-transform: uppercase;
    position: absolute;
    top: 44%;
    left: 44%;
    transform: translate(-50%, -50%);
    letter-spacing: 5px;
  }
}
</style>>
