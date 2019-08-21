<template>
    <div>
    <Header/>
    <div class="planets">
        <h1>Popular Planets</h1>
        <div class="flex-container">
            <div class="planet" v-for="(planet, index) in planets" v-if="index <= 2" :key="index" >
              <img alt="planet-img" :src="planet.imgUrl"/>
              <span>{{planet.name}}</span>
            </div>       
        </div>
        <div class="navigation">
          <button @click="loadPreviousPage" :disabled="allPlanetsFromAPI['previous']===null">prev</button> 
          <button @click="loadNextPage" :disabled="allPlanetsFromAPI['next']===null" >next</button>
        </div>
         
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

<style scoped>
.planets {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
}
h1 {
  color: rgb(34, 33, 33);
  margin-bottom: none;
}
hr {
  width: 100px;
  height: 6px;
  background-color: rgb(34, 33, 33);
  padding-top: none;
}
.flex-container {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
}
.planet{
  flex: 0 0 300px;
  padding: 10px;
  box-sizing: border-box;
  margin: 20px;
  background-color: rgba(221, 220, 220, 0.521);
  border: 1px solid rgb(34, 33, 33)
}
.planet span{
  color: rgb(34, 33, 33)
}
img{
  height: 300px;
  width: 300px;
}
.navigation{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
}
.navigation button{
  border: none;
  color: rgb(203, 221, 221);
  background-color: rgb(93, 93, 148);
  padding: 10px 15px;
  margin: 10px;
  border-radius: 5px;
}
</style>
