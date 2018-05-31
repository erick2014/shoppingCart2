import React, { Component } from 'react'

// initial state
const initialState = {
  sessionInfo: {
    userName: '',
    lastName: ''
  }
}

// context
export const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer

export class AppProvider extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  _setSessionInfo = info => {
    console.log('calling _setSessionInfo ', info);
    this.setState({ sessionInfo: info })
  }

  render() {
    return (
      <AppContext.Provider value={{
        sessionInfo: this.state.sessionInfo,
        setSessionInfo: this._setSessionInfo
      }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}