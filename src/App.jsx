import { useState } from 'react'
import './App.css'
import UserContext from './Contexts/UserContext';
import { Routes, Route } from 'react-router-dom'
import Home from '../src/Components/Home';
import Header from '../src/Components/Header';
import Articles from './Components/Articles';

function App() {

  const [currentUser, setCurrentUser] = useState('tickle122');

  return (
    <UserContext.Provider value={{currentUser: currentUser, setCurrentUser: setCurrentUser}} >
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/articles' element={<Articles/>}/>
      </Routes>
    </UserContext.Provider>
   
  )
}

export default App
