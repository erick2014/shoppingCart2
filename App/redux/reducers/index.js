
import { combineReducers } from 'redux'

//import custom reducers
import navReducer from './navigation'
import productsReducer from './products'

const appReducer = combineReducers({
	nav: navReducer,//navigation reducer
	products: productsReducer//custom reducer
});

export default appReducer
