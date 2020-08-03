<template>
  <div id="map"></div>
</template>

<script>
import wifis from "../assets/wifi.json";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-graphhopper";
import "leaflet.fullscreen";
import { mapState } from "vuex";

export default {
  name: "Map",
  data() {
    return {
      map: {},
      isLocatedView: Boolean,
    };
  },
  mounted() {
    this.isLocatedView =
      this.$route.fullPath === "/carte-wifi-localisation" ? true : false;

    // Workaround no marker icon :
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });

    // Init map :
    var map = L.map("map", { fullscreenControl: true, zoomControl: false });
    map.setView([this.location.latitude, this.location.longitude], 14);

    // Zoom in after some time and show popups :
    this.isLocatedView
      ? setTimeout(() => {
          map.fitBounds(
            [
              [this.location.latitude, this.location.longitude],
              [
                this.closestWifi.geo_point_2d[0],
                this.closestWifi.geo_point_2d[1],
              ],
            ],
            { padding: [100, 100] }
          );
          userPositionMarker.openPopup();
          setTimeout(() => {
            closestWifiMarker.openPopup();
            setTimeout(() => {
              closestWifiMarker.closePopup();
            }, 3000);
          }, 2000);
        }, 2500)
      : null;

    // Set tiles provider
    L.tileLayer(
      "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 20,
        attribution:
          '&copy; Contributeurs <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
      }
    ).addTo(map);

    // Zoom controls in french
    L.control
      .zoom({ zoomInTitle: "Zoomer", zoomOutTitle: "Dézoomer" })
      .addTo(map);
    this.map = map;

    // Set markers :
    var positionIcon = L.icon({
      iconUrl: require("../assets/icons/position-marker.png"),
      iconSize: [35, 40],
      iconAnchor: [18, 40],
    });
    var wifiIcon = L.icon({
      iconUrl: require("../assets/icons/wifi-closest-marker.png"),
      iconSize: [35, 40],
      iconAnchor: [18, 40],
    });
    var otherWifiIcon = L.icon({
      iconUrl: require("../assets/icons/wifi-other-marker.png"),
      iconSize: [28, 32],
      iconAnchor: [12, 20],
    });

    // User Position marker :
    let userPositionMarker = this.isLocatedView
      ? L.marker([this.location.latitude, this.location.longitude], {
          icon: positionIcon,
          title: "Vous êtes ici !",
        })
          .bindPopup("<strong>Vous êtes ici</string>")
          .addTo(map)
      : null;

    // Nearest Wifi marker :
    let closestWifiMarker = this.isLocatedView
      ? L.marker(
          [this.closestWifi.geo_point_2d[0], this.closestWifi.geo_point_2d[1]],
          {
            icon: wifiIcon,
            title: "Wifi le plus proche de votre position",
          }
        )
          .bindPopup(
            `
                <p style="text-align: center;"><strong>Wifi le plus proche</strong></p>
                <strong>Adresse</strong> : ${this.closestWifi.adresse}<br>
                <strong>Site</strong> : ${this.closestWifi.site}<br>
                <strong>Localisation</strong> : ${this.closestWifi.zone_emission}<br>
                <strong>Disponibilité</strong> : ${this.closestWifi.disponibilite}
            `
          )
          .addTo(map)
      : null;

    // Other wifis markers / all wifis
    let wifiList = this.isLocatedView
      ? this.otherWifis
      : wifis.map((w) => w.fields);

    wifiList.forEach((wifi) => {
      L.marker([wifi.geo_point_2d[0], wifi.geo_point_2d[1]], {
        icon: otherWifiIcon,
      })
        .bindPopup(
          `
                <strong>Adresse</strong> : ${wifi.adresse}<br>
                <strong>Site</strong> : ${wifi.site}<br>
                <strong>Localisation</strong> : ${wifi.zone_emission}<br>
                <strong>Disponibilité</strong> : ${wifi.disponibilite}
            `
        )
        .addTo(map);
    });
  },
  computed: {
    ...mapState(["location", "closestWifi", "otherWifis"]),
  },
};
</script>

<style>
#map {
  height: 500px;
}
</style>
