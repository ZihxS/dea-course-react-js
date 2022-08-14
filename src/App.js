// parent component

import './App.css'
import React, { useEffect, useState } from 'react'
import Testing from './components/testing'

const App = () => {
  // kiri nilai, kanan buat set nilai nya, yang dalem kurung useState itu nilai default nya
  const [getLimit, setLimit] = useState(1)

  // array kosong ini biar ga dirender terus (jadi pas direfresh aja atau pas buka web nya aja)
  useEffect(() => {
    console.log("render")
  }, [])

  return (
    <>
      <Testing/>
      <center>
        <button onClick={() => setLimit((prev) => prev + 1)}>NAEKIN LIMIT</button>
        <button onClick={() => setLimit((prev) => prev - 1)}>TURUNKAN LIMIT</button>
        <br/>
        {getLimit}
      </center>
    </>
  )
}

export default App
