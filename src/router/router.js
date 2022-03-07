import Home from '../pages/Home.vue';
import Quiz from '../pages/Quiz.vue';
import Result from '../pages/Result.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/quiz', component: Quiz },
  { path: '/result', component: Result },
];
const history = createWebHistory();

const router = createRouter({ routes, history });

export default router;
