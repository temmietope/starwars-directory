<template>
    <div>
      <Header/>
      <div class="characters">
          <div><h1>Popular Characters</h1></div>
         
          <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
          </div>
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
  font-size: 13px
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

/* Style The Dropdown Button */
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #f1f1f1}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>
