import React, { useEffect, useState } from "react";
import Products from "./Products";

export default function ResultsPage() {
  const [routines, setRoutines] = useState();
  useEffect(() => {
    fetch("https://curls-gone-wild.web.app/routines")
      .then((res) => res.json())
      .then((data) => setRoutines(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {!routines ? (
        <h2>Loading...</h2>
      ) : (
        routines.map((routines) => {
          return (
            <div key={routines.type}>
              <p>{routines.routine}</p>
            </div>
          );
        })
      )}
      <Products />
    </div>
  );
}
