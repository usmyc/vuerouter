import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import Social from "../views/Social/Social.vue";
import Socialdetail from "../views/Social/Socialdetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/social",
    name: "social",
    component: Social,
  },

  {
    path: "/social/:id",
    name: "socialdetail",
    component: Socialdetail,
    props: true,
  },
  {
    path: "/contact",
    redirect: "/about",
  },
  {
    path: "/:catchAll(.*)",
    name: "notfound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
