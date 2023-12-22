import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Error from './pages/Error'

function App() {
  return (
    <div className='w-[100vw] h-[100vh] bg-hero-pattern text-Light2 overflow-y-auto'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  )
}

export default App
