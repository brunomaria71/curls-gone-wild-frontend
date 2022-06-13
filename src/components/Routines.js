import { useContext, useEffect } from "react";
import { ResultsContext } from "../context/ResultsContext";
import { UserChoiceContext } from "../context/UserChoiceContext";

export default function Routines() {
  const { routines, setRoutines } = useContext(ResultsContext);
  const { type, setType } = useContext(UserChoiceContext);

  useEffect(() => {
    fetch("https://curls-gone-wild.web.app/routines")
      .then((res) => res.json())
      .then((data) => {
        const routines = data.filter((rout) => rout.type === type);
        setRoutines(routines);
      })
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
