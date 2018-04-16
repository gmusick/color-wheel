import React, { Component } from 'react'

class ImageSearchForm extends Component {
  state = {
    query: '',
  }

  onChange = e => {
    this.setState({ query: e.target.value })
  }

  onSubmit = async e => {
    e.preventDefault()

    const url = `https://api.unsplash.com/search/photos/?client_id=${
      process.env.REACT_APP_UNSPLASH_ACCESS_KEY
    }&query=${this.state.query}`
    const response = await fetch(url)
    const json = await response.json()

    this.props.onSearch(json.results)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input onChange={this.onChange} type="text" />
      </form>
    )
  }
}

export default ImageSearchForm
