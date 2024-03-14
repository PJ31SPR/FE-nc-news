import { useState } from 'react'
import './App.css'
import UserContext from './Contexts/UserContext';
import { Routes, Route } from 'react-router-dom'
import Home from '../src/Components/Home';
import Header from '../src/Components/Header';
import Articles from './Components/Articles';
import ArticlePage from './Components/ArticlePage';
import Topics from './Components/Topics';
import ArticlesByTopic from './Components/ArticlesByTopic';
import Users from './Components/Users';


function App() {

  const [currentUser, setCurrentUser] = useState({username: '', avatar_url: ""});

  return (
   
    <UserContext.Provider value = {{currentUser: currentUser, setCurrentUser: setCurrentUser}} >
      <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/articles' element={<Articles />}/>
        <Route path= '/articles/:article_id' element={<ArticlePage />} /> 
        <Route path= '/topics' element={<Topics />} />
        <Route path= 'articles/topics/:slug' element={<ArticlesByTopic />}/>
        <Route path= 'users' element={<Users />}/>
      </Routes>
      </>
    </UserContext.Provider>

  )
}

export default App
