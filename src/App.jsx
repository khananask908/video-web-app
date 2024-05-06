import React from 'react'
import "./App.css"
import {BrowserRouter ,Routes ,Route} from "react-router-dom"
import Home from './components/Home'
import Room from './components/Room'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path ='/room/:id' element={<Room/>}>   
 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;




//line 10 for the dynamic routung ......