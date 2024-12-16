import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import About from '../views/About.vue';
import Project from '../views/Project.vue';
import Links from '../views/Links.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/Experience', component: About },
  { path: '/project', component: Project },
  { path: '/links', component: Links },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
