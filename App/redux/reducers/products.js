/*Import constants*/
const { FETCH_PRODUCTS } = require('../constants');

const initialState = {
	productsList: [],
};

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PRODUCTS:
			const defaultProducts = [
				{
					key: '1', url: 'http://onapples.com/uploads/varieties/4iw8z5071wzp.png',
					text: 'Apple',
					description: 'Apples are good for your body, also are delicious'
				},
				{
					key: '2',
					url: 'https://vignette.wikia.nocookie.net/battlefordreamisland/images/a/ae/Bananas.png/revision/latest?cb=20170825134007',
					text: 'Bananas',
					description: 'Bananas are for monkeys...'
				},
				{
					key: '3',
					url: 'http://www.thienkhanh.vn/wp-content/uploads/2017/07/dua.png',
					text: 'Pinnaple',
					description: 'Pinnable is yellow, is pretty, and delicious'
				},
			]
			return Object.assign({}, state, { productsList: defaultProducts })

		default:
			return state;
	}
}

export default productsReducer;
