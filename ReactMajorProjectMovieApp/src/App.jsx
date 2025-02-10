import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Loader from './Components/partials/Loader'
import Trending from './Components/Trending'
import Popular from './Components/Popular'
import Movie from './Components/Movie'
import Tvshows from './Components/Tvshows'
import People from './Components/People'

function App() {
  return (
    <div className='bg-[#1F1E24] w-full h-screen flex'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/movie' element={<Movie/>}/>
        <Route path='/tvshows' element={<Tvshows/>}/>
        <Route path='/people' element={<People/>}/>
      </Routes>
    </div>
  )
}

export default App