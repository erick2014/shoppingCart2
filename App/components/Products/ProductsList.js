//react stuff
import React, { Component } from 'react'
//redux stuff 
import { connect } from 'react-redux'
import { productsActions } from '../../redux/actions/products';
//react native stuff
import { Text, View, StyleSheet, FlatList, Image, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
//components
import CustomCirle from './CustomCircle/CustomCircle'

import RealmDb from '../../realmDb/realmDb'

import { Container } from "constate";

const initialState = { count: 0, products: [] };

const actions = {
  increment: (something) => state => {
    console.log('current state?', state)
    return { count: state.count + 1 }
  },
  decrement: () => state => {
    return { count: state.count - 1 }
  }
};

const onMount = ({ setState }) => {
  const products = RealmDb.getAllRecords('Products')
  if (Object.keys(products).length) {
    setState({ products: Object.values(products) })
  }
};


const MyList = props => {
  const { getItemList } = props
  return (
    <Container initialState={initialState} actions={actions} onMount={onMount}>
      {
        ({ count, increment, products }) => {
          let productsList = []
          return (
            <View>
              <Text style={styles.mainTitle}> {products.length} Fruits List Available </Text>
              <FlatList
                keyExtractor={item => item.id}
                data={products}
                renderItem={getItemList}
                keyExtractorField="id"
              />
            </View>
          )
        }
      }
    </Container>
  )

}

class ProductsList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.fetchProducts()
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

  buildContent = () => {
    return (
      <View style={styles.container}>
        <Button onPress={() => { this.props.navigation.navigate('Login') }} title='Go to login' />
        <View style={styles.imagesList}>
          <MyList getItemList={this.getItemList} />
        </View>
      </View>
    )
  }

  render() {
    return this.buildContent()
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

const mapStateToProps = state => ({
  products: state.products,
});

export default ProductsList
