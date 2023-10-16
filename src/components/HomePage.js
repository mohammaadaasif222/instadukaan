// pages/HomePage.js

import React from 'react';
import { Card, Row, Col } from 'antd';
import Product from './Product';
const ferryProducts = [
  {
    title: 'Ferry from Port Blair to Havelock',
    description: 'Enjoy a scenic ferry ride to Havelock Island.',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/16/49/f2/40/government-ferry.jpg',
  },
  {
    title: 'Ferry from Havelock to Neil',
    description: 'Explore Neil Island with ease via our ferry service.',
    image: 'https://cdn.experienceandamans.com/images/havelock-to-neil-island-ferry.jpeg',
  },
  {
    title: 'Ferry from Neil to Port Blair',
    description: 'Return to Port Blair from Neil Island comfortably.',
    image: '  https://assets-global.website-files.com/5b56319971ac8c56a6a9d887/5dba362fe4099a60438dc87f_makruzz-airport-authority-colony-delanipur-port-blair-ferry-services-dx5bip.jpg',
  },
  {
    title: 'Ferry from Port Blair to Havelock to Neil and back to Port Blair',
    description: 'Experience the Andaman Islands with our comprehensive ferry package.',
    image: 'https://andaman.gonautika.com/wp-content/uploads/2023/04/Our-Ferries-Nautika-Lite-Page_On-Board-feature_03.png',
  },
];

const HomePage = () => {
  return (
    <div>
      <h1>Ferry Products</h1>
      <Row gutter={16}>
        {ferryProducts.map((product, index) => (
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

export default HomePage;