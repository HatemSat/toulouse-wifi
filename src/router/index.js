import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Viewmap from "../components/Viewmap.vue";
import Result from "../components/Result.vue";
import Confidentialite from "../components/Confidentialite.vue";
import Mentions from "../components/Mentions.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/accueil",
        name: "Home",
        component: Home,
    },
    {
        path: "/carte-wifi-localisation",
        name: "CarteWifiLocalisation",
        component: Viewmap,
    },
    {
        path: "/carte-wifi",
        name: "CarteWifi",
        component: Viewmap,
    },
    {
        path: "/wifi-proche",
        name: "Result",
        component: Result,
    },
    {
        path: "/mentions-legales",
        name: "MentionsLegales",
        component: Mentions,
    },
    {
        path: "/cookies-confidentialite",
        name: "CookiesConfidentialite",
        component: Confidentialite,
    },
    {
        path: "*",
        redirect: "/accueil",
        name: "HomeRedirect",
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
