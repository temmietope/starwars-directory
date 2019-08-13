<template>
<div>
    <h1>Popular Starships</h1>
    <div v-for="(starship, index) in starships" :key="index">
        {{starship.name}}
       <!-- <img alt="starship-img" :src="getImgUrl(index+1)"/>
              <span>The {{starship.name}} is of the model {{starship.model}} and was manufactured by {{starship.manufacturer}}.</span>
              <button>Read More</button> -->
    </div>
   <button @click="loadPreviousPage" :disabled="allStarshipsFromAPI['previous']===null">prev</button> <button @click="loadNextPage" :disabled="allStarshipsFromAPI['next']===null" >next</button>
</div>
</template>

<script>
export default {
  name: "StarshipsIndex",
  data() {
    return {
      starships: [],
      allStarshipsFromAPI: ""
    };
  },
  methods: {
    async allStarships() {
      const res = await fetch("https://swapi.co/api/starships/?format=json");
      const resultsFromAPI = await res.json();
      this.allStarshipsFromAPI = resultsFromAPI;
      this.starships = resultsFromAPI.results;
    },
    async loadNextPage() {
      let nextPage = this.allStarshipsFromAPI["next"];
      const res = await fetch(nextPage);
      const resultsFromAPI = await res.json();
      this.allStarshipsFromAPI = resultsFromAPI;
      this.starships = resultsFromAPI.results;
    },
    async loadPreviousPage() {
      let previousPage = this.allStarshipsFromAPI["previous"];
      const res = await fetch(previousPage);
      const resultsFromAPI = await res.json();
      this.allStarshipsFromAPI = resultsFromAPI;
      this.starships = resultsFromAPI.results;
    }
  },
  mounted() {
    this.allStarships();
  }
};
</script>
