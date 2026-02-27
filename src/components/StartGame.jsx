import { useState } from "react";
import { Header } from "./Header";
import { GameBoard } from "./GameBoard";

import "../styles/Buttons.css";

export function StartGame() {
   const [cardAmount, setCardAmount] = useState(0);
   const [score, setScore] = useState(0);
   const [highScore, setHighScore] = useState(
      localStorage.getItem("highScore") || 0,
   );
   const [startGame, setStartGame] = useState(false);

   function toggleButtons() {
      setStartGame((prev) => (prev === true ? false : true));
   }

   return (
      <>
         <Header score={score} highScore={highScore}></Header>
         <div className="content">
            {!startGame && (
               <section className="start-game">
                  <p>
                     HOW TO PLAY: TO SCORE A POINT CLICK A CHARACTER THAT YOU
                     HAVE NOT PRESSED BEFORE
                  </p>
                  <div className="button-section">
                     <button
                        onClick={() => [toggleButtons(), setCardAmount(5)]}
                     >
                        Easy
                     </button>
                     <button
                        onClick={() => [toggleButtons(), setCardAmount(10)]}
                     >
                        Medium
                     </button>
                     <button
                        onClick={() => [toggleButtons(), setCardAmount(15)]}
                     >
                        Hard
                     </button>
                  </div>
               </section>
            )}

            {startGame && (
               <GameBoard
                  cardAmount={cardAmount}
                  score={score}
                  setScore={setScore}
                  setHighScore={setHighScore}
                  toggleButtons={toggleButtons}
               ></GameBoard>
            )}
         </div>
      </>
   );
}
