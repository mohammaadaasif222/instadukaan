import React, { useState} from 'react';
import UserDetails from './UserDetails';
import {  SettingOutlined } from '@ant-design/icons';
import {  Card ,Button} from 'antd';



const { Meta } = Card;

const Product = ({item}) => {
  const [isOpen,setIsOpen] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true)
    setModalVisible(true);
  };

  const handleCancelModal = () => {
    setModalVisible(false);
  };

  return (
    <>
    {isOpen && <UserDetails visible={modalVisible} onCancel={handleCancelModal} item={item} />}
    <Card
      cover={<img alt="example" src={item.image}  style={{height:"200px"}}/>}
      actions={[
        <SettingOutlined key="setting" />,
        <Button type='primary' key="add-to-cart" onClick={handleOpenModal}>Add to Cart</Button>
      ]}
      style={{boxShadow: 'rgba(0, 0, 0, 0.08) 1.95px 1.95px 2.6px'}}
    > 
      <Meta
        title={item.title}
        description={item.description}
      />
    </Card>
    </>
  );
};

export default Product;
