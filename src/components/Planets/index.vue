<template>
    
</template>

<script>
export default {
    name: "PlanetsIndex",
    methods:{
        getImageUrl(){
      let rand = Math.round(Math.random(2));
      const planet1 = require("../../assets/planet-1.jpg")
      const planet2 = require("../../assets/planet-2.jpg")
      const planet3 = require("../../assets/planet-3.jpg")
      const planetImageUrl=[
        planet1, planet2, planet3
      ]
      return planetImageUrl[rand]
    },
    }
}
</script>
