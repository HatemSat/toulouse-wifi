<template>
  <div class="container">
    <div class="card">
      <div class="card-image">
        <div id="map-container">
          <Map />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "@/components/Map.vue";

export default {
  name: "Viewmap",
  components: {
    Map,
  },
};
</script>

<style scoped lang="scss">
.card {
  z-index: 0;
}
.container {
  display: flex;
  align-items: center;
}
#map-container {
  height: 50vh;
  width: 95vw;
  padding: 5px;
}
@media screen and (min-width: 1024px) {
  #map-container {
    height: 80vh;
    width: 70vw;
  }
}
#map {
  height: 100%;
  width: 100%;
}
.back {
  padding: 5px;
  &:hover {
    color: #d65600 !important;
  }
}
.delete {
  background-color: #190072c9;
}
.delete:hover {
  background-color: #afafaf;
}
</style>
