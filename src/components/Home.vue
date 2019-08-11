<template>
  <div>
    <Header/>
    <Starships v-if="starships.length" :starships="starships"/>
    <Planets v-if="planets.length" :planets="planets"/>
    <Characters v-if="characters.length" :characters="characters"/>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Starships from "./Starships.vue";
import Planets from "./Planets.vue";
import Characters from "./Characters.vue"

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
      this.starships = starshipsFromAPI.results
      console.log(this.starships)
    },

    async getPlanets(){
      const res= await(fetch("https://swapi.co/api/planets/"))
      console.log(res)
      const planetsFromAPI = await res.json();
      console.log(planetsFromAPI)
      this.planets = planetsFromAPI.results
      console.log(this.planets)
    },

    async getCharacters(){
      const res= await(fetch("https://swapi.co/api/people/"))
      console.log(res)
      const charactersFromAPI = await res.json();
      console.log(charactersFromAPI)
      this.characters = charactersFromAPI.results
      console.log(this.characters)
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
