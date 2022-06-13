import { Card, Col } from "antd";
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import coily from "../assets/coily.jpeg";
import curly from "../assets/curly.jpeg";
import wavy from "../assets/wavy.jpeg";
import { UserChoiceContext } from "../context/UserChoiceContext";
import "../styles/Cards.css";

const { Meta } = Card;

export default function HairCards() {
  const { setBestFor, setType } = useContext(UserChoiceContext);
  let navigate = useNavigate();

  const onClickWavy = () => {
    setBestFor("wavy");
    setType("wavy");
    navigate("/results");
  };

  const onClickCurly = () => {
    setBestFor("curly");
    setType("curly");
    navigate("/results");
  };

  const onClickCoily = () => {
    setBestFor("coily");
    setType("coily");
    navigate("/results");
  };

  return (
    <div className="cards-overall">
      <Col className="card-group">
        <div className="wavy-column">
          <Card
            id="card1"
            hoverable
            cover={
              <img
                className="card-images"
                alt="wavy hair example"
                src={wavy}
                onClick={onClickWavy}
              />
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
                onClick={onClickCurly}
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
                onClick={() => onClickCoily}
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
