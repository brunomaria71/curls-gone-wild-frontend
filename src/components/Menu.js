import { Menu } from "antd";
import { useState } from "react";
import "../styles/Menu.css";
import Welcome from "./Welcome";

const items = [
  {
    label: <a href="/">Curls Gone Wild</a>,
    key: "logo",
  },
  {
    label: <a href="/">Home</a>,
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
    <div className="outer-div">
      <div className="menubar">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
      <div>
        <Welcome />
      </div>
    </div>
  );
};

export default Template;
