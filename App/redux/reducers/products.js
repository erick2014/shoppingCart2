/*Import constants*/
const {
	FETCH_PRODUCTS,
	SUCCESS_PRODUCTS
} = require('../constants');

const initialState = {
	productsList: [],
	isFetching: false
};

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PRODUCTS:
			return Object.assign({}, state, { isFetching: true })
		case SUCCESS_PRODUCTS:
			return Object.assign({}, state, {
				productsList: action.payload, isFetching: false
			})
		default:
			return state;
	}
}



export default productsReducer;
