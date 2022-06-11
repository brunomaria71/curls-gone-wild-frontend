import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState();
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
