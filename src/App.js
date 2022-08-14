// parent component

import './App.css'
import React, { useState } from 'react'
import Testing from './components/testing'

const App = () => {
  // kiri nilai, kanan buat set nilai nya
  const [x, y] = useState()

  return (
    <>
      <Testing/>
    </>
  )
}

export default App
