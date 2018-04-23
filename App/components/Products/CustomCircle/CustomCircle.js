import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native'
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

const buildCircle = props => {
	const { iconName, onClickHandler } = props

	const name = getIconName(iconName)

	const circleContent = (
		<View style={styles.circle}>
			<Icon name={name} size={30} color="#4F8EF7" />
		</View>
	)
	// enable the TouchableNativeFeedback only android
	if (Platform.OS == "android") {
		return (
			<TouchableNativeFeedback onPress={onClickHandler} background={TouchableNativeFeedback.SelectableBackground()}>
				{circleContent}
			</TouchableNativeFeedback>
		)
	} else {
		return circleContent
	}

}

const CustomCircle = props => {

	content = buildCircle(props)

	return content
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

