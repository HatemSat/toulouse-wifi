<template>
  <div>
    <Navbar></Navbar>
    <section class="hero is-fullheight background">
      <slot></slot>
    </section>
    <Cookies v-if="!isCookiesAccepted"></Cookies>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Cookies from "@/components/Cookies.vue";
import { mapState } from "vuex";

export default {
  name: "Layout",
  components: {
    Navbar,
    Footer,
    Cookies,
  },
  beforeMount() {
    if (localStorage.isCookiesAccepted) {
      this.$store.commit("closeCookieBox");
    }
  },
  methods: {},
  computed: {
    ...mapState(["isMainBackground", "isCookiesAccepted"]),
  },
};
</script>

<style scoped>
.hero {
  background-size: cover;
  background-position: 26% top;
}
.background {
  background-image: url("../assets/images/toulouse_bridge_compress_75_38.jpg");
}
.backgroundGrey {
  background-color: #c9d9f2;
}
</style>
