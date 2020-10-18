import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import BlogPage from './pages/BlogPage.vue';
import ProdottiPage from './pages/ProdottiPage.vue';
import ProdottoSingoloPage from './pages/ProdottoSingoloPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import BlogArticlePage from './pages/BlogArticlePage.vue';

//importing the store to check for authentication
import store from './store/index.js';

const routes = [
    { path: '/', component: HomePage, name: 'home'},
    { path: '/the-team', component: () => import(/* webpackChunkName: "TheTeam" */  './pages/ChiSiamoPage'), name: 'the-team', meta: {requiresAuth: true} },
    { path: '/contacts', component: () => import(/* webpackChunkName: "Contacts" */  './pages/ContattiPage'), meta: {requiresAuth: true}},
    { path: '/blog', component: BlogPage, name: 'blog'},
    { path: '/blog/:id', props: true, component: BlogArticlePage},
    { path: '/products', component: ProdottiPage },
    { path: '/products/:id', props: true, component: ProdottoSingoloPage },
    //policies 
    { path: '/privacy-policy', component: () => import(/* webpackChunkName: "PrivacyPolicy" */  './pages/policies/PrivacyPolicyPage')},
    { path: '/cookies-policy', component: () => import(/* webpackChunkName: "CookiesPolicy" */  './pages/policies/CookiesPolicyPage')},
    //restricted routes 
    { path: '/login', component: () => import(/* webpackChunkName: "LoginPage" */  './pages/auth/LoginPage'), meta: {requiresUnauth: true} },
    { path: '/logout', component: () => import(/* webpackChunkName: "LogoutPage" */  './pages/auth/LogoutPage'), name: 'logout'},
    //404 not found
    { path: '/:notFound(.*)', component: NotFoundPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    //adding scroll behaviour for enhanced user experience
    scrollBehavior(_, _2, savedPosition) {
        if(savedPosition) {
            return savedPosition
        } else {
            return { top: 0, left: 0}
        }
    }
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