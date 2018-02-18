import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import AppNavigation from './reactNavigation/appNavigation'

//export App component binding it with the store and the app navigator
class App extends Component {
  render() {
    return (
      <AppNavigation />
    )
  }
}

export default App;