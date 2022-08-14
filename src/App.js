// parent component

import './App.css'
import React, { useEffect, useRef, useState } from 'react'
import Images from './components/images'
import MainLayouts from './components/Layouts/main.layouts'

const App = () => {
  return (
    <>
      <MainLayouts>
        <h1>HELLO</h1>
        <p>AHAHAHAHAHAHA</p>
        <Images title="INI IMAGES" description="IMAGES DESCRIPTION" />
      </MainLayouts>
    </>
  )
}

export default App
