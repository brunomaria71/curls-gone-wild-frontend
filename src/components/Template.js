import { Layout, Menu } from "antd";
import React from "react";
import logo from "../assets/logo.jpg";
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
        <a href="/home">
          <img className="logo" alt="logo of curls gone wild" src={logo} />
        </a>
        <Menu>
          {/* <a href="/home"> */}
          {/* <h1>Curls Gone Wild</h1> */}
          {/* <img className="logo" alt="logo of curls gone wild" src={logo} />
          </a> */}
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
