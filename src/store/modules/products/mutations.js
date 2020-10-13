export default {
    homePageProductsLoad(state, payload) {
        state.homePageProducts = payload
    },
    loadSingleProduct(state, payload) {
        state.singleProduct = payload
        console.log('data committed')
    },
    setSingleProduct(state, id) {
        state.singleProduct = state.homePageProducts.find(product => product.id == id)
    },
    fetchProducts(state, payload) {
        state.allProducts = payload
    }
};