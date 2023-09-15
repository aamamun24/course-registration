import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';

const Cards = (props) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className='md:w-2/3 lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                cards.map(card => <Card
                    key={card.id}
                    card={card}
                ></Card>)
            }

        </div>
    );
};

Cards.propTypes = {

};

export default Cards;