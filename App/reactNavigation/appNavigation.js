import React, { Component } from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'

//Products components
import ProductsList from '../components/Products/ProductsList'
import ProductDetail from '../components/Products/ProductDetail/ProductDetail'
//Shopping cart component
import ShoppingCart from '../components/ShoppingCart'
import Login from '../components/Login/login'

const AppNavigation = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null,
    })
  },
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
}, {
    initialRouteName: 'Login'
  })


export default AppNavigation