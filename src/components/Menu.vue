<template>
  <nav class="nav-menu">
    <div class="logo-headline">
      <div id="logo">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="90"
          height="90"
          viewBox="-223 25 512 512"
          style="enable-background:new -223 25 512 512;"
          xml:space="preserve"
        >
          <svg:style type="text/css">
            .st0 {
            fill: #ffffff;
            stroke: #000000;
            stroke-width: 0.75;
            stroke-miterlimit: 10;
            }
            .st1 {
            fill: #bdc3c7;
            stroke: #000000;
            stroke-width: 0.5;
            stroke-miterlimit: 10;
            }
            .st2 {
            fill: #414f6b;
            stroke: #000000;
            stroke-width: 0.5;
            stroke-miterlimit: 10;
            }
            .st3 {
            fill: #ecf0f1;
            stroke: #000000;
            stroke-width: 0.5;
            stroke-miterlimit: 10;
            }
            .st4 {
            fill: #bdc3c7;
            }
          </svg:style>
          <g>
            <path
              class="st0"
              d="M289,281c0,19.9-2.3,39.3-6.6,57.9c-94.3,50.6-116.8,47.6-238.3,47.6c-78.5,0-159.9,115.1-206.9,59.5
                                        c-37.6-44.6-60.3-102.1-60.3-165c0-141.4,114.6-256,256-256S289,139.6,289,281z"
            />
            <path
              class="st1"
              d="M33,537c121.5,0,223.2-84.6,249.4-198.1L234.3,270L189,299l-84-118L-37,363l-50-20l-75.7,103
                                          C-115.8,501.6-45.5,537,33,537z"
            />
            <polygon class="st2" points="105,181 111.1,343 189,299" />
            <polygon
              class="st3"
              points="-133.4,446.6 -87,458.6 -41.9,514.1 40.6,442.1 7.6,365.6 105,181 -37,363
                                              -87,343 -137,411"
            />
            <polygon class="st2" points="-87,343 -87,382 -65.9,373.1 -76.4,418.1 -21.4,343" />
            <polygon
              class="st2"
              points="87.1,439.1 126.1,380.5 195.1,359 228.1,426.8 189,399 111.1,481.1"
            />
            <polygon class="st2" points="70.6,287.6 33,364.1 59.8,407.6" />
            <polygon class="st3" points="208.6,313.1 228.1,371.6 252.1,347.6" />
            <polygon class="st4" points="-41.9,443.6 -16,407.6 -28.9,452.6" />
          </g>
        </svg>
      </div>
      <div class="logo-headline-wrapper">
        <span class="losangeles">Losangeles</span>
        <span class="mountains">Mountains</span>
      </div>
    </div>
    <ul class="ul-menu">
      <li v-for="(link, index) in navLinks" :key="index" :style="{color:   '#DDD' }">
        <router-link :to="link.path">{{link.text}}</router-link>
      </li>
    </ul>
    <div class="hamburger" @click="showMenu()">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      nav: [],
    };
  },
  props: ["navLinks"],
  methods: {
    showMenu() {
      document.querySelector(".ul-menu").classList.toggle("open");
    },
  },
};
</script>

<style  lang='scss'  >
.nav-menu {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  // background: purple;
}
.ul-menu {
  display: flex;
  justify-content: center;
  align-content: center;
  list-style: none;
  width: 50%;
  margin-left: auto; /* this moves list items to the left */

  li a {
    text-decoration: none;
    color: white;
    // padding-left: 15px;
    padding-left: 40px;
    text-transform: uppercase;
    font-style: italic;
    position: relative;
    &:hover {
      transition: all 0.5s ease-in-out;
      color: #414f6b;
    }
    &:after {
      content: "";
      position: absolute;
      border-bottom: 1px solid white;
      bottom: -6px;
      left: 40px;
      width: 67%;
    }
    &:hover:after {
      transition: all 0.5s ease-in-out;
      border-bottom: 1px solid #414f6b;
    }
  }
}
.logo-headline {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;

  &-wrapper {
    // display: flex;
    flex-flow: column;
    padding-left: 4%;
    text-transform: uppercase;
    font-family: "Bebas Neue", cursive;
    font-size: 2rem;
    line-height: 2rem;
    display: none;
  }
  &-wrapper .losangeles {
    color: rgba(77, 77, 77, 1);
    letter-spacing: 0.5px;
  }
  &-wrapper .mountains {
    color: #414f6b;
    letter-spacing: 1.8px;
  }
}
// ====================== Responsive Design ===============================
@media (max-width: 500px) {
  .nav-menu {
    padding-top: 5%;
  }
  .logo-headline {
    margin-left: 5%;
  }
  .hamburger {
    cursor: pointer;
    margin-right: 5%;
    z-index: 2;
  }
  .line {
    width: 30px;
    height: 3px;
    background: #414f6b;
    margin: 5px;
  }
  .ul-menu {
    position: fixed;
    background: rgba(255, 255, 255, 0.9);
    height: 100vh;
    width: 100%;
    margin-top: 25%;
    flex-direction: column;
    align-items: center;
    clip-path: circle(100px at 40% -20%);
    -webkit-clip-path: circle(100px at 90% -20%);
    transition: all 1s ease-out;
    pointer-events: none;
  }
  .ul-menu.open {
    clip-path: circle(1005px at 40% -10%);
    -webkit-clip-path: circle(1005px at 90% -10%);
    pointer-events: all;
  }
  .ul-menu li {
    padding-top: 80px;
  }
  .ul-menu li a {
    color: black;
  }
  .ul-menu li a:after {
    border-bottom: 1px solid black;
  }
}
/*  ==================== Smartphones in landscape mode  ==================== */
@media (min-width: 414px) and (max-width: 920px) and (orientation: landscape) {
  .nav-menu {
    height: 8vh;
  }
  #logo {
    padding-top: 10px;
    padding-left: 10px;
  }
}
</style>