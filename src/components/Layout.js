import React from "react";
import cartStore from "@/stores/CartStore";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";

import Link from "next/link";
const { Header, Content, Footer, Sider } = Layout;
// const items1 = ["1"].map((key) => ({
//   key,
//   label:"Mohammad"
// }));

const RootLayout = ({ children }) => {
  const { cart } = cartStore;
  const items2 = [ShoppingCartOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `Cart Items ${cart.length}`,
      children: ["1"].map((product, j) => {
        return {
          key: "val",
          label: `Total : ₹${cartStore.totalPrice}`,
        };
      }),
    };
  });

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" style={{ width: "7%", height: "4rem", display:'flex' }}>
          <img
            src="https://instadukan.com/static/images/Instadukanconcept202006.png"
            style={{ width: "75%" }}
          />
          <span style={{color:"#fff",textTransform: 'uppercase',fontWeight: 'bold', fontSize:'large'}}>Instadukan</span>
        </div>
       
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>
            <Link href="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/cart">Cart</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
              }}
              items={items2}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        All Rights Reserved ©2023 Created by Mohamamad
      </Footer>
    </Layout>
  );
};
export default RootLayout;
