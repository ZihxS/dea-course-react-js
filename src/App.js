// parent component

import './App.css'
import React, { useEffect, useRef, useState } from 'react'
import Testing from './components/testing'

const App = () => {
  // kiri nilai, kanan buat set nilai nya, yang dalem kurung useState itu nilai default nya
  const [getLimit, setLimit] = useState(1)
  const [getMyName, setMyName] = useState("M Saleh S")
  const inputNameRef = useRef()

  // parameter array ini biar ga dirender terus (jadi pas direfresh aja atau pas buka web nya aja)
  useEffect(() => {
    console.log(inputNameRef.current)
    setMyName(inputNameRef.current.value)
  }, [getLimit])

  return (
    <>
      <Testing/>
      <center>
        <button onClick={() => setLimit((prev) => prev + 1)}>NAEKIN LIMIT</button>
        <button onClick={() => setLimit((prev) => prev - 1)}>TURUNKAN LIMIT</button>
        <br/>
        <input ref={inputNameRef} />
        {getMyName} {getLimit}
      </center>
    </>
  )
}

export default App
