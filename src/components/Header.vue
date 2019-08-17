<template>
    <div class="header">
        <div class="form">
            <section class="form-header">
               <img alt="logo" src="../assets/logo.png"/>
                <span>Directory</span>
            </section>
            <section class="short-note">
                <span>Find your favorite Characters, Films, Species, Starships and Planets</span>
            </section>
            <section class="search">
                <input type="text" placeholder="Enter a search item" v-model="searchItem"/>
            </section>
        </div>
    </div>
</template>

<script>
import EventBus from "../eventBus.js"
export default {
  name: "Header",
  data(){
    return{
      searchItem:"",
      results: [],
      isSearching: false,
      charactersResults:[],
      planetsResults: [],
      starshipsResults: []
    }
  },
  watch: {
    async searchItem(searched){
console.log(searched)
      this.isSearching = true
      const resCharacters = await fetch("https://swapi.co/api/people/?search=" +searched);
      let charactersFromAPI = await resCharacters.json();
      this.charactersResults = charactersFromAPI.results
      const resPlanets = await fetch("https://swapi.co/api/planets/?search=" +searched);
      let planetsFromAPI = await resPlanets.json();
      this.planetsResults = planetsFromAPI.results
      const resStarships = await fetch("https://swapi.co/api/starships/?search=" +searched);
      let starshipsFromAPI = await resStarships.json();
      this.starshipsResults = starshipsFromAPI.results
      this.results= [{searchedCharacters: this.charactersResults}, {searchedPlanets: this.planetsResults}, {searchedStarships: this.starshipsResults}]
      console.log(this.results)
      EventBus.$emit('display-results', this.results);
      // this.$emit('clear:page', this.isSearching);


//       console.log(searched)
//       this.isSearching = true
//       const resCharacters = await fetch("https://swapi.co/api/people/?search=" +searched);
//       let charactersFromAPI = await resCharacters.json();
//       this.charactersResults = charactersFromAPI.results
//       const resPlanets = await fetch("https://swapi.co/api/planets/?search=" +searched);
//       let planetsFromAPI = await resPlanets.json();
//       this.planetsResults = planetsFromAPI.results
//       const resStarships = await fetch("https://swapi.co/api/starships/?search=" +searched);
//       let starshipsFromAPI = await resStarships.json();
//       this.starshipsResults = starshipsFromAPI.results
// this.results= [{searchedCharacters: this.charactersResults}, {searchedPlanets: this.planetsResults}, {searchedStarships: this.starshipsResults}]
//       this.$emit('display:results', this.results);
//       this.$emit('clear:page', this.isSearching);
    }
  }
};
</script>
<style scoped>
.header {
  background-image: url("../assets/hero-banner.jpg");
  height: 600px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
img {
  width: 150px;
  height: 70px;
}
.form {
  width: 60%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.form-header {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid white;
  padding-bottom: 20px;
  margin-bottom: 50px;
}
.form-header span {
  font-size: 40px;
  font-weight: bolder;
  color: white;
  padding-left: 20px;
}
.short-note {
  color: white;
  font-size: 30px;
  width: 550px;
  margin-bottom: 50px;
}
.search input[type="text"] {
  height: 50px;
  width: 700px;
  border-radius: 7px;
  border: none;
  font-size: 30px;
  padding-left: 10px;
  color: grey;
}
</style>