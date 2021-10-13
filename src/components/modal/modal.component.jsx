import React, { useRef } from 'react';

import './modal.styles.css';

import car from '../../assets/images/car.jpg';

const Modal = ({ title, setModalOpen }) => {
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
          <img src={car} alt='food' className='body--image' />

          <div className='body--infoWrapper'>
            <div className='infoWrapper--origin'>
              <span>From: </span>
              <span className='nation'>VietNam</span>
            </div>
            <div className='infoWrapper--description'>
              this car is from viet nam and it is too luxury.
            </div>
          </div>
        </div>

        <div className='modal--footer'>
          <div className='footer--priceWrapper'>
            <span className='price price__discount'>199.000 ₫</span>
            <span className='price price__original'>269.000 ₫</span>
          </div>
          <button className='modal--button__buyBtn'>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
