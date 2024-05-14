import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ShowSlider } from './Swiper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShowSlider></ShowSlider>
    </>
  )
}

export default App
