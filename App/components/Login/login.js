import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { AppConsumer } from '../../context/appContext'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  loginUser = contextCb => {
    contextCb({ 'userName': 'erick', 'lastName': 'garcia' })
    this.props.navigation.navigate('Products')
  }

  render() {
    const { navigation: { navigate } } = this.props
    return (
      <AppConsumer>
        {(context) => {
          return (
            <View>
              <Text>Login page</Text>
              <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
                <Button onPress={() => { this.loginUser(context.setSessionInfo) }} title="Go to Products" />
              </View>
            </View>
          )
        }}
      </AppConsumer>

    )
  }
}

export default Login