import { useContext, useEffect } from "react";
import { ResultsContext } from "../context/ResultsContext";
import { UserChoiceContext } from "../context/UserChoiceContext";

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
            <div key={product._id}>
              <p>{product.name}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
