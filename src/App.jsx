import './App.css'
import { Routes, Route } from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import NavBar from './components/NavBar'
import NewPlayerForm from './components/NewPlayerForm'

const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/tjordan4/players" 
function App() {

  return (
    <>
      <header>
        <h1>Welcome to the 2024 Puppy Bowl!</h1>
        <h3>Sponsored by the Humane Society of Utah</h3>
      </header>
      
      <NavBar className='navbar' />
      <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path='/players/add' element={<NewPlayerForm />}/>
        <Route path='/players/:id' element={<SinglePlayer />}/>
      </Routes>

      <footer>

      </footer>
    </>
  )
}

export default App
