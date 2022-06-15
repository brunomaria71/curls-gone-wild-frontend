import { Card, Col } from "antd";

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
    <div>
      {!products ? (
        <h2>Loading...</h2>
      ) : (
        products.map((product) => {
          return (
            <div key={product._id} className="test">
              <Col style={{ width: "300px", margin: "1em" }}>
                <Card
                  className="product-card"
                  loading={!product}
                  cover={
                    product && (
                      <img
                        className="images"
                        alt={product?.name}
                        src={product?.image}
                      />
                    )
                  }
                  hoverable
                >
                  <Meta
                    title={product?.name}
                    description={products?.description}
                  />
                </Card>
              </Col>

              {/* <p>{product.name}</p>
              <p>{product.image}</p> */}
            </div>
          );
        })
      )}
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
