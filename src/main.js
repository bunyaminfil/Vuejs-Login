import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
//import axios from "axios";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

//axios.defaults.baseURL = "http://localhost:3000";

const router = new VueRouter({
  routes,
  mode: "history" //hash : Default
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
