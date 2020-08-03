<template>
  <div class="container has-text-centered">
    <h1 class="title has-text-info has-text-weight-bold is-size-3">Trouvez un wifi à proximité</h1>

    <button
      v-on:click="getClosestWifi"
      :class="{ 'is-loading': loading }"
      class="button is-primary is-rounded has-text-weight-bold"
    >À partir de ma position</button>
    <Modal v-on:close="closeModal" v-bind:isModalOpen="isModalOpen" :message="message" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Modal from "@/components/Modal.vue";
export default {
  name: "Main",
  components: {
    Modal,
  },
  data() {
    return {
      isModalOpen: false,
      message: "",
    };
  },
  computed: {
    ...mapState(["closestWifi", "loading"]),
  },

  methods: {
    getClosestWifi() {
      this.$store
        .dispatch("getClosestWifi")
        .then(() => this.$router.push("wifi-proche"))
        .catch((err) => {
          err.code === 1
            ? (this.message = `<h1 class="title is-4">Géolocalisation refusée</h1> <p>Votre autorisation est 
                        nécéssaire pour trouver le wifi le plus proche de votre position.</p>`)
            : (this.message = `<h1 class="title is-4">Échec de la géolocalisation</h1>
                              <p>Position non disponible ou délai dépassé.</p>`);
          this.isModalOpen = true;
        });
    },
    closeModal() {
      this.isModalOpen = !this.isModalOpen;
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 1024px) {
  .title.has-text-info {
    margin-bottom: 72px;
  }
}
.button {
  background-color: #190072c9 !important;
  opacity: 0.8;
}
.button:hover {
  border: 1px solid black !important;
  background-color: #190072c9 !important;
  opacity: 1;
}
</style>
