import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import About from './pages/About'

const App = () => {
  return (
    <>
    <div className='pattern'></div>
    <main>
      <Nav />
        <Routes>
          <Route path='/about' element={<About />} />
        </Routes>
    </main>
    </>
  )
}

export default App