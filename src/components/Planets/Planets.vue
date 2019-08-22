<template>
    <div class="planets">
        <h1>Popular Planets</h1>
        <hr/>
          <div v-if="planets.length=== 0">No Starwars Planet matches your search</div>
        <div v-else>
          <div class="flex-container">
            <div class="planet" v-for="(planet, index) in planetsArray" :key="index" >
              <img alt="planet-img" :src="planet.imgUrl"/>
              <router-link :to="{ name: 'Details', params: {moreDetails: planet ,arrayList:planets, index: index}}"><span>{{planet.name}}</span></router-link>
            </div>  
          </div>
            <div>
              <button @click="one"><i class="far fa-circle"></i></button>
              <button @click="two"><i class="far fa-circle"></i></button>
              <button @click="three"><i class="far fa-circle"></i></button>
            </div>    
        <div class="router-link"><router-link to="/planets"><button>VIEW ALL</button></router-link></div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Planets",
  data() {
    return {
      planetsA: this.planets
    };
  },
  props: {
    planets: Array
  },
  methods: {
    one() {
      this.planetsArray = this.planets.slice(0, 3);
      console.log(this.planetsArray);
    },
    two() {
      this.planetsArray = this.planets.slice(3, 6);
    },
    three() {
      this.planetsArray = this.planets.slice(6, 9);
    }
  },
  computed: {
    planetsArray: {
      get() {
        return this.planetsA.slice(0, 3);
      },
      set(planets) {
        this.planetsA = planets;
      }
    }
  },
  watch: {
    planets(newPlanets) {
      this.planetsA = newPlanets;
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
.planets button {
  border: none;
  background-color: inherit;
  margin: 10px;
}
.planets button i :focus {
  color: red;
}
.router-link button{
  padding: 7px 150px;
  border: 1.5px solid rgba(29, 29, 151, 0.863);
  background-color: azure;
}
</style>



