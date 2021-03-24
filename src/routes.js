import ItemsView from './views/ItemsView.vue';
import LoginView from './views/LoginView.vue';
import AdminView from './admin/AdminView.vue';

const routes = [
    { path: '/items', component: ItemsView, name: 'items' },
    { path: '/login', component: LoginView, name: 'login' },
    { path: '/admin', component: AdminView, name: 'admin' } 
];

export default routes;
