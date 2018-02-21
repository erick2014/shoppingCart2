import React, { Component } from 'react'

import {
	addNavigationHelpers,
} from 'react-navigation'

import {
	createStore,
	applyMiddleware,
	combineReducers,
} from 'redux'

import {
	createReduxBoundAddListener,
	createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'

import { Provider, connect } from 'react-redux'

import AppNavigator from './appNavigation'
import appReducer from '../redux/reducers'

// Note: must be run before createReduxBoundAddListener
const middleware = createReactNavigationReduxMiddleware(
	"root",
	state => state.nav,
)

const addListener = createReduxBoundAddListener("root")

class App extends Component {
	render() {
		return (
			<AppNavigator navigation={
				addNavigationHelpers({
					dispatch: this.props.dispatch,
					state: this.props.nav,
					addListener,
				})
			} />
		);
	}
}

const AppWithNavigationState = connect(
	state => ({ nav: state.nav })
)(App)

const store = createStore(
	appReducer,
	applyMiddleware(middleware),
)

class RootApp extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}

export default RootApp