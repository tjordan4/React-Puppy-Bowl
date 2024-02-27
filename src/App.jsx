import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'

const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/tjordan4/players" 
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path='/players/:id element={<SinglePlayer />}'/>
    </Routes>
    </>
  )
}

export default App
