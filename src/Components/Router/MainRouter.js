import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom'
import Home from '../Home/Home'
import Main from '../Main/Main'

export default function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <Home/> } />
        <Route path='/main' element= { <Main/> } />
      </Routes>
    </Router>
  )
}
