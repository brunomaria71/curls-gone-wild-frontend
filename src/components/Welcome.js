import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

function Welcome() {
  return (
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
