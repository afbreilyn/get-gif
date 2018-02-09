import React, {Component} from 'react'
import './pastSearches.css'

class PastSearches extends Component {
  render() {
    let {
      pastSearches,
      onclick
    } = this.props

    let eachPastSearch = pastSearches.map((search, idx) => {
      return(
        <div key={idx}
          onClick={ e => onclick(search) }
          className="text-wrapper"
        >
          <p>
            {search}
          </p>
        </div>
      )
    })

    return(
      <div className="past-search-wrapper">
        <h3 className="title">
          Past Searches
        </h3>
        <div>
          {eachPastSearch}
        </div>
      </div>
    )
  }
}

export default PastSearches
