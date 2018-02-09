import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './components/App'
import Gifs from './components/gifs/Gifs'

// import HomePage from './components/home/HomePage'


export default (
  <App>
    <Switch>
      <Route exact path="/" component={Gifs} />
    </Switch>
  </App>
)