// import { Card, Col } from "antd";
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const { Meta } = Card;

// export default function HairCard({ routines }) {
//   let navigate = useNavigate();
//   return (
//     <Col style={{ width: "300px", margin: "1em" }}>
//       <Card>
//         <Meta title={routines?.type} description={routines?.address} />
//       </Card>
//     </Col>
//   );
// }

import { Card, Col } from "antd";
import React from "react";
import image from "../assets/blackwavyhair.jpeg";
import "../styles/Cards.css";
const { Meta } = Card;

const HairCard = () => (
  <Col style={{ width: "300px", margin: "1em" }}>
    <Card
      hoverable
      style={{
        width: 100,
        height: 100,
      }}
      cover={<img alt="example" src={image} width="200px" height="200px" />}
    >
      <Meta title="curly" description="hair is curly" className="card" />
    </Card>
    {/* <Card
      hoverable
      style={{
        width: 100,
        height: 100,
      }}
      cover={<img alt="example" src={image2} width="200px" height="200px" />}
    >
      <Meta title="wavy" description="hair is wavy" className="card" />
    </Card> */}
  </Col>
);

export default HairCard;
