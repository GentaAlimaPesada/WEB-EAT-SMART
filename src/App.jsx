import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-yellow-300">
      Hello world!
      </h1>
      <button className='btn-primary'>
        halo
      </button>
    </>
  )
}

export default App