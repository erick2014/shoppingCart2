import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation: { navigate } } = this.props
    return (
      <View>
        <Text>Login page</Text>
        <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
          <Button
            onPress={() => { navigate('Products') }}
            title="Go to Products"
          />
        </View>
      </View>
    )
  }
}

export default Login