import ImageSearchForm from './ImageSearchForm'
import React, { Component, Fragment } from 'react'

class ImageSearch extends Component {
  state = {
    results: [],
  }

  onSearch = results => {
    this.setState({ results })
  }

  render() {
    const { results } = this.state

    return (
      <Fragment>
        <ImageSearchForm onSearch={this.onSearch} />
        {results.length > 0 && this.props.children(results)}
      </Fragment>
    )
  }
}

export default ImageSearch
