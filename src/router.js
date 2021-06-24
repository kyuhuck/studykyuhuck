import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/home";
import Tv from "./views/tv";
import Radio from "./views/radio";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [{
      path: "/",
      component: Home
    },
    {
      path: "/tv",
      component: Tv
    },
    {
      path: "/radio",
      component: Radio
    }
  ]
});

export default router;