import { Layout, Menu } from "antd";
import React from "react";
import "../styles/Template.css";
const { Sider } = Layout;

export default function Template() {
  return (
    <Layout className="sidebar">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu>
          <a href="/home">
            <h1>Curls Gone Wild</h1>
          </a>
          <div className="nav-links">
            <a href="/home">Home</a>
            <a href="/reviews/add">Add Review</a>
            <a href="/reviews">See What Others Are Saying</a>
          </div>
        </Menu>
      </Sider>
    </Layout>
  );
}

// theme="dark"
// mode="inline"
// defaultSelectedKeys={["4"]}
// items={[
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   UserOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }))}

,..