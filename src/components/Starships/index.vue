<template>
<div>
    <Header/>
    <div class="all-starships">
        <h1>Popular Starships</h1>
        <div class="all-starships" v-for="(starship, index) in starships" :key="index">
            <div>
                <b-card
                    :title= "starship.name"
                    :img-src= "getImageUrl()"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    The {{starship.name}} is of the model {{starship.model}} and was manufactured by {{starship.manufacturer}}.
                    </b-card-text>

                    <router-link :to="{ name: 'Details', params: {moreDetails: {...starship, imgUrl:getImageUrl()},arrayList:starships}}"><b-button variant="primary">Read More</b-button></router-link>
                </b-card>
            </div>
        </div>
        <button @click="loadPreviousPage" :disabled="allStarshipsFromAPI['previous']===null">prev</button> 
        <button @click="loadNextPage" :disabled="allStarshipsFromAPI['next']===null" >next</button> 
    </div>
</div>
</template>

<script>
import Header from "../Header.vue";
export default {
  name: "StarshipsIndex",
  components: { Header },
  data() {
    return {
      starships: [],
      allStarshipsFromAPI: ""
      // url: this.getImageUrl()
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
    },
    getImageUrl() {
      let rand = Math.round(Math.random(5));
      const starship1 = require("../../assets/starship-1.jpg");
      const starship2 = require("../../assets/starship-2.jpg");
      const starship3 = require("../../assets/starship-3.jpg");
      const starship4 = require("../../assets/starship-4.jpg");
      const starship5 = require("../../assets/starship-5.jpg");
      const starship6 = require("../../assets/starship-6.jpg");
      const starshipImageUrl = [
        starship1,
        starship2,
        starship3,
        starship4,
        starship5,
        starship6
      ];
      return starshipImageUrl[rand];
    }
  },
  created() {},
  mounted() {
    this.allStarships();
    this.getImageUrl();
  }
};
</script>

<style scoped>
.all-starships {
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
</style>

