export function Card(props) {
   const { handleScore, data } = props;

   return (
      <button className="card" onClick={() => handleScore(props.data.id)}>
         <img className="card-image" src={data.image}></img>
         <p className="card-text">{data.name}</p>
      </button>
   );
}
