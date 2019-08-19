<template>
    <div class="characters">
    <Header/>

        <h1>PopularCharacters</h1>
        <hr/>
          <div v-if="characters.length=== 0">No Starwars Character matches your search</div>

        <div v-else class="flex-container">
        <div class="characters-intro-div">
          <!-- <div v-else> -->
             <div class="characters-intro" v-for="(character, index) in characters" v-if="index <= 3" :key="index" >
              <div><img alt="character-img" :src="character.imgUrl"/></div>
              <div>
                <p>Name: {{character.name}}</p>
                <p>Birth-year: {{character.birth_year}}</p>
                <p v-if="character.gender ==='n/a'">Robot</p>
                <p v-else>Gender: {{character.gender}}</p>
                    <router-link :to="{ name: 'Details', params: {moreDetails: character ,arrayList:characters, index: index}}"><b-button variant="primary">Read More</b-button></router-link>

              </div>

              </div>
      
        </div>
        </div>
        <router-link to="/characters"><button>VIEW MORE</button></router-link>
    </div>
</template>

<script>
export default {
  name: "Characters",
  props: {
    characters: Array
  },
  methods: {
    getImgUrl(index) {
      return require("../../assets/character-" + index + ".jpg");
    }
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
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.characters-intro-div {
  display: grid;
  grid-template-columns: 50% 50%;
}
.characters-intro {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 430px;
  border: 1px solid black;
  margin: 20px 40px;
  padding: 30px;
}
img {
  height: 300px;
  width: 350px;
}
</style>



