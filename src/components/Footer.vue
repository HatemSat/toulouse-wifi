<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <div class="columns is-gapless">
        <div class="column">
          <router-link class="has-text-weight-bold" to="/mentions-legales">Mentions légales</router-link>
          <span>&nbsp;|&nbsp;</span>
          <router-link class="has-text-weight-bold" to="/cookies-confidentialite">Confidentialité</router-link>
        </div>
        <div class="column">
          <p class="has-text-weight-bold">
            {{ new Date().getFullYear() }} ~
            Hatem Satouri
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
a {
  color: white;
}
a:hover {
  color: #d65600;
}
.footer {
  background-color: rgba(0, 0, 0, 0.726) !important;
  color: rgb(255, 255, 255);
  border-top: 1px solid rgb(0, 0, 0);
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
  bottom: 0vh;
  width: 100%;
  position: fixed;
  font-size: 0.8rem;
  z-index: 5;
  box-sizing: border-box;
}
@media only screen and (max-width: 1024px) {
  .pdc {
    display: block;
  }
}
</style>
