import "../styles/GameBoard.css";
import { useState, useEffect, useRef } from "react";

import { Card } from "./Card";
import { randomizeDeck } from "../utilities/randomizeDeck";

export function GameBoard(props) {
   const { score, setScore, setHighScore, toggleButtons } = props;
   const cardAmount = useRef(props.cardAmount);

   const [deck, setDeck] = useState([]);
   const [clickedCards, setClickedCards] = useState([]);
   const [isWon, setIsWon] = useState(false);

   useEffect(() => {
      async function fetchCardData() {
         const cards = [];

         for (let i = 1; i <= cardAmount.current; i++) {
            try {
               const response = await fetch(
                  `https://dragonball-api.com/api/characters/${i}`,
               );
               if (!response.ok) {
                  throw new Error(
                     `Failed to fetch ID: ${i}'s data (Status: ${response.status})`,
                  );
               }
               const data = await response.json();
               cards.push(data);
            } catch (error) {
               console.error("Error:", error);
            }
         }
         setDeck(randomizeDeck(cards));
         setIsWon(false);
      }

      fetchCardData();
   }, [cardAmount]);

   useEffect(() => {
      if (score >= cardAmount.current) {
         setIsWon(true);
      }
   }, [score]);

   useEffect(() => {
      setHighScore((prev) => (score > prev ? score : prev));
   }, [score, setHighScore]);

   function handleScore(id) {
      if (clickedCards.includes(id)) {
         //Game reset on failure
         setClickedCards([]);
         setScore(0);
      } else {
         setClickedCards((prev) => [...prev, id]);
         setScore((prev) => prev + 1);
      }
      setDeck((prev) => randomizeDeck(prev));
   }

   //Used when user completes difficulty and wants to try it again
   function resetBoard() {
      setClickedCards([]);
      setIsWon(false);
      setScore(0);
   }

   return (
      <>
         {!isWon && (
            <ul className="game-board">
               {deck.map((data) => (
                  <li key={data.id}>
                     <Card data={data} handleScore={handleScore}></Card>
                  </li>
               ))}
            </ul>
         )}
         {isWon && (
            <div className="game-over button-section">
               <button onClick={() => resetBoard()}>Reset</button>{" "}
               <button onClick={() => [toggleButtons(), resetBoard()]}>
                  Menu
               </button>
            </div>
         )}
      </>
   );
}
