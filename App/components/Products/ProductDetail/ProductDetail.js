import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native'

const ProductDetail = props => {
  const { navigation: { state: { params: { product } } } } = props

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.productTitle}> {product.text} </Text>
      </View>
      <View>
        <Image source={{ uri: product.url }} style={styles.productImage} />
      </View>
      <View style={styles.productDescription}>
        <Text>{product.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#eaf0f3',
    marginTop: 40
  },
  productTitle: { fontSize: 22 },
  productImage: { width: 150, height: 150 },
  productDescription: { marginTop: 20 },
})

export default ProductDetail

