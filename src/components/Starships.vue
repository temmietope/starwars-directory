<template>
    <div class="starships">
        <h1>Popular Starships</h1>
        <hr/>
        <!-- <div v-for="(starship, index) in starships" :key="index>
            
        </div> -->
        
    </div>
</template>

<script>
export default {
  name: "Starships",
  props: {
    starships: Array
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
</style>



