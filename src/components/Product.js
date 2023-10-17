import React, { useContext ,useState} from 'react';
import UserDetails from './UserDetails';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card ,Button} from 'antd';
import cartStore from '../stores/CartStore';
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

  const store = useContext(cartStore);
//  console.log(store);
 
  const handleAddToCart = () => {
    store.addToCart({ title, cover, desc });
  };
 
  return (
    <>
    {isOpen && <UserDetails visible={modalVisible} onCancel={handleCancelModal} />}
    <Card
      cover={<img alt="example" src={item.image}  style={{height:"200px"}}/>}
      actions={[
        <SettingOutlined key="setting" />,
        <Button type='primary' key="add-to-cart" onClick={handleOpenModal}>Add to Cart</Button>
      ]}
    > 
      <Meta
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
        title={item.title}
        description={item.description}
      />
    </Card>
    </>
  );
};

export default Product;
