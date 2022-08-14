// parent component

import './App.css'
import React, { useState } from 'react'
import Testing from './components/testing'

const App = () => {
  // kiri nilai, kanan buat set nilai nya, yang dalem kurung useState itu nilai default nya
  const [getLimit, setLimit] = useState(1)

  return (
    <>
      <Testing/>
      <center>
        <button onClick={console.log("asdasdasdasd")}>NAEKIN LIMIT</button>
        <br/>
        {getLimit}
      </center>
    </>
  )
}

export default App
