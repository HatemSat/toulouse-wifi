<template>
  <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div class="navbar-brand" :class="{ whiteoverlay: toggleWhite }">
      <router-link class="navbar-item" to="/accueil">
        <a class="button is-outlined is-hoverable is-rounded is-primary logo-button">
          <span class="icon is-small">
            <img :src="wifi" class="wifi-icon" alt="wifi icon" />
          </span>
          <strong>Wifi Toulouse</strong>
        </a>
      </router-link>
      <a
        v-on:click="toggleBurger"
        :class="{ 'is-active': this.$store.state.burgerVisible }"
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      v-on:click="toggleBurger"
      class="navbar-menu"
      :class="{
                'is-active': this.$store.state.burgerVisible,
                'whiteoverlay': toggleWhite,
            }"
    >
      <div class="navbar-start">
        <router-link class="navbar-item has-text-black has-text-weight-bold" to="/accueil">
          <i class="fa fa-home"></i>
        </router-link>
        <router-link class="navbar-item has-text-black has-text-weight-bold" to="/accueil">Accueil</router-link>
        <router-link
          class="navbar-item has-text-black has-text-weight-bold"
          to="/carte-wifi"
        >Carte des wifis</router-link>
      </div>

      <div class="navbar-end"></div>
    </div>
    <div ref="backdrop" class="backdrop hide" @click="toggleBurger"></div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import wifi from "@/assets/icons/wifi-logo-orange.svg";

export default {
  data() {
    return {
      wifi: wifi,
    };
  },
  methods: {
    toggleBurger() {
      if (window.matchMedia("(max-width: 1024px)").matches) {
        this.$store.commit("toggleBurger");
        this.toggleBackdrop();
      }
    },
    toggleBackdrop() {
      this.$refs.backdrop.classList.toggle("hide");
    },
  },
  computed: {
    ...mapState(["burgerVisible"]),
    toggleWhite() {
      return this.burgerVisible ? true : null;
    },
  },
};
</script>

<style lang="scss" scoped>
.hide {
  display: none;
}
.whiteoverlay {
  background-color: #ede9e9;
}
.backdrop {
  background-color: rgba(87, 87, 87, 0.534);
  z-index: 2;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
}
.logo-button {
  color: black !important;
  border: 1px solid black !important;
  &:hover {
    color: #d65600 !important;
    background-color: transparent !important;
  }
}

.navbar-item:hover {
  color: #d65600 !important;
}
.wifi-icon {
  width: 1.3rem;
}
.navbar {
  position: absolute;
  width: 100%;
  background-color: rgba(197, 197, 197, 0);
}
.navbar-brand {
  z-index: 3;
  position: relative;
}
.navbar-menu {
  z-index: 50;
}
.fa-home {
  font-size: 1.5rem;
}

@media screen and (max-width: 1023px) {
  .navbar {
    border-bottom: none;
  }
  .navbar-menu {
    display: block;
    transform: translateX(100%);
    width: 100% !important;
    transition: all 0.2s ease-in-out;
    position: absolute;
    box-shadow: 0 13px 16px -10px rgba(10, 10, 10, 0.1) !important;
  }
  .navbar-item:hover,
  .navbar-item:focus {
    background-color: rgb(173, 173, 173);
    color: black !important;
  }
  .navbar-menu.is-active {
    transform: translateX(0%);
  }
  .burger span{
    height: 2px;
  }
}
</style>
