import Vue from "vue";
import App from "./App.vue";
// import Router from "vue-router";
// import Home from "@/Home.vue";
// import Characters from "@/Characters.vue";
// import Starships from "@/Starships.vue";
// import Planets from "@/Planets.vue";


// import BootstrapVue from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// Vue.use(BootstrapVue)

// Vue.use(Router)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

// export default new Router({
//   routes:[
//     {
//       path: '/',
//       name: 'Home',
//       component: Home
//     },
//     {
//       path: '/starships',
//       name: 'Starships',
//       component: Starships
//     },
//     {
//       path: '/characters',
//       name: 'Characters',
//       component: Characters
//     },
//     {
//       path: '/planets',
//       name: 'Planets',
//       component: Planets
//     },
//   ]
// })