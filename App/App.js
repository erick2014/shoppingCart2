import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

//export App component binding it with the store and the app navigator
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Welcome to React Native! </Text>
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
});

export default App;