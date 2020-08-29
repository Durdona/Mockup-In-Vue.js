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
            ullam minus nobis
            suscipit culpa quos excepturi! Recusandae laudantium similique ut incidunt nemo natus quam numquam,
            non enim eius, quaerat voluptas doloribus tenetur voluptatem consequatur rerum, vitae minima
            excepturi? Expedita provident vel saepe dolores optio aliquam voluptates illo ipsam? Natus, rerum
            earum nostrum, aliquam iste veritatis quis recusandae beatae, vitae. Eligendi quae perspiciatis.
            Animi qui omnis sit, voluptate eaque nam ea nisi doloribus exercitationem ipsum ex ipsa ipsum!
          </p>
        </div>

        <div id="carousel">
          <!-- Carousel -->
          <div class="container">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide one"></div>
                <div class="swiper-slide two"></div>
                <div class="swiper-slide three"></div>
                <div class="swiper-slide four"></div>
                <div class="swiper-slide five"></div>
                <div class="swiper-slide six"></div>
                <div class="swiper-slide seven"></div>
                <div class="swiper-slide eight"></div>
                <div class="swiper-slide nine"></div>
                <div class="swiper-slide ten"></div>
              </div>
              <!-- Add Pagination -->
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import Menu from "./Menu";
export default {
  name: "History",
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
  components: { Menu },
};
</script>

<style  lang="scss"  >
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
</style>