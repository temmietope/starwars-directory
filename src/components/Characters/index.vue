<template>
    
</template>

<script>
export default {
    name: "CharactersIndex",
    methods:{
        getImageUrl(){
      let rand = Math.round(Math.random(2));
      const character1 = require("../../assets/character-1.jpg")
      const character2 = require("../../assets/character-2.jpg")
      const character3 = require("../../assets/character-3.jpg")
      const characterImageUrl=[
        character1, character2, character3
      ]
      return characterImageUrl[rand]
    }
    }
}
</script>
