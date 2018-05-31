//react stuff
import React, { Component } from 'react'
import { AppConsumer } from '../../context/appContext'
//redux stuff 
import { connect } from 'react-redux'
import { productsActions } from '../../redux/actions/products';
//react native stuff
import { Text, View, StyleSheet, FlatList, Image, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
//components
import CustomCirle from './CustomCircle/CustomCircle'
// realm stuff
import { getAllRecords } from '../../realmDb/realmDb'


class ProductsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    let products = getAllRecords('Products')
    this.setState({ products: Object.values(products) })
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
      </View>
    )
  }

  buildContent = () => {
    const { products } = this.state
    return (
      <AppConsumer>
        {(context) => {
          const { sessionInfo } = context
          return (
            <View style={styles.container}>
              <View>
                <Text>Hello {sessionInfo.userName}</Text>
              </View>
              <Button onPress={() => { this.props.navigation.navigate('Login') }} title='Go to login' />
              <View style={styles.imagesList}>
                <FlatList
                  keyExtractor={item => item.id}
                  data={products}
                  renderItem={this.getItemList}
                  keyExtractorField="id"
                />
              </View>
            </View>
          )
        }}
      </AppConsumer>
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
