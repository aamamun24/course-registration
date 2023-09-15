import PropTypes from 'prop-types';
import { FiDollarSign } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';

const Card = ({ card, handleSelectToCart }) => {
    const { id, course_name, image, description, credit, price } = card;
    return (
        <div className='p-4 rounded-lg bg-white'>
            <img className='w-full rounded-lg' src={image} alt="" />
            <h2 className='my-3 text-lg font-semibold text-[#1C1B1B]'>{course_name}</h2>
            <p className='text-sm leading-6 text-[#1C1B1B99] text-justify'>{description}</p>
            <div className='flex justify-between items-center mt-4'>
                <div className='flex items-center gap-2'>
                    <span className='text-2xl'><FiDollarSign></FiDollarSign></span>
                    <p className='font-medium text-[#1C1B1B99]'>Price : {price}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-2xl'><BsBook></BsBook></span>
                    <p className='font-medium text-[#1C1B1B99]'>Credit : {credit}hr</p>
                </div>

            </div>
            <button
                onClick={() => handleSelectToCart(card)}
                className='bg-[#2F80ED] my-3 rounded-lg text-lg font-semibold text-white w-full mt-6'
            >Select</button>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object,
    handleSelectToCart: PropTypes.func
};

export default Card;