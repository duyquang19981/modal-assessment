import React, { useState } from 'react';
import CustomButton from './components/custom-button/custom-button.component';

import './App.css';
import Modal from './components/modal/modal.component';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div className='App'>
      {modalOpen && (
        <Modal title='This is my modal' setModalOpen={setModalOpen} />
      )}
      <CustomButton onClick={toggleModal}>This is my button</CustomButton>
    </div>
  );
};

export default App;
