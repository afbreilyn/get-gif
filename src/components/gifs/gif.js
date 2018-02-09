import React, {Component} from 'react'
import './gifs.css'

class Gif extends Component {
  render() {
    let {
      gif
    } = this.props

    const src = gif.images.preview_gif.url

    return(
      <div className="card">
        <div className="gif-wrapper">
          <img src={src}
            className="gif-preview"
            alt={gif.title} />
        </div>
      </div>
    )
  }
}

export default Gif