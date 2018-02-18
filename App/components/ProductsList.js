import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'

class ProductsList extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Text>Products list Screen</Text>
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

export default ProductsList