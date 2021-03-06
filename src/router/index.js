import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/views/Layout";

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
