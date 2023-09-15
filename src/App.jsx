import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'
import Carts from './components/Carts/Carts'

function App() {
  const [carts, setCarts] = useState([])
  const handleSelectToCart = (item) => {
    setCarts([...carts, item])
  }
  return (
    <>
      <Header></Header>
      <div className='flex flex-col md:flex-row gap-6 container mx-auto mb-10 md:mb-20'>
        <Cards
          handleSelectToCart={handleSelectToCart}
        ></Cards>
        <Carts
          carts={carts}
        ></Carts>
      </div>
    </>
  )
}

export default App
