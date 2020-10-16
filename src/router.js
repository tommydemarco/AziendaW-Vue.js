import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ContattiPage from './pages/ContattiPage.vue';
import BlogPage from './pages/BlogPage.vue';
import ProdottiPage from './pages/ProdottiPage.vue';
import ProdottoSingoloPage from './pages/ProdottoSingoloPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
//importing the store to check for authentication
import store from './store/index.js';

const routes = [
    { path: '/', component: HomePage, name: 'home'},
    { path: '/the-team', component: () => import(/* webpackChunkName: "HomePage" */  './pages/ChiSiamoPage'), name: 'the-team', meta: {requiresAuth: true} },
    { path: '/contacts', component: ContattiPage },
    { path: '/blog', component: BlogPage },
    { path: '/products', component: ProdottiPage },
    { path: '/products/:id', props: true, component: ProdottoSingoloPage },
    { path: '/:notFound(.*)', component: NotFoundPage },
    //restricted routes 
    { path: '/login', component: () => import(/* webpackChunkName: "LoginPage" */  './pages/auth/LoginPage'), meta: {requiresUnauth: true} },
    { path: '/logout', component: () => import(/* webpackChunkName: "LoginPage" */  './pages/auth/LogoutPage'), name: 'logout'}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

//adding a global navigation guard 
router.beforeEach(function(to, _, next) {
    if (to.meta.requiresAuth && !store.getters['auth/isAuthenticated']) {
        console.log(to)
        router.push('/login' + '?redirect=' + to.fullPath.replace('/', ''))
    } else if (to.meta.requiresUnauth && store.getters['auth/isAuthenticated']) {
        next('/home')
    } else {
        next()
    }
})

export default router