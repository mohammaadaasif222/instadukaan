import React from "react";
import { Card, Row, Col } from "antd";
import cartStore from "@/stores/CartStore";
import { DeleteOutlined , UserOutlined} from "@ant-design/icons";

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
        <Col lg={8} md={16} style={{ paddingBottom: "1rem" }}>
          <h3>Passengers Information</h3>
        </Col>
      </Row>
      {cart.map((product, index) => (
        <Row gutter={16} key={index}>
          <Col  md={12}  lg={16} style={{ paddingBottom: "1rem" }}>
            <Card style={{boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px'}}
              actions={[
                <DeleteOutlined
                  key="delete"
                  onClick={()=>handleDelete(product)}
                />,
              ]}
            >
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
              <img
                alt="product"
                src={product.item.image}
                style={{ width: "75px" }}
              ></img>
              <Meta
                style={{width:'70%'}}
                title={`Ferry Name : ${product.item.title}`}
                description={product.item.description}
              />
              </div>
            </Card>
          </Col>
          {product.passengerInfo.map((passenger, indexuser)=>(
            <Col  md={12} lg={8} style={{ paddingBottom: "1rem", justifyContent:'center' }} key={index + 1}>
            <Card
               
              title={passenger.name.toUpperCase()}
              bordered={false}
              style={{boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px'}}
            >
              <div className="pas-info"><b>Email: </b>
              <p>{passenger.email}</p></div>
              <div className="pas-info">
              <b>Nationality:</b>
              <p>{passenger.nationality.toUpperCase()}</p>
              </div>
              <div className="pas-info">
              <b>Passport: </b>
              <p>{passenger.passport}</p>
              </div>
              <div className="pas-info">
              <b>Total Passengers: </b>
              <p>{product.passengerInfo.length}</p>
              </div>
              <div className="pas-info">
              <b>Travel Date: </b>
              <p>{passenger.date}</p>
              </div>
              <div className="pas-info">
              <b>Price / <UserOutlined/> : </b>
              <p>{1200}</p>
              </div>
            </Card>
          </Col>
          ))}
          
        </Row>
         
      ))}
    
      <Row gutter={16}>
        <Col lg={16} md={16} style={{ paddingBottom: "1rem" }}></Col>

        <Col lg={8} md={16} style={{ padding: "1rem , 2rem" }}>
          <h3>Total price: ₹ {cartStore.totalPrice}</h3>
        </Col>
      </Row>
   
    </div>
  );
};

export default ShoppingCart;
