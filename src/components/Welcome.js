import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useContext } from "react";
import { UserChoiceContext } from "../context/UserChoiceContext";
import "../styles/Welcome.css";

function Welcome() {
  const { setUser } = useContext(UserChoiceContext);

  const Logout = () => {
    localStorage.clear("name", "profilePic");
    console.log(localStorage);
    setUser(null);
  };

  return (
    <>
      <h2 className="welcome">
        Welcome {localStorage.getItem("name")}
        <Avatar
          size={32}
          src={localStorage.getItem("profilePic")}
          icon={<UserOutlined />}
        />
      </h2>
      <button onClick={Logout}>Logout</button>
    </>
  );
}

export default Welcome;
