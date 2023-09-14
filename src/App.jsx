import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'
import Carts from './components/Carts/Carts'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex gap-6 container mx-auto'>
        <Cards></Cards>
        <Carts></Carts>
      </div>
    </>
  )
}

export default App
