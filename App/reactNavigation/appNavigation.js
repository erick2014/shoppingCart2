import { TabNavigator, StackNavigator } from 'react-navigation'

//Products components
import ProductsList from '../components/Products/ProductsList'
import ProductDetail from '../components/Products/ProductDetail/ProductDetail'
//Shopping cart component
import ShoppingCart from '../components/ShoppingCart'

const productsStack = StackNavigator({
	Products: {
		screen: ProductsList,
		navigationOptions: ({ navigation }) => ({
			header: null,
		})
	},
	ProductDetail: {
		screen: ProductDetail,
		navigationOptions: ({ navigation }) => ({
			header: null,
		})
	},
})

const AppNavigation = TabNavigator(
	{
		Products: { screen: productsStack },
		Cart: { screen: ShoppingCart }
	}
)

export default AppNavigation