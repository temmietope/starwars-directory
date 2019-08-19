<template>
    <div>
    <Header/>
    <div class="all-planets">
        <h1>Popular Planets</h1>
        <div class="all-planets" v-for="(planet, index) in planets" :key="index">
            <div>
                <img alt="planet-img" :src="planet.imgUrl"/>
                <p>Name: {{planet.name}}</p>
                <p>Temperature: {{planet.climate}}</p>
                <p>Population: {{planet.population}}</p>
           <router-link :to="{ name: 'Details', params: {moreDetails: planet, arrayList:planets, index: index }  }"><span>{{planet.name}}</span></router-link>
            </div>
        </div>
        <button @click="loadPreviousPage" :disabled="allPlanetsFromAPI['previous']===null">prev</button> 
        <button @click="loadNextPage" :disabled="allPlanetsFromAPI['next']===null" >next</button> 
    </div>
</div>
</template>

<script>
import Header from "../Header.vue";
export default {
  name: "PlanetsIndex",
  components: { Header },
  data() {
    return {
      planets: [],
      allPlanetsFromAPI: ""
    };
  },
  methods: {
    async allPlanets() {
      const res = await fetch("https://swapi.co/api/planets/?format=json");
      const resultsFromAPI = await res.json();
      this.allPlanetsFromAPI = resultsFromAPI;
      let planetsA = resultsFromAPI.results;
      planetsA.forEach(a => {
        a.imgUrl = this.getImageUrl();
      });
      this.planets = planetsA;
    },
    async loadNextPage() {
      let nextPage = this.allPlanetsFromAPI["next"];
      const res = await fetch(nextPage);
      const resultsFromAPI = await res.json();
      this.allPlanetsFromAPI = resultsFromAPI;
      let planetsA = resultsFromAPI.results;
      planetsA.forEach(a => {
        a.imgUrl = this.getImageUrl();
      });
      this.planets = planetsA;
    },
    async loadPreviousPage() {
      let previousPage = this.allPlanetsFromAPI["previous"];
      const res = await fetch(previousPage);
      const resultsFromAPI = await res.json();
      this.allPlanetsFromAPI = resultsFromAPI;
      let planetsA = resultsFromAPI.results;
      planetsA.forEach(a => {
        a.imgUrl = this.getImageUrl();
      });
      this.planets = planetsA;
    },
    getImageUrl() {
      let rand = Math.round(Math.random(2));
      const planet1 = require("../../assets/planet-1.jpg");
      const planet2 = require("../../assets/planet-2.jpg");
      const planet3 = require("../../assets/planet-3.jpg");
      const planetImageUrl = [planet1, planet2, planet3];
      return planetImageUrl[rand];
    }
  },
  mounted() {
    this.allPlanets();
    this.getImageUrl();
  }
};
</script>
