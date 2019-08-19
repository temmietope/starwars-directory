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
          <p>Name: {{newObject.name}}</p>

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

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque aperiam quia! At molestiae adipisci ducimus suscipit, nam minus ipsa a officia sunt quaerat id veritatis itaque amet quasi. Numquam cumque deserunt dignissimos soluta ad neque eaque maxime earum quasi. Aliquid at dolorum tenetur! Similique magni quasi enim hic ex voluptatibus quod cumque laborum illo repudiandae deserunt corporis, fugiat provident modi doloribus optio delectus reprehenderit blanditiis cum, temporibus voluptas est! Qui consequuntur, tenetur laboriosam quo temporibus voluptates aperiam et explicabo.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque aperiam quia! At molestiae adipisci ducimus suscipit, nam minus ipsa a officia sunt quaerat id veritatis itaque amet quasi. Numquam cumque deserunt dignissimos soluta ad neque eaque maxime earum quasi. Aliquid at dolorum tenetur! Similique magni quasi enim hic ex voluptatibus quod cumque laborum illo repudiandae deserunt corporis, fugiat provident modi doloribus optio delectus reprehenderit blanditiis cum, temporibus voluptas est! Qui consequuntur, tenetur laboriosam quo temporibus voluptates aperiam et explicabo.</p></div>
    </div>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      newObject: {},
      newIndex: this.index
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
}

img {
  height: 500px;
  width: 100%;
}
span {
  color: red;
  font-size: 30px;
  text-align: left;
}
.body {
  width: 50%;
}
</style>
