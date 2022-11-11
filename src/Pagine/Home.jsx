/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import Contatti from "../Componenti/ListaContatti";
import Chat from "../Componenti/Chat";
import "./Home.css";
import getContatti from "../Functions/Store"

function Home() {
  const [select, setSelect] = useState();
  const [ListaContatti, setContatti] = useState(getContatti());


  var setSel = (e) => {
    setSelect(e.target.innerText.split("\n")[0]);
  };

  var setLista = (e) => {
    setContatti(e)
  };

  return (
    <div className="HomeContent">
      <Contatti SetSelection={setSel} listaContatti={ListaContatti} setContact={setLista} />
      <Chat UserName={select} />
    </div>
  );
}

export default Home;
