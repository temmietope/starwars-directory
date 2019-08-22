<template>
    <div class="starships">
        <h1>Popular Starships</h1>
        <hr/>
          <div v-if="starships.length=== 0">No Starwars Starship matches your search</div>
          <div v-else>
            <div class="flex-container">
              <div class="starship" v-for="(starship, index) in starships" v-if="index <= 5" :key="index" >
              <img alt="starship-img" :src="starship.imgUrl"/>
              <h5>{{starship.name}}</h5>
              <p>Model: {{starship.model}}</p>
              <p>Cargo Capacity: {{starship.cargo_capacity}}</p>
              <div class="btn"><router-link :to="{ name: 'Details', params: {moreDetails: starship, arrayList:starships, index: index }  }"><button>Read More</button></router-link></div>
            </div>
            </div>
            
        <div class="router-link"><router-link to="/starships"><button>VIEW ALL</button></router-link></div>

          </div>

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
  mounted(){
    console.log(this.starships)
  }
};
</script>

<style scoped>
.starships {
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
h5 {
  padding: 10px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bolder;
}
p {
  margin-bottom: 0;
  padding-bottom: 0;
  font-size: 13px
}
hr {
  width: 100px;
  height: 6px;
  background-color: rgb(34, 33, 33);
  padding-top: none;
}
img {
  height: 300px;
  width: 300px;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.starship {
  flex: 0 0 300px;
  height: 480px;
  margin: 20px;
  padding: 10px;
  border: 1px solid rgba(53, 51, 51, 0.788);
  background-color: rgba(221, 220, 220, 0.521);  
  border-radius: 7px;
  box-sizing: border-box;
}
.starship .btn {
  display: flex;
  justify-content: flex-end;
}
.btn button {
  padding: 13px 17px;
  font-size: 16px;
  background-color: rgba(29, 29, 151, 0.863);
  color: rgb(215, 226, 226);
  border: none;
}
.router-link button{
  padding: 7px 150px;
  border: 1.5px solid rgba(29, 29, 151, 0.863);
  background-color: azure;
}
</style>



