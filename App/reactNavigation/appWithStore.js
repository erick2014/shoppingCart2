import React, { Component } from 'react'
import AppNavigator from './appNavigation'
import { AppProvider } from '../context/appContext'

class RootApp extends Component {
  render() {
    return (
      <AppProvider>
        <AppNavigator />
      </AppProvider>
    );
  }
}

export default RootApp