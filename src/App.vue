<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import CharactersIndex from "./components/Characters/index.vue";
import StarshipsIndex from "./components/Starships/index.vue";
import PlanetsIndex from "./components/Planets/index.vue";
export default {
  name: "App",
  components: {
    Home, 
    CharactersIndex,
    StarshipsIndex,
    PlanetsIndex,
  },
};
</script>

<style>
#app {
    font-family: "Artifika";
    text-align: center;


  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0; */
}
</style>
