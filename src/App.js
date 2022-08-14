// parent component

import './App.css'
import React, { useEffect, useRef, useState } from 'react'
import Albums from './components/Albums/main.albums'
import MainLayouts from './components/Layouts/main.layouts'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"

const App = () => {
  return (
    <>
      <MainLayouts>
        <Router>
          <Routes>
            <Route path="/" element={<h1>HOMEPAGE</h1>} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/posts" element={<h1>POSTING</h1>} />
            <Route path="*" element={<h1 className='text-center text-danger'>404 NOT FOUND</h1>} />
          </Routes>
        </Router>
        {/* <Albums title="Image API" description="We fetch random image API from third party." /> */}
      </MainLayouts>
    </>
  )
}

export default App
