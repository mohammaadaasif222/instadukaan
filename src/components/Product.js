import React, { useContext } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card ,Button} from 'antd';
import cartStore from '../stores/CartStore';
const { Meta } = Card;

const Product = ({item}) => {
 
  const store = useContext(cartStore);
//  console.log(store);
 
  const handleAddToCart = () => {
    store.addToCart({ title, cover, desc });
  };
 
  return (
    <Card
      cover={<img alt="example" src={item.image}  style={{height:"200px"}}/>}
      actions={[
        <SettingOutlined key="setting" />,
        // <EditOutlined key="edit" />,
        // <EllipsisOutlined key="ellipsis" />,
        <Button type='primary' key="add-to-cart" onClick={handleAddToCart}>Add to Cart</Button>
      ]}
    >
      <Meta
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
        title={item.title}
        description={item.description}
      />
    </Card>
  );
};

export default Product;
