import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import CustomCirle from './CustomCircle/CustomCircle'

class ProductsList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			products: [
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
		}
	}

	onClickEyeIcon = clickedProduct => {
		const { navigation: { navigate } } = this.props;
		navigate('ProductDetail', { 'product': clickedProduct['item'] })
	}

	getItemList = photo => {
		return (
			<View style={styles.itemList}>
				<View style={styles.itemListLeftColumn}>
					<Image source={{ uri: photo.item.url }} style={styles.itemListImage} />
				</View>
				<View style={styles.itemListRightColumn}>

					<View style={styles.iconWrapper}>
						<CustomCirle iconName={'add'} onClickHandler={() => { }} />
					</View>

					<View style={styles.iconWrapper}>
						<CustomCirle iconName={'eye'} onClickHandler={() => { this.onClickEyeIcon(photo) }} />
					</View>

					<View style={styles.iconWrapper}>
						<CustomCirle iconName={'shopping'} onClickHandler={() => { }} />
					</View>

				</View>
			</View >
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
	itemList: {
		flex: 1,
		flexDirection: 'row',
		marginBottom: 10
	},
	itemListImage: {
		width: 150,
		height: 150
	},
	imagesList: {
		height: 400,
		marginBottom: 10
	},
	mainTitle: {
		fontSize: 20,
		marginTop: 20,
		marginBottom: 20
	},
	iconWrapper: {
		width: 50,
		height: 50
	},
	itemListRightColumn: {
		width: 50,
		height: 150
	},
	itemListLeftColumn: {
		width: 150,
		height: 150,
		backgroundColor: 'powderblue'
	}
})

export default ProductsList