// parent component

import './App.css'
import React, { useEffect, useRef, useState } from 'react'
import Images from './components/images'
import MainLayouts from './components/Layouts/main.layouts'

const App = () => {
  return (
    <>
      <MainLayouts>
        <Images title="Image API" description="We fetch random image API from third party." />
      </MainLayouts>
    </>
  )
}

export default App
