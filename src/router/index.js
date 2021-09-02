import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/country/:code",
    name: "country",
    component: () =>
      import(/* webpackChunkName: "country" */ "../views/Details/index.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
