import { Layout } from "antd";
import "../styles/Footer.css";

const { Header, Content, Footer, Sider } = Layout;

export default function Pata() {
  return (
    <Layout>
      <Footer style={{ textAlign: "center" }}>
        Maria Bruno ©2022 Curls Gone Wild
      </Footer>
    </Layout>
  );
}
