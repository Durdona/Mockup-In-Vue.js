<template>
  <!-- ===================== History Page #2 ===================== -->
  <div id="history">
    <div class="container">
      <header class="history-menu-wrapper">
        <Menu :nav-links="navLinks" />
      </header>
    </div>
    <article class="history">
      <div class="history-overlay">
        <div class="container history-headline-container">
          <div class="history-headline">
            <span class="history-title-number">01.</span>
            <span class="history-title">history</span>
          </div>

          <p class="history-story">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quam corrupti
            ullam minus nobis suscipit culpa quos excepturi! Recusandae laudantium similique ut incidunt nemo
            natus quam numquam, non enim eius, quaerat voluptas doloribus tenetur voluptatem consequatur rerum,
            vitae minima excepturi? Expedita aliquam voluptates illo ipsam minus nobis suscipit culpa quos
            exceptur m, dolor sit amet consectei suscipit?
          </p>
        </div>

        <div id="carousel">
          <!-- Carousel -->
          <div class="container">
            <div class="swiper-container">
              <swiper class="swiper-wrapper" :options="swiperOption">
                <swiper-slide class="swiper-slide one"></swiper-slide>
                <swiper-slide class="swiper-slide two"></swiper-slide>
                <swiper-slide class="swiper-slide three"></swiper-slide>
                <swiper-slide class="swiper-slide four"></swiper-slide>
                <swiper-slide class="swiper-slide five"></swiper-slide>
                <swiper-slide class="swiper-slide six"></swiper-slide>
                <swiper-slide class="swiper-slide seven"></swiper-slide>
                <swiper-slide class="swiper-slide eight"></swiper-slide>
                <swiper-slide class="swiper-slide nine"></swiper-slide>
                <swiper-slide class="swiper-slide ten"></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import Menu from "./Menu";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import Swiper from "swiper";
import "swiper/css/swiper.css";

export default {
  name: "History",
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 50,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
      },
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
  components: { Menu, Swiper, SwiperSlide },
};
</script>

<style  lang="scss">
#history .history-menu-wrapper .ul-menu li a {
  color: #414f6b;
  &:hover {
    color: blue;
  }
  &:after {
    border-bottom: 1px solid #414f6b;
  }
  &:hover:after {
    border-bottom: 1px solid blue;
  }
}
#history .history-menu-wrapper .logo-headline-wrapper {
  display: flex;
}
.history {
  background: url("../assets/peak.png") no-repeat;
  background-position: top center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  &-overlay {
    background-color: rgba(255, 255, 255, 0.07);
    backdrop-filter: hue-rotate(30deg);
    height: 100vh;
    overflow: hidden;
  }
  &-headline {
    position: relative;
  }
  &-title-number {
    font-size: 12rem;
    font-family: "Oswald", sans-serif;
    letter-spacing: -1px;
    /* color: #414f6b; */
    color: rgba(65, 79, 107, 0.5);
    padding-left: 2%;
  }
  &-title {
    position: absolute;
    font-family: "Oswald", sans-serif;
    text-transform: uppercase;
    font-size: 3rem;
    color: #414f6b;
    bottom: 80px;
    left: 214px;
  }
  &-story {
    line-height: 1.5rem;
    padding: 0 10%;
    margin-top: -40px;
  }
}
/* =========================== Carousel  ======================== */
#carousel {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 23vh;
  background: rgba(65, 79, 107, 0.7);
  width: 100vw;
  overflow: hidden;
}
.swiper-container {
  margin-top: 8px;
  height: 21vh;
  width: 100%;

  .one,
  .three,
  .five,
  .seven,
  .nine {
    background: url("../assets/thumbnail.jpg") no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
  }
  .two,
  .four,
  .six,
  .eight,
  .ten {
    background: url("../assets/thumbnail1.jpg") no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
  }
}
:root {
  --swiper-theme-color: lightgrey !important;
}

// ====================== Responsive Design ===============================
@media (max-width: 500px) {
  #history .container {
    padding: 0;
  }
  #history .hamburger {
    display: none;
  }
  #history header .nav-menu {
    padding-top: 0;
    height: 16vh;
  }
  .history-headline {
    padding-bottom: 0;
    margin-top: -10%;
  }
  .history-title {
    left: 170px;
    bottom: 72px;
    color: rgba(65, 79, 107, 0.9);

    &-number {
      font-size: 10.5rem;
    }
  }
  .history-story {
    background: rgba(255, 255, 255, 0.5);
    padding: 20px 4%;
    margin-top: -25px;
  }
}

/*  ==================== Smartphones in landscape mode  ==================== */
@media (min-width: 414px) and (max-width: 920px) and (orientation: landscape) {
  #history header .nav-menu {
    padding-top: 0;
    justify-content: center;
    height: 28vh;
  }
  .history-title-number {
    font-size: 10rem;
    position: absolute;
  }
  .history-title {
    left: 167px;
    position: absolute;
    top: 98px;
    color: rgba(65, 79, 107, 0.5);
  }
  .history-story {
    background: rgba(255, 255, 255, 0.5);
    padding-top: 5.5%;
    margin-top: -3%;
    line-height: 1.4rem;
    height: 74%;
  }
  .history-headline {
    padding-bottom: 0;
  }
  #carousel {
    height: 34vh;
  }
  .swiper-container {
    height: 30vh;
    // overflow-y: hidden;
  }
  .swiper-wrapper {
    margin-top: 0px;
  }
  .swiper-slide {
    height: auto;
  }
}
</style>