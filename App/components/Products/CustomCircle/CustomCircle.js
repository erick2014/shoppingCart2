import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const getIconName = iconName => {
	switch (iconName) {
		case 'add':
			return 'ios-add'
		case 'eye':
			return 'ios-eye-outline'
		case 'shopping':
			return 'ios-redo-outline'
	}
}

const CustomCircle = props => {
	const { iconName, onClickHandler } = props

	name = getIconName(iconName)

	return (
		<TouchableNativeFeedback onPress={onClickHandler} background={TouchableNativeFeedback.SelectableBackground()}>
			<View style={styles.circle}>
				<Icon name={name} size={30} color="#4F8EF7" />
			</View>
		</TouchableNativeFeedback>
	)
}

const styles = StyleSheet.create({
	circle: {
		position: 'absolute',
		width: 30,
		height: 30,
		borderColor: '#000',
		top: 2,
		left: 8,
		borderRadius: 160 / 2,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default CustomCircle

