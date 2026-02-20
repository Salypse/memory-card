export async function getCardData(id) {
   try {
      const response = await fetch(
         `https://dragonball-api.com/api/characters/${id}`,
      );
      if (!response.ok) {
         throw new Error(
            `Failed to fetch ID: ${id}'s data (Status: ${response.status})`,
         );
      }
      return await response.json();
   } catch (error) {
      console.error("Error:", error);
   }
}
