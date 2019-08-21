<template>
    <div class="planets">
        <h1>Popular Planets</h1>
        <hr/>
          <div v-if="planets.length=== 0">No Starwars Planet matches your search</div>
        <div v-else class="flex-container">
            <div class="planet" v-for="(planet, index) in planetsA" :key="index" >
              <img alt="planet-img" :src="planet.imgUrl"/>
              <router-link :to="{ name: 'Details', params: {moreDetails: planet ,arrayList:planets, index: index}}"><span>{{planet.name}}</span></router-link>
            </div>  
            <div>
              <button @click="one">1</button>
              <button @click="two">2</button>
              <button @click="three">3</button>
            </div>     
        </div>
    </div>
</template>

<script>
export default {
  name: "Planets",
  data() {
    return {
      planetsArray: [],
      planetsA: []
    };
  },
  props: {
    planets: Array
  },
  methods: {
    getImgUrl(index) {
      return require("../../assets/planet-" + index + ".jpg");
    },
    one() {
      this.planetsA = this.planetsArray.slice(0, 3);
    },
    two() {
      this.planetsA = this.planetsArray.slice(3, 6);
    },
    three() {
      this.planetsA = this.planetsArray.slice(6, 9);
    }
  },
  mounted() {
    this.planetsArray = this.planets;
    this.planetsA = this.planetsArray.slice(0, 3);
    console.log(this.planetsA);
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
  margin-top: 30px;
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
.planet {
  flex: 0 0 300px;
  padding: 10px;
  box-sizing: border-box;
  margin: 20px;
  background-color: rgba(221, 220, 220, 0.521);
  border: 1px solid rgb(34, 33, 33);
}
img {
  height: 300px;
  width: 300px;
}
.planet span {
  font-weight: bolder;
  font-size: 20px;
  padding: 5px;
  color: rgb(34, 33, 33);
}
</style>



