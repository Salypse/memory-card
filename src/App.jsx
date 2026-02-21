import { useState } from "react";
import "./App.css";

import { GameBoard } from "./components/GameBoard";

function App() {
   const [score, setScore] = useState(0);

   return (
      <>
         <p>Score: {score}</p>
         <GameBoard
            //Test card amount
            //Will have difficulty setting
            cardAmount={3}
            score={score}
            setScore={setScore}
         ></GameBoard>
      </>
   );
}

export default App;
