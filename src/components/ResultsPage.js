import React from "react";
import Products from "./Products";
import Routines from "./Routines";

export default function ResultsPage() {
  return (
    <div>
      <Products />
      <Routines />
    </div>
  );
}

// if you choose a card from haircards, it will navigate to results page that will choose a set of products based on {product.bestFor} and {routine.type}
