// parent component

import './App.css'
import React, { useEffect, useRef, useState } from 'react'
import Albums from './components/Albums/main.albums'
import MainLayouts from './components/Layouts/main.layouts'

const App = () => {
  return (
    <>
      <MainLayouts>
        <Albums title="Image API" description="We fetch random image API from third party." />
      </MainLayouts>
    </>
  )
}

export default App
