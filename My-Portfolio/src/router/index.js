import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import Project from '../views/Nutrigo.vue';
import Firzzle from '../views/Nutrigo.vue';
// import Sotory from '../views/Sotory.vue';
import Nutrigo from '../views/Nutrigo.vue';
import MVTI from '../views/MVTI.vue';
import Crops from '../views/Crops.vue';


const routes = [
  { path: '/', component: Main },
  { path: '/project', component: Project },
  { path: '/Firzzle', component: Firzzle },
  // { path: '/Sotory', component: Sotory },
  { path: '/Nutrigo', component: Nutrigo },
  { path: '/MVTI', component: MVTI },
  { path: '/Crops', component: Crops },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
