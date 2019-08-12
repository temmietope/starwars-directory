<template>
    <div class="planets">
        <h1>Popular Planets</h1>
        <hr/>
        <div class="flex-container">
        <div class="planets-intro-div">
        <div class="planets-intro" v-for="(planet, index) in planets" v-if="index <= 2" :key="index" >
           <img alt="planet-img" :src="getImgUrl(index+1)"/>
           <span>{{planet.name}}</span>
        </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "SomePlanets",
  props: {
    planets: Array,
  },
  methods:{
    getImgUrl(index) {
    return require('../assets/planet-'+(index)+'.jpg')
}
  }

};
</script>
<style scoped>
.planets {
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
.planets-intro-div {
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  max-width: 1200px;

}
.planets-intro {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 430px;
  border: 1px solid black;
  margin: 20px 40px;
  position:relative;
}
img {
  height: 380px;
  width: 350px;
  position:relative
}
span{
  position: absolute;
  color: white;
}
</style>



