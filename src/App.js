// parent component

import './App.css'
import React, { useEffect, useRef, useState } from 'react'
import Images from './components/images'
import MainLayouts from './components/Layouts/main.layouts'

const App = () => {
  return (
    <>
      <MainLayouts>
        <Images title="INI IMAGES" description="IMAGES DESCRIPTION" />
      </MainLayouts>
    </>
  )
}

export default App
