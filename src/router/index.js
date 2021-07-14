import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    component: Home, // Download on start
  },
  {
    path: "/search",
    component: () =>
      import(/* webpackChunkName: "Search" */ "../views/Search.vue"), // LAZY LOADING
  },
  {
    path: "/your-library",
    component: () =>
      import(/* webpackChunkName: "YourLibrary" */ "../views/YourLibrary.vue"), // LAZY LOADING
  },
  {
    path: "/liked-songs",
    component: () =>
      import(/* webpackChunkName: "LikedSongs" */ "../views/LikedSongs.vue"), // LAZY LOADING
  },

  {
    path: "/:access_token",
    component: () =>
      import(
        /* webpackChunkName: "AuthVerification" */ "../views/AuthVerification.vue"
      ), // LAZY LOADING
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
