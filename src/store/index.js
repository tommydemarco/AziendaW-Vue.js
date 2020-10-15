import { createStore } from 'vuex';

import productModule from './modules/products/index.js';
import employeesModule from './modules/employees/index.js';
import authModule from './modules/products/index.js';

const store = createStore({
    modules: {
        products: productModule,
        employees: employeesModule,
        auth: authModule
    }
})

export default store;