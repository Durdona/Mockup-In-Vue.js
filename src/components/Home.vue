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
// ====================== Responsive Design ===============================
/*  ===================  Smartphones in portrait mode   =====================  */

@media (max-width: 500px) {
  // body,
  // html {
  //   overflow-y: hidden;
  // }
  .container {
    padding-left: 0;
    padding-right: 0;
  }

  .headline-mask .losangeles {
    font-size: 5rem;
    position: absolute;
    top: 38%;
    left: 47%;
    transform: translate(-50%, -50%);
    letter-spacing: 1px;
  }
  .headline-mask .mountains {
    font-size: 5rem;
    text-transform: uppercase;
    position: absolute;
    top: 47%;
    left: 48%;
    letter-spacing: 4px;
    /* transform: translate(-50%, -50%); */
  }
}

/*  ==================== Smartphones in landscape mode  ==================== */
@media (min-width: 414px) and (max-width: 920px) and (orientation: landscape) {
  .headline-mask .losangeles {
    font-size: 4.5rem;
    position: absolute;
    top: 29%;
    left: 46%;
    transform: translate(-50%, -50%);
    letter-spacing: 1px;
  }
  .headline-mask .mountains {
    font-size: 4.5rem;
    text-transform: uppercase;
    position: absolute;
    top: 44%;
    left: 46%;
    transform: translate(-50%, -50%);
    letter-spacing: 4px;
  }
}

/*  ===================== Tablet Others smaller viewport  in portrait mode */
@media (min-width: 600px) and (orientation: portrait) {
  .headline-mask .losangeles,
  .headline-mask .mountains {
    font-size: 8rem;
  }
  .headline-mask .mountains {
    letter-spacing: 4px;
    top: 45%;
  }
  .headline-mask .losangeles {
    top: 33%;
    letter-spacing: 0;
  }
}
/*  ===================== Tablet Others smaller viewport  in Landscape mode */
@media (min-width: 600px) and (orientation: landscape) {
  .headline-mask .mountains,
  .headline-mask .losangeles {
    font-size: 8rem;
  }
  .headline-mask .losangeles {
    letter-spacing: 1px;
    left: 44%;
    top: 28%;
  }
}
/*  ===================== Tablets Normals in portrait mode  ====================== */
@media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .headline-mask .losangeles,
  .headline-mask .mountains {
    font-size: 10rem;
  }
  .headline-mask .losangeles {
    top: 32%;
    letter-spacing: -1px;
  }
}

/*  ==================== Tablets in landscape mode, older desktop monitors */
@media (min-width: 1024px) and (max-width: 1365px) and (orientation: landscape) {
  .headline-mask .losangeles {
    top: 29%;
  }
}

/*  ==================== Monitors with screen width 1200px or above */
@media (min-width: 1200px) {
  .headline-mask .mountains,
  .headline-mask .losangeles {
    font-size: 11rem;
  }
  .headline-mask .losangeles {
    letter-spacing: 0;
    top: 28%;
  }
}

/*  ==================== Monitors with screen width 1366px or above */
@media (min-width: 1365px) {
  .headline-mask .mountains,
  .headline-mask .losangeles {
    font-size: 11rem;
  }
  .headline-mask .losangeles {
    top: 29%;
    letter-spacing: -1px;
    left: 44%;
  }
}

/*  ==================== Monitors with screen width 2560 or above */
@media (min-width: 2500px) {
  .headline-mask .mountains,
  .headline-mask .losangeles {
    font-size: 15.5rem;
  }
  .headline-mask .losangeles {
    top: 28%;
  }
}
</style>>
