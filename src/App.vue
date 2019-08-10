<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
export default {
  name: "App",
  components: { Home },
  data() {
    return {
      employees: []
    };
  },
  mounted() {
    fetch("https://swapi.co/api/films/", { method: "get" })
      .then(res => {
        return res.json();
      })
      .then(res => console.log(res));
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
