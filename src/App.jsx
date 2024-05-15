import './App.css'
import { ShowSlider } from './Swiper'
import { DarkLightMode } from './DarkLightMode'
import { useState } from 'react';

function App() {
  const [estateMode, setEstateMode] = useState(true);
  return (
    <>
      <div className={estateMode? 'darkMode' : 'lightMode'}></div>
      <DarkLightMode estateMode={estateMode} setEstateMode={setEstateMode}></DarkLightMode>
      <ShowSlider></ShowSlider>
    </>
  )
}

export default App
