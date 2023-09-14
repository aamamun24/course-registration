import PropTypes from 'prop-types';
import photo from '../../../public/Rectangle 2-4.png';
import { FiDollarSign } from 'react-icons/fi';
import { BsBookmarkCheckFill } from 'react-icons/bs';

const Card = (props) => {
    return (
        <div className='p-4 rounded-lg bg-white'>
            <img className='w-full rounded-lg' src={photo} alt="" />
            <h2 className='my-3 text-lg font-semibold text-[#1C1B1B]'>Introduction to C Programming</h2>
            <p className='text-sm leading-6 text-[#1C1B1B99]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div className='flex justify-between items-center mt-4'>
                <p><FiDollarSign></FiDollarSign><span className='font-medium text-[#1C1B1B99]'>Price : 15000</span></p>
                <p><BsBookmarkCheckFill></BsBookmarkCheckFill><span className='font-medium text-[#1C1B1B99]'>Credit : 1hr</span></p>
            </div>
            <button className='bg-[#2F80ED] my-3 rounded-lg text-lg font-semibold text-white w-full mt-6'>Select</button>
        </div>
    );
};

Card.propTypes = {

};

export default Card;