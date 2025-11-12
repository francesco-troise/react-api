//Import di Axios
import axios from "axios";

//Import di "useState" ed "useEffect"
import { useState } from "react";
import { useEffect } from "react";

export default function CardCollector() {
  //Ogni state contiene l'array di risposta relativo alla chimata Api
  const [actress, setAttrici] = useState([]);
  const [actors, setActors] = useState([]);

  //funzione che gestisce la chiamata api per "actress"
  function CallActress() {
    axios
      .get("  https://lanciweb.github.io/demo/api/actresses/")
      .then((res) => setAttrici(res.data));
  }

  //funzione che gestisce la chiamata api per "actrors"
  function CallActors() {
    axios
      .get(" https://lanciweb.github.io/demo/api/actors/")
      .then((res) => setActors(res.data));
  }

  //Effettua le chiamate, e dunque ne salva i dati negli state, ad ogni render del componente
  useEffect(() => {
    CallActress();
    CallActors();
  }, []);

  /*    
    Necessario per non mostrare log vuoti al primo render, ma aspetta quando gli state saranno rimepiti
    Aspetta cioè che il primo render sia completo, cosi parte il primo useEffect che riempie gli state
    Al riempimento deli state parte un nuovo render che ora arriva fino al secondo useEffect, che può mostrare contenuto
  */
  useEffect(() => {
    if (actress.length != 0 && actors.length != 0) {
      console.log(actress);
      console.log(actors);
    }
  }, [actress, actors]);

  return;
}
