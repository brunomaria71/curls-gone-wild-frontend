import { Card, Col } from "antd";
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import coily from "../assets/coily.jpeg";
import curly from "../assets/curly.jpeg";
import wavy from "../assets/wavy.jpeg";
import { UserChoiceContext } from "../context/UserChoiceContext";
import "../styles/Cards.css";

const { Meta } = Card;

export default function HairCards() {
  const { bestFor, setBestFor, type, setType } = useContext(UserChoiceContext);
  let navigate = useNavigate();

  const setWavy = () => {
    setBestFor("wavy");
    setType("wavy");
    navigate("/resultpage");
  };

  const onClickCurly = () => {
    setBestFor("curly");
    setType("curly");
    navigate("/resultpage");
  };

  const onClickCoily = () => {
    setBestFor("coily");
    setType("coily");
    navigate("/resultpage");
  };

  return (
    <div className="cards-overall">
      <Col className="card-group">
        <div className="wavy-column">
          <Link to={"/resultpage"}>
            <Card
              id="card1"
              hoverable
              cover={
                <img
                  className="card-images"
                  alt="wavy hair example"
                  src={wavy}
                  onClick={() => setWavy}
                />
              }
            >
              <Meta
                title="wavy"
                description="hair is wavy"
                className="card-meta-title"
              />
            </Card>
          </Link>
        </div>

        <div className="curly-column">
          <Link to={"/resultpage"}>
            <Card
              id="card1"
              hoverable
              cover={
                <img
                  className="card-images"
                  alt="curly hair example"
                  src={curly}
                  onClick={() => onClickCurly}
                />
              }
            >
              <Meta
                title="curly"
                description="hair is curly"
                className="card-meta-title"
              />
            </Card>
          </Link>
        </div>

        <div className="coily-column">
          <Link to={"/resultpage"}>
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
          </Link>
        </div>
      </Col>
    </div>
  );
}
