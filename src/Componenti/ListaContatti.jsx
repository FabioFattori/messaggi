/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./ListaContatti.css"

function ListaContatti({SetSelection}) {
  var lista = [
    {
      Nome: "Il bro",
      Cognome: "cognome",
    },
    {
      Nome: "2",
      Cognome: "cognome",
    },
  ];

  const [show, setShow] = useState();

  useEffect(() => {
    setShow(ShowContatti());
  }, []);

  function ShowContatti() {
    var m = [lista.length];
    for (let index = 0; index < lista.length; index++) {
      m[index] = (
        <div className="Contatto" key={index} onClick={SetSelection}>
          <h1 className="TitoloContatto">{lista[index].Nome}</h1>
          <p className="SubtitlesContatto">{lista[index].Cognome}</p>
        </div>
      );
    }

    return m;
  }

  

  return <div className="ListaContatti">{show}</div>;
}

export default ListaContatti;
