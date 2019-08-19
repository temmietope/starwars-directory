<template>
    <div>
    <Header/>
    <div class="all-characters">
        <h1>Popular Characters</h1>
        <div class="all-characters" v-for="(character, index) in characters" :key="index">
            <div>
                <b-card
                    :title= "character.name"
                    :img-src= "character.imgUrl"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                      <p>Name: {{character.name}}</p>
                      <p>Birth-year: {{character.birth_year}}</p>
                      <p v-if="character.gender ==='n/a'">Robot</p>
                      <p v-else>Gender: {{character.gender}}</p>
                    </b-card-text>

                    <router-link :to="{ name: 'Details', params: {moreDetails: character ,arrayList:characters, index: index}}"><b-button variant="primary">Read More</b-button></router-link>
                </b-card>
            </div>
        </div>
        <button @click="loadPreviousPage" :disabled="allCharactersFromAPI['previous']===null">prev</button> 
        <button @click="loadNextPage" :disabled="allCharactersFromAPI['next']===null" >next</button> 
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
