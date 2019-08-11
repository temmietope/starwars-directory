<template>
    <div class="characters">
        <h1>PopularCharacters</h1>
        <hr/>
        <div>
  
        </div>
    </div>
</template>

<script>
export default {
  name: "Characters",
  props: {
    characters: Array,
  }

};
</script>
<style scoped>
.characters {
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



