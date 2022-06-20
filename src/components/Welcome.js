import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useContext } from "react";
import { UserChoiceContext } from "../context/UserChoiceContext";

function Welcome() {
  const { user } = useContext(UserChoiceContext);
  return (
    // <h1>
    //   Welcome {user ? user.displayName : "Guest"}!&nbsp;
    //   {user && <Avatar size={32} src={user.photoURL} />}
    // </h1>

    <h2>
      Welcome {localStorage.getItem("name")}
      <Avatar
        size={32}
        src={localStorage.getItem("profilePic")}
        icon={<UserOutlined />}
      />
    </h2>
  );
}

export default Welcome;
