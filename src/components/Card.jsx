export default function Card({ actor }) {
  return (
    <div>
      <div>{/*<img className="card-img-top" />*/}</div>
      <div>
        <h4></h4>
        <ul>
          {/*  .entries restitusce un array di array, dove ogni sotto array è una coppia chiave-valore dell oggetto
            .map mappa l'arrey di arrey, prende il singolo sottoarrey e lo destruttura in key e value*/}
          {Object.entries(actor).map(([key, value], index) => (
            <>
              {key != "id" && (
                <li key={index}>
                  {key}: {value}
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
