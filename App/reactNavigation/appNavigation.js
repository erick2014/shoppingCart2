import { TabNavigator } from 'react-navigation'

import ProductsList from '../components/Products/ProductsList'
import ShoppingCart from '../components/ShoppingCart'

const AppNavigation = TabNavigator({
	Products: { screen: ProductsList },
	Cart: { screen: ShoppingCart }
})

export default AppNavigation