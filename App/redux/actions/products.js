/*Import constants*/
const {
	FETCH_PRODUCTS,
	SUCCESS_PRODUCTS
} = require('../constants');

import RealmDb from '../../realmDb/realmDb'
import fakeData from '../../utils/fakeData'

const getCurrentProductsInDb = () => {
	const products = RealmDb.getAllRecords('Products')
	//check the products lenght
	if (Object.keys(products).length) {
		return products.map(item => item)
	} else {
		return []
	}
}

const insertProductsInDb = () => {
	//remove all current products before inserting the new data
	RealmDb.deleteAllRecords('Products')
	//get some fake data to insert
	RealmDb.saveAllRecords('Products', fakeData)
	return fakeData
}

const fetchingProducts = () => ({
	type: FETCH_PRODUCTS
})

const successProducts = data => ({
	type: SUCCESS_PRODUCTS,
	payload: data
})

const fetchProducts = () => (dispatch, getState) => {

	//indicate that we are going to fetch the products
	dispatch(fetchingProducts())

	return new Promise((resolve, reject) => {
		//get all records in the local db
		let currentProducts = getCurrentProductsInDb()
		//check if we find any records
		if (!currentProducts.length) currentProducts = insertProductsInDb()

		resolve(currentProducts)

	})
		.then(resp => {
			dispatch(successProducts(resp))
		})
		.catch(resp => {
			console.log('something were wrong')
		})

}

export const productsActions = {
	fetchProducts
}
