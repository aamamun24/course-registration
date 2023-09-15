import PropTypes from 'prop-types';

const Cart = ({ cart }) => {
    return (
        <li>{cart.course_name}</li>
    );
};

Cart.propTypes = {
    cart: PropTypes.object
};

export default Cart;