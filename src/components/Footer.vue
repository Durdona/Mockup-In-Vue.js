<template>
  <footer>
    <div class="container">
      <header>
        <nav class="nav-menu">
          <div class="logo-headline">
            <div id="logo">
              <img src="../assets/logo-footer.svg" alt />
            </div>
            <div class="logo-headline-wrapper">
              <span class="losangeles">Losangeles</span>
              <span class="mountains">Mountains</span>
            </div>
          </div>

          <span class="footer-copyright">copyright 2020. all rights reserved</span>
        </nav>
      </header>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" >
footer {
  background: rgba(65, 79, 107, 0.9);
}
.footer-copyright {
  text-transform: uppercase;
  font-size: 8px !important;
  font-style: italic;
  color: #63769d;
  font-weight: bold;
  letter-spacing: 1px;
}
.logo-headline-wrapper {
  display: flex;
  flex-flow: column;
  padding-left: 4%;
  text-transform: uppercase;
  font-family: "Bebas Neue", cursive;
  font-size: 2rem;
  line-height: 2rem;
  & .losangeles,
  & .mountains {
    color: #63769d;
  }
}
</style>