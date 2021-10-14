import React, { useState } from 'react';

import './App.css';
import Modal from './components/modal/modal.component';

import carImg from './assets/images/car.jpg';
import Card from './components/card/card.component';

const car = {
  id: 1,
  name: 'Lamborghini 200X NEW EDITION',
  price: '200.000.000',
  discountPrice: '169.000.000',
  description:
    'Hãng xe luôn mang đến cho khách hàng những dòng xe chất lượng với nhiều chương trình khuyến mãi hấp dẫn. Bảng giá xe Lamborghini tháng 10/2021 được cập nhật mới nhất tại Việt Nam cùng các chương trình hỗ trợ mua xe trả góp và khuyến mãi đặc biệt. Hãy theo dõi và cập nhật thông tin bảng giá chính xác nhất. Đây là dòng xe được thiết kế theo phong cách nam tính mạnh mẽ với bộ cánh mới đầy ấn tượng. Với thiết kế hiện đại và trẻ trung, Aventador S 2018 có trọng lượng nhẹ kèm theo bộ khung gầm hạ thấp, hứa hẹn là một mẫu xe thể thao rất sung trong mọi cuộc đua. ',
  nation: 'VietNam',
};

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const { name, price, discountPrice, description, nation } = car;

  return (
    <div className='App'>
      <Card
        name={name}
        price={discountPrice}
        carImg={carImg}
        handleClick={openModal}
      />
      {modalOpen && (
        <Modal
          title={name}
          price={price}
          discountPrice={discountPrice}
          description={description}
          nation={nation}
          setModalOpen={setModalOpen}
        />
      )}
    </div>
  );
};

export default App;
