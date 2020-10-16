import { createStore } from 'vuex';

import productModule from './modules/products/index.js';
import employeesModule from './modules/employees/index.js';
import authModule from './modules/auth/index.js';
import blogModule from './modules/blog/index.js';

const store = createStore({
    modules: {
        products: productModule,
        employees: employeesModule,
        auth: authModule,
        blog: blogModule
    }
})

export default store;