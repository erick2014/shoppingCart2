/*Import constants*/
const { FETCH_PRODUCTS } = require('../constants');

const fetchProducts = () => {
	return {
		type: FETCH_PRODUCTS
	}
}

export const productsActions = {
	fetchProducts
}
