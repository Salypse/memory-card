export function randomizeDeck(deck) {
   const randomDeck = [];

   while (deck.length > 0) {
      const randomIndex = Math.floor(Math.random() * deck.length);
      const dataCopy = { ...deck[randomIndex] };

      randomDeck.push(dataCopy);
      deck.splice(randomIndex, 1);
   }

   return randomDeck;
}
