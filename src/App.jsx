import { useState } from 'react'
import Header from "./componads/Header";
import './App.css'
import Cards from './componads/Cards'
import QA from './componads/QA'

function App() {


  return (
    <div className="App">
      <Header></Header>
      
        <Cards></Cards>

  <QA></QA>
    </div>
  )
}

export default App
