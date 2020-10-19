export default {
    async homePageProducts(context) {
        const response = await fetch('https://djshortcats.website/api/azienda/list/');

        if(!response.ok) {
            //do something
        } else {
            const responseData = await response.json();
            const products = responseData;
            context.commit('homePageProductsLoad', products); 
        }
    },
    async loadSingleProduct(context, id) {
        const response = await fetch('https://djshortcats.website/api/azienda/id/' + id);
        
        if(!response.ok) {
            //some error handling
        }

        const responseData = await response.json();
        const singleProduct = responseData[0]

        context.commit('loadSingleProduct', singleProduct)
    },
    async fetchProducts(context) {
        const response = await fetch('https://djshortcats.website/api/azienda/list/')
        const responseDate = await response.json() 

        const products = responseDate

        context.commit('fetchProducts', products)
    }
};