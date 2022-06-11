import { useContext, useEffect } from "react";
import { ResultsContext } from "../context/ResultsContext";

export default function Routines() {
  const { routines, setRoutines } = useContext(ResultsContext);

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
        routines.map((routine) => {
          return (
            <div key={routine.type}>
              <p>{routine.type}</p>
              <p>{routine.routine}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
