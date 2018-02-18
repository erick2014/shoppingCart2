import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'

class ProductsList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			products: [
				{ key: '1', url: 'http://onapples.com/uploads/varieties/4iw8z5071wzp.png', text: 'Apple' },
				{ key: '2', url: 'https://vignette.wikia.nocookie.net/battlefordreamisland/images/a/ae/Bananas.png/revision/latest?cb=20170825134007', text: 'Bananas' },
				{ key: '3', url: 'http://www.thienkhanh.vn/wp-content/uploads/2017/07/dua.png', text: 'Pinnaple' },
			]
		}
	}

	getItemList = photo => {
		return (
			<View style={styles.imgItem}>
				<Image source={{ uri: photo.item.url }} style={styles.image} />
			</View>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.mainTitle}>
					Fruits List
        </Text>
				<View style={styles.imagesList}>
					<FlatList
						data={this.state.products}
						renderItem={this.getItemList}
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#eaf0f3',
	},
	image: {
		width: 150,
		height: 150
	},
	imgItem: {
		margin: 20,
		backgroundColor: '#d9ebf5'
	},
	imagesList: {
		height: 300,
		marginBottom: 10
	},
	mainTitle: {
		fontSize: 20,
		marginTop: 40
	}
})

export default ProductsList