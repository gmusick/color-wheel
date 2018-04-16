import ColorWheel from './ColorWheel'
import ImageSearch from './ImageSearch'
import React from 'react'

const App = () => {
  return (
    <div>
      <ImageSearch>{results => <ColorWheel results={results} />}</ImageSearch>
    </div>
  )
}

export default App
