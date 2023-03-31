import { useState } from 'react'
import Header from "./componads/Header";
import './App.css'
import Cart from './componads/Cart'
import Cards from './componads/Cards'

function App() {


  return (
    <div className="App">
      <Header></Header>
      <div className="flex  mx-20 ">
       
        <Cards></Cards>
        <Cart />
      </div>
      
    </div>
  )
}

export default App
