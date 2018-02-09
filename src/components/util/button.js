import React, {Component} from 'react'
import './button.css'

class Button extends Component {
  render() {
    let {
      label,
      onClick,
      className
    } = this.props

    return(
      <button
        onClick={onClick}
        className={`button ${className}`}
      >
        {label}
      </button>
    )
  }
}

export default Button
