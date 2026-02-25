import { useState } from "react";
import { GameBoard } from "./GameBoard";

export function StartGame() {
   const [cardAmount, setCardAmount] = useState(0);
   const [score, setScore] = useState(0);
   const [startGame, setStartGame] = useState(false);

   function toggleButtons() {
      setStartGame((prev) => (prev === true ? false : true));
   }

   return (
      <>
         <p>Score: {score}</p>
         <div className="content">
            {!startGame && (
               <section className="difficulty-selection">
                  <button onClick={() => [toggleButtons(), setCardAmount(5)]}>
                     Easy
                  </button>
                  <button onClick={() => [toggleButtons(), setCardAmount(10)]}>
                     Medium
                  </button>
                  <button onClick={() => [toggleButtons(), setCardAmount(15)]}>
                     Hard
                  </button>
               </section>
            )}

            {startGame && (
               <GameBoard
                  cardAmount={cardAmount}
                  score={score}
                  setScore={setScore}
                  toggleButtons={toggleButtons}
               ></GameBoard>
            )}
         </div>
      </>
   );
}
