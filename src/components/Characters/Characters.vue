<template>
    <div class="characters">
    <Header/>

        <h1>Popular Characters</h1>
        <hr/>
          <div v-if="characters.length=== 0">No Starwars Character matches your search</div>
          <div v-else>
            <div class="flex-container">
              <div class="character" v-for="(character, index) in characters" v-if="index <= 3" :key="index" >
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
         <div class="router-link"><router-link to="/characters"><button>VIEW ALL</button></router-link></div>
          </div>
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
  margin-top: 30px;
}
h1{
  color: rgb(34, 33, 33);
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
  padding: 20px;
}
.router-link button{
  padding: 7px 150px;
  border: 1.5px solid rgba(29, 29, 151, 0.863);
  background-color: azure;
}
</style>



