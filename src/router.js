import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import ContactPage from './views/ContactPage.vue';
import AddEditPage from './views/AddEditPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/contact/:id', name: 'ContactPage', component: ContactPage },
  { path: '/add', name: 'AddPage', component: AddEditPage },
  { path: '/edit/:id', name: 'EditPage', component: AddEditPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
