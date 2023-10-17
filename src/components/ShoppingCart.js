import React from "react";
import cartStore from "../stores/CartStore";
import { Card, Row, Col, Button } from "antd";
import { DeleteOutlined, SettingOutlined } from "@ant-design/icons";

const { Meta } = Card;
const ShoppingCart = () => {
  const { cart } = cartStore;

  console.log(cart);
  const handleDelete = (item) => {
    cartStore.removeItemFromCart(item)
  };
  return (
    <div className="shopping-cart">
      <Row gutter={16}>
        <Col span={16} style={{ paddingBottom: "1rem" }}>
          <h3>Total Items: {cart.length}</h3>
        </Col>
        <Col span={8} style={{ paddingBottom: "1rem" }}>
          {/* <h3>Total Passengers: {passengerInfo.length}</h3> */}
        </Col>
      </Row>
      {cart.map((product, index) => (
        <Row gutter={16} key={index}>
          <Col span={16} style={{ paddingBottom: "1rem" }}>
            <Card style={{boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px'}}
              actions={[
                <DeleteOutlined
                  key="delete"
                  onClick={()=>handleDelete(product)}
                />,
              ]}
            >
              <img
                alt="product"
                src={product.item.image}
                style={{ width: "75px" }}
              ></img>
              <Meta
                title={product.item.title}
                description={product.item.description}
              />
            </Card>
          </Col>
          {product.passengerInfo.map((passenger, indexuser)=>(
            <Col span={8} style={{ paddingBottom: "1rem" }} key={index + 1}>
            <Card
               
              title={passenger.name.toUpperCase()}
              bordered={false}
              style={{boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px'}}
            >
              <b>Email: </b>
              <p>{passenger.email}</p>
              <b>Nationality:</b>
              <p>{passenger.nationality.toUpperCase()}</p>
              <b>Passport: </b>
              <p>{passenger.passport}</p>
            </Card>
          </Col>
          ))}
          
        </Row>
         
      ))}
    
      <Row gutter={16}>
        <Col span={16} style={{ paddingBottom: "1rem" }}></Col>

        <Col span={8} style={{ padding: "1rem , 2rem" }}>
          <h3>Total price: ₹ {cartStore.totalPrice}</h3>
        </Col>
      </Row>
   
    </div>
  );
};

export default ShoppingCart;
