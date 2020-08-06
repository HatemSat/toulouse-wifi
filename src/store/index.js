import Vue from "vue";
import Vuex from "vuex";
import * as help from "../helpers/position.js";
import wifis from "../assets/wifi2.json";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        burgerVisible: false,
        located: false,
        loading: false, // show loader during geolocation
        closestWifi: {},
        location: { latitude: 43.6006999, longitude: 1.432841 }, // user position after geolocation (lat,long) / default : Toulouse center
        otherWifis: [],
        isCookiesAccepted: false,
    },
    mutations: {
        toggleBurger(state) {
            state.burgerVisible = !state.burgerVisible;
        },
        toggleLoading(state) {
            state.loading = !state.loading;
        },
        updateLocation(state, payload) {
            state.location = payload.location;
            state.closestWifi = { ...payload.closestWifi };
            state.located = true;
        },
        updateOtherWifis(state, otherWifis) {
            state.otherWifis = [...otherWifis];
        },
        closeCookieBox(state) {
            state.isCookiesAccepted = !state.isCookiesAccepted;
        },
    },
    actions: {
        async getClosestWifi() {
            return new Promise((resolve, reject) => {
                let longitude, latitude, closestWifi;
                this.commit("toggleLoading");
                help.getGeoLocation()
                    .then((obs) => {
                        longitude = obs.coords.longitude;
                        latitude = obs.coords.latitude;
                        closestWifi = help.closestSpotFrom(latitude, longitude);

                        this.commit("updateLocation", {
                            closestWifi,
                            location: { latitude, longitude },
                        });

                        resolve();
                    })
                    .catch((err) => {
                        // Throw geolocation error
                        reject(err);
                    })
                    .finally(() => {
                        this.commit("toggleLoading");
                        this.dispatch("getOtherWifis");
                    });
            });
        },
        getOtherWifis() {
            let otherWifis;

            otherWifis = wifis.filter((wifi) => {
                return wifi.recordid !== this.state.closestWifi.id;
            });

            otherWifis = otherWifis.map((wifi) => {
                return { ...wifi.fields };
            });

            this.commit("updateOtherWifis", otherWifis);
        },
    },
    modules: {},
});
