import { createStore } from 'vuex';

import productModule from './modules/products/index.js';

const store = createStore({
    modules: {
        products: productModule,
    }
})

export default store;