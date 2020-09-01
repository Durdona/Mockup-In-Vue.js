<template>
  <footer>
    <div class="container">
      <header>
        <nav class="nav-menu">
          <div class="logo-headline">
            <div id="logo">
              <img src="../assets/logo-footer.svg" alt />
            </div>
            <div class="logo-headline-wrapper-footer">
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
.logo-headline-wrapper-footer {
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
// ====================== Responsive Design ===============================
@media (max-width: 500px) {
  //  ------------------ Tab Content ---------------------
  .mountain1-background,
  .mountain2-background {
    width: 100%;
  }
  .mountain1-background h1,
  .mountain2-background h1 {
    margin-top: 10px;
  }
  #mountain1-content,
  #mountain2-content {
    width: 90%;
    height: 55%;
    line-height: 3rem;
    padding-top: 20px;
  }
  //  ------------------ Footer ---------------------
  #history header .nav-menu {
    justify-content: normal;
  }
  .logo-headline {
    justify-content: normal;
  }

  .footer-copyright {
    font-style: normal;
    padding-left: 10px;
    width: 100%;
  }
  footer .nav-menu {
    padding-top: 1%;
    height: auto;
  }
}
/*  ==================== Smartphones in landscape mode  ==================== */
#logo-footer {
  padding-left: 0;
  padding-top: 0;
}
.footer-copyright {
  font-style: normal;
}
footer .nav-menu {
  height: auto;
}

/*  =================== Tablet Others smaller viewport  in portrait mode ===============*/
</style>