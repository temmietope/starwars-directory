<template>
  <div class="home">
    <Header/>
    <div class="body">
    <Starships v-if="starships.length" :starships="starships"/>
    <Planets v-if="planets.length" :planets="planets"/>
    <Characters v-if="characters.length" :characters="characters"/>
  </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Starships from "./Starships/Starships.vue";
import Planets from "./Planets/Planets.vue";
import Characters from "./Characters/Characters.vue"

export default {
  name: "Home",
  components: { Header, Starships, Planets, Characters },
  data(){
    return{
       starships: [],
       planets: [],
       characters: []
    }
  },
  methods: {
    async getStarships(){
      const res= await(fetch("https://swapi.co/api/starships/"))
      console.log(res)
      const starshipsFromAPI = await res.json();
      console.log(starshipsFromAPI)
      let starshipsA = starshipsFromAPI.results;
      starshipsA.forEach((a)=>{
        a.imgUrl= this.getStarshipImgUrl()
      })
      this.starships= starshipsA
      console.log(this.starships)
    },

    async getPlanets(){
      const res= await(fetch("https://swapi.co/api/planets/"))
      console.log(res)
      const planetsFromAPI = await res.json();
      console.log(planetsFromAPI)
      let planetsA = planetsFromAPI.results;
      planetsA.forEach((a)=>{
        a.imgUrl= this.getPlanetImgUrl()
      })
      this.planets= planetsA
      console.log(this.planets)
    },

    async getCharacters(){
      const res= await(fetch("https://swapi.co/api/people/"))
      console.log(res)
      const charactersFromAPI = await res.json();
      console.log(charactersFromAPI)
      let charactersA = charactersFromAPI.results;
       charactersA.forEach((a)=>{
        a.imgUrl= this.getCharacterImgUrl()
      })
      this.characters= charactersA
      console.log(this.characters)
    },

    getStarshipImgUrl() {
      let rand = Math.round(Math.random(5));
      const starship1 = require("../assets/starship-1.jpg");
      const starship2 = require("../assets/starship-2.jpg");
      const starship3 = require("../assets/starship-3.jpg");
      const starship4 = require("../assets/starship-4.jpg");
      const starship5 = require("../assets/starship-5.jpg");
      const starship6 = require("../assets/starship-6.jpg");
      const starshipImageUrl = [
        starship1,
        starship2,
        starship3,
        starship4,
        starship5,
        starship6
      ];
      return starshipImageUrl[rand];
    },
    getPlanetImgUrl(){
      let rand = Math.round(Math.random(2));
      const planet1 = require("../assets/planet-1.jpg")
      const planet2 = require("../assets/planet-2.jpg")
      const planet3 = require("../assets/planet-3.jpg")
      const planetImageUrl=[
        planet1, planet2, planet3
      ]
      return planetImageUrl[rand]
    },
    getCharacterImgUrl(){
      let rand = Math.round(Math.random(2));
      const character1 = require("../assets/character-1.jpg")
      const character2 = require("../assets/character-2.jpg")
      const character3 = require("../assets/character-3.jpg")
      const character4 = require("../assets/character-4.jpg")

      const characterImageUrl=[
        character1, character2, character3, character4
      ]
      return characterImageUrl[rand]
    }
  },
  created(){
    this.getStarships();
    this.getPlanets();
    this.getCharacters()
  }
 
};
</script>

<style scoped>
</style>
