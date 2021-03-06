import { Spin } from "antd";
import { useContext, useEffect } from "react";
import { ResultsContext } from "../context/ResultsContext";
import { UserChoiceContext } from "../context/UserChoiceContext";

import "../styles/Routines.css";

export default function Routines() {
  const { routines, setRoutines } = useContext(ResultsContext);
  const { type } = useContext(UserChoiceContext);

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
        <Spin size="large" />
      ) : (
        routines.map((routine) => {
          return (
            <div id="outer-div">
              <div key={routine.type} id="routine-outer">
                <p className="routine-description">{routine.routine}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
