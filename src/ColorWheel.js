import React, { Component } from 'react'

class ColorWheel extends Component {
  state = {
    blue: [],
    green: [],
    red: [],
  }

  componentDidMount() {
    const { results } = this.props

    results.forEach(result => {
      const colorSwatches = colorSwatchesFromImageUrl(result.urls.small)
      this.setState()
    })
    // go through each result
    // result.urls.small
    // pull out color-based blocks for each block within in each result
    // add blocks to the right div based on color
  }

  render() {
    return (
      <div>
        <canvas id="red" />
        <canvas id="green" />
        <canvas id="blue" />
      </div>
    )
  }
}

export default ColorWheel
