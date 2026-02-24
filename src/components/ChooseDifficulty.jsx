import { useState } from "react";
import { GameBoard } from "./GameBoard";

export function ChooseDifficulty() {
   const [cardAmount, setCardAmount] = useState(0);
   const [score, setScore] = useState(0);
   const [startGame, setStartGame] = useState(false);

   function toggleButtons() {
      const difficultyButtons = document.querySelector(".difficulty-selection");
      setStartGame(true);
      difficultyButtons.remove();
   }

   return (
      <>
         <p>Score: {score}</p>
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
         {startGame && (
            <GameBoard
               cardAmount={cardAmount}
               score={score}
               setScore={setScore}
            ></GameBoard>
         )}
      </>
   );
}
