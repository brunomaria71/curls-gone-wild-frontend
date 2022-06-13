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

// {
//   _id:
// 629e93411ef62a54272f7cf4
// name
// :
// "Blueberry Bliss Reparative Hair Wash"
// description
// :
// "Sulfate-free cleanser guaranteed to soften the driest kink, hydrate th..."
// instructions
// :
// "Thoroughly soak hair in shower, detangle hair before shampooing for be..."
// bestFor
// :
// "wavy"
// type
// :
// "Shampoo"
// image
// :
// "https://i5.walmartimages.com/asr/37e44f3a-db62-405b-af87-42c79dec13dd_..."
// }
