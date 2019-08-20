<template>
    <div>
      <Header/>
      <div class="characters">
          <h1>Popular Characters</h1>
          <div class="flex-container">
            <div class="character" v-for="(character, index) in characters" :key="index">
            <div><img alt="character-img" :src="character.imgUrl"/></div>
            <div class="character-details">
              <p>Name: {{character.name}}</p>
              <p>Birth-year: {{character.birth_year}}</p>
              <p v-if="character.gender ==='n/a'">Robot</p>
              <p v-else>Gender: {{character.gender}}</p>
              <router-link :to="{ name: 'Details', params: {moreDetails: character ,arrayList:characters, index: index}}"><span>Read More...</span></router-link>
            </div>
          </div>
          </div>
          
      </div>
           
      <div class="navigation">
        <button @click="loadPreviousPage" :disabled="allCharactersFromAPI['previous']===null"><i class="fas fa-arrow-left"></i></button> 
        <button @click="loadNextPage" :disabled="allCharactersFromAPI['next']===null" ><i class="fas fa-arrow-right"></i></button>
      </div>
    </div>
</template>

<script>
import Header from "../Header.vue";
export default {
  name: "CharactersIndex",
  components: { Header },
  data() {
    return {
      characters: [],
      allCharactersFromAPI: ""
    };
  },
  methods: {
    async allCharacters() {
      const res = await fetch("https://swapi.co/api/people/?format=json");
      const resultsFromAPI = await res.json();
      this.allCharactersFromAPI = resultsFromAPI;
      let charactersA = resultsFromAPI.results;
      charactersA.forEach(a => {
        a.imgUrl = this.getImageUrl();
      });
      this.characters = charactersA;
    },
    async loadNextPage() {
      let nextPage = this.allCharactersFromAPI["next"];
      const res = await fetch(nextPage);
      const resultsFromAPI = await res.json();
      this.allCharactersFromAPI = resultsFromAPI;
      let charactersA = resultsFromAPI.results;
      charactersA.forEach(a => {
        a.imgUrl = this.getImageUrl();
      });
      this.characters = charactersA;
    },
    async loadPreviousPage() {
      let previousPage = this.allCharactersFromAPI["previous"];
      const res = await fetch(previousPage);
      const resultsFromAPI = await res.json();
      this.allCharactersFromAPI = resultsFromAPI;
      let charactersA = resultsFromAPI.results;
      charactersA.forEach(a => {
        a.imgUrl = this.getImageUrl();
      });
      this.characters = characterssA;
    },
    getImageUrl() {
      let rand = Math.round(Math.random(2));
      const character1 = require("../../assets/character-1.jpg");
      const character2 = require("../../assets/character-2.jpg");
      const character3 = require("../../assets/character-3.jpg");
      const character4 = require("../../assets/character-4.jpg");

      const characterImageUrl = [
        character1,
        character2,
        character3,
        character4
      ];
      return characterImageUrl[rand];
    }
  },
  mounted() {
    this.allCharacters();
    this.getImageUrl();
  }
};
</script>

<style scoped>
.characters {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.character {
  display: flex;
  flex: 0 0 500px;
  height: 380px;
  margin: 20px;
  background-color: rgba(221, 220, 220, 0.521);
  box-sizing: border-box;
}
.character-details {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
img {
  width: 300px;
  height: 380px;
}
span{
  color: rgba(64, 64, 185, 0.856);
  font-weight: bolder;
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
