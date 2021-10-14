import React, { useRef } from 'react';

import './modal.styles.css';

import carImage from '../../assets/images/car.jpg';

const Modal = ({
  title,
  price,
  discountPrice,
  description,
  nation,
  setModalOpen,
}) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setModalOpen(false);
    }
  };

  return (
    <div className='modal-background' ref={modalRef} onClick={closeModal}>
      <div className='modal'>
        <div className='modal--header'>
          <span className='title'>{title}</span>
          <button
            className='modal--button__closeBtn'
            onClick={() => setModalOpen(false)}
          >
            X
          </button>
        </div>

        <div className='modal--body'>
          <img src={carImage} alt='food' className='body--image' />

          <div className='body--infoWrapper'>
            <div className='infoWrapper--origin'>
              <span>From: </span>
              <span className='nation'>{nation}</span>
            </div>
            <div className='infoWrapper--description'>{description}</div>
          </div>
        </div>

        <div className='modal--footer'>
          <div className='footer--priceWrapper'>
            {discountPrice ? (
              <>
                <span className='price price__discount'>{discountPrice} ₫</span>
                <span className='price price__original'>{price} ₫</span>
              </>
            ) : (
              <span className='price price__discount'>{price} ₫</span>
            )}
          </div>
          <button className='modal--button__buyBtn'>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
