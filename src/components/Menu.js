// import { Layout, Menu } from "antd";
// import logo from "../assets/logo.jpg";
import "../styles/Menu.css";
// const { Sider } = Layout;

// export default function Template() {
//   return (
//     <Layout>
//       <Sider
//         breakpoint="lg"
//         collapsedWidth="0"
//         onBreakpoint={(broken) => {
//           console.log(broken);
//         }}
//         onCollapse={(collapsed, type) => {
//           console.log(collapsed, type);
//         }}
//       >
//         <div className="logo" />
//         <a href="/home">
//           <img className="logo" alt="logo of curls gone wild" src={logo} />
//         </a>
//         <Menu>
//           <div className="nav-links">
//             <a href="/home">Home</a>
//             <a href="/reviews">See What Others Are Saying</a>
//           </div>
//         </Menu>
//       </Sider>
//     </Layout>
//   );
// }

import { Menu } from "antd";
import { useState } from "react";
const items = [
  {
    label: <a href="/home">Curls Gone Wild</a>,
    key: "logo",
  },
  {
    label: <a href="/home">Home</a>,
    key: "home",
  },

  {
    label: <a href="/about">About</a>,
    key: "about",
  },
];

const Template = () => {
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    ></Menu>
  );
};

export default Template;
