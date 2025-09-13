import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import About from './pages/About'

const App = () => {
  return (
    <>
    <div className='pattern'></div>
    <main>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </main>
    </>
  )
}

export default App