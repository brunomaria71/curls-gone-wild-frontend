import { Card, Col } from "antd";
import { useContext } from "react";
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
            id="hair-cards"
            hoverable
            cover={
              <img alt="wavy hair example" src={wavy} onClick={onClickWavy} />
            }
          >
            <Meta
              title="Wavy"
              description="S-shape bends ranging from subtle to defined."
            />
          </Card>
        </div>

        <div className="curly-column">
          <Card
            id="hair-cards"
            hoverable
            cover={
              <img
                alt="curly hair example"
                src={curly}
                onClick={onClickCurly}
              />
            }
          >
            <Meta
              title="Curly"
              description="Loose ringlets, springy spirals, and so much more."
            />
          </Card>
        </div>

        <div className="coily-column">
          <Card
            id="hair-cards"
            hoverable
            cover={
              <img
                alt="curly hair example"
                src={coily}
                onClick={onClickCoily}
              />
            }
          >
            <Meta
              title="Coily"
              description="From tight curls to Z-shaped zig-zags and everything in between."
            />
          </Card>
        </div>
      </Col>
    </div>
  );
}
