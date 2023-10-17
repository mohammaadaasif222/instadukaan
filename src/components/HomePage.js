// pages/HomePage.js

import React,{useState, useEffect} from 'react';
import { Card, Row, Col } from 'antd';
import Product from './Product';
import {ferrPproducts} from '@/products';


const HomePage = ({initialProducts}) => {

  console.log(initialProducts);
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://gist.github.com/mohammaadaasif222/51e4246faee1ddf8b30ad6def69d827b');
      const newProducts = await response.json();
      setProducts(newProducts);
    }
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>Ferry Products</h1>
      <Row gutter={16}>
        {ferrPproducts.map((product, index) => (
          <Col span={8} key={index} style={{paddingBottom:'1rem'}}>
            <Product
              item={product}
              style={{ marginBottom: '16px' }}
            >
            </Product>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    'https://gist.github.com/mohammaadaasif222/51e4246faee1ddf8b30ad6def69d827b'
  );
  const products = await response.json();

  return {
    props: {
      initialProducts: products,
    },
    revalidate: 60 * 60, // Revalidate every 1 hour
  };
}

export default HomePage;
