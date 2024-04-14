import { useState } from "react";
import style from "./index.module.css";

function createAnnouncement(team, points, homeTeamScore, awayTeamScore) {
  const pointsPronouns = points === 1 ? "taska" : "taskus";
  return `Komanda ${team} imete ${points} ${pointsPronouns} (${homeTeamScore}:${awayTeamScore})`;
}

function App() {
  const [homeTeamScore, setHomeTeamScore] = useState(0);
  const [awayTeamScore, setAwayTeamScore] = useState(0);
  const [announcements, setAnnouncements] = useState([]);

  function handleScore(team, points, setState) {
    const announcement = createAnnouncement(
      team,
      points,
      team === "home" ? homeTeamScore + +points : homeTeamScore,
      team === "away" ? awayTeamScore + +points : awayTeamScore
    );

    setAnnouncements((prevValue) => [announcement, ...prevValue]);

    setState((prevState) => prevState + points);
  }

  function onClickHandler(team) {
    return function (event) {
      const points = +event.target.value;

      return team === "home"
        ? handleScore(team, points, setHomeTeamScore)
        : handleScore(team, points, setAwayTeamScore);
    };
  }

  // const onClickHandler = (team) => (event) => team === "home"
  //       ? handleScore(team, points, setHomeTeamScore)
  //       : handleScore(team, points, setAwayTeamScore);

  return (
    <>
      <header>
        <nav className={style.mainNav}></nav>
      </header>

      <main>
        <h1 className={style.mainTitle}>Basketball page</h1>

        <div className={style.inputContent}>
          <div className={style.team}>
            <button
              onClick={onClickHandler("home")}
              value={1}
              className={style.btn}
            >
              1
            </button>
            <button
              onClick={onClickHandler("home")}
              value={2}
              className={style.btn}
            >
              2
            </button>
            <button
              onClick={onClickHandler("home")}
              value={3}
              className={style.btn}
            >
              3
            </button>
          </div>
          <div className={style.screen}>
            {homeTeamScore}:{awayTeamScore}
          </div>
          <div className={style.team}>
            <button
              onClick={onClickHandler("away")}
              value={1}
              className={style.btn}
            >
              1
            </button>
            <button
              onClick={onClickHandler("away")}
              value={2}
              className={style.btn}
            >
              2
            </button>
            <button
              onClick={onClickHandler("away")}
              value={3}
              className={style.btn}
            >
              3
            </button>
          </div>
        </div>

        <h1>History</h1>
        <ul className={style.history}>
          {announcements.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
