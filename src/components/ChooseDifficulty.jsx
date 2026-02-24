import { useState } from "react";
import { GameBoard } from "./GameBoard";

export function ChooseDifficulty() {
   const [cardAmount, setCardAmount] = useState(0);
   const [score, setScore] = useState(0);

   function toggleButtons() {
      const difficultyButtons = document.querySelector(".difficulty-selection");
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
         <GameBoard cardAmount={cardAmount} setScore={setScore}></GameBoard>
      </>
   );
}
