import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];


const CreateRouter = () => {
  return createRouter({
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/'),
    // history: createWebHistory(process.env.BASE_URL),
    routes,
  });
}

export {
  CreateRouter
};
