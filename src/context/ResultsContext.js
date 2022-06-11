import { createContext, useState } from "react";

export const ResultsContext = createContext({});

export function ResultsContextProvider({ children }) {
  const { Provider } = ResultsContext;
  const [products, setProducts] = useState();
  const [routines, setRoutines] = useState();

  const value = {
    products,
    setProducts,
    routines,
    setRoutines,
  };

  return <Provider value={value}>{children}</Provider>;
}
