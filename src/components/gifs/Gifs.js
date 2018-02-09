import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as gifActions from '../../actions/gifActions'

import Gif from './gif'
import './gifs.css'

import PastSearches from '../pastSearches/pastSearches'

import SearchBar from '../inputs/search-bar'

class Gifs extends Component {    
  state = {
    value: ''
  }

  componentWillMount() {
    this.props.actions.getTrendingGifs()
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  searchGif = (e) => {
    e.preventDefault()

    if (this.state.value.length > 0) {
      this.props.actions.searchGifs(this.state.value)
      this.setState({
        message: null
      })
    } else {
      this.props.actions.searchGifs('kitties')
      this.setState({
        message: 'HERE ARE SOME CUTE KITTIES!!!'
      })
    }
  }

  previousSearch = (str) => {
    this.props.actions.previousSearch(str)
  }

  render() {
    let {
      data
    } = this.props

    let {
      value,
      message
    } = this.state

    let trendingGIFS = data.gifs.gifs.map((gif,idx) => {
      return(
        <Gif key={idx}
          gif={gif} />
      )
    })

    return(
      <div className="Gif_page_container">
        <div className="searchBar">
          <SearchBar
            handleSubmit={this.searchGif}
            handleChange={this.handleChange}
            value={ value } />
        </div>

        <div className="gif-container">
          <div className="message-wrapper">
            { message
              ? <h2>
                  {message}
                </h2>
              : null
            }
          </div>
          { trendingGIFS.length > 0
            ? trendingGIFS
            : <h2> No results returned :( </h2>
          }
        </div>
        <PastSearches
          pastSearches={data.gifs.pastSearches}
          onclick={this.previousSearch} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state
})

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(gifActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gifs)
