import React from 'react'

import { FlipCard } from 'react-flippingcard'


const App = () => {
  return <FlipCard front={<div><h1>Front face</h1></div>} back={<div><h1>Back face</h1></div>} />
}

export default App
