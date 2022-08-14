// parent component

import './App.css'
import React, { useState } from 'react'
import Testing from './components/testing'

const App = () => {
  // kiri nilai, kanan buat set nilai nya, yang dalem kurung useState itu nilai default nya
  const [getLimit, setLimit] = useState()

  return (
    <>
      {getLimit}
      <Testing/>
    </>
  )
}

export default App
