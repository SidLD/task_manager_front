import React from 'react'
import { useState } from 'react'
import { Home } from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
