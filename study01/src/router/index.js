import Vue from "vue";
import VueRouter from "vue-router";
import layout01 from "../views/layout01.vue";
import layout02 from "../views/layout02.vue";
import layout03 from "../views/layout03.vue";
import layout04 from "../views/layout04.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/layout01",
    name: "layout01",
    component: layout01,
  },
  {
    path: "/layout02",
    name: "layout02",
    component: layout02,
  },
  {
    path: "/layout03",
    name: "layout03",
    component: layout03,
  },
  {
    path: "/layout04",
    name: "layout04",
    component: layout04,
  },
  // {
  //   path: "/layout02",
  //   name: "layout02",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/layout02.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
