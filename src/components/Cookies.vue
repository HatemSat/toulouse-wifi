<template>
  <div class="cookie notification">
    <button @click="close" class="delete"></button>
    <div class="container">
      <p>
        En poursuivant votre navigation sur ce site, vous acceptez
        l’utilisation de cookies pour vous proposer une navigation
        fluide en réalisant des statistiques de visites.
        <router-link class="has-text-weight-bold" to="/cookies-confidentialite">En savoir plus</router-link>
        <button @click="close" class="button is-info is-small">OK</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$store.commit("closeCookieBox");
      localStorage.isCookiesAccepted = true;
    },
  },
};
</script>

<style scoped>
.button {
  margin-left: 5px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cookie {
  display: flex;
  z-index: 10;
  bottom: 0vh;
  position: fixed;
  width: 100%;
  background-color: rgb(0, 0, 0);
  color: white;
  box-sizing: border-box;
  margin-bottom: 0px !important;
}
</style>
