<template>
  <div id="app">
    <Layout>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </Layout>
  </div>
</template>
<script>
import Home from "@/views/Home.vue";
import Layout from "@/views/Layout.vue";

export default {
  components: {
    Home,
    Layout,
  },
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
