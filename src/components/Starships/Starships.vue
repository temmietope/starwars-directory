<template>
    <div class="starships">
        <h1>Popular Starships</h1>
        <hr/>
        <div class="flex-container">
          <div class="starships-intro-div">
          <div v-if="starships.length=== 0">No Starwars Starship matches your search</div>
          <div v-else>
            <div class="starships-intro" v-for="(starship, index) in starships" v-if="index <= 5" :key="index" >
              <img alt="starship-img" :src="starship.imgUrl"/>
              <span>The {{starship.name}} is of the model {{starship.model}} and was manufactured by {{starship.manufacturer}}.</span>
              <router-link :to="{ name: 'Details', params: {moreDetails: starship, arrayList:starships, index: index }  }"><button>Read More</button></router-link>
            </div>
          </div>
          </div>
        </div>
        <router-link to="/starships"><button>VIEW MORE</button></router-link>

    </div>
</template>

<script>
export default {
  name: "Starships",
  data() {
    return {
      newStarshipArray: []
    };
  },
  props: {
    starships: Array
  },
  methods: {}
};
</script>

<style scoped>
.starships {
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
.starships-intro-div {
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  max-width: 1200px;
}
.starships-intro {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 430px;
  border: 1px solid black;
  margin: 20px 40px;
}
img {
  height: 300px;
  width: 350px;
}
</style>



