export function Header(props) {
   const { score, highScore } = props;

   return (
      <header>
         <h1>Memory Card</h1>
         <div className="scores">
            <p>Score: {score}</p>
            <p>High Score: {highScore}</p>
         </div>
      </header>
   );
}
