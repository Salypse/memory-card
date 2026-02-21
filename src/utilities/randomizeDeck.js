export function randomizeDeck(deck) {
   const deckCopy = [...deck];
   const randomDeck = [];

   while (deckCopy.length > 0) {
      const randomIndex = Math.floor(Math.random() * deckCopy.length);
      const dataCopy = { ...deckCopy[randomIndex] };

      randomDeck.push(dataCopy);
      deckCopy.splice(randomIndex, 1);
   }

   return randomDeck;
}
