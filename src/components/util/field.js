import React, {Component} from 'react'
import './field.css'

class Field extends Component {
  render() {
    let {
      type,
      name,
      label,
      value,
      onChange,
      placeHolder
    } = this.props

    return(
      <label>
        {label}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
          className="field" />
      </label>
    )
  }
}

export default Field
