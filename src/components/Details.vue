<template>
    <div class="details">
        <div class="header">
            <img alt="newObject.name" :src="newObject.imgUrl"/>
            <span>{{newObject.name}}</span>
        </div>
        <div><button @click="previous()" :disabled="newIndex===0">prev</button>
        <button @click="next()" :disabled="newIndex===arrayList.length-1">next</button>
        </div>
        <div class="body">
          <h3>About</h3>
        
        <div class="intro">
          <p v-if="newObject.birth_year">Birth-year: {{newObject.birth_year}}</p>
          <p v-if="newObject.gender==='n/a'">Robot</p>
          <p v-if="newObject.gender">Gender: {{newObject.gender}}</p>
          <p v-if="newObject.eye_color">Eye-color: {{newObject.eye_color}}</p>
          <p v-if="newObject.skin_color">Skin-color: {{newObject.skin_color}}</p>
          <p v-if="newObject.height">Height: {{newObject.height}}</p>
          <p v-if="newObject.mass">Mass: {{newObject.mass}}</p>

          <p v-if="newObject.model">Model: {{newObject.model}}</p>
          <p v-if="newObject.manufacturer">Manufacturer: {{newObject.manufacturer}}</p>
          <p v-if="newObject.consumables">Consumables: {{newObject.consumables}}</p>
          <p v-if="newObject.hyperdrive_rating">Hyperdrive-rating: {{newObject.hyperdrive_rating}}</p>
          <p v-if="newObject.starship_class">Class: {{newObject.starship_class}}</p>
          <p v-if="newObject.cargo_capacity">Cargo-capacity: {{newObject.cargo_capacity}}</p>

          <p v-if="newObject.climate">Temperature: {{newObject.climate}}</p>
          <p v-if="newObject.gravity">Gravity: {{newObject.gravity}}</p>
          <p v-if="newObject.population">Population: {{newObject.population}}</p>
          <p v-if="newObject.rotation_period">Rotation-period: {{newObject.rotation_period}}</p>
          <p v-if="newObject.orbital_period">Rotation-period: {{newObject.orbital_period}}</p>
          <p v-if="newObject.terrain">Terrain: {{newObject.terrain}}</p>

        </div>
        <div class="article">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque aperiam quia! At molestiae adipisci ducimus suscipit, nam minus ipsa a officia sunt quaerat id veritatis itaque amet quasi. Numquam cumque deserunt dignissimos soluta ad neque eaque maxime earum quasi. Aliquid at dolorum tenetur! Similique magni quasi enim hic ex voluptatibus quod cumque laborum illo repudiandae deserunt corporis, fugiat provident modi doloribus optio delectus reprehenderit blanditiis cum, temporibus voluptas est! Qui consequuntur, tenetur laboriosam quo temporibus voluptates aperiam et explicabo.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque aperiam quia! At molestiae adipisci ducimus suscipit, nam minus ipsa a officia sunt quaerat id veritatis itaque amet quasi. Numquam cumque deserunt dignissimos soluta ad neque eaque maxime earum quasi. Aliquid at dolorum tenetur! Similique magni quasi enim hic ex voluptatibus quod cumque laborum illo repudiandae deserunt corporis, fugiat provident modi doloribus optio delectus reprehenderit blanditiis cum, temporibus voluptas est! Qui consequuntur, tenetur laboriosam quo temporibus voluptates aperiam et explicabo.</p>
        </div>
        <div class="recentlySearched" v-if="newObject.gender">
          <h3>Recently Searched Characters</h3>
          <div v-if="!recentCharacters">
            No recently searched StarWars Character
          </div>
          <div v-else>
            <div v-for="(character, index) in characters" class="character-flex-container" :key="index">
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
        <div class="recentlySearched" v-if="newObject.model">
          <h3>Recently Searched Starships</h3>
          <div v-if="!recentStarships">
            No recently searched StarWars Starship
          </div>
          <div v-else>
              <div v-for="(starship, index) in starships" class="starship-flex-container" :key="index">
              <img alt="starship-img" :src="starship.imgUrl"/>
              <h5>{{starship.name}}</h5>
              <p>Model: {{starship.model}}</p>
              <p>Cargo Capacity: {{starship.cargo_capacity}}</p>
              <div class="btn"><router-link :to="{ name: 'Details', params: {moreDetails: starship, arrayList:recentStarships, index: index }  }"><button>Read More</button></router-link></div>
          </div>
          </div>
          
        </div>
        <div class="recentlySearched" v-if="newObject.gravity">
          <h3>Recently Searched Planets</h3>
          <div v-if="!recentPlanets">
            No recently searched StarWars Planet
          </div>
          <div v-else>
            <div v-for="(planet, index) in planets" class="planet-flex-container" :key="index">
              <img alt="planet-img" :src="planet.imgUrl"/>
              <router-link :to="{ name: 'Details', params: {moreDetails: planet ,arrayList:recentPlanets, index: index}}"><span>{{planet.name}}</span></router-link>
            </div>
          </div>
          

        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      newObject: {},
      newIndex: this.index,
      recentStarships: [],
      recentCharacters: [],
      recentPlanets: []
    };
  },
  props: {
    moreDetails: Object,
    arrayList: Array,
    index: Number
  },
  methods: {
    previous() {
      console.log(this.newIndex);
      this.newIndex--;
      this.newObject = this.arrayList[this.newIndex];
    },
    next() {
      this.newIndex++;
      this.newObject = this.arrayList[this.newIndex];
    }
  },
  computed:{
    starships(){
      return this.recentStarships.split(0,3)
    },
    characters(){
      return this.recentCharacters.split(0.2)
    },
    planets(){
      return this.recentPlanets.split(0,3)
    }
  },
  mounted() {
    console.log(this.arrayList);
    this.newObject = this.moreDetails;
    this.recentStarships =JSON.parse(localStorage.getItem('searchedStarships'))
    this.recentCharacters =JSON.parse(localStorage.getItem('searchedCharacters'))
    this.recentPlanets =JSON.parse(localStorage.getItem('searchedPlanets'))


  }
};
</script>

<style scoped>
.details {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}

.header img {
  height: 400px;
  width: 100%;
}
.header span{
  color: red;
  font-weight: bolder;
  font-size: 2.7em;
  text-transform: uppercase;
}

</style>
