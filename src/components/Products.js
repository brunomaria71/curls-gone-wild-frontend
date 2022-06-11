import { useContext, useEffect } from "react";
import { ResultsContext } from "../context/ResultsContext";

export default function Products() {
  const { products, setProducts } = useContext(ResultsContext);

  useEffect(() => {
    fetch("https://curls-gone-wild.web.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      {!products ? (
        <h2>Loading...</h2>
      ) : (
        products.map((product) => {
          return (
            <div key={product._id}>
              <p>{product.name}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
