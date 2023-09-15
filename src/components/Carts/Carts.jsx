import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';

const Carts = ({ carts, credits, price, remaining }) => {
    return (
        <div className='md:w-1/3 lg:w-1/4'>
            <div className='bg-white p-6 rounded-lg'>
                <h2 className='text-lg font-bold text-[#2F80ED] pb-4 border-b'>Credit Hour Remaining {remaining} hr</h2>
                <div>
                    <h3 className='text-xl font-bold text-[#1C1B1B] mt-4'>Course Name</h3>
                    <ol className='my-5 list-decimal list-inside text-[#1C1B1B99] leading-7'>
                        {
                            carts.map((cart, idx) => <Cart
                                key={idx}
                                cart={cart}
                            ></Cart>)
                        }
                    </ol>
                </div>
                <p className='text-[#1C1B1BCC] font-medium border-y py-4'>Total Credit Hour : {credits}</p>
                <p className='text-[#1C1B1BCC] font-semibold mt-4'>Total Price : {price} USD</p>
            </div>
        </div>
    );
};

Carts.propTypes = {
    carts: PropTypes.array,
    credits: PropTypes.number,
    price: PropTypes.number,
    remaining: PropTypes.number
};

export default Carts;