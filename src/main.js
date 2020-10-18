import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js';

const app = createApp(App);

//=====> BOOTSTRAP SETTING UP 
import 'bootstrap/dist/css/bootstrap.min.css';

//=====> GLOBAL COMPONENTS
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import PhotoBackground from './components/UI/PhotoBackground.vue';
import BaseSpinner from './components/UI/BaseSpinner.vue';

//lazy loading less frequently loaded components
const BaseAlert = defineAsyncComponent(() => import('./components/UI/BaseAlert.vue'))
const BaseSpinnerF = defineAsyncComponent(() => import('./components/UI/BaseSpinnerF.vue'))
const BlogCard = defineAsyncComponent(() => import('./components/UI/BlogCard.vue'))

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('photo-background', PhotoBackground);
app.component('base-alert', BaseAlert);
app.component('base-spinnerf', BaseSpinnerF);
app.component('base-spinner', BaseSpinner);
app.component('blog-card', BlogCard);

app.use(router);
app.use(store);

app.mount('#app');
