import React, { useEffect, useState } from "react";

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
            <>
              <p>{routines.type}</p>
              <p>{routines.routine}</p>
            </>
          );
        })
      )}
    </div>
  );
}
