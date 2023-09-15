import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'
import Carts from './components/Carts/Carts'

function App() {
  const [carts, setCarts] = useState([]);
  const [remaining, setRemaining] = useState(20)
  const [credits, setCredits] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSelectToCart = (card) => {
    const already = carts.find(item => item.course_name === card.course_name);

    if (already) {
      return alert('already added')
    }
    else {
      if (remaining <= 0) {
        console.log(remaining);
        return alert('You have not enough credits')
      }
      else {
        setCarts([...carts, card]);
        setCredits(credits + card.credit);
        setRemaining(remaining - card.credit)
        setPrice(price + card.price)
      }
    }
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
          credits={credits}
          price={price}
          remaining={remaining}
        ></Carts>
      </div>
    </>
  )
}

export default App
