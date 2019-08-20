<template>
    <div class="planets">
        <h1>Popular Planets</h1>
        <hr/>
          <div v-if="planets.length=== 0">No Starwars Planet matches your search</div>
        <div v-else class="flex-container">
            <div class="planet" v-for="(planet, index) in planets" v-if="index <= 2" :key="index" >
              <div class="space">
              <div class="image"><img alt="planet-img" :src="planet.imgUrl"/>
                <div class="name"><span>{{planet.name}}</span></div>
              </div>
              </div>
            </div>       
        </div>
    </div>
</template>

<script>
export default {
  name: "Planets",
  props: {
    planets: Array
  },
  methods: {
    getImgUrl(index) {
      return require("../../assets/planet-" + index + ".jpg");
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
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
}
.planet{
  flex: 0 0 300px;
  height: 300px;
  padding: 10px;
  box-sizing: border-box;
}
img{
  height: 300px;
  width: 300px;
}
space{
  height: 350px;
}
.image{
  height: 350px;
  width: 350px;
}
.name{
  height: 350px;
  width: 350px;
  background-color: white;
}
</style>



