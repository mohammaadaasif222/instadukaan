import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import Product from "./Product";


const HomePage = ({ initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);
  const API = `https://raw.githubusercontent.com/mohammaadaasif222/mockData/main/db.json`;
  useEffect(() => {

    async function fetchProducts() {
      const response = await fetch(API);
      const newProducts = await response.json();
      console.log(newProducts);
      setProducts(newProducts.ferryProducts);
    }
    fetchProducts();
  }, []); 

  return (
    <div>
      <h1>Ferry Products</h1>
      <Row gutter={16}>
        {products.map((product, index) => (
          <Col md={12} lg={8} key={index} style={{ paddingBottom: "1rem" }}>
            <Product item={product} style={{ marginBottom: "16px" }}></Product>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export async function getStaticProps() {
  const API = `https://raw.githubusercontent.com/mohammaadaasif222/mockData/main/db.json`;
  const response = await fetch(API);
  const initialProducts = await response.json();
  const productsArray = Array.isArray(initialProducts.ferryProducts) ? initialProducts.ferryProducts: [];
  return {
    props: {
      initialProducts:productsArray
    },
    revalidate: 60 * 60,
  };
}

export default HomePage;
