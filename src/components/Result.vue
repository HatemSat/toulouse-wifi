<template>
  <div class="hero-body">
    <div class="container">
      <div class="notification has-text-centered">
        <button @click="closeNotification" class="delete"></button>
        <h1 class="title is-4 has-text-weight-bold">Wifi le plus proche :</h1>
        <span class="has-text-left">
          <h2>
            <strong>Adresse</strong>
            : {{ closestWifi.adresse }},
            {{ closestWifi.zone_emission }}
          </h2>
          <h2>
            <strong>Lieu</strong>
            : {{ closestWifi.site }}
          </h2>
          <h2>
            <strong>Disponibilité</strong>
            :
            {{ closestWifi.disponibilite }}
          </h2>
          <h2>
            <strong>Nom du réseau</strong>
            :
            {{ closestWifi.nom_connexion }}
          </h2>
        </span>
        <br />
        <button @click="goToMap" class="button is-normal is-outlined is-rounded">
          <span class="icon is-medium">
            <i class="fa fa-map"></i>
          </span>
          <span>Carte</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Result",
  methods: {
    closeNotification() {
      this.$router.push("/accueil");
    },
    goToMap() {
      this.$router.push("/carte-wifi-localisation");
    },
  },
  computed: {
    ...mapState(["closestWifi"]),
  },
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .notification {
    width: 50%;
    margin: 0 auto;
  }
}
.notification {
  -webkit-box-shadow: -1px 6px 9px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 6px 9px -4px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 6px 9px -4px rgba(0, 0, 0, 0.75);
}
.delete {
  background-color: #190072c9;
}
.delete:hover {
  background-color: #afafaf;
}
.button {
  background-color: #190072c9;
  color: white;
  opacity: 0.8;
}
.button:hover {
  opacity: 1;
  color: white;
}
</style>
