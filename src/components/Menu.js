import { Layout, Menu } from "antd";
import logo from "../assets/logo.jpg";
import "../styles/Menu.css";
const { Sider } = Layout;

export default function Template() {
  return (
    <Layout>
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
        <a href="/home">
          <img className="logo" alt="logo of curls gone wild" src={logo} />
        </a>
        <Menu>
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

{
  /* <Layout className="sidebar">
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
      <div className="nav-links">
        <a href="/home">Home</a>
        <a href="/reviews/add">Add Review</a>
        <a href="/reviews">See What Others Are Saying</a>
      </div>
    </Menu>
  </Sider>
</Layout>; */
}
