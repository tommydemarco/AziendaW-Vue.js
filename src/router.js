import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ContattiPage from './pages/ContattiPage.vue';
import BlogPage from './pages/BlogPage.vue';
import ProdottiPage from './pages/ProdottiPage.vue';
import ProdottoSingoloPage from './pages/ProdottoSingoloPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/chi-siamo', component: () => import(/* webpackChunkName: "HomePage" */  './pages/ChiSiamoPage') },
    { path: '/contatti', component: ContattiPage },
    { path: '/blog', component: BlogPage },
    { path: '/prodotti', component: ProdottiPage },
    { path: '/prodotti/:id', props: true, component: ProdottoSingoloPage },
    { path: '/:notFound(.*)', component: NotFoundPage },
    //restricted routes 
    { path: '/login', component: () => import(/* webpackChunkName: "LoginPage" */  './pages/auth/LoginPage') }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router