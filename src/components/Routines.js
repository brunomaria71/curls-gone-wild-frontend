import { useContext, useEffect } from "react";
import Login from "../components/Login";
import { ResultsContext } from "../context/ResultsContext";
import { UserChoiceContext } from "../context/UserChoiceContext";

import "../styles/Routines.css";

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
            <>
              <div key={routine.type} id="routinez">
                <p className="routine-description">{routine.routine}</p>
              </div>
              <Login />
            </>
          );
        })
      )}
    </div>
  );
}
