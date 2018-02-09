import React, {Component} from 'react'
import Field from '../util/field'
import Button from '../util/button'
import './search-bar.css'

class SearchBar extends Component {
  render() {
    let {
      handleSubmit,
      handleChange,
      value
    } = this.props

    return (
      <form
        onSubmit={e => handleSubmit(e)}
        className="search-form"
      >
        <Field
          type="text"
          placeHolder={"Search for a GIF here..."}
          onChange={handleChange}
          value={value}
          ref="searchInput" />
        <Button
          label={'Search'}
          className="search-bar-button" />
      </form>
    )
  }
}

export default SearchBar
