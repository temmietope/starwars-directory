<template>
<div>
    <Header/>
        <h1>StarWars Starships</h1>
        <hr/>
      <div class="starships">
        <div class="flex-container">
          <div class="starship" v-for="(starship, index) in starships" :key="index">
              <img alt="starship-img" :src="starship.imgUrl"/>
              <h5>{{starship.name}}</h5>
              <p>Model: {{starship.model}}</p>
              <p>Cargo Capacity: {{starship.cargo_capacity}}</p>
              <div class="btn"><router-link :to="{ name: 'Details', params: {moreDetails: starship, arrayList:starships, index: index }  }"><button>Read More</button></router-link></div>
          </div>
        </div>        
      </div>
      <div class="navigation">
        <button @click="loadPreviousPage" :disabled="allStarshipsFromAPI['previous']===null"><i class="fas fa-arrow-left"></i></button> 
        <button @click="loadNextPage" :disabled="allStarshipsFromAPI['next']===null" ><i class="fas fa-arrow-right"></i></button> 
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
    };
  },
  methods: {
    async allStarships() {
      const res = await fetch("https://swapi.co/api/starships/?format=json");
      const resultsFromAPI = await res.json();
      this.allStarshipsFromAPI = resultsFromAPI;
      let starshipsA = resultsFromAPI.results;
      starshipsA.forEach(a => {
        a.imgUrl = this.getImageUrl();
      });
      this.starships = starshipsA;
    },
    async loadNextPage() {
      let nextPage = this.allStarshipsFromAPI["next"];
      const res = await fetch(nextPage);
      const resultsFromAPI = await res.json();
      this.allStarshipsFromAPI = resultsFromAPI;
      let starshipsA = resultsFromAPI.results;
      starshipsA.forEach(a => {
        a.imgUrl = this.getImageUrl();
      });
      this.starships = starshipsA;
    },
    async loadPreviousPage() {
      let previousPage = this.allStarshipsFromAPI["previous"];
      const res = await fetch(previousPage);
      const resultsFromAPI = await res.json();
      this.allStarshipsFromAPI = resultsFromAPI;
      let starshipsA = resultsFromAPI.results;
      starshipsA.forEach(a => {
        a.imgUrl = this.getImageUrl();
      });
      this.starships = starshipsA;
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
  mounted() {
    this.allStarships();
    this.getImageUrl();
  }
};
</script>

<style scoped>
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
.starships {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding-top: 50px;
}
h1 {
  color: rgb(34, 33, 33);
  margin-top: 30px
}
h5 {
  padding: 10px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bolder;
}
p {
  margin-bottom: 0;
  padding-bottom: 0;
}
hr {
  width: 100px;
  height: 6px;
  background-color: rgb(34, 33, 33);
  padding-top: none;
}
img {
  height: 300px;
  width: 300px;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.starship {
  flex: 0 0 300px;
  height: 480px;
  margin: 20px;
  padding: 10px;
  border: 1px solid rgba(53, 51, 51, 0.788);
  border-radius: 7px;
  box-sizing: border-box;
}
.starship .btn {
  display: flex;
  justify-content: flex-end;
}
.btn button {
  padding: 13px 17px;
  font-size: 16px;
  background-color: rgba(29, 29, 151, 0.863);
  color: rgb(215, 226, 226);
  border: none;
  border-radius: 5px;
}
</style>

