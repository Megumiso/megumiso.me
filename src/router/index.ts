/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../pages/index.vue")
    },
    {
      path: "/about_fanbox",
      name: "Fanbox",
      component: () => import("../pages/fanbox.vue")
    }
  ]
})

export default router