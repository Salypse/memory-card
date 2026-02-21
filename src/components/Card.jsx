export function Card(props) {
   return (
      <button className="card">
         <img className="card-image" src={props.data.image}></img>
         <p className="card-text">{props.data.name}</p>
      </button>
   );
}
