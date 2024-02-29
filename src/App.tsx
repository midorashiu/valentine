import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "I'll think about it",
  "Don't click this button",
  "Click Yes >:(((",
  "STOP CLICKING NO!!!",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const noButtonSize = 30;
  const yesButtonSize = noCount * 20 + noButtonSize;

  function handleNoCLick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears hugging"
            src="https://media.tenor.com/L2JecNb_fUsAAAAi/mimibubu.gif"
          />
          <div className="text"> YAYAYAY!! I LOVE YOU MUAH</div>
        </>
      ) : (
        <>
          <img
            alt="bears cupid"
            src="https://media.tenor.com/3rMT-kpWU5gAAAAi/tkthao219-bubududu.gif"
          />
          <div>Will you be my valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize, backgroundColor: "lightgreen" }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              className="noButton"
              style={{ fontSize: noButtonSize, backgroundColor: "lightcoral" }}
              onClick={handleNoCLick}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
