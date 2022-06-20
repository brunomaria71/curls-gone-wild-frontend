import { Layout } from "antd";
import "../styles/Footer.css";

const { Footer } = Layout;

export default function BottomNav() {
  return (
    <Layout>
      <Footer style={{ textAlign: "center" }}>
        Maria Bruno ©2022 Curls Gone Wild
      </Footer>
    </Layout>
  );
}
