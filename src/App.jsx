import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'
import Carts from './components/Carts/Carts'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [carts, setCarts] = useState([]);
  const [remaining, setRemaining] = useState(20)
  const [credits, setCredits] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSelectToCart = (card) => {
    const already = carts.find(item => item.course_name === card.course_name);

    let credit = card.credit;

    if (already) {
      return (toast('Already added this course'));
    }
    else {
      carts.forEach(item => {
        credit = credit + item.credit;
      })
      const remaining = 20 - credit
      if (credit > 20) {
        return (toast.warn('You have not enough credits', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }));
      }
      else {
        setCredits(credit);
        setRemaining(remaining)
        setCarts([...carts, card]);
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
          ToastContainer={ToastContainer}
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
