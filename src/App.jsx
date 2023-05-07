import { useState } from 'react'
import './App.css'
import { Start } from './start'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Start/>
    </>
  )
}

export default App
