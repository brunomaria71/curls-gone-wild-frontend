import { Card, Col } from "antd";
import React from "react";
import coily from "../assets/coily.jpeg";
import curly from "../assets/curly.jpeg";
import wavy from "../assets/wavy.jpeg";
import "../styles/Cards.css";

const { Meta } = Card;

export default function HairCards() {
  let navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/resultpage");
  };

  return (
    <div className="cards-overall">
      <Col className="card-group">
        <div className="wavy-column">
          <Card
            id="card1"
            hoverable
            cover={
              <img className="card-images" alt="wavy hair example" src={wavy} />
            }
          >
            <Meta
              title="wavy"
              description="hair is wavy"
              className="card-meta-title"
            />
          </Card>
        </div>

        <div className="curly-column">
          <Card
            id="card1"
            hoverable
            cover={
              <img
                className="card-images"
                alt="curly hair example"
                src={curly}
              />
            }
          >
            <Meta
              title="curly"
              description="hair is curly"
              className="card-meta-title"
            />
          </Card>
        </div>

        <div className="coily-column">
          <Card
            id="card1"
            hoverable
            cover={
              <img
                className="card-images"
                alt="curly hair example"
                src={coily}
              />
            }
          >
            <Meta
              title="coily"
              description="hair is coily"
              className="card-meta-title"
            />
          </Card>
        </div>
      </Col>
    </div>
  );
}
