import React from 'react';

import './card.styles.css';

const Card = ({ carImg, name, price, handleClick }) => {
  return (
    <div onClick={handleClick} className='card'>
      <img className='card--image' src={carImg} alt='car' />
      <p className='card--name'>{name}</p>
      <p className='card--price'>{price} ₫</p>
    </div>
  );
};

export default Card;
