import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/DashboardPage.vue";

const routes = [{ path: "/", component: Dashboard }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
