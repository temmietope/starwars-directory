import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import CharactersIndex from "./components/Characters/index.vue";
import StarshipsIndex from "./components/Starships/index.vue";
import PlanetsIndex from "./components/Planets/index.vue";

Vue.use(Router);

Vue.config.productionTip = false;

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/starships/",
      name: "StarshipsIndex",
      component: StarshipsIndex,
      // props: true
    },
    {
      path: "/characters",
      name: "CharactersIndex",
      component: CharactersIndex
    },
    {
      path: "/planets",
      name: "PlanetsIndex",
      component: PlanetsIndex
    }
  ]
});