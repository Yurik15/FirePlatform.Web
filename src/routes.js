import ItemsView from './views/ItemsView.vue';
import LoginView from './views/LoginView.vue';

const routes = [
    { path: '/items', component: ItemsView, name: 'items' },
    { path: '/login', component: LoginView, name: 'lgin' },
];

export default routes;
