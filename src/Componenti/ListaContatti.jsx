/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./ListaContatti.css";
import SearchBar from "./SearchBar";
import { Divider } from "@chakra-ui/react";

function ListaContatti({ SetSelection, listaContatti, setContact }) {
  const [show, setShow] = useState();

  useEffect(() => {
    setShow(ShowContatti());
  }, [listaContatti]);

  function ShowContatti() {
    var m = [listaContatti.length];

    if (listaContatti.length === 0) {
      m = <p>Nessun Contatto Trovato</p>;
    } else {
      for (let index = 0; index < listaContatti.length; index++) {
        m[index] = (
          <div className="Contatto" key={index} onClick={SetSelection}>
            <h1 className="TitoloContatto">{listaContatti[index].Nome}</h1>
            <p className="SubtitlesContatto">{listaContatti[index].Cognome}</p>
          </div>
        );
      }
    }

    return m;
  }

  return (
    <div>
      <div className="HeaderContatti">
        Le Mie Chat:
      </div>
      <div className="ListaContatti">
        <SearchBar setContatti={setContact} />
        <Divider className="divider" />
        <div>{show}</div>
      </div>
    </div>
  );
}

export default ListaContatti;
