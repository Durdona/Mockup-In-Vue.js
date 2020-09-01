<template>
  <!-- ===================== Climb Page #3 ===================== -->
  <section id="climb">
    <div class="container">
      <div class="climb-header">
        <div class="climb-headline">
          <span class="climb-title-number">02.</span>
          <span class="climb-title">climb</span>
        </div>

        <p class="climb-paragraph">
          Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis
          hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
        </p>
      </div>
    </div>

    <div class="climb-tab-background">
      <div class="container">
        <ul class="climb-tab-menu">
          <li
            class="tab"
            @click="changeActiveTab(1)"
            :class="[activetab ===1 ? 'active' : '']"
          >mountain 1</li>
          <li
            class="tab"
            @click="changeActiveTab(2)"
            :class="[activetab ===2 ? 'active' : '']"
          >mountain 2</li>
        </ul>
      </div>
    </div>

    <div class="climb-background">
      <div class="container">
        <div class="tab-content">
          <div id="mountain1" v-if="activetab === 1">
            <div class="mountain1-background">
              <h1>schedule</h1>
              <div id="mountain1-content">
                <div class="dates">
                  <p>25 Nov 2016</p>
                  <p>28 Nov 2016</p>
                  <p>18 Dec 2016</p>
                  <p>17 Feb 2017</p>
                </div>
                <div class="location">
                  <p>Tulsa, OK</p>
                  <p>Reno, NV</p>
                  <p>Neile, CO</p>
                  <p>Reno, OR</p>
                </div>
              </div>
            </div>
          </div>

          <div id="mountain2" v-if="activetab === 2">
            <div class="mountain2-background">
              <h1>schedule</h1>
              <div id="mountain2-content">
                <div class="dates">
                  <p>15 Nov 2016</p>
                  <p>12 Dec 2016</p>
                  <p>17 Dec 2016</p>
                  <p>27 Feb 2017</p>
                </div>
                <div class="location">
                  <p>Reno, NV</p>
                  <p>Tulsa, OK</p>
                  <p>Reno, OR</p>
                  <p>Neile, CO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activetab: 1,
    };
  },
  methods: {
    changeActiveTab(num) {
      this.activetab = num;
    },
  },
};
</script>

<style lang="scss">
.climb-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25vh;
}
.climb-headline {
  position: relative;
}
.climb-title {
  position: absolute;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-size: 3rem;
  color: #414f6b;
  bottom: 80px;
  left: 215px;

  &-number {
    font-size: 12rem;
    font-family: "Oswald", sans-serif;
    letter-spacing: -1px;
    padding-left: 2%;
    color: rgba(65, 79, 107, 0.5);
  }
}
.climb-paragraph {
  width: 70%;
  padding-right: 5%;
  padding-left: 5%;
  line-height: 1.5rem;
}
//  ++++++++++++++++++++ Building Tab ++++++++++++++++++++
.climb-background {
  background: url("../assets/climb_background.jpg") no-repeat;
  background-position: center center;
  background-size: cover;
  height: 70vh;
}
.climb-tab-background {
  background: rgba(65, 79, 107, 0.9);
}
.climb-tab-menu {
  font-family: "Bebas Neue", cursive;
  text-transform: uppercase;
  font-size: 2rem;
  color: lightgrey;
  display: flex;
  flex-flow: row;
  /* justify-content: space-around; */
  & li {
    list-style: none;
    padding: 5px 20px;
    position: relative;
    letter-spacing: 1px;
  }
  & li:after {
    content: "";
    border-bottom: 1px solid rgba(65, 79, 107, 0.9);
    position: absolute;
    bottom: 8px;
    left: 18px;
    width: 78%;
  }
  & li:hover {
    background-color: lightgrey;
    color: rgba(65, 79, 107, 0.9);
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }
  & li:hover:after {
    content: "";
    border-bottom: 1px solid rgba(65, 79, 107, 0.9);
    position: absolute;
    bottom: 8px;
    left: 18px;
    width: 78%;
    transition: all 0.5s ease-in-out;
  }
  & li.active {
    background-color: lightgrey;
    color: rgba(65, 79, 107, 0.9);
  }
}
#mountain1,
#mountain2 {
  padding-top: 10%;
}
.mountain1-background,
.mountain2-background {
  background-color: rgba(255, 255, 255, 0.5);
  width: 35%;
  padding: 30px;
}
h1 {
  font-size: 3rem;
  text-transform: uppercase;
  color: #414f6b;
  font-family: "Bebas Neue", cursive;
  letter-spacing: 1.5px;
}
#mountain1-content,
#mountain2-content {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 70%;
  line-height: 2.5rem;
  font-size: 1.3rem;
}
// ====================== Responsive Design ===============================
@media (max-width: 500px) {
  .climb-header {
    display: inline-block;
    height: auto;
  }
  .climb-title-number {
    font-size: 10.5rem;
  }
  .climb-title {
    color: rgba(65, 79, 107, 0.9);
    bottom: 70px;
    left: 190px;
  }
  .climb-paragraph {
    padding: 5%;
    border-radius: 7px;
    width: 100%;
    margin-top: -10px;
    margin-bottom: 10px;
    line-height: 1.4rem;
  }
  .climb-tab-menu {
    justify-content: space-evenly;
  }
}

/*  ==================== Smartphones in landscape mode  ==================== */
.mountain1-background,
.mountain2-background {
  margin: auto;
  width: 70%;
}
#mountain1-content,
#mountain2-content {
  margin: auto;
  padding-top: 0;
  line-height: 2rem;
}
h1 {
  text-align: center;
}
.climb-title-number {
  font-size: 10rem;
}
.climb-title {
  bottom: 66px;
  left: 175px;
}
.climb-header {
  height: 57%;
}
.climb-paragraph {
  width: 55%;
  margin-top: 40px;
  font-size: 1rem;
}
#mountain1,
#mountain2 {
  padding-top: 2%;
  // line-height: 2.5rem;
}
.climb-tab-menu {
  justify-content: normal;
  width: 70%;
  margin: auto;
}
</style>