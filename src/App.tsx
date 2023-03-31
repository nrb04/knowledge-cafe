import { useState,useEffect } from 'react'
import './App.css'
import Card from './componads/Card'
import Header from './componads/Header/Header'
import Cart from './componads/Cart'
import Cards from './componads/Cards'




function App() {
 

  return (
    <div className="App">
      <Header />
      <div className="flex  mx-20 ">
       
        <Cards></Cards>
        <Cart />
      </div>
     
    </div>
  )
}

export default App
