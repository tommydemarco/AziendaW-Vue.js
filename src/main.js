import { createApp } from 'vue';
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
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('photo-background', PhotoBackground);


app.use(router);
app.use(store);

app.mount('#app');
