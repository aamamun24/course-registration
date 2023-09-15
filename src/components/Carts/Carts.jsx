import PropTypes from 'prop-types';

const Carts = ({props}) => {
    return (
        <div className='md:w-1/3 lg:w-1/4'>
            <div className='bg-white p-6 rounded-lg'>
                <h2 className='text-lg font-bold text-[#2F80ED] pb-4 border-b'>Credit Hour Remaining 7 hr</h2>
                <div>
                    <h3 className='text-xl font-bold text-[#1C1B1B] mt-4'>Course Name</h3>
                    <ol className='my-5 list-decimal list-inside text-[#1C1B1B99] leading-7'>
                        <li>Introduction to C Programming</li>
                        <li>Introduction to C Programming</li>
                        <li>Introduction to C Programming</li>
                    </ol>
                </div>
                <p className='text-[#1C1B1BCC] font-medium border-y py-4'>Total Credit Hour : 13</p>
                <p className='text-[#1C1B1BCC] font-semibold mt-4'>Total Price : 48000 USD</p>
            </div>
        </div>
    );
};

Carts.propTypes = {

};

export default Carts;