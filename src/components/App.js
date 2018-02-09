import React from 'react'
import { withRouter } from 'react-router-dom'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App_container">
        { this.props.children }
      </div>
    )
  }
}

export default withRouter(App)
