<template>
    <div>
      <Header/>
      <div class="characters">
          <div>
            <h1>StarWars Characters</h1>
            <hr/>
          </div>
          <div class="dropdown">
            <span>Filter</span>
            <b-dropdown id="dropdown-right" size="sm" right text="Gender" class="m-2">
              <b-dropdown-item @click="filterMales">Male</b-dropdown-item>
              <b-dropdown-item @click="filterFemales">Female</b-dropdown-item>
              <b-dropdown-item @click="filterRobots">Robots</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item  @click="showall">All Characters</b-dropdown-item>
            </b-dropdown>
          </div>


          <div class="flex-container">
            <div class="character" v-for="(character, index) in filteredCharacters" :key="index">
            <div><img alt="character-img" :src="character.imgUrl"/></div>
            <div class="character-details">
              <p class="name">Name: {{character.name}}</p>
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
      filteredCharacters: [],
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
      this.filteredCharacters = this.characters;
      // localStorage.setItem("characters1", JSON.stringify(charactersA));
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
      this.filteredCharacters = this.characters;
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
      this.filteredCharacters = this.characters;
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
    },
    filterMales() {
      const maleCharacters = this.characters.filter(
        character => character.gender === "male"
      );
      console.log(maleCharacters);
      return (this.filteredCharacters = maleCharacters);
    },
    filterFemales() {
      const femaleCharacters = this.characters.filter(
        character => character.gender === "female"
      );
      console.log(femaleCharacters);
      return (this.filteredCharacters = femaleCharacters);
    },
    filterRobots() {
      const robotCharacters = this.characters.filter(
        character => character.gender === "n/a"
      );
      console.log(robotCharacters);
      return (this.filteredCharacters = robotCharacters);
    },
    showall() {
      return (this.filteredCharacters = this.characters);
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
hr {
  width: 100px;
  height: 6px;
  background-color: rgb(34, 33, 33);
  padding-top: none;
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
  border-radius: 7px;
}
.character-details {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 13px;
}
img {
  width: 300px;
  height: 380px;
}
span {
  color: rgba(64, 64, 185, 0.856);
  font-weight: bolder;
  margin-right: 10px;
}
.navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
}
.navigation button {
  border: none;
  background-color: rgba(128, 128, 128, 0.452);
  color: rgb(20, 20, 20);
  padding: 10px 15px;
  margin: 10px;
  border-radius: 5px;
}
.dropdown {
  margin: 25px auto 25px 200px;
}
.dropdown span {
  color: black;
}
@media screen and (max-width: 768px){
   h1{
    font-size: 20px;
  }
  .character {
    flex: 0 0 200px;
    display: flex;
    flex-flow: column;
    height: 350px;
    padding: 20px;
  }
  .character-details {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    font-size: 9px
  }
  .character-details p .name{
    font-weight: bolder
  }
  img {
    width: 180px;
    height: 180px;
  }
  .dropdown {
    margin: 0;
    text-align: center
  }
  .navigation {
    margin: 0;
  }
}
</style>
