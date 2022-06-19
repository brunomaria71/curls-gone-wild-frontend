import { Card, Col, Row } from "antd";
import "../styles/ProductCards.css";

import { useContext, useEffect } from "react";
import { ResultsContext } from "../context/ResultsContext";
import { UserChoiceContext } from "../context/UserChoiceContext";

const { Meta } = Card;

export default function Products() {
  const { products, setProducts } = useContext(ResultsContext);
  const { bestFor, setBestFor } = useContext(UserChoiceContext);

  useEffect(() => {
    fetch("https://curls-gone-wild.web.app/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("this is", bestFor);
        const products = data.filter((prod) => prod.bestFor === bestFor);
        setProducts(products);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div id="outer-title-box">
      <h1 className="product-title">Your results are:</h1>
      <div>
        {!products ? (
          <h2>Loading...</h2>
        ) : (
          <div className="product-cards-overall">
            <Row gutter={16} justify="space-around" align="middle">
              {products.map((product) => {
                return (
                  <div id="outer-card-box">
                    <Col
                      key={product._id}
                      className="products-cards-group"
                      span={8}
                    >
                      <Card
                        className="product-card"
                        loading={!product}
                        cover={
                          <img
                            className="product-images"
                            alt={product?.name}
                            src={product?.image}
                          />
                        }
                        hoverable
                      >
                        <Meta
                          title={product?.name}
                          description={products?.description}
                        />
                        <div className="title-paragraphs">
                          <p id="styling-title">{product?.type}</p>
                          <p>{product?.instructions}</p>
                        </div>
                      </Card>
                    </Col>
                  </div>
                );
              })}
            </Row>
          </div>
        )}
      </div>
    </div>
  );
}

//ORIGINAL

//ANT DESIGN VERSION

{
  /* <Col style={{ width: "300px", margin: "1em" }}>
  <Card
    loading={!product}
    cover={product && <img alt={product?.name} src={product?.image} />}
    hoverable
  >
    <Meta title={product?.name} description={products?.description} />
  </Card>
</Col>; */
}
