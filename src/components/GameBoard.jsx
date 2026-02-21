import { useState, useEffect } from "react";

import { Card } from "./Card";

export function GameBoard(props) {
   const [deck, setDeck] = useState([]);

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
         setDeck(cards);
      }

      fetchCardData();
   }, [props.cardAmount]);

   return (
      <ul className="game-board">
         {deck.map((data) => (
            <li key={data.id}>
               <Card data={data}></Card>
            </li>
         ))}
      </ul>
   );
}
