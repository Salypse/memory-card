import { useState, useEffect } from "react";

import { Card } from "./Card";
import { randomizeDeck } from "../utilities/randomizeDeck";

export function GameBoard(props) {
   const [deck, setDeck] = useState([]);
   const [clickedCards, setClickedCards] = useState([]);

   useEffect(() => {
      async function fetchCardData() {
         const cards = [];

         for (let i = 1; i <= props.cardAmount; i++) {
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
      }

      fetchCardData();
   }, [props.cardAmount]);

   function handleScore(id) {
      if (clickedCards.includes(id)) {
         //Game reset
         setClickedCards([]);
         props.setScore(0);
      } else {
         setClickedCards((prev) => [...prev, id]);
         props.setScore((prev) => prev + 1);
      }
      setDeck((prev) => randomizeDeck(prev));
   }

   return (
      <ul className="game-board">
         {deck.map((data) => (
            <li key={data.id}>
               <Card data={data} handleScore={handleScore}></Card>
            </li>
         ))}
      </ul>
   );
}
