<template>
    <div class="details">
      <div class="wrapper">
        <div class="header">
            <div><img alt="newObject.name" :src="newObject.imgUrl"/></div>
            <span>{{newObject.name}}</span>
       
        <div class="btn"><button @click="previous()" :disabled="newIndex===0"><i class="fas fa-arrow-left"/></button>
        <button @click="next()" :disabled="newIndex===arrayList.length-1"><i class="fas fa-arrow-right"/></button>
        </div>
         </div>
        <div class="body">
          <div class="intro">
            <span>
            <h3>About</h3>
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
            </span>
          </div>
          <article>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque aperiam quia! At molestiae adipisci ducimus suscipit, nam minus ipsa a officia sunt quaerat id veritatis itaque amet quasi. Numquam cumque deserunt dignissimos soluta ad neque eaque maxime earum quasi. Aliquid at dolorum tenetur! Similique magni quasi enim hic ex voluptatibus quod cumque laborum illo repudiandae deserunt corporis, fugiat provident modi doloribus optio delectus reprehenderit blanditiis cum, temporibus voluptas est! Qui consequuntur, tenetur laboriosam quo temporibus voluptates aperiam et explicabo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque aperiam quia! At molestiae adipisci ducimus suscipit, nam minus ipsa a officia sunt quaerat id veritatis itaque amet quasi. Numquam cumque deserunt dignissimos soluta ad neque eaque maxime earum quasi. Aliquid at dolorum tenetur! Similique magni quasi enim hic ex voluptatibus quod cumque laborum illo repudiandae deserunt corporis, fugiat provident modi doloribus optio delectus reprehenderit blanditiis cum, temporibus voluptas est! Qui consequuntur, tenetur laboriosam quo temporibus voluptates aperiam et explicabo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque aperiam quia! At molestiae adipisci ducimus suscipit, nam minus ipsa a officia sunt quaerat id veritatis itaque amet quasi. Numquam cumque deserunt dignissimos soluta ad neque eaque maxime earum quasi. Aliquid at dolorum tenetur! Similique magni quasi enim hic ex voluptatibus quod cumque laborum illo repudiandae deserunt corporis, fugiat provident modi doloribus optio delectus reprehenderit blanditiis cum, temporibus voluptas est! Qui consequuntur, tenetur laboriosam quo temporibus voluptates aperiam et explicabo.</p>
          </article>
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
  }
};
</script>

<style scoped>
.details {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin: 30px;
}
.wrapper{
  width: 60%;
  margin-bottom: 60px
}
.header{
  height: 520px;
  margin-bottom: 50px;
  width: 100%
}

.header img {
  height: 400px;
  width: 100%
}
.header span{
  color: red;
  font-weight: bolder;
  font-size: 2.7em;
  text-transform: uppercase;
}
.header .btn{
  display: flex;
  justify-content: center;
  align-items: center;
}
.header .btn button{
  margin: 0 50px;
  padding: 5px 20px;
  border-radius: 5px;
  background-color: rgba(128, 128, 128, 0.452);
  border: none
}
.intro{
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  text-align: left
}
.intro h3{
  color: midnightblue;
  font-weight: bolder;
}
.intro p{
  font-weight: bold;
  padding: 0;
  margin: 0
}
article{
  text-justify: newspaper;
  box-sizing: border-box
}
@media screen and (max-width: 768px){
  .header{
    height: 430px;
    margin-bottom: 30px;
    width: 100%
  }
  .header img {
    height: 300px;
    width: 100%
  }
  .header span{
    font-size: 1.2em;
  }
  .header .btn button{
    padding: 5px 15px;
    border-radius: 3px;
  }
  .intro p{
    font-size: 16px;
  }
  article{
    font-size: 14px;
    text-justify: newspaper;
    box-sizing: border-box
  }
}
</style>
