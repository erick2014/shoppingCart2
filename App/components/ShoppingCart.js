import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'

class ShoppingCart extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Text>Shopping list screen</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
})


export default ShoppingCart